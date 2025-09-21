goog.provide('features.app.settings.frontend.view');
var G__36184_36503 = new cljs.core.Keyword("settings","load-start","settings/load-start",909271435);
var G__36185_36504 = (function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36184_36503,G__36185_36504) : zero.frontend.re_frame.reg_event_db.call(null,G__36184_36503,G__36185_36504));
var G__36189_36505 = new cljs.core.Keyword("settings","load-success","settings/load-success",2038533586);
var G__36190_36506 = (function (db,p__36192){
var vec__36193 = p__36192;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36193,(0),null);
var settings_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36193,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"data","data",-232669377)], null),settings_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36189_36505,G__36190_36506) : zero.frontend.re_frame.reg_event_db.call(null,G__36189_36505,G__36190_36506));
var G__36197_36507 = new cljs.core.Keyword("settings","load-error","settings/load-error",-65656740);
var G__36198_36508 = (function (db,p__36199){
var vec__36200 = p__36199;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36200,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36200,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"error","error",-978969032)], null),error),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36197_36507,G__36198_36508) : zero.frontend.re_frame.reg_event_db.call(null,G__36197_36507,G__36198_36508));
var G__36203_36509 = new cljs.core.Keyword("settings","update-field","settings/update-field",-879525099);
var G__36204_36510 = (function (db,p__36205){
var vec__36206 = p__36205;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36206,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36206,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36206,(2),null);
return cljs.core.assoc_in(db,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"data","data",-232669377)], null),path),value);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36203_36509,G__36204_36510) : zero.frontend.re_frame.reg_event_db.call(null,G__36203_36509,G__36204_36510));
var G__36209_36511 = new cljs.core.Keyword("settings","set-uploading","settings/set-uploading",1127027607);
var G__36210_36512 = (function (db,p__36211){
var vec__36212 = p__36211;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36212,(0),null);
var uploading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36212,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"uploading?","uploading?",316182892)], null),uploading_QMARK_);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36209_36511,G__36210_36512) : zero.frontend.re_frame.reg_event_db.call(null,G__36209_36511,G__36210_36512));
var G__36219_36514 = new cljs.core.Keyword("settings","set-selected-file","settings/set-selected-file",167623417);
var G__36220_36515 = (function (db,p__36224){
var vec__36225 = p__36224;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36225,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36225,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"selected-file","selected-file",-189809986)], null),file);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36219_36514,G__36220_36515) : zero.frontend.re_frame.reg_event_db.call(null,G__36219_36514,G__36220_36515));
var G__36229_36516 = new cljs.core.Keyword("settings","set-preview-url","settings/set-preview-url",788270793);
var G__36230_36517 = (function (db,p__36231){
var vec__36232 = p__36231;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36232,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36232,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"preview-url","preview-url",1306431546)], null),url);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36229_36516,G__36230_36517) : zero.frontend.re_frame.reg_event_db.call(null,G__36229_36516,G__36230_36517));
var G__36235_36520 = new cljs.core.Keyword("settings","data","settings/data",1471085342);
var G__36236_36521 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"data","data",-232669377)], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36235_36520,G__36236_36521) : zero.frontend.re_frame.reg_sub.call(null,G__36235_36520,G__36236_36521));
var G__36248_36533 = new cljs.core.Keyword("settings","loading?","settings/loading?",1125461016);
var G__36249_36534 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36248_36533,G__36249_36534) : zero.frontend.re_frame.reg_sub.call(null,G__36248_36533,G__36249_36534));
var G__36250_36536 = new cljs.core.Keyword("settings","uploading?","settings/uploading?",-1470421623);
var G__36251_36537 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"uploading?","uploading?",316182892)], null),false);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36250_36536,G__36251_36537) : zero.frontend.re_frame.reg_sub.call(null,G__36250_36536,G__36251_36537));
var G__36266_36538 = new cljs.core.Keyword("settings","selected-file","settings/selected-file",-1715665125);
var G__36267_36539 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"selected-file","selected-file",-189809986)], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36266_36538,G__36267_36539) : zero.frontend.re_frame.reg_sub.call(null,G__36266_36538,G__36267_36539));
var G__36270_36540 = new cljs.core.Keyword("settings","preview-url","settings/preview-url",-547730339);
var G__36271_36541 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"preview-url","preview-url",1306431546)], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36270_36540,G__36271_36541) : zero.frontend.re_frame.reg_sub.call(null,G__36270_36540,G__36271_36541));
/**
 * Get workspace ID from router parameters
 */
features.app.settings.frontend.view.get_workspace_id = (function features$app$settings$frontend$view$get_workspace_id(){
var router_state = cljs.core.deref(router.frontend.zero.state);
var workspace_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(router_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435)], null));
return workspace_id;
});
/**
 * Load workspace settings
 */
