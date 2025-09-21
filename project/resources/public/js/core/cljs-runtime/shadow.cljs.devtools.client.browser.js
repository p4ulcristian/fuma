goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___23300 = arguments.length;
var i__5750__auto___23301 = (0);
while(true){
if((i__5750__auto___23301 < len__5749__auto___23300)){
args__5755__auto__.push((arguments[i__5750__auto___23301]));

var G__23302 = (i__5750__auto___23301 + (1));
i__5750__auto___23301 = G__23302;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22892){
var G__22893 = cljs.core.first(seq22892);
var seq22892__$1 = cljs.core.next(seq22892);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22893,seq22892__$1);
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
var map__22914 = chunk__22901.cljs$core$IIndexed$_nth$arity$2(null,i__22903);
var map__22914__$1 = cljs.core.__destructure_map(map__22914);
var src = map__22914__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22914__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22914__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22914__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22914__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22916){var e_23303 = e22916;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23303);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23303.message)].join('')));
}

var G__23304 = seq__22900;
var G__23305 = chunk__22901;
var G__23306 = count__22902;
var G__23307 = (i__22903 + (1));
seq__22900 = G__23304;
chunk__22901 = G__23305;
count__22902 = G__23306;
i__22903 = G__23307;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__22900);
if(temp__5823__auto__){
var seq__22900__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22900__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__22900__$1);
var G__23308 = cljs.core.chunk_rest(seq__22900__$1);
var G__23309 = c__5548__auto__;
var G__23310 = cljs.core.count(c__5548__auto__);
var G__23311 = (0);
seq__22900 = G__23308;
chunk__22901 = G__23309;
count__22902 = G__23310;
i__22903 = G__23311;
continue;
} else {
var map__22921 = cljs.core.first(seq__22900__$1);
var map__22921__$1 = cljs.core.__destructure_map(map__22921);
var src = map__22921__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22921__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22921__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22921__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22921__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22924){var e_23312 = e22924;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23312);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23312.message)].join('')));
}

var G__23313 = cljs.core.next(seq__22900__$1);
var G__23314 = null;
var G__23315 = (0);
var G__23316 = (0);
seq__22900 = G__23313;
chunk__22901 = G__23314;
count__22902 = G__23315;
i__22903 = G__23316;
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
var require_str_23317 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23317);


var G__23318 = seq__22929;
var G__23319 = chunk__22930;
var G__23320 = count__22931;
var G__23321 = (i__22932 + (1));
seq__22929 = G__23318;
chunk__22930 = G__23319;
count__22931 = G__23320;
i__22932 = G__23321;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__22929);
if(temp__5823__auto__){
var seq__22929__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22929__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__22929__$1);
var G__23322 = cljs.core.chunk_rest(seq__22929__$1);
var G__23323 = c__5548__auto__;
var G__23324 = cljs.core.count(c__5548__auto__);
var G__23325 = (0);
seq__22929 = G__23322;
chunk__22930 = G__23323;
count__22931 = G__23324;
i__22932 = G__23325;
continue;
} else {
var js_ns = cljs.core.first(seq__22929__$1);
var require_str_23326 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23326);


var G__23327 = cljs.core.next(seq__22929__$1);
var G__23328 = null;
var G__23329 = (0);
var G__23330 = (0);
seq__22929 = G__23327;
chunk__22930 = G__23328;
count__22931 = G__23329;
i__22932 = G__23330;
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

