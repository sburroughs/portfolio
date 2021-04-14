import {Component} from '@angular/core';
import {ContentManagementService} from './util/content-management.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [
    ContentManagementService
  ]
})
export class AppComponent {
}
