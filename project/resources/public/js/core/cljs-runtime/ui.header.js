goog.provide('ui.header');
var G__28586_28600 = new cljs.core.Keyword("header","set-language","header/set-language",-464045556);
var G__28587_28601 = (function (db,p__28588){
var vec__28589 = p__28588;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28589,(0),null);
var language = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28589,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: re-frame event :header/set-language called with:",language], 0));

var updated_db = cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"language","language",-1591107564)], null),language);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: Updated db header section:",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(updated_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134)], null))], 0));

return updated_db;
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__28586_28600,G__28587_28601) : zero.frontend.re_frame.reg_event_db.call(null,G__28586_28600,G__28587_28601));
var G__28592_28602 = new cljs.core.Keyword("header","current-language","header/current-language",-2030560560);
var G__28593_28603 = (function (db,_){
var current_lang = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"language","language",-1591107564)], null),new cljs.core.Keyword(null,"hu","hu",-1762884758));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: subscription :header/current-language returning:",current_lang], 0));

return current_lang;
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28592_28602,G__28593_28603) : zero.frontend.re_frame.reg_sub.call(null,G__28592_28602,G__28593_28603));
var G__28594_28604 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","set-language","header/set-language",-464045556),new cljs.core.Keyword(null,"hu","hu",-1762884758)], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__28594_28604) : zero.frontend.re_frame.dispatch.call(null,G__28594_28604));
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

var G__28597_28605 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","set-language","header/set-language",-464045556),new_language], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__28597_28605) : zero.frontend.re_frame.dispatch.call(null,G__28597_28605));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: Dispatched event"], 0));
});
/**
 * Language toggle between English and Hungarian
 */
ui.header.language_toggle = (function ui$header$language_toggle(){
var current_language = (function (){var G__28598 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","current-language","header/current-language",-2030560560)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__28598) : zero.frontend.re_frame.subscribe.call(null,G__28598));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.language-toggle","div.language-toggle",-650879847),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.button.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"class","class",-2030961996),"language-toggle-btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ui.header.handle_language_toggle(cljs.core.deref(current_language));
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_language),new cljs.core.Keyword(null,"en","en",88457073)))?"EN":"HU")], null)], null);
});
/**
 * Main application header with logo, language toggle, and logout button
 */
ui.header.header = (function ui$header$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.app-header","header.app-header",-637446905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-content","div.header-content",1909326772),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-left","div.header-left",137243899),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),ui.header.handle_logo_click,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.logo","img.logo",-1845330328),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/logo/logo-256.webp",new cljs.core.Keyword(null,"alt","alt",-3214426),"Logo"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.brand-name","span.brand-name",-1078376506),translations.core.tr(new cljs.core.Keyword("header","brand","header/brand",-393563622))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-right","div.header-right",1949423476),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.button.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"on-click","on-click",1632826543),ui.header.handle_logout,new cljs.core.Keyword(null,"class","class",-2030961996),"logout-btn"], null),cljs.core.deref((function (){var G__28599 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.Keyword("header","logout","header/logout",-1388152450)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__28599) : zero.frontend.re_frame.subscribe.call(null,G__28599));
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.header.language_toggle], null)], null)], null)], null);
});
/**
 * Header component view function
 */
ui.header.view = (function ui$header$view(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.header.header], null);
});

//# sourceMappingURL=ui.header.js.map
