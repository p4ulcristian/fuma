goog.provide('features.app.customers.frontend.view');
var G__16407_16689 = new cljs.core.Keyword("customers","data","customers/data",1379089132);
var G__16408_16690 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531),new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"customers","customers",635915531),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pagination","pagination",-1553654604),cljs.core.PersistentArrayMap.EMPTY], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16407_16689,G__16408_16690) : zero.frontend.re_frame.reg_sub.call(null,G__16407_16689,G__16408_16690));
var G__16414_16691 = new cljs.core.Keyword("customers","loading?","customers/loading?",1369533542);
var G__16415_16692 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16414_16691,G__16415_16692) : zero.frontend.re_frame.reg_sub.call(null,G__16414_16691,G__16415_16692));
var G__16417_16693 = new cljs.core.Keyword("customers","modal-customer","customers/modal-customer",298623272);
var G__16418_16694 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531),new cljs.core.Keyword(null,"modal-customer","modal-customer",1910250705)], null),null);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16417_16693,G__16418_16694) : zero.frontend.re_frame.reg_sub.call(null,G__16417_16693,G__16418_16694));
var G__16420_16695 = new cljs.core.Keyword("customers","modal-is-new?","customers/modal-is-new?",-2029346257);
var G__16421_16696 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531),new cljs.core.Keyword(null,"modal-is-new?","modal-is-new?",-1493686812)], null),false);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16420_16695,G__16421_16696) : zero.frontend.re_frame.reg_sub.call(null,G__16420_16695,G__16421_16696));
var G__16423_16697 = new cljs.core.Keyword("customers","modal-form","customers/modal-form",1904790370);
var G__16424_16698 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531),new cljs.core.Keyword(null,"modal-form","modal-form",293545775)], null),cljs.core.PersistentArrayMap.EMPTY);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16423_16697,G__16424_16698) : zero.frontend.re_frame.reg_sub.call(null,G__16423_16697,G__16424_16698));
var G__16429_16699 = new cljs.core.Keyword("customers","modal-errors","customers/modal-errors",333024903);
var G__16430_16700 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531),new cljs.core.Keyword(null,"modal-errors","modal-errors",868747852)], null),cljs.core.PersistentArrayMap.EMPTY);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16429_16699,G__16430_16700) : zero.frontend.re_frame.reg_sub.call(null,G__16429_16699,G__16430_16700));
var G__16432_16701 = new cljs.core.Keyword("customers","modal-loading?","customers/modal-loading?",-662281099);
var G__16433_16702 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531),new cljs.core.Keyword(null,"modal-loading?","modal-loading?",-122625782)], null),false);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16432_16701,G__16433_16702) : zero.frontend.re_frame.reg_sub.call(null,G__16432_16701,G__16433_16702));
var G__16435_16703 = new cljs.core.Keyword("customers","set-loading","customers/set-loading",-1849639212);
var G__16436_16704 = (function (db,p__16437){
var vec__16438 = p__16437;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16438,(0),null);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16438,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),loading_QMARK_);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16435_16703,G__16436_16704) : zero.frontend.re_frame.reg_event_db.call(null,G__16435_16703,G__16436_16704));
var G__16443_16705 = new cljs.core.Keyword("customers","load-success","customers/load-success",1611517444);
var G__16444_16706 = (function (db,p__16445){
var vec__16447 = p__16445;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16447,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16447,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531),new cljs.core.Keyword(null,"data","data",-232669377)], null),data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16443_16705,G__16444_16706) : zero.frontend.re_frame.reg_event_db.call(null,G__16443_16705,G__16444_16706));
var G__16453_16707 = new cljs.core.Keyword("customers","open-modal","customers/open-modal",-659641739);
var G__16454_16708 = (function (db,p__16455){
var vec__16457 = p__16455;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16457,(0),null);
var customer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16457,(1),null);
var is_new_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16457,(2),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531),new cljs.core.Keyword(null,"modal-customer","modal-customer",1910250705)], null),customer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531),new cljs.core.Keyword(null,"modal-is-new?","modal-is-new?",-1493686812)], null),is_new_QMARK_);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16453_16707,G__16454_16708) : zero.frontend.re_frame.reg_event_db.call(null,G__16453_16707,G__16454_16708));
var G__16461_16709 = new cljs.core.Keyword("customers","close-modal","customers/close-modal",-270494804);
var G__16462_16710 = (function (db,_){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531),new cljs.core.Keyword(null,"modal-customer","modal-customer",1910250705)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531),new cljs.core.Keyword(null,"modal-is-new?","modal-is-new?",-1493686812)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531),new cljs.core.Keyword(null,"modal-form","modal-form",293545775)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531),new cljs.core.Keyword(null,"modal-errors","modal-errors",868747852)], null),cljs.core.PersistentArrayMap.EMPTY);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16461_16709,G__16462_16710) : zero.frontend.re_frame.reg_event_db.call(null,G__16461_16709,G__16462_16710));
var G__16465_16711 = new cljs.core.Keyword("customers","update-form-field","customers/update-form-field",-1190443065);
var G__16466_16712 = (function (db,p__16467){
var vec__16468 = p__16467;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16468,(0),null);
var field_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16468,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16468,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531),new cljs.core.Keyword(null,"modal-form","modal-form",293545775),field_key], null),value);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16465_16711,G__16466_16712) : zero.frontend.re_frame.reg_event_db.call(null,G__16465_16711,G__16466_16712));
var G__16471_16713 = new cljs.core.Keyword("customers","set-form-errors","customers/set-form-errors",-1442447768);
var G__16472_16714 = (function (db,p__16473){
var vec__16476 = p__16473;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16476,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16476,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531),new cljs.core.Keyword(null,"modal-errors","modal-errors",868747852)], null),errors);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16471_16713,G__16472_16714) : zero.frontend.re_frame.reg_event_db.call(null,G__16471_16713,G__16472_16714));
var G__16479_16717 = new cljs.core.Keyword("customers","init-form","customers/init-form",1952231623);
var G__16480_16718 = (function (db,p__16482){
var vec__16483 = p__16482;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16483,(0),null);
var customer_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16483,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531),new cljs.core.Keyword(null,"modal-form","modal-form",293545775)], null),(function (){var or__5025__auto__ = customer_data;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16479_16717,G__16480_16718) : zero.frontend.re_frame.reg_event_db.call(null,G__16479_16717,G__16480_16718));
var G__16486_16719 = new cljs.core.Keyword("customers","set-modal-loading","customers/set-modal-loading",630275244);
var G__16487_16720 = (function (db,p__16490){
var vec__16491 = p__16490;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16491,(0),null);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16491,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531),new cljs.core.Keyword(null,"modal-loading?","modal-loading?",-122625782)], null),loading_QMARK_);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16486_16719,G__16487_16720) : zero.frontend.re_frame.reg_event_db.call(null,G__16486_16719,G__16487_16720));
/**
 * Get workspace ID from router parameters
 */
