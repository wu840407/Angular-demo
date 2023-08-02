import { Component, OnInit } from '@angular/core';
import { from, interval, Observable, Observer, of, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styles: [
  ]
})
export class Demo1Component implements OnInit {

  myObservable: Observable<any>;
  myObserver: Observer<any>;
  mySubscription: Subscription| any;
  constructor() {
     let users : string[] =["User1", "User2", "User3", "User4", "User5"];
    //  this.myObservable = from(users);   
    // this.myObservable = of(users); 
    // this.myObservable = of(1,2,3); 
    this.myObservable= interval(1000);
     // this.myObservable= interval(1000).pipe(take(4));
    this.myObserver = {
       next: (value) => console.log(`取得傳入值: ${value}` ),
       error: (error) => console.log(`處理錯誤: ${error}`),
       complete: () => console.log('處理完成')
     };
   }
  onStart() {
    this.mySubscription = this.myObservable.subscribe(this.myObserver);
   }
   onStop(){
    this.mySubscription.unsubscribe();
  }


  ngOnInit(): void {
  }

}
