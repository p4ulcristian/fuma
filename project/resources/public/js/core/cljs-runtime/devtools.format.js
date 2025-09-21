goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_13066 = (function (value){
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
return devtools$format$IDevtoolsFormat$_header$dyn_13066(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_13073 = (function (value){
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
return devtools$format$IDevtoolsFormat$_has_body$dyn_13073(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_13078 = (function (value){
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
return devtools$format$IDevtoolsFormat$_body$dyn_13078(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o12968 = temp__5821__auto__;
var temp__5821__auto____$1 = (o12968["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o12969 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o12969["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o12970 = temp__5821__auto____$2;
return (o12970["make_template"]);
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
var o12975 = temp__5821__auto__;
var temp__5821__auto____$1 = (o12975["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o12976 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o12976["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o12977 = temp__5821__auto____$2;
return (o12977["make_group"]);
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
var o12979 = temp__5821__auto__;
var temp__5821__auto____$1 = (o12979["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o12980 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o12980["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o12981 = temp__5821__auto____$2;
return (o12981["make_reference"]);
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
var o12983 = temp__5821__auto__;
var temp__5821__auto____$1 = (o12983["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o12984 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o12984["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o12985 = temp__5821__auto____$2;
return (o12985["make_surrogate"]);
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
var o12986 = temp__5821__auto__;
var temp__5821__auto____$1 = (o12986["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o12987 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o12987["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o12988 = temp__5821__auto____$2;
return (o12988["render_markup"]);
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
var o12990 = temp__5821__auto__;
var temp__5821__auto____$1 = (o12990["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o12991 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o12991["markup"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o12992 = temp__5821__auto____$2;
return (o12992["_LT_header_GT_"]);
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
var o12993 = temp__5821__auto__;
var temp__5821__auto____$1 = (o12993["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o12994 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o12994["markup"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o12995 = temp__5821__auto____$2;
return (o12995["_LT_standard_body_GT_"]);
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
var len__5749__auto___13107 = arguments.length;
var i__5750__auto___13109 = (0);
while(true){
if((i__5750__auto___13109 < len__5749__auto___13107)){
args__5755__auto__.push((arguments[i__5750__auto___13109]));

var G__13110 = (i__5750__auto___13109 + (1));
i__5750__auto___13109 = G__13110;
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
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq13009){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13009));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13115 = arguments.length;
var i__5750__auto___13116 = (0);
while(true){
if((i__5750__auto___13116 < len__5749__auto___13115)){
args__5755__auto__.push((arguments[i__5750__auto___13116]));

var G__13117 = (i__5750__auto___13116 + (1));
i__5750__auto___13116 = G__13117;
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
(devtools.format.make_template.cljs$lang$applyTo = (function (seq13017){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13017));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13118 = arguments.length;
var i__5750__auto___13119 = (0);
while(true){
if((i__5750__auto___13119 < len__5749__auto___13118)){
args__5755__auto__.push((arguments[i__5750__auto___13119]));

var G__13125 = (i__5750__auto___13119 + (1));
i__5750__auto___13119 = G__13125;
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
(devtools.format.make_group.cljs$lang$applyTo = (function (seq13020){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13020));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13131 = arguments.length;
var i__5750__auto___13133 = (0);
while(true){
if((i__5750__auto___13133 < len__5749__auto___13131)){
args__5755__auto__.push((arguments[i__5750__auto___13133]));

var G__13135 = (i__5750__auto___13133 + (1));
i__5750__auto___13133 = G__13135;
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
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq13023){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13023));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13142 = arguments.length;
var i__5750__auto___13144 = (0);
while(true){
if((i__5750__auto___13144 < len__5749__auto___13142)){
args__5755__auto__.push((arguments[i__5750__auto___13144]));

var G__13146 = (i__5750__auto___13144 + (1));
i__5750__auto___13144 = G__13146;
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
(devtools.format.template.cljs$lang$applyTo = (function (seq13030){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13030));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13157 = arguments.length;
var i__5750__auto___13158 = (0);
while(true){
if((i__5750__auto___13158 < len__5749__auto___13157)){
args__5755__auto__.push((arguments[i__5750__auto___13158]));

var G__13160 = (i__5750__auto___13158 + (1));
i__5750__auto___13158 = G__13160;
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
(devtools.format.group.cljs$lang$applyTo = (function (seq13038){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13038));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13166 = arguments.length;
var i__5750__auto___13167 = (0);
while(true){
if((i__5750__auto___13167 < len__5749__auto___13166)){
args__5755__auto__.push((arguments[i__5750__auto___13167]));

var G__13170 = (i__5750__auto___13167 + (1));
i__5750__auto___13167 = G__13170;
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
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq13041){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13041));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13175 = arguments.length;
var i__5750__auto___13176 = (0);
while(true){
if((i__5750__auto___13176 < len__5749__auto___13175)){
args__5755__auto__.push((arguments[i__5750__auto___13176]));

var G__13177 = (i__5750__auto___13176 + (1));
i__5750__auto___13176 = G__13177;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__13048){
var vec__13049 = p__13048;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13049,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__13045_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__13045_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq13046){
var G__13047 = cljs.core.first(seq13046);
var seq13046__$1 = cljs.core.next(seq13046);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13047,seq13046__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__13052 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__13053 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__13054 = (function (){var G__13055 = new cljs.core.Keyword(null,"li","li",723558921);
var G__13056 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__13057 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__13055,G__13056,G__13057) : devtools.format.make_template_fn.call(null,G__13055,G__13056,G__13057));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__13052,G__13053,G__13054) : devtools.format.make_template_fn.call(null,G__13052,G__13053,G__13054));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13186 = arguments.length;
var i__5750__auto___13188 = (0);
while(true){
if((i__5750__auto___13188 < len__5749__auto___13186)){
args__5755__auto__.push((arguments[i__5750__auto___13188]));

var G__13189 = (i__5750__auto___13188 + (1));
i__5750__auto___13188 = G__13189;
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
(devtools.format.build_header.cljs$lang$applyTo = (function (seq13058){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13058));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13206 = arguments.length;
var i__5750__auto___13207 = (0);
while(true){
if((i__5750__auto___13207 < len__5749__auto___13206)){
args__5755__auto__.push((arguments[i__5750__auto___13207]));

var G__13208 = (i__5750__auto___13207 + (1));
i__5750__auto___13207 = G__13208;
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
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq13059){
var G__13060 = cljs.core.first(seq13059);
var seq13059__$1 = cljs.core.next(seq13059);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13060,seq13059__$1);
}));


//# sourceMappingURL=devtools.format.js.map
