import React from "react";

const UserGreeting = (props) => {
  return props.isLoggedIn ? (
    <h2>Welcome {props.username}</h2>
  ) : (
    <h2>please login to continue</h2>
  );
};

export default UserGreeting;
