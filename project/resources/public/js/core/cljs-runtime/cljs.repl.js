goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21574){
var map__21578 = p__21574;
var map__21578__$1 = cljs.core.__destructure_map(map__21578);
var m = map__21578__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21578__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21578__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__21699_21904 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21700_21905 = null;
var count__21701_21906 = (0);
var i__21702_21907 = (0);
while(true){
if((i__21702_21907 < count__21701_21906)){
var f_21909 = chunk__21700_21905.cljs$core$IIndexed$_nth$arity$2(null,i__21702_21907);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21909], 0));


var G__21910 = seq__21699_21904;
var G__21911 = chunk__21700_21905;
var G__21912 = count__21701_21906;
var G__21913 = (i__21702_21907 + (1));
seq__21699_21904 = G__21910;
chunk__21700_21905 = G__21911;
count__21701_21906 = G__21912;
i__21702_21907 = G__21913;
continue;
} else {
var temp__5823__auto___21914 = cljs.core.seq(seq__21699_21904);
if(temp__5823__auto___21914){
var seq__21699_21915__$1 = temp__5823__auto___21914;
if(cljs.core.chunked_seq_QMARK_(seq__21699_21915__$1)){
var c__5548__auto___21916 = cljs.core.chunk_first(seq__21699_21915__$1);
var G__21917 = cljs.core.chunk_rest(seq__21699_21915__$1);
var G__21918 = c__5548__auto___21916;
var G__21919 = cljs.core.count(c__5548__auto___21916);
var G__21920 = (0);
seq__21699_21904 = G__21917;
chunk__21700_21905 = G__21918;
count__21701_21906 = G__21919;
i__21702_21907 = G__21920;
continue;
} else {
var f_21921 = cljs.core.first(seq__21699_21915__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21921], 0));


var G__21923 = cljs.core.next(seq__21699_21915__$1);
var G__21924 = null;
var G__21925 = (0);
var G__21926 = (0);
seq__21699_21904 = G__21923;
chunk__21700_21905 = G__21924;
count__21701_21906 = G__21925;
i__21702_21907 = G__21926;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21927 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_21927], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_21927)))?cljs.core.second(arglists_21927):arglists_21927)], 0));
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
var seq__21722_21930 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21724_21931 = null;
var count__21725_21932 = (0);
var i__21726_21933 = (0);
while(true){
if((i__21726_21933 < count__21725_21932)){
var vec__21746_21934 = chunk__21724_21931.cljs$core$IIndexed$_nth$arity$2(null,i__21726_21933);
var name_21935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21746_21934,(0),null);
var map__21749_21936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21746_21934,(1),null);
var map__21749_21937__$1 = cljs.core.__destructure_map(map__21749_21936);
var doc_21938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21749_21937__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21749_21937__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21935], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21939], 0));

if(cljs.core.truth_(doc_21938)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21938], 0));
} else {
}


var G__21941 = seq__21722_21930;
var G__21942 = chunk__21724_21931;
var G__21943 = count__21725_21932;
var G__21944 = (i__21726_21933 + (1));
seq__21722_21930 = G__21941;
chunk__21724_21931 = G__21942;
count__21725_21932 = G__21943;
i__21726_21933 = G__21944;
continue;
} else {
var temp__5823__auto___21945 = cljs.core.seq(seq__21722_21930);
if(temp__5823__auto___21945){
var seq__21722_21947__$1 = temp__5823__auto___21945;
if(cljs.core.chunked_seq_QMARK_(seq__21722_21947__$1)){
var c__5548__auto___21948 = cljs.core.chunk_first(seq__21722_21947__$1);
var G__21949 = cljs.core.chunk_rest(seq__21722_21947__$1);
var G__21950 = c__5548__auto___21948;
var G__21951 = cljs.core.count(c__5548__auto___21948);
var G__21952 = (0);
seq__21722_21930 = G__21949;
chunk__21724_21931 = G__21950;
count__21725_21932 = G__21951;
i__21726_21933 = G__21952;
continue;
} else {
var vec__21754_21953 = cljs.core.first(seq__21722_21947__$1);
var name_21954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21754_21953,(0),null);
var map__21757_21955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21754_21953,(1),null);
var map__21757_21956__$1 = cljs.core.__destructure_map(map__21757_21955);
var doc_21957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21757_21956__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21757_21956__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21954], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21958], 0));

if(cljs.core.truth_(doc_21957)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21957], 0));
} else {
}


var G__21962 = cljs.core.next(seq__21722_21947__$1);
var G__21963 = null;
var G__21964 = (0);
var G__21965 = (0);
seq__21722_21930 = G__21962;
chunk__21724_21931 = G__21963;
count__21725_21932 = G__21964;
i__21726_21933 = G__21965;
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

var seq__21758 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21759 = null;
var count__21760 = (0);
var i__21761 = (0);
while(true){
if((i__21761 < count__21760)){
var role = chunk__21759.cljs$core$IIndexed$_nth$arity$2(null,i__21761);
var temp__5823__auto___21973__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___21973__$1)){
var spec_21976 = temp__5823__auto___21973__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21976)], 0));
} else {
}


