goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___23238 = arguments.length;
var i__5750__auto___23239 = (0);
while(true){
if((i__5750__auto___23239 < len__5749__auto___23238)){
args__5755__auto__.push((arguments[i__5750__auto___23239]));

var G__23240 = (i__5750__auto___23239 + (1));
i__5750__auto___23239 = G__23240;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22895){
var G__22896 = cljs.core.first(seq22895);
var seq22895__$1 = cljs.core.next(seq22895);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22896,seq22895__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22900 = cljs.core.seq(sources);
var chunk__22901 = null;
var count__22902 = (0);
var i__22903 = (0);
while(true){
if((i__22903 < count__22902)){
var map__22918 = chunk__22901.cljs$core$IIndexed$_nth$arity$2(null,i__22903);
var map__22918__$1 = cljs.core.__destructure_map(map__22918);
var src = map__22918__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22918__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22918__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22918__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22918__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22920){var e_23241 = e22920;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23241);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23241.message)].join('')));
}

var G__23242 = seq__22900;
var G__23243 = chunk__22901;
var G__23244 = count__22902;
var G__23245 = (i__22903 + (1));
seq__22900 = G__23242;
chunk__22901 = G__23243;
count__22902 = G__23244;
i__22903 = G__23245;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__22900);
if(temp__5823__auto__){
var seq__22900__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22900__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__22900__$1);
var G__23246 = cljs.core.chunk_rest(seq__22900__$1);
var G__23247 = c__5548__auto__;
var G__23248 = cljs.core.count(c__5548__auto__);
var G__23249 = (0);
seq__22900 = G__23246;
chunk__22901 = G__23247;
count__22902 = G__23248;
i__22903 = G__23249;
continue;
} else {
var map__22922 = cljs.core.first(seq__22900__$1);
var map__22922__$1 = cljs.core.__destructure_map(map__22922);
var src = map__22922__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22922__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22922__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22922__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22922__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22924){var e_23250 = e22924;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23250);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23250.message)].join('')));
}

var G__23251 = cljs.core.next(seq__22900__$1);
var G__23252 = null;
var G__23253 = (0);
var G__23254 = (0);
seq__22900 = G__23251;
chunk__22901 = G__23252;
count__22902 = G__23253;
i__22903 = G__23254;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22929 = cljs.core.seq(js_requires);
var chunk__22930 = null;
var count__22931 = (0);
var i__22932 = (0);
while(true){
if((i__22932 < count__22931)){
var js_ns = chunk__22930.cljs$core$IIndexed$_nth$arity$2(null,i__22932);
var require_str_23255 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23255);


var G__23256 = seq__22929;
var G__23257 = chunk__22930;
var G__23258 = count__22931;
var G__23259 = (i__22932 + (1));
seq__22929 = G__23256;
chunk__22930 = G__23257;
count__22931 = G__23258;
i__22932 = G__23259;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__22929);
if(temp__5823__auto__){
var seq__22929__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22929__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__22929__$1);
var G__23261 = cljs.core.chunk_rest(seq__22929__$1);
var G__23262 = c__5548__auto__;
var G__23263 = cljs.core.count(c__5548__auto__);
var G__23264 = (0);
seq__22929 = G__23261;
chunk__22930 = G__23262;
count__22931 = G__23263;
i__22932 = G__23264;
continue;
} else {
var js_ns = cljs.core.first(seq__22929__$1);
var require_str_23266 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23266);


