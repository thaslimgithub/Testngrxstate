import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from "rxjs";
import { Appstate } from "../app.state";
import { AppService } from "../appservice";
import { carFetchAPISuccess, deleteCarAPISuccess, invokeCarAPI, invokeDeleteCarAPI, invokeSaveNewCarAPI, saveNewCarAPISucess, setAPIStatus } from "./car.action";
import { selectCar } from "./car.selector";
 
@Injectable()
export class CarEffect {

    constructor(
        private actions$: Actions,
        private booksService: AppService,
        private store: Store,
        private appStore: Store<Appstate>
      ) {}
      saveNewBook$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(invokeSaveNewCarAPI),
          switchMap((action) => {
            this.appStore.dispatch(
              setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
            );
            return this.booksService.create(action.newCar).pipe(
              map((data) => {
                this.appStore.dispatch(
                  setAPIStatus({
                    apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
                  })
                );
                return saveNewCarAPISucess({ newCars: data });
              })
            );
          })
        );
      });

      deleteBooksAPI$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(invokeDeleteCarAPI),
          switchMap((actions) => {
            this.appStore.dispatch(
              setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
            );
            return this.booksService.delete(actions.id).pipe(
              map(() => {
                this.appStore.dispatch(
                  setAPIStatus({
                    apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
                  })
                );
                return deleteCarAPISuccess({ id: actions.id });
              })
            );
          })
        );
      });

      loadAllBooks$ = createEffect((): any => {
      this.actions$.pipe(
        ofType(invokeCarAPI),
        withLatestFrom(this.store.pipe(select(selectCar))),
        mergeMap(([, bookformStore]) => {
          if (bookformStore.length > 0) {
            return EMPTY;
          }
          return this.booksService
            .getcarDetails()
            .pipe(map((data : any) => carFetchAPISuccess({ allcars: data })));
        })
      )
    });
}

function Effect() {
  throw new Error("Function not implemented.");
}
