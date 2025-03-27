import React from "react";
import ReactScoreIndicator from "react-score-indicator";

const scoreIndicator = ({value, maxValue}) => {
    return (
      <div className="indicator w-auto mt-9">
        <span className="w-auto">
          <ReactScoreIndicator
            value={value}
            maxValue={maxValue}
            maxAngle={260}
            width={300}            
            lineWidth={29}
          />
        </span>
      </div>
    );
};
export default scoreIndicator;