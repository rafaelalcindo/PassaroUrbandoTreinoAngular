import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../ofertas.service';
import { Oferta } from './../shared/oferta.model';


@Component({
  selector: 'xyz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertaService]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(private ofertaService: OfertaService) {

  }

  ngOnInit() {
    //this.ofertas = this.ofertaService.getOfertas();
    //console.log(this.ofertas);
    // o then ele é executado quando o processamento é terminado.
   this.ofertaService.getOfertas()
    .then(
      (ofertas: Array<Oferta> )=>{
        this.ofertas = ofertas;
      })
      .catch((param: any ) => {
        console.log(param);
      })

  }

}
