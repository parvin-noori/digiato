$(document).ready(function () {
    //variables
    let searchArea = $('#searchArea');
    let loginForm = $("#login-form");
    let registerForm = $("#register-form");
    let forgetForm = $("#forgot-form");
    let changeThemeBtn = $(".head__theme");

    //change theme
    changeThemeBtn.click(function (e) {
        e.preventDefault();
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
            } else {
                error.insertAfter($(element))
            }
        },
        rules: {
            RegisterUsername: {
                required: true,

            },
            registerEmail: {
                required: true,
                email: true,
            },
            registerPassword: {
                required: true,
            },
            registerPrivacy: {
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
            registerPrivacy: {
                required: 'شما باید شرایط و ضوابط قوانین را بپذیرید'
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
                email: true,

            },
            action: "required"
        },
        messages: {
            forgetEmail: {
                required: 'لطفا ایمیل خود را وارد نمایید',
                email: "لطفا ایمل معتبر وارد نمایید"

            }
        }
    });


    //loginForm modal

    let loginModalBox = $('.loginModalbox');
    let forgotModalBox = $('.forgotModalbox ');
    let registerModalBox = $('.registerModalbox');
    let registerButtonLink = $('.registerModalOpen');
    let loginButtonLink = $('.loginModalOpen');
    let forgetButtonLink = $('.forgotModalOpen');
    let loginModal = $('#loginModal');
    let loginEmail = $('#loginEmail');
    let body = $('body');
    let backToTop = $('.backToTop');

    //focus input after open modal
    loginModal.on('shown.bs.modal', function () {
        loginEmail.focus();
    });

    //back to login step after close modal
    loginModal.on('hidden.bs.modal', function () {
        registerModalBox.slideUp();
        forgotModalBox.slideUp();
        loginModalBox.slideDown()
    });

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
    });

    //suggestion editor swiper
    new Swiper(".editorsSuggestionsSwiper", {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: false,
        // autoplay: {
        //     delay: 1000,
        //     disableOnInteraction: false,
        // },
        navigation: {
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
        },
        breakpoints: {
            0: {
                slidesPerView: 1.4,
            },
            640: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            },
        },
    });

    //home cards swiper
    new Swiper(".homeCardSwiper", {
        pagination: {
            el: ".swiper-pagination1",
        },
    });

    //home card footer box swiper
    new Swiper(".homeCardsFooterBoxSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
        },
        breakpoints: {
            0: {
                slidesPerView: 1.4,
            },
            640: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            },
        },
    });


    new Swiper(".applicationAreaSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next3",
            prevEl: ".swiper-button-prev3",
        },
        breakpoints: {
            0: {
                slidesPerView: 1.4,
            },
            640: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            },
        },
    });

// add class sticky to body after scroll page
    function stikcyBody() {
        let siteNavigation = $('.site-navigation');
        let siteNavigationWrapper = $('.site-navigation-wrapper');
        let siteNavigationOffsetTop = siteNavigation.offset().top;
        let prev = 0;

        $(window).scroll(function () {
            // add sticky class to site navigation after scroll on it
            let scrollTop = $(this).scrollTop();
            if (scrollTop >= siteNavigationOffsetTop) {
                siteNavigationWrapper.addClass('sticky');
                body.addClass('sticky');
            } else {
                body.removeClass('sticky');
                siteNavigationWrapper.removeClass('sticky');
            }

            // add hidden nav class to site navigation after 500 scroll top
            if (scrollTop >= 400) {

                //hide nav on scroll
                siteNavigationWrapper.toggleClass('hidden', scrollTop > prev);
                body.toggleClass('sticky', scrollTop < prev);
                siteNavigation.toggleClass('sticky', scrollTop < prev);
                prev = scrollTop;
            } else {
            }


            //add class active to back to top button
            if (scrollTop > 500) {
                backToTop.addClass('active');
            } else {
                backToTop.removeClass('active')
            }
        });
    }


    //change display of sub menu in responsive
    let menuLink = $('#mobileMenu .withSubmenu');


    //show submenu
    menuLink.click(function (e) {
        e.stopPropagation();
        $(this).find('.subMenuMobile').fadeIn(300)
    });


    //hide submenu
    let backBtn = $('.subMenuMobile .backBtn');
    backBtn.click(function (e) {
        e.stopPropagation();
        $(this).closest('.subMenuMobile').fadeOut(300);
    });


    let mobileMenu = $('#mobileMenu');
    //close submenu after close offcanvas
    mobileMenu.on('hidden.bs.offcanvas', function () {
        $('.subMenuMobile').hide();
        $('.openSearchMobile').hide()
        mobileMenu.removeClass('withSearch');
        $('.icon-toggle').removeClass('active')
    });
    mobileMenu.on('shown.bs.offcanvas', function () {
        $('.icon-toggle').addClass('active')
    });


    // let open search mobile
    let responsiveSearchBtn = $('.responsiveSearchBtn');
    let openSearchMobile = $('.openSearchMobile');
    let backBtnSearch = $('.openSearchMobile .backBtn');


    responsiveSearchBtn.click(function () {
        openSearchMobile.fadeIn(300);
        mobileMenu.addClass('withSearch');
    });
    backBtnSearch.click(function () {
        openSearchMobile.fadeOut(300);
        mobileMenu.removeClass('withSearch');
    });


    //accordion links__items in footer
    function accordtionLinksItem() {
        var acc = document.getElementsByClassName("accordion-button");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }

    // console.log($('.site-navigation').height());

    // top of mobileMenu drawer
    mobileMenu.css("top", ($('.site-navigation').height()) - 2);

    //run stickyBody function in breakpoint
    var width = $("body").width();
    if (width > 992) {
        stikcyBody()
    }
    if (width < 768) {
        accordtionLinksItem()
    }
    $(window).on('resize', function () {

        // breakpoints
        let $large_up = window.matchMedia("(min-width: 992px)");
        let $medium_down = window.matchMedia("(max-width: 768px)");

        if ($large_up.matches) {
            stikcyBody()
        }
        if ($medium_down.matches) {
            accordtionLinksItem()
        }

    });

    //back to top
    var backToTopBtn = $('.backToTop');

    backToTopBtn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '100');
    });



    // Scroll page progress bar
    let progressbar = document.getElementById("progressBar");

    function progressBarScroll() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
            height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
            scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
    }

    if (document.body.contains(progressbar)) {
        window.onscroll = function () {
            progressBarScroll();
        };
    }

    //add active class to list social media in single page (responsive)
    let iconShare=$('.icon-share');
    let shareIcons=$('.share__icons');
    iconShare.click(function (e) {
        e.preventDefault();
        shareIcons.addClass('active');
        iconShare.css({"display":"none"});
        console.log(this)

    })

});




