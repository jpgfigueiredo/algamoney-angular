
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageModule } from 'primeng/message';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { InputMaskModule } from 'primeng/inputmask';

import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { SharedModule } from '../shared/shared.module';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid.component';





@NgModule({
  declarations: [
    PessoasGridComponent,
    PessoasPesquisaComponent,
    PessoaCadastroComponent
  ],
  imports: [
    CommonModule,

    ButtonModule,
    InputTextModule,
    TableModule,
    TabViewModule,
    TooltipModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputNumberModule,
    InputMaskModule,
    MessageModule,
    CurrencyMaskModule,

    SharedModule,
  ],
  exports: []
})
export class PessoasModule { }
