import React from 'react';

function Button({ callback }): React.ReactElement {
  return (
    <button
      onClick={callback}
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Button
    </button>
  );
}
export default Button;