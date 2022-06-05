import { Component, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { darkmodeService } from 'src/app/services/darkmode.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnDestroy {
  isExpanded:boolean=false;
  linkstatue:string=window.location.pathname.split("/")[1];
  messageReceived: boolean=true;
  subscriptionName: Subscription; //important to create a subscription
  samelink(link:string):boolean{
    if (link==this.linkstatue){return true}
    return false 
  }
  constructor(private darkmode:darkmodeService){
     // subscribe to sender component messages
     this.subscriptionName= this.darkmode.getUpdate().subscribe
     ((/*state*/) => { //message contains the data sent from service
     this.messageReceived = !this.messageReceived;
     });
  }
  ngOnDestroy() { // It's a good practice to unsubscribe to ensure no memory leaks
    //this.subscriptionName.unsubscribe();
}

}