features.app.settings.frontend.view.load_settings = (function features$app$settings$frontend$view$load_settings(workspace_id){
var G__36279_36542 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","load-start","settings/load-start",909271435)], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36279_36542) : zero.frontend.re_frame.dispatch.call(null,G__36279_36542));

return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspace-settings","get","workspace-settings/get",-186799382),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
var temp__5821__auto__ = new cljs.core.Keyword("workspace-settings","get","workspace-settings/get",-186799382).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(temp__5821__auto__)){
var settings_data = temp__5821__auto__;
var G__36281 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","load-success","settings/load-success",2038533586),settings_data], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36281) : zero.frontend.re_frame.dispatch.call(null,G__36281));
} else {
var G__36282 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","load-error","settings/load-error",-65656740),translations.core.tr(new cljs.core.Keyword("settings","error-no-data","settings/error-no-data",1741897318))], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36282) : zero.frontend.re_frame.dispatch.call(null,G__36282));
}
})], null));
});
/**
 * Save workspace settings
 */
features.app.settings.frontend.view.save_settings = (function features$app$settings$frontend$view$save_settings(workspace_id,settings,callback){
return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspace-settings","update","workspace-settings/update",-826995097),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings","settings",1556144875),settings], null)], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),callback], null));
});
/**
 * Submit settings via multipart form (both workspace name and optional file)
 */
features.app.settings.frontend.view.submit_settings = (function features$app$settings$frontend$view$submit_settings(workspace_id,workspace_name,file,callback){
var form_data = (new FormData());
var upload_url = ["/app/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id),"/settings/upload-logo"].join('');
form_data.append("workspaceName",workspace_name);

if(cljs.core.truth_(file)){
form_data.append("file",file);
} else {
}

return fetch(upload_url,({"method": "POST", "body": form_data})).then((function (response){
return response.json();
})).then((function (data){
var G__36329 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__36329) : callback.call(null,G__36329));
})).catch((function (error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Upload error:",error], 0));

var G__36336 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__36336) : callback.call(null,G__36336));
}));
});
/**
 * Page header for settings page using consistent UI component
 */
features.app.settings.frontend.view.settings_page_header = (function features$app$settings$frontend$view$settings_page_header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.page_header.page_header,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),translations.core.tr(new cljs.core.Keyword("settings","title","settings/title",-630353462)),new cljs.core.Keyword(null,"description","description",-1428560544),translations.core.tr(new cljs.core.Keyword("settings","description","settings/description",-245882445))], null)], null);
});
/**
 * Handle file selection for logo upload
 */
features.app.settings.frontend.view.handle_file_select = (function features$app$settings$frontend$view$handle_file_select(e){
var file = (e.target.files[(0)]);
var G__36379_36551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-selected-file","settings/set-selected-file",167623417),file], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36379_36551) : zero.frontend.re_frame.dispatch.call(null,G__36379_36551));

if(cljs.core.truth_(file)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Selected file:",file.name], 0));

var reader = (new FileReader());
(reader.onload = (function (e__$1){
var G__36387 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-preview-url","settings/set-preview-url",788270793),e__$1.target.result], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36387) : zero.frontend.re_frame.dispatch.call(null,G__36387));
}));

return reader.readAsDataURL(file);
} else {
return null;
}
});
/**
 * Display upload status and file selection
 */
features.app.settings.frontend.view.upload_status_display = (function features$app$settings$frontend$view$upload_status_display(){
var uploading_QMARK_ = cljs.core.deref((function (){var G__36408 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","uploading?","settings/uploading?",-1470421623)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36408) : zero.frontend.re_frame.subscribe.call(null,G__36408));
})());
var selected_file = cljs.core.deref((function (){var G__36413 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","selected-file","settings/selected-file",-1715665125)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36413) : zero.frontend.re_frame.subscribe.call(null,G__36413));
})());
var preview_url = cljs.core.deref((function (){var G__36415 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","preview-url","settings/preview-url",-547730339)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36415) : zero.frontend.re_frame.subscribe.call(null,G__36415));
})());
var settings = cljs.core.deref((function (){var G__36416 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","data","settings/data",1471085342)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36416) : zero.frontend.re_frame.subscribe.call(null,G__36416));
})());
var existing_logo_url = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","logo","settings/logo",-1639491524),new cljs.core.Keyword(null,"logo-url","logo-url",-1629105032)], null));
if(cljs.core.truth_(uploading_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem"], null)], null),translations.core.tr(new cljs.core.Keyword("settings","uploading","settings/uploading",-398473498))], null);
} else {
if(cljs.core.truth_(selected_file)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(preview_url)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),preview_url,new cljs.core.Keyword(null,"alt","alt",-3214426),translations.core.tr(new cljs.core.Keyword("settings","logo-preview","settings/logo-preview",-1208095200)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"200px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"150px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 2px 4px rgba(0,0,0,0.1)",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto"], null)], null)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#10b981",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(translations.core.tr(new cljs.core.Keyword("settings","selected","settings/selected",130480813))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected_file.name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem"], null)], null),translations.core.tr(new cljs.core.Keyword("settings","click-different","settings/click-different",-1526198828))], null)], null);
} else {
if(cljs.core.truth_(existing_logo_url)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),existing_logo_url,new cljs.core.Keyword(null,"alt","alt",-3214426),translations.core.tr(new cljs.core.Keyword("settings","current-logo-alt","settings/current-logo-alt",603076231)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"200px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"150px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 2px 4px rgba(0,0,0,0.1)",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem"], null)], null),translations.core.tr(new cljs.core.Keyword("settings","current-logo","settings/current-logo",546850013))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem"], null)], null),translations.core.tr(new cljs.core.Keyword("settings","upload-new","settings/upload-new",167953714))], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem"], null)], null),translations.core.tr(new cljs.core.Keyword("settings","click-upload","settings/click-upload",-894212876))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem"], null)], null),translations.core.tr(new cljs.core.Keyword("settings","supported-formats","settings/supported-formats",666627035))], null)], null);

}
}
}
});
/**
 * Company logo upload section
 */
