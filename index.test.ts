import { it, expect, describe } from 'vitest'
import { solution } from '.'

describe("Probar la suma máxima de un subarray", () => {

    it("Si el array está vacio debería de retornar un 0", () => {
        expect(solution([])).toBe(0)
    })

    it("Si el array solo contiene un número, debe de retonar ese número ", () => {
        expect(solution([5])).toBe(5)
        expect(solution([9])).toBe(9)
    })

    it("Debería de retonar el número más alto en casos de pocos elementos", () => {
        expect(solution([-9, 5])).toBe(5)
        expect(solution([4, -6, -9, 5, 3, -1, 8])).toBe(8)
        expect(solution([-10, -1, 5, 6, -2, 8, -4])).toBe(11)
        expect(solution([-1, 2, 4, -3, 5, 2, -5, 2])).toBe(7)
        expect(solution([-1, -1, -1, -1, -1, -1, -1])).toBe(-1)
        expect(solution([-5, -6, -1, -3, -1, -1, -1])).toBe(-1)
        expect(solution([-5, -6, 2, 3, -1, -1, -1])).toBe(5)
        expect(solution([-7, -6, -5, -4, -3, -2, -1])).toBe(-1)
    })

    it("Debería de retonar el número máximo en casos con con muchos elementos", () => {
        expect(solution([...Array(10000 +1).keys()])).toBe(50005000)
        expect(solution([...Array(100000 +1).keys()])).toBe(5000050000)
        expect(solution([...Array(1000000 +1).keys()])).toBe(500000500000)
        expect(solution([...Array(10000000 +1).keys()])).toBe(50000005000000)
        expect(solution([...Array(100000000 +1).keys()])).toBe(5000000050000000)
    }, 10000)
})