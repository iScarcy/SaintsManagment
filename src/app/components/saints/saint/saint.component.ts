import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Saint } from 'src/app/model/saint';
import { DialogComponent } from '../dialog/dialog.component';
import { baseHref } from 'src/app/app.constant';

@Component({
  selector: 'app-saint',
  templateUrl: './saint.component.html',
  styleUrls: ['./saint.component.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: DatePipe },
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },

    // Moment can be provided globally to your app by adding `provideMomentDateAdapter`
    // to your app config. We provide it at the component level here, due to limitations
    // of our example generation script.
    provideMomentDateAdapter(undefined, {useUtc: true}),
  ],
})
export class SaintComponent {

  constructor(private dialog: MatDialog){

  }

  @Input()
  saint:Saint | undefined

  imgs = ["illustrazione-di-san-giuseppe-disegnata-a-mano_23-2149968126.jpg",
    "Saint_Joseph.jpg",
    "san-francesco.jpg",
    "san-pietro.jpg",
    "trasfigurazione.jpg"
  ]

  getSaintImg(id:number):string{
     const randomIndex = id%4
   
    return baseHref + "assets/img/" + this.imgs[randomIndex];
  }

  openEditDialog(){
    
    let config: MatDialogConfig = {
      panelClass: "dialog-responsive",
      disableClose: true,
      data: this.saint
    }

    this.dialog.open(DialogComponent, config)
  }
}
