/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = `${import.meta.env.VITE_BASE_URL}/api`;

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

interface Credentials {
  email: string;
  password: string;
}

type ThunkApiConfig = {
  rejectValue: string;
};

export const register = createAsyncThunk<any, Credentials, ThunkApiConfig>(
  "auth/register",
  async (credentials: Credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("/users/signup", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error: any) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const logIn = createAsyncThunk<any, Credentials, ThunkApiConfig>(
  "auth/login",
  async (credentials: Credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("/users/login", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error: any) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const logOut = createAsyncThunk<any, void, ThunkApiConfig>(
  "auth/logOut",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/users/logout");
      clearAuthHeader();
    } catch (error: any) {
      return rejectWithValue((error as Error).message);
    }
  }
);
