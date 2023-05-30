import {IEntityModel, IPaginatorModel} from "@models/common";

export interface IServerResponse<T> extends IEntityModel {
  data?: T;
  token?: string;
  message?: MessageModel;
  meta?: IPaginatorModel;
  links?: Links;
}

export class ServerResponse<T> implements IServerResponse<T> {
  constructor(
    public token?: string,
    public data?: T,
    public message?: MessageModel
  ) {
  }
}

export interface IMessageModel extends IEntityModel {
  summary?: string;
  detail?: string;
  status?: number;
}

export class MessageModel implements IMessageModel {
  constructor(
    public summary?: string,
    public detail?: string,
    public status?: number,
  ) {
  }
}

interface Links {
  first: string;
  last: string;
  prev: string;
  next: string;
}