var G__23267 = cljs.core.next(seq__22929__$1);
var G__23268 = null;
var G__23269 = (0);
var G__23270 = (0);
seq__22929 = G__23267;
chunk__22930 = G__23268;
count__22931 = G__23269;
i__22932 = G__23270;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22934){
var map__22935 = p__22934;
var map__22935__$1 = cljs.core.__destructure_map(map__22935);
var msg = map__22935__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22935__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22935__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22936(s__22937){
return (new cljs.core.LazySeq(null,(function (){
var s__22937__$1 = s__22937;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__22937__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__22942 = cljs.core.first(xs__6383__auto__);
var map__22942__$1 = cljs.core.__destructure_map(map__22942);
var src = map__22942__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22942__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22942__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5499__auto__ = ((function (s__22937__$1,map__22942,map__22942__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__22935,map__22935__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22936_$_iter__22938(s__22939){
return (new cljs.core.LazySeq(null,((function (s__22937__$1,map__22942,map__22942__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__22935,map__22935__$1,msg,info,reload_info){
return (function (){
var s__22939__$1 = s__22939;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__22939__$1);
if(temp__5823__auto____$1){
var s__22939__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22939__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__22939__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__22941 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__22940 = (0);
while(true){
if((i__22940 < size__5502__auto__)){
var warning = cljs.core._nth(c__5501__auto__,i__22940);
cljs.core.chunk_append(b__22941,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__23273 = (i__22940 + (1));
i__22940 = G__23273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22941),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22936_$_iter__22938(cljs.core.chunk_rest(s__22939__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22941),null);
}
} else {
var warning = cljs.core.first(s__22939__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22936_$_iter__22938(cljs.core.rest(s__22939__$2)));
}
} else {
return null;
}
break;
}
});})(s__22937__$1,map__22942,map__22942__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__22935,map__22935__$1,msg,info,reload_info))
,null,null));
});})(s__22937__$1,map__22942,map__22942__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__22935,map__22935__$1,msg,info,reload_info))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(warnings));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22936(cljs.core.rest(s__22937__$1)));
} else {
var G__23275 = cljs.core.rest(s__22937__$1);
s__22937__$1 = G__23275;
continue;
}
} else {
var G__23276 = cljs.core.rest(s__22937__$1);
s__22937__$1 = G__23276;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22943_23277 = cljs.core.seq(warnings);
var chunk__22944_23278 = null;
var count__22945_23279 = (0);
var i__22946_23280 = (0);
while(true){
if((i__22946_23280 < count__22945_23279)){
var map__22949_23282 = chunk__22944_23278.cljs$core$IIndexed$_nth$arity$2(null,i__22946_23280);
var map__22949_23283__$1 = cljs.core.__destructure_map(map__22949_23282);
var w_23284 = map__22949_23283__$1;
var msg_23285__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22949_23283__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22949_23283__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22949_23283__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22949_23283__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23288)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23286),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23287),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23285__$1)].join(''));


var G__23289 = seq__22943_23277;
var G__23290 = chunk__22944_23278;
var G__23291 = count__22945_23279;
var G__23292 = (i__22946_23280 + (1));
seq__22943_23277 = G__23289;
chunk__22944_23278 = G__23290;
count__22945_23279 = G__23291;
i__22946_23280 = G__23292;
continue;
} else {
var temp__5823__auto___23293 = cljs.core.seq(seq__22943_23277);
if(temp__5823__auto___23293){
var seq__22943_23294__$1 = temp__5823__auto___23293;
if(cljs.core.chunked_seq_QMARK_(seq__22943_23294__$1)){
var c__5548__auto___23295 = cljs.core.chunk_first(seq__22943_23294__$1);
var G__23296 = cljs.core.chunk_rest(seq__22943_23294__$1);
var G__23297 = c__5548__auto___23295;
var G__23298 = cljs.core.count(c__5548__auto___23295);
var G__23299 = (0);
seq__22943_23277 = G__23296;
chunk__22944_23278 = G__23297;
count__22945_23279 = G__23298;
i__22946_23280 = G__23299;
continue;
} else {
var map__22950_23300 = cljs.core.first(seq__22943_23294__$1);
var map__22950_23301__$1 = cljs.core.__destructure_map(map__22950_23300);
var w_23302 = map__22950_23301__$1;
var msg_23303__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22950_23301__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22950_23301__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22950_23301__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22950_23301__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23306)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23304),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23305),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23303__$1)].join(''));


var G__23307 = cljs.core.next(seq__22943_23294__$1);
var G__23308 = null;
var G__23309 = (0);
var G__23310 = (0);
seq__22943_23277 = G__23307;
chunk__22944_23278 = G__23308;
count__22945_23279 = G__23309;
i__22946_23280 = G__23310;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22933_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22933_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5023__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5023__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__22952 = node_uri;
G__22952.setQuery(null);

G__22952.setPath(new$);

