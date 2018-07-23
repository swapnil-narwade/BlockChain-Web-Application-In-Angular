import { Component, OnInit } from '@angular/core';
import {BlockchainAPIserviceService, NewData} from '../../../blockchain-apiservice.service';

@Component({
  selector: 'app-search-block',
  templateUrl: './search-block.component.html',
  styleUrls: ['./search-block.component.css']
})
export class SearchBlockComponent implements OnInit {
  hash={};
  ver={};
  prev_block={};
  mrkl_root={};
  time={};
  bits={};
  nonce={};
  n_tx={};
  size={};
  block_index={};
  main_chain={};
  height={};
  received_time={};
  relayed_by={};
  tx={};
  constructor(private ApiService: BlockchainAPIserviceService) {
    this.hash = "----";
    this.ver = "----";
    this.prev_block = "----";
    this.mrkl_root = "----";
    this.time = "----";
    this.bits = "----";
    this.nonce = "----";
    this.n_tx = "----";
    this.size = "----";
    this.block_index = "----";
    this.main_chain = "----";
    this.height = "----";
    this.received_time = "----";
    this.relayed_by = "----";
    this.tx = "----";
    this.recieveData();
  }
  private recieveData() {
      this.ApiService.sendInputFromSingleBlock.subscribe((data: string)=>{
      this.ApiService.getSingleBlock(data).subscribe((data: NewData)=>{
        this.hash = data.hash;
        this.ver = data.ver;
        this.prev_block = data.prev_block;
        this.mrkl_root = data.mrkl_root;
        this.time = data.time;
        this.bits = data.bits;
        this.nonce = data.nonce;
        this.n_tx = data.n_tx;
        this.size = data.size;
        this.block_index = data.block_index;
        this.main_chain = data.main_chain;
        this.height = data.height;
        this.received_time = data.received_time;
        this.relayed_by = data.relayed_by;
        this.tx = data.tx;
      })
    });
  }

  ngOnInit() {  }
}


