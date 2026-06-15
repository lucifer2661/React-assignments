import React, { useState }from 'react'
import './index.css';
import Card from './Card';




const App = () => {
const [userName, setUserName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [allUsers, setAllUsers] = useState([]);
const handleSubmit = (e) => {
  e.preventDefault();

  setAllUsers((prev) => [
    ...prev,
    {
      userName,
      email,
      password,
    },
  ]);

  setUserName("");
  setEmail("");
  setPassword("");
};
const onDelete = (index) => {
  const updatedUsers = [
    ...allUsers.slice(0, index),
    ...allUsers.slice(index + 1)
  ];

  setAllUsers(updatedUsers);
};



return (
  <div className="min-h-screen bg-black text-white flex flex-col items-center py-10">

    <form
      onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-96 bg-slate-900 p-6 rounded-xl shadow-lg"
    >
      <input
        type="text"
        placeholder="Enter your name"
        className="border-2 border-white rounded-md p-2 bg-black text-white"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter your email"
        className="border-2 border-white rounded-md p-2 bg-black text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter your password"
        className="border-2 border-white rounded-md p-2 bg-black text-white"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 rounded-md p-2 font-semibold"
      >
        Submit
      </button>
    </form>

<div style={{marginTop: "80px"}} className="flex flex-wrap justify-center gap-6 px-6 border-2 border-red-500">      {allUsers.map((user, index) => (
        <Card
          key={index}
          user={user}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>

  </div>
);

 
}

export default App