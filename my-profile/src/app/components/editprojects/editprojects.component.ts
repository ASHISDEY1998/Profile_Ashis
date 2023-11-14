import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-editprojects',
  templateUrl: './editprojects.component.html',
  styleUrls: ['./editprojects.component.scss']
})
export class EditprojectsComponent implements OnInit {
  editProjs: any = [];
  uploadingImage: boolean = false;
  loading: boolean = true;
  imageUrl: string;
  fileName: string = 'Choose image';
  editMode: boolean = false;
  currentProjId: string;

  constructor(private globalService: GlobalServiceService, private firestorage: AngularFireStorage) { }

  ngOnInit(): void {
    this.fetchProjs()
  }

  @ViewChild('projForm') projform: NgForm;

  onProjSubmit() {

    let projObj = {
      projectName: this.projform.value.projname,
      projImgUrl: this.imageUrl,
      description: this.projform.value.projdesc
    }
    // console.log(expObj)
    if (this.editMode) {
      this.globalService.updateProjects(this.currentProjId, projObj).subscribe(res => {
        this.fetchProjs();
        this.imageUrl = ''
        this.fileName = 'Choose Logo';
        this.projform.form.reset()
        this.currentProjId = '';
        this.editMode = false;
      })
    } else {
      this.globalService.addProjects(projObj).subscribe(res => {
        this.fetchProjs();
        this.imageUrl = ''
        this.fileName = 'Choose image';
        this.projform.form.reset()
      })
    }

  }

  async onFileChange(event: any) {
    this.uploadingImage = true;
    const file = event.target.files[0]
    this.fileName = file.name
    this.imageUrl = ''
    if (file) {
      const path = `projectsImg/${file.name}`;
      const uploadTask = await this.firestorage.upload(path, file);
      this.imageUrl = await uploadTask.ref.getDownloadURL();
    }
    this.uploadingImage = false;
  }

  fetchProjs(): void {
    this.globalService.getProjects()
      .pipe(map(res => {
        const exps = []
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            exps.push({ ...res[key], id: key })
          }
        }
        return exps
      }))
      .subscribe(exps => {
        this.editProjs = [...exps];
        this.loading = false;
      });
  }
  onDeleteProjs(id: string) {
    this.globalService.deleteProjects(id)
      .subscribe(res => {
        this.fetchProjs();
      })
  }

  onEditProjs(id: string) {
    this.fileName = 'Choose Logo';
    this.imageUrl = ''
    this.currentProjId = id;
    this.editMode = true;
    let currentProj = this.editProjs.find((exp) => {
      return exp.id === id;
    })
    this.imageUrl = currentProj.projImgUrl
    this.projform.setValue({
      projname: currentProj.projectName,
      projdesc: currentProj.description,
      projimage: ''
    })
    window.scroll({ top: 0, behavior: "smooth" })
  }

}
