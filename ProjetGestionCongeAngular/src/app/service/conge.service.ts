import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conge } from './../model/conge';


export class CongeService {

  private static URL = 'http://127.0.0.1:8080/conges/api/conge/id';
  private httpHeaders: HttpHeaders;
  constructor(private http: HttpClient) {
    this.initHeader();
  }

  private initHeader() {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ${localStorage.getItem('auth')}`,
    });
  }

  public list(): Observable<Conge[]> {
    this.initHeader();
    return this.http.get<Conge[]>(CongeService.URL, {
      headers: this.httpHeaders,
    });
  }
    public delete(id: number): Observable<void> {
      this.initHeader();
      return this.http.delete<void>(`${CongeService.URL}/${id}`, {
        headers: this.httpHeaders,
      });
}
  }
