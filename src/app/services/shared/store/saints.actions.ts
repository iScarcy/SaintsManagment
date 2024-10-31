import { createAction, props } from "@ngrx/store";
import { Saint } from "src/app/model/saint";

export const LOAD_SAINTS='[Saints page] load saints';
export const LOAD_SAINTS_SUCCESS='[Saints page] load saints SUCCESS';

export const loadsaints=createAction(LOAD_SAINTS);
export const loadsaintssuccess=createAction(LOAD_SAINTS_SUCCESS, props<{saints:Saint[]}>())