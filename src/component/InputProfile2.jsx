import { useState } from "react";
import UserCard2 from "./UserCard2";

const InputProfile2 = () => {
  const [searchValue, setSearchValue] = useState("");
  
  

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue("");
  };

  return (
    <div className="bg-blue-900 text-white flex items-center justify-center flex-col h-screen overflow-hidden">
      <form id="search" onSubmit={handleSubmit} className="w-full max-w-2xl">
        <input
          type="text"
          placeholder="Search a Github User"
          value={searchValue}
          
          onChange={handleChange}
          className="w-full block bg-violet-800 border-none border-10 text-white p-4 mb-8 text-base shadow-lg placeholder:text-gray-100 focus:outline-none"
        />
      </form>
      <UserCard2 userName={searchValue} />
    </div>
  );
};

export default InputProfile2;
