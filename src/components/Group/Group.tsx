import React from "react";
import styles from "./Group.module.scss";
import cn from "classnames";
const Group = ({ groupSidebar, handleSelection, selectedGroup }) => {
  // console.log(groupSidebar);

  return (
    <>
      <div className={styles.element}>Karpacz-trip</div>

      {groupSidebar.map((group) => (
        // <div className={styles.element} onClick={() => handleSelection(group)}>
        <div
          onClick={() => handleSelection(group)}
          className={cn(
            styles.element,
            group?.nameOfGroup === selectedGroup?.nameOfGroup
              ? styles.active
              : ""
          )}
        >
          {/* {group.value.nameOfGroup} */}
          {group.nameOfGroup}
        </div>
      ))}
    </>
  );
};

export default Group;
