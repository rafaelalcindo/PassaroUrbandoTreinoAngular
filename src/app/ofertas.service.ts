import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';

import { Observable } from 'rxjs/Observable';

import { URL_API } from './app.api';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';


@Injectable()
export class OfertaService {

  //private url_api = 'http://localhost:3000/ofertas';

  constructor(private http: Http){

  }

  public getOfertas(): Promise<Oferta[]> {
    // efetuar uma requisição http
    return this.http.get(`${URL_API}/ofertas?destaque=true`)
      .toPromise()
      .then((resposta: Response) => resposta.json());
    // retornoar uma promise Oferta[]
  }

  public getOfertasPorCategorias(categoria: string): Promise<Oferta[]>{
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: Response) => resposta.json());
  }

  public getOfertaPorId(id: number): Promise<Oferta>{
    return this.http.get(`${ URL_API }/ofertas?id=${id}`)
      .toPromise()
      .then((resposta: Response) => {
        return resposta.json()[0]
      });
  }

  public getComoUsarOfertaPorId(id: number): Promise<string>{
    return this.http.get(`${URL_API}/como-usar?id=${id}`)
      .toPromise()
      .then((resposta: Response) =>{

        return resposta.json()[0].descricao
      })
  }

  public getOndeFicaOfertaPorId(id: number): Promise<string>{
    return this.http.get(`${URL_API}/onde-fica?id=${id}`)
        .toPromise()
        .then((resposta: Response) => {
            return resposta.json()[0].descricao;
        });
  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]>{
      return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
        .retry(10) // refaz 10 tentativas caso se falhar
        .map((resposta: Response) => resposta.json());
  }

}
