goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18638 = (function (f,blockable,meta18639){
this.f = f;
this.blockable = blockable;
this.meta18639 = meta18639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18640,meta18639__$1){
var self__ = this;
var _18640__$1 = this;
return (new cljs.core.async.t_cljs$core$async18638(self__.f,self__.blockable,meta18639__$1));
}));

(cljs.core.async.t_cljs$core$async18638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18640){
var self__ = this;
var _18640__$1 = this;
return self__.meta18639;
}));

(cljs.core.async.t_cljs$core$async18638.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18638.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18638.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18638.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18639","meta18639",-1834532621,null)], null);
}));

(cljs.core.async.t_cljs$core$async18638.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18638");

(cljs.core.async.t_cljs$core$async18638.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async18638");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18638.
 */
cljs.core.async.__GT_t_cljs$core$async18638 = (function cljs$core$async$__GT_t_cljs$core$async18638(f,blockable,meta18639){
return (new cljs.core.async.t_cljs$core$async18638(f,blockable,meta18639));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18637 = arguments.length;
switch (G__18637) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async18638(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__18652 = arguments.length;
switch (G__18652) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__18654 = arguments.length;
switch (G__18654) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__18665 = arguments.length;
switch (G__18665) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_20733 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20733) : fn1.call(null,val_20733));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20733) : fn1.call(null,val_20733));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18674 = arguments.length;
switch (G__18674) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5616__auto___20735 = n;
var x_20736 = (0);
while(true){
if((x_20736 < n__5616__auto___20735)){
(a[x_20736] = x_20736);

var G__20737 = (x_20736 + (1));
x_20736 = G__20737;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18679 = (function (flag,meta18680){
this.flag = flag;
this.meta18680 = meta18680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18681,meta18680__$1){
var self__ = this;
var _18681__$1 = this;
return (new cljs.core.async.t_cljs$core$async18679(self__.flag,meta18680__$1));
}));

(cljs.core.async.t_cljs$core$async18679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18681){
var self__ = this;
var _18681__$1 = this;
return self__.meta18680;
}));

(cljs.core.async.t_cljs$core$async18679.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18679.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18679.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18679.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18680","meta18680",-1964465368,null)], null);
}));

(cljs.core.async.t_cljs$core$async18679.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18679");

(cljs.core.async.t_cljs$core$async18679.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async18679");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18679.
 */
cljs.core.async.__GT_t_cljs$core$async18679 = (function cljs$core$async$__GT_t_cljs$core$async18679(flag,meta18680){
return (new cljs.core.async.t_cljs$core$async18679(flag,meta18680));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async18679(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18683 = (function (flag,cb,meta18684){
this.flag = flag;
this.cb = cb;
this.meta18684 = meta18684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18685,meta18684__$1){
var self__ = this;
var _18685__$1 = this;
return (new cljs.core.async.t_cljs$core$async18683(self__.flag,self__.cb,meta18684__$1));
}));

(cljs.core.async.t_cljs$core$async18683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18685){
var self__ = this;
var _18685__$1 = this;
return self__.meta18684;
}));

(cljs.core.async.t_cljs$core$async18683.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18683.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18683.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18683.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18684","meta18684",683997490,null)], null);
}));

