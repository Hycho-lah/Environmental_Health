import {Component, OnInit, ViewChild} from '@angular/core';
import {s} from '@angular/core/src/render3';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {address} from '../address/address.component';

@Component({
  selector: 'app-sf36',
  templateUrl: './sf36.component.html',
  styleUrls: ['./sf36.component.css']
})
export class Sf36Component implements OnInit {
  constructor() { }
  public displayedColumns = ['select','studyId','respDate','eyeIrritate','GH01','HT','DF01','DF02','DF03'];
  public dataSource = new MatTableDataSource(sf36Forms);
  selection = new SelectionModel<sf36>(true, []);
  cites = [
    {value:"New York"},
    {value:"Pittsburgh"}
  ];
  public isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  public masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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


export interface sf36 {
  studyId:string;
  respDate:string;
  eyeIrritate:string;
  GH01:string;
  HT:string;
  DF01:string;
  DF02:string;
  DF03:string;
}

const sf36Forms: sf36[] = [
  {studyId:"111",respDate:"111",eyeIrritate:"111",GH01:"1",HT:"1",DF01:"1",DF02:"1",DF03:"1"},
  {studyId:"222",respDate:"222",eyeIrritate:"222",GH01:"2",HT:"2",DF01:"2",DF02:"2",DF03:"2"},
  {studyId:"333",respDate:"333",eyeIrritate:"333",GH01:"3",HT:"3",DF01:"3",DF02:"3",DF03:"3"},
]
