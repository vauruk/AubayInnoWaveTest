import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FormState, SetField} from './types';

import {IDevice} from '../../views/EditDevice/types';

let device: IDevice = {
  os: undefined,
  model: undefined,
  notes: undefined,
  currentOwner: undefined,
};

const initialDevice: IDevice = {
  os: undefined,
  model: undefined,
  notes: undefined,
  currentOwner: undefined,
  id: undefined,
};
const listDevice: [IDevice] = [];

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
      newstate.deviceData = {
        ...newstate.deviceData,
        [fieldName]: value,
      };
      return newstate;
    },
    fetchSave(state: FormState) {
      const newstate = {...state};
      if (newstate.deviceData?.id === undefined) {
        newstate.deviceData = {
          ...newstate.deviceData,
          id: Math.round(Math.random() * 99999).toString(),
        };
        newstate.listDevice.push(newstate.deviceData);
        newstate.deviceData = initialDevice;
      } else {
        let indexof = newstate.listDevice.findIndex(
          itArr => itArr.id === newstate.deviceData?.id,
        );
        let newArray = newstate.listDevice.slice();
        newArray.splice(indexof, 1);
        newstate.listDevice = newArray;
        newstate.listDevice.push(newstate.deviceData);

        newstate.deviceData = initialDevice;
        return newstate;
      }
    },
    cleanDeviceObj(state: FormState) {
      const newstate = {...state};
      newstate.deviceData = initialDevice;
      return newstate;
    },
    fetchDeleteDevice(state: FormState, action: PayloadAction<IDevice>) {
      const newstate = {...state};
      //newstate.deviceData = initialDevice;
      let indexof = newstate.listDevice.findIndex(
        itArr => itArr.id === action.payload.id,
      );
      let newArray = newstate.listDevice.slice();
      newArray.splice(indexof, 1);
      newstate.listDevice = newArray;

      return newstate;
    },
    fetchEditDevice(state: FormState, action: PayloadAction<IDevice>) {
      const newstate = {...state};
      //newstate.deviceData = initialDevice;
      newstate.deviceData = action.payload;

      return newstate;
    },
  },
});

export const {
  setField,
  fetchSave,
  cleanDeviceObj,
  fetchDeleteDevice,
  fetchEditDevice,
} = deviceFormSlice.actions;

export default deviceFormSlice.reducer;
