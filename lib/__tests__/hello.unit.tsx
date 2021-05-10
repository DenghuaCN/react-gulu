import sum from '../index';

describe('我的第一个测试用例', ()=> {
    it('add(1,2) === 3', ()=> {
        expect(sum(1,2)).toEqual(3);
    });
});
