import { Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BlockchainAPIserviceService} from '../../blockchain-apiservice.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  constructor(private ApiService: BlockchainAPIserviceService) {
    }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    let inputHash : String = value.blockName;
    this.ApiService.sendSingleData(inputHash);
  }
}
