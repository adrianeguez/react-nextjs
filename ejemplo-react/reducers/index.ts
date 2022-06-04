/* Action types */
import {actionTypes} from '../actions';
import {combineReducers} from 'redux';
import productosReducer from "./productos.reducer";

export default combineReducers({
    productos: productosReducer,
});

//
// export const exampleInitialState = {
//   lastUpdate: 0,
//   light: false,
//   count: 0,
// };
//
// export default (state = exampleInitialState, action) => {
//   switch (action.type) {
//     case actionTypes.TICK:
//       return Object.assign({}, state, {
//         lastUpdate: action.ts,
//         light: !!action.light,
//       });
//     case actionTypes.ADD:
//       return Object.assign({}, state, {
//         count: state.count + 1,
//       });
//     default:
//       return state;
//   }
// };