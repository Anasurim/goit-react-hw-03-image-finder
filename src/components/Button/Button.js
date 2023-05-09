import React from 'react';

export function Button({ onClick }) {
  return (
    <div>
      <button type="button" onClick={onClick} className="Button">
        Load more
      </button>
    </div>
  );
}
