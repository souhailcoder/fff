$(document).ready(function()
{
   if($("#blogID").attr("blogID")!="7601418572176364349" ) 
 {
   window.location.href="https://www.almosamm.com/";
 }
    });
    
    function introPosts( json ) { var htmlcode = '<ul class="swiper-wrapper">'; document.write( htmlcode ); for ( var i = 0; i < json.feed.entry.length; i++ ) { for ( var j = 0; j < json.feed.entry[ i ].link.length; j++ ) { if ( json.feed.entry[ i ].link[ j ].rel == 'alternate' ) { var postUrl = json.feed.entry[ i ].link[ j ].href; break; } } var postTitle = json.feed.entry[ i ].title.$t; var postThumbSize = 600; var authorImg = " "; var postThumb = " "; postThumb = postThumb.replace( '/s72-c/', '/s' + postThumbSize + '/' ); var postCategory = " "; var author = json.feed.entry[ i ].author[ 0 ].name.$t; var date = json.feed.entry[ i ].published.$t; var month = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]; var month2 = ["يناير","فبراير","مارس","أبريل","مايو","يونيو"," يوليو"," أغسطس","سبتمبر","أكتوبر","نوفمبر"," ديسمبر"]; var day = date.split( "-" )[ 2 ].substring( 0, 2 ); var m = date.split( "-" )[ 1 ]; var year = date.split( "-" )[ 0 ]; for ( var u2 = 0; u2 < month.length; u2++ ) { if ( parseInt( m ) == month[ u2 ] ) { m = month2[ u2 ]; break; } } date = m + ' ' + day + ', ' + year; try { postThumb = json.feed.entry[ i ].media$thumbnail.url; } catch ( nl ) { postThumb = "http://4.bp.blogspot.com/-OI0BoYP677M/VZu1TW7a3DI/AAAAAAAAFsE/4BRdE2YFS5A/s1600/noimg.png"; } try { postCategory = json.feed.entry[ i ].category[ 0 ].term; } catch ( n ) { postCategory = "uncategorized"; } try { authorImg = json.feed.entry[i].author[0].gd$image.src; } catch ( nl ) { authorImg = "http://3.bp.blogspot.com/-fgwrcZWeRrU/V26tvNcGtsI/AAAAAAAAAG4/lGwGnQDZsNY7bAPr8hVorZruD-jHHxxOgCLcB/s50/anonyme.png"; } var item = '<div class="swiper-slide"><div class="item-outer"><div class="intro-thumbail"><a href="' + postUrl + '" style="background:url(' + postThumb + ') no-repeat center center;background-size: cover"/></div><div class="intro-posts-overlay"><span class="cat"><a class="category" href="/search/label/' + postCategory + '?max-results=6">' + postCategory + '</a><h1 class="and-posts-title"><a href="' + postUrl + '">' + postTitle + '</a></h1> <a class="rmoreintro" href="' + postUrl + '" role="button"> عرض الموضوع <i class="lnr lnr-chevron-left"></i></a> <ul class="intro-post-meta"></ul></div></div></div>'; htmlcode += '</ul>'; document.write( item ); $('.intro-thumbail a').attr('style', function(i, src) { return src.replace('/s72-c', '/s1600'); }); $('.intro-thumbail a').attr('style', function(i, src) { return src.replace('/default.jpg', '/hqdefault.jpg'); }); } } function relatedPosts( json ) { var htmlcode = '<ul class="row">'; document.write( htmlcode ); for ( var i = 0; i < json.feed.entry.length; i++ ) { for ( var j = 0; j < json.feed.entry[ i ].link.length; j++ ) { if ( json.feed.entry[ i ].link[ j ].rel == 'alternate' ) { var postUrl = json.feed.entry[ i ].link[ j ].href; break; } } var postTitle = json.feed.entry[ i ].title.$t; var postThumbSize = 600; var postThumb = " "; var postCategory = " "; postThumb = postThumb.replace( '/s72-c/', '/s' + postThumbSize + '/' ); try { postThumb = json.feed.entry[ i ].media$thumbnail.url; } catch ( nl ) { postThumb = "http://4.bp.blogspot.com/-OI0BoYP677M/VZu1TW7a3DI/AAAAAAAAFsE/4BRdE2YFS5A/s1600/noimg.png"; } try { postCategory = json.feed.entry[ i ].category[ 0 ].term; } catch ( n ) { postCategory = "uncategorized"; } var item = '<li class="related-post"><div class="item-outer"><div class="related-thumbnail"><a href="' + postUrl + '"><img src="' + postThumb.replace( '/s72-c/', '/s' + 400 + '/' ) + '"/></a></div><div class="related-posts-overlay"><h4 class="related-posts-title"><a href="' + postUrl + '">' + postTitle + '</a></h4></div></div></li>'; htmlcode += '</ul>'; document.write( item ); } } $(function() { var aboveHeight = $('#header-wrapper').outerHeight(); $(window).scroll(function() { if ($(window).scrollTop() > aboveHeight) { $('#menu-wrapper').addClass('fixed-menu').next(); } else { $('#menu-wrapper').removeClass('fixed-menu').next(); } }); }); var didScroll; var lastScrollTop = 0; var delta = 5; var navbarHeight = $('#menu-wrapper').outerHeight(); $(window).scroll(function(event) { didScroll = true; }); setInterval(function() { if (didScroll) { hasScrolled(); didScroll = false; } }, 250); function hasScrolled() { var st = $(this).scrollTop(); if (Math.abs(lastScrollTop - st) <= delta) return; if (st > lastScrollTop && st > navbarHeight) { $('#menu-wrapper').removeClass('nav-down').addClass('nav-up'); } else { if (st + $(window).height() < $(document).height()) { $('#menu-wrapper').removeClass('nav-up').addClass('nav-down'); } } lastScrollTop = st; } var relatedTitles = new Array, relatedTitlesNum = 0, relatedUrls = new Array, thumburl = new Array; function t(e) { var t = e.substr(0, 4), s = months[Number(e.substring(5, 7)) - 1]; return Number(e.substring(8, 10)) + " " + s + " " + t } function postbylabel(e) { document.write("<ul class='parposts'>"); for (var s = 0; s < e.feed.entry.length; s++) { for (var r = e.feed.entry[s], n = 0; n < r.link.length; n++) if ("alternate" == r.link[n].rel) { var a = r.link[n].href; break } t(r.published.$t); var l = r.title.$t, c = r.content.$t.replace(/<.+?>/g, "").substring(0, 100) + "...", i = r.category[0].term; img = r.media$thumbnail.url.replace("s72-c", "s1600").replace("default", "hqdefault"), document.write("<li><div class='labpost'><div class='posts-thumb'><div class='block-image'><div class='imgcont'><a class='recimge' href='" + a + "' style='background:url(" + img + ")no-repeat center center;background-size: cover'></a></div></div></div><div class='cont'><h3><a href=" + a + ">" + l + "</a></h3><p class='summary'>" + c + "</p><a class='morebtn' href='" + a + "'>عرض الموضوع</a></div></li>") } document.write("</ul>") }
 

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