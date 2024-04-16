import {configureStore} from '@reduxjs/toolkit';
import colorReducer from './reducers/colorSlice';
import tabBarReducer from './reducers/tabBarSlice';

export const store = configureStore({
  reducer: {
    // Reducers của bạn ở đây
    color: colorReducer,
    tabBar: tabBarReducer,
  },
});

// Định nghĩa kiểu của root state và dispatch dựa trên store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
