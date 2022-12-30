import React from "react";

const Logout = props => {
    const removeToken = () => {
      props.setToken('')
      props.setCToken('')
      
    }
  return (
   
      <button
        className="bg-green-500 rounded-full px-10 py-2" 
        onClick={removeToken}
      >
        <div className="font-gotham">LOGOUT</div>
      </button>
    
  );
}
export default Logout
