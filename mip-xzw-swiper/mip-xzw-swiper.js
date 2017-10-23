/**
* 星座屋mip改造
* @file 星座屋swiper组件
* @author mipxzw@163.com
* @version 1.0.0
*/
define(function (require) {
    var $ = require('zepto');
    var Swiper = require('./swiper/swiper');
    var customElem = require('customElement').create();
    customElem.prototype.build = function () {
        function bselSwiper(a, d, f) {
            var b = $('li', a);
            var A = new Swiper(a, {
                slidesPerView: 'auto',
                centeredSlides: true,
                initialSlide: d ? d - 1 : 2,
                freeMode: true,
                freeModeMomentumRatio: .5,
                freeModeSticky: true
            });
            b.click(function () {
                A.slideTo($(this).index(), 500, false);
            });
            f && typeof (f) === 'function' ? f() : '';
            return A;
        }
    };
    return customElem;
});
