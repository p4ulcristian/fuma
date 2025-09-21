goog.provide('features.app.superadmin.frontend.view');
/**
 * Validates user data and returns map of field errors
 */
features.app.superadmin.frontend.view.validate_user = (function features$app$superadmin$frontend$view$validate_user(user,is_new_QMARK_){
var errors = cljs.core.PersistentArrayMap.EMPTY;
var username = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("user","username","user/username",1599713859).cljs$core$IFn$_invoke$arity$1(user));
var full_name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("user","full-name","user/full-name",420262817).cljs$core$IFn$_invoke$arity$1(user));
var email = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("user","email","user/email",1419686391).cljs$core$IFn$_invoke$arity$1(user));
var password = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("user","password","user/password",430055242).cljs$core$IFn$_invoke$arity$1(user));
var role = new cljs.core.Keyword("user","role","user/role",-742594495).cljs$core$IFn$_invoke$arity$1(user);
var G__16222 = errors;
var G__16222__$1 = (((((clojure.string.trim(username)).length) < (3)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16222,new cljs.core.Keyword("user","username","user/username",1599713859),"Username must be at least 3 characters"):G__16222);
var G__16222__$2 = (((((clojure.string.trim(full_name)).length) < (2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16222__$1,new cljs.core.Keyword("user","full-name","user/full-name",420262817),"Full name is required"):G__16222__$1);
var G__16222__$3 = (((((role == null)) || (cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(role)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16222__$2,new cljs.core.Keyword("user","role","user/role",-742594495),"Role is required"):G__16222__$2);
var G__16222__$4 = (((((!(cljs.core.empty_QMARK_(email)))) && (cljs.core.not(cljs.core.re_matches(/.+@.+\..+/,email)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16222__$3,new cljs.core.Keyword("user","email","user/email",1419686391),"Please enter a valid email address"):G__16222__$3);
var G__16222__$5 = (cljs.core.truth_((function (){var and__5023__auto__ = is_new_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (((clojure.string.trim(password)).length) < (6));
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16222__$4,new cljs.core.Keyword("user","password","user/password",430055242),"Password must be at least 6 characters"):G__16222__$4);
if(((cljs.core.not(is_new_QMARK_)) && (((cljs.core.seq(clojure.string.trim(password))) && ((((clojure.string.trim(password)).length) < (6))))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16222__$5,new cljs.core.Keyword("user","password","user/password",430055242),"New password must be at least 6 characters");
} else {
return G__16222__$5;
}
});
/**
 * Validates workspace data and returns map of field errors
 */
features.app.superadmin.frontend.view.validate_workspace = (function features$app$superadmin$frontend$view$validate_workspace(workspace){
var errors = cljs.core.PersistentArrayMap.EMPTY;
var name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("workspace","name","workspace/name",-1408521004).cljs$core$IFn$_invoke$arity$1(workspace));
var G__16223 = errors;
if((((clojure.string.trim(name)).length) < (2))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16223,new cljs.core.Keyword("workspace","name","workspace/name",-1408521004),"Workspace name is required");
} else {
return G__16223;
}
});
features.app.superadmin.frontend.view.field_label = (function features$app$superadmin$frontend$view$field_label(label,field_key,has_error_QMARK_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(has_error_QMARK_)?"#dc3545":"inherit")], null)], null),label,(cljs.core.truth_((function (){var fexpr__16224 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("user","full-name","user/full-name",420262817),null,new cljs.core.Keyword("user","username","user/username",1599713859),null,new cljs.core.Keyword("user","password","user/password",430055242),null], null), null);
return (fexpr__16224.cljs$core$IFn$_invoke$arity$1 ? fexpr__16224.cljs$core$IFn$_invoke$arity$1(field_key) : fexpr__16224.call(null,field_key));
})())?" *":null)], null);
});
features.app.superadmin.frontend.view.field_input = (function features$app$superadmin$frontend$view$field_input(field_key,user,has_error_QMARK_,attrs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(attrs),"textarea")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(user),field_key,"")),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__16225_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(user,cljs.core.assoc,field_key,p1__16225_SHARP_.target.value);
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"border","border",1444987323),["1px solid ",(cljs.core.truth_(has_error_QMARK_)?"#dc3545":"#ccc")].join(''),new cljs.core.Keyword(null,"min-height","min-height",398480837),"80px",new cljs.core.Keyword(null,"resize","resize",297367086),"vertical"], null),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs)], 0))], null)], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(user),field_key,"")),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__16226_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(user,cljs.core.assoc,field_key,p1__16226_SHARP_.target.value);
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"border","border",1444987323),["1px solid ",(cljs.core.truth_(has_error_QMARK_)?"#dc3545":"#ccc")].join('')], null),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs)], 0))], null)], 0))], null);
}
});
features.app.superadmin.frontend.view.field_error = (function features$app$superadmin$frontend$view$field_error(field_key,errors){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(errors,field_key);
if(cljs.core.truth_(temp__5823__auto__)){
var error = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#dc3545",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.25rem"], null)], null),error], null);
} else {
return null;
}
});
features.app.superadmin.frontend.view.input_field = (function features$app$superadmin$frontend$view$input_field(label,field_key,user,errors,attrs){
var has_error_QMARK_ = cljs.core.contains_QMARK_(errors,field_key);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.field_label,label,field_key,has_error_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.field_input,field_key,user,has_error_QMARK_,attrs], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.field_error,field_key,errors], null)], null);
});
features.app.superadmin.frontend.view.role_select = (function features$app$superadmin$frontend$view$role_select(user,errors){
var has_error_QMARK_ = cljs.core.contains_QMARK_(errors,new cljs.core.Keyword("user","role","user/role",-742594495));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.field_label,"Role",new cljs.core.Keyword("user","role","user/role",-742594495),has_error_QMARK_], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5025__auto__ = new cljs.core.Keyword("user","role","user/role",-742594495).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(user));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__16227_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(user,cljs.core.assoc,new cljs.core.Keyword("user","role","user/role",-742594495),p1__16227_SHARP_.target.value);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"border","border",1444987323),["1px solid ",((has_error_QMARK_)?"#dc3545":"#ccc")].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"-- Select Role --"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"employee"], null),"Employee"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"admin"], null),"Admin"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"superadmin"], null),"Super Admin"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.field_error,new cljs.core.Keyword("user","role","user/role",-742594495),errors], null)], null);
});
features.app.superadmin.frontend.view.workspace_select = (function features$app$superadmin$frontend$view$workspace_select(user,errors,workspaces){
var has_error_QMARK_ = cljs.core.contains_QMARK_(errors,new cljs.core.Keyword("user","workspace-id","user/workspace-id",-168132192));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.field_label,"Workspace",new cljs.core.Keyword("user","workspace-id","user/workspace-id",-168132192),has_error_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5025__auto__ = new cljs.core.Keyword("user","workspace-id","user/workspace-id",-168132192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(user));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__16228_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(user,cljs.core.assoc,new cljs.core.Keyword("user","workspace-id","user/workspace-id",-168132192),p1__16228_SHARP_.target.value);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"border","border",1444987323),["1px solid ",((has_error_QMARK_)?"#dc3545":"#ccc")].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"-- No Workspace --"], null),(function (){var iter__5503__auto__ = (function features$app$superadmin$frontend$view$workspace_select_$_iter__16229(s__16230){
return (new cljs.core.LazySeq(null,(function (){
var s__16230__$1 = s__16230;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__16230__$1);
if(temp__5823__auto__){
var s__16230__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16230__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__16230__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__16232 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__16231 = (0);
while(true){
if((i__16231 < size__5502__auto__)){
var workspace = cljs.core._nth(c__5501__auto__,i__16231);
cljs.core.chunk_append(b__16232,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("workspace","id","workspace/id",1734778271).cljs$core$IFn$_invoke$arity$1(workspace),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("workspace","id","workspace/id",1734778271).cljs$core$IFn$_invoke$arity$1(workspace)], null),new cljs.core.Keyword("workspace","name","workspace/name",-1408521004).cljs$core$IFn$_invoke$arity$1(workspace)], null));

var G__16244 = (i__16231 + (1));
i__16231 = G__16244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16232),features$app$superadmin$frontend$view$workspace_select_$_iter__16229(cljs.core.chunk_rest(s__16230__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16232),null);
}
} else {
var workspace = cljs.core.first(s__16230__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("workspace","id","workspace/id",1734778271).cljs$core$IFn$_invoke$arity$1(workspace),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("workspace","id","workspace/id",1734778271).cljs$core$IFn$_invoke$arity$1(workspace)], null),new cljs.core.Keyword("workspace","name","workspace/name",-1408521004).cljs$core$IFn$_invoke$arity$1(workspace)], null),features$app$superadmin$frontend$view$workspace_select_$_iter__16229(cljs.core.rest(s__16230__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(workspaces);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.field_error,new cljs.core.Keyword("user","workspace-id","user/workspace-id",-168132192),errors], null)], null);
});
features.app.superadmin.frontend.view.validation_summary = (function features$app$superadmin$frontend$view$validation_summary(errors){
if(cljs.core.seq(errors)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#f8d7da",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #f5c6cb",new cljs.core.Keyword(null,"color","color",1011675173),"#721c24",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.75rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem"], null)], null),"Please fix the errors above before saving."], null);
} else {
return null;
}
});
features.app.superadmin.frontend.view.modal_buttons = (function features$app$superadmin$frontend$view$modal_buttons(is_valid_QMARK_,on_cancel,on_save){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"1rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"2rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_cancel,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 1rem",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc",new cljs.core.Keyword(null,"background","background",-863952629),"#f5f5f5",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),"Cancel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(is_valid_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

if(cljs.core.truth_(is_valid_QMARK_)){
return (on_save.cljs$core$IFn$_invoke$arity$0 ? on_save.cljs$core$IFn$_invoke$arity$0() : on_save.call(null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 1rem",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(is_valid_QMARK_)?"#007bff":"#6c757d"),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(is_valid_QMARK_)?"pointer":"not-allowed"),new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(is_valid_QMARK_)?(1):0.6)], null)], null),"Save"], null)], null);
});
features.app.superadmin.frontend.view.modal_form = (function features$app$superadmin$frontend$view$modal_form(user,is_new_QMARK_,errors,is_valid_QMARK_,on_save,workspaces){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

if(cljs.core.truth_(is_valid_QMARK_)){
return (on_save.cljs$core$IFn$_invoke$arity$0 ? on_save.cljs$core$IFn$_invoke$arity$0() : on_save.call(null));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.input_field,"Username",new cljs.core.Keyword("user","username","user/username",1599713859),user,errors,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.input_field,"Full Name",new cljs.core.Keyword("user","full-name","user/full-name",420262817),user,errors,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.input_field,"Email",new cljs.core.Keyword("user","email","user/email",1419686391),user,errors,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"email"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.input_field,"Phone",new cljs.core.Keyword("user","phone","user/phone",-758685932),user,errors,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"tel"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.role_select,user,errors], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.workspace_select,user,errors,workspaces], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.input_field,(cljs.core.truth_(is_new_QMARK_)?"Password":"New Password (leave empty to keep current)"),new cljs.core.Keyword("user","password","user/password",430055242),user,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),(cljs.core.truth_(is_new_QMARK_)?null:"Leave empty to keep current password")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.validation_summary,errors], null)], null);
});
features.app.superadmin.frontend.view.modal_header = (function features$app$superadmin$frontend$view$modal_header(is_new_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem"], null)], null),(cljs.core.truth_(is_new_QMARK_)?"Add New User":"Edit User")], null);
});
features.app.superadmin.frontend.view.modal_backdrop = (function features$app$superadmin$frontend$view$modal_backdrop(children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["center","0","100%","rgba(0, 0, 0, 0.5)","1000","center","flex","fixed","100%","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem",new cljs.core.Keyword(null,"width","width",-384071477),"500px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"90vw"], null)], null),children], null)], null);
});
features.app.superadmin.frontend.view.user_modal = (function features$app$superadmin$frontend$view$user_modal(user,modal_open_QMARK_,on_save,on_cancel,workspaces){
if(cljs.core.truth_(cljs.core.deref(modal_open_QMARK_))){
var is_new_QMARK_ = cljs.core.not(new cljs.core.Keyword("user","id","user/id",-1375756663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(user)));
var current_errors = features.app.superadmin.frontend.view.validate_user(cljs.core.deref(user),is_new_QMARK_);
var is_valid_QMARK_ = cljs.core.empty_QMARK_(current_errors);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.modal_backdrop,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.modal_header,is_new_QMARK_], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.modal_form,user,is_new_QMARK_,current_errors,is_valid_QMARK_,on_save,workspaces], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.modal_buttons,is_valid_QMARK_,on_cancel,on_save], null)], null)], null);
} else {
return null;
}
});
features.app.superadmin.frontend.view.table_header = (function features$app$superadmin$frontend$view$table_header(on_add){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Users"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_add,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 1rem",new cljs.core.Keyword(null,"background","background",-863952629),"#28a745",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),"Add User"], null)], null);
});
features.app.superadmin.frontend.view.table_th = (function features$app$superadmin$frontend$view$table_th(text,align){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.75rem",new cljs.core.Keyword(null,"text-align","text-align",1786091845),(function (){var or__5025__auto__ = align;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "left";
}
})(),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #ddd"], null)], null),text], null);
});
features.app.superadmin.frontend.view.role_badge = (function features$app$superadmin$frontend$view$role_badge(role){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"background","background",-863952629),(function (){var G__16233 = role;
switch (G__16233) {
case "superadmin":
return "#dc3545";

break;
case "admin":
return "#fd7e14";

break;
default:
return "#28a745";

}
})()], null)], null),role], null);
});
features.app.superadmin.frontend.view.status_badge = (function features$app$superadmin$frontend$view$status_badge(active_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(active_QMARK_)?"#28a745":"#6c757d")], null)], null),(cljs.core.truth_(active_QMARK_)?"Active":"Inactive")], null);
});
features.app.superadmin.frontend.view.action_button = (function features$app$superadmin$frontend$view$action_button(text,color,on_click,margin_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem 0.5rem",new cljs.core.Keyword(null,"background","background",-863952629),color,new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(cljs.core.truth_(margin_QMARK_)?"0.5rem":null)], null)], null),text], null);
});
features.app.superadmin.frontend.view.user_row = (function features$app$superadmin$frontend$view$user_row(user,on_edit,on_delete){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("user","id","user/id",-1375756663).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #eee"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.75rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword("user","full-name","user/full-name",420262817).cljs$core$IFn$_invoke$arity$1(user)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8rem",new cljs.core.Keyword(null,"color","color",1011675173),"#666"], null)], null),new cljs.core.Keyword("user","username","user/username",1599713859).cljs$core$IFn$_invoke$arity$1(user)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.75rem"], null)], null),new cljs.core.Keyword("user","email","user/email",1419686391).cljs$core$IFn$_invoke$arity$1(user)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.75rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.role_badge,new cljs.core.Keyword("user","role","user/role",-742594495).cljs$core$IFn$_invoke$arity$1(user)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.75rem"], null)], null),(cljs.core.truth_(new cljs.core.Keyword("user","workspace-name","user/workspace-name",-1648714594).cljs$core$IFn$_invoke$arity$1(user))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"color","color",1011675173),"#666"], null)], null),new cljs.core.Keyword("user","workspace-name","user/workspace-name",-1648714594).cljs$core$IFn$_invoke$arity$1(user)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"color","color",1011675173),"#999"], null)], null),"None"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.75rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.status_badge,new cljs.core.Keyword("user","active","user/active",1891303945).cljs$core$IFn$_invoke$arity$1(user)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.75rem",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.action_button,"Edit","#007bff",(function (){
return (on_edit.cljs$core$IFn$_invoke$arity$1 ? on_edit.cljs$core$IFn$_invoke$arity$1(user) : on_edit.call(null,user));
}),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.action_button,"Delete","#dc3545",(function (){
return (on_delete.cljs$core$IFn$_invoke$arity$1 ? on_delete.cljs$core$IFn$_invoke$arity$1(user) : on_delete.call(null,user));
}),false], null)], null)], null);
});
features.app.superadmin.frontend.view.user_table = (function features$app$superadmin$frontend$view$user_table(users,on_add,on_edit,on_delete){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"padding","padding",1660304693),"1.5rem",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 2px 4px rgba(0,0,0,0.1)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.table_header,on_add], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f8f9fa"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.table_th,"Name",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.table_th,"Email",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.table_th,"Role",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.table_th,"Workspace",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.table_th,"Status",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.table_th,"Actions","center"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5503__auto__ = (function features$app$superadmin$frontend$view$user_table_$_iter__16234(s__16235){
return (new cljs.core.LazySeq(null,(function (){
var s__16235__$1 = s__16235;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__16235__$1);
if(temp__5823__auto__){
var s__16235__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16235__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__16235__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__16237 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__16236 = (0);
while(true){
if((i__16236 < size__5502__auto__)){
var user = cljs.core._nth(c__5501__auto__,i__16236);
cljs.core.chunk_append(b__16237,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.user_row,user,on_edit,on_delete], null));

var G__16246 = (i__16236 + (1));
i__16236 = G__16246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16237),features$app$superadmin$frontend$view$user_table_$_iter__16234(cljs.core.chunk_rest(s__16235__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16237),null);
}
} else {
var user = cljs.core.first(s__16235__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.user_row,user,on_edit,on_delete], null),features$app$superadmin$frontend$view$user_table_$_iter__16234(cljs.core.rest(s__16235__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(users);
})()], null)], null)], null);
});
features.app.superadmin.frontend.view.workspace_modal_form = (function features$app$superadmin$frontend$view$workspace_modal_form(workspace,errors,is_valid_QMARK_,on_save){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

if(cljs.core.truth_(is_valid_QMARK_)){
return (on_save.cljs$core$IFn$_invoke$arity$0 ? on_save.cljs$core$IFn$_invoke$arity$0() : on_save.call(null));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.input_field,"Name",new cljs.core.Keyword("workspace","name","workspace/name",-1408521004),workspace,errors,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.input_field,"Description",new cljs.core.Keyword("workspace","description","workspace/description",-321785339),workspace,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"rows","rows",850049680),"3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.validation_summary,errors], null)], null);
});
features.app.superadmin.frontend.view.workspace_modal = (function features$app$superadmin$frontend$view$workspace_modal(workspace,modal_open_QMARK_,on_save,on_cancel){
if(cljs.core.truth_(cljs.core.deref(modal_open_QMARK_))){
var is_new_QMARK_ = cljs.core.not(new cljs.core.Keyword("workspace","id","workspace/id",1734778271).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workspace)));
var current_errors = features.app.superadmin.frontend.view.validate_workspace(cljs.core.deref(workspace));
var is_valid_QMARK_ = cljs.core.empty_QMARK_(current_errors);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.modal_backdrop,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem"], null)], null),((is_new_QMARK_)?"Add New Workspace":"Edit Workspace")], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.workspace_modal_form,workspace,current_errors,is_valid_QMARK_,on_save], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.modal_buttons,is_valid_QMARK_,on_cancel,on_save], null)], null)], null);
} else {
return null;
}
});
features.app.superadmin.frontend.view.workspace_row = (function features$app$superadmin$frontend$view$workspace_row(workspace,on_edit,on_delete){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("workspace","id","workspace/id",1734778271).cljs$core$IFn$_invoke$arity$1(workspace),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #eee"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.75rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword("workspace","name","workspace/name",-1408521004).cljs$core$IFn$_invoke$arity$1(workspace)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8rem",new cljs.core.Keyword(null,"color","color",1011675173),"#666"], null)], null),(cljs.core.truth_(new cljs.core.Keyword("workspace","description","workspace/description",-321785339).cljs$core$IFn$_invoke$arity$1(workspace))?new cljs.core.Keyword("workspace","description","workspace/description",-321785339).cljs$core$IFn$_invoke$arity$1(workspace):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.75rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.status_badge,new cljs.core.Keyword("workspace","active","workspace/active",-1294334689).cljs$core$IFn$_invoke$arity$1(workspace)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.75rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8rem",new cljs.core.Keyword(null,"color","color",1011675173),"#999"], null)], null),new cljs.core.Keyword("workspace","created-at","workspace/created-at",-1131011801).cljs$core$IFn$_invoke$arity$1(workspace)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.75rem",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.action_button,"Edit","#007bff",(function (){
return (on_edit.cljs$core$IFn$_invoke$arity$1 ? on_edit.cljs$core$IFn$_invoke$arity$1(workspace) : on_edit.call(null,workspace));
}),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.action_button,"Delete","#dc3545",(function (){
return (on_delete.cljs$core$IFn$_invoke$arity$1 ? on_delete.cljs$core$IFn$_invoke$arity$1(workspace) : on_delete.call(null,workspace));
}),false], null)], null)], null);
});
features.app.superadmin.frontend.view.workspace_table = (function features$app$superadmin$frontend$view$workspace_table(workspaces,on_add,on_edit,on_delete){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"padding","padding",1660304693),"1.5rem",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 2px 4px rgba(0,0,0,0.1)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Workspaces"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_add,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 1rem",new cljs.core.Keyword(null,"background","background",-863952629),"#28a745",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),"Add Workspace"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f8f9fa"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.table_th,"Name",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.table_th,"Status",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.table_th,"Created",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.table_th,"Actions","center"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5503__auto__ = (function features$app$superadmin$frontend$view$workspace_table_$_iter__16238(s__16239){
return (new cljs.core.LazySeq(null,(function (){
var s__16239__$1 = s__16239;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__16239__$1);
if(temp__5823__auto__){
var s__16239__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16239__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__16239__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__16241 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__16240 = (0);
while(true){
if((i__16240 < size__5502__auto__)){
var workspace = cljs.core._nth(c__5501__auto__,i__16240);
cljs.core.chunk_append(b__16241,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.workspace_row,workspace,on_edit,on_delete], null));

var G__16247 = (i__16240 + (1));
i__16240 = G__16247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16241),features$app$superadmin$frontend$view$workspace_table_$_iter__16238(cljs.core.chunk_rest(s__16239__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16241),null);
}
} else {
var workspace = cljs.core.first(s__16239__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.workspace_row,workspace,on_edit,on_delete], null),features$app$superadmin$frontend$view$workspace_table_$_iter__16238(cljs.core.rest(s__16239__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(workspaces);
})()], null)], null)], null);
});
features.app.superadmin.frontend.view.view = (function features$app$superadmin$frontend$view$view(){
var users = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var current_user = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var modal_open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var loading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var workspaces = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var current_workspace = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var workspace_modal_open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var workspaces_loading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var auth_user = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var auth_loading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var check_auth = (function (){
cljs.core.reset_BANG_(auth_loading_QMARK_,true);

return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","current","user/current",-1089426180),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
var user = new cljs.core.Keyword("user","current","user/current",-1089426180).cljs$core$IFn$_invoke$arity$1(response);
cljs.core.reset_BANG_(auth_user,user);

return cljs.core.reset_BANG_(auth_loading_QMARK_,false);
})], null));
});
var load_users = (function (){
cljs.core.reset_BANG_(loading_QMARK_,true);

return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("users","get-all","users/get-all",1979997501),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
var users_data = new cljs.core.Keyword("users","get-all","users/get-all",1979997501).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(users_data))){
cljs.core.reset_BANG_(users,cljs.core.PersistentVector.EMPTY);
} else {
cljs.core.reset_BANG_(users,(function (){var or__5025__auto__ = users_data;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
}

return cljs.core.reset_BANG_(loading_QMARK_,false);
})], null));
});
var save_user = (function (user_data,is_new_QMARK_){
var query_key = (cljs.core.truth_(is_new_QMARK_)?new cljs.core.Keyword("users","create","users/create",-1312536448):new cljs.core.Keyword("users","update","users/update",955772116));
return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),cljs.core.PersistentArrayMap.createAsIfByAssoc([query_key,user_data]),new cljs.core.Keyword("parquery","context","parquery/context",661391038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,query_key)))){
load_users();

return cljs.core.reset_BANG_(modal_open_QMARK_,false);
} else {
return alert(["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,query_key)))].join(''));
}
})], null));
});
var delete_user_fn = (function (user){
if(cljs.core.truth_(confirm(["Delete user ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("user","full-name","user/full-name",420262817).cljs$core$IFn$_invoke$arity$1(user)),"?"].join('')))){
return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("users","delete","users/delete",-1876320012),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","id","user/id",-1375756663).cljs$core$IFn$_invoke$arity$1(user)], null)], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("users","delete","users/delete",-1876320012).cljs$core$IFn$_invoke$arity$1(response)))){
return load_users();
} else {
return alert(["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("users","delete","users/delete",-1876320012).cljs$core$IFn$_invoke$arity$1(response)))].join(''));
}
})], null));
} else {
return null;
}
});
var load_workspaces = (function (){
cljs.core.reset_BANG_(workspaces_loading_QMARK_,true);

return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspaces","get-all","workspaces/get-all",2068272567),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
var workspaces_data = new cljs.core.Keyword("workspaces","get-all","workspaces/get-all",2068272567).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(workspaces_data))){
cljs.core.reset_BANG_(workspaces,cljs.core.PersistentVector.EMPTY);
} else {
cljs.core.reset_BANG_(workspaces,(function (){var or__5025__auto__ = workspaces_data;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
}

return cljs.core.reset_BANG_(workspaces_loading_QMARK_,false);
})], null));
});
var save_workspace = (function (workspace_data,is_new_QMARK_){
var query_key = (cljs.core.truth_(is_new_QMARK_)?new cljs.core.Keyword("workspaces","create","workspaces/create",-1274326774):new cljs.core.Keyword("workspaces","update","workspaces/update",1027531334));
return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),cljs.core.PersistentArrayMap.createAsIfByAssoc([query_key,workspace_data]),new cljs.core.Keyword("parquery","context","parquery/context",661391038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,query_key)))){
load_workspaces();

return cljs.core.reset_BANG_(workspace_modal_open_QMARK_,false);
} else {
return alert(["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,query_key)))].join(''));
}
})], null));
});
var delete_workspace_fn = (function (workspace){
if(cljs.core.truth_(confirm(["Delete workspace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("workspace","name","workspace/name",-1408521004).cljs$core$IFn$_invoke$arity$1(workspace)),"?"].join('')))){
return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspaces","delete","workspaces/delete",-1645573786),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspace","id","workspace/id",1734778271),new cljs.core.Keyword("workspace","id","workspace/id",1734778271).cljs$core$IFn$_invoke$arity$1(workspace)], null)], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("workspaces","delete","workspaces/delete",-1645573786).cljs$core$IFn$_invoke$arity$1(response)))){
return load_workspaces();
} else {
return alert(["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("workspaces","delete","workspaces/delete",-1645573786).cljs$core$IFn$_invoke$arity$1(response)))].join(''));
}
})], null));
} else {
return null;
}
});
check_auth();

