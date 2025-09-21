goog.provide('features.app.teams.frontend.view');
/**
 * Get workspace ID from router parameters
 */
features.app.teams.frontend.view.get_workspace_id = (function features$app$teams$frontend$view$get_workspace_id(){
var router_state = cljs.core.deref(router.frontend.zero.state);
var workspace_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(router_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435)], null));
return workspace_id;
});
/**
 * Execute ParQuery to load team members with pagination
 */
features.app.teams.frontend.view.load_teams_query = (function features$app$teams$frontend$view$load_teams_query(workspace_id,params){
var G__16422_16798 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("teams","set-loading","teams/set-loading",860242493),true], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16422_16798) : zero.frontend.re_frame.dispatch.call(null,G__16422_16798));

return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspace-teams","get-paginated","workspace-teams/get-paginated",-683054416),params], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
var result = new cljs.core.Keyword("workspace-teams","get-paginated","workspace-teams/get-paginated",-683054416).cljs$core$IFn$_invoke$arity$1(response);
var G__16427 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("teams","load-success","teams/load-success",-963429011),result], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16427) : zero.frontend.re_frame.dispatch.call(null,G__16427));
})], null));
});
/**
 * Get appropriate query type for save operation
 */
features.app.teams.frontend.view.get_query_type = (function features$app$teams$frontend$view$get_query_type(is_new_QMARK_){
if(cljs.core.truth_(cljs.core.deref(is_new_QMARK_))){
return new cljs.core.Keyword("workspace-teams","create","workspace-teams/create",605630730);
} else {
return new cljs.core.Keyword("workspace-teams","update","workspace-teams/update",-819150266);
}
});
/**
 * Prepare team member data for save
 */
features.app.teams.frontend.view.prepare_team_data = (function features$app$teams$frontend$view$prepare_team_data(team,is_new_QMARK_){
if(cljs.core.truth_(cljs.core.deref(is_new_QMARK_))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword("user","id","user/id",-1375756663));
} else {
return team;
}
});
/**
 * Handle save response and update UI
 */
features.app.teams.frontend.view.handle_save_response = (function features$app$teams$frontend$view$handle_save_response(response,query_type,callback,load_teams){
(callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));

if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,query_type)))){
var G__16452_16799 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("teams","close-modal","teams/close-modal",-1805515563)], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16452_16799) : zero.frontend.re_frame.dispatch.call(null,G__16452_16799));

return (load_teams.cljs$core$IFn$_invoke$arity$0 ? load_teams.cljs$core$IFn$_invoke$arity$0() : load_teams.call(null));
} else {
return alert(["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,query_type)))].join(''));
}
});
/**
 * Execute ParQuery to save team member
 */
features.app.teams.frontend.view.save_team_query = (function features$app$teams$frontend$view$save_team_query(team,workspace_id,modal_is_new_QMARK_,callback,load_teams){
var query_type = features.app.teams.frontend.view.get_query_type(modal_is_new_QMARK_);
var team_data = features.app.teams.frontend.view.prepare_team_data(team,modal_is_new_QMARK_);
var context = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null);
return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),cljs.core.PersistentArrayMap.createAsIfByAssoc([query_type,team_data]),new cljs.core.Keyword("parquery","context","parquery/context",661391038),context,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
return features.app.teams.frontend.view.handle_save_response(response,query_type,callback,load_teams);
})], null));
});
/**
 * Execute ParQuery to delete team member
 */
features.app.teams.frontend.view.delete_team_query = (function features$app$teams$frontend$view$delete_team_query(user_id,workspace_id,load_teams){
return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspace-teams","delete","workspace-teams/delete",232302950),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),user_id], null)], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("workspace-teams","delete","workspace-teams/delete",232302950).cljs$core$IFn$_invoke$arity$1(response)))){
return (load_teams.cljs$core$IFn$_invoke$arity$0 ? load_teams.cljs$core$IFn$_invoke$arity$0() : load_teams.call(null));
} else {
return alert("Error deleting team member");
}
})], null));
});
/**
 * Validate username
 */
features.app.teams.frontend.view.validate_username = (function features$app$teams$frontend$view$validate_username(username){
return (((clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(username))).length) < (2));
});
/**
 * Validate full name
 */
