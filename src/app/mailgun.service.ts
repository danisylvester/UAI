import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MailgunService {

  constructor(private http: HttpClient) { }

  sendEmail(to: string,
            from: string,
            subject: string,
            message: string): Observable<any>{
      const url = 'http://127.0.0.1:8080/hello';
      const body = {
        to,
        from ,
        subject,
        message
      };
      const headers = new HttpHeaders().set('Content-Type', 'application/json');

      return this.http.post<any>(url, JSON.stringify(body), {
        headers
      });
    }
}
