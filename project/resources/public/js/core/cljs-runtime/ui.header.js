goog.provide('ui.header');
var G__40644_40703 = new cljs.core.Keyword("header","set-language","header/set-language",-464045556);
var G__40645_40704 = (function (db,p__40650){
var vec__40654 = p__40650;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40654,(0),null);
var language = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40654,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: re-frame event :header/set-language called with:",language], 0));

var updated_db = cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"language","language",-1591107564)], null),language);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: Updated db header section:",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(updated_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134)], null))], 0));

return updated_db;
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__40644_40703,G__40645_40704) : zero.frontend.re_frame.reg_event_db.call(null,G__40644_40703,G__40645_40704));
var G__40665_40705 = new cljs.core.Keyword("header","current-language","header/current-language",-2030560560);
var G__40666_40706 = (function (db,_){
var current_lang = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"language","language",-1591107564)], null),new cljs.core.Keyword(null,"hu","hu",-1762884758));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: subscription :header/current-language returning:",current_lang], 0));

return current_lang;
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__40665_40705,G__40666_40706) : zero.frontend.re_frame.reg_sub.call(null,G__40665_40705,G__40666_40706));
var G__40675_40707 = new cljs.core.Keyword("header","set-theme","header/set-theme",1813110040);
var G__40676_40708 = (function (db,p__40677){
var vec__40678 = p__40677;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40678,(0),null);
var theme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40678,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: re-frame event :header/set-theme called with:",theme], 0));

var updated_db = cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"theme","theme",-1247880880)], null),theme);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: Updated db header theme:",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(updated_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"theme","theme",-1247880880)], null))], 0));

return updated_db;
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__40675_40707,G__40676_40708) : zero.frontend.re_frame.reg_event_db.call(null,G__40675_40707,G__40676_40708));
var G__40686_40709 = new cljs.core.Keyword("header","current-theme","header/current-theme",-1526640668);
var G__40687_40710 = (function (db,_){
var current_theme = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"theme","theme",-1247880880)], null),new cljs.core.Keyword(null,"light","light",1918998747));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: subscription :header/current-theme returning:",current_theme], 0));

return current_theme;
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__40686_40709,G__40687_40710) : zero.frontend.re_frame.reg_sub.call(null,G__40686_40709,G__40687_40710));
var G__40689_40711 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","set-language","header/set-language",-464045556),new cljs.core.Keyword(null,"hu","hu",-1762884758)], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__40689_40711) : zero.frontend.re_frame.dispatch.call(null,G__40689_40711));
var G__40690_40712 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","set-theme","header/set-theme",1813110040),new cljs.core.Keyword(null,"light","light",1918998747)], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__40690_40712) : zero.frontend.re_frame.dispatch.call(null,G__40690_40712));
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
ui.header.handle_language_toggle = (function ui$header$handle_language_toggle(current_language){

var new_language = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_language,new cljs.core.Keyword(null,"en","en",88457073)))?new cljs.core.Keyword(null,"hu","hu",-1762884758):new cljs.core.Keyword(null,"en","en",88457073));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: Toggling language from",current_language,"to",new_language], 0));

var G__40695_40713 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","set-language","header/set-language",-464045556),new_language], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__40695_40713) : zero.frontend.re_frame.dispatch.call(null,G__40695_40713));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: Dispatched event"], 0));
});
ui.header.handle_theme_toggle = (function ui$header$handle_theme_toggle(current_theme){

var new_theme = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_theme,new cljs.core.Keyword(null,"light","light",1918998747)))?new cljs.core.Keyword(null,"dark","dark",1818973999):new cljs.core.Keyword(null,"light","light",1918998747));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: Toggling theme from",current_theme,"to",new_theme], 0));

var G__40696_40714 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","set-theme","header/set-theme",1813110040),new_theme], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__40696_40714) : zero.frontend.re_frame.dispatch.call(null,G__40696_40714));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: Dispatched theme event"], 0));
});
/**
 * Language toggle between English and Hungarian
 */
