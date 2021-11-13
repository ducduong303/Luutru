const fetchData = require('./async');


it("trả về kết quả", () => {
    fetchData(1).then(todo => {
        expect(todo.id).toBe(1)
    })
})

it("trả về kết quả", async () => {
    const todo = await fetchData(1)
    expect(todo.id).toBe(1)
})

