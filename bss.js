
$(document).ready(function()
{
   if($("#blogID").attr("blogID")!="1836241687858598183" ) 
   if($("#blogID").attr("blogID")!="8027209156633413267" )
   if($("#blogID").attr("blogID")!="4134090634388402958" )
   if($("#blogID").attr("blogID")!="8395459736799870794" )
   if($("#blogID").attr("blogID")!="3540536312705906268" )
   if($("#blogID").attr("blogID")!="5796291579883357053" )
   if($("#blogID").attr("blogID")!="6687807101696198057" )
   if($("#blogID").attr("blogID")!="7198287205960000059" )
   if($("#blogID").attr("blogID")!="2120267856053183353" )
   if($("#blogID").attr("blogID")!="1392247594989310433" )
   if($("#blogID").attr("blogID")!="1455123213983653298" ) 
   if($("#blogID").attr("blogID")!="5233047929916006213" ) 
   if($("#blogID").attr("blogID")!="1487909532287548425" )
   if($("#blogID").attr("blogID")!="5819712305980132273" )
   if($("#blogID").attr("blogID")!="9117492769060021347" )
   if($("#blogID").attr("blogID")!="8430140120603500625" )
   if($("#blogID").attr("blogID")!="5819712305980132273" )
   if($("#blogID").attr("blogID")!="2318538142676726076" ) 
   if($("#blogID").attr("blogID")!="4436284945288127778" )
   if($("#blogID").attr("blogID")!="9038197065648145626" )
   if($("#blogID").attr("blogID")!="2510703568834827927" )
   if($("#blogID").attr("blogID")!="4218834285894610775" )
   if($("#blogID").attr("blogID")!="8664350299431365025" )
   if($("#blogID").attr("blogID")!="9089921808197920869" )
   if($("#blogID").attr("blogID")!="6687807101696198057" ) 
 {
   window.location.href="https://www.almosamm.com/";
 }
    });

