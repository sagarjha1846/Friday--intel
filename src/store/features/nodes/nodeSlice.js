import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { reduceErrorHandler } from '../../../utils';
import { loadCanvasData, loadRansomData } from './nodeService';

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  nodeInfo: [],
  ransome: null,
  nodes: [],
  edges: [],
  search: '',
};

export const getNodesResults = createAsyncThunk(
  'nodeInfo/get-nodeInfo',
  async (search, thunkAPI) => {
    try {
      let results;

      const nodes = await loadCanvasData(search);
      if (nodes) {
        try {
          const ransome = await loadRansomData(search);
          results = { ransome, nodes, search };
        } catch (error) {
          const message = reduceErrorHandler(error);
          return thunkAPI.rejectWithValue(message);
        }
      }

      return results;
    } catch (error) {
      const message = reduceErrorHandler(error);
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const nodeSlice = createSlice({
  name: 'node',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNodesResults.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNodesResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // console.log(action.payload, state.nodeInfo);
        // console.log(action.payload.nodes);
        // const list = [
        //   ...state.nodeInfo,
        //   { query: action.payload.search, data: action.payload.nodes[0].data },
        // ];

        state.search = action.payload.search;
        // console.log(list);

        state.message = 'fetched';
      })
      .addCase(getNodesResults.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});
export const { reset } = nodeSlice.actions;
export default nodeSlice.reducer;
