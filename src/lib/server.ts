import { IResponseToClient } from "@/types/manga";

export const responseToClient = ({
  data,
  status,
  message,
}: IResponseToClient) => {
  return {
    status,
    data,
    message,
  };
};
