import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../../services/global-service.service';

@Component({
  selector: 'app-skillpage',
  templateUrl: './skillpage.component.html',
  styleUrls: ['./skillpage.component.scss']
})
export class SkillpageComponent implements OnInit {
  skills: any = [];
  loading: boolean = true;

  constructor(private globalServiceService: GlobalServiceService) { }

  ngOnInit(): void {
    this.fetchSkills();
  }

  fetchSkills(): void {
    this.globalServiceService.getSkills().subscribe(skills => {
      this.skills = [...skills];
      this.loading = false;
    });
  }
}
