import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  private skillsUrl = 'assets/pageData/skills.json';

  constructor(private http: HttpClient) { }

  getSkills(): Observable<any[]> {
    return this.http.get<any[]>(this.skillsUrl);
  }
}
