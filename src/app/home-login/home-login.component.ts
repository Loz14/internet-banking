import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {

  getCadastro;
  nameCliente;
  statusCliente: { saldo: string; limite: string; saldoParcial: string; valorParcela: string; saldoBruto: string; saldoPoupanca: string; }[];
  saldoCliente: string;
  limeteCliente: string;
  saldoParcial: string;
  valorParcela: string;
  saldoBruto: string;
  saldoPoupanca: string;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.statusCliente = [
      {
        saldo: '0,00',
        limite: '1.000',
        saldoParcial: '0,00',
        valorParcela: '250,00',
        saldoBruto: '0,00',
        saldoPoupanca: '0,00'
      }
    ];
    this.getCadastro = JSON.parse(localStorage.getItem('cadastro'));
    this.nameCliente = this.getCadastro['nome'];
  }
  // Criar serviço para consumir
  pegaSaldo() {
    this.statusCliente.forEach(item => {
      this.saldoCliente = item.saldo;
    });
  }
  pegaLimite() {
    this.statusCliente.forEach(item => {
      this.limeteCliente = item.limite;
    });
  }

  pegasaldoParcial() {
    this.statusCliente.forEach(item => {
      this.saldoParcial = item.saldoParcial;
    });
  }
  pegavalorParcela() {
    this.statusCliente.forEach(item => {
      this.valorParcela = item.valorParcela;
    });
  }
  pegasaldoBruto() {
    this.statusCliente.forEach(item => {
      this.saldoBruto = item.saldoBruto;
    });
  }
  pegasaldoPoupanca() {
    this.statusCliente.forEach(item => {
      this.saldoPoupanca = item.saldoPoupanca;
    });
  }

  ngAfterContentChecked() {
    this.pegaSaldo();
    this.pegaLimite();
    this.pegasaldoBruto();
    this.pegasaldoParcial();
    this.pegavalorParcela();
    this.pegasaldoPoupanca();
  }
}