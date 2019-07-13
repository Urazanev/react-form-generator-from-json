import React, { useState } from 'react';
import downloadFormData from '../utils/downloadFormData';
import { TEXTAREA } from '../const';
import { useStateValue } from '../StateProvider';


export const Result = () => {
  const [formData, setFormData] = useState({});
  const [{ result, resultIsActive }, dispatch] = useStateValue();
  const renderField = (item) => (
      <div
          key={item.label}
          className="form-group row"
      >
        <label className="col-md-4 col-form-label">
          {item.label}
        </label>
        <div className="col-md-8">
          {React.createElement(
              item.label === TEXTAREA ? TEXTAREA : 'input',
              {
                className: 'form-control',
                onChange: (e) => setFormData({ ...formData, [item.label]: e.target.value }),
                ...item,
              }
          )}
        </div>
      </div>
  );

  return result.items.length !== 0 ? (
      <div
          className={resultIsActive ? 'd-block' : 'd-none'}
      >
        {result.items.map(renderField)}
        <div className="row">
          <div className="col-md-2 offset-md-8">
            <button
                onClick={() => dispatch({
                  type: 'cancelConfiguration',
                })}
                className="btn btn-primary"
            >
              Cancel
            </button>
          </div>
          <div className="col-md-2">
            <button onClick={() => downloadFormData(formData)} className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
  ) : null;
};

export default Result;
