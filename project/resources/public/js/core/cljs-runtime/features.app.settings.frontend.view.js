goog.provide('features.app.settings.frontend.view');
var G__38930_39202 = new cljs.core.Keyword("settings","load-start","settings/load-start",909271435);
var G__38931_39203 = (function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__38930_39202,G__38931_39203) : zero.frontend.re_frame.reg_event_db.call(null,G__38930_39202,G__38931_39203));
var G__38932_39204 = new cljs.core.Keyword("settings","load-success","settings/load-success",2038533586);
var G__38933_39205 = (function (db,p__38934){
var vec__38935 = p__38934;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38935,(0),null);
var settings_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38935,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"data","data",-232669377)], null),settings_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__38932_39204,G__38933_39205) : zero.frontend.re_frame.reg_event_db.call(null,G__38932_39204,G__38933_39205));
var G__38938_39206 = new cljs.core.Keyword("settings","load-error","settings/load-error",-65656740);
var G__38939_39207 = (function (db,p__38940){
var vec__38941 = p__38940;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38941,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38941,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"error","error",-978969032)], null),error),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__38938_39206,G__38939_39207) : zero.frontend.re_frame.reg_event_db.call(null,G__38938_39206,G__38939_39207));
var G__38944_39208 = new cljs.core.Keyword("settings","update-field","settings/update-field",-879525099);
var G__38945_39209 = (function (db,p__38946){
var vec__38947 = p__38946;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38947,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38947,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38947,(2),null);
return cljs.core.assoc_in(db,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"data","data",-232669377)], null),path),value);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__38944_39208,G__38945_39209) : zero.frontend.re_frame.reg_event_db.call(null,G__38944_39208,G__38945_39209));
var G__38950_39210 = new cljs.core.Keyword("settings","set-uploading","settings/set-uploading",1127027607);
var G__38951_39211 = (function (db,p__38952){
var vec__38953 = p__38952;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38953,(0),null);
var uploading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38953,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"uploading?","uploading?",316182892)], null),uploading_QMARK_);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__38950_39210,G__38951_39211) : zero.frontend.re_frame.reg_event_db.call(null,G__38950_39210,G__38951_39211));
var G__38958_39212 = new cljs.core.Keyword("settings","set-selected-file","settings/set-selected-file",167623417);
var G__38959_39213 = (function (db,p__38960){
var vec__38962 = p__38960;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38962,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38962,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"selected-file","selected-file",-189809986)], null),file);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__38958_39212,G__38959_39213) : zero.frontend.re_frame.reg_event_db.call(null,G__38958_39212,G__38959_39213));
var G__38969_39214 = new cljs.core.Keyword("settings","set-preview-url","settings/set-preview-url",788270793);
var G__38970_39215 = (function (db,p__38972){
var vec__38974 = p__38972;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38974,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38974,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"preview-url","preview-url",1306431546)], null),url);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__38969_39214,G__38970_39215) : zero.frontend.re_frame.reg_event_db.call(null,G__38969_39214,G__38970_39215));
var G__38977_39216 = new cljs.core.Keyword("settings","data","settings/data",1471085342);
var G__38978_39217 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"data","data",-232669377)], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__38977_39216,G__38978_39217) : zero.frontend.re_frame.reg_sub.call(null,G__38977_39216,G__38978_39217));
var G__38979_39218 = new cljs.core.Keyword("settings","loading?","settings/loading?",1125461016);
var G__38980_39219 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__38979_39218,G__38980_39219) : zero.frontend.re_frame.reg_sub.call(null,G__38979_39218,G__38980_39219));
var G__38985_39220 = new cljs.core.Keyword("settings","uploading?","settings/uploading?",-1470421623);
var G__38986_39221 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"uploading?","uploading?",316182892)], null),false);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__38985_39220,G__38986_39221) : zero.frontend.re_frame.reg_sub.call(null,G__38985_39220,G__38986_39221));
var G__38987_39222 = new cljs.core.Keyword("settings","selected-file","settings/selected-file",-1715665125);
var G__38988_39223 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"selected-file","selected-file",-189809986)], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__38987_39222,G__38988_39223) : zero.frontend.re_frame.reg_sub.call(null,G__38987_39222,G__38988_39223));
var G__38989_39224 = new cljs.core.Keyword("settings","preview-url","settings/preview-url",-547730339);
var G__38990_39225 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"preview-url","preview-url",1306431546)], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__38989_39224,G__38990_39225) : zero.frontend.re_frame.reg_sub.call(null,G__38989_39224,G__38990_39225));
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
var G__39000_39226 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","load-start","settings/load-start",909271435)], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__39000_39226) : zero.frontend.re_frame.dispatch.call(null,G__39000_39226));

