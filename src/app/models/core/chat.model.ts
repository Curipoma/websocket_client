import {IEntityModel} from "@models/common";

export interface IChat extends IEntityModel {
  message: string;
}

export class Chat implements IChat {
  constructor(
    public id: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date,
    public message: string,
  ) {
  }
}