features.app.customers.frontend.view.get_workspace_id = (function features$app$customers$frontend$view$get_workspace_id(){
var router_state = cljs.core.deref(router.frontend.zero.state);
var workspace_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(router_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435)], null));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: get-workspace-id called"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Router state:",router_state], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Extracted workspace-id:",workspace_id], 0));

return workspace_id;
});
/**
 * Execute ParQuery to load customers with pagination
 */
features.app.customers.frontend.view.load_customers_query = (function features$app$customers$frontend$view$load_customers_query(workspace_id,params){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG load-customers-query called with params:",params], 0));

var G__16497_16721 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("customers","set-loading","customers/set-loading",-1849639212),true], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16497_16721) : zero.frontend.re_frame.dispatch.call(null,G__16497_16721));

return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspace-customers","get-paginated","workspace-customers/get-paginated",1760066817),params], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG load-customers-query response:",response], 0));

var result = new cljs.core.Keyword("workspace-customers","get-paginated","workspace-customers/get-paginated",1760066817).cljs$core$IFn$_invoke$arity$1(response);
var G__16498 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("customers","load-success","customers/load-success",1611517444),result], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16498) : zero.frontend.re_frame.dispatch.call(null,G__16498));
})], null));
});
/**
 * Execute ParQuery to save customer
 */
