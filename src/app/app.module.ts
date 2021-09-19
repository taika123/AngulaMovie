import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { CoreModule } from './modules/common/core.module';
import { DetailModule } from './modules/detail/detail.module';
import { HomeModule } from './modules/home/home.module';
import { MoviesModule } from './modules/movies/movies.module';
import { RoutingModule } from './modules/routing/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    DetailModule,
    AuthModule,
    MoviesModule,
    RoutingModule,
    RouterModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