var G__21981 = seq__21758;
var G__21982 = chunk__21759;
var G__21983 = count__21760;
var G__21984 = (i__21761 + (1));
seq__21758 = G__21981;
chunk__21759 = G__21982;
count__21760 = G__21983;
i__21761 = G__21984;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__21758);
if(temp__5823__auto____$1){
var seq__21758__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__21758__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__21758__$1);
var G__21989 = cljs.core.chunk_rest(seq__21758__$1);
var G__21990 = c__5548__auto__;
var G__21991 = cljs.core.count(c__5548__auto__);
var G__21992 = (0);
seq__21758 = G__21989;
chunk__21759 = G__21990;
count__21760 = G__21991;
i__21761 = G__21992;
continue;
} else {
var role = cljs.core.first(seq__21758__$1);
var temp__5823__auto___21997__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___21997__$2)){
var spec_21998 = temp__5823__auto___21997__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21998)], 0));
} else {
}


var G__21999 = cljs.core.next(seq__21758__$1);
var G__22000 = null;
var G__22001 = (0);
var G__22002 = (0);
seq__21758 = G__21999;
chunk__21759 = G__22000;
count__21760 = G__22001;
i__21761 = G__22002;
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
var map__21795 = datafied_throwable;
var map__21795__$1 = cljs.core.__destructure_map(map__21795);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21795__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21795__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21795__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21796 = cljs.core.last(via);
var map__21796__$1 = cljs.core.__destructure_map(map__21796);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21796__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21796__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21796__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21797 = data;
var map__21797__$1 = cljs.core.__destructure_map(map__21797);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21797__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21797__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21797__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21798 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__21798__$1 = cljs.core.__destructure_map(map__21798);
var top_data = map__21798__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21798__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__21803 = phase;
var G__21803__$1 = (((G__21803 instanceof cljs.core.Keyword))?G__21803.fqn:null);
switch (G__21803__$1) {
case "read-source":
var map__21804 = data;
var map__21804__$1 = cljs.core.__destructure_map(map__21804);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21804__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21804__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21805 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__21805__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21805,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21805);
var G__21805__$2 = (cljs.core.truth_((function (){var fexpr__21806 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21806.cljs$core$IFn$_invoke$arity$1 ? fexpr__21806.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21806.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21805__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21805__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21805__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21805__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21807 = top_data;
var G__21807__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21807,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21807);
var G__21807__$2 = (cljs.core.truth_((function (){var fexpr__21808 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21808.cljs$core$IFn$_invoke$arity$1 ? fexpr__21808.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21808.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21807__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21807__$1);
var G__21807__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21807__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21807__$2);
var G__21807__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21807__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21807__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21807__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21807__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21809 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21809,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21809,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21809,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21809,(3),null);
var G__21812 = top_data;
var G__21812__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21812,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21812);
var G__21812__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21812__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21812__$1);
var G__21812__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21812__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21812__$2);
var G__21812__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21812__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21812__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21812__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21812__$4;
}

break;
case "execution":
var vec__21817 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21817,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21817,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21817,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21817,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__21788_SHARP_){
var or__5025__auto__ = (p1__21788_SHARP_ == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var fexpr__21828 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21828.cljs$core$IFn$_invoke$arity$1 ? fexpr__21828.cljs$core$IFn$_invoke$arity$1(p1__21788_SHARP_) : fexpr__21828.call(null,p1__21788_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return line;
}
})();
var G__21829 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21829__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21829,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21829);
var G__21829__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21829__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21829__$1);
var G__21829__$3 = (cljs.core.truth_((function (){var or__5025__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21829__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21829__$2);
var G__21829__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21829__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21829__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21829__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21829__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21803__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21853){
var map__21854 = p__21853;
var map__21854__$1 = cljs.core.__destructure_map(map__21854);
var triage_data = map__21854__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21854__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21854__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21854__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21854__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21854__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21854__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21854__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21854__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__21866 = phase;
var G__21866__$1 = (((G__21866 instanceof cljs.core.Keyword))?G__21866.fqn:null);
switch (G__21866__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__21867 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__21868 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21869 = loc;
var G__21870 = (cljs.core.truth_(spec)?(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21871_22078 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21872_22079 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21873_22080 = true;
var _STAR_print_fn_STAR__temp_val__21874_22081 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21873_22080);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21874_22081);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21844_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21844_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21872_22079);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21871_22078);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21867,G__21868,G__21869,G__21870) : format.call(null,G__21867,G__21868,G__21869,G__21870));

break;
case "macroexpansion":
var G__21875 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__21876 = cause_type;
var G__21877 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21878 = loc;
var G__21879 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21875,G__21876,G__21877,G__21878,G__21879) : format.call(null,G__21875,G__21876,G__21877,G__21878,G__21879));

break;
case "compile-syntax-check":
var G__21880 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__21881 = cause_type;
var G__21882 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21883 = loc;
var G__21884 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21880,G__21881,G__21882,G__21883,G__21884) : format.call(null,G__21880,G__21881,G__21882,G__21883,G__21884));

break;
case "compilation":
var G__21885 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__21886 = cause_type;
var G__21887 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21888 = loc;
var G__21889 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21885,G__21886,G__21887,G__21888,G__21889) : format.call(null,G__21885,G__21886,G__21887,G__21888,G__21889));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__21890 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__21891 = symbol;
var G__21892 = loc;
var G__21893 = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21894_22125 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21895_22126 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21896_22127 = true;
var _STAR_print_fn_STAR__temp_val__21897_22128 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21896_22127);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21897_22128);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21849_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21849_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21895_22126);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21894_22125);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21890,G__21891,G__21892,G__21893) : format.call(null,G__21890,G__21891,G__21892,G__21893));
} else {
var G__21898 = "Execution error%s at %s(%s).\n%s\n";
var G__21899 = cause_type;
var G__21900 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21901 = loc;
var G__21902 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21898,G__21899,G__21900,G__21901,G__21902) : format.call(null,G__21898,G__21899,G__21900,G__21901,G__21902));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21866__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