return G__22952;
})());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22953){
var map__22954 = p__22953;
var map__22954__$1 = cljs.core.__destructure_map(map__22954);
var msg = map__22954__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22954__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22954__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22955 = cljs.core.seq(updates);
var chunk__22957 = null;
var count__22958 = (0);
var i__22959 = (0);
while(true){
if((i__22959 < count__22958)){
var path = chunk__22957.cljs$core$IIndexed$_nth$arity$2(null,i__22959);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23075_23313 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23079_23314 = null;
var count__23080_23315 = (0);
var i__23081_23316 = (0);
while(true){
if((i__23081_23316 < count__23080_23315)){
var node_23317 = chunk__23079_23314.cljs$core$IIndexed$_nth$arity$2(null,i__23081_23316);
if(cljs.core.not(node_23317.shadow$old)){
var path_match_23318 = shadow.cljs.devtools.client.browser.match_paths(node_23317.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23318)){
var new_link_23320 = (function (){var G__23114 = node_23317.cloneNode(true);
G__23114.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23318),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23114;
})();
(node_23317.shadow$old = true);

(new_link_23320.onload = ((function (seq__23075_23313,chunk__23079_23314,count__23080_23315,i__23081_23316,seq__22955,chunk__22957,count__22958,i__22959,new_link_23320,path_match_23318,node_23317,path,map__22954,map__22954__$1,msg,updates,reload_info){
return (function (e){
var seq__23115_23323 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23117_23324 = null;
var count__23118_23325 = (0);
var i__23119_23326 = (0);
while(true){
if((i__23119_23326 < count__23118_23325)){
var map__23125_23328 = chunk__23117_23324.cljs$core$IIndexed$_nth$arity$2(null,i__23119_23326);
var map__23125_23329__$1 = cljs.core.__destructure_map(map__23125_23328);
var task_23330 = map__23125_23329__$1;
var fn_str_23331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23125_23329__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23125_23329__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23333 = goog.getObjectByName(fn_str_23331,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23332)].join(''));

(fn_obj_23333.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23333.cljs$core$IFn$_invoke$arity$2(path,new_link_23320) : fn_obj_23333.call(null,path,new_link_23320));


var G__23334 = seq__23115_23323;
var G__23335 = chunk__23117_23324;
var G__23336 = count__23118_23325;
var G__23337 = (i__23119_23326 + (1));
seq__23115_23323 = G__23334;
chunk__23117_23324 = G__23335;
count__23118_23325 = G__23336;
i__23119_23326 = G__23337;
continue;
} else {
var temp__5823__auto___23338 = cljs.core.seq(seq__23115_23323);
if(temp__5823__auto___23338){
var seq__23115_23339__$1 = temp__5823__auto___23338;
if(cljs.core.chunked_seq_QMARK_(seq__23115_23339__$1)){
var c__5548__auto___23340 = cljs.core.chunk_first(seq__23115_23339__$1);
var G__23341 = cljs.core.chunk_rest(seq__23115_23339__$1);
var G__23342 = c__5548__auto___23340;
var G__23343 = cljs.core.count(c__5548__auto___23340);
var G__23344 = (0);
seq__23115_23323 = G__23341;
chunk__23117_23324 = G__23342;
count__23118_23325 = G__23343;
i__23119_23326 = G__23344;
continue;
} else {
var map__23129_23345 = cljs.core.first(seq__23115_23339__$1);
var map__23129_23346__$1 = cljs.core.__destructure_map(map__23129_23345);
var task_23347 = map__23129_23346__$1;
var fn_str_23348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23129_23346__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23129_23346__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23350 = goog.getObjectByName(fn_str_23348,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23349)].join(''));

(fn_obj_23350.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23350.cljs$core$IFn$_invoke$arity$2(path,new_link_23320) : fn_obj_23350.call(null,path,new_link_23320));


var G__23351 = cljs.core.next(seq__23115_23339__$1);
var G__23352 = null;
var G__23353 = (0);
var G__23354 = (0);
seq__23115_23323 = G__23351;
chunk__23117_23324 = G__23352;
count__23118_23325 = G__23353;
i__23119_23326 = G__23354;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23317);
});})(seq__23075_23313,chunk__23079_23314,count__23080_23315,i__23081_23316,seq__22955,chunk__22957,count__22958,i__22959,new_link_23320,path_match_23318,node_23317,path,map__22954,map__22954__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23318], 0));

goog.dom.insertSiblingAfter(new_link_23320,node_23317);


var G__23358 = seq__23075_23313;
var G__23359 = chunk__23079_23314;
var G__23360 = count__23080_23315;
var G__23361 = (i__23081_23316 + (1));
seq__23075_23313 = G__23358;
chunk__23079_23314 = G__23359;
count__23080_23315 = G__23360;
i__23081_23316 = G__23361;
continue;
} else {
var G__23362 = seq__23075_23313;
var G__23363 = chunk__23079_23314;
var G__23364 = count__23080_23315;
var G__23365 = (i__23081_23316 + (1));
seq__23075_23313 = G__23362;
chunk__23079_23314 = G__23363;
count__23080_23315 = G__23364;
i__23081_23316 = G__23365;
continue;
}
} else {
var G__23366 = seq__23075_23313;
var G__23367 = chunk__23079_23314;
var G__23368 = count__23080_23315;
var G__23369 = (i__23081_23316 + (1));
seq__23075_23313 = G__23366;
chunk__23079_23314 = G__23367;
count__23080_23315 = G__23368;
i__23081_23316 = G__23369;
continue;
}
} else {
var temp__5823__auto___23370 = cljs.core.seq(seq__23075_23313);
if(temp__5823__auto___23370){
var seq__23075_23371__$1 = temp__5823__auto___23370;
if(cljs.core.chunked_seq_QMARK_(seq__23075_23371__$1)){
var c__5548__auto___23372 = cljs.core.chunk_first(seq__23075_23371__$1);
var G__23373 = cljs.core.chunk_rest(seq__23075_23371__$1);
var G__23374 = c__5548__auto___23372;
var G__23375 = cljs.core.count(c__5548__auto___23372);
var G__23376 = (0);
seq__23075_23313 = G__23373;
chunk__23079_23314 = G__23374;
count__23080_23315 = G__23375;
i__23081_23316 = G__23376;
continue;
} else {
var node_23377 = cljs.core.first(seq__23075_23371__$1);
if(cljs.core.not(node_23377.shadow$old)){
var path_match_23378 = shadow.cljs.devtools.client.browser.match_paths(node_23377.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23378)){
var new_link_23379 = (function (){var G__23130 = node_23377.cloneNode(true);
G__23130.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23378),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23130;
})();
(node_23377.shadow$old = true);

(new_link_23379.onload = ((function (seq__23075_23313,chunk__23079_23314,count__23080_23315,i__23081_23316,seq__22955,chunk__22957,count__22958,i__22959,new_link_23379,path_match_23378,node_23377,seq__23075_23371__$1,temp__5823__auto___23370,path,map__22954,map__22954__$1,msg,updates,reload_info){
return (function (e){
var seq__23131_23380 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23133_23381 = null;
var count__23134_23382 = (0);
var i__23135_23383 = (0);
while(true){
if((i__23135_23383 < count__23134_23382)){
var map__23139_23384 = chunk__23133_23381.cljs$core$IIndexed$_nth$arity$2(null,i__23135_23383);
var map__23139_23385__$1 = cljs.core.__destructure_map(map__23139_23384);
var task_23386 = map__23139_23385__$1;
var fn_str_23387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23139_23385__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23139_23385__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23389 = goog.getObjectByName(fn_str_23387,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23388)].join(''));

(fn_obj_23389.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23389.cljs$core$IFn$_invoke$arity$2(path,new_link_23379) : fn_obj_23389.call(null,path,new_link_23379));


var G__23390 = seq__23131_23380;
var G__23391 = chunk__23133_23381;
var G__23392 = count__23134_23382;
var G__23393 = (i__23135_23383 + (1));
seq__23131_23380 = G__23390;
chunk__23133_23381 = G__23391;
count__23134_23382 = G__23392;
i__23135_23383 = G__23393;
continue;
} else {
var temp__5823__auto___23394__$1 = cljs.core.seq(seq__23131_23380);
if(temp__5823__auto___23394__$1){
var seq__23131_23395__$1 = temp__5823__auto___23394__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23131_23395__$1)){
var c__5548__auto___23396 = cljs.core.chunk_first(seq__23131_23395__$1);
var G__23397 = cljs.core.chunk_rest(seq__23131_23395__$1);
var G__23398 = c__5548__auto___23396;
var G__23399 = cljs.core.count(c__5548__auto___23396);
var G__23400 = (0);
seq__23131_23380 = G__23397;
chunk__23133_23381 = G__23398;
count__23134_23382 = G__23399;
i__23135_23383 = G__23400;
continue;
} else {
var map__23140_23402 = cljs.core.first(seq__23131_23395__$1);
var map__23140_23403__$1 = cljs.core.__destructure_map(map__23140_23402);
var task_23404 = map__23140_23403__$1;
var fn_str_23405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23140_23403__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23140_23403__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23407 = goog.getObjectByName(fn_str_23405,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23406)].join(''));

(fn_obj_23407.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23407.cljs$core$IFn$_invoke$arity$2(path,new_link_23379) : fn_obj_23407.call(null,path,new_link_23379));


var G__23408 = cljs.core.next(seq__23131_23395__$1);
var G__23409 = null;
var G__23410 = (0);
var G__23411 = (0);
seq__23131_23380 = G__23408;
chunk__23133_23381 = G__23409;
count__23134_23382 = G__23410;
i__23135_23383 = G__23411;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23377);
});})(seq__23075_23313,chunk__23079_23314,count__23080_23315,i__23081_23316,seq__22955,chunk__22957,count__22958,i__22959,new_link_23379,path_match_23378,node_23377,seq__23075_23371__$1,temp__5823__auto___23370,path,map__22954,map__22954__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23378], 0));

goog.dom.insertSiblingAfter(new_link_23379,node_23377);


var G__23412 = cljs.core.next(seq__23075_23371__$1);
var G__23413 = null;
var G__23414 = (0);
var G__23415 = (0);
seq__23075_23313 = G__23412;
chunk__23079_23314 = G__23413;
count__23080_23315 = G__23414;
i__23081_23316 = G__23415;
continue;
} else {
var G__23416 = cljs.core.next(seq__23075_23371__$1);
var G__23417 = null;
var G__23418 = (0);
var G__23419 = (0);
seq__23075_23313 = G__23416;
chunk__23079_23314 = G__23417;
count__23080_23315 = G__23418;
i__23081_23316 = G__23419;
continue;
}
} else {
var G__23420 = cljs.core.next(seq__23075_23371__$1);
var G__23421 = null;
var G__23422 = (0);
var G__23423 = (0);
seq__23075_23313 = G__23420;
chunk__23079_23314 = G__23421;
count__23080_23315 = G__23422;
i__23081_23316 = G__23423;
continue;
}
}
} else {
}
}
break;
}


