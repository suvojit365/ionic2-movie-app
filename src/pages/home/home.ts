import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[];
  constructor(public navCtrl: NavController) {
    this.items=[];
    for(let i=0;i<10;i++)
    {
      this.items.push({
        text: 'item '+ i,
        id : 1
      });
    }
  }

  itemSelected(item){
    this.navCtrl.push(DetailsPage,{
      item: item
    })
  }

}
