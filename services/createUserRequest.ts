import axios from "axios";
import { apiUrl } from "../constants/apiUrl";

interface Props {
  status: number;
  data: any;
}

export const createUserRequest = async (userTag: string): Promise<Props> => {
  try {
    const req = await axios.post(`${apiUrl}/create-user`, { userTag });
    return {
      status: req.status,
      data: req.data,
    };
  } catch (err: any) {
    return {
      status: err?.request?.status || 500,
      data: [],
    };
  }
};
