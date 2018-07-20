import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent} from "./header/header.component";
import { CompanyComponent} from "./header/company/company.component";
import { BlockComponent} from "./header/block/block.component";
import { RecentBlockComponent} from "./header/recent-block/recent-block.component";
import { TransactionComponent} from "./header/transaction/transaction.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HeaderComponent},
  { path: 'singleblock', component: BlockComponent},
  { path: 'latestblock', component: RecentBlockComponent },
  { path: 'viewtransaction', component: TransactionComponent},
  { path: 'company',component:CompanyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
