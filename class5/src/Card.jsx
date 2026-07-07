import './index.css';

const Card = ({ user, onDelete }) => {
  return (
    <div className="w-80 bg-slate-900 border border-slate-700 rounded-xl p-5 shadow-lg">
      <p className="text-gray-300">
        <span className="font-semibold text-white">Name:</span>
        <br />
        {user.userName}
      </p>

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