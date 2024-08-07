import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"first-authentication-pro-61dc4","appId":"1:803676304411:web:bf8e0a14b48abeb88774be","storageBucket":"first-authentication-pro-61dc4.appspot.com","apiKey":"AIzaSyB_C2g5SNkh3gaqm5qwua7tcCbLMpayscQ","authDomain":"first-authentication-pro-61dc4.firebaseapp.com","messagingSenderId":"803676304411"})), provideAuth(() => getAuth())]
};
