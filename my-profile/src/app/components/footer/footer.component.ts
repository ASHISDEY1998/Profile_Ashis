import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { map } from 'rxjs';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  notificationVisible: boolean = false;
  notificationMessage: string = '';

  @ViewChild('notificationPopper') notificationPopper!: ElementRef;

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

  copyToClipboard(content: string) {
    const textArea = document.createElement('textarea');
    textArea.value = content;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    this.notificationVisible = true;
    this.notificationMessage = `Copied: ${content}`;
    setTimeout(() => {
      this.notificationVisible = false;
      this.notificationMessage = '';
    }, 4000);
  }

}
