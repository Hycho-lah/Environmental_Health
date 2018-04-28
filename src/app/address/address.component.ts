import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {Participant} from '../participant/participant.component';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  public displayedColumns = ['select','addressID','houseID','state','county','city','zipCode','latitude','longitude'];
  public dataSource = new MatTableDataSource(addresses);
  selection = new SelectionModel<address>(true, []);
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

export interface address {
  addressID:string;
  houseID:string;
  state:string;
  county:string;
  city:string;
  zipCode:string;
  latitude:string;
  longitude:string
}

const addresses: address[] = [
  {addressID:"111",houseID:"111",state:"aa",county:"aaa",city:"aaa",zipCode:"111",latitude:"111",longitude:"111"},
  {addressID:"222",houseID:"222",state:"bb",county:"bbb",city:"bbb",zipCode:"222",latitude:"222",longitude:"222"},
  {addressID:"333",houseID:"333",state:"cc",county:"ccc",city:"ccc",zipCode:"333",latitude:"333",longitude:"333"},
]
