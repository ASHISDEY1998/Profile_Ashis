import { Component, Input, OnInit } from '@angular/core';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-project-experience',
  templateUrl: './project-experience.component.html',
  styleUrls: ['./project-experience.component.scss']
})
export class ProjectExperienceComponent implements OnInit {
  projectList: any = [];
  projloading: boolean = true;

  constructor(private globalServiceService: GlobalServiceService) { }

  ngOnInit(): void {
    this.fetchSkills();
  }

  slideConfig = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          prevArrow: null,
          nextArrow: null,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          prevArrow: null,
          nextArrow: null,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          prevArrow: null,
          nextArrow: null,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: null,
          nextArrow: null,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };


  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

  fetchSkills(): void {
    this.globalServiceService.getProjListUrl().subscribe(projs => {
      this.projectList = [...projs];
      this.projloading = false;
    });
  }





}
