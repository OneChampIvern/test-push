import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { QuizzSerciveService } from '../service/quizz-sercive.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  public formCode!:FormGroup;
  error:number=0;
  quizzData:any;
  constructor(
    private _formBuilder:FormBuilder,
    private getQuizz:QuizzSerciveService,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.createForm()
  }
  createForm(){
    this.formCode=this._formBuilder.group({
      code:['',[Validators.required]]
    })
    }
    onSubmitForm(){
      if(this.formCode.value.code=="fafafa"){
        this.error=0;
        this.getQuizz.startQuizz(this.formCode.value).subscribe((data:any)=>{
          this.quizzData=data;
          this.getQuizz.testData.next(this.quizzData);
          this.router.navigate(['/quiz-overview'])
        })
      }
      else{
        this.error=-1;
      }
    }
}
