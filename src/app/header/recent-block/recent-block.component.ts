import { Component, OnInit } from '@angular/core';
import {BlockchainAPIserviceService, Mydata} from '../../blockchain-apiservice.service';

@Component({
  selector: 'app-recent-block',
  templateUrl: './recent-block.component.html',
  styleUrls: ['./recent-block.component.css']
})
export class RecentBlockComponent implements OnInit {
  hash = {};
  time = {};
  block_index = {};
  height = {};
  txIndexes= {};

  constructor(private ApiService : BlockchainAPIserviceService) {
    this.hash = "";
    this.time = "";
    this.block_index = "";
    this.height = "";
    this.txIndexes = "";
  }
  ngOnInit() {
    this.ApiService.getLatestData().subscribe((data: Mydata)=>{
      this.hash = data.hash;
      this.time = data.time;
      this.block_index = data.block_index;
      this.height = data.height;
      this.txIndexes = data.txIndexes;

    })
  }

}
