import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private API_BASE_URL: string = "http://localhost:8085";
  constructor(private http: HttpClient) {}

  post(uri: string, payload: any, options?: any) {
    if (options)
      return this.http.post(this.API_BASE_URL + uri, payload, options);
    return this.http.post(this.API_BASE_URL + uri, payload);
  }
  get(uri: string, header?: any) {
    if (header) return this.http.get(this.API_BASE_URL + uri, header);
    return this.http.get(this.API_BASE_URL + uri);
  }
  delete(uri: string) {
    return this.http.delete(this.API_BASE_URL + uri);
  }
  put(uri: string, payload: any) {
    return this.http.put(this.API_BASE_URL + uri, payload);
  }
  putAuth(uri: string, payload: any) {
    const header = this.getHeader();
    return this.http.put(this.API_BASE_URL + uri, payload, header);
  }
  postAuth(uri: string, payload: any) {
    const header = this.getHeader();
    return this.http.post(this.API_BASE_URL + uri, payload, header);
  }
  getAuth(uri: string) {
    const header = this.getHeader();
    return this.http.get(this.API_BASE_URL + uri, header);
  }
  deleteAuth(uri: string) {
    const header = this.getHeader();
    return this.http.delete(this.API_BASE_URL + uri, header);
  }

  getHeader() {
    const token = sessionStorage.getItem("SESSION_TOKEN");
    const headers = new HttpHeaders({
      Authorization: "bearer " + (token || ""),
    });
    return { headers: headers };
  }
}
