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
cljs.core.async.t_cljs$core$async18669 = (function (f,blockable,meta18670){
this.f = f;
this.blockable = blockable;
this.meta18670 = meta18670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18671,meta18670__$1){
var self__ = this;
var _18671__$1 = this;
return (new cljs.core.async.t_cljs$core$async18669(self__.f,self__.blockable,meta18670__$1));
}));

(cljs.core.async.t_cljs$core$async18669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18671){
var self__ = this;
var _18671__$1 = this;
return self__.meta18670;
}));

(cljs.core.async.t_cljs$core$async18669.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18669.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18669.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18669.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18669.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18670","meta18670",-573229432,null)], null);
}));

(cljs.core.async.t_cljs$core$async18669.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18669.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18669");

(cljs.core.async.t_cljs$core$async18669.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async18669");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18669.
 */
cljs.core.async.__GT_t_cljs$core$async18669 = (function cljs$core$async$__GT_t_cljs$core$async18669(f,blockable,meta18670){
return (new cljs.core.async.t_cljs$core$async18669(f,blockable,meta18670));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18668 = arguments.length;
switch (G__18668) {
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
return (new cljs.core.async.t_cljs$core$async18669(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18735 = arguments.length;
switch (G__18735) {
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
var G__18772 = arguments.length;
switch (G__18772) {
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
var G__18801 = arguments.length;
switch (G__18801) {
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
var val_20894 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20894) : fn1.call(null,val_20894));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20894) : fn1.call(null,val_20894));
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
var G__18829 = arguments.length;
switch (G__18829) {
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
var n__5616__auto___20898 = n;
var x_20899 = (0);
while(true){
if((x_20899 < n__5616__auto___20898)){
(a[x_20899] = x_20899);

var G__20900 = (x_20899 + (1));
x_20899 = G__20900;
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
cljs.core.async.t_cljs$core$async18851 = (function (flag,meta18852){
this.flag = flag;
this.meta18852 = meta18852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18853,meta18852__$1){
var self__ = this;
var _18853__$1 = this;
return (new cljs.core.async.t_cljs$core$async18851(self__.flag,meta18852__$1));
}));

(cljs.core.async.t_cljs$core$async18851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18853){
var self__ = this;
var _18853__$1 = this;
return self__.meta18852;
}));

(cljs.core.async.t_cljs$core$async18851.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18851.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18851.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18851.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18851.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18852","meta18852",79220734,null)], null);
}));

(cljs.core.async.t_cljs$core$async18851.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18851.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18851");

(cljs.core.async.t_cljs$core$async18851.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async18851");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18851.
 */
cljs.core.async.__GT_t_cljs$core$async18851 = (function cljs$core$async$__GT_t_cljs$core$async18851(flag,meta18852){
return (new cljs.core.async.t_cljs$core$async18851(flag,meta18852));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async18851(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18880 = (function (flag,cb,meta18881){
this.flag = flag;
this.cb = cb;
this.meta18881 = meta18881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18882,meta18881__$1){
var self__ = this;
var _18882__$1 = this;
return (new cljs.core.async.t_cljs$core$async18880(self__.flag,self__.cb,meta18881__$1));
}));

(cljs.core.async.t_cljs$core$async18880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18882){
var self__ = this;
var _18882__$1 = this;
return self__.meta18881;
}));

(cljs.core.async.t_cljs$core$async18880.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18880.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18880.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18880.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18880.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18881","meta18881",8063785,null)], null);
}));

(cljs.core.async.t_cljs$core$async18880.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18880.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18880");

(cljs.core.async.t_cljs$core$async18880.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async18880");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18880.
 */
cljs.core.async.__GT_t_cljs$core$async18880 = (function cljs$core$async$__GT_t_cljs$core$async18880(flag,cb,meta18881){
return (new cljs.core.async.t_cljs$core$async18880(flag,cb,meta18881));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async18880(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_20901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_20901)){
if((!(((port_20901.cljs$core$IFn$_invoke$arity$1 ? port_20901.cljs$core$IFn$_invoke$arity$1((1)) : port_20901.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__20902 = (i + (1));
i = G__20902;
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
return (function (p1__18904_SHARP_){
var G__18906 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18904_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18906) : fret.call(null,G__18906));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__18905_SHARP_){
var G__18907 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18905_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18907) : fret.call(null,G__18907));
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
var G__20911 = (i + (1));
i = G__20911;
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
var len__5749__auto___20912 = arguments.length;
var i__5750__auto___20913 = (0);
while(true){
if((i__5750__auto___20913 < len__5749__auto___20912)){
args__5755__auto__.push((arguments[i__5750__auto___20913]));

var G__20923 = (i__5750__auto___20913 + (1));
i__5750__auto___20913 = G__20923;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18912){
var map__18913 = p__18912;
var map__18913__$1 = cljs.core.__destructure_map(map__18913);
var opts = map__18913__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18909){
var G__18910 = cljs.core.first(seq18909);
var seq18909__$1 = cljs.core.next(seq18909);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18910,seq18909__$1);
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
var G__18917 = arguments.length;
switch (G__18917) {
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
var c__18605__auto___20929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18606__auto__ = (function (){var switch__18343__auto__ = (function (state_18944){
var state_val_18945 = (state_18944[(1)]);
if((state_val_18945 === (7))){
var inst_18940 = (state_18944[(2)]);
var state_18944__$1 = state_18944;
var statearr_18948_20930 = state_18944__$1;
(statearr_18948_20930[(2)] = inst_18940);

(statearr_18948_20930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18945 === (1))){
var state_18944__$1 = state_18944;
var statearr_18949_20931 = state_18944__$1;
(statearr_18949_20931[(2)] = null);

(statearr_18949_20931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18945 === (4))){
var inst_18921 = (state_18944[(7)]);
var inst_18921__$1 = (state_18944[(2)]);
var inst_18922 = (inst_18921__$1 == null);
var state_18944__$1 = (function (){var statearr_18950 = state_18944;
(statearr_18950[(7)] = inst_18921__$1);

return statearr_18950;
})();
if(cljs.core.truth_(inst_18922)){
var statearr_18951_20932 = state_18944__$1;
(statearr_18951_20932[(1)] = (5));

} else {
var statearr_18952_20933 = state_18944__$1;
(statearr_18952_20933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18945 === (13))){
var state_18944__$1 = state_18944;
var statearr_18953_20934 = state_18944__$1;
(statearr_18953_20934[(2)] = null);

(statearr_18953_20934[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18945 === (6))){
var inst_18921 = (state_18944[(7)]);
var state_18944__$1 = state_18944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18944__$1,(11),to,inst_18921);
} else {
if((state_val_18945 === (3))){
var inst_18942 = (state_18944[(2)]);
var state_18944__$1 = state_18944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18944__$1,inst_18942);
} else {
if((state_val_18945 === (12))){
var state_18944__$1 = state_18944;
var statearr_18954_20935 = state_18944__$1;
(statearr_18954_20935[(2)] = null);

(statearr_18954_20935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18945 === (2))){
var state_18944__$1 = state_18944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18944__$1,(4),from);
} else {
if((state_val_18945 === (11))){
var inst_18933 = (state_18944[(2)]);
var state_18944__$1 = state_18944;
if(cljs.core.truth_(inst_18933)){
var statearr_18955_20937 = state_18944__$1;
(statearr_18955_20937[(1)] = (12));

} else {
var statearr_18956_20938 = state_18944__$1;
(statearr_18956_20938[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18945 === (9))){
var state_18944__$1 = state_18944;
var statearr_18957_20945 = state_18944__$1;
(statearr_18957_20945[(2)] = null);

(statearr_18957_20945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18945 === (5))){
var state_18944__$1 = state_18944;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18958_20946 = state_18944__$1;
(statearr_18958_20946[(1)] = (8));

} else {
var statearr_18959_20947 = state_18944__$1;
(statearr_18959_20947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18945 === (14))){
var inst_18938 = (state_18944[(2)]);
var state_18944__$1 = state_18944;
var statearr_18960_20948 = state_18944__$1;
(statearr_18960_20948[(2)] = inst_18938);

(statearr_18960_20948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18945 === (10))){
var inst_18930 = (state_18944[(2)]);
var state_18944__$1 = state_18944;
var statearr_18961_20949 = state_18944__$1;
(statearr_18961_20949[(2)] = inst_18930);

(statearr_18961_20949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18945 === (8))){
var inst_18926 = cljs.core.async.close_BANG_(to);
var state_18944__$1 = state_18944;
var statearr_18962_20950 = state_18944__$1;
(statearr_18962_20950[(2)] = inst_18926);

(statearr_18962_20950[(1)] = (10));


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
var cljs$core$async$state_machine__18344__auto__ = null;
var cljs$core$async$state_machine__18344__auto____0 = (function (){
var statearr_18963 = [null,null,null,null,null,null,null,null];
(statearr_18963[(0)] = cljs$core$async$state_machine__18344__auto__);

(statearr_18963[(1)] = (1));

return statearr_18963;
});
var cljs$core$async$state_machine__18344__auto____1 = (function (state_18944){
while(true){
var ret_value__18345__auto__ = (function (){try{while(true){
var result__18346__auto__ = switch__18343__auto__(state_18944);
if(cljs.core.keyword_identical_QMARK_(result__18346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18346__auto__;
}
break;
}
}catch (e18964){var ex__18347__auto__ = e18964;
var statearr_18965_20951 = state_18944;
(statearr_18965_20951[(2)] = ex__18347__auto__);


if(cljs.core.seq((state_18944[(4)]))){
var statearr_18966_20952 = state_18944;
(statearr_18966_20952[(1)] = cljs.core.first((state_18944[(4)])));

} else {
throw ex__18347__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20953 = state_18944;
state_18944 = G__20953;
continue;
} else {
return ret_value__18345__auto__;
}
break;
}
});
cljs$core$async$state_machine__18344__auto__ = function(state_18944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18344__auto____1.call(this,state_18944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18344__auto____0;
cljs$core$async$state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18344__auto____1;
return cljs$core$async$state_machine__18344__auto__;
})()
})();
var state__18607__auto__ = (function (){var statearr_18967 = f__18606__auto__();
(statearr_18967[(6)] = c__18605__auto___20929);

return statearr_18967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18607__auto__);
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
var process__$1 = (function (p__18968){
var vec__18969 = p__18968;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18969,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18969,(1),null);
var job = vec__18969;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__18605__auto___20955 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18606__auto__ = (function (){var switch__18343__auto__ = (function (state_18976){
var state_val_18977 = (state_18976[(1)]);
if((state_val_18977 === (1))){
var state_18976__$1 = state_18976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18976__$1,(2),res,v);
} else {
if((state_val_18977 === (2))){
var inst_18973 = (state_18976[(2)]);
var inst_18974 = cljs.core.async.close_BANG_(res);
var state_18976__$1 = (function (){var statearr_18978 = state_18976;
(statearr_18978[(7)] = inst_18973);

return statearr_18978;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18976__$1,inst_18974);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____0 = (function (){
var statearr_18979 = [null,null,null,null,null,null,null,null];
(statearr_18979[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__);

(statearr_18979[(1)] = (1));

return statearr_18979;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____1 = (function (state_18976){
while(true){
var ret_value__18345__auto__ = (function (){try{while(true){
var result__18346__auto__ = switch__18343__auto__(state_18976);
if(cljs.core.keyword_identical_QMARK_(result__18346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18346__auto__;
}
break;
}
}catch (e18980){var ex__18347__auto__ = e18980;
var statearr_18981_20956 = state_18976;
(statearr_18981_20956[(2)] = ex__18347__auto__);


if(cljs.core.seq((state_18976[(4)]))){
var statearr_18982_20959 = state_18976;
(statearr_18982_20959[(1)] = cljs.core.first((state_18976[(4)])));

} else {
throw ex__18347__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20960 = state_18976;
state_18976 = G__20960;
continue;
} else {
return ret_value__18345__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__ = function(state_18976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____1.call(this,state_18976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__;
})()
})();
var state__18607__auto__ = (function (){var statearr_18983 = f__18606__auto__();
(statearr_18983[(6)] = c__18605__auto___20955);

return statearr_18983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18607__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__18984){
var vec__18985 = p__18984;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18985,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18985,(1),null);
var job = vec__18985;
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
var n__5616__auto___20964 = n;
var __20965 = (0);
while(true){
if((__20965 < n__5616__auto___20964)){
var G__18988_20968 = type;
var G__18988_20969__$1 = (((G__18988_20968 instanceof cljs.core.Keyword))?G__18988_20968.fqn:null);
switch (G__18988_20969__$1) {
case "compute":
var c__18605__auto___20972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20965,c__18605__auto___20972,G__18988_20968,G__18988_20969__$1,n__5616__auto___20964,jobs,results,process__$1,async){
return (function (){
var f__18606__auto__ = (function (){var switch__18343__auto__ = ((function (__20965,c__18605__auto___20972,G__18988_20968,G__18988_20969__$1,n__5616__auto___20964,jobs,results,process__$1,async){
return (function (state_19001){
var state_val_19002 = (state_19001[(1)]);
if((state_val_19002 === (1))){
var state_19001__$1 = state_19001;
var statearr_19003_20973 = state_19001__$1;
(statearr_19003_20973[(2)] = null);

(statearr_19003_20973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (2))){
var state_19001__$1 = state_19001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19001__$1,(4),jobs);
} else {
if((state_val_19002 === (3))){
var inst_18999 = (state_19001[(2)]);
var state_19001__$1 = state_19001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19001__$1,inst_18999);
} else {
if((state_val_19002 === (4))){
var inst_18991 = (state_19001[(2)]);
var inst_18992 = process__$1(inst_18991);
var state_19001__$1 = state_19001;
if(cljs.core.truth_(inst_18992)){
var statearr_19004_20978 = state_19001__$1;
(statearr_19004_20978[(1)] = (5));

} else {
var statearr_19005_20979 = state_19001__$1;
(statearr_19005_20979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (5))){
var state_19001__$1 = state_19001;
var statearr_19007_20980 = state_19001__$1;
(statearr_19007_20980[(2)] = null);

(statearr_19007_20980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (6))){
var state_19001__$1 = state_19001;
var statearr_19008_20981 = state_19001__$1;
(statearr_19008_20981[(2)] = null);

(statearr_19008_20981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (7))){
var inst_18997 = (state_19001[(2)]);
var state_19001__$1 = state_19001;
var statearr_19009_20982 = state_19001__$1;
(statearr_19009_20982[(2)] = inst_18997);

(statearr_19009_20982[(1)] = (3));


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
});})(__20965,c__18605__auto___20972,G__18988_20968,G__18988_20969__$1,n__5616__auto___20964,jobs,results,process__$1,async))
;
return ((function (__20965,switch__18343__auto__,c__18605__auto___20972,G__18988_20968,G__18988_20969__$1,n__5616__auto___20964,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____0 = (function (){
var statearr_19011 = [null,null,null,null,null,null,null];
(statearr_19011[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__);

(statearr_19011[(1)] = (1));

return statearr_19011;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____1 = (function (state_19001){
while(true){
var ret_value__18345__auto__ = (function (){try{while(true){
var result__18346__auto__ = switch__18343__auto__(state_19001);
if(cljs.core.keyword_identical_QMARK_(result__18346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18346__auto__;
}
break;
}
}catch (e19012){var ex__18347__auto__ = e19012;
var statearr_19013_20983 = state_19001;
(statearr_19013_20983[(2)] = ex__18347__auto__);


if(cljs.core.seq((state_19001[(4)]))){
var statearr_19014_20984 = state_19001;
(statearr_19014_20984[(1)] = cljs.core.first((state_19001[(4)])));

} else {
throw ex__18347__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20985 = state_19001;
state_19001 = G__20985;
continue;
} else {
return ret_value__18345__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__ = function(state_19001){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____1.call(this,state_19001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__;
})()
;})(__20965,switch__18343__auto__,c__18605__auto___20972,G__18988_20968,G__18988_20969__$1,n__5616__auto___20964,jobs,results,process__$1,async))
})();
var state__18607__auto__ = (function (){var statearr_19015 = f__18606__auto__();
(statearr_19015[(6)] = c__18605__auto___20972);

return statearr_19015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18607__auto__);
});})(__20965,c__18605__auto___20972,G__18988_20968,G__18988_20969__$1,n__5616__auto___20964,jobs,results,process__$1,async))
);


break;
case "async":
var c__18605__auto___20987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20965,c__18605__auto___20987,G__18988_20968,G__18988_20969__$1,n__5616__auto___20964,jobs,results,process__$1,async){
return (function (){
var f__18606__auto__ = (function (){var switch__18343__auto__ = ((function (__20965,c__18605__auto___20987,G__18988_20968,G__18988_20969__$1,n__5616__auto___20964,jobs,results,process__$1,async){
return (function (state_19028){
var state_val_19029 = (state_19028[(1)]);
if((state_val_19029 === (1))){
var state_19028__$1 = state_19028;
var statearr_19031_20988 = state_19028__$1;
(statearr_19031_20988[(2)] = null);

(statearr_19031_20988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19029 === (2))){
var state_19028__$1 = state_19028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19028__$1,(4),jobs);
} else {
if((state_val_19029 === (3))){
var inst_19026 = (state_19028[(2)]);
var state_19028__$1 = state_19028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19028__$1,inst_19026);
} else {
if((state_val_19029 === (4))){
var inst_19018 = (state_19028[(2)]);
var inst_19019 = async(inst_19018);
var state_19028__$1 = state_19028;
if(cljs.core.truth_(inst_19019)){
var statearr_19032_20996 = state_19028__$1;
(statearr_19032_20996[(1)] = (5));

} else {
var statearr_19033_20997 = state_19028__$1;
(statearr_19033_20997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19029 === (5))){
var state_19028__$1 = state_19028;
var statearr_19034_20998 = state_19028__$1;
(statearr_19034_20998[(2)] = null);

(statearr_19034_20998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19029 === (6))){
var state_19028__$1 = state_19028;
var statearr_19035_20999 = state_19028__$1;
(statearr_19035_20999[(2)] = null);

(statearr_19035_20999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19029 === (7))){
var inst_19024 = (state_19028[(2)]);
var state_19028__$1 = state_19028;
var statearr_19036_21000 = state_19028__$1;
(statearr_19036_21000[(2)] = inst_19024);

(statearr_19036_21000[(1)] = (3));


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
});})(__20965,c__18605__auto___20987,G__18988_20968,G__18988_20969__$1,n__5616__auto___20964,jobs,results,process__$1,async))
;
return ((function (__20965,switch__18343__auto__,c__18605__auto___20987,G__18988_20968,G__18988_20969__$1,n__5616__auto___20964,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____0 = (function (){
var statearr_19038 = [null,null,null,null,null,null,null];
(statearr_19038[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__);

(statearr_19038[(1)] = (1));

return statearr_19038;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____1 = (function (state_19028){
while(true){
var ret_value__18345__auto__ = (function (){try{while(true){
var result__18346__auto__ = switch__18343__auto__(state_19028);
if(cljs.core.keyword_identical_QMARK_(result__18346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18346__auto__;
}
break;
}
}catch (e19039){var ex__18347__auto__ = e19039;
var statearr_19040_21002 = state_19028;
(statearr_19040_21002[(2)] = ex__18347__auto__);


if(cljs.core.seq((state_19028[(4)]))){
var statearr_19041_21003 = state_19028;
(statearr_19041_21003[(1)] = cljs.core.first((state_19028[(4)])));

} else {
throw ex__18347__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21004 = state_19028;
state_19028 = G__21004;
continue;
} else {
return ret_value__18345__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__ = function(state_19028){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____1.call(this,state_19028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__;
})()
;})(__20965,switch__18343__auto__,c__18605__auto___20987,G__18988_20968,G__18988_20969__$1,n__5616__auto___20964,jobs,results,process__$1,async))
})();
var state__18607__auto__ = (function (){var statearr_19042 = f__18606__auto__();
(statearr_19042[(6)] = c__18605__auto___20987);

return statearr_19042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18607__auto__);
});})(__20965,c__18605__auto___20987,G__18988_20968,G__18988_20969__$1,n__5616__auto___20964,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18988_20969__$1)].join('')));

}

var G__21007 = (__20965 + (1));
__20965 = G__21007;
continue;
} else {
}
break;
}

var c__18605__auto___21008 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18606__auto__ = (function (){var switch__18343__auto__ = (function (state_19067){
var state_val_19068 = (state_19067[(1)]);
if((state_val_19068 === (7))){
var inst_19062 = (state_19067[(2)]);
var state_19067__$1 = state_19067;
var statearr_19071_21011 = state_19067__$1;
(statearr_19071_21011[(2)] = inst_19062);

(statearr_19071_21011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19068 === (1))){
var state_19067__$1 = state_19067;
var statearr_19072_21012 = state_19067__$1;
(statearr_19072_21012[(2)] = null);

(statearr_19072_21012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19068 === (4))){
var inst_19046 = (state_19067[(7)]);
var inst_19046__$1 = (state_19067[(2)]);
var inst_19047 = (inst_19046__$1 == null);
var state_19067__$1 = (function (){var statearr_19073 = state_19067;
(statearr_19073[(7)] = inst_19046__$1);

return statearr_19073;
})();
if(cljs.core.truth_(inst_19047)){
var statearr_19074_21013 = state_19067__$1;
(statearr_19074_21013[(1)] = (5));

} else {
var statearr_19076_21014 = state_19067__$1;
(statearr_19076_21014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19068 === (6))){
var inst_19046 = (state_19067[(7)]);
var inst_19051 = (state_19067[(8)]);
var inst_19051__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_19053 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19054 = [inst_19046,inst_19051__$1];
var inst_19055 = (new cljs.core.PersistentVector(null,2,(5),inst_19053,inst_19054,null));
var state_19067__$1 = (function (){var statearr_19077 = state_19067;
(statearr_19077[(8)] = inst_19051__$1);

return statearr_19077;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19067__$1,(8),jobs,inst_19055);
} else {
if((state_val_19068 === (3))){
var inst_19065 = (state_19067[(2)]);
var state_19067__$1 = state_19067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19067__$1,inst_19065);
} else {
if((state_val_19068 === (2))){
var state_19067__$1 = state_19067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19067__$1,(4),from);
} else {
if((state_val_19068 === (9))){
var inst_19059 = (state_19067[(2)]);
var state_19067__$1 = (function (){var statearr_19078 = state_19067;
(statearr_19078[(9)] = inst_19059);

return statearr_19078;
})();
var statearr_19079_21017 = state_19067__$1;
(statearr_19079_21017[(2)] = null);

(statearr_19079_21017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19068 === (5))){
var inst_19049 = cljs.core.async.close_BANG_(jobs);
var state_19067__$1 = state_19067;
var statearr_19080_21018 = state_19067__$1;
(statearr_19080_21018[(2)] = inst_19049);

(statearr_19080_21018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19068 === (8))){
var inst_19051 = (state_19067[(8)]);
var inst_19057 = (state_19067[(2)]);
var state_19067__$1 = (function (){var statearr_19081 = state_19067;
(statearr_19081[(10)] = inst_19057);

return statearr_19081;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19067__$1,(9),results,inst_19051);
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
var cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____0 = (function (){
var statearr_19083 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19083[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__);

(statearr_19083[(1)] = (1));

return statearr_19083;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____1 = (function (state_19067){
while(true){
var ret_value__18345__auto__ = (function (){try{while(true){
var result__18346__auto__ = switch__18343__auto__(state_19067);
if(cljs.core.keyword_identical_QMARK_(result__18346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18346__auto__;
}
break;
}
}catch (e19084){var ex__18347__auto__ = e19084;
var statearr_19085_21020 = state_19067;
(statearr_19085_21020[(2)] = ex__18347__auto__);


if(cljs.core.seq((state_19067[(4)]))){
var statearr_19086_21021 = state_19067;
(statearr_19086_21021[(1)] = cljs.core.first((state_19067[(4)])));

} else {
throw ex__18347__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21022 = state_19067;
state_19067 = G__21022;
continue;
} else {
return ret_value__18345__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__ = function(state_19067){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____1.call(this,state_19067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__;
})()
})();
var state__18607__auto__ = (function (){var statearr_19087 = f__18606__auto__();
(statearr_19087[(6)] = c__18605__auto___21008);

return statearr_19087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18607__auto__);
}));


var c__18605__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18606__auto__ = (function (){var switch__18343__auto__ = (function (state_19125){
var state_val_19126 = (state_19125[(1)]);
if((state_val_19126 === (7))){
var inst_19121 = (state_19125[(2)]);
var state_19125__$1 = state_19125;
var statearr_19128_21024 = state_19125__$1;
(statearr_19128_21024[(2)] = inst_19121);

(statearr_19128_21024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (20))){
var state_19125__$1 = state_19125;
var statearr_19129_21026 = state_19125__$1;
(statearr_19129_21026[(2)] = null);

(statearr_19129_21026[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (1))){
var state_19125__$1 = state_19125;
var statearr_19130_21027 = state_19125__$1;
(statearr_19130_21027[(2)] = null);

(statearr_19130_21027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (4))){
var inst_19090 = (state_19125[(7)]);
var inst_19090__$1 = (state_19125[(2)]);
var inst_19091 = (inst_19090__$1 == null);
var state_19125__$1 = (function (){var statearr_19131 = state_19125;
(statearr_19131[(7)] = inst_19090__$1);

return statearr_19131;
})();
if(cljs.core.truth_(inst_19091)){
var statearr_19132_21028 = state_19125__$1;
(statearr_19132_21028[(1)] = (5));

} else {
var statearr_19133_21029 = state_19125__$1;
(statearr_19133_21029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (15))){
var inst_19103 = (state_19125[(8)]);
var state_19125__$1 = state_19125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19125__$1,(18),to,inst_19103);
} else {
if((state_val_19126 === (21))){
var inst_19116 = (state_19125[(2)]);
var state_19125__$1 = state_19125;
var statearr_19134_21030 = state_19125__$1;
(statearr_19134_21030[(2)] = inst_19116);

(statearr_19134_21030[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (13))){
var inst_19118 = (state_19125[(2)]);
var state_19125__$1 = (function (){var statearr_19136 = state_19125;
(statearr_19136[(9)] = inst_19118);

return statearr_19136;
})();
var statearr_19137_21032 = state_19125__$1;
(statearr_19137_21032[(2)] = null);

(statearr_19137_21032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (6))){
var inst_19090 = (state_19125[(7)]);
var state_19125__$1 = state_19125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19125__$1,(11),inst_19090);
} else {
if((state_val_19126 === (17))){
var inst_19111 = (state_19125[(2)]);
var state_19125__$1 = state_19125;
if(cljs.core.truth_(inst_19111)){
var statearr_19138_21033 = state_19125__$1;
(statearr_19138_21033[(1)] = (19));

} else {
var statearr_19139_21034 = state_19125__$1;
(statearr_19139_21034[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (3))){
var inst_19123 = (state_19125[(2)]);
var state_19125__$1 = state_19125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19125__$1,inst_19123);
} else {
if((state_val_19126 === (12))){
var inst_19100 = (state_19125[(10)]);
var state_19125__$1 = state_19125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19125__$1,(14),inst_19100);
} else {
if((state_val_19126 === (2))){
var state_19125__$1 = state_19125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19125__$1,(4),results);
} else {
if((state_val_19126 === (19))){
var state_19125__$1 = state_19125;
var statearr_19140_21036 = state_19125__$1;
(statearr_19140_21036[(2)] = null);

(statearr_19140_21036[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (11))){
var inst_19100 = (state_19125[(2)]);
var state_19125__$1 = (function (){var statearr_19141 = state_19125;
(statearr_19141[(10)] = inst_19100);

return statearr_19141;
})();
var statearr_19142_21037 = state_19125__$1;
(statearr_19142_21037[(2)] = null);

(statearr_19142_21037[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (9))){
var state_19125__$1 = state_19125;
var statearr_19143_21038 = state_19125__$1;
(statearr_19143_21038[(2)] = null);

(statearr_19143_21038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (5))){
var state_19125__$1 = state_19125;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19144_21039 = state_19125__$1;
(statearr_19144_21039[(1)] = (8));

} else {
var statearr_19145_21040 = state_19125__$1;
(statearr_19145_21040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (14))){
var inst_19103 = (state_19125[(8)]);
var inst_19105 = (state_19125[(11)]);
var inst_19103__$1 = (state_19125[(2)]);
var inst_19104 = (inst_19103__$1 == null);
var inst_19105__$1 = cljs.core.not(inst_19104);
var state_19125__$1 = (function (){var statearr_19146 = state_19125;
(statearr_19146[(8)] = inst_19103__$1);

(statearr_19146[(11)] = inst_19105__$1);

return statearr_19146;
})();
if(inst_19105__$1){
var statearr_19147_21045 = state_19125__$1;
(statearr_19147_21045[(1)] = (15));

} else {
var statearr_19148_21046 = state_19125__$1;
(statearr_19148_21046[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (16))){
var inst_19105 = (state_19125[(11)]);
var state_19125__$1 = state_19125;
var statearr_19149_21047 = state_19125__$1;
(statearr_19149_21047[(2)] = inst_19105);

(statearr_19149_21047[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (10))){
var inst_19097 = (state_19125[(2)]);
var state_19125__$1 = state_19125;
var statearr_19151_21048 = state_19125__$1;
(statearr_19151_21048[(2)] = inst_19097);

(statearr_19151_21048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (18))){
var inst_19108 = (state_19125[(2)]);
var state_19125__$1 = state_19125;
var statearr_19152_21049 = state_19125__$1;
(statearr_19152_21049[(2)] = inst_19108);

(statearr_19152_21049[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (8))){
var inst_19094 = cljs.core.async.close_BANG_(to);
var state_19125__$1 = state_19125;
var statearr_19153_21050 = state_19125__$1;
(statearr_19153_21050[(2)] = inst_19094);

(statearr_19153_21050[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____0 = (function (){
var statearr_19154 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19154[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__);

(statearr_19154[(1)] = (1));

return statearr_19154;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____1 = (function (state_19125){
while(true){
var ret_value__18345__auto__ = (function (){try{while(true){
var result__18346__auto__ = switch__18343__auto__(state_19125);
if(cljs.core.keyword_identical_QMARK_(result__18346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18346__auto__;
}
break;
}
}catch (e19155){var ex__18347__auto__ = e19155;
var statearr_19156_21053 = state_19125;
(statearr_19156_21053[(2)] = ex__18347__auto__);


if(cljs.core.seq((state_19125[(4)]))){
var statearr_19157_21054 = state_19125;
(statearr_19157_21054[(1)] = cljs.core.first((state_19125[(4)])));

} else {
throw ex__18347__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21055 = state_19125;
state_19125 = G__21055;
continue;
} else {
return ret_value__18345__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__ = function(state_19125){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____1.call(this,state_19125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18344__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18344__auto__;
})()
})();
var state__18607__auto__ = (function (){var statearr_19158 = f__18606__auto__();
(statearr_19158[(6)] = c__18605__auto__);

return statearr_19158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18607__auto__);
}));

return c__18605__auto__;
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
var G__19160 = arguments.length;
switch (G__19160) {
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
var G__19165 = arguments.length;
switch (G__19165) {
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
var G__19171 = arguments.length;
switch (G__19171) {
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
var c__18605__auto___21071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18606__auto__ = (function (){var switch__18343__auto__ = (function (state_19199){
var state_val_19200 = (state_19199[(1)]);
if((state_val_19200 === (7))){
var inst_19195 = (state_19199[(2)]);
var state_19199__$1 = state_19199;
var statearr_19201_21074 = state_19199__$1;
(statearr_19201_21074[(2)] = inst_19195);

(statearr_19201_21074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19200 === (1))){
var state_19199__$1 = state_19199;
var statearr_19203_21075 = state_19199__$1;
(statearr_19203_21075[(2)] = null);

(statearr_19203_21075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19200 === (4))){
var inst_19176 = (state_19199[(7)]);
var inst_19176__$1 = (state_19199[(2)]);
var inst_19177 = (inst_19176__$1 == null);
var state_19199__$1 = (function (){var statearr_19204 = state_19199;
(statearr_19204[(7)] = inst_19176__$1);

return statearr_19204;
})();
if(cljs.core.truth_(inst_19177)){
var statearr_19205_21077 = state_19199__$1;
(statearr_19205_21077[(1)] = (5));

} else {
var statearr_19206_21078 = state_19199__$1;
(statearr_19206_21078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19200 === (13))){
var state_19199__$1 = state_19199;
var statearr_19207_21080 = state_19199__$1;
(statearr_19207_21080[(2)] = null);

(statearr_19207_21080[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19200 === (6))){
var inst_19176 = (state_19199[(7)]);
var inst_19182 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19176) : p.call(null,inst_19176));
var state_19199__$1 = state_19199;
if(cljs.core.truth_(inst_19182)){
var statearr_19208_21082 = state_19199__$1;
(statearr_19208_21082[(1)] = (9));

} else {
var statearr_19209_21083 = state_19199__$1;
(statearr_19209_21083[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19200 === (3))){
var inst_19197 = (state_19199[(2)]);
var state_19199__$1 = state_19199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19199__$1,inst_19197);
} else {
if((state_val_19200 === (12))){
var state_19199__$1 = state_19199;
var statearr_19211_21084 = state_19199__$1;
(statearr_19211_21084[(2)] = null);

(statearr_19211_21084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19200 === (2))){
var state_19199__$1 = state_19199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19199__$1,(4),ch);
} else {
if((state_val_19200 === (11))){
var inst_19176 = (state_19199[(7)]);
var inst_19186 = (state_19199[(2)]);
var state_19199__$1 = state_19199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19199__$1,(8),inst_19186,inst_19176);
} else {
if((state_val_19200 === (9))){
var state_19199__$1 = state_19199;
var statearr_19212_21089 = state_19199__$1;
(statearr_19212_21089[(2)] = tc);

(statearr_19212_21089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19200 === (5))){
var inst_19179 = cljs.core.async.close_BANG_(tc);
var inst_19180 = cljs.core.async.close_BANG_(fc);
var state_19199__$1 = (function (){var statearr_19213 = state_19199;
(statearr_19213[(8)] = inst_19179);

return statearr_19213;
})();
var statearr_19214_21090 = state_19199__$1;
(statearr_19214_21090[(2)] = inst_19180);

(statearr_19214_21090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19200 === (14))){
var inst_19193 = (state_19199[(2)]);
var state_19199__$1 = state_19199;
var statearr_19215_21091 = state_19199__$1;
(statearr_19215_21091[(2)] = inst_19193);

(statearr_19215_21091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19200 === (10))){
var state_19199__$1 = state_19199;
var statearr_19217_21092 = state_19199__$1;
(statearr_19217_21092[(2)] = fc);

(statearr_19217_21092[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19200 === (8))){
var inst_19188 = (state_19199[(2)]);
var state_19199__$1 = state_19199;
if(cljs.core.truth_(inst_19188)){
var statearr_19218_21093 = state_19199__$1;
(statearr_19218_21093[(1)] = (12));

} else {
var statearr_19219_21094 = state_19199__$1;
(statearr_19219_21094[(1)] = (13));

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
var cljs$core$async$state_machine__18344__auto__ = null;
var cljs$core$async$state_machine__18344__auto____0 = (function (){
var statearr_19220 = [null,null,null,null,null,null,null,null,null];
(statearr_19220[(0)] = cljs$core$async$state_machine__18344__auto__);

(statearr_19220[(1)] = (1));

return statearr_19220;
});
var cljs$core$async$state_machine__18344__auto____1 = (function (state_19199){
while(true){
var ret_value__18345__auto__ = (function (){try{while(true){
var result__18346__auto__ = switch__18343__auto__(state_19199);
if(cljs.core.keyword_identical_QMARK_(result__18346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18346__auto__;
}
break;
}
}catch (e19221){var ex__18347__auto__ = e19221;
var statearr_19222_21095 = state_19199;
(statearr_19222_21095[(2)] = ex__18347__auto__);


if(cljs.core.seq((state_19199[(4)]))){
var statearr_19223_21096 = state_19199;
(statearr_19223_21096[(1)] = cljs.core.first((state_19199[(4)])));

} else {
throw ex__18347__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21097 = state_19199;
state_19199 = G__21097;
continue;
} else {
return ret_value__18345__auto__;
}
break;
}
});
cljs$core$async$state_machine__18344__auto__ = function(state_19199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18344__auto____1.call(this,state_19199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18344__auto____0;
cljs$core$async$state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18344__auto____1;
return cljs$core$async$state_machine__18344__auto__;
})()
})();
var state__18607__auto__ = (function (){var statearr_19225 = f__18606__auto__();
(statearr_19225[(6)] = c__18605__auto___21071);

return statearr_19225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18607__auto__);
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
var c__18605__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18606__auto__ = (function (){var switch__18343__auto__ = (function (state_19249){
var state_val_19250 = (state_19249[(1)]);
if((state_val_19250 === (7))){
var inst_19244 = (state_19249[(2)]);
var state_19249__$1 = state_19249;
var statearr_19252_21101 = state_19249__$1;
(statearr_19252_21101[(2)] = inst_19244);

(statearr_19252_21101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19250 === (1))){
var inst_19226 = init;
var inst_19227 = inst_19226;
var state_19249__$1 = (function (){var statearr_19253 = state_19249;
(statearr_19253[(7)] = inst_19227);

return statearr_19253;
})();
var statearr_19254_21102 = state_19249__$1;
(statearr_19254_21102[(2)] = null);

(statearr_19254_21102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19250 === (4))){
var inst_19230 = (state_19249[(8)]);
var inst_19230__$1 = (state_19249[(2)]);
var inst_19232 = (inst_19230__$1 == null);
var state_19249__$1 = (function (){var statearr_19255 = state_19249;
(statearr_19255[(8)] = inst_19230__$1);

return statearr_19255;
})();
if(cljs.core.truth_(inst_19232)){
var statearr_19256_21103 = state_19249__$1;
(statearr_19256_21103[(1)] = (5));

} else {
var statearr_19257_21104 = state_19249__$1;
(statearr_19257_21104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19250 === (6))){
var inst_19227 = (state_19249[(7)]);
var inst_19230 = (state_19249[(8)]);
var inst_19235 = (state_19249[(9)]);
var inst_19235__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_19227,inst_19230) : f.call(null,inst_19227,inst_19230));
var inst_19236 = cljs.core.reduced_QMARK_(inst_19235__$1);
var state_19249__$1 = (function (){var statearr_19258 = state_19249;
(statearr_19258[(9)] = inst_19235__$1);

return statearr_19258;
})();
if(inst_19236){
var statearr_19259_21105 = state_19249__$1;
(statearr_19259_21105[(1)] = (8));

} else {
var statearr_19260_21106 = state_19249__$1;
(statearr_19260_21106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19250 === (3))){
var inst_19246 = (state_19249[(2)]);
var state_19249__$1 = state_19249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19249__$1,inst_19246);
} else {
if((state_val_19250 === (2))){
var state_19249__$1 = state_19249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19249__$1,(4),ch);
} else {
if((state_val_19250 === (9))){
var inst_19235 = (state_19249[(9)]);
var inst_19227 = inst_19235;
var state_19249__$1 = (function (){var statearr_19262 = state_19249;
(statearr_19262[(7)] = inst_19227);

return statearr_19262;
})();
var statearr_19263_21117 = state_19249__$1;
(statearr_19263_21117[(2)] = null);

(statearr_19263_21117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19250 === (5))){
var inst_19227 = (state_19249[(7)]);
var state_19249__$1 = state_19249;
var statearr_19265_21124 = state_19249__$1;
(statearr_19265_21124[(2)] = inst_19227);

(statearr_19265_21124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19250 === (10))){
var inst_19242 = (state_19249[(2)]);
var state_19249__$1 = state_19249;
var statearr_19266_21125 = state_19249__$1;
(statearr_19266_21125[(2)] = inst_19242);

(statearr_19266_21125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19250 === (8))){
var inst_19235 = (state_19249[(9)]);
var inst_19238 = cljs.core.deref(inst_19235);
var state_19249__$1 = state_19249;
var statearr_19268_21126 = state_19249__$1;
(statearr_19268_21126[(2)] = inst_19238);

(statearr_19268_21126[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__18344__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18344__auto____0 = (function (){
var statearr_19270 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19270[(0)] = cljs$core$async$reduce_$_state_machine__18344__auto__);

(statearr_19270[(1)] = (1));

return statearr_19270;
});
var cljs$core$async$reduce_$_state_machine__18344__auto____1 = (function (state_19249){
while(true){
var ret_value__18345__auto__ = (function (){try{while(true){
var result__18346__auto__ = switch__18343__auto__(state_19249);
if(cljs.core.keyword_identical_QMARK_(result__18346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18346__auto__;
}
break;
}
}catch (e19271){var ex__18347__auto__ = e19271;
var statearr_19272_21127 = state_19249;
(statearr_19272_21127[(2)] = ex__18347__auto__);


if(cljs.core.seq((state_19249[(4)]))){
var statearr_19273_21128 = state_19249;
(statearr_19273_21128[(1)] = cljs.core.first((state_19249[(4)])));

} else {
throw ex__18347__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21129 = state_19249;
state_19249 = G__21129;
continue;
} else {
return ret_value__18345__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18344__auto__ = function(state_19249){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18344__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18344__auto____1.call(this,state_19249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18344__auto____0;
cljs$core$async$reduce_$_state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18344__auto____1;
return cljs$core$async$reduce_$_state_machine__18344__auto__;
})()
})();
var state__18607__auto__ = (function (){var statearr_19274 = f__18606__auto__();
(statearr_19274[(6)] = c__18605__auto__);

return statearr_19274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18607__auto__);
}));

return c__18605__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__18605__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18606__auto__ = (function (){var switch__18343__auto__ = (function (state_19281){
var state_val_19282 = (state_19281[(1)]);
if((state_val_19282 === (1))){
var inst_19276 = cljs.core.async.reduce(f__$1,init,ch);
var state_19281__$1 = state_19281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19281__$1,(2),inst_19276);
} else {
if((state_val_19282 === (2))){
var inst_19278 = (state_19281[(2)]);
var inst_19279 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_19278) : f__$1.call(null,inst_19278));
var state_19281__$1 = state_19281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19281__$1,inst_19279);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__18344__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18344__auto____0 = (function (){
var statearr_19284 = [null,null,null,null,null,null,null];
(statearr_19284[(0)] = cljs$core$async$transduce_$_state_machine__18344__auto__);

(statearr_19284[(1)] = (1));

return statearr_19284;
});
var cljs$core$async$transduce_$_state_machine__18344__auto____1 = (function (state_19281){
while(true){
var ret_value__18345__auto__ = (function (){try{while(true){
var result__18346__auto__ = switch__18343__auto__(state_19281);
if(cljs.core.keyword_identical_QMARK_(result__18346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18346__auto__;
}
break;
}
}catch (e19285){var ex__18347__auto__ = e19285;
var statearr_19286_21134 = state_19281;
(statearr_19286_21134[(2)] = ex__18347__auto__);


if(cljs.core.seq((state_19281[(4)]))){
var statearr_19287_21135 = state_19281;
(statearr_19287_21135[(1)] = cljs.core.first((state_19281[(4)])));

} else {
throw ex__18347__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21136 = state_19281;
state_19281 = G__21136;
continue;
} else {
return ret_value__18345__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18344__auto__ = function(state_19281){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18344__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18344__auto____1.call(this,state_19281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18344__auto____0;
cljs$core$async$transduce_$_state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18344__auto____1;
return cljs$core$async$transduce_$_state_machine__18344__auto__;
})()
})();
var state__18607__auto__ = (function (){var statearr_19289 = f__18606__auto__();
(statearr_19289[(6)] = c__18605__auto__);

return statearr_19289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18607__auto__);
}));

return c__18605__auto__;
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
var G__19292 = arguments.length;
switch (G__19292) {
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
var c__18605__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18606__auto__ = (function (){var switch__18343__auto__ = (function (state_19318){
var state_val_19319 = (state_19318[(1)]);
if((state_val_19319 === (7))){
var inst_19300 = (state_19318[(2)]);
var state_19318__$1 = state_19318;
var statearr_19320_21139 = state_19318__$1;
(statearr_19320_21139[(2)] = inst_19300);

(statearr_19320_21139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19319 === (1))){
var inst_19294 = cljs.core.seq(coll);
var inst_19295 = inst_19294;
var state_19318__$1 = (function (){var statearr_19321 = state_19318;
(statearr_19321[(7)] = inst_19295);

return statearr_19321;
})();
var statearr_19322_21140 = state_19318__$1;
(statearr_19322_21140[(2)] = null);

(statearr_19322_21140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19319 === (4))){
var inst_19295 = (state_19318[(7)]);
var inst_19298 = cljs.core.first(inst_19295);
var state_19318__$1 = state_19318;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19318__$1,(7),ch,inst_19298);
} else {
if((state_val_19319 === (13))){
var inst_19312 = (state_19318[(2)]);
var state_19318__$1 = state_19318;
var statearr_19323_21141 = state_19318__$1;
(statearr_19323_21141[(2)] = inst_19312);

(statearr_19323_21141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19319 === (6))){
var inst_19303 = (state_19318[(2)]);
var state_19318__$1 = state_19318;
if(cljs.core.truth_(inst_19303)){
var statearr_19324_21142 = state_19318__$1;
(statearr_19324_21142[(1)] = (8));

} else {
var statearr_19325_21144 = state_19318__$1;
(statearr_19325_21144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19319 === (3))){
var inst_19316 = (state_19318[(2)]);
var state_19318__$1 = state_19318;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19318__$1,inst_19316);
} else {
if((state_val_19319 === (12))){
var state_19318__$1 = state_19318;
var statearr_19326_21145 = state_19318__$1;
(statearr_19326_21145[(2)] = null);

(statearr_19326_21145[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19319 === (2))){
var inst_19295 = (state_19318[(7)]);
var state_19318__$1 = state_19318;
if(cljs.core.truth_(inst_19295)){
var statearr_19327_21146 = state_19318__$1;
(statearr_19327_21146[(1)] = (4));

} else {
var statearr_19328_21147 = state_19318__$1;
(statearr_19328_21147[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19319 === (11))){
var inst_19309 = cljs.core.async.close_BANG_(ch);
var state_19318__$1 = state_19318;
var statearr_19329_21148 = state_19318__$1;
(statearr_19329_21148[(2)] = inst_19309);

(statearr_19329_21148[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19319 === (9))){
var state_19318__$1 = state_19318;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19330_21149 = state_19318__$1;
(statearr_19330_21149[(1)] = (11));

} else {
var statearr_19331_21150 = state_19318__$1;
(statearr_19331_21150[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19319 === (5))){
var inst_19295 = (state_19318[(7)]);
var state_19318__$1 = state_19318;
var statearr_19332_21151 = state_19318__$1;
(statearr_19332_21151[(2)] = inst_19295);

(statearr_19332_21151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19319 === (10))){
var inst_19314 = (state_19318[(2)]);
var state_19318__$1 = state_19318;
var statearr_19333_21152 = state_19318__$1;
(statearr_19333_21152[(2)] = inst_19314);

(statearr_19333_21152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19319 === (8))){
var inst_19295 = (state_19318[(7)]);
var inst_19305 = cljs.core.next(inst_19295);
var inst_19295__$1 = inst_19305;
var state_19318__$1 = (function (){var statearr_19334 = state_19318;
(statearr_19334[(7)] = inst_19295__$1);

return statearr_19334;
})();
var statearr_19335_21153 = state_19318__$1;
(statearr_19335_21153[(2)] = null);

(statearr_19335_21153[(1)] = (2));


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
var cljs$core$async$state_machine__18344__auto__ = null;
var cljs$core$async$state_machine__18344__auto____0 = (function (){
var statearr_19336 = [null,null,null,null,null,null,null,null];
(statearr_19336[(0)] = cljs$core$async$state_machine__18344__auto__);

(statearr_19336[(1)] = (1));

return statearr_19336;
});
var cljs$core$async$state_machine__18344__auto____1 = (function (state_19318){
while(true){
var ret_value__18345__auto__ = (function (){try{while(true){
var result__18346__auto__ = switch__18343__auto__(state_19318);
if(cljs.core.keyword_identical_QMARK_(result__18346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18346__auto__;
}
break;
}
}catch (e19337){var ex__18347__auto__ = e19337;
var statearr_19338_21159 = state_19318;
(statearr_19338_21159[(2)] = ex__18347__auto__);


if(cljs.core.seq((state_19318[(4)]))){
var statearr_19340_21161 = state_19318;
(statearr_19340_21161[(1)] = cljs.core.first((state_19318[(4)])));

} else {
throw ex__18347__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21164 = state_19318;
state_19318 = G__21164;
continue;
} else {
return ret_value__18345__auto__;
}
break;
}
});
cljs$core$async$state_machine__18344__auto__ = function(state_19318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18344__auto____1.call(this,state_19318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18344__auto____0;
cljs$core$async$state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18344__auto____1;
return cljs$core$async$state_machine__18344__auto__;
})()
})();
var state__18607__auto__ = (function (){var statearr_19342 = f__18606__auto__();
(statearr_19342[(6)] = c__18605__auto__);

return statearr_19342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18607__auto__);
}));

return c__18605__auto__;
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
var G__19344 = arguments.length;
switch (G__19344) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_21171 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_21171(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_21173 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_21173(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_21175 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_21175(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_21181 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_21181(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19345 = (function (ch,cs,meta19346){
this.ch = ch;
this.cs = cs;
this.meta19346 = meta19346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19347,meta19346__$1){
var self__ = this;
var _19347__$1 = this;
return (new cljs.core.async.t_cljs$core$async19345(self__.ch,self__.cs,meta19346__$1));
}));

(cljs.core.async.t_cljs$core$async19345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19347){
var self__ = this;
var _19347__$1 = this;
return self__.meta19346;
}));

(cljs.core.async.t_cljs$core$async19345.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19345.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19345.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19345.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async19345.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async19345.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async19345.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19346","meta19346",-562450147,null)], null);
}));

(cljs.core.async.t_cljs$core$async19345.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19345.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19345");

(cljs.core.async.t_cljs$core$async19345.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async19345");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19345.
 */
cljs.core.async.__GT_t_cljs$core$async19345 = (function cljs$core$async$__GT_t_cljs$core$async19345(ch,cs,meta19346){
return (new cljs.core.async.t_cljs$core$async19345(ch,cs,meta19346));
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
var m = (new cljs.core.async.t_cljs$core$async19345(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__18605__auto___21182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18606__auto__ = (function (){var switch__18343__auto__ = (function (state_19485){
var state_val_19486 = (state_19485[(1)]);
if((state_val_19486 === (7))){
var inst_19478 = (state_19485[(2)]);
var state_19485__$1 = state_19485;
var statearr_19493_21183 = state_19485__$1;
(statearr_19493_21183[(2)] = inst_19478);

(statearr_19493_21183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (20))){
var inst_19383 = (state_19485[(7)]);
var inst_19395 = cljs.core.first(inst_19383);
var inst_19396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19395,(0),null);
var inst_19397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19395,(1),null);
var state_19485__$1 = (function (){var statearr_19498 = state_19485;
(statearr_19498[(8)] = inst_19396);

return statearr_19498;
})();
if(cljs.core.truth_(inst_19397)){
var statearr_19501_21188 = state_19485__$1;
(statearr_19501_21188[(1)] = (22));

} else {
var statearr_19504_21189 = state_19485__$1;
(statearr_19504_21189[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (27))){
var inst_19425 = (state_19485[(9)]);
var inst_19427 = (state_19485[(10)]);
var inst_19432 = (state_19485[(11)]);
var inst_19350 = (state_19485[(12)]);
var inst_19432__$1 = cljs.core._nth(inst_19425,inst_19427);
var inst_19433 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19432__$1,inst_19350,done);
var state_19485__$1 = (function (){var statearr_19513 = state_19485;
(statearr_19513[(11)] = inst_19432__$1);

return statearr_19513;
})();
if(cljs.core.truth_(inst_19433)){
var statearr_19515_21190 = state_19485__$1;
(statearr_19515_21190[(1)] = (30));

} else {
var statearr_19519_21191 = state_19485__$1;
(statearr_19519_21191[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (1))){
var state_19485__$1 = state_19485;
var statearr_19522_21192 = state_19485__$1;
(statearr_19522_21192[(2)] = null);

(statearr_19522_21192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (24))){
var inst_19383 = (state_19485[(7)]);
var inst_19402 = (state_19485[(2)]);
var inst_19403 = cljs.core.next(inst_19383);
var inst_19360 = inst_19403;
var inst_19361 = null;
var inst_19362 = (0);
var inst_19363 = (0);
var state_19485__$1 = (function (){var statearr_19529 = state_19485;
(statearr_19529[(13)] = inst_19402);

(statearr_19529[(14)] = inst_19360);

(statearr_19529[(15)] = inst_19361);

(statearr_19529[(16)] = inst_19362);

(statearr_19529[(17)] = inst_19363);

return statearr_19529;
})();
var statearr_19534_21193 = state_19485__$1;
(statearr_19534_21193[(2)] = null);

(statearr_19534_21193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (39))){
var state_19485__$1 = state_19485;
var statearr_19546_21194 = state_19485__$1;
(statearr_19546_21194[(2)] = null);

(statearr_19546_21194[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (4))){
var inst_19350 = (state_19485[(12)]);
var inst_19350__$1 = (state_19485[(2)]);
var inst_19351 = (inst_19350__$1 == null);
var state_19485__$1 = (function (){var statearr_19548 = state_19485;
(statearr_19548[(12)] = inst_19350__$1);

return statearr_19548;
})();
if(cljs.core.truth_(inst_19351)){
var statearr_19551_21198 = state_19485__$1;
(statearr_19551_21198[(1)] = (5));

} else {
var statearr_19553_21199 = state_19485__$1;
(statearr_19553_21199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (15))){
var inst_19363 = (state_19485[(17)]);
var inst_19360 = (state_19485[(14)]);
var inst_19361 = (state_19485[(15)]);
var inst_19362 = (state_19485[(16)]);
var inst_19379 = (state_19485[(2)]);
var inst_19380 = (inst_19363 + (1));
var tmp19540 = inst_19361;
var tmp19541 = inst_19362;
var tmp19542 = inst_19360;
var inst_19360__$1 = tmp19542;
var inst_19361__$1 = tmp19540;
var inst_19362__$1 = tmp19541;
var inst_19363__$1 = inst_19380;
var state_19485__$1 = (function (){var statearr_19555 = state_19485;
(statearr_19555[(18)] = inst_19379);

(statearr_19555[(14)] = inst_19360__$1);

(statearr_19555[(15)] = inst_19361__$1);

(statearr_19555[(16)] = inst_19362__$1);

(statearr_19555[(17)] = inst_19363__$1);

return statearr_19555;
})();
var statearr_19558_21207 = state_19485__$1;
(statearr_19558_21207[(2)] = null);

(statearr_19558_21207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (21))){
var inst_19406 = (state_19485[(2)]);
var state_19485__$1 = state_19485;
var statearr_19563_21211 = state_19485__$1;
(statearr_19563_21211[(2)] = inst_19406);

(statearr_19563_21211[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (31))){
var inst_19432 = (state_19485[(11)]);
var inst_19436 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19432);
var state_19485__$1 = state_19485;
var statearr_19566_21212 = state_19485__$1;
(statearr_19566_21212[(2)] = inst_19436);

(statearr_19566_21212[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (32))){
var inst_19427 = (state_19485[(10)]);
var inst_19424 = (state_19485[(19)]);
var inst_19425 = (state_19485[(9)]);
var inst_19426 = (state_19485[(20)]);
var inst_19438 = (state_19485[(2)]);
var inst_19439 = (inst_19427 + (1));
var tmp19560 = inst_19425;
var tmp19561 = inst_19426;
var tmp19562 = inst_19424;
var inst_19424__$1 = tmp19562;
var inst_19425__$1 = tmp19560;
var inst_19426__$1 = tmp19561;
var inst_19427__$1 = inst_19439;
var state_19485__$1 = (function (){var statearr_19574 = state_19485;
(statearr_19574[(21)] = inst_19438);

(statearr_19574[(19)] = inst_19424__$1);

(statearr_19574[(9)] = inst_19425__$1);

(statearr_19574[(20)] = inst_19426__$1);

(statearr_19574[(10)] = inst_19427__$1);

return statearr_19574;
})();
var statearr_19575_21213 = state_19485__$1;
(statearr_19575_21213[(2)] = null);

(statearr_19575_21213[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (40))){
var inst_19451 = (state_19485[(22)]);
var inst_19455 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19451);
var state_19485__$1 = state_19485;
var statearr_19576_21214 = state_19485__$1;
(statearr_19576_21214[(2)] = inst_19455);

(statearr_19576_21214[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (33))){
var inst_19442 = (state_19485[(23)]);
var inst_19444 = cljs.core.chunked_seq_QMARK_(inst_19442);
var state_19485__$1 = state_19485;
if(inst_19444){
var statearr_19579_21215 = state_19485__$1;
(statearr_19579_21215[(1)] = (36));

} else {
var statearr_19580_21216 = state_19485__$1;
(statearr_19580_21216[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (13))){
var inst_19373 = (state_19485[(24)]);
var inst_19376 = cljs.core.async.close_BANG_(inst_19373);
var state_19485__$1 = state_19485;
var statearr_19583_21217 = state_19485__$1;
(statearr_19583_21217[(2)] = inst_19376);

(statearr_19583_21217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (22))){
var inst_19396 = (state_19485[(8)]);
var inst_19399 = cljs.core.async.close_BANG_(inst_19396);
var state_19485__$1 = state_19485;
var statearr_19587_21218 = state_19485__$1;
(statearr_19587_21218[(2)] = inst_19399);

(statearr_19587_21218[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (36))){
var inst_19442 = (state_19485[(23)]);
var inst_19446 = cljs.core.chunk_first(inst_19442);
var inst_19447 = cljs.core.chunk_rest(inst_19442);
var inst_19448 = cljs.core.count(inst_19446);
var inst_19424 = inst_19447;
var inst_19425 = inst_19446;
var inst_19426 = inst_19448;
var inst_19427 = (0);
var state_19485__$1 = (function (){var statearr_19589 = state_19485;
(statearr_19589[(19)] = inst_19424);

(statearr_19589[(9)] = inst_19425);

(statearr_19589[(20)] = inst_19426);

(statearr_19589[(10)] = inst_19427);

return statearr_19589;
})();
var statearr_19590_21222 = state_19485__$1;
(statearr_19590_21222[(2)] = null);

(statearr_19590_21222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (41))){
var inst_19442 = (state_19485[(23)]);
var inst_19457 = (state_19485[(2)]);
var inst_19458 = cljs.core.next(inst_19442);
var inst_19424 = inst_19458;
var inst_19425 = null;
var inst_19426 = (0);
var inst_19427 = (0);
var state_19485__$1 = (function (){var statearr_19599 = state_19485;
(statearr_19599[(25)] = inst_19457);

(statearr_19599[(19)] = inst_19424);

(statearr_19599[(9)] = inst_19425);

(statearr_19599[(20)] = inst_19426);

(statearr_19599[(10)] = inst_19427);

return statearr_19599;
})();
var statearr_19604_21223 = state_19485__$1;
(statearr_19604_21223[(2)] = null);

(statearr_19604_21223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (43))){
var state_19485__$1 = state_19485;
var statearr_19609_21224 = state_19485__$1;
(statearr_19609_21224[(2)] = null);

(statearr_19609_21224[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (29))){
var inst_19466 = (state_19485[(2)]);
var state_19485__$1 = state_19485;
var statearr_19617_21225 = state_19485__$1;
(statearr_19617_21225[(2)] = inst_19466);

(statearr_19617_21225[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (44))){
var inst_19475 = (state_19485[(2)]);
var state_19485__$1 = (function (){var statearr_19622 = state_19485;
(statearr_19622[(26)] = inst_19475);

return statearr_19622;
})();
var statearr_19624_21226 = state_19485__$1;
(statearr_19624_21226[(2)] = null);

(statearr_19624_21226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (6))){
var inst_19416 = (state_19485[(27)]);
var inst_19415 = cljs.core.deref(cs);
var inst_19416__$1 = cljs.core.keys(inst_19415);
var inst_19417 = cljs.core.count(inst_19416__$1);
var inst_19418 = cljs.core.reset_BANG_(dctr,inst_19417);
var inst_19423 = cljs.core.seq(inst_19416__$1);
var inst_19424 = inst_19423;
var inst_19425 = null;
var inst_19426 = (0);
var inst_19427 = (0);
var state_19485__$1 = (function (){var statearr_19634 = state_19485;
(statearr_19634[(27)] = inst_19416__$1);

(statearr_19634[(28)] = inst_19418);

(statearr_19634[(19)] = inst_19424);

(statearr_19634[(9)] = inst_19425);

(statearr_19634[(20)] = inst_19426);

(statearr_19634[(10)] = inst_19427);

return statearr_19634;
})();
var statearr_19637_21227 = state_19485__$1;
(statearr_19637_21227[(2)] = null);

(statearr_19637_21227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (28))){
var inst_19424 = (state_19485[(19)]);
var inst_19442 = (state_19485[(23)]);
var inst_19442__$1 = cljs.core.seq(inst_19424);
var state_19485__$1 = (function (){var statearr_19639 = state_19485;
(statearr_19639[(23)] = inst_19442__$1);

return statearr_19639;
})();
if(inst_19442__$1){
var statearr_19642_21228 = state_19485__$1;
(statearr_19642_21228[(1)] = (33));

} else {
var statearr_19644_21229 = state_19485__$1;
(statearr_19644_21229[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (25))){
var inst_19427 = (state_19485[(10)]);
var inst_19426 = (state_19485[(20)]);
var inst_19429 = (inst_19427 < inst_19426);
var inst_19430 = inst_19429;
var state_19485__$1 = state_19485;
if(cljs.core.truth_(inst_19430)){
var statearr_19645_21230 = state_19485__$1;
(statearr_19645_21230[(1)] = (27));

} else {
var statearr_19647_21231 = state_19485__$1;
(statearr_19647_21231[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (34))){
var state_19485__$1 = state_19485;
var statearr_19649_21232 = state_19485__$1;
(statearr_19649_21232[(2)] = null);

(statearr_19649_21232[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (17))){
var state_19485__$1 = state_19485;
var statearr_19652_21233 = state_19485__$1;
(statearr_19652_21233[(2)] = null);

(statearr_19652_21233[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (3))){
var inst_19480 = (state_19485[(2)]);
var state_19485__$1 = state_19485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19485__$1,inst_19480);
} else {
if((state_val_19486 === (12))){
var inst_19411 = (state_19485[(2)]);
var state_19485__$1 = state_19485;
var statearr_19654_21234 = state_19485__$1;
(statearr_19654_21234[(2)] = inst_19411);

(statearr_19654_21234[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (2))){
var state_19485__$1 = state_19485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19485__$1,(4),ch);
} else {
if((state_val_19486 === (23))){
var state_19485__$1 = state_19485;
var statearr_19658_21235 = state_19485__$1;
(statearr_19658_21235[(2)] = null);

(statearr_19658_21235[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (35))){
var inst_19464 = (state_19485[(2)]);
var state_19485__$1 = state_19485;
var statearr_19660_21237 = state_19485__$1;
(statearr_19660_21237[(2)] = inst_19464);

(statearr_19660_21237[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (19))){
var inst_19383 = (state_19485[(7)]);
var inst_19387 = cljs.core.chunk_first(inst_19383);
var inst_19388 = cljs.core.chunk_rest(inst_19383);
var inst_19389 = cljs.core.count(inst_19387);
var inst_19360 = inst_19388;
var inst_19361 = inst_19387;
var inst_19362 = inst_19389;
var inst_19363 = (0);
var state_19485__$1 = (function (){var statearr_19664 = state_19485;
(statearr_19664[(14)] = inst_19360);

(statearr_19664[(15)] = inst_19361);

(statearr_19664[(16)] = inst_19362);

(statearr_19664[(17)] = inst_19363);

return statearr_19664;
})();
var statearr_19666_21240 = state_19485__$1;
(statearr_19666_21240[(2)] = null);

(statearr_19666_21240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (11))){
var inst_19360 = (state_19485[(14)]);
var inst_19383 = (state_19485[(7)]);
var inst_19383__$1 = cljs.core.seq(inst_19360);
var state_19485__$1 = (function (){var statearr_19670 = state_19485;
(statearr_19670[(7)] = inst_19383__$1);

return statearr_19670;
})();
if(inst_19383__$1){
var statearr_19671_21241 = state_19485__$1;
(statearr_19671_21241[(1)] = (16));

} else {
var statearr_19672_21242 = state_19485__$1;
(statearr_19672_21242[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (9))){
var inst_19413 = (state_19485[(2)]);
var state_19485__$1 = state_19485;
var statearr_19674_21243 = state_19485__$1;
(statearr_19674_21243[(2)] = inst_19413);

(statearr_19674_21243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (5))){
var inst_19358 = cljs.core.deref(cs);
var inst_19359 = cljs.core.seq(inst_19358);
var inst_19360 = inst_19359;
var inst_19361 = null;
var inst_19362 = (0);
var inst_19363 = (0);
var state_19485__$1 = (function (){var statearr_19678 = state_19485;
(statearr_19678[(14)] = inst_19360);

(statearr_19678[(15)] = inst_19361);

(statearr_19678[(16)] = inst_19362);

(statearr_19678[(17)] = inst_19363);

return statearr_19678;
})();
var statearr_19679_21244 = state_19485__$1;
(statearr_19679_21244[(2)] = null);

(statearr_19679_21244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (14))){
var state_19485__$1 = state_19485;
var statearr_19681_21245 = state_19485__$1;
(statearr_19681_21245[(2)] = null);

(statearr_19681_21245[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (45))){
var inst_19472 = (state_19485[(2)]);
var state_19485__$1 = state_19485;
var statearr_19684_21246 = state_19485__$1;
(statearr_19684_21246[(2)] = inst_19472);

(statearr_19684_21246[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (26))){
var inst_19416 = (state_19485[(27)]);
var inst_19468 = (state_19485[(2)]);
var inst_19469 = cljs.core.seq(inst_19416);
var state_19485__$1 = (function (){var statearr_19686 = state_19485;
(statearr_19686[(29)] = inst_19468);

return statearr_19686;
})();
if(inst_19469){
var statearr_19688_21247 = state_19485__$1;
(statearr_19688_21247[(1)] = (42));

} else {
var statearr_19689_21248 = state_19485__$1;
(statearr_19689_21248[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (16))){
var inst_19383 = (state_19485[(7)]);
var inst_19385 = cljs.core.chunked_seq_QMARK_(inst_19383);
var state_19485__$1 = state_19485;
if(inst_19385){
var statearr_19692_21249 = state_19485__$1;
(statearr_19692_21249[(1)] = (19));

} else {
var statearr_19694_21250 = state_19485__$1;
(statearr_19694_21250[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (38))){
var inst_19461 = (state_19485[(2)]);
var state_19485__$1 = state_19485;
var statearr_19699_21251 = state_19485__$1;
(statearr_19699_21251[(2)] = inst_19461);

(statearr_19699_21251[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (30))){
var state_19485__$1 = state_19485;
var statearr_19706_21252 = state_19485__$1;
(statearr_19706_21252[(2)] = null);

(statearr_19706_21252[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (10))){
var inst_19361 = (state_19485[(15)]);
var inst_19363 = (state_19485[(17)]);
var inst_19372 = cljs.core._nth(inst_19361,inst_19363);
var inst_19373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19372,(0),null);
var inst_19374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19372,(1),null);
var state_19485__$1 = (function (){var statearr_19717 = state_19485;
(statearr_19717[(24)] = inst_19373);

return statearr_19717;
})();
if(cljs.core.truth_(inst_19374)){
var statearr_19720_21253 = state_19485__$1;
(statearr_19720_21253[(1)] = (13));

} else {
var statearr_19722_21254 = state_19485__$1;
(statearr_19722_21254[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (18))){
var inst_19409 = (state_19485[(2)]);
var state_19485__$1 = state_19485;
var statearr_19728_21257 = state_19485__$1;
(statearr_19728_21257[(2)] = inst_19409);

(statearr_19728_21257[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (42))){
var state_19485__$1 = state_19485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19485__$1,(45),dchan);
} else {
if((state_val_19486 === (37))){
var inst_19442 = (state_19485[(23)]);
var inst_19451 = (state_19485[(22)]);
var inst_19350 = (state_19485[(12)]);
var inst_19451__$1 = cljs.core.first(inst_19442);
var inst_19452 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19451__$1,inst_19350,done);
var state_19485__$1 = (function (){var statearr_19739 = state_19485;
(statearr_19739[(22)] = inst_19451__$1);

return statearr_19739;
})();
if(cljs.core.truth_(inst_19452)){
var statearr_19740_21261 = state_19485__$1;
(statearr_19740_21261[(1)] = (39));

} else {
var statearr_19741_21265 = state_19485__$1;
(statearr_19741_21265[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19486 === (8))){
var inst_19363 = (state_19485[(17)]);
var inst_19362 = (state_19485[(16)]);
var inst_19365 = (inst_19363 < inst_19362);
var inst_19366 = inst_19365;
var state_19485__$1 = state_19485;
if(cljs.core.truth_(inst_19366)){
var statearr_19742_21266 = state_19485__$1;
(statearr_19742_21266[(1)] = (10));

} else {
var statearr_19743_21267 = state_19485__$1;
(statearr_19743_21267[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__18344__auto__ = null;
var cljs$core$async$mult_$_state_machine__18344__auto____0 = (function (){
var statearr_19746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19746[(0)] = cljs$core$async$mult_$_state_machine__18344__auto__);

(statearr_19746[(1)] = (1));

return statearr_19746;
});
var cljs$core$async$mult_$_state_machine__18344__auto____1 = (function (state_19485){
while(true){
var ret_value__18345__auto__ = (function (){try{while(true){
var result__18346__auto__ = switch__18343__auto__(state_19485);
if(cljs.core.keyword_identical_QMARK_(result__18346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18346__auto__;
}
break;
}
}catch (e19747){var ex__18347__auto__ = e19747;
var statearr_19748_21268 = state_19485;
(statearr_19748_21268[(2)] = ex__18347__auto__);


if(cljs.core.seq((state_19485[(4)]))){
var statearr_19749_21269 = state_19485;
(statearr_19749_21269[(1)] = cljs.core.first((state_19485[(4)])));

} else {
throw ex__18347__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21270 = state_19485;
state_19485 = G__21270;
continue;
} else {
return ret_value__18345__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18344__auto__ = function(state_19485){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18344__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18344__auto____1.call(this,state_19485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18344__auto____0;
cljs$core$async$mult_$_state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18344__auto____1;
return cljs$core$async$mult_$_state_machine__18344__auto__;
})()
})();
var state__18607__auto__ = (function (){var statearr_19750 = f__18606__auto__();
(statearr_19750[(6)] = c__18605__auto___21182);

return statearr_19750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18607__auto__);
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
var G__19752 = arguments.length;
switch (G__19752) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_21279 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_21279(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_21280 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_21280(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_21284 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_21284(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_21288 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_21288(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_21289 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_21289(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21293 = arguments.length;
var i__5750__auto___21294 = (0);
while(true){
if((i__5750__auto___21294 < len__5749__auto___21293)){
args__5755__auto__.push((arguments[i__5750__auto___21294]));

var G__21295 = (i__5750__auto___21294 + (1));
i__5750__auto___21294 = G__21295;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19759){
var map__19760 = p__19759;
var map__19760__$1 = cljs.core.__destructure_map(map__19760);
var opts = map__19760__$1;
var statearr_19761_21296 = state;
(statearr_19761_21296[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_19762_21297 = state;
(statearr_19762_21297[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_19763_21301 = state;
(statearr_19763_21301[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19755){
var G__19756 = cljs.core.first(seq19755);
var seq19755__$1 = cljs.core.next(seq19755);
var G__19757 = cljs.core.first(seq19755__$1);
var seq19755__$2 = cljs.core.next(seq19755__$1);
var G__19758 = cljs.core.first(seq19755__$2);
var seq19755__$3 = cljs.core.next(seq19755__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19756,G__19757,G__19758,seq19755__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19764 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19765){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19765 = meta19765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19766,meta19765__$1){
var self__ = this;
var _19766__$1 = this;
return (new cljs.core.async.t_cljs$core$async19764(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19765__$1));
}));

(cljs.core.async.t_cljs$core$async19764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19766){
var self__ = this;
var _19766__$1 = this;
return self__.meta19765;
}));

(cljs.core.async.t_cljs$core$async19764.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19764.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19764.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19764.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19764.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19764.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19764.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19764.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19764.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19765","meta19765",-229139192,null)], null);
}));

(cljs.core.async.t_cljs$core$async19764.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19764");

(cljs.core.async.t_cljs$core$async19764.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async19764");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19764.
 */
cljs.core.async.__GT_t_cljs$core$async19764 = (function cljs$core$async$__GT_t_cljs$core$async19764(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19765){
return (new cljs.core.async.t_cljs$core$async19764(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19765));
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
var m = (new cljs.core.async.t_cljs$core$async19764(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__18605__auto___21317 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18606__auto__ = (function (){var switch__18343__auto__ = (function (state_19865){
var state_val_19866 = (state_19865[(1)]);
if((state_val_19866 === (7))){
var inst_19817 = (state_19865[(2)]);
var state_19865__$1 = state_19865;
if(cljs.core.truth_(inst_19817)){
var statearr_19868_21318 = state_19865__$1;
(statearr_19868_21318[(1)] = (8));

} else {
var statearr_19869_21319 = state_19865__$1;
(statearr_19869_21319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (20))){
var inst_19810 = (state_19865[(7)]);
var state_19865__$1 = state_19865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19865__$1,(23),out,inst_19810);
} else {
if((state_val_19866 === (1))){
var inst_19789 = calc_state();
var inst_19790 = cljs.core.__destructure_map(inst_19789);
var inst_19791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19790,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19790,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19790,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19794 = inst_19789;
var state_19865__$1 = (function (){var statearr_19870 = state_19865;
(statearr_19870[(8)] = inst_19791);

(statearr_19870[(9)] = inst_19792);

(statearr_19870[(10)] = inst_19793);

(statearr_19870[(11)] = inst_19794);

return statearr_19870;
})();
var statearr_19871_21321 = state_19865__$1;
(statearr_19871_21321[(2)] = null);

(statearr_19871_21321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (24))){
var inst_19800 = (state_19865[(12)]);
var inst_19794 = inst_19800;
var state_19865__$1 = (function (){var statearr_19879 = state_19865;
(statearr_19879[(11)] = inst_19794);

return statearr_19879;
})();
var statearr_19880_21322 = state_19865__$1;
(statearr_19880_21322[(2)] = null);

(statearr_19880_21322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (4))){
var inst_19810 = (state_19865[(7)]);
var inst_19812 = (state_19865[(13)]);
var inst_19809 = (state_19865[(2)]);
var inst_19810__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19809,(0),null);
var inst_19811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19809,(1),null);
var inst_19812__$1 = (inst_19810__$1 == null);
var state_19865__$1 = (function (){var statearr_19882 = state_19865;
(statearr_19882[(7)] = inst_19810__$1);

(statearr_19882[(14)] = inst_19811);

(statearr_19882[(13)] = inst_19812__$1);

return statearr_19882;
})();
if(cljs.core.truth_(inst_19812__$1)){
var statearr_19883_21323 = state_19865__$1;
(statearr_19883_21323[(1)] = (5));

} else {
var statearr_19884_21324 = state_19865__$1;
(statearr_19884_21324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (15))){
var inst_19801 = (state_19865[(15)]);
var inst_19835 = (state_19865[(16)]);
var inst_19835__$1 = cljs.core.empty_QMARK_(inst_19801);
var state_19865__$1 = (function (){var statearr_19888 = state_19865;
(statearr_19888[(16)] = inst_19835__$1);

return statearr_19888;
})();
if(inst_19835__$1){
var statearr_19890_21325 = state_19865__$1;
(statearr_19890_21325[(1)] = (17));

} else {
var statearr_19891_21326 = state_19865__$1;
(statearr_19891_21326[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (21))){
var inst_19800 = (state_19865[(12)]);
var inst_19794 = inst_19800;
var state_19865__$1 = (function (){var statearr_19892 = state_19865;
(statearr_19892[(11)] = inst_19794);

return statearr_19892;
})();
var statearr_19893_21327 = state_19865__$1;
(statearr_19893_21327[(2)] = null);

(statearr_19893_21327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (13))){
var inst_19827 = (state_19865[(2)]);
var inst_19828 = calc_state();
var inst_19794 = inst_19828;
var state_19865__$1 = (function (){var statearr_19897 = state_19865;
(statearr_19897[(17)] = inst_19827);

(statearr_19897[(11)] = inst_19794);

return statearr_19897;
})();
var statearr_19899_21328 = state_19865__$1;
(statearr_19899_21328[(2)] = null);

(statearr_19899_21328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (22))){
var inst_19855 = (state_19865[(2)]);
var state_19865__$1 = state_19865;
var statearr_19900_21329 = state_19865__$1;
(statearr_19900_21329[(2)] = inst_19855);

(statearr_19900_21329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (6))){
var inst_19811 = (state_19865[(14)]);
var inst_19815 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19811,change);
var state_19865__$1 = state_19865;
var statearr_19901_21332 = state_19865__$1;
(statearr_19901_21332[(2)] = inst_19815);

(statearr_19901_21332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (25))){
var state_19865__$1 = state_19865;
var statearr_19905_21333 = state_19865__$1;
(statearr_19905_21333[(2)] = null);

(statearr_19905_21333[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (17))){
var inst_19802 = (state_19865[(18)]);
var inst_19811 = (state_19865[(14)]);
var inst_19837 = (inst_19802.cljs$core$IFn$_invoke$arity$1 ? inst_19802.cljs$core$IFn$_invoke$arity$1(inst_19811) : inst_19802.call(null,inst_19811));
var inst_19838 = cljs.core.not(inst_19837);
var state_19865__$1 = state_19865;
var statearr_19907_21335 = state_19865__$1;
(statearr_19907_21335[(2)] = inst_19838);

(statearr_19907_21335[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (3))){
var inst_19859 = (state_19865[(2)]);
var state_19865__$1 = state_19865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19865__$1,inst_19859);
} else {
if((state_val_19866 === (12))){
var state_19865__$1 = state_19865;
var statearr_19909_21337 = state_19865__$1;
(statearr_19909_21337[(2)] = null);

(statearr_19909_21337[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (2))){
var inst_19794 = (state_19865[(11)]);
var inst_19800 = (state_19865[(12)]);
var inst_19800__$1 = cljs.core.__destructure_map(inst_19794);
var inst_19801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19800__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19800__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19800__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19865__$1 = (function (){var statearr_19910 = state_19865;
(statearr_19910[(12)] = inst_19800__$1);

(statearr_19910[(15)] = inst_19801);

(statearr_19910[(18)] = inst_19802);

return statearr_19910;
})();
return cljs.core.async.ioc_alts_BANG_(state_19865__$1,(4),inst_19803);
} else {
if((state_val_19866 === (23))){
var inst_19846 = (state_19865[(2)]);
var state_19865__$1 = state_19865;
if(cljs.core.truth_(inst_19846)){
var statearr_19911_21338 = state_19865__$1;
(statearr_19911_21338[(1)] = (24));

} else {
var statearr_19912_21339 = state_19865__$1;
(statearr_19912_21339[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (19))){
var inst_19841 = (state_19865[(2)]);
var state_19865__$1 = state_19865;
var statearr_19917_21341 = state_19865__$1;
(statearr_19917_21341[(2)] = inst_19841);

(statearr_19917_21341[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (11))){
var inst_19811 = (state_19865[(14)]);
var inst_19824 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19811);
var state_19865__$1 = state_19865;
var statearr_19922_21342 = state_19865__$1;
(statearr_19922_21342[(2)] = inst_19824);

(statearr_19922_21342[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (9))){
var inst_19801 = (state_19865[(15)]);
var inst_19811 = (state_19865[(14)]);
var inst_19832 = (state_19865[(19)]);
var inst_19832__$1 = (inst_19801.cljs$core$IFn$_invoke$arity$1 ? inst_19801.cljs$core$IFn$_invoke$arity$1(inst_19811) : inst_19801.call(null,inst_19811));
var state_19865__$1 = (function (){var statearr_19923 = state_19865;
(statearr_19923[(19)] = inst_19832__$1);

return statearr_19923;
})();
if(cljs.core.truth_(inst_19832__$1)){
var statearr_19924_21343 = state_19865__$1;
(statearr_19924_21343[(1)] = (14));

} else {
var statearr_19925_21344 = state_19865__$1;
(statearr_19925_21344[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (5))){
var inst_19812 = (state_19865[(13)]);
var state_19865__$1 = state_19865;
var statearr_19929_21349 = state_19865__$1;
(statearr_19929_21349[(2)] = inst_19812);

(statearr_19929_21349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (14))){
var inst_19832 = (state_19865[(19)]);
var state_19865__$1 = state_19865;
var statearr_19931_21350 = state_19865__$1;
(statearr_19931_21350[(2)] = inst_19832);

(statearr_19931_21350[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (26))){
var inst_19851 = (state_19865[(2)]);
var state_19865__$1 = state_19865;
var statearr_19935_21351 = state_19865__$1;
(statearr_19935_21351[(2)] = inst_19851);

(statearr_19935_21351[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (16))){
var inst_19843 = (state_19865[(2)]);
var state_19865__$1 = state_19865;
if(cljs.core.truth_(inst_19843)){
var statearr_19937_21352 = state_19865__$1;
(statearr_19937_21352[(1)] = (20));

} else {
var statearr_19938_21353 = state_19865__$1;
(statearr_19938_21353[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (10))){
var inst_19857 = (state_19865[(2)]);
var state_19865__$1 = state_19865;
var statearr_19939_21354 = state_19865__$1;
(statearr_19939_21354[(2)] = inst_19857);

(statearr_19939_21354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (18))){
var inst_19835 = (state_19865[(16)]);
var state_19865__$1 = state_19865;
var statearr_19943_21355 = state_19865__$1;
(statearr_19943_21355[(2)] = inst_19835);

(statearr_19943_21355[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (8))){
var inst_19810 = (state_19865[(7)]);
var inst_19819 = (inst_19810 == null);
var state_19865__$1 = state_19865;
if(cljs.core.truth_(inst_19819)){
var statearr_19944_21356 = state_19865__$1;
(statearr_19944_21356[(1)] = (11));

} else {
var statearr_19945_21357 = state_19865__$1;
(statearr_19945_21357[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__18344__auto__ = null;
var cljs$core$async$mix_$_state_machine__18344__auto____0 = (function (){
var statearr_19946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19946[(0)] = cljs$core$async$mix_$_state_machine__18344__auto__);

(statearr_19946[(1)] = (1));

return statearr_19946;
});
var cljs$core$async$mix_$_state_machine__18344__auto____1 = (function (state_19865){
while(true){
var ret_value__18345__auto__ = (function (){try{while(true){
var result__18346__auto__ = switch__18343__auto__(state_19865);
if(cljs.core.keyword_identical_QMARK_(result__18346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18346__auto__;
}
break;
}
}catch (e19948){var ex__18347__auto__ = e19948;
var statearr_19949_21359 = state_19865;
(statearr_19949_21359[(2)] = ex__18347__auto__);


if(cljs.core.seq((state_19865[(4)]))){
var statearr_19950_21360 = state_19865;
(statearr_19950_21360[(1)] = cljs.core.first((state_19865[(4)])));

} else {
throw ex__18347__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21361 = state_19865;
state_19865 = G__21361;
continue;
} else {
return ret_value__18345__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18344__auto__ = function(state_19865){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18344__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18344__auto____1.call(this,state_19865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18344__auto____0;
cljs$core$async$mix_$_state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18344__auto____1;
return cljs$core$async$mix_$_state_machine__18344__auto__;
})()
})();
var state__18607__auto__ = (function (){var statearr_19951 = f__18606__auto__();
(statearr_19951[(6)] = c__18605__auto___21317);

return statearr_19951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18607__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_21363 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_21363(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_21364 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_21364(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_21369 = (function() {
var G__21370 = null;
var G__21370__1 = (function (p){
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
var G__21370__2 = (function (p,v){
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
G__21370 = function(p,v){
switch(arguments.length){
case 1:
return G__21370__1.call(this,p);
case 2:
return G__21370__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21370.cljs$core$IFn$_invoke$arity$1 = G__21370__1;
G__21370.cljs$core$IFn$_invoke$arity$2 = G__21370__2;
return G__21370;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19961 = arguments.length;
switch (G__19961) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21369(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21369(p,v);
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
cljs.core.async.t_cljs$core$async19970 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19971){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19971 = meta19971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19972,meta19971__$1){
var self__ = this;
var _19972__$1 = this;
return (new cljs.core.async.t_cljs$core$async19970(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19971__$1));
}));

(cljs.core.async.t_cljs$core$async19970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19972){
var self__ = this;
var _19972__$1 = this;
return self__.meta19971;
}));

(cljs.core.async.t_cljs$core$async19970.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19970.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19970.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19970.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19970.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async19970.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19970.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19971","meta19971",854782122,null)], null);
}));

(cljs.core.async.t_cljs$core$async19970.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19970");

(cljs.core.async.t_cljs$core$async19970.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async19970");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19970.
 */
cljs.core.async.__GT_t_cljs$core$async19970 = (function cljs$core$async$__GT_t_cljs$core$async19970(ch,topic_fn,buf_fn,mults,ensure_mult,meta19971){
return (new cljs.core.async.t_cljs$core$async19970(ch,topic_fn,buf_fn,mults,ensure_mult,meta19971));
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
var G__19968 = arguments.length;
switch (G__19968) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__19963_SHARP_){
if(cljs.core.truth_((p1__19963_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19963_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19963_SHARP_.call(null,topic)))){
return p1__19963_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19963_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async19970(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__18605__auto___21377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18606__auto__ = (function (){var switch__18343__auto__ = (function (state_20059){
var state_val_20060 = (state_20059[(1)]);
if((state_val_20060 === (7))){
var inst_20053 = (state_20059[(2)]);
var state_20059__$1 = state_20059;
var statearr_20061_21378 = state_20059__$1;
(statearr_20061_21378[(2)] = inst_20053);

(statearr_20061_21378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (20))){
var state_20059__$1 = state_20059;
var statearr_20062_21379 = state_20059__$1;
(statearr_20062_21379[(2)] = null);

(statearr_20062_21379[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (1))){
var state_20059__$1 = state_20059;
var statearr_20063_21380 = state_20059__$1;
(statearr_20063_21380[(2)] = null);

(statearr_20063_21380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (24))){
var inst_20036 = (state_20059[(7)]);
var inst_20045 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_20036);
var state_20059__$1 = state_20059;
var statearr_20064_21381 = state_20059__$1;
(statearr_20064_21381[(2)] = inst_20045);

(statearr_20064_21381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (4))){
var inst_19988 = (state_20059[(8)]);
var inst_19988__$1 = (state_20059[(2)]);
var inst_19989 = (inst_19988__$1 == null);
var state_20059__$1 = (function (){var statearr_20065 = state_20059;
(statearr_20065[(8)] = inst_19988__$1);

return statearr_20065;
})();
if(cljs.core.truth_(inst_19989)){
var statearr_20066_21382 = state_20059__$1;
(statearr_20066_21382[(1)] = (5));

} else {
var statearr_20067_21383 = state_20059__$1;
(statearr_20067_21383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (15))){
var inst_20030 = (state_20059[(2)]);
var state_20059__$1 = state_20059;
var statearr_20068_21384 = state_20059__$1;
(statearr_20068_21384[(2)] = inst_20030);

(statearr_20068_21384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (21))){
var inst_20050 = (state_20059[(2)]);
var state_20059__$1 = (function (){var statearr_20069 = state_20059;
(statearr_20069[(9)] = inst_20050);

return statearr_20069;
})();
var statearr_20070_21389 = state_20059__$1;
(statearr_20070_21389[(2)] = null);

(statearr_20070_21389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (13))){
var inst_20012 = (state_20059[(10)]);
var inst_20014 = cljs.core.chunked_seq_QMARK_(inst_20012);
var state_20059__$1 = state_20059;
if(inst_20014){
var statearr_20071_21390 = state_20059__$1;
(statearr_20071_21390[(1)] = (16));

} else {
var statearr_20072_21391 = state_20059__$1;
(statearr_20072_21391[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (22))){
var inst_20042 = (state_20059[(2)]);
var state_20059__$1 = state_20059;
if(cljs.core.truth_(inst_20042)){
var statearr_20073_21393 = state_20059__$1;
(statearr_20073_21393[(1)] = (23));

} else {
var statearr_20074_21394 = state_20059__$1;
(statearr_20074_21394[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (6))){
var inst_19988 = (state_20059[(8)]);
var inst_20036 = (state_20059[(7)]);
var inst_20038 = (state_20059[(11)]);
var inst_20036__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19988) : topic_fn.call(null,inst_19988));
var inst_20037 = cljs.core.deref(mults);
var inst_20038__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20037,inst_20036__$1);
var state_20059__$1 = (function (){var statearr_20075 = state_20059;
(statearr_20075[(7)] = inst_20036__$1);

(statearr_20075[(11)] = inst_20038__$1);

return statearr_20075;
})();
if(cljs.core.truth_(inst_20038__$1)){
var statearr_20076_21395 = state_20059__$1;
(statearr_20076_21395[(1)] = (19));

} else {
var statearr_20077_21396 = state_20059__$1;
(statearr_20077_21396[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (25))){
var inst_20047 = (state_20059[(2)]);
var state_20059__$1 = state_20059;
var statearr_20078_21400 = state_20059__$1;
(statearr_20078_21400[(2)] = inst_20047);

(statearr_20078_21400[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (17))){
var inst_20012 = (state_20059[(10)]);
var inst_20021 = cljs.core.first(inst_20012);
var inst_20022 = cljs.core.async.muxch_STAR_(inst_20021);
var inst_20023 = cljs.core.async.close_BANG_(inst_20022);
var inst_20024 = cljs.core.next(inst_20012);
var inst_19998 = inst_20024;
var inst_19999 = null;
var inst_20000 = (0);
var inst_20001 = (0);
var state_20059__$1 = (function (){var statearr_20079 = state_20059;
(statearr_20079[(12)] = inst_20023);

(statearr_20079[(13)] = inst_19998);

(statearr_20079[(14)] = inst_19999);

(statearr_20079[(15)] = inst_20000);

(statearr_20079[(16)] = inst_20001);

return statearr_20079;
})();
var statearr_20080_21402 = state_20059__$1;
(statearr_20080_21402[(2)] = null);

(statearr_20080_21402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (3))){
var inst_20055 = (state_20059[(2)]);
var state_20059__$1 = state_20059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20059__$1,inst_20055);
} else {
if((state_val_20060 === (12))){
var inst_20032 = (state_20059[(2)]);
var state_20059__$1 = state_20059;
var statearr_20081_21403 = state_20059__$1;
(statearr_20081_21403[(2)] = inst_20032);

(statearr_20081_21403[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (2))){
var state_20059__$1 = state_20059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20059__$1,(4),ch);
} else {
if((state_val_20060 === (23))){
var state_20059__$1 = state_20059;
var statearr_20082_21404 = state_20059__$1;
(statearr_20082_21404[(2)] = null);

(statearr_20082_21404[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (19))){
var inst_20038 = (state_20059[(11)]);
var inst_19988 = (state_20059[(8)]);
var inst_20040 = cljs.core.async.muxch_STAR_(inst_20038);
var state_20059__$1 = state_20059;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20059__$1,(22),inst_20040,inst_19988);
} else {
if((state_val_20060 === (11))){
var inst_19998 = (state_20059[(13)]);
var inst_20012 = (state_20059[(10)]);
var inst_20012__$1 = cljs.core.seq(inst_19998);
var state_20059__$1 = (function (){var statearr_20083 = state_20059;
(statearr_20083[(10)] = inst_20012__$1);

return statearr_20083;
})();
if(inst_20012__$1){
var statearr_20084_21405 = state_20059__$1;
(statearr_20084_21405[(1)] = (13));

} else {
var statearr_20085_21406 = state_20059__$1;
(statearr_20085_21406[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (9))){
var inst_20034 = (state_20059[(2)]);
var state_20059__$1 = state_20059;
var statearr_20086_21407 = state_20059__$1;
(statearr_20086_21407[(2)] = inst_20034);

(statearr_20086_21407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (5))){
var inst_19995 = cljs.core.deref(mults);
var inst_19996 = cljs.core.vals(inst_19995);
var inst_19997 = cljs.core.seq(inst_19996);
var inst_19998 = inst_19997;
var inst_19999 = null;
var inst_20000 = (0);
var inst_20001 = (0);
var state_20059__$1 = (function (){var statearr_20087 = state_20059;
(statearr_20087[(13)] = inst_19998);

(statearr_20087[(14)] = inst_19999);

(statearr_20087[(15)] = inst_20000);

(statearr_20087[(16)] = inst_20001);

return statearr_20087;
})();
var statearr_20088_21408 = state_20059__$1;
(statearr_20088_21408[(2)] = null);

(statearr_20088_21408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (14))){
var state_20059__$1 = state_20059;
var statearr_20092_21409 = state_20059__$1;
(statearr_20092_21409[(2)] = null);

(statearr_20092_21409[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (16))){
var inst_20012 = (state_20059[(10)]);
var inst_20016 = cljs.core.chunk_first(inst_20012);
var inst_20017 = cljs.core.chunk_rest(inst_20012);
var inst_20018 = cljs.core.count(inst_20016);
var inst_19998 = inst_20017;
var inst_19999 = inst_20016;
var inst_20000 = inst_20018;
var inst_20001 = (0);
var state_20059__$1 = (function (){var statearr_20093 = state_20059;
(statearr_20093[(13)] = inst_19998);

(statearr_20093[(14)] = inst_19999);

(statearr_20093[(15)] = inst_20000);

(statearr_20093[(16)] = inst_20001);

return statearr_20093;
})();
var statearr_20094_21410 = state_20059__$1;
(statearr_20094_21410[(2)] = null);

(statearr_20094_21410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (10))){
var inst_19999 = (state_20059[(14)]);
var inst_20001 = (state_20059[(16)]);
var inst_19998 = (state_20059[(13)]);
var inst_20000 = (state_20059[(15)]);
var inst_20006 = cljs.core._nth(inst_19999,inst_20001);
var inst_20007 = cljs.core.async.muxch_STAR_(inst_20006);
var inst_20008 = cljs.core.async.close_BANG_(inst_20007);
var inst_20009 = (inst_20001 + (1));
var tmp20089 = inst_19999;
var tmp20090 = inst_19998;
var tmp20091 = inst_20000;
var inst_19998__$1 = tmp20090;
var inst_19999__$1 = tmp20089;
var inst_20000__$1 = tmp20091;
var inst_20001__$1 = inst_20009;
var state_20059__$1 = (function (){var statearr_20095 = state_20059;
(statearr_20095[(17)] = inst_20008);

(statearr_20095[(13)] = inst_19998__$1);

(statearr_20095[(14)] = inst_19999__$1);

(statearr_20095[(15)] = inst_20000__$1);

(statearr_20095[(16)] = inst_20001__$1);

return statearr_20095;
})();
var statearr_20096_21411 = state_20059__$1;
(statearr_20096_21411[(2)] = null);

(statearr_20096_21411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (18))){
var inst_20027 = (state_20059[(2)]);
var state_20059__$1 = state_20059;
var statearr_20097_21412 = state_20059__$1;
(statearr_20097_21412[(2)] = inst_20027);

(statearr_20097_21412[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (8))){
var inst_20001 = (state_20059[(16)]);
var inst_20000 = (state_20059[(15)]);
var inst_20003 = (inst_20001 < inst_20000);
var inst_20004 = inst_20003;
var state_20059__$1 = state_20059;
if(cljs.core.truth_(inst_20004)){
var statearr_20098_21413 = state_20059__$1;
(statearr_20098_21413[(1)] = (10));

} else {
var statearr_20099_21414 = state_20059__$1;
(statearr_20099_21414[(1)] = (11));

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
var cljs$core$async$state_machine__18344__auto__ = null;
var cljs$core$async$state_machine__18344__auto____0 = (function (){
var statearr_20100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20100[(0)] = cljs$core$async$state_machine__18344__auto__);

(statearr_20100[(1)] = (1));

return statearr_20100;
});
var cljs$core$async$state_machine__18344__auto____1 = (function (state_20059){
while(true){
var ret_value__18345__auto__ = (function (){try{while(true){
var result__18346__auto__ = switch__18343__auto__(state_20059);
if(cljs.core.keyword_identical_QMARK_(result__18346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18346__auto__;
}
break;
}
}catch (e20101){var ex__18347__auto__ = e20101;
var statearr_20102_21416 = state_20059;
(statearr_20102_21416[(2)] = ex__18347__auto__);


if(cljs.core.seq((state_20059[(4)]))){
var statearr_20103_21417 = state_20059;
(statearr_20103_21417[(1)] = cljs.core.first((state_20059[(4)])));

} else {
throw ex__18347__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21422 = state_20059;
state_20059 = G__21422;
continue;
} else {
return ret_value__18345__auto__;
}
break;
}
});
cljs$core$async$state_machine__18344__auto__ = function(state_20059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18344__auto____1.call(this,state_20059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18344__auto____0;
cljs$core$async$state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18344__auto____1;
return cljs$core$async$state_machine__18344__auto__;
})()
})();
var state__18607__auto__ = (function (){var statearr_20104 = f__18606__auto__();
(statearr_20104[(6)] = c__18605__auto___21377);

return statearr_20104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18607__auto__);
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
var G__20106 = arguments.length;
switch (G__20106) {
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
var G__20108 = arguments.length;
switch (G__20108) {
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
var G__20110 = arguments.length;
switch (G__20110) {
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
var c__18605__auto___21433 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18606__auto__ = (function (){var switch__18343__auto__ = (function (state_20155){
var state_val_20156 = (state_20155[(1)]);
if((state_val_20156 === (7))){
var state_20155__$1 = state_20155;
var statearr_20157_21438 = state_20155__$1;
(statearr_20157_21438[(2)] = null);

(statearr_20157_21438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (1))){
var state_20155__$1 = state_20155;
var statearr_20159_21439 = state_20155__$1;
(statearr_20159_21439[(2)] = null);

(statearr_20159_21439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (4))){
var inst_20114 = (state_20155[(7)]);
var inst_20113 = (state_20155[(8)]);
var inst_20116 = (inst_20114 < inst_20113);
var state_20155__$1 = state_20155;
if(cljs.core.truth_(inst_20116)){
var statearr_20161_21440 = state_20155__$1;
(statearr_20161_21440[(1)] = (6));

} else {
var statearr_20162_21441 = state_20155__$1;
(statearr_20162_21441[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (15))){
var inst_20141 = (state_20155[(9)]);
var inst_20146 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_20141);
var state_20155__$1 = state_20155;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20155__$1,(17),out,inst_20146);
} else {
if((state_val_20156 === (13))){
var inst_20141 = (state_20155[(9)]);
var inst_20141__$1 = (state_20155[(2)]);
var inst_20142 = cljs.core.some(cljs.core.nil_QMARK_,inst_20141__$1);
var state_20155__$1 = (function (){var statearr_20163 = state_20155;
(statearr_20163[(9)] = inst_20141__$1);

return statearr_20163;
})();
if(cljs.core.truth_(inst_20142)){
var statearr_20164_21442 = state_20155__$1;
(statearr_20164_21442[(1)] = (14));

} else {
var statearr_20165_21443 = state_20155__$1;
(statearr_20165_21443[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (6))){
var state_20155__$1 = state_20155;
var statearr_20166_21444 = state_20155__$1;
(statearr_20166_21444[(2)] = null);

(statearr_20166_21444[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (17))){
var inst_20148 = (state_20155[(2)]);
var state_20155__$1 = (function (){var statearr_20168 = state_20155;
(statearr_20168[(10)] = inst_20148);

return statearr_20168;
})();
var statearr_20169_21445 = state_20155__$1;
(statearr_20169_21445[(2)] = null);

(statearr_20169_21445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (3))){
var inst_20153 = (state_20155[(2)]);
var state_20155__$1 = state_20155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20155__$1,inst_20153);
} else {
if((state_val_20156 === (12))){
var _ = (function (){var statearr_20170 = state_20155;
(statearr_20170[(4)] = cljs.core.rest((state_20155[(4)])));

return statearr_20170;
})();
var state_20155__$1 = state_20155;
var ex20167 = (state_20155__$1[(2)]);
var statearr_20171_21446 = state_20155__$1;
(statearr_20171_21446[(5)] = ex20167);


if((ex20167 instanceof Object)){
var statearr_20172_21447 = state_20155__$1;
(statearr_20172_21447[(1)] = (11));

(statearr_20172_21447[(5)] = null);

} else {
throw ex20167;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (2))){
var inst_20112 = cljs.core.reset_BANG_(dctr,cnt);
var inst_20113 = cnt;
var inst_20114 = (0);
var state_20155__$1 = (function (){var statearr_20174 = state_20155;
(statearr_20174[(11)] = inst_20112);

(statearr_20174[(8)] = inst_20113);

(statearr_20174[(7)] = inst_20114);

return statearr_20174;
})();
var statearr_20176_21448 = state_20155__$1;
(statearr_20176_21448[(2)] = null);

(statearr_20176_21448[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (11))){
var inst_20120 = (state_20155[(2)]);
var inst_20121 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_20155__$1 = (function (){var statearr_20177 = state_20155;
(statearr_20177[(12)] = inst_20120);

return statearr_20177;
})();
var statearr_20178_21449 = state_20155__$1;
(statearr_20178_21449[(2)] = inst_20121);

(statearr_20178_21449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (9))){
var inst_20114 = (state_20155[(7)]);
var _ = (function (){var statearr_20179 = state_20155;
(statearr_20179[(4)] = cljs.core.cons((12),(state_20155[(4)])));

return statearr_20179;
})();
var inst_20127 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_20114) : chs__$1.call(null,inst_20114));
var inst_20128 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_20114) : done.call(null,inst_20114));
var inst_20129 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_20127,inst_20128);
var ___$1 = (function (){var statearr_20180 = state_20155;
(statearr_20180[(4)] = cljs.core.rest((state_20155[(4)])));

return statearr_20180;
})();
var state_20155__$1 = state_20155;
var statearr_20181_21450 = state_20155__$1;
(statearr_20181_21450[(2)] = inst_20129);

(statearr_20181_21450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (5))){
var inst_20139 = (state_20155[(2)]);
var state_20155__$1 = (function (){var statearr_20182 = state_20155;
(statearr_20182[(13)] = inst_20139);

return statearr_20182;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20155__$1,(13),dchan);
} else {
if((state_val_20156 === (14))){
var inst_20144 = cljs.core.async.close_BANG_(out);
var state_20155__$1 = state_20155;
var statearr_20183_21451 = state_20155__$1;
(statearr_20183_21451[(2)] = inst_20144);

(statearr_20183_21451[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (16))){
var inst_20151 = (state_20155[(2)]);
var state_20155__$1 = state_20155;
var statearr_20184_21452 = state_20155__$1;
(statearr_20184_21452[(2)] = inst_20151);

(statearr_20184_21452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (10))){
var inst_20114 = (state_20155[(7)]);
var inst_20132 = (state_20155[(2)]);
var inst_20133 = (inst_20114 + (1));
var inst_20114__$1 = inst_20133;
var state_20155__$1 = (function (){var statearr_20185 = state_20155;
(statearr_20185[(14)] = inst_20132);

(statearr_20185[(7)] = inst_20114__$1);

return statearr_20185;
})();
var statearr_20186_21454 = state_20155__$1;
(statearr_20186_21454[(2)] = null);

(statearr_20186_21454[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (8))){
var inst_20137 = (state_20155[(2)]);
var state_20155__$1 = state_20155;
var statearr_20187_21456 = state_20155__$1;
(statearr_20187_21456[(2)] = inst_20137);

(statearr_20187_21456[(1)] = (5));


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
var cljs$core$async$state_machine__18344__auto__ = null;
var cljs$core$async$state_machine__18344__auto____0 = (function (){
var statearr_20190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20190[(0)] = cljs$core$async$state_machine__18344__auto__);

(statearr_20190[(1)] = (1));

return statearr_20190;
});
var cljs$core$async$state_machine__18344__auto____1 = (function (state_20155){
while(true){
var ret_value__18345__auto__ = (function (){try{while(true){
var result__18346__auto__ = switch__18343__auto__(state_20155);
if(cljs.core.keyword_identical_QMARK_(result__18346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18346__auto__;
}
break;
}
}catch (e20195){var ex__18347__auto__ = e20195;
var statearr_20196_21458 = state_20155;
(statearr_20196_21458[(2)] = ex__18347__auto__);


if(cljs.core.seq((state_20155[(4)]))){
var statearr_20199_21459 = state_20155;
(statearr_20199_21459[(1)] = cljs.core.first((state_20155[(4)])));

} else {
throw ex__18347__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21461 = state_20155;
state_20155 = G__21461;
continue;
} else {
return ret_value__18345__auto__;
}
break;
}
});
cljs$core$async$state_machine__18344__auto__ = function(state_20155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18344__auto____1.call(this,state_20155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18344__auto____0;
cljs$core$async$state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18344__auto____1;
return cljs$core$async$state_machine__18344__auto__;
})()
})();
var state__18607__auto__ = (function (){var statearr_20203 = f__18606__auto__();
(statearr_20203[(6)] = c__18605__auto___21433);

return statearr_20203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18607__auto__);
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
var G__20206 = arguments.length;
switch (G__20206) {
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
var c__18605__auto___21465 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18606__auto__ = (function (){var switch__18343__auto__ = (function (state_20241){
var state_val_20242 = (state_20241[(1)]);
if((state_val_20242 === (7))){
var inst_20220 = (state_20241[(7)]);
var inst_20221 = (state_20241[(8)]);
var inst_20220__$1 = (state_20241[(2)]);
var inst_20221__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20220__$1,(0),null);
var inst_20222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20220__$1,(1),null);
var inst_20223 = (inst_20221__$1 == null);
var state_20241__$1 = (function (){var statearr_20243 = state_20241;
(statearr_20243[(7)] = inst_20220__$1);

(statearr_20243[(8)] = inst_20221__$1);

(statearr_20243[(9)] = inst_20222);

return statearr_20243;
})();
if(cljs.core.truth_(inst_20223)){
var statearr_20244_21467 = state_20241__$1;
(statearr_20244_21467[(1)] = (8));

} else {
var statearr_20245_21468 = state_20241__$1;
(statearr_20245_21468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20242 === (1))){
var inst_20210 = cljs.core.vec(chs);
var inst_20211 = inst_20210;
var state_20241__$1 = (function (){var statearr_20246 = state_20241;
(statearr_20246[(10)] = inst_20211);

return statearr_20246;
})();
var statearr_20247_21469 = state_20241__$1;
(statearr_20247_21469[(2)] = null);

(statearr_20247_21469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20242 === (4))){
var inst_20211 = (state_20241[(10)]);
var state_20241__$1 = state_20241;
return cljs.core.async.ioc_alts_BANG_(state_20241__$1,(7),inst_20211);
} else {
if((state_val_20242 === (6))){
var inst_20237 = (state_20241[(2)]);
var state_20241__$1 = state_20241;
var statearr_20248_21470 = state_20241__$1;
(statearr_20248_21470[(2)] = inst_20237);

(statearr_20248_21470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20242 === (3))){
var inst_20239 = (state_20241[(2)]);
var state_20241__$1 = state_20241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20241__$1,inst_20239);
} else {
if((state_val_20242 === (2))){
var inst_20211 = (state_20241[(10)]);
var inst_20213 = cljs.core.count(inst_20211);
var inst_20214 = (inst_20213 > (0));
var state_20241__$1 = state_20241;
if(cljs.core.truth_(inst_20214)){
var statearr_20250_21471 = state_20241__$1;
(statearr_20250_21471[(1)] = (4));

} else {
var statearr_20251_21472 = state_20241__$1;
(statearr_20251_21472[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20242 === (11))){
var inst_20211 = (state_20241[(10)]);
var inst_20230 = (state_20241[(2)]);
var tmp20249 = inst_20211;
var inst_20211__$1 = tmp20249;
var state_20241__$1 = (function (){var statearr_20252 = state_20241;
(statearr_20252[(11)] = inst_20230);

(statearr_20252[(10)] = inst_20211__$1);

return statearr_20252;
})();
var statearr_20253_21473 = state_20241__$1;
(statearr_20253_21473[(2)] = null);

(statearr_20253_21473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20242 === (9))){
var inst_20221 = (state_20241[(8)]);
var state_20241__$1 = state_20241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20241__$1,(11),out,inst_20221);
} else {
if((state_val_20242 === (5))){
var inst_20235 = cljs.core.async.close_BANG_(out);
var state_20241__$1 = state_20241;
var statearr_20273_21474 = state_20241__$1;
(statearr_20273_21474[(2)] = inst_20235);

(statearr_20273_21474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20242 === (10))){
var inst_20233 = (state_20241[(2)]);
var state_20241__$1 = state_20241;
var statearr_20284_21475 = state_20241__$1;
(statearr_20284_21475[(2)] = inst_20233);

(statearr_20284_21475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20242 === (8))){
var inst_20211 = (state_20241[(10)]);
var inst_20220 = (state_20241[(7)]);
var inst_20221 = (state_20241[(8)]);
var inst_20222 = (state_20241[(9)]);
var inst_20225 = (function (){var cs = inst_20211;
var vec__20216 = inst_20220;
var v = inst_20221;
var c = inst_20222;
return (function (p1__20204_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__20204_SHARP_);
});
})();
var inst_20226 = cljs.core.filterv(inst_20225,inst_20211);
var inst_20211__$1 = inst_20226;
var state_20241__$1 = (function (){var statearr_20288 = state_20241;
(statearr_20288[(10)] = inst_20211__$1);

return statearr_20288;
})();
var statearr_20289_21476 = state_20241__$1;
(statearr_20289_21476[(2)] = null);

(statearr_20289_21476[(1)] = (2));


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
var cljs$core$async$state_machine__18344__auto__ = null;
var cljs$core$async$state_machine__18344__auto____0 = (function (){
var statearr_20294 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20294[(0)] = cljs$core$async$state_machine__18344__auto__);

(statearr_20294[(1)] = (1));

return statearr_20294;
});
var cljs$core$async$state_machine__18344__auto____1 = (function (state_20241){
while(true){
var ret_value__18345__auto__ = (function (){try{while(true){
var result__18346__auto__ = switch__18343__auto__(state_20241);
if(cljs.core.keyword_identical_QMARK_(result__18346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18346__auto__;
}
break;
}
}catch (e20295){var ex__18347__auto__ = e20295;
var statearr_20296_21477 = state_20241;
(statearr_20296_21477[(2)] = ex__18347__auto__);


if(cljs.core.seq((state_20241[(4)]))){
var statearr_20297_21478 = state_20241;
(statearr_20297_21478[(1)] = cljs.core.first((state_20241[(4)])));

} else {
throw ex__18347__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21479 = state_20241;
state_20241 = G__21479;
continue;
} else {
return ret_value__18345__auto__;
}
break;
}
});
cljs$core$async$state_machine__18344__auto__ = function(state_20241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18344__auto____1.call(this,state_20241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18344__auto____0;
cljs$core$async$state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18344__auto____1;
return cljs$core$async$state_machine__18344__auto__;
})()
})();
var state__18607__auto__ = (function (){var statearr_20298 = f__18606__auto__();
(statearr_20298[(6)] = c__18605__auto___21465);

return statearr_20298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18607__auto__);
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
var G__20304 = arguments.length;
switch (G__20304) {
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
var c__18605__auto___21482 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18606__auto__ = (function (){var switch__18343__auto__ = (function (state_20332){
var state_val_20333 = (state_20332[(1)]);
if((state_val_20333 === (7))){
var inst_20313 = (state_20332[(7)]);
var inst_20313__$1 = (state_20332[(2)]);
var inst_20314 = (inst_20313__$1 == null);
var inst_20315 = cljs.core.not(inst_20314);
var state_20332__$1 = (function (){var statearr_20334 = state_20332;
(statearr_20334[(7)] = inst_20313__$1);

return statearr_20334;
})();
if(inst_20315){
var statearr_20335_21483 = state_20332__$1;
(statearr_20335_21483[(1)] = (8));

} else {
var statearr_20336_21484 = state_20332__$1;
(statearr_20336_21484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (1))){
var inst_20307 = (0);
var state_20332__$1 = (function (){var statearr_20337 = state_20332;
(statearr_20337[(8)] = inst_20307);

return statearr_20337;
})();
var statearr_20338_21485 = state_20332__$1;
(statearr_20338_21485[(2)] = null);

(statearr_20338_21485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (4))){
var state_20332__$1 = state_20332;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20332__$1,(7),ch);
} else {
if((state_val_20333 === (6))){
var inst_20327 = (state_20332[(2)]);
var state_20332__$1 = state_20332;
var statearr_20339_21486 = state_20332__$1;
(statearr_20339_21486[(2)] = inst_20327);

(statearr_20339_21486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (3))){
var inst_20329 = (state_20332[(2)]);
var inst_20330 = cljs.core.async.close_BANG_(out);
var state_20332__$1 = (function (){var statearr_20340 = state_20332;
(statearr_20340[(9)] = inst_20329);

return statearr_20340;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20332__$1,inst_20330);
} else {
if((state_val_20333 === (2))){
var inst_20307 = (state_20332[(8)]);
var inst_20310 = (inst_20307 < n);
var state_20332__$1 = state_20332;
if(cljs.core.truth_(inst_20310)){
var statearr_20341_21491 = state_20332__$1;
(statearr_20341_21491[(1)] = (4));

} else {
var statearr_20342_21492 = state_20332__$1;
(statearr_20342_21492[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (11))){
var inst_20307 = (state_20332[(8)]);
var inst_20318 = (state_20332[(2)]);
var inst_20320 = (inst_20307 + (1));
var inst_20307__$1 = inst_20320;
var state_20332__$1 = (function (){var statearr_20345 = state_20332;
(statearr_20345[(10)] = inst_20318);

(statearr_20345[(8)] = inst_20307__$1);

return statearr_20345;
})();
var statearr_20346_21497 = state_20332__$1;
(statearr_20346_21497[(2)] = null);

(statearr_20346_21497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (9))){
var state_20332__$1 = state_20332;
var statearr_20347_21498 = state_20332__$1;
(statearr_20347_21498[(2)] = null);

(statearr_20347_21498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (5))){
var state_20332__$1 = state_20332;
var statearr_20348_21499 = state_20332__$1;
(statearr_20348_21499[(2)] = null);

(statearr_20348_21499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (10))){
var inst_20324 = (state_20332[(2)]);
var state_20332__$1 = state_20332;
var statearr_20349_21500 = state_20332__$1;
(statearr_20349_21500[(2)] = inst_20324);

(statearr_20349_21500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20333 === (8))){
var inst_20313 = (state_20332[(7)]);
var state_20332__$1 = state_20332;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20332__$1,(11),out,inst_20313);
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
var cljs$core$async$state_machine__18344__auto__ = null;
var cljs$core$async$state_machine__18344__auto____0 = (function (){
var statearr_20352 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20352[(0)] = cljs$core$async$state_machine__18344__auto__);

(statearr_20352[(1)] = (1));

return statearr_20352;
});
var cljs$core$async$state_machine__18344__auto____1 = (function (state_20332){
while(true){
var ret_value__18345__auto__ = (function (){try{while(true){
var result__18346__auto__ = switch__18343__auto__(state_20332);
if(cljs.core.keyword_identical_QMARK_(result__18346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18346__auto__;
}
break;
}
}catch (e20356){var ex__18347__auto__ = e20356;
var statearr_20357_21501 = state_20332;
(statearr_20357_21501[(2)] = ex__18347__auto__);


if(cljs.core.seq((state_20332[(4)]))){
var statearr_20358_21502 = state_20332;
(statearr_20358_21502[(1)] = cljs.core.first((state_20332[(4)])));

} else {
throw ex__18347__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21506 = state_20332;
state_20332 = G__21506;
continue;
} else {
return ret_value__18345__auto__;
}
break;
}
});
cljs$core$async$state_machine__18344__auto__ = function(state_20332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18344__auto____1.call(this,state_20332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18344__auto____0;
cljs$core$async$state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18344__auto____1;
return cljs$core$async$state_machine__18344__auto__;
})()
})();
var state__18607__auto__ = (function (){var statearr_20359 = f__18606__auto__();
(statearr_20359[(6)] = c__18605__auto___21482);

return statearr_20359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18607__auto__);
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
cljs.core.async.t_cljs$core$async20364 = (function (f,ch,meta20362,_,fn1,meta20365){
this.f = f;
this.ch = ch;
this.meta20362 = meta20362;
this._ = _;
this.fn1 = fn1;
this.meta20365 = meta20365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20366,meta20365__$1){
var self__ = this;
var _20366__$1 = this;
return (new cljs.core.async.t_cljs$core$async20364(self__.f,self__.ch,self__.meta20362,self__._,self__.fn1,meta20365__$1));
}));

(cljs.core.async.t_cljs$core$async20364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20366){
var self__ = this;
var _20366__$1 = this;
return self__.meta20365;
}));

(cljs.core.async.t_cljs$core$async20364.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20364.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async20364.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20364.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__20360_SHARP_){
var G__20372 = (((p1__20360_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20360_SHARP_) : self__.f.call(null,p1__20360_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20372) : f1.call(null,G__20372));
});
}));

(cljs.core.async.t_cljs$core$async20364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20362","meta20362",-681221034,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20361","cljs.core.async/t_cljs$core$async20361",1293545386,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20365","meta20365",-1450996086,null)], null);
}));

(cljs.core.async.t_cljs$core$async20364.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20364");

(cljs.core.async.t_cljs$core$async20364.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async20364");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20364.
 */
cljs.core.async.__GT_t_cljs$core$async20364 = (function cljs$core$async$__GT_t_cljs$core$async20364(f,ch,meta20362,_,fn1,meta20365){
return (new cljs.core.async.t_cljs$core$async20364(f,ch,meta20362,_,fn1,meta20365));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20361 = (function (f,ch,meta20362){
this.f = f;
this.ch = ch;
this.meta20362 = meta20362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20363,meta20362__$1){
var self__ = this;
var _20363__$1 = this;
return (new cljs.core.async.t_cljs$core$async20361(self__.f,self__.ch,meta20362__$1));
}));

(cljs.core.async.t_cljs$core$async20361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20363){
var self__ = this;
var _20363__$1 = this;
return self__.meta20362;
}));

(cljs.core.async.t_cljs$core$async20361.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20361.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20361.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20361.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20361.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async20364(self__.f,self__.ch,self__.meta20362,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20375 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20375) : self__.f.call(null,G__20375));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async20361.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20361.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async20361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20362","meta20362",-681221034,null)], null);
}));

(cljs.core.async.t_cljs$core$async20361.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20361");

(cljs.core.async.t_cljs$core$async20361.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async20361");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20361.
 */
cljs.core.async.__GT_t_cljs$core$async20361 = (function cljs$core$async$__GT_t_cljs$core$async20361(f,ch,meta20362){
return (new cljs.core.async.t_cljs$core$async20361(f,ch,meta20362));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async20361(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20381 = (function (f,ch,meta20382){
this.f = f;
this.ch = ch;
this.meta20382 = meta20382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20383,meta20382__$1){
var self__ = this;
var _20383__$1 = this;
return (new cljs.core.async.t_cljs$core$async20381(self__.f,self__.ch,meta20382__$1));
}));

(cljs.core.async.t_cljs$core$async20381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20383){
var self__ = this;
var _20383__$1 = this;
return self__.meta20382;
}));

(cljs.core.async.t_cljs$core$async20381.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20381.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20381.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20381.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20381.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20381.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async20381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20382","meta20382",-117174901,null)], null);
}));

(cljs.core.async.t_cljs$core$async20381.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20381");

(cljs.core.async.t_cljs$core$async20381.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async20381");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20381.
 */
cljs.core.async.__GT_t_cljs$core$async20381 = (function cljs$core$async$__GT_t_cljs$core$async20381(f,ch,meta20382){
return (new cljs.core.async.t_cljs$core$async20381(f,ch,meta20382));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async20381(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20385 = (function (p,ch,meta20386){
this.p = p;
this.ch = ch;
this.meta20386 = meta20386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20387,meta20386__$1){
var self__ = this;
var _20387__$1 = this;
return (new cljs.core.async.t_cljs$core$async20385(self__.p,self__.ch,meta20386__$1));
}));

(cljs.core.async.t_cljs$core$async20385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20387){
var self__ = this;
var _20387__$1 = this;
return self__.meta20386;
}));

(cljs.core.async.t_cljs$core$async20385.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20385.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20385.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20385.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20385.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20385.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20385.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async20385.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20386","meta20386",-1452567007,null)], null);
}));

(cljs.core.async.t_cljs$core$async20385.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20385");

(cljs.core.async.t_cljs$core$async20385.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async20385");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20385.
 */
cljs.core.async.__GT_t_cljs$core$async20385 = (function cljs$core$async$__GT_t_cljs$core$async20385(p,ch,meta20386){
return (new cljs.core.async.t_cljs$core$async20385(p,ch,meta20386));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async20385(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20396 = arguments.length;
switch (G__20396) {
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
var c__18605__auto___21522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18606__auto__ = (function (){var switch__18343__auto__ = (function (state_20422){
var state_val_20423 = (state_20422[(1)]);
if((state_val_20423 === (7))){
var inst_20415 = (state_20422[(2)]);
var state_20422__$1 = state_20422;
var statearr_20424_21523 = state_20422__$1;
(statearr_20424_21523[(2)] = inst_20415);

(statearr_20424_21523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (1))){
var state_20422__$1 = state_20422;
var statearr_20425_21524 = state_20422__$1;
(statearr_20425_21524[(2)] = null);

(statearr_20425_21524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (4))){
var inst_20401 = (state_20422[(7)]);
var inst_20401__$1 = (state_20422[(2)]);
var inst_20402 = (inst_20401__$1 == null);
var state_20422__$1 = (function (){var statearr_20426 = state_20422;
(statearr_20426[(7)] = inst_20401__$1);

return statearr_20426;
})();
if(cljs.core.truth_(inst_20402)){
var statearr_20427_21529 = state_20422__$1;
(statearr_20427_21529[(1)] = (5));

} else {
var statearr_20428_21530 = state_20422__$1;
(statearr_20428_21530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (6))){
var inst_20401 = (state_20422[(7)]);
var inst_20406 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20401) : p.call(null,inst_20401));
var state_20422__$1 = state_20422;
if(cljs.core.truth_(inst_20406)){
var statearr_20429_21532 = state_20422__$1;
(statearr_20429_21532[(1)] = (8));

} else {
var statearr_20430_21533 = state_20422__$1;
(statearr_20430_21533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (3))){
var inst_20417 = (state_20422[(2)]);
var state_20422__$1 = state_20422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20422__$1,inst_20417);
} else {
if((state_val_20423 === (2))){
var state_20422__$1 = state_20422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20422__$1,(4),ch);
} else {
if((state_val_20423 === (11))){
var inst_20409 = (state_20422[(2)]);
var state_20422__$1 = state_20422;
var statearr_20431_21535 = state_20422__$1;
(statearr_20431_21535[(2)] = inst_20409);

(statearr_20431_21535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (9))){
var state_20422__$1 = state_20422;
var statearr_20432_21538 = state_20422__$1;
(statearr_20432_21538[(2)] = null);

(statearr_20432_21538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (5))){
var inst_20404 = cljs.core.async.close_BANG_(out);
var state_20422__$1 = state_20422;
var statearr_20433_21540 = state_20422__$1;
(statearr_20433_21540[(2)] = inst_20404);

(statearr_20433_21540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (10))){
var inst_20412 = (state_20422[(2)]);
var state_20422__$1 = (function (){var statearr_20434 = state_20422;
(statearr_20434[(8)] = inst_20412);

return statearr_20434;
})();
var statearr_20435_21544 = state_20422__$1;
(statearr_20435_21544[(2)] = null);

(statearr_20435_21544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (8))){
var inst_20401 = (state_20422[(7)]);
var state_20422__$1 = state_20422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20422__$1,(11),out,inst_20401);
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
var cljs$core$async$state_machine__18344__auto__ = null;
var cljs$core$async$state_machine__18344__auto____0 = (function (){
var statearr_20436 = [null,null,null,null,null,null,null,null,null];
(statearr_20436[(0)] = cljs$core$async$state_machine__18344__auto__);

(statearr_20436[(1)] = (1));

return statearr_20436;
});
var cljs$core$async$state_machine__18344__auto____1 = (function (state_20422){
while(true){
var ret_value__18345__auto__ = (function (){try{while(true){
var result__18346__auto__ = switch__18343__auto__(state_20422);
if(cljs.core.keyword_identical_QMARK_(result__18346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18346__auto__;
}
break;
}
}catch (e20437){var ex__18347__auto__ = e20437;
var statearr_20438_21546 = state_20422;
(statearr_20438_21546[(2)] = ex__18347__auto__);


if(cljs.core.seq((state_20422[(4)]))){
var statearr_20439_21548 = state_20422;
(statearr_20439_21548[(1)] = cljs.core.first((state_20422[(4)])));

} else {
throw ex__18347__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21549 = state_20422;
state_20422 = G__21549;
continue;
} else {
return ret_value__18345__auto__;
}
break;
}
});
cljs$core$async$state_machine__18344__auto__ = function(state_20422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18344__auto____1.call(this,state_20422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18344__auto____0;
cljs$core$async$state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18344__auto____1;
return cljs$core$async$state_machine__18344__auto__;
})()
})();
var state__18607__auto__ = (function (){var statearr_20440 = f__18606__auto__();
(statearr_20440[(6)] = c__18605__auto___21522);

return statearr_20440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18607__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20442 = arguments.length;
switch (G__20442) {
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
var c__18605__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18606__auto__ = (function (){var switch__18343__auto__ = (function (state_20504){
var state_val_20505 = (state_20504[(1)]);
if((state_val_20505 === (7))){
var inst_20500 = (state_20504[(2)]);
var state_20504__$1 = state_20504;
var statearr_20507_21553 = state_20504__$1;
(statearr_20507_21553[(2)] = inst_20500);

(statearr_20507_21553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (20))){
var inst_20470 = (state_20504[(7)]);
var inst_20481 = (state_20504[(2)]);
var inst_20482 = cljs.core.next(inst_20470);
var inst_20456 = inst_20482;
var inst_20457 = null;
var inst_20458 = (0);
var inst_20459 = (0);
var state_20504__$1 = (function (){var statearr_20508 = state_20504;
(statearr_20508[(8)] = inst_20481);

(statearr_20508[(9)] = inst_20456);

(statearr_20508[(10)] = inst_20457);

(statearr_20508[(11)] = inst_20458);

(statearr_20508[(12)] = inst_20459);

return statearr_20508;
})();
var statearr_20509_21554 = state_20504__$1;
(statearr_20509_21554[(2)] = null);

(statearr_20509_21554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (1))){
var state_20504__$1 = state_20504;
var statearr_20510_21556 = state_20504__$1;
(statearr_20510_21556[(2)] = null);

(statearr_20510_21556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (4))){
var inst_20445 = (state_20504[(13)]);
var inst_20445__$1 = (state_20504[(2)]);
var inst_20446 = (inst_20445__$1 == null);
var state_20504__$1 = (function (){var statearr_20511 = state_20504;
(statearr_20511[(13)] = inst_20445__$1);

return statearr_20511;
})();
if(cljs.core.truth_(inst_20446)){
var statearr_20512_21557 = state_20504__$1;
(statearr_20512_21557[(1)] = (5));

} else {
var statearr_20513_21558 = state_20504__$1;
(statearr_20513_21558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (15))){
var state_20504__$1 = state_20504;
var statearr_20517_21559 = state_20504__$1;
(statearr_20517_21559[(2)] = null);

(statearr_20517_21559[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (21))){
var state_20504__$1 = state_20504;
var statearr_20521_21564 = state_20504__$1;
(statearr_20521_21564[(2)] = null);

(statearr_20521_21564[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (13))){
var inst_20459 = (state_20504[(12)]);
var inst_20456 = (state_20504[(9)]);
var inst_20457 = (state_20504[(10)]);
var inst_20458 = (state_20504[(11)]);
var inst_20466 = (state_20504[(2)]);
var inst_20467 = (inst_20459 + (1));
var tmp20514 = inst_20456;
var tmp20515 = inst_20458;
var tmp20516 = inst_20457;
var inst_20456__$1 = tmp20514;
var inst_20457__$1 = tmp20516;
var inst_20458__$1 = tmp20515;
var inst_20459__$1 = inst_20467;
var state_20504__$1 = (function (){var statearr_20522 = state_20504;
(statearr_20522[(14)] = inst_20466);

(statearr_20522[(9)] = inst_20456__$1);

(statearr_20522[(10)] = inst_20457__$1);

(statearr_20522[(11)] = inst_20458__$1);

(statearr_20522[(12)] = inst_20459__$1);

return statearr_20522;
})();
var statearr_20523_21565 = state_20504__$1;
(statearr_20523_21565[(2)] = null);

(statearr_20523_21565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (22))){
var state_20504__$1 = state_20504;
var statearr_20524_21567 = state_20504__$1;
(statearr_20524_21567[(2)] = null);

(statearr_20524_21567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (6))){
var inst_20445 = (state_20504[(13)]);
var inst_20454 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20445) : f.call(null,inst_20445));
var inst_20455 = cljs.core.seq(inst_20454);
var inst_20456 = inst_20455;
var inst_20457 = null;
var inst_20458 = (0);
var inst_20459 = (0);
var state_20504__$1 = (function (){var statearr_20525 = state_20504;
(statearr_20525[(9)] = inst_20456);

(statearr_20525[(10)] = inst_20457);

(statearr_20525[(11)] = inst_20458);

(statearr_20525[(12)] = inst_20459);

return statearr_20525;
})();
var statearr_20526_21569 = state_20504__$1;
(statearr_20526_21569[(2)] = null);

(statearr_20526_21569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (17))){
var inst_20470 = (state_20504[(7)]);
var inst_20474 = cljs.core.chunk_first(inst_20470);
var inst_20475 = cljs.core.chunk_rest(inst_20470);
var inst_20476 = cljs.core.count(inst_20474);
var inst_20456 = inst_20475;
var inst_20457 = inst_20474;
var inst_20458 = inst_20476;
var inst_20459 = (0);
var state_20504__$1 = (function (){var statearr_20531 = state_20504;
(statearr_20531[(9)] = inst_20456);

(statearr_20531[(10)] = inst_20457);

(statearr_20531[(11)] = inst_20458);

(statearr_20531[(12)] = inst_20459);

return statearr_20531;
})();
var statearr_20532_21570 = state_20504__$1;
(statearr_20532_21570[(2)] = null);

(statearr_20532_21570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (3))){
var inst_20502 = (state_20504[(2)]);
var state_20504__$1 = state_20504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20504__$1,inst_20502);
} else {
if((state_val_20505 === (12))){
var inst_20490 = (state_20504[(2)]);
var state_20504__$1 = state_20504;
var statearr_20533_21571 = state_20504__$1;
(statearr_20533_21571[(2)] = inst_20490);

(statearr_20533_21571[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (2))){
var state_20504__$1 = state_20504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20504__$1,(4),in$);
} else {
if((state_val_20505 === (23))){
var inst_20498 = (state_20504[(2)]);
var state_20504__$1 = state_20504;
var statearr_20534_21572 = state_20504__$1;
(statearr_20534_21572[(2)] = inst_20498);

(statearr_20534_21572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (19))){
var inst_20485 = (state_20504[(2)]);
var state_20504__$1 = state_20504;
var statearr_20535_21573 = state_20504__$1;
(statearr_20535_21573[(2)] = inst_20485);

(statearr_20535_21573[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (11))){
var inst_20456 = (state_20504[(9)]);
var inst_20470 = (state_20504[(7)]);
var inst_20470__$1 = cljs.core.seq(inst_20456);
var state_20504__$1 = (function (){var statearr_20536 = state_20504;
(statearr_20536[(7)] = inst_20470__$1);

return statearr_20536;
})();
if(inst_20470__$1){
var statearr_20537_21575 = state_20504__$1;
(statearr_20537_21575[(1)] = (14));

} else {
var statearr_20538_21576 = state_20504__$1;
(statearr_20538_21576[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (9))){
var inst_20492 = (state_20504[(2)]);
var inst_20493 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20504__$1 = (function (){var statearr_20539 = state_20504;
(statearr_20539[(15)] = inst_20492);

return statearr_20539;
})();
if(cljs.core.truth_(inst_20493)){
var statearr_20540_21577 = state_20504__$1;
(statearr_20540_21577[(1)] = (21));

} else {
var statearr_20541_21579 = state_20504__$1;
(statearr_20541_21579[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (5))){
var inst_20448 = cljs.core.async.close_BANG_(out);
var state_20504__$1 = state_20504;
var statearr_20542_21580 = state_20504__$1;
(statearr_20542_21580[(2)] = inst_20448);

(statearr_20542_21580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (14))){
var inst_20470 = (state_20504[(7)]);
var inst_20472 = cljs.core.chunked_seq_QMARK_(inst_20470);
var state_20504__$1 = state_20504;
if(inst_20472){
var statearr_20549_21581 = state_20504__$1;
(statearr_20549_21581[(1)] = (17));

} else {
var statearr_20558_21582 = state_20504__$1;
(statearr_20558_21582[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (16))){
var inst_20488 = (state_20504[(2)]);
var state_20504__$1 = state_20504;
var statearr_20565_21583 = state_20504__$1;
(statearr_20565_21583[(2)] = inst_20488);

(statearr_20565_21583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20505 === (10))){
var inst_20457 = (state_20504[(10)]);
var inst_20459 = (state_20504[(12)]);
var inst_20464 = cljs.core._nth(inst_20457,inst_20459);
var state_20504__$1 = state_20504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20504__$1,(13),out,inst_20464);
} else {
if((state_val_20505 === (18))){
var inst_20470 = (state_20504[(7)]);
var inst_20479 = cljs.core.first(inst_20470);
var state_20504__$1 = state_20504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20504__$1,(20),out,inst_20479);
} else {
if((state_val_20505 === (8))){
var inst_20459 = (state_20504[(12)]);
var inst_20458 = (state_20504[(11)]);
var inst_20461 = (inst_20459 < inst_20458);
var inst_20462 = inst_20461;
var state_20504__$1 = state_20504;
if(cljs.core.truth_(inst_20462)){
var statearr_20588_21588 = state_20504__$1;
(statearr_20588_21588[(1)] = (10));

} else {
var statearr_20589_21589 = state_20504__$1;
(statearr_20589_21589[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__18344__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18344__auto____0 = (function (){
var statearr_20594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20594[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18344__auto__);

(statearr_20594[(1)] = (1));

return statearr_20594;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18344__auto____1 = (function (state_20504){
while(true){
var ret_value__18345__auto__ = (function (){try{while(true){
var result__18346__auto__ = switch__18343__auto__(state_20504);
if(cljs.core.keyword_identical_QMARK_(result__18346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18346__auto__;
}
break;
}
}catch (e20595){var ex__18347__auto__ = e20595;
var statearr_20596_21603 = state_20504;
(statearr_20596_21603[(2)] = ex__18347__auto__);


if(cljs.core.seq((state_20504[(4)]))){
var statearr_20597_21604 = state_20504;
(statearr_20597_21604[(1)] = cljs.core.first((state_20504[(4)])));

} else {
throw ex__18347__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21605 = state_20504;
state_20504 = G__21605;
continue;
} else {
return ret_value__18345__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18344__auto__ = function(state_20504){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18344__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18344__auto____1.call(this,state_20504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18344__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18344__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18344__auto__;
})()
})();
var state__18607__auto__ = (function (){var statearr_20598 = f__18606__auto__();
(statearr_20598[(6)] = c__18605__auto__);

return statearr_20598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18607__auto__);
}));

return c__18605__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20600 = arguments.length;
switch (G__20600) {
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
var G__20602 = arguments.length;
switch (G__20602) {
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
var G__20604 = arguments.length;
switch (G__20604) {
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
var c__18605__auto___21623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18606__auto__ = (function (){var switch__18343__auto__ = (function (state_20628){
var state_val_20629 = (state_20628[(1)]);
if((state_val_20629 === (7))){
var inst_20623 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
var statearr_20630_21631 = state_20628__$1;
(statearr_20630_21631[(2)] = inst_20623);

(statearr_20630_21631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (1))){
var inst_20605 = null;
var state_20628__$1 = (function (){var statearr_20631 = state_20628;
(statearr_20631[(7)] = inst_20605);

return statearr_20631;
})();
var statearr_20632_21632 = state_20628__$1;
(statearr_20632_21632[(2)] = null);

(statearr_20632_21632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (4))){
var inst_20608 = (state_20628[(8)]);
var inst_20608__$1 = (state_20628[(2)]);
var inst_20609 = (inst_20608__$1 == null);
var inst_20610 = cljs.core.not(inst_20609);
var state_20628__$1 = (function (){var statearr_20633 = state_20628;
(statearr_20633[(8)] = inst_20608__$1);

return statearr_20633;
})();
if(inst_20610){
var statearr_20637_21643 = state_20628__$1;
(statearr_20637_21643[(1)] = (5));

} else {
var statearr_20643_21645 = state_20628__$1;
(statearr_20643_21645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (6))){
var state_20628__$1 = state_20628;
var statearr_20644_21659 = state_20628__$1;
(statearr_20644_21659[(2)] = null);

(statearr_20644_21659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (3))){
var inst_20625 = (state_20628[(2)]);
var inst_20626 = cljs.core.async.close_BANG_(out);
var state_20628__$1 = (function (){var statearr_20648 = state_20628;
(statearr_20648[(9)] = inst_20625);

return statearr_20648;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20628__$1,inst_20626);
} else {
if((state_val_20629 === (2))){
var state_20628__$1 = state_20628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20628__$1,(4),ch);
} else {
if((state_val_20629 === (11))){
var inst_20608 = (state_20628[(8)]);
var inst_20617 = (state_20628[(2)]);
var inst_20605 = inst_20608;
var state_20628__$1 = (function (){var statearr_20649 = state_20628;
(statearr_20649[(10)] = inst_20617);

(statearr_20649[(7)] = inst_20605);

return statearr_20649;
})();
var statearr_20650_21660 = state_20628__$1;
(statearr_20650_21660[(2)] = null);

(statearr_20650_21660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (9))){
var inst_20608 = (state_20628[(8)]);
var state_20628__$1 = state_20628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20628__$1,(11),out,inst_20608);
} else {
if((state_val_20629 === (5))){
var inst_20608 = (state_20628[(8)]);
var inst_20605 = (state_20628[(7)]);
var inst_20612 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20608,inst_20605);
var state_20628__$1 = state_20628;
if(inst_20612){
var statearr_20652_21668 = state_20628__$1;
(statearr_20652_21668[(1)] = (8));

} else {
var statearr_20653_21669 = state_20628__$1;
(statearr_20653_21669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (10))){
var inst_20620 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
var statearr_20654_21670 = state_20628__$1;
(statearr_20654_21670[(2)] = inst_20620);

(statearr_20654_21670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (8))){
var inst_20605 = (state_20628[(7)]);
var tmp20651 = inst_20605;
var inst_20605__$1 = tmp20651;
var state_20628__$1 = (function (){var statearr_20655 = state_20628;
(statearr_20655[(7)] = inst_20605__$1);

return statearr_20655;
})();
var statearr_20656_21671 = state_20628__$1;
(statearr_20656_21671[(2)] = null);

(statearr_20656_21671[(1)] = (2));


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
var cljs$core$async$state_machine__18344__auto__ = null;
var cljs$core$async$state_machine__18344__auto____0 = (function (){
var statearr_20657 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20657[(0)] = cljs$core$async$state_machine__18344__auto__);

(statearr_20657[(1)] = (1));

return statearr_20657;
});
var cljs$core$async$state_machine__18344__auto____1 = (function (state_20628){
while(true){
var ret_value__18345__auto__ = (function (){try{while(true){
var result__18346__auto__ = switch__18343__auto__(state_20628);
if(cljs.core.keyword_identical_QMARK_(result__18346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18346__auto__;
}
break;
}
}catch (e20658){var ex__18347__auto__ = e20658;
var statearr_20659_21686 = state_20628;
(statearr_20659_21686[(2)] = ex__18347__auto__);


if(cljs.core.seq((state_20628[(4)]))){
var statearr_20660_21687 = state_20628;
(statearr_20660_21687[(1)] = cljs.core.first((state_20628[(4)])));

} else {
throw ex__18347__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21688 = state_20628;
state_20628 = G__21688;
continue;
} else {
return ret_value__18345__auto__;
}
break;
}
});
cljs$core$async$state_machine__18344__auto__ = function(state_20628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18344__auto____1.call(this,state_20628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18344__auto____0;
cljs$core$async$state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18344__auto____1;
return cljs$core$async$state_machine__18344__auto__;
})()
})();
var state__18607__auto__ = (function (){var statearr_20661 = f__18606__auto__();
(statearr_20661[(6)] = c__18605__auto___21623);

return statearr_20661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18607__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20664 = arguments.length;
switch (G__20664) {
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
var c__18605__auto___21698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18606__auto__ = (function (){var switch__18343__auto__ = (function (state_20709){
var state_val_20710 = (state_20709[(1)]);
if((state_val_20710 === (7))){
var inst_20705 = (state_20709[(2)]);
var state_20709__$1 = state_20709;
var statearr_20711_21703 = state_20709__$1;
(statearr_20711_21703[(2)] = inst_20705);

(statearr_20711_21703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20710 === (1))){
var inst_20668 = (new Array(n));
var inst_20669 = inst_20668;
var inst_20670 = (0);
var state_20709__$1 = (function (){var statearr_20715 = state_20709;
(statearr_20715[(7)] = inst_20669);

(statearr_20715[(8)] = inst_20670);

return statearr_20715;
})();
var statearr_20716_21708 = state_20709__$1;
(statearr_20716_21708[(2)] = null);

(statearr_20716_21708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20710 === (4))){
var inst_20673 = (state_20709[(9)]);
var inst_20673__$1 = (state_20709[(2)]);
var inst_20674 = (inst_20673__$1 == null);
var inst_20675 = cljs.core.not(inst_20674);
var state_20709__$1 = (function (){var statearr_20720 = state_20709;
(statearr_20720[(9)] = inst_20673__$1);

return statearr_20720;
})();
if(inst_20675){
var statearr_20728_21709 = state_20709__$1;
(statearr_20728_21709[(1)] = (5));

} else {
var statearr_20729_21710 = state_20709__$1;
(statearr_20729_21710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20710 === (15))){
var inst_20699 = (state_20709[(2)]);
var state_20709__$1 = state_20709;
var statearr_20733_21711 = state_20709__$1;
(statearr_20733_21711[(2)] = inst_20699);

(statearr_20733_21711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20710 === (13))){
var state_20709__$1 = state_20709;
var statearr_20734_21712 = state_20709__$1;
(statearr_20734_21712[(2)] = null);

(statearr_20734_21712[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20710 === (6))){
var inst_20670 = (state_20709[(8)]);
var inst_20695 = (inst_20670 > (0));
var state_20709__$1 = state_20709;
if(cljs.core.truth_(inst_20695)){
var statearr_20735_21714 = state_20709__$1;
(statearr_20735_21714[(1)] = (12));

} else {
var statearr_20736_21715 = state_20709__$1;
(statearr_20736_21715[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20710 === (3))){
var inst_20707 = (state_20709[(2)]);
var state_20709__$1 = state_20709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20709__$1,inst_20707);
} else {
if((state_val_20710 === (12))){
var inst_20669 = (state_20709[(7)]);
var inst_20697 = cljs.core.vec(inst_20669);
var state_20709__$1 = state_20709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20709__$1,(15),out,inst_20697);
} else {
if((state_val_20710 === (2))){
var state_20709__$1 = state_20709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20709__$1,(4),ch);
} else {
if((state_val_20710 === (11))){
var inst_20689 = (state_20709[(2)]);
var inst_20690 = (new Array(n));
var inst_20669 = inst_20690;
var inst_20670 = (0);
var state_20709__$1 = (function (){var statearr_20737 = state_20709;
(statearr_20737[(10)] = inst_20689);

(statearr_20737[(7)] = inst_20669);

(statearr_20737[(8)] = inst_20670);

return statearr_20737;
})();
var statearr_20738_21716 = state_20709__$1;
(statearr_20738_21716[(2)] = null);

(statearr_20738_21716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20710 === (9))){
var inst_20669 = (state_20709[(7)]);
var inst_20686 = cljs.core.vec(inst_20669);
var state_20709__$1 = state_20709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20709__$1,(11),out,inst_20686);
} else {
if((state_val_20710 === (5))){
var inst_20669 = (state_20709[(7)]);
var inst_20670 = (state_20709[(8)]);
var inst_20673 = (state_20709[(9)]);
var inst_20680 = (state_20709[(11)]);
var inst_20677 = (inst_20669[inst_20670] = inst_20673);
var inst_20680__$1 = (inst_20670 + (1));
var inst_20681 = (inst_20680__$1 < n);
var state_20709__$1 = (function (){var statearr_20739 = state_20709;
(statearr_20739[(12)] = inst_20677);

(statearr_20739[(11)] = inst_20680__$1);

return statearr_20739;
})();
if(cljs.core.truth_(inst_20681)){
var statearr_20740_21718 = state_20709__$1;
(statearr_20740_21718[(1)] = (8));

} else {
var statearr_20741_21719 = state_20709__$1;
(statearr_20741_21719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20710 === (14))){
var inst_20702 = (state_20709[(2)]);
var inst_20703 = cljs.core.async.close_BANG_(out);
var state_20709__$1 = (function (){var statearr_20743 = state_20709;
(statearr_20743[(13)] = inst_20702);

return statearr_20743;
})();
var statearr_20744_21720 = state_20709__$1;
(statearr_20744_21720[(2)] = inst_20703);

(statearr_20744_21720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20710 === (10))){
var inst_20693 = (state_20709[(2)]);
var state_20709__$1 = state_20709;
var statearr_20745_21721 = state_20709__$1;
(statearr_20745_21721[(2)] = inst_20693);

(statearr_20745_21721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20710 === (8))){
var inst_20669 = (state_20709[(7)]);
var inst_20680 = (state_20709[(11)]);
var tmp20742 = inst_20669;
var inst_20669__$1 = tmp20742;
var inst_20670 = inst_20680;
var state_20709__$1 = (function (){var statearr_20746 = state_20709;
(statearr_20746[(7)] = inst_20669__$1);

(statearr_20746[(8)] = inst_20670);

return statearr_20746;
})();
var statearr_20747_21723 = state_20709__$1;
(statearr_20747_21723[(2)] = null);

(statearr_20747_21723[(1)] = (2));


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
var cljs$core$async$state_machine__18344__auto__ = null;
var cljs$core$async$state_machine__18344__auto____0 = (function (){
var statearr_20755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20755[(0)] = cljs$core$async$state_machine__18344__auto__);

(statearr_20755[(1)] = (1));

return statearr_20755;
});
var cljs$core$async$state_machine__18344__auto____1 = (function (state_20709){
while(true){
var ret_value__18345__auto__ = (function (){try{while(true){
var result__18346__auto__ = switch__18343__auto__(state_20709);
if(cljs.core.keyword_identical_QMARK_(result__18346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18346__auto__;
}
break;
}
}catch (e20756){var ex__18347__auto__ = e20756;
var statearr_20757_21733 = state_20709;
(statearr_20757_21733[(2)] = ex__18347__auto__);


if(cljs.core.seq((state_20709[(4)]))){
var statearr_20758_21734 = state_20709;
(statearr_20758_21734[(1)] = cljs.core.first((state_20709[(4)])));

} else {
throw ex__18347__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21735 = state_20709;
state_20709 = G__21735;
continue;
} else {
return ret_value__18345__auto__;
}
break;
}
});
cljs$core$async$state_machine__18344__auto__ = function(state_20709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18344__auto____1.call(this,state_20709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18344__auto____0;
cljs$core$async$state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18344__auto____1;
return cljs$core$async$state_machine__18344__auto__;
})()
})();
var state__18607__auto__ = (function (){var statearr_20762 = f__18606__auto__();
(statearr_20762[(6)] = c__18605__auto___21698);

return statearr_20762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18607__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20764 = arguments.length;
switch (G__20764) {
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
var c__18605__auto___21742 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18606__auto__ = (function (){var switch__18343__auto__ = (function (state_20826){
var state_val_20827 = (state_20826[(1)]);
if((state_val_20827 === (7))){
var inst_20822 = (state_20826[(2)]);
var state_20826__$1 = state_20826;
var statearr_20830_21743 = state_20826__$1;
(statearr_20830_21743[(2)] = inst_20822);

(statearr_20830_21743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20827 === (1))){
var inst_20766 = [];
var inst_20769 = inst_20766;
var inst_20770 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20826__$1 = (function (){var statearr_20831 = state_20826;
(statearr_20831[(7)] = inst_20769);

(statearr_20831[(8)] = inst_20770);

return statearr_20831;
})();
var statearr_20832_21745 = state_20826__$1;
(statearr_20832_21745[(2)] = null);

(statearr_20832_21745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20827 === (4))){
var inst_20773 = (state_20826[(9)]);
var inst_20773__$1 = (state_20826[(2)]);
var inst_20777 = (inst_20773__$1 == null);
var inst_20779 = cljs.core.not(inst_20777);
var state_20826__$1 = (function (){var statearr_20833 = state_20826;
(statearr_20833[(9)] = inst_20773__$1);

return statearr_20833;
})();
if(inst_20779){
var statearr_20834_21750 = state_20826__$1;
(statearr_20834_21750[(1)] = (5));

} else {
var statearr_20835_21751 = state_20826__$1;
(statearr_20835_21751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20827 === (15))){
var inst_20769 = (state_20826[(7)]);
var inst_20814 = cljs.core.vec(inst_20769);
var state_20826__$1 = state_20826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20826__$1,(18),out,inst_20814);
} else {
if((state_val_20827 === (13))){
var inst_20809 = (state_20826[(2)]);
var state_20826__$1 = state_20826;
var statearr_20836_21762 = state_20826__$1;
(statearr_20836_21762[(2)] = inst_20809);

(statearr_20836_21762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20827 === (6))){
var inst_20769 = (state_20826[(7)]);
var inst_20811 = inst_20769.length;
var inst_20812 = (inst_20811 > (0));
var state_20826__$1 = state_20826;
if(cljs.core.truth_(inst_20812)){
var statearr_20837_21763 = state_20826__$1;
(statearr_20837_21763[(1)] = (15));

} else {
var statearr_20838_21765 = state_20826__$1;
(statearr_20838_21765[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20827 === (17))){
var inst_20819 = (state_20826[(2)]);
var inst_20820 = cljs.core.async.close_BANG_(out);
var state_20826__$1 = (function (){var statearr_20839 = state_20826;
(statearr_20839[(10)] = inst_20819);

return statearr_20839;
})();
var statearr_20840_21769 = state_20826__$1;
(statearr_20840_21769[(2)] = inst_20820);

(statearr_20840_21769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20827 === (3))){
var inst_20824 = (state_20826[(2)]);
var state_20826__$1 = state_20826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20826__$1,inst_20824);
} else {
if((state_val_20827 === (12))){
var inst_20769 = (state_20826[(7)]);
var inst_20798 = cljs.core.vec(inst_20769);
var state_20826__$1 = state_20826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20826__$1,(14),out,inst_20798);
} else {
if((state_val_20827 === (2))){
var state_20826__$1 = state_20826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20826__$1,(4),ch);
} else {
if((state_val_20827 === (11))){
var inst_20769 = (state_20826[(7)]);
var inst_20773 = (state_20826[(9)]);
var inst_20781 = (state_20826[(11)]);
var inst_20795 = inst_20769.push(inst_20773);
var tmp20841 = inst_20769;
var inst_20769__$1 = tmp20841;
var inst_20770 = inst_20781;
var state_20826__$1 = (function (){var statearr_20842 = state_20826;
(statearr_20842[(12)] = inst_20795);

(statearr_20842[(7)] = inst_20769__$1);

(statearr_20842[(8)] = inst_20770);

return statearr_20842;
})();
var statearr_20843_21776 = state_20826__$1;
(statearr_20843_21776[(2)] = null);

(statearr_20843_21776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20827 === (9))){
var inst_20770 = (state_20826[(8)]);
var inst_20788 = cljs.core.keyword_identical_QMARK_(inst_20770,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_20826__$1 = state_20826;
var statearr_20844_21777 = state_20826__$1;
(statearr_20844_21777[(2)] = inst_20788);

(statearr_20844_21777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20827 === (5))){
var inst_20773 = (state_20826[(9)]);
var inst_20781 = (state_20826[(11)]);
var inst_20770 = (state_20826[(8)]);
var inst_20785 = (state_20826[(13)]);
var inst_20781__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20773) : f.call(null,inst_20773));
var inst_20785__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20781__$1,inst_20770);
var state_20826__$1 = (function (){var statearr_20845 = state_20826;
(statearr_20845[(11)] = inst_20781__$1);

(statearr_20845[(13)] = inst_20785__$1);

return statearr_20845;
})();
if(inst_20785__$1){
var statearr_20846_21778 = state_20826__$1;
(statearr_20846_21778[(1)] = (8));

} else {
var statearr_20847_21779 = state_20826__$1;
(statearr_20847_21779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20827 === (14))){
var inst_20773 = (state_20826[(9)]);
var inst_20781 = (state_20826[(11)]);
var inst_20800 = (state_20826[(2)]);
var inst_20801 = [];
var inst_20806 = inst_20801.push(inst_20773);
var inst_20769 = inst_20801;
var inst_20770 = inst_20781;
var state_20826__$1 = (function (){var statearr_20848 = state_20826;
(statearr_20848[(14)] = inst_20800);

(statearr_20848[(15)] = inst_20806);

(statearr_20848[(7)] = inst_20769);

(statearr_20848[(8)] = inst_20770);

return statearr_20848;
})();
var statearr_20849_21781 = state_20826__$1;
(statearr_20849_21781[(2)] = null);

(statearr_20849_21781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20827 === (16))){
var state_20826__$1 = state_20826;
var statearr_20850_21782 = state_20826__$1;
(statearr_20850_21782[(2)] = null);

(statearr_20850_21782[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20827 === (10))){
var inst_20790 = (state_20826[(2)]);
var state_20826__$1 = state_20826;
if(cljs.core.truth_(inst_20790)){
var statearr_20851_21783 = state_20826__$1;
(statearr_20851_21783[(1)] = (11));

} else {
var statearr_20852_21784 = state_20826__$1;
(statearr_20852_21784[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20827 === (18))){
var inst_20816 = (state_20826[(2)]);
var state_20826__$1 = state_20826;
var statearr_20853_21785 = state_20826__$1;
(statearr_20853_21785[(2)] = inst_20816);

(statearr_20853_21785[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20827 === (8))){
var inst_20785 = (state_20826[(13)]);
var state_20826__$1 = state_20826;
var statearr_20854_21786 = state_20826__$1;
(statearr_20854_21786[(2)] = inst_20785);

(statearr_20854_21786[(1)] = (10));


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
var cljs$core$async$state_machine__18344__auto__ = null;
var cljs$core$async$state_machine__18344__auto____0 = (function (){
var statearr_20855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20855[(0)] = cljs$core$async$state_machine__18344__auto__);

(statearr_20855[(1)] = (1));

return statearr_20855;
});
var cljs$core$async$state_machine__18344__auto____1 = (function (state_20826){
while(true){
var ret_value__18345__auto__ = (function (){try{while(true){
var result__18346__auto__ = switch__18343__auto__(state_20826);
if(cljs.core.keyword_identical_QMARK_(result__18346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18346__auto__;
}
break;
}
}catch (e20856){var ex__18347__auto__ = e20856;
var statearr_20857_21789 = state_20826;
(statearr_20857_21789[(2)] = ex__18347__auto__);


if(cljs.core.seq((state_20826[(4)]))){
var statearr_20858_21790 = state_20826;
(statearr_20858_21790[(1)] = cljs.core.first((state_20826[(4)])));

} else {
throw ex__18347__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21794 = state_20826;
state_20826 = G__21794;
continue;
} else {
return ret_value__18345__auto__;
}
break;
}
});
cljs$core$async$state_machine__18344__auto__ = function(state_20826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18344__auto____1.call(this,state_20826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18344__auto____0;
cljs$core$async$state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18344__auto____1;
return cljs$core$async$state_machine__18344__auto__;
})()
})();
var state__18607__auto__ = (function (){var statearr_20859 = f__18606__auto__();
(statearr_20859[(6)] = c__18605__auto___21742);

return statearr_20859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18607__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
