import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { LancamentoService } from './lancamentos/lancamento.service';

@NgModule({
  // Declaração no Module de components
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    LancamentosModule,
    PessoasModule,
    SharedModule,
    CoreModule,
  ],
  providers: [LancamentoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
