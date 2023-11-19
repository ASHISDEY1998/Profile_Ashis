import { Component } from '@angular/core';
import { GlobalServiceService } from './services/global-service.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  profileData: any = {};
  loading: boolean = true;
  constructor(private globalService: GlobalServiceService) { }

  ngOnInit(): void {
    this.fetchProfile()
  }
  fetchProfile(): void {
    this.globalService.getProfile()
      .pipe(map(res => {
        const profiles = []
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            profiles.push({ ...res[key], id: key })
          }
        }
        return profiles[0]
      }))
      .subscribe(profiles => {
        this.profileData = { ...profiles };
        this.loading = false;
      });
  }
}
