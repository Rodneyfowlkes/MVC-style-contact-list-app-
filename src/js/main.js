import $ from 'jquery';
import _ from 'lodash';
import {Contact} from './models/contact.js';
import {AppController} from './controller/app-controller.js';



let App = new AppController();
App.init();

console.log(AppController);
console.log(Contact);