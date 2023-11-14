import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-editskills',
  templateUrl: './editskills.component.html',
  styleUrls: ['./editskills.component.scss']
})
export class EditskillsComponent implements OnInit {
  editSkills: any = [];
  loading: boolean = true;
  editMode: boolean = false;
  currentSkillId: string;
  constructor(private globalService: GlobalServiceService) { }

  ngOnInit(): void {
    this.fetchSkills();
  }

  @ViewChild('skillForm') skillform: NgForm;

  onSkillSubmit() {
    let skillObj = {
      name: this.skillform.value.skillname,
      level: this.skillform.value.skillrange ? this.skillform.value.skillrange : 50,
      description: this.skillform.value.skilldesc
    }
    if (this.editMode) {
      this.globalService.updateSkill(this.currentSkillId, skillObj).subscribe(res => {
        this.fetchSkills();
        this.skillform.form.reset()
        this.currentSkillId = '';
        this.editMode = false;
      })
    } else {
      this.globalService.addSkill(skillObj).subscribe(res => {
        this.fetchSkills();
        this.skillform.form.reset()
      })
    }


  }

  fetchSkills(): void {
    this.globalService.getSkills()
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
        this.editSkills = [...skills];
        this.loading = false;
      });
  }
  onDeleteSkill(id: string) {
    this.globalService.deleteSkill(id)
      .subscribe(res => {
        this.fetchSkills();
      })
  }
  onEditSkill(id: string) {
    this.currentSkillId = id;
    this.editMode = true;
    let currentSkill = this.editSkills.find((skill) => {
      return skill.id === id;
    })
    this.skillform.setValue({
      skillname: currentSkill.name,
      skillrange: currentSkill.level,
      skilldesc: currentSkill.description
    })
    window.scroll({ top: 0, behavior: "smooth" })
  }

}
