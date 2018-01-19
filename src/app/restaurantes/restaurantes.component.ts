import { Component, OnInit } from '@angular/core';
import { Oferta } from './../shared/oferta.model';
import { OfertaService } from './../ofertas.service';


@Component({
  selector: 'xyz-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertaService ]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertaService: OfertaService) { }

  ngOnInit() {
    this.ofertaService.getOfertasPorCategorias('restaurante')
    .then((ofertas: Oferta[]) => {
      console.log(ofertas);
      this.ofertas = ofertas;
    });
  }

}
