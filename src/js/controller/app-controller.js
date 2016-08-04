import $ from 'jquery';
import _ from 'lodash';
import {Contact} from '../models/contact.js';

class AppController {

	constructor(fname,lname,number,city,state,form,book,contact_inputs){

		this.firstname    = fname
		this.lastname     = lname
		this.number       = number
		this.city         = city
		this.state        = state
		this.form         = form
		this.book         = book
		this.contact_inputs = contact_inputs
		this.contactcount = 0;
		this.contactarray = [];
	}


	addtoBook(){
		let lastinarray  = this.contactarray[this.contactarray.length - 1];
		console.log(lastinarray);
		let replaced_form = ` <form class="contact_form">
            <input type="text" class="firstname" placeholder="first name" value="">
            <input type="text" class="lastname" placeholder="last name">
            <input type="text" class="number" placeholder="number">
            <input type="text" class="city" placeholder="city">
            <input type="text" class="state" placeholder="state">
            <button>Submit</button>
          </form>`;

		let contact_temp = ` <div class="contact_div">
            <img class="conimg" src="http://placecage.com/75/75">
              <div class="concon">
                <span class="listname">${lastinarray.firstname} ${lastinarray.lastname}</span>
                <span class="listnumber">${lastinarray.number}</span>
                <span class="listaddress">${lastinarray.city} ${lastinarray.state}</span>
                
              </div>
          </div>`
		this.book.append(contact_temp);
		this.contact_inputs.html(replaced_form);
}

    newform(){

    	this.form.on('submit', (event)=>{

    		  event.preventDefault();
              this.contactcount += 1;
		      let x = new Contact(this.contactcount);
		      	x.firstname    = this.firstname.val();
				x.lastname     = this.lastname.val();
				x.number       = this.number.val();
				x.city         = this.city.val();
				x.state        = this.state.val();
				this.contactarray.push(x)
                this.addtoBook();
  
    	});
}


    


    init(){

    	this.newform();
    	
    
   
    }



}

export {AppController};