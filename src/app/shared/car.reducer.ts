import { createReducer, on } from "@ngrx/store";
import { cardetails } from "../app.model";
import { Appstate } from "../app.state";
import { carFetchAPISuccess, deleteCarAPISuccess, saveNewCarAPISucess, setAPIStatus } from "./car.action";
 
export const initialState: ReadonlyArray<cardetails> = [];

export const initial: Readonly<Appstate> = {
    apiResponseMessage: '',
    apiStatus: '',
  };

export const carReducer = createReducer(
    initialState,
    on(carFetchAPISuccess, (state, { allcars }) => {
        return allcars;
    }),
    on(saveNewCarAPISucess, (state, { newCars }) => {
    let newState = [...state];
    newState.unshift(newCars);
    return newState;
  }),
  on(deleteCarAPISuccess, (state, { id }) => {
    let newState = state.filter((d : any) => d.id != id);
    return newState;
  })
);

export const appReducer = createReducer(
    initialState,
    on(setAPIStatus, (state, { apiStatus }) => {
      return {
        ...state,
        ...apiStatus
      };
    })
  );

