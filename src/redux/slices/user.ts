import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = process.env.REACT_APP_API;

// Async thunk action for signup
export const signup = createAsyncThunk(
  "user/signup",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}/auth/signup`, data);
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const signin = createAsyncThunk(
  "user/signin",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}/auth/signin`, data);
      localStorage.setItem("mydiary-token", response.data.token);
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const userDetails = createAsyncThunk("user/details", async () => {
  const token = localStorage.getItem("mydiary-token");
  const config = { headers: { "x-access-token": token } };

  try {
    const response = await axios.get(`${baseURL}/user/details`, config);
    return response.data;
  } catch (e: any) {
    return;
  }
});

export const logout = createAsyncThunk("user/logout", async () => {
  localStorage.clear();
  return null;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state: any) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(signup.fulfilled, (state: any, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(signup.rejected, (state: any, action: any) => {
        state.data = null;
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(signin.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(signin.fulfilled, (state: any, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(signin.rejected, (state: any, action) => {
        state.data = null;
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(logout.fulfilled, (state: any, action: any) => {
        state.data = action.payload;
        state.loading = false;
        state.error = "";
      })
      
      .addCase(userDetails.fulfilled, (state: any, action: any) => {
        state.data = action.payload
        state.loading = false;
        state.error = "";
      })
  },
});

export default userSlice.reducer;
