import { createAction, props } from '@ngrx/store';
import { cardetails } from '../app.model';
import { Appstate } from '../app.state';
 
export const invokeCarAPI = createAction(
  'Fetch API'
);
 
export const carFetchAPISuccess = createAction(
  'Fetch API Success',
  props<{ allcars: cardetails[] }>()
);

export const setAPIStatus = createAction(
    'success or failure status',
    props<{apiStatus: Appstate}>()
);

export const invokeSaveNewCarAPI = createAction(
    'Inovke save new car api',
    props<{ newCar: cardetails }>()
  );
   
  export const saveNewCarAPISucess = createAction(
    'save new car api success',
    props<{ newCars: cardetails }>()
  );

  export const invokeDeleteCarAPI = createAction(
    'Inovke delete car api',
    props<{id:number}>()
  );
   
  export const deleteCarAPISuccess = createAction(
    'deleted car api success',
    props<{id:number}>()
  );

