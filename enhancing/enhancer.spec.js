const {repair, succeed, fail, get} = require('./enhancer.js');

describe('enhancer', () => {
    describe('repair()', () => {
        it('Should return durability increase to 100', () => {
            const item = {name: 'BFG', durability: 10, enhancement: 15 };
            const expected = {name: 'BFG',durability: 100,enhancement: 15};
            const repairedItem = repair(item)
            expect(repairedItem).toEqual(expected)
        })
    })

    describe('succeed()', () => {
        it('enhancement up by 1', () => {
            const item = {name: 'BFG',durability: 100,enhancement: 15 };
            const expected = { name: 'BFG',durability: 100, enhancement: 16 };
            const enhancedItem = succeed(item);
            expect(enhancedItem).toEqual(expected)
        })
    })
    
    describe('fail()', () => {
        it('durability down by 5 if < 15', () => {
            const item = { name: 'BFG',durability: 100,enhancement: 14};
            const expected = {name: 'BFG',durability: 95, enhancement: 14 };
            const failedItem = fail(item);
            expect(failedItem).toEqual(expected)
        })
        
        it('decrease durability by 10 >= 15', () => {
            const item = { name: 'BFG',durability: 100,enhancement: 15};
            const expected = { name: 'BFG', durability: 90, enhancement: 15 };
            const failedItem = fail(item);
            expect(failedItem).toEqual(expected)
        })

        it('decreases enhancement by 1 > 16', () => {
            const item = { name: 'BFG', durability: 100, enhancement: 18 };
            const expected = { name: 'BFG', durability: 100, enhancement: 17 };
            const failedItem = fail(item);
            expect(failedItem).toEqual(expected)
        })
    })

    describe('get()', () => {
        it('Add the enhancement the name with +', () => {
            const item = { name: 'BFG',durability: 100, enhancement: 6};
            const expected = { name: `[+6]BFG`,durability: 100, enhancement: 6};
            const getItem = get(item);
            expect(getItem).toEqual(expected)
        })

        it(' default name at 0 enhancement', () => {
            const item = { name: 'BFG',durability: 100,enhancement: 0 };
            const expected = {name: 'BFG',durability: 100,enhancement: 0 };
            const getItem = get(item);
            expect(getItem).toEqual(expected)
        })
    })
})