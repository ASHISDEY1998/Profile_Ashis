import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
  @Input() jobName: string = '';
  @Input() companyLogo: string = '';
  @Input() tenureStart;
  @Input() tenureEnd ;
  @Input() companyDesc: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
