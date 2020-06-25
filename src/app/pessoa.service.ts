import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { Pessoa } from './model/pessoa';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  pessoa: Pessoa[] = [];
  constructor(
    private storage: Storage
  ) { }
  async insert(obj: Pessoa) {
    let pessoa: Pessoa = obj;
    pessoa.id = (await this.storage.length() + 1);
    await this.storage.set("Pessoas", this.carregar(pessoa));
  }
  async carregar(obj) {
    let resp = await this.storage.length();
    if (resp != 0) {
      let aux: any = await this.get()
      let lista: Pessoa[] = [];
      lista = aux
      this.pessoa.splice(0, this.pessoa.length)
      lista.forEach(pessoa => {
        this.pessoa.push(pessoa);
      })
    }
    this.pessoa.push(obj);
    return this.pessoa;
  }
  async getPessoaRaca(raca) {
    let valor: any = raca
    let produto = null
    let aux: any = null;
    valor = valor.valor;
    let lista: Pessoa[] = [];
    let Id: Pessoa[] = [];
    aux = await this.carregar(produto);
    lista = aux;
    lista.forEach(pessoa => {
      if (pessoa != null) {
        if (pessoa.racaCor == valor) {
          Id.push(pessoa);
        }
      }

    })
    console.log(Id)
  }
  async getPessoaId(id) {
    let valor: any = id
    let produto = null
    let aux: any = null;
    valor = valor.valor;
    let lista: Pessoa[] = [];
    let Id: Pessoa[] = [];
    aux = await this.carregar(produto);
    lista = aux;
    lista.forEach(pessoa => {
      if (pessoa != null) {
        if (pessoa.id == valor) {
          Id.push(pessoa);
        }
      }

    })
    console.log(Id)
  }
  async get() {
    return await this.storage.get("Pessoas")
  }
}
