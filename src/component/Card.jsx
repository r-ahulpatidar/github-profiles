import { useEffect, useState } from "react";
import RepoName from "./RepoName";

const Card = (props) => {
  const { userData, userName, repoUrl } = props;

  const [repoData, setRepoData] = useState(null);

  const getRepos = async () => {
    try {
      const response = await fetch(repoUrl);
      const data = await response.json();
      setRepoData(data);
      // console.log(data);
      // addReposToCard(data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRepos();
  }, [repoUrl]);

  console.log("repoData", repoData);
  //   console.log("userData", userData);

  const userID = userData.name || userData.login;
  const userBio = userData.bio ? <p>{userData.bio}</p> : "";

  return (
    <div className="max-w-200 bg-violet-800 rounded-2xl shadow-lg flex p-12 mx-0 my-6">
      <div>
        <img
          src={userData.avatar_url}
          alt={userData.name}
          className="rounded-full h-36"
        />
      </div>
      <div className="text-white ml-8">
        <h2 className="mt-0">{userID}</h2>
        {userBio}
        <ul className="list-none flex justify-between p-0 max-w-100">
          <li className="flex items-center">
            {userData.followers}{" "}
            <strong className="text-sm ml-2">Followers</strong>
          </li>
          <li className="flex items-center">
            {userData.following}{" "}
            <strong className="text-sm ml-2">Following</strong>
          </li>
          <li className="flex items-center">
            {userData.public_repos}{" "}
            <strong className="text-sm ml-2">Repos</strong>
          </li>
        </ul>
        <RepoName repoData={repoData} />
      </div>
    </div>
  );
};

export default Card;
