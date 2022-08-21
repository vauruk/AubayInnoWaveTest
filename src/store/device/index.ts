import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FormState, SetField} from './types';

import {IDevice} from '../../views/EditDevice/types';

let device: IDevice = {
  os: undefined,
  model: undefined,
  notes: undefined,
  currentOwner: undefined,
};

const deviceValue: IDevice = {
  os: 'ios',
  model: 'Sansung',
  notes: 'teste dsajlk jl djsakl jlkdsa',
  currentOwner: 'Vanderson',
  id: '34333434',
};
const listDevice: [IDevice] = [];
listDevice.push(deviceValue);
listDevice.push(deviceValue);

export const initialState: FormState = {
  loading: false,
  submitError: undefined,
  token: 'undefined',
  deviceData: device,
  listDevice: listDevice,
};

export const deviceFormSlice = createSlice({
  name: 'deviceForm',
  initialState,
  reducers: {
    setField(state: FormState, action: PayloadAction<SetField>) {
      const {fieldName, value} = action.payload;
      const newstate = {...state};
      console.log('setField', fieldName, value);
      newstate.deviceData = {...newstate.deviceData, [fieldName]: value};
      return newstate;
    },
    fetchSave(state: FormState) {
      const newstate = {...state};
      newstate.submitError = undefined;
      return newstate;
    },
  },
});

export const {setField, fetchSave} = deviceFormSlice.actions;

export default deviceFormSlice.reducer;
