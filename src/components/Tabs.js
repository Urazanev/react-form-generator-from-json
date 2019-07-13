import React from 'react';
import { useStateValue } from '../StateProvider';


export default () => {
  const [{ resultIsActive }, dispatch] = useStateValue();
  return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
              className={`nav-link ${resultIsActive ? '' : 'active'}`}
              href="#"
              onClick={() => dispatch({
                type: 'setResultIsActive',
                newResultIsActive: false,
              })}
          >
            Config
          </button>
        </li>
        <li className="nav-item">
          <button
              className={`nav-link ${resultIsActive ? 'active' : ''}`}
              href="#"
              onClick={() => dispatch({
                type: 'setResultIsActive',
                newResultIsActive: true,
              })}
          >
            Result
          </button>
        </li>
      </ul>
  );
};
