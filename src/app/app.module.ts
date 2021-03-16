import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF, DatePipe } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './views/layout/layout.module';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

// guard
import { AuthGuard } from './core/guard/auth.guard';
// Services
import { AuthService } from './core/services/auth.service';
import { HttpService } from './core/services/http.service';
import { CanDeactivateGuard } from './core/services/can-deactivate-guard.service';
import { SweetAlertService } from './core/services/sweet-alerts.service';
import { EnumService } from './core/services/enum.service';
// Permission
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    // Permission
    NgxPermissionsModule.forRoot(),
  ],
  providers: [
    // App
    DatePipe,
    // Services
    AuthGuard,
    AuthService,
    HttpService,
    CanDeactivateGuard,
    SweetAlertService,
    EnumService,
    // Guard
    AuthGuard,
    {
      provide: HIGHLIGHT_OPTIONS, // https://www.npmjs.com/package/ngx-highlightjs
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