features.app.customers.frontend.view.save_customer_query = (function features$app$customers$frontend$view$save_customer_query(customer,workspace_id,is_new_QMARK_,callback,load_customers){
var query_type = (cljs.core.truth_(is_new_QMARK_)?new cljs.core.Keyword("workspace-customers","create","workspace-customers/create",-1841692757):new cljs.core.Keyword("workspace-customers","update","workspace-customers/update",-1634880091));
var customer_data = (cljs.core.truth_(is_new_QMARK_)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(customer,new cljs.core.Keyword("customer","id","customer/id",-1990317450)):customer);
var context = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: save-customer-query called"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Workspace ID:",workspace_id], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Query type:",query_type], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Customer data:",customer_data], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Context being sent:",context], 0));

return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),cljs.core.PersistentArrayMap.createAsIfByAssoc([query_type,customer_data]),new cljs.core.Keyword("parquery","context","parquery/context",661391038),context,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: save-customer-query response:",response], 0));

(callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));

if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,query_type)))){
var G__16509_16763 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("customers","close-modal","customers/close-modal",-270494804)], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16509_16763) : zero.frontend.re_frame.dispatch.call(null,G__16509_16763));

return (load_customers.cljs$core$IFn$_invoke$arity$0 ? load_customers.cljs$core$IFn$_invoke$arity$0() : load_customers.call(null));
} else {
return alert(["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,query_type)))].join(''));
}
})], null));
});
/**
 * Execute ParQuery to delete customer
 */
features.app.customers.frontend.view.delete_customer_query = (function features$app$customers$frontend$view$delete_customer_query(customer_id,workspace_id,load_customers){
return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspace-customers","delete","workspace-customers/delete",909670341),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("customer","id","customer/id",-1990317450),customer_id], null)], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("workspace-customers","delete","workspace-customers/delete",909670341).cljs$core$IFn$_invoke$arity$1(response)))){
return (load_customers.cljs$core$IFn$_invoke$arity$0 ? load_customers.cljs$core$IFn$_invoke$arity$0() : load_customers.call(null));
} else {
return alert("Error deleting customer");
}
})], null));
});
/**
 * Validate customer name
 */
features.app.customers.frontend.view.validate_name = (function features$app$customers$frontend$view$validate_name(name){
return (((clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))).length) < (2));
});
/**
 * Validate email format
 */
features.app.customers.frontend.view.validate_email = (function features$app$customers$frontend$view$validate_email(email){
if(cljs.core.truth_((function (){var and__5023__auto__ = email;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.seq(clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(email)));
} else {
return and__5023__auto__;
}
})())){
var email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return cljs.core.not(cljs.core.re_matches(email_regex,clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(email))));
} else {
return null;
}
});
/**
 * Validates customer data and returns map of field errors
 */
features.app.customers.frontend.view.validate_customer = (function features$app$customers$frontend$view$validate_customer(customer){
var errors = cljs.core.PersistentArrayMap.EMPTY;
var name = new cljs.core.Keyword("customer","name","customer/name",-1039810549).cljs$core$IFn$_invoke$arity$1(customer);
var email = new cljs.core.Keyword("customer","email","customer/email",679814628).cljs$core$IFn$_invoke$arity$1(customer);
var G__16529 = errors;
var G__16529__$1 = ((features.app.customers.frontend.view.validate_name(name))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16529,new cljs.core.Keyword("customer","name","customer/name",-1039810549),translations.core.tr(new cljs.core.Keyword("customers","error-name","customers/error-name",-2070974658))):G__16529);
if(cljs.core.truth_(features.app.customers.frontend.view.validate_email(email))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16529__$1,new cljs.core.Keyword("customer","email","customer/email",679814628),translations.core.tr(new cljs.core.Keyword("customers","error-email","customers/error-email",1487301853)));
} else {
return G__16529__$1;
}
});
features.app.customers.frontend.view.field_label = (function features$app$customers$frontend$view$field_label(label,field_key,has_error_QMARK_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"0.025em",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(has_error_QMARK_)?"#dc3545":"#374151")], null)], null),label,(cljs.core.truth_((function (){var fexpr__16538 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("customer","name","customer/name",-1039810549),null], null), null);
return (fexpr__16538.cljs$core$IFn$_invoke$arity$1 ? fexpr__16538.cljs$core$IFn$_invoke$arity$1(field_key) : fexpr__16538.call(null,field_key));
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#ef4444",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.25rem"], null)], null),"*"], null):null)], null);
});
/**
 * Base properties for input fields
 */
