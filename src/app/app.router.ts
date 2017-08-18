import { CreateQuestionaireComponent } from './create-questionaire/create-questionaire.component';
import { MyQuestionaireComponent } from './my-questionaire/my-questionaire.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PreQuestionaireComponent } from './pre-questionaire/pre-questionaire.component'
export const appRouter = [ // 路由模块
  {
    path: '',
    redirectTo: 'createQuestionaire',
    pathMatch: 'full'
  }, {
    path: 'createQuestionaire',
    component: CreateQuestionaireComponent
  },
  {
    path: 'myQuestionaire',
    component: MyQuestionaireComponent
  },
  {
    path: 'statistics',
    component: StatisticsComponent
  },
  {
    path: 'preQuestionaire',
    component: PreQuestionaireComponent
  },
  { path: '**', component: CreateQuestionaireComponent}
  // { path: '**', component: PageNotFoundComponent }:通配符路由
  // data属性用来存放于每个具体路由有关的任意信息。该数据可以被任何一个激活路由访问
  // ， 并能用来保存诸如 页标题、面包屑以及其它静态只读数据
];
