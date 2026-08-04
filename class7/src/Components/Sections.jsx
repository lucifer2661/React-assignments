import React, { useContext } from "react";
import { UserDataContext } from "../Context/UserContext";

const Sections = () => {
  const data = useContext(UserDataContext);

  return (
    <div>
      <h1 className="text-xl">This is a section</h1>

      {data.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Sections;

