import { fact } from './fact';

describe('fact', () =>{
    it('Should return 1 if n is 0', ()=>{
        const result=fact(0);
        expect(result).toBe(1);
    })
    it('Should return 0 if n is negative', ()=>{
        const result=fact(-1);
        expect(result).toBe(0);
    })
    it('Should return 6 if n is 3', ()=>{
        const result=fact(3);
        expect(result).toBe(6);
    })
    it('Should return 24 if n is 4', ()=>{
        const result=fact(4);
        expect(result).toBe(24);
    })
    it('Should return 0 if n > 16', ()=>{
        const result=fact(16);
        expect(result).toBe(0);
    })
})