import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-career-proj-page',
  templateUrl: './career-proj-page.component.html',
  styleUrls: ['./career-proj-page.component.scss']
})
export class CareerProjPageComponent implements OnInit {
  jobHistory: any = [];
  jobloading: boolean = true;


  constructor(private globalServiceService: GlobalServiceService) { }

  ngOnInit(): void {
    this.fetchJobHistory();
  }

  fetchJobHistory(): void {
    this.globalServiceService.getExps()
      .pipe(map(res => {
        const exps = []
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            exps.push({ ...res[key], id: key })
          }
        }
        return exps.reverse()
      }))
      .subscribe(exps => {
        this.jobHistory = [...exps];
        this.jobloading = false;
      });
  }
}
