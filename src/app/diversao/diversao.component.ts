import { Component, OnInit } from '@angular/core';
import { Oferta } from './../shared/oferta.model';
import { OfertaService } from './../ofertas.service';



@Component({
  selector: 'xyz-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [ OfertaService ]
})
export class DiversaoComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertaService: OfertaService) { }

  ngOnInit() {
    this.ofertaService.getOfertasPorCategorias('diversao')
      .then(( ofertas: Oferta[]) => {
        this.ofertas = ofertas;
      });
  }

}
