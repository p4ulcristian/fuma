goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22100){
var map__22101 = p__22100;
var map__22101__$1 = cljs.core.__destructure_map(map__22101);
var m = map__22101__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22101__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22101__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22102_22192 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22103_22193 = null;
var count__22104_22194 = (0);
var i__22105_22195 = (0);
while(true){
if((i__22105_22195 < count__22104_22194)){
var f_22196 = chunk__22103_22193.cljs$core$IIndexed$_nth$arity$2(null,i__22105_22195);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_22196], 0));


var G__22197 = seq__22102_22192;
var G__22198 = chunk__22103_22193;
var G__22199 = count__22104_22194;
var G__22200 = (i__22105_22195 + (1));
seq__22102_22192 = G__22197;
chunk__22103_22193 = G__22198;
count__22104_22194 = G__22199;
i__22105_22195 = G__22200;
continue;
} else {
var temp__5823__auto___22205 = cljs.core.seq(seq__22102_22192);
if(temp__5823__auto___22205){
var seq__22102_22206__$1 = temp__5823__auto___22205;
if(cljs.core.chunked_seq_QMARK_(seq__22102_22206__$1)){
var c__5548__auto___22207 = cljs.core.chunk_first(seq__22102_22206__$1);
var G__22208 = cljs.core.chunk_rest(seq__22102_22206__$1);
var G__22209 = c__5548__auto___22207;
var G__22210 = cljs.core.count(c__5548__auto___22207);
var G__22211 = (0);
seq__22102_22192 = G__22208;
chunk__22103_22193 = G__22209;
count__22104_22194 = G__22210;
i__22105_22195 = G__22211;
continue;
} else {
var f_22213 = cljs.core.first(seq__22102_22206__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_22213], 0));


var G__22214 = cljs.core.next(seq__22102_22206__$1);
var G__22215 = null;
var G__22216 = (0);
var G__22217 = (0);
seq__22102_22192 = G__22214;
chunk__22103_22193 = G__22215;
count__22104_22194 = G__22216;
i__22105_22195 = G__22217;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22218 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_22218], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_22218)))?cljs.core.second(arglists_22218):arglists_22218)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22106_22219 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22107_22220 = null;
var count__22108_22221 = (0);
var i__22109_22222 = (0);
while(true){
if((i__22109_22222 < count__22108_22221)){
var vec__22118_22223 = chunk__22107_22220.cljs$core$IIndexed$_nth$arity$2(null,i__22109_22222);
var name_22224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22118_22223,(0),null);
var map__22121_22225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22118_22223,(1),null);
var map__22121_22226__$1 = cljs.core.__destructure_map(map__22121_22225);
var doc_22227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22121_22226__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22121_22226__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_22224], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_22228], 0));

if(cljs.core.truth_(doc_22227)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_22227], 0));
} else {
}


var G__22230 = seq__22106_22219;
var G__22231 = chunk__22107_22220;
var G__22232 = count__22108_22221;
var G__22233 = (i__22109_22222 + (1));
seq__22106_22219 = G__22230;
chunk__22107_22220 = G__22231;
count__22108_22221 = G__22232;
i__22109_22222 = G__22233;
continue;
} else {
var temp__5823__auto___22234 = cljs.core.seq(seq__22106_22219);
if(temp__5823__auto___22234){
var seq__22106_22235__$1 = temp__5823__auto___22234;
if(cljs.core.chunked_seq_QMARK_(seq__22106_22235__$1)){
var c__5548__auto___22236 = cljs.core.chunk_first(seq__22106_22235__$1);
var G__22237 = cljs.core.chunk_rest(seq__22106_22235__$1);
var G__22238 = c__5548__auto___22236;
var G__22239 = cljs.core.count(c__5548__auto___22236);
var G__22240 = (0);
seq__22106_22219 = G__22237;
chunk__22107_22220 = G__22238;
count__22108_22221 = G__22239;
i__22109_22222 = G__22240;
continue;
} else {
var vec__22122_22241 = cljs.core.first(seq__22106_22235__$1);
var name_22242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22122_22241,(0),null);
var map__22125_22243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22122_22241,(1),null);
var map__22125_22244__$1 = cljs.core.__destructure_map(map__22125_22243);
var doc_22245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22125_22244__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22125_22244__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_22242], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_22246], 0));

if(cljs.core.truth_(doc_22245)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_22245], 0));
} else {
}


var G__22247 = cljs.core.next(seq__22106_22235__$1);
var G__22248 = null;
var G__22249 = (0);
var G__22250 = (0);
seq__22106_22219 = G__22247;
chunk__22107_22220 = G__22248;
count__22108_22221 = G__22249;
i__22109_22222 = G__22250;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__22126 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22127 = null;
var count__22128 = (0);
var i__22129 = (0);
while(true){
if((i__22129 < count__22128)){
var role = chunk__22127.cljs$core$IIndexed$_nth$arity$2(null,i__22129);
var temp__5823__auto___22251__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___22251__$1)){
var spec_22252 = temp__5823__auto___22251__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_22252)], 0));
} else {
}


var G__22253 = seq__22126;
var G__22254 = chunk__22127;
var G__22255 = count__22128;
var G__22256 = (i__22129 + (1));
seq__22126 = G__22253;
chunk__22127 = G__22254;
count__22128 = G__22255;
i__22129 = G__22256;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__22126);
if(temp__5823__auto____$1){
var seq__22126__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__22126__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__22126__$1);
var G__22257 = cljs.core.chunk_rest(seq__22126__$1);
var G__22258 = c__5548__auto__;
var G__22259 = cljs.core.count(c__5548__auto__);
var G__22260 = (0);
seq__22126 = G__22257;
chunk__22127 = G__22258;
count__22128 = G__22259;
i__22129 = G__22260;
continue;
} else {
var role = cljs.core.first(seq__22126__$1);
var temp__5823__auto___22261__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___22261__$2)){
var spec_22262 = temp__5823__auto___22261__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_22262)], 0));
} else {
}


