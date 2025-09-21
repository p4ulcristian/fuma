goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__23417__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__23417 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23422__i = 0, G__23422__a = new Array(arguments.length -  0);
while (G__23422__i < G__23422__a.length) {G__23422__a[G__23422__i] = arguments[G__23422__i + 0]; ++G__23422__i;}
  args = new cljs.core.IndexedSeq(G__23422__a,0,null);
} 
return G__23417__delegate.call(this,args);};
G__23417.cljs$lang$maxFixedArity = 0;
G__23417.cljs$lang$applyTo = (function (arglist__23423){
var args = cljs.core.seq(arglist__23423);
return G__23417__delegate(args);
});
G__23417.cljs$core$IFn$_invoke$arity$variadic = G__23417__delegate;
return G__23417;
})()
);

(o.error = (function() { 
var G__23428__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__23428 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23435__i = 0, G__23435__a = new Array(arguments.length -  0);
while (G__23435__i < G__23435__a.length) {G__23435__a[G__23435__i] = arguments[G__23435__i + 0]; ++G__23435__i;}
  args = new cljs.core.IndexedSeq(G__23435__a,0,null);
} 
return G__23428__delegate.call(this,args);};
G__23428.cljs$lang$maxFixedArity = 0;
G__23428.cljs$lang$applyTo = (function (arglist__23438){
var args = cljs.core.seq(arglist__23438);
return G__23428__delegate(args);
});
G__23428.cljs$core$IFn$_invoke$arity$variadic = G__23428__delegate;
return G__23428;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
