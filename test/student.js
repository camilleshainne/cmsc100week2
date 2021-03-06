var should = require('should-http'),
	request = require('supertest');
	studrec = {name: 'Dalisay',
				studno: '2015-12333'};

describe('student', function(){
	var url = "http://localhost:5000";

	describe('find()', function(){
		it('should retrieve all student record', function(done){
			request(url)
			.get('/students')
			.end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Array);
				done();
			})
		});
	});

	describe('findOne()', function(){
		it('should retrieve a specific student record', function(done){
			request(url)
			.get('/students/6')
			.end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				//res.body.should.be.an.instanceOf(Array);
				done();
			})
		});
	});

	describe('insert()', function(){
		it('should create a student record', function(done){
			request(url)
			.post('/students')
			.send(studrec)
			.end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Object);
				res.body.should.have.property('name', 'Dalisay');
				res.body.should.have.property('studno', '2015-12333');
				res.should(true).ok;
				done();
			})
		});
	});
});