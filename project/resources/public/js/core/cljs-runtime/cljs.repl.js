goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21381){
var map__21382 = p__21381;
var map__21382__$1 = cljs.core.__destructure_map(map__21382);
var m = map__21382__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21382__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21382__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__21384_21710 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21385_21711 = null;
var count__21386_21712 = (0);
var i__21387_21713 = (0);
while(true){
if((i__21387_21713 < count__21386_21712)){
var f_21715 = chunk__21385_21711.cljs$core$IIndexed$_nth$arity$2(null,i__21387_21713);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21715], 0));


var G__21716 = seq__21384_21710;
var G__21717 = chunk__21385_21711;
var G__21718 = count__21386_21712;
var G__21719 = (i__21387_21713 + (1));
seq__21384_21710 = G__21716;
chunk__21385_21711 = G__21717;
count__21386_21712 = G__21718;
i__21387_21713 = G__21719;
continue;
} else {
var temp__5823__auto___21720 = cljs.core.seq(seq__21384_21710);
if(temp__5823__auto___21720){
var seq__21384_21721__$1 = temp__5823__auto___21720;
if(cljs.core.chunked_seq_QMARK_(seq__21384_21721__$1)){
var c__5548__auto___21722 = cljs.core.chunk_first(seq__21384_21721__$1);
var G__21723 = cljs.core.chunk_rest(seq__21384_21721__$1);
var G__21724 = c__5548__auto___21722;
var G__21725 = cljs.core.count(c__5548__auto___21722);
var G__21726 = (0);
seq__21384_21710 = G__21723;
chunk__21385_21711 = G__21724;
count__21386_21712 = G__21725;
i__21387_21713 = G__21726;
continue;
} else {
var f_21727 = cljs.core.first(seq__21384_21721__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21727], 0));


var G__21728 = cljs.core.next(seq__21384_21721__$1);
var G__21729 = null;
var G__21730 = (0);
var G__21731 = (0);
seq__21384_21710 = G__21728;
chunk__21385_21711 = G__21729;
count__21386_21712 = G__21730;
i__21387_21713 = G__21731;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21732 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_21732], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_21732)))?cljs.core.second(arglists_21732):arglists_21732)], 0));
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
var seq__21393_21746 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21394_21747 = null;
var count__21395_21748 = (0);
var i__21396_21749 = (0);
while(true){
if((i__21396_21749 < count__21395_21748)){
var vec__21432_21751 = chunk__21394_21747.cljs$core$IIndexed$_nth$arity$2(null,i__21396_21749);
var name_21752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21432_21751,(0),null);
var map__21435_21753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21432_21751,(1),null);
var map__21435_21754__$1 = cljs.core.__destructure_map(map__21435_21753);
var doc_21755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21435_21754__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21435_21754__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21752], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21756], 0));

if(cljs.core.truth_(doc_21755)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21755], 0));
} else {
}


var G__21767 = seq__21393_21746;
var G__21768 = chunk__21394_21747;
var G__21769 = count__21395_21748;
var G__21770 = (i__21396_21749 + (1));
seq__21393_21746 = G__21767;
chunk__21394_21747 = G__21768;
count__21395_21748 = G__21769;
i__21396_21749 = G__21770;
continue;
} else {
var temp__5823__auto___21772 = cljs.core.seq(seq__21393_21746);
if(temp__5823__auto___21772){
var seq__21393_21776__$1 = temp__5823__auto___21772;
if(cljs.core.chunked_seq_QMARK_(seq__21393_21776__$1)){
var c__5548__auto___21783 = cljs.core.chunk_first(seq__21393_21776__$1);
var G__21784 = cljs.core.chunk_rest(seq__21393_21776__$1);
var G__21785 = c__5548__auto___21783;
var G__21786 = cljs.core.count(c__5548__auto___21783);
var G__21787 = (0);
seq__21393_21746 = G__21784;
chunk__21394_21747 = G__21785;
count__21395_21748 = G__21786;
i__21396_21749 = G__21787;
continue;
} else {
var vec__21453_21788 = cljs.core.first(seq__21393_21776__$1);
var name_21789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21453_21788,(0),null);
var map__21456_21790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21453_21788,(1),null);
var map__21456_21791__$1 = cljs.core.__destructure_map(map__21456_21790);
var doc_21792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21456_21791__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21456_21791__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21789], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21793], 0));

if(cljs.core.truth_(doc_21792)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21792], 0));
} else {
}


var G__21795 = cljs.core.next(seq__21393_21776__$1);
var G__21796 = null;
var G__21797 = (0);
var G__21798 = (0);
seq__21393_21746 = G__21795;
chunk__21394_21747 = G__21796;
count__21395_21748 = G__21797;
i__21396_21749 = G__21798;
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

var seq__21469 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21470 = null;
var count__21471 = (0);
var i__21472 = (0);
while(true){
if((i__21472 < count__21471)){
var role = chunk__21470.cljs$core$IIndexed$_nth$arity$2(null,i__21472);
var temp__5823__auto___21799__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___21799__$1)){
var spec_21800 = temp__5823__auto___21799__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21800)], 0));
} else {
}


