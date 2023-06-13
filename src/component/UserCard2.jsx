import { useEffect, useState } from "react";
import Card from "./Card";

const API_URL = "https://api.github.com/users/";

const UserCard2 = (props) => {
  const { userName } = props;

  const [user, setUser] = useState(null);
  const [repoUrl, setRepoUrl] = useState("");

  const getUserData = async () => {
    try {
      const response = await fetch(`${API_URL}${userName}`);
      const data = await response.json();
      setUser(data);
      setRepoUrl(data.repos_url);
    } catch (error) {
      console.error(error);
    }
  };
  
  // console.log("user", user);
  // console.log(repoUrl);

  useEffect(() => {
    const handleSubmit = (event) => {
      event.preventDefault();
      getUserData();
    };

    const submit = document.getElementById("search");
    submit.addEventListener("submit", handleSubmit);

    return () => {
      submit.removeEventListener("submit", handleSubmit);
    };
  }, [userName]);

  return <>{user && <Card userData={user} userName={userName} repoUrl={repoUrl} />}</>;
};

export default UserCard2;
