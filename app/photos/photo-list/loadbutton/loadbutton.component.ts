import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ap-loadbutton',
  templateUrl: './loadbutton.component.html',
  styleUrls: ['./loadbutton.component.css']
})
export class LoadbuttonComponent implements OnInit {

  @Input () hasMore: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
