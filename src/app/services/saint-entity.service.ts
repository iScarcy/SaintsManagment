import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { Saint } from "../model/saint";

@Injectable()
export class SaintEntityService extends EntityCollectionServiceBase<Saint>{
    
    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory){
        super("Saint", serviceElementFactory)
    }

}