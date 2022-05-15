import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css'],
})
export class PessoaCadastroComponent {
  salvar(form: NgForm) {
    console.log('salvando');
  }
}
