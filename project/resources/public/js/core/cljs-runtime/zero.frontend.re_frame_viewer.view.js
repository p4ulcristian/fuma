goog.provide('zero.frontend.re_frame_viewer.view');
zero.frontend.re_frame_viewer.view.save_to_local_storage = (function zero$frontend$re_frame_viewer$view$save_to_local_storage(key,value){
try{return localStorage.setItem(key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
}catch (e28653){if((e28653 instanceof Error)){
var e = e28653;
return console.warn("Failed to save to localStorage:",e);
} else {
throw e28653;

}
}});
zero.frontend.re_frame_viewer.view.load_from_local_storage = (function zero$frontend$re_frame_viewer$view$load_from_local_storage(key,default_value){
try{var stored = localStorage.getItem(key);
if((stored == null)){
return default_value;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(stored);
}
}catch (e28654){if((e28654 instanceof Error)){
var e = e28654;
console.warn("Failed to load from localStorage:",e);

return default_value;
} else {
throw e28654;

}
}});
var G__28655_28826 = new cljs.core.Keyword("re-frame-viewer","app-db","re-frame-viewer/app-db",-383571318);
var G__28656_28827 = (function (db,_){
return db;
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28655_28826,G__28656_28827) : zero.frontend.re_frame.reg_sub.call(null,G__28655_28826,G__28656_28827));
var G__28657_28830 = new cljs.core.Keyword("re-frame-viewer","visible?","re-frame-viewer/visible?",1918374879);
var G__28658_28831 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"re-frame-viewer","re-frame-viewer",-1608821390),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),zero.frontend.re_frame_viewer.view.load_from_local_storage("re-frame-viewer-visible",false));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28657_28830,G__28658_28831) : zero.frontend.re_frame.reg_sub.call(null,G__28657_28830,G__28658_28831));
var G__28659_28835 = new cljs.core.Keyword("re-frame-viewer","view-mode","re-frame-viewer/view-mode",1002154855);
var G__28660_28836 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"re-frame-viewer","re-frame-viewer",-1608821390),new cljs.core.Keyword(null,"view-mode","view-mode",2138348427)], null),zero.frontend.re_frame_viewer.view.load_from_local_storage("re-frame-viewer-mode",new cljs.core.Keyword(null,"tree","tree",-196312028)));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28659_28835,G__28660_28836) : zero.frontend.re_frame.reg_sub.call(null,G__28659_28835,G__28660_28836));
var G__28661_28840 = new cljs.core.Keyword("re-frame-viewer","hidden?","re-frame-viewer/hidden?",-2005720696);
var G__28662_28841 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"re-frame-viewer","re-frame-viewer",-1608821390),new cljs.core.Keyword(null,"hidden?","hidden?",1339691380)], null),zero.frontend.re_frame_viewer.view.load_from_local_storage("re-frame-viewer-hidden",false));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28661_28840,G__28662_28841) : zero.frontend.re_frame.reg_sub.call(null,G__28661_28840,G__28662_28841));
var G__28663_28842 = new cljs.core.Keyword("re-frame-viewer","toggle","re-frame-viewer/toggle",9110426);
var G__28664_28843 = (function (db,_){
var new_visible_QMARK_ = cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"re-frame-viewer","re-frame-viewer",-1608821390),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),false));
zero.frontend.re_frame_viewer.view.save_to_local_storage("re-frame-viewer-visible",new_visible_QMARK_);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"re-frame-viewer","re-frame-viewer",-1608821390),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),new_visible_QMARK_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"re-frame-viewer","re-frame-viewer",-1608821390),new cljs.core.Keyword(null,"hidden?","hidden?",1339691380)], null),false);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__28663_28842,G__28664_28843) : zero.frontend.re_frame.reg_event_db.call(null,G__28663_28842,G__28664_28843));
var G__28667_28845 = new cljs.core.Keyword("re-frame-viewer","hide","re-frame-viewer/hide",66372659);
var G__28668_28846 = (function (db,_){
var new_hidden_QMARK_ = cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"re-frame-viewer","re-frame-viewer",-1608821390),new cljs.core.Keyword(null,"hidden?","hidden?",1339691380)], null),false));
zero.frontend.re_frame_viewer.view.save_to_local_storage("re-frame-viewer-hidden",new_hidden_QMARK_);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"re-frame-viewer","re-frame-viewer",-1608821390),new cljs.core.Keyword(null,"hidden?","hidden?",1339691380)], null),new_hidden_QMARK_);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__28667_28845,G__28668_28846) : zero.frontend.re_frame.reg_event_db.call(null,G__28667_28845,G__28668_28846));
var G__28669_28853 = new cljs.core.Keyword("re-frame-viewer","set-view-mode","re-frame-viewer/set-view-mode",1609090402);
var G__28670_28854 = (function (db,p__28673){
var vec__28677 = p__28673;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28677,(0),null);
var mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28677,(1),null);
zero.frontend.re_frame_viewer.view.save_to_local_storage("re-frame-viewer-mode",mode);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"re-frame-viewer","re-frame-viewer",-1608821390),new cljs.core.Keyword(null,"view-mode","view-mode",2138348427)], null),mode);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__28669_28853,G__28670_28854) : zero.frontend.re_frame.reg_event_db.call(null,G__28669_28853,G__28670_28854));
var G__28685_28855 = new cljs.core.Keyword("re-frame-viewer","init-from-storage","re-frame-viewer/init-from-storage",-385365944);
var G__28686_28856 = (function (db,_){
var visible_QMARK_ = zero.frontend.re_frame_viewer.view.load_from_local_storage("re-frame-viewer-visible",false);
var view_mode = zero.frontend.re_frame_viewer.view.load_from_local_storage("re-frame-viewer-mode",new cljs.core.Keyword(null,"tree","tree",-196312028));
var hidden_QMARK_ = zero.frontend.re_frame_viewer.view.load_from_local_storage("re-frame-viewer-hidden",false);
var path_input = zero.frontend.re_frame_viewer.view.load_from_local_storage("tree-viewer-path-input","");
var current_path = zero.frontend.re_frame_viewer.view.load_from_local_storage("tree-viewer-current-path",cljs.core.PersistentVector.EMPTY);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"re-frame-viewer","re-frame-viewer",-1608821390),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),visible_QMARK_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"re-frame-viewer","re-frame-viewer",-1608821390),new cljs.core.Keyword(null,"view-mode","view-mode",2138348427)], null),view_mode),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"re-frame-viewer","re-frame-viewer",-1608821390),new cljs.core.Keyword(null,"hidden?","hidden?",1339691380)], null),hidden_QMARK_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"tree-viewer","tree-viewer",724906371),new cljs.core.Keyword(null,"path-input","path-input",-2045966068)], null),path_input),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"tree-viewer","tree-viewer",724906371),new cljs.core.Keyword(null,"current-path","current-path",-113759954)], null),current_path);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__28685_28855,G__28686_28856) : zero.frontend.re_frame.reg_event_db.call(null,G__28685_28855,G__28686_28856));
zero.frontend.re_frame_viewer.view.main_container_style = (function zero$frontend$re_frame_viewer$view$main_container_style(hidden_QMARK_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],["0 4px 12px rgba(0, 0, 0, 0.3)","20px","20px","hidden","linear-gradient(135deg, rgba(51, 51, 51, 0.95) 0%, rgba(51, 51, 51, 0.95) 70%, rgba(218, 165, 32, 0.95) 100%)",(9999),(cljs.core.truth_(hidden_QMARK_)?0.15:(1)),"24px","20px","flex","fixed","12px",(cljs.core.truth_(hidden_QMARK_)?"none":"auto"),"column","20px"]);
});
zero.frontend.re_frame_viewer.view.header_container_style = (function zero$frontend$re_frame_viewer$view$header_container_style(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"auto 1fr",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20px"], null);
});
zero.frontend.re_frame_viewer.view.breadcrumb_container_style = (function zero$frontend$re_frame_viewer$view$breadcrumb_container_style(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20px",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"2px solid #DAA520",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"16px"], null);
});
zero.frontend.re_frame_viewer.view.ascii_text_style = (function zero$frontend$re_frame_viewer$view$ascii_text_style(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Courier New', monospace",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.2",new cljs.core.Keyword(null,"color","color",1011675173),"#DAA520",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre"], null);
});
zero.frontend.re_frame_viewer.view.button_style = (function zero$frontend$re_frame_viewer$view$button_style(active_QMARK_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"margin","margin",-995903681)],["uppercase",(cljs.core.truth_(active_QMARK_)?"#333":"#DAA520"),"12px","all 0.2s","bold",(cljs.core.truth_(active_QMARK_)?"#DAA520":"transparent"),"pointer","6px 12px","1px solid #DAA520","0","'Courier New', monospace","0 4px"]);
});
zero.frontend.re_frame_viewer.view.ascii_zero = (function zero$frontend$re_frame_viewer$view$ascii_zero(){
return "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \n\u255A\u2550\u2550\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\n  \u2588\u2588\u2588\u2554\u255D \u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551   \u2588\u2588\u2551\n \u2588\u2588\u2588\u2554\u255D  \u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551   \u2588\u2588\u2551\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\n\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D";
});
zero.frontend.re_frame_viewer.view.ascii_logo = (function zero$frontend$re_frame_viewer$view$ascii_logo(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),zero.frontend.re_frame_viewer.view.ascii_text_style()], null),zero.frontend.re_frame_viewer.view.ascii_zero()], null);
});
zero.frontend.re_frame_viewer.view.mode_buttons = (function zero$frontend$re_frame_viewer$view$mode_buttons(){
var current_mode = cljs.core.deref((function (){var G__28725 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frame-viewer","view-mode","re-frame-viewer/view-mode",1002154855)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__28725) : zero.frontend.re_frame.subscribe.call(null,G__28725));
})());
var hidden_QMARK_ = cljs.core.deref((function (){var G__28726 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frame-viewer","hidden?","re-frame-viewer/hidden?",-2005720696)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__28726) : zero.frontend.re_frame.subscribe.call(null,G__28726));
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"1fr 1fr auto",new cljs.core.Keyword(null,"gap","gap",80255254),"4px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__28729 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frame-viewer","set-view-mode","re-frame-viewer/set-view-mode",1609090402),new cljs.core.Keyword(null,"tree","tree",-196312028)], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__28729) : zero.frontend.re_frame.dispatch.call(null,G__28729));
}),new cljs.core.Keyword(null,"style","style",-496642736),zero.frontend.re_frame_viewer.view.button_style(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_mode,new cljs.core.Keyword(null,"tree","tree",-196312028)))], null),"TREE"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__28730 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frame-viewer","set-view-mode","re-frame-viewer/set-view-mode",1609090402),new cljs.core.Keyword(null,"raw","raw",1604651272)], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__28730) : zero.frontend.re_frame.dispatch.call(null,G__28730));
}),new cljs.core.Keyword(null,"style","style",-496642736),zero.frontend.re_frame_viewer.view.button_style(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_mode,new cljs.core.Keyword(null,"raw","raw",1604651272)))], null),"RAW"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__28734 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frame-viewer","hide","re-frame-viewer/hide",66372659)], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__28734) : zero.frontend.re_frame.dispatch.call(null,G__28734));
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zero.frontend.re_frame_viewer.view.button_style(false),(cljs.core.truth_(hidden_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"auto"], null):null)], 0))], null),"HIDE"], null)], null);
});
zero.frontend.re_frame_viewer.view.breadcrumb_style = (function zero$frontend$re_frame_viewer$view$breadcrumb_style(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["#DAA520","12px","10px","rgba(218, 165, 32, 0.1)","8px 12px","1px solid rgba(218, 165, 32, 0.3)","0","5px","'Courier New', monospace"]);
});
zero.frontend.re_frame_viewer.view.breadcrumb_part_style = (function zero$frontend$re_frame_viewer$view$breadcrumb_part_style(clickable_QMARK_){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(clickable_QMARK_)?"#DAA520":"#999"),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(clickable_QMARK_)?"pointer":"default"),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),(cljs.core.truth_(clickable_QMARK_)?"underline":"none"),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 2px"], null);
});
zero.frontend.re_frame_viewer.view.breadcrumb = (function zero$frontend$re_frame_viewer$view$breadcrumb(){
var current_path = cljs.core.deref((function (){var G__28747 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tree-viewer","current-path","tree-viewer/current-path",179751951)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__28747) : zero.frontend.re_frame.subscribe.call(null,G__28747));
})());
if(cljs.core.seq(current_path)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),zero.frontend.re_frame_viewer.view.breadcrumb_style()], null),"Path: ",cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,path_part){
var partial_path = cljs.core.take.cljs$core$IFn$_invoke$arity$2((idx + (1)),current_path);
var path_string = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,partial_path));
var clickable_QMARK_ = (idx < (cljs.core.count(current_path) - (1)));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),zero.frontend.re_frame_viewer.view.breadcrumb_part_style(clickable_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((clickable_QMARK_)?(function (){
var G__28758 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tree-viewer","set-path-input","tree-viewer/set-path-input",1488176391),path_string], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__28758) : zero.frontend.re_frame.dispatch.call(null,G__28758));
}):null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_part)], null),(((idx < (cljs.core.count(current_path) - (1))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#666",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 4px"], null)], null),"\u2192"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null));
}),current_path))], null);
} else {
return null;
}
});
zero.frontend.re_frame_viewer.view.path_input = (function zero$frontend$re_frame_viewer$view$path_input(){
var path_input = cljs.core.deref((function (){var G__28778 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tree-viewer","path-input","tree-viewer/path-input",756319277)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__28778) : zero.frontend.re_frame.subscribe.call(null,G__28778));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter path (e.g. :router :inner-data)",new cljs.core.Keyword(null,"value","value",305978217),path_input,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28773_SHARP_){
var G__28781 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tree-viewer","set-path-input","tree-viewer/set-path-input",1488176391),p1__28773_SHARP_.target.value], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__28781) : zero.frontend.re_frame.dispatch.call(null,G__28781));
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["#DAA520","12px","5px","100%","#222","8px 12px","none","1px solid #DAA520","0","'Courier New', monospace"])], null)], null);
});
zero.frontend.re_frame_viewer.view.header_section = (function zero$frontend$re_frame_viewer$view$header_section(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),zero.frontend.re_frame_viewer.view.header_container_style()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zero.frontend.re_frame_viewer.view.ascii_logo], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zero.frontend.re_frame_viewer.view.mode_buttons], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zero.frontend.re_frame_viewer.view.path_input], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),zero.frontend.re_frame_viewer.view.breadcrumb_container_style()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zero.frontend.re_frame_viewer.view.breadcrumb], null)], null)], null);
});
zero.frontend.re_frame_viewer.view.content_container_style = (function zero$frontend$re_frame_viewer$view$content_container_style(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"8px"], null);
});
zero.frontend.re_frame_viewer.view.get_data_at_path = (function zero$frontend$re_frame_viewer$view$get_data_at_path(data,path){
if(cljs.core.empty_QMARK_(path)){
return data;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,path);
}
});
zero.frontend.re_frame_viewer.view.content_display = (function zero$frontend$re_frame_viewer$view$content_display(){
var view_mode = cljs.core.deref((function (){var G__28798 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frame-viewer","view-mode","re-frame-viewer/view-mode",1002154855)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__28798) : zero.frontend.re_frame.subscribe.call(null,G__28798));
})());
var app_db = cljs.core.deref((function (){var G__28799 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frame-viewer","app-db","re-frame-viewer/app-db",-383571318)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__28799) : zero.frontend.re_frame.subscribe.call(null,G__28799));
})());
var current_path = cljs.core.deref((function (){var G__28800 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tree-viewer","current-path","tree-viewer/current-path",179751951)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__28800) : zero.frontend.re_frame.subscribe.call(null,G__28800));
})());
var filtered_data = zero.frontend.re_frame_viewer.view.get_data_at_path(app_db,current_path);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),zero.frontend.re_frame_viewer.view.content_container_style()], null),(function (){var G__28803 = view_mode;
var G__28803__$1 = (((G__28803 instanceof cljs.core.Keyword))?G__28803.fqn:null);
switch (G__28803__$1) {
case "raw":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zero.frontend.re_frame_viewer.raw.raw_viewer,filtered_data], null);

break;
case "tree":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zero.frontend.re_frame_viewer.tree.tree_viewer,filtered_data,current_path], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zero.frontend.re_frame_viewer.tree.tree_viewer,filtered_data,current_path], null);

}
})()], null);
});
zero.frontend.re_frame_viewer.view.re_frame_viewer = (function zero$frontend$re_frame_viewer$view$re_frame_viewer(){
var visible_QMARK_ = cljs.core.deref((function (){var G__28808 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frame-viewer","visible?","re-frame-viewer/visible?",1918374879)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__28808) : zero.frontend.re_frame.subscribe.call(null,G__28808));
})());
var hidden_QMARK_ = cljs.core.deref((function (){var G__28809 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frame-viewer","hidden?","re-frame-viewer/hidden?",-2005720696)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__28809) : zero.frontend.re_frame.subscribe.call(null,G__28809));
})());
if(cljs.core.truth_(visible_QMARK_)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),zero.frontend.re_frame_viewer.view.main_container_style(hidden_QMARK_)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zero.frontend.re_frame_viewer.view.header_section], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zero.frontend.re_frame_viewer.view.content_display], null)], null);
} else {
return null;
}
});
zero.frontend.re_frame_viewer.view.use_keyboard_listener = (function zero$frontend$re_frame_viewer$view$use_keyboard_listener(){
return shadow.js.shim.module$react.useEffect((function (){
var handle_keydown = (function (event){
if(cljs.core.truth_((function (){var and__5023__auto__ = (function (){var or__5025__auto__ = event.ctrlKey;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return event.metaKey;
}
})();
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"m");
} else {
return and__5023__auto__;
}
})())){
event.preventDefault();

var G__28814 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frame-viewer","toggle","re-frame-viewer/toggle",9110426)], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__28814) : zero.frontend.re_frame.dispatch.call(null,G__28814));
} else {
return null;
}
});
document.addEventListener("keydown",handle_keydown);

return (function (){
return document.removeEventListener("keydown",handle_keydown);
});
}),[]);
});
zero.frontend.re_frame_viewer.view.keyboard_listener = (function zero$frontend$re_frame_viewer$view$keyboard_listener(){
zero.frontend.re_frame_viewer.view.use_keyboard_listener();

return null;
});
/**
 * Initialize the re-frame viewer for development
 */
zero.frontend.re_frame_viewer.view.init_BANG_ = (function zero$frontend$re_frame_viewer$view$init_BANG_(){
if(goog.DEBUG){
var G__28817_28873 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frame-viewer","init-from-storage","re-frame-viewer/init-from-storage",-385365944)], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__28817_28873) : zero.frontend.re_frame.dispatch.call(null,G__28817_28873));

return null;
} else {
return null;
}
});

//# sourceMappingURL=zero.frontend.re_frame_viewer.view.js.map
