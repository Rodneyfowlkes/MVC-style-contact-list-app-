// Import Chai
import chai from 'chai';

// Import Any Files to Test
import {Contact} from '../src/js/models/contact.js';
import {AppController} from '../src/js/controller/app-controller.js';
import $ from 'jquery';
import _ from 'lodash';

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;


describe('The app controlller', function () {

  describe('There should be an instance of AppController', function () {

    it('should be an instance of AppController', function () {
      let x = new AppController;
      expect(x).to.be.an.instanceof(AppController);
    });	

    it('should have a method called newform that pulls data from inputs and resets them', function () {
      let x = new AppController;
      assert.isFunction(x.newform);
    });	

    it('should have a method called addtoBook that adds new contact to contact book list and resets form', function () {
      let x = new AppController;
      assert.isFunction(x.addtoBook, "Sweet Beans");
    });	

    it('should have a method called init', function () {
      let x = new AppController;
      assert.isFunction(x.init);
    });	
  


  });


});

describe('The Contact model', function () {

	describe('There should be an instance of Contact model', function () {
		it('should be an instance of Contact', function () {
	      let x = new Contact;
	      expect(x).to.be.an.instanceof(Contact);
	    });

		it('should be an instance of Contact', function () {
	      let x = new Contact(12);
	      assert.isDefined(x.contactid);
	    });

	    it('should be an instance of Contact', function () {
	      let x = new Contact(12);
	      assert.isDefined(x.firstname);
	    });

	    it('should be an instance of Contact', function () {
	      let x = new Contact(12);
	      assert.isDefined(x.lastname);
	    });

	    it('should be an instance of Contact', function () {
	      let x = new Contact(12);
	      assert.isDefined(x.number);
	    });

	    it('should be an instance of Contact', function () {
	      let x = new Contact(12);
	      assert.isDefined(x.city);
	    });

	    it('should be an instance of Contact', function () {
	      let x = new Contact(12);
	      assert.isDefined(x.state);
	    });







	});








});


