// technology
document.querySelector(".technology").addEventListener("click", function (e) {

    var menu = document.querySelectorAll(".menu-item");
    menu.forEach(function (item) {
        item.classList.remove("active");
    })

    document.querySelector(".technology").classList.add("active");

    document.querySelector(".content-left__title").innerHTML = "Teknoloji";

    var cards_all = document.querySelectorAll(".card");
    cards_all.forEach(function (card) {
        var classToRemove = Array.from(card.classList).filter(function (className) {
            return className !== "card";
        });
        card.classList.remove(...classToRemove);
        card.classList.add("technology");
    });

    var content_names = document.querySelectorAll(".content-name");
    content_names.forEach(function (name) {
        name.innerHTML = "Teknoloji";
    })

    e.preventDefault();
});

// space
document.querySelector(".space").addEventListener("click", function (e) {

    var menu = document.querySelectorAll(".menu-item");
    menu.forEach(function (item) {
        item.classList.remove("active");
    })

    document.querySelector(".space").classList.add("active");

    document.querySelector(".content-left__title").innerHTML = "Uzay";

    var cards_all = document.querySelectorAll(".card");
    cards_all.forEach(function (card) {
        var classToRemove = Array.from(card.classList).filter(function (className) {
            return className !== "card";
        });
        card.classList.remove(...classToRemove);
        card.classList.add("space");
    });

    var content_names = document.querySelectorAll(".content-name");
    content_names.forEach(function (name) {
        name.innerHTML = "Uzay";
    })

    e.preventDefault();
});

// medicine
document.querySelector(".medicine").addEventListener("click", function (e) {

    var menu = document.querySelectorAll(".menu-item");
    menu.forEach(function (item) {
        item.classList.remove("active");
    })

    document.querySelector(".medicine").classList.add("active");

    document.querySelector(".content-left__title").innerHTML = "Tıp";

    var cards_all = document.querySelectorAll(".card");
    cards_all.forEach(function (card) {
        var classToRemove = Array.from(card.classList).filter(function (className) {
            return className !== "card";
        });
        card.classList.remove(...classToRemove);
        card.classList.add("medicine");
    });

    var content_names = document.querySelectorAll(".content-name");
    content_names.forEach(function (name) {
        name.innerHTML = "Tıp";
    })

    e.preventDefault();
});

// cars
document.querySelector(".cars").addEventListener("click", function (e) {

    var menu = document.querySelectorAll(".menu-item");
    menu.forEach(function (item) {
        item.classList.remove("active");
    });

    document.querySelector(".cars").classList.add("active");

    document.querySelector(".content-left__title").innerHTML = "Otomobil";

    var cards_all = document.querySelectorAll(".card");
    cards_all.forEach(function (card) {
        var classToRemove = Array.from(card.classList).filter(function (className) {
            return className !== "card";
        });
        card.classList.remove(...classToRemove);
        card.classList.add("oto");
    });

    var content_names = document.querySelectorAll(".content-name");
    content_names.forEach(function (name) {
        name.innerHTML = "Otomobil";
    })


    e.preventDefault();
});

// ai
document.querySelector(".ai").addEventListener("click", function (e) {

    var menu = document.querySelectorAll(".menu-item");
    menu.forEach(function (item) {
        item.classList.remove("active");
    });

    document.querySelector(".ai").classList.add("active");

    document.querySelector(".content-left__title").innerHTML = "Yapay Zeka";

    var cards_all = document.querySelectorAll(".card");
    cards_all.forEach(function (card) {
        var classToRemove = Array.from(card.classList).filter(function (className) {
            return className !== "card";
        });
        card.classList.remove(...classToRemove);
        card.classList.add("ai");
    });

    var content_names = document.querySelectorAll(".content-name");
    content_names.forEach(function (name) {
        name.innerHTML = "Yapay Zeka";
    })


    e.preventDefault();
});

// nature
document.querySelector(".nature").addEventListener("click", function (e) {

    var menu = document.querySelectorAll(".menu-item");
    menu.forEach(function (item) {
        item.classList.remove("active");
    });

    document.querySelector(".nature").classList.add("active");

    document.querySelector(".content-left__title").innerHTML = "Doğa";

    var cards_all = document.querySelectorAll(".card");
    cards_all.forEach(function (card) {
        var classToRemove = Array.from(card.classList).filter(function (className) {
            return className !== "card";
        });
        card.classList.remove(...classToRemove);
        card.classList.add("nature");
    });

    var content_names = document.querySelectorAll(".content-name");
    content_names.forEach(function (name) {
        name.innerHTML = "Doğa";
    })


    e.preventDefault();
});

// dark/light

var toggleSwitch = document.querySelector("#toggle-switch");

function switchTheme(e) {
    if(e.target.checked) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        document.documentElement.style.setProperty("--bg", "#121314");
        document.documentElement.style.setProperty("--texts", "white");
        document.documentElement.style.setProperty("--menu", "#15181c");
        document.querySelector(".mode-text").innerHTML = "Dark";
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        document.documentElement.style.setProperty("--bg", "#ECF0F1");
        document.documentElement.style.setProperty("--texts", "#171d22");
        document.documentElement.style.setProperty("--menu", "#BDC3C7");
        document.querySelector(".mode-text").innerHTML = "Light";
    }
}

toggleSwitch.addEventListener("change", switchTheme);

// menu

var menu_Btn = document.querySelector(".bi-list");

menu_Btn.addEventListener("click", function(){
    var left_menu = document.querySelector(".left-menu");
    left_menu.style.display = "flex";
})

document.querySelector(".bi-x").addEventListener("click", function(){
    document.querySelector(".left-menu").style.display = "none";
})
