$(document).ready(function(){
    $(".header a").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});



window.onscroll = function showHeader() {
    var header = document.querySelector('.navbar');
    if(window.pageYOffset > 200){
        header.classList.add('navbar_fixed');
    }
};

$(function () {
    if ($(window).width() < 1170) {
       $('.burger-menu').click(function (e) {
            e.preventDefault();
            $('.menu').toggle();
        });
    
        $('.menu li a').click(function (e) {
            $('.menu').css('display', 'none');
        });
    }
});


document.addEventListener("DOMContentLoaded", visx, false);
function visx() {
    var div = [].slice.call(document.querySelectorAll(".progress-bar_first .progress"), 0);
    div = div.map(function(el) {
        return {
            el: el,
            bar: new ProgressBar.Circle(el, {
                strokeWidth: 17,
                trailWidth: 1,
                easing: 'easeInOut',
                duration: 1500,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#0ff', width: 1 },
                to: { color: '#26beff', width: 18 },
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 10);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }


            })
        }
    });
    $('.progressbar-text').css({
        'font-family': '"Montserrat", sans-serif',
        'font-size': '28px',
        'font-weight': '700'
    });
    function anim() {
        div = div.filter(function(el, i) {
            var top = el.el.getBoundingClientRect().top;
            console.log(top);
            if (top > 0 && top < window.innerHeight) {
                el.bar.animate(.8);
                return false
            }
            return true
        });
        !div.length && window.addEventListener("scroll", anim, false)
    }
    window.addEventListener("scroll", anim, false);
    anim()
};

document.addEventListener("DOMContentLoaded", visz, false);
function visz() {
    var div = [].slice.call(document.querySelectorAll(".progress-bar_second .progress"), 0);
    div = div.map(function(el) {
        return {
            el: el,
            bar: new ProgressBar.Circle(el, {
                strokeWidth: 17,
                trailWidth: 1,
                easing: 'easeInOut',
                duration: 1500,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#75ffac', width: 1 },
                to: { color: '#86ff26', width: 17 },
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 397727);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }


            })
        }
    });
    $('.progressbar-text').css({
        'font-family': '"Montserrat", sans-serif',
        'font-size': '28px',
        'font-weight': '700'
    });
    function anim() {
        div = div.filter(function(el, i) {
            var top = el.el.getBoundingClientRect().top;
            console.log(top);
            if (top > 0 && top < window.innerHeight) {
                el.bar.animate(.88);
                return false
            }
            return true
        });
        !div.length && window.addEventListener("scroll", anim, false)
    }
    window.addEventListener("scroll", anim, false);
    anim()
};

document.addEventListener("DOMContentLoaded", viss, false);
function viss() {
    var div = [].slice.call(document.querySelectorAll(".progress-bar_third .progress"), 0);
    div = div.map(function(el) {
        return {
            el: el,
            bar: new ProgressBar.Circle(el, {
                strokeWidth: 17,
                trailWidth: 1,
                easing: 'easeInOut',
                duration: 1500,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#ff75bf', width: 1 },
                to: { color: '#c852ff', width: 16 },
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 544);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }


            })
        }
    });
    $('.progressbar-text').css({
        'font-family': '"Montserrat", sans-serif',
        'font-size': '28px',
        'font-weight': '700'
    });
    function anim() {
        div = div.filter(function(el, i) {
            var top = el.el.getBoundingClientRect().top;
            console.log(top);
            if (top > 0 && top < window.innerHeight) {
                el.bar.animate(.93);
                return false
            }
            return true
        });
        !div.length && window.addEventListener("scroll", anim, false)
    }
    window.addEventListener("scroll", anim, false);

    anim()
};

document.addEventListener("DOMContentLoaded", vis, false);
function vis() {
    var div = [].slice.call(document.querySelectorAll(".progress-bar_fourth .progress"), 0);
    div = div.map(function(el) {
        return {
            el: el,
            bar: new ProgressBar.Circle(el, {
                strokeWidth: 17,
                trailWidth: 1,
                easing: 'easeInOut',
                duration: 1500,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#ffa234', width: 1 },
                to: { color: '#ffdc26', width: 22 },
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 12308);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }


            })
        }
    });
    $('.progressbar-text').css({
        'font-family': '"Montserrat", sans-serif',
        'font-size': '28px',
        'font-weight': '700'
    });
    function anim() {
        div = div.filter(function(el, i) {
            var top = el.el.getBoundingClientRect().top;
            console.log(top);
            if (top > 0 && top < window.innerHeight) {
                el.bar.animate(.65);
                return false
            }
            return true
        });
        !div.length && window.addEventListener("scroll", anim, false)
    }
    window.addEventListener("scroll", anim, false);

    anim()
};



(function($) {
    $(function() {
      $("ul.tabs__caption").on("click", "li:not(.active)", function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest("div.tabs")
          .find("div.tabs__content")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");
      });
    });
  })(jQuery);

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene); $('#parallax-bg')[0].getBoundingClientRect();

$(touch).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
});