import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {
  pessoas = [
    { nome: 'Sebastião Silva', cidade: 'São Paulo', estado: 'SP', ativo: false },
    { nome: 'Joao Pedro', cidade: 'Boituva', estado: 'SP', ativo: true },
    { nome: 'Bruna Gabriela', cidade: 'São Paulo', estado: 'SP', ativo: true },
    { nome: 'Gustavo Borges', cidade: 'Goiania', estado: 'SP', ativo: true },
    { nome: 'Arthur Aguilar', cidade: 'Campinas', estado: 'SP', ativo: false },
    { nome: 'Lais Tont', cidade: 'São Paulo', estado: 'SP', ativo: true },
    { nome: 'Jade Picao', cidade: 'São Paulo', estado: 'SP', ativo: true },
    { nome: 'Paulo André', cidade: 'Rio de Janeiro', estado: 'RJ', ativo: true },
    { nome: 'Pedro Scooby', cidade: 'Saquarema', estado: 'RJ', ativo: true },
    { nome: 'Jessica Maria', cidade: 'Fortaleza', estado: 'RN', ativo: true },
    { nome: 'Manoel Pinheiro', cidade: 'Uberlândia', estado: 'MG', ativo: true },
    { nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC', ativo: true },
    { nome: 'Luís Pereira', cidade: 'Curitiba', estado: 'PR', ativo: true },
    { nome: 'Vilmar Andrade', cidade: 'Rio de Janeiro', estado: 'RJ', ativo: false },
    { nome: 'Paula Maria', cidade: 'Uberlândia', estado: 'MG', ativo: true }
  ];

}
