import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  public displayedColumns = ['select','studyId', 'oldParticipant', 'addressId', 'lastName','firstName','date','sex'];
  public dataSource = new MatTableDataSource(Participants);
  selection = new SelectionModel<Participant>(true, []);

  public isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  cites = [
    {value:"New York"},
    {value:"Pittsburgh"}
  ]

  public masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  public delete(){

  }

  public search(){

  }
}

export interface Participant {
  studyId:number;
  oldParticipantId:string;
  addressId:string;
  lastName:string;
  firstName:string;
  date:string;
  sex:string;
}

const Participants : Participant[] = [
  {studyId:1,oldParticipantId:"111",addressId:"111",lastName:"aaa",firstName:"aaa",date:"aaa",sex:"male"},
  {studyId:2,oldParticipantId:"222",addressId:"222",lastName:"bbb",firstName:"bbb",date:"bbb",sex:"female"},
  {studyId:3,oldParticipantId:"333",addressId:"333",lastName:"ccc",firstName:"ccc",date:"ccc",sex:"male"},
  {studyId:4,oldParticipantId:"444",addressId:"444",lastName:"ddd",firstName:"ddd",date:"ddd",sex:"male"},
  {studyId:5,oldParticipantId:"555",addressId:"555",lastName:"eee",firstName:"eee",date:"eee",sex:"female"}
];