features.app.customers.frontend.view.input_base_props = (function features$app$customers$frontend$view$input_base_props(field_key,form_data,has_error_QMARK_,attrs){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(form_data,field_key,"")),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__16541_SHARP_){
var G__16548 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("customers","update-form-field","customers/update-form-field",-1190443065),field_key,p1__16541_SHARP_.target.value], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16548) : zero.frontend.re_frame.dispatch.call(null,G__16548));
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["1.5",(cljs.core.truth_(has_error_QMARK_)?"0 0 0 3px rgba(220, 53, 69, 0.1)":"0 1px 2px 0 rgba(0, 0, 0, 0.05)"),"1rem","border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out","100%","0.75rem 1rem","none",(cljs.core.truth_(has_error_QMARK_)?"2px solid #dc3545":"1px solid #d1d5db"),"8px"]),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),(cljs.core.truth_(has_error_QMARK_)?"#dc3545":"#3b82f6"),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),(cljs.core.truth_(has_error_QMARK_)?"0 0 0 3px rgba(220, 53, 69, 0.1)":"0 0 0 3px rgba(59, 130, 246, 0.1)")], null)], null)], 0))], null);
});
/**
 * Render textarea input
 */
features.app.customers.frontend.view.render_textarea = (function features$app$customers$frontend$view$render_textarea(field_key,form_data,has_error_QMARK_,attrs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"type","type",1174270348)),features.app.customers.frontend.view.input_base_props(field_key,form_data,has_error_QMARK_,attrs)], 0))], null);
});
/**
 * Render text input
 */
features.app.customers.frontend.view.render_text_input = (function features$app$customers$frontend$view$render_text_input(field_key,form_data,has_error_QMARK_,attrs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,features.app.customers.frontend.view.input_base_props(field_key,form_data,has_error_QMARK_,attrs)], 0))], null);
});
/**
 * Render appropriate input type
 */
features.app.customers.frontend.view.field_input = (function features$app$customers$frontend$view$field_input(field_key,form_data,has_error_QMARK_,attrs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(attrs),"textarea")){
return features.app.customers.frontend.view.render_textarea(field_key,form_data,has_error_QMARK_,attrs);
} else {
return features.app.customers.frontend.view.render_text_input(field_key,form_data,has_error_QMARK_,attrs);
}
});
features.app.customers.frontend.view.field_error = (function features$app$customers$frontend$view$field_error(error_msg){
if(cljs.core.truth_(error_msg)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#dc3545",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.25rem"], null)], null),error_msg], null);
} else {
return null;
}
});
/**
 * Complete form field with label, input and error
 */
features.app.customers.frontend.view.form_field = (function features$app$customers$frontend$view$form_field(label,field_key,form_data,errors,attrs){
var has_error_QMARK_ = cljs.core.contains_QMARK_(errors,field_key);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.customers.frontend.view.field_label,label,field_key,has_error_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.customers.frontend.view.field_input,field_key,form_data,has_error_QMARK_,attrs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.customers.frontend.view.field_error,cljs.core.get.cljs$core$IFn$_invoke$arity$2(errors,field_key)], null)], null);
});
/**
 * All form input fields
 */
features.app.customers.frontend.view.form_fields = (function features$app$customers$frontend$view$form_fields(form_data,errors){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.customers.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("customers","name","customers/name",232438932)),new cljs.core.Keyword("customer","name","customer/name",-1039810549),form_data,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("customers","name-placeholder","customers/name-placeholder",-1579964725))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.customers.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("customers","email","customers/email",1953899869)),new cljs.core.Keyword("customer","email","customer/email",679814628),form_data,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"email",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("customers","email-placeholder","customers/email-placeholder",1437217601))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.customers.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("customers","phone","customers/phone",1924001678)),new cljs.core.Keyword("customer","phone","customer/phone",-1365445883),form_data,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("customers","phone-placeholder","customers/phone-placeholder",762840013))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.customers.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("customers","contact-person","customers/contact-person",711847392)),new cljs.core.Keyword("customer","contact-person","customer/contact-person",-430247081),form_data,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("customers","contact-person-placeholder","customers/contact-person-placeholder",-44587860))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.customers.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("customers","notes","customers/notes",1645961376)),new cljs.core.Keyword("customer","notes","customer/notes",-1507298281),form_data,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("customers","notes-placeholder","customers/notes-placeholder",2025770663))], null)], null)], null);
});
/**
 * Handle save button click with validation
 */
