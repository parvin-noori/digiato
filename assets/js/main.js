$(document).ready(function () {
    //variables
    let searchArea=$('#searchArea');
    let loginForm=$("#login-form");
    let registerForm=$("#register-form");
    let forgetForm=$("#forgot-form");
    let changeThemeBtn=$(".head__theme");
    
    //change theme
    changeThemeBtn.click(function () {
       $('body').toggleClass('darkMode')
        $("i", this).toggleClass("fa-regular fa-moon fa-regular fa-brightness");
    });

    //open search form inside header
    searchArea.click(function (e) {
        e.stopPropagation();
        $(this).addClass('active');
        // $('#searchBtn').attr("type","submit");
    });

    //close search form after click on window
    window.onclick = function (event) {
        if (event.target !== searchArea) {
            searchArea.removeClass('active');
            // $('#searchBtn').attr("type","button");
        }
    };


    // login form validation
    loginForm.validate({
        errorClass: "error-message",
        validClass: "my-valid-class",
        errorElement: 'span',
        rules: {
            loginEmail: {
                required: true,

            },
            loginPassword: {
                required: true,
            },
            action: "required"
        },
        messages: {
            loginEmail: {
                required: "لطفا نام کاربری یا ایمل خود را وارد کنید",
            },
            loginPassword: {
                required: "لطفا رمز عبور خود را وارد کنید"
            }
        }
    });

    //register form validation
    registerForm.validate({
        errorClass: "error-message",
        validClass: "my-valid-class",
        errorElement: 'span',
        errorPlacement: function (error, element) {
            if (element.attr("type") === "checkbox") {
                error.insertAfter($(element).parents('.form-check'));
            }else {
                error.insertAfter($(element))
            }
        },
        rules: {
            RegisterUsername: {
                required: true,

            },
            registerEmail: {
                required: true,
                email:true,
            },
            registerPassword: {
                required: true,
            },
            registerPrivacy:{
                required: true,
            },
            action: "required"
        },
        messages: {
            RegisterUsername: {
                required: 'لطفا نام کاربری خود را وارد نمایید',

            },
            registerEmail: {
                required: 'لطفا ایمیل خود را وارد نمایید',
                email: 'لطفا ایمیل معتبر وارد نمایید',
            },
            registerPassword: {
                required: 'لطفا رمز عبور خود را وارد نمایید',
            },
            registerPrivacy:{
                required:'شما باید شرایط و ضوابط قوانین را بپذیرید'
            }
        }
    });

    //forget password form validation
    forgetForm.validate({
         errorClass: "error-message",
         validClass: "my-valid-class",
         errorElement: 'span',
         rules: {
             forgetEmail: {
                 required: true,
                 email:true,

             },
             action: "required"
         },
         messages: {
             forgetEmail: {
                 required: 'لطفا ایمیل خود را وارد نمایید',
                 email:"لطفا ایمل معتبر وارد نمایید"

             }
         }
     });

    //focus input after open modal
    $('#loginModal').on('shown.bs.modal', function () {
        $('#loginEmail').focus();
    });

    //loginForm modal

    let loginModalBox=$('.loginModalbox');
    let forgotModalBox=$('.forgotModalbox ');
    let registerModalBox=$('.registerModalbox');
    let registerButtonLink=$('.registerModalOpen');
    let loginButtonLink=$('.loginModalOpen');
    let forgetButtonLink=$('.forgotModalOpen');

    //open register modal
    registerButtonLink.click(function (e) {
        loginModalBox.slideUp();
        forgotModalBox.slideUp();
        registerModalBox.slideDown()
    });

    //open login modal
    loginButtonLink.click(function (e) {
        registerModalBox.slideUp();
        forgotModalBox.slideUp();
        loginModalBox.slideDown()
    });

    //open forget modal
    forgetButtonLink.click(function (e) {
        registerModalBox.slideUp();
        loginModalBox.slideUp();
        forgotModalBox.slideDown()
    })
});