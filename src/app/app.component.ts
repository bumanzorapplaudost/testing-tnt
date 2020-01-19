import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Store } from '@ngrx/store';
import { AppState } from './store/state/app.state';
import { GetAllProductsAction } from './store/actions/product.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'store-test';
  constructor(private api: ApiService, private store: Store<AppState>) {}

  ngOnInit() {
    this.api.getAll().subscribe((response) => {
      this.store.dispatch(new GetAllProductsAction(response));
    });
  }
}
