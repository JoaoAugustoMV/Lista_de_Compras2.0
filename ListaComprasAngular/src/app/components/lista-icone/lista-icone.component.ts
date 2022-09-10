import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Descricao } from '../models/descricao.class';

@Component({
  selector: 'app-lista-icone',
  templateUrl: './lista-icone.component.html',
  styleUrls: ['./lista-icone.component.css']
})
export class ListaIconeComponent implements OnInit{

  

  @Input() descricao!: Descricao
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { 

    // this.matIconRegistry.addSvgIcon('iconeDeletar', 
    //   this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/icons8-trash-150.svg'))
  }

  ngOnInit(): void {

  }

  deletarLista(){
    console.log("TESTE ", this.descricao)
  }

}
