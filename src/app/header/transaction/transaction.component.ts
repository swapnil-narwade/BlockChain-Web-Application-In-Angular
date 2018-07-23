import { Component, OnInit } from '@angular/core';
import {BlockchainAPIserviceService} from "../../blockchain-apiservice.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private ApiService: BlockchainAPIserviceService) {
  }

  ngOnInit() {  }

  onSubmit(form: NgForm) {
    this.ApiService.sendInputFromSingleTransaction.next(form.value.blockName);

  }
}
