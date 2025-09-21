goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___23256 = arguments.length;
var i__5750__auto___23257 = (0);
while(true){
if((i__5750__auto___23257 < len__5749__auto___23256)){
args__5755__auto__.push((arguments[i__5750__auto___23257]));

var G__23258 = (i__5750__auto___23257 + (1));
i__5750__auto___23257 = G__23258;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22848){
var G__22849 = cljs.core.first(seq22848);
var seq22848__$1 = cljs.core.next(seq22848);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22849,seq22848__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22852 = cljs.core.seq(sources);
var chunk__22853 = null;
var count__22854 = (0);
var i__22855 = (0);
while(true){
if((i__22855 < count__22854)){
var map__22860 = chunk__22853.cljs$core$IIndexed$_nth$arity$2(null,i__22855);
var map__22860__$1 = cljs.core.__destructure_map(map__22860);
var src = map__22860__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22860__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22860__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22860__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22860__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22861){var e_23259 = e22861;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23259);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23259.message)].join('')));
}

var G__23260 = seq__22852;
var G__23261 = chunk__22853;
var G__23262 = count__22854;
var G__23263 = (i__22855 + (1));
seq__22852 = G__23260;
chunk__22853 = G__23261;
count__22854 = G__23262;
i__22855 = G__23263;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__22852);
if(temp__5823__auto__){
var seq__22852__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22852__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__22852__$1);
var G__23264 = cljs.core.chunk_rest(seq__22852__$1);
var G__23265 = c__5548__auto__;
var G__23266 = cljs.core.count(c__5548__auto__);
var G__23267 = (0);
seq__22852 = G__23264;
chunk__22853 = G__23265;
count__22854 = G__23266;
i__22855 = G__23267;
continue;
} else {
var map__22862 = cljs.core.first(seq__22852__$1);
var map__22862__$1 = cljs.core.__destructure_map(map__22862);
var src = map__22862__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22862__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22862__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22862__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22862__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22864){var e_23268 = e22864;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23268);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23268.message)].join('')));
}

var G__23269 = cljs.core.next(seq__22852__$1);
var G__23270 = null;
var G__23271 = (0);
var G__23272 = (0);
seq__22852 = G__23269;
chunk__22853 = G__23270;
count__22854 = G__23271;
i__22855 = G__23272;
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
var seq__22866 = cljs.core.seq(js_requires);
var chunk__22867 = null;
var count__22868 = (0);
var i__22869 = (0);
while(true){
if((i__22869 < count__22868)){
var js_ns = chunk__22867.cljs$core$IIndexed$_nth$arity$2(null,i__22869);
var require_str_23273 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23273);


var G__23274 = seq__22866;
var G__23275 = chunk__22867;
var G__23276 = count__22868;
var G__23277 = (i__22869 + (1));
seq__22866 = G__23274;
chunk__22867 = G__23275;
count__22868 = G__23276;
i__22869 = G__23277;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__22866);
if(temp__5823__auto__){
var seq__22866__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22866__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__22866__$1);
var G__23278 = cljs.core.chunk_rest(seq__22866__$1);
var G__23279 = c__5548__auto__;
var G__23280 = cljs.core.count(c__5548__auto__);
var G__23281 = (0);
seq__22866 = G__23278;
chunk__22867 = G__23279;
count__22868 = G__23280;
i__22869 = G__23281;
continue;
} else {
var js_ns = cljs.core.first(seq__22866__$1);
var require_str_23282 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23282);


