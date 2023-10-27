users = document.querySelectorAll(".chats .user");
chatbox = document.querySelector(".chatbox");
userback = document.querySelector(".chatbox header .left .back");
user_prof_view = document.querySelector(".chatbox header .left .user-det");
user_popup = document.querySelector(".wrapper .user-pop-up");
prof_close_icon = document.querySelector(".user-pop-up i");

users.forEach(user => {
    user.onclick = function() {
        chatbox.classList.add("active");
        userback.onclick = function() {
            chatbox.classList.remove("active");
        }
        user_prof_view.onclick = function() {
            user_popup.classList.add("active");
            prof_close_icon.onclick = function() {
                user_popup.classList.remove("active");
            }
        }
    }
});

btns = document.querySelectorAll(".row.sec ul li");
btns.forEach(btn => {
    btn.onclick = function() {
        floating_main = document.querySelector(".floating-main");
        floating_main.style.left = this.value + "px";
        btns.forEach(btn => {
            btn.classList.remove("active");
        });
        this.classList.add("active");
    }
});


search_icon = document.querySelector(".search-icon");
search_cont = document.querySelector(".search-cont");
search_cont_close = document.querySelector(".search-cont header i");
search_icon.onclick = function() {
    search_cont.style.transform = "translateY(0)";
    search_cont_close.onclick = function() {
        search_cont.style.transform = "translateY(600px)";
    }
}

settings_icon = document.querySelector(".settings-icon");
settings_cont = document.querySelector(".settings-cont");
settings_cont_close = document.querySelector(".settings-cont header i");
settings_icon.onclick = function() {
    settings_cont.style.transform = "translateX(0)";
    settings_cont_close.onclick = function() {
        settings_cont.style.transform = "translateX(400px)";
    }
}


pass_change_btn = document.querySelector(".pass-change-btn");
pass_cont = document.querySelector(".pass-cont");
pass_cont_close = document.querySelector(".pass-cont main .cont .field.close button")
pass_change_btn.onclick = function() {
    pass_cont.style.transform = "translateY(0)";
    pass_cont_close.onclick = function() {
        pass_cont.style.transform = "translateY(600px)";
    }
}