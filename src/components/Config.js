import React, { useMemo } from 'react';
import { useStateValue } from '../StateProvider';


export const Config = () => {
  const [{ configuration, resultIsActive }, dispatch] = useStateValue();
  const handleSubmitConfiguration = useMemo(() => (e) => {
    e.preventDefault();
    try {
      dispatch({
        type: 'submitConfiguration',
        newResult: JSON.parse(configuration),
      });
    } catch (error) {
      alert(`invalid JSON format \n ${error.message}`);
    }
  }, [configuration, dispatch]);
  return (
      <form
          onSubmit={handleSubmitConfiguration}
          className={resultIsActive ? 'd-none' : 'd-block'}
      >
        <div className="row justify-content-md-center">
          <div className="">
					<textarea
              rows="20"
              cols="50"
              value={configuration}
              onChange={(e) => dispatch({
                type: 'setConfiguration',
                newConfiguration: e.target.value,
              })}
          />
          </div>
          <div className="col-md-3 offset-md-9">
            <button type="submit" className="btn btn-primary">
              Apply
            </button>
          </div>
        </div>
      </form>
  );
};

export default Config;
