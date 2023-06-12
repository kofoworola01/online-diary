import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = process.env.REACT_APP_API;
    
export const addEntry = createAsyncThunk('entry/addEntry', async (data: any, { rejectWithValue }) => {
    const token = localStorage.getItem('mydiary-token');
    const config = {headers : {"x-access-token": token }}

 try{
  const response = await axios.post(`${baseURL}/entries`, data, config );
  return response.data;
 } catch(e: any){
  return rejectWithValue(e.response.data.errors.entry);
 }
});

export const editEntry = createAsyncThunk('entry/editEntry', async (data: any, { rejectWithValue }) => {
    const token = localStorage.getItem('mydiary-token');
    const config = {headers : {"x-access-token": token }}

    try{
     const response = await axios.put(`${baseURL}/entries/${data.id}`, data, config );
     return response.data;
    } catch(e: any){
     return rejectWithValue(e.response.data.errors.entry);
    }
   });

   export const deleteEntry = createAsyncThunk('entry/deleteEntry', async (id: any, { rejectWithValue }) => {
    const token = localStorage.getItem('mydiary-token');
    const config = {headers : {"x-access-token": token }}

    try{
     const response = await axios.delete(`${baseURL}/entries/${id}`, config );
     return response.data;
    } catch(e: any){
     return rejectWithValue(e.response.data.errors.entry);
    }
   });

export const getAllEntry = createAsyncThunk('entry/getAllEntry', async () => {
    const token = localStorage.getItem('mydiary-token');
    const config = {headers : {"x-access-token": token }}

 try{
  const response = await axios.get(`${baseURL}/entries`, config );
  return response.data.entries;
 } catch(e: any){
    return;
 }
});

interface STATE {
    entry: any,
    entries: any[],
    loading: boolean,
    error: string
}

const entriesSlice = createSlice({
     name: 'entry',
    initialState: {
      entry: null,
      entries: [],
      loading: false,
      error: ''
    },
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(addEntry.pending, (state: STATE) => {
            state.loading=true
            state.error = ''

        })
        .addCase(addEntry.fulfilled, (state: STATE, action) => {
            state.entry = action.payload;
            state.loading = false;
            state.error = ''
        })
        .addCase(addEntry.rejected, (state: STATE, action) => {
            state.entry = null
            state.loading = false;
            state.error = action.payload as string  // type casting it to string because it throwing error
        })

        .addCase(editEntry.pending, (state: STATE) => {
            state.loading=true
            state.error = ''

        })
        .addCase(editEntry.fulfilled, (state: STATE, action) => {
            state.entry = action.payload;
            state.loading = false;
            state.error = ''
        })
        .addCase(editEntry.rejected, (state: STATE, action) => {
            state.entry = null
            state.loading = false;
            state.error = action.payload as string
        })
        
        .addCase(deleteEntry.pending, (state: STATE) => {
            state.loading=true
            state.error = ''

        })
        .addCase(deleteEntry.fulfilled, (state: STATE, action) => {
            state.entry = action.payload;
            state.loading = false;
            state.error = ''
        })
        .addCase(deleteEntry.rejected, (state: STATE, action) => {
            state.entry = null
            state.loading = false;
            state.error = action.payload as string
        })

        .addCase(getAllEntry.pending, (state: STATE) => {
            state.loading=true
            state.error = ''

        })
        .addCase(getAllEntry.fulfilled, (state: STATE, action) => {
            state.entries = action.payload;
            state.loading = false;
            state.error = ''
        })
    },
});

export default entriesSlice.reducer;