goog.provide('features.site.zero.frontend.zero');
features.site.zero.frontend.zero.simple_logout = (function features$site$zero$frontend$zero$simple_logout(){
if(cljs.core.truth_(confirm("Are you sure you want to log out?"))){
var new_tab_14055 = window.open("https://dev-me4o6oy6ayzpw476.eu.auth0.com/v2/logout?returnTo=https://localhost","_blank");
new_tab_14055.blur();

window.focus();

return setTimeout((function (){
return (window.location.href = "/logout/customizer");
}),(500));
} else {
return null;
}
});
features.site.zero.frontend.zero.routes = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(features.site.homepage.routes.routes,features.site.orders.routes.routes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([features.site.profile.routes.routes], 0));
features.site.zero.frontend.zero.profile_picture = (function features$site$zero$frontend$zero$profile_picture(){
var vec__14041 = zero.frontend.react.use_state(null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14041,(0),null);
var set_user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14041,(1),null);
zero.frontend.react.use_effect(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mount","mount",-1560582470),(function (){
return app.frontend.request.pathom(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("site","user-profile","site/user-profile",-1904006414)], null),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
var G__14044 = new cljs.core.Keyword("site","user-profile","site/user-profile",-1904006414).cljs$core$IFn$_invoke$arity$1(response);
return (set_user.cljs$core$IFn$_invoke$arity$1 ? set_user.cljs$core$IFn$_invoke$arity$1(G__14044) : set_user.call(null,G__14044));
})], null));
})], null));