var G__23331 = (i__22940 + (1));
i__22940 = G__23331;
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
var G__23332 = cljs.core.rest(s__22937__$1);
s__22937__$1 = G__23332;
continue;
}
} else {
var G__23333 = cljs.core.rest(s__22937__$1);
s__22937__$1 = G__23333;
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
var seq__22943_23334 = cljs.core.seq(warnings);
var chunk__22944_23335 = null;
var count__22945_23336 = (0);
var i__22946_23337 = (0);
while(true){
if((i__22946_23337 < count__22945_23336)){
var map__22949_23338 = chunk__22944_23335.cljs$core$IIndexed$_nth$arity$2(null,i__22946_23337);
var map__22949_23339__$1 = cljs.core.__destructure_map(map__22949_23338);
var w_23340 = map__22949_23339__$1;
var msg_23341__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22949_23339__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22949_23339__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22949_23339__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22949_23339__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23344)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23342),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23343),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23341__$1)].join(''));


var G__23345 = seq__22943_23334;
var G__23346 = chunk__22944_23335;
var G__23347 = count__22945_23336;
var G__23348 = (i__22946_23337 + (1));
seq__22943_23334 = G__23345;
chunk__22944_23335 = G__23346;
count__22945_23336 = G__23347;
i__22946_23337 = G__23348;
continue;
} else {
var temp__5823__auto___23349 = cljs.core.seq(seq__22943_23334);
if(temp__5823__auto___23349){
var seq__22943_23350__$1 = temp__5823__auto___23349;
if(cljs.core.chunked_seq_QMARK_(seq__22943_23350__$1)){
var c__5548__auto___23351 = cljs.core.chunk_first(seq__22943_23350__$1);
var G__23352 = cljs.core.chunk_rest(seq__22943_23350__$1);
var G__23353 = c__5548__auto___23351;
var G__23354 = cljs.core.count(c__5548__auto___23351);
var G__23355 = (0);
seq__22943_23334 = G__23352;
chunk__22944_23335 = G__23353;
count__22945_23336 = G__23354;
i__22946_23337 = G__23355;
continue;
} else {
var map__22950_23356 = cljs.core.first(seq__22943_23350__$1);
var map__22950_23357__$1 = cljs.core.__destructure_map(map__22950_23356);
var w_23358 = map__22950_23357__$1;
var msg_23359__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22950_23357__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22950_23357__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22950_23357__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22950_23357__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23362)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23360),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23361),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23359__$1)].join(''));