features.app.teams.frontend.view.validate_full_name = (function features$app$teams$frontend$view$validate_full_name(full_name){
return (((clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_name))).length) < (2));
});
/**
 * Validate email
 */
features.app.teams.frontend.view.validate_email = (function features$app$teams$frontend$view$validate_email(email){
var email_str = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(email));
return (((((email_str).length) < (3))) || (cljs.core.not(cljs.core.re_matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,email_str))));
});
/**
 * Validate password (only for new users)
 */
features.app.teams.frontend.view.validate_password = (function features$app$teams$frontend$view$validate_password(password,is_new_QMARK_){
if(cljs.core.truth_(is_new_QMARK_)){
return (((clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(password))).length) < (6));
} else {
return null;
}
});
/**
 * Validates team member data and returns map of field errors
 */
features.app.teams.frontend.view.validate_team_member = (function features$app$teams$frontend$view$validate_team_member(team,is_new_QMARK_){
var errors = cljs.core.PersistentArrayMap.EMPTY;
var username = new cljs.core.Keyword("user","username","user/username",1599713859).cljs$core$IFn$_invoke$arity$1(team);
var full_name = new cljs.core.Keyword("user","full-name","user/full-name",420262817).cljs$core$IFn$_invoke$arity$1(team);
var email = new cljs.core.Keyword("user","email","user/email",1419686391).cljs$core$IFn$_invoke$arity$1(team);
var password = new cljs.core.Keyword("user","password","user/password",430055242).cljs$core$IFn$_invoke$arity$1(team);
var G__16496 = errors;
var G__16496__$1 = ((features.app.teams.frontend.view.validate_username(username))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16496,new cljs.core.Keyword("user","username","user/username",1599713859),translations.core.tr(new cljs.core.Keyword("teams","error-username","teams/error-username",-78349464))):G__16496);
var G__16496__$2 = ((features.app.teams.frontend.view.validate_full_name(full_name))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16496__$1,new cljs.core.Keyword("user","full-name","user/full-name",420262817),translations.core.tr(new cljs.core.Keyword("teams","error-full-name","teams/error-full-name",-1572167295))):G__16496__$1);
var G__16496__$3 = ((features.app.teams.frontend.view.validate_email(email))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16496__$2,new cljs.core.Keyword("user","email","user/email",1419686391),translations.core.tr(new cljs.core.Keyword("teams","error-email","teams/error-email",-1541088384))):G__16496__$2);
if(cljs.core.truth_(features.app.teams.frontend.view.validate_password(password,is_new_QMARK_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16496__$3,new cljs.core.Keyword("user","password","user/password",430055242),translations.core.tr(new cljs.core.Keyword("teams","error-password","teams/error-password",483365187)));
} else {
return G__16496__$3;
}
});
var G__16499_16800 = new cljs.core.Keyword("teams","data","teams/data",112183689);
var G__16500_16801 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pagination","pagination",-1553654604),cljs.core.PersistentArrayMap.EMPTY], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16499_16800,G__16500_16801) : zero.frontend.re_frame.reg_sub.call(null,G__16499_16800,G__16500_16801));
var G__16501_16802 = new cljs.core.Keyword("teams","loading?","teams/loading?",1948565891);
var G__16502_16803 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16501_16802,G__16502_16803) : zero.frontend.re_frame.reg_sub.call(null,G__16501_16802,G__16502_16803));
var G__16503_16804 = new cljs.core.Keyword("teams","modal-team","teams/modal-team",-1394969775);
var G__16504_16805 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"modal-team","modal-team",-1521198073)], null),null);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16503_16804,G__16504_16805) : zero.frontend.re_frame.reg_sub.call(null,G__16503_16804,G__16504_16805));
var G__16505_16806 = new cljs.core.Keyword("teams","modal-is-new?","teams/modal-is-new?",-795988146);
var G__16506_16807 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"modal-is-new?","modal-is-new?",-1493686812)], null),false);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16505_16806,G__16506_16807) : zero.frontend.re_frame.reg_sub.call(null,G__16505_16806,G__16506_16807));
var G__16507_16808 = new cljs.core.Keyword("teams","modal-form","teams/modal-form",336404097);
var G__16508_16809 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"modal-form","modal-form",293545775)], null),cljs.core.PersistentArrayMap.EMPTY);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16507_16808,G__16508_16809) : zero.frontend.re_frame.reg_sub.call(null,G__16507_16808,G__16508_16809));
var G__16510_16810 = new cljs.core.Keyword("teams","modal-errors","teams/modal-errors",828773154);
var G__16511_16811 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"modal-errors","modal-errors",868747852)], null),cljs.core.PersistentArrayMap.EMPTY);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16510_16810,G__16511_16811) : zero.frontend.re_frame.reg_sub.call(null,G__16510_16810,G__16511_16811));
var G__16516_16813 = new cljs.core.Keyword("teams","modal-loading?","teams/modal-loading?",-503122216);
var G__16517_16814 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"modal-loading?","modal-loading?",-122625782)], null),false);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16516_16813,G__16517_16814) : zero.frontend.re_frame.reg_sub.call(null,G__16516_16813,G__16517_16814));
var G__16525_16815 = new cljs.core.Keyword("teams","set-loading","teams/set-loading",860242493);
var G__16526_16816 = (function (db,p__16532){
var vec__16533 = p__16532;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16533,(0),null);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16533,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),loading_QMARK_);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16525_16815,G__16526_16816) : zero.frontend.re_frame.reg_event_db.call(null,G__16525_16815,G__16526_16816));
var G__16549_16817 = new cljs.core.Keyword("teams","load-success","teams/load-success",-963429011);
var G__16550_16818 = (function (db,p__16553){
var vec__16556 = p__16553;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16556,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16556,(1),null);
var updated_db = cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"data","data",-232669377)], null),data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);
return updated_db;
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16549_16817,G__16550_16818) : zero.frontend.re_frame.reg_event_db.call(null,G__16549_16817,G__16550_16818));
var G__16576_16819 = new cljs.core.Keyword("teams","open-modal","teams/open-modal",858266838);
var G__16577_16820 = (function (db,p__16579){
var vec__16580 = p__16579;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16580,(0),null);
var team = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16580,(1),null);
var is_new_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16580,(2),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"modal-team","modal-team",-1521198073)], null),team),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"modal-is-new?","modal-is-new?",-1493686812)], null),is_new_QMARK_);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16576_16819,G__16577_16820) : zero.frontend.re_frame.reg_event_db.call(null,G__16576_16819,G__16577_16820));
var G__16593_16821 = new cljs.core.Keyword("teams","close-modal","teams/close-modal",-1805515563);
var G__16594_16822 = (function (db,_){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"modal-team","modal-team",-1521198073)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"modal-is-new?","modal-is-new?",-1493686812)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"modal-form","modal-form",293545775)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"modal-errors","modal-errors",868747852)], null),cljs.core.PersistentArrayMap.EMPTY);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16593_16821,G__16594_16822) : zero.frontend.re_frame.reg_event_db.call(null,G__16593_16821,G__16594_16822));
var G__16597_16823 = new cljs.core.Keyword("teams","update-form-field","teams/update-form-field",1519768872);
var G__16598_16824 = (function (db,p__16599){
var vec__16600 = p__16599;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16600,(0),null);
var field_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16600,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16600,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"modal-form","modal-form",293545775),field_key], null),value);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16597_16823,G__16598_16824) : zero.frontend.re_frame.reg_event_db.call(null,G__16597_16823,G__16598_16824));
var G__16603_16825 = new cljs.core.Keyword("teams","set-form-errors","teams/set-form-errors",-25578623);
var G__16604_16826 = (function (db,p__16605){
var vec__16606 = p__16605;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16606,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16606,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"modal-errors","modal-errors",868747852)], null),errors);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16603_16825,G__16604_16826) : zero.frontend.re_frame.reg_event_db.call(null,G__16603_16825,G__16604_16826));
var G__16609_16829 = new cljs.core.Keyword("teams","init-form","teams/init-form",770711080);
var G__16610_16830 = (function (db,p__16611){
var vec__16612 = p__16611;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16612,(0),null);
var team_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16612,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"modal-form","modal-form",293545775)], null),(function (){var or__5025__auto__ = team_data;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16609_16829,G__16610_16830) : zero.frontend.re_frame.reg_event_db.call(null,G__16609_16829,G__16610_16830));
var G__16615_16845 = new cljs.core.Keyword("teams","set-modal-loading","teams/set-modal-loading",-2146317877);
var G__16616_16846 = (function (db,p__16617){
var vec__16618 = p__16617;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16618,(0),null);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16618,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"modal-loading?","modal-loading?",-122625782)], null),loading_QMARK_);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16615_16845,G__16616_16846) : zero.frontend.re_frame.reg_event_db.call(null,G__16615_16845,G__16616_16846));
features.app.teams.frontend.view.field_label = (function features$app$teams$frontend$view$field_label(label,field_key,has_error_QMARK_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"0.025em",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(has_error_QMARK_)?"#dc3545":"#374151")], null)], null),label,(cljs.core.truth_((function (){var fexpr__16621 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("user","full-name","user/full-name",420262817),null,new cljs.core.Keyword("user","username","user/username",1599713859),null,new cljs.core.Keyword("user","email","user/email",1419686391),null], null), null);
return (fexpr__16621.cljs$core$IFn$_invoke$arity$1 ? fexpr__16621.cljs$core$IFn$_invoke$arity$1(field_key) : fexpr__16621.call(null,field_key));
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#ef4444",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.25rem"], null)], null),"*"], null):null)], null);
});
/**
 * Base properties for input fields
 */
