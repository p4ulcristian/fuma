goog.provide('zero.frontend.react');
zero.frontend.react.use_state = (function zero$frontend$react$use_state(initial_value){
return shadow.js.shim.module$react.useState(initial_value);
});
zero.frontend.react.use_effect = (function zero$frontend$react$use_effect(p__28224){
var map__28225 = p__28224;
var map__28225__$1 = cljs.core.__destructure_map(map__28225);
var mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28225__$1,new cljs.core.Keyword(null,"mount","mount",-1560582470));
var unmount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28225__$1,new cljs.core.Keyword(null,"unmount","unmount",-1779083333));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28225__$1,new cljs.core.Keyword(null,"params","params",710516235));
return shadow.js.shim.module$react.useEffect((function (){
if(cljs.core.truth_(mount)){
(mount.cljs$core$IFn$_invoke$arity$0 ? mount.cljs$core$IFn$_invoke$arity$0() : mount.call(null));
} else {
}

if(cljs.core.truth_(unmount)){
return (function (){
return (unmount.cljs$core$IFn$_invoke$arity$0 ? unmount.cljs$core$IFn$_invoke$arity$0() : unmount.call(null));
});
} else {
return (function (){
return null;
});
}
}),(cljs.core.truth_(params)?params:[]));
});

//# sourceMappingURL=zero.frontend.react.js.map
