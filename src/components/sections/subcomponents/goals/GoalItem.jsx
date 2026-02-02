import React from "react";

export default function GoalItem({ goal, onClick, isSelected, index, total }) {
  return (
    <div className={`goal-item ${isSelected ? "selected" : ""}`} onClick={onClick} role="listitem">
      <div className={`goal-node ${isSelected ? "active" : ""}`} />

      <div className="goal-content">
        <h3>{goal.title}</h3>
      </div>
    </div>
  );
}
