import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-head-bar',
  templateUrl: './head-bar.component.html',
  styleUrls: ['./head-bar.component.css']
})
export class HeadBarComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  public logout(){
    this.router.navigateByUrl('');
  }

  public profile(){
    this.router.navigateByUrl('');
  }
}
