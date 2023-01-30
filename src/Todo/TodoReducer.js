import {  ADD_TODO, COMPLETE_TODO, DELETE_TODO, GET_TODOS, UPDATE_TODO} from "../Store/actiontype";


export const todoreducer=(state={todos:[]},{type,payload})=>{
    // console.log(state,action);
    switch(type){
        case GET_TODOS:{
            return {
                ...state,
                todos:payload,
            }
        }
      case ADD_TODO:{
           return {
            ...state,
            todos:[
                ...state.todos,
            {
                ...payload,
                id:state.todos.length,
            
            },
        ],
    };
    }
   case COMPLETE_TODO: {
     
      return {...state}
  }
  case DELETE_TODO:{
     
      return {...state}
  }
  case UPDATE_TODO:{
  
    return {...state}
}

  default:{
      return state;
  }
}   

};