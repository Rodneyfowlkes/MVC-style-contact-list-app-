// Import Chai
import chai from 'chai';

// Import Any Files to Test
import {Contact} from '../src/js/models/contact.js';
import {AppController} from '../src/js/controller/app-controller.js';

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

  });


});