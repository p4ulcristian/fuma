goog.provide('features.app.homepage.frontend.components.benefits_grid');
features.app.homepage.frontend.components.benefits_grid.benefits_data = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image","image",-58725096),"/images/tudomanyos_alapokon_nyugvo_grafika.png",new cljs.core.Keyword(null,"title","title",636505583),"Tudom\u00E1nyos alapokon nyugv\u00F3",new cljs.core.Keyword(null,"description","description",-1428560544),"Bizony\u00EDtottan hat\u00E9kony m\u00F3dszerek a neurotudom\u00E1nyb\u00F3l"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image","image",-58725096),"/images/merheto_eredmenyek_grafika.png",new cljs.core.Keyword(null,"title","title",636505583),"M\u00E9rhet\u0151 eredm\u00E9nyek",new cljs.core.Keyword(null,"description","description",-1428560544),"K\u00F6vetheted a fejl\u0151d\u00E9sedet \u00E9s az eredm\u00E9nyeidet"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image","image",-58725096),"/images/szemelyre_szabhatosag_grafika.png",new cljs.core.Keyword(null,"title","title",636505583),"Szem\u00E9lyre szabhat\u00F3s\u00E1g",new cljs.core.Keyword(null,"description","description",-1428560544),"Minden gyakorlat a Te egy\u00E9ni ig\u00E9nyeidre szabott"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image","image",-58725096),"/images/modosult_tudatallapotban_torteno_grafika.png",new cljs.core.Keyword(null,"title","title",636505583),"M\u00F3dosult tudat\u00E1llapot",new cljs.core.Keyword(null,"description","description",-1428560544),"Elm\u00E9ly\u00FClt relax\u00E1ci\u00F3 \u00E9s fokozott tudatoss\u00E1g"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image","image",-58725096),"/images/napi_15_20_perc_grafika.png",new cljs.core.Keyword(null,"title","title",636505583),"Napi 15-20 perc",new cljs.core.Keyword(null,"description","description",-1428560544),"K\u00F6nnyen beilleszthet\u0151 a napi rutinodba"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image","image",-58725096),"/images/konnyed_pihenteto_gyakorlatok.png",new cljs.core.Keyword(null,"title","title",636505583),"K\u00F6nnyed, pihentet\u00F3 gyakorlatok",new cljs.core.Keyword(null,"description","description",-1428560544),"Nem kell yog\u00E1zni vagy extr\u00E9m dolgokat csin\u00E1lni"], null)], null);
/**
 * Section showing benefits and features
 */
features.app.homepage.frontend.components.benefits_grid.benefits_grid_section = (function features$app$homepage$frontend$components$benefits_grid$benefits_grid_section(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.homepage.frontend.components.section_wrapper.section,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#F8F7FF"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.homepage.frontend.components.section_wrapper.section_title,"Szeretn\u00E9l m\u00E9g ezt az egyed\u00FCl\u00E1ll\u00F3 fejleszt\u0151t?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.homepage.frontend.components.section_wrapper.section_subtitle,"A F\u00DAM\u00C1 minden aspektusa arra lett tervezve, hogy k\u00F6nnyed\u00E9n beilleszthet\u0151 legyen az \u00E9letedbe"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"repeat(auto-fit, minmax(320px, 1fr))",new cljs.core.Keyword(null,"gap","gap",80255254),"30px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"40px"], null)], null),(function (){var iter__5503__auto__ = (function features$app$homepage$frontend$components$benefits_grid$benefits_grid_section_$_iter__14052(s__14053){
return (new cljs.core.LazySeq(null,(function (){
var s__14053__$1 = s__14053;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__14053__$1);
if(temp__5823__auto__){
var s__14053__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14053__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__14053__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__14055 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__14054 = (0);
while(true){
if((i__14054 < size__5502__auto__)){
var benefit = cljs.core._nth(c__5501__auto__,i__14054);
cljs.core.chunk_append(b__14055,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.homepage.frontend.components.card.feature_card,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image-src","image-src",1152914289),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(benefit),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(benefit),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(benefit)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(benefit)], null)));

var G__14062 = (i__14054 + (1));
i__14054 = G__14062;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14055),features$app$homepage$frontend$components$benefits_grid$benefits_grid_section_$_iter__14052(cljs.core.chunk_rest(s__14053__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14055),null);
}
} else {
var benefit = cljs.core.first(s__14053__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.homepage.frontend.components.card.feature_card,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image-src","image-src",1152914289),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(benefit),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(benefit),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(benefit)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(benefit)], null)),features$app$homepage$frontend$components$benefits_grid$benefits_grid_section_$_iter__14052(cljs.core.rest(s__14053__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(features.app.homepage.frontend.components.benefits_grid.benefits_data);
})()], null)], null);
});

//# sourceMappingURL=features.app.homepage.frontend.components.benefits_grid.js.map
