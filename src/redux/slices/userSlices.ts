
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { stat } from 'fs';
// require('dotenv').config()

const baseURL = process.env.REACT_APP_API;

// Async thunk action for fetching todos
export const signup = createAsyncThunk('user/signup', async (data: any) => {
 try{
  const response = await axios.post(`${baseURL}/auth/signup`, data);
  return response.data;
 } catch(e: any){
  return e.response;
 }
});

export const signin = createAsyncThunk('user/signin', async (data: any) => {
  const response = await axios.post(`${baseURL}/auth/signin`, data);
  localStorage.setItem("mydiary-token",  response.data.token);
  return response.data;
});

export const logout = createAsyncThunk('user/logout', async () => {
  localStorage.clear();
  return { status: '', data: {status:'', message: '', errors: {email: '', password: ''}}, message: ''}
});



const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { status: '', data: {status:'', message: '', errors: {email: '', password: ''}}, message: ''},
    loading: false,
    error: ''
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state: any, action) => {
        state.loading = true;
        state.error = ''
      })
       .addCase(signup.fulfilled, (state: any, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error =''
      })
      .addCase(signup.rejected, (state: any, action: any) => {
        console.log(action.payload, '-------------')
        state.user = action.payload
        state.loading = false;
        state.error = action.payload
      })

      .addCase(signin.fulfilled, (state: any, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error =''
      })

      .addCase(signin.pending, (state, action) => {
        state.loading = true;
        state.error = ''
      })
      .addCase(logout.fulfilled, (state: any, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error =''
      })
      
    //   .addCase(createTodo.fulfilled, (state, action) => {
    //     state.push(action.payload);
    //   })
    //   .addCase(updateTodo.fulfilled, (state, action) => {
    //     const updatedTodo = action.payload;
    //     const index = state.findIndex((todo) => todo.id === updatedTodo.id);
    //     if (index !== -1) {
    //       state[index] = updatedTodo;
    //     }
    //   })
    //   .addCase(deleteTodo.fulfilled, (state, action) => {
    //     const todoId = action.payload;
    //     return state.filter((todo) => todo.id !== todoId);
    //   });
  },
});

export default userSlice.reducer;
// function createAction<T>(arg0: string) {
//   throw new Error('Function not implemented.');
// }

