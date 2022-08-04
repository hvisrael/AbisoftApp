import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { AbisoftPersona } from 'src/app/shared/abisoft-persona.model';
import { AbisoftPersonaService } from 'src/app/shared/abisoft-persona.service';

@Component({
  selector: 'app-abisoft-persona',
  templateUrl: './abisoft-persona.component.html',
  styles: [
  ]
})
export class AbisoftPersonaComponent implements OnInit {

  constructor(public service:AbisoftPersonaService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if(this.service.formData.id==0)
    this.insertRecord(form)
   else
    this.updateRecord(form)
   }

insertRecord(form: NgForm)
{
  this.service.postPersona().subscribe(
    res =>{
      this.resetForm(form);
      this.service.refreshList();
      this.toastr.success('Los Datos se Agregaron Exitosamente','Agregar Persona')
      
    },
    err=>{
      console.log(err);
    }
  );
}

updateRecord(form: NgForm)
{
  this.service.putPersona().subscribe(
    res =>{
      this.resetForm(form);
      this.service.refreshList();
      this.toastr.info('Los Datos se Actualizaron Exitosamente','Actualizar Persona')
      
    },
    err=>{
      console.log(err);
    }
  );

}

resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new AbisoftPersona();
   }


   public CalculateAge(){
      if(this.service.formData.dob){
        const bdate = new Date(this.service.formData.dob);
        const timeDiff = Math.abs(Date.now() - bdate.getTime() );
        this.service.formData.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
      }
      return this.service.formData.age;
    }

    public CalculateCosto(){
      if(this.service.formData.inscriptionDate){
        const idate = new Date(this.service.formData.inscriptionDate);
        const timeDiff = Math.abs(Date.now()-idate.getTime());
        const year =  Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
         this.service.formData.cost = String(year*200);
      }
      return this.service.formData.cost;
    }

}
