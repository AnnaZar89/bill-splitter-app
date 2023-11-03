import React from "react";
import Button from "../Button/Button.tsx";

const NewExpenseForm = ({ selectedGroup }) => {
  return (
    <form>
      <label>Title</label>
      <input />
      <div>
        <label>Amount</label>
        <input />
        <span>{selectedGroup.currency}</span>
      </div>
      <div>
        {selectedGroup.users.map((user) => (
          <>
            <span>{user}'s expenses:</span>
            <input />
          </>
        ))}
      </div>
      <label>Payed by</label>
      <select>
        {selectedGroup.users.map((user) => (
          <option>{user}</option>
        ))}
      </select>
      <Button onClick={null} text="Add" />
    </form>
  );
};

export default NewExpenseForm;
