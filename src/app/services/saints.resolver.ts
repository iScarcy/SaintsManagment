import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { SaintEntityService } from "./saint-entity.service";
import { filter, first, map, Observable, tap } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class SaintResolver implements Resolve<boolean>{
    constructor(private saintsService: SaintEntityService){

    }

    resolve(route: ActivatedRouteSnapshot): Observable<boolean>  {
        
        return this.saintsService.loaded$ //controlliamo il load dei dati tramite questa variabile loaded$, offerta dal sistema che è true qualdo i dati sono stati caricati
            .pipe(
                tap(loaded => { 
                    if(!loaded){ //questo è un init, fa la chiamate get solo la prima volta quindi
                        this.saintsService.getAll()
                    }
                }),
                filter(loaded => !!loaded), //filtra che noi non vogliamo i dati solo quando sono true 
                first() //mettiamo questo operatore per essere sicuri di prendere il primo valore rilasciato dall'emitter 
            ) 

    }
}
 