features.app.customers.frontend.view.handle_save_click = (function features$app$customers$frontend$view$handle_save_click(form_data,is_new_QMARK_,on_save){
var validation_errors = features.app.customers.frontend.view.validate_customer(form_data);
if(cljs.core.empty_QMARK_(validation_errors)){
var G__16587_16786 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("customers","set-form-errors","customers/set-form-errors",-1442447768),cljs.core.PersistentArrayMap.EMPTY], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16587_16786) : zero.frontend.re_frame.dispatch.call(null,G__16587_16786));

var G__16588_16787 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("customers","set-modal-loading","customers/set-modal-loading",630275244),true], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16588_16787) : zero.frontend.re_frame.dispatch.call(null,G__16588_16787));

var G__16589 = form_data;
var G__16590 = (function (){
var G__16591 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("customers","set-modal-loading","customers/set-modal-loading",630275244),false], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16591) : zero.frontend.re_frame.dispatch.call(null,G__16591));
});
return (on_save.cljs$core$IFn$_invoke$arity$2 ? on_save.cljs$core$IFn$_invoke$arity$2(G__16589,G__16590) : on_save.call(null,G__16589,G__16590));
} else {
var G__16592 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("customers","set-form-errors","customers/set-form-errors",-1442447768),validation_errors], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16592) : zero.frontend.re_frame.dispatch.call(null,G__16592));
}
});
/**
 * Modal for creating/editing customers using new UI components
 */
features.app.customers.frontend.view.customer_modal = (function features$app$customers$frontend$view$customer_modal(customer_data,is_new_QMARK_,on_save,on_cancel){
var form_data = (function (){var G__16628 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("customers","modal-form","customers/modal-form",1904790370)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__16628) : zero.frontend.re_frame.subscribe.call(null,G__16628));
})();
var errors = (function (){var G__16629 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("customers","modal-errors","customers/modal-errors",333024903)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__16629) : zero.frontend.re_frame.subscribe.call(null,G__16629));
})();
var loading_QMARK_ = (function (){var G__16630 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("customers","modal-loading?","customers/modal-loading?",-662281099)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__16630) : zero.frontend.re_frame.subscribe.call(null,G__16630));
})();
var G__16634_16796 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("customers","init-form","customers/init-form",1952231623),customer_data], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16634_16796) : zero.frontend.re_frame.dispatch.call(null,G__16634_16796));

return (function (customer_data__$1,is_new_QMARK___$1,on_save__$1,on_cancel__$1){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.modal.modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_cancel__$1,new cljs.core.Keyword(null,"close-on-backdrop?","close-on-backdrop?",313135575),true], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.modal.modal_header,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(is_new_QMARK___$1)?translations.core.tr(new cljs.core.Keyword("customers","modal-add-title","customers/modal-add-title",-64785610)):translations.core.tr(new cljs.core.Keyword("customers","modal-edit-title","customers/modal-edit-title",282991707))),new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),(cljs.core.truth_(is_new_QMARK___$1)?translations.core.tr(new cljs.core.Keyword("customers","modal-add-subtitle","customers/modal-add-subtitle",1855643621)):translations.core.tr(new cljs.core.Keyword("customers","modal-edit-subtitle","customers/modal-edit-subtitle",-688178144)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"header"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.customers.frontend.view.form_fields,cljs.core.deref(form_data),cljs.core.deref(errors)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"form"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.modal.modal_footer,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.enhanced_button.enhanced_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_cancel__$1,new cljs.core.Keyword(null,"text","text",-1790561697),translations.core.tr(new cljs.core.Keyword("customers","cancel","customers/cancel",712962051))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"cancel"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.enhanced_button.enhanced_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"loading?","loading?",1905707049),cljs.core.deref(loading_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return features.app.customers.frontend.view.handle_save_click(cljs.core.deref(form_data),is_new_QMARK___$1,on_save__$1);
}),new cljs.core.Keyword(null,"text","text",-1790561697),(cljs.core.truth_(cljs.core.deref(loading_QMARK_))?translations.core.tr(new cljs.core.Keyword("customers","saving","customers/saving",1043542862)):translations.core.tr(new cljs.core.Keyword("customers","save-customer","customers/save-customer",1069521815)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"save"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"footer"], null))], null);
});
});
/**
 * Custom render function for customer name column
 */