(cljs.core.async.t_cljs$core$async18683.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18683");

(cljs.core.async.t_cljs$core$async18683.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async18683");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18683.
 */
cljs.core.async.__GT_t_cljs$core$async18683 = (function cljs$core$async$__GT_t_cljs$core$async18683(flag,cb,meta18684){
return (new cljs.core.async.t_cljs$core$async18683(flag,cb,meta18684));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async18683(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_20738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_20738)){
if((!(((port_20738.cljs$core$IFn$_invoke$arity$1 ? port_20738.cljs$core$IFn$_invoke$arity$1((1)) : port_20738.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__20739 = (i + (1));
i = G__20739;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__18686_SHARP_){
var G__18699 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18686_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18699) : fret.call(null,G__18699));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__18687_SHARP_){
var G__18700 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18687_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18700) : fret.call(null,G__18700));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5025__auto__ = wport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20740 = (i + (1));
i = G__20740;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5025__auto__ = ret;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5023__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5023__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___20741 = arguments.length;
var i__5750__auto___20742 = (0);
while(true){
if((i__5750__auto___20742 < len__5749__auto___20741)){
args__5755__auto__.push((arguments[i__5750__auto___20742]));

var G__20743 = (i__5750__auto___20742 + (1));
i__5750__auto___20742 = G__20743;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18720){
var map__18721 = p__18720;
var map__18721__$1 = cljs.core.__destructure_map(map__18721);
var opts = map__18721__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18711){
var G__18713 = cljs.core.first(seq18711);
var seq18711__$1 = cljs.core.next(seq18711);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18713,seq18711__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__18725 = arguments.length;
switch (G__18725) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18577__auto___20746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18488__auto__ = (function (state_18823){
var state_val_18824 = (state_18823[(1)]);
if((state_val_18824 === (7))){
var inst_18819 = (state_18823[(2)]);
var state_18823__$1 = state_18823;
var statearr_18839_20750 = state_18823__$1;
(statearr_18839_20750[(2)] = inst_18819);

(statearr_18839_20750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (1))){
var state_18823__$1 = state_18823;
var statearr_18840_20751 = state_18823__$1;
(statearr_18840_20751[(2)] = null);

(statearr_18840_20751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (4))){
var inst_18757 = (state_18823[(7)]);
var inst_18757__$1 = (state_18823[(2)]);
var inst_18759 = (inst_18757__$1 == null);
var state_18823__$1 = (function (){var statearr_18841 = state_18823;
(statearr_18841[(7)] = inst_18757__$1);

return statearr_18841;
})();
if(cljs.core.truth_(inst_18759)){
var statearr_18842_20752 = state_18823__$1;
(statearr_18842_20752[(1)] = (5));

} else {
var statearr_18843_20753 = state_18823__$1;
(statearr_18843_20753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (13))){
var state_18823__$1 = state_18823;
var statearr_18844_20754 = state_18823__$1;
(statearr_18844_20754[(2)] = null);

(statearr_18844_20754[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (6))){
var inst_18757 = (state_18823[(7)]);
var state_18823__$1 = state_18823;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18823__$1,(11),to,inst_18757);
} else {
if((state_val_18824 === (3))){
var inst_18821 = (state_18823[(2)]);
var state_18823__$1 = state_18823;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18823__$1,inst_18821);
} else {
if((state_val_18824 === (12))){
var state_18823__$1 = state_18823;
var statearr_18850_20755 = state_18823__$1;
(statearr_18850_20755[(2)] = null);

(statearr_18850_20755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (2))){
var state_18823__$1 = state_18823;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18823__$1,(4),from);
} else {
if((state_val_18824 === (11))){
var inst_18789 = (state_18823[(2)]);
var state_18823__$1 = state_18823;
if(cljs.core.truth_(inst_18789)){
var statearr_18851_20756 = state_18823__$1;
(statearr_18851_20756[(1)] = (12));

} else {
var statearr_18852_20757 = state_18823__$1;
(statearr_18852_20757[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (9))){
var state_18823__$1 = state_18823;
var statearr_18853_20758 = state_18823__$1;
(statearr_18853_20758[(2)] = null);

(statearr_18853_20758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (5))){
var state_18823__$1 = state_18823;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18854_20759 = state_18823__$1;
(statearr_18854_20759[(1)] = (8));

} else {
var statearr_18855_20760 = state_18823__$1;
(statearr_18855_20760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (14))){
var inst_18817 = (state_18823[(2)]);
var state_18823__$1 = state_18823;
var statearr_18858_20762 = state_18823__$1;
(statearr_18858_20762[(2)] = inst_18817);

(statearr_18858_20762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (10))){
var inst_18786 = (state_18823[(2)]);
var state_18823__$1 = state_18823;
var statearr_18859_20764 = state_18823__$1;
(statearr_18859_20764[(2)] = inst_18786);

(statearr_18859_20764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18824 === (8))){
var inst_18767 = cljs.core.async.close_BANG_(to);
var state_18823__$1 = state_18823;
var statearr_18860_20765 = state_18823__$1;
(statearr_18860_20765[(2)] = inst_18767);

(statearr_18860_20765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18489__auto__ = null;
var cljs$core$async$state_machine__18489__auto____0 = (function (){
var statearr_18861 = [null,null,null,null,null,null,null,null];
(statearr_18861[(0)] = cljs$core$async$state_machine__18489__auto__);

(statearr_18861[(1)] = (1));

return statearr_18861;
});
var cljs$core$async$state_machine__18489__auto____1 = (function (state_18823){
while(true){
var ret_value__18490__auto__ = (function (){try{while(true){
var result__18491__auto__ = switch__18488__auto__(state_18823);
if(cljs.core.keyword_identical_QMARK_(result__18491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18491__auto__;
}
break;
}
}catch (e18862){var ex__18492__auto__ = e18862;
var statearr_18863_20766 = state_18823;
(statearr_18863_20766[(2)] = ex__18492__auto__);


if(cljs.core.seq((state_18823[(4)]))){
var statearr_18864_20767 = state_18823;
(statearr_18864_20767[(1)] = cljs.core.first((state_18823[(4)])));

} else {
throw ex__18492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20768 = state_18823;
state_18823 = G__20768;
continue;
} else {
return ret_value__18490__auto__;
}
break;
}
});
cljs$core$async$state_machine__18489__auto__ = function(state_18823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18489__auto____1.call(this,state_18823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18489__auto____0;
cljs$core$async$state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18489__auto____1;
return cljs$core$async$state_machine__18489__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_18869 = f__18578__auto__();
(statearr_18869[(6)] = c__18577__auto___20746);

return statearr_18869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__18873){
var vec__18878 = p__18873;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18878,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18878,(1),null);
var job = vec__18878;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__18577__auto___20773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18488__auto__ = (function (state_18885){
var state_val_18886 = (state_18885[(1)]);
if((state_val_18886 === (1))){
var state_18885__$1 = state_18885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18885__$1,(2),res,v);
} else {
if((state_val_18886 === (2))){
var inst_18882 = (state_18885[(2)]);
var inst_18883 = cljs.core.async.close_BANG_(res);
var state_18885__$1 = (function (){var statearr_18887 = state_18885;
(statearr_18887[(7)] = inst_18882);

return statearr_18887;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18885__$1,inst_18883);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____0 = (function (){
var statearr_18890 = [null,null,null,null,null,null,null,null];
(statearr_18890[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__);

(statearr_18890[(1)] = (1));

return statearr_18890;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____1 = (function (state_18885){
while(true){
var ret_value__18490__auto__ = (function (){try{while(true){
var result__18491__auto__ = switch__18488__auto__(state_18885);
if(cljs.core.keyword_identical_QMARK_(result__18491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18491__auto__;
}
break;
}
}catch (e18891){var ex__18492__auto__ = e18891;
var statearr_18892_20775 = state_18885;
(statearr_18892_20775[(2)] = ex__18492__auto__);


if(cljs.core.seq((state_18885[(4)]))){
var statearr_18893_20777 = state_18885;
(statearr_18893_20777[(1)] = cljs.core.first((state_18885[(4)])));

} else {
throw ex__18492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20779 = state_18885;
state_18885 = G__20779;
continue;
} else {
return ret_value__18490__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__ = function(state_18885){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____1.call(this,state_18885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_18896 = f__18578__auto__();
(statearr_18896[(6)] = c__18577__auto___20773);

return statearr_18896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__18897){
var vec__18898 = p__18897;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18898,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18898,(1),null);
var job = vec__18898;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5616__auto___20780 = n;
var __20781 = (0);
while(true){
if((__20781 < n__5616__auto___20780)){
var G__18905_20782 = type;
var G__18905_20783__$1 = (((G__18905_20782 instanceof cljs.core.Keyword))?G__18905_20782.fqn:null);
switch (G__18905_20783__$1) {
case "compute":
var c__18577__auto___20786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20781,c__18577__auto___20786,G__18905_20782,G__18905_20783__$1,n__5616__auto___20780,jobs,results,process__$1,async){
return (function (){
var f__18578__auto__ = (function (){var switch__18488__auto__ = ((function (__20781,c__18577__auto___20786,G__18905_20782,G__18905_20783__$1,n__5616__auto___20780,jobs,results,process__$1,async){
return (function (state_18925){
var state_val_18926 = (state_18925[(1)]);
if((state_val_18926 === (1))){
var state_18925__$1 = state_18925;
var statearr_18928_20788 = state_18925__$1;
(statearr_18928_20788[(2)] = null);

(statearr_18928_20788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18926 === (2))){
var state_18925__$1 = state_18925;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18925__$1,(4),jobs);
} else {
if((state_val_18926 === (3))){
var inst_18923 = (state_18925[(2)]);
var state_18925__$1 = state_18925;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18925__$1,inst_18923);
} else {
if((state_val_18926 === (4))){
var inst_18914 = (state_18925[(2)]);
var inst_18916 = process__$1(inst_18914);
var state_18925__$1 = state_18925;
if(cljs.core.truth_(inst_18916)){
var statearr_18930_20790 = state_18925__$1;
(statearr_18930_20790[(1)] = (5));

} else {
var statearr_18931_20791 = state_18925__$1;
(statearr_18931_20791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18926 === (5))){
var state_18925__$1 = state_18925;
var statearr_18932_20792 = state_18925__$1;
(statearr_18932_20792[(2)] = null);

(statearr_18932_20792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18926 === (6))){
var state_18925__$1 = state_18925;
var statearr_18934_20793 = state_18925__$1;
(statearr_18934_20793[(2)] = null);

(statearr_18934_20793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18926 === (7))){
var inst_18921 = (state_18925[(2)]);
var state_18925__$1 = state_18925;
var statearr_18935_20794 = state_18925__$1;
(statearr_18935_20794[(2)] = inst_18921);

(statearr_18935_20794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20781,c__18577__auto___20786,G__18905_20782,G__18905_20783__$1,n__5616__auto___20780,jobs,results,process__$1,async))
;
return ((function (__20781,switch__18488__auto__,c__18577__auto___20786,G__18905_20782,G__18905_20783__$1,n__5616__auto___20780,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____0 = (function (){
var statearr_18936 = [null,null,null,null,null,null,null];
(statearr_18936[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__);

(statearr_18936[(1)] = (1));

return statearr_18936;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____1 = (function (state_18925){
while(true){
var ret_value__18490__auto__ = (function (){try{while(true){
var result__18491__auto__ = switch__18488__auto__(state_18925);
if(cljs.core.keyword_identical_QMARK_(result__18491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18491__auto__;
}
break;
}
}catch (e18937){var ex__18492__auto__ = e18937;
var statearr_18938_20795 = state_18925;
(statearr_18938_20795[(2)] = ex__18492__auto__);


if(cljs.core.seq((state_18925[(4)]))){
var statearr_18939_20797 = state_18925;
(statearr_18939_20797[(1)] = cljs.core.first((state_18925[(4)])));

} else {
throw ex__18492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20798 = state_18925;
state_18925 = G__20798;
continue;
} else {
return ret_value__18490__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__ = function(state_18925){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____1.call(this,state_18925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__;
})()
;})(__20781,switch__18488__auto__,c__18577__auto___20786,G__18905_20782,G__18905_20783__$1,n__5616__auto___20780,jobs,results,process__$1,async))
})();
var state__18579__auto__ = (function (){var statearr_18940 = f__18578__auto__();
(statearr_18940[(6)] = c__18577__auto___20786);

return statearr_18940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
});})(__20781,c__18577__auto___20786,G__18905_20782,G__18905_20783__$1,n__5616__auto___20780,jobs,results,process__$1,async))
);


break;
case "async":
var c__18577__auto___20799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20781,c__18577__auto___20799,G__18905_20782,G__18905_20783__$1,n__5616__auto___20780,jobs,results,process__$1,async){
return (function (){
var f__18578__auto__ = (function (){var switch__18488__auto__ = ((function (__20781,c__18577__auto___20799,G__18905_20782,G__18905_20783__$1,n__5616__auto___20780,jobs,results,process__$1,async){
return (function (state_18953){
var state_val_18954 = (state_18953[(1)]);
if((state_val_18954 === (1))){
var state_18953__$1 = state_18953;
var statearr_18955_20800 = state_18953__$1;
(statearr_18955_20800[(2)] = null);

(statearr_18955_20800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (2))){
var state_18953__$1 = state_18953;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18953__$1,(4),jobs);
} else {
if((state_val_18954 === (3))){
var inst_18951 = (state_18953[(2)]);
var state_18953__$1 = state_18953;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18953__$1,inst_18951);
} else {
if((state_val_18954 === (4))){
var inst_18943 = (state_18953[(2)]);
var inst_18944 = async(inst_18943);
var state_18953__$1 = state_18953;
if(cljs.core.truth_(inst_18944)){
var statearr_18958_20801 = state_18953__$1;
(statearr_18958_20801[(1)] = (5));

} else {
var statearr_18959_20803 = state_18953__$1;
(statearr_18959_20803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (5))){
var state_18953__$1 = state_18953;
var statearr_18961_20805 = state_18953__$1;
(statearr_18961_20805[(2)] = null);

(statearr_18961_20805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (6))){
var state_18953__$1 = state_18953;
var statearr_18962_20806 = state_18953__$1;
(statearr_18962_20806[(2)] = null);

(statearr_18962_20806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (7))){
var inst_18949 = (state_18953[(2)]);
var state_18953__$1 = state_18953;
var statearr_18963_20807 = state_18953__$1;
(statearr_18963_20807[(2)] = inst_18949);

(statearr_18963_20807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20781,c__18577__auto___20799,G__18905_20782,G__18905_20783__$1,n__5616__auto___20780,jobs,results,process__$1,async))
;
return ((function (__20781,switch__18488__auto__,c__18577__auto___20799,G__18905_20782,G__18905_20783__$1,n__5616__auto___20780,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____0 = (function (){
var statearr_18965 = [null,null,null,null,null,null,null];
(statearr_18965[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__);

(statearr_18965[(1)] = (1));

return statearr_18965;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____1 = (function (state_18953){
while(true){
var ret_value__18490__auto__ = (function (){try{while(true){
var result__18491__auto__ = switch__18488__auto__(state_18953);
if(cljs.core.keyword_identical_QMARK_(result__18491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18491__auto__;
}
break;
}
}catch (e18969){var ex__18492__auto__ = e18969;
var statearr_18970_20811 = state_18953;
(statearr_18970_20811[(2)] = ex__18492__auto__);


if(cljs.core.seq((state_18953[(4)]))){
var statearr_18979_20812 = state_18953;
(statearr_18979_20812[(1)] = cljs.core.first((state_18953[(4)])));

} else {
throw ex__18492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20813 = state_18953;
state_18953 = G__20813;
continue;
} else {
return ret_value__18490__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__ = function(state_18953){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____1.call(this,state_18953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__;
})()
;})(__20781,switch__18488__auto__,c__18577__auto___20799,G__18905_20782,G__18905_20783__$1,n__5616__auto___20780,jobs,results,process__$1,async))
})();
var state__18579__auto__ = (function (){var statearr_18992 = f__18578__auto__();
(statearr_18992[(6)] = c__18577__auto___20799);

return statearr_18992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
});})(__20781,c__18577__auto___20799,G__18905_20782,G__18905_20783__$1,n__5616__auto___20780,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18905_20783__$1)].join('')));

}

var G__20814 = (__20781 + (1));
__20781 = G__20814;
continue;
} else {
}
break;
}

var c__18577__auto___20815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18488__auto__ = (function (state_19016){
var state_val_19017 = (state_19016[(1)]);
if((state_val_19017 === (7))){
var inst_19012 = (state_19016[(2)]);
var state_19016__$1 = state_19016;
var statearr_19046_20816 = state_19016__$1;
(statearr_19046_20816[(2)] = inst_19012);

(statearr_19046_20816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (1))){
var state_19016__$1 = state_19016;
var statearr_19051_20817 = state_19016__$1;
(statearr_19051_20817[(2)] = null);

(statearr_19051_20817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (4))){
var inst_18997 = (state_19016[(7)]);
var inst_18997__$1 = (state_19016[(2)]);
var inst_18998 = (inst_18997__$1 == null);
var state_19016__$1 = (function (){var statearr_19052 = state_19016;
(statearr_19052[(7)] = inst_18997__$1);

return statearr_19052;
})();
if(cljs.core.truth_(inst_18998)){
var statearr_19053_20818 = state_19016__$1;
(statearr_19053_20818[(1)] = (5));

} else {
var statearr_19054_20819 = state_19016__$1;
(statearr_19054_20819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (6))){
var inst_18997 = (state_19016[(7)]);
var inst_19002 = (state_19016[(8)]);
var inst_19002__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_19003 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19004 = [inst_18997,inst_19002__$1];
var inst_19005 = (new cljs.core.PersistentVector(null,2,(5),inst_19003,inst_19004,null));
var state_19016__$1 = (function (){var statearr_19056 = state_19016;
(statearr_19056[(8)] = inst_19002__$1);

return statearr_19056;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19016__$1,(8),jobs,inst_19005);
} else {
if((state_val_19017 === (3))){
var inst_19014 = (state_19016[(2)]);
var state_19016__$1 = state_19016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19016__$1,inst_19014);
} else {
if((state_val_19017 === (2))){
var state_19016__$1 = state_19016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19016__$1,(4),from);
} else {
if((state_val_19017 === (9))){
var inst_19009 = (state_19016[(2)]);
var state_19016__$1 = (function (){var statearr_19057 = state_19016;
(statearr_19057[(9)] = inst_19009);

return statearr_19057;
})();
var statearr_19058_20821 = state_19016__$1;
(statearr_19058_20821[(2)] = null);

(statearr_19058_20821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (5))){
var inst_19000 = cljs.core.async.close_BANG_(jobs);
var state_19016__$1 = state_19016;
var statearr_19059_20822 = state_19016__$1;
(statearr_19059_20822[(2)] = inst_19000);

(statearr_19059_20822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (8))){
var inst_19002 = (state_19016[(8)]);
var inst_19007 = (state_19016[(2)]);
var state_19016__$1 = (function (){var statearr_19060 = state_19016;
(statearr_19060[(10)] = inst_19007);

return statearr_19060;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19016__$1,(9),results,inst_19002);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____0 = (function (){
var statearr_19061 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19061[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__);

(statearr_19061[(1)] = (1));

return statearr_19061;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____1 = (function (state_19016){
while(true){
var ret_value__18490__auto__ = (function (){try{while(true){
var result__18491__auto__ = switch__18488__auto__(state_19016);
if(cljs.core.keyword_identical_QMARK_(result__18491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18491__auto__;
}
break;
}
}catch (e19062){var ex__18492__auto__ = e19062;
var statearr_19063_20827 = state_19016;
(statearr_19063_20827[(2)] = ex__18492__auto__);


if(cljs.core.seq((state_19016[(4)]))){
var statearr_19064_20828 = state_19016;
(statearr_19064_20828[(1)] = cljs.core.first((state_19016[(4)])));

} else {
throw ex__18492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20829 = state_19016;
state_19016 = G__20829;
continue;
} else {
return ret_value__18490__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__ = function(state_19016){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____1.call(this,state_19016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_19065 = f__18578__auto__();
(statearr_19065[(6)] = c__18577__auto___20815);

return statearr_19065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));


var c__18577__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18488__auto__ = (function (state_19103){
var state_val_19104 = (state_19103[(1)]);
if((state_val_19104 === (7))){
var inst_19099 = (state_19103[(2)]);
var state_19103__$1 = state_19103;
var statearr_19105_20830 = state_19103__$1;
(statearr_19105_20830[(2)] = inst_19099);

(statearr_19105_20830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19104 === (20))){
var state_19103__$1 = state_19103;
var statearr_19106_20831 = state_19103__$1;
(statearr_19106_20831[(2)] = null);

(statearr_19106_20831[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19104 === (1))){
var state_19103__$1 = state_19103;
var statearr_19107_20836 = state_19103__$1;
(statearr_19107_20836[(2)] = null);

(statearr_19107_20836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19104 === (4))){
var inst_19068 = (state_19103[(7)]);
var inst_19068__$1 = (state_19103[(2)]);
var inst_19069 = (inst_19068__$1 == null);
var state_19103__$1 = (function (){var statearr_19108 = state_19103;
(statearr_19108[(7)] = inst_19068__$1);

return statearr_19108;
})();
if(cljs.core.truth_(inst_19069)){
var statearr_19109_20837 = state_19103__$1;
(statearr_19109_20837[(1)] = (5));

} else {
var statearr_19110_20838 = state_19103__$1;
(statearr_19110_20838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19104 === (15))){
var inst_19081 = (state_19103[(8)]);
var state_19103__$1 = state_19103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19103__$1,(18),to,inst_19081);
} else {
if((state_val_19104 === (21))){
var inst_19094 = (state_19103[(2)]);
var state_19103__$1 = state_19103;
var statearr_19111_20839 = state_19103__$1;
(statearr_19111_20839[(2)] = inst_19094);

(statearr_19111_20839[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19104 === (13))){
var inst_19096 = (state_19103[(2)]);
var state_19103__$1 = (function (){var statearr_19112 = state_19103;
(statearr_19112[(9)] = inst_19096);

return statearr_19112;
})();
var statearr_19113_20840 = state_19103__$1;
(statearr_19113_20840[(2)] = null);

(statearr_19113_20840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19104 === (6))){
var inst_19068 = (state_19103[(7)]);
var state_19103__$1 = state_19103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19103__$1,(11),inst_19068);
} else {
if((state_val_19104 === (17))){
var inst_19089 = (state_19103[(2)]);
var state_19103__$1 = state_19103;
if(cljs.core.truth_(inst_19089)){
var statearr_19114_20841 = state_19103__$1;
(statearr_19114_20841[(1)] = (19));

} else {
var statearr_19115_20842 = state_19103__$1;
(statearr_19115_20842[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19104 === (3))){
var inst_19101 = (state_19103[(2)]);
var state_19103__$1 = state_19103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19103__$1,inst_19101);
} else {
if((state_val_19104 === (12))){
var inst_19078 = (state_19103[(10)]);
var state_19103__$1 = state_19103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19103__$1,(14),inst_19078);
} else {
if((state_val_19104 === (2))){
var state_19103__$1 = state_19103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19103__$1,(4),results);
} else {
if((state_val_19104 === (19))){
var state_19103__$1 = state_19103;
var statearr_19116_20843 = state_19103__$1;
(statearr_19116_20843[(2)] = null);

(statearr_19116_20843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19104 === (11))){
var inst_19078 = (state_19103[(2)]);
var state_19103__$1 = (function (){var statearr_19117 = state_19103;
(statearr_19117[(10)] = inst_19078);

return statearr_19117;
})();
var statearr_19118_20844 = state_19103__$1;
(statearr_19118_20844[(2)] = null);

(statearr_19118_20844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19104 === (9))){
var state_19103__$1 = state_19103;
var statearr_19119_20845 = state_19103__$1;
(statearr_19119_20845[(2)] = null);

(statearr_19119_20845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19104 === (5))){
var state_19103__$1 = state_19103;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19120_20846 = state_19103__$1;
(statearr_19120_20846[(1)] = (8));

} else {
var statearr_19121_20847 = state_19103__$1;
(statearr_19121_20847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19104 === (14))){
var inst_19081 = (state_19103[(8)]);
var inst_19083 = (state_19103[(11)]);
var inst_19081__$1 = (state_19103[(2)]);
var inst_19082 = (inst_19081__$1 == null);
var inst_19083__$1 = cljs.core.not(inst_19082);
var state_19103__$1 = (function (){var statearr_19123 = state_19103;
(statearr_19123[(8)] = inst_19081__$1);

(statearr_19123[(11)] = inst_19083__$1);

return statearr_19123;
})();
if(inst_19083__$1){
var statearr_19124_20848 = state_19103__$1;
(statearr_19124_20848[(1)] = (15));

} else {
var statearr_19125_20853 = state_19103__$1;
(statearr_19125_20853[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19104 === (16))){
var inst_19083 = (state_19103[(11)]);
var state_19103__$1 = state_19103;
var statearr_19126_20854 = state_19103__$1;
(statearr_19126_20854[(2)] = inst_19083);

(statearr_19126_20854[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19104 === (10))){
var inst_19075 = (state_19103[(2)]);
var state_19103__$1 = state_19103;
var statearr_19127_20855 = state_19103__$1;
(statearr_19127_20855[(2)] = inst_19075);

(statearr_19127_20855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19104 === (18))){
var inst_19086 = (state_19103[(2)]);
var state_19103__$1 = state_19103;
var statearr_19128_20856 = state_19103__$1;
(statearr_19128_20856[(2)] = inst_19086);

(statearr_19128_20856[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19104 === (8))){
var inst_19072 = cljs.core.async.close_BANG_(to);
var state_19103__$1 = state_19103;
var statearr_19129_20860 = state_19103__$1;
(statearr_19129_20860[(2)] = inst_19072);

(statearr_19129_20860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____0 = (function (){
var statearr_19130 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19130[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__);

(statearr_19130[(1)] = (1));

return statearr_19130;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____1 = (function (state_19103){
while(true){
var ret_value__18490__auto__ = (function (){try{while(true){
var result__18491__auto__ = switch__18488__auto__(state_19103);
if(cljs.core.keyword_identical_QMARK_(result__18491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18491__auto__;
}
break;
}
}catch (e19131){var ex__18492__auto__ = e19131;
var statearr_19132_20864 = state_19103;
(statearr_19132_20864[(2)] = ex__18492__auto__);


if(cljs.core.seq((state_19103[(4)]))){
var statearr_19133_20868 = state_19103;
(statearr_19133_20868[(1)] = cljs.core.first((state_19103[(4)])));

} else {
throw ex__18492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20869 = state_19103;
state_19103 = G__20869;
continue;
} else {
return ret_value__18490__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__ = function(state_19103){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____1.call(this,state_19103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18489__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18489__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_19134 = f__18578__auto__();
(statearr_19134[(6)] = c__18577__auto__);

return statearr_19134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));

return c__18577__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__19136 = arguments.length;
switch (G__19136) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__19138 = arguments.length;
switch (G__19138) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__19140 = arguments.length;
switch (G__19140) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__18577__auto___20876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18488__auto__ = (function (state_19167){
var state_val_19168 = (state_19167[(1)]);
if((state_val_19168 === (7))){
var inst_19163 = (state_19167[(2)]);
var state_19167__$1 = state_19167;
var statearr_19169_20877 = state_19167__$1;
(statearr_19169_20877[(2)] = inst_19163);

(statearr_19169_20877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19168 === (1))){
var state_19167__$1 = state_19167;
var statearr_19170_20878 = state_19167__$1;
(statearr_19170_20878[(2)] = null);

(statearr_19170_20878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19168 === (4))){
var inst_19144 = (state_19167[(7)]);
var inst_19144__$1 = (state_19167[(2)]);
var inst_19145 = (inst_19144__$1 == null);
var state_19167__$1 = (function (){var statearr_19171 = state_19167;
(statearr_19171[(7)] = inst_19144__$1);

return statearr_19171;
})();
if(cljs.core.truth_(inst_19145)){
var statearr_19172_20879 = state_19167__$1;
(statearr_19172_20879[(1)] = (5));

} else {
var statearr_19173_20880 = state_19167__$1;
(statearr_19173_20880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19168 === (13))){
var state_19167__$1 = state_19167;
var statearr_19174_20881 = state_19167__$1;
(statearr_19174_20881[(2)] = null);

(statearr_19174_20881[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19168 === (6))){
var inst_19144 = (state_19167[(7)]);
var inst_19150 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19144) : p.call(null,inst_19144));
var state_19167__$1 = state_19167;
if(cljs.core.truth_(inst_19150)){
var statearr_19175_20882 = state_19167__$1;
(statearr_19175_20882[(1)] = (9));

} else {
var statearr_19176_20883 = state_19167__$1;
(statearr_19176_20883[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19168 === (3))){
var inst_19165 = (state_19167[(2)]);
var state_19167__$1 = state_19167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19167__$1,inst_19165);
} else {
if((state_val_19168 === (12))){
var state_19167__$1 = state_19167;
var statearr_19177_20884 = state_19167__$1;
(statearr_19177_20884[(2)] = null);

(statearr_19177_20884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19168 === (2))){
var state_19167__$1 = state_19167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19167__$1,(4),ch);
} else {
if((state_val_19168 === (11))){
var inst_19144 = (state_19167[(7)]);
var inst_19154 = (state_19167[(2)]);
var state_19167__$1 = state_19167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19167__$1,(8),inst_19154,inst_19144);
} else {
if((state_val_19168 === (9))){
var state_19167__$1 = state_19167;
var statearr_19178_20885 = state_19167__$1;
(statearr_19178_20885[(2)] = tc);

(statearr_19178_20885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19168 === (5))){
var inst_19147 = cljs.core.async.close_BANG_(tc);
var inst_19148 = cljs.core.async.close_BANG_(fc);
var state_19167__$1 = (function (){var statearr_19179 = state_19167;
(statearr_19179[(8)] = inst_19147);

return statearr_19179;
})();
var statearr_19180_20886 = state_19167__$1;
(statearr_19180_20886[(2)] = inst_19148);

(statearr_19180_20886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19168 === (14))){
var inst_19161 = (state_19167[(2)]);
var state_19167__$1 = state_19167;
var statearr_19181_20887 = state_19167__$1;
(statearr_19181_20887[(2)] = inst_19161);

(statearr_19181_20887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19168 === (10))){
var state_19167__$1 = state_19167;
var statearr_19182_20888 = state_19167__$1;
(statearr_19182_20888[(2)] = fc);

(statearr_19182_20888[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19168 === (8))){
var inst_19156 = (state_19167[(2)]);
var state_19167__$1 = state_19167;
if(cljs.core.truth_(inst_19156)){
var statearr_19184_20891 = state_19167__$1;
(statearr_19184_20891[(1)] = (12));

} else {
var statearr_19185_20892 = state_19167__$1;
(statearr_19185_20892[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18489__auto__ = null;
var cljs$core$async$state_machine__18489__auto____0 = (function (){
var statearr_19186 = [null,null,null,null,null,null,null,null,null];
(statearr_19186[(0)] = cljs$core$async$state_machine__18489__auto__);

(statearr_19186[(1)] = (1));

return statearr_19186;
});
var cljs$core$async$state_machine__18489__auto____1 = (function (state_19167){
while(true){
var ret_value__18490__auto__ = (function (){try{while(true){
var result__18491__auto__ = switch__18488__auto__(state_19167);
if(cljs.core.keyword_identical_QMARK_(result__18491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18491__auto__;
}
break;
}
}catch (e19187){var ex__18492__auto__ = e19187;
var statearr_19188_20893 = state_19167;
(statearr_19188_20893[(2)] = ex__18492__auto__);


if(cljs.core.seq((state_19167[(4)]))){
var statearr_19190_20894 = state_19167;
(statearr_19190_20894[(1)] = cljs.core.first((state_19167[(4)])));

} else {
throw ex__18492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20895 = state_19167;
state_19167 = G__20895;
continue;
} else {
return ret_value__18490__auto__;
}
break;
}
});
cljs$core$async$state_machine__18489__auto__ = function(state_19167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18489__auto____1.call(this,state_19167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18489__auto____0;
cljs$core$async$state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18489__auto____1;
return cljs$core$async$state_machine__18489__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_19192 = f__18578__auto__();
(statearr_19192[(6)] = c__18577__auto___20876);

return statearr_19192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18577__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18488__auto__ = (function (state_19215){
var state_val_19216 = (state_19215[(1)]);
if((state_val_19216 === (7))){
var inst_19211 = (state_19215[(2)]);
var state_19215__$1 = state_19215;
var statearr_19218_20896 = state_19215__$1;
(statearr_19218_20896[(2)] = inst_19211);

(statearr_19218_20896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (1))){
var inst_19194 = init;
var inst_19195 = inst_19194;
var state_19215__$1 = (function (){var statearr_19220 = state_19215;
(statearr_19220[(7)] = inst_19195);

return statearr_19220;
})();
var statearr_19221_20897 = state_19215__$1;
(statearr_19221_20897[(2)] = null);

(statearr_19221_20897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (4))){
var inst_19198 = (state_19215[(8)]);
var inst_19198__$1 = (state_19215[(2)]);
var inst_19199 = (inst_19198__$1 == null);
var state_19215__$1 = (function (){var statearr_19222 = state_19215;
(statearr_19222[(8)] = inst_19198__$1);

return statearr_19222;
})();
if(cljs.core.truth_(inst_19199)){
var statearr_19223_20899 = state_19215__$1;
(statearr_19223_20899[(1)] = (5));

} else {
var statearr_19224_20900 = state_19215__$1;
(statearr_19224_20900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (6))){
var inst_19195 = (state_19215[(7)]);
var inst_19198 = (state_19215[(8)]);
var inst_19202 = (state_19215[(9)]);
var inst_19202__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_19195,inst_19198) : f.call(null,inst_19195,inst_19198));
var inst_19203 = cljs.core.reduced_QMARK_(inst_19202__$1);
var state_19215__$1 = (function (){var statearr_19225 = state_19215;
(statearr_19225[(9)] = inst_19202__$1);

return statearr_19225;
})();
if(inst_19203){
var statearr_19226_20902 = state_19215__$1;
(statearr_19226_20902[(1)] = (8));

} else {
var statearr_19227_20903 = state_19215__$1;
(statearr_19227_20903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (3))){
var inst_19213 = (state_19215[(2)]);
var state_19215__$1 = state_19215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19215__$1,inst_19213);
} else {
if((state_val_19216 === (2))){
var state_19215__$1 = state_19215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19215__$1,(4),ch);
} else {
if((state_val_19216 === (9))){
var inst_19202 = (state_19215[(9)]);
var inst_19195 = inst_19202;
var state_19215__$1 = (function (){var statearr_19228 = state_19215;
(statearr_19228[(7)] = inst_19195);

return statearr_19228;
})();
var statearr_19229_20904 = state_19215__$1;
(statearr_19229_20904[(2)] = null);

(statearr_19229_20904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (5))){
var inst_19195 = (state_19215[(7)]);
var state_19215__$1 = state_19215;
var statearr_19230_20905 = state_19215__$1;
(statearr_19230_20905[(2)] = inst_19195);

(statearr_19230_20905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (10))){
var inst_19209 = (state_19215[(2)]);
var state_19215__$1 = state_19215;
var statearr_19231_20906 = state_19215__$1;
(statearr_19231_20906[(2)] = inst_19209);

(statearr_19231_20906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (8))){
var inst_19202 = (state_19215[(9)]);
var inst_19205 = cljs.core.deref(inst_19202);
var state_19215__$1 = state_19215;
var statearr_19233_20907 = state_19215__$1;
(statearr_19233_20907[(2)] = inst_19205);

(statearr_19233_20907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__18489__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18489__auto____0 = (function (){
var statearr_19234 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19234[(0)] = cljs$core$async$reduce_$_state_machine__18489__auto__);

(statearr_19234[(1)] = (1));

return statearr_19234;
});
var cljs$core$async$reduce_$_state_machine__18489__auto____1 = (function (state_19215){
while(true){
var ret_value__18490__auto__ = (function (){try{while(true){
var result__18491__auto__ = switch__18488__auto__(state_19215);
if(cljs.core.keyword_identical_QMARK_(result__18491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18491__auto__;
}
break;
}
}catch (e19235){var ex__18492__auto__ = e19235;
var statearr_19236_20908 = state_19215;
(statearr_19236_20908[(2)] = ex__18492__auto__);


if(cljs.core.seq((state_19215[(4)]))){
var statearr_19237_20909 = state_19215;
(statearr_19237_20909[(1)] = cljs.core.first((state_19215[(4)])));

} else {
throw ex__18492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20910 = state_19215;
state_19215 = G__20910;
continue;
} else {
return ret_value__18490__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18489__auto__ = function(state_19215){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18489__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18489__auto____1.call(this,state_19215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18489__auto____0;
cljs$core$async$reduce_$_state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18489__auto____1;
return cljs$core$async$reduce_$_state_machine__18489__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_19238 = f__18578__auto__();
(statearr_19238[(6)] = c__18577__auto__);

return statearr_19238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));

return c__18577__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__18577__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18488__auto__ = (function (state_19244){
var state_val_19245 = (state_19244[(1)]);
if((state_val_19245 === (1))){
var inst_19239 = cljs.core.async.reduce(f__$1,init,ch);
var state_19244__$1 = state_19244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19244__$1,(2),inst_19239);
} else {
if((state_val_19245 === (2))){
var inst_19241 = (state_19244[(2)]);
var inst_19242 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_19241) : f__$1.call(null,inst_19241));
var state_19244__$1 = state_19244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19244__$1,inst_19242);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__18489__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18489__auto____0 = (function (){
var statearr_19247 = [null,null,null,null,null,null,null];
(statearr_19247[(0)] = cljs$core$async$transduce_$_state_machine__18489__auto__);

(statearr_19247[(1)] = (1));

return statearr_19247;
});
var cljs$core$async$transduce_$_state_machine__18489__auto____1 = (function (state_19244){
while(true){
var ret_value__18490__auto__ = (function (){try{while(true){
var result__18491__auto__ = switch__18488__auto__(state_19244);
if(cljs.core.keyword_identical_QMARK_(result__18491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18491__auto__;
}
break;
}
}catch (e19248){var ex__18492__auto__ = e19248;
var statearr_19249_20911 = state_19244;
(statearr_19249_20911[(2)] = ex__18492__auto__);


if(cljs.core.seq((state_19244[(4)]))){
var statearr_19250_20912 = state_19244;
(statearr_19250_20912[(1)] = cljs.core.first((state_19244[(4)])));

} else {
throw ex__18492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20913 = state_19244;
state_19244 = G__20913;
continue;
} else {
return ret_value__18490__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18489__auto__ = function(state_19244){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18489__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18489__auto____1.call(this,state_19244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18489__auto____0;
cljs$core$async$transduce_$_state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18489__auto____1;
return cljs$core$async$transduce_$_state_machine__18489__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_19251 = f__18578__auto__();
(statearr_19251[(6)] = c__18577__auto__);

return statearr_19251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));

return c__18577__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__19253 = arguments.length;
switch (G__19253) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18577__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18488__auto__ = (function (state_19280){
var state_val_19281 = (state_19280[(1)]);
if((state_val_19281 === (7))){
var inst_19261 = (state_19280[(2)]);
var state_19280__$1 = state_19280;
var statearr_19282_20919 = state_19280__$1;
(statearr_19282_20919[(2)] = inst_19261);

(statearr_19282_20919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19281 === (1))){
var inst_19255 = cljs.core.seq(coll);
var inst_19256 = inst_19255;
var state_19280__$1 = (function (){var statearr_19283 = state_19280;
(statearr_19283[(7)] = inst_19256);

return statearr_19283;
})();
var statearr_19284_20920 = state_19280__$1;
(statearr_19284_20920[(2)] = null);

(statearr_19284_20920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19281 === (4))){
var inst_19256 = (state_19280[(7)]);
var inst_19259 = cljs.core.first(inst_19256);
var state_19280__$1 = state_19280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19280__$1,(7),ch,inst_19259);
} else {
if((state_val_19281 === (13))){
var inst_19274 = (state_19280[(2)]);
var state_19280__$1 = state_19280;
var statearr_19285_20921 = state_19280__$1;
(statearr_19285_20921[(2)] = inst_19274);

(statearr_19285_20921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19281 === (6))){
var inst_19264 = (state_19280[(2)]);
var state_19280__$1 = state_19280;
if(cljs.core.truth_(inst_19264)){
var statearr_19286_20922 = state_19280__$1;
(statearr_19286_20922[(1)] = (8));

} else {
var statearr_19287_20923 = state_19280__$1;
(statearr_19287_20923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19281 === (3))){
var inst_19278 = (state_19280[(2)]);
var state_19280__$1 = state_19280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19280__$1,inst_19278);
} else {
if((state_val_19281 === (12))){
var state_19280__$1 = state_19280;
var statearr_19289_20924 = state_19280__$1;
(statearr_19289_20924[(2)] = null);

(statearr_19289_20924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19281 === (2))){
var inst_19256 = (state_19280[(7)]);
var state_19280__$1 = state_19280;
if(cljs.core.truth_(inst_19256)){
var statearr_19290_20925 = state_19280__$1;
(statearr_19290_20925[(1)] = (4));

} else {
var statearr_19291_20926 = state_19280__$1;
(statearr_19291_20926[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19281 === (11))){
var inst_19270 = cljs.core.async.close_BANG_(ch);
var state_19280__$1 = state_19280;
var statearr_19292_20927 = state_19280__$1;
(statearr_19292_20927[(2)] = inst_19270);

(statearr_19292_20927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19281 === (9))){
var state_19280__$1 = state_19280;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19293_20928 = state_19280__$1;
(statearr_19293_20928[(1)] = (11));

} else {
var statearr_19294_20929 = state_19280__$1;
(statearr_19294_20929[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19281 === (5))){
var inst_19256 = (state_19280[(7)]);
var state_19280__$1 = state_19280;
var statearr_19295_20931 = state_19280__$1;
(statearr_19295_20931[(2)] = inst_19256);

(statearr_19295_20931[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19281 === (10))){
var inst_19276 = (state_19280[(2)]);
var state_19280__$1 = state_19280;
var statearr_19296_20935 = state_19280__$1;
(statearr_19296_20935[(2)] = inst_19276);

(statearr_19296_20935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19281 === (8))){
var inst_19256 = (state_19280[(7)]);
var inst_19266 = cljs.core.next(inst_19256);
var inst_19256__$1 = inst_19266;
var state_19280__$1 = (function (){var statearr_19297 = state_19280;
(statearr_19297[(7)] = inst_19256__$1);

return statearr_19297;
})();
var statearr_19298_20936 = state_19280__$1;
(statearr_19298_20936[(2)] = null);

(statearr_19298_20936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18489__auto__ = null;
var cljs$core$async$state_machine__18489__auto____0 = (function (){
var statearr_19299 = [null,null,null,null,null,null,null,null];
(statearr_19299[(0)] = cljs$core$async$state_machine__18489__auto__);

(statearr_19299[(1)] = (1));

return statearr_19299;
});
var cljs$core$async$state_machine__18489__auto____1 = (function (state_19280){
while(true){
var ret_value__18490__auto__ = (function (){try{while(true){
var result__18491__auto__ = switch__18488__auto__(state_19280);
if(cljs.core.keyword_identical_QMARK_(result__18491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18491__auto__;
}
break;
}
}catch (e19300){var ex__18492__auto__ = e19300;
var statearr_19301_20937 = state_19280;
(statearr_19301_20937[(2)] = ex__18492__auto__);


if(cljs.core.seq((state_19280[(4)]))){
var statearr_19302_20938 = state_19280;
(statearr_19302_20938[(1)] = cljs.core.first((state_19280[(4)])));

} else {
throw ex__18492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20939 = state_19280;
state_19280 = G__20939;
continue;
} else {
return ret_value__18490__auto__;
}
break;
}
});
cljs$core$async$state_machine__18489__auto__ = function(state_19280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18489__auto____1.call(this,state_19280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18489__auto____0;
cljs$core$async$state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18489__auto____1;
return cljs$core$async$state_machine__18489__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_19304 = f__18578__auto__();
(statearr_19304[(6)] = c__18577__auto__);

return statearr_19304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));

return c__18577__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__19306 = arguments.length;
switch (G__19306) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_20941 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_20941(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20942 = (function (m,ch,close_QMARK_){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5374__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5372__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_20942(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20943 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_20943(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20944 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_20944(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19308 = (function (ch,cs,meta19309){
this.ch = ch;
this.cs = cs;
this.meta19309 = meta19309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19310,meta19309__$1){
var self__ = this;
var _19310__$1 = this;
return (new cljs.core.async.t_cljs$core$async19308(self__.ch,self__.cs,meta19309__$1));
}));

(cljs.core.async.t_cljs$core$async19308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19310){
var self__ = this;
var _19310__$1 = this;
return self__.meta19309;
}));

(cljs.core.async.t_cljs$core$async19308.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19308.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19308.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19308.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async19308.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async19308.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async19308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19309","meta19309",1635205238,null)], null);
}));

(cljs.core.async.t_cljs$core$async19308.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19308");

(cljs.core.async.t_cljs$core$async19308.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async19308");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19308.
 */
cljs.core.async.__GT_t_cljs$core$async19308 = (function cljs$core$async$__GT_t_cljs$core$async19308(ch,cs,meta19309){
return (new cljs.core.async.t_cljs$core$async19308(ch,cs,meta19309));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async19308(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__18577__auto___20945 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18488__auto__ = (function (state_19449){
var state_val_19450 = (state_19449[(1)]);
if((state_val_19450 === (7))){
var inst_19445 = (state_19449[(2)]);
var state_19449__$1 = state_19449;
var statearr_19451_20946 = state_19449__$1;
(statearr_19451_20946[(2)] = inst_19445);

(statearr_19451_20946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (20))){
var inst_19347 = (state_19449[(7)]);
var inst_19359 = cljs.core.first(inst_19347);
var inst_19360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19359,(0),null);
var inst_19361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19359,(1),null);
var state_19449__$1 = (function (){var statearr_19452 = state_19449;
(statearr_19452[(8)] = inst_19360);

return statearr_19452;
})();
if(cljs.core.truth_(inst_19361)){
var statearr_19453_20947 = state_19449__$1;
(statearr_19453_20947[(1)] = (22));

} else {
var statearr_19454_20948 = state_19449__$1;
(statearr_19454_20948[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (27))){
var inst_19390 = (state_19449[(9)]);
var inst_19392 = (state_19449[(10)]);
var inst_19397 = (state_19449[(11)]);
var inst_19315 = (state_19449[(12)]);
var inst_19397__$1 = cljs.core._nth(inst_19390,inst_19392);
var inst_19398 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19397__$1,inst_19315,done);
var state_19449__$1 = (function (){var statearr_19456 = state_19449;
(statearr_19456[(11)] = inst_19397__$1);

return statearr_19456;
})();
if(cljs.core.truth_(inst_19398)){
var statearr_19457_20949 = state_19449__$1;
(statearr_19457_20949[(1)] = (30));

} else {
var statearr_19458_20950 = state_19449__$1;
(statearr_19458_20950[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (1))){
var state_19449__$1 = state_19449;
var statearr_19459_20951 = state_19449__$1;
(statearr_19459_20951[(2)] = null);

(statearr_19459_20951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (24))){
var inst_19347 = (state_19449[(7)]);
var inst_19367 = (state_19449[(2)]);
var inst_19368 = cljs.core.next(inst_19347);
var inst_19325 = inst_19368;
var inst_19326 = null;
var inst_19327 = (0);
var inst_19328 = (0);
var state_19449__$1 = (function (){var statearr_19460 = state_19449;
(statearr_19460[(13)] = inst_19367);

(statearr_19460[(14)] = inst_19325);

(statearr_19460[(15)] = inst_19326);

(statearr_19460[(16)] = inst_19327);

(statearr_19460[(17)] = inst_19328);

return statearr_19460;
})();
var statearr_19461_20952 = state_19449__$1;
(statearr_19461_20952[(2)] = null);

(statearr_19461_20952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (39))){
var state_19449__$1 = state_19449;
var statearr_19466_20953 = state_19449__$1;
(statearr_19466_20953[(2)] = null);

(statearr_19466_20953[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (4))){
var inst_19315 = (state_19449[(12)]);
var inst_19315__$1 = (state_19449[(2)]);
var inst_19316 = (inst_19315__$1 == null);
var state_19449__$1 = (function (){var statearr_19467 = state_19449;
(statearr_19467[(12)] = inst_19315__$1);

return statearr_19467;
})();
if(cljs.core.truth_(inst_19316)){
var statearr_19468_20954 = state_19449__$1;
(statearr_19468_20954[(1)] = (5));

} else {
var statearr_19469_20955 = state_19449__$1;
(statearr_19469_20955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (15))){
var inst_19328 = (state_19449[(17)]);
var inst_19325 = (state_19449[(14)]);
var inst_19326 = (state_19449[(15)]);
var inst_19327 = (state_19449[(16)]);
var inst_19343 = (state_19449[(2)]);
var inst_19344 = (inst_19328 + (1));
var tmp19463 = inst_19326;
var tmp19464 = inst_19325;
var tmp19465 = inst_19327;
var inst_19325__$1 = tmp19464;
var inst_19326__$1 = tmp19463;
var inst_19327__$1 = tmp19465;
var inst_19328__$1 = inst_19344;
var state_19449__$1 = (function (){var statearr_19471 = state_19449;
(statearr_19471[(18)] = inst_19343);

(statearr_19471[(14)] = inst_19325__$1);

(statearr_19471[(15)] = inst_19326__$1);

(statearr_19471[(16)] = inst_19327__$1);

(statearr_19471[(17)] = inst_19328__$1);

return statearr_19471;
})();
var statearr_19472_20956 = state_19449__$1;
(statearr_19472_20956[(2)] = null);

(statearr_19472_20956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (21))){
var inst_19371 = (state_19449[(2)]);
var state_19449__$1 = state_19449;
var statearr_19476_20957 = state_19449__$1;
(statearr_19476_20957[(2)] = inst_19371);

(statearr_19476_20957[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (31))){
var inst_19397 = (state_19449[(11)]);
var inst_19401 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19397);
var state_19449__$1 = state_19449;
var statearr_19477_20958 = state_19449__$1;
(statearr_19477_20958[(2)] = inst_19401);

(statearr_19477_20958[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (32))){
var inst_19392 = (state_19449[(10)]);
var inst_19389 = (state_19449[(19)]);
var inst_19390 = (state_19449[(9)]);
var inst_19391 = (state_19449[(20)]);
var inst_19403 = (state_19449[(2)]);
var inst_19404 = (inst_19392 + (1));
var tmp19473 = inst_19391;
var tmp19474 = inst_19389;
var tmp19475 = inst_19390;
var inst_19389__$1 = tmp19474;
var inst_19390__$1 = tmp19475;
var inst_19391__$1 = tmp19473;
var inst_19392__$1 = inst_19404;
var state_19449__$1 = (function (){var statearr_19478 = state_19449;
(statearr_19478[(21)] = inst_19403);

(statearr_19478[(19)] = inst_19389__$1);

(statearr_19478[(9)] = inst_19390__$1);

(statearr_19478[(20)] = inst_19391__$1);

(statearr_19478[(10)] = inst_19392__$1);

return statearr_19478;
})();
var statearr_19479_20959 = state_19449__$1;
(statearr_19479_20959[(2)] = null);

(statearr_19479_20959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (40))){
var inst_19417 = (state_19449[(22)]);
var inst_19422 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19417);
var state_19449__$1 = state_19449;
var statearr_19480_20960 = state_19449__$1;
(statearr_19480_20960[(2)] = inst_19422);

(statearr_19480_20960[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (33))){
var inst_19408 = (state_19449[(23)]);
var inst_19410 = cljs.core.chunked_seq_QMARK_(inst_19408);
var state_19449__$1 = state_19449;
if(inst_19410){
var statearr_19481_20961 = state_19449__$1;
(statearr_19481_20961[(1)] = (36));

} else {
var statearr_19482_20962 = state_19449__$1;
(statearr_19482_20962[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (13))){
var inst_19337 = (state_19449[(24)]);
var inst_19340 = cljs.core.async.close_BANG_(inst_19337);
var state_19449__$1 = state_19449;
var statearr_19483_20963 = state_19449__$1;
(statearr_19483_20963[(2)] = inst_19340);

(statearr_19483_20963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (22))){
var inst_19360 = (state_19449[(8)]);
var inst_19364 = cljs.core.async.close_BANG_(inst_19360);
var state_19449__$1 = state_19449;
var statearr_19484_20964 = state_19449__$1;
(statearr_19484_20964[(2)] = inst_19364);

(statearr_19484_20964[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (36))){
var inst_19408 = (state_19449[(23)]);
var inst_19412 = cljs.core.chunk_first(inst_19408);
var inst_19413 = cljs.core.chunk_rest(inst_19408);
var inst_19414 = cljs.core.count(inst_19412);
var inst_19389 = inst_19413;
var inst_19390 = inst_19412;
var inst_19391 = inst_19414;
var inst_19392 = (0);
var state_19449__$1 = (function (){var statearr_19485 = state_19449;
(statearr_19485[(19)] = inst_19389);

(statearr_19485[(9)] = inst_19390);

(statearr_19485[(20)] = inst_19391);

(statearr_19485[(10)] = inst_19392);

return statearr_19485;
})();
var statearr_19486_20965 = state_19449__$1;
(statearr_19486_20965[(2)] = null);

(statearr_19486_20965[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (41))){
var inst_19408 = (state_19449[(23)]);
var inst_19424 = (state_19449[(2)]);
var inst_19425 = cljs.core.next(inst_19408);
var inst_19389 = inst_19425;
var inst_19390 = null;
var inst_19391 = (0);
var inst_19392 = (0);
var state_19449__$1 = (function (){var statearr_19487 = state_19449;
(statearr_19487[(25)] = inst_19424);

(statearr_19487[(19)] = inst_19389);

(statearr_19487[(9)] = inst_19390);

(statearr_19487[(20)] = inst_19391);

(statearr_19487[(10)] = inst_19392);

return statearr_19487;
})();
var statearr_19488_20970 = state_19449__$1;
(statearr_19488_20970[(2)] = null);

(statearr_19488_20970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (43))){
var state_19449__$1 = state_19449;
var statearr_19489_20971 = state_19449__$1;
(statearr_19489_20971[(2)] = null);

(statearr_19489_20971[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (29))){
var inst_19433 = (state_19449[(2)]);
var state_19449__$1 = state_19449;
var statearr_19490_20972 = state_19449__$1;
(statearr_19490_20972[(2)] = inst_19433);

(statearr_19490_20972[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (44))){
var inst_19442 = (state_19449[(2)]);
var state_19449__$1 = (function (){var statearr_19491 = state_19449;
(statearr_19491[(26)] = inst_19442);

return statearr_19491;
})();
var statearr_19492_20973 = state_19449__$1;
(statearr_19492_20973[(2)] = null);

(statearr_19492_20973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (6))){
var inst_19381 = (state_19449[(27)]);
var inst_19380 = cljs.core.deref(cs);
var inst_19381__$1 = cljs.core.keys(inst_19380);
var inst_19382 = cljs.core.count(inst_19381__$1);
var inst_19383 = cljs.core.reset_BANG_(dctr,inst_19382);
var inst_19388 = cljs.core.seq(inst_19381__$1);
var inst_19389 = inst_19388;
var inst_19390 = null;
var inst_19391 = (0);
var inst_19392 = (0);
var state_19449__$1 = (function (){var statearr_19493 = state_19449;
(statearr_19493[(27)] = inst_19381__$1);

(statearr_19493[(28)] = inst_19383);

(statearr_19493[(19)] = inst_19389);

(statearr_19493[(9)] = inst_19390);

(statearr_19493[(20)] = inst_19391);

(statearr_19493[(10)] = inst_19392);

return statearr_19493;
})();
var statearr_19494_20977 = state_19449__$1;
(statearr_19494_20977[(2)] = null);

(statearr_19494_20977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (28))){
var inst_19389 = (state_19449[(19)]);
var inst_19408 = (state_19449[(23)]);
var inst_19408__$1 = cljs.core.seq(inst_19389);
var state_19449__$1 = (function (){var statearr_19496 = state_19449;
(statearr_19496[(23)] = inst_19408__$1);

return statearr_19496;
})();
if(inst_19408__$1){
var statearr_19497_20978 = state_19449__$1;
(statearr_19497_20978[(1)] = (33));

} else {
var statearr_19498_20979 = state_19449__$1;
(statearr_19498_20979[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (25))){
var inst_19392 = (state_19449[(10)]);
var inst_19391 = (state_19449[(20)]);
var inst_19394 = (inst_19392 < inst_19391);
var inst_19395 = inst_19394;
var state_19449__$1 = state_19449;
if(cljs.core.truth_(inst_19395)){
var statearr_19499_20980 = state_19449__$1;
(statearr_19499_20980[(1)] = (27));

} else {
var statearr_19500_20981 = state_19449__$1;
(statearr_19500_20981[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (34))){
var state_19449__$1 = state_19449;
var statearr_19501_20982 = state_19449__$1;
(statearr_19501_20982[(2)] = null);

(statearr_19501_20982[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (17))){
var state_19449__$1 = state_19449;
var statearr_19502_20983 = state_19449__$1;
(statearr_19502_20983[(2)] = null);

(statearr_19502_20983[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (3))){
var inst_19447 = (state_19449[(2)]);
var state_19449__$1 = state_19449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19449__$1,inst_19447);
} else {
if((state_val_19450 === (12))){
var inst_19376 = (state_19449[(2)]);
var state_19449__$1 = state_19449;
var statearr_19503_20984 = state_19449__$1;
(statearr_19503_20984[(2)] = inst_19376);

(statearr_19503_20984[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (2))){
var state_19449__$1 = state_19449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19449__$1,(4),ch);
} else {
if((state_val_19450 === (23))){
var state_19449__$1 = state_19449;
var statearr_19504_20985 = state_19449__$1;
(statearr_19504_20985[(2)] = null);

(statearr_19504_20985[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (35))){
var inst_19431 = (state_19449[(2)]);
var state_19449__$1 = state_19449;
var statearr_19505_20986 = state_19449__$1;
(statearr_19505_20986[(2)] = inst_19431);

(statearr_19505_20986[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (19))){
var inst_19347 = (state_19449[(7)]);
var inst_19351 = cljs.core.chunk_first(inst_19347);
var inst_19352 = cljs.core.chunk_rest(inst_19347);
var inst_19353 = cljs.core.count(inst_19351);
var inst_19325 = inst_19352;
var inst_19326 = inst_19351;
var inst_19327 = inst_19353;
var inst_19328 = (0);
var state_19449__$1 = (function (){var statearr_19506 = state_19449;
(statearr_19506[(14)] = inst_19325);

(statearr_19506[(15)] = inst_19326);

(statearr_19506[(16)] = inst_19327);

(statearr_19506[(17)] = inst_19328);

return statearr_19506;
})();
var statearr_19507_20987 = state_19449__$1;
(statearr_19507_20987[(2)] = null);

(statearr_19507_20987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (11))){
var inst_19325 = (state_19449[(14)]);
var inst_19347 = (state_19449[(7)]);
var inst_19347__$1 = cljs.core.seq(inst_19325);
var state_19449__$1 = (function (){var statearr_19508 = state_19449;
(statearr_19508[(7)] = inst_19347__$1);

return statearr_19508;
})();
if(inst_19347__$1){
var statearr_19509_20988 = state_19449__$1;
(statearr_19509_20988[(1)] = (16));

} else {
var statearr_19510_20989 = state_19449__$1;
(statearr_19510_20989[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (9))){
var inst_19378 = (state_19449[(2)]);
var state_19449__$1 = state_19449;
var statearr_19511_20990 = state_19449__$1;
(statearr_19511_20990[(2)] = inst_19378);

(statearr_19511_20990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (5))){
var inst_19322 = cljs.core.deref(cs);
var inst_19323 = cljs.core.seq(inst_19322);
var inst_19325 = inst_19323;
var inst_19326 = null;
var inst_19327 = (0);
var inst_19328 = (0);
var state_19449__$1 = (function (){var statearr_19512 = state_19449;
(statearr_19512[(14)] = inst_19325);

(statearr_19512[(15)] = inst_19326);

(statearr_19512[(16)] = inst_19327);

(statearr_19512[(17)] = inst_19328);

return statearr_19512;
})();
var statearr_19513_20991 = state_19449__$1;
(statearr_19513_20991[(2)] = null);

(statearr_19513_20991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (14))){
var state_19449__$1 = state_19449;
var statearr_19514_20992 = state_19449__$1;
(statearr_19514_20992[(2)] = null);

(statearr_19514_20992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (45))){
var inst_19439 = (state_19449[(2)]);
var state_19449__$1 = state_19449;
var statearr_19515_20993 = state_19449__$1;
(statearr_19515_20993[(2)] = inst_19439);

(statearr_19515_20993[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (26))){
var inst_19381 = (state_19449[(27)]);
var inst_19435 = (state_19449[(2)]);
var inst_19436 = cljs.core.seq(inst_19381);
var state_19449__$1 = (function (){var statearr_19516 = state_19449;
(statearr_19516[(29)] = inst_19435);

return statearr_19516;
})();
if(inst_19436){
var statearr_19517_20994 = state_19449__$1;
(statearr_19517_20994[(1)] = (42));

} else {
var statearr_19518_20995 = state_19449__$1;
(statearr_19518_20995[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (16))){
var inst_19347 = (state_19449[(7)]);
var inst_19349 = cljs.core.chunked_seq_QMARK_(inst_19347);
var state_19449__$1 = state_19449;
if(inst_19349){
var statearr_19519_20996 = state_19449__$1;
(statearr_19519_20996[(1)] = (19));

} else {
var statearr_19520_20997 = state_19449__$1;
(statearr_19520_20997[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (38))){
var inst_19428 = (state_19449[(2)]);
var state_19449__$1 = state_19449;
var statearr_19521_20998 = state_19449__$1;
(statearr_19521_20998[(2)] = inst_19428);

(statearr_19521_20998[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (30))){
var state_19449__$1 = state_19449;
var statearr_19523_20999 = state_19449__$1;
(statearr_19523_20999[(2)] = null);

(statearr_19523_20999[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (10))){
var inst_19326 = (state_19449[(15)]);
var inst_19328 = (state_19449[(17)]);
var inst_19336 = cljs.core._nth(inst_19326,inst_19328);
var inst_19337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19336,(0),null);
var inst_19338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19336,(1),null);
var state_19449__$1 = (function (){var statearr_19524 = state_19449;
(statearr_19524[(24)] = inst_19337);

return statearr_19524;
})();
if(cljs.core.truth_(inst_19338)){
var statearr_19525_21003 = state_19449__$1;
(statearr_19525_21003[(1)] = (13));

} else {
var statearr_19526_21004 = state_19449__$1;
(statearr_19526_21004[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (18))){
var inst_19374 = (state_19449[(2)]);
var state_19449__$1 = state_19449;
var statearr_19527_21005 = state_19449__$1;
(statearr_19527_21005[(2)] = inst_19374);

(statearr_19527_21005[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (42))){
var state_19449__$1 = state_19449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19449__$1,(45),dchan);
} else {
if((state_val_19450 === (37))){
var inst_19408 = (state_19449[(23)]);
var inst_19417 = (state_19449[(22)]);
var inst_19315 = (state_19449[(12)]);
var inst_19417__$1 = cljs.core.first(inst_19408);
var inst_19419 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19417__$1,inst_19315,done);
var state_19449__$1 = (function (){var statearr_19528 = state_19449;
(statearr_19528[(22)] = inst_19417__$1);

return statearr_19528;
})();
if(cljs.core.truth_(inst_19419)){
var statearr_19529_21006 = state_19449__$1;
(statearr_19529_21006[(1)] = (39));

} else {
var statearr_19530_21007 = state_19449__$1;
(statearr_19530_21007[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (8))){
var inst_19328 = (state_19449[(17)]);
var inst_19327 = (state_19449[(16)]);
var inst_19330 = (inst_19328 < inst_19327);
var inst_19331 = inst_19330;
var state_19449__$1 = state_19449;
if(cljs.core.truth_(inst_19331)){
var statearr_19531_21008 = state_19449__$1;
(statearr_19531_21008[(1)] = (10));

} else {
var statearr_19532_21009 = state_19449__$1;
(statearr_19532_21009[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__18489__auto__ = null;
var cljs$core$async$mult_$_state_machine__18489__auto____0 = (function (){
var statearr_19533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19533[(0)] = cljs$core$async$mult_$_state_machine__18489__auto__);

(statearr_19533[(1)] = (1));

return statearr_19533;
});
var cljs$core$async$mult_$_state_machine__18489__auto____1 = (function (state_19449){
while(true){
var ret_value__18490__auto__ = (function (){try{while(true){
var result__18491__auto__ = switch__18488__auto__(state_19449);
if(cljs.core.keyword_identical_QMARK_(result__18491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18491__auto__;
}
break;
}
}catch (e19534){var ex__18492__auto__ = e19534;
var statearr_19535_21010 = state_19449;
(statearr_19535_21010[(2)] = ex__18492__auto__);


if(cljs.core.seq((state_19449[(4)]))){
var statearr_19537_21011 = state_19449;
(statearr_19537_21011[(1)] = cljs.core.first((state_19449[(4)])));

} else {
throw ex__18492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21012 = state_19449;
state_19449 = G__21012;
continue;
} else {
return ret_value__18490__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18489__auto__ = function(state_19449){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18489__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18489__auto____1.call(this,state_19449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18489__auto____0;
cljs$core$async$mult_$_state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18489__auto____1;
return cljs$core$async$mult_$_state_machine__18489__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_19538 = f__18578__auto__();
(statearr_19538[(6)] = c__18577__auto___20945);

return statearr_19538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__19540 = arguments.length;
switch (G__19540) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_21014 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_21014(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_21015 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_21015(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_21016 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_21016(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_21020 = (function (m,state_map){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5374__auto__.call(null,m,state_map));
} else {
var m__5372__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5372__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_21020(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_21021 = (function (m,mode){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5374__auto__.call(null,m,mode));
} else {
var m__5372__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5372__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_21021(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21022 = arguments.length;
var i__5750__auto___21023 = (0);
while(true){
if((i__5750__auto___21023 < len__5749__auto___21022)){
args__5755__auto__.push((arguments[i__5750__auto___21023]));

var G__21030 = (i__5750__auto___21023 + (1));
i__5750__auto___21023 = G__21030;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19548){
var map__19549 = p__19548;
var map__19549__$1 = cljs.core.__destructure_map(map__19549);
var opts = map__19549__$1;
var statearr_19550_21033 = state;
(statearr_19550_21033[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_19552_21040 = state;
(statearr_19552_21040[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_19553_21041 = state;
(statearr_19553_21041[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19544){
var G__19545 = cljs.core.first(seq19544);
var seq19544__$1 = cljs.core.next(seq19544);
var G__19546 = cljs.core.first(seq19544__$1);
var seq19544__$2 = cljs.core.next(seq19544__$1);
var G__19547 = cljs.core.first(seq19544__$2);
var seq19544__$3 = cljs.core.next(seq19544__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19545,G__19546,G__19547,seq19544__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19555 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19556){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19556 = meta19556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19557,meta19556__$1){
var self__ = this;
var _19557__$1 = this;
return (new cljs.core.async.t_cljs$core$async19555(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19556__$1));
}));

(cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19557){
var self__ = this;
var _19557__$1 = this;
return self__.meta19556;
}));

(cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19556","meta19556",-1790235977,null)], null);
}));

(cljs.core.async.t_cljs$core$async19555.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19555");

(cljs.core.async.t_cljs$core$async19555.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async19555");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19555.
 */
cljs.core.async.__GT_t_cljs$core$async19555 = (function cljs$core$async$__GT_t_cljs$core$async19555(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19556){
return (new cljs.core.async.t_cljs$core$async19555(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19556));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async19555(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__18577__auto___21065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18488__auto__ = (function (state_19627){
var state_val_19628 = (state_19627[(1)]);
if((state_val_19628 === (7))){
var inst_19587 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
if(cljs.core.truth_(inst_19587)){
var statearr_19630_21066 = state_19627__$1;
(statearr_19630_21066[(1)] = (8));

} else {
var statearr_19631_21067 = state_19627__$1;
(statearr_19631_21067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (20))){
var inst_19580 = (state_19627[(7)]);
var state_19627__$1 = state_19627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19627__$1,(23),out,inst_19580);
} else {
if((state_val_19628 === (1))){
var inst_19563 = calc_state();
var inst_19564 = cljs.core.__destructure_map(inst_19563);
var inst_19565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19564,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19564,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19564,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19568 = inst_19563;
var state_19627__$1 = (function (){var statearr_19632 = state_19627;
(statearr_19632[(8)] = inst_19565);

(statearr_19632[(9)] = inst_19566);

(statearr_19632[(10)] = inst_19567);

(statearr_19632[(11)] = inst_19568);

return statearr_19632;
})();
var statearr_19633_21074 = state_19627__$1;
(statearr_19633_21074[(2)] = null);

(statearr_19633_21074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (24))){
var inst_19571 = (state_19627[(12)]);
var inst_19568 = inst_19571;
var state_19627__$1 = (function (){var statearr_19634 = state_19627;
(statearr_19634[(11)] = inst_19568);

return statearr_19634;
})();
var statearr_19635_21075 = state_19627__$1;
(statearr_19635_21075[(2)] = null);

(statearr_19635_21075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (4))){
var inst_19580 = (state_19627[(7)]);
var inst_19582 = (state_19627[(13)]);
var inst_19579 = (state_19627[(2)]);
var inst_19580__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19579,(0),null);
var inst_19581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19579,(1),null);
var inst_19582__$1 = (inst_19580__$1 == null);
var state_19627__$1 = (function (){var statearr_19637 = state_19627;
(statearr_19637[(7)] = inst_19580__$1);

(statearr_19637[(14)] = inst_19581);

(statearr_19637[(13)] = inst_19582__$1);

return statearr_19637;
})();
if(cljs.core.truth_(inst_19582__$1)){
var statearr_19638_21076 = state_19627__$1;
(statearr_19638_21076[(1)] = (5));

} else {
var statearr_19639_21077 = state_19627__$1;
(statearr_19639_21077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (15))){
var inst_19572 = (state_19627[(15)]);
var inst_19601 = (state_19627[(16)]);
var inst_19601__$1 = cljs.core.empty_QMARK_(inst_19572);
var state_19627__$1 = (function (){var statearr_19641 = state_19627;
(statearr_19641[(16)] = inst_19601__$1);

return statearr_19641;
})();
if(inst_19601__$1){
var statearr_19642_21080 = state_19627__$1;
(statearr_19642_21080[(1)] = (17));

} else {
var statearr_19643_21081 = state_19627__$1;
(statearr_19643_21081[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (21))){
var inst_19571 = (state_19627[(12)]);
var inst_19568 = inst_19571;
var state_19627__$1 = (function (){var statearr_19645 = state_19627;
(statearr_19645[(11)] = inst_19568);

return statearr_19645;
})();
var statearr_19646_21082 = state_19627__$1;
(statearr_19646_21082[(2)] = null);

(statearr_19646_21082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (13))){
var inst_19594 = (state_19627[(2)]);
var inst_19595 = calc_state();
var inst_19568 = inst_19595;
var state_19627__$1 = (function (){var statearr_19647 = state_19627;
(statearr_19647[(17)] = inst_19594);

(statearr_19647[(11)] = inst_19568);

return statearr_19647;
})();
var statearr_19649_21083 = state_19627__$1;
(statearr_19649_21083[(2)] = null);

(statearr_19649_21083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (22))){
var inst_19621 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
var statearr_19650_21084 = state_19627__$1;
(statearr_19650_21084[(2)] = inst_19621);

(statearr_19650_21084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (6))){
var inst_19581 = (state_19627[(14)]);
var inst_19585 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19581,change);
var state_19627__$1 = state_19627;
var statearr_19651_21086 = state_19627__$1;
(statearr_19651_21086[(2)] = inst_19585);

(statearr_19651_21086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (25))){
var state_19627__$1 = state_19627;
var statearr_19652_21087 = state_19627__$1;
(statearr_19652_21087[(2)] = null);

(statearr_19652_21087[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (17))){
var inst_19573 = (state_19627[(18)]);
var inst_19581 = (state_19627[(14)]);
var inst_19603 = (inst_19573.cljs$core$IFn$_invoke$arity$1 ? inst_19573.cljs$core$IFn$_invoke$arity$1(inst_19581) : inst_19573.call(null,inst_19581));
var inst_19604 = cljs.core.not(inst_19603);
var state_19627__$1 = state_19627;
var statearr_19653_21088 = state_19627__$1;
(statearr_19653_21088[(2)] = inst_19604);

(statearr_19653_21088[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (3))){
var inst_19625 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19627__$1,inst_19625);
} else {
if((state_val_19628 === (12))){
var state_19627__$1 = state_19627;
var statearr_19655_21089 = state_19627__$1;
(statearr_19655_21089[(2)] = null);

(statearr_19655_21089[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (2))){
var inst_19568 = (state_19627[(11)]);
var inst_19571 = (state_19627[(12)]);
var inst_19571__$1 = cljs.core.__destructure_map(inst_19568);
var inst_19572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19571__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19571__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19571__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19627__$1 = (function (){var statearr_19656 = state_19627;
(statearr_19656[(12)] = inst_19571__$1);

(statearr_19656[(15)] = inst_19572);

(statearr_19656[(18)] = inst_19573);

return statearr_19656;
})();
return cljs.core.async.ioc_alts_BANG_(state_19627__$1,(4),inst_19574);
} else {
if((state_val_19628 === (23))){
var inst_19612 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
if(cljs.core.truth_(inst_19612)){
var statearr_19657_21091 = state_19627__$1;
(statearr_19657_21091[(1)] = (24));

} else {
var statearr_19658_21092 = state_19627__$1;
(statearr_19658_21092[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (19))){
var inst_19607 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
var statearr_19659_21096 = state_19627__$1;
(statearr_19659_21096[(2)] = inst_19607);

(statearr_19659_21096[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (11))){
var inst_19581 = (state_19627[(14)]);
var inst_19591 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19581);
var state_19627__$1 = state_19627;
var statearr_19661_21097 = state_19627__$1;
(statearr_19661_21097[(2)] = inst_19591);

(statearr_19661_21097[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (9))){
var inst_19572 = (state_19627[(15)]);
var inst_19581 = (state_19627[(14)]);
var inst_19598 = (state_19627[(19)]);
var inst_19598__$1 = (inst_19572.cljs$core$IFn$_invoke$arity$1 ? inst_19572.cljs$core$IFn$_invoke$arity$1(inst_19581) : inst_19572.call(null,inst_19581));
var state_19627__$1 = (function (){var statearr_19662 = state_19627;
(statearr_19662[(19)] = inst_19598__$1);

return statearr_19662;
})();
if(cljs.core.truth_(inst_19598__$1)){
var statearr_19663_21098 = state_19627__$1;
(statearr_19663_21098[(1)] = (14));

} else {
var statearr_19664_21099 = state_19627__$1;
(statearr_19664_21099[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (5))){
var inst_19582 = (state_19627[(13)]);
var state_19627__$1 = state_19627;
var statearr_19665_21100 = state_19627__$1;
(statearr_19665_21100[(2)] = inst_19582);

(statearr_19665_21100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (14))){
var inst_19598 = (state_19627[(19)]);
var state_19627__$1 = state_19627;
var statearr_19666_21101 = state_19627__$1;
(statearr_19666_21101[(2)] = inst_19598);

(statearr_19666_21101[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (26))){
var inst_19617 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
var statearr_19667_21102 = state_19627__$1;
(statearr_19667_21102[(2)] = inst_19617);

(statearr_19667_21102[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (16))){
var inst_19609 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
if(cljs.core.truth_(inst_19609)){
var statearr_19668_21103 = state_19627__$1;
(statearr_19668_21103[(1)] = (20));

} else {
var statearr_19670_21104 = state_19627__$1;
(statearr_19670_21104[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (10))){
var inst_19623 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
var statearr_19671_21105 = state_19627__$1;
(statearr_19671_21105[(2)] = inst_19623);

(statearr_19671_21105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (18))){
var inst_19601 = (state_19627[(16)]);
var state_19627__$1 = state_19627;
var statearr_19672_21106 = state_19627__$1;
(statearr_19672_21106[(2)] = inst_19601);

(statearr_19672_21106[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (8))){
var inst_19580 = (state_19627[(7)]);
var inst_19589 = (inst_19580 == null);
var state_19627__$1 = state_19627;
if(cljs.core.truth_(inst_19589)){
var statearr_19673_21107 = state_19627__$1;
(statearr_19673_21107[(1)] = (11));

} else {
var statearr_19674_21108 = state_19627__$1;
(statearr_19674_21108[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__18489__auto__ = null;
var cljs$core$async$mix_$_state_machine__18489__auto____0 = (function (){
var statearr_19675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19675[(0)] = cljs$core$async$mix_$_state_machine__18489__auto__);

(statearr_19675[(1)] = (1));

return statearr_19675;
});
var cljs$core$async$mix_$_state_machine__18489__auto____1 = (function (state_19627){
while(true){
var ret_value__18490__auto__ = (function (){try{while(true){
var result__18491__auto__ = switch__18488__auto__(state_19627);
if(cljs.core.keyword_identical_QMARK_(result__18491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18491__auto__;
}
break;
}
}catch (e19676){var ex__18492__auto__ = e19676;
var statearr_19677_21109 = state_19627;
(statearr_19677_21109[(2)] = ex__18492__auto__);


if(cljs.core.seq((state_19627[(4)]))){
var statearr_19678_21110 = state_19627;
(statearr_19678_21110[(1)] = cljs.core.first((state_19627[(4)])));

} else {
throw ex__18492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21111 = state_19627;
state_19627 = G__21111;
continue;
} else {
return ret_value__18490__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18489__auto__ = function(state_19627){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18489__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18489__auto____1.call(this,state_19627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18489__auto____0;
cljs$core$async$mix_$_state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18489__auto____1;
return cljs$core$async$mix_$_state_machine__18489__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_19679 = f__18578__auto__();
(statearr_19679[(6)] = c__18577__auto___21065);

return statearr_19679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_21112 = (function (p,v,ch,close_QMARK_){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5374__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5372__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_21112(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_21113 = (function (p,v,ch){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5374__auto__.call(null,p,v,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5372__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_21113(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_21116 = (function() {
var G__21117 = null;
var G__21117__1 = (function (p){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5374__auto__.call(null,p));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5372__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__21117__2 = (function (p,v){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5374__auto__.call(null,p,v));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5372__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__21117 = function(p,v){
switch(arguments.length){
case 1:
return G__21117__1.call(this,p);
case 2:
return G__21117__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21117.cljs$core$IFn$_invoke$arity$1 = G__21117__1;
G__21117.cljs$core$IFn$_invoke$arity$2 = G__21117__2;
return G__21117;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19683 = arguments.length;
switch (G__19683) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21116(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21116(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19688 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19689){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19689 = meta19689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19690,meta19689__$1){
var self__ = this;
var _19690__$1 = this;
return (new cljs.core.async.t_cljs$core$async19688(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19689__$1));
}));

(cljs.core.async.t_cljs$core$async19688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19690){
var self__ = this;
var _19690__$1 = this;
return self__.meta19689;
}));

(cljs.core.async.t_cljs$core$async19688.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19688.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19688.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19688.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19688.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async19688.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19688.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19688.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19689","meta19689",443839386,null)], null);
}));

(cljs.core.async.t_cljs$core$async19688.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19688.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19688");

(cljs.core.async.t_cljs$core$async19688.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async19688");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19688.
 */
cljs.core.async.__GT_t_cljs$core$async19688 = (function cljs$core$async$__GT_t_cljs$core$async19688(ch,topic_fn,buf_fn,mults,ensure_mult,meta19689){
return (new cljs.core.async.t_cljs$core$async19688(ch,topic_fn,buf_fn,mults,ensure_mult,meta19689));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__19686 = arguments.length;
switch (G__19686) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__19684_SHARP_){
if(cljs.core.truth_((p1__19684_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19684_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19684_SHARP_.call(null,topic)))){
return p1__19684_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19684_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async19688(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__18577__auto___21148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18488__auto__ = (function (state_19765){
var state_val_19766 = (state_19765[(1)]);
if((state_val_19766 === (7))){
var inst_19761 = (state_19765[(2)]);
var state_19765__$1 = state_19765;
var statearr_19767_21149 = state_19765__$1;
(statearr_19767_21149[(2)] = inst_19761);

(statearr_19767_21149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (20))){
var state_19765__$1 = state_19765;
var statearr_19768_21150 = state_19765__$1;
(statearr_19768_21150[(2)] = null);

(statearr_19768_21150[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (1))){
var state_19765__$1 = state_19765;
var statearr_19770_21155 = state_19765__$1;
(statearr_19770_21155[(2)] = null);

(statearr_19770_21155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (24))){
var inst_19744 = (state_19765[(7)]);
var inst_19753 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19744);
var state_19765__$1 = state_19765;
var statearr_19771_21156 = state_19765__$1;
(statearr_19771_21156[(2)] = inst_19753);

(statearr_19771_21156[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (4))){
var inst_19696 = (state_19765[(8)]);
var inst_19696__$1 = (state_19765[(2)]);
var inst_19697 = (inst_19696__$1 == null);
var state_19765__$1 = (function (){var statearr_19773 = state_19765;
(statearr_19773[(8)] = inst_19696__$1);

return statearr_19773;
})();
if(cljs.core.truth_(inst_19697)){
var statearr_19774_21157 = state_19765__$1;
(statearr_19774_21157[(1)] = (5));

} else {
var statearr_19775_21159 = state_19765__$1;
(statearr_19775_21159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (15))){
var inst_19738 = (state_19765[(2)]);
var state_19765__$1 = state_19765;
var statearr_19776_21160 = state_19765__$1;
(statearr_19776_21160[(2)] = inst_19738);

(statearr_19776_21160[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (21))){
var inst_19758 = (state_19765[(2)]);
var state_19765__$1 = (function (){var statearr_19777 = state_19765;
(statearr_19777[(9)] = inst_19758);

return statearr_19777;
})();
var statearr_19778_21161 = state_19765__$1;
(statearr_19778_21161[(2)] = null);

(statearr_19778_21161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (13))){
var inst_19720 = (state_19765[(10)]);
var inst_19722 = cljs.core.chunked_seq_QMARK_(inst_19720);
var state_19765__$1 = state_19765;
if(inst_19722){
var statearr_19779_21162 = state_19765__$1;
(statearr_19779_21162[(1)] = (16));

} else {
var statearr_19780_21163 = state_19765__$1;
(statearr_19780_21163[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (22))){
var inst_19750 = (state_19765[(2)]);
var state_19765__$1 = state_19765;
if(cljs.core.truth_(inst_19750)){
var statearr_19781_21164 = state_19765__$1;
(statearr_19781_21164[(1)] = (23));

} else {
var statearr_19782_21165 = state_19765__$1;
(statearr_19782_21165[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (6))){
var inst_19696 = (state_19765[(8)]);
var inst_19744 = (state_19765[(7)]);
var inst_19746 = (state_19765[(11)]);
var inst_19744__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19696) : topic_fn.call(null,inst_19696));
var inst_19745 = cljs.core.deref(mults);
var inst_19746__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19745,inst_19744__$1);
var state_19765__$1 = (function (){var statearr_19783 = state_19765;
(statearr_19783[(7)] = inst_19744__$1);

(statearr_19783[(11)] = inst_19746__$1);

return statearr_19783;
})();
if(cljs.core.truth_(inst_19746__$1)){
var statearr_19784_21167 = state_19765__$1;
(statearr_19784_21167[(1)] = (19));

} else {
var statearr_19785_21168 = state_19765__$1;
(statearr_19785_21168[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (25))){
var inst_19755 = (state_19765[(2)]);
var state_19765__$1 = state_19765;
var statearr_19786_21169 = state_19765__$1;
(statearr_19786_21169[(2)] = inst_19755);

(statearr_19786_21169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (17))){
var inst_19720 = (state_19765[(10)]);
var inst_19729 = cljs.core.first(inst_19720);
var inst_19730 = cljs.core.async.muxch_STAR_(inst_19729);
var inst_19731 = cljs.core.async.close_BANG_(inst_19730);
var inst_19732 = cljs.core.next(inst_19720);
var inst_19706 = inst_19732;
var inst_19707 = null;
var inst_19708 = (0);
var inst_19709 = (0);
var state_19765__$1 = (function (){var statearr_19787 = state_19765;
(statearr_19787[(12)] = inst_19731);

(statearr_19787[(13)] = inst_19706);

(statearr_19787[(14)] = inst_19707);

(statearr_19787[(15)] = inst_19708);

(statearr_19787[(16)] = inst_19709);

return statearr_19787;
})();
var statearr_19788_21170 = state_19765__$1;
(statearr_19788_21170[(2)] = null);

(statearr_19788_21170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (3))){
var inst_19763 = (state_19765[(2)]);
var state_19765__$1 = state_19765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19765__$1,inst_19763);
} else {
if((state_val_19766 === (12))){
var inst_19740 = (state_19765[(2)]);
var state_19765__$1 = state_19765;
var statearr_19789_21171 = state_19765__$1;
(statearr_19789_21171[(2)] = inst_19740);

(statearr_19789_21171[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (2))){
var state_19765__$1 = state_19765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19765__$1,(4),ch);
} else {
if((state_val_19766 === (23))){
var state_19765__$1 = state_19765;
var statearr_19790_21172 = state_19765__$1;
(statearr_19790_21172[(2)] = null);

(statearr_19790_21172[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (19))){
var inst_19746 = (state_19765[(11)]);
var inst_19696 = (state_19765[(8)]);
var inst_19748 = cljs.core.async.muxch_STAR_(inst_19746);
var state_19765__$1 = state_19765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19765__$1,(22),inst_19748,inst_19696);
} else {
if((state_val_19766 === (11))){
var inst_19706 = (state_19765[(13)]);
var inst_19720 = (state_19765[(10)]);
var inst_19720__$1 = cljs.core.seq(inst_19706);
var state_19765__$1 = (function (){var statearr_19791 = state_19765;
(statearr_19791[(10)] = inst_19720__$1);

return statearr_19791;
})();
if(inst_19720__$1){
var statearr_19792_21173 = state_19765__$1;
(statearr_19792_21173[(1)] = (13));

} else {
var statearr_19793_21174 = state_19765__$1;
(statearr_19793_21174[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (9))){
var inst_19742 = (state_19765[(2)]);
var state_19765__$1 = state_19765;
var statearr_19794_21175 = state_19765__$1;
(statearr_19794_21175[(2)] = inst_19742);

(statearr_19794_21175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (5))){
var inst_19703 = cljs.core.deref(mults);
var inst_19704 = cljs.core.vals(inst_19703);
var inst_19705 = cljs.core.seq(inst_19704);
var inst_19706 = inst_19705;
var inst_19707 = null;
var inst_19708 = (0);
var inst_19709 = (0);
var state_19765__$1 = (function (){var statearr_19795 = state_19765;
(statearr_19795[(13)] = inst_19706);

(statearr_19795[(14)] = inst_19707);

(statearr_19795[(15)] = inst_19708);

(statearr_19795[(16)] = inst_19709);

return statearr_19795;
})();
var statearr_19796_21176 = state_19765__$1;
(statearr_19796_21176[(2)] = null);

(statearr_19796_21176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (14))){
var state_19765__$1 = state_19765;
var statearr_19800_21177 = state_19765__$1;
(statearr_19800_21177[(2)] = null);

(statearr_19800_21177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (16))){
var inst_19720 = (state_19765[(10)]);
var inst_19724 = cljs.core.chunk_first(inst_19720);
var inst_19725 = cljs.core.chunk_rest(inst_19720);
var inst_19726 = cljs.core.count(inst_19724);
var inst_19706 = inst_19725;
var inst_19707 = inst_19724;
var inst_19708 = inst_19726;
var inst_19709 = (0);
var state_19765__$1 = (function (){var statearr_19803 = state_19765;
(statearr_19803[(13)] = inst_19706);

(statearr_19803[(14)] = inst_19707);

(statearr_19803[(15)] = inst_19708);

(statearr_19803[(16)] = inst_19709);

return statearr_19803;
})();
var statearr_19804_21178 = state_19765__$1;
(statearr_19804_21178[(2)] = null);

(statearr_19804_21178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (10))){
var inst_19707 = (state_19765[(14)]);
var inst_19709 = (state_19765[(16)]);
var inst_19706 = (state_19765[(13)]);
var inst_19708 = (state_19765[(15)]);
var inst_19714 = cljs.core._nth(inst_19707,inst_19709);
var inst_19715 = cljs.core.async.muxch_STAR_(inst_19714);
var inst_19716 = cljs.core.async.close_BANG_(inst_19715);
var inst_19717 = (inst_19709 + (1));
var tmp19797 = inst_19706;
var tmp19798 = inst_19707;
var tmp19799 = inst_19708;
var inst_19706__$1 = tmp19797;
var inst_19707__$1 = tmp19798;
var inst_19708__$1 = tmp19799;
var inst_19709__$1 = inst_19717;
var state_19765__$1 = (function (){var statearr_19805 = state_19765;
(statearr_19805[(17)] = inst_19716);

(statearr_19805[(13)] = inst_19706__$1);

(statearr_19805[(14)] = inst_19707__$1);

(statearr_19805[(15)] = inst_19708__$1);

(statearr_19805[(16)] = inst_19709__$1);

return statearr_19805;
})();
var statearr_19806_21179 = state_19765__$1;
(statearr_19806_21179[(2)] = null);

(statearr_19806_21179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (18))){
var inst_19735 = (state_19765[(2)]);
var state_19765__$1 = state_19765;
var statearr_19807_21180 = state_19765__$1;
(statearr_19807_21180[(2)] = inst_19735);

(statearr_19807_21180[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (8))){
var inst_19709 = (state_19765[(16)]);
var inst_19708 = (state_19765[(15)]);
var inst_19711 = (inst_19709 < inst_19708);
var inst_19712 = inst_19711;
var state_19765__$1 = state_19765;
if(cljs.core.truth_(inst_19712)){
var statearr_19808_21181 = state_19765__$1;
(statearr_19808_21181[(1)] = (10));

} else {
var statearr_19809_21182 = state_19765__$1;
(statearr_19809_21182[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18489__auto__ = null;
var cljs$core$async$state_machine__18489__auto____0 = (function (){
var statearr_19810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19810[(0)] = cljs$core$async$state_machine__18489__auto__);

(statearr_19810[(1)] = (1));

return statearr_19810;
});
var cljs$core$async$state_machine__18489__auto____1 = (function (state_19765){
while(true){
var ret_value__18490__auto__ = (function (){try{while(true){
var result__18491__auto__ = switch__18488__auto__(state_19765);
if(cljs.core.keyword_identical_QMARK_(result__18491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18491__auto__;
}
break;
}
}catch (e19811){var ex__18492__auto__ = e19811;
var statearr_19812_21183 = state_19765;
(statearr_19812_21183[(2)] = ex__18492__auto__);


if(cljs.core.seq((state_19765[(4)]))){
var statearr_19813_21184 = state_19765;
(statearr_19813_21184[(1)] = cljs.core.first((state_19765[(4)])));

} else {
throw ex__18492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21185 = state_19765;
state_19765 = G__21185;
continue;
} else {
return ret_value__18490__auto__;
}
break;
}
});
cljs$core$async$state_machine__18489__auto__ = function(state_19765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18489__auto____1.call(this,state_19765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18489__auto____0;
cljs$core$async$state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18489__auto____1;
return cljs$core$async$state_machine__18489__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_19814 = f__18578__auto__();
(statearr_19814[(6)] = c__18577__auto___21148);

return statearr_19814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19816 = arguments.length;
switch (G__19816) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19820 = arguments.length;
switch (G__19820) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19822 = arguments.length;
switch (G__19822) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__18577__auto___21254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18488__auto__ = (function (state_19874){
var state_val_19875 = (state_19874[(1)]);
if((state_val_19875 === (7))){
var state_19874__$1 = state_19874;
var statearr_19876_21255 = state_19874__$1;
(statearr_19876_21255[(2)] = null);

(statearr_19876_21255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19875 === (1))){
var state_19874__$1 = state_19874;
var statearr_19877_21256 = state_19874__$1;
(statearr_19877_21256[(2)] = null);

(statearr_19877_21256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19875 === (4))){
var inst_19832 = (state_19874[(7)]);
var inst_19831 = (state_19874[(8)]);
var inst_19834 = (inst_19832 < inst_19831);
var state_19874__$1 = state_19874;
if(cljs.core.truth_(inst_19834)){
var statearr_19878_21257 = state_19874__$1;
(statearr_19878_21257[(1)] = (6));

} else {
var statearr_19879_21258 = state_19874__$1;
(statearr_19879_21258[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19875 === (15))){
var inst_19860 = (state_19874[(9)]);
var inst_19865 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19860);
var state_19874__$1 = state_19874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19874__$1,(17),out,inst_19865);
} else {
if((state_val_19875 === (13))){
var inst_19860 = (state_19874[(9)]);
var inst_19860__$1 = (state_19874[(2)]);
var inst_19861 = cljs.core.some(cljs.core.nil_QMARK_,inst_19860__$1);
var state_19874__$1 = (function (){var statearr_19880 = state_19874;
(statearr_19880[(9)] = inst_19860__$1);

return statearr_19880;
})();
if(cljs.core.truth_(inst_19861)){
var statearr_19881_21259 = state_19874__$1;
(statearr_19881_21259[(1)] = (14));

} else {
var statearr_19883_21260 = state_19874__$1;
(statearr_19883_21260[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19875 === (6))){
var state_19874__$1 = state_19874;
var statearr_19884_21261 = state_19874__$1;
(statearr_19884_21261[(2)] = null);

(statearr_19884_21261[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19875 === (17))){
var inst_19867 = (state_19874[(2)]);
var state_19874__$1 = (function (){var statearr_19889 = state_19874;
(statearr_19889[(10)] = inst_19867);

return statearr_19889;
})();
var statearr_19891_21262 = state_19874__$1;
(statearr_19891_21262[(2)] = null);

(statearr_19891_21262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19875 === (3))){
var inst_19872 = (state_19874[(2)]);
var state_19874__$1 = state_19874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19874__$1,inst_19872);
} else {
if((state_val_19875 === (12))){
var _ = (function (){var statearr_19892 = state_19874;
(statearr_19892[(4)] = cljs.core.rest((state_19874[(4)])));

return statearr_19892;
})();
var state_19874__$1 = state_19874;
var ex19888 = (state_19874__$1[(2)]);
var statearr_19893_21263 = state_19874__$1;
(statearr_19893_21263[(5)] = ex19888);


if((ex19888 instanceof Object)){
var statearr_19897_21264 = state_19874__$1;
(statearr_19897_21264[(1)] = (11));

(statearr_19897_21264[(5)] = null);

} else {
throw ex19888;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19875 === (2))){
var inst_19830 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19831 = cnt;
var inst_19832 = (0);
var state_19874__$1 = (function (){var statearr_19899 = state_19874;
(statearr_19899[(11)] = inst_19830);

(statearr_19899[(8)] = inst_19831);

(statearr_19899[(7)] = inst_19832);

return statearr_19899;
})();
var statearr_19900_21265 = state_19874__$1;
(statearr_19900_21265[(2)] = null);

(statearr_19900_21265[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19875 === (11))){
var inst_19839 = (state_19874[(2)]);
var inst_19840 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19874__$1 = (function (){var statearr_19901 = state_19874;
(statearr_19901[(12)] = inst_19839);

return statearr_19901;
})();
var statearr_19904_21266 = state_19874__$1;
(statearr_19904_21266[(2)] = inst_19840);

(statearr_19904_21266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19875 === (9))){
var inst_19832 = (state_19874[(7)]);
var _ = (function (){var statearr_19906 = state_19874;
(statearr_19906[(4)] = cljs.core.cons((12),(state_19874[(4)])));

return statearr_19906;
})();
var inst_19846 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19832) : chs__$1.call(null,inst_19832));
var inst_19847 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19832) : done.call(null,inst_19832));
var inst_19848 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19846,inst_19847);
var ___$1 = (function (){var statearr_19907 = state_19874;
(statearr_19907[(4)] = cljs.core.rest((state_19874[(4)])));

return statearr_19907;
})();
var state_19874__$1 = state_19874;
var statearr_19908_21267 = state_19874__$1;
(statearr_19908_21267[(2)] = inst_19848);

(statearr_19908_21267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19875 === (5))){
var inst_19858 = (state_19874[(2)]);
var state_19874__$1 = (function (){var statearr_19909 = state_19874;
(statearr_19909[(13)] = inst_19858);

return statearr_19909;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19874__$1,(13),dchan);
} else {
if((state_val_19875 === (14))){
var inst_19863 = cljs.core.async.close_BANG_(out);
var state_19874__$1 = state_19874;
var statearr_19911_21268 = state_19874__$1;
(statearr_19911_21268[(2)] = inst_19863);

(statearr_19911_21268[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19875 === (16))){
var inst_19870 = (state_19874[(2)]);
var state_19874__$1 = state_19874;
var statearr_19912_21269 = state_19874__$1;
(statearr_19912_21269[(2)] = inst_19870);

(statearr_19912_21269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19875 === (10))){
var inst_19832 = (state_19874[(7)]);
var inst_19851 = (state_19874[(2)]);
var inst_19852 = (inst_19832 + (1));
var inst_19832__$1 = inst_19852;
var state_19874__$1 = (function (){var statearr_19913 = state_19874;
(statearr_19913[(14)] = inst_19851);

(statearr_19913[(7)] = inst_19832__$1);

return statearr_19913;
})();
var statearr_19914_21270 = state_19874__$1;
(statearr_19914_21270[(2)] = null);

(statearr_19914_21270[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19875 === (8))){
var inst_19856 = (state_19874[(2)]);
var state_19874__$1 = state_19874;
var statearr_19917_21271 = state_19874__$1;
(statearr_19917_21271[(2)] = inst_19856);

(statearr_19917_21271[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18489__auto__ = null;
var cljs$core$async$state_machine__18489__auto____0 = (function (){
var statearr_19919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19919[(0)] = cljs$core$async$state_machine__18489__auto__);

(statearr_19919[(1)] = (1));

return statearr_19919;
});
var cljs$core$async$state_machine__18489__auto____1 = (function (state_19874){
while(true){
var ret_value__18490__auto__ = (function (){try{while(true){
var result__18491__auto__ = switch__18488__auto__(state_19874);
if(cljs.core.keyword_identical_QMARK_(result__18491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18491__auto__;
}
break;
}
}catch (e19920){var ex__18492__auto__ = e19920;
var statearr_19921_21272 = state_19874;
(statearr_19921_21272[(2)] = ex__18492__auto__);


if(cljs.core.seq((state_19874[(4)]))){
var statearr_19922_21273 = state_19874;
(statearr_19922_21273[(1)] = cljs.core.first((state_19874[(4)])));

} else {
throw ex__18492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21274 = state_19874;
state_19874 = G__21274;
continue;
} else {
return ret_value__18490__auto__;
}
break;
}
});
cljs$core$async$state_machine__18489__auto__ = function(state_19874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18489__auto____1.call(this,state_19874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18489__auto____0;
cljs$core$async$state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18489__auto____1;
return cljs$core$async$state_machine__18489__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_19923 = f__18578__auto__();
(statearr_19923[(6)] = c__18577__auto___21254);

return statearr_19923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19929 = arguments.length;
switch (G__19929) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18577__auto___21276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18488__auto__ = (function (state_19982){
var state_val_19983 = (state_19982[(1)]);
if((state_val_19983 === (7))){
var inst_19950 = (state_19982[(7)]);
var inst_19954 = (state_19982[(8)]);
var inst_19950__$1 = (state_19982[(2)]);
var inst_19954__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19950__$1,(0),null);
var inst_19955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19950__$1,(1),null);
var inst_19956 = (inst_19954__$1 == null);
var state_19982__$1 = (function (){var statearr_19988 = state_19982;
(statearr_19988[(7)] = inst_19950__$1);

(statearr_19988[(8)] = inst_19954__$1);

(statearr_19988[(9)] = inst_19955);

return statearr_19988;
})();
if(cljs.core.truth_(inst_19956)){
var statearr_19989_21279 = state_19982__$1;
(statearr_19989_21279[(1)] = (8));

} else {
var statearr_19990_21280 = state_19982__$1;
(statearr_19990_21280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (1))){
var inst_19936 = cljs.core.vec(chs);
var inst_19937 = inst_19936;
var state_19982__$1 = (function (){var statearr_19992 = state_19982;
(statearr_19992[(10)] = inst_19937);

return statearr_19992;
})();
var statearr_19993_21281 = state_19982__$1;
(statearr_19993_21281[(2)] = null);

(statearr_19993_21281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (4))){
var inst_19937 = (state_19982[(10)]);
var state_19982__$1 = state_19982;
return cljs.core.async.ioc_alts_BANG_(state_19982__$1,(7),inst_19937);
} else {
if((state_val_19983 === (6))){
var inst_19974 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
var statearr_19994_21282 = state_19982__$1;
(statearr_19994_21282[(2)] = inst_19974);

(statearr_19994_21282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (3))){
var inst_19976 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19982__$1,inst_19976);
} else {
if((state_val_19983 === (2))){
var inst_19937 = (state_19982[(10)]);
var inst_19942 = cljs.core.count(inst_19937);
var inst_19943 = (inst_19942 > (0));
var state_19982__$1 = state_19982;
if(cljs.core.truth_(inst_19943)){
var statearr_20000_21283 = state_19982__$1;
(statearr_20000_21283[(1)] = (4));

} else {
var statearr_20001_21284 = state_19982__$1;
(statearr_20001_21284[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (11))){
var inst_19937 = (state_19982[(10)]);
var inst_19967 = (state_19982[(2)]);
var tmp19995 = inst_19937;
var inst_19937__$1 = tmp19995;
var state_19982__$1 = (function (){var statearr_20006 = state_19982;
(statearr_20006[(11)] = inst_19967);

(statearr_20006[(10)] = inst_19937__$1);

return statearr_20006;
})();
var statearr_20011_21285 = state_19982__$1;
(statearr_20011_21285[(2)] = null);

(statearr_20011_21285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (9))){
var inst_19954 = (state_19982[(8)]);
var state_19982__$1 = state_19982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19982__$1,(11),out,inst_19954);
} else {
if((state_val_19983 === (5))){
var inst_19972 = cljs.core.async.close_BANG_(out);
var state_19982__$1 = state_19982;
var statearr_20021_21297 = state_19982__$1;
(statearr_20021_21297[(2)] = inst_19972);

(statearr_20021_21297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (10))){
var inst_19970 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
var statearr_20023_21298 = state_19982__$1;
(statearr_20023_21298[(2)] = inst_19970);

(statearr_20023_21298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (8))){
var inst_19937 = (state_19982[(10)]);
var inst_19950 = (state_19982[(7)]);
var inst_19954 = (state_19982[(8)]);
var inst_19955 = (state_19982[(9)]);
var inst_19960 = (function (){var cs = inst_19937;
var vec__19946 = inst_19950;
var v = inst_19954;
var c = inst_19955;
return (function (p1__19925_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19925_SHARP_);
});
})();
var inst_19963 = cljs.core.filterv(inst_19960,inst_19937);
var inst_19937__$1 = inst_19963;
var state_19982__$1 = (function (){var statearr_20028 = state_19982;
(statearr_20028[(10)] = inst_19937__$1);

return statearr_20028;
})();
var statearr_20029_21299 = state_19982__$1;
(statearr_20029_21299[(2)] = null);

(statearr_20029_21299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18489__auto__ = null;
var cljs$core$async$state_machine__18489__auto____0 = (function (){
var statearr_20033 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20033[(0)] = cljs$core$async$state_machine__18489__auto__);

(statearr_20033[(1)] = (1));

return statearr_20033;
});
var cljs$core$async$state_machine__18489__auto____1 = (function (state_19982){
while(true){
var ret_value__18490__auto__ = (function (){try{while(true){
var result__18491__auto__ = switch__18488__auto__(state_19982);
if(cljs.core.keyword_identical_QMARK_(result__18491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18491__auto__;
}
break;
}
}catch (e20035){var ex__18492__auto__ = e20035;
var statearr_20036_21302 = state_19982;
(statearr_20036_21302[(2)] = ex__18492__auto__);


if(cljs.core.seq((state_19982[(4)]))){
var statearr_20037_21303 = state_19982;
(statearr_20037_21303[(1)] = cljs.core.first((state_19982[(4)])));

} else {
throw ex__18492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21304 = state_19982;
state_19982 = G__21304;
continue;
} else {
return ret_value__18490__auto__;
}
break;
}
});
cljs$core$async$state_machine__18489__auto__ = function(state_19982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18489__auto____1.call(this,state_19982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18489__auto____0;
cljs$core$async$state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18489__auto____1;
return cljs$core$async$state_machine__18489__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_20039 = f__18578__auto__();
(statearr_20039[(6)] = c__18577__auto___21276);

return statearr_20039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__20043 = arguments.length;
switch (G__20043) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18577__auto___21308 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18488__auto__ = (function (state_20069){
var state_val_20070 = (state_20069[(1)]);
if((state_val_20070 === (7))){
var inst_20051 = (state_20069[(7)]);
var inst_20051__$1 = (state_20069[(2)]);
var inst_20052 = (inst_20051__$1 == null);
var inst_20053 = cljs.core.not(inst_20052);
var state_20069__$1 = (function (){var statearr_20074 = state_20069;
(statearr_20074[(7)] = inst_20051__$1);

return statearr_20074;
})();
if(inst_20053){
var statearr_20075_21309 = state_20069__$1;
(statearr_20075_21309[(1)] = (8));

} else {
var statearr_20076_21310 = state_20069__$1;
(statearr_20076_21310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20070 === (1))){
var inst_20046 = (0);
var state_20069__$1 = (function (){var statearr_20077 = state_20069;
(statearr_20077[(8)] = inst_20046);

return statearr_20077;
})();
var statearr_20078_21311 = state_20069__$1;
(statearr_20078_21311[(2)] = null);

(statearr_20078_21311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20070 === (4))){
var state_20069__$1 = state_20069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20069__$1,(7),ch);
} else {
if((state_val_20070 === (6))){
var inst_20064 = (state_20069[(2)]);
var state_20069__$1 = state_20069;
var statearr_20080_21312 = state_20069__$1;
(statearr_20080_21312[(2)] = inst_20064);

(statearr_20080_21312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20070 === (3))){
var inst_20066 = (state_20069[(2)]);
var inst_20067 = cljs.core.async.close_BANG_(out);
var state_20069__$1 = (function (){var statearr_20081 = state_20069;
(statearr_20081[(9)] = inst_20066);

return statearr_20081;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20069__$1,inst_20067);
} else {
if((state_val_20070 === (2))){
var inst_20046 = (state_20069[(8)]);
var inst_20048 = (inst_20046 < n);
var state_20069__$1 = state_20069;
if(cljs.core.truth_(inst_20048)){
var statearr_20082_21313 = state_20069__$1;
(statearr_20082_21313[(1)] = (4));

} else {
var statearr_20083_21314 = state_20069__$1;
(statearr_20083_21314[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20070 === (11))){
var inst_20046 = (state_20069[(8)]);
var inst_20056 = (state_20069[(2)]);
var inst_20057 = (inst_20046 + (1));
var inst_20046__$1 = inst_20057;
var state_20069__$1 = (function (){var statearr_20085 = state_20069;
(statearr_20085[(10)] = inst_20056);

(statearr_20085[(8)] = inst_20046__$1);

return statearr_20085;
})();
var statearr_20087_21315 = state_20069__$1;
(statearr_20087_21315[(2)] = null);

(statearr_20087_21315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20070 === (9))){
var state_20069__$1 = state_20069;
var statearr_20089_21316 = state_20069__$1;
(statearr_20089_21316[(2)] = null);

(statearr_20089_21316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20070 === (5))){
var state_20069__$1 = state_20069;
var statearr_20090_21317 = state_20069__$1;
(statearr_20090_21317[(2)] = null);

(statearr_20090_21317[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20070 === (10))){
var inst_20061 = (state_20069[(2)]);
var state_20069__$1 = state_20069;
var statearr_20091_21318 = state_20069__$1;
(statearr_20091_21318[(2)] = inst_20061);

(statearr_20091_21318[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20070 === (8))){
var inst_20051 = (state_20069[(7)]);
var state_20069__$1 = state_20069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20069__$1,(11),out,inst_20051);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18489__auto__ = null;
var cljs$core$async$state_machine__18489__auto____0 = (function (){
var statearr_20093 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20093[(0)] = cljs$core$async$state_machine__18489__auto__);

(statearr_20093[(1)] = (1));

return statearr_20093;
});
var cljs$core$async$state_machine__18489__auto____1 = (function (state_20069){
while(true){
var ret_value__18490__auto__ = (function (){try{while(true){
var result__18491__auto__ = switch__18488__auto__(state_20069);
if(cljs.core.keyword_identical_QMARK_(result__18491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18491__auto__;
}
break;
}
}catch (e20095){var ex__18492__auto__ = e20095;
var statearr_20096_21319 = state_20069;
(statearr_20096_21319[(2)] = ex__18492__auto__);


if(cljs.core.seq((state_20069[(4)]))){
var statearr_20097_21320 = state_20069;
(statearr_20097_21320[(1)] = cljs.core.first((state_20069[(4)])));

} else {
throw ex__18492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21321 = state_20069;
state_20069 = G__21321;
continue;
} else {
return ret_value__18490__auto__;
}
break;
}
});
cljs$core$async$state_machine__18489__auto__ = function(state_20069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18489__auto____1.call(this,state_20069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18489__auto____0;
cljs$core$async$state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18489__auto____1;
return cljs$core$async$state_machine__18489__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_20100 = f__18578__auto__();
(statearr_20100[(6)] = c__18577__auto___21308);

return statearr_20100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20114 = (function (f,ch,meta20104,_,fn1,meta20115){
this.f = f;
this.ch = ch;
this.meta20104 = meta20104;
this._ = _;
this.fn1 = fn1;
this.meta20115 = meta20115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20116,meta20115__$1){
var self__ = this;
var _20116__$1 = this;
return (new cljs.core.async.t_cljs$core$async20114(self__.f,self__.ch,self__.meta20104,self__._,self__.fn1,meta20115__$1));
}));

(cljs.core.async.t_cljs$core$async20114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20116){
var self__ = this;
var _20116__$1 = this;
return self__.meta20115;
}));

(cljs.core.async.t_cljs$core$async20114.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20114.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async20114.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20114.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__20102_SHARP_){
var G__20125 = (((p1__20102_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20102_SHARP_) : self__.f.call(null,p1__20102_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20125) : f1.call(null,G__20125));
});
}));

(cljs.core.async.t_cljs$core$async20114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20104","meta20104",-653116355,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20103","cljs.core.async/t_cljs$core$async20103",-2114646235,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20115","meta20115",1952361689,null)], null);
}));

(cljs.core.async.t_cljs$core$async20114.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20114");

(cljs.core.async.t_cljs$core$async20114.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async20114");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20114.
 */
cljs.core.async.__GT_t_cljs$core$async20114 = (function cljs$core$async$__GT_t_cljs$core$async20114(f,ch,meta20104,_,fn1,meta20115){
return (new cljs.core.async.t_cljs$core$async20114(f,ch,meta20104,_,fn1,meta20115));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20103 = (function (f,ch,meta20104){
this.f = f;
this.ch = ch;
this.meta20104 = meta20104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20105,meta20104__$1){
var self__ = this;
var _20105__$1 = this;
return (new cljs.core.async.t_cljs$core$async20103(self__.f,self__.ch,meta20104__$1));
}));

(cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20105){
var self__ = this;
var _20105__$1 = this;
return self__.meta20104;
}));

(cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async20114(self__.f,self__.ch,self__.meta20104,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20133 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20133) : self__.f.call(null,G__20133));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async20103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20104","meta20104",-653116355,null)], null);
}));

(cljs.core.async.t_cljs$core$async20103.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20103");

(cljs.core.async.t_cljs$core$async20103.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async20103");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20103.
 */
cljs.core.async.__GT_t_cljs$core$async20103 = (function cljs$core$async$__GT_t_cljs$core$async20103(f,ch,meta20104){
return (new cljs.core.async.t_cljs$core$async20103(f,ch,meta20104));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async20103(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20145 = (function (f,ch,meta20146){
this.f = f;
this.ch = ch;
this.meta20146 = meta20146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20147,meta20146__$1){
var self__ = this;
var _20147__$1 = this;
return (new cljs.core.async.t_cljs$core$async20145(self__.f,self__.ch,meta20146__$1));
}));

(cljs.core.async.t_cljs$core$async20145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20147){
var self__ = this;
var _20147__$1 = this;
return self__.meta20146;
}));

(cljs.core.async.t_cljs$core$async20145.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20145.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20145.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20145.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20145.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20145.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async20145.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20146","meta20146",684201107,null)], null);
}));

(cljs.core.async.t_cljs$core$async20145.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20145");

(cljs.core.async.t_cljs$core$async20145.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async20145");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20145.
 */
cljs.core.async.__GT_t_cljs$core$async20145 = (function cljs$core$async$__GT_t_cljs$core$async20145(f,ch,meta20146){
return (new cljs.core.async.t_cljs$core$async20145(f,ch,meta20146));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async20145(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20163 = (function (p,ch,meta20164){
this.p = p;
this.ch = ch;
this.meta20164 = meta20164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20165,meta20164__$1){
var self__ = this;
var _20165__$1 = this;
return (new cljs.core.async.t_cljs$core$async20163(self__.p,self__.ch,meta20164__$1));
}));

(cljs.core.async.t_cljs$core$async20163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20165){
var self__ = this;
var _20165__$1 = this;
return self__.meta20164;
}));

(cljs.core.async.t_cljs$core$async20163.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20163.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20163.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20163.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20163.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20163.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20163.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async20163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20164","meta20164",1090827821,null)], null);
}));

(cljs.core.async.t_cljs$core$async20163.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20163");

(cljs.core.async.t_cljs$core$async20163.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async20163");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20163.
 */
cljs.core.async.__GT_t_cljs$core$async20163 = (function cljs$core$async$__GT_t_cljs$core$async20163(p,ch,meta20164){
return (new cljs.core.async.t_cljs$core$async20163(p,ch,meta20164));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async20163(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__20204 = arguments.length;
switch (G__20204) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18577__auto___21337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18488__auto__ = (function (state_20248){
var state_val_20249 = (state_20248[(1)]);
if((state_val_20249 === (7))){
var inst_20244 = (state_20248[(2)]);
var state_20248__$1 = state_20248;
var statearr_20254_21339 = state_20248__$1;
(statearr_20254_21339[(2)] = inst_20244);

(statearr_20254_21339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20249 === (1))){
var state_20248__$1 = state_20248;
var statearr_20258_21340 = state_20248__$1;
(statearr_20258_21340[(2)] = null);

(statearr_20258_21340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20249 === (4))){
var inst_20229 = (state_20248[(7)]);
var inst_20229__$1 = (state_20248[(2)]);
var inst_20230 = (inst_20229__$1 == null);
var state_20248__$1 = (function (){var statearr_20260 = state_20248;
(statearr_20260[(7)] = inst_20229__$1);

return statearr_20260;
})();
if(cljs.core.truth_(inst_20230)){
var statearr_20261_21341 = state_20248__$1;
(statearr_20261_21341[(1)] = (5));

} else {
var statearr_20262_21342 = state_20248__$1;
(statearr_20262_21342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20249 === (6))){
var inst_20229 = (state_20248[(7)]);
var inst_20235 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20229) : p.call(null,inst_20229));
var state_20248__$1 = state_20248;
if(cljs.core.truth_(inst_20235)){
var statearr_20263_21343 = state_20248__$1;
(statearr_20263_21343[(1)] = (8));

} else {
var statearr_20264_21344 = state_20248__$1;
(statearr_20264_21344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20249 === (3))){
var inst_20246 = (state_20248[(2)]);
var state_20248__$1 = state_20248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20248__$1,inst_20246);
} else {
if((state_val_20249 === (2))){
var state_20248__$1 = state_20248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20248__$1,(4),ch);
} else {
if((state_val_20249 === (11))){
var inst_20238 = (state_20248[(2)]);
var state_20248__$1 = state_20248;
var statearr_20266_21345 = state_20248__$1;
(statearr_20266_21345[(2)] = inst_20238);

(statearr_20266_21345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20249 === (9))){
var state_20248__$1 = state_20248;
var statearr_20267_21346 = state_20248__$1;
(statearr_20267_21346[(2)] = null);

(statearr_20267_21346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20249 === (5))){
var inst_20233 = cljs.core.async.close_BANG_(out);
var state_20248__$1 = state_20248;
var statearr_20268_21347 = state_20248__$1;
(statearr_20268_21347[(2)] = inst_20233);

(statearr_20268_21347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20249 === (10))){
var inst_20241 = (state_20248[(2)]);
var state_20248__$1 = (function (){var statearr_20277 = state_20248;
(statearr_20277[(8)] = inst_20241);

return statearr_20277;
})();
var statearr_20281_21348 = state_20248__$1;
(statearr_20281_21348[(2)] = null);

(statearr_20281_21348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20249 === (8))){
var inst_20229 = (state_20248[(7)]);
var state_20248__$1 = state_20248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20248__$1,(11),out,inst_20229);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18489__auto__ = null;
var cljs$core$async$state_machine__18489__auto____0 = (function (){
var statearr_20291 = [null,null,null,null,null,null,null,null,null];
(statearr_20291[(0)] = cljs$core$async$state_machine__18489__auto__);

(statearr_20291[(1)] = (1));

return statearr_20291;
});
var cljs$core$async$state_machine__18489__auto____1 = (function (state_20248){
while(true){
var ret_value__18490__auto__ = (function (){try{while(true){
var result__18491__auto__ = switch__18488__auto__(state_20248);
if(cljs.core.keyword_identical_QMARK_(result__18491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18491__auto__;
}
break;
}
}catch (e20293){var ex__18492__auto__ = e20293;
var statearr_20294_21349 = state_20248;
(statearr_20294_21349[(2)] = ex__18492__auto__);


if(cljs.core.seq((state_20248[(4)]))){
var statearr_20295_21350 = state_20248;
(statearr_20295_21350[(1)] = cljs.core.first((state_20248[(4)])));

} else {
throw ex__18492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21351 = state_20248;
state_20248 = G__21351;
continue;
} else {
return ret_value__18490__auto__;
}
break;
}
});
cljs$core$async$state_machine__18489__auto__ = function(state_20248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18489__auto____1.call(this,state_20248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18489__auto____0;
cljs$core$async$state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18489__auto____1;
return cljs$core$async$state_machine__18489__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_20308 = f__18578__auto__();
(statearr_20308[(6)] = c__18577__auto___21337);

return statearr_20308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20319 = arguments.length;
switch (G__20319) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18577__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18488__auto__ = (function (state_20406){
var state_val_20407 = (state_20406[(1)]);
if((state_val_20407 === (7))){
var inst_20402 = (state_20406[(2)]);
var state_20406__$1 = state_20406;
var statearr_20408_21353 = state_20406__$1;
(statearr_20408_21353[(2)] = inst_20402);

(statearr_20408_21353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20407 === (20))){
var inst_20372 = (state_20406[(7)]);
var inst_20383 = (state_20406[(2)]);
var inst_20384 = cljs.core.next(inst_20372);
var inst_20358 = inst_20384;
var inst_20359 = null;
var inst_20360 = (0);
var inst_20361 = (0);
var state_20406__$1 = (function (){var statearr_20409 = state_20406;
(statearr_20409[(8)] = inst_20383);

(statearr_20409[(9)] = inst_20358);

(statearr_20409[(10)] = inst_20359);

(statearr_20409[(11)] = inst_20360);

(statearr_20409[(12)] = inst_20361);

return statearr_20409;
})();
var statearr_20410_21357 = state_20406__$1;
(statearr_20410_21357[(2)] = null);

(statearr_20410_21357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20407 === (1))){
var state_20406__$1 = state_20406;
var statearr_20411_21358 = state_20406__$1;
(statearr_20411_21358[(2)] = null);

(statearr_20411_21358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20407 === (4))){
var inst_20346 = (state_20406[(13)]);
var inst_20346__$1 = (state_20406[(2)]);
var inst_20347 = (inst_20346__$1 == null);
var state_20406__$1 = (function (){var statearr_20412 = state_20406;
(statearr_20412[(13)] = inst_20346__$1);

return statearr_20412;
})();
if(cljs.core.truth_(inst_20347)){
var statearr_20413_21359 = state_20406__$1;
(statearr_20413_21359[(1)] = (5));

} else {
var statearr_20414_21360 = state_20406__$1;
(statearr_20414_21360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20407 === (15))){
var state_20406__$1 = state_20406;
var statearr_20418_21361 = state_20406__$1;
(statearr_20418_21361[(2)] = null);

(statearr_20418_21361[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20407 === (21))){
var state_20406__$1 = state_20406;
var statearr_20419_21363 = state_20406__$1;
(statearr_20419_21363[(2)] = null);

(statearr_20419_21363[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20407 === (13))){
var inst_20361 = (state_20406[(12)]);
var inst_20358 = (state_20406[(9)]);
var inst_20359 = (state_20406[(10)]);
var inst_20360 = (state_20406[(11)]);
var inst_20368 = (state_20406[(2)]);
var inst_20369 = (inst_20361 + (1));
var tmp20415 = inst_20358;
var tmp20416 = inst_20359;
var tmp20417 = inst_20360;
var inst_20358__$1 = tmp20415;
var inst_20359__$1 = tmp20416;
var inst_20360__$1 = tmp20417;
var inst_20361__$1 = inst_20369;
var state_20406__$1 = (function (){var statearr_20420 = state_20406;
(statearr_20420[(14)] = inst_20368);

(statearr_20420[(9)] = inst_20358__$1);

(statearr_20420[(10)] = inst_20359__$1);

(statearr_20420[(11)] = inst_20360__$1);

(statearr_20420[(12)] = inst_20361__$1);

return statearr_20420;
})();
var statearr_20421_21365 = state_20406__$1;
(statearr_20421_21365[(2)] = null);

(statearr_20421_21365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20407 === (22))){
var state_20406__$1 = state_20406;
var statearr_20422_21366 = state_20406__$1;
(statearr_20422_21366[(2)] = null);

(statearr_20422_21366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20407 === (6))){
var inst_20346 = (state_20406[(13)]);
var inst_20356 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20346) : f.call(null,inst_20346));
var inst_20357 = cljs.core.seq(inst_20356);
var inst_20358 = inst_20357;
var inst_20359 = null;
var inst_20360 = (0);
var inst_20361 = (0);
var state_20406__$1 = (function (){var statearr_20424 = state_20406;
(statearr_20424[(9)] = inst_20358);

(statearr_20424[(10)] = inst_20359);

(statearr_20424[(11)] = inst_20360);

(statearr_20424[(12)] = inst_20361);

return statearr_20424;
})();
var statearr_20426_21367 = state_20406__$1;
(statearr_20426_21367[(2)] = null);

(statearr_20426_21367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20407 === (17))){
var inst_20372 = (state_20406[(7)]);
var inst_20376 = cljs.core.chunk_first(inst_20372);
var inst_20377 = cljs.core.chunk_rest(inst_20372);
var inst_20378 = cljs.core.count(inst_20376);
var inst_20358 = inst_20377;
var inst_20359 = inst_20376;
var inst_20360 = inst_20378;
var inst_20361 = (0);
var state_20406__$1 = (function (){var statearr_20427 = state_20406;
(statearr_20427[(9)] = inst_20358);

(statearr_20427[(10)] = inst_20359);

(statearr_20427[(11)] = inst_20360);

(statearr_20427[(12)] = inst_20361);

return statearr_20427;
})();
var statearr_20428_21368 = state_20406__$1;
(statearr_20428_21368[(2)] = null);

(statearr_20428_21368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20407 === (3))){
var inst_20404 = (state_20406[(2)]);
var state_20406__$1 = state_20406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20406__$1,inst_20404);
} else {
if((state_val_20407 === (12))){
var inst_20392 = (state_20406[(2)]);
var state_20406__$1 = state_20406;
var statearr_20429_21377 = state_20406__$1;
(statearr_20429_21377[(2)] = inst_20392);

(statearr_20429_21377[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20407 === (2))){
var state_20406__$1 = state_20406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20406__$1,(4),in$);
} else {
if((state_val_20407 === (23))){
var inst_20400 = (state_20406[(2)]);
var state_20406__$1 = state_20406;
var statearr_20430_21387 = state_20406__$1;
(statearr_20430_21387[(2)] = inst_20400);

(statearr_20430_21387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20407 === (19))){
var inst_20387 = (state_20406[(2)]);
var state_20406__$1 = state_20406;
var statearr_20431_21388 = state_20406__$1;
(statearr_20431_21388[(2)] = inst_20387);

(statearr_20431_21388[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20407 === (11))){
var inst_20358 = (state_20406[(9)]);
var inst_20372 = (state_20406[(7)]);
var inst_20372__$1 = cljs.core.seq(inst_20358);
var state_20406__$1 = (function (){var statearr_20434 = state_20406;
(statearr_20434[(7)] = inst_20372__$1);

return statearr_20434;
})();
if(inst_20372__$1){
var statearr_20435_21411 = state_20406__$1;
(statearr_20435_21411[(1)] = (14));

} else {
var statearr_20436_21412 = state_20406__$1;
(statearr_20436_21412[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20407 === (9))){
var inst_20394 = (state_20406[(2)]);
var inst_20395 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20406__$1 = (function (){var statearr_20437 = state_20406;
(statearr_20437[(15)] = inst_20394);

return statearr_20437;
})();
if(cljs.core.truth_(inst_20395)){
var statearr_20438_21413 = state_20406__$1;
(statearr_20438_21413[(1)] = (21));

} else {
var statearr_20440_21414 = state_20406__$1;
(statearr_20440_21414[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20407 === (5))){
var inst_20349 = cljs.core.async.close_BANG_(out);
var state_20406__$1 = state_20406;
var statearr_20442_21415 = state_20406__$1;
(statearr_20442_21415[(2)] = inst_20349);

(statearr_20442_21415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20407 === (14))){
var inst_20372 = (state_20406[(7)]);
var inst_20374 = cljs.core.chunked_seq_QMARK_(inst_20372);
var state_20406__$1 = state_20406;
if(inst_20374){
var statearr_20445_21417 = state_20406__$1;
(statearr_20445_21417[(1)] = (17));

} else {
var statearr_20446_21422 = state_20406__$1;
(statearr_20446_21422[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20407 === (16))){
var inst_20390 = (state_20406[(2)]);
var state_20406__$1 = state_20406;
var statearr_20447_21426 = state_20406__$1;
(statearr_20447_21426[(2)] = inst_20390);

(statearr_20447_21426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20407 === (10))){
var inst_20359 = (state_20406[(10)]);
var inst_20361 = (state_20406[(12)]);
var inst_20366 = cljs.core._nth(inst_20359,inst_20361);
var state_20406__$1 = state_20406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20406__$1,(13),out,inst_20366);
} else {
if((state_val_20407 === (18))){
var inst_20372 = (state_20406[(7)]);
var inst_20381 = cljs.core.first(inst_20372);
var state_20406__$1 = state_20406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20406__$1,(20),out,inst_20381);
} else {
if((state_val_20407 === (8))){
var inst_20361 = (state_20406[(12)]);
var inst_20360 = (state_20406[(11)]);
var inst_20363 = (inst_20361 < inst_20360);
var inst_20364 = inst_20363;
var state_20406__$1 = state_20406;
if(cljs.core.truth_(inst_20364)){
var statearr_20448_21434 = state_20406__$1;
(statearr_20448_21434[(1)] = (10));

} else {
var statearr_20449_21435 = state_20406__$1;
(statearr_20449_21435[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18489__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18489__auto____0 = (function (){
var statearr_20450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20450[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18489__auto__);

(statearr_20450[(1)] = (1));

return statearr_20450;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18489__auto____1 = (function (state_20406){
while(true){
var ret_value__18490__auto__ = (function (){try{while(true){
var result__18491__auto__ = switch__18488__auto__(state_20406);
if(cljs.core.keyword_identical_QMARK_(result__18491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18491__auto__;
}
break;
}
}catch (e20451){var ex__18492__auto__ = e20451;
var statearr_20452_21442 = state_20406;
(statearr_20452_21442[(2)] = ex__18492__auto__);


if(cljs.core.seq((state_20406[(4)]))){
var statearr_20453_21443 = state_20406;
(statearr_20453_21443[(1)] = cljs.core.first((state_20406[(4)])));

} else {
throw ex__18492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21448 = state_20406;
state_20406 = G__21448;
continue;
} else {
return ret_value__18490__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18489__auto__ = function(state_20406){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18489__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18489__auto____1.call(this,state_20406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18489__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18489__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18489__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_20454 = f__18578__auto__();
(statearr_20454[(6)] = c__18577__auto__);

return statearr_20454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));

return c__18577__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20456 = arguments.length;
switch (G__20456) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__20458 = arguments.length;
switch (G__20458) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__20460 = arguments.length;
switch (G__20460) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18577__auto___21812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18488__auto__ = (function (state_20486){
var state_val_20487 = (state_20486[(1)]);
if((state_val_20487 === (7))){
var inst_20481 = (state_20486[(2)]);
var state_20486__$1 = state_20486;
var statearr_20488_21817 = state_20486__$1;
(statearr_20488_21817[(2)] = inst_20481);

(statearr_20488_21817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (1))){
var inst_20463 = null;
var state_20486__$1 = (function (){var statearr_20489 = state_20486;
(statearr_20489[(7)] = inst_20463);

return statearr_20489;
})();
var statearr_20490_21820 = state_20486__$1;
(statearr_20490_21820[(2)] = null);

(statearr_20490_21820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (4))){
var inst_20466 = (state_20486[(8)]);
var inst_20466__$1 = (state_20486[(2)]);
var inst_20467 = (inst_20466__$1 == null);
var inst_20468 = cljs.core.not(inst_20467);
var state_20486__$1 = (function (){var statearr_20491 = state_20486;
(statearr_20491[(8)] = inst_20466__$1);

return statearr_20491;
})();
if(inst_20468){
var statearr_20492_21828 = state_20486__$1;
(statearr_20492_21828[(1)] = (5));

} else {
var statearr_20493_21829 = state_20486__$1;
(statearr_20493_21829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (6))){
var state_20486__$1 = state_20486;
var statearr_20494_21831 = state_20486__$1;
(statearr_20494_21831[(2)] = null);

(statearr_20494_21831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (3))){
var inst_20483 = (state_20486[(2)]);
var inst_20484 = cljs.core.async.close_BANG_(out);
var state_20486__$1 = (function (){var statearr_20495 = state_20486;
(statearr_20495[(9)] = inst_20483);

return statearr_20495;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20486__$1,inst_20484);
} else {
if((state_val_20487 === (2))){
var state_20486__$1 = state_20486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20486__$1,(4),ch);
} else {
if((state_val_20487 === (11))){
var inst_20466 = (state_20486[(8)]);
var inst_20475 = (state_20486[(2)]);
var inst_20463 = inst_20466;
var state_20486__$1 = (function (){var statearr_20496 = state_20486;
(statearr_20496[(10)] = inst_20475);

(statearr_20496[(7)] = inst_20463);

return statearr_20496;
})();
var statearr_20497_21838 = state_20486__$1;
(statearr_20497_21838[(2)] = null);

(statearr_20497_21838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (9))){
var inst_20466 = (state_20486[(8)]);
var state_20486__$1 = state_20486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20486__$1,(11),out,inst_20466);
} else {
if((state_val_20487 === (5))){
var inst_20466 = (state_20486[(8)]);
var inst_20463 = (state_20486[(7)]);
var inst_20470 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20466,inst_20463);
var state_20486__$1 = state_20486;
if(inst_20470){
var statearr_20500_21845 = state_20486__$1;
(statearr_20500_21845[(1)] = (8));

} else {
var statearr_20504_21846 = state_20486__$1;
(statearr_20504_21846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (10))){
var inst_20478 = (state_20486[(2)]);
var state_20486__$1 = state_20486;
var statearr_20505_21848 = state_20486__$1;
(statearr_20505_21848[(2)] = inst_20478);

(statearr_20505_21848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (8))){
var inst_20463 = (state_20486[(7)]);
var tmp20499 = inst_20463;
var inst_20463__$1 = tmp20499;
var state_20486__$1 = (function (){var statearr_20506 = state_20486;
(statearr_20506[(7)] = inst_20463__$1);

return statearr_20506;
})();
var statearr_20507_21854 = state_20486__$1;
(statearr_20507_21854[(2)] = null);

(statearr_20507_21854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18489__auto__ = null;
var cljs$core$async$state_machine__18489__auto____0 = (function (){
var statearr_20508 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20508[(0)] = cljs$core$async$state_machine__18489__auto__);

(statearr_20508[(1)] = (1));

return statearr_20508;
});
var cljs$core$async$state_machine__18489__auto____1 = (function (state_20486){
while(true){
var ret_value__18490__auto__ = (function (){try{while(true){
var result__18491__auto__ = switch__18488__auto__(state_20486);
if(cljs.core.keyword_identical_QMARK_(result__18491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18491__auto__;
}
break;
}
}catch (e20509){var ex__18492__auto__ = e20509;
var statearr_20510_21855 = state_20486;
(statearr_20510_21855[(2)] = ex__18492__auto__);


if(cljs.core.seq((state_20486[(4)]))){
var statearr_20511_21857 = state_20486;
(statearr_20511_21857[(1)] = cljs.core.first((state_20486[(4)])));

} else {
throw ex__18492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21858 = state_20486;
state_20486 = G__21858;
continue;
} else {
return ret_value__18490__auto__;
}
break;
}
});
cljs$core$async$state_machine__18489__auto__ = function(state_20486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18489__auto____1.call(this,state_20486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18489__auto____0;
cljs$core$async$state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18489__auto____1;
return cljs$core$async$state_machine__18489__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_20512 = f__18578__auto__();
(statearr_20512[(6)] = c__18577__auto___21812);

return statearr_20512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20514 = arguments.length;
switch (G__20514) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18577__auto___21863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18488__auto__ = (function (state_20554){
var state_val_20555 = (state_20554[(1)]);
if((state_val_20555 === (7))){
var inst_20550 = (state_20554[(2)]);
var state_20554__$1 = state_20554;
var statearr_20557_21868 = state_20554__$1;
(statearr_20557_21868[(2)] = inst_20550);

(statearr_20557_21868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20555 === (1))){
var inst_20516 = (new Array(n));
var inst_20517 = inst_20516;
var inst_20518 = (0);
var state_20554__$1 = (function (){var statearr_20558 = state_20554;
(statearr_20558[(7)] = inst_20517);

(statearr_20558[(8)] = inst_20518);

return statearr_20558;
})();
var statearr_20559_21869 = state_20554__$1;
(statearr_20559_21869[(2)] = null);

(statearr_20559_21869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20555 === (4))){
var inst_20521 = (state_20554[(9)]);
var inst_20521__$1 = (state_20554[(2)]);
var inst_20522 = (inst_20521__$1 == null);
var inst_20523 = cljs.core.not(inst_20522);
var state_20554__$1 = (function (){var statearr_20560 = state_20554;
(statearr_20560[(9)] = inst_20521__$1);

return statearr_20560;
})();
if(inst_20523){
var statearr_20561_21873 = state_20554__$1;
(statearr_20561_21873[(1)] = (5));

} else {
var statearr_20562_21874 = state_20554__$1;
(statearr_20562_21874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20555 === (15))){
var inst_20544 = (state_20554[(2)]);
var state_20554__$1 = state_20554;
var statearr_20564_21875 = state_20554__$1;
(statearr_20564_21875[(2)] = inst_20544);

(statearr_20564_21875[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20555 === (13))){
var state_20554__$1 = state_20554;
var statearr_20566_21876 = state_20554__$1;
(statearr_20566_21876[(2)] = null);

(statearr_20566_21876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20555 === (6))){
var inst_20518 = (state_20554[(8)]);
var inst_20540 = (inst_20518 > (0));
var state_20554__$1 = state_20554;
if(cljs.core.truth_(inst_20540)){
var statearr_20567_21877 = state_20554__$1;
(statearr_20567_21877[(1)] = (12));

} else {
var statearr_20568_21878 = state_20554__$1;
(statearr_20568_21878[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20555 === (3))){
var inst_20552 = (state_20554[(2)]);
var state_20554__$1 = state_20554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20554__$1,inst_20552);
} else {
if((state_val_20555 === (12))){
var inst_20517 = (state_20554[(7)]);
var inst_20542 = cljs.core.vec(inst_20517);
var state_20554__$1 = state_20554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20554__$1,(15),out,inst_20542);
} else {
if((state_val_20555 === (2))){
var state_20554__$1 = state_20554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20554__$1,(4),ch);
} else {
if((state_val_20555 === (11))){
var inst_20534 = (state_20554[(2)]);
var inst_20535 = (new Array(n));
var inst_20517 = inst_20535;
var inst_20518 = (0);
var state_20554__$1 = (function (){var statearr_20569 = state_20554;
(statearr_20569[(10)] = inst_20534);

(statearr_20569[(7)] = inst_20517);

(statearr_20569[(8)] = inst_20518);

return statearr_20569;
})();
var statearr_20570_21882 = state_20554__$1;
(statearr_20570_21882[(2)] = null);

(statearr_20570_21882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20555 === (9))){
var inst_20517 = (state_20554[(7)]);
var inst_20532 = cljs.core.vec(inst_20517);
var state_20554__$1 = state_20554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20554__$1,(11),out,inst_20532);
} else {
if((state_val_20555 === (5))){
var inst_20517 = (state_20554[(7)]);
var inst_20518 = (state_20554[(8)]);
var inst_20521 = (state_20554[(9)]);
var inst_20527 = (state_20554[(11)]);
var inst_20525 = (inst_20517[inst_20518] = inst_20521);
var inst_20527__$1 = (inst_20518 + (1));
var inst_20528 = (inst_20527__$1 < n);
var state_20554__$1 = (function (){var statearr_20571 = state_20554;
(statearr_20571[(12)] = inst_20525);

(statearr_20571[(11)] = inst_20527__$1);

return statearr_20571;
})();
if(cljs.core.truth_(inst_20528)){
var statearr_20572_21883 = state_20554__$1;
(statearr_20572_21883[(1)] = (8));

} else {
var statearr_20573_21884 = state_20554__$1;
(statearr_20573_21884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20555 === (14))){
var inst_20547 = (state_20554[(2)]);
var inst_20548 = cljs.core.async.close_BANG_(out);
var state_20554__$1 = (function (){var statearr_20578 = state_20554;
(statearr_20578[(13)] = inst_20547);

return statearr_20578;
})();
var statearr_20579_21885 = state_20554__$1;
(statearr_20579_21885[(2)] = inst_20548);

(statearr_20579_21885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20555 === (10))){
var inst_20538 = (state_20554[(2)]);
var state_20554__$1 = state_20554;
var statearr_20580_21886 = state_20554__$1;
(statearr_20580_21886[(2)] = inst_20538);

(statearr_20580_21886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20555 === (8))){
var inst_20517 = (state_20554[(7)]);
var inst_20527 = (state_20554[(11)]);
var tmp20574 = inst_20517;
var inst_20517__$1 = tmp20574;
var inst_20518 = inst_20527;
var state_20554__$1 = (function (){var statearr_20581 = state_20554;
(statearr_20581[(7)] = inst_20517__$1);

(statearr_20581[(8)] = inst_20518);

return statearr_20581;
})();
var statearr_20589_21887 = state_20554__$1;
(statearr_20589_21887[(2)] = null);

(statearr_20589_21887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18489__auto__ = null;
var cljs$core$async$state_machine__18489__auto____0 = (function (){
var statearr_20596 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20596[(0)] = cljs$core$async$state_machine__18489__auto__);

(statearr_20596[(1)] = (1));

return statearr_20596;
});
var cljs$core$async$state_machine__18489__auto____1 = (function (state_20554){
while(true){
var ret_value__18490__auto__ = (function (){try{while(true){
var result__18491__auto__ = switch__18488__auto__(state_20554);
if(cljs.core.keyword_identical_QMARK_(result__18491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18491__auto__;
}
break;
}
}catch (e20597){var ex__18492__auto__ = e20597;
var statearr_20598_21888 = state_20554;
(statearr_20598_21888[(2)] = ex__18492__auto__);


if(cljs.core.seq((state_20554[(4)]))){
var statearr_20599_21889 = state_20554;
(statearr_20599_21889[(1)] = cljs.core.first((state_20554[(4)])));

} else {
throw ex__18492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21890 = state_20554;
state_20554 = G__21890;
continue;
} else {
return ret_value__18490__auto__;
}
break;
}
});
cljs$core$async$state_machine__18489__auto__ = function(state_20554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18489__auto____1.call(this,state_20554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18489__auto____0;
cljs$core$async$state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18489__auto____1;
return cljs$core$async$state_machine__18489__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_20606 = f__18578__auto__();
(statearr_20606[(6)] = c__18577__auto___21863);

return statearr_20606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20608 = arguments.length;
switch (G__20608) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18577__auto___21892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18488__auto__ = (function (state_20666){
var state_val_20667 = (state_20666[(1)]);
if((state_val_20667 === (7))){
var inst_20662 = (state_20666[(2)]);
var state_20666__$1 = state_20666;
var statearr_20672_21893 = state_20666__$1;
(statearr_20672_21893[(2)] = inst_20662);

(statearr_20672_21893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20667 === (1))){
var inst_20622 = [];
var inst_20623 = inst_20622;
var inst_20624 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20666__$1 = (function (){var statearr_20673 = state_20666;
(statearr_20673[(7)] = inst_20623);

(statearr_20673[(8)] = inst_20624);

return statearr_20673;
})();
var statearr_20674_21894 = state_20666__$1;
(statearr_20674_21894[(2)] = null);

(statearr_20674_21894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20667 === (4))){
var inst_20627 = (state_20666[(9)]);
var inst_20627__$1 = (state_20666[(2)]);
var inst_20628 = (inst_20627__$1 == null);
var inst_20629 = cljs.core.not(inst_20628);
var state_20666__$1 = (function (){var statearr_20675 = state_20666;
(statearr_20675[(9)] = inst_20627__$1);

return statearr_20675;
})();
if(inst_20629){
var statearr_20676_21897 = state_20666__$1;
(statearr_20676_21897[(1)] = (5));

} else {
var statearr_20677_21898 = state_20666__$1;
(statearr_20677_21898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20667 === (15))){
var inst_20623 = (state_20666[(7)]);
var inst_20654 = cljs.core.vec(inst_20623);
var state_20666__$1 = state_20666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20666__$1,(18),out,inst_20654);
} else {
if((state_val_20667 === (13))){
var inst_20649 = (state_20666[(2)]);
var state_20666__$1 = state_20666;
var statearr_20678_21899 = state_20666__$1;
(statearr_20678_21899[(2)] = inst_20649);

(statearr_20678_21899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20667 === (6))){
var inst_20623 = (state_20666[(7)]);
var inst_20651 = inst_20623.length;
var inst_20652 = (inst_20651 > (0));
var state_20666__$1 = state_20666;
if(cljs.core.truth_(inst_20652)){
var statearr_20679_21900 = state_20666__$1;
(statearr_20679_21900[(1)] = (15));

} else {
var statearr_20680_21901 = state_20666__$1;
(statearr_20680_21901[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20667 === (17))){
var inst_20659 = (state_20666[(2)]);
var inst_20660 = cljs.core.async.close_BANG_(out);
var state_20666__$1 = (function (){var statearr_20681 = state_20666;
(statearr_20681[(10)] = inst_20659);

return statearr_20681;
})();
var statearr_20682_21903 = state_20666__$1;
(statearr_20682_21903[(2)] = inst_20660);

(statearr_20682_21903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20667 === (3))){
var inst_20664 = (state_20666[(2)]);
var state_20666__$1 = state_20666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20666__$1,inst_20664);
} else {
if((state_val_20667 === (12))){
var inst_20623 = (state_20666[(7)]);
var inst_20642 = cljs.core.vec(inst_20623);
var state_20666__$1 = state_20666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20666__$1,(14),out,inst_20642);
} else {
if((state_val_20667 === (2))){
var state_20666__$1 = state_20666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20666__$1,(4),ch);
} else {
if((state_val_20667 === (11))){
var inst_20623 = (state_20666[(7)]);
var inst_20627 = (state_20666[(9)]);
var inst_20631 = (state_20666[(11)]);
var inst_20639 = inst_20623.push(inst_20627);
var tmp20687 = inst_20623;
var inst_20623__$1 = tmp20687;
var inst_20624 = inst_20631;
var state_20666__$1 = (function (){var statearr_20690 = state_20666;
(statearr_20690[(12)] = inst_20639);

(statearr_20690[(7)] = inst_20623__$1);

(statearr_20690[(8)] = inst_20624);

return statearr_20690;
})();
var statearr_20691_21906 = state_20666__$1;
(statearr_20691_21906[(2)] = null);

(statearr_20691_21906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20667 === (9))){
var inst_20624 = (state_20666[(8)]);
var inst_20635 = cljs.core.keyword_identical_QMARK_(inst_20624,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_20666__$1 = state_20666;
var statearr_20693_21907 = state_20666__$1;
(statearr_20693_21907[(2)] = inst_20635);

(statearr_20693_21907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20667 === (5))){
var inst_20627 = (state_20666[(9)]);
var inst_20631 = (state_20666[(11)]);
var inst_20624 = (state_20666[(8)]);
var inst_20632 = (state_20666[(13)]);
var inst_20631__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20627) : f.call(null,inst_20627));
var inst_20632__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20631__$1,inst_20624);
var state_20666__$1 = (function (){var statearr_20695 = state_20666;
(statearr_20695[(11)] = inst_20631__$1);

(statearr_20695[(13)] = inst_20632__$1);

return statearr_20695;
})();
if(inst_20632__$1){
var statearr_20696_21909 = state_20666__$1;
(statearr_20696_21909[(1)] = (8));

} else {
var statearr_20697_21911 = state_20666__$1;
(statearr_20697_21911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20667 === (14))){
var inst_20627 = (state_20666[(9)]);
var inst_20631 = (state_20666[(11)]);
var inst_20644 = (state_20666[(2)]);
var inst_20645 = [];
var inst_20646 = inst_20645.push(inst_20627);
var inst_20623 = inst_20645;
var inst_20624 = inst_20631;
var state_20666__$1 = (function (){var statearr_20698 = state_20666;
(statearr_20698[(14)] = inst_20644);

(statearr_20698[(15)] = inst_20646);

(statearr_20698[(7)] = inst_20623);

(statearr_20698[(8)] = inst_20624);

return statearr_20698;
})();
var statearr_20699_21912 = state_20666__$1;
(statearr_20699_21912[(2)] = null);

(statearr_20699_21912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20667 === (16))){
var state_20666__$1 = state_20666;
var statearr_20700_21913 = state_20666__$1;
(statearr_20700_21913[(2)] = null);

(statearr_20700_21913[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20667 === (10))){
var inst_20637 = (state_20666[(2)]);
var state_20666__$1 = state_20666;
if(cljs.core.truth_(inst_20637)){
var statearr_20701_21914 = state_20666__$1;
(statearr_20701_21914[(1)] = (11));

} else {
var statearr_20702_21915 = state_20666__$1;
(statearr_20702_21915[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20667 === (18))){
var inst_20656 = (state_20666[(2)]);
var state_20666__$1 = state_20666;
var statearr_20703_21919 = state_20666__$1;
(statearr_20703_21919[(2)] = inst_20656);

(statearr_20703_21919[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20667 === (8))){
var inst_20632 = (state_20666[(13)]);
var state_20666__$1 = state_20666;
var statearr_20704_21920 = state_20666__$1;
(statearr_20704_21920[(2)] = inst_20632);

(statearr_20704_21920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18489__auto__ = null;
var cljs$core$async$state_machine__18489__auto____0 = (function (){
var statearr_20705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20705[(0)] = cljs$core$async$state_machine__18489__auto__);

(statearr_20705[(1)] = (1));

return statearr_20705;
});
var cljs$core$async$state_machine__18489__auto____1 = (function (state_20666){
while(true){
var ret_value__18490__auto__ = (function (){try{while(true){
var result__18491__auto__ = switch__18488__auto__(state_20666);
if(cljs.core.keyword_identical_QMARK_(result__18491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18491__auto__;
}
break;
}
}catch (e20706){var ex__18492__auto__ = e20706;
var statearr_20707_21921 = state_20666;
(statearr_20707_21921[(2)] = ex__18492__auto__);


if(cljs.core.seq((state_20666[(4)]))){
var statearr_20708_21922 = state_20666;
(statearr_20708_21922[(1)] = cljs.core.first((state_20666[(4)])));

} else {
throw ex__18492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21923 = state_20666;
state_20666 = G__21923;
continue;
} else {
return ret_value__18490__auto__;
}
break;
}
});
cljs$core$async$state_machine__18489__auto__ = function(state_20666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18489__auto____1.call(this,state_20666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18489__auto____0;
cljs$core$async$state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18489__auto____1;
return cljs$core$async$state_machine__18489__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_20711 = f__18578__auto__();
(statearr_20711[(6)] = c__18577__auto___21892);

return statearr_20711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
