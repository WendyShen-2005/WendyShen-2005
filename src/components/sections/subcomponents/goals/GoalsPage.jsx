import React, { useState, useMemo } from "react";
import { goals } from "./goalsData";
import GoalItem from "./GoalItem";
import "./goals.css";

export default function GoalsPage() {
  const [selectedGoalId, setSelectedGoalId] = useState(goals[0]?.id ?? null);

  const selectedIndex = useMemo(() => {
    return goals.findIndex((g) => g.id === selectedGoalId);
  }, [selectedGoalId]);

  const progressPercent = useMemo(() => {
    if (selectedIndex < 0) return 0;
    if (goals.length <= 1) return 100;
    return (selectedIndex / (goals.length - 1)) * 100;
  }, [selectedIndex]);

  const selectedGoal = goals.find((g) => g.id === selectedGoalId) || null;

  return (
    <div id="goals-page" className="goals-page">
      <h1 className="goals-header">Career Goals</h1>
      <p className="goals-sub">
        A clear roadmap of the milestones I’m actively pursuing as I build a career in cybersecurity.
      </p>

      <div className="goals-content">
        <div className="timeline" role="list">
          {/* light line */}
          <div className="timeline-base" />

          {/* active progress line that fills down to the selected node */}
          <div
            className="timeline-progress"
            style={{ height: `${progressPercent}%` }}
            aria-hidden
          />

          {goals.map((goal, idx) => (
            <GoalItem
              key={goal.id}
              goal={goal}
              index={idx}
              total={goals.length}
              isSelected={goal.id === selectedGoalId}
              onClick={() => setSelectedGoalId(goal.id)}
            />
          ))}
        </div>

        <aside className="goal-details" aria-live="polite">
          {selectedGoal ? (
            <div>
              <h2 style={{fontWeight:"normal"}}>{selectedGoal.title}</h2>

            <h4 style={{fontWeight:"normal"}}>SMART Breakdown</h4>
              <ul>
                <li style={{marginBottom:"10px"}}><span style={{color:"grey", fontWeight:"normal", fontWeight:"normal"}}>Specific:</span> {selectedGoal.smart.specific}</li>
                <li style={{marginBottom:"10px"}}><span style={{color:"grey", fontWeight:"normal"}}>Measurable:</span> {selectedGoal.smart.measurable}</li>
                <li style={{marginBottom:"10px"}}><span style={{color:"grey", fontWeight:"normal"}}>Achievable:</span> {selectedGoal.smart.achievable}</li>
                <li style={{marginBottom:"10px"}}><span style={{color:"grey", fontWeight:"normal"}}>Relevant:</span> {selectedGoal.smart.relevant}</li>
                <li style={{marginBottom:"10px"}}><span style={{color:"grey", fontWeight:"normal"}}>Time-Bound:</span> {selectedGoal.smart.timebound}</li>
              </ul>
            </div>
          ) : (
            <div>
              <em>Select a goal to see details</em>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
