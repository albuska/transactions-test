import axios from "axios";
import { AuthFormValues } from "../components/AuthForm/AuthForm";
import { ETransactionStatus, ITransaction } from "../models";

axios.defaults.baseURL = `${import.meta.env.VITE_BASE_URL}/api`;

const authHeader = {
  set(token: string) {
    console.log(token, "token");
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem("accessToken", token);
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
    localStorage.removeItem("accessToken");
  },
};

export const registerUser = async (credentials: AuthFormValues) => {
  try {
    const { data } = await axios.post("/users/register", credentials);
    authHeader.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = async () => {
  try {
    const { data } = await axios.post("/users/logout");
    authHeader.unset();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const saveTransactionsToDB = async (transactions: ITransaction[]) => {
  try {
    const { data } = await axios.post("/transactions", transactions);
    return data.transactions;
  } catch (error) {
    console.log(error);
  }
};

export const getTransactions = async () => {
  try {
    const { data } = await axios.get("/transactions");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTransaction = async (id: number) => {
  try {
    const response = await axios.delete(`/transactions/${id}`);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateTransactionStatus = async (
  id: number,
  status: ETransactionStatus
) => {
  try {
    const response = await axios.patch(`/transactions/${id}/status`, {
      status,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
