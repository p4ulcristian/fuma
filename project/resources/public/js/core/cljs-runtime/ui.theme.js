goog.provide('ui.theme');
ui.theme.themes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"primary","primary",817773892),"#f9fafb",new cljs.core.Keyword(null,"secondary","secondary",-669381460),"#ffffff",new cljs.core.Keyword(null,"tertiary","tertiary",-1163116473),"#f3f4f6"], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"primary","primary",817773892),"#1f2937",new cljs.core.Keyword(null,"secondary","secondary",-669381460),"#4b5563",new cljs.core.Keyword(null,"tertiary","tertiary",-1163116473),"#6b7280",new cljs.core.Keyword(null,"muted","muted",1275109029),"#9ca3af"], null),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),"#e5e7eb",new cljs.core.Keyword(null,"secondary","secondary",-669381460),"#d1d5db"], null),new cljs.core.Keyword(null,"accent","accent",-1826298468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"primary","primary",817773892),"#14b8a6",new cljs.core.Keyword(null,"secondary","secondary",-669381460),"#ec4899",new cljs.core.Keyword(null,"gradient","gradient",-1983908971),"linear-gradient(135deg, #14b8a6, #ec4899)"], null),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"light","light",1918998747),"0 2px 4px rgba(0, 0, 0, 0.1)",new cljs.core.Keyword(null,"medium","medium",-1864319384),"0 4px 8px rgba(0, 0, 0, 0.15)",new cljs.core.Keyword(null,"heavy","heavy",2126165008),"0 10px 25px rgba(0, 0, 0, 0.15)"], null),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#374151",new cljs.core.Keyword(null,"text-primary","text-primary",803135474),"#f9fafb",new cljs.core.Keyword(null,"text-secondary","text-secondary",1760912760),"#d1d5db",new cljs.core.Keyword(null,"text-muted","text-muted",1792287758),"#9ca3af",new cljs.core.Keyword(null,"accent","accent",-1826298468),"#60a5fa"], null)], null),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"primary","primary",817773892),"#111827",new cljs.core.Keyword(null,"secondary","secondary",-669381460),"#1f2937",new cljs.core.Keyword(null,"tertiary","tertiary",-1163116473),"#374151"], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"primary","primary",817773892),"#f9fafb",new cljs.core.Keyword(null,"secondary","secondary",-669381460),"#e5e7eb",new cljs.core.Keyword(null,"tertiary","tertiary",-1163116473),"#d1d5db",new cljs.core.Keyword(null,"muted","muted",1275109029),"#9ca3af"], null),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),"#374151",new cljs.core.Keyword(null,"secondary","secondary",-669381460),"#4b5563"], null),new cljs.core.Keyword(null,"accent","accent",-1826298468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"primary","primary",817773892),"#14b8a6",new cljs.core.Keyword(null,"secondary","secondary",-669381460),"#ec4899",new cljs.core.Keyword(null,"gradient","gradient",-1983908971),"linear-gradient(135deg, #14b8a6, #ec4899)"], null),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"light","light",1918998747),"0 2px 4px rgba(0, 0, 0, 0.3)",new cljs.core.Keyword(null,"medium","medium",-1864319384),"0 4px 8px rgba(0, 0, 0, 0.4)",new cljs.core.Keyword(null,"heavy","heavy",2126165008),"0 10px 25px rgba(0, 0, 0, 0.5)"], null),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#1f2937",new cljs.core.Keyword(null,"text-primary","text-primary",803135474),"#f9fafb",new cljs.core.Keyword(null,"text-secondary","text-secondary",1760912760),"#d1d5db",new cljs.core.Keyword(null,"text-muted","text-muted",1792287758),"#9ca3af",new cljs.core.Keyword(null,"accent","accent",-1826298468),"#60a5fa"], null)], null)], null);
/**
 * Get colors for the current theme
 */
ui.theme.get_theme_colors = (function ui$theme$get_theme_colors(theme_key){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(ui.theme.themes,theme_key,new cljs.core.Keyword(null,"light","light",1918998747).cljs$core$IFn$_invoke$arity$1(ui.theme.themes));
});
/**
 * Get a specific color from the current theme
 */
ui.theme.get_color = (function ui$theme$get_color(theme_key,color_path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ui.theme.themes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [theme_key,color_path], null));
});
/**
 * Create a themed style map based on current theme
 */
