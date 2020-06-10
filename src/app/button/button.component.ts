import { Component, OnInit} from '@angular/core';
import { AllService } from '../service/all.service';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  constructor(public allService: AllService ) { }

  ngOnInit(): void {
  }
  select(id: number) {
    this.allService.onToggle(id);

  }
}
