import {clearError} from '../store/action';
import {store} from '../store';
import { setError } from '../store/error-process/error-process';

const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearError());
};

export default processErrorHandle;
