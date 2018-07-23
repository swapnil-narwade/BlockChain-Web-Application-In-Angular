import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs/internal/Subject";
import {st} from "@angular/core/src/render3";

export interface Mydata {
  hash: String,
  time: Number,
  block_index: Number,
  height: Number,
  txIndexes: String
}

export interface NewData {
  hash:Number,
  ver:Number,
  prev_block:String,
  mrkl_root:String,
  time:Number,
  bits:Number,
  nonce:Number,
  n_tx:Number,
  size:Number,
  block_index:Number,
  main_chain:Boolean,
  height:Number,
  received_time:Number,
  relayed_by:String,
  tx:Array<{}>[]
}
export interface Out{
  script:String,
  value:String
}
export interface input {
  sequence: String,
  script: String
}

export interface NewTransactionData {
  hash:String,
  ver:Number,
  vin_sz:Number,
  vout_sz:Number,
  lock_time:String,
  size:Number,
  relayed_by:String,
  block_height:Number,
  tx_index:String,
  inputs:Array<input>,
  out:Array<Out>
}

@Injectable({
  providedIn: 'root'
})
export class BlockchainAPIserviceService {

  constructor(private http: HttpClient) {}

  getLatestData() {
      return this.http.get<Mydata>('/api/latestblock');
  }
  getSingleBlock(data: String){
    return this.http.get<NewData>(`/api/rawblock/${data}`);
  }
  getSingleTransaction(data: String){
    return this.http.get<NewTransactionData>(`/api/rawtx/${data}`);
  }
  sendInputFromSingleBlock = new Subject();
  sendInputFromSingleTransaction = new Subject();
}
