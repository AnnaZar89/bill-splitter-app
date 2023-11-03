import React from "react";
const NameOfUser = ({ nameOfUser }) => {
  return (
    <>
      {nameOfUser.map((user: string, i: number) => (
        <div key={nameOfUser[i]}>{user}</div>
      ))}
    </>
  );
};

export default NameOfUser;
