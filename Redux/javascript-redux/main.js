// hàm khởi tạo store

/** Thứ Tự Của redux Phải có:
 *  - Giá trị state khởi tạo
 *  - Reducer
 *  - Store
 * 
 */
const { createStore } = window.Redux

const initialState = JSON.parse(localStorage.getItem("hobby")) || []


// Hàm reduce
const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_HOOBY": {
            const newList = [...state];
            newList.push(action.payload)
            return newList
        }

        default:
            return state
    }
}

const store = createStore(hobbyReducer)

const renderHobbylist = (hobbylist) => {
    if (!Array.isArray(hobbylist) || hobbylist.length === 0) return;

    const ulElement = document.querySelector(".hobby-list");
    ulElement.innerHTML = "";

    for (const hobby of hobbylist) {
        const liElement = document.createElement("li");
        liElement.innerHTML += `${hobby}`;
        ulElement.appendChild(liElement)
    }
}

// Render initialHObbyList
const initialHobbyList = store.getState();
renderHobbylist(initialHobbyList)

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const handleSubmit = (e) => {
    e.preventDefault();
    const action = {
        type: "ADD_HOOBY",
        payload: input.value
    }
    store.dispatch(action)
    input.value = ""
}

form.addEventListener("submit", handleSubmit)

store.subscribe(() => {
    console.log("State Update", store.getState());
    // Lấy state hiện tại cập nhật
    const newListHobby = store.getState();
    renderHobbylist(newListHobby);
    localStorage.setItem("hobby", JSON.stringify(newListHobby))
})