var G__23424 = seq__22955;
var G__23425 = chunk__22957;
var G__23426 = count__22958;
var G__23427 = (i__22959 + (1));
seq__22955 = G__23424;
chunk__22957 = G__23425;
count__22958 = G__23426;
i__22959 = G__23427;
continue;
} else {
var G__23428 = seq__22955;
var G__23429 = chunk__22957;
var G__23430 = count__22958;
var G__23431 = (i__22959 + (1));
seq__22955 = G__23428;
chunk__22957 = G__23429;
count__22958 = G__23430;
i__22959 = G__23431;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__22955);
if(temp__5823__auto__){
var seq__22955__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22955__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__22955__$1);
var G__23432 = cljs.core.chunk_rest(seq__22955__$1);
var G__23433 = c__5548__auto__;
var G__23434 = cljs.core.count(c__5548__auto__);
var G__23435 = (0);
seq__22955 = G__23432;
chunk__22957 = G__23433;
count__22958 = G__23434;
i__22959 = G__23435;
continue;
} else {
var path = cljs.core.first(seq__22955__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23141_23436 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23145_23437 = null;
var count__23146_23438 = (0);
var i__23147_23439 = (0);
while(true){
if((i__23147_23439 < count__23146_23438)){
var node_23440 = chunk__23145_23437.cljs$core$IIndexed$_nth$arity$2(null,i__23147_23439);
if(cljs.core.not(node_23440.shadow$old)){
var path_match_23441 = shadow.cljs.devtools.client.browser.match_paths(node_23440.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23441)){
var new_link_23442 = (function (){var G__23174 = node_23440.cloneNode(true);
G__23174.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23441),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23174;
})();
(node_23440.shadow$old = true);

(new_link_23442.onload = ((function (seq__23141_23436,chunk__23145_23437,count__23146_23438,i__23147_23439,seq__22955,chunk__22957,count__22958,i__22959,new_link_23442,path_match_23441,node_23440,path,seq__22955__$1,temp__5823__auto__,map__22954,map__22954__$1,msg,updates,reload_info){
return (function (e){
var seq__23175_23443 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23177_23444 = null;
var count__23178_23445 = (0);
var i__23179_23446 = (0);
while(true){
if((i__23179_23446 < count__23178_23445)){
var map__23183_23447 = chunk__23177_23444.cljs$core$IIndexed$_nth$arity$2(null,i__23179_23446);
var map__23183_23448__$1 = cljs.core.__destructure_map(map__23183_23447);
var task_23449 = map__23183_23448__$1;
var fn_str_23450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23183_23448__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23183_23448__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23452 = goog.getObjectByName(fn_str_23450,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23451)].join(''));

(fn_obj_23452.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23452.cljs$core$IFn$_invoke$arity$2(path,new_link_23442) : fn_obj_23452.call(null,path,new_link_23442));


var G__23453 = seq__23175_23443;
var G__23454 = chunk__23177_23444;
var G__23455 = count__23178_23445;
var G__23456 = (i__23179_23446 + (1));
seq__23175_23443 = G__23453;
chunk__23177_23444 = G__23454;
count__23178_23445 = G__23455;
i__23179_23446 = G__23456;
continue;
} else {
var temp__5823__auto___23457__$1 = cljs.core.seq(seq__23175_23443);
if(temp__5823__auto___23457__$1){
var seq__23175_23458__$1 = temp__5823__auto___23457__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23175_23458__$1)){
var c__5548__auto___23459 = cljs.core.chunk_first(seq__23175_23458__$1);
var G__23460 = cljs.core.chunk_rest(seq__23175_23458__$1);
var G__23461 = c__5548__auto___23459;
var G__23462 = cljs.core.count(c__5548__auto___23459);
var G__23463 = (0);
seq__23175_23443 = G__23460;
chunk__23177_23444 = G__23461;
count__23178_23445 = G__23462;
i__23179_23446 = G__23463;
continue;
} else {
var map__23184_23464 = cljs.core.first(seq__23175_23458__$1);
var map__23184_23465__$1 = cljs.core.__destructure_map(map__23184_23464);
var task_23466 = map__23184_23465__$1;
var fn_str_23467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23184_23465__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23184_23465__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23469 = goog.getObjectByName(fn_str_23467,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23468)].join(''));

(fn_obj_23469.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23469.cljs$core$IFn$_invoke$arity$2(path,new_link_23442) : fn_obj_23469.call(null,path,new_link_23442));


var G__23470 = cljs.core.next(seq__23175_23458__$1);
var G__23471 = null;
var G__23472 = (0);
var G__23473 = (0);
seq__23175_23443 = G__23470;
chunk__23177_23444 = G__23471;
count__23178_23445 = G__23472;
i__23179_23446 = G__23473;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23440);
});})(seq__23141_23436,chunk__23145_23437,count__23146_23438,i__23147_23439,seq__22955,chunk__22957,count__22958,i__22959,new_link_23442,path_match_23441,node_23440,path,seq__22955__$1,temp__5823__auto__,map__22954,map__22954__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23441], 0));

goog.dom.insertSiblingAfter(new_link_23442,node_23440);


var G__23474 = seq__23141_23436;
var G__23475 = chunk__23145_23437;
var G__23476 = count__23146_23438;
var G__23477 = (i__23147_23439 + (1));
seq__23141_23436 = G__23474;
chunk__23145_23437 = G__23475;
count__23146_23438 = G__23476;
i__23147_23439 = G__23477;
continue;
} else {
var G__23478 = seq__23141_23436;
var G__23479 = chunk__23145_23437;
var G__23480 = count__23146_23438;
var G__23481 = (i__23147_23439 + (1));
seq__23141_23436 = G__23478;
chunk__23145_23437 = G__23479;
count__23146_23438 = G__23480;
i__23147_23439 = G__23481;
continue;
}
} else {
var G__23482 = seq__23141_23436;
var G__23483 = chunk__23145_23437;
var G__23484 = count__23146_23438;
var G__23485 = (i__23147_23439 + (1));
seq__23141_23436 = G__23482;
chunk__23145_23437 = G__23483;
count__23146_23438 = G__23484;
i__23147_23439 = G__23485;
continue;
}
} else {
var temp__5823__auto___23486__$1 = cljs.core.seq(seq__23141_23436);
if(temp__5823__auto___23486__$1){
var seq__23141_23487__$1 = temp__5823__auto___23486__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23141_23487__$1)){
var c__5548__auto___23488 = cljs.core.chunk_first(seq__23141_23487__$1);
var G__23489 = cljs.core.chunk_rest(seq__23141_23487__$1);
var G__23490 = c__5548__auto___23488;
var G__23491 = cljs.core.count(c__5548__auto___23488);
var G__23492 = (0);
seq__23141_23436 = G__23489;
chunk__23145_23437 = G__23490;
count__23146_23438 = G__23491;
i__23147_23439 = G__23492;
continue;
} else {
var node_23493 = cljs.core.first(seq__23141_23487__$1);
if(cljs.core.not(node_23493.shadow$old)){
var path_match_23494 = shadow.cljs.devtools.client.browser.match_paths(node_23493.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23494)){
var new_link_23496 = (function (){var G__23185 = node_23493.cloneNode(true);
G__23185.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23494),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23185;
})();
(node_23493.shadow$old = true);

(new_link_23496.onload = ((function (seq__23141_23436,chunk__23145_23437,count__23146_23438,i__23147_23439,seq__22955,chunk__22957,count__22958,i__22959,new_link_23496,path_match_23494,node_23493,seq__23141_23487__$1,temp__5823__auto___23486__$1,path,seq__22955__$1,temp__5823__auto__,map__22954,map__22954__$1,msg,updates,reload_info){
return (function (e){
var seq__23186_23497 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23188_23498 = null;
var count__23189_23499 = (0);
var i__23190_23500 = (0);
while(true){
if((i__23190_23500 < count__23189_23499)){
var map__23198_23501 = chunk__23188_23498.cljs$core$IIndexed$_nth$arity$2(null,i__23190_23500);
var map__23198_23502__$1 = cljs.core.__destructure_map(map__23198_23501);
var task_23503 = map__23198_23502__$1;
var fn_str_23504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23198_23502__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23198_23502__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23506 = goog.getObjectByName(fn_str_23504,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23505)].join(''));

(fn_obj_23506.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23506.cljs$core$IFn$_invoke$arity$2(path,new_link_23496) : fn_obj_23506.call(null,path,new_link_23496));


var G__23507 = seq__23186_23497;
var G__23508 = chunk__23188_23498;
var G__23509 = count__23189_23499;
var G__23510 = (i__23190_23500 + (1));
seq__23186_23497 = G__23507;
chunk__23188_23498 = G__23508;
count__23189_23499 = G__23509;
i__23190_23500 = G__23510;
continue;
} else {
var temp__5823__auto___23511__$2 = cljs.core.seq(seq__23186_23497);
if(temp__5823__auto___23511__$2){
var seq__23186_23512__$1 = temp__5823__auto___23511__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23186_23512__$1)){
var c__5548__auto___23513 = cljs.core.chunk_first(seq__23186_23512__$1);
var G__23515 = cljs.core.chunk_rest(seq__23186_23512__$1);
var G__23516 = c__5548__auto___23513;
var G__23517 = cljs.core.count(c__5548__auto___23513);
var G__23518 = (0);
seq__23186_23497 = G__23515;
chunk__23188_23498 = G__23516;
count__23189_23499 = G__23517;
i__23190_23500 = G__23518;
continue;
} else {
var map__23199_23519 = cljs.core.first(seq__23186_23512__$1);
var map__23199_23520__$1 = cljs.core.__destructure_map(map__23199_23519);
var task_23521 = map__23199_23520__$1;
var fn_str_23522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23199_23520__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23199_23520__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23525 = goog.getObjectByName(fn_str_23522,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23523)].join(''));

(fn_obj_23525.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23525.cljs$core$IFn$_invoke$arity$2(path,new_link_23496) : fn_obj_23525.call(null,path,new_link_23496));


var G__23526 = cljs.core.next(seq__23186_23512__$1);
var G__23527 = null;
var G__23528 = (0);
var G__23529 = (0);
seq__23186_23497 = G__23526;
chunk__23188_23498 = G__23527;
count__23189_23499 = G__23528;
i__23190_23500 = G__23529;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23493);
});})(seq__23141_23436,chunk__23145_23437,count__23146_23438,i__23147_23439,seq__22955,chunk__22957,count__22958,i__22959,new_link_23496,path_match_23494,node_23493,seq__23141_23487__$1,temp__5823__auto___23486__$1,path,seq__22955__$1,temp__5823__auto__,map__22954,map__22954__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23494], 0));

