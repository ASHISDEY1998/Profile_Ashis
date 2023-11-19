import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
  profileData: any = {};
  loading: boolean = true;
  editMode: boolean = false;
  uploadingImage: boolean = false;
  uploadingResume: boolean = false;
  imageUrl: string = '';
  resumeUrl: string = '';
  imgName: string = 'Choose Logo';
  resName: string = 'Choose Logo';
  currentProfileId: string = '';

  constructor(private globalService: GlobalServiceService, private firestorage: AngularFireStorage) { }

  ngOnInit(): void {
    this.fetchProfile();
  }
  @ViewChild('profileForm') profileform: NgForm;

  onProfileSubmit() {
    this.loading = true;
    let profileObj = {
      nameFull: this.profileform.value.profileName,
      nickName: this.profileform.value.nicName,
      jobProfile: this.profileform.value.jobProfile,
      jobDescription: this.profileform.value.jobDesc,
      resumeUrl: this.resumeUrl,
      imageUrl: this.imageUrl,
      phoneNumber: this.profileform.value.phNumber,
      emailId: this.profileform.value.emailId,
      whatsappNo: this.profileform.value.whatsappNum ? this.profileform.value.whatsappNum : this.profileform.value.phNumber,
      footerDescription: this.profileform.value.footerDesc ? this.profileform.value.footerDesc : '',
      linkedinUrl: this.profileform.value.linkediId ? this.profileform.value.linkediId : '',
      githubUrl: this.profileform.value.githubId ? this.profileform.value.githubId : '',
      twiterUrl: this.profileform.value.twitterId ? this.profileform.value.twitterId : '',
    }
    if (this.editMode) {
      this.globalService.updateProfile(this.currentProfileId, profileObj).subscribe(res => {
        this.fetchProfile();
        this.imageUrl = ''
        this.resumeUrl = ''
        this.resName = 'Choose Logo';
        this.imgName = 'Choose Logo';
        this.profileform.form.reset()
        this.currentProfileId = '';
        this.editMode = false;
      })
    } else {
      this.globalService.addProfile(profileObj).subscribe(res => {
        this.fetchProfile();
        this.imageUrl = ''
        this.resumeUrl = ''
        this.resName = 'Choose Logo';
        this.imgName = 'Choose Logo';
        this.profileform.form.reset()
      })
    }
  }
  async onImageChange(event: any) {
    this.uploadingImage = true;
    const file = event.target.files[0]
    this.imgName = file.name
    this.imageUrl = ''
    if (file) {
      const path = `myProfile/DP/${file.name}`;
      const uploadTask = await this.firestorage.upload(path, file);
      this.imageUrl = await uploadTask.ref.getDownloadURL();
    }
    this.uploadingImage = false;
  }
  async onResFileChange(event: any) {
    this.uploadingResume = true;
    let file = event.target.files[0]
    this.resName = file.name
    this.resumeUrl = ''
    if (file) {
      const path = `myProfile/Resume/${file.name}`;
      const uploadTask = await this.firestorage.upload(path, file);
      this.resumeUrl = await uploadTask.ref.getDownloadURL();
    }
    this.uploadingResume = false;
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
  onEditProfile(profile) {
    this.resName = 'Choose Logo';
    this.imgName = 'Choose Logo';
    this.imageUrl = ''
    this.resumeUrl = ''
    this.currentProfileId = profile.id;
    this.editMode = true;
    let edProfileData = profile;
    this.imageUrl = edProfileData.imageUrl
    this.resumeUrl = edProfileData.resumeUrl
    this.profileform.setValue({
      profileName: edProfileData.nameFull,
      nicName: edProfileData.nickName,
      jobProfile: edProfileData.jobProfile,
      jobDesc: edProfileData.jobDescription,
      phNumber: edProfileData.phoneNumber,
      whatsappNumCheck: edProfileData.whatsappNo == edProfileData.phoneNumber ? true : false,
      whatsappNum: edProfileData.whatsappNo,
      emailId: edProfileData.emailId,
      footerDesc: edProfileData.footerDescription,
      linkediId: edProfileData.linkedinUrl,
      githubId: edProfileData.githubUrl,
      twitterId: edProfileData.twiterUrl,
      uploadResumeComp: '',
      profileimage: '',
    })
    // window.scrollTo(0, document.getElementById("my-element").offsetTop);
    // window.scroll({ top: 0, behavior: "smooth" })
  }

}
