import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Router} from "@angular/router";
import { BehaviorSubject} from "rxjs/internal/BehaviorSubject";


export interface Mydata {
  hash: String,
  time: Number,
  block_index: Number,
  height: Number,
  txIndexes: String
}
export interface NewData {
  ver: Number,
  inputs: String,
  weight: Number,
  block_height: Number,
  relayed_by: String,
  out : String,
  lock_time: Number,
  size: Number,
  double_spend: Boolean,
  time: Number,
  tx_index: Number,
  vin_sz: Number,
  hash: String,
  vout_sz: Number
}



@Injectable({
  providedIn: 'root'
})
export class BlockchainAPIserviceService {
  private sharingData = new BehaviorSubject<string>('00000000000000000002127dc307e7a89c83226150e85a3b9e163507e1cba768');
  currentData = this.sharingData.asObservable();

  constructor(private http: HttpClient) {
  }
  getLatestData() {
    return this.http.get('/api/latestblock')
  }

  sendSingleData(newData) {
    this.sharingData.next(newData );
    let url = `/api/rawblock/${newData}`;
    return this.http.get(url);


  }


  // sendTransactionData (){
  //   let url = `/api/rawtx/${inputHash}`;
  //   return this.http.get(url)
  // }
}
