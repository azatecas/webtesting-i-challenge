const {repair, succeed, fail, get} = require('./enhancer.js');

describe('enhancer', function (){
    describe('repair()', function(){
        it('Should return a new item with the durability restored to 100', function() {
            const item = {
                name: 'Sword',
                durability: 10,
                enhancement: 15
            };

            const expected = {
                name: 'Sword',
                durability: 100,
                enhancement: 15
            };

            const repairedItem = repair(item)

            expect(repairedItem).toEqual(expected)
        })
    })

    describe('succeed()', function(){
        it('Should raise items enhancement by 1', function(){
            const item = {
                name: 'Sword',
                durability: 100,
                enhancement: 15
            };

            const expected = {
                name: 'Sword',
                durability: 100,
                enhancement: 16
            };

            const enhancedItem = succeed(item);

            expect(enhancedItem).toEqual(expected)
        })
    })
    
    describe('fail()', function(){
        it('Should decrease durability by 5 if less than 15', function(){
            const item = {
                name: 'Sword',
                durability: 100,
                enhancement: 14
            };

            const expected = {
                name: 'Sword',
                durability: 95,
                enhancement: 14
            };

            const failedItem = fail(item);

            expect(failedItem).toEqual(expected)
        })
        
        it('Should decrease durability by 10 if greater than or equal to 15', function(){
            const item = {
                name: 'Sword',
                durability: 100,
                enhancement: 15
            };

            const expected = {
                name: 'Sword',
                durability: 90,
                enhancement: 15
            };

            const failedItem = fail(item);

            expect(failedItem).toEqual(expected)
        })

        it('Should drop enhancement by 1 if greater 16', function(){
            const item = {
                name: 'Sword',
                durability: 100,
                enhancement: 18
            };

            const expected = {
                name: 'Sword',
                durability: 100,
                enhancement: 17
            };

            const failedItem = fail(item);

            expect(failedItem).toEqual(expected)
        })
    })

    describe('get()', function(){
        it('Should Add the enhancement number before the name with a +', function(){
            const item = {
                name: 'Sword',
                durability: 100,
                enhancement: 6
            }

            const expected = {
                name: `[+6]Sword`,
                durability: 100,
                enhancement: 6
            }

            const getItem = get(item);

            expect(getItem).toEqual(expected)
        })

        it('Should have a default name at 0 enhancement', function(){
            const item = {
                name: 'Sword',
                durability: 100,
                enhancement: 0
            }

            const expected = {
                name: 'Sword',
                durability: 100,
                enhancement: 0
            }

            const getItem = get(item);

            expect(getItem).toEqual(expected)
        })
    })
})