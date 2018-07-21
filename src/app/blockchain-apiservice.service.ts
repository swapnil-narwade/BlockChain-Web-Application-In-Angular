import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Router} from "@angular/router";
import { BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {Observable} from "rxjs/internal/Observable";
import {observable} from "rxjs/internal-compatibility";
import {Observer} from "rxjs/internal/types";


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
let dataFromInput = {};
let url = {};
@Injectable({
  providedIn: 'root'
})
export class BlockchainAPIserviceService {

  constructor(private http: HttpClient) {
  }
  getLatestData() {
    return this.http.get('/api/latestblock')
  }

  sendSingleData(inputHash: String) {
    const myObservable = Observable.create((observer : Observer)=>{
    observer.next(this.http.get(`/api/rawblock/${inputHash}`))
    });
  }

}
