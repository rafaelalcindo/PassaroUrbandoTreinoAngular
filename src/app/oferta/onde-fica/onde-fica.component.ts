import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertaService } from './../../ofertas.service';


@Component({
  selector: 'xyz-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [ OfertaService ]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = '';

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertaService
    ) { }

  ngOnInit() {
    this.route.parent.params.subscribe((parametro: Params) =>{
      this.ofertaService.getOndeFicaOfertaPorId(parametro.id)
        .then((descricao: string) => {
          this.ondeFica = descricao;
        });
    });
   // console.log('ID da Rota Pai: ', this.route.parent.snapshot.params['id']);

  }

}
