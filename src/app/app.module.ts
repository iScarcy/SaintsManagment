import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SaintsComponent } from './components/saints/saints.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material.module';

import { saintsReducer } from './services/shared/store/saints.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule, Routes } from '@angular/router';
import { EntityDataModule, EntityDataService, provideEntityData, withEffects } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { SaintComponent } from './components/saints/saint/saint.component';
import { entityConfig } from './services/saint-entity.metadata';
import { SaintEntityService } from './services/saint-entity.service';
import { SaintsDataService } from './services/saints-data.service';
import { SaintResolver } from './services/saints.resolver';
import { DialogComponent } from './components/saints/dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
 
const routes: Routes = [
  {
    path: '',
    component: SaintsComponent,
    resolve: {
      saints: SaintResolver
    }

  }
];
 

@NgModule({
  declarations: [
    AppComponent,
    SaintsComponent,
    SaintComponent,
    DialogComponent
  ],
  providers: [
    SaintEntityService,
    SaintResolver,
    SaintsDataService
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MaterialModule, 
    ReactiveFormsModule,
    StoreModule.forRoot({saints:saintsReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private entityDataService: EntityDataService,
             private saintsDataService: SaintsDataService
  ){
    entityDataService.registerService("Saint", saintsDataService)
  }

}
