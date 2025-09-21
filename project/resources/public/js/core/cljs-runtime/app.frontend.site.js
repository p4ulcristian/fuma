goog.provide('app.frontend.site');
app.frontend.site.functional_compiler = reagent.core.create_compiler(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"function-components","function-components",1492814963),true], null));
reagent.core.set_default_compiler_BANG_(app.frontend.site.functional_compiler);
app.frontend.site.root_el = document.getElementById("reagent-container");
if((typeof app !== 'undefined') && (typeof app.frontend !== 'undefined') && (typeof app.frontend.site !== 'undefined') && (typeof app.frontend.site.root !== 'undefined')){
} else {
app.frontend.site.root = reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1(app.frontend.site.root_el);
}
app.frontend.site.render_app_BANG_ = (function app$frontend$site$render_app_BANG_(){
router.frontend.zero.init_BANG_(features.app.zero.frontend.zero.routes);

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(app.frontend.site.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return features.app.zero.frontend.zero.view;},new cljs.core.Symbol("features.app.zero.frontend.zero","view","features.app.zero.frontend.zero/view",-2045073399,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"features.app.zero.frontend.zero","features.app.zero.frontend.zero",1784425462,null),new cljs.core.Symbol(null,"view","view",-1406440955,null),"features/app/zero/frontend/zero.cljs",11,1,14,14,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(features.app.zero.frontend.zero.view)?features.app.zero.frontend.zero.view.cljs$lang$test:null)]))], null));
});
app.frontend.site.start_app_BANG_ = (function app$frontend$site$start_app_BANG_(){
zero.frontend.re_frame_viewer.view.init_BANG_();

return app.frontend.site.render_app_BANG_();
});

//# sourceMappingURL=app.frontend.site.js.map
