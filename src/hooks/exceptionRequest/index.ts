import consoleDebug from '../../util/debugMode';
import {ExceptionRequestType} from './types';

const useExceptionRequest = () => {
  const handleException = (props: ExceptionRequestType) => {
    const {
      response: {data},
    } = props.error;
    __DEV__ &&
      consoleDebug(
        true,
        `Function: ${props.nameFunction} - Error:`,
        props.error,
        '\n -->> Message Error: ',
        data.error,
      );
    return props.thunkAPI.rejectWithValue({...data});
  };

  return {handleException};
};

export default useExceptionRequest;
