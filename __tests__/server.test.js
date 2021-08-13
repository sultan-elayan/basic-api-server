'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('My API Server', ()=> {

    // scenarios
    it('handles not found ', async () => {
        
        // add test
        const response = await request.get('/asd'); 
        expect(response.status).toEqual(404);
    });
   
    it('handles 404 on a bad method', async () => {
    
        const response = await request.post('/'); // async
        expect(response.status).toEqual(404);
    });

    it('200 get route /', async () => {
        const response = await request.get('/'); // async
        expect(response.status).toEqual(200);
     
    
    });

    
  
  // ===============================

  it('200 get', async () => {
    const response = await request.get('/car'); // async
    expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual('object'); 

});



it('Create a record using POST', async () => {
    const reqBody={"firstName":"shhsd",
    "theMeal":"pizza",
    "drink":"7up"}
    const response = await request.post('/car').send(reqBody); 
    expect(response.status).toEqual(200);
  
    

});

it('200 if put', async () => {
    const response = await request.put('/car/2'); 
    expect(response.status).toEqual(200);
    

});
it('200 if delete', async () => {
    const response = await request.delete('/car/3'); 
    

});

});