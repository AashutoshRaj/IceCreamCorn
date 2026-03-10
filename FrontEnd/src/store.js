import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // Add your reducers here
    // Example: user: userReducer
  },
});

export default store;
