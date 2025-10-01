goog.provide('zero.frontend.re_frame_viewer.raw');
zero.frontend.re_frame_viewer.raw.raw_container_style = (function zero$frontend$re_frame_viewer$raw$raw_container_style(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #DAA520",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0",new cljs.core.Keyword(null,"background","background",-863952629),"#222"], null);
});
zero.frontend.re_frame_viewer.raw.raw_text_style = (function zero$frontend$re_frame_viewer$raw$raw_text_style(){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Courier New', Monaco, monospace",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4",new cljs.core.Keyword(null,"color","color",1011675173),"#DAA520",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre-wrap",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word"], null);
});
zero.frontend.re_frame_viewer.raw.pretty_print = (function zero$frontend$re_frame_viewer$raw$pretty_print(data){
try{return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(data);
}catch (e26433){if((e26433 instanceof Error)){
var _ = e26433;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(data);
} else {
throw e26433;

}
}});
zero.frontend.re_frame_viewer.raw.raw_viewer = (function zero$frontend$re_frame_viewer$raw$raw_viewer(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),zero.frontend.re_frame_viewer.raw.raw_container_style()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),zero.frontend.re_frame_viewer.raw.raw_text_style()], null),(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26438_26442 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26439_26443 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26440_26444 = true;
var _STAR_print_fn_STAR__temp_val__26441_26445 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26440_26444);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26441_26445);

try{zero.frontend.re_frame_viewer.raw.pretty_print(data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26439_26443);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26438_26442);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})()], null)], null);
});

//# sourceMappingURL=zero.frontend.re_frame_viewer.raw.js.map
