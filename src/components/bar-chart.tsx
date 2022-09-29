import React from 'react';

const BarChart = () => {
  return (
    <div className="h-44 flex justify-center items-end">
      <div
        className="w-10 flex items-center justify-center mr-2 bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-md"
        style={{ height: '55%' }}
      >
        {' '}
        55%
      </div>
      <div
        className="w-10 flex items-center justify-center bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-md"
        style={{ height: '45%' }}
      >
        {' '}
        45%
      </div>
    </div>
  );
};

export default BarChart;