features.app.customers.frontend.view.customer_name_render = (function features$app$customers$frontend$view$customer_name_render(name,row){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"color","color",1011675173),"#111827",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),name], null),(cljs.core.truth_(new cljs.core.Keyword("customer","email","customer/email",679814628).cljs$core$IFn$_invoke$arity$1(row))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.25rem",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4"], null)], null),new cljs.core.Keyword("customer","email","customer/email",679814628).cljs$core$IFn$_invoke$arity$1(row)], null):null)], null);
});
/**
 * Custom render function for contact info
 */
features.app.customers.frontend.view.contact_render = (function features$app$customers$frontend$view$contact_render(contact_person,row){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(contact_person)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),contact_person], null):null),(cljs.core.truth_(new cljs.core.Keyword("customer","phone","customer/phone",-1365445883).cljs$core$IFn$_invoke$arity$1(row))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem"], null)], null),new cljs.core.Keyword("customer","phone","customer/phone",-1365445883).cljs$core$IFn$_invoke$arity$1(row)], null):null)], null);
});
/**
 * Custom render function for active status
 */
features.app.customers.frontend.view.status_render = (function features$app$customers$frontend$view$status_render(active,row){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem 0.75rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(active)?"#dcfce7":"#fef2f2"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(active)?"#15803d":"#dc2626")], null)], null),(cljs.core.truth_(active)?translations.core.tr(new cljs.core.Keyword("customers","status-active","customers/status-active",1535828561)):translations.core.tr(new cljs.core.Keyword("customers","status-inactive","customers/status-inactive",-244483863)))], null);
});
/**
 * Customers table using server-side data-table component with search, sorting, and pagination
 */
features.app.customers.frontend.view.customers_table = (function features$app$customers$frontend$view$customers_table(customers,loading_QMARK_,on_edit,on_delete,query_fn){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: customers-table called with customers:",cljs.core.deref(customers)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: customers-table loading?:",cljs.core.deref(loading_QMARK_)], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"customers","customers",635915531).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(customers))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.server_side_data_table,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"table-id","table-id",-766649466),new cljs.core.Keyword(null,"query-fn","query-fn",-646736760),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"empty-message","empty-message",-1625491415),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"show-search?","show-search?",684663920),new cljs.core.Keyword(null,"on-data-change","on-data-change",475267763),new cljs.core.Keyword(null,"show-pagination?","show-pagination?",1857367515)],[new cljs.core.Keyword("customer","id","customer/id",-1990317450),new cljs.core.Keyword(null,"customers-table","customers-table",2116059558),query_fn,cljs.core.deref(loading_QMARK_),translations.core.tr(new cljs.core.Keyword("customers","no-customers-found","customers/no-customers-found",-1358221255)),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"customers","customers",635915531).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(customers));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("customers","action-edit","customers/action-edit",-1738456914)),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_edit], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("customers","action-delete","customers/action-delete",-232492900)),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (row){
if(cljs.core.truth_(confirm(translations.core.tr(new cljs.core.Keyword("customers","confirm-delete","customers/confirm-delete",958382532))))){
var G__16663 = new cljs.core.Keyword("customer","id","customer/id",-1990317450).cljs$core$IFn$_invoke$arity$1(row);
return (on_delete.cljs$core$IFn$_invoke$arity$1 ? on_delete.cljs$core$IFn$_invoke$arity$1(G__16663) : on_delete.call(null,G__16663));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("customer","name","customer/name",-1039810549),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("customers","table-header-customer","customers/table-header-customer",1948818615)),new cljs.core.Keyword(null,"render","render",-1408033454),features.app.customers.frontend.view.customer_name_render,new cljs.core.Keyword(null,"sortable?","sortable?",291547474),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("customer","contact-person","customer/contact-person",-430247081),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("customers","table-header-contact","customers/table-header-contact",886252592)),new cljs.core.Keyword(null,"render","render",-1408033454),features.app.customers.frontend.view.contact_render,new cljs.core.Keyword(null,"sortable?","sortable?",291547474),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("customer","active","customer/active",-723544586),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("customers","table-header-status","customers/table-header-status",-1918570200)),new cljs.core.Keyword(null,"render","render",-1408033454),features.app.customers.frontend.view.status_render,new cljs.core.Keyword(null,"sortable?","sortable?",291547474),false], null)], null),true,(function (result){
var G__16664 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("customers","load-success","customers/load-success",1611517444),result], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16664) : zero.frontend.re_frame.dispatch.call(null,G__16664));
}),true])], null)], null);
});
/**
 * Page header with title and add button using new UI component
 */
