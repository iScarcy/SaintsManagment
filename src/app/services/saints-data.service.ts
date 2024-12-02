import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
 
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Saint } from "../model/saint";
import { HttpOptions } from "@ngrx/data/src/dataservices/interfaces";
import { baseApiUrlSaints } from "../app.constant";
import { Update } from "@ngrx/entity";

@Injectable()
export class SaintsDataService extends DefaultDataService<Saint> {
    constructor(http:HttpClient, httpUrlGenerator: HttpUrlGenerator){
        super("Saint", http, httpUrlGenerator)
    }

     override getAll(options?: HttpOptions): Observable<Saint[]> {
         
        return this.http.get<Saint[]>(baseApiUrlSaints)
            .pipe(
                map(res => res)
            )
     }

     override update(update: Update<Saint>, options?: HttpOptions): Observable<Saint> {
       
        return this.http.put<Saint>(baseApiUrlSaints+"/"+ update.id, update.changes).pipe(
            map(saint => ({id: saint.id, date: saint.date, description: saint.description}))
        
          );
     }

     override add(entity: Saint, options?: HttpOptions): Observable<Saint> {
        return this.http.post<Saint>(baseApiUrlSaints, entity).pipe(
            map(saint => ({id: saint.id, date: saint.date, description: saint.description}))
        
          );
     }
     
}