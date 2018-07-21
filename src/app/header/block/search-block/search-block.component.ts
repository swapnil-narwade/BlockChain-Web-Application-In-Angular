import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {BlockchainAPIserviceService, NewData} from '../../../blockchain-apiservice.service';
import {stringify} from "querystring";
import { ActivatedRoute} from "@angular/router";
import { HttpClient} from "@angular/common/http";


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
id = {};
  constructor(private ApiService: BlockchainAPIserviceService,
              private route: ActivatedRoute,
              private http: HttpClient
              ) {
    this.route.params.subscribe( params => this.id= params.id );
  }
  getLatestData() {
    return this.http.get(`/api/rawblock/${this.id}`);
  }
   ngOnInit() {
     this.id = stringify(this.getLatestData());
  //   this.ApiService.sendSingleData(newdata).subscribe((newData: NewData)=>{
  //     this.ver = newData.ver,
  //     this.inputs= newData.inputs,
  //     this.weight=newData.weight,
  //     this.block_height=newData.block_height,
  //     this.relayed_by= newData.relayed_by,
  //     this.out =newData.out,
  //     this.lock_time=newData.lock_time,
  //     this.size=newData.size,
  //     this.double_spend=newData.double_spend,
  //     this.time=newData.time,
  //     this.tx_index=newData.tx_index,
  //     this.vin_sz=newData.vin_sz,
  //     this.hash=newData.hash,
  //     this.vout_sz=newData.vout_sz
  //   })

  }

    }


