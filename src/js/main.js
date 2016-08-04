import $ from 'jquery';
import _ from 'lodash';
import {Contact} from './models/contact.js';
import {AppController} from './controller/app-controller.js';


const firstname  = $('.firstname');
const lastname   = $('.lastname');
const number     = $('.number');
const city       = $('.city');
const state      = $('.state');
const form       = $('.contact_form');
const book       = $('.contact_list');
const contact_input = $('.contact_inputs');


let App = new AppController(firstname,lastname,number,city,state,form,book,contact_input);

App.init();

