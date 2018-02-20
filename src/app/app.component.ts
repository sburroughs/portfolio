import {Component} from '@angular/core';
import {DataProviderService} from './util/data-provider.service';
import {Angulartics2GoogleTagManager} from "angulartics2/gtm";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [
    DataProviderService
  ]
})
export class AppComponent {
    constructor(angulartics: Angulartics2GoogleTagManager) {}
}
