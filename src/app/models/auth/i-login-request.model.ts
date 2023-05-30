export interface ILoginRequestModel {
  email: string;
  password: string;
}

export class LoginRequestModel implements ILoginRequestModel {
  constructor(
    public email: string,
    public password: string,
  ) {
  }
}
