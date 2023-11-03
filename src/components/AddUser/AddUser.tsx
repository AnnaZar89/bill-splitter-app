import React, { useState } from "react";
import Button from "../Button/Button.tsx";
import NameOfUser from "../NameOfUser/NameOfUser.tsx";

const AddUser = ({ handleUserName, user, inputValue, setInputValue }) => {
  // const [inputValue, setInputValue] = useState<string>("");
  // const [user, addUser] = useState<string[]>([]);

  // const handleUserName = (e) => {
  //   e.preventDefault();
  //   if (!inputValue) return;
  //   addUser((user) => [...user, inputValue]);
  //   setInputValue("");
  // };
  return (
    <>
      <NameOfUser nameOfUser={user} />
      <div>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <Button text="Add" onClick={handleUserName} />
      </div>
    </>
  );
};

export default AddUser;
