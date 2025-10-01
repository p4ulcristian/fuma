goog.provide('features.app.homepage.frontend.components.target_audience');
features.app.homepage.frontend.components.target_audience.audience_data = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image","image",-58725096),"/images/super_power_diakoknak.png",new cljs.core.Keyword(null,"title","title",636505583),"Di\u00E1koknak",new cljs.core.Keyword(null,"description","description",-1428560544),"N\u00F6veld a koncentr\u00E1ci\u00F3dat \u00E9s teljes\u00EDtm\u00E9nyedet a tanul\u00E1sban"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image","image",-58725096),"/images/sportolokent_jobban_teljesitenel.png",new cljs.core.Keyword(null,"title","title",636505583),"Sportol\u00F3knak",new cljs.core.Keyword(null,"description","description",-1428560544),"Fejleszd a ment\u00E1lis f\u00F3kuszodat \u00E9s \u00E1ll\u00F3k\u00E9pess\u00E9gedet"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image","image",-58725096),"/images/szeretnel_olyan szulove_valni.png",new cljs.core.Keyword(null,"title","title",636505583),"Sz\u00FCl\u0151knek",new cljs.core.Keyword(null,"description","description",-1428560544),"Tal\u00E1ld meg az egyens\u00FAlyt \u00E9s a nyugalmat a csal\u00E1di \u00E9letben"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image","image",-58725096),"/images/tudatos_stabil_jelenlet.png",new cljs.core.Keyword(null,"title","title",636505583),"Vezet\u0151knek",new cljs.core.Keyword(null,"description","description",-1428560544),"Er\u0151s\u00EDtsd a d\u00F6nt\u00E9shozatali k\u00E9pess\u00E9geidet \u00E9s vezet\u0151 k\u00E9szs\u00E9geidet"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image","image",-58725096),"/images/tanarkent_edzokent_tarskent_segitenel.png",new cljs.core.Keyword(null,"title","title",636505583),"Tan\u00E1roknak",new cljs.core.Keyword(null,"description","description",-1428560544),"\u0150rizd meg a nyugalmadat \u00E9s energi\u00E1dat a tan\u00EDt\u00E1s k\u00F6zben"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image","image",-58725096),"/images/tethelyzeteken_felulemelkedes.png",new cljs.core.Keyword(null,"title","title",636505583),"Mindenkinek",new cljs.core.Keyword(null,"description","description",-1428560544),"Aki szeretne boldogabb \u00E9s kiegyens\u00FAlyozottabb lenni"], null)], null);
/**
 * Section showing who FUMA is for
 */
features.app.homepage.frontend.components.target_audience.target_audience_section = (function features$app$homepage$frontend$components$target_audience$target_audience_section(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.homepage.frontend.components.section_wrapper.section,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ffffff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.homepage.frontend.components.section_wrapper.section_title,"Kinek sz\u00F3l a F\u00DAM\u00C1?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.homepage.frontend.components.section_wrapper.section_subtitle,"B\u00E1rhol tartasz is az \u00E9letedben, a F\u00DAM\u00C1 seg\u00EDt el\u00E9rni a c\u00E9ljaidat"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"repeat(auto-fit, minmax(320px, 1fr))",new cljs.core.Keyword(null,"gap","gap",80255254),"30px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"40px"], null)], null),(function (){var iter__5503__auto__ = (function features$app$homepage$frontend$components$target_audience$target_audience_section_$_iter__14048(s__14049){
return (new cljs.core.LazySeq(null,(function (){
var s__14049__$1 = s__14049;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__14049__$1);
if(temp__5823__auto__){
var s__14049__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14049__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__14049__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__14051 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__14050 = (0);
while(true){
if((i__14050 < size__5502__auto__)){
var audience = cljs.core._nth(c__5501__auto__,i__14050);
cljs.core.chunk_append(b__14051,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.homepage.frontend.components.card.photo_card,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image-src","image-src",1152914289),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(audience),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(audience),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(audience)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(audience)], null)));

var G__14060 = (i__14050 + (1));
i__14050 = G__14060;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14051),features$app$homepage$frontend$components$target_audience$target_audience_section_$_iter__14048(cljs.core.chunk_rest(s__14049__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14051),null);
}
} else {
var audience = cljs.core.first(s__14049__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.homepage.frontend.components.card.photo_card,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image-src","image-src",1152914289),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(audience),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(audience),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(audience)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(audience)], null)),features$app$homepage$frontend$components$target_audience$target_audience_section_$_iter__14048(cljs.core.rest(s__14049__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(features.app.homepage.frontend.components.target_audience.audience_data);
})()], null)], null);
});

//# sourceMappingURL=features.app.homepage.frontend.components.target_audience.js.map
