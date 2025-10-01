goog.provide('features.app.homepage.frontend.components.button');
/**
 * Primary CTA button with purple gradient
 */
features.app.homepage.frontend.components.button.primary_button = (function features$app$homepage$frontend$components$button$primary_button(p__14035){
var map__14039 = p__14035;
var map__14039__$1 = cljs.core.__destructure_map(map__14039);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14039__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14039__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14039__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var base_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["0 4px 15px rgba(91, 78, 196, 0.3)","#ffffff","18px","all 0.3s ease","600","linear-gradient(135deg, #5B4EC4 0%, #8B7FD8 100%)","pointer","16px 32px","none","inline-block","none","30px"]);
if(cljs.core.truth_(href)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"style","style",-496642736),base_style], null),text], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"style","style",-496642736),base_style], null),text], null);
}
});

//# sourceMappingURL=features.app.homepage.frontend.components.button.js.map
