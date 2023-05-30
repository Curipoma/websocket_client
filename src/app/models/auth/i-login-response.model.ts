import {IEntityModel} from "@models/common";
import {IUserModel} from "@models/auth/i-user.model";

export interface ILoginResponseModel extends IEntityModel {
  data: IUserModel;
}
