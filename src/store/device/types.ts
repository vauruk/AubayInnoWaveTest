/**
 * @author Vanderson de Moura Vauruk
 *
 */
import {IDevice} from '../../views/EditDevice/types';

export interface SetField {
  fieldName: FieldLabel;
  value: string | number | undefined;
}

export interface UserLoggedResponse {
  token: string | undefined;
  access_token: string;
  token_type: string;
  expires: number;
  role: string;
}

export interface FormState {
  token: string | undefined;
  loading: boolean;
  submitError: string | undefined;
  deviceData: IDevice | undefined;
  listDevice: Array<IDevice>;
}

export enum FieldLabel {
  model = 'model',
  os = 'os',
  currentOwner = 'currentOwner',
  notes = 'notes',
}