features.app.teams.frontend.view.input_base_props = (function features$app$teams$frontend$view$input_base_props(field_key,team,has_error_QMARK_,attrs){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(team,field_key,"")),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__16622_SHARP_){
var G__16623 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("teams","update-form-field","teams/update-form-field",1519768872),field_key,p1__16622_SHARP_.target.value], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16623) : zero.frontend.re_frame.dispatch.call(null,G__16623));
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["1.5",(cljs.core.truth_(has_error_QMARK_)?"0 0 0 3px rgba(220, 53, 69, 0.1)":"0 1px 2px 0 rgba(0, 0, 0, 0.05)"),"1rem","border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out","100%","0.75rem 1rem","none",(cljs.core.truth_(has_error_QMARK_)?"2px solid #dc3545":"1px solid #d1d5db"),"8px"]),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),(cljs.core.truth_(has_error_QMARK_)?"#dc3545":"#3b82f6"),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),(cljs.core.truth_(has_error_QMARK_)?"0 0 0 3px rgba(220, 53, 69, 0.1)":"0 0 0 3px rgba(59, 130, 246, 0.1)")], null)], null)], 0))], null);
});
/**
 * Render select dropdown input
 */
features.app.teams.frontend.view.render_select_input = (function features$app$teams$frontend$view$render_select_input(field_key,form_data,has_error_QMARK_,attrs,options){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0)),features.app.teams.frontend.view.input_base_props(field_key,form_data,has_error_QMARK_,attrs)], 0)),(function (){var iter__5503__auto__ = (function features$app$teams$frontend$view$render_select_input_$_iter__16671(s__16672){
return (new cljs.core.LazySeq(null,(function (){
var s__16672__$1 = s__16672;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__16672__$1);
if(temp__5823__auto__){
var s__16672__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16672__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__16672__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__16674 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__16673 = (0);
while(true){
if((i__16673 < size__5502__auto__)){
var option = cljs.core._nth(c__5501__auto__,i__16673);
cljs.core.chunk_append(b__16674,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(option)], null)));

var G__16875 = (i__16673 + (1));
i__16673 = G__16875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16674),features$app$teams$frontend$view$render_select_input_$_iter__16671(cljs.core.chunk_rest(s__16672__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16674),null);
}
} else {
var option = cljs.core.first(s__16672__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(option)], null)),features$app$teams$frontend$view$render_select_input_$_iter__16671(cljs.core.rest(s__16672__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(options);
})()], null);
});
/**
 * Render text input
 */
