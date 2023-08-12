import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge-range-bar',
  templateUrl: './knowledge-range-bar.component.html',
  styleUrls: ['./knowledge-range-bar.component.scss']
})
export class KnowledgeRangeBarComponent implements OnInit {
  @Input() skillName: string = '';
  @Input() skillDescription: string = '';
  @Input() knowledgeLevel: number = 0;
  constructor() { }

  ngOnInit(): void {
  }


}
