import {configureStore} from '@reduxjs/toolkit/'
import reducers from "../reducers";

export const makeStore = () => configureStore({reducer: reducers})

export default makeStore;