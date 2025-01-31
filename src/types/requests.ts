import { Request } from "express";

export interface ListRequest extends Request {
  query: {
    page: string;
    perPage: string;
  };
}
export interface ShowByIdRequest extends Request {
  params: {
    id: string;
  };
}