var G__22264 = cljs.core.next(seq__22126__$1);
var G__22265 = null;
var G__22266 = (0);
var G__22267 = (0);
seq__22126 = G__22264;
chunk__22127 = G__22265;
count__22128 = G__22266;
i__22129 = G__22267;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__22132 = datafied_throwable;
var map__22132__$1 = cljs.core.__destructure_map(map__22132);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22132__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22132__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22132__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__22133 = cljs.core.last(via);
var map__22133__$1 = cljs.core.__destructure_map(map__22133);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22133__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22133__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22133__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__22134 = data;
var map__22134__$1 = cljs.core.__destructure_map(map__22134);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22134__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22134__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22134__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__22135 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__22135__$1 = cljs.core.__destructure_map(map__22135);
var top_data = map__22135__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22135__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__22136 = phase;
var G__22136__$1 = (((G__22136 instanceof cljs.core.Keyword))?G__22136.fqn:null);
switch (G__22136__$1) {
case "read-source":
var map__22137 = data;
var map__22137__$1 = cljs.core.__destructure_map(map__22137);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22137__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22137__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__22138 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__22138__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22138,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22138);
var G__22138__$2 = (cljs.core.truth_((function (){var fexpr__22139 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22139.cljs$core$IFn$_invoke$arity$1 ? fexpr__22139.cljs$core$IFn$_invoke$arity$1(source) : fexpr__22139.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22138__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22138__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22138__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22138__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__22140 = top_data;
var G__22140__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22140,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22140);
var G__22140__$2 = (cljs.core.truth_((function (){var fexpr__22141 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22141.cljs$core$IFn$_invoke$arity$1 ? fexpr__22141.cljs$core$IFn$_invoke$arity$1(source) : fexpr__22141.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22140__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22140__$1);
var G__22140__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22140__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22140__$2);
var G__22140__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22140__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22140__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22140__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22140__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__22142 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22142,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22142,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22142,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22142,(3),null);
var G__22145 = top_data;
var G__22145__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22145,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__22145);
var G__22145__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22145__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__22145__$1);
var G__22145__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22145__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__22145__$2);
var G__22145__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22145__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22145__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22145__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22145__$4;
}

break;
case "execution":
var vec__22146 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22146,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22146,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22146,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22146,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__22131_SHARP_){
var or__5025__auto__ = (p1__22131_SHARP_ == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var fexpr__22149 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22149.cljs$core$IFn$_invoke$arity$1 ? fexpr__22149.cljs$core$IFn$_invoke$arity$1(p1__22131_SHARP_) : fexpr__22149.call(null,p1__22131_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return line;
}
})();
var G__22150 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__22150__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22150,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__22150);
var G__22150__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22150__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22150__$1);
var G__22150__$3 = (cljs.core.truth_((function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22150__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__22150__$2);
var G__22150__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22150__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__22150__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22150__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22150__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22136__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__22153){
var map__22154 = p__22153;
var map__22154__$1 = cljs.core.__destructure_map(map__22154);
var triage_data = map__22154__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22154__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22154__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22154__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22154__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22154__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22154__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22154__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22154__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = source;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = line;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5025__auto__ = class$;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__22155 = phase;
var G__22155__$1 = (((G__22155 instanceof cljs.core.Keyword))?G__22155.fqn:null);
switch (G__22155__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__22156 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__22157 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22158 = loc;
var G__22159 = (cljs.core.truth_(spec)?(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22160_22273 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22161_22274 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22162_22275 = true;
var _STAR_print_fn_STAR__temp_val__22163_22276 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22162_22275);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22163_22276);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22151_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__22151_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22161_22274);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22160_22273);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__22156,G__22157,G__22158,G__22159) : format.call(null,G__22156,G__22157,G__22158,G__22159));

break;
case "macroexpansion":
var G__22164 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__22165 = cause_type;
var G__22166 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22167 = loc;
var G__22168 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22164,G__22165,G__22166,G__22167,G__22168) : format.call(null,G__22164,G__22165,G__22166,G__22167,G__22168));

break;
case "compile-syntax-check":
var G__22169 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__22170 = cause_type;
var G__22171 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22172 = loc;
var G__22173 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22169,G__22170,G__22171,G__22172,G__22173) : format.call(null,G__22169,G__22170,G__22171,G__22172,G__22173));

break;
case "compilation":
var G__22174 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__22175 = cause_type;
var G__22176 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22177 = loc;
var G__22178 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22174,G__22175,G__22176,G__22177,G__22178) : format.call(null,G__22174,G__22175,G__22176,G__22177,G__22178));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__22179 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__22180 = symbol;
var G__22181 = loc;
var G__22182 = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22183_22277 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22184_22278 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22185_22279 = true;
var _STAR_print_fn_STAR__temp_val__22186_22280 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22185_22279);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22186_22280);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22152_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__22152_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22184_22278);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22183_22277);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__22179,G__22180,G__22181,G__22182) : format.call(null,G__22179,G__22180,G__22181,G__22182));
} else {
var G__22187 = "Execution error%s at %s(%s).\n%s\n";
var G__22188 = cause_type;
var G__22189 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22190 = loc;
var G__22191 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22187,G__22188,G__22189,G__22190,G__22191) : format.call(null,G__22187,G__22188,G__22189,G__22190,G__22191));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22155__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