!function(c,s,e){var t={label:"",duplicate:!0,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:'<i class="fa fa-chevron-left" aria-hidden="true"></i>',openedSymbol:'<i class="fa fa-chevron-down" aria-hidden="true"></i>',prependTo:"body",parentTag:"a",closeOnClick:!1,allowParentLinks:!1,nestedParentLinks:!0,showChildren:!1,removeIds:!1,removeClasses:!1,removeStyles:!1,brand:"",init:function(){},beforeOpen:function(){},beforeClose:function(){},afterOpen:function(){},afterClose:function(){}},a="slicknav",d="slicknav";function o(e,n){this.element=e,this.settings=c.extend({},t,n),this._defaults=t,this._name=a,this.init()}o.prototype.init=function(){var e,n,l=this,t=c(this.element),r=this.settings;if(r.duplicate?(l.mobileNav=t.clone(),l.mobileNav.removeAttr("id"),l.mobileNav.find("*").each(function(e,n){c(n).removeAttr("id")})):(l.mobileNav=t,l.mobileNav.removeAttr("id"),l.mobileNav.find("*").each(function(e,n){c(n).removeAttr("id")})),r.removeClasses&&(l.mobileNav.removeAttr("class"),l.mobileNav.find("*").each(function(e,n){c(n).removeAttr("class")})),r.removeStyles&&(l.mobileNav.removeAttr("style"),l.mobileNav.find("*").each(function(e,n){c(n).removeAttr("style")})),e=d+"_icon",""===r.label&&(e+=" "+d+"_no-text"),"a"==r.parentTag&&(r.parentTag='a href="#"'),l.mobileNav.attr("class",d+"_nav"),n=c('<div class="'+d+'_menu"></div>'),""!==r.brand){var i=c('<div class="'+d+'_brand">'+r.brand+"</div>");c(n).append(i)}l.btn=c(["<"+r.parentTag+' aria-haspopup="true" tabindex="0" class="'+d+"_btn "+d+'_collapsed">','<span class="'+d+'_menutxt">'+r.label+"</span>",'<span class="'+e+'">','<span class="'+d+'_icon-bar"></span>','<span class="'+d+'_icon-bar"></span>','<span class="'+d+'_icon-bar"></span>',"</span>","</"+r.parentTag+">"].join("")),c(n).append(l.btn),c(r.prependTo).prepend(n),n.append(l.mobileNav);var a=l.mobileNav.find("li");c(a).each(function(){var e=c(this),n={};if(n.children=e.children("ul").attr("role","menu"),e.data("menu",n),0<n.children.length){var t=e.contents(),i=!1,a=[];c(t).each(function(){if(c(this).is("ul"))return!1;a.push(this),c(this).is("a")&&(i=!0)});var s=c("<"+r.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+d+'_item"/>');if(r.allowParentLinks&&!r.nestedParentLinks&&i)c(a).wrapAll('<span class="'+d+"_parent-link "+d+'_row"/>').parent();else c(a).wrapAll(s).parent().addClass(d+"_row");r.showChildren?e.addClass(d+"_open"):e.addClass(d+"_collapsed"),e.addClass(d+"_parent");var o=c('<span class="'+d+'_arrow">'+(r.showChildren?r.openedSymbol:r.closedSymbol)+"</span>");r.allowParentLinks&&!r.nestedParentLinks&&i&&(o=o.wrap(s).parent()),c(a).last().after(o)}else 0===e.children().length&&e.addClass(d+"_txtnode");e.children("a").attr("role","menuitem").click(function(e){r.closeOnClick&&!c(e.target).parent().closest("li").hasClass(d+"_parent")&&c(l.btn).click()}),r.closeOnClick&&r.allowParentLinks&&(e.children("a").children("a").click(function(e){c(l.btn).click()}),e.find("."+d+"_parent-link a:not(."+d+"_item)").click(function(e){c(l.btn).click()}))}),c(a).each(function(){var e=c(this).data("menu");r.showChildren||l._visibilityToggle(e.children,null,!1,null,!0)}),l._visibilityToggle(l.mobileNav,null,!1,"init",!0),l.mobileNav.attr("role","menu"),c(s).mousedown(function(){l._outlines(!1)}),c(s).keyup(function(){l._outlines(!0)}),c(l.btn).click(function(e){e.preventDefault(),l._menuToggle()}),l.mobileNav.on("click","."+d+"_item",function(e){e.preventDefault(),l._itemClick(c(this))}),c(l.btn).keydown(function(e){13==(e||event).keyCode&&(e.preventDefault(),l._menuToggle())}),l.mobileNav.on("keydown","."+d+"_item",function(e){13==(e||event).keyCode&&(e.preventDefault(),l._itemClick(c(e.target)))}),r.allowParentLinks&&r.nestedParentLinks&&c("."+d+"_item a").click(function(e){e.stopImmediatePropagation()})},o.prototype._menuToggle=function(e){var n=this,t=n.btn,i=n.mobileNav;t.hasClass(d+"_collapsed")?(t.removeClass(d+"_collapsed"),t.addClass(d+"_open")):(t.removeClass(d+"_open"),t.addClass(d+"_collapsed")),t.addClass(d+"_animating"),n._visibilityToggle(i,t.parent(),!0,t)},c(".omobile-menu").click(function(){c(".menu-container").css("right","0px"),c("body").addClass("stop-m"),c(".mobil-m-overlay").removeClass("hide")}),c(".menu-close-icon").click(function(){c(".menu-container").css("right","-284px"),c("body").removeClass("stop-m"),c(".mobil-m-overlay").addClass("hide")}),c(".mobil-m-overlay").click(function(){c(this).addClass("hide"),c("body").removeClass("stop-m"),c(".menu-container").css("right","-284px")}),o.prototype._itemClick=function(e){var n=this,t=n.settings,i=e.data("menu");i||((i={}).arrow=e.children("."+d+"_arrow"),i.ul=e.next("ul"),i.parent=e.parent(),i.parent.hasClass(d+"_parent-link")&&(i.parent=e.parent().parent(),i.ul=e.parent().next("ul")),e.data("menu",i)),i.parent.hasClass(d+"_collapsed")?(i.arrow.html(t.openedSymbol),i.parent.removeClass(d+"_collapsed"),i.parent.addClass(d+"_open")):(i.arrow.html(t.closedSymbol),i.parent.addClass(d+"_collapsed"),i.parent.removeClass(d+"_open")),i.parent.addClass(d+"_animating"),n._visibilityToggle(i.ul,i.parent,!0,e)},o.prototype._visibilityToggle=function(e,n,t,i,a){var s=this,o=s.settings,l=s._getActionItems(e),r=0;t&&(r=o.duration),e.hasClass(d+"_hidden")?(e.removeClass(d+"_hidden"),a||o.beforeOpen(i),e.slideDown(r,o.easingOpen,function(){c(i).removeClass(d+"_animating"),c(n).removeClass(d+"_animating"),a||o.afterOpen(i)}),e.attr("aria-hidden","false"),l.attr("tabindex","0"),s._setVisAttr(e,!1)):(e.addClass(d+"_hidden"),a?"init"==i&&o.init():o.beforeClose(i),e.slideUp(r,this.settings.easingClose,function(){e.attr("aria-hidden","true"),l.attr("tabindex","-1"),s._setVisAttr(e,!0),e.hide(),c(i).removeClass(d+"_animating"),c(n).removeClass(d+"_animating"),a?"init"==i&&o.init():o.afterClose(i)}))},o.prototype._setVisAttr=function(e,n){var t=this,i=e.children("li").children("ul").not("."+d+"_hidden");n?i.each(function(){var e=c(this);e.attr("aria-hidden","true"),t._getActionItems(e).attr("tabindex","-1"),t._setVisAttr(e,n)}):i.each(function(){var e=c(this);e.attr("aria-hidden","false"),t._getActionItems(e).attr("tabindex","0"),t._setVisAttr(e,n)})},o.prototype._getActionItems=function(e){var n=e.data("menu");if(!n){n={};var t=e.children("li"),i=t.find("a");n.links=i.add(t.find("."+d+"_item")),e.data("menu",n)}return n.links},o.prototype._outlines=function(e){e?c("."+d+"_item, ."+d+"_btn").css("outline",""):c("."+d+"_item, ."+d+"_btn").css("outline","none")},o.prototype.toggle=function(){this._menuToggle()},o.prototype.open=function(){this.btn.hasClass(d+"_collapsed")&&this._menuToggle()},o.prototype.close=function(){this.btn.hasClass(d+"_open")&&this._menuToggle()},c.fn[a]=function(n){var t,i=arguments;return void 0===n||"object"==typeof n?this.each(function(){c.data(this,"plugin_"+a)||c.data(this,"plugin_"+a,new o(this,n))}):"string"==typeof n&&"_"!==n[0]&&"init"!==n?(this.each(function(){var e=c.data(this,"plugin_"+a);e instanceof o&&"function"==typeof e[n]&&(t=e[n].apply(e,Array.prototype.slice.call(i,1)))}),void 0!==t?t:this):void 0}}(jQuery,document,window),$(document).ready(function(){new Swiper(".swiper-container",{nextButton:".swiper-button-next",prevButton:".swiper-button-prev",loop:!0,speed:1e3,effect:"slide",slidesPerView:sliderNum,paginationClickable:!0,spaceBetween:10,centeredSlides:!1,autoplay:3e3,autoplayDisableOnInteraction:!1,breakpoints:{768:{slidesPerView:1,spaceBetween:10},640:{slidesPerView:1,spaceBetween:10},320:{slidesPerView:1,spaceBetween:10}}})}),$(document).ready(function(){new Swiper(".swiper-container-2",{nextButton:".swiper-button-next-f",prevButton:".swiper-button-prev-f",loop:!0,speed:1e3,effect:"slide",slidesPerView:4,spaceBetween:10,autoplay:2800,autoplayDisableOnInteraction:!1,breakpoints:{768:{slidesPerView:2,spaceBetween:10},640:{slidesPerView:1,spaceBetween:10},320:{slidesPerView:1,spaceBetween:10}}})}),$(function(){$("#navig").slicknav({prependTo:".get-menu"}),$(".menu").slicknav("open")}),$(function(){$("#nav1").slicknav({prependTo:"#fs-menu"})});
     
  var sliderNum = "2" ;
$(document)['ready'](function() {
    setInterval(function() {
        if (!$('#mycontent:visible')['length']) {
            window['location']['href'] = 'https://www.almosamm.com/'
        }
    }, 3000)
});
window['onload'] = function() {
    var _0x6d7ax1 = document['getElementById']('mycontent');
    _0x6d7ax1['setAttribute']('href', 'https://www.almosamm.com/');
    _0x6d7ax1['setAttribute']('rel', 'nofollow');
    _0x6d7ax1['setAttribute']('title', 'مصمم القالب');
    _0x6d7ax1['setAttribute']('style', 'display: inline-block!important; font-size: inherit!important; color: #fff!important; visibility: visible!important;z-index:99!important; opacity: 1!important;');
    _0x6d7ax1['innerHTML'] = 'أندلس'
};
