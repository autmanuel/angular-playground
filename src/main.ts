import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import moment from "moment"
import 'moment/locale/de-at';
moment.locale('de-at')
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
