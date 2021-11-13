var all = {
    init: function () {
        this.todolist();

    },
    todolist: function () {
        render();
        // Load 
        const load = document.querySelector('.loader')
        // Button Click
        const add_Plus = document.querySelector('.btn-click');
        const complete = document.querySelector('.btn--complete');
        const cancel = document.querySelector('.btn--cancel');
        const overlay = document.querySelector('.overlay');

        // Button Edit-Delete
        const edit = document.querySelectorAll('.edit i');
        const trash = document.querySelectorAll('th.trash');

        // Button  confirm
        const yes = document.querySelector('.yes');
        const no = document.querySelector('.no')

        // Form Popup
        const form_add = document.querySelector('.popup');
        const popup__form = document.querySelector('.popup__form');
        const confirm = document.querySelector('.confirm');
        const confirm_form = document.querySelector('.confirm__content')

        // Value 
        const user = document.querySelector('#user');
        const email = document.querySelector('#email');
        const adress = document.querySelector('#adress');
        const input = document.querySelector('.input')

        // Biến Chung Gian xác định form Edit or ADD
        var current;

        // handle Show popup
        function showPopup(popup) {
            overlay.classList.add('active')
            popup.classList.add('active')
        }
        // handle remove popup
        function removePopup(popup) {
            overlay.classList.remove('active')
            popup.classList.remove('active')
        }

        // handle Load
        function addLoad() {
            load.classList.add('loading');
        }

        // handle load
        function removeLoad() {
            load.classList.remove('loading');
        }
        // handle reset Form
        function resetForm() {
            user.value = "";
            email.value = "";
            adress.value = "";
        }
        // handle validate
        function validate() {
            if (user.value.length == 0 || email.value.length == 0 || adress.value.length == 0) {
                popup__form.classList.add('validate')
                setTimeout(() => {
                    popup__form.classList.remove('validate')
                }, 500)
                return false
            } else {
                return true;
            }
        }
        // Btn Click Event
        add_Plus.addEventListener('click', () => {
            current = "add";
            showPopup(form_add);
            showPopup(popup__form);

        })
        overlay.addEventListener('click', () => {
            removePopup(form_add);
            removePopup(popup__form);
            removePopup(confirm);
            removePopup(confirm_form);
        })
        cancel.addEventListener('click', () => {
            removePopup(form_add);
            removePopup(popup__form);
        })


        // handle Dữ Liệu 
        function getData() {
            class getUser {
                constructor(id, user, email, adress) {
                    this.id = id;
                    this.user = user;
                    this.email = email;
                    this.adress = adress;
                }
            }
            let dataLocal = localStorage.getItem('local');
            let dataUser;
            if (dataLocal) {
                dataUser = JSON.parse(localStorage.getItem('local'))
            } else {
                dataUser = [];
            }
            let save = new getUser(dataUser.length + 1, user.value, email.value, adress.value);
            dataUser.push(save)
            localStorage.setItem('local', JSON.stringify(dataUser))
            console.log(dataUser)
        }

        // Render
        function render() {
            const data = JSON.parse(localStorage.getItem('local'));
            const todolist = document.querySelector('.content__list-tbody');
            if (data.length === 0) {
                todolist.innerHTML = `<h1 class="no-task"><i class="fas fa-file-alt"></i> No Tasks...! </h1>`
            } else {
                const content = data.map((item, index) => {
                    return ` <tr>
                    <th>${item.id}</th>
                    <th  class="user__title">${item.user}</th>
                    <th>${item.email}</th>
                    <th>${item.adress}</th>
                    <th class="edit"><i class="fas fa-edit"></i></th>
                    <th class="trash"><i class="fas fa-trash-alt"></i></th>
                </tr>`
                })
                todolist.innerHTML = content.join(' ')
            }
        }
        /** Add */
        complete.addEventListener("click", () => {
            validate()
            if (validate()) {
                addLoad()
                setTimeout(() => {
                    removeLoad()
                    if (current == 'add') {
                        handleAdd();
                    }
                }, 1000)
            }
        })
        // handle Add
        function handleAdd() {
            getData();
            render();
            resetForm();
            removePopup(form_add);
            removePopup(popup__form);
            location.reload();
        }

        // handle edit
        function handleEdit(index) {
            let data = JSON.parse(localStorage.getItem('local'));
            data[index].user = user.value;
            data[index].email = email.value;
            data[index].adress = adress.value
            localStorage.setItem('local', JSON.stringify(data));
            location.reload();
        }
        edit.forEach((item, index) => {
            current = "edit"
            item.addEventListener('click', () => {
                showPopup(form_add);
                showPopup(popup__form);
                let data = JSON.parse(localStorage.getItem('local'));
                user.value = data[index].user;
                email.value = data[index].email;
                adress.value = data[index].adress;
                complete.addEventListener('click', () => {
                    validate()
                    if (validate()) {
                        addLoad()
                        setTimeout(() => {
                            removeLoad()
                            if (current == 'edit') {
                                handleEdit(index)
                            }
                        }, 1000)
                    }
                })
            })
        })

        // handle delete
        function HandleRemoveData(index) {
            let data = JSON.parse(localStorage.getItem('local'));
            data.splice(index, 1);
            data.forEach((item, index) => item.id = index + 1);
            localStorage.setItem('local', JSON.stringify(data));
            location.reload();
        }
        trash.forEach((item, index) => {
            item.addEventListener('click', (e) => {       
                showPopup(confirm);
                showPopup(confirm_form);
                yes.addEventListener('click', () => {
                    addLoad();
                    setTimeout(() => {
                        removeLoad();
                        HandleRemoveData(index) 
                        render();
                        location.reload();
                    }, 1000) 
                })
                no.addEventListener('click', () => {
                    removePopup(confirm);
                    removePopup(confirm_form);
                     render();
                    location.reload();
                })
            })
          
        })
        /** Search */
        input.addEventListener('keyup', () => {
            searchData(input.value)
        })
        /** Search */
        function searchData(searchValue) {
            let items = document.querySelectorAll('.content__list-tbody tr')
            items.forEach((item, index) => {
                let value = item.querySelector('.user__title').textContent;
                if (value.toUpperCase().includes(searchValue.toUpperCase())) {
                    items[index].style.display = '';

                }
                else {
                    items[index].style.display = 'none';
                }
            })
        }
    }
}
all.init();