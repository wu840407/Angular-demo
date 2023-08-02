import { Component, OnInit } from '@angular/core';
import { filter, first, from, map, Observer, skip, take } from 'rxjs';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styles: [
  ]
})
export class Demo2Component implements OnInit {

  myObserver: Observer<any>;
  users : string[] =["User1", "User2", "User3", "User4", "User5", "User6", "User7", "User8"];
  constructor() {
    this.myObserver = {
      next: (value) => console.log(`取得傳入值: ${value}`),
      error: (error) => console.log(`處理錯誤: ${error}`),
      complete: () => console.log('處理完成')
    };
  }
 op_take() {
    from(this.users).pipe(take(3)).subscribe(this.myObserver);
  }

  // op_first(){
  //   from(this.users).pipe(first()).subscribe(this.myObserver);
  // }
  // op_skip(){
  //   from(this.users).pipe(skip(3)).subscribe(this.myObserver);
  // }
  op_first(){    
    from(this.users).pipe(take(this.perPageCount)).subscribe(this.myObserver);
    this.current=this.perPageCount;
  }
  current : number =0;
  perPageCount: number=3
  op_skip(){
    from(this.users).pipe(skip(this.current), take(this.perPageCount)).subscribe(this.myObserver);
    this.current+=this.perPageCount;
  }

  op_map(){
    from(this.users).pipe(map((v, i)=>`${i}:${v}` )).subscribe(this.myObserver);
  }
  op_filter(){
    from(this.users).pipe(map((v, i)=>`${i}:${v}` ), filter((v,i)=> i % 2 ==0)).subscribe(this.myObserver);
  }

  ngOnInit(): void {
  }

}
