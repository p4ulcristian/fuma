goog.provide('features.app.workspace.frontend.view');
features.app.workspace.frontend.view.get_workspace_id = (function features$app$workspace$frontend$view$get_workspace_id(){

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(router.frontend.zero.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435)], null));
});
features.app.workspace.frontend.view.check_auth_and_workspace_access = (function features$app$workspace$frontend$view$check_auth_and_workspace_access(auth_user,auth_loading_QMARK_,workspace_id){

cljs.core.reset_BANG_(auth_loading_QMARK_,true);

return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","current","user/current",-1089426180),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Workspace auth check response:",response], 0));

var user = new cljs.core.Keyword("user","current","user/current",-1089426180).cljs$core$IFn$_invoke$arity$1(response);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Current user in workspace:",user], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["User workspace-id:",new cljs.core.Keyword("user","workspace-id","user/workspace-id",-168132192).cljs$core$IFn$_invoke$arity$1(user)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected workspace-id:",workspace_id], 0));

cljs.core.reset_BANG_(auth_user,user);

return cljs.core.reset_BANG_(auth_loading_QMARK_,false);
})], null));
});
features.app.workspace.frontend.view.load_workspace_data = (function features$app$workspace$frontend$view$load_workspace_data(workspace,workspace_loading_QMARK_,workspace_id){

if(cljs.core.truth_(workspace_id)){
cljs.core.reset_BANG_(workspace_loading_QMARK_,true);

return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspaces","get-by-id","workspaces/get-by-id",1884936501),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspace","id","workspace/id",1734778271),workspace_id], null)], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
var workspace_data = new cljs.core.Keyword("workspaces","get-by-id","workspaces/get-by-id",1884936501).cljs$core$IFn$_invoke$arity$1(response);
cljs.core.reset_BANG_(workspace,workspace_data);

