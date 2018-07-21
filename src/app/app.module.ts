import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlockComponent } from './header/block/block.component';
import { RecentBlockComponent } from './header/recent-block/recent-block.component';
import { TransactionComponent } from './header/transaction/transaction.component';
import { CompanyComponent } from './header/company/company.component';
import {FormsModule} from "@angular/forms";
import { SearchBlockComponent } from './header/block/search-block/search-block.component';
import {BlockchainAPIserviceService} from "./blockchain-apiservice.service";
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlockComponent,
    RecentBlockComponent,
    TransactionComponent,
    CompanyComponent,
    SearchBlockComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BlockchainAPIserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
