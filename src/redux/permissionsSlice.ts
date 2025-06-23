import { createSlice } from '@reduxjs/toolkit';

interface PermissionsState {
  // Add permissions state here later
}

const initialState: PermissionsState = {};

const permissionsSlice = createSlice({
  name: 'permissions',
  initialState,
  reducers: {
    // Add permissions reducers here later
  },
});

export default permissionsSlice.reducer; 