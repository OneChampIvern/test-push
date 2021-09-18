import { Component, OnInit } from '@angular/core';
import { QuizzSerciveService } from '../service/quizz-sercive.service';

@Component({
  selector: 'app-over-view',
  templateUrl: './over-view.component.html',
  styleUrls: ['./over-view.component.css']
})
export class OverViewComponent implements OnInit {
    overview:any;
  constructor(private quizz:QuizzSerciveService) { }

  ngOnInit(): void {
    this.quizz.testData.subscribe(data=>{
      this.overview=data;

    })
  }

}
