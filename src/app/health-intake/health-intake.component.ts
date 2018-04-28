import {Component, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-health-intake',
  templateUrl: './health-intake.component.html',
  styleUrls: ['./health-intake.component.css']
})
export class HealthIntakeComponent implements OnInit {

  constructor() { }
  public displayedColumns = ['select','studyId','respDate','eyeIrritate','visionProb','ringEar','decSmell','runNose','sinusProb'];
  public dataSource = new MatTableDataSource(healthIntakeForm);
  selection = new SelectionModel<healthIntake>(true, []);
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


export interface healthIntake {
  studyId:string;
  respDate:string;
  eyeIrritate:string;
  visionProb:string;
  ringEar:string;
  decSmell:string;
  runNose:string;
  sinusProb:string;
}

const healthIntakeForm: healthIntake[] = [
  {studyId:"111",respDate:"111",eyeIrritate:"111",visionProb:"1",ringEar:"1",decSmell:"1",runNose:"1",sinusProb:"1"},
  {studyId:"222",respDate:"222",eyeIrritate:"222",visionProb:"2",ringEar:"2",decSmell:"2",runNose:"2",sinusProb:"2"},
  {studyId:"333",respDate:"333",eyeIrritate:"333",visionProb:"3",ringEar:"3",decSmell:"3",runNose:"3",sinusProb:"3"},
]
