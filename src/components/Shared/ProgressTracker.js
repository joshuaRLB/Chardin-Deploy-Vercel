import "../../css/TrackOrder.css";

const ProgressTracker = ({ stage }) => {
  const stages = [
   "Designing", "Creation in Progress", "Available for Pickup", "Completed", "Cancelled"
  ];

  let progress;
  if (stage === "Cancelled") {
    progress = 100;
  } else {
    progress = (stages.indexOf(stage) + 1) * (100 / stages.length);
  }

  const progressBarClass =
    stage === "Cancelled"
      ? "progress-bar bg-dark"
      : "text-black progress-bar pr-dark bg-success progress-bar-striped progress-bar-animated";

  return (
    <div className="progress">
      <div
        className={progressBarClass}
        role="progressbar"
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {stage}
      </div>
    </div>
  );
};

export default ProgressTracker;