var G__23284 = cljs.core.next(seq__22866__$1);
var G__23285 = null;
var G__23286 = (0);
var G__23287 = (0);
seq__22866 = G__23284;
chunk__22867 = G__23285;
count__22868 = G__23286;
i__22869 = G__23287;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22871){
var map__22872 = p__22871;
var map__22872__$1 = cljs.core.__destructure_map(map__22872);
var msg = map__22872__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22872__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22872__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22873(s__22874){
return (new cljs.core.LazySeq(null,(function (){
var s__22874__$1 = s__22874;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__22874__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__22879 = cljs.core.first(xs__6383__auto__);
var map__22879__$1 = cljs.core.__destructure_map(map__22879);
var src = map__22879__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22879__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22879__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5499__auto__ = ((function (s__22874__$1,map__22879,map__22879__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__22872,map__22872__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22873_$_iter__22875(s__22876){
return (new cljs.core.LazySeq(null,((function (s__22874__$1,map__22879,map__22879__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__22872,map__22872__$1,msg,info,reload_info){
return (function (){
var s__22876__$1 = s__22876;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__22876__$1);
if(temp__5823__auto____$1){
var s__22876__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22876__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__22876__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__22878 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__22877 = (0);
while(true){
if((i__22877 < size__5502__auto__)){
var warning = cljs.core._nth(c__5501__auto__,i__22877);
cljs.core.chunk_append(b__22878,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__23289 = (i__22877 + (1));
i__22877 = G__23289;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22878),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22873_$_iter__22875(cljs.core.chunk_rest(s__22876__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22878),null);
}
} else {
var warning = cljs.core.first(s__22876__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22873_$_iter__22875(cljs.core.rest(s__22876__$2)));
}
} else {
return null;
}
break;
}
});})(s__22874__$1,map__22879,map__22879__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__22872,map__22872__$1,msg,info,reload_info))
,null,null));
});})(s__22874__$1,map__22879,map__22879__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__22872,map__22872__$1,msg,info,reload_info))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(warnings));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22873(cljs.core.rest(s__22874__$1)));
} else {
var G__23290 = cljs.core.rest(s__22874__$1);
s__22874__$1 = G__23290;
continue;
}
} else {
var G__23291 = cljs.core.rest(s__22874__$1);
s__22874__$1 = G__23291;
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
var seq__22880_23292 = cljs.core.seq(warnings);
var chunk__22881_23293 = null;
var count__22882_23294 = (0);
var i__22883_23295 = (0);
while(true){
if((i__22883_23295 < count__22882_23294)){
var map__22886_23296 = chunk__22881_23293.cljs$core$IIndexed$_nth$arity$2(null,i__22883_23295);
var map__22886_23297__$1 = cljs.core.__destructure_map(map__22886_23296);
var w_23298 = map__22886_23297__$1;
var msg_23299__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22886_23297__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22886_23297__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22886_23297__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22886_23297__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23302)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23300),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23301),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23299__$1)].join(''));


var G__23303 = seq__22880_23292;
var G__23304 = chunk__22881_23293;
var G__23305 = count__22882_23294;
var G__23306 = (i__22883_23295 + (1));
seq__22880_23292 = G__23303;
chunk__22881_23293 = G__23304;
count__22882_23294 = G__23305;
i__22883_23295 = G__23306;
continue;
} else {
var temp__5823__auto___23307 = cljs.core.seq(seq__22880_23292);
if(temp__5823__auto___23307){
var seq__22880_23308__$1 = temp__5823__auto___23307;
if(cljs.core.chunked_seq_QMARK_(seq__22880_23308__$1)){
var c__5548__auto___23309 = cljs.core.chunk_first(seq__22880_23308__$1);
var G__23310 = cljs.core.chunk_rest(seq__22880_23308__$1);
var G__23311 = c__5548__auto___23309;
var G__23312 = cljs.core.count(c__5548__auto___23309);
var G__23313 = (0);
seq__22880_23292 = G__23310;
chunk__22881_23293 = G__23311;
count__22882_23294 = G__23312;
i__22883_23295 = G__23313;
continue;
} else {
var map__22887_23314 = cljs.core.first(seq__22880_23308__$1);
var map__22887_23315__$1 = cljs.core.__destructure_map(map__22887_23314);
var w_23316 = map__22887_23315__$1;
var msg_23317__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22887_23315__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22887_23315__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22887_23315__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22887_23315__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23320)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23318),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23319),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23317__$1)].join(''));


var G__23321 = cljs.core.next(seq__22880_23308__$1);
var G__23322 = null;
var G__23323 = (0);
var G__23324 = (0);
seq__22880_23292 = G__23321;
chunk__22881_23293 = G__23322;
count__22882_23294 = G__23323;
i__22883_23295 = G__23324;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22870_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22870_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__22890 = node_uri;
G__22890.setQuery(null);

G__22890.setPath(new$);

