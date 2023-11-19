import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { GlobalServiceService } from 'src/app/services/global-service.service';
declare var $: any; // Declare $ to use jQuery

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('navbarToggler') navbarToggler: ElementRef;
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
  closeMenu(): void {
    $(this.navbarToggler.nativeElement).click();
  }


}
