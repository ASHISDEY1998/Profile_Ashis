import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  constructor(private globalService: GlobalServiceService, private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log(event.url);
      if (event.url === '/admin') {
        this.isLogedin = false;
      }
    });
  }
  id: string = ''
  pass: string = ''
  isLogedin: boolean = false;
  ngOnInit(): void {
  }
  adminLogin() {
    this.globalService.login(this.id, this.pass).subscribe(args => {
      if (args) {
        this.isLogedin = true;
        this.router.navigate(['admin/editSite'])
      }
      else {
        this.isLogedin = false;
      }
    })
  }

}
