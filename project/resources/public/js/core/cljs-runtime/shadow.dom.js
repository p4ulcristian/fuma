goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_16944 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_16944(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_16946 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_16946(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__16160 = coll;
var G__16161 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__16160,G__16161) : shadow.dom.lazy_native_coll_seq.call(null,G__16160,G__16161));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5025__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__16275 = arguments.length;
switch (G__16275) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__16281 = arguments.length;
switch (G__16281) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__16283 = arguments.length;
switch (G__16283) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__16293 = arguments.length;
switch (G__16293) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__16299 = arguments.length;
switch (G__16299) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__16303 = arguments.length;
switch (G__16303) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e16306){if((e16306 instanceof Object)){
var e = e16306;
return console.log("didnt support attachEvent",el,e);
} else {
throw e16306;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__16322 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__16323 = null;
var count__16324 = (0);
var i__16325 = (0);
while(true){
if((i__16325 < count__16324)){
var el = chunk__16323.cljs$core$IIndexed$_nth$arity$2(null,i__16325);
var handler_16968__$1 = ((function (seq__16322,chunk__16323,count__16324,i__16325,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__16322,chunk__16323,count__16324,i__16325,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16968__$1);


var G__16969 = seq__16322;
var G__16970 = chunk__16323;
var G__16971 = count__16324;
var G__16972 = (i__16325 + (1));
seq__16322 = G__16969;
chunk__16323 = G__16970;
count__16324 = G__16971;
i__16325 = G__16972;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16322);
if(temp__5823__auto__){
var seq__16322__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16322__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__16322__$1);
var G__16974 = cljs.core.chunk_rest(seq__16322__$1);
var G__16975 = c__5548__auto__;
var G__16976 = cljs.core.count(c__5548__auto__);
var G__16977 = (0);
seq__16322 = G__16974;
chunk__16323 = G__16975;
count__16324 = G__16976;
i__16325 = G__16977;
continue;
} else {
var el = cljs.core.first(seq__16322__$1);
var handler_16978__$1 = ((function (seq__16322,chunk__16323,count__16324,i__16325,el,seq__16322__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__16322,chunk__16323,count__16324,i__16325,el,seq__16322__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16978__$1);


var G__16980 = cljs.core.next(seq__16322__$1);
var G__16981 = null;
var G__16982 = (0);
var G__16983 = (0);
seq__16322 = G__16980;
chunk__16323 = G__16981;
count__16324 = G__16982;
i__16325 = G__16983;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__16353 = arguments.length;
switch (G__16353) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__16363 = cljs.core.seq(events);
var chunk__16364 = null;
var count__16365 = (0);
var i__16366 = (0);
while(true){
if((i__16366 < count__16365)){
var vec__16374 = chunk__16364.cljs$core$IIndexed$_nth$arity$2(null,i__16366);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16374,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16374,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16988 = seq__16363;
var G__16989 = chunk__16364;
var G__16990 = count__16365;
var G__16991 = (i__16366 + (1));
seq__16363 = G__16988;
chunk__16364 = G__16989;
count__16365 = G__16990;
i__16366 = G__16991;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16363);
if(temp__5823__auto__){
var seq__16363__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16363__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__16363__$1);
var G__16992 = cljs.core.chunk_rest(seq__16363__$1);
var G__16993 = c__5548__auto__;
var G__16994 = cljs.core.count(c__5548__auto__);
var G__16995 = (0);
seq__16363 = G__16992;
chunk__16364 = G__16993;
count__16365 = G__16994;
i__16366 = G__16995;
continue;
} else {
var vec__16377 = cljs.core.first(seq__16363__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16377,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16377,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16997 = cljs.core.next(seq__16363__$1);
var G__16998 = null;
var G__16999 = (0);
var G__17000 = (0);
seq__16363 = G__16997;
chunk__16364 = G__16998;
count__16365 = G__16999;
i__16366 = G__17000;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__16383 = cljs.core.seq(styles);
var chunk__16384 = null;
var count__16385 = (0);
var i__16386 = (0);
while(true){
if((i__16386 < count__16385)){
var vec__16393 = chunk__16384.cljs$core$IIndexed$_nth$arity$2(null,i__16386);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16393,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16393,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__17004 = seq__16383;
var G__17005 = chunk__16384;
var G__17006 = count__16385;
var G__17007 = (i__16386 + (1));
seq__16383 = G__17004;
chunk__16384 = G__17005;
count__16385 = G__17006;
i__16386 = G__17007;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16383);
if(temp__5823__auto__){
var seq__16383__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16383__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__16383__$1);
var G__17008 = cljs.core.chunk_rest(seq__16383__$1);
var G__17009 = c__5548__auto__;
var G__17010 = cljs.core.count(c__5548__auto__);
var G__17011 = (0);
seq__16383 = G__17008;
chunk__16384 = G__17009;
count__16385 = G__17010;
i__16386 = G__17011;
continue;
} else {
var vec__16396 = cljs.core.first(seq__16383__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16396,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16396,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__17013 = cljs.core.next(seq__16383__$1);
var G__17014 = null;
var G__17015 = (0);
var G__17016 = (0);
seq__16383 = G__17013;
chunk__16384 = G__17014;
count__16385 = G__17015;
i__16386 = G__17016;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__16399_17017 = key;
var G__16399_17018__$1 = (((G__16399_17017 instanceof cljs.core.Keyword))?G__16399_17017.fqn:null);
switch (G__16399_17018__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_17029 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_17029,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_17029,"aria-");
}
})())){
el.setAttribute(ks_17029,value);
} else {
(el[ks_17029] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__16400){
var map__16401 = p__16400;
var map__16401__$1 = cljs.core.__destructure_map(map__16401);
var props = map__16401__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16401__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__16402 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16402,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16402,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16402,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__16405 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__16405,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__16405;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__16407 = arguments.length;
switch (G__16407) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__16408){
var vec__16409 = p__16408;
var seq__16410 = cljs.core.seq(vec__16409);
var first__16411 = cljs.core.first(seq__16410);
var seq__16410__$1 = cljs.core.next(seq__16410);
var nn = first__16411;
var first__16411__$1 = cljs.core.first(seq__16410__$1);
var seq__16410__$2 = cljs.core.next(seq__16410__$1);
var np = first__16411__$1;
var nc = seq__16410__$2;
var node = vec__16409;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16412 = nn;
var G__16413 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__16412,G__16413) : create_fn.call(null,G__16412,G__16413));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16414 = nn;
var G__16415 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__16414,G__16415) : create_fn.call(null,G__16414,G__16415));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__16416 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16416,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16416,(1),null);
var seq__16419_17047 = cljs.core.seq(node_children);
var chunk__16420_17048 = null;
var count__16421_17049 = (0);
var i__16422_17050 = (0);
while(true){
if((i__16422_17050 < count__16421_17049)){
var child_struct_17051 = chunk__16420_17048.cljs$core$IIndexed$_nth$arity$2(null,i__16422_17050);
var children_17053 = shadow.dom.dom_node(child_struct_17051);
if(cljs.core.seq_QMARK_(children_17053)){
var seq__16435_17054 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_17053));
var chunk__16437_17055 = null;
var count__16438_17056 = (0);
var i__16439_17057 = (0);
while(true){
if((i__16439_17057 < count__16438_17056)){
var child_17059 = chunk__16437_17055.cljs$core$IIndexed$_nth$arity$2(null,i__16439_17057);
if(cljs.core.truth_(child_17059)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_17059);


var G__17060 = seq__16435_17054;
var G__17061 = chunk__16437_17055;
var G__17062 = count__16438_17056;
var G__17063 = (i__16439_17057 + (1));
seq__16435_17054 = G__17060;
chunk__16437_17055 = G__17061;
count__16438_17056 = G__17062;
i__16439_17057 = G__17063;
continue;
} else {
var G__17064 = seq__16435_17054;
var G__17065 = chunk__16437_17055;
var G__17066 = count__16438_17056;
var G__17067 = (i__16439_17057 + (1));
seq__16435_17054 = G__17064;
chunk__16437_17055 = G__17065;
count__16438_17056 = G__17066;
i__16439_17057 = G__17067;
continue;
}
} else {
var temp__5823__auto___17068 = cljs.core.seq(seq__16435_17054);
if(temp__5823__auto___17068){
var seq__16435_17069__$1 = temp__5823__auto___17068;
if(cljs.core.chunked_seq_QMARK_(seq__16435_17069__$1)){
var c__5548__auto___17070 = cljs.core.chunk_first(seq__16435_17069__$1);
var G__17071 = cljs.core.chunk_rest(seq__16435_17069__$1);
var G__17072 = c__5548__auto___17070;
var G__17073 = cljs.core.count(c__5548__auto___17070);
var G__17074 = (0);
seq__16435_17054 = G__17071;
chunk__16437_17055 = G__17072;
count__16438_17056 = G__17073;
i__16439_17057 = G__17074;
continue;
} else {
var child_17075 = cljs.core.first(seq__16435_17069__$1);
if(cljs.core.truth_(child_17075)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_17075);


var G__17077 = cljs.core.next(seq__16435_17069__$1);
var G__17078 = null;
var G__17079 = (0);
var G__17080 = (0);
seq__16435_17054 = G__17077;
chunk__16437_17055 = G__17078;
count__16438_17056 = G__17079;
i__16439_17057 = G__17080;
continue;
} else {
var G__17081 = cljs.core.next(seq__16435_17069__$1);
var G__17082 = null;
var G__17083 = (0);
var G__17084 = (0);
seq__16435_17054 = G__17081;
chunk__16437_17055 = G__17082;
count__16438_17056 = G__17083;
i__16439_17057 = G__17084;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_17053);
}


var G__17085 = seq__16419_17047;
var G__17086 = chunk__16420_17048;
var G__17087 = count__16421_17049;
var G__17088 = (i__16422_17050 + (1));
seq__16419_17047 = G__17085;
chunk__16420_17048 = G__17086;
count__16421_17049 = G__17087;
i__16422_17050 = G__17088;
continue;
} else {
var temp__5823__auto___17090 = cljs.core.seq(seq__16419_17047);
if(temp__5823__auto___17090){
var seq__16419_17091__$1 = temp__5823__auto___17090;
if(cljs.core.chunked_seq_QMARK_(seq__16419_17091__$1)){
var c__5548__auto___17092 = cljs.core.chunk_first(seq__16419_17091__$1);
var G__17093 = cljs.core.chunk_rest(seq__16419_17091__$1);
var G__17094 = c__5548__auto___17092;
var G__17095 = cljs.core.count(c__5548__auto___17092);
var G__17096 = (0);
seq__16419_17047 = G__17093;
chunk__16420_17048 = G__17094;
count__16421_17049 = G__17095;
i__16422_17050 = G__17096;
continue;
} else {
var child_struct_17097 = cljs.core.first(seq__16419_17091__$1);
var children_17098 = shadow.dom.dom_node(child_struct_17097);
if(cljs.core.seq_QMARK_(children_17098)){
var seq__16442_17099 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_17098));
var chunk__16444_17100 = null;
var count__16445_17101 = (0);
var i__16446_17102 = (0);
while(true){
if((i__16446_17102 < count__16445_17101)){
var child_17103 = chunk__16444_17100.cljs$core$IIndexed$_nth$arity$2(null,i__16446_17102);
if(cljs.core.truth_(child_17103)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_17103);


var G__17104 = seq__16442_17099;
var G__17105 = chunk__16444_17100;
var G__17106 = count__16445_17101;
var G__17107 = (i__16446_17102 + (1));
seq__16442_17099 = G__17104;
chunk__16444_17100 = G__17105;
count__16445_17101 = G__17106;
i__16446_17102 = G__17107;
continue;
} else {
var G__17110 = seq__16442_17099;
var G__17111 = chunk__16444_17100;
var G__17112 = count__16445_17101;
var G__17113 = (i__16446_17102 + (1));
seq__16442_17099 = G__17110;
chunk__16444_17100 = G__17111;
count__16445_17101 = G__17112;
i__16446_17102 = G__17113;
continue;
}
} else {
var temp__5823__auto___17114__$1 = cljs.core.seq(seq__16442_17099);
if(temp__5823__auto___17114__$1){
var seq__16442_17115__$1 = temp__5823__auto___17114__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16442_17115__$1)){
var c__5548__auto___17116 = cljs.core.chunk_first(seq__16442_17115__$1);
var G__17117 = cljs.core.chunk_rest(seq__16442_17115__$1);
var G__17118 = c__5548__auto___17116;
var G__17119 = cljs.core.count(c__5548__auto___17116);
var G__17120 = (0);
seq__16442_17099 = G__17117;
chunk__16444_17100 = G__17118;
count__16445_17101 = G__17119;
i__16446_17102 = G__17120;
continue;
} else {
var child_17121 = cljs.core.first(seq__16442_17115__$1);
if(cljs.core.truth_(child_17121)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_17121);


var G__17123 = cljs.core.next(seq__16442_17115__$1);
var G__17124 = null;
var G__17125 = (0);
var G__17126 = (0);
seq__16442_17099 = G__17123;
chunk__16444_17100 = G__17124;
count__16445_17101 = G__17125;
i__16446_17102 = G__17126;
continue;
} else {
var G__17127 = cljs.core.next(seq__16442_17115__$1);
var G__17128 = null;
var G__17129 = (0);
var G__17130 = (0);
seq__16442_17099 = G__17127;
chunk__16444_17100 = G__17128;
count__16445_17101 = G__17129;
i__16446_17102 = G__17130;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_17098);
}


var G__17131 = cljs.core.next(seq__16419_17091__$1);
var G__17132 = null;
var G__17133 = (0);
var G__17134 = (0);
seq__16419_17047 = G__17131;
chunk__16420_17048 = G__17132;
count__16421_17049 = G__17133;
i__16422_17050 = G__17134;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__16453 = cljs.core.seq(node);
var chunk__16454 = null;
var count__16455 = (0);
var i__16456 = (0);
while(true){
if((i__16456 < count__16455)){
var n = chunk__16454.cljs$core$IIndexed$_nth$arity$2(null,i__16456);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__17137 = seq__16453;
var G__17138 = chunk__16454;
var G__17139 = count__16455;
var G__17140 = (i__16456 + (1));
seq__16453 = G__17137;
chunk__16454 = G__17138;
count__16455 = G__17139;
i__16456 = G__17140;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16453);
if(temp__5823__auto__){
var seq__16453__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16453__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__16453__$1);
var G__17141 = cljs.core.chunk_rest(seq__16453__$1);
var G__17142 = c__5548__auto__;
var G__17143 = cljs.core.count(c__5548__auto__);
var G__17144 = (0);
seq__16453 = G__17141;
chunk__16454 = G__17142;
count__16455 = G__17143;
i__16456 = G__17144;
continue;
} else {
var n = cljs.core.first(seq__16453__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__17145 = cljs.core.next(seq__16453__$1);
var G__17146 = null;
var G__17147 = (0);
var G__17148 = (0);
seq__16453 = G__17145;
chunk__16454 = G__17146;
count__16455 = G__17147;
i__16456 = G__17148;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__16460 = arguments.length;
switch (G__16460) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__16462 = arguments.length;
switch (G__16462) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__16468 = arguments.length;
switch (G__16468) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5025__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5755__auto__ = [];
var len__5749__auto___17157 = arguments.length;
var i__5750__auto___17158 = (0);
while(true){
if((i__5750__auto___17158 < len__5749__auto___17157)){
args__5755__auto__.push((arguments[i__5750__auto___17158]));

var G__17164 = (i__5750__auto___17158 + (1));
i__5750__auto___17158 = G__17164;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__16475_17170 = cljs.core.seq(nodes);
var chunk__16476_17171 = null;
var count__16477_17172 = (0);
var i__16478_17173 = (0);
while(true){
if((i__16478_17173 < count__16477_17172)){
var node_17174 = chunk__16476_17171.cljs$core$IIndexed$_nth$arity$2(null,i__16478_17173);
fragment.appendChild(shadow.dom._to_dom(node_17174));


var G__17176 = seq__16475_17170;
var G__17177 = chunk__16476_17171;
var G__17178 = count__16477_17172;
var G__17179 = (i__16478_17173 + (1));
seq__16475_17170 = G__17176;
chunk__16476_17171 = G__17177;
count__16477_17172 = G__17178;
i__16478_17173 = G__17179;
continue;
} else {
var temp__5823__auto___17181 = cljs.core.seq(seq__16475_17170);
if(temp__5823__auto___17181){
var seq__16475_17183__$1 = temp__5823__auto___17181;
if(cljs.core.chunked_seq_QMARK_(seq__16475_17183__$1)){
var c__5548__auto___17185 = cljs.core.chunk_first(seq__16475_17183__$1);
var G__17186 = cljs.core.chunk_rest(seq__16475_17183__$1);
var G__17187 = c__5548__auto___17185;
var G__17188 = cljs.core.count(c__5548__auto___17185);
var G__17190 = (0);
seq__16475_17170 = G__17186;
chunk__16476_17171 = G__17187;
count__16477_17172 = G__17188;
i__16478_17173 = G__17190;
continue;
} else {
var node_17191 = cljs.core.first(seq__16475_17183__$1);
fragment.appendChild(shadow.dom._to_dom(node_17191));


var G__17192 = cljs.core.next(seq__16475_17183__$1);
var G__17193 = null;
var G__17194 = (0);
var G__17195 = (0);
seq__16475_17170 = G__17192;
chunk__16476_17171 = G__17193;
count__16477_17172 = G__17194;
i__16478_17173 = G__17195;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq16472){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16472));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__16498_17198 = cljs.core.seq(scripts);
var chunk__16499_17199 = null;
var count__16500_17200 = (0);
var i__16501_17201 = (0);
while(true){
if((i__16501_17201 < count__16500_17200)){
var vec__16513_17202 = chunk__16499_17199.cljs$core$IIndexed$_nth$arity$2(null,i__16501_17201);
var script_tag_17203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16513_17202,(0),null);
var script_body_17204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16513_17202,(1),null);
eval(script_body_17204);


var G__17205 = seq__16498_17198;
var G__17206 = chunk__16499_17199;
var G__17207 = count__16500_17200;
var G__17208 = (i__16501_17201 + (1));
seq__16498_17198 = G__17205;
chunk__16499_17199 = G__17206;
count__16500_17200 = G__17207;
i__16501_17201 = G__17208;
continue;
} else {
var temp__5823__auto___17209 = cljs.core.seq(seq__16498_17198);
if(temp__5823__auto___17209){
var seq__16498_17210__$1 = temp__5823__auto___17209;
if(cljs.core.chunked_seq_QMARK_(seq__16498_17210__$1)){
var c__5548__auto___17211 = cljs.core.chunk_first(seq__16498_17210__$1);
var G__17212 = cljs.core.chunk_rest(seq__16498_17210__$1);
var G__17213 = c__5548__auto___17211;
var G__17214 = cljs.core.count(c__5548__auto___17211);
var G__17215 = (0);
seq__16498_17198 = G__17212;
chunk__16499_17199 = G__17213;
count__16500_17200 = G__17214;
i__16501_17201 = G__17215;
continue;
} else {
var vec__16518_17216 = cljs.core.first(seq__16498_17210__$1);
var script_tag_17217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16518_17216,(0),null);
var script_body_17218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16518_17216,(1),null);
eval(script_body_17218);


var G__17219 = cljs.core.next(seq__16498_17210__$1);
var G__17220 = null;
var G__17221 = (0);
var G__17222 = (0);
seq__16498_17198 = G__17219;
chunk__16499_17199 = G__17220;
count__16500_17200 = G__17221;
i__16501_17201 = G__17222;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__16522){
var vec__16523 = p__16522;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16523,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16523,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__16538 = arguments.length;
switch (G__16538) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__16550 = cljs.core.seq(style_keys);
var chunk__16551 = null;
var count__16552 = (0);
var i__16553 = (0);
while(true){
if((i__16553 < count__16552)){
var it = chunk__16551.cljs$core$IIndexed$_nth$arity$2(null,i__16553);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__17226 = seq__16550;
var G__17227 = chunk__16551;
var G__17228 = count__16552;
var G__17229 = (i__16553 + (1));
seq__16550 = G__17226;
chunk__16551 = G__17227;
count__16552 = G__17228;
i__16553 = G__17229;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16550);
if(temp__5823__auto__){
var seq__16550__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16550__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__16550__$1);
var G__17230 = cljs.core.chunk_rest(seq__16550__$1);
var G__17231 = c__5548__auto__;
var G__17232 = cljs.core.count(c__5548__auto__);
var G__17233 = (0);
seq__16550 = G__17230;
chunk__16551 = G__17231;
count__16552 = G__17232;
i__16553 = G__17233;
continue;
} else {
var it = cljs.core.first(seq__16550__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__17234 = cljs.core.next(seq__16550__$1);
var G__17235 = null;
var G__17236 = (0);
var G__17237 = (0);
seq__16550 = G__17234;
chunk__16551 = G__17235;
count__16552 = G__17236;
i__16553 = G__17237;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k16576,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__16582 = k16576;
var G__16582__$1 = (((G__16582 instanceof cljs.core.Keyword))?G__16582.fqn:null);
switch (G__16582__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16576,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__16584){
var vec__16585 = p__16584;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16585,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16585,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16575){
var self__ = this;
var G__16575__$1 = this;
return (new cljs.core.RecordIter((0),G__16575__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16577,other16578){
var self__ = this;
var this16577__$1 = this;
return (((!((other16578 == null)))) && ((((this16577__$1.constructor === other16578.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16577__$1.x,other16578.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16577__$1.y,other16578.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16577__$1.__extmap,other16578.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k16576){
var self__ = this;
var this__5330__auto____$1 = this;
var G__16612 = k16576;
var G__16612__$1 = (((G__16612 instanceof cljs.core.Keyword))?G__16612.fqn:null);
switch (G__16612__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16576);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__16575){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__16616 = cljs.core.keyword_identical_QMARK_;
var expr__16617 = k__5332__auto__;
if(cljs.core.truth_((pred__16616.cljs$core$IFn$_invoke$arity$2 ? pred__16616.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__16617) : pred__16616.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__16617)))){
return (new shadow.dom.Coordinate(G__16575,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16616.cljs$core$IFn$_invoke$arity$2 ? pred__16616.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__16617) : pred__16616.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__16617)))){
return (new shadow.dom.Coordinate(self__.x,G__16575,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__16575),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__16575){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__16575,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__16579){
var extmap__5365__auto__ = (function (){var G__16647 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16579,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__16579)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16647);
} else {
return G__16647;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__16579),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__16579),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k16662,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__16677 = k16662;
var G__16677__$1 = (((G__16677 instanceof cljs.core.Keyword))?G__16677.fqn:null);
switch (G__16677__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16662,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__16679){
var vec__16680 = p__16679;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16680,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16680,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Size{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16661){
var self__ = this;
var G__16661__$1 = this;
return (new cljs.core.RecordIter((0),G__16661__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16663,other16664){
var self__ = this;
var this16663__$1 = this;
return (((!((other16664 == null)))) && ((((this16663__$1.constructor === other16664.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16663__$1.w,other16664.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16663__$1.h,other16664.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16663__$1.__extmap,other16664.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k16662){
var self__ = this;
var this__5330__auto____$1 = this;
var G__16717 = k16662;
var G__16717__$1 = (((G__16717 instanceof cljs.core.Keyword))?G__16717.fqn:null);
switch (G__16717__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16662);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__16661){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__16720 = cljs.core.keyword_identical_QMARK_;
var expr__16721 = k__5332__auto__;
if(cljs.core.truth_((pred__16720.cljs$core$IFn$_invoke$arity$2 ? pred__16720.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__16721) : pred__16720.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__16721)))){
return (new shadow.dom.Size(G__16661,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16720.cljs$core$IFn$_invoke$arity$2 ? pred__16720.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__16721) : pred__16720.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__16721)))){
return (new shadow.dom.Size(self__.w,G__16661,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__16661),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__16661){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__16661,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__16670){
var extmap__5365__auto__ = (function (){var G__16740 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16670,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__16670)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16740);
} else {
return G__16740;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__16670),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__16670),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5613__auto__ = opts;
var l__5614__auto__ = a__5613__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5614__auto__)){
var G__17269 = (i + (1));
var G__17270 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__17269;
ret = G__17270;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16797){
var vec__16798 = p__16797;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16798,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16798,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__16806 = arguments.length;
switch (G__16806) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__17272 = ps;
var G__17273 = (i + (1));
el__$1 = G__17272;
i = G__17273;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__16816 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16816,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16816,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16816,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__16819_17275 = cljs.core.seq(props);
var chunk__16820_17276 = null;
var count__16821_17277 = (0);
var i__16822_17278 = (0);
while(true){
if((i__16822_17278 < count__16821_17277)){
var vec__16829_17279 = chunk__16820_17276.cljs$core$IIndexed$_nth$arity$2(null,i__16822_17278);
var k_17280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16829_17279,(0),null);
var v_17281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16829_17279,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_17280);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_17280),v_17281);


var G__17283 = seq__16819_17275;
var G__17284 = chunk__16820_17276;
var G__17285 = count__16821_17277;
var G__17286 = (i__16822_17278 + (1));
seq__16819_17275 = G__17283;
chunk__16820_17276 = G__17284;
count__16821_17277 = G__17285;
i__16822_17278 = G__17286;
continue;
} else {
var temp__5823__auto___17287 = cljs.core.seq(seq__16819_17275);
if(temp__5823__auto___17287){
var seq__16819_17288__$1 = temp__5823__auto___17287;
if(cljs.core.chunked_seq_QMARK_(seq__16819_17288__$1)){
var c__5548__auto___17289 = cljs.core.chunk_first(seq__16819_17288__$1);
var G__17290 = cljs.core.chunk_rest(seq__16819_17288__$1);
var G__17291 = c__5548__auto___17289;
var G__17292 = cljs.core.count(c__5548__auto___17289);
var G__17293 = (0);
seq__16819_17275 = G__17290;
chunk__16820_17276 = G__17291;
count__16821_17277 = G__17292;
i__16822_17278 = G__17293;
continue;
} else {
var vec__16836_17294 = cljs.core.first(seq__16819_17288__$1);
var k_17295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16836_17294,(0),null);
var v_17296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16836_17294,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_17295);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_17295),v_17296);


var G__17298 = cljs.core.next(seq__16819_17288__$1);
var G__17299 = null;
var G__17300 = (0);
var G__17301 = (0);
seq__16819_17275 = G__17298;
chunk__16820_17276 = G__17299;
count__16821_17277 = G__17300;
i__16822_17278 = G__17301;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__16850 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16850,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16850,(1),null);
var seq__16853_17302 = cljs.core.seq(node_children);
var chunk__16855_17303 = null;
var count__16856_17304 = (0);
var i__16857_17305 = (0);
while(true){
if((i__16857_17305 < count__16856_17304)){
var child_struct_17306 = chunk__16855_17303.cljs$core$IIndexed$_nth$arity$2(null,i__16857_17305);
if((!((child_struct_17306 == null)))){
if(typeof child_struct_17306 === 'string'){
var text_17308 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_17308),child_struct_17306].join(''));
} else {
var children_17309 = shadow.dom.svg_node(child_struct_17306);
if(cljs.core.seq_QMARK_(children_17309)){
var seq__16876_17310 = cljs.core.seq(children_17309);
var chunk__16878_17311 = null;
var count__16879_17312 = (0);
var i__16880_17313 = (0);
while(true){
if((i__16880_17313 < count__16879_17312)){
var child_17314 = chunk__16878_17311.cljs$core$IIndexed$_nth$arity$2(null,i__16880_17313);
if(cljs.core.truth_(child_17314)){
node.appendChild(child_17314);


var G__17315 = seq__16876_17310;
var G__17316 = chunk__16878_17311;
var G__17317 = count__16879_17312;
var G__17318 = (i__16880_17313 + (1));
seq__16876_17310 = G__17315;
chunk__16878_17311 = G__17316;
count__16879_17312 = G__17317;
i__16880_17313 = G__17318;
continue;
} else {
var G__17319 = seq__16876_17310;
var G__17320 = chunk__16878_17311;
var G__17321 = count__16879_17312;
var G__17322 = (i__16880_17313 + (1));
seq__16876_17310 = G__17319;
chunk__16878_17311 = G__17320;
count__16879_17312 = G__17321;
i__16880_17313 = G__17322;
continue;
}
} else {
var temp__5823__auto___17323 = cljs.core.seq(seq__16876_17310);
if(temp__5823__auto___17323){
var seq__16876_17324__$1 = temp__5823__auto___17323;
if(cljs.core.chunked_seq_QMARK_(seq__16876_17324__$1)){
var c__5548__auto___17325 = cljs.core.chunk_first(seq__16876_17324__$1);
var G__17326 = cljs.core.chunk_rest(seq__16876_17324__$1);
var G__17327 = c__5548__auto___17325;
var G__17328 = cljs.core.count(c__5548__auto___17325);
var G__17329 = (0);
seq__16876_17310 = G__17326;
chunk__16878_17311 = G__17327;
count__16879_17312 = G__17328;
i__16880_17313 = G__17329;
continue;
} else {
var child_17330 = cljs.core.first(seq__16876_17324__$1);
if(cljs.core.truth_(child_17330)){
node.appendChild(child_17330);


var G__17331 = cljs.core.next(seq__16876_17324__$1);
var G__17332 = null;
var G__17333 = (0);
var G__17334 = (0);
seq__16876_17310 = G__17331;
chunk__16878_17311 = G__17332;
count__16879_17312 = G__17333;
i__16880_17313 = G__17334;
continue;
} else {
var G__17335 = cljs.core.next(seq__16876_17324__$1);
var G__17336 = null;
var G__17337 = (0);
var G__17338 = (0);
seq__16876_17310 = G__17335;
chunk__16878_17311 = G__17336;
count__16879_17312 = G__17337;
i__16880_17313 = G__17338;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_17309);
}
}


var G__17339 = seq__16853_17302;
var G__17340 = chunk__16855_17303;
var G__17341 = count__16856_17304;
var G__17342 = (i__16857_17305 + (1));
seq__16853_17302 = G__17339;
chunk__16855_17303 = G__17340;
count__16856_17304 = G__17341;
i__16857_17305 = G__17342;
continue;
} else {
var G__17343 = seq__16853_17302;
var G__17344 = chunk__16855_17303;
var G__17345 = count__16856_17304;
var G__17346 = (i__16857_17305 + (1));
seq__16853_17302 = G__17343;
chunk__16855_17303 = G__17344;
count__16856_17304 = G__17345;
i__16857_17305 = G__17346;
continue;
}
} else {
var temp__5823__auto___17347 = cljs.core.seq(seq__16853_17302);
if(temp__5823__auto___17347){
var seq__16853_17349__$1 = temp__5823__auto___17347;
if(cljs.core.chunked_seq_QMARK_(seq__16853_17349__$1)){
var c__5548__auto___17350 = cljs.core.chunk_first(seq__16853_17349__$1);
var G__17351 = cljs.core.chunk_rest(seq__16853_17349__$1);
var G__17352 = c__5548__auto___17350;
var G__17353 = cljs.core.count(c__5548__auto___17350);
var G__17354 = (0);
seq__16853_17302 = G__17351;
chunk__16855_17303 = G__17352;
count__16856_17304 = G__17353;
i__16857_17305 = G__17354;
continue;
} else {
var child_struct_17355 = cljs.core.first(seq__16853_17349__$1);
if((!((child_struct_17355 == null)))){
if(typeof child_struct_17355 === 'string'){
var text_17357 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_17357),child_struct_17355].join(''));
} else {
var children_17358 = shadow.dom.svg_node(child_struct_17355);
if(cljs.core.seq_QMARK_(children_17358)){
var seq__16897_17359 = cljs.core.seq(children_17358);
var chunk__16899_17360 = null;
var count__16900_17361 = (0);
var i__16901_17362 = (0);
while(true){
if((i__16901_17362 < count__16900_17361)){
var child_17363 = chunk__16899_17360.cljs$core$IIndexed$_nth$arity$2(null,i__16901_17362);
if(cljs.core.truth_(child_17363)){
node.appendChild(child_17363);


var G__17364 = seq__16897_17359;
var G__17365 = chunk__16899_17360;
var G__17366 = count__16900_17361;
var G__17367 = (i__16901_17362 + (1));
seq__16897_17359 = G__17364;
chunk__16899_17360 = G__17365;
count__16900_17361 = G__17366;
i__16901_17362 = G__17367;
continue;
} else {
var G__17368 = seq__16897_17359;
var G__17369 = chunk__16899_17360;
var G__17370 = count__16900_17361;
var G__17371 = (i__16901_17362 + (1));
seq__16897_17359 = G__17368;
chunk__16899_17360 = G__17369;
count__16900_17361 = G__17370;
i__16901_17362 = G__17371;
continue;
}
} else {
var temp__5823__auto___17372__$1 = cljs.core.seq(seq__16897_17359);
if(temp__5823__auto___17372__$1){
var seq__16897_17373__$1 = temp__5823__auto___17372__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16897_17373__$1)){
var c__5548__auto___17374 = cljs.core.chunk_first(seq__16897_17373__$1);
var G__17375 = cljs.core.chunk_rest(seq__16897_17373__$1);
var G__17376 = c__5548__auto___17374;
var G__17377 = cljs.core.count(c__5548__auto___17374);
var G__17378 = (0);
seq__16897_17359 = G__17375;
chunk__16899_17360 = G__17376;
count__16900_17361 = G__17377;
i__16901_17362 = G__17378;
continue;
} else {
var child_17379 = cljs.core.first(seq__16897_17373__$1);
if(cljs.core.truth_(child_17379)){
node.appendChild(child_17379);


var G__17380 = cljs.core.next(seq__16897_17373__$1);
var G__17381 = null;
var G__17382 = (0);
var G__17383 = (0);
seq__16897_17359 = G__17380;
chunk__16899_17360 = G__17381;
count__16900_17361 = G__17382;
i__16901_17362 = G__17383;
continue;
} else {
var G__17384 = cljs.core.next(seq__16897_17373__$1);
var G__17385 = null;
var G__17386 = (0);
var G__17387 = (0);
seq__16897_17359 = G__17384;
chunk__16899_17360 = G__17385;
count__16900_17361 = G__17386;
i__16901_17362 = G__17387;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_17358);
}
}


var G__17388 = cljs.core.next(seq__16853_17349__$1);
var G__17389 = null;
var G__17390 = (0);
var G__17391 = (0);
seq__16853_17302 = G__17388;
chunk__16855_17303 = G__17389;
count__16856_17304 = G__17390;
i__16857_17305 = G__17391;
continue;
} else {
var G__17393 = cljs.core.next(seq__16853_17349__$1);
var G__17394 = null;
var G__17395 = (0);
var G__17396 = (0);
seq__16853_17302 = G__17393;
chunk__16855_17303 = G__17394;
count__16856_17304 = G__17395;
i__16857_17305 = G__17396;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___17405 = arguments.length;
var i__5750__auto___17406 = (0);
while(true){
if((i__5750__auto___17406 < len__5749__auto___17405)){
args__5755__auto__.push((arguments[i__5750__auto___17406]));

var G__17407 = (i__5750__auto___17406 + (1));
i__5750__auto___17406 = G__17407;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq16919){
var G__16920 = cljs.core.first(seq16919);
var seq16919__$1 = cljs.core.next(seq16919);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16920,seq16919__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
