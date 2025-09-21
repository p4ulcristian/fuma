goog.provide('reagent.dom.client');
/**
 * Create a React Root connected to given container DOM element.
 */
reagent.dom.client.create_root = (function reagent$dom$client$create_root(var_args){
var G__28666 = arguments.length;
switch (G__28666) {
case 1:
return reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1 = (function (container){
return shadow.js.shim.module$react_dom$client.createRoot(container);
}));

(reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$2 = (function (container,options){
return shadow.js.shim.module$react_dom$client.createRoot(container,options);
}));

(reagent.dom.client.create_root.cljs$lang$maxFixedArity = 2);

/**
 * Unmount the given React Root
 */
reagent.dom.client.unmount = (function reagent$dom$client$unmount(root){
return root.unmount();
});
reagent.dom.client.reagent_root = (function reagent$dom$client$reagent_root(js_props){
shadow.js.shim.module$react.useEffect((function (){
var _STAR_always_update_STAR__orig_val__28671 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__28672 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__28672);

try{reagent.impl.batching.flush_after_render();

return undefined;
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__28671);
}}));

var _STAR_always_update_STAR__orig_val__28676 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__28678 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__28678);

try{return shadow.js.shim.module$react.createElement(js_props.comp);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__28676);
}});
/**
 * Render the given Reagent element (i.e. Hiccup data)
 *   into a given React root.
 */
reagent.dom.client.render = (function reagent$dom$client$render(var_args){
var G__28684 = arguments.length;
switch (G__28684) {
case 2:
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2 = (function (root,el){
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$3(root,el,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.client.render.cljs$core$IFn$_invoke$arity$3 = (function (root,el,compiler){
(reagent.impl.batching.react_flush = shadow.js.shim.module$react_dom.flushSync);

var comp = (function (){
return reagent.impl.protocols.as_element(compiler,el);
});
var js_props = ({});
(js_props.comp = comp);

return root.render(shadow.js.shim.module$react.createElement(reagent.dom.client.reagent_root,js_props));
}));

(reagent.dom.client.render.cljs$lang$maxFixedArity = 3);

reagent.dom.client.hydrate_root = (function reagent$dom$client$hydrate_root(var_args){
var G__28708 = arguments.length;
switch (G__28708) {
case 2:
return reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$2 = (function (container,el){
return reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$3(container,el,null);
}));

(reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$3 = (function (container,el,p__28721){
var map__28724 = p__28721;
var map__28724__$1 = cljs.core.__destructure_map(map__28724);
var compiler = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28724__$1,new cljs.core.Keyword(null,"compiler","compiler",-267926731),reagent.impl.template._STAR_current_default_compiler_STAR_);
var on_recoverable_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28724__$1,new cljs.core.Keyword(null,"on-recoverable-error","on-recoverable-error",1651056576));
var identifier_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28724__$1,new cljs.core.Keyword(null,"identifier-prefix","identifier-prefix",1929840008));
(reagent.impl.batching.react_flush = shadow.js.shim.module$react_dom.flushSync);

var js_props = ({});
var comp = (function (){
return reagent.impl.protocols.as_element(compiler,el);
});
(js_props.comp = comp);

return shadow.js.shim.module$react_dom$client.hydrateRoot(container,shadow.js.shim.module$react.createElement(reagent.dom.client.reagent_root,js_props));
}));

(reagent.dom.client.hydrate_root.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=reagent.dom.client.js.map
