import { createReducer, on } from "@ngrx/store";
import { initialState } from "./saints.state";
import { loadsaintssuccess } from "./saints.actions";

const _saintsReducer = createReducer(
    initialState,
    
    on(loadsaintssuccess, (state,action)=>{
         return {
            saints:action.saints
        }
    })
    
)

export function saintsReducer(state: any, action: any) {
    return _saintsReducer(state, action);
  }