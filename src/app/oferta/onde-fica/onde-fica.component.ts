import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
   // console.log('ID da Rota Pai: ', this.route.parent.snapshot.params['id']);
    this.ofertaService.getOndeFicaOfertaPorId(this.route.parent.snapshot.params['id'])
      .then((descricao: string) => {
        this.ondeFica = descricao;
      });
  }

}
