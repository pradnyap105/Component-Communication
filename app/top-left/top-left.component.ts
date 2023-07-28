import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/shared.service';

@Component({
  selector: 'app-top-left',
  templateUrl: './top-left.component.html',
  styleUrls: ['./top-left.component.css'],
})
export class TopLeftComponent implements OnInit {
  message: string = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.message$.subscribe((message) => (this.message = message));
  }
}
