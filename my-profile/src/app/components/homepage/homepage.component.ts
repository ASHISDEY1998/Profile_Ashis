import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
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
