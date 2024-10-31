import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaintsComponent } from './components/saints/saints.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material.module';

import { saintsReducer } from './services/shared/store/saints.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule, Routes } from '@angular/router';
import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { SaintComponent } from './components/saints/saint/saint.component';

const routes: Routes = [
  {
      path: '',
      loadChildren: () => import('./module/saints.module').then(m => m.SaintsModule),

  }
];


@NgModule({
  declarations: [
    AppComponent,
    SaintsComponent,
    SaintComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MaterialModule, 
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({}),
    StoreModule.forRoot({saints:saintsReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
