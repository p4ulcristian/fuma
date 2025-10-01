goog.provide('router.frontend.zero');
if((typeof router !== 'undefined') && (typeof router.frontend !== 'undefined') && (typeof router.frontend.zero !== 'undefined') && (typeof router.frontend.zero.state !== 'undefined')){
} else {
router.frontend.zero.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
router.frontend.zero.get_path_params = (function router$frontend$zero$get_path_params(match){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match));
});
router.frontend.zero.init_BANG_ = (function router$frontend$zero$init_BANG_(routes){
var router__$1 = reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(router.frontend.transform.routes__GT_reitit_routes(routes),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),null], null));
accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$2(router__$1,path);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","assoc-in","db/assoc-in",-1754128912),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"path-params","path-params",-48130597),router.frontend.zero.get_path_params(match),new cljs.core.Keyword(null,"query-params","query-params",900640534),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null))], null)], null));

cljs.core.reset_BANG_(router.frontend.zero.state,match);

reagent.core.after_render(clerk.core.after_render_BANG_);

return clerk.core.navigate_page_BANG_(path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$(reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$2(router__$1,path));
})], null));

return accountant.core.dispatch_current_BANG_();
});
router.frontend.zero.navigate_BANG_ = (function router$frontend$zero$navigate_BANG_(p__27131){
var map__27132 = p__27131;
var map__27132__$1 = cljs.core.__destructure_map(map__27132);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27132__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1(path);
});
router.frontend.zero.navigate_and_reload_BANG_ = (function router$frontend$zero$navigate_and_reload_BANG_(p__27136){
var map__27137 = p__27136;
var map__27137__$1 = cljs.core.__destructure_map(map__27137);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27137__$1,new cljs.core.Keyword(null,"path","path",-188191168));
accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1(path);

return location.reload();
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"swap-query-params!","swap-query-params!",628859697),(function (p__27138){
var map__27139 = p__27138;
var map__27139__$1 = cljs.core.__destructure_map(map__27139);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27139__$1,new cljs.core.Keyword(null,"params","params",710516235));
var current_path = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(router.frontend.zero.state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null));
var new_params = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.val),params));
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq(new_params))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_path),"?",accountant.core.map__GT_params(new_params)].join(''):current_path));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("router","swap-query-params!","router/swap-query-params!",-357564454),(function (p__27142){
var map__27143 = p__27142;
var map__27143__$1 = cljs.core.__destructure_map(map__27143);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27143__$1,new cljs.core.Keyword(null,"params","params",710516235));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"swap-query-params!","swap-query-params!",628859697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),params], null)], null);
}));

//# sourceMappingURL=router.frontend.zero.js.map
