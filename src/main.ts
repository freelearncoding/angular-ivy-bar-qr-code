import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then((ref: any) => {
  // Ensure Angular destroys itself on hot reloads.
  // if (window['ngRef']) {
  //   window['ngRef'].destroy();
  // }
  // window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch((err: any) => console.error(err));