features.app.teams.frontend.view.render_text_input = (function features$app$teams$frontend$view$render_text_input(field_key,form_data,has_error_QMARK_,attrs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,features.app.teams.frontend.view.input_base_props(field_key,form_data,has_error_QMARK_,attrs)], 0))], null);
});
/**
 * Render appropriate input type
 */
features.app.teams.frontend.view.field_input = (function features$app$teams$frontend$view$field_input(field_key,form_data,has_error_QMARK_,attrs){
if(cljs.core.truth_(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(attrs))){
return features.app.teams.frontend.view.render_select_input(field_key,form_data,has_error_QMARK_,attrs,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(attrs));
} else {
return features.app.teams.frontend.view.render_text_input(field_key,form_data,has_error_QMARK_,attrs);
}
});
features.app.teams.frontend.view.field_error = (function features$app$teams$frontend$view$field_error(error_msg){
if(cljs.core.truth_(error_msg)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#dc3545",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.25rem"], null)], null),error_msg], null);
} else {
return null;
}
});
/**
 * Complete form field with label, input and error
 */
features.app.teams.frontend.view.form_field = (function features$app$teams$frontend$view$form_field(label,field_key,form_data,errors,attrs){
var has_error_QMARK_ = cljs.core.contains_QMARK_(errors,field_key);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.teams.frontend.view.field_label,label,field_key,has_error_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.teams.frontend.view.field_input,field_key,form_data,has_error_QMARK_,attrs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.teams.frontend.view.field_error,cljs.core.get.cljs$core$IFn$_invoke$arity$2(errors,field_key)], null)], null);
});
/**
 * All form input fields
 */