ui.theme.themed_style = (function ui$theme$themed_style(current_theme,base_style,theme_overrides){
var theme_colors = ui.theme.get_theme_colors(current_theme);
var theme_style = cljs.core.get.cljs$core$IFn$_invoke$arity$3(theme_overrides,current_theme,cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_style,theme_style], 0));
});
/**
 * Get page background style for current theme
 */
ui.theme.page_background_style = (function ui$theme$page_background_style(current_theme){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),ui.theme.get_color(current_theme,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"primary","primary",817773892)], null))], null);
});
/**
 * Get card style for current theme
 */
ui.theme.card_style = (function ui$theme$card_style(current_theme){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),ui.theme.get_color(current_theme,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"secondary","secondary",-669381460)], null)),new cljs.core.Keyword(null,"border","border",1444987323),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ui.theme.get_color(current_theme,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"primary","primary",817773892)], null)))].join(''),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),ui.theme.get_color(current_theme,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"light","light",1918998747)], null))], null);
});
/**
 * Get text style for current theme
 */
ui.theme.text_style = (function ui$theme$text_style(current_theme,level){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),ui.theme.get_color(current_theme,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),level], null))], null);
});
/**
 * Get button style for current theme
 */
ui.theme.button_style = (function ui$theme$button_style(current_theme,type){
var G__31401 = type;
var G__31401__$1 = (((G__31401 instanceof cljs.core.Keyword))?G__31401.fqn:null);
switch (G__31401__$1) {
case "primary":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),ui.theme.get_color(current_theme,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accent","accent",-1826298468),new cljs.core.Keyword(null,"gradient","gradient",-1983908971)], null)),new cljs.core.Keyword(null,"color","color",1011675173),ui.theme.get_color(current_theme,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"primary","primary",817773892)], null)),new cljs.core.Keyword(null,"border","border",1444987323),"none"], null);

break;
case "secondary":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),ui.theme.get_color(current_theme,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"tertiary","tertiary",-1163116473)], null)),new cljs.core.Keyword(null,"color","color",1011675173),ui.theme.get_color(current_theme,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"secondary","secondary",-669381460)], null)),new cljs.core.Keyword(null,"border","border",1444987323),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ui.theme.get_color(current_theme,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"secondary","secondary",-669381460)], null)))].join('')], null);

break;
default:
return cljs.core.PersistentArrayMap.EMPTY;

}
});
var G__31402_31419 = new cljs.core.Keyword("theme","colors","theme/colors",1566859429);
var G__31403_31420 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31404_31421 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","current-theme","header/current-theme",-1526640668)], null);
var G__31405_31422 = (function (current_theme,_){
return ui.theme.get_theme_colors(current_theme);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$4 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$4(G__31402_31419,G__31403_31420,G__31404_31421,G__31405_31422) : zero.frontend.re_frame.reg_sub.call(null,G__31402_31419,G__31403_31420,G__31404_31421,G__31405_31422));
var G__31406_31423 = new cljs.core.Keyword("theme","page-style","theme/page-style",1204306464);
var G__31407_31424 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31408_31425 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","current-theme","header/current-theme",-1526640668)], null);
var G__31409_31426 = (function (current_theme,_){
return ui.theme.page_background_style(current_theme);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$4 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$4(G__31406_31423,G__31407_31424,G__31408_31425,G__31409_31426) : zero.frontend.re_frame.reg_sub.call(null,G__31406_31423,G__31407_31424,G__31408_31425,G__31409_31426));
var G__31410_31427 = new cljs.core.Keyword("theme","text-style","theme/text-style",-72702898);
var G__31411_31428 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31412_31429 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","current-theme","header/current-theme",-1526640668)], null);
var G__31413_31430 = (function (current_theme,p__31414){
var vec__31415 = p__31414;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31415,(0),null);
var level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31415,(1),null);
return ui.theme.text_style(current_theme,level);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$4 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$4(G__31410_31427,G__31411_31428,G__31412_31429,G__31413_31430) : zero.frontend.re_frame.reg_sub.call(null,G__31410_31427,G__31411_31428,G__31412_31429,G__31413_31430));

//# sourceMappingURL=ui.theme.js.map
