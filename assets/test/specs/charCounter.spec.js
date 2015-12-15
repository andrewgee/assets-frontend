/**
 * Character Counter Module Tests
 */

require('jquery');

describe("Given I have an empty textarea set up with a char counter", function() {

  jasmine.getFixtures().fixturesPath = "base/specs/fixtures/";
  var charCounter = require('../../javascripts/modules/charCounter.js');

  describe("When I load the page", function() {

    beforeEach(function() {
      loadFixtures('charCounter-fixtures.html');
      charCounter().init();
    });

    it("The counter should read the max length of the field, 250", function() {
      expect($('[data-counter]').text()).toBe("250");
    });

  });

  describe("When I type some text", function() {

    beforeEach(function() {
      loadFixtures('charCounter-fixtures.html');
      charCounter().init();
      $('[data-char-field]').val('Some text').trigger('input');
    });

    it("The counter should read the max length of the field, 241", function() {
      expect($('[data-counter]').text()).toBe("241");
    });

    it("The counter text should read 'characters'", function() {
      expect($('[data-text]').text()).toBe("characters");
    });

  });

  describe("When I type one character", function() {

    beforeEach(function() {
      loadFixtures('charCounter-fixtures.html');
      charCounter().init();
      $('[data-char-field]').val('A').trigger('input');
    });

    it("The counter text should read 'character'", function() {
      expect($('[data-text]').text()).toBe("character");
    });

  });

});
