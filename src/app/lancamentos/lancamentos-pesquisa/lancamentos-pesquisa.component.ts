import { LancamentoService } from './../lancamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css'],
})
export class LancamentosPesquisaComponent implements OnInit {
  lancamentos: any[] = [];

  ngOnInit() {
    this.pesquisar();
  }
  constructor(private lancamentoService: LancamentoService) {}

  pesquisar() {
    this.lancamentoService
      .pesquisar()
      .then((lancamentos) => (this.lancamentos = lancamentos));
  }
}