return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspace-settings","get","workspace-settings/get",-186799382),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
var temp__5821__auto__ = new cljs.core.Keyword("workspace-settings","get","workspace-settings/get",-186799382).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(temp__5821__auto__)){
var settings_data = temp__5821__auto__;
var G__39003 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","load-success","settings/load-success",2038533586),settings_data], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__39003) : zero.frontend.re_frame.dispatch.call(null,G__39003));
} else {
var G__39007 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","load-error","settings/load-error",-65656740),translations.core.tr(new cljs.core.Keyword("settings","error-no-data","settings/error-no-data",1741897318))], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__39007) : zero.frontend.re_frame.dispatch.call(null,G__39007));
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
var G__39047 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__39047) : callback.call(null,G__39047));
})).catch((function (error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Upload error:",error], 0));

var G__39052 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__39052) : callback.call(null,G__39052));
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
var G__39059_39228 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-selected-file","settings/set-selected-file",167623417),file], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__39059_39228) : zero.frontend.re_frame.dispatch.call(null,G__39059_39228));

if(cljs.core.truth_(file)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Selected file:",file.name], 0));

var reader = (new FileReader());
(reader.onload = (function (e__$1){
var G__39068 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-preview-url","settings/set-preview-url",788270793),e__$1.target.result], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__39068) : zero.frontend.re_frame.dispatch.call(null,G__39068));
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
var uploading_QMARK_ = cljs.core.deref((function (){var G__39114 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","uploading?","settings/uploading?",-1470421623)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__39114) : zero.frontend.re_frame.subscribe.call(null,G__39114));
})());
var selected_file = cljs.core.deref((function (){var G__39121 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","selected-file","settings/selected-file",-1715665125)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__39121) : zero.frontend.re_frame.subscribe.call(null,G__39121));
})());
var preview_url = cljs.core.deref((function (){var G__39122 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","preview-url","settings/preview-url",-547730339)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__39122) : zero.frontend.re_frame.subscribe.call(null,G__39122));
})());
var settings = cljs.core.deref((function (){var G__39123 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","data","settings/data",1471085342)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__39123) : zero.frontend.re_frame.subscribe.call(null,G__39123));
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
var uploading_QMARK_ = cljs.core.deref((function (){var G__39130 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","uploading?","settings/uploading?",-1470421623)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__39130) : zero.frontend.re_frame.subscribe.call(null,G__39130));
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"2.5rem",new cljs.core.Keyword(null,"padding","padding",1660304693),"1.5rem",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e5e7eb",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.125rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem",new cljs.core.Keyword(null,"color","color",1011675173),"#374151"], null)], null),translations.core.tr(new cljs.core.Keyword("settings","company-logo","settings/company-logo",-1747207453))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),translations.core.tr(new cljs.core.Keyword("settings","logo-description","settings/logo-description",-134461408))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border","border",1444987323),"2px dashed #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#ffffff"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"id","id",-1388402092),"logo-upload",new cljs.core.Keyword(null,"accept","accept",1874130431),"image/*",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),features.app.settings.frontend.view.handle_file_select], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),"logo-upload",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(uploading_QMARK_)?"not-allowed":"pointer"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(uploading_QMARK_)?"#9ca3af":"#3b82f6"),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.settings.frontend.view.upload_status_display], null)], null)], null)], null);
});
/**
 * Workspace name input field
 */
features.app.settings.frontend.view.workspace_name_input = (function features$app$settings$frontend$view$workspace_name_input(){
var settings = cljs.core.deref((function (){var G__39140 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","data","settings/data",1471085342)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__39140) : zero.frontend.re_frame.subscribe.call(null,G__39140));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"2.5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.75rem",new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),translations.core.tr(new cljs.core.Keyword("settings","workspace-name","settings/workspace-name",797873878))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(settings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","general","settings/general",-869278039),new cljs.core.Keyword("workspace","name","workspace/name",-1408521004)], null),""),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("settings","workspace-name-placeholder","settings/workspace-name-placeholder",-2101957806)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.875rem 1rem",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.5",new cljs.core.Keyword(null,"transition","transition",765692007),"border-color 0.2s, box-shadow 0.2s",new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__39136_SHARP_){
var G__39143 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","update-field","settings/update-field",-879525099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","general","settings/general",-869278039),new cljs.core.Keyword("workspace","name","workspace/name",-1408521004)], null),p1__39136_SHARP_.target.value], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__39143) : zero.frontend.re_frame.dispatch.call(null,G__39143));
}),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (p1__39137_SHARP_){
return (p1__39137_SHARP_.target.style.border_color = "#3b82f6");
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__39138_SHARP_){
return (p1__39138_SHARP_.target.style.border_color = "#d1d5db");
})], null)], null)], null);
});
/**
 * Handle save response
 */
