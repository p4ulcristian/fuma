goog.provide('ui.header');
var G__36215_36367 = new cljs.core.Keyword("header","set-language","header/set-language",-464045556);
var G__36216_36368 = (function (db,p__36217){
var vec__36221 = p__36217;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36221,(0),null);
var language = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36221,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: re-frame event :header/set-language called with:",language], 0));

var updated_db = cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"language","language",-1591107564)], null),language);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: Updated db header section:",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(updated_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134)], null))], 0));

return updated_db;
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36215_36367,G__36216_36368) : zero.frontend.re_frame.reg_event_db.call(null,G__36215_36367,G__36216_36368));
var G__36239_36371 = new cljs.core.Keyword("header","current-language","header/current-language",-2030560560);
var G__36240_36372 = (function (db,_){
var current_lang = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"language","language",-1591107564)], null),new cljs.core.Keyword(null,"hu","hu",-1762884758));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: subscription :header/current-language returning:",current_lang], 0));

return current_lang;
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36239_36371,G__36240_36372) : zero.frontend.re_frame.reg_sub.call(null,G__36239_36371,G__36240_36372));
var G__36241_36377 = new cljs.core.Keyword("header","set-theme","header/set-theme",1813110040);
var G__36242_36378 = (function (db,p__36244){
var vec__36245 = p__36244;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36245,(0),null);
var theme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36245,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: re-frame event :header/set-theme called with:",theme], 0));

var updated_db = cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"theme","theme",-1247880880)], null),theme);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: Updated db header theme:",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(updated_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"theme","theme",-1247880880)], null))], 0));

return updated_db;
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36241_36377,G__36242_36378) : zero.frontend.re_frame.reg_event_db.call(null,G__36241_36377,G__36242_36378));
var G__36253_36381 = new cljs.core.Keyword("header","current-theme","header/current-theme",-1526640668);
var G__36254_36382 = (function (db,_){
var current_theme = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"theme","theme",-1247880880)], null),new cljs.core.Keyword(null,"light","light",1918998747));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: subscription :header/current-theme returning:",current_theme], 0));

return current_theme;
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36253_36381,G__36254_36382) : zero.frontend.re_frame.reg_sub.call(null,G__36253_36381,G__36254_36382));
var G__36264_36383 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","set-language","header/set-language",-464045556),new cljs.core.Keyword(null,"hu","hu",-1762884758)], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36264_36383) : zero.frontend.re_frame.dispatch.call(null,G__36264_36383));
var G__36265_36384 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","set-theme","header/set-theme",1813110040),new cljs.core.Keyword(null,"light","light",1918998747)], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36265_36384) : zero.frontend.re_frame.dispatch.call(null,G__36265_36384));
ui.header.get_workspace_id = (function ui$header$get_workspace_id(){

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(router.frontend.zero.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435)], null));
});
ui.header.handle_logo_click = (function ui$header$handle_logo_click(){

var temp__5823__auto__ = ui.header.get_workspace_id();
if(cljs.core.truth_(temp__5823__auto__)){
var workspace_id = temp__5823__auto__;
return router.frontend.zero.navigate_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),["/app/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id)].join('')], null));
} else {
return null;
}
});
ui.header.handle_logout = (function ui$header$handle_logout(){

return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("users","logout","users/logout",1576273153),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
return new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("users","logout","users/logout",1576273153).cljs$core$IFn$_invoke$arity$1(response));
})], null));
});
ui.header.handle_language_toggle = (function ui$header$handle_language_toggle(current_language){

var new_language = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_language,new cljs.core.Keyword(null,"en","en",88457073)))?new cljs.core.Keyword(null,"hu","hu",-1762884758):new cljs.core.Keyword(null,"en","en",88457073));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: Toggling language from",current_language,"to",new_language], 0));

var G__36291_36400 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","set-language","header/set-language",-464045556),new_language], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36291_36400) : zero.frontend.re_frame.dispatch.call(null,G__36291_36400));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: Dispatched event"], 0));
});
ui.header.handle_theme_toggle = (function ui$header$handle_theme_toggle(current_theme){

var new_theme = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_theme,new cljs.core.Keyword(null,"light","light",1918998747)))?new cljs.core.Keyword(null,"dark","dark",1818973999):new cljs.core.Keyword(null,"light","light",1918998747));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: Toggling theme from",current_theme,"to",new_theme], 0));

var G__36307_36407 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","set-theme","header/set-theme",1813110040),new_theme], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36307_36407) : zero.frontend.re_frame.dispatch.call(null,G__36307_36407));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: Dispatched theme event"], 0));
});
/**
 * Language toggle between English and Hungarian
 */
ui.header.language_toggle = (function ui$header$language_toggle(){
var current_language = (function (){var G__36328 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","current-language","header/current-language",-2030560560)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36328) : zero.frontend.re_frame.subscribe.call(null,G__36328));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.language-toggle","div.language-toggle",-650879847),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.button.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"class","class",-2030961996),"language-toggle-btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ui.header.handle_language_toggle(cljs.core.deref(current_language));
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_language),new cljs.core.Keyword(null,"en","en",88457073)))?"EN":"HU")], null)], null);
});
/**
 * Theme toggle between light and dark mode
 */
ui.header.theme_toggle = (function ui$header$theme_toggle(){
var current_theme = (function (){var G__36346 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","current-theme","header/current-theme",-1526640668)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36346) : zero.frontend.re_frame.subscribe.call(null,G__36346));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.theme-toggle","div.theme-toggle",8944872),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.button.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"class","class",-2030961996),"theme-toggle-btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ui.header.handle_theme_toggle(cljs.core.deref(current_theme));
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_theme),new cljs.core.Keyword(null,"light","light",1918998747)))?"\uD83C\uDF19":"\u2600\uFE0F")], null)], null);
});
/**
 * Main application header with logo, language toggle, and logout button
 */
ui.header.header = (function ui$header$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.app-header","header.app-header",-637446905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-content","div.header-content",1909326772),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-left","div.header-left",137243899),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),ui.header.handle_logo_click,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.logo","img.logo",-1845330328),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/logo/logo-256.webp",new cljs.core.Keyword(null,"alt","alt",-3214426),"Logo"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.brand-name","span.brand-name",-1078376506),translations.core.tr(new cljs.core.Keyword("header","brand","header/brand",-393563622))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-right","div.header-right",1949423476),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.header.theme_toggle], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.header.language_toggle], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.button.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"on-click","on-click",1632826543),ui.header.handle_logout,new cljs.core.Keyword(null,"class","class",-2030961996),"logout-btn"], null),cljs.core.deref((function (){var G__36359 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.Keyword("header","logout","header/logout",-1388152450)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36359) : zero.frontend.re_frame.subscribe.call(null,G__36359));
})())], null)], null)], null)], null);
});
/**
 * Header component view function
 */
ui.header.view = (function ui$header$view(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.header.header], null);
});

//# sourceMappingURL=ui.header.js.map
