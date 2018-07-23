import { Component, OnInit } from '@angular/core';
import {BlockchainAPIserviceService, NewTransactionData} from "../../../blockchain-apiservice.service";

@Component({
  selector: 'app-search-transaction',
  templateUrl: './search-transaction.component.html',
  styleUrls: ['./search-transaction.component.css']
})
export class SearchTransactionComponent implements OnInit {
  hash = {};
  ver = {};
  vin_sz = {};
  vout_sz = {};
  lock_time = {};
  size = {};
  relayed_by = {};
  block_height = {};
  tx_index = {};
  inputs = {};
  out = {};

  constructor(private ApiService: BlockchainAPIserviceService) {

    this.recieveData();
  }
  private recieveData() {
    this.ApiService.sendInputFromSingleTransaction.subscribe((data: string)=>{
      this.ApiService.getSingleTransaction(data).subscribe((data: NewTransactionData)=>{
        this.hash = data.hash;
        this.ver = data.ver;
        this.vin_sz = data.vin_sz;
        this.vout_sz = data.vout_sz;
        this.lock_time = data.lock_time;
        this.size = data.size;
        this.relayed_by = data.relayed_by;
        this.block_height = data.block_height;
        this.tx_index = data.tx_index;
        this.inputs = data.inputs;
        this.out = data.out;
      })
    });
  }

  ngOnInit() {  }
}
