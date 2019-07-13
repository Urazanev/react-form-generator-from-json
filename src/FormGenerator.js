import React from 'react';
import Config from './components/Config';
import reducer from './reducer';
import { initialState } from './const';
import Result from './components/Result';
import Tabs from './components/Tabs';
import { StateProvider } from './StateProvider';

function FormGenerator() {
  return (
      <StateProvider initialState={initialState} reducer={reducer}>
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-md-6">
              <Tabs/>
              <Config/>
              <Result/>
            </div>
          </div>
        </div>
      </StateProvider>
  );
}
export default FormGenerator;
