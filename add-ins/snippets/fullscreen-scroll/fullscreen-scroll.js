jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, n, r, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
    },
    easeInQuad: function(e, t, n, r, i) {
        return r * (t /= i) * t + n
    },
    easeOutQuad: function(e, t, n, r, i) {
        return -r * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t + n;
        return -r / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function(e, t, n, r, i) {
        return r * (t /= i) * t * t + n
    },
    easeOutCubic: function(e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t * t + n;
        return r / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function(e, t, n, r, i) {
        return r * (t /= i) * t * t * t + n
    },
    easeOutQuart: function(e, t, n, r, i) {
        return -r * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t * t * t + n;
        return -r / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function(e, t, n, r, i) {
        return r * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function(e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t * t * t * t + n;
        return r / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function(e, t, n, r, i) {
        return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
    },
    easeOutSine: function(e, t, n, r, i) {
        return r * Math.sin(t / i * (Math.PI / 2)) + n
    },
    easeInOutSine: function(e, t, n, r, i) {
        return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
    },
    easeInExpo: function(e, t, n, r, i) {
        return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
    },
    easeOutExpo: function(e, t, n, r, i) {
        return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
    },
    easeInOutExpo: function(e, t, n, r, i) {
        if (t == 0) return n;
        if (t == i) return n + r;
        if ((t /= i / 2) < 1) return r / 2 * Math.pow(2, 10 * (t - 1)) + n;
        return r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    },
    easeInCirc: function(e, t, n, r, i) {
        return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    },
    easeOutCirc: function(e, t, n, r, i) {
        return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
    },
    easeInOutCirc: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) return -r / 2 * (Math.sqrt(1 - t * t) - 1) + n;
        return r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function(e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        if (!o) o = i * .3;
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
    },
    easeOutElastic: function(e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        if (!o) o = i * .3;
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
    },
    easeInOutElastic: function(e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) return n;
        if ((t /= i / 2) == 2) return n + r;
        if (!o) o = i * .3 * 1.5;
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        if (t < 1) return -.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n;
        return u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
    },
    easeInBack: function(e, t, n, r, i, s) {
        if (s == undefined) s = 1.70158;
        return r * (t /= i) * t * ((s + 1) * t - s) + n
    },
    easeOutBack: function(e, t, n, r, i, s) {
        if (s == undefined) s = 1.70158;
        return r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
    },
    easeInOutBack: function(e, t, n, r, i, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= i / 2) < 1) return r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n;
        return r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
    },
    easeInBounce: function(e, t, n, r, i) {
        return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
    },
    easeOutBounce: function(e, t, n, r, i) {
        if ((t /= i) < 1 / 2.75) {
            return r * 7.5625 * t * t + n
        } else if (t < 2 / 2.75) {
            return r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n
        } else if (t < 2.5 / 2.75) {
            return r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n
        } else {
            return r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        }
    },
    easeInOutBounce: function(e, t, n, r, i) {
        if (t < i / 2) return jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n;
        return jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
    }
});
(function(e) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else if (typeof exports === "object") {
        module.exports = e
    } else {
        e(jQuery)
    }
})(function(e) {
    function u(t) {
        var n = t || window.event,
            o = r.call(arguments, 1),
            u = 0,
            f = 0,
            l = 0,
            c = 0;
        t = e.event.fix(n);
        t.type = "mousewheel";
        if ("detail" in n) {
            l = n.detail * -1
        }
        if ("wheelDelta" in n) {
            l = n.wheelDelta
        }
        if ("wheelDeltaY" in n) {
            l = n.wheelDeltaY
        }
        if ("wheelDeltaX" in n) {
            f = n.wheelDeltaX * -1
        }
        if ("axis" in n && n.axis === n.HORIZONTAL_AXIS) {
            f = l * -1;
            l = 0
        }
        u = l === 0 ? f : l;
        if ("deltaY" in n) {
            l = n.deltaY * -1;
            u = l
        }
        if ("deltaX" in n) {
            f = n.deltaX;
            if (l === 0) {
                u = f * -1
            }
        }
        if (l === 0 && f === 0) {
            return
        }
        c = Math.max(Math.abs(l), Math.abs(f));
        if (!s || c < s) {
            s = c
        }
        u = Math[u >= 1 ? "floor" : "ceil"](u / s);
        f = Math[f >= 1 ? "floor" : "ceil"](f / s);
        l = Math[l >= 1 ? "floor" : "ceil"](l / s);
        t.deltaX = f;
        t.deltaY = l;
        t.deltaFactor = s;
        o.unshift(t, u, f, l);
        if (i) {
            clearTimeout(i)
        }
        i = setTimeout(a, 200);
        return (e.event.dispatch || e.event.handle).apply(this, o)
    }

    function a() {
        s = null
    }
    var t = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        n = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        r = Array.prototype.slice,
        i, s;
    if (e.event.fixHooks) {
        for (var o = t.length; o;) {
            e.event.fixHooks[t[--o]] = e.event.mouseHooks
        }
    }
    e.event.special.mousewheel = {
        version: "3.1.6",
        setup: function() {
            if (this.addEventListener) {
                for (var e = n.length; e;) {
                    this.addEventListener(n[--e], u, false)
                }
            } else {
                this.onmousewheel = u
            }
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var e = n.length; e;) {
                    this.removeEventListener(n[--e], u, false)
                }
            } else {
                this.onmousewheel = null
            }
        }
    };
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
});
$(function() {
    "use strict";
    $.fn.onTimeout = function(e, t, n) {
        var r = null,
            i = function() {
                if (r) clearTimeout(r);
                r = setTimeout(t, n)
            };
        return $(this).on(e, i)
    };
    var e = $(window);
    (function() {
        var n = 0,
            r = $(".js-fullscreen").css({
                margin: 0,
                padding: 0
            }),
            i = function() {
                console.log("onResize");
                r.height(e.height() > n ? e.height() : n)
            };
        i();
        e.onTimeout("resize", i, 100)
    })()
});
$(function() {
    "use strict";

    function s(s, o, u) {
        if (n) return;
        var a = Math.round(e.scrollTop());
        var f = Math.round(e.height());
        var l = Math.round(s.offset().top);
        var c = Math.round(s.height());
        if (o.deltaY > 0) {
            if (l + c + 200 > a && l < a) {
                console.log("докрутка вверх");
                t.stop(true, false).animate({
                    scrollTop: l
                }, r, i);
                n = true;
                setTimeout(function() {
                    n = false
                }, r);
                o.preventDefault();
                return true
            }
        } else {
            if (l < a + f + 200 && l > a) {
                console.log("докрутка вниз");
                t.stop(true, false).animate({
                    scrollTop: l
                }, r, i);
                n = true;
                setTimeout(function() {
                    n = false
                }, r);
                o.preventDefault();
                return true
            }
        }
        return false
    }
    var e = $(window);
    var t = $("html,body");
    var n = false;
    var r = 300;
    var i = typeof $.easing.easeOutQuad != "undefined" ? "easeOutQuad" : "swing";
    (function() {
        var n = $(".js-stickyscroll");
        e.on("mousewheel", function(e) {
            n.each(function(t, n) {
                s($(n), e, "window")
            })
        })
    })()
})