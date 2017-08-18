import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem, Message} from 'primeng/primeng';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  ques_type: SelectItem[];
  items: MenuItem[];
  data: any;
  constructor() {
    this.items = [];
    this.items.push({label: '我的问卷'});
    this.items.push({label: '统计信息'});
    this.ques_type = [];
    this.ques_type.push({label: '统计图表', value: 'graph'});
    this.ques_type.push({label: '回收概况', value: 'summary'});
    this.ques_type.push({label: '样本数据', value: 'sample'});
    this.ques_type.push({label: '交叉分析', value: 'cross'});
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
  }

  ngOnInit() {
    // this.data = sessionStorage.getItem('quesDetail');
  }

}
