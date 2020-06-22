import { Component, OnInit, ViewChild } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit {

  peoples:any[] = [];
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  constructor(private _peopleServie: PeopleService) {
    this.peoples = _peopleServie.peopleArray;
   }

  ngOnInit(): void {
    console.log(this.peoples,"la people");
  }

  goToEnd() {
    this.viewport.scrollToIndex(this.peoples.length);
  }

  toBeginning() {
    this.viewport.scrollToIndex(this.peoples[0]);
  }

  toMiddle(){
    this.viewport.scrollToIndex(this.peoples.length / 2);
  }
  
}