return G__22890;
})());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22891){
var map__22892 = p__22891;
var map__22892__$1 = cljs.core.__destructure_map(map__22892);
var msg = map__22892__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22892__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22892__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22893 = cljs.core.seq(updates);
var chunk__22895 = null;
var count__22896 = (0);
var i__22897 = (0);
while(true){
if((i__22897 < count__22896)){
var path = chunk__22895.cljs$core$IIndexed$_nth$arity$2(null,i__22897);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23036_23330 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23040_23331 = null;
var count__23041_23332 = (0);
var i__23042_23333 = (0);
while(true){
if((i__23042_23333 < count__23041_23332)){
var node_23334 = chunk__23040_23331.cljs$core$IIndexed$_nth$arity$2(null,i__23042_23333);
if(cljs.core.not(node_23334.shadow$old)){
var path_match_23335 = shadow.cljs.devtools.client.browser.match_paths(node_23334.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23335)){
var new_link_23336 = (function (){var G__23121 = node_23334.cloneNode(true);
G__23121.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23335),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23121;
})();
(node_23334.shadow$old = true);

(new_link_23336.onload = ((function (seq__23036_23330,chunk__23040_23331,count__23041_23332,i__23042_23333,seq__22893,chunk__22895,count__22896,i__22897,new_link_23336,path_match_23335,node_23334,path,map__22892,map__22892__$1,msg,updates,reload_info){
return (function (e){
var seq__23122_23337 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23124_23338 = null;
var count__23125_23339 = (0);
var i__23126_23340 = (0);
while(true){
if((i__23126_23340 < count__23125_23339)){
var map__23132_23341 = chunk__23124_23338.cljs$core$IIndexed$_nth$arity$2(null,i__23126_23340);
var map__23132_23342__$1 = cljs.core.__destructure_map(map__23132_23341);
var task_23343 = map__23132_23342__$1;
var fn_str_23344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23132_23342__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23132_23342__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23346 = goog.getObjectByName(fn_str_23344,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23345)].join(''));

(fn_obj_23346.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23346.cljs$core$IFn$_invoke$arity$2(path,new_link_23336) : fn_obj_23346.call(null,path,new_link_23336));


var G__23347 = seq__23122_23337;
var G__23348 = chunk__23124_23338;
var G__23349 = count__23125_23339;
var G__23350 = (i__23126_23340 + (1));
seq__23122_23337 = G__23347;
chunk__23124_23338 = G__23348;
count__23125_23339 = G__23349;
i__23126_23340 = G__23350;
continue;
} else {
var temp__5823__auto___23351 = cljs.core.seq(seq__23122_23337);
if(temp__5823__auto___23351){
var seq__23122_23352__$1 = temp__5823__auto___23351;
if(cljs.core.chunked_seq_QMARK_(seq__23122_23352__$1)){
var c__5548__auto___23353 = cljs.core.chunk_first(seq__23122_23352__$1);
var G__23354 = cljs.core.chunk_rest(seq__23122_23352__$1);
var G__23355 = c__5548__auto___23353;
var G__23356 = cljs.core.count(c__5548__auto___23353);
var G__23357 = (0);
seq__23122_23337 = G__23354;
chunk__23124_23338 = G__23355;
count__23125_23339 = G__23356;
i__23126_23340 = G__23357;
continue;
} else {
var map__23134_23358 = cljs.core.first(seq__23122_23352__$1);
var map__23134_23359__$1 = cljs.core.__destructure_map(map__23134_23358);
var task_23360 = map__23134_23359__$1;
var fn_str_23361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23134_23359__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23134_23359__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23363 = goog.getObjectByName(fn_str_23361,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23362)].join(''));

(fn_obj_23363.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23363.cljs$core$IFn$_invoke$arity$2(path,new_link_23336) : fn_obj_23363.call(null,path,new_link_23336));


var G__23364 = cljs.core.next(seq__23122_23352__$1);
var G__23365 = null;
var G__23366 = (0);
var G__23367 = (0);
seq__23122_23337 = G__23364;
chunk__23124_23338 = G__23365;
count__23125_23339 = G__23366;
i__23126_23340 = G__23367;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23334);
});})(seq__23036_23330,chunk__23040_23331,count__23041_23332,i__23042_23333,seq__22893,chunk__22895,count__22896,i__22897,new_link_23336,path_match_23335,node_23334,path,map__22892,map__22892__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23335], 0));

goog.dom.insertSiblingAfter(new_link_23336,node_23334);


var G__23368 = seq__23036_23330;
var G__23369 = chunk__23040_23331;
var G__23370 = count__23041_23332;
var G__23371 = (i__23042_23333 + (1));
seq__23036_23330 = G__23368;
chunk__23040_23331 = G__23369;
count__23041_23332 = G__23370;
i__23042_23333 = G__23371;
continue;
} else {
var G__23372 = seq__23036_23330;
var G__23373 = chunk__23040_23331;
var G__23374 = count__23041_23332;
var G__23375 = (i__23042_23333 + (1));
seq__23036_23330 = G__23372;
chunk__23040_23331 = G__23373;
count__23041_23332 = G__23374;
i__23042_23333 = G__23375;
continue;
}
} else {
var G__23376 = seq__23036_23330;
var G__23377 = chunk__23040_23331;
var G__23378 = count__23041_23332;
var G__23379 = (i__23042_23333 + (1));
seq__23036_23330 = G__23376;
chunk__23040_23331 = G__23377;
count__23041_23332 = G__23378;
i__23042_23333 = G__23379;
continue;
}
} else {
var temp__5823__auto___23380 = cljs.core.seq(seq__23036_23330);
if(temp__5823__auto___23380){
var seq__23036_23381__$1 = temp__5823__auto___23380;
if(cljs.core.chunked_seq_QMARK_(seq__23036_23381__$1)){
var c__5548__auto___23382 = cljs.core.chunk_first(seq__23036_23381__$1);
var G__23383 = cljs.core.chunk_rest(seq__23036_23381__$1);
var G__23384 = c__5548__auto___23382;
var G__23385 = cljs.core.count(c__5548__auto___23382);
var G__23386 = (0);
seq__23036_23330 = G__23383;
chunk__23040_23331 = G__23384;
count__23041_23332 = G__23385;
i__23042_23333 = G__23386;
continue;
} else {
var node_23387 = cljs.core.first(seq__23036_23381__$1);
if(cljs.core.not(node_23387.shadow$old)){
var path_match_23388 = shadow.cljs.devtools.client.browser.match_paths(node_23387.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23388)){
var new_link_23389 = (function (){var G__23135 = node_23387.cloneNode(true);
G__23135.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23388),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23135;
})();
(node_23387.shadow$old = true);

(new_link_23389.onload = ((function (seq__23036_23330,chunk__23040_23331,count__23041_23332,i__23042_23333,seq__22893,chunk__22895,count__22896,i__22897,new_link_23389,path_match_23388,node_23387,seq__23036_23381__$1,temp__5823__auto___23380,path,map__22892,map__22892__$1,msg,updates,reload_info){
return (function (e){
var seq__23136_23390 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23138_23391 = null;
var count__23139_23392 = (0);
var i__23140_23393 = (0);
while(true){
if((i__23140_23393 < count__23139_23392)){
var map__23144_23394 = chunk__23138_23391.cljs$core$IIndexed$_nth$arity$2(null,i__23140_23393);
var map__23144_23395__$1 = cljs.core.__destructure_map(map__23144_23394);
var task_23396 = map__23144_23395__$1;
var fn_str_23397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23144_23395__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23144_23395__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23399 = goog.getObjectByName(fn_str_23397,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23398)].join(''));

(fn_obj_23399.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23399.cljs$core$IFn$_invoke$arity$2(path,new_link_23389) : fn_obj_23399.call(null,path,new_link_23389));


var G__23400 = seq__23136_23390;
var G__23401 = chunk__23138_23391;
var G__23402 = count__23139_23392;
var G__23403 = (i__23140_23393 + (1));
seq__23136_23390 = G__23400;
chunk__23138_23391 = G__23401;
count__23139_23392 = G__23402;
i__23140_23393 = G__23403;
continue;
} else {
var temp__5823__auto___23404__$1 = cljs.core.seq(seq__23136_23390);
if(temp__5823__auto___23404__$1){
var seq__23136_23405__$1 = temp__5823__auto___23404__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23136_23405__$1)){
var c__5548__auto___23406 = cljs.core.chunk_first(seq__23136_23405__$1);
var G__23407 = cljs.core.chunk_rest(seq__23136_23405__$1);
var G__23408 = c__5548__auto___23406;
var G__23409 = cljs.core.count(c__5548__auto___23406);
var G__23410 = (0);
seq__23136_23390 = G__23407;
chunk__23138_23391 = G__23408;
count__23139_23392 = G__23409;
i__23140_23393 = G__23410;
continue;
} else {
var map__23145_23411 = cljs.core.first(seq__23136_23405__$1);
var map__23145_23412__$1 = cljs.core.__destructure_map(map__23145_23411);
var task_23413 = map__23145_23412__$1;
var fn_str_23414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23145_23412__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23145_23412__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23416 = goog.getObjectByName(fn_str_23414,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23415)].join(''));

(fn_obj_23416.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23416.cljs$core$IFn$_invoke$arity$2(path,new_link_23389) : fn_obj_23416.call(null,path,new_link_23389));


var G__23418 = cljs.core.next(seq__23136_23405__$1);
var G__23419 = null;
var G__23420 = (0);
var G__23421 = (0);
seq__23136_23390 = G__23418;
chunk__23138_23391 = G__23419;
count__23139_23392 = G__23420;
i__23140_23393 = G__23421;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23387);
});})(seq__23036_23330,chunk__23040_23331,count__23041_23332,i__23042_23333,seq__22893,chunk__22895,count__22896,i__22897,new_link_23389,path_match_23388,node_23387,seq__23036_23381__$1,temp__5823__auto___23380,path,map__22892,map__22892__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23388], 0));

goog.dom.insertSiblingAfter(new_link_23389,node_23387);


var G__23424 = cljs.core.next(seq__23036_23381__$1);
var G__23425 = null;
var G__23426 = (0);
var G__23427 = (0);
seq__23036_23330 = G__23424;
chunk__23040_23331 = G__23425;
count__23041_23332 = G__23426;
i__23042_23333 = G__23427;
continue;
} else {
var G__23429 = cljs.core.next(seq__23036_23381__$1);
var G__23430 = null;
var G__23431 = (0);
var G__23432 = (0);
seq__23036_23330 = G__23429;
chunk__23040_23331 = G__23430;
count__23041_23332 = G__23431;
i__23042_23333 = G__23432;
continue;
}
} else {
var G__23433 = cljs.core.next(seq__23036_23381__$1);
var G__23434 = null;
var G__23436 = (0);
var G__23437 = (0);
seq__23036_23330 = G__23433;
chunk__23040_23331 = G__23434;
count__23041_23332 = G__23436;
i__23042_23333 = G__23437;
continue;
}
}
} else {
}
}
break;
}


