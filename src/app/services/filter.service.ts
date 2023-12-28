import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Filter } from '../models/filter.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/filter'
  }

  public findAll(): Observable<Filter[]> {
    const url = `${this.baseUrl}/all`;
    return this.http.get<Filter[]>(url);
  }

  public save(filter: Filter) {
    return this.http.post(this.baseUrl, filter, { responseType: 'text' });
  }

}
