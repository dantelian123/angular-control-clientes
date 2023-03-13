import { Configuracion } from './../../modelo/configuracion.model';
import { ConfiguracionServicio } from './../../servicios/configuracion.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  permitirRegistro = false;
  ngOnInit(): void {
    this.configuracionServicio.getConfiguracion()
      .subscribe((configuracion: Configuracion) => {
        this.permitirRegistro= configuracion.permitirRegistro;
      })
  }
  constructor(private router: Router,
    private configuracionServicio: ConfiguracionServicio) {

  }
  guardar() {
    let configuracion={permitirRegistro:this.permitirRegistro};
    this.configuracionServicio.modificarConfiguracion(configuracion);
    this.router.navigate(['/'])
  }
}
