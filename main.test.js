const s = require('./lib.js') //import the lib files which includes all functions

describe('checking btn', () => { //where test is done       
    test("button should not return null", () => { //test is done for individual function
        const btn = "click"; //variable assign string
        const expectedvalue = "click"; //variable assign string  
        const result = s.chkbtn(btn); //result shld b btn shld not return null
        expect(result).toBe(expectedvalue); //we r expecting result to b expectedvalue
    })
})