var G__23363 = cljs.core.next(seq__22943_23350__$1);
var G__23364 = null;
var G__23365 = (0);
var G__23366 = (0);
seq__22943_23334 = G__23363;
chunk__22944_23335 = G__23364;
count__22945_23336 = G__23365;
i__22946_23337 = G__23366;
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
var seq__23098_23371 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23102_23372 = null;
var count__23103_23373 = (0);
var i__23104_23374 = (0);
while(true){
if((i__23104_23374 < count__23103_23373)){
var node_23375 = chunk__23102_23372.cljs$core$IIndexed$_nth$arity$2(null,i__23104_23374);
if(cljs.core.not(node_23375.shadow$old)){
var path_match_23377 = shadow.cljs.devtools.client.browser.match_paths(node_23375.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23377)){
var new_link_23379 = (function (){var G__23140 = node_23375.cloneNode(true);
G__23140.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23377),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23140;
})();
(node_23375.shadow$old = true);

(new_link_23379.onload = ((function (seq__23098_23371,chunk__23102_23372,count__23103_23373,i__23104_23374,seq__22955,chunk__22957,count__22958,i__22959,new_link_23379,path_match_23377,node_23375,path,map__22954,map__22954__$1,msg,updates,reload_info){
return (function (e){
var seq__23141_23380 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23143_23381 = null;
var count__23144_23382 = (0);
var i__23145_23383 = (0);
while(true){
if((i__23145_23383 < count__23144_23382)){
var map__23149_23384 = chunk__23143_23381.cljs$core$IIndexed$_nth$arity$2(null,i__23145_23383);
var map__23149_23385__$1 = cljs.core.__destructure_map(map__23149_23384);
var task_23386 = map__23149_23385__$1;
var fn_str_23387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23149_23385__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23149_23385__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23389 = goog.getObjectByName(fn_str_23387,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23388)].join(''));

(fn_obj_23389.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23389.cljs$core$IFn$_invoke$arity$2(path,new_link_23379) : fn_obj_23389.call(null,path,new_link_23379));


var G__23390 = seq__23141_23380;
var G__23391 = chunk__23143_23381;
var G__23392 = count__23144_23382;
var G__23393 = (i__23145_23383 + (1));
seq__23141_23380 = G__23390;
chunk__23143_23381 = G__23391;
count__23144_23382 = G__23392;
i__23145_23383 = G__23393;
continue;
} else {
var temp__5823__auto___23394 = cljs.core.seq(seq__23141_23380);
if(temp__5823__auto___23394){
var seq__23141_23395__$1 = temp__5823__auto___23394;
if(cljs.core.chunked_seq_QMARK_(seq__23141_23395__$1)){
var c__5548__auto___23396 = cljs.core.chunk_first(seq__23141_23395__$1);
var G__23397 = cljs.core.chunk_rest(seq__23141_23395__$1);
var G__23398 = c__5548__auto___23396;
var G__23399 = cljs.core.count(c__5548__auto___23396);
var G__23400 = (0);
seq__23141_23380 = G__23397;
chunk__23143_23381 = G__23398;
count__23144_23382 = G__23399;
i__23145_23383 = G__23400;
continue;
} else {
var map__23150_23401 = cljs.core.first(seq__23141_23395__$1);
var map__23150_23402__$1 = cljs.core.__destructure_map(map__23150_23401);
var task_23403 = map__23150_23402__$1;
var fn_str_23404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23150_23402__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23150_23402__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23406 = goog.getObjectByName(fn_str_23404,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23405)].join(''));

(fn_obj_23406.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23406.cljs$core$IFn$_invoke$arity$2(path,new_link_23379) : fn_obj_23406.call(null,path,new_link_23379));


var G__23407 = cljs.core.next(seq__23141_23395__$1);
var G__23408 = null;
var G__23409 = (0);
var G__23410 = (0);
seq__23141_23380 = G__23407;
chunk__23143_23381 = G__23408;
count__23144_23382 = G__23409;
i__23145_23383 = G__23410;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23375);
});})(seq__23098_23371,chunk__23102_23372,count__23103_23373,i__23104_23374,seq__22955,chunk__22957,count__22958,i__22959,new_link_23379,path_match_23377,node_23375,path,map__22954,map__22954__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23377], 0));

goog.dom.insertSiblingAfter(new_link_23379,node_23375);


var G__23411 = seq__23098_23371;
var G__23412 = chunk__23102_23372;
var G__23413 = count__23103_23373;
var G__23414 = (i__23104_23374 + (1));
seq__23098_23371 = G__23411;
chunk__23102_23372 = G__23412;
count__23103_23373 = G__23413;
i__23104_23374 = G__23414;
continue;
} else {
var G__23415 = seq__23098_23371;
var G__23416 = chunk__23102_23372;
var G__23417 = count__23103_23373;
var G__23418 = (i__23104_23374 + (1));
seq__23098_23371 = G__23415;
chunk__23102_23372 = G__23416;
count__23103_23373 = G__23417;
i__23104_23374 = G__23418;
continue;
}
} else {
var G__23419 = seq__23098_23371;
var G__23420 = chunk__23102_23372;
var G__23421 = count__23103_23373;
var G__23422 = (i__23104_23374 + (1));
seq__23098_23371 = G__23419;
chunk__23102_23372 = G__23420;
count__23103_23373 = G__23421;
i__23104_23374 = G__23422;
continue;
}
} else {
var temp__5823__auto___23423 = cljs.core.seq(seq__23098_23371);
if(temp__5823__auto___23423){
var seq__23098_23424__$1 = temp__5823__auto___23423;
if(cljs.core.chunked_seq_QMARK_(seq__23098_23424__$1)){
var c__5548__auto___23425 = cljs.core.chunk_first(seq__23098_23424__$1);
var G__23426 = cljs.core.chunk_rest(seq__23098_23424__$1);
var G__23427 = c__5548__auto___23425;
var G__23428 = cljs.core.count(c__5548__auto___23425);
var G__23429 = (0);
seq__23098_23371 = G__23426;
chunk__23102_23372 = G__23427;
count__23103_23373 = G__23428;
i__23104_23374 = G__23429;
continue;
} else {
var node_23430 = cljs.core.first(seq__23098_23424__$1);
if(cljs.core.not(node_23430.shadow$old)){
var path_match_23431 = shadow.cljs.devtools.client.browser.match_paths(node_23430.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23431)){
var new_link_23432 = (function (){var G__23151 = node_23430.cloneNode(true);
G__23151.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23431),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23151;
})();
(node_23430.shadow$old = true);

(new_link_23432.onload = ((function (seq__23098_23371,chunk__23102_23372,count__23103_23373,i__23104_23374,seq__22955,chunk__22957,count__22958,i__22959,new_link_23432,path_match_23431,node_23430,seq__23098_23424__$1,temp__5823__auto___23423,path,map__22954,map__22954__$1,msg,updates,reload_info){
return (function (e){
var seq__23152_23433 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23154_23434 = null;
var count__23155_23435 = (0);
var i__23156_23436 = (0);
while(true){
if((i__23156_23436 < count__23155_23435)){
var map__23162_23440 = chunk__23154_23434.cljs$core$IIndexed$_nth$arity$2(null,i__23156_23436);
var map__23162_23441__$1 = cljs.core.__destructure_map(map__23162_23440);
var task_23442 = map__23162_23441__$1;
var fn_str_23443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23162_23441__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23162_23441__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23445 = goog.getObjectByName(fn_str_23443,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23444)].join(''));

(fn_obj_23445.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23445.cljs$core$IFn$_invoke$arity$2(path,new_link_23432) : fn_obj_23445.call(null,path,new_link_23432));


var G__23446 = seq__23152_23433;
var G__23447 = chunk__23154_23434;
var G__23448 = count__23155_23435;
var G__23449 = (i__23156_23436 + (1));
seq__23152_23433 = G__23446;
chunk__23154_23434 = G__23447;
count__23155_23435 = G__23448;
i__23156_23436 = G__23449;
continue;
} else {
var temp__5823__auto___23450__$1 = cljs.core.seq(seq__23152_23433);
if(temp__5823__auto___23450__$1){
var seq__23152_23451__$1 = temp__5823__auto___23450__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23152_23451__$1)){
var c__5548__auto___23452 = cljs.core.chunk_first(seq__23152_23451__$1);
var G__23453 = cljs.core.chunk_rest(seq__23152_23451__$1);
var G__23454 = c__5548__auto___23452;
var G__23455 = cljs.core.count(c__5548__auto___23452);
var G__23456 = (0);
seq__23152_23433 = G__23453;
chunk__23154_23434 = G__23454;
count__23155_23435 = G__23455;
i__23156_23436 = G__23456;
continue;
} else {
var map__23165_23457 = cljs.core.first(seq__23152_23451__$1);
var map__23165_23458__$1 = cljs.core.__destructure_map(map__23165_23457);
var task_23459 = map__23165_23458__$1;
var fn_str_23460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23165_23458__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23165_23458__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23462 = goog.getObjectByName(fn_str_23460,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23461)].join(''));

(fn_obj_23462.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23462.cljs$core$IFn$_invoke$arity$2(path,new_link_23432) : fn_obj_23462.call(null,path,new_link_23432));


var G__23463 = cljs.core.next(seq__23152_23451__$1);
var G__23464 = null;
var G__23465 = (0);
var G__23466 = (0);
seq__23152_23433 = G__23463;
chunk__23154_23434 = G__23464;
count__23155_23435 = G__23465;
i__23156_23436 = G__23466;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23430);
});})(seq__23098_23371,chunk__23102_23372,count__23103_23373,i__23104_23374,seq__22955,chunk__22957,count__22958,i__22959,new_link_23432,path_match_23431,node_23430,seq__23098_23424__$1,temp__5823__auto___23423,path,map__22954,map__22954__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23431], 0));

