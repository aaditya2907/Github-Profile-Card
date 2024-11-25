import React, { useEffect, useState } from "react";
import axios from "axios";
import img from "../assets/github_pic_edit.png";

function Card({ username }) {
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [bio, setBio] = useState();
  const [followers, setFollowers] = useState();
  const [following, setFollowing] = useState();
  const [repos, setRepos] = useState();

  useEffect(() => {
    async function func() {
      try {
        const res = await axios.get(`https://api.github.com/users/${username}`);
        console.log("func called");
        console.log(res.data);
        setImage(res.data.avatar_url);
        setName(res.data.name.split(" ")[0]);
        const city = res.data.location;
        setCity(city ? `, ${city.split(" ")[0]}` : " ");
        setBio(res.data.bio || "No Bio Provided");
        setFollowers(res.data.followers);
        setFollowing(res.data.following);
        setRepos(res.data.public_repos);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    }
    func();
  }, [username]);

  return (
    <div className="flex flex-row h-screen justify-center items-center bg-zinc-800">
      <div className="h-3/5 w-80 bg-white flex flex-col relative">
        <div className="bg-zinc-500 h-2/5 flex justify-center items-center">
          <img className="h-full w-full object-cover" src={img} alt="" />
        </div>
        <div className="absolute left-20 top-28">
          <img
            src={image}
            alt=""
            className="ml-3 h-32 w-32 rounded-full relative "
          />
        </div>
        <div className="h-3/5 flex flex-col justify-between items-center">
          <div className="flex flex-row justify-center items-baseline relative top-14">
            <h1 className="text-3xl font-bold ml-2 mr-1 text-slate-800">
              {name}
            </h1>
            <p className="text-xl text-slate-500">{city}</p>
          </div>
          <div className="relative top-8 px-4 text-mg text-zinc-700">{bio}</div>

          <hr
            className="relative top-6"
            style={{ color: "black", width: "300px" }}
          />

          <div className="flex w-72 mx-3 mb-3 flex-row justify-between items-center">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-bold text-slate-600">{followers}</h3>
              <p className="text-slate-500">Followers</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-bold text-slate-600">{following}</h3>
              <p className="text-slate-500">Following</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-bold text-slate-600">{repos}</h3>
              <p className="text-slate-500">
                {repos < 2 ? "Repository" : "Repositories"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
