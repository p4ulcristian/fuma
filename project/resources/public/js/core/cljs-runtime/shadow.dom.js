goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_17041 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_17041(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_17042 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_17042(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__15853 = coll;
var G__15854 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__15853,G__15854) : shadow.dom.lazy_native_coll_seq.call(null,G__15853,G__15854));
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
var G__15877 = arguments.length;
switch (G__15877) {
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
var G__15879 = arguments.length;
switch (G__15879) {
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
var G__15881 = arguments.length;
switch (G__15881) {
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
var G__15886 = arguments.length;
switch (G__15886) {
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
var G__15905 = arguments.length;
switch (G__15905) {
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
var G__15922 = arguments.length;
switch (G__15922) {
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
}catch (e15940){if((e15940 instanceof Object)){
var e = e15940;
return console.log("didnt support attachEvent",el,e);
} else {
throw e15940;

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
var seq__15968 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__15969 = null;
var count__15970 = (0);
var i__15971 = (0);
while(true){
if((i__15971 < count__15970)){
var el = chunk__15969.cljs$core$IIndexed$_nth$arity$2(null,i__15971);
var handler_17062__$1 = ((function (seq__15968,chunk__15969,count__15970,i__15971,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__15968,chunk__15969,count__15970,i__15971,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_17062__$1);


var G__17064 = seq__15968;
var G__17065 = chunk__15969;
var G__17066 = count__15970;
var G__17067 = (i__15971 + (1));
seq__15968 = G__17064;
chunk__15969 = G__17065;
count__15970 = G__17066;
i__15971 = G__17067;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__15968);
if(temp__5823__auto__){
var seq__15968__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15968__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__15968__$1);
var G__17069 = cljs.core.chunk_rest(seq__15968__$1);
var G__17070 = c__5548__auto__;
var G__17071 = cljs.core.count(c__5548__auto__);
var G__17072 = (0);
seq__15968 = G__17069;
chunk__15969 = G__17070;
count__15970 = G__17071;
i__15971 = G__17072;
continue;
} else {
var el = cljs.core.first(seq__15968__$1);
var handler_17077__$1 = ((function (seq__15968,chunk__15969,count__15970,i__15971,el,seq__15968__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__15968,chunk__15969,count__15970,i__15971,el,seq__15968__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_17077__$1);


var G__17081 = cljs.core.next(seq__15968__$1);
var G__17082 = null;
var G__17083 = (0);
var G__17084 = (0);
seq__15968 = G__17081;
chunk__15969 = G__17082;
count__15970 = G__17083;
i__15971 = G__17084;
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
var G__16026 = arguments.length;
switch (G__16026) {
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
var seq__16038 = cljs.core.seq(events);
var chunk__16039 = null;
var count__16040 = (0);
var i__16041 = (0);
while(true){
if((i__16041 < count__16040)){
var vec__16048 = chunk__16039.cljs$core$IIndexed$_nth$arity$2(null,i__16041);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16048,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16048,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__17086 = seq__16038;
var G__17087 = chunk__16039;
var G__17088 = count__16040;
var G__17089 = (i__16041 + (1));
seq__16038 = G__17086;
chunk__16039 = G__17087;
count__16040 = G__17088;
i__16041 = G__17089;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16038);
if(temp__5823__auto__){
var seq__16038__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16038__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__16038__$1);
var G__17090 = cljs.core.chunk_rest(seq__16038__$1);
var G__17091 = c__5548__auto__;
var G__17092 = cljs.core.count(c__5548__auto__);
var G__17093 = (0);
seq__16038 = G__17090;
chunk__16039 = G__17091;
count__16040 = G__17092;
i__16041 = G__17093;
continue;
} else {
var vec__16051 = cljs.core.first(seq__16038__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16051,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16051,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__17094 = cljs.core.next(seq__16038__$1);
var G__17095 = null;
var G__17096 = (0);
var G__17097 = (0);
seq__16038 = G__17094;
chunk__16039 = G__17095;
count__16040 = G__17096;
i__16041 = G__17097;
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
var seq__16057 = cljs.core.seq(styles);
var chunk__16058 = null;
var count__16059 = (0);
var i__16060 = (0);
while(true){
if((i__16060 < count__16059)){
var vec__16078 = chunk__16058.cljs$core$IIndexed$_nth$arity$2(null,i__16060);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16078,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16078,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__17098 = seq__16057;
var G__17099 = chunk__16058;
var G__17100 = count__16059;
var G__17101 = (i__16060 + (1));
seq__16057 = G__17098;
chunk__16058 = G__17099;
count__16059 = G__17100;
i__16060 = G__17101;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16057);
if(temp__5823__auto__){
var seq__16057__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16057__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__16057__$1);
var G__17102 = cljs.core.chunk_rest(seq__16057__$1);
var G__17103 = c__5548__auto__;
var G__17104 = cljs.core.count(c__5548__auto__);
var G__17105 = (0);
seq__16057 = G__17102;
chunk__16058 = G__17103;
count__16059 = G__17104;
i__16060 = G__17105;
continue;
} else {
var vec__16093 = cljs.core.first(seq__16057__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16093,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16093,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__17106 = cljs.core.next(seq__16057__$1);
var G__17107 = null;
var G__17108 = (0);
var G__17109 = (0);
seq__16057 = G__17106;
chunk__16058 = G__17107;
count__16059 = G__17108;
i__16060 = G__17109;
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
var G__16096_17110 = key;
var G__16096_17111__$1 = (((G__16096_17110 instanceof cljs.core.Keyword))?G__16096_17110.fqn:null);
switch (G__16096_17111__$1) {
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
var ks_17119 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_17119,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_17119,"aria-");
}
})())){
el.setAttribute(ks_17119,value);
} else {
(el[ks_17119] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__16145){
var map__16147 = p__16145;
var map__16147__$1 = cljs.core.__destructure_map(map__16147);
var props = map__16147__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16147__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__16151 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16151,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16151,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16151,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__16157 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__16157,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__16157;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__16174 = arguments.length;
switch (G__16174) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__16183){
var vec__16187 = p__16183;
var seq__16188 = cljs.core.seq(vec__16187);
var first__16189 = cljs.core.first(seq__16188);
var seq__16188__$1 = cljs.core.next(seq__16188);
var nn = first__16189;
var first__16189__$1 = cljs.core.first(seq__16188__$1);
var seq__16188__$2 = cljs.core.next(seq__16188__$1);
var np = first__16189__$1;
var nc = seq__16188__$2;
var node = vec__16187;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16194 = nn;
var G__16195 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__16194,G__16195) : create_fn.call(null,G__16194,G__16195));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16196 = nn;
var G__16197 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__16196,G__16197) : create_fn.call(null,G__16196,G__16197));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__16213 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16213,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16213,(1),null);
var seq__16216_17133 = cljs.core.seq(node_children);
var chunk__16217_17134 = null;
var count__16218_17135 = (0);
var i__16219_17136 = (0);
while(true){
if((i__16219_17136 < count__16218_17135)){
var child_struct_17137 = chunk__16217_17134.cljs$core$IIndexed$_nth$arity$2(null,i__16219_17136);
var children_17138 = shadow.dom.dom_node(child_struct_17137);
if(cljs.core.seq_QMARK_(children_17138)){
var seq__16266_17140 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_17138));
var chunk__16268_17141 = null;
var count__16269_17142 = (0);
var i__16270_17143 = (0);
while(true){
if((i__16270_17143 < count__16269_17142)){
var child_17144 = chunk__16268_17141.cljs$core$IIndexed$_nth$arity$2(null,i__16270_17143);
if(cljs.core.truth_(child_17144)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_17144);


var G__17145 = seq__16266_17140;
var G__17146 = chunk__16268_17141;
var G__17147 = count__16269_17142;
var G__17148 = (i__16270_17143 + (1));
seq__16266_17140 = G__17145;
chunk__16268_17141 = G__17146;
count__16269_17142 = G__17147;
i__16270_17143 = G__17148;
continue;
} else {
var G__17149 = seq__16266_17140;
var G__17150 = chunk__16268_17141;
var G__17151 = count__16269_17142;
var G__17152 = (i__16270_17143 + (1));
seq__16266_17140 = G__17149;
chunk__16268_17141 = G__17150;
count__16269_17142 = G__17151;
i__16270_17143 = G__17152;
continue;
}
} else {
var temp__5823__auto___17153 = cljs.core.seq(seq__16266_17140);
if(temp__5823__auto___17153){
var seq__16266_17154__$1 = temp__5823__auto___17153;
if(cljs.core.chunked_seq_QMARK_(seq__16266_17154__$1)){
var c__5548__auto___17155 = cljs.core.chunk_first(seq__16266_17154__$1);
var G__17156 = cljs.core.chunk_rest(seq__16266_17154__$1);
var G__17157 = c__5548__auto___17155;
var G__17158 = cljs.core.count(c__5548__auto___17155);
var G__17159 = (0);
seq__16266_17140 = G__17156;
chunk__16268_17141 = G__17157;
count__16269_17142 = G__17158;
i__16270_17143 = G__17159;
continue;
} else {
var child_17160 = cljs.core.first(seq__16266_17154__$1);
if(cljs.core.truth_(child_17160)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_17160);


var G__17161 = cljs.core.next(seq__16266_17154__$1);
var G__17162 = null;
var G__17163 = (0);
var G__17164 = (0);
seq__16266_17140 = G__17161;
chunk__16268_17141 = G__17162;
count__16269_17142 = G__17163;
i__16270_17143 = G__17164;
continue;
} else {
var G__17165 = cljs.core.next(seq__16266_17154__$1);
var G__17166 = null;
var G__17167 = (0);
var G__17168 = (0);
seq__16266_17140 = G__17165;
chunk__16268_17141 = G__17166;
count__16269_17142 = G__17167;
i__16270_17143 = G__17168;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_17138);
}


var G__17169 = seq__16216_17133;
var G__17170 = chunk__16217_17134;
var G__17171 = count__16218_17135;
var G__17172 = (i__16219_17136 + (1));
seq__16216_17133 = G__17169;
chunk__16217_17134 = G__17170;
count__16218_17135 = G__17171;
i__16219_17136 = G__17172;
continue;
} else {
var temp__5823__auto___17173 = cljs.core.seq(seq__16216_17133);
if(temp__5823__auto___17173){
var seq__16216_17174__$1 = temp__5823__auto___17173;
if(cljs.core.chunked_seq_QMARK_(seq__16216_17174__$1)){
var c__5548__auto___17175 = cljs.core.chunk_first(seq__16216_17174__$1);
var G__17176 = cljs.core.chunk_rest(seq__16216_17174__$1);
var G__17177 = c__5548__auto___17175;
var G__17178 = cljs.core.count(c__5548__auto___17175);
var G__17179 = (0);
seq__16216_17133 = G__17176;
chunk__16217_17134 = G__17177;
count__16218_17135 = G__17178;
i__16219_17136 = G__17179;
continue;
} else {
var child_struct_17180 = cljs.core.first(seq__16216_17174__$1);
var children_17181 = shadow.dom.dom_node(child_struct_17180);
if(cljs.core.seq_QMARK_(children_17181)){
var seq__16363_17182 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_17181));
var chunk__16365_17183 = null;
var count__16366_17184 = (0);
var i__16367_17185 = (0);
while(true){
if((i__16367_17185 < count__16366_17184)){
var child_17186 = chunk__16365_17183.cljs$core$IIndexed$_nth$arity$2(null,i__16367_17185);
if(cljs.core.truth_(child_17186)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_17186);


var G__17187 = seq__16363_17182;
var G__17188 = chunk__16365_17183;
var G__17189 = count__16366_17184;
var G__17190 = (i__16367_17185 + (1));
seq__16363_17182 = G__17187;
chunk__16365_17183 = G__17188;
count__16366_17184 = G__17189;
i__16367_17185 = G__17190;
continue;
} else {
var G__17191 = seq__16363_17182;
var G__17192 = chunk__16365_17183;
var G__17193 = count__16366_17184;
var G__17194 = (i__16367_17185 + (1));
seq__16363_17182 = G__17191;
chunk__16365_17183 = G__17192;
count__16366_17184 = G__17193;
i__16367_17185 = G__17194;
continue;
}
} else {
var temp__5823__auto___17195__$1 = cljs.core.seq(seq__16363_17182);
if(temp__5823__auto___17195__$1){
var seq__16363_17196__$1 = temp__5823__auto___17195__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16363_17196__$1)){
var c__5548__auto___17197 = cljs.core.chunk_first(seq__16363_17196__$1);
var G__17198 = cljs.core.chunk_rest(seq__16363_17196__$1);
var G__17199 = c__5548__auto___17197;
var G__17200 = cljs.core.count(c__5548__auto___17197);
var G__17201 = (0);
seq__16363_17182 = G__17198;
chunk__16365_17183 = G__17199;
count__16366_17184 = G__17200;
i__16367_17185 = G__17201;
continue;
} else {
var child_17202 = cljs.core.first(seq__16363_17196__$1);
if(cljs.core.truth_(child_17202)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_17202);


var G__17203 = cljs.core.next(seq__16363_17196__$1);
var G__17204 = null;
var G__17205 = (0);
var G__17206 = (0);
seq__16363_17182 = G__17203;
chunk__16365_17183 = G__17204;
count__16366_17184 = G__17205;
i__16367_17185 = G__17206;
continue;
} else {
var G__17207 = cljs.core.next(seq__16363_17196__$1);
var G__17208 = null;
var G__17209 = (0);
var G__17210 = (0);
seq__16363_17182 = G__17207;
chunk__16365_17183 = G__17208;
count__16366_17184 = G__17209;
i__16367_17185 = G__17210;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_17181);
}


var G__17211 = cljs.core.next(seq__16216_17174__$1);
var G__17212 = null;
var G__17213 = (0);
var G__17214 = (0);
seq__16216_17133 = G__17211;
chunk__16217_17134 = G__17212;
count__16218_17135 = G__17213;
i__16219_17136 = G__17214;
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
var seq__16433 = cljs.core.seq(node);
var chunk__16434 = null;
var count__16435 = (0);
var i__16436 = (0);
while(true){
if((i__16436 < count__16435)){
var n = chunk__16434.cljs$core$IIndexed$_nth$arity$2(null,i__16436);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__17244 = seq__16433;
var G__17245 = chunk__16434;
var G__17246 = count__16435;
var G__17247 = (i__16436 + (1));
seq__16433 = G__17244;
chunk__16434 = G__17245;
count__16435 = G__17246;
i__16436 = G__17247;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16433);
if(temp__5823__auto__){
var seq__16433__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16433__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__16433__$1);
var G__17248 = cljs.core.chunk_rest(seq__16433__$1);
var G__17249 = c__5548__auto__;
var G__17250 = cljs.core.count(c__5548__auto__);
var G__17251 = (0);
seq__16433 = G__17248;
chunk__16434 = G__17249;
count__16435 = G__17250;
i__16436 = G__17251;
continue;
} else {
var n = cljs.core.first(seq__16433__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__17252 = cljs.core.next(seq__16433__$1);
var G__17253 = null;
var G__17254 = (0);
var G__17255 = (0);
seq__16433 = G__17252;
chunk__16434 = G__17253;
count__16435 = G__17254;
i__16436 = G__17255;
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
var G__16455 = arguments.length;
switch (G__16455) {
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
var G__16467 = arguments.length;
switch (G__16467) {
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
var G__16504 = arguments.length;
switch (G__16504) {
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
var len__5749__auto___17270 = arguments.length;
var i__5750__auto___17271 = (0);
while(true){
if((i__5750__auto___17271 < len__5749__auto___17270)){
args__5755__auto__.push((arguments[i__5750__auto___17271]));

var G__17272 = (i__5750__auto___17271 + (1));
i__5750__auto___17271 = G__17272;
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
var seq__16558_17273 = cljs.core.seq(nodes);
var chunk__16559_17274 = null;
var count__16560_17275 = (0);
var i__16561_17276 = (0);
while(true){
if((i__16561_17276 < count__16560_17275)){
var node_17277 = chunk__16559_17274.cljs$core$IIndexed$_nth$arity$2(null,i__16561_17276);
fragment.appendChild(shadow.dom._to_dom(node_17277));


var G__17278 = seq__16558_17273;
var G__17279 = chunk__16559_17274;
var G__17280 = count__16560_17275;
var G__17281 = (i__16561_17276 + (1));
seq__16558_17273 = G__17278;
chunk__16559_17274 = G__17279;
count__16560_17275 = G__17280;
i__16561_17276 = G__17281;
continue;
} else {
var temp__5823__auto___17282 = cljs.core.seq(seq__16558_17273);
if(temp__5823__auto___17282){
var seq__16558_17283__$1 = temp__5823__auto___17282;
if(cljs.core.chunked_seq_QMARK_(seq__16558_17283__$1)){
var c__5548__auto___17284 = cljs.core.chunk_first(seq__16558_17283__$1);
var G__17285 = cljs.core.chunk_rest(seq__16558_17283__$1);
var G__17286 = c__5548__auto___17284;
var G__17287 = cljs.core.count(c__5548__auto___17284);
var G__17288 = (0);
seq__16558_17273 = G__17285;
chunk__16559_17274 = G__17286;
count__16560_17275 = G__17287;
i__16561_17276 = G__17288;
continue;
} else {
var node_17289 = cljs.core.first(seq__16558_17283__$1);
fragment.appendChild(shadow.dom._to_dom(node_17289));


var G__17290 = cljs.core.next(seq__16558_17283__$1);
var G__17291 = null;
var G__17292 = (0);
var G__17293 = (0);
seq__16558_17273 = G__17290;
chunk__16559_17274 = G__17291;
count__16560_17275 = G__17292;
i__16561_17276 = G__17293;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq16543){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16543));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__16609_17294 = cljs.core.seq(scripts);
var chunk__16610_17295 = null;
var count__16611_17296 = (0);
var i__16612_17297 = (0);
while(true){
if((i__16612_17297 < count__16611_17296)){
var vec__16626_17298 = chunk__16610_17295.cljs$core$IIndexed$_nth$arity$2(null,i__16612_17297);
var script_tag_17299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16626_17298,(0),null);
var script_body_17300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16626_17298,(1),null);
eval(script_body_17300);


var G__17301 = seq__16609_17294;
var G__17302 = chunk__16610_17295;
var G__17303 = count__16611_17296;
var G__17304 = (i__16612_17297 + (1));
seq__16609_17294 = G__17301;
chunk__16610_17295 = G__17302;
count__16611_17296 = G__17303;
i__16612_17297 = G__17304;
continue;
} else {
var temp__5823__auto___17305 = cljs.core.seq(seq__16609_17294);
if(temp__5823__auto___17305){
var seq__16609_17306__$1 = temp__5823__auto___17305;
if(cljs.core.chunked_seq_QMARK_(seq__16609_17306__$1)){
var c__5548__auto___17307 = cljs.core.chunk_first(seq__16609_17306__$1);
var G__17308 = cljs.core.chunk_rest(seq__16609_17306__$1);
var G__17309 = c__5548__auto___17307;
var G__17310 = cljs.core.count(c__5548__auto___17307);
var G__17311 = (0);
seq__16609_17294 = G__17308;
chunk__16610_17295 = G__17309;
count__16611_17296 = G__17310;
i__16612_17297 = G__17311;
continue;
} else {
var vec__16630_17312 = cljs.core.first(seq__16609_17306__$1);
var script_tag_17313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16630_17312,(0),null);
var script_body_17314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16630_17312,(1),null);
eval(script_body_17314);


var G__17315 = cljs.core.next(seq__16609_17306__$1);
var G__17316 = null;
var G__17317 = (0);
var G__17318 = (0);
seq__16609_17294 = G__17315;
chunk__16610_17295 = G__17316;
count__16611_17296 = G__17317;
i__16612_17297 = G__17318;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__16637){
var vec__16638 = p__16637;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16638,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16638,(1),null);
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
var G__16650 = arguments.length;
switch (G__16650) {
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
var seq__16673 = cljs.core.seq(style_keys);
var chunk__16674 = null;
var count__16675 = (0);
var i__16676 = (0);
while(true){
if((i__16676 < count__16675)){
var it = chunk__16674.cljs$core$IIndexed$_nth$arity$2(null,i__16676);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__17324 = seq__16673;
var G__17325 = chunk__16674;
var G__17326 = count__16675;
var G__17327 = (i__16676 + (1));
seq__16673 = G__17324;
chunk__16674 = G__17325;
count__16675 = G__17326;
i__16676 = G__17327;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16673);
if(temp__5823__auto__){
var seq__16673__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16673__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__16673__$1);
var G__17328 = cljs.core.chunk_rest(seq__16673__$1);
var G__17329 = c__5548__auto__;
var G__17330 = cljs.core.count(c__5548__auto__);
var G__17331 = (0);
seq__16673 = G__17328;
chunk__16674 = G__17329;
count__16675 = G__17330;
i__16676 = G__17331;
continue;
} else {
var it = cljs.core.first(seq__16673__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__17332 = cljs.core.next(seq__16673__$1);
var G__17333 = null;
var G__17334 = (0);
var G__17335 = (0);
seq__16673 = G__17332;
chunk__16674 = G__17333;
count__16675 = G__17334;
i__16676 = G__17335;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k16690,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__16705 = k16690;
var G__16705__$1 = (((G__16705 instanceof cljs.core.Keyword))?G__16705.fqn:null);
switch (G__16705__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16690,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__16710){
var vec__16712 = p__16710;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16712,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16712,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16689){
var self__ = this;
var G__16689__$1 = this;
return (new cljs.core.RecordIter((0),G__16689__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16691,other16692){
var self__ = this;
var this16691__$1 = this;
return (((!((other16692 == null)))) && ((((this16691__$1.constructor === other16692.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16691__$1.x,other16692.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16691__$1.y,other16692.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16691__$1.__extmap,other16692.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k16690){
var self__ = this;
var this__5330__auto____$1 = this;
var G__16766 = k16690;
var G__16766__$1 = (((G__16766 instanceof cljs.core.Keyword))?G__16766.fqn:null);
switch (G__16766__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16690);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__16689){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__16771 = cljs.core.keyword_identical_QMARK_;
var expr__16772 = k__5332__auto__;
if(cljs.core.truth_((pred__16771.cljs$core$IFn$_invoke$arity$2 ? pred__16771.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__16772) : pred__16771.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__16772)))){
return (new shadow.dom.Coordinate(G__16689,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16771.cljs$core$IFn$_invoke$arity$2 ? pred__16771.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__16772) : pred__16771.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__16772)))){
return (new shadow.dom.Coordinate(self__.x,G__16689,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__16689),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__16689){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__16689,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__16693){
var extmap__5365__auto__ = (function (){var G__16823 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16693,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__16693)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16823);
} else {
return G__16823;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__16693),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__16693),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k16838,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__16862 = k16838;
var G__16862__$1 = (((G__16862 instanceof cljs.core.Keyword))?G__16862.fqn:null);
switch (G__16862__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16838,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__16874){
var vec__16875 = p__16874;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16875,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16875,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16837){
var self__ = this;
var G__16837__$1 = this;
return (new cljs.core.RecordIter((0),G__16837__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16839,other16840){
var self__ = this;
var this16839__$1 = this;
return (((!((other16840 == null)))) && ((((this16839__$1.constructor === other16840.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16839__$1.w,other16840.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16839__$1.h,other16840.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16839__$1.__extmap,other16840.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k16838){
var self__ = this;
var this__5330__auto____$1 = this;
var G__16888 = k16838;
var G__16888__$1 = (((G__16888 instanceof cljs.core.Keyword))?G__16888.fqn:null);
switch (G__16888__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16838);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__16837){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__16896 = cljs.core.keyword_identical_QMARK_;
var expr__16897 = k__5332__auto__;
if(cljs.core.truth_((pred__16896.cljs$core$IFn$_invoke$arity$2 ? pred__16896.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__16897) : pred__16896.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__16897)))){
return (new shadow.dom.Size(G__16837,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16896.cljs$core$IFn$_invoke$arity$2 ? pred__16896.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__16897) : pred__16896.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__16897)))){
return (new shadow.dom.Size(self__.w,G__16837,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__16837),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__16837){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__16837,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__16846){
var extmap__5365__auto__ = (function (){var G__16900 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16846,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__16846)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16900);
} else {
return G__16900;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__16846),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__16846),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__17342 = (i + (1));
var G__17343 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__17342;
ret = G__17343;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16918){
var vec__16919 = p__16918;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16919,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16919,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__16924 = arguments.length;
switch (G__16924) {
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
var G__17345 = ps;
var G__17346 = (i + (1));
el__$1 = G__17345;
i = G__17346;
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
var vec__16951 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16951,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16951,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16951,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__16955_17347 = cljs.core.seq(props);
var chunk__16956_17348 = null;
var count__16957_17349 = (0);
var i__16958_17350 = (0);
while(true){
if((i__16958_17350 < count__16957_17349)){
var vec__16975_17351 = chunk__16956_17348.cljs$core$IIndexed$_nth$arity$2(null,i__16958_17350);
var k_17352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16975_17351,(0),null);
var v_17353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16975_17351,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_17352);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_17352),v_17353);


var G__17354 = seq__16955_17347;
var G__17355 = chunk__16956_17348;
var G__17356 = count__16957_17349;
var G__17357 = (i__16958_17350 + (1));
seq__16955_17347 = G__17354;
chunk__16956_17348 = G__17355;
count__16957_17349 = G__17356;
i__16958_17350 = G__17357;
continue;
} else {
var temp__5823__auto___17358 = cljs.core.seq(seq__16955_17347);
if(temp__5823__auto___17358){
var seq__16955_17359__$1 = temp__5823__auto___17358;
if(cljs.core.chunked_seq_QMARK_(seq__16955_17359__$1)){
var c__5548__auto___17360 = cljs.core.chunk_first(seq__16955_17359__$1);
var G__17361 = cljs.core.chunk_rest(seq__16955_17359__$1);
var G__17362 = c__5548__auto___17360;
var G__17363 = cljs.core.count(c__5548__auto___17360);
var G__17364 = (0);
seq__16955_17347 = G__17361;
chunk__16956_17348 = G__17362;
count__16957_17349 = G__17363;
i__16958_17350 = G__17364;
continue;
} else {
var vec__16979_17365 = cljs.core.first(seq__16955_17359__$1);
var k_17366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16979_17365,(0),null);
var v_17367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16979_17365,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_17366);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_17366),v_17367);


var G__17368 = cljs.core.next(seq__16955_17359__$1);
var G__17369 = null;
var G__17370 = (0);
var G__17371 = (0);
seq__16955_17347 = G__17368;
chunk__16956_17348 = G__17369;
count__16957_17349 = G__17370;
i__16958_17350 = G__17371;
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
var vec__16987 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16987,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16987,(1),null);
var seq__16990_17372 = cljs.core.seq(node_children);
var chunk__16992_17373 = null;
var count__16993_17374 = (0);
var i__16994_17375 = (0);
while(true){
if((i__16994_17375 < count__16993_17374)){
var child_struct_17376 = chunk__16992_17373.cljs$core$IIndexed$_nth$arity$2(null,i__16994_17375);
if((!((child_struct_17376 == null)))){
if(typeof child_struct_17376 === 'string'){
var text_17377 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_17377),child_struct_17376].join(''));
} else {
var children_17378 = shadow.dom.svg_node(child_struct_17376);
if(cljs.core.seq_QMARK_(children_17378)){
var seq__17012_17379 = cljs.core.seq(children_17378);
var chunk__17014_17380 = null;
var count__17015_17381 = (0);
var i__17016_17382 = (0);
while(true){
if((i__17016_17382 < count__17015_17381)){
var child_17383 = chunk__17014_17380.cljs$core$IIndexed$_nth$arity$2(null,i__17016_17382);
if(cljs.core.truth_(child_17383)){
node.appendChild(child_17383);


var G__17384 = seq__17012_17379;
var G__17385 = chunk__17014_17380;
var G__17386 = count__17015_17381;
var G__17387 = (i__17016_17382 + (1));
seq__17012_17379 = G__17384;
chunk__17014_17380 = G__17385;
count__17015_17381 = G__17386;
i__17016_17382 = G__17387;
continue;
} else {
var G__17388 = seq__17012_17379;
var G__17389 = chunk__17014_17380;
var G__17390 = count__17015_17381;
var G__17391 = (i__17016_17382 + (1));
seq__17012_17379 = G__17388;
chunk__17014_17380 = G__17389;
count__17015_17381 = G__17390;
i__17016_17382 = G__17391;
continue;
}
} else {
var temp__5823__auto___17392 = cljs.core.seq(seq__17012_17379);
if(temp__5823__auto___17392){
var seq__17012_17393__$1 = temp__5823__auto___17392;
if(cljs.core.chunked_seq_QMARK_(seq__17012_17393__$1)){
var c__5548__auto___17394 = cljs.core.chunk_first(seq__17012_17393__$1);
var G__17395 = cljs.core.chunk_rest(seq__17012_17393__$1);
var G__17396 = c__5548__auto___17394;
var G__17397 = cljs.core.count(c__5548__auto___17394);
var G__17398 = (0);
seq__17012_17379 = G__17395;
chunk__17014_17380 = G__17396;
count__17015_17381 = G__17397;
i__17016_17382 = G__17398;
continue;
} else {
var child_17399 = cljs.core.first(seq__17012_17393__$1);
if(cljs.core.truth_(child_17399)){
node.appendChild(child_17399);


var G__17400 = cljs.core.next(seq__17012_17393__$1);
var G__17401 = null;
var G__17402 = (0);
var G__17403 = (0);
seq__17012_17379 = G__17400;
chunk__17014_17380 = G__17401;
count__17015_17381 = G__17402;
i__17016_17382 = G__17403;
continue;
} else {
var G__17404 = cljs.core.next(seq__17012_17393__$1);
var G__17405 = null;
var G__17406 = (0);
var G__17407 = (0);
seq__17012_17379 = G__17404;
chunk__17014_17380 = G__17405;
count__17015_17381 = G__17406;
i__17016_17382 = G__17407;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_17378);
}
}


var G__17408 = seq__16990_17372;
var G__17409 = chunk__16992_17373;
var G__17410 = count__16993_17374;
var G__17411 = (i__16994_17375 + (1));
seq__16990_17372 = G__17408;
chunk__16992_17373 = G__17409;
count__16993_17374 = G__17410;
i__16994_17375 = G__17411;
continue;
} else {
var G__17412 = seq__16990_17372;
var G__17413 = chunk__16992_17373;
var G__17414 = count__16993_17374;
var G__17415 = (i__16994_17375 + (1));
seq__16990_17372 = G__17412;
chunk__16992_17373 = G__17413;
count__16993_17374 = G__17414;
i__16994_17375 = G__17415;
continue;
}
} else {
var temp__5823__auto___17416 = cljs.core.seq(seq__16990_17372);
if(temp__5823__auto___17416){
var seq__16990_17417__$1 = temp__5823__auto___17416;
if(cljs.core.chunked_seq_QMARK_(seq__16990_17417__$1)){
var c__5548__auto___17418 = cljs.core.chunk_first(seq__16990_17417__$1);
var G__17419 = cljs.core.chunk_rest(seq__16990_17417__$1);
var G__17420 = c__5548__auto___17418;
var G__17421 = cljs.core.count(c__5548__auto___17418);
var G__17422 = (0);
seq__16990_17372 = G__17419;
chunk__16992_17373 = G__17420;
count__16993_17374 = G__17421;
i__16994_17375 = G__17422;
continue;
} else {
var child_struct_17423 = cljs.core.first(seq__16990_17417__$1);
if((!((child_struct_17423 == null)))){
if(typeof child_struct_17423 === 'string'){
var text_17424 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_17424),child_struct_17423].join(''));
} else {
var children_17425 = shadow.dom.svg_node(child_struct_17423);
if(cljs.core.seq_QMARK_(children_17425)){
var seq__17018_17426 = cljs.core.seq(children_17425);
var chunk__17020_17427 = null;
var count__17021_17428 = (0);
var i__17022_17429 = (0);
while(true){
if((i__17022_17429 < count__17021_17428)){
var child_17430 = chunk__17020_17427.cljs$core$IIndexed$_nth$arity$2(null,i__17022_17429);
if(cljs.core.truth_(child_17430)){
node.appendChild(child_17430);


var G__17431 = seq__17018_17426;
var G__17432 = chunk__17020_17427;
var G__17433 = count__17021_17428;
var G__17434 = (i__17022_17429 + (1));
seq__17018_17426 = G__17431;
chunk__17020_17427 = G__17432;
count__17021_17428 = G__17433;
i__17022_17429 = G__17434;
continue;
} else {
var G__17435 = seq__17018_17426;
var G__17436 = chunk__17020_17427;
var G__17437 = count__17021_17428;
var G__17438 = (i__17022_17429 + (1));
seq__17018_17426 = G__17435;
chunk__17020_17427 = G__17436;
count__17021_17428 = G__17437;
i__17022_17429 = G__17438;
continue;
}
} else {
var temp__5823__auto___17439__$1 = cljs.core.seq(seq__17018_17426);
if(temp__5823__auto___17439__$1){
var seq__17018_17440__$1 = temp__5823__auto___17439__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17018_17440__$1)){
var c__5548__auto___17441 = cljs.core.chunk_first(seq__17018_17440__$1);
var G__17442 = cljs.core.chunk_rest(seq__17018_17440__$1);
var G__17443 = c__5548__auto___17441;
var G__17444 = cljs.core.count(c__5548__auto___17441);
var G__17445 = (0);
seq__17018_17426 = G__17442;
chunk__17020_17427 = G__17443;
count__17021_17428 = G__17444;
i__17022_17429 = G__17445;
continue;
} else {
var child_17446 = cljs.core.first(seq__17018_17440__$1);
if(cljs.core.truth_(child_17446)){
node.appendChild(child_17446);


var G__17447 = cljs.core.next(seq__17018_17440__$1);
var G__17448 = null;
var G__17449 = (0);
var G__17450 = (0);
seq__17018_17426 = G__17447;
chunk__17020_17427 = G__17448;
count__17021_17428 = G__17449;
i__17022_17429 = G__17450;
continue;
} else {
var G__17451 = cljs.core.next(seq__17018_17440__$1);
var G__17452 = null;
var G__17453 = (0);
var G__17454 = (0);
seq__17018_17426 = G__17451;
chunk__17020_17427 = G__17452;
count__17021_17428 = G__17453;
i__17022_17429 = G__17454;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_17425);
}
}


var G__17455 = cljs.core.next(seq__16990_17417__$1);
var G__17456 = null;
var G__17457 = (0);
var G__17458 = (0);
seq__16990_17372 = G__17455;
chunk__16992_17373 = G__17456;
count__16993_17374 = G__17457;
i__16994_17375 = G__17458;
continue;
} else {
var G__17459 = cljs.core.next(seq__16990_17417__$1);
var G__17460 = null;
var G__17461 = (0);
var G__17462 = (0);
seq__16990_17372 = G__17459;
chunk__16992_17373 = G__17460;
count__16993_17374 = G__17461;
i__16994_17375 = G__17462;
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
var len__5749__auto___17463 = arguments.length;
var i__5750__auto___17464 = (0);
while(true){
if((i__5750__auto___17464 < len__5749__auto___17463)){
args__5755__auto__.push((arguments[i__5750__auto___17464]));

var G__17465 = (i__5750__auto___17464 + (1));
i__5750__auto___17464 = G__17465;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq17028){
var G__17029 = cljs.core.first(seq17028);
var seq17028__$1 = cljs.core.next(seq17028);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17029,seq17028__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
