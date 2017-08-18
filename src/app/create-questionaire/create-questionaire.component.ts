import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem, Message} from 'primeng/primeng';
import {Validators, FormControl, FormGroup, FormBuilder , FormArray} from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import set = Reflect.set;
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-questionaire',
  templateUrl: './create-questionaire.component.html',
  styleUrls: ['./create-questionaire.component.css']
})
export class CreateQuestionaireComponent implements OnInit {
  items: MenuItem[];
  ques_type: SelectItem[];
  askTyle: string;
  formModel: FormGroup;
  checkbox: FormGroup;
  radio: FormGroup;
  type: any;
  singleLine: FormGroup;
  mutiLine: FormGroup;
  msgs: Message[] = [];
  constructor(private fb: FormBuilder, private http: Http, private router: Router) {
    this.ques_type = [];
    this.ques_type.push({label: '单选题', value: 'radio'});
    this.ques_type.push({label: '多选题', value: 'checkbox'});
    this.ques_type.push({label: '单行文本', value: 'singleLine'});
    this.ques_type.push({label: '多行文本', value: 'mutiLine'});
  }

  ngOnInit() {
    this.formInit();
  }
  addSubject(type) { // 添加题目
    const subject = this.formModel.get('subject') as FormArray;
    if (!this.formModel.valid && subject.length !== 0) {
      this.msgs.push({severity: 'warn', detail: '还有未填项'});
      setTimeout(function(){
        this.msgs = [];
      }, 1000);
      return;
    }
    if (type)  {
      this.type = type;
      subject.push(
        this.fb.group({
          title: ['', [Validators.required ]],
          description: ['', [Validators.required]],
          askType: [type, [Validators.required ]],
          isRequire: ['', []],
          values: ['', []],
          optionList: this.fb.array([]),
        })
      );
    }
    console.log(this.formModel.value);
    console.log(this.formModel.get('subject'));
  }
  addOption(n, dd) { // 添加选项
    const optionList = dd.get('optionList') as FormArray;
    optionList.push(this.fb.group({
      'name': ['', [Validators.required ]],
      'selected': [false, [Validators.required ]]
    }));
  }
  delOption(dd, n) { // 删除选项
    const optionList = dd.get('optionList') as FormArray;
    optionList.removeAt(n);
  }
  submit() { // 投放问卷
    console.log(this.formModel.value)
      const that = this;
      this.http.post('http://127.0.0.1:3000/addQuestionaire', this.formModel.value)
        .map(data => data.json())
        .subscribe(function(data){
          console.log(data);
          if (data.result === 0) {
            that.msgs.push({severity: 'success', detail: '成功'});
            setTimeout(function(){
              this.msgs = [];
            }, 1000);
          }
        });
  }
  formInit() {
    this.formModel = this.fb.group({
      'title': ['', [Validators.required]],
      'description': ['为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位用户的宝贵意见，期待您的参与！现在我们就马上开始吧！', [Validators.required]],
      'subject': this.fb.array([
        this.fb.group( {
          title: ['', [Validators.required ]],
          askType: ['checkbox', [Validators.required ]],
          description: ['', [Validators.required]],
          isRequire: [0, []],
          values: ['', []],
          optionList: this.fb.array([
            this.fb.group({
              'name': ['', [Validators.required ]],
              'selected': [false, [Validators.required ]],
            })]
          )
        })
      ])
    });
  }
  preQues() {
    sessionStorage.setItem('questionaire', JSON.stringify(this.formModel.value));
    this.router.navigate(['../preQuestionaire']);
  }
  delSubject(i) {
    (this.formModel.get('subject') as FormArray).removeAt(i);
  }
}