var G__21801 = seq__21469;
var G__21802 = chunk__21470;
var G__21803 = count__21471;
var G__21804 = (i__21472 + (1));
seq__21469 = G__21801;
chunk__21470 = G__21802;
count__21471 = G__21803;
i__21472 = G__21804;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__21469);
if(temp__5823__auto____$1){
var seq__21469__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__21469__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__21469__$1);
var G__21805 = cljs.core.chunk_rest(seq__21469__$1);
var G__21806 = c__5548__auto__;
var G__21807 = cljs.core.count(c__5548__auto__);
var G__21808 = (0);
seq__21469 = G__21805;
chunk__21470 = G__21806;
count__21471 = G__21807;
i__21472 = G__21808;
continue;
} else {
var role = cljs.core.first(seq__21469__$1);
var temp__5823__auto___21809__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___21809__$2)){
var spec_21810 = temp__5823__auto___21809__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21810)], 0));
} else {
}


var G__21811 = cljs.core.next(seq__21469__$1);
var G__21812 = null;
var G__21813 = (0);
var G__21814 = (0);
seq__21469 = G__21811;
chunk__21470 = G__21812;
count__21471 = G__21813;
i__21472 = G__21814;
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
var map__21512 = datafied_throwable;
var map__21512__$1 = cljs.core.__destructure_map(map__21512);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21512__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21512__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21512__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21513 = cljs.core.last(via);
var map__21513__$1 = cljs.core.__destructure_map(map__21513);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21513__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21513__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21513__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21514 = data;
var map__21514__$1 = cljs.core.__destructure_map(map__21514);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21514__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21514__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21514__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21515 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__21515__$1 = cljs.core.__destructure_map(map__21515);
var top_data = map__21515__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21515__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__21517 = phase;
var G__21517__$1 = (((G__21517 instanceof cljs.core.Keyword))?G__21517.fqn:null);
switch (G__21517__$1) {
case "read-source":
var map__21520 = data;
var map__21520__$1 = cljs.core.__destructure_map(map__21520);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21520__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21520__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21521 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__21521__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21521,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21521);
var G__21521__$2 = (cljs.core.truth_((function (){var fexpr__21522 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21522.cljs$core$IFn$_invoke$arity$1 ? fexpr__21522.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21522.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21521__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21521__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21521__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21521__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21527 = top_data;
var G__21527__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21527,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21527);
var G__21527__$2 = (cljs.core.truth_((function (){var fexpr__21532 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21532.cljs$core$IFn$_invoke$arity$1 ? fexpr__21532.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21532.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21527__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21527__$1);
var G__21527__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21527__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21527__$2);
var G__21527__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21527__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21527__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21527__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21527__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21562 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21562,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21562,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21562,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21562,(3),null);
var G__21588 = top_data;
var G__21588__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21588,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21588);
var G__21588__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21588__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21588__$1);
var G__21588__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21588__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21588__$2);
var G__21588__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21588__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21588__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21588__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21588__$4;
}

break;
case "execution":
var vec__21632 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21632,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21632,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21632,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21632,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__21490_SHARP_){
var or__5025__auto__ = (p1__21490_SHARP_ == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var fexpr__21636 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21636.cljs$core$IFn$_invoke$arity$1 ? fexpr__21636.cljs$core$IFn$_invoke$arity$1(p1__21490_SHARP_) : fexpr__21636.call(null,p1__21490_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return line;
}
})();
var G__21644 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21644__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21644,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21644);
var G__21644__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21644__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21644__$1);
var G__21644__$3 = (cljs.core.truth_((function (){var or__5025__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21644__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21644__$2);
var G__21644__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21644__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21644__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21644__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21644__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21517__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21661){
var map__21662 = p__21661;
var map__21662__$1 = cljs.core.__destructure_map(map__21662);
var triage_data = map__21662__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21662__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21662__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21662__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21662__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21662__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21662__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21662__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21662__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__21666 = phase;
var G__21666__$1 = (((G__21666 instanceof cljs.core.Keyword))?G__21666.fqn:null);
switch (G__21666__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__21667 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__21668 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21669 = loc;
var G__21670 = (cljs.core.truth_(spec)?(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21671_21858 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21672_21859 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21673_21860 = true;
var _STAR_print_fn_STAR__temp_val__21674_21861 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21673_21860);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21674_21861);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21656_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21656_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21672_21859);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21671_21858);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21667,G__21668,G__21669,G__21670) : format.call(null,G__21667,G__21668,G__21669,G__21670));

break;
case "macroexpansion":
var G__21676 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__21677 = cause_type;
var G__21678 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21679 = loc;
var G__21680 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21676,G__21677,G__21678,G__21679,G__21680) : format.call(null,G__21676,G__21677,G__21678,G__21679,G__21680));

break;
case "compile-syntax-check":
var G__21682 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__21683 = cause_type;
var G__21684 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21685 = loc;
var G__21686 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21682,G__21683,G__21684,G__21685,G__21686) : format.call(null,G__21682,G__21683,G__21684,G__21685,G__21686));

break;
case "compilation":
var G__21687 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__21688 = cause_type;
var G__21689 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21690 = loc;
var G__21691 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21687,G__21688,G__21689,G__21690,G__21691) : format.call(null,G__21687,G__21688,G__21689,G__21690,G__21691));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__21692 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__21693 = symbol;
var G__21694 = loc;
var G__21695 = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21696_21868 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21697_21869 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21698_21870 = true;
var _STAR_print_fn_STAR__temp_val__21699_21871 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21698_21870);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21699_21871);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21659_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21659_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21697_21869);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21696_21868);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21692,G__21693,G__21694,G__21695) : format.call(null,G__21692,G__21693,G__21694,G__21695));
} else {
var G__21701 = "Execution error%s at %s(%s).\n%s\n";
var G__21702 = cause_type;
var G__21703 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21704 = loc;
var G__21705 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21701,G__21702,G__21703,G__21704,G__21705) : format.call(null,G__21701,G__21702,G__21703,G__21704,G__21705));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21666__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
