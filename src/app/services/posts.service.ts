import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PostService {
  
  private baseUrl = "https://ztoic-3000.sse.codesandbox.io/api/";
  constructor(private http: HttpClient) {}
}
