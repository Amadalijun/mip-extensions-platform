/**
* 寻医问药mip改造 功能组件
* @file 脚本支持
* @author yaoyar6@gmail.com
* @time 2017.03.21
* @version 1.0.0
*/
define(function (require) {
    var $ = require('zepto');
    var viewport = require('viewport');
    var customElem = require('customElement').create();
    var chatFunction = function (cname) {
        var clientHeight = viewport.getHeight();
        var topHeight = $('.chat-top-msg').height();
        var boxHeight = clientHeight - topHeight - 120;
        $('.chat-box').height(boxHeight);
        $('.chat-bot').show();
        viewport.on('scroll', function () {
            var scrollTop =  viewport.getScrollTop();
            var botHeight =  $('.chat-bot').height() - 125;
            if (scrollTop >=  botHeight) {
                $('.' + cname).removeClass('up').addClass('down');
            } else {
                $('.' + cname).removeClass('down').addClass('up');
            }
        });

        // 底部搜索
        $('.chat-bot-search').on('submit', function () {
            var textValK = $.trim($('.keysd').val());
            if (textValK === '帮您寻医问药') {
                textValK = '';
            } else {
                textValK = textValK;
            }
            $(this).attr('method', 'post').attr('action', 'http://m.so.xywy.com/comse.php?src=3gclubso&keyword=' + encodeURIComponent(textValK));
        });

    };

    customElem.prototype.firstInviewCallback = function () {
        // this.element 可取到当前实例对应的 dom 元素
        var elem = this.element;
        var cname = $(elem).attr('elClass');
        chatFunction(cname);
    };
    return customElem;
});