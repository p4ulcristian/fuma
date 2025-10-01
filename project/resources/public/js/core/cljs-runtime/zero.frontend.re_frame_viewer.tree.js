goog.provide('zero.frontend.re_frame_viewer.tree');
zero.frontend.re_frame_viewer.tree.save_to_local_storage = (function zero$frontend$re_frame_viewer$tree$save_to_local_storage(key,value){
try{return localStorage.setItem(key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
}catch (e14136){if((e14136 instanceof Error)){
var e = e14136;
return console.warn("Failed to save to localStorage:",e);
} else {
throw e14136;

}
}});
zero.frontend.re_frame_viewer.tree.load_from_local_storage = (function zero$frontend$re_frame_viewer$tree$load_from_local_storage(key,default_value){
try{var stored = localStorage.getItem(key);
if((stored == null)){
return default_value;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(stored);
}
}catch (e14137){if((e14137 instanceof Error)){
var e = e14137;
console.warn("Failed to load from localStorage:",e);

return default_value;
} else {
throw e14137;

}
}});
zero.frontend.re_frame_viewer.tree.parse_path_input = (function zero$frontend$re_frame_viewer$tree$parse_path_input(input){
if(cljs.core.empty_QMARK_(input)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14139_SHARP_){
if(clojure.string.starts_with_QMARK_(p1__14139_SHARP_,":")){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__14139_SHARP_,(1)));
} else {
return p1__14139_SHARP_;
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14138_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__14138_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(input,/\s+/)))));
}
});
var G__14140_14169 = new cljs.core.Keyword("tree-viewer","expanded-paths","tree-viewer/expanded-paths",166433203);
var G__14141_14170 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"tree-viewer","tree-viewer",724906371),new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null),cljs.core.PersistentHashSet.EMPTY);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__14140_14169,G__14141_14170) : zero.frontend.re_frame.reg_sub.call(null,G__14140_14169,G__14141_14170));
var G__14142_14171 = new cljs.core.Keyword("tree-viewer","path-input","tree-viewer/path-input",756319277);
var G__14143_14172 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"tree-viewer","tree-viewer",724906371),new cljs.core.Keyword(null,"path-input","path-input",-2045966068)], null),zero.frontend.re_frame_viewer.tree.load_from_local_storage("tree-viewer-path-input",""));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__14142_14171,G__14143_14172) : zero.frontend.re_frame.reg_sub.call(null,G__14142_14171,G__14143_14172));
var G__14144_14173 = new cljs.core.Keyword("tree-viewer","current-path","tree-viewer/current-path",179751951);
var G__14145_14174 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"tree-viewer","tree-viewer",724906371),new cljs.core.Keyword(null,"current-path","current-path",-113759954)], null),zero.frontend.re_frame_viewer.tree.load_from_local_storage("tree-viewer-current-path",cljs.core.PersistentVector.EMPTY));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__14144_14173,G__14145_14174) : zero.frontend.re_frame.reg_sub.call(null,G__14144_14173,G__14145_14174));
var G__14146_14175 = new cljs.core.Keyword("tree-viewer","toggle-path","tree-viewer/toggle-path",-1380839925);
var G__14147_14176 = (function (db,p__14148){
var vec__14149 = p__14148;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14149,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14149,(1),null);
var expanded = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"tree-viewer","tree-viewer",724906371),new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null),cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"tree-viewer","tree-viewer",724906371),new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null),((cljs.core.contains_QMARK_(expanded,path))?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(expanded,path):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded,path)));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__14146_14175,G__14147_14176) : zero.frontend.re_frame.reg_event_db.call(null,G__14146_14175,G__14147_14176));
var G__14152_14177 = new cljs.core.Keyword("tree-viewer","set-path-input","tree-viewer/set-path-input",1488176391);
var G__14153_14178 = (function (db,p__14154){
var vec__14155 = p__14154;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14155,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14155,(1),null);
var parsed_path = zero.frontend.re_frame_viewer.tree.parse_path_input(input);
zero.frontend.re_frame_viewer.tree.save_to_local_storage("tree-viewer-path-input",input);

zero.frontend.re_frame_viewer.tree.save_to_local_storage("tree-viewer-current-path",parsed_path);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"tree-viewer","tree-viewer",724906371),new cljs.core.Keyword(null,"path-input","path-input",-2045966068)], null),input),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev","dev",1010022654),new cljs.core.Keyword(null,"tree-viewer","tree-viewer",724906371),new cljs.core.Keyword(null,"current-path","current-path",-113759954)], null),parsed_path);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__14152_14177,G__14153_14178) : zero.frontend.re_frame.reg_event_db.call(null,G__14152_14177,G__14153_14178));
zero.frontend.re_frame_viewer.tree.path_input_style = (function zero$frontend$re_frame_viewer$tree$path_input_style(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["#DAA520","12px","100%","#222","8px 12px","none","1px solid #DAA520","0","12px","'Courier New', monospace"]);
});
zero.frontend.re_frame_viewer.tree.tree_container_style = (function zero$frontend$re_frame_viewer$tree$tree_container_style(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #DAA520",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0",new cljs.core.Keyword(null,"background","background",-863952629),"#222",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null);
});
zero.frontend.re_frame_viewer.tree.tree_container_indent = (function zero$frontend$re_frame_viewer$tree$tree_container_indent(level){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((level * (15))),"px"].join(''),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"4px"], null);
});
zero.frontend.re_frame_viewer.tree.tree_key_button_style = (function zero$frontend$re_frame_viewer$tree$tree_key_button_style(expandable_QMARK_,expanded_QMARK_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"margin","margin",-995903681)],[(cljs.core.truth_((function (){var and__5023__auto__ = expandable_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return expanded_QMARK_;
} else {
return and__5023__auto__;
}
})())?"#333":(cljs.core.truth_(expandable_QMARK_)?"#DAA520":"#87CEEB"
)),"left","13px","all 0.2s","bold","100%",(cljs.core.truth_((function (){var and__5023__auto__ = expandable_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return expanded_QMARK_;
} else {
return and__5023__auto__;
}
})())?"#DAA520":(cljs.core.truth_(expandable_QMARK_)?"rgba(218, 165, 32, 0.2)":"rgba(135, 206, 235, 0.1)"
)),"pointer","8px 12px","block",(cljs.core.truth_(expandable_QMARK_)?"1px solid #DAA520":"1px solid #87CEEB"),"0","'Courier New', Monaco, monospace","2px 0"]);
});
zero.frontend.re_frame_viewer.tree.tree_value_container_style = (function zero$frontend$re_frame_viewer$tree$tree_value_container_style(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"8px",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"20px",new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"2px solid rgba(218, 165, 32, 0.3)"], null);
});
zero.frontend.re_frame_viewer.tree.expandable_QMARK_ = (function zero$frontend$re_frame_viewer$tree$expandable_QMARK_(value){
return ((cljs.core.map_QMARK_(value)) || (((cljs.core.vector_QMARK_(value)) || (((cljs.core.list_QMARK_(value)) || (cljs.core.set_QMARK_(value)))))));
});
zero.frontend.re_frame_viewer.tree.get_value_preview = (function zero$frontend$re_frame_viewer$tree$get_value_preview(value){
if(cljs.core.map_QMARK_(value)){
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(value))," items}"].join('');
} else {
if(cljs.core.vector_QMARK_(value)){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(value))," items]"].join('');
} else {
if(cljs.core.list_QMARK_(value)){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(value))," items)"].join('');
} else {
if(cljs.core.set_QMARK_(value)){
return ["#{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(value))," items}"].join('');
} else {
if(typeof value === 'string'){
return ["\"",value,"\""].join('');
} else {
if((value instanceof cljs.core.Keyword)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
} else {
if((value == null)){
return "nil";
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

}
}
}
}
}
}
}
});
zero.frontend.re_frame_viewer.tree.tree_key_button = (function zero$frontend$re_frame_viewer$tree$tree_key_button(key,value,level,path,expanded_QMARK_,expandable_QMARK_){
var button_text = (cljs.core.truth_(expandable_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)," ",zero.frontend.re_frame_viewer.tree.get_value_preview(value)].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)," ",zero.frontend.re_frame_viewer.tree.get_value_preview(value)].join(''));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),zero.frontend.re_frame_viewer.tree.tree_container_indent(level)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),zero.frontend.re_frame_viewer.tree.tree_key_button_style(expandable_QMARK_,expanded_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(expandable_QMARK_)?(function (){
var G__14158 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tree-viewer","toggle-path","tree-viewer/toggle-path",-1380839925),path], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__14158) : zero.frontend.re_frame.dispatch.call(null,G__14158));
}):cljs.core.identity),new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),(function (){
var path_string = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,path));
var G__14159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tree-viewer","set-path-input","tree-viewer/set-path-input",1488176391),path_string], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__14159) : zero.frontend.re_frame.dispatch.call(null,G__14159));
})], null),button_text], null)], null);
});
zero.frontend.re_frame_viewer.tree.tree_children = (function zero$frontend$re_frame_viewer$tree$tree_children(value,level,path){
if(zero.frontend.re_frame_viewer.tree.expandable_QMARK_(value)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),zero.frontend.re_frame_viewer.tree.tree_value_container_style()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__14160){
var vec__14161 = p__14160;
var child_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14161,(0),null);
var child_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14161,(1),null);
var child_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,child_key);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [zero.frontend.re_frame_viewer.tree.tree_node,child_key,child_value,(level + (1)),child_path], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null));
}),((cljs.core.map_QMARK_(value))?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.seq(value)):cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,value))))], null);
} else {
return null;
}
});
zero.frontend.re_frame_viewer.tree.tree_node = (function zero$frontend$re_frame_viewer$tree$tree_node(key,value,level,path){
var expanded_paths = cljs.core.deref((function (){var G__14164 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tree-viewer","expanded-paths","tree-viewer/expanded-paths",166433203)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__14164) : zero.frontend.re_frame.subscribe.call(null,G__14164));
})());
var expanded_QMARK_ = cljs.core.contains_QMARK_(expanded_paths,path);
var expandable_QMARK_ = zero.frontend.re_frame_viewer.tree.expandable_QMARK_(value);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [zero.frontend.re_frame_viewer.tree.tree_key_button,key,value,level,path,expanded_QMARK_,expandable_QMARK_], null),((((expandable_QMARK_) && (expanded_QMARK_)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zero.frontend.re_frame_viewer.tree.tree_children,value,level,path], null):null)], null);
});
zero.frontend.re_frame_viewer.tree.tree_viewer = (function zero$frontend$re_frame_viewer$tree$tree_viewer(filtered_data,current_path){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),zero.frontend.re_frame_viewer.tree.tree_container_style()], null),(((filtered_data == null))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#ff6b6b",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),"Path not found"], null):((cljs.core.map_QMARK_(filtered_data))?cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__14165){
var vec__14166 = p__14165;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14166,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14166,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [zero.frontend.re_frame_viewer.tree.tree_node,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),value,(0),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.seq(filtered_data)))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#DAA520",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Courier New', monospace"], null)], null),zero.frontend.re_frame_viewer.tree.get_value_preview(filtered_data)], null)
))], null);
});

//# sourceMappingURL=zero.frontend.re_frame_viewer.tree.js.map
