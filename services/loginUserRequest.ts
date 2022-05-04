import axios from "axios";
import { apiUrl } from "../constants/apiUrl";

interface LoginUserResponse {
  status: number;
  data: any;
}

export const loginUserRequest = async (
  userTag: string
): Promise<LoginUserResponse> => {
  try {
    const req = await axios.post(`${apiUrl}/login`, { userTag });
    return {
      status: req.status,
      data: req.data,
    };
  } catch (err: any) {
    return {
      status: err?.request?.status || 500,
      data: null,
    };
  }
};