goog.dom.insertSiblingAfter(new_link_23496,node_23493);


var G__23530 = cljs.core.next(seq__23141_23487__$1);
var G__23531 = null;
var G__23532 = (0);
var G__23533 = (0);
seq__23141_23436 = G__23530;
chunk__23145_23437 = G__23531;
count__23146_23438 = G__23532;
i__23147_23439 = G__23533;
continue;
} else {
var G__23534 = cljs.core.next(seq__23141_23487__$1);
var G__23535 = null;
var G__23536 = (0);
var G__23537 = (0);
seq__23141_23436 = G__23534;
chunk__23145_23437 = G__23535;
count__23146_23438 = G__23536;
i__23147_23439 = G__23537;
continue;
}
} else {
var G__23538 = cljs.core.next(seq__23141_23487__$1);
var G__23539 = null;
var G__23540 = (0);
var G__23541 = (0);
seq__23141_23436 = G__23538;
chunk__23145_23437 = G__23539;
count__23146_23438 = G__23540;
i__23147_23439 = G__23541;
continue;
}
}
} else {
}
}
break;
}


var G__23542 = cljs.core.next(seq__22955__$1);
var G__23543 = null;
var G__23544 = (0);
var G__23545 = (0);
seq__22955 = G__23542;
chunk__22957 = G__23543;
count__22958 = G__23544;
i__22959 = G__23545;
continue;
} else {
var G__23547 = cljs.core.next(seq__22955__$1);
var G__23548 = null;
var G__23549 = (0);
var G__23550 = (0);
seq__22955 = G__23547;
chunk__22957 = G__23548;
count__22958 = G__23549;
i__22959 = G__23550;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__23206 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__23206) : success.call(null,G__23206));
}catch (e23205){var e = e23205;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__23208,success,fail){
var map__23209 = p__23208;
var map__23209__$1 = cljs.core.__destructure_map(map__23209);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23209__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__23211 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__23211) : success.call(null,G__23211));
}catch (e23210){var e = e23210;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__23212,done,error){
var map__23213 = p__23212;
var map__23213__$1 = cljs.core.__destructure_map(map__23213);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23213__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__23214,done,error){
var map__23215 = p__23214;
var map__23215__$1 = cljs.core.__destructure_map(map__23215);
var msg = map__23215__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23215__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23215__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23215__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__23216){
var map__23217 = p__23216;
var map__23217__$1 = cljs.core.__destructure_map(map__23217);
var src = map__23217__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23217__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5023__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5023__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__23218 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23218) : done.call(null,G__23218));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__23219){
var map__23220 = p__23219;
var map__23220__$1 = cljs.core.__destructure_map(map__23220);
var msg__$1 = map__23220__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23220__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e23221){var ex = e23221;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__23222){
var map__23223 = p__23222;
var map__23223__$1 = cljs.core.__destructure_map(map__23223);
var env = map__23223__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23223__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__23230){
var map__23231 = p__23230;
var map__23231__$1 = cljs.core.__destructure_map(map__23231);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23231__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23231__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__23232){
var map__23233 = p__23232;
var map__23233__$1 = cljs.core.__destructure_map(map__23233);
var svc = map__23233__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23233__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
