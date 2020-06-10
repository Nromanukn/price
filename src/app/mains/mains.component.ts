import { Component, OnInit } from '@angular/core';
import { AllService } from '../service/all.service';
@Component({
  selector: 'app-mains',
  templateUrl: './mains.component.html',
  styleUrls: ['./mains.component.css']
})
export class MainsComponent implements OnInit {
  constructor(public allService: AllService ) { }

  ngOnInit(): void {
  }

}
