import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any; // Declare $ to use jQuery

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('navbarToggler') navbarToggler: ElementRef;
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

  }
  closeMenu(): void {
    $(this.navbarToggler.nativeElement).click();
  }


}
