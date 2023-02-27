标准模式下的html、body元素的高度均为0。
我们都知道,一个块级元素没有主动为其分配高度和宽度的时候,浏览器会默认为其分配最大宽度,但是不负责高度的分配,没有设置高度时,高度是由子元素堆砌起来的,那么html和body的高度也是由子元素堆砌起来的。另外,元素高度设置为百分比需要向上遍历父元素找到一个定值高度才能起作用,如果中途有个height为auto或者没有设置高度,那么设置百分比高度就不起作用了

getBoundingClientRect()!!!

if ((e => {
                                "scrollRestoration" in window.history ? window.history.scrollRestoration = "manual" : window.onbeforeunload = () => {
                                    window.scrollTo && e.scrollTo(0, 0)
                                }
                            })(e), n(e), !document.querySelector(".tcl-homepage-hero.tcl-homepage-hero--overlay")) {
                            var o = r();
                            o.homepageContentWrapper = i, o.homepageHeroes = t, o.pageShell = e, o.init()
                        }

, document.body.classList.add("template-landing-page--content-snapping-on")

page-new-homepage template-landing-page tcl-page tds-menu-header-sticky tds-site-header--dark tds-menu-header-transparent--dark tcl-parallax-effect--off site-body animate-onscroll i18n-en_eu is-Chrome
float是以父类为target的