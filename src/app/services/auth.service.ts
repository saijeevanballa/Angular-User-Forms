import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

const contentType ={responseType: 'text'}

@Injectable()
export class AuthService {
  private baseUrl = "https://ztoic-3000.sse.codesandbox.io/v1";
  constructor(private http: HttpClient) {}

  login(body):Observable<string>{
    return this.http.post<any>(`${this.baseUrl}/user/login`, body, contentType)
  }
  register(body):Observable<string>{
    return this.http.post<any>(`${this.baseUrl}/user/register`, body, contentType)
  }
}