features.app.teams.frontend.view.form_fields = (function features$app$teams$frontend$view$form_fields(form_data,errors,is_new_QMARK_){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.teams.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("teams","username","teams/username",2043057208)),new cljs.core.Keyword("user","username","user/username",1599713859),form_data,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("teams","username-placeholder","teams/username-placeholder",-148228313))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.teams.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("teams","full-name","teams/full-name",451302828)),new cljs.core.Keyword("user","full-name","user/full-name",420262817),form_data,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("teams","full-name-placeholder","teams/full-name-placeholder",-1140176178))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.teams.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("teams","email","teams/email",1308204988)),new cljs.core.Keyword("user","email","user/email",1419686391),form_data,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"email",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("teams","email-placeholder","teams/email-placeholder",1881581220))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.teams.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("teams","phone","teams/phone",-585007827)),new cljs.core.Keyword("user","phone","user/phone",-758685932),form_data,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"tel",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("teams","phone-placeholder","teams/phone-placeholder",-184904020))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.teams.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("teams","role","teams/role",-798947722)),new cljs.core.Keyword("user","role","user/role",-742594495),form_data,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"select",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"employee",new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("teams","employee","teams/employee",-430259739))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"admin",new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("teams","admin","teams/admin",196270483))], null)], null)], null)], null),(cljs.core.truth_(is_new_QMARK_)?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.teams.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("teams","password","teams/password",458046781)),new cljs.core.Keyword("user","password","user/password",430055242),form_data,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("teams","password-placeholder","teams/password-placeholder",-1151803192))], null)], null):null),(cljs.core.truth_(is_new_QMARK_)?null:new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.teams.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("teams","active-field","teams/active-field",474818149)),new cljs.core.Keyword("user","active","user/active",1891303945),form_data,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"select",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),true,new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("teams","active","teams/active",1718640638))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),false,new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("teams","inactive","teams/inactive",1313673874))], null)], null)], null)], null))], null);
});
/**
 * Handle save button click with validation
 */
features.app.teams.frontend.view.handle_save_click = (function features$app$teams$frontend$view$handle_save_click(form_data,is_new_QMARK_,on_save){
var validation_errors = features.app.teams.frontend.view.validate_team_member(form_data,is_new_QMARK_);
if(cljs.core.empty_QMARK_(validation_errors)){
var G__16734_16888 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("teams","set-form-errors","teams/set-form-errors",-25578623),cljs.core.PersistentArrayMap.EMPTY], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16734_16888) : zero.frontend.re_frame.dispatch.call(null,G__16734_16888));

var G__16735_16889 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("teams","set-modal-loading","teams/set-modal-loading",-2146317877),true], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16735_16889) : zero.frontend.re_frame.dispatch.call(null,G__16735_16889));

