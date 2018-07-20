import { Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BlockchainAPIserviceService} from '../../blockchain-apiservice.service';



@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  message:string;

  constructor(private ApiService: BlockchainAPIserviceService) {
    }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    let message = value.blockName;
    this.ApiService.sendSingleData(message);
  }
}
