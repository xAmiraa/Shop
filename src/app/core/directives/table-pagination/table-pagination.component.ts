import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TablePaginationComponent implements OnInit {

  @Input('count') count: number = 0;
  @Input('pageNumber') pageNumber: number = 1;
  @Output('notify') notify = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {

  }

  nextPage() {
    if(this.count < 20) {
      return;
    }
    this.pageNumber = this.pageNumber + 1;
    this.notify.emit(this.pageNumber);
  }

  previousPage() {
    if(this.pageNumber <= 1) {
      return;
    }
    this.pageNumber = this.pageNumber - 1;
    this.notify.emit(this.pageNumber);
  }

  reset() {
    this.pageNumber = 1;
    this.notify.emit(this.pageNumber);
  }

}
