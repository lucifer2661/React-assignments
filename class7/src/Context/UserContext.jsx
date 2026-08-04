import React from 'react'

export const UserDataContext = React.createContext();

const UserContext = (props) => {
    const user = [
  {
    id: 1,
    name: "Aditya Sharma",
    age: 24,
    email: "aditya.sharma@example.com",
    city: "Delhi",
    role: "Frontend Developer",
    isActive: true,
  },
  {
    id: 2,
    name: "Priya Verma",
    age: 22,
    email: "priya.verma@example.com",
    city: "Mumbai",
    role: "UI/UX Designer",
    isActive: false,
  },
  {
    id: 3,
    name: "Rahul Singh",
    age: 26,
    email: "rahul.singh@example.com",
    city: "Bengaluru",
    role: "Backend Developer",
    isActive: true,
  },
  {
    id: 4,
    name: "Neha Gupta",
    age: 23,
    email: "neha.gupta@example.com",
    city: "Pune",
    role: "QA Engineer",
    isActive: true,
  },
  {
    id: 5,
    name: "Arjun Mehta",
    age: 25,
    email: "arjun.mehta@example.com",
    city: "Chandigarh",
    role: "Full Stack Developer",
    isActive: false,
  },
];


  return (

   <UserDataContext.Provider value={user}>
    {props.children}
   </UserDataContext.Provider>
  )
}

export default UserContext