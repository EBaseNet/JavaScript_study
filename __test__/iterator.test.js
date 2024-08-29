import { objectLoop } from "../src";

describe("test", () => {

    it('1 + 1은 2 입니다.', () => {
        const obj = {a1: 'a1', a2: 'a2'}
        const temp = objectLoop(obj)
        expect(temp.next().value).toEqual('a1');
        expect(temp.next().value).toEqual('a2');
    })

})