features.app.settings.frontend.view.handle_save_response = (function features$app$settings$frontend$view$handle_save_response(workspace_id,response){
var G__39152_39229 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-uploading","settings/set-uploading",1127027607),false], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__39152_39229) : zero.frontend.re_frame.dispatch.call(null,G__39152_39229));

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

var G__39158_39231 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-selected-file","settings/set-selected-file",167623417),null], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__39158_39231) : zero.frontend.re_frame.dispatch.call(null,G__39158_39231));

var G__39162_39232 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-preview-url","settings/set-preview-url",788270793),null], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__39162_39232) : zero.frontend.re_frame.dispatch.call(null,G__39162_39232));

return features.app.settings.frontend.view.load_settings(workspace_id);
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error saving settings:",new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(response)], 0));
}
});
/**
 * Handle save button click
 */
features.app.settings.frontend.view.handle_save_click = (function features$app$settings$frontend$view$handle_save_click(workspace_id){
var settings = cljs.core.deref((function (){var G__39169 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","data","settings/data",1471085342)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__39169) : zero.frontend.re_frame.subscribe.call(null,G__39169));
})());
var selected_file = cljs.core.deref((function (){var G__39171 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","selected-file","settings/selected-file",-1715665125)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__39171) : zero.frontend.re_frame.subscribe.call(null,G__39171));
})());
var workspace_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","general","settings/general",-869278039),new cljs.core.Keyword("workspace","name","workspace/name",-1408521004)], null));
var G__39172_39234 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-uploading","settings/set-uploading",1127027607),true], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__39172_39234) : zero.frontend.re_frame.dispatch.call(null,G__39172_39234));

return features.app.settings.frontend.view.submit_settings(workspace_id,workspace_name,selected_file,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(features.app.settings.frontend.view.handle_save_response,workspace_id));
});
/**
 * Save settings button
 */
features.app.settings.frontend.view.save_button = (function features$app$settings$frontend$view$save_button(workspace_id){
var loading_QMARK_ = cljs.core.deref((function (){var G__39191 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","loading?","settings/loading?",1125461016)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__39191) : zero.frontend.re_frame.subscribe.call(null,G__39191));
})());
var uploading_QMARK_ = cljs.core.deref((function (){var G__39192 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","uploading?","settings/uploading?",-1470421623)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__39192) : zero.frontend.re_frame.subscribe.call(null,G__39192));
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

var settings = cljs.core.deref((function (){var G__39200 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","data","settings/data",1471085342)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__39200) : zero.frontend.re_frame.subscribe.call(null,G__39200));
})());
var loading_QMARK_ = cljs.core.deref((function (){var G__39201 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","loading?","settings/loading?",1125461016)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__39201) : zero.frontend.re_frame.subscribe.call(null,G__39201));
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
