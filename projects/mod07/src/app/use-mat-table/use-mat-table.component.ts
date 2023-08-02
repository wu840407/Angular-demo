import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MeetingRoom, meetingRooms } from '../service/meeting-room';

@Component({
  selector: 'app-use-mat-table',
  templateUrl: './use-mat-table.component.html',
  styles: [
  ]
})
export class UseMatTableComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  roomDataSource!: MatTableDataSource<MeetingRoom>;
  displaySequence: string[] = ["id", "name", "size", "projector", "tv"];
  constructor() {

  }

  ngOnInit(): void {

  }
  ngAfterContentInit() {
    this.roomDataSource = new MatTableDataSource(meetingRooms);
  }
  ngAfterViewInit(){
    this.roomDataSource.paginator = this.paginator;    
    this.roomDataSource.sort = this.sort;
  }


  RowClick(row: any) {
    console.log(row);
  }
  getTotalSize(){
    return meetingRooms.map(r => r.size).reduce((previousValue,currentValue)=> previousValue+currentValue);
  }

}
