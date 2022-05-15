import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root',
})
export class LancamentoService {
  lancamentosUrl = 'http://localhot:8080/lancamentos';

  constructor(private http: HttpClient) {}

  pesquisar(): Promise<any> {
    const headers = new HttpHeaders().append(
      'Authorization',
      'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='
    );

    return this.http
      .get(`${this.lancamentosUrl}?resumo`, { headers })
      .toPromise()
      .then((response: any) => response['content']);
  }
}
