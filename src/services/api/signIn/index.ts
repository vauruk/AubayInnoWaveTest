import {IPassengerData, IUserData} from '../../../store/device/types';
import HttpClient from '../../ApiVK';
import {IAuthData, IAuthResponse} from './types';

class SignInService {
  static signIn(authData: IAuthData): Promise<IAuthResponse> {
    return HttpClient.post<IAuthData, IAuthResponse>({
      path: '/auth',
      payload: authData,
      token: undefined,
    });
  }

  static getUserData(token: string): Promise<IUserData> {
    return HttpClient.get<IUserData>({
      path: '/user',
      token: token,
    });
  }

  static getPassengerData(token: string): Promise<IPassengerData> {
    return HttpClient.get<IPassengerData>({
      path: '/passageiros',
      token: token,
    });
  }

  //   static getProducts(text: string): Promise<ProductResponse> {
  //     return HttpClient.get<Product, ProductResponse>({
  //       path: `/search?q=${text ? text : 'a'}&sort=lowestPrice`,
  //       token: undefined,
  //     });
  //   }
}
export default SignInService;
