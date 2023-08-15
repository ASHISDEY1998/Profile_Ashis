import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  private skillsUrl = 'assets/pageData/skills.json';
  private jobHistryUrl = 'assets/pageData/jobHistory.json';
  private projListUrl = 'assets/pageData/projectList.json';

  constructor(private http: HttpClient) { }

  getSkills(): Observable<any[]> {
    return this.http.get<any[]>(this.skillsUrl);
  }
  getJobHistory(): Observable<any[]> {
    return this.http.get<any[]>(this.jobHistryUrl);
  }
  getProjListUrl(): Observable<any[]> {
    return this.http.get<any[]>(this.projListUrl);
  }

}
