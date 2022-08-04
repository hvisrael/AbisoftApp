import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AbisoftPersona } from '../shared/abisoft-persona.model';
import { AbisoftPersonaService } from '../shared/abisoft-persona.service';

@Component({
  selector: 'app-abisoft-personas',
  templateUrl: './abisoft-personas.component.html',
  styles: [
  ]
})
export class AbisoftPersonasComponent implements OnInit {

  constructor(public service: AbisoftPersonaService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:AbisoftPersona){
    this.service.formData= Object.assign({},selectedRecord);
  }

  onDelete(id:number) {
    if (confirm('¿Está seguro que quiere eliminar el registro ? '+ id)) {
      this.service.deletePersona(id)
        .subscribe(res => {
          this.service.refreshList();
          this.toastr.error("El registro se eliminó existosamente",'Eliminar Persona');
        },
        err => { console.log(err); })
    }
  }

}
