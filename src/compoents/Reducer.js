import { COUNTER_DECREMENT, COUNTER_INCREMENT,COUNTER_MULTIPLY ,COUNTER_DIVIDE} from "../Store/actiontype";
export const counterreducer=(state={count:0},{type})=>{
    // console.log(state,action);
    switch(type){
      case COUNTER_INCREMENT: {
          state.count++;
        return {...state}
    }
   case COUNTER_DECREMENT: {
        if(state.count>0)
     state.count--;
      return {...state}
  }
  case COUNTER_MULTIPLY:{
      state.count=state.count*2;
      return {...state}
  }
  case COUNTER_DIVIDE:{
    if(state.count>0)
    state.count=state.count/2;
    return {...state}
}
default:{
      return state;
  }
}   
};