var G__16736 = form_data;
var G__16737 = (function (){
var G__16739 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("teams","set-modal-loading","teams/set-modal-loading",-2146317877),false], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16739) : zero.frontend.re_frame.dispatch.call(null,G__16739));
});
return (on_save.cljs$core$IFn$_invoke$arity$2 ? on_save.cljs$core$IFn$_invoke$arity$2(G__16736,G__16737) : on_save.call(null,G__16736,G__16737));
} else {
var G__16740 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("teams","set-form-errors","teams/set-form-errors",-25578623),validation_errors], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16740) : zero.frontend.re_frame.dispatch.call(null,G__16740));
}
});
/**
 * Modal for creating/editing team members using new UI components
 */
features.app.teams.frontend.view.team_modal = (function features$app$teams$frontend$view$team_modal(team_data,is_new_QMARK_,on_save,on_cancel){
var form_data = (function (){var G__16742 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("teams","modal-form","teams/modal-form",336404097)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__16742) : zero.frontend.re_frame.subscribe.call(null,G__16742));
})();
var errors = (function (){var G__16743 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("teams","modal-errors","teams/modal-errors",828773154)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__16743) : zero.frontend.re_frame.subscribe.call(null,G__16743));
})();
var loading_QMARK_ = (function (){var G__16744 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("teams","modal-loading?","teams/modal-loading?",-503122216)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__16744) : zero.frontend.re_frame.subscribe.call(null,G__16744));
})();
var G__16745_16892 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("teams","init-form","teams/init-form",770711080),team_data], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16745_16892) : zero.frontend.re_frame.dispatch.call(null,G__16745_16892));

return (function (team_data__$1,is_new_QMARK___$1,on_save__$1,on_cancel__$1){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.modal.modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_cancel__$1,new cljs.core.Keyword(null,"close-on-backdrop?","close-on-backdrop?",313135575),true], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.modal.modal_header,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(is_new_QMARK___$1)?translations.core.tr(new cljs.core.Keyword("teams","modal-add-title","teams/modal-add-title",581142165)):translations.core.tr(new cljs.core.Keyword("teams","modal-edit-title","teams/modal-edit-title",1783802044))),new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),(cljs.core.truth_(is_new_QMARK___$1)?translations.core.tr(new cljs.core.Keyword("teams","modal-add-subtitle","teams/modal-add-subtitle",-1457058044)):translations.core.tr(new cljs.core.Keyword("teams","modal-edit-subtitle","teams/modal-edit-subtitle",-2054828355)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"header"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.teams.frontend.view.form_fields,cljs.core.deref(form_data),cljs.core.deref(errors),is_new_QMARK___$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"form"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.modal.modal_footer,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.enhanced_button.enhanced_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_cancel__$1,new cljs.core.Keyword(null,"text","text",-1790561697),translations.core.tr(new cljs.core.Keyword("teams","cancel","teams/cancel",-2080613022))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"cancel"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.enhanced_button.enhanced_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"loading?","loading?",1905707049),cljs.core.deref(loading_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return features.app.teams.frontend.view.handle_save_click(cljs.core.deref(form_data),is_new_QMARK___$1,on_save__$1);
}),new cljs.core.Keyword(null,"text","text",-1790561697),(cljs.core.truth_(cljs.core.deref(loading_QMARK_))?translations.core.tr(new cljs.core.Keyword("teams","saving","teams/saving",-725778449)):translations.core.tr(new cljs.core.Keyword("teams","save-member","teams/save-member",-1833964020)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"save"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"footer"], null))], null);
});
});
/**
 * Custom render function for user name column with username and email
 */
features.app.teams.frontend.view.user_name_render = (function features$app$teams$frontend$view$user_name_render(full_name,row){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"color","color",1011675173),"#111827",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),full_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.25rem"], null)], null),["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("user","username","user/username",1599713859).cljs$core$IFn$_invoke$arity$1(row))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem"], null)], null),new cljs.core.Keyword("user","email","user/email",1419686391).cljs$core$IFn$_invoke$arity$1(row)], null)], null);
});
/**
 * Custom render function for role column
 */
