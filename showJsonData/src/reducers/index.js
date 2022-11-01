import { combineReducers } from 'redux';
//import datasReducer from './datasReducer';
import infoReducer from './infoReducer';

export default combineReducers({
    //datas: datasReducer,
    infodatas: infoReducer
});