return cljs.core.reset_BANG_(workspace_loading_QMARK_,false);
})], null));
} else {
return null;
}
});
features.app.workspace.frontend.view.handle_logout = (function features$app$workspace$frontend$view$handle_logout(){

return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("users","logout","users/logout",1576273153),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
return new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("users","logout","users/logout",1576273153).cljs$core$IFn$_invoke$arity$1(response));
})], null));
});
features.app.workspace.frontend.view.loading_screen = (function features$app$workspace$frontend$view$loading_screen(){

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#c9ddd8"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"loading-spinner"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#2563eb",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),"Loading..."], null)], null);
});
features.app.workspace.frontend.view.get_random_welcome_message = (function features$app$workspace$frontend$view$get_random_welcome_message(username){

var name = (function (){var or__5025__auto__ = username;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "there";
}
})();
var welcome_keys = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("welcome","ready-to-keep-running","welcome/ready-to-keep-running",-1116817206),new cljs.core.Keyword("welcome","ensure-safe-comfortable","welcome/ensure-safe-comfortable",-598527901),new cljs.core.Keyword("welcome","elevate-service","welcome/elevate-service",1539130511),new cljs.core.Keyword("welcome","expertise-keeps-moving","welcome/expertise-keeps-moving",230662222),new cljs.core.Keyword("welcome","lift-standards","welcome/lift-standards",734466786),new cljs.core.Keyword("welcome","vertical-excellence","welcome/vertical-excellence",-1888584623),new cljs.core.Keyword("welcome","skilled-hands","welcome/skilled-hands",413509901),new cljs.core.Keyword("welcome","perfect-journey","welcome/perfect-journey",1533501054),new cljs.core.Keyword("welcome","safety-reliability","welcome/safety-reliability",725311300),new cljs.core.Keyword("welcome","rise-to-challenges","welcome/rise-to-challenges",2089974659),new cljs.core.Keyword("welcome","dedication-connects","welcome/dedication-connects",-1466087445),new cljs.core.Keyword("welcome","smooth-rides","welcome/smooth-rides",895251392)], null);
var prefix_keys = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("welcome-prefix","welcome-back","welcome-prefix/welcome-back",798329722),new cljs.core.Keyword("welcome-prefix","hello","welcome-prefix/hello",-76455446),new cljs.core.Keyword("welcome-prefix","good-morning","welcome-prefix/good-morning",-1953190290),new cljs.core.Keyword("welcome-prefix","great-to-see","welcome-prefix/great-to-see",475998365),new cljs.core.Keyword("welcome-prefix","welcome","welcome-prefix/welcome",-1013602022),new cljs.core.Keyword("welcome-prefix","good-to-see","welcome-prefix/good-to-see",-1179635174)], null);
var random_prefix_key = cljs.core.rand_nth(prefix_keys);
var welcome_prefix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(translations.core.tr(random_prefix_key)),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"! "].join('');
var random_key = cljs.core.rand_nth(welcome_keys);
var message_text = translations.core.tr(random_key);
return [welcome_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_text)].join('');
});
features.app.workspace.frontend.view.workspace_header = (function features$app$workspace$frontend$view$workspace_header(workspace,auth_user){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"3rem"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#333",new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem"], null)], null),new cljs.core.Keyword("workspace","name","workspace/name",-1408521004).cljs$core$IFn$_invoke$arity$1(workspace)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"#72a9bf",new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem",new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem"], null)], null),features.app.workspace.frontend.view.get_random_welcome_message(new cljs.core.Keyword("user","username","user/username",1599713859).cljs$core$IFn$_invoke$arity$1(auth_user))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#666",new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.1rem"], null)], null),new cljs.core.Keyword("workspace","description","workspace/description",-321785339).cljs$core$IFn$_invoke$arity$1(workspace)], null)], null)], null);
});
features.app.workspace.frontend.view.feature_card = (function features$app$workspace$frontend$view$feature_card(var_args){
var G__27745 = arguments.length;
switch (G__27745) {
case 3:
return features.app.workspace.frontend.view.feature_card.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return features.app.workspace.frontend.view.feature_card.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(features.app.workspace.frontend.view.feature_card.cljs$core$IFn$_invoke$arity$3 = (function (icon,title,description){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.frontend.view.feature_card,icon,title,description,null], null);
}));

(features.app.workspace.frontend.view.feature_card.cljs$core$IFn$_invoke$arity$4 = (function (icon,title,description,link_url){

var card_content = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e0e0e0",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(link_url)?"pointer":null),new cljs.core.Keyword(null,"transition","transition",765692007),"box-shadow 0.2s",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),(cljs.core.truth_(link_url)?"0 2px 4px rgba(0,0,0,0.1)":null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2rem",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem"], null)], null),icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#333",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem"], null)], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#666",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem"], null)], null),description], null)], null);
if(cljs.core.truth_(link_url)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),link_url,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none"], null)], null),card_content], null);
} else {
return card_content;
}
}));

(features.app.workspace.frontend.view.feature_card.cljs$lang$maxFixedArity = 4);