features.app.settings.frontend.view.logo_upload_section = (function features$app$settings$frontend$view$logo_upload_section(){
var uploading_QMARK_ = cljs.core.deref((function (){var G__36422 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","uploading?","settings/uploading?",-1470421623)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36422) : zero.frontend.re_frame.subscribe.call(null,G__36422));
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"2.5rem",new cljs.core.Keyword(null,"padding","padding",1660304693),"1.5rem",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e5e7eb",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.125rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem",new cljs.core.Keyword(null,"color","color",1011675173),"#374151"], null)], null),translations.core.tr(new cljs.core.Keyword("settings","company-logo","settings/company-logo",-1747207453))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),translations.core.tr(new cljs.core.Keyword("settings","logo-description","settings/logo-description",-134461408))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border","border",1444987323),"2px dashed #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#ffffff"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"id","id",-1388402092),"logo-upload",new cljs.core.Keyword(null,"accept","accept",1874130431),"image/*",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),features.app.settings.frontend.view.handle_file_select], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),"logo-upload",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(uploading_QMARK_)?"not-allowed":"pointer"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(uploading_QMARK_)?"#9ca3af":"#3b82f6"),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.settings.frontend.view.upload_status_display], null)], null)], null)], null);
});
/**
 * Workspace name input field
 */
features.app.settings.frontend.view.workspace_name_input = (function features$app$settings$frontend$view$workspace_name_input(){
var settings = cljs.core.deref((function (){var G__36433 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","data","settings/data",1471085342)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36433) : zero.frontend.re_frame.subscribe.call(null,G__36433));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"2.5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.75rem",new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),translations.core.tr(new cljs.core.Keyword("settings","workspace-name","settings/workspace-name",797873878))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(settings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","general","settings/general",-869278039),new cljs.core.Keyword("workspace","name","workspace/name",-1408521004)], null),""),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("settings","workspace-name-placeholder","settings/workspace-name-placeholder",-2101957806)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.875rem 1rem",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.5",new cljs.core.Keyword(null,"transition","transition",765692007),"border-color 0.2s, box-shadow 0.2s",new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36423_SHARP_){
var G__36441 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","update-field","settings/update-field",-879525099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","general","settings/general",-869278039),new cljs.core.Keyword("workspace","name","workspace/name",-1408521004)], null),p1__36423_SHARP_.target.value], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36441) : zero.frontend.re_frame.dispatch.call(null,G__36441));
}),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (p1__36425_SHARP_){
return (p1__36425_SHARP_.target.style.border_color = "#3b82f6");
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__36426_SHARP_){
return (p1__36426_SHARP_.target.style.border_color = "#d1d5db");
})], null)], null)], null);
});
/**
 * Handle save response
 */
features.app.settings.frontend.view.handle_save_response = (function features$app$settings$frontend$view$handle_save_response(workspace_id,response){
var G__36442_36570 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-uploading","settings/set-uploading",1127027607),false], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36442_36570) : zero.frontend.re_frame.dispatch.call(null,G__36442_36570));

if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(response))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Settings saved successfully!"], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"file-uploaded","file-uploaded",-1464442207).cljs$core$IFn$_invoke$arity$1(response))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Logo uploaded:",new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(response)], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"workspace-name-updated","workspace-name-updated",1034906688).cljs$core$IFn$_invoke$arity$1(response))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Workspace name updated"], 0));
} else {
}

var G__36443_36571 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-selected-file","settings/set-selected-file",167623417),null], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36443_36571) : zero.frontend.re_frame.dispatch.call(null,G__36443_36571));

