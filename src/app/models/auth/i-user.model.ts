import {IEntityModel} from "@models/common";

export interface IUserModel extends IEntityModel {
  name?: string;
  email?: string;
}

export class UserModel implements IUserModel {
  constructor(
    public name?: string,
    public email?: string,
  ) {
  }
}
