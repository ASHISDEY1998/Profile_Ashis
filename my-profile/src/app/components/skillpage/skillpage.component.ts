import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../../services/global-service.service';
import { map } from 'rxjs';

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
    this.globalServiceService.getSkills()
      .pipe(map(res => {
        const skills = []
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            skills.push({ ...res[key], id: key })
          }
        }
        return skills
      }))
      .subscribe(skills => {

        this.skills = [...skills];
        this.loading = false;
      });
  }
}
