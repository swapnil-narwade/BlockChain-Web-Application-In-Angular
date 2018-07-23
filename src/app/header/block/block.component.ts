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

  ngOnInit() {  }

  onSubmit(form: NgForm) {
    this.ApiService.sendInputFromSingleBlock.next(form.value.blockName);
  }
}
