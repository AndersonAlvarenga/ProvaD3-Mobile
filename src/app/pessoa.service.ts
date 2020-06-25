import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { Pessoa } from './model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  pessoa: Pessoa[];
  constructor(
    private storage: Storage
  ) { }
  async insert(obj: Pessoa) {
    let lista: Pessoa[]=[];
    let aux: any = await this.get();
    lista.push(obj)
    lista.push(aux)
    console.log(lista)
    this.storage.set("Pessoas", lista);
  }

  public getPessoaRaca(raca) {
    console.log(this.storage.get("Pessoa"))
  }
  public get() {
    return this.storage.get("Pessoas")
  }
}
