import { Component, OnInit } from '@angular/core';
import { OfertaService } from './../ofertas.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import '../util/rxjs-extensions';

import { Oferta } from './../shared/oferta.model';


@Component({
  selector: 'xyz-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertaService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  public ofertas2: Oferta[];
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertaService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa  // retorno oferta[]
      .debounceTime(1000) // executa a ação so switchMap a 1 seg
      .distinctUntilChanged() // para fazer pesquisas distintas
       .switchMap((termo: string) => {
        console.log('requisição http para api ');
        if(termo.trim() === ''){
          //retornar um obsarvable de array de ofertas vazio
          return Observable.of<Oferta[]>([])
        }

        return this.ofertasService.pesquisaOfertas(termo);
      })
      .catch((erro: any) => {
        console.log(erro);
        return Observable.of<Oferta[]>([]);
      });

      this.ofertas.subscribe((ofertas: Oferta[]) => {
        console.log(ofertas);
        this.ofertas2 = ofertas;
      });
  }

  public pesquisa(termoDaBusca: string): void {
    console.log('Key up caractere: ', termoDaBusca);
    this.subjectPesquisa.next(termoDaBusca);
  }

}
