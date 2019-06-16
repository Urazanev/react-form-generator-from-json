import React from 'react';

export const Config = (
    {configuration, handleSubmit, onChange, resultIsActive}
) => (
      <form
          onSubmit={handleSubmit}
          className={resultIsActive ? 'd-none' : 'd-block'}
      >
        <div className="row justify-content-md-center">
          <div className="">
          <textarea
              rows="20"
              cols="50"
              value={configuration}
              onChange={onChange}
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

export default Config;
