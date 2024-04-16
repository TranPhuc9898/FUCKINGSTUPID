import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Định nghĩa interface cho state
interface MessageState {
  color: string;
}

// Giá trị khởi tạo cho state
const initialState: MessageState = {
  color: '',
};
export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    // Action để cập nhật message
    setColor: (state:any, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
});

// Export action
export const {setColor} = colorSlice.actions;

// Export reducer
export default colorSlice.reducer;