load_users();

load_workspaces();

return (function (){
if(cljs.core.truth_(cljs.core.deref(auth_loading_QMARK_))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#f5f5f5"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),"Checking authentication..."], null)], null);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref(auth_user);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("superadmin",new cljs.core.Keyword("user","role","user/role",-742594495).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(auth_user)));
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh",new cljs.core.Keyword(null,"background","background",-863952629),"#f5f5f5",new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"1200px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"2rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#333",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null)], null),"Super Admin - User Management"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"1rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#666"], null)], null),["Welcome, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("user","full-name","user/full-name",420262817).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(auth_user)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("users","logout","users/logout",1576273153),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
return new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("users","logout","users/logout",1576273153).cljs$core$IFn$_invoke$arity$1(response));
})], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 1rem",new cljs.core.Keyword(null,"background","background",-863952629),"#dc3545",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),"Logout"], null)], null)], null),(cljs.core.truth_(cljs.core.deref(loading_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem"], null)], null),"Loading users..."], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.user_table,cljs.core.deref(users),(function (){
cljs.core.reset_BANG_(current_user,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","role","user/role",-742594495),"employee"], null));

return cljs.core.reset_BANG_(modal_open_QMARK_,true);
}),(function (p1__16242_SHARP_){
cljs.core.reset_BANG_(current_user,p1__16242_SHARP_);

return cljs.core.reset_BANG_(modal_open_QMARK_,true);
}),delete_user_fn], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.user_modal,current_user,modal_open_QMARK_,(function (){
var is_new_QMARK_ = cljs.core.not(new cljs.core.Keyword("user","id","user/id",-1375756663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_user)));
var user = cljs.core.deref(current_user);
var base_data = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("user","username","user/username",1599713859),new cljs.core.Keyword("user","username","user/username",1599713859).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword("user","full-name","user/full-name",420262817),new cljs.core.Keyword("user","full-name","user/full-name",420262817).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","email","user/email",1419686391).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword("user","phone","user/phone",-758685932),new cljs.core.Keyword("user","phone","user/phone",-758685932).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword("user","role","user/role",-742594495),new cljs.core.Keyword("user","role","user/role",-742594495).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword("user","workspace-id","user/workspace-id",-168132192),(((!(cljs.core.empty_QMARK_(new cljs.core.Keyword("user","workspace-id","user/workspace-id",-168132192).cljs$core$IFn$_invoke$arity$1(user)))))?new cljs.core.Keyword("user","workspace-id","user/workspace-id",-168132192).cljs$core$IFn$_invoke$arity$1(user):null)], null);
var user_data = ((is_new_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base_data,new cljs.core.Keyword("user","password","user/password",430055242),new cljs.core.Keyword("user","password","user/password",430055242).cljs$core$IFn$_invoke$arity$1(user)):(function (){var update_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(base_data,new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","id","user/id",-1375756663).cljs$core$IFn$_invoke$arity$1(user),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("user","active","user/active",1891303945),new cljs.core.Keyword("user","active","user/active",1891303945).cljs$core$IFn$_invoke$arity$1(user)], 0));
if(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword("user","password","user/password",430055242).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.seq(clojure.string.trim(new cljs.core.Keyword("user","password","user/password",430055242).cljs$core$IFn$_invoke$arity$1(user)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(update_data,new cljs.core.Keyword("user","password","user/password",430055242),new cljs.core.Keyword("user","password","user/password",430055242).cljs$core$IFn$_invoke$arity$1(user));
} else {
return update_data;
}
})());
return save_user(user_data,is_new_QMARK_);
}),(function (){
return cljs.core.reset_BANG_(modal_open_QMARK_,false);
}),cljs.core.deref(workspaces)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3rem"], null)], null),(cljs.core.truth_(cljs.core.deref(workspaces_loading_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem"], null)], null),"Loading workspaces..."], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.workspace_table,cljs.core.deref(workspaces),(function (){
cljs.core.reset_BANG_(current_workspace,cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.reset_BANG_(workspace_modal_open_QMARK_,true);
}),(function (p1__16243_SHARP_){
cljs.core.reset_BANG_(current_workspace,p1__16243_SHARP_);

return cljs.core.reset_BANG_(workspace_modal_open_QMARK_,true);
}),delete_workspace_fn], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.superadmin.frontend.view.workspace_modal,current_workspace,workspace_modal_open_QMARK_,(function (){
var is_new_QMARK_ = cljs.core.not(new cljs.core.Keyword("workspace","id","workspace/id",1734778271).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_workspace)));
var workspace = cljs.core.deref(current_workspace);
var workspace_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("workspace","name","workspace/name",-1408521004),new cljs.core.Keyword("workspace","name","workspace/name",-1408521004).cljs$core$IFn$_invoke$arity$1(workspace),new cljs.core.Keyword("workspace","description","workspace/description",-321785339),new cljs.core.Keyword("workspace","description","workspace/description",-321785339).cljs$core$IFn$_invoke$arity$1(workspace)], null);
var workspace_data__$1 = ((is_new_QMARK_)?workspace_data:cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(workspace_data,new cljs.core.Keyword("workspace","id","workspace/id",1734778271),new cljs.core.Keyword("workspace","id","workspace/id",1734778271).cljs$core$IFn$_invoke$arity$1(workspace),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("workspace","active","workspace/active",-1294334689),new cljs.core.Keyword("workspace","active","workspace/active",-1294334689).cljs$core$IFn$_invoke$arity$1(workspace)], 0)));
return save_workspace(workspace_data__$1,is_new_QMARK_);
}),(function (){
return cljs.core.reset_BANG_(workspace_modal_open_QMARK_,false);
})], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#f5f5f5"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Access Denied"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You need superadmin privileges to access this page."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#666"], null)], null),"Access denied."], null)], null)], null);
}
}
});
});

//# sourceMappingURL=features.app.superadmin.frontend.view.js.map
