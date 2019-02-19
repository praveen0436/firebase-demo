import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses:any[];

  constructor(db: AngularFireDatabase){
    db.list("/courses").valueChanges().subscribe(data=>this.courses=data);
    console.log(this.courses);
  }
  print(p){console.log(p)}
}
