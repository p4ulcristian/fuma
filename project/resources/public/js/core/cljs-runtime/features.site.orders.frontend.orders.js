goog.provide('features.site.orders.frontend.orders');
features.site.orders.frontend.orders.status_badge = (function features$site$orders$frontend$orders$status_badge(status){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 1rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"9999px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"uppercase",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"0.05em",new cljs.core.Keyword(null,"background","background",-863952629),(function (){var G__14043 = status;
switch (G__14043) {
case "sent-to-customer":
return "#10b981";

break;
case "waiting-to-start":
return "#f59e0b";

break;
case "parts-inspected":
return "#3b82f6";

break;
case "in-progress":
return "#8b5cf6";

break;
case "completed":
return "#10b981";

break;
case "cancelled":
return "#ef4444";

break;
default:
return "#6b7280";

}
})(),new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null)], null),status], null);
});
features.site.orders.frontend.orders.payment_status_badge = (function features$site$orders$frontend$orders$payment_status_badge(payment_status){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem 0.75rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"background","background",-863952629),(function (){var G__14044 = payment_status;
switch (G__14044) {
case "paid":
return "#dcfce7";

break;
case "pending":
return "#fef3c7";

break;
case "failed":
return "#fecaca";

break;
case "unpaid":
return "#f3f4f6";

break;
default:
return "#f3f4f6";

}
})(),new cljs.core.Keyword(null,"color","color",1011675173),(function (){var G__14045 = payment_status;
switch (G__14045) {
case "paid":
return "#166534";

break;
case "pending":
return "#d97706";

break;
case "failed":
return "#dc2626";

break;
case "unpaid":
return "#6b7280";

break;
default:
return "#6b7280";

}
})()], null)], null),(function (){var or__5025__auto__ = payment_status;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "unpaid";
}
})()], null);
});
features.site.orders.frontend.orders.urgency_badge = (function features$site$orders$frontend$orders$urgency_badge(urgency){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem 0.75rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"background","background",-863952629),(function (){var G__14046 = urgency;
switch (G__14046) {
case "rush":
return "#fef2f2";

break;
case "high":
return "#fff7ed";

break;
case "normal":
return "#f0f9ff";

break;
case "low":
return "#f9fafb";

break;
default:
return "#f9fafb";

}
})(),new cljs.core.Keyword(null,"color","color",1011675173),(function (){var G__14047 = urgency;
switch (G__14047) {
case "rush":
return "#dc2626";

break;
case "high":
return "#ea580c";

break;
case "normal":
return "#0369a1";

break;
case "low":
return "#6b7280";

break;
default:
return "#6b7280";

}
})()], null)], null),urgency], null);
});
features.site.orders.frontend.orders.source_badge = (function features$site$orders$frontend$orders$source_badge(source){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem 0.75rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"background","background",-863952629),(function (){var G__14048 = source;
switch (G__14048) {
case "website":
return "#f0f9ff";

break;
case "phone":
return "#fef2f2";

break;
case "email":
return "#f0fdf4";

break;
default:
return "#f9fafb";

}
})(),new cljs.core.Keyword(null,"color","color",1011675173),(function (){var G__14049 = source;
switch (G__14049) {
case "website":
return "#0369a1";

break;
case "phone":
return "#dc2626";

break;
case "email":
return "#16a34a";

break;
default:
return "#6b7280";

}
})()], null)], null),source], null);
});
features.site.orders.frontend.orders.format_date = (function features$site$orders$frontend$orders$format_date(date_str){
if(cljs.core.truth_(date_str)){
var date = (new Date(date_str));
return date.toLocaleDateString("en-US",({"year": "numeric", "month": "short", "day": "numeric"}));
} else {
return null;
}
});
features.site.orders.frontend.orders.get_friendly_status_message = (function features$site$orders$frontend$orders$get_friendly_status_message(status,payment_status){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(payment_status,"paid")){
var G__14050 = status;
switch (G__14050) {
case "order-submitted":
return "\uD83C\uDF89 Payment received! We're reviewing your order";

break;
case "package-arrived":
return "\uD83D\uDCE6 Your parts have arrived and look great!";

break;
case "parts-inspected":
return "\uD83D\uDD0D Parts inspected - everything looks perfect!";

break;
case "waiting-to-start":
return "\u23F3 In queue - we'll start working on this soon";

break;
case "process-planning":
return "\uD83D\uDCCB Our team is planning the perfect finish";

break;
case "in-progress":
return "\uD83D\uDE80 Currently being worked on with care";

break;
case "job-complete":
return "\u2705 Finished! Your parts look amazing";

break;
case "packing":
return "\uD83D\uDCE6 Carefully packing your beautiful parts";

break;
case "sent-to-customer":
return "\uD83D\uDE9A On the way to you!";

break;
case "arrived-at-customer":
return "\uD83C\uDF81 Delivered! Hope you love them";

break;
default:
return "Processing your order with care";

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(payment_status,"unpaid")){
return "\uD83D\uDCB0 Ready to pay and get started";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(payment_status,"failed")){
return "\uD83D\uDCB3 Payment issue - but we're here to help!";
} else {
return "Working on your order";

}
}
}
});
features.site.orders.frontend.orders.compact_job_item = (function features$site$orders$frontend$orders$compact_job_item(job){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),"8px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"4px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(0)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"part_picture_url","part_picture_url",-1541176612).cljs$core$IFn$_invoke$arity$1(job))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"part_picture_url","part_picture_url",-1541176612).cljs$core$IFn$_invoke$arity$1(job),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"part_name","part_name",-334556537).cljs$core$IFn$_invoke$arity$1(job),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"32px",new cljs.core.Keyword(null,"height","height",1025178622),"32px",new cljs.core.Keyword(null,"object-fit","object-fit",-429593694),"cover",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e5e7eb"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["center","#9ca3af","1rem","32px","#f3f4f6","center","flex","4px","32px"])], null),"\uD83D\uDCE6"], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"min-width","min-width",1926193728),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),"ellipsis"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"part_name","part_name",-334556537).cljs$core$IFn$_invoke$arity$1(job))," \u00D7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(job))].join('')], null),(cljs.core.truth_(new cljs.core.Keyword(null,"look_name","look_name",-1729436022).cljs$core$IFn$_invoke$arity$1(job))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),"ellipsis"], null)], null),new cljs.core.Keyword(null,"look_name","look_name",-1729436022).cljs$core$IFn$_invoke$arity$1(job)], null):null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"look_thumbnail","look_thumbnail",-2000931130).cljs$core$IFn$_invoke$arity$1(job))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"look_thumbnail","look_thumbnail",-2000931130).cljs$core$IFn$_invoke$arity$1(job),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"look_name","look_name",-1729436022).cljs$core$IFn$_invoke$arity$1(job),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"height","height",1025178622),"20px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e5e7eb",new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(0)], null)], null)], null):null)], null);
});
features.site.orders.frontend.orders.compact_jobs_display = (function features$site$orders$frontend$orders$compact_jobs_display(jobs){
if(cljs.core.truth_((function (){var and__5023__auto__ = jobs;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.seq(jobs);
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"8px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"8px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid #f3f4f6"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"6px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),"\u2728 Your beautiful parts:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"120px",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,job){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.site.orders.frontend.orders.compact_job_item,job], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"job_id","job_id",-911607906).cljs$core$IFn$_invoke$arity$1(job)),"-compact-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null));
}),jobs)], null)], null);
} else {
return null;
}
});
features.site.orders.frontend.orders.order_card = (function features$site$orders$frontend$orders$order_card(order,show_payment_modal){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background","background",-863952629),"#ffffff",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e5e7eb",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"1.5rem",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px rgba(0, 0, 0, 0.1)",new cljs.core.Keyword(null,"transition","transition",765692007),"box-shadow 0.2s ease",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return router.frontend.zero.navigate_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),["/orders/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(order))].join('')], null));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.125rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"color","color",1011675173),"#1f2937",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.25rem"], null)], null),["Order #",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(order),(0),(8))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280"], null)], null),["Created: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(features.site.orders.frontend.orders.format_date(new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(order)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"4px",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 8px",new cljs.core.Keyword(null,"background","background",-863952629),"#f0f9ff",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"3px solid #10b981"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8rem",new cljs.core.Keyword(null,"color","color",1011675173),"#059669",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),features.site.orders.frontend.orders.get_friendly_status_message(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(order),new cljs.core.Keyword(null,"payment_status","payment_status",-2078316239).cljs$core$IFn$_invoke$arity$1(order))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),"12px"], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"payment_status","payment_status",-2078316239).cljs$core$IFn$_invoke$arity$2(order,"unpaid"),"unpaid"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["0 2px 8px rgba(16, 185, 129, 0.3)","white","0.8rem","all 0.2s ease","600","linear-gradient(135deg, #10b981 0%, #059669 100%)","pointer","8px 16px","none","6px"]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return (show_payment_modal.cljs$core$IFn$_invoke$arity$1 ? show_payment_modal.cljs$core$IFn$_invoke$arity$1(order) : show_payment_modal.call(null,order));
})], null),"\u2728 Complete Payment"], null):null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap",new cljs.core.Keyword(null,"gap","gap",80255254),"0.75rem",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),"Status:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.site.orders.frontend.orders.status_badge,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(order)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),"Payment:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.site.orders.frontend.orders.payment_status_badge,new cljs.core.Keyword(null,"payment_status","payment_status",-2078316239).cljs$core$IFn$_invoke$arity$1(order)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),"Urgency:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.site.orders.frontend.orders.urgency_badge,new cljs.core.Keyword(null,"urgency","urgency",-1292117426).cljs$core$IFn$_invoke$arity$1(order)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),"Source:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.site.orders.frontend.orders.source_badge,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(order)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid #e5e7eb",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"1rem"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280"], null)], null),["Due: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(features.site.orders.frontend.orders.format_date(new cljs.core.Keyword(null,"due_date","due_date",-109957499).cljs$core$IFn$_invoke$arity$1(order)))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.1rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"700",new cljs.core.Keyword(null,"color","color",1011675173),"#1f2937"], null)], null),["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"total_amount","total_amount",-4615492).cljs$core$IFn$_invoke$arity$1(order))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280"], null)], null),"USD"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.site.orders.frontend.orders.compact_jobs_display,new cljs.core.Keyword(null,"jobs","jobs",-313607120).cljs$core$IFn$_invoke$arity$1(order)], null)], null)], null);
});
features.site.orders.frontend.orders.view = (function features$site$orders$frontend$orders$view(){
var vec__14051 = zero.frontend.react.use_state(null);
var orders = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14051,(0),null);
var set_orders = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14051,(1),null);
var vec__14054 = zero.frontend.react.use_state(false);
var loading = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14054,(0),null);
var set_loading = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14054,(1),null);
var vec__14057 = zero.frontend.react.use_state(null);
var selected_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14057,(0),null);
var set_selected_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14057,(1),null);
var vec__14060 = zero.frontend.react.use_state(false);
var show_payment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14060,(0),null);
var set_show_payment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14060,(1),null);
var vec__14063 = zero.frontend.react.use_state(null);
var user_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14063,(0),null);
var set_user_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14063,(1),null);
zero.frontend.react.use_effect(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mount","mount",-1560582470),(function (){
(set_loading.cljs$core$IFn$_invoke$arity$1 ? set_loading.cljs$core$IFn$_invoke$arity$1(true) : set_loading.call(null,true));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["user-id",cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","get-in","db/get-in",688786454),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230)], null)], null)))], 0));

return app.frontend.request.pathom(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("site","user-orders","site/user-orders",421929139),new cljs.core.Keyword("site","user-id","site/user-id",-218992714)], null),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
(set_loading.cljs$core$IFn$_invoke$arity$1 ? set_loading.cljs$core$IFn$_invoke$arity$1(false) : set_loading.call(null,false));

var G__14066_14097 = new cljs.core.Keyword("site","user-orders","site/user-orders",421929139).cljs$core$IFn$_invoke$arity$1(response);
(set_orders.cljs$core$IFn$_invoke$arity$1 ? set_orders.cljs$core$IFn$_invoke$arity$1(G__14066_14097) : set_orders.call(null,G__14066_14097));

var G__14067 = new cljs.core.Keyword("site","user-id","site/user-id",-218992714).cljs$core$IFn$_invoke$arity$1(response);
return (set_user_id.cljs$core$IFn$_invoke$arity$1 ? set_user_id.cljs$core$IFn$_invoke$arity$1(G__14067) : set_user_id.call(null,G__14067));
})], null));
})], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh",new cljs.core.Keyword(null,"background","background",-863952629),"linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"800px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"2.5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2.8rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"700",new cljs.core.Keyword(null,"color","color",1011675173),"#1f2937",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.75rem",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.1"], null)], null),"\uD83D\uDC4B Hi there!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.3rem",new cljs.core.Keyword(null,"color","color",1011675173),"#4b5563",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),"Here are your orders"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem",new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0"], null)], null),"We're working hard to make your parts look amazing! \u2728"], null)], null),(cljs.core.truth_(loading)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438)],["center","0 4px 6px -1px rgba(0, 0, 0, 0.1)","#ffffff","4rem","center","flex","1px solid #e5e7eb","16px","column"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"3rem",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem",new cljs.core.Keyword(null,"animation","animation",-1248293244),"pulse 2s infinite"], null)], null),"\u23F3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2rem",new cljs.core.Keyword(null,"color","color",1011675173),"#4b5563",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),"Loading your orders..."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem",new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.5rem"], null)], null),"Just a moment while we gather everything!"], null)], null):((cljs.core.empty_QMARK_(orders))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"4rem 3rem",new cljs.core.Keyword(null,"background","background",-863952629),"#ffffff",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"16px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e5e7eb",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 4px 6px -1px rgba(0, 0, 0, 0.1)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"4rem",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem"], null)], null),"\uD83D\uDE80"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"color","color",1011675173),"#1f2937",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.75rem"], null)], null),"Ready to get started?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.1rem",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.6",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"2rem",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"400px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"auto",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"auto"], null)], null),"Your first order will appear here once you place it. We can't wait to help bring your ideas to life! \uD83D\uDCAB"], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"color","color",1011675173),"#10b981",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83D\uDCA1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Browse parts"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u2192"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Customize"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u2192"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Order"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u2192"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Amazing results!"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.4rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem"], null)], null),["\uD83C\uDF89 You have ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(orders))," order",((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(orders),(1)))?"s":null),"!"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.95rem",new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280"], null)], null),"Click on any order to see all the details and track progress"], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,order){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.site.orders.frontend.orders.order_card,order,(function (order__$1){
(set_selected_order.cljs$core$IFn$_invoke$arity$1 ? set_selected_order.cljs$core$IFn$_invoke$arity$1(order__$1) : set_selected_order.call(null,order__$1));

return (set_show_payment.cljs$core$IFn$_invoke$arity$1 ? set_show_payment.cljs$core$IFn$_invoke$arity$1(true) : set_show_payment.call(null,true));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(order)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null));
}),orders)], null)
))], null)], null);
});

//# sourceMappingURL=features.site.orders.frontend.orders.js.map
