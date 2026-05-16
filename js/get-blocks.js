fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector(".header-placeholder").outerHTML = data

        const header__menuBurger = document.querySelector(".header__menu-burger")
        const header__menuList = document.querySelector(".header__menu-list")

        if (header__menuBurger && header__menuList) {
            header__menuBurger.addEventListener('click', function () {
                header__menuList.classList.toggle("header__menu--active")
                header__menuList.classList.toggle("header__menu-list")
            })
        }
    })


fetch("subscribe.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector(".subscribe-placeholder").outerHTML = data;

        const inputName = document.querySelector("#form-inputName");
        const inputEmail = document.querySelector("#form-inputEmail");
        const formBtn = document.querySelector(".subscribe__form-btn");

        if (formBtn && inputName && inputEmail) {
            formBtn.addEventListener("click", function (event) {
                event.preventDefault();

                inputName.classList.remove("required");
                inputEmail.classList.remove("required");

                if (!inputName.value.trim()) {
                    inputName.classList.add("required");
                } else if (!inputEmail.value.trim()) {
                    inputEmail.classList.add("required");
                } else {
                    console.log(`Вы подписались!\nВаше имя: ${inputName.value}\nВаша почта: ${inputEmail.value}`);
                    inputName.value = "";
                    inputEmail.value = "";
                }
            });

        }
    })


fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector(".footer-placeholder").outerHTML = data
    })