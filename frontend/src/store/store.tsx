import { configureStore } from "@reduxjs/toolkit";
import DetailsSlice from "./DetailsSlice";
import SpotSlice from "./SpotSlice";

const Store = configureStore({
  reducer: {
    detail: DetailsSlice.reducer,
    spot: SpotSlice,
  },
});
export default Store;
