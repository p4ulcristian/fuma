goog.provide('shadow.cljs.devtools.client.console');
shadow.cljs.devtools.client.console.push_all = (function shadow$cljs$devtools$client$console$push_all(arr,item){
if(cljs.core.vector_QMARK_(item)){
var seq__16079 = cljs.core.seq(item);
var chunk__16080 = null;
var count__16081 = (0);
var i__16082 = (0);
while(true){
if((i__16082 < count__16081)){
var it = chunk__16080.cljs$core$IIndexed$_nth$arity$2(null,i__16082);
arr.push(it);


var G__16178 = seq__16079;
var G__16179 = chunk__16080;
var G__16180 = count__16081;
var G__16181 = (i__16082 + (1));
seq__16079 = G__16178;
chunk__16080 = G__16179;
count__16081 = G__16180;
i__16082 = G__16181;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16079);
if(temp__5823__auto__){
var seq__16079__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16079__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__16079__$1);
var G__16182 = cljs.core.chunk_rest(seq__16079__$1);
var G__16183 = c__5548__auto__;
var G__16184 = cljs.core.count(c__5548__auto__);
var G__16185 = (0);
seq__16079 = G__16182;
chunk__16080 = G__16183;
count__16081 = G__16184;
i__16082 = G__16185;
continue;
} else {
var it = cljs.core.first(seq__16079__$1);
arr.push(it);


var G__16188 = cljs.core.next(seq__16079__$1);
var G__16189 = null;
var G__16190 = (0);
var G__16191 = (0);
seq__16079 = G__16188;
chunk__16080 = G__16189;
count__16081 = G__16190;
i__16082 = G__16191;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return arr.push(item);
}
});
shadow.cljs.devtools.client.console.object_ref = (function shadow$cljs$devtools$client$console$object_ref(obj){
if((obj == null)){
return null;
} else {
return ["object",({"object": obj})];
}
});
shadow.cljs.devtools.client.console.map__GT_style = (function shadow$cljs$devtools$client$console$map__GT_style(m){
return ({"style": clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16083){
var vec__16084 = p__16083;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16084,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16084,(1),null);
return [cljs.core.name(k),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),";"].join('');
}),m))});
});
shadow.cljs.devtools.client.console.clj__GT_jsonml = (function shadow$cljs$devtools$client$console$clj__GT_jsonml(struct){
if((struct == null)){
return null;
} else {
if(cljs.core.array_QMARK_(struct)){
return struct;
} else {
if(cljs.core.vector_QMARK_(struct)){
var vec__16087 = struct;
var seq__16088 = cljs.core.seq(vec__16087);
var first__16089 = cljs.core.first(seq__16088);
var seq__16088__$1 = cljs.core.next(seq__16088);
var tag = first__16089;
var first__16089__$1 = cljs.core.first(seq__16088__$1);
var seq__16088__$2 = cljs.core.next(seq__16088__$1);
var attrs = first__16089__$1;
var children = seq__16088__$2;
var js = [cljs.core.name(tag),shadow.cljs.devtools.client.console.map__GT_style(attrs)];
var seq__16090_16198 = cljs.core.seq(children);
var chunk__16091_16199 = null;
var count__16092_16200 = (0);
var i__16093_16201 = (0);
while(true){
if((i__16093_16201 < count__16092_16200)){
var child_16203 = chunk__16091_16199.cljs$core$IIndexed$_nth$arity$2(null,i__16093_16201);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_16203) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_16203)));


var G__16204 = seq__16090_16198;
var G__16205 = chunk__16091_16199;
var G__16206 = count__16092_16200;
var G__16207 = (i__16093_16201 + (1));
seq__16090_16198 = G__16204;
chunk__16091_16199 = G__16205;
count__16092_16200 = G__16206;
i__16093_16201 = G__16207;
continue;
} else {
var temp__5823__auto___16208 = cljs.core.seq(seq__16090_16198);
if(temp__5823__auto___16208){
var seq__16090_16209__$1 = temp__5823__auto___16208;
if(cljs.core.chunked_seq_QMARK_(seq__16090_16209__$1)){
var c__5548__auto___16210 = cljs.core.chunk_first(seq__16090_16209__$1);
var G__16211 = cljs.core.chunk_rest(seq__16090_16209__$1);
var G__16212 = c__5548__auto___16210;
var G__16213 = cljs.core.count(c__5548__auto___16210);
var G__16214 = (0);
seq__16090_16198 = G__16211;
chunk__16091_16199 = G__16212;
count__16092_16200 = G__16213;
i__16093_16201 = G__16214;
continue;
} else {
var child_16215 = cljs.core.first(seq__16090_16209__$1);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_16215) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_16215)));


var G__16217 = cljs.core.next(seq__16090_16209__$1);
var G__16218 = null;
var G__16219 = (0);
var G__16220 = (0);
seq__16090_16198 = G__16217;
chunk__16091_16199 = G__16218;
count__16092_16200 = G__16219;
i__16093_16201 = G__16220;
continue;
}
} else {
}
}
break;
}

return js;
} else {
if(typeof struct === 'string'){
return struct;
} else {
if(typeof struct === 'number'){
return struct;
} else {
if(cljs.core.seq_QMARK_(struct)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.console.clj__GT_jsonml),struct);
} else {
return shadow.cljs.devtools.client.console.object_ref(struct);

}
}
}
}
}
}
});

