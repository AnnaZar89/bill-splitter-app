import React, { useState } from "react";
import AddUser from "../AddUser/AddUser.tsx";
import Button from "../Button/Button.tsx";
import styles from "./AddGroup.module.scss";

const AddGroup = ({
  group,
  getNameOfGroup,
  addGroup,
  selectedGroup,

  // setSelectedGroup,
}) => {
  const [nameOfGroup, setNameOfGroup] = useState("");
  const [user, addUser] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [currency, setCurrency] = useState("pln");

  const handleGroup = (e) => {
    e.preventDefault();
    addGroup(false);
    if (!nameOfGroup) return;
    const newGroup = {
      nameOfGroup,
      currency,
      users: user,
    };
    getNameOfGroup(newGroup);
    setNameOfGroup("");
    addUser([]);
    setCurrency("pln");
    setInputValue("");

    // setSelectedGroup(null);
    // console.log(selectedGroup);
  };

  const handleUserName = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    addUser((user) => [...user, inputValue]);
    setInputValue("");
  };

  return (
    group && (
      <form className={styles.element}>
        <label>Name of the group:</label>
        <input
          type="text"
          value={nameOfGroup}
          onChange={(e) => setNameOfGroup(e.target.value)}
        />
        <select onChange={(e) => setCurrency(e.target.value)} value={currency}>
          <option value="pln">Pln</option>
          <option value="euro">Euro</option>
          <option value="usd">USD</option>
        </select>
        <label>Users:</label>
        <div>
          <AddUser
            handleUserName={handleUserName}
            user={user}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </div>
        <Button text="Sumbit" onClick={handleGroup} />
      </form>
    )
  );
};

export default AddGroup;
