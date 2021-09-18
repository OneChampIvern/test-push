import { Component, OnInit } from '@angular/core';
import { QuizzSerciveService } from '../service/quizz-sercive.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  testQs:any;
  i:number=0;
  correct:any[]=[];
  constructor(private quizz:QuizzSerciveService,
    public router:Router) { }
  flag:boolean=false;
  ngOnInit(): void {
    this.quizz.startQuizz({code:'fafafa'}).subscribe(data=>{
      this.testQs=data
    })
  }
  getAnswer(e:any){
    console.log(e.target.value);
    if(e.target.value){
    this.correct[this.i]=[e.target.value]
    }
    else{
      this.correct[this.i]=''
    }
  }
  getChexboxAnswer(e:any){
    this.correct[this.i]=[]
    this.correct[this.i].push(e.target.value)

  }
  next(){
    this.i++;
    if (this.i>this.testQs.questions.length) {
    this.i=this.testQs.questions.length;
    this.flag =true;
    }
  }
  moveBack(){
    this.i--;
    if (this.i<0) {
      this.i=0;
    }
  }
  submit(){
    for (let i = 0;i < this.testQs.questions.length; i++) {

    }
    this.router.navigate(['/quiz-result'])
  }
}
