$(document).ready(function () {
    $(".input").on("focus", function () {
        $(this).addClass("focus");
    });
    $(".input").on("blur", function () {
        if ($(this).val() == "")
            $(this).removeClass("focus");
    });
    $(".register").hide();
    $(".login_li").addClass("active");
    $(".login_li").click(function () {
        $(this).addClass("active");
        $(".register_li").removeClass("active");
        $(".login").show();
        $(".register").hide();
    });
    $(".register_li").click(function () {
        $(this).addClass("active");
        $(".login_li").removeClass("active");
        $(".register").show();
        $(".login").hide();
    });
});

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        alert("Your Login Successfuly");
        return false;
    } else {
        alert("Your Login Failed");
        return false;
    }
}

function register() {
    var username = document.getElementById("username1").value;
    var email = document.getElementById("email1").value;
    var password = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    if (username === '') {
        alert("Username cannot be blank");
        return false;
    } else if (email === '') {
        alert("Email cannot be blank");
        return false;
    } else if (!isEmail(email)) {
        alert("Your email a not valid");
        return false;
    } else if (password === '') {
        alert("Password cannot be blank");
        return false;
    } else if (password2 === '') {
        alert("Password cannot be blank");
        return false;
    } else if (password2 !== password) {
        alert("Password does not match");
        return false;
    } else {
        alert("Your Register Successfuly");
        return false;
    }

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
}