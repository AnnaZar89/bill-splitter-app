import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import Content from "./components/Content/Content.tsx";
import styles from "./App.module.scss";

function App() {
  const [group, addGroup] = useState(false);
  const [groupSidebar, displayGroupSidebar] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [expenseForm, showExpenseForm] = useState(false);

  const handleAddGroup = () => {
    addGroup((group) => !group);
    setSelectedGroup(null);
    showExpenseForm(false);
  };

  const getNameOfGroup = (value) => {
    displayGroupSidebar((groupSidebar) => [...groupSidebar, value]);
  };

  const handleSelection = (group) => {
    console.log(group);
    if (!groupSidebar) return;
    setSelectedGroup(group);
    // console.log(selectedGroup);
    addGroup(false);
    showExpenseForm(false);
  };
  console.log(selectedGroup);

  return (
    <div className={styles.element}>
      <Sidebar
        handleAddGroup={handleAddGroup}
        groupSidebar={groupSidebar}
        handleSelection={handleSelection}
        selectedGroup={selectedGroup}
      />
      <Content
        group={group}
        getNameOfGroup={getNameOfGroup}
        addGroup={addGroup}
        selectedGroup={selectedGroup}
        showExpenseForm={showExpenseForm}
        expenseForm={expenseForm}
      />
    </div>
  );
}

export default App;
