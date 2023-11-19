import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  isAdminLogin = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient) { }

  getProfile() {
    return this.http.get('https://ashis-developer-portfolio-default-rtdb.firebaseio.com/profile.json');
  }
  addProfile(profileObj) {
    return this.http.post('https://ashis-developer-portfolio-default-rtdb.firebaseio.com/profile.json', profileObj);
  }
  updateProfile(id, value) {
    return this.http.put('https://ashis-developer-portfolio-default-rtdb.firebaseio.com/profile/' + id + '.json', value)
  }


  getSkills() {
    return this.http.get('https://ashis-developer-portfolio-default-rtdb.firebaseio.com/skills.json');
  }
  addSkill(skillObj) {
    return this.http.post('https://ashis-developer-portfolio-default-rtdb.firebaseio.com/skills.json', skillObj);
  }
  updateSkill(id, value) {
    return this.http.put('https://ashis-developer-portfolio-default-rtdb.firebaseio.com/skills/' + id + '.json', value)
  }
  deleteSkill(id) {
    return this.http.delete('https://ashis-developer-portfolio-default-rtdb.firebaseio.com/skills/' + id + '.json')
  }


  getExps() {
    return this.http.get('https://ashis-developer-portfolio-default-rtdb.firebaseio.com/experience.json');
  }
  addExps(expObj) {
    return this.http.post('https://ashis-developer-portfolio-default-rtdb.firebaseio.com/experience.json', expObj);
  }
  updateExps(id, value) {
    return this.http.put('https://ashis-developer-portfolio-default-rtdb.firebaseio.com/experience/' + id + '.json', value)
  }
  deleteExps(id) {
    return this.http.delete('https://ashis-developer-portfolio-default-rtdb.firebaseio.com/experience/' + id + '.json')
  }

  getProjects() {
    return this.http.get('https://ashis-developer-portfolio-default-rtdb.firebaseio.com/projects.json');
  }
  addProjects(expObj) {
    return this.http.post('https://ashis-developer-portfolio-default-rtdb.firebaseio.com/projects.json', expObj);
  }
  updateProjects(id, value) {
    return this.http.put('https://ashis-developer-portfolio-default-rtdb.firebaseio.com/projects/' + id + '.json', value)
  }
  deleteProjects(id) {
    return this.http.delete('https://ashis-developer-portfolio-default-rtdb.firebaseio.com/projects/' + id + '.json')
  }

  isAuthenticated(): any {
    return this.isAdminLogin
  }
  login(username: string, password: string): Observable<boolean> {
    if (username === 'Ashis' && password === 'MyPass') {
      this.isAdminLogin.next(true);
      return of(true);
    }
    else {
      this.isAdminLogin.next(false);
      alert("Wrong Password")
      return of(false);
    }

  }

}