var G__36444_36572 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-preview-url","settings/set-preview-url",788270793),null], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36444_36572) : zero.frontend.re_frame.dispatch.call(null,G__36444_36572));

return features.app.settings.frontend.view.load_settings(workspace_id);
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error saving settings:",new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(response)], 0));
}
});
/**
 * Handle save button click
 */
features.app.settings.frontend.view.handle_save_click = (function features$app$settings$frontend$view$handle_save_click(workspace_id){
var settings = cljs.core.deref((function (){var G__36445 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","data","settings/data",1471085342)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36445) : zero.frontend.re_frame.subscribe.call(null,G__36445));
})());
var selected_file = cljs.core.deref((function (){var G__36446 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","selected-file","settings/selected-file",-1715665125)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36446) : zero.frontend.re_frame.subscribe.call(null,G__36446));
})());
var workspace_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","general","settings/general",-869278039),new cljs.core.Keyword("workspace","name","workspace/name",-1408521004)], null));
var G__36448_36573 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-uploading","settings/set-uploading",1127027607),true], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36448_36573) : zero.frontend.re_frame.dispatch.call(null,G__36448_36573));

return features.app.settings.frontend.view.submit_settings(workspace_id,workspace_name,selected_file,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(features.app.settings.frontend.view.handle_save_response,workspace_id));
});
/**
 * Save settings button
 */
features.app.settings.frontend.view.save_button = (function features$app$settings$frontend$view$save_button(workspace_id){
var loading_QMARK_ = cljs.core.deref((function (){var G__36449 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","loading?","settings/loading?",1125461016)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36449) : zero.frontend.re_frame.subscribe.call(null,G__36449));
})());
var uploading_QMARK_ = cljs.core.deref((function (){var G__36450 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","uploading?","settings/uploading?",-1470421623)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36450) : zero.frontend.re_frame.subscribe.call(null,G__36450));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-actions","div.form-actions",-1591938098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"2rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.enhanced_button.enhanced_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"loading?","loading?",1905707049),(function (){var or__5025__auto__ = loading_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return uploading_QMARK_;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return features.app.settings.frontend.view.handle_save_click(workspace_id);
}),new cljs.core.Keyword(null,"text","text",-1790561697),(cljs.core.truth_((function (){var or__5025__auto__ = loading_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return uploading_QMARK_;
}
})())?translations.core.tr(new cljs.core.Keyword("settings","saving","settings/saving",-5311644)):translations.core.tr(new cljs.core.Keyword("settings","save-settings","settings/save-settings",985846910)))], null)], null)], null);
});
/**
 * Main settings form content
 */
features.app.settings.frontend.view.settings_form_content = (function features$app$settings$frontend$view$settings_form_content(workspace_id){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"600px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.settings.frontend.view.workspace_name_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.settings.frontend.view.logo_upload_section], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.settings.frontend.view.save_button,workspace_id], null)], null);
});
/**
 * Settings form component
 */
features.app.settings.frontend.view.settings_form = (function features$app$settings$frontend$view$settings_form(workspace_id){
zero.frontend.react.use_effect(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mount","mount",-1560582470),(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: Loading settings for workspace-id:",workspace_id], 0));

return features.app.settings.frontend.view.load_settings(workspace_id);
}),new cljs.core.Keyword(null,"params","params",710516235),[workspace_id]], null));

var settings = cljs.core.deref((function (){var G__36459 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","data","settings/data",1471085342)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36459) : zero.frontend.re_frame.subscribe.call(null,G__36459));
})());
var loading_QMARK_ = cljs.core.deref((function (){var G__36460 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","loading?","settings/loading?",1125461016)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36460) : zero.frontend.re_frame.subscribe.call(null,G__36460));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.settings-form","div.settings-form",311358011),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.settings.frontend.view.settings_page_header], null),(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: settings value:",settings], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: loading?",loading_QMARK_], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: settings exists?",cljs.core.boolean$(settings)], 0));

if(cljs.core.truth_(loading_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),translations.core.tr(new cljs.core.Keyword("settings","loading-settings","settings/loading-settings",-2144393031))], null);
} else {
if(cljs.core.truth_(settings)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.settings.frontend.view.settings_form_content,workspace_id], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),translations.core.tr(new cljs.core.Keyword("settings","no-settings","settings/no-settings",739164195))], null);

}
}
})()
], null);
});
/**
 * Main settings page component
 */
features.app.settings.frontend.view.settings_page = (function features$app$settings$frontend$view$settings_page(){
var workspace_id = features.app.settings.frontend.view.get_workspace_id();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"1200px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.settings.frontend.view.settings_form,workspace_id], null)], null);
});

//# sourceMappingURL=features.app.settings.frontend.view.js.map
