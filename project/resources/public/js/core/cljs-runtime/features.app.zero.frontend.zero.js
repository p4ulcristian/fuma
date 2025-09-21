goog.provide('features.app.zero.frontend.zero');
features.app.zero.frontend.zero.routes = features.app.homepage.routes.routes;
features.app.zero.frontend.zero.view = (function features$app$zero$frontend$zero$view(){
var router_data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(router.frontend.zero.state));
var current_path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(router.frontend.zero.state));
var show_header_QMARK_ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_path,"/login")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_path,"/")));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((show_header_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.header.view], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(router_data)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zero.frontend.re_frame_viewer.view.re_frame_viewer], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zero.frontend.re_frame_viewer.view.keyboard_listener], null)], null);
});

//# sourceMappingURL=features.app.zero.frontend.zero.js.map
