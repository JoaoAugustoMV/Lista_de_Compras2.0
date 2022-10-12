import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent} from "./components/header/header.component"
import { FooterComponent} from "./components/footer/footer.component"
import { ListaDeComprasComponent} from "./pages/lista-de-compras/listaDeCompras/lista-de-compras.component"
import { TabelaProdutosComponent } from './pages/lista-de-compras/tabela-produtos/tabela-produtos.component';
import { ListasSalvasComponent } from './pages/listas-salvas/listas-salvas.component'
import { ListaIconeComponent } from './pages/listas-salvas/lista-icone/lista-icone.component';
import { SalvarListaComponent } from './components/salvar-lista/salvar-lista.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { JanelaModalComponent } from './components/janela-modal/janela-modal.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatIconModule} from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatButtonModule} from '@angular/material/button'
import { MatTableModule} from '@angular/material/table'
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics'

import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListaDeComprasComponent,
    TabelaProdutosComponent,
    ListasSalvasComponent,
    ListaIconeComponent,
    SalvarListaComponent,
    SnackBarComponent,
    JanelaModalComponent,  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    // Angular Material
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,

    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,

    
  ],
  entryComponents: [ SalvarListaComponent], 
  providers: 
    [ {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}, ScreenTrackingService,UserTrackingService],
    bootstrap: [AppComponent,
    AngularFireAuth,
    AngularFireAuthModule,
    AngularFireModule
    ],
  
})
export class AppModule { }