/**
* @constructor
*/
shadow.cljs.devtools.client.console.SeqFormatter = (function (){
});
(shadow.cljs.devtools.client.console.SeqFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if(((cljs.core.sequential_QMARK_(obj)) || (cljs.core.set_QMARK_(obj)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.body = (function (s){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null),(function (){var iter__5503__auto__ = (function shadow$cljs$devtools$client$console$iter__16094(s__16095){
return (new cljs.core.LazySeq(null,(function (){
var s__16095__$1 = s__16095;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__16095__$1);
if(temp__5823__auto__){
var s__16095__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16095__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__16095__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__16097 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__16096 = (0);
while(true){
if((i__16096 < size__5502__auto__)){
var value = cljs.core._nth(c__5501__auto__,i__16096);
cljs.core.chunk_append(b__16097,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null));

var G__16285 = (i__16096 + (1));
i__16096 = G__16285;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16097),shadow$cljs$devtools$client$console$iter__16094(cljs.core.chunk_rest(s__16095__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16097),null);
}
} else {
var value = cljs.core.first(s__16095__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null),shadow$cljs$devtools$client$console$iter__16094(cljs.core.rest(s__16095__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(s);
})()], null));
}));

(shadow.cljs.devtools.client.console.SeqFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SeqFormatter");

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.cljs.devtools.client.console/SeqFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SeqFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SeqFormatter = (function shadow$cljs$devtools$client$console$__GT_SeqFormatter(){
return (new shadow.cljs.devtools.client.console.SeqFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.MapFormatter = (function (){
});
(shadow.cljs.devtools.client.console.MapFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.PersistentHashMap)) || ((((obj instanceof cljs.core.PersistentArrayMap)) || (cljs.core.record_QMARK_(obj)))))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),(function (){var iter__5503__auto__ = (function shadow$cljs$devtools$client$console$iter__16122(s__16123){
return (new cljs.core.LazySeq(null,(function (){
var s__16123__$1 = s__16123;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__16123__$1);
if(temp__5823__auto__){
var s__16123__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16123__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__16123__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__16125 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__16124 = (0);
while(true){
if((i__16124 < size__5502__auto__)){
var key = cljs.core._nth(c__5501__auto__,i__16124);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
cljs.core.chunk_append(b__16125,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null));

var G__16301 = (i__16124 + (1));
i__16124 = G__16301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16125),shadow$cljs$devtools$client$console$iter__16122(cljs.core.chunk_rest(s__16123__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16125),null);
}
} else {
var key = cljs.core.first(s__16123__$2);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null),shadow$cljs$devtools$client$console$iter__16122(cljs.core.rest(s__16123__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__((function (){var k = cljs.core.keys(m);
try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(k);
}catch (e16131){var e = e16131;
return k;
}})());
})()], null));
}));

(shadow.cljs.devtools.client.console.MapFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/MapFormatter");

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.cljs.devtools.client.console/MapFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/MapFormatter.
 */
shadow.cljs.devtools.client.console.__GT_MapFormatter = (function shadow$cljs$devtools$client$console$__GT_MapFormatter(){
return (new shadow.cljs.devtools.client.console.MapFormatter());
});

shadow.cljs.devtools.client.console.keyword_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"var(--sys-color-token-keyword, var(--theme-highlight-pink, rgb(136, 19, 145)))"], null);

/**
* @constructor
*/
shadow.cljs.devtools.client.console.KeywordFormatter = (function (){
});
(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Keyword)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/KeywordFormatter");

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.cljs.devtools.client.console/KeywordFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/KeywordFormatter.
 */
shadow.cljs.devtools.client.console.__GT_KeywordFormatter = (function shadow$cljs$devtools$client$console$__GT_KeywordFormatter(){
return (new shadow.cljs.devtools.client.console.KeywordFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.SymbolFormatter = (function (){
});
(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Symbol)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SymbolFormatter");

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.cljs.devtools.client.console/SymbolFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SymbolFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SymbolFormatter = (function shadow$cljs$devtools$client$console$__GT_SymbolFormatter(){
return (new shadow.cljs.devtools.client.console.SymbolFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.DerefFormatter = (function (){
});
(shadow.cljs.devtools.client.console.DerefFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.Atom)) || ((obj instanceof cljs.core.Volatile)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,["@DEREF ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.body = (function (v){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),shadow.cljs.devtools.client.console.object_ref(cljs.core.deref(v))], null));
}));

(shadow.cljs.devtools.client.console.DerefFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/DerefFormatter");

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.cljs.devtools.client.console/DerefFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/DerefFormatter.
 */
shadow.cljs.devtools.client.console.__GT_DerefFormatter = (function shadow$cljs$devtools$client$console$__GT_DerefFormatter(){
return (new shadow.cljs.devtools.client.console.DerefFormatter());
});

shadow.cljs.devtools.client.console.install_all_BANG_ = (function shadow$cljs$devtools$client$console$install_all_BANG_(){
var temp__5823__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
var G__16156 = f;
G__16156.push((new shadow.cljs.devtools.client.console.KeywordFormatter()));

G__16156.push((new shadow.cljs.devtools.client.console.MapFormatter()));

G__16156.push((new shadow.cljs.devtools.client.console.SeqFormatter()));

G__16156.push((new shadow.cljs.devtools.client.console.SymbolFormatter()));

G__16156.push((new shadow.cljs.devtools.client.console.DerefFormatter()));

return G__16156;
} else {
return null;
}
});
shadow.cljs.devtools.client.console.remove_all_BANG_ = (function shadow$cljs$devtools$client$console$remove_all_BANG_(){
var all = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__16159_SHARP_){
return goog.object.get(p1__16159_SHARP_,"shadow$formatter");
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return [];
}
})())));
return goog.object.set(goog.global,"devtoolsFormatters",all);
});
shadow.cljs.devtools.client.console.remove_all_BANG_();
shadow.cljs.devtools.client.console.install_all_BANG_();

//# sourceMappingURL=shadow.cljs.devtools.client.console.js.map