var G__23439 = seq__22893;
var G__23440 = chunk__22895;
var G__23441 = count__22896;
var G__23442 = (i__22897 + (1));
seq__22893 = G__23439;
chunk__22895 = G__23440;
count__22896 = G__23441;
i__22897 = G__23442;
continue;
} else {
var G__23443 = seq__22893;
var G__23444 = chunk__22895;
var G__23445 = count__22896;
var G__23446 = (i__22897 + (1));
seq__22893 = G__23443;
chunk__22895 = G__23444;
count__22896 = G__23445;
i__22897 = G__23446;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__22893);
if(temp__5823__auto__){
var seq__22893__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22893__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__22893__$1);
var G__23447 = cljs.core.chunk_rest(seq__22893__$1);
var G__23448 = c__5548__auto__;
var G__23449 = cljs.core.count(c__5548__auto__);
var G__23450 = (0);
seq__22893 = G__23447;
chunk__22895 = G__23448;
count__22896 = G__23449;
i__22897 = G__23450;
continue;
} else {
var path = cljs.core.first(seq__22893__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23146_23451 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23150_23452 = null;
var count__23151_23453 = (0);
var i__23152_23454 = (0);
while(true){
if((i__23152_23454 < count__23151_23453)){
var node_23455 = chunk__23150_23452.cljs$core$IIndexed$_nth$arity$2(null,i__23152_23454);
if(cljs.core.not(node_23455.shadow$old)){
var path_match_23456 = shadow.cljs.devtools.client.browser.match_paths(node_23455.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23456)){
var new_link_23457 = (function (){var G__23189 = node_23455.cloneNode(true);
G__23189.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23456),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23189;
})();
(node_23455.shadow$old = true);

(new_link_23457.onload = ((function (seq__23146_23451,chunk__23150_23452,count__23151_23453,i__23152_23454,seq__22893,chunk__22895,count__22896,i__22897,new_link_23457,path_match_23456,node_23455,path,seq__22893__$1,temp__5823__auto__,map__22892,map__22892__$1,msg,updates,reload_info){
return (function (e){
var seq__23191_23458 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23193_23459 = null;
var count__23194_23460 = (0);
var i__23195_23461 = (0);
while(true){
if((i__23195_23461 < count__23194_23460)){
var map__23199_23462 = chunk__23193_23459.cljs$core$IIndexed$_nth$arity$2(null,i__23195_23461);
var map__23199_23463__$1 = cljs.core.__destructure_map(map__23199_23462);
var task_23464 = map__23199_23463__$1;
var fn_str_23465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23199_23463__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23199_23463__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23467 = goog.getObjectByName(fn_str_23465,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23466)].join(''));

(fn_obj_23467.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23467.cljs$core$IFn$_invoke$arity$2(path,new_link_23457) : fn_obj_23467.call(null,path,new_link_23457));


var G__23468 = seq__23191_23458;
var G__23469 = chunk__23193_23459;
var G__23470 = count__23194_23460;
var G__23471 = (i__23195_23461 + (1));
seq__23191_23458 = G__23468;
chunk__23193_23459 = G__23469;
count__23194_23460 = G__23470;
i__23195_23461 = G__23471;
continue;
} else {
var temp__5823__auto___23472__$1 = cljs.core.seq(seq__23191_23458);
if(temp__5823__auto___23472__$1){
var seq__23191_23473__$1 = temp__5823__auto___23472__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23191_23473__$1)){
var c__5548__auto___23474 = cljs.core.chunk_first(seq__23191_23473__$1);
var G__23475 = cljs.core.chunk_rest(seq__23191_23473__$1);
var G__23476 = c__5548__auto___23474;
var G__23477 = cljs.core.count(c__5548__auto___23474);
var G__23478 = (0);
seq__23191_23458 = G__23475;
chunk__23193_23459 = G__23476;
count__23194_23460 = G__23477;
i__23195_23461 = G__23478;
continue;
} else {
var map__23200_23479 = cljs.core.first(seq__23191_23473__$1);
var map__23200_23480__$1 = cljs.core.__destructure_map(map__23200_23479);
var task_23481 = map__23200_23480__$1;
var fn_str_23482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23200_23480__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23200_23480__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23484 = goog.getObjectByName(fn_str_23482,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23483)].join(''));

(fn_obj_23484.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23484.cljs$core$IFn$_invoke$arity$2(path,new_link_23457) : fn_obj_23484.call(null,path,new_link_23457));


var G__23485 = cljs.core.next(seq__23191_23473__$1);
var G__23486 = null;
var G__23487 = (0);
var G__23488 = (0);
seq__23191_23458 = G__23485;
chunk__23193_23459 = G__23486;
count__23194_23460 = G__23487;
i__23195_23461 = G__23488;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23455);
});})(seq__23146_23451,chunk__23150_23452,count__23151_23453,i__23152_23454,seq__22893,chunk__22895,count__22896,i__22897,new_link_23457,path_match_23456,node_23455,path,seq__22893__$1,temp__5823__auto__,map__22892,map__22892__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23456], 0));

goog.dom.insertSiblingAfter(new_link_23457,node_23455);


var G__23489 = seq__23146_23451;
var G__23490 = chunk__23150_23452;
var G__23491 = count__23151_23453;
var G__23492 = (i__23152_23454 + (1));
seq__23146_23451 = G__23489;
chunk__23150_23452 = G__23490;
count__23151_23453 = G__23491;
i__23152_23454 = G__23492;
continue;
} else {
var G__23493 = seq__23146_23451;
var G__23494 = chunk__23150_23452;
var G__23495 = count__23151_23453;
var G__23496 = (i__23152_23454 + (1));
seq__23146_23451 = G__23493;
chunk__23150_23452 = G__23494;
count__23151_23453 = G__23495;
i__23152_23454 = G__23496;
continue;
}
} else {
var G__23497 = seq__23146_23451;
var G__23498 = chunk__23150_23452;
var G__23499 = count__23151_23453;
var G__23500 = (i__23152_23454 + (1));
seq__23146_23451 = G__23497;
chunk__23150_23452 = G__23498;
count__23151_23453 = G__23499;
i__23152_23454 = G__23500;
continue;
}
} else {
var temp__5823__auto___23501__$1 = cljs.core.seq(seq__23146_23451);
if(temp__5823__auto___23501__$1){
var seq__23146_23502__$1 = temp__5823__auto___23501__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23146_23502__$1)){
var c__5548__auto___23503 = cljs.core.chunk_first(seq__23146_23502__$1);
var G__23504 = cljs.core.chunk_rest(seq__23146_23502__$1);
var G__23505 = c__5548__auto___23503;
var G__23506 = cljs.core.count(c__5548__auto___23503);
var G__23507 = (0);
seq__23146_23451 = G__23504;
chunk__23150_23452 = G__23505;
count__23151_23453 = G__23506;
i__23152_23454 = G__23507;
continue;
} else {
var node_23508 = cljs.core.first(seq__23146_23502__$1);
if(cljs.core.not(node_23508.shadow$old)){
var path_match_23509 = shadow.cljs.devtools.client.browser.match_paths(node_23508.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23509)){
var new_link_23510 = (function (){var G__23201 = node_23508.cloneNode(true);
G__23201.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23509),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23201;
})();
(node_23508.shadow$old = true);

(new_link_23510.onload = ((function (seq__23146_23451,chunk__23150_23452,count__23151_23453,i__23152_23454,seq__22893,chunk__22895,count__22896,i__22897,new_link_23510,path_match_23509,node_23508,seq__23146_23502__$1,temp__5823__auto___23501__$1,path,seq__22893__$1,temp__5823__auto__,map__22892,map__22892__$1,msg,updates,reload_info){
return (function (e){
var seq__23202_23511 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23204_23512 = null;
var count__23205_23513 = (0);
var i__23206_23514 = (0);
while(true){
if((i__23206_23514 < count__23205_23513)){
var map__23212_23515 = chunk__23204_23512.cljs$core$IIndexed$_nth$arity$2(null,i__23206_23514);
var map__23212_23516__$1 = cljs.core.__destructure_map(map__23212_23515);
var task_23517 = map__23212_23516__$1;
var fn_str_23518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23212_23516__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23212_23516__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23520 = goog.getObjectByName(fn_str_23518,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23519)].join(''));

(fn_obj_23520.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23520.cljs$core$IFn$_invoke$arity$2(path,new_link_23510) : fn_obj_23520.call(null,path,new_link_23510));


var G__23521 = seq__23202_23511;
var G__23522 = chunk__23204_23512;
var G__23523 = count__23205_23513;
var G__23524 = (i__23206_23514 + (1));
seq__23202_23511 = G__23521;
chunk__23204_23512 = G__23522;
count__23205_23513 = G__23523;
i__23206_23514 = G__23524;
continue;
} else {
var temp__5823__auto___23525__$2 = cljs.core.seq(seq__23202_23511);
if(temp__5823__auto___23525__$2){
var seq__23202_23526__$1 = temp__5823__auto___23525__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23202_23526__$1)){
var c__5548__auto___23527 = cljs.core.chunk_first(seq__23202_23526__$1);
var G__23528 = cljs.core.chunk_rest(seq__23202_23526__$1);
var G__23529 = c__5548__auto___23527;
var G__23530 = cljs.core.count(c__5548__auto___23527);
var G__23531 = (0);
seq__23202_23511 = G__23528;
chunk__23204_23512 = G__23529;
count__23205_23513 = G__23530;
i__23206_23514 = G__23531;
continue;
} else {
var map__23215_23532 = cljs.core.first(seq__23202_23526__$1);
var map__23215_23533__$1 = cljs.core.__destructure_map(map__23215_23532);
var task_23534 = map__23215_23533__$1;
var fn_str_23535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23215_23533__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23215_23533__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23537 = goog.getObjectByName(fn_str_23535,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23536)].join(''));

(fn_obj_23537.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23537.cljs$core$IFn$_invoke$arity$2(path,new_link_23510) : fn_obj_23537.call(null,path,new_link_23510));


var G__23538 = cljs.core.next(seq__23202_23526__$1);
var G__23539 = null;
var G__23540 = (0);
var G__23541 = (0);
seq__23202_23511 = G__23538;
chunk__23204_23512 = G__23539;
count__23205_23513 = G__23540;
i__23206_23514 = G__23541;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23508);
});})(seq__23146_23451,chunk__23150_23452,count__23151_23453,i__23152_23454,seq__22893,chunk__22895,count__22896,i__22897,new_link_23510,path_match_23509,node_23508,seq__23146_23502__$1,temp__5823__auto___23501__$1,path,seq__22893__$1,temp__5823__auto__,map__22892,map__22892__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23509], 0));

