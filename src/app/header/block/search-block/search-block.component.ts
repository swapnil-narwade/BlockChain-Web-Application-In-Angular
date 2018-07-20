import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {BlockchainAPIserviceService, NewData} from '../../../blockchain-apiservice.service';
import {stringify} from "querystring";


@Component({
  selector: 'app-search-block',
  templateUrl: './search-block.component.html',
  styleUrls: ['./search-block.component.css']
})
export class SearchBlockComponent implements OnInit {
  ver: {};
  inputs: {};
  weight: {};
  block_height: {};
  relayed_by: {};
  out : {};
  lock_time: {};
  size: {};
  double_spend: {};
  time: {};
  tx_index: {};
  vin_sz: {};
  hash: {};
  vout_sz: {};
newdata= {};
  constructor(private ApiService: BlockchainAPIserviceService) { }

  ngOnInit() {
    this.ApiService.sendSingleData(this.newdata).subscribe((newData: NewData)=>{
      this.ver = newData.ver,
      this.inputs= newData.inputs,
      this.weight=newData.weight,
      this.block_height=newData.block_height,
      this.relayed_by= newData.relayed_by,
      this.out =newData.out,
      this.lock_time=newData.lock_time,
      this.size=newData.size,
      this.double_spend=newData.double_spend,
      this.time=newData.time,
      this.tx_index=newData.tx_index,
      this.vin_sz=newData.vin_sz,
      this.hash=newData.hash,
      this.vout_sz=newData.vout_sz
    })

  }

    }


