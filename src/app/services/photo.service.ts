import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL: string = environment.apiUrl;
const API_KEY: string = environment.API_KEY;

@Injectable({
    providedIn: 'root'
})
export class PhotoService {
    constructor(private http: HttpClient) { }

    public photos(): Observable<any> {
        return this.http.get<any>(`${API_URL}/photos/?client_id=${API_KEY}`);
    }

}