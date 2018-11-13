import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.css']
})
export class ListHeaderComponent implements OnInit {

  @Input()
  public sortDirection: string;

  @Output()
  sort: EventEmitter<string> = new EventEmitter();

  sortField: string;
  hover: string;

  constructor() {
  }

  ngOnInit() {
  }

  doSort(column: string) {
    this.sortField = column;
    this.sort.emit(column);
  }

}
