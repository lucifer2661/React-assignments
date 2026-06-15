import React from "react";
import './index.css';

const Card = ({ user, onDelete }) => {
  return (
    <div className="w-80 bg-slate-900 border border-slate-700 rounded-xl p-5 shadow-lg">
      <h2 className="text-2xl font-bold text-cyan-400 mb-3">
        {user.userName}
      </h2>

      <p className="text-gray-300">
        <span className="font-semibold text-white">Email:</span>
        <br />
        {user.email}
      </p>

      <p className="text-gray-300 mt-2">
        <span className="font-semibold text-white">Password:</span>
        <br />
        {user.password}
      </p>

      <button
        onClick={onDelete}
        className="mt-5 w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg"
      >
        Remove
      </button>
    </div>
  );
};

export default Card;