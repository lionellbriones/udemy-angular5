import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const config = {
      apiKey: 'AIzaSyD-4rN0sIhvKqP__aYoVIjjjFp3K9iNzIk',
      authDomain: 'udemy-test-6546f.firebaseapp.com'
    };

    firebase.initializeApp(config);
  }
}
