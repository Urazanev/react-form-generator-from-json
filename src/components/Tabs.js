import React from 'react';


export default ({resultIsActive, setResultIsActive}) => (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <button
            className={`nav-link ${resultIsActive ? '' : 'active'}`}
            href="#"
            onClick={() => setResultIsActive(false)}
        >
          Config
        </button>
      </li>
      <li className="nav-item">
        <button
            className={`nav-link ${resultIsActive ? 'active' : ''}`}
            href="#"
            onClick={() => setResultIsActive(true)}
        >
          Result
        </button>
      </li>
    </ul>
)
