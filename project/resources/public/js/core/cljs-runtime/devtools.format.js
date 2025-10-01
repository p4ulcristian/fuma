goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_13114 = (function (value){
var x__5373__auto__ = (((value == null))?null:value);
var m__5374__auto__ = (devtools.format._header[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5374__auto__.call(null,value));
} else {
var m__5372__auto__ = (devtools.format._header["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5372__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_13114(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_13130 = (function (value){
var x__5373__auto__ = (((value == null))?null:value);
var m__5374__auto__ = (devtools.format._has_body[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5374__auto__.call(null,value));
} else {
var m__5372__auto__ = (devtools.format._has_body["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5372__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_13130(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_13139 = (function (value){
var x__5373__auto__ = (((value == null))?null:value);
var m__5374__auto__ = (devtools.format._body[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5374__auto__.call(null,value));
} else {
var m__5372__auto__ = (devtools.format._body["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5372__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_13139(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o13001 = temp__5821__auto__;
var temp__5821__auto____$1 = (o13001["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o13002 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o13002["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o13003 = temp__5821__auto____$2;
return (o13003["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o13009 = temp__5821__auto__;
var temp__5821__auto____$1 = (o13009["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o13010 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o13010["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o13011 = temp__5821__auto____$2;
return (o13011["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o13012 = temp__5821__auto__;
var temp__5821__auto____$1 = (o13012["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o13013 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o13013["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o13014 = temp__5821__auto____$2;
return (o13014["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o13016 = temp__5821__auto__;
var temp__5821__auto____$1 = (o13016["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o13017 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o13017["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o13018 = temp__5821__auto____$2;
return (o13018["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o13025 = temp__5821__auto__;
var temp__5821__auto____$1 = (o13025["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o13026 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o13026["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o13027 = temp__5821__auto____$2;
return (o13027["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o13035 = temp__5821__auto__;
var temp__5821__auto____$1 = (o13035["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o13036 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o13036["markup"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o13037 = temp__5821__auto____$2;
return (o13037["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o13039 = temp__5821__auto__;
var temp__5821__auto____$1 = (o13039["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o13040 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o13040["markup"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o13041 = temp__5821__auto____$2;
return (o13041["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13157 = arguments.length;
var i__5750__auto___13158 = (0);
while(true){
if((i__5750__auto___13158 < len__5749__auto___13157)){
args__5755__auto__.push((arguments[i__5750__auto___13158]));

var G__13159 = (i__5750__auto___13158 + (1));
i__5750__auto___13158 = G__13159;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq13047){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13047));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13161 = arguments.length;
var i__5750__auto___13162 = (0);
while(true){
if((i__5750__auto___13162 < len__5749__auto___13161)){
args__5755__auto__.push((arguments[i__5750__auto___13162]));

var G__13165 = (i__5750__auto___13162 + (1));
i__5750__auto___13162 = G__13165;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq13053){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13053));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13167 = arguments.length;
var i__5750__auto___13168 = (0);
while(true){
if((i__5750__auto___13168 < len__5749__auto___13167)){
args__5755__auto__.push((arguments[i__5750__auto___13168]));

var G__13169 = (i__5750__auto___13168 + (1));
i__5750__auto___13168 = G__13169;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq13062){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13062));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13170 = arguments.length;
var i__5750__auto___13171 = (0);
while(true){
if((i__5750__auto___13171 < len__5749__auto___13170)){
args__5755__auto__.push((arguments[i__5750__auto___13171]));

var G__13172 = (i__5750__auto___13171 + (1));
i__5750__auto___13171 = G__13172;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq13063){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13063));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13176 = arguments.length;
var i__5750__auto___13181 = (0);
while(true){
if((i__5750__auto___13181 < len__5749__auto___13176)){
args__5755__auto__.push((arguments[i__5750__auto___13181]));

var G__13182 = (i__5750__auto___13181 + (1));
i__5750__auto___13181 = G__13182;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq13064){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13064));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13183 = arguments.length;
var i__5750__auto___13184 = (0);
while(true){
if((i__5750__auto___13184 < len__5749__auto___13183)){
args__5755__auto__.push((arguments[i__5750__auto___13184]));

var G__13185 = (i__5750__auto___13184 + (1));
i__5750__auto___13184 = G__13185;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq13068){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13068));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13190 = arguments.length;
var i__5750__auto___13191 = (0);
while(true){
if((i__5750__auto___13191 < len__5749__auto___13190)){
args__5755__auto__.push((arguments[i__5750__auto___13191]));

var G__13193 = (i__5750__auto___13191 + (1));
i__5750__auto___13191 = G__13193;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq13074){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13074));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13198 = arguments.length;
var i__5750__auto___13199 = (0);
while(true){
if((i__5750__auto___13199 < len__5749__auto___13198)){
args__5755__auto__.push((arguments[i__5750__auto___13199]));

var G__13203 = (i__5750__auto___13199 + (1));
i__5750__auto___13199 = G__13203;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__13085){
var vec__13086 = p__13085;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13086,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__13078_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__13078_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq13081){
var G__13082 = cljs.core.first(seq13081);
var seq13081__$1 = cljs.core.next(seq13081);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13082,seq13081__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__13090 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__13091 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__13092 = (function (){var G__13093 = new cljs.core.Keyword(null,"li","li",723558921);
var G__13094 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__13095 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__13093,G__13094,G__13095) : devtools.format.make_template_fn.call(null,G__13093,G__13094,G__13095));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__13090,G__13091,G__13092) : devtools.format.make_template_fn.call(null,G__13090,G__13091,G__13092));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13205 = arguments.length;
var i__5750__auto___13206 = (0);
while(true){
if((i__5750__auto___13206 < len__5749__auto___13205)){
args__5755__auto__.push((arguments[i__5750__auto___13206]));

var G__13207 = (i__5750__auto___13206 + (1));
i__5750__auto___13206 = G__13207;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq13096){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13096));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13209 = arguments.length;
var i__5750__auto___13210 = (0);
while(true){
if((i__5750__auto___13210 < len__5749__auto___13209)){
args__5755__auto__.push((arguments[i__5750__auto___13210]));

var G__13213 = (i__5750__auto___13210 + (1));
i__5750__auto___13210 = G__13213;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq13099){
var G__13100 = cljs.core.first(seq13099);
var seq13099__$1 = cljs.core.next(seq13099);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13100,seq13099__$1);
}));


//# sourceMappingURL=devtools.format.js.map
