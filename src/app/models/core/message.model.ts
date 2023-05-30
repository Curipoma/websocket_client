import {IEntityModel} from "@models/common";

export interface IMessage extends IEntityModel {
  message: string;
}

export class Message implements IMessage {
  constructor(
    public id: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date,
    public message: string,
  ) {
  }
}
