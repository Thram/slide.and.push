angular.module("slidePushMenu", []).factory('slidePush', [function () {
        var spmenuHorizontalHeight, spmenuVerticalWidth;
        spmenuVerticalWidth = 320;
        spmenuHorizontalHeight = 150;
        return {
            slide: function (menu, btn) {
                btn.toggleClass("active");
                if (menu.hasClass("spmenu-left")) {
                    if (menu.hasClass("spmenu-open")) {
                        menu.css("left", parseInt(menu.css("left")) - spmenuVerticalWidth);
                    } else {
                        menu.css("left", parseInt(menu.css("left")) + spmenuVerticalWidth);
                    }
                }
                if (menu.hasClass("spmenu-right")) {
                    if (menu.hasClass("spmenu-open")) {
                        menu.css("right", parseInt(menu.css("right")) - spmenuVerticalWidth);
                    } else {
                        menu.css("right", parseInt(menu.css("right")) + spmenuVerticalWidth);
                    }
                }
                if (menu.hasClass("spmenu-top")) {
                    if (menu.hasClass("spmenu-open")) {
                        menu.css("top", parseInt(menu.css("top")) - spmenuHorizontalHeight);
                    } else {
                        menu.css("top", parseInt(menu.css("top")) + spmenuHorizontalHeight);
                    }
                }
                if (menu.hasClass("spmenu-bottom")) {
                    if (menu.hasClass("spmenu-open")) {
                        menu.css("bottom", parseInt(menu.css("bottom")) - spmenuHorizontalHeight);
                    } else {
                        menu.css("bottom", parseInt(menu.css("bottom")) + spmenuHorizontalHeight);
                    }
                }
                return menu.toggleClass("spmenu-open");
            },
            slideForceClose: function (menu, btn) {
                if (menu.hasClass("spmenu-open")) {
                    btn.removeClass("active");
                    if (menu.hasClass("spmenu-left")) {
                        menu.css("left", parseInt(menu.css("left")) - spmenuVerticalWidth);
                    }
                    if (menu.hasClass("spmenu-right")) {
                        menu.css("right", parseInt(menu.css("right")) - spmenuVerticalWidth);
                    }
                    if (menu.hasClass("spmenu-top")) {
                        menu.css("top", parseInt(menu.css("top")) - spmenuHorizontalHeight);
                    }
                    if (menu.hasClass("spmenu-bottom")) {
                        menu.css("bottom", parseInt(menu.css("bottom")) - spmenuHorizontalHeight);
                    }
                    return menu.removeClass("spmenu-open");
                }
            },
            push: function (menu, btn) {
                var body, bodyLeft, bodyTop;
                body = angular.element(document.querySelector("body"));
                btn.toggleClass("active");
                if (menu.hasClass("spmenu-left")) {
                    bodyLeft = parseInt(body.css("left"));
                    bodyLeft = (bodyLeft ? bodyLeft : 0);
                    if (menu.hasClass("spmenu-open")) {
                        body.css("left", bodyLeft - spmenuVerticalWidth);
                    } else {
                        body.css("left", bodyLeft + spmenuVerticalWidth);
                    }
                    if (menu.hasClass("spmenu-open")) {
                        menu.css("left", parseInt(menu.css("left")) - spmenuVerticalWidth);
                    } else {
                        menu.css("left", parseInt(menu.css("left")) + spmenuVerticalWidth);
                    }
                }
                if (menu.hasClass("spmenu-right")) {
                    bodyLeft = parseInt(body.css("left"));
                    bodyLeft = (bodyLeft ? bodyLeft : 0);
                    if (menu.hasClass("spmenu-open")) {
                        body.css("left", bodyLeft + spmenuVerticalWidth);
                    } else {
                        body.css("left", bodyLeft - spmenuVerticalWidth);
                    }
                    if (menu.hasClass("spmenu-open")) {
                        menu.css("right", parseInt(menu.css("right")) - spmenuVerticalWidth);
                    } else {
                        menu.css("right", parseInt(menu.css("right")) + spmenuVerticalWidth);
                    }
                }
                if (menu.hasClass("spmenu-top")) {
                    bodyTop = parseInt(body.css("top"));
                    bodyTop = (bodyTop ? bodyTop : 0);
                    if (menu.hasClass("spmenu-open")) {
                        body.css("top", "auto");
                    } else {
                        body.css("top", bodyTop + spmenuHorizontalHeight);
                    }
                    if (menu.hasClass("spmenu-open")) {
                        menu.css("top", parseInt(menu.css("top")) - spmenuHorizontalHeight);
                    } else {
                        menu.css("top", parseInt(menu.css("top")) + spmenuHorizontalHeight);
                    }
                }
                if (menu.hasClass("spmenu-bottom")) {
                    bodyTop = parseInt(body.css("top"));
                    bodyTop = (bodyTop ? bodyTop : 0);
                    if (menu.hasClass("spmenu-open")) {
                        body.css("top", "auto");
                    } else {
                        body.css("top", bodyTop - spmenuHorizontalHeight);
                    }
                    if (menu.hasClass("spmenu-open")) {
                        menu.css("bottom", parseInt(menu.css("bottom")) - spmenuHorizontalHeight);
                    } else {
                        menu.css("bottom", parseInt(menu.css("bottom")) + spmenuHorizontalHeight);
                    }
                }
                return menu.toggleClass("spmenu-open");
            },
            pushForceClose: function (menu, btn) {
                var body, bodyLeft;
                if (menu.hasClass("spmenu-open")) {
                    btn.removeClass("active");
                    body = angular.element(document.querySelector("body"));
                    if (menu.hasClass("spmenu-left")) {
                        bodyLeft = parseInt(body.css("left"));
                        bodyLeft = (bodyLeft ? bodyLeft : 0);
                        body.css("left", bodyLeft - spmenuVerticalWidth);
                        menu.css("left", parseInt(menu.css("left")) - spmenuVerticalWidth);
                    }
                    if (menu.hasClass("spmenu-right")) {
                        bodyLeft = parseInt(body.css("left"));
                        bodyLeft = (bodyLeft ? bodyLeft : 0);
                        body.css("left", bodyLeft + spmenuVerticalWidth);
                        menu.css("right", parseInt(menu.css("right")) - spmenuVerticalWidth);
                    }
                    if (menu.hasClass("spmenu-top")) {
                        body.css("top", "auto");
                        menu.css("top", parseInt(menu.css("top")) - spmenuHorizontalHeight);
                    }
                    if (menu.hasClass("spmenu-bottom")) {
                        body.css("top", "auto");
                        menu.css("bottom", parseInt(menu.css("bottom")) - spmenuHorizontalHeight);
                    }
                    return menu.removeClass("spmenu-open");
                }
            }
        };
    }
    ]).directive("ngSlideMenu", [
        'slidePush', function (slidePush) {
            return {
                restrict: "A",
                link: function (scope, elem, attrs) {
                    return elem.click(function () {
                        var menu;
                        menu = angular.element(document.querySelector("#" + attrs.ngSlideMenu));
                        return slidePush.slide(menu, elem);
                    });
                }
            };
        }
    ]).directive("ngPushMenu", [
        'slidePush', function (slidePush) {
            return {
                restrict: "A",
                link: function (scope, elem, attrs) {
                    var body, menu;
                    menu = angular.element(document.querySelector("#" + attrs.ngPushMenu));
                    body = angular.element(document.querySelector("body"));
                    body.addClass("spmenu-push");
                    return elem.click(function () {
                        return slidePush.push(menu, elem);
                    });
                }
            };
        }
    ]).directive("ngSlidePushMenu", [
        "$document", 'slidePush', function ($document, slidePush) {
            var compile, link;
            compile = function (elem, attrs, transclude) {
                link.transclude = transclude;
                return link;
            };
            link = function (scope, elem, attrs) {
                return link.transclude(scope, function (clone) {
                    var body, btn, buttonClass, buttonText, classes, positionFix;
                    classes = (attrs.spmClass ? attrs.spmClass : "");
                    classes += " spmenu spmenu-" + (attrs.position === "right" || attrs.position === "left" ? "vertical" : "horizontal") + " spmenu-" + attrs.position;
                    elem.addClass(classes);
                    body = angular.element(document.querySelector("body"));
                    if (attrs.button) {
                        btn = elem.find(".spmenu-button").addClass("show");
                        buttonText = attrs.buttonText ? attrs.buttonText : "";
                        buttonClass = attrs.buttonClass ? attrs.buttonClass : "";
                        btn.addClass(buttonClass);
                        btn.append("<span class=\"" + buttonClass + "\">" + buttonText + "</span>");
                        positionFix = (attrs.fixTop ? "top: " + (parseInt(attrs.fixTop) + elem.position().top) + "px; " : "");
                        positionFix += (attrs.fixLeft ? "left: " + (parseInt(attrs.fixLeft) + elem.position().left) + "px; " : "");
                        btn.attr("style", positionFix);
                        if (attrs.button === "slide") {
                            $document.mouseup(function (e) {
                                if (!elem.is(e.target) && elem.has(e.target).length === 0 && !body.hasClass('modal-open')) {
                                    return slidePush.slideForceClose(elem, btn);
                                }
                            });
                            btn.click(function () {
                                return slidePush.slide(elem, btn);
                            });
                        }
                        if (attrs.button === "push") {
                            angular.element(document.querySelector("body")).addClass("spmenu-push");
                            $document.mouseup(function (e) {
                                if (!elem.is(e.target) && elem.has(e.target).length === 0 && !body.hasClass('modal-open')) {
                                    return slidePush.pushForceClose(elem, btn);
                                }
                            });
                            btn.click(function () {
                                return slidePush.push(elem, btn);
                            });
                        }
                    }
                    elem.append(clone);
                    if (attrs.open) {
                        return btn.click();
                    }
                });
            };
            return {
                compile: compile,
                restrict: "E",
                replace: true,
                template: "<nav><a class=\"spmenu-button\"><i class=\"caret\"></i></a></nav>",
                transclude: "element"
            };
        }
    ]);