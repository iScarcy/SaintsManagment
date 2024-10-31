import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SaintsComponent } from '../components/saints/saints.component';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { SaintEntityService } from '../services/saint-entity.service';
import { SaintResolver } from '../services/saints.resolver';
import { SaintsDataService } from '../services/saints-data.service';

export const saintsRoutes : Routes = [
  { 
    path: '',
    component: SaintsComponent,
    resolve: {
      saints: SaintResolver
    }
  }
]


//@ngrx/data: definisco le entità
const entityMetaData : EntityMetadataMap = {
  Saint:{
    
  }
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(saintsRoutes)
  ],
  providers: [
    SaintEntityService,
    SaintResolver,
    SaintsDataService 
 
  ]
})


export class SaintsModule {

  constructor(
      private eds: EntityDefinitionService,
      private entityDataService: EntityDataService,
      private saintsDataService: SaintsDataService
  ){
      eds.registerMetadataMap(entityMetaData);
      entityDataService.registerService("Saint", saintsDataService)
  }

 }
