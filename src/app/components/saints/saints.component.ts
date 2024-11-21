import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { map, Observable } from 'rxjs';
import { Saint } from 'src/app/model/saint';
import { SaintEntityService } from 'src/app/services/saint-entity.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-saints',
  templateUrl: './saints.component.html',
  styleUrls: ['./saints.component.css']
})
export class SaintsComponent implements OnInit {
  
  allsaints$! : Observable<Saint[]>
  saint : Saint = {
    id : 0,
    description: "",
    date: new Date
  };

  constructor(private entityService: SaintEntityService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.reload()
    console.log("ciao santino")
  }
 
  openAddDialog(){
   
    

    let config: MatDialogConfig = {
      panelClass: "dialog-responsive",
      disableClose: true,
      data: this.saint
    }

    this.dialog.open(DialogComponent, config)
  }

  reload(){
    this.allsaints$ = this.entityService.entities$
      .pipe(
        map(saints => saints.map(saint => ({
          id: saint.id,
          description: saint.description,
          date: saint.date
        }))
      )
    )
  }
  
}
