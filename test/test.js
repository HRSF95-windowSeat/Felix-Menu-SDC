var assert = require('assert');
var chai = require('chai')
var chaiHttp = require('chai-http');
var app = require('../server/application')
var expect = chai.expect;

chai.use(chaiHttp);

describe('Testing GET', function() {
  describe('for item 100', function() {
    it('should return status code of 200 when the request is successful', function(done) {
      chai
        .request("http://127.0.0.1:3005")
        .get("/menus/restaurant/100/menu/")
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        })
    })
    it('should have rest_name upon successful get', function (done) {
      chai
        .request("http://127.0.0.1:3005")
        .get("/menus/restaurant/100/menu/")
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res.body).to.have.property('rest_name');
          done();
        })
    })
    it('should have rest_name upon successful get', function (done) {
      chai
        .request("http://127.0.0.1:3005")
        .get("/menus/restaurant/100/menu/")
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res.body).to.have.property("breakfast");
          expect(res.body).to.have.property("lunch");
          expect(res.body).to.have.property("dinner");
          done();
        })
    })
  })
})