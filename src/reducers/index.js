import {combineReducers} from 'redux';

const initial = {
    datas:[]
}
const demoReducer = (state=initial,action)=>{

    switch(action.type){
        case 'GET_DATA':
      return {
            ...state,
        datas:action.payload
        }
        default:return state;
    }
}

export default combineReducers({
    demoReducer
})