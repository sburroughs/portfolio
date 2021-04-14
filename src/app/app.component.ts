import {Component} from '@angular/core';
import {DataProviderService} from './util/data-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [
    DataProviderService
  ]
})
export class AppComponent {
}
