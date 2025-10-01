goog.provide('features.app.homepage.frontend.components.section_wrapper');
/**
 * Common section wrapper with optional background
 */
features.app.homepage.frontend.components.section_wrapper.section = (function features$app$homepage$frontend$components$section_wrapper$section(var_args){
var args__5755__auto__ = [];
var len__5749__auto___14440 = arguments.length;
var i__5750__auto___14441 = (0);
while(true){
if((i__5750__auto___14441 < len__5749__auto___14440)){
args__5755__auto__.push((arguments[i__5750__auto___14441]));

var G__14442 = (i__5750__auto___14441 + (1));
i__5750__auto___14441 = G__14442;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return features.app.homepage.frontend.components.section_wrapper.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(features.app.homepage.frontend.components.section_wrapper.section.cljs$core$IFn$_invoke$arity$variadic = (function (p__14438,children){
var map__14439 = p__14438;
var map__14439__$1 = cljs.core.__destructure_map(map__14439);
var background_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14439__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
var background_image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14439__$1,new cljs.core.Keyword(null,"background-image","background-image",-1142314704));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14439__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(function (){var or__5025__auto__ = padding;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "80px 20px";
}
})(),new cljs.core.Keyword(null,"background-color","background-color",570434026),(function (){var or__5025__auto__ = background_color;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "transparent";
}
})()], null),(cljs.core.truth_(background_image)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(background_image),")"].join(''),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),"cover",new cljs.core.Keyword(null,"background-position","background-position",1112702746),"center"], null):null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"1200px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto"], null)], null),children], null)], null);
}));

(features.app.homepage.frontend.components.section_wrapper.section.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(features.app.homepage.frontend.components.section_wrapper.section.cljs$lang$applyTo = (function (seq14436){
var G__14437 = cljs.core.first(seq14436);
var seq14436__$1 = cljs.core.next(seq14436);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14437,seq14436__$1);
}));

/**
 * Section title styling
 */
features.app.homepage.frontend.components.section_wrapper.section_title = (function features$app$homepage$frontend$components$section_wrapper$section_title(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"800px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"42px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"700",new cljs.core.Keyword(null,"color","color",1011675173),"#2402AA",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 20px 0"], null)], null),text], null)], null);
});
/**
 * Section subtitle styling
 */
features.app.homepage.frontend.components.section_wrapper.section_subtitle = (function features$app$homepage$frontend$components$section_wrapper$section_subtitle(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"18px",new cljs.core.Keyword(null,"color","color",1011675173),"#666666",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"700px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto 50px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.6"], null)], null),text], null);
});

//# sourceMappingURL=features.app.homepage.frontend.components.section_wrapper.js.map
