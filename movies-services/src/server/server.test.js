const { test, expect } = require('@jest/globals');
const server = require('./server');
const request = require('supertest');

test('Server Start', async ()=>{

    const app = await server.start();
    expect(app).toBeTruthy();
})


test('Health check', async ()=>{
    const app = await server.start();
    const response = await request(app).get('/health')
    expect(response.status).toEqual(200);
})

test('Server stop', async ()=>{

    const isStopped = await server.stop();
    expect(isStopped).toBeTruthy();
})