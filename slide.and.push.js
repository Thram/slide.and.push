angular.module('slidePushMenu', [])
    .directive('ngSlideMenu', function () {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                elem.click(function () {
                    elem.toggleClass('active');
                    var menu = angular.element('#' + attrs.ngSlideMenu);
                    if (menu.hasClass('spmenu-left')) {
                        menu.hasClass('spmenu-open') ? menu.css('left', parseInt(menu.css('left')) - 240) : menu.css('left', parseInt(menu.css('left')) + 240);
                    }
                    if (menu.hasClass('spmenu-right')) {
                        menu.hasClass('spmenu-open') ? menu.css('right', parseInt(menu.css('right')) - 240) : menu.css('right', parseInt(menu.css('right')) + 240);
                    }
                    if (menu.hasClass('spmenu-top')) {
                        menu.hasClass('spmenu-open') ? menu.css('top', parseInt(menu.css('top')) - 150) : menu.css('top', parseInt(menu.css('top')) + 150);
                    }
                    if (menu.hasClass('spmenu-bottom')) {
                        menu.hasClass('spmenu-open') ? menu.css('bottom', parseInt(menu.css('bottom')) - 150) : menu.css('bottom', parseInt(menu.css('bottom')) + 150);
                    }
                    menu.toggleClass('spmenu-open');
                });
            }
        }
    })
    .directive('ngPushMenu', function () {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                angular.element('body').addClass('spmenu-push');
                elem.click(function () {
                    elem.toggleClass('active');
                    var menu = angular.element('#' + attrs.ngPushMenu);
                    var body = angular.element('body');
                    if (menu.hasClass('spmenu-left')) {
                        var bodyLeft = parseInt(body.css('left'));
                        bodyLeft = bodyLeft ? bodyLeft : 0;
                        menu.hasClass('spmenu-open') ? body.css('left', bodyLeft - 240) : body.css('left', bodyLeft + 240);
                        menu.hasClass('spmenu-open') ? menu.css('left', parseInt(menu.css('left')) - 240) : menu.css('left', parseInt(menu.css('left')) + 240);
                    }
                    if (menu.hasClass('spmenu-right')) {
                        var bodyLeft = parseInt(body.css('left'));
                        bodyLeft = bodyLeft ? bodyLeft : 0;
                        menu.hasClass('spmenu-open') ? body.css('left', bodyLeft + 240) : body.css('left', bodyLeft - 240);
                        menu.hasClass('spmenu-open') ? menu.css('right', parseInt(menu.css('right')) - 240) : menu.css('right', parseInt(menu.css('right')) + 240);
                    }
                    if (menu.hasClass('spmenu-top')) {
                        var bodyTop = parseInt(body.css('top'));
                        bodyTop = bodyTop ? bodyTop : 0;
                        menu.hasClass('spmenu-open') ? body.css('top', 'auto') : body.css('top', bodyTop + 150);
                        menu.hasClass('spmenu-open') ? menu.css('top', parseInt(menu.css('top')) - 150) : menu.css('top', parseInt(menu.css('top')) + 150);
                    }
                    if (menu.hasClass('spmenu-bottom')) {
                        var bodyTop = parseInt(body.css('top'));
                        bodyTop = bodyTop ? bodyTop : 0;
                        menu.hasClass('spmenu-open') ? body.css('top', 'auto') : body.css('top', bodyTop - 150);
                        menu.hasClass('spmenu-open') ? menu.css('bottom', parseInt(menu.css('bottom')) - 150) : menu.css('bottom', parseInt(menu.css('bottom')) + 150);
                    }
                    menu.toggleClass('spmenu-open');
                });
            }
        }
    })
    .directive('ngSlidePushMenu', ['$document', function ($document) {
        function compile(elem, attrs, transclude) {
            link.transclude = transclude;
            return( link );

        }

        function link(scope, elem, attrs) {

            link.transclude(
                scope,
                function (clone) {
                    var classes = attrs.spmClass ? attrs.spmClass : '';
                    classes += ' spmenu spmenu-' + ( (attrs.position == 'right' || attrs.position == 'left') ? 'vertical' : 'horizontal' ) + ' spmenu-' + attrs.position;
                    elem.addClass(classes);
                    var positionFix = attrs.fixTop ? 'top: ' + (parseInt(attrs.fixTop) + elem.position().top) + 'px; ' : '';
                    positionFix += attrs.fixLeft ? 'left: ' + (parseInt(attrs.fixLeft) + elem.position().left) + 'px; ' : '';
                    elem.attr('style', positionFix);
                    if (attrs.button) {
                        var btn = elem.find('.spmenu-button').addClass('show');
                        btn.append('<i class="' + attrs.buttonIconClass + '"></i>')
                        if (attrs.button === 'slide') {
                            $document.mouseup(function (e) {
                                if (!elem.is(e.target) && elem.has(e.target).length === 0 && elem.hasClass('spmenu-open')){
                                    btn.toggleClass('active');
                                    if (elem.hasClass('spmenu-left')) {
                                        elem.css('left', parseInt(elem.css('left')) - 240);
                                    }
                                    if (elem.hasClass('spmenu-right')) {
                                        elem.css('right', parseInt(elem.css('right')) - 240);
                                    }
                                    if (elem.hasClass('spmenu-top')) {
                                        elem.css('top', parseInt(elem.css('top')) - 150);
                                    }
                                    if (elem.hasClass('spmenu-bottom')) {
                                        elem.css('bottom', parseInt(elem.css('bottom')) - 150);
                                    }
                                    elem.toggleClass('spmenu-open');
                                }
                            });
                            btn.click(function () {
                                btn.toggleClass('active');
                                if (elem.hasClass('spmenu-left')) {
                                    elem.hasClass('spmenu-open') ? elem.css('left', parseInt(elem.css('left')) - 240) : elem.css('left', parseInt(elem.css('left')) + 240);
                                }
                                if (elem.hasClass('spmenu-right')) {
                                    elem.hasClass('spmenu-open') ? elem.css('right', parseInt(elem.css('right')) - 240) : elem.css('right', parseInt(elem.css('right')) + 240);
                                }
                                if (elem.hasClass('spmenu-top')) {
                                    elem.hasClass('spmenu-open') ? elem.css('top', parseInt(elem.css('top')) - 150) : elem.css('top', parseInt(elem.css('top')) + 150);
                                }
                                if (elem.hasClass('spmenu-bottom')) {
                                    elem.hasClass('spmenu-open') ? elem.css('bottom', parseInt(elem.css('bottom')) - 150) : elem.css('bottom', parseInt(elem.css('bottom')) + 150);
                                }
                                elem.toggleClass('spmenu-open');
                            });
                        }
                        if (attrs.button === 'push') {
                            angular.element('body').addClass('spmenu-push');
                            $document.mouseup(function (e) {
                                if (!elem.is(e.target) && elem.has(e.target).length === 0 && elem.hasClass('spmenu-open')){
                                    btn.toggleClass('active');
                                    var body = angular.element('body');
                                    if (elem.hasClass('spmenu-left')) {
                                        var bodyLeft = parseInt(body.css('left'));
                                        bodyLeft = bodyLeft ? bodyLeft : 0;
                                        body.css('left', bodyLeft - 240);
                                        elem.css('left', parseInt(elem.css('left')) - 240);
                                    }
                                    if (elem.hasClass('spmenu-right')) {
                                        var bodyLeft = parseInt(body.css('left'));
                                        bodyLeft = bodyLeft ? bodyLeft : 0;
                                        body.css('left', bodyLeft + 240);
                                        elem.css('right', parseInt(elem.css('right')) - 240);
                                    }
                                    if (elem.hasClass('spmenu-top')) {
                                        body.css('top', 'auto');
                                        elem.css('top', parseInt(elem.css('top')) - 150);
                                    }
                                    if (elem.hasClass('spmenu-bottom')) {
                                        body.css('top', 'auto');
                                        elem.css('bottom', parseInt(elem.css('bottom')) - 150);
                                    }
                                    elem.toggleClass('spmenu-open');
                                }
                            });
                            btn.click(function () {
                                btn.toggleClass('active');
                                var body = angular.element('body');
                                if (elem.hasClass('spmenu-left')) {
                                    var bodyLeft = parseInt(body.css('left'));
                                    bodyLeft = bodyLeft ? bodyLeft : 0;
                                    elem.hasClass('spmenu-open') ? body.css('left', bodyLeft - 240) : body.css('left', bodyLeft + 240);
                                    elem.hasClass('spmenu-open') ? elem.css('left', parseInt(elem.css('left')) - 240) : elem.css('left', parseInt(elem.css('left')) + 240);
                                }
                                if (elem.hasClass('spmenu-right')) {
                                    var bodyLeft = parseInt(body.css('left'));
                                    bodyLeft = bodyLeft ? bodyLeft : 0;
                                    elem.hasClass('spmenu-open') ? body.css('left', bodyLeft + 240) : body.css('left', bodyLeft - 240);
                                    elem.hasClass('spmenu-open') ? elem.css('right', parseInt(elem.css('right')) - 240) : elem.css('right', parseInt(elem.css('right')) + 240);
                                }
                                if (elem.hasClass('spmenu-top')) {
                                    var bodyTop = parseInt(body.css('top'));
                                    bodyTop = bodyTop ? bodyTop : 0;
                                    elem.hasClass('spmenu-open') ? body.css('top', 'auto') : body.css('top', bodyTop + 150);
                                    elem.hasClass('spmenu-open') ? elem.css('top', parseInt(elem.css('top')) - 150) : elem.css('top', parseInt(elem.css('top')) + 150);
                                }
                                if (elem.hasClass('spmenu-bottom')) {
                                    var bodyTop = parseInt(body.css('top'));
                                    bodyTop = bodyTop ? bodyTop : 0;
                                    elem.hasClass('spmenu-open') ? body.css('top', 'auto') : body.css('top', bodyTop - 150);
                                    elem.hasClass('spmenu-open') ? elem.css('bottom', parseInt(elem.css('bottom')) - 150) : elem.css('bottom', parseInt(elem.css('bottom')) + 150);
                                }
                                elem.toggleClass('spmenu-open');
                            });
                        }

                    }
                    elem.append(clone);

                }
            );

        }

        return({
            compile: compile,
            priority: 500,
            restrict: 'E',
            replace: true,
            template: '<nav><a class="spmenu-button"></a></nav>',
            transclude: 'element'
        });

    }]);
