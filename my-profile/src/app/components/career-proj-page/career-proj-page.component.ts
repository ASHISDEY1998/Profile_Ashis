import { Component, OnInit } from '@angular/core';
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
    this.globalServiceService.getJobHistory().subscribe(skills => {
      this.jobHistory = [...skills];
      this.jobloading = false;
    });
  }
}
