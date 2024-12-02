import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { Saint } from 'src/app/model/saint';
import { SaintEntityService } from 'src/app/services/saint-entity.service';

@Component({
  selector: 'app-dialog',
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
   // { provide: DatePipe },
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}},
    // Moment can be provided globally to your app by adding `provideMomentDateAdapter`
    // to your app config. We provide it at the component level here, due to limitations
    // of our example generation script.
    provideMomentDateAdapter(undefined, {useUtc: true}),
  ],  
  
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
 
  saint : Saint  = {
    id : 0,
    description: "",
    date: new Date
  };
  
  constructor(
    private entityService: SaintEntityService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Saint
    
  ){

  }

  ngOnInit(): void {
    this.saint = this.data
  }

  FC_nome = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(50),
  ]);

  FC_data = new FormControl('',[
    Validators.required
  ])

  getErrorMessage(): string {
    if (this.FC_nome.hasError('required')) {
      return 'Il nome è obbligatorio';
    }

    if (this.FC_nome.hasError('minlength')) {
      return 'Il nome deve avere almeno 4 caratteri';
    }
    if (this.FC_nome.hasError('maxlength')) {
      return 'Il nome può avere al massimo 15 caratteri';
    }

    return '';
  }

  getErrorDataMessage(): string {
    if (this.FC_data.hasError('required')) {
      return 'La data è obbligatoria';
    }
 
    return '';
  }

  save(){
    debugger;
    console.log(this.saint.id);
    console.log(this.FC_nome.value);
    console.log(this.FC_data.value);
    
    if(this.FC_data.valid && this.FC_nome.valid){
      this.saint = {
        
        id : this.data.id,
        description: this.FC_nome.value!,
        date: new Date(this.FC_data.value!)
      };

      //  this.saint.description = this.FC_nome;
      if(this.data.id>0){
        this.entityService.update(this.saint)
        this.dialog.closeAll()
      }else{
        this.entityService.add(this.saint);
        this.dialog.closeAll();
      }
    }
  }

}
