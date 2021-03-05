import React from 'react';

export default function resetButton(){
    function reloadPage() {
        window.location.reload();
    }

  return (
      <button onClick={() => reloadPage()}>Reset your list</button>
  );
}