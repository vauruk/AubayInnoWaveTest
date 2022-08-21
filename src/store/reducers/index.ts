/**
 *
 * @author Vanderson de moura Vauruk
 * 11/04/2021
 */

import {combineReducers} from '@reduxjs/toolkit';
import deviceForm from '../device';

const rootReducer = combineReducers({
  deviceForm,
});

//export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
