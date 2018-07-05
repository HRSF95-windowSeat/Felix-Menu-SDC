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
        .request(app)
        .get("/menus/restaurant/100/menu/")
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        })
    })
    it('should have rest_name upon successful get', function (done) {
      chai
        .request(app)
        .get("/menus/restaurant/100/menu/")
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res.body).to.have.property('rest_name');
          done();
        })
    })
    it('should have rest_name upon successful get', function (done) {
      chai
        .request(app)
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

describe('Testing POST', function () {
  describe('for item 10000001', function () {
    it('should return status code of 200 when the POST request is successful', function (done) {
      chai
        .request(app)
        .post("/restaurant/10000001/menu/")
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    })
  })
})

describe('Testing DELETE', function () {
  describe('Todo', function () {
    it("should return status code of 200 when the DELETE request is successful", function(done) {
      chai
        .request(app)
        .delete("/restaurant/10000001/menu/")
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    }).timeout(100000);
  })
})

describe('Testing PUT', function () {
  it("should return status code of 500 when the POST request is to modify inexistent rest_id", function (done) {
    chai
      .request(app)
      .put("/restaurant/10000001/menu/")
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(500);
        done();
      });
  }).timeout(10000);
})
