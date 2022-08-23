import {readString} from 'react-native-csv';
import {IDevice} from '../views/EditDevice/types';

export const changeCvsToArray = (value: string) => {
  let results = readString(value);
  let newarr: Array<IDevice> = [];
  let nameAtr = results.data[0];
  console.log('nameAtr', nameAtr);
  results.data.forEach((cvsObj, index) => {
    let objControl: IDevice = {};
    if (index !== 0) {
      console.log('cvsObj', cvsObj);
      cvsObj.forEach((element, index) => {
        let obj = {
          ...objControl,
          [nameAtr[index]]: element,
        };
        objControl = obj;
        console.log('element', obj);
      });
      newarr = [...newarr, objControl];
    }
  });
  return newarr;
};
