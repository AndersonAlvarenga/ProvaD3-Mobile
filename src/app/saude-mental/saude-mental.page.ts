import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { Storage } from '@ionic/storage'
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-saude-mental',
  templateUrl: './saude-mental.page.html',
  styleUrls: ['./saude-mental.page.scss'],
})
export class SaudeMentalPage implements OnInit {
  pessoa: Pessoa = {} as Pessoa;
  lista: Pessoa[] = [];
  nivelMental = [
    {
      id: 1,
      status: "péssima"
    },
    {
      id: 2,
      status: "ruim"
    },
    {
      id: 3,
      status: "normal"
    },
    {
      id: 4,
      status: "boa"
    },
    {
      id: 5,
      status: "ótima"
    }

  ]
  constructor(
    private storage: Storage,
    private pessoaService: PessoaService
  ) { }

  ngOnInit() {

  }
  async cadastrar() {
    return await this.pessoaService.insert(this.pessoa)
  }


}
