import React from 'react'

export const UserDataContext = React.createContext();

const UserContext = (props) => {
    const userData = {
        name: "aditya",
        email: "lalu@gmail.com"
    };
  return (

   <UserDataContext.Provider value={userData}>
    {props.children}
   </UserDataContext.Provider>
  )
}

export default UserContext