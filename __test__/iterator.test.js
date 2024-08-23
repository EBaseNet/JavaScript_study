import { getNumber } from "../src";

describe("test", () => {

    it('1 + 1은 2 입니다.', () => {
        const num = getNumber(1)
        expect(num + num).toEqual(2);
    })

    it('2 + 2는 4 입니다.', () => {
        const num = getNumber(2)
        expect(num + num).toEqual(3);
    })
})