import { Component, OnInit } from '@angular/core';
import {Validators, FormControl, FormGroup, FormBuilder , FormArray} from '@angular/forms';
import { Http } from '@angular/http';
@Component({
  selector: 'app-pre-questionaire',
  templateUrl: './pre-questionaire.component.html',
  styleUrls: ['./pre-questionaire.component.css']
})
export class PreQuestionaireComponent implements OnInit {
  data: any;
  formModel: FormGroup;
  constructor(private fb: FormBuilder, private http: Http) { }

  ngOnInit() {
    this.data = JSON.parse(sessionStorage.getItem('questionaire'));
    console.log(this.data);
  }
  submit() {
    console.log(this.data);
  }
  setTrue(dd, index) {
    for (let i = 0; i < dd.optionList.length; i++) {
      if (i === index) {
          dd.optionList[i].selected = true;
      } else {
        dd.optionList[i].selected = false;
      }
    }
  }
}
