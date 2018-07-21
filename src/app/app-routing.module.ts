import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent} from "./header/header.component";
import { CompanyComponent} from "./header/company/company.component";
import { BlockComponent} from "./header/block/block.component";
import { RecentBlockComponent} from "./header/recent-block/recent-block.component";
import { TransactionComponent} from "./header/transaction/transaction.component";
import {SearchBlockComponent} from "./header/block/search-block/search-block.component";

const routes: Routes = [

  { path: 'rawblock', component: BlockComponent},
  { path: 'rawblock/:id', component: SearchBlockComponent},
  { path: 'latestblock', component: RecentBlockComponent },
  { path: 'viewtransaction', component: TransactionComponent},
  { path: 'company',component:CompanyComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
