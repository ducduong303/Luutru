// let animals = ["gà", "chó", "mèo", "vịt"]
let animals = []



beforeAll(() => {
    console.log("BEFORE ALL");
    animals = ["gà", "chó", "mèo", "vịt"]

})
beforeEach(() => {
    console.log("BEFORE EACH");
    animals = ["gà", "chó", "mèo", "vịt"]
})

afterEach(() => {
    console.log("AFTER EACH");
    animals = ["gà", "chó", "mèo", "vịt"]
})
describe("animals in arrr", () => {
    it("thêm 1 con vào ", () => {
        // animals = ["gà", "chó", "mèo", "vịt"]
        animals.push("hổ")
        expect(animals[animals.length - 1]).toBe("hổ")
    })
    it("thêm 1 con vào ", () => {
        // animals = ["gà", "chó", "mèo", "vịt"]
        expect(animals.length).toBe(4)
    })
})


// console.log
// BEFORE EACH

//   at Object.<anonymous> (setup.test.js:5:13)

// console.log
// AFTER EACH

//   at Object.<anonymous> (setup.test.js:10:13)

// console.log
// BEFORE EACH

//   at Object.<anonymous> (setup.test.js:5:13)

// console.log
// AFTER EACH

//   at Object.<anonymous> (setup.test.js:10:13)
