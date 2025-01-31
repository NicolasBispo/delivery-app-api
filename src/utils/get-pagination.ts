import { ListRequest } from "../types/requests";

export function getPagination(request: ListRequest) {
  const { page = 1, perPage = 12 } = request.query;

  return {
    page: Number(page),
    perPage: Number(perPage),
  };
}
