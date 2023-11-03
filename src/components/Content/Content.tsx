import React, { useState } from "react";
import styles from "./Content.module.scss";
// import Button from "../Button/Button.tsx";
// import AddUser from "../AddUser/AddUser.tsx";
import AddGroup from "../AddGroup/AddGroup.tsx";
import Button from "../Button/Button.tsx";
import NewExpenseForm from "../NewExpenseForm/NewExpenseForm.tsx";

const Content = ({
  group,
  getNameOfGroup,
  addGroup,
  selectedGroup,
  expenseForm,
  showExpenseForm,
  // setSelectedGroup,
}) => {
  // const [expenseForm, showExpenseForm] = useState(false);

  const showExpense = () => {
    showExpenseForm(!expenseForm);
  };

  return (
    <div className={styles.element}>
      <AddGroup
        group={group}
        getNameOfGroup={getNameOfGroup}
        addGroup={addGroup}
        selectedGroup={selectedGroup}
      />

      {selectedGroup && !expenseForm && (
        <Button text="Add new expense" onClick={showExpense} />
      )}
      {expenseForm && <NewExpenseForm selectedGroup={selectedGroup} />}
    </div>
  );
};

export default Content;