goog.dom.insertSiblingAfter(new_link_23432,node_23430);


var G__23467 = cljs.core.next(seq__23098_23424__$1);
var G__23468 = null;
var G__23469 = (0);
var G__23470 = (0);
seq__23098_23371 = G__23467;
chunk__23102_23372 = G__23468;
count__23103_23373 = G__23469;
i__23104_23374 = G__23470;
continue;
} else {
var G__23471 = cljs.core.next(seq__23098_23424__$1);
var G__23472 = null;
var G__23473 = (0);
var G__23474 = (0);
seq__23098_23371 = G__23471;
chunk__23102_23372 = G__23472;
count__23103_23373 = G__23473;
i__23104_23374 = G__23474;
continue;
}
} else {
var G__23475 = cljs.core.next(seq__23098_23424__$1);
var G__23476 = null;
var G__23477 = (0);
var G__23478 = (0);
seq__23098_23371 = G__23475;
chunk__23102_23372 = G__23476;
count__23103_23373 = G__23477;
i__23104_23374 = G__23478;
continue;
}
}
} else {
}
}
break;
}


var G__23479 = seq__22955;
var G__23480 = chunk__22957;
var G__23481 = count__22958;
var G__23482 = (i__22959 + (1));
seq__22955 = G__23479;
chunk__22957 = G__23480;
count__22958 = G__23481;
i__22959 = G__23482;
continue;
} else {
var G__23483 = seq__22955;
var G__23484 = chunk__22957;
var G__23485 = count__22958;
var G__23486 = (i__22959 + (1));
seq__22955 = G__23483;
chunk__22957 = G__23484;
count__22958 = G__23485;
i__22959 = G__23486;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__22955);
if(temp__5823__auto__){
var seq__22955__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22955__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__22955__$1);
var G__23487 = cljs.core.chunk_rest(seq__22955__$1);
var G__23488 = c__5548__auto__;
var G__23489 = cljs.core.count(c__5548__auto__);
var G__23490 = (0);
seq__22955 = G__23487;
chunk__22957 = G__23488;
count__22958 = G__23489;
i__22959 = G__23490;
continue;
} else {
var path = cljs.core.first(seq__22955__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23168_23491 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23172_23492 = null;
var count__23173_23493 = (0);
var i__23174_23494 = (0);
while(true){
if((i__23174_23494 < count__23173_23493)){
var node_23495 = chunk__23172_23492.cljs$core$IIndexed$_nth$arity$2(null,i__23174_23494);
if(cljs.core.not(node_23495.shadow$old)){
var path_match_23496 = shadow.cljs.devtools.client.browser.match_paths(node_23495.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23496)){
var new_link_23497 = (function (){var G__23231 = node_23495.cloneNode(true);
G__23231.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23496),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23231;
})();
(node_23495.shadow$old = true);

(new_link_23497.onload = ((function (seq__23168_23491,chunk__23172_23492,count__23173_23493,i__23174_23494,seq__22955,chunk__22957,count__22958,i__22959,new_link_23497,path_match_23496,node_23495,path,seq__22955__$1,temp__5823__auto__,map__22954,map__22954__$1,msg,updates,reload_info){
return (function (e){
var seq__23236_23498 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23238_23499 = null;
var count__23239_23500 = (0);
var i__23240_23501 = (0);
while(true){
if((i__23240_23501 < count__23239_23500)){
var map__23251_23502 = chunk__23238_23499.cljs$core$IIndexed$_nth$arity$2(null,i__23240_23501);
var map__23251_23503__$1 = cljs.core.__destructure_map(map__23251_23502);
var task_23504 = map__23251_23503__$1;
var fn_str_23505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23251_23503__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23251_23503__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23507 = goog.getObjectByName(fn_str_23505,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23506)].join(''));

(fn_obj_23507.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23507.cljs$core$IFn$_invoke$arity$2(path,new_link_23497) : fn_obj_23507.call(null,path,new_link_23497));


var G__23508 = seq__23236_23498;
var G__23509 = chunk__23238_23499;
var G__23510 = count__23239_23500;
var G__23511 = (i__23240_23501 + (1));
seq__23236_23498 = G__23508;
chunk__23238_23499 = G__23509;
count__23239_23500 = G__23510;
i__23240_23501 = G__23511;
continue;
} else {
var temp__5823__auto___23512__$1 = cljs.core.seq(seq__23236_23498);
if(temp__5823__auto___23512__$1){
var seq__23236_23513__$1 = temp__5823__auto___23512__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23236_23513__$1)){
var c__5548__auto___23514 = cljs.core.chunk_first(seq__23236_23513__$1);
var G__23515 = cljs.core.chunk_rest(seq__23236_23513__$1);
var G__23516 = c__5548__auto___23514;
var G__23517 = cljs.core.count(c__5548__auto___23514);
var G__23518 = (0);
seq__23236_23498 = G__23515;
chunk__23238_23499 = G__23516;
count__23239_23500 = G__23517;
i__23240_23501 = G__23518;
continue;
} else {
var map__23253_23519 = cljs.core.first(seq__23236_23513__$1);
var map__23253_23520__$1 = cljs.core.__destructure_map(map__23253_23519);
var task_23521 = map__23253_23520__$1;
var fn_str_23522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23253_23520__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23253_23520__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23524 = goog.getObjectByName(fn_str_23522,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23523)].join(''));

(fn_obj_23524.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23524.cljs$core$IFn$_invoke$arity$2(path,new_link_23497) : fn_obj_23524.call(null,path,new_link_23497));


var G__23525 = cljs.core.next(seq__23236_23513__$1);
var G__23526 = null;
var G__23527 = (0);
var G__23528 = (0);
seq__23236_23498 = G__23525;
chunk__23238_23499 = G__23526;
count__23239_23500 = G__23527;
i__23240_23501 = G__23528;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23495);
});})(seq__23168_23491,chunk__23172_23492,count__23173_23493,i__23174_23494,seq__22955,chunk__22957,count__22958,i__22959,new_link_23497,path_match_23496,node_23495,path,seq__22955__$1,temp__5823__auto__,map__22954,map__22954__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23496], 0));

goog.dom.insertSiblingAfter(new_link_23497,node_23495);


var G__23529 = seq__23168_23491;
var G__23530 = chunk__23172_23492;
var G__23531 = count__23173_23493;
var G__23532 = (i__23174_23494 + (1));
seq__23168_23491 = G__23529;
chunk__23172_23492 = G__23530;
count__23173_23493 = G__23531;
i__23174_23494 = G__23532;
continue;
} else {
var G__23533 = seq__23168_23491;
var G__23534 = chunk__23172_23492;
var G__23535 = count__23173_23493;
var G__23536 = (i__23174_23494 + (1));
seq__23168_23491 = G__23533;
chunk__23172_23492 = G__23534;
count__23173_23493 = G__23535;
i__23174_23494 = G__23536;
continue;
}
} else {
var G__23537 = seq__23168_23491;
var G__23538 = chunk__23172_23492;
var G__23539 = count__23173_23493;
var G__23540 = (i__23174_23494 + (1));
seq__23168_23491 = G__23537;
chunk__23172_23492 = G__23538;
count__23173_23493 = G__23539;
i__23174_23494 = G__23540;
continue;
}
} else {
var temp__5823__auto___23541__$1 = cljs.core.seq(seq__23168_23491);
if(temp__5823__auto___23541__$1){
var seq__23168_23542__$1 = temp__5823__auto___23541__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23168_23542__$1)){
var c__5548__auto___23543 = cljs.core.chunk_first(seq__23168_23542__$1);
var G__23544 = cljs.core.chunk_rest(seq__23168_23542__$1);
var G__23545 = c__5548__auto___23543;
var G__23546 = cljs.core.count(c__5548__auto___23543);
var G__23547 = (0);
seq__23168_23491 = G__23544;
chunk__23172_23492 = G__23545;
count__23173_23493 = G__23546;
i__23174_23494 = G__23547;
continue;
} else {
var node_23548 = cljs.core.first(seq__23168_23542__$1);
if(cljs.core.not(node_23548.shadow$old)){
var path_match_23549 = shadow.cljs.devtools.client.browser.match_paths(node_23548.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23549)){
var new_link_23550 = (function (){var G__23255 = node_23548.cloneNode(true);
G__23255.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23549),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23255;
})();
(node_23548.shadow$old = true);

(new_link_23550.onload = ((function (seq__23168_23491,chunk__23172_23492,count__23173_23493,i__23174_23494,seq__22955,chunk__22957,count__22958,i__22959,new_link_23550,path_match_23549,node_23548,seq__23168_23542__$1,temp__5823__auto___23541__$1,path,seq__22955__$1,temp__5823__auto__,map__22954,map__22954__$1,msg,updates,reload_info){
return (function (e){
var seq__23258_23551 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23260_23552 = null;
var count__23261_23553 = (0);
var i__23262_23554 = (0);
while(true){
if((i__23262_23554 < count__23261_23553)){
var map__23268_23555 = chunk__23260_23552.cljs$core$IIndexed$_nth$arity$2(null,i__23262_23554);
var map__23268_23556__$1 = cljs.core.__destructure_map(map__23268_23555);
var task_23557 = map__23268_23556__$1;
var fn_str_23558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23268_23556__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23268_23556__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23560 = goog.getObjectByName(fn_str_23558,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23559)].join(''));

(fn_obj_23560.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23560.cljs$core$IFn$_invoke$arity$2(path,new_link_23550) : fn_obj_23560.call(null,path,new_link_23550));


var G__23561 = seq__23258_23551;
var G__23562 = chunk__23260_23552;
var G__23563 = count__23261_23553;
var G__23564 = (i__23262_23554 + (1));
seq__23258_23551 = G__23561;
chunk__23260_23552 = G__23562;
count__23261_23553 = G__23563;
i__23262_23554 = G__23564;
continue;
} else {
var temp__5823__auto___23565__$2 = cljs.core.seq(seq__23258_23551);
if(temp__5823__auto___23565__$2){
var seq__23258_23566__$1 = temp__5823__auto___23565__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23258_23566__$1)){
var c__5548__auto___23567 = cljs.core.chunk_first(seq__23258_23566__$1);
var G__23568 = cljs.core.chunk_rest(seq__23258_23566__$1);
var G__23569 = c__5548__auto___23567;
var G__23570 = cljs.core.count(c__5548__auto___23567);
var G__23571 = (0);
seq__23258_23551 = G__23568;
chunk__23260_23552 = G__23569;
count__23261_23553 = G__23570;
i__23262_23554 = G__23571;
continue;
} else {
var map__23269_23572 = cljs.core.first(seq__23258_23566__$1);
var map__23269_23573__$1 = cljs.core.__destructure_map(map__23269_23572);
var task_23574 = map__23269_23573__$1;
var fn_str_23575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23269_23573__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23269_23573__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23577 = goog.getObjectByName(fn_str_23575,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23576)].join(''));

(fn_obj_23577.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23577.cljs$core$IFn$_invoke$arity$2(path,new_link_23550) : fn_obj_23577.call(null,path,new_link_23550));


var G__23578 = cljs.core.next(seq__23258_23566__$1);
var G__23579 = null;
var G__23580 = (0);
var G__23581 = (0);
seq__23258_23551 = G__23578;
chunk__23260_23552 = G__23579;
count__23261_23553 = G__23580;
i__23262_23554 = G__23581;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23548);
});})(seq__23168_23491,chunk__23172_23492,count__23173_23493,i__23174_23494,seq__22955,chunk__22957,count__22958,i__22959,new_link_23550,path_match_23549,node_23548,seq__23168_23542__$1,temp__5823__auto___23541__$1,path,seq__22955__$1,temp__5823__auto__,map__22954,map__22954__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23549], 0));

