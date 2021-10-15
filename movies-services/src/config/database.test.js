
const { test, expect } = require('@jest/globals');
const database = require('./database');


test('Connecting Database', async () =>{
    const connection = await database.connect();
    expect(connection).toBeTruthy();
})

test('DisConnecting Database', async () =>{
    const isDisconnection = await database.disconnect();
    expect(isDisconnection).toBeTruthy();
})

test('DisConnecting Database 2x', async () =>{
    await database.disconnect();
    const isDisconnection = await database.disconnect();
    expect(isDisconnection).toBeTruthy();
})