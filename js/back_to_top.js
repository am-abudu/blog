$(document).ready(function(){var i=$("#back-to-top"),a=$("footer.footer"),l=$(".column-main"),d=$(".column-left"),c=$(".column-right"),r=0,n=null,h={base:{classname:"card has-text-centered",left:"",width:40,bottom:20}};function p(e){if(null===n||(o=n,t=e,[].concat(Object.keys(o),Object.keys(t)).some(function(e){return!Object.prototype.hasOwnProperty.call(o,e)||!Object.prototype.hasOwnProperty.call(t,e)||t[e]!==o[e]}))){var o,t;for(var s in i.attr("class",e.classname),e)"classname"!==s&&i.css(s,e[s]);n=e}}function b(){return 1078<=window.innerWidth}function m(){return 0<c.length}function u(){return $(window).scrollTop()+$(window).height()}function w(){return i.outerHeight(!0)}function e(){if(b()||768<=window.innerWidth&&!b()&&!(0<d.length)&&m()){var e=void 0,o=(l.outerWidth()-l.width())/2,t=$(window).width()-i.outerWidth(!0)-20,s=a.offset().top+w()/2+20;e=0===$(window).scrollTop()||u()<(m()?Math.max.apply(null,c.find(".widget").map(function(){return $(this).offset().top+$(this).outerHeight(!0)})):0)+o+w()?h["desktop-hidden"]:u()<s?h["desktop-visible"]:Object.assign({},h["desktop-dock"],{bottom:u()-s+20});var n=l.offset().left+l.outerWidth()+o;p(e=Object.assign({},e,{left:Math.min(n,t)}))}else $(window).scrollTop()<r&&0<$(window).scrollTop()?p(h["mobile-visible"]):p(h["mobile-hidden"]),r=$(window).scrollTop()}h["desktop-hidden"]=Object.assign({},h.base,{classname:h.base.classname+" rise-up"}),h["desktop-visible"]=Object.assign({},h["desktop-hidden"],{classname:h["desktop-hidden"].classname+" fade-in"}),h["desktop-dock"]=Object.assign({},h["desktop-visible"],{classname:h["desktop-visible"].classname+" fade-in is-rounded",width:40}),h["mobile-hidden"]=Object.assign({},h.base,{classname:h.base.classname+" fade-in",right:20}),h["mobile-visible"]=Object.assign({},h["mobile-hidden"],{classname:h["mobile-hidden"].classname+" rise-up"}),e(),$(window).resize(e),$(window).scroll(e),$("#back-to-top").on("click",function(){CSS&&CSS.supports&&CSS.supports("(scroll-behavior: smooth)")?window.scroll({top:0,behavior:"smooth"}):$("body, html").animate({scrollTop:0},400)})});