goog.dom.insertSiblingAfter(new_link_23550,node_23548);


var G__23585 = cljs.core.next(seq__23168_23542__$1);
var G__23586 = null;
var G__23587 = (0);
var G__23588 = (0);
seq__23168_23491 = G__23585;
chunk__23172_23492 = G__23586;
count__23173_23493 = G__23587;
i__23174_23494 = G__23588;
continue;
} else {
var G__23589 = cljs.core.next(seq__23168_23542__$1);
var G__23590 = null;
var G__23591 = (0);
var G__23592 = (0);
seq__23168_23491 = G__23589;
chunk__23172_23492 = G__23590;
count__23173_23493 = G__23591;
i__23174_23494 = G__23592;
continue;
}
} else {
var G__23593 = cljs.core.next(seq__23168_23542__$1);
var G__23594 = null;
var G__23595 = (0);
var G__23596 = (0);
seq__23168_23491 = G__23593;
chunk__23172_23492 = G__23594;
count__23173_23493 = G__23595;
i__23174_23494 = G__23596;
continue;
}
}
} else {
}
}
break;
}


var G__23597 = cljs.core.next(seq__22955__$1);
var G__23598 = null;
var G__23599 = (0);
var G__23600 = (0);
seq__22955 = G__23597;
chunk__22957 = G__23598;
count__22958 = G__23599;
i__22959 = G__23600;
continue;
} else {
var G__23601 = cljs.core.next(seq__22955__$1);
var G__23602 = null;
var G__23603 = (0);
var G__23604 = (0);
seq__22955 = G__23601;
chunk__22957 = G__23602;
count__22958 = G__23603;
i__22959 = G__23604;
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
try{var G__23273 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__23273) : success.call(null,G__23273));
}catch (e23272){var e = e23272;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__23274,success,fail){
var map__23275 = p__23274;
var map__23275__$1 = cljs.core.__destructure_map(map__23275);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23275__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__23277 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__23277) : success.call(null,G__23277));
}catch (e23276){var e = e23276;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__23278,done,error){
var map__23279 = p__23278;
var map__23279__$1 = cljs.core.__destructure_map(map__23279);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23279__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__23280,done,error){
var map__23281 = p__23280;
var map__23281__$1 = cljs.core.__destructure_map(map__23281);
var msg = map__23281__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23281__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23281__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23281__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__23282){
var map__23283 = p__23282;
var map__23283__$1 = cljs.core.__destructure_map(map__23283);
var src = map__23283__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23283__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5023__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5023__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__23284 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23284) : done.call(null,G__23284));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__23285){
var map__23286 = p__23285;
var map__23286__$1 = cljs.core.__destructure_map(map__23286);
var msg__$1 = map__23286__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23286__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e23287){var ex = e23287;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__23291){
var map__23292 = p__23291;
var map__23292__$1 = cljs.core.__destructure_map(map__23292);
var env = map__23292__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23292__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__23294){
var map__23295 = p__23294;
var map__23295__$1 = cljs.core.__destructure_map(map__23295);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23295__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23295__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__23298){
var map__23299 = p__23298;
var map__23299__$1 = cljs.core.__destructure_map(map__23299);
var svc = map__23299__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23299__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