features.app.teams.frontend.view.role_render = (function features$app$teams$frontend$view$role_render(role,row){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem 0.75rem",new cljs.core.Keyword(null,"background","background",-863952629),(function (){var G__16750 = role;
switch (G__16750) {
case "superadmin":
return "#dc2626";

break;
case "admin":
return "#ea580c";

break;
case "employee":
return "#059669";

break;
default:
return "#6b7280";

}
})(),new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),clojure.string.capitalize(cljs.core.str.cljs$core$IFn$_invoke$arity$1(role))], null);
});
/**
 * Custom render function for active status
 */
features.app.teams.frontend.view.status_render = (function features$app$teams$frontend$view$status_render(active,row){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem 0.75rem",new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(active)?"#10b981":"#ef4444"),new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),(cljs.core.truth_(active)?translations.core.tr(new cljs.core.Keyword("teams","active","teams/active",1718640638)):translations.core.tr(new cljs.core.Keyword("teams","inactive","teams/inactive",1313673874)))], null);
});
/**
 * Custom render function for contact info
 */
features.app.teams.frontend.view.contact_render = (function features$app$teams$frontend$view$contact_render(phone,row){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(phone)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),phone], null):null)], null);
});
/**
 * Teams table using server-side data-table component with search, sorting, and pagination
 */
features.app.teams.frontend.view.teams_table = (function features$app$teams$frontend$view$teams_table(teams,loading_QMARK_,on_edit,on_delete,query_fn){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.server_side_data_table,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"table-id","table-id",-766649466),new cljs.core.Keyword(null,"query-fn","query-fn",-646736760),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"empty-message","empty-message",-1625491415),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"show-search?","show-search?",684663920),new cljs.core.Keyword(null,"data-key","data-key",1775480631),new cljs.core.Keyword(null,"show-pagination?","show-pagination?",1857367515)],[new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword(null,"teams-table","teams-table",-1623839854),query_fn,cljs.core.deref(loading_QMARK_),translations.core.tr(new cljs.core.Keyword("teams","no-members-found","teams/no-members-found",1381698752)),cljs.core.deref(teams),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("teams","action-edit","teams/action-edit",-1159909877)),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_edit], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("teams","action-delete","teams/action-delete",1537195449)),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (row){
if(cljs.core.truth_(confirm(translations.core.tr(new cljs.core.Keyword("teams","confirm-delete","teams/confirm-delete",-509323165))))){
var G__16757 = new cljs.core.Keyword("user","id","user/id",-1375756663).cljs$core$IFn$_invoke$arity$1(row);
return (on_delete.cljs$core$IFn$_invoke$arity$1 ? on_delete.cljs$core$IFn$_invoke$arity$1(G__16757) : on_delete.call(null,G__16757));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("user","full-name","user/full-name",420262817),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("teams","table-header-member","teams/table-header-member",-720215560)),new cljs.core.Keyword(null,"render","render",-1408033454),features.app.teams.frontend.view.user_name_render,new cljs.core.Keyword(null,"sortable?","sortable?",291547474),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("user","role","user/role",-742594495),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("teams","table-header-role","teams/table-header-role",2073613296)),new cljs.core.Keyword(null,"render","render",-1408033454),features.app.teams.frontend.view.role_render,new cljs.core.Keyword(null,"sortable?","sortable?",291547474),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("user","active","user/active",1891303945),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("teams","table-header-status","teams/table-header-status",-468097983)),new cljs.core.Keyword(null,"render","render",-1408033454),features.app.teams.frontend.view.status_render,new cljs.core.Keyword(null,"sortable?","sortable?",291547474),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("user","phone","user/phone",-758685932),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("teams","table-header-phone","teams/table-header-phone",1357703961)),new cljs.core.Keyword(null,"render","render",-1408033454),features.app.teams.frontend.view.contact_render,new cljs.core.Keyword(null,"sortable?","sortable?",291547474),false], null)], null),true,new cljs.core.Keyword(null,"users","users",-713552705),true])], null);
});
/**
 * Page header with title and add button using new UI component
 */
