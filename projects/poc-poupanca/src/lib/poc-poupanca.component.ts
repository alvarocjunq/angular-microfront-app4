import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tf-poc-poupanca',
  template: `
    <p>
      Aplicação de poupança
    </p>
    <br>
    <p>
      Enviou os dados: {{value | json}}
    </p>
  `,
  styles: []
})
export class PocPoupancaComponent implements OnInit {

  @Input()
  value: any;

  constructor() { }

  ngOnInit() {

  }

}
