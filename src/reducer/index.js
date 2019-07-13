import { defaultConfiguration, defaultResults } from '../const';

export default (state, action) => {
    switch (action.type) {
        case 'submitConfiguration':
            return {
                ...state,
                configuration: action.newConfiguration,
                result: action.newResult,
                resultIsActive: true,
            };
        case 'cancelConfiguration':
            return {
                ...state,
                configuration: defaultConfiguration,
                result: defaultResults,
                resultIsActive: false,
            };
        case 'setConfiguration':
            return {
                ...state,
                configuration: action.newConfiguration,
            };
        case 'setResultIsActive':
            return {
                ...state,
                resultIsActive: action.newResultIsActive,
            };
        default:
            return state;
    }
};
