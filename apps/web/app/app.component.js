import {Component} from 'angular2/core';
import {Component} from 'angular2/core';
import 'stylesheets/base';

@Component({
    selector: 'bd-app',
    template: require('./app.html')
})
export default class AppComponent { 
  constructor() {
    this.initialise();
  }

  initialise() {
    console.log('initialising yes');
  };
}