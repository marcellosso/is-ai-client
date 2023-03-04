import React from 'react';

interface IAnswersBarChart {
  aiPercentage: string;
  humanPercentage: string;
}

const AnswersBarChart: React.FC<IAnswersBarChart> = ({
  aiPercentage,
  humanPercentage,
}) => {
  return (
    <div className="overflow-hidden text-xs flex rounded w-full ml-2">
      <div
        style={{ width: aiPercentage }}
        className="barChart shadow-none flex flex-col text-center whitespace-nowrap text-secondary justify-center bg-detail overflow-ellipsis"
        data-percentage={aiPercentage}
      >
        {aiPercentage}
      </div>
      <div
        style={{ width: humanPercentage }}
        className="barChart shadow-none flex flex-col text-center whitespace-nowrap text-secondary justify-center bg-slate-200 overflow-ellipsis"
        data-percentage={humanPercentage}
      >
        {humanPercentage}
      </div>
    </div>
  );
};

export default AnswersBarChart;
