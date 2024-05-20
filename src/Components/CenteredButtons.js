// src/components/CenteredButtons.js
/*import React from 'react';

const CenteredButtons = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button 1
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Button 2
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Button 3
        </button>
      </div>
    </div>
  );
};

export default CenteredButtons;*/
import React from 'react';

const CenteredButtons = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex items-center space-x-4 relative left-[-50%] mt-[-40%]">
        <span className="text-lg font-semibold">Filter Status By:</span>
        <button style={{ cursor: 'pointer' }} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-full text-sm">
          Accepted
        </button>
        <button style={{ cursor: 'pointer' }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full text-sm">
          Described
        </button>
        <button style={{ cursor: 'pointer' }} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-full text-sm">
          Pending
        </button>
      </div>
    </div>
  );
};

export default CenteredButtons;










