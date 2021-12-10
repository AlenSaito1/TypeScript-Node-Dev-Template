import { strict as assert } from 'assert'
import { main } from '../src/index'

describe('index', () => {
    describe('main', () => {
        it('should return a string', () => {
            assert.equal(typeof main(), 'string')
        })
    })
})
