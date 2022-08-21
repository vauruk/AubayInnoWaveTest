/**
 * {
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJtaWEuY2lhbGF6ZXIuY29tLmJyIiwic2NvcGUiOiJ0b2tlbjphYzp1c2VyOmltcCIsImF1ZCI6ImFwcGNpYSIsImlhdCI6MTY1ODQ1Mjg2NSwiZXhwIjoxNjU5NzQ4ODY1LCJzdWIiOiJNdz09Iiwicm9sZSI6Im93bmVyIn0.sVnhAsvEA5Et6Ghmb599KNOaML-26posQ5mKAuUHRNjKZFc2hKMpYF4S20tDaOqLHZB7_gPjum_UTg9tI5v8dKafAhgad8TFX-xWyNjkgfmyVBJHlQZayn_AxshkssqNFhyKaa1RD4sP3WY-KiB-aOZcW191nANFxOp5tGoJ8PSk5Dj1IAd0w-Vya-a0y99i-KuEmb82IqfdTVx17qDOQxzjo4UlbbBSoFthazXXPpbAri7jFqH1vAqNuqyMnsXFkrG2fwUDwkCZ5LduSW80YKoVrG7iOcbc3Gmj9wqndi6BY2K8f9R9VQn275p4izaJyOspOtqSsoKuUfcDxplSlIohSGreWyaCtSpmTToEf7QPgeO5V345zNR3GQyGCzqtWdeqeObEmgn-CfIHHUvRIR8wna5Ukjhi-j-At38qRQWZ_vjjh5VIm3x_bFi8oAXhdPu0D_kpHJUEDVomdSiMP6FfI3Ay6Ee5m_oqgda-fHjr_TDTp6jqI9q4HqV1xDyN1KDMz1Rk7HSR8ypP23vkANm36JQWCDXSyW1Y0Vmmvwqdj9Rb_30Ps_qeIlyK8CvDHdtJgqCo3dXdQoxrfHwPa96IHImKe7im_k6lHqlDd8rRV7rLsfbohPGIalOgiIfDQ_W5e60IMH_EKJ6m6GyqMGwbnx-7z2bmJuMFRLGHOzQ",
    "token_type": "Bearer",
    "expires": 1659748865,
    "role": "owner"
}
*/

export interface IAuthResponse {
  access_token: string;
  token_type: string;
  expires: number;
  role: string;
}

export interface IAuthData {
  user: string | number | undefined;
  password: string | number | undefined;
}
