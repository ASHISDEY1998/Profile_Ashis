import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  emailContent: string = 'ashisdey128@gmail.com';
  phoneContent: string = '+91 8249770133';
  whatsupContent: string = '+91 8249770133';

  notificationVisible: boolean = false;
  notificationMessage: string = '';

  @ViewChild('notificationPopper') notificationPopper!: ElementRef;

  constructor(private renderer: Renderer2) { }

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
