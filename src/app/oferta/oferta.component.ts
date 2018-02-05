import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertaService } from './../ofertas.service';

import { CarrinhoService } from './../carrinho.service';

import { Oferta } from './../shared/oferta.model';



@Component({
  selector: 'xyz-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertaService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta: Oferta;

  constructor(
  private route: ActivatedRoute,
  private ofertaService: OfertaService,
  private carrinhoService: CarrinhoService ) { }

  ngOnInit() {



    this.route.params.subscribe((parametros: Params) => {
      this.ofertaService.getOfertaPorId(parametros.id)
      .then((oferta: Oferta) => {
        this.oferta = oferta;
       // console.log(this.oferta)
      });

    });
  }

  ngOnDestroy(){

  }

  public adicionarItemCarrinho(): void {
    this.carrinhoService.incluirItem(this.oferta);
    console.log(this.carrinhoService.exibirItens() );
  }

}
