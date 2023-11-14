import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';
import { GlobalServiceService } from 'src/app/services/global-service.service';
import { AngularFireStorage } from "@angular/fire/compat/storage"

@Component({
  selector: 'app-editexp',
  templateUrl: './editexp.component.html',
  styleUrls: ['./editexp.component.scss']
})
export class EditexpComponent implements OnInit {
  editExps: any = [];
  uploadingImage: boolean = false;
  loading: boolean = true;
  imageUrl: string;
  fileName: string = 'Choose Logo';
  editMode: boolean = false;
  currentExpId: string;


  constructor(private globalService: GlobalServiceService, private firestorage: AngularFireStorage) { }

  ngOnInit(): void {
    this.fetchExps()
  }

  @ViewChild('expForm') expform: NgForm;

  onExpSubmit() {

    let expObj = {
      company: this.expform.value.companyname,
      compImgUrl: this.imageUrl,
      description: this.expform.value.jobdesc,
      jobStartDate: this.expform.value.jobStartDate,
      jobEndDate: this.expform.value.jobEndDate == undefined || null ? "Present" : this.expform.value.jobEndDate,
      designation: this.expform.value.designation
    }
    if (this.editMode) {
      this.globalService.updateExps(this.currentExpId, expObj).subscribe(res => {
        this.fetchExps();
        this.imageUrl = ''
        this.fileName = 'Choose Logo';
        this.expform.form.reset()
        this.currentExpId = '';
        this.editMode = false;
      })
    } else {
      this.globalService.addExps(expObj).subscribe(res => {
        this.fetchExps();
        this.imageUrl = ''
        this.fileName = 'Choose Logo';
        this.expform.form.reset()
      })
    }

  }

  async onFileChange(event: any) {
    this.uploadingImage = true;
    const file = event.target.files[0]
    this.fileName = file.name
    this.imageUrl = ''
    if (file) {
      const path = `expCompanyLogoImg/${file.name}`;
      const uploadTask = await this.firestorage.upload(path, file);
      this.imageUrl = await uploadTask.ref.getDownloadURL();
    }
    this.uploadingImage = false;
  }

  fetchExps(): void {
    this.globalService.getExps()
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
        this.editExps = [...exps];
        this.loading = false;
      });
  }
  onDeleteExp(id: string) {
    this.globalService.deleteExps(id)
      .subscribe(res => {
        this.fetchExps();
      })
  }

  onEditExp(id: string) {
    this.fileName = 'Choose Logo';
    this.imageUrl = ''
    this.currentExpId = id;
    this.editMode = true;
    let currentExp = this.editExps.find((exp) => {
      return exp.id === id;
    })
    this.imageUrl = currentExp.compImgUrl
    this.expform.setValue({
      companyname: currentExp.company,
      designation: currentExp.designation,
      jobdesc: currentExp.description,
      jobStartDate: currentExp.jobStartDate,
      isCurrentJob: currentExp.jobEndDate == "Present" ? true : false,
      jobEndDate: currentExp.jobEndDate == "Present" ? null : currentExp.jobEndDate,
      companyimage: ''
    })
    // window.scrollTo(0, document.getElementById("my-element").offsetTop);
    window.scroll({ top: 0, behavior: "smooth" })
  }

}
