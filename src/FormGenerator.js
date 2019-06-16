import React, { useState, useMemo } from 'react';
import Config from './components/Config';
import { defaultConfiguration, defaultResults } from "./const";
import Result from "./components/Result";
import Tabs from "./components/Tabs";

function FormGenerator() {
  const [configuration, setConfiguration] = useState(defaultConfiguration);
  const [result, setResult] = useState(defaultResults);
  const [resultIsActive, setResultIsActive] = useState(false);

  const handleSubmitConfiguration = useMemo(() => (e) => {
    e.preventDefault();
    try {
      const parseConfiguration = JSON.parse(configuration);
      setResult(parseConfiguration);
      setResultIsActive(true);
    } catch (error) {
      alert(`invalid JSON format \n ${error.message}`);
    }
  }, [configuration]);

  const handleResultCancel = useMemo(() => () => {
    setResultIsActive(false);
    setResult(defaultResults)
  }, []);

  return (
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-6">
            <Tabs
                setResultIsActive={setResultIsActive}
                resultIsActive={resultIsActive}
            />
            <Config
                onChange={(e) => setConfiguration(e.target.value)}
                configuration={configuration}
                handleSubmit={handleSubmitConfiguration}
                resultIsActive={resultIsActive}
            />
            <Result
                resultObject={result}
                handleResultCancel={handleResultCancel}
                resultIsActive={resultIsActive}
            />
          </div>
        </div>
      </div>
  );
}

export default FormGenerator;
