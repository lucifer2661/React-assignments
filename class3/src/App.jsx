import  React, { useState } from "react"
import "./App.css";
import UserCard from "./UserCard";

const App = () => {

 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [age, setAge] = useState("");
 const [mobileno, setmobileno] = useState("");
const [formData, setFormData] = useState([]);

const handleSubmit = (e) => {
  e.preventDefault();
  const newFormData = { name, 
    email, age, mobileno };
  setFormData([...formData, newFormData]);
  setName("");
setEmail("");
setAge("");
setmobileno("");
  console.log("Form Data:", formData);

}

  return (
    <><div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name" />

        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email" />

        <input
          type="number"
          value={age}
          required
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age" />

        <input
          type="tel"
          value={mobileno}
          required
          onChange={(e) => setmobileno(e.target.value)}
          placeholder="Enter your mobile number" />

        <button type="submit">Submit</button>

      </form>


    </div>
    <div className="user-cards">
        {formData.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div></>

  )
}

export default App