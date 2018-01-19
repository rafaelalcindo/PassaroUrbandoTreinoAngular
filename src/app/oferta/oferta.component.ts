import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from './../shared/oferta.model';
import { OfertaService } from './../ofertas.service';


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
  private ofertaService: OfertaService) { }

  ngOnInit() {
    console.log('Id recuperado da rota: ', this.route.snapshot.params['id']);
    this.ofertaService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta;
        console.log(this.oferta)
      });
  }

  ngOnDestroy(){
   
  }

}