features.app.customers.frontend.view.customers_page_header = (function features$app$customers$frontend$view$customers_page_header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.page_header.page_header,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),translations.core.tr(new cljs.core.Keyword("customers","page-title","customers/page-title",1769404958)),new cljs.core.Keyword(null,"description","description",-1428560544),translations.core.tr(new cljs.core.Keyword("customers","page-description","customers/page-description",636324744)),new cljs.core.Keyword(null,"action-button","action-button",1805783365),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.enhanced_button.enhanced_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__16665 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("customers","open-modal","customers/open-modal",-659641739),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("customer","active","customer/active",-723544586),true], null),true], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16665) : zero.frontend.re_frame.dispatch.call(null,G__16665));
}),new cljs.core.Keyword(null,"text","text",-1790561697),translations.core.tr(new cljs.core.Keyword("customers","add-new-customer","customers/add-new-customer",792813328))], null)], null)], null)], null);
});
/**
 * Main content area with server-side data table
 */
features.app.customers.frontend.view.customers_content = (function features$app$customers$frontend$view$customers_content(customers,loading_QMARK_,delete_customer,query_fn){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.customers.frontend.view.customers_table,customers,loading_QMARK_,(function (customer){
var G__16667 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("customers","open-modal","customers/open-modal",-659641739),customer,false], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16667) : zero.frontend.re_frame.dispatch.call(null,G__16667));
}),delete_customer,query_fn], null);
});
/**
 * Render modal when customer is selected
 */
features.app.customers.frontend.view.modal_when_open = (function features$app$customers$frontend$view$modal_when_open(save_customer){
var modal_customer = (function (){var G__16669 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("customers","modal-customer","customers/modal-customer",298623272)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__16669) : zero.frontend.re_frame.subscribe.call(null,G__16669));
})();
var modal_is_new_QMARK_ = (function (){var G__16670 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("customers","modal-is-new?","customers/modal-is-new?",-2029346257)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__16670) : zero.frontend.re_frame.subscribe.call(null,G__16670));
})();
if(cljs.core.truth_(cljs.core.deref(modal_customer))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.customers.frontend.view.customer_modal,cljs.core.deref(modal_customer),cljs.core.deref(modal_is_new_QMARK_),save_customer,(function (){
var G__16675 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("customers","close-modal","customers/close-modal",-270494804)], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16675) : zero.frontend.re_frame.dispatch.call(null,G__16675));
})], null);
} else {
return null;
}
});
features.app.customers.frontend.view.view = (function features$app$customers$frontend$view$view(){
var workspace_id = features.app.customers.frontend.view.get_workspace_id();
var customers_data = (function (){var G__16676 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("customers","data","customers/data",1379089132)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__16676) : zero.frontend.re_frame.subscribe.call(null,G__16676));
})();
var loading_QMARK_ = (function (){var G__16677 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("customers","loading?","customers/loading?",1369533542)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__16677) : zero.frontend.re_frame.subscribe.call(null,G__16677));
})();
var modal_is_new_QMARK_ = (function (){var G__16678 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("customers","modal-is-new?","customers/modal-is-new?",-2029346257)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__16678) : zero.frontend.re_frame.subscribe.call(null,G__16678));
})();
var load_customers = (function (params){
return features.app.customers.frontend.view.load_customers_query(workspace_id,(function (){var or__5025__auto__ = params;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});
var save_customer = (function (customer,callback){
return features.app.customers.frontend.view.save_customer_query(customer,workspace_id,cljs.core.deref(modal_is_new_QMARK_),callback,(function (){
return load_customers(cljs.core.PersistentArrayMap.EMPTY);
}));
});
var delete_customer = (function (customer_id){
return features.app.customers.frontend.view.delete_customer_query(customer_id,workspace_id,(function (){
return load_customers(cljs.core.PersistentArrayMap.EMPTY);
}));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh",new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"1200px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.customers.frontend.view.customers_page_header], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.customers.frontend.view.customers_content,customers_data,loading_QMARK_,delete_customer,load_customers], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.customers.frontend.view.modal_when_open,save_customer], null)], null)], null);
});

//# sourceMappingURL=features.app.customers.frontend.view.js.map
