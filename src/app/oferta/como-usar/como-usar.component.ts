import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertaService } from '../../ofertas.service';


@Component({
  selector: 'xyz-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertaService ]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = '';

  constructor(private route: ActivatedRoute,
              private ofertaService: OfertaService) { }

  ngOnInit() {

    this.route.parent.params.subscribe((parametro: Params) =>{
        this.ofertaService.getComoUsarOfertaPorId(parametro.id)
        .then((descricao: string) => {
            this.comoUsar = descricao;
        });
    });


  }

}
