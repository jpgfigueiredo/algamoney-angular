import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent{

  tipos = [
    { label : 'Receita' , value: 'RECEITA'},
    { label : 'Despesa' , value: 'DESPESA'},
  ];

  categorias = [
    {label: 'Alimentação', value: 1},
    {label: 'Refeição', value: 2},
    {label: 'Transporte', value: 3},
    {label: 'Outra', value: 4},
  ]

  pessoas = [
    {label: 'João', value: '1'},
    {label: 'Bruna', value: '2'},
  ]

  salvar(form: NgForm){
    form.reset();
  }

}
