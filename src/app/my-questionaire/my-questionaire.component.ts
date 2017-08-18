import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

import {Header} from 'primeng/primeng';
import {Footer} from 'primeng/primeng';

@Component({
  selector: 'app-my-questionaire',
  templateUrl: './my-questionaire.component.html',
  styleUrls: ['./my-questionaire.component.css']
})
export class MyQuestionaireComponent implements OnInit {
  quesList: Array<any>= [{title: 123, description: '123'},{title: 123, description: '123'},{title: 123, description: '123'}];
  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    this.http.get('http://127.0.0.1:3000/myQuestionaire')
      .map(data => data.json())
      .subscribe(data => {
        console.log(data);
        this.quesList.push(data.data);
      });
  }
  showGraph(i) {
    console.log(i)
    sessionStorage.setItem('quesDetail', JSON.stringify(this.quesList[i]));
    this.router.navigate(['../statistics']);
  }
}
