"use strict";
$.fatNav(), $(window).scroll(function () {
        $(window).scrollTop() > "300" ? $(".nav-wrapper").css({
            "background-color": "rgba(0, 0, 0, 0.5)"
        }) : $(".nav-wrapper").css({
            "background-color": "rgba(0, 0, 0, 0)"
        })
    }), $(".regular").slick({
        arrows: !0,
        dots: !0,
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        slide: ".slide",
        prevArrow: $(".prev"),
        nextArrow: $(".next"),
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1
            }
        }]
    }), $(".team-slick").slick({
        arrows: !0,
        dots: !1,
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 1,
        slide: ".team",
        prevArrow: $(".team-prev"),
        nextArrow: $(".team-next"),
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !0,
                arrows: !1
            }
        }]
    }),
    function (e) {
        $(".navigation,.fat-nav,.scroll").on("click", "a", function () {
            event.preventDefault();
            var o = e(this).attr("href"),
                n = e(o).offset().top - 119;
            e("html,body").stop().animate({
                scrollTop: n
            }, 1e3, "swing", function () {})
        })
    }(jQuery),
    function () {
        var e;
        window.addEventListener("load", function () {
            e = new google.maps.Map(document.getElementById("map"), {
                center: {
                    lat: -7.939706913006946,
                    lng: 112.62542320944426
                },
                zoom: 14,
                disableDefaultUI: !0,
                styles: [{
                    featureType: "administrative.land_parcel",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative.locality",
                    elementType: "geometry.fill",
                    stylers: [{
                        weight: 1
                    }]
                }, {
                    featureType: "road.local",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }]
            }), new google.maps.Marker({
                position: {
                    lat: -7.9273615555,
                    lng: 112.637344555
                },
                map: e,
                icon: "./img/marker.png",
                animation: google.maps.Animation.BOUNCE
            })
        })
    }(), $(".form__name").focus(function () {
        $(".name-label").addClass("label-change")
    }), $(".form__name").blur(function () {
        $(".name-label").removeClass("label-change")
    }), $(".form__name").change(function () {
        $(".name-label").css("top", "-30px")
    }), $(".form__email").focus(function () {
        $(".email-label").addClass("label-change")
    }), $(".form__email").blur(function () {
        $(".email-label").removeClass("label-change")
    }), $(".form__email").change(function () {
        $(".email-label").css("top", "-30px")
    }), $(".form__comment").focus(function () {
        $(".comment-label").addClass("label-change")
    }), $(".form__comment").blur(function () {
        $(".comment-label").removeClass("label-change")
    }), $(".form__comment").change(function () {
        $(".comment-label").css("top", "-30px")
    }), $(".adress").mouseenter(function () {
        $(".adress").css("margin-right", "0")
    }), $(".adress").mouseleave(function () {
        $(".adress").css("margin-right", "-258px")
    }), $(".phone").mouseenter(function () {
        $(".phone").css("margin-right", "0")
    }), $(".phone").mouseleave(function () {
        $(".phone").css("margin-right", "-258px")
    });