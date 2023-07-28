import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/shared.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css'],
})
export class CenterComponent implements OnInit {
  message: string = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit() {}

  sendMessage() {
    this.sharedService.sendMessage(this.message);
  }
}
