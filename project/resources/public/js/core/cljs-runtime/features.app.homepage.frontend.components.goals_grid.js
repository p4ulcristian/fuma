goog.provide('features.app.homepage.frontend.components.goals_grid');
features.app.homepage.frontend.components.goals_grid.goals_data = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"/images/kiegensulyozott_parkapcsolat.png",new cljs.core.Keyword(null,"title","title",636505583),"Kiegyens\u00FAlyozott p\u00E1rkapcsolat"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"/images/egeszseg_es_vitalitas.png",new cljs.core.Keyword(null,"title","title",636505583),"Eg\u00E9szs\u00E9g \u00E9s vitalit\u00E1s (energia)"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"/images/tethelyzeteken_felulemelkedes.png",new cljs.core.Keyword(null,"title","title",636505583),"T\u00E9thelyzeteken val\u00F3 fel\u00FClemelked\u00E9s"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"/images/penz_es_anyagi_biztonsag.png",new cljs.core.Keyword(null,"title","title",636505583),"P\u00E9nz \u00E9s anyagi biztons\u00E1g"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"/images/harmonikus_szulo_gyerek_kapcsolat.png",new cljs.core.Keyword(null,"title","title",636505583),"Harmonikus sz\u00FCl\u0151-gyerek kapcsolat"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"/images/onbizalom_es_kitartas.png",new cljs.core.Keyword(null,"title","title",636505583),"\u00D6nbizalom \u00E9s kitart\u00E1s"], null)], null);
/**
 * Section showing life areas that can be improved
 */
features.app.homepage.frontend.components.goals_grid.goals_grid_section = (function features$app$homepage$frontend$components$goals_grid$goals_grid_section(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.homepage.frontend.components.section_wrapper.section,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#F8F7FF"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.homepage.frontend.components.section_wrapper.section_title,"Mit \u00E9rhetsz a FUMA-val?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.homepage.frontend.components.section_wrapper.section_subtitle,"az olimpikonok \u00E9s profi sportol\u00F3k \u00E9s \u00FCzletemberek m\u00F3dszereivel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"repeat(auto-fit, minmax(320px, 1fr))",new cljs.core.Keyword(null,"gap","gap",80255254),"30px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"40px"], null)], null),(function (){var iter__5503__auto__ = (function features$app$homepage$frontend$components$goals_grid$goals_grid_section_$_iter__14545(s__14546){
return (new cljs.core.LazySeq(null,(function (){
var s__14546__$1 = s__14546;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__14546__$1);
if(temp__5823__auto__){
var s__14546__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14546__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__14546__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__14548 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__14547 = (0);
while(true){
if((i__14547 < size__5502__auto__)){
var goal = cljs.core._nth(c__5501__auto__,i__14547);
cljs.core.chunk_append(b__14548,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.homepage.frontend.components.card.photo_card,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image-src","image-src",1152914289),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(goal),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(goal)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(goal)], null)));

var G__14557 = (i__14547 + (1));
i__14547 = G__14557;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14548),features$app$homepage$frontend$components$goals_grid$goals_grid_section_$_iter__14545(cljs.core.chunk_rest(s__14546__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14548),null);
}
} else {
var goal = cljs.core.first(s__14546__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.homepage.frontend.components.card.photo_card,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image-src","image-src",1152914289),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(goal),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(goal)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(goal)], null)),features$app$homepage$frontend$components$goals_grid$goals_grid_section_$_iter__14545(cljs.core.rest(s__14546__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(features.app.homepage.frontend.components.goals_grid.goals_data);
})()], null)], null);
});

//# sourceMappingURL=features.app.homepage.frontend.components.goals_grid.js.map
