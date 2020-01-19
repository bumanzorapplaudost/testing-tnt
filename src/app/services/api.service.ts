import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl =
    'https://trainee-program.herokuapp.com/api/v1/products?include=image_attachment.blob,category,master';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get(this.baseUrl)
      .pipe(map((response: any) => response.data));
  }
}
