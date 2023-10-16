import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

export class HttpService {
  private _baseUrl: string;

  constructor(private http: HttpClient, private baseUrl?: string) {
    this._baseUrl = baseUrl || environment.baseUrl;
  }

  protected get<T>(path: string, params: any): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${path}`, { params });
  }

  protected post<T>(path: string, payload: any, params: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${path}`, payload, { params });
  }
}
