import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'auth.guard';
import { AuthService } from 'auth.service';
import { ModalNoCadastroComponent } from './modal-no-cadastro/modal-no-cadastro.component';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { SingletonRouterService } from 'src/services/singletonRouter.service';
import { PlanosComponent } from './planos/planos.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MatInputModule } from '@angular/material/input';


export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CadastroClientesComponent,
    CadastroConcluidoComponent,
    HomeLoginComponent,
    LoginComponent,
    ModalNoCadastroComponent,
    AcessoNegadoComponent,
    PlanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    NgxMaskModule.forRoot(options)
  ],
  providers: [SingletonRouterService, AuthGuard, AuthService],
  entryComponents: [ModalNoCadastroComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