ui.header.language_toggle = (function ui$header$language_toggle(){
var current_language = (function (){var G__40697 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","current-language","header/current-language",-2030560560)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__40697) : zero.frontend.re_frame.subscribe.call(null,G__40697));
})();
var current_theme = (function (){var G__40698 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","current-theme","header/current-theme",-1526640668)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__40698) : zero.frontend.re_frame.subscribe.call(null,G__40698));
})();
var theme_colors = ui.theme.get_theme_colors(cljs.core.deref(current_theme));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.language-toggle","div.language-toggle",-650879847),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],[cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme_colors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"light","light",1918998747)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme_colors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"primary","primary",817773892)], null)),"0.875rem","all 0.2s ease","500",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme_colors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"tertiary","tertiary",-1163116473)], null)),"pointer","0.5rem 0.75rem",["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme_colors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"secondary","secondary",-669381460)], null)))].join(''),"6px"]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ui.header.handle_language_toggle(cljs.core.deref(current_language));
}),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (e){
return (e.target.style.background = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme_colors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accent","accent",-1826298468),new cljs.core.Keyword(null,"primary","primary",817773892)], null)));
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (e){
return (e.target.style.background = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme_colors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"tertiary","tertiary",-1163116473)], null)));
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_language),new cljs.core.Keyword(null,"en","en",88457073)))?"EN":"HU")], null)], null);
});
/**
 * Theme toggle between light and dark mode
 */
ui.header.theme_toggle = (function ui$header$theme_toggle(){
var current_theme = (function (){var G__40700 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","current-theme","header/current-theme",-1526640668)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__40700) : zero.frontend.re_frame.subscribe.call(null,G__40700));
})();
var theme_colors = ui.theme.get_theme_colors(cljs.core.deref(current_theme));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.theme-toggle","div.theme-toggle",8944872),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],[cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme_colors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"light","light",1918998747)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme_colors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"primary","primary",817773892)], null)),"0.875rem","all 0.2s ease","500",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme_colors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"tertiary","tertiary",-1163116473)], null)),"pointer","0.5rem 0.75rem",["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme_colors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"secondary","secondary",-669381460)], null)))].join(''),"6px"]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ui.header.handle_theme_toggle(cljs.core.deref(current_theme));
}),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (e){
return (e.target.style.background = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme_colors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accent","accent",-1826298468),new cljs.core.Keyword(null,"primary","primary",817773892)], null)));
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (e){
return (e.target.style.background = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme_colors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"tertiary","tertiary",-1163116473)], null)));
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_theme),new cljs.core.Keyword(null,"light","light",1918998747)))?"\uD83C\uDF19":"\u2600\uFE0F")], null)], null);
});
/**
 * Main application header with logo, language toggle, and logout button
 */
ui.header.header = (function ui$header$header(){
var current_theme = cljs.core.deref((function (){var G__40702 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","current-theme","header/current-theme",-1526640668)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__40702) : zero.frontend.re_frame.subscribe.call(null,G__40702));
})());
var theme_colors = ui.theme.get_theme_colors(current_theme);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.app-header","header.app-header",-637446905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme_colors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"secondary","secondary",-669381460)], null)),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme_colors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"primary","primary",817773892)], null)))].join(''),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme_colors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"light","light",1918998747)], null)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 2rem",new cljs.core.Keyword(null,"position","position",-2011731912),"sticky",new cljs.core.Keyword(null,"top","top",-1856271961),"0",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"1000"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-content","div.header-content",1909326772),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"1200px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-left","div.header-left",137243899),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),ui.header.handle_logo_click,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.logo","img.logo",-1845330328),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/logo/logo-256.webp",new cljs.core.Keyword(null,"alt","alt",-3214426),"Logo",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"32px",new cljs.core.Keyword(null,"width","width",-384071477),"32px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.brand-name","span.brand-name",-1078376506),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.25rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme_colors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"primary","primary",817773892)], null))], null)], null),translations.core.tr(new cljs.core.Keyword("header","brand","header/brand",-393563622))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-right","div.header-right",1949423476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),"0.75rem"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.header.theme_toggle], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.header.language_toggle], null)], null)], null)], null);
});
/**
 * Header component view function
 */
ui.header.view = (function ui$header$view(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.header.header], null);
});

//# sourceMappingURL=ui.header.js.map