if(cljs.core.truth_(user)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"/profile",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"picture_url","picture_url",-1161598019).cljs$core$IFn$_invoke$arity$1(user))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"picture_url","picture_url",-1161598019).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"alt","alt",-3214426),"Profile",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"40px",new cljs.core.Keyword(null,"height","height",1025178622),"40px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid rgba(246, 213, 92, 0.3)",new cljs.core.Keyword(null,"object-fit","object-fit",-429593694),"cover",new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.3s ease"], null),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (p1__14035_SHARP_){
return (p1__14035_SHARP_.target.style.borderColor = "#f6d55c");
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (p1__14036_SHARP_){
return (p1__14036_SHARP_.target.style.borderColor = "rgba(246, 213, 92, 0.3)");
})], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["center","#f6d55c","1.2rem","all 0.3s ease","40px","rgba(246, 213, 92, 0.2)","center","flex","2px solid rgba(246, 213, 92, 0.3)","50%","40px"]),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (p1__14037_SHARP_){
(p1__14037_SHARP_.target.style.borderColor = "#f6d55c");

return (p1__14037_SHARP_.target.style.background = "rgba(246, 213, 92, 0.3)");
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (p1__14038_SHARP_){
(p1__14038_SHARP_.target.style.borderColor = "rgba(246, 213, 92, 0.3)");

return (p1__14038_SHARP_.target.style.background = "rgba(246, 213, 92, 0.2)");
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-user"], null)], null)], null))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"href","href",-793805698),"/login/customizer",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"backdrop-filter","backdrop-filter",-735928241),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["center","0 2px 10px rgba(0, 0, 0, 0.3)","#4ade80","1rem","all 0.3s ease","600","rgba(74, 222, 128, 0.1)","blur(5px)","0.75rem 1rem","center","none","flex","2px solid rgba(74, 222, 128, 0.3)","12px"]),new cljs.core.Keyword(null,"title","title",636505583),"Login",new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (p1__14039_SHARP_){
(p1__14039_SHARP_.target.style.background = "#4ade80");

(p1__14039_SHARP_.target.style.color = "#333");

(p1__14039_SHARP_.target.style.transform = "translateY(-2px)");

return (p1__14039_SHARP_.target.style.boxShadow = "0 4px 15px rgba(74, 222, 128, 0.4)");
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (p1__14040_SHARP_){
(p1__14040_SHARP_.target.style.background = "rgba(74, 222, 128, 0.1)");

(p1__14040_SHARP_.target.style.color = "#4ade80");

(p1__14040_SHARP_.target.style.transform = "translateY(0)");

return (p1__14040_SHARP_.target.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)");
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-sign-in-alt"], null)], null)], null);
}
});
features.site.zero.frontend.zero.site_header = (function features$site$zero$frontend$zero$site_header(){
var vec__14051 = zero.frontend.react.use_state(null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14051,(0),null);
var set_user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14051,(1),null);
zero.frontend.react.use_effect(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mount","mount",-1560582470),(function (){
return app.frontend.request.pathom(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("site","user-profile","site/user-profile",-1904006414)], null),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
var G__14054 = new cljs.core.Keyword("site","user-profile","site/user-profile",-1904006414).cljs$core$IFn$_invoke$arity$1(response);
return (set_user.cljs$core$IFn$_invoke$arity$1 ? set_user.cljs$core$IFn$_invoke$arity$1(G__14054) : set_user.call(null,G__14054));
})], null));
})], null));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"backdrop-filter","backdrop-filter",-735928241),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415)],["center","0 4px 20px rgba(246, 213, 92, 0.3), 0 0 40px rgba(0, 0, 0, 0.5)","0","linear-gradient(135deg, #333 0%, #2a2a2a 50%, #1a1a1a 100%)","blur(10px)","1000","1rem 2rem","space-between","flex","sticky","2px solid #f6d55c"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),"1.5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"/",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),"1rem",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/logo/text-horizontal.svg",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"45px",new cljs.core.Keyword(null,"width","width",-384071477),"auto"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),"1.5rem"], null)], null),(cljs.core.truth_(user)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),"/orders",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"backdrop-filter","backdrop-filter",-735928241),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["center","0 2px 10px rgba(0, 0, 0, 0.3)","#f6d55c","1rem","all 0.3s ease","600","rgba(246, 213, 92, 0.1)","blur(5px)","0.75rem 1.5rem","0.5rem","none","flex","2px solid rgba(246, 213, 92, 0.3)","12px"]),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (p1__14045_SHARP_){
(p1__14045_SHARP_.target.style.background = "#f6d55c");

(p1__14045_SHARP_.target.style.color = "#333");

(p1__14045_SHARP_.target.style.transform = "translateY(-2px)");

return (p1__14045_SHARP_.target.style.boxShadow = "0 4px 15px rgba(246, 213, 92, 0.4)");
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (p1__14046_SHARP_){
(p1__14046_SHARP_.target.style.background = "rgba(246, 213, 92, 0.1)");

(p1__14046_SHARP_.target.style.color = "#f6d55c");

(p1__14046_SHARP_.target.style.transform = "translateY(0)");

return (p1__14046_SHARP_.target.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)");
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-box"], null)], null),"Orders"], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),"/customize",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"backdrop-filter","backdrop-filter",-735928241),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["center","0 2px 10px rgba(0, 0, 0, 0.3)","#10b981","1rem","all 0.3s ease","600","rgba(16, 185, 129, 0.1)","blur(5px)","0.75rem 1.5rem","0.5rem","none","flex","2px solid rgba(16, 185, 129, 0.3)","12px"]),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (p1__14047_SHARP_){
(p1__14047_SHARP_.target.style.background = "#10b981");

(p1__14047_SHARP_.target.style.color = "#333");

(p1__14047_SHARP_.target.style.transform = "translateY(-2px)");

return (p1__14047_SHARP_.target.style.boxShadow = "0 4px 15px rgba(16, 185, 129, 0.4)");
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (p1__14048_SHARP_){
(p1__14048_SHARP_.target.style.background = "rgba(16, 185, 129, 0.1)");

(p1__14048_SHARP_.target.style.color = "#10b981");

(p1__14048_SHARP_.target.style.transform = "translateY(0)");

return (p1__14048_SHARP_.target.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)");
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-palette"], null)], null),"Customizer"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.site.zero.frontend.zero.profile_picture], null),(cljs.core.truth_(user)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"backdrop-filter","backdrop-filter",-735928241),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["center","0 2px 10px rgba(0, 0, 0, 0.3)","#ff6b6b","1rem","all 0.3s ease","600","rgba(255, 107, 107, 0.1)","pointer","blur(5px)","0.75rem 1rem","center","none","flex","2px solid rgba(255, 107, 107, 0.3)","12px"]),new cljs.core.Keyword(null,"title","title",636505583),"Logout",new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (p1__14049_SHARP_){
(p1__14049_SHARP_.target.style.background = "#ff6b6b");

(p1__14049_SHARP_.target.style.color = "#333");

(p1__14049_SHARP_.target.style.transform = "translateY(-2px)");

return (p1__14049_SHARP_.target.style.boxShadow = "0 4px 15px rgba(255, 107, 107, 0.4)");
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (p1__14050_SHARP_){
(p1__14050_SHARP_.target.style.background = "rgba(255, 107, 107, 0.1)");

(p1__14050_SHARP_.target.style.color = "#ff6b6b");

(p1__14050_SHARP_.target.style.transform = "translateY(0)");

return (p1__14050_SHARP_.target.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)");
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),features.site.zero.frontend.zero.simple_logout], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-sign-out-alt"], null)], null)], null):null)], null)], null);
});
features.site.zero.frontend.zero.view = (function features$site$zero$frontend$zero$view(){
var router_data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(router.frontend.zero.state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.site.zero.frontend.zero.site_header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"calc(100vh - 80px)"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(router_data)], null)], null)], null);
});

//# sourceMappingURL=features.site.zero.frontend.zero.js.map
