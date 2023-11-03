import React from "react";
import Groups from "../Groups/Groups.tsx";
import Button from "../Button/Button.tsx";
import styles from "./Sidebar.module.scss";

const Sidebar = ({
  handleAddGroup,
  groupSidebar,
  handleSelection,
  selectedGroup,
}) => {
  return (
    <div className={styles.element}>
      <Groups
        groupSidebar={groupSidebar}
        handleSelection={handleSelection}
        selectedGroup={selectedGroup}
      />
      <Button text="Create a new group" onClick={handleAddGroup} />
    </div>
  );
};

export default Sidebar;
