import { Component, Input, OnInit } from '@angular/core';
import { Descricao } from '../models/descricao.class';

@Component({
  selector: 'app-lista-icone',
  templateUrl: './lista-icone.component.html',
  styleUrls: ['./lista-icone.component.css']
})
export class ListaIconeComponent implements OnInit{

  

  @Input() descricao!: Descricao
  constructor() { }

  ngOnInit(): void {

  }

  teste(){
    console.log("TESTE ", this.descricao)
  }

}
