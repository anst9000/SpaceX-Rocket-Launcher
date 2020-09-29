import React from "react";

export default function MissionKey() {
  return (
    <div className="mission-key my-3">
      <p>
        <span className="mission-key-blob px-3 mr-2 bg-success" /> = Success
      </p>
      <p>
        <span className="mission-key-blob px-3 mr-2 bg-danger" /> = Fail
      </p>
    </div>
  );
}