goog.dom.insertSiblingAfter(new_link_23510,node_23508);


var G__23542 = cljs.core.next(seq__23146_23502__$1);
var G__23543 = null;
var G__23544 = (0);
var G__23545 = (0);
seq__23146_23451 = G__23542;
chunk__23150_23452 = G__23543;
count__23151_23453 = G__23544;
i__23152_23454 = G__23545;
continue;
} else {
var G__23546 = cljs.core.next(seq__23146_23502__$1);
var G__23547 = null;
var G__23548 = (0);
var G__23549 = (0);
seq__23146_23451 = G__23546;
chunk__23150_23452 = G__23547;
count__23151_23453 = G__23548;
i__23152_23454 = G__23549;
continue;
}
} else {
var G__23550 = cljs.core.next(seq__23146_23502__$1);
var G__23551 = null;
var G__23552 = (0);
var G__23553 = (0);
seq__23146_23451 = G__23550;
chunk__23150_23452 = G__23551;
count__23151_23453 = G__23552;
i__23152_23454 = G__23553;
continue;
}
}
} else {
}
}
break;
}


var G__23554 = cljs.core.next(seq__22893__$1);
var G__23555 = null;
var G__23556 = (0);
var G__23557 = (0);
seq__22893 = G__23554;
chunk__22895 = G__23555;
count__22896 = G__23556;
i__22897 = G__23557;
continue;
} else {
var G__23558 = cljs.core.next(seq__22893__$1);
var G__23559 = null;
var G__23560 = (0);
var G__23561 = (0);
seq__22893 = G__23558;
chunk__22895 = G__23559;
count__22896 = G__23560;
i__22897 = G__23561;
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
try{var G__23233 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__23233) : success.call(null,G__23233));
}catch (e23232){var e = e23232;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__23234,success,fail){
var map__23235 = p__23234;
var map__23235__$1 = cljs.core.__destructure_map(map__23235);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23235__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__23237 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__23237) : success.call(null,G__23237));
}catch (e23236){var e = e23236;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__23238,done,error){
var map__23239 = p__23238;
var map__23239__$1 = cljs.core.__destructure_map(map__23239);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23239__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__23240,done,error){
var map__23241 = p__23240;
var map__23241__$1 = cljs.core.__destructure_map(map__23241);
var msg = map__23241__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23241__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23241__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23241__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__23242){
var map__23243 = p__23242;
var map__23243__$1 = cljs.core.__destructure_map(map__23243);
var src = map__23243__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23243__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5023__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5023__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__23244 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23244) : done.call(null,G__23244));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__23245){
var map__23246 = p__23245;
var map__23246__$1 = cljs.core.__destructure_map(map__23246);
var msg__$1 = map__23246__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23246__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e23247){var ex = e23247;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__23248){
var map__23249 = p__23248;
var map__23249__$1 = cljs.core.__destructure_map(map__23249);
var env = map__23249__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23249__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__23252){
var map__23253 = p__23252;
var map__23253__$1 = cljs.core.__destructure_map(map__23253);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23253__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23253__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__23254){
var map__23255 = p__23254;
var map__23255__$1 = cljs.core.__destructure_map(map__23255);
var svc = map__23255__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23255__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
