import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment.development';
import { FormsModule } from '@angular/forms';
import { LibroService } from './services/libro.service';
import { ListadoLibrosComponent } from './pages/listado-libros/listado-libros.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    LibroService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