features.app.teams.frontend.view.teams_page_header = (function features$app$teams$frontend$view$teams_page_header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.page_header.page_header,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),translations.core.tr(new cljs.core.Keyword("teams","page-title","teams/page-title",-876967745)),new cljs.core.Keyword(null,"description","description",-1428560544),translations.core.tr(new cljs.core.Keyword("teams","page-description","teams/page-description",-865461017)),new cljs.core.Keyword(null,"action-button","action-button",1805783365),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.enhanced_button.enhanced_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__16764 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("teams","open-modal","teams/open-modal",858266838),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","role","user/role",-742594495),"employee",new cljs.core.Keyword("user","active","user/active",1891303945),true], null),true], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16764) : zero.frontend.re_frame.dispatch.call(null,G__16764));
}),new cljs.core.Keyword(null,"text","text",-1790561697),translations.core.tr(new cljs.core.Keyword("teams","add-new-member","teams/add-new-member",1598746118))], null)], null)], null)], null);
});
/**
 * Main content area with server-side data table
 */
features.app.teams.frontend.view.teams_content = (function features$app$teams$frontend$view$teams_content(teams_data,loading_QMARK_,delete_team,query_fn){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.teams.frontend.view.teams_table,teams_data,loading_QMARK_,(function (team){
var event_vec = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("teams","open-modal","teams/open-modal",858266838),team,false], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(event_vec) : zero.frontend.re_frame.dispatch.call(null,event_vec));
}),delete_team,query_fn], null);
});
/**
 * Render modal when team member is selected
 */
features.app.teams.frontend.view.modal_when_open = (function features$app$teams$frontend$view$modal_when_open(save_team){
var modal_team = (function (){var G__16765 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("teams","modal-team","teams/modal-team",-1394969775)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__16765) : zero.frontend.re_frame.subscribe.call(null,G__16765));
})();
var modal_is_new_QMARK_ = (function (){var G__16766 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("teams","modal-is-new?","teams/modal-is-new?",-795988146)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__16766) : zero.frontend.re_frame.subscribe.call(null,G__16766));
})();
if(cljs.core.truth_(cljs.core.deref(modal_team))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.teams.frontend.view.team_modal,cljs.core.deref(modal_team),cljs.core.deref(modal_is_new_QMARK_),save_team,(function (){
var G__16779 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("teams","close-modal","teams/close-modal",-1805515563)], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16779) : zero.frontend.re_frame.dispatch.call(null,G__16779));
})], null);
} else {
return null;
}
});
features.app.teams.frontend.view.view = (function features$app$teams$frontend$view$view(){
var workspace_id = features.app.teams.frontend.view.get_workspace_id();
var teams_data = (function (){var G__16781 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("teams","data","teams/data",112183689)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__16781) : zero.frontend.re_frame.subscribe.call(null,G__16781));
})();
var loading_QMARK_ = (function (){var G__16782 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("teams","loading?","teams/loading?",1948565891)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__16782) : zero.frontend.re_frame.subscribe.call(null,G__16782));
})();
var modal_team = (function (){var G__16783 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("teams","modal-team","teams/modal-team",-1394969775)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__16783) : zero.frontend.re_frame.subscribe.call(null,G__16783));
})();
var modal_is_new_QMARK_ = (function (){var G__16784 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("teams","modal-is-new?","teams/modal-is-new?",-795988146)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__16784) : zero.frontend.re_frame.subscribe.call(null,G__16784));
})();
var load_teams = (function (params){
return features.app.teams.frontend.view.load_teams_query(workspace_id,(function (){var or__5025__auto__ = params;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});
var save_team = (function (team,callback){
return features.app.teams.frontend.view.save_team_query(team,workspace_id,modal_is_new_QMARK_,callback,(function (){
return load_teams(cljs.core.PersistentArrayMap.EMPTY);
}));
});
var delete_team = (function (user_id){
return features.app.teams.frontend.view.delete_team_query(user_id,workspace_id,(function (){
return load_teams(cljs.core.PersistentArrayMap.EMPTY);
}));
});
zero.frontend.react.use_effect(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),[]], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh",new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"1200px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.teams.frontend.view.teams_page_header], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.teams.frontend.view.teams_content,teams_data,loading_QMARK_,delete_team,load_teams], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.teams.frontend.view.modal_when_open,save_team], null)], null)], null);
});

//# sourceMappingURL=features.app.teams.frontend.view.js.map