features.app.workspace.frontend.view.features_grid = (function features$app$workspace$frontend$view$features_grid(workspace_id){

return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"repeat(auto-fit, minmax(250px, 1fr))",new cljs.core.Keyword(null,"gap","gap",80255254),"2rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3rem"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.frontend.view.feature_card,"\uD83C\uDFD7\uFE0F",translations.core.tr(new cljs.core.Keyword("features","material-templates","features/material-templates",1458518999)),translations.core.tr(new cljs.core.Keyword("features","material-templates-desc","features/material-templates-desc",-1853566621)),["/app/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id),"/material-templates"].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.frontend.view.feature_card,"\uD83D\uDCCD",translations.core.tr(new cljs.core.Keyword("features","addresses","features/addresses",-771136155)),translations.core.tr(new cljs.core.Keyword("features","addresses-desc","features/addresses-desc",1851969276)),["/app/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id),"/addresses"].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.frontend.view.feature_card,"\uD83D\uDC64",translations.core.tr(new cljs.core.Keyword("features","customers","features/customers",1324988614)),translations.core.tr(new cljs.core.Keyword("features","customers-desc","features/customers-desc",-2032873263)),["/app/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id),"/customers"].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.frontend.view.feature_card,"\uD83D\uDCCB",translations.core.tr(new cljs.core.Keyword("features","worksheets","features/worksheets",-2062663577)),translations.core.tr(new cljs.core.Keyword("features","worksheets-desc","features/worksheets-desc",-691146086)),["/app/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id),"/worksheets"].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.frontend.view.feature_card,"\u2699\uFE0F",translations.core.tr(new cljs.core.Keyword("features","settings","features/settings",-428609744)),translations.core.tr(new cljs.core.Keyword("features","settings-desc","features/settings-desc",847100755)),["/app/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id),"/settings"].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.frontend.view.feature_card,"\uD83D\uDC65",translations.core.tr(new cljs.core.Keyword("features","teams","features/teams",1924460689)),translations.core.tr(new cljs.core.Keyword("features","teams-desc","features/teams-desc",-21125072)),["/app/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id),"/teams"].join('')], null)], null);
});
features.app.workspace.frontend.view.workspace_footer = (function features$app$workspace$frontend$view$workspace_footer(workspace_id){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid #eee",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"2rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#888",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(translations.core.tr(new cljs.core.Keyword("dashboard","workspace-id","dashboard/workspace-id",-1297186671))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id)].join('')], null)], null);
});
features.app.workspace.frontend.view.workspace_content = (function features$app$workspace$frontend$view$workspace_content(auth_user,workspace,workspace_id){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh",new cljs.core.Keyword(null,"background","background",-863952629),"#c9ddd8",new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"1200px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.frontend.view.workspace_header,workspace,auth_user], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"padding","padding",1660304693),"3rem",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 2px 4px rgba(0,0,0,0.1)",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.frontend.view.features_grid,workspace_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.frontend.view.workspace_footer,workspace_id], null)], null)], null)], null);
});
features.app.workspace.frontend.view.access_denied_screen = (function features$app$workspace$frontend$view$access_denied_screen(){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#c9ddd8",new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"3rem 2.5rem",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 8px 24px rgba(0,0,0,0.15)",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"500px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#dc3545",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"4rem",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem"], null)], null),"\uD83D\uDEAB"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#333",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 1rem 0",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600"], null)], null),translations.core.tr(new cljs.core.Keyword("dashboard","access-denied","dashboard/access-denied",-163242830))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#666",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 2rem 0",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.1rem",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.5"], null)], null),translations.core.tr(new cljs.core.Keyword("dashboard","access-denied-message","dashboard/access-denied-message",-2084309642))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (window.location = "/login");
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["0 2px 4px rgba(114, 169, 191, 0.3)","white","1rem","background-color 0.2s","500","#72a9bf","pointer","0.75rem 2rem","none","8px"])], null),translations.core.tr(new cljs.core.Keyword("dashboard","go-to-login","dashboard/go-to-login",696921964))], null)], null)], null);
});
features.app.workspace.frontend.view.view = (function features$app$workspace$frontend$view$view(){

var auth_user = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var workspace = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var auth_loading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var workspace_loading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var workspace_id = features.app.workspace.frontend.view.get_workspace_id();
features.app.workspace.frontend.view.check_auth_and_workspace_access(auth_user,auth_loading_QMARK_,workspace_id);

features.app.workspace.frontend.view.load_workspace_data(workspace,workspace_loading_QMARK_,workspace_id);

return (function (){
if(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.deref(auth_loading_QMARK_);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(workspace_loading_QMARK_);
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.frontend.view.loading_screen], null);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref(auth_user);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.deref(workspace);
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.frontend.view.workspace_content,cljs.core.deref(auth_user),cljs.core.deref(workspace),workspace_id], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.frontend.view.access_denied_screen], null);

}
}
});
});

//# sourceMappingURL=features.app.workspace.frontend.view.js.map
