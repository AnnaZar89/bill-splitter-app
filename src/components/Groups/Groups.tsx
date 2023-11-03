import React from "react";
import Group from "../Group/Group.tsx";

import styles from "./Groups.module.scss";

const Groups = ({ groupSidebar, handleSelection, selectedGroup }) => {
  return (
    <div className={styles.element}>
      <Group
        groupSidebar={groupSidebar}
        handleSelection={handleSelection}
        selectedGroup={selectedGroup}
      />
      {/* <Button text="Create a new group" onClick={handleAddGroup} /> */}
    </div>
  );
};

export default Groups;
