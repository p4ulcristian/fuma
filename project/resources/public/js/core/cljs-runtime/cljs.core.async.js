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
cljs.core.async.t_cljs$core$async18636 = (function (f,blockable,meta18637){
this.f = f;
this.blockable = blockable;
this.meta18637 = meta18637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18638,meta18637__$1){
var self__ = this;
var _18638__$1 = this;
return (new cljs.core.async.t_cljs$core$async18636(self__.f,self__.blockable,meta18637__$1));
}));

(cljs.core.async.t_cljs$core$async18636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18638){
var self__ = this;
var _18638__$1 = this;
return self__.meta18637;
}));

(cljs.core.async.t_cljs$core$async18636.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18636.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18636.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18636.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18637","meta18637",-721526024,null)], null);
}));

(cljs.core.async.t_cljs$core$async18636.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18636");

(cljs.core.async.t_cljs$core$async18636.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async18636");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18636.
 */
cljs.core.async.__GT_t_cljs$core$async18636 = (function cljs$core$async$__GT_t_cljs$core$async18636(f,blockable,meta18637){
return (new cljs.core.async.t_cljs$core$async18636(f,blockable,meta18637));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18635 = arguments.length;
switch (G__18635) {
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
return (new cljs.core.async.t_cljs$core$async18636(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18643 = arguments.length;
switch (G__18643) {
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
var G__18649 = arguments.length;
switch (G__18649) {
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
var G__18654 = arguments.length;
switch (G__18654) {
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
var val_20932 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20932) : fn1.call(null,val_20932));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20932) : fn1.call(null,val_20932));
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
var G__18662 = arguments.length;
switch (G__18662) {
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
var n__5616__auto___20941 = n;
var x_20942 = (0);
while(true){
if((x_20942 < n__5616__auto___20941)){
(a[x_20942] = x_20942);

var G__20943 = (x_20942 + (1));
x_20942 = G__20943;
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
cljs.core.async.t_cljs$core$async18666 = (function (flag,meta18667){
this.flag = flag;
this.meta18667 = meta18667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18668,meta18667__$1){
var self__ = this;
var _18668__$1 = this;
return (new cljs.core.async.t_cljs$core$async18666(self__.flag,meta18667__$1));
}));

(cljs.core.async.t_cljs$core$async18666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18668){
var self__ = this;
var _18668__$1 = this;
return self__.meta18667;
}));

(cljs.core.async.t_cljs$core$async18666.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18666.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18666.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18666.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18667","meta18667",540659168,null)], null);
}));

(cljs.core.async.t_cljs$core$async18666.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18666");

(cljs.core.async.t_cljs$core$async18666.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async18666");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18666.
 */
cljs.core.async.__GT_t_cljs$core$async18666 = (function cljs$core$async$__GT_t_cljs$core$async18666(flag,meta18667){
return (new cljs.core.async.t_cljs$core$async18666(flag,meta18667));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async18666(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18682 = (function (flag,cb,meta18683){
this.flag = flag;
this.cb = cb;
this.meta18683 = meta18683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18684,meta18683__$1){
var self__ = this;
var _18684__$1 = this;
return (new cljs.core.async.t_cljs$core$async18682(self__.flag,self__.cb,meta18683__$1));
}));

(cljs.core.async.t_cljs$core$async18682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18684){
var self__ = this;
var _18684__$1 = this;
return self__.meta18683;
}));

(cljs.core.async.t_cljs$core$async18682.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18682.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18682.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18682.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18683","meta18683",-1981444714,null)], null);
}));

(cljs.core.async.t_cljs$core$async18682.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18682");

(cljs.core.async.t_cljs$core$async18682.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async18682");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18682.
 */
cljs.core.async.__GT_t_cljs$core$async18682 = (function cljs$core$async$__GT_t_cljs$core$async18682(flag,cb,meta18683){
return (new cljs.core.async.t_cljs$core$async18682(flag,cb,meta18683));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async18682(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_20953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_20953)){
if((!(((port_20953.cljs$core$IFn$_invoke$arity$1 ? port_20953.cljs$core$IFn$_invoke$arity$1((1)) : port_20953.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__20954 = (i + (1));
i = G__20954;
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
return (function (p1__18692_SHARP_){
var G__18710 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18692_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18710) : fret.call(null,G__18710));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__18693_SHARP_){
var G__18711 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18693_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18711) : fret.call(null,G__18711));
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
var G__20957 = (i + (1));
i = G__20957;
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
var len__5749__auto___20961 = arguments.length;
var i__5750__auto___20962 = (0);
while(true){
if((i__5750__auto___20962 < len__5749__auto___20961)){
args__5755__auto__.push((arguments[i__5750__auto___20962]));

var G__20963 = (i__5750__auto___20962 + (1));
i__5750__auto___20962 = G__20963;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18718){
var map__18721 = p__18718;
var map__18721__$1 = cljs.core.__destructure_map(map__18721);
var opts = map__18721__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18716){
var G__18717 = cljs.core.first(seq18716);
var seq18716__$1 = cljs.core.next(seq18716);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18717,seq18716__$1);
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
var c__18577__auto___20969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18346__auto__ = (function (state_18766){
var state_val_18771 = (state_18766[(1)]);
if((state_val_18771 === (7))){
var inst_18759 = (state_18766[(2)]);
var state_18766__$1 = state_18766;
var statearr_18785_20970 = state_18766__$1;
(statearr_18785_20970[(2)] = inst_18759);

(statearr_18785_20970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18771 === (1))){
var state_18766__$1 = state_18766;
var statearr_18790_20971 = state_18766__$1;
(statearr_18790_20971[(2)] = null);

(statearr_18790_20971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18771 === (4))){
var inst_18741 = (state_18766[(7)]);
var inst_18741__$1 = (state_18766[(2)]);
var inst_18743 = (inst_18741__$1 == null);
var state_18766__$1 = (function (){var statearr_18795 = state_18766;
(statearr_18795[(7)] = inst_18741__$1);

return statearr_18795;
})();
if(cljs.core.truth_(inst_18743)){
var statearr_18800_20972 = state_18766__$1;
(statearr_18800_20972[(1)] = (5));

} else {
var statearr_18801_20973 = state_18766__$1;
(statearr_18801_20973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18771 === (13))){
var state_18766__$1 = state_18766;
var statearr_18815_20978 = state_18766__$1;
(statearr_18815_20978[(2)] = null);

(statearr_18815_20978[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18771 === (6))){
var inst_18741 = (state_18766[(7)]);
var state_18766__$1 = state_18766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18766__$1,(11),to,inst_18741);
} else {
if((state_val_18771 === (3))){
var inst_18761 = (state_18766[(2)]);
var state_18766__$1 = state_18766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18766__$1,inst_18761);
} else {
if((state_val_18771 === (12))){
var state_18766__$1 = state_18766;
var statearr_18817_20979 = state_18766__$1;
(statearr_18817_20979[(2)] = null);

(statearr_18817_20979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18771 === (2))){
var state_18766__$1 = state_18766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18766__$1,(4),from);
} else {
if((state_val_18771 === (11))){
var inst_18752 = (state_18766[(2)]);
var state_18766__$1 = state_18766;
if(cljs.core.truth_(inst_18752)){
var statearr_18819_20981 = state_18766__$1;
(statearr_18819_20981[(1)] = (12));

} else {
var statearr_18820_20982 = state_18766__$1;
(statearr_18820_20982[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18771 === (9))){
var state_18766__$1 = state_18766;
var statearr_18821_20983 = state_18766__$1;
(statearr_18821_20983[(2)] = null);

(statearr_18821_20983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18771 === (5))){
var state_18766__$1 = state_18766;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18822_20984 = state_18766__$1;
(statearr_18822_20984[(1)] = (8));

} else {
var statearr_18823_20985 = state_18766__$1;
(statearr_18823_20985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18771 === (14))){
var inst_18757 = (state_18766[(2)]);
var state_18766__$1 = state_18766;
var statearr_18824_20986 = state_18766__$1;
(statearr_18824_20986[(2)] = inst_18757);

(statearr_18824_20986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18771 === (10))){
var inst_18749 = (state_18766[(2)]);
var state_18766__$1 = state_18766;
var statearr_18825_20988 = state_18766__$1;
(statearr_18825_20988[(2)] = inst_18749);

(statearr_18825_20988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18771 === (8))){
var inst_18746 = cljs.core.async.close_BANG_(to);
var state_18766__$1 = state_18766;
var statearr_18826_20992 = state_18766__$1;
(statearr_18826_20992[(2)] = inst_18746);

(statearr_18826_20992[(1)] = (10));


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
var cljs$core$async$state_machine__18347__auto__ = null;
var cljs$core$async$state_machine__18347__auto____0 = (function (){
var statearr_18827 = [null,null,null,null,null,null,null,null];
(statearr_18827[(0)] = cljs$core$async$state_machine__18347__auto__);

(statearr_18827[(1)] = (1));

return statearr_18827;
});
var cljs$core$async$state_machine__18347__auto____1 = (function (state_18766){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_18766);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e18829){var ex__18350__auto__ = e18829;
var statearr_18830_21002 = state_18766;
(statearr_18830_21002[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_18766[(4)]))){
var statearr_18836_21003 = state_18766;
(statearr_18836_21003[(1)] = cljs.core.first((state_18766[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21004 = state_18766;
state_18766 = G__21004;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
cljs$core$async$state_machine__18347__auto__ = function(state_18766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18347__auto____1.call(this,state_18766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18347__auto____0;
cljs$core$async$state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18347__auto____1;
return cljs$core$async$state_machine__18347__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_18837 = f__18578__auto__();
(statearr_18837[(6)] = c__18577__auto___20969);

return statearr_18837;
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
var process__$1 = (function (p__18838){
var vec__18839 = p__18838;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18839,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18839,(1),null);
var job = vec__18839;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__18577__auto___21026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18346__auto__ = (function (state_18846){
var state_val_18847 = (state_18846[(1)]);
if((state_val_18847 === (1))){
var state_18846__$1 = state_18846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18846__$1,(2),res,v);
} else {
if((state_val_18847 === (2))){
var inst_18843 = (state_18846[(2)]);
var inst_18844 = cljs.core.async.close_BANG_(res);
var state_18846__$1 = (function (){var statearr_18860 = state_18846;
(statearr_18860[(7)] = inst_18843);

return statearr_18860;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18846__$1,inst_18844);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____0 = (function (){
var statearr_18861 = [null,null,null,null,null,null,null,null];
(statearr_18861[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__);

(statearr_18861[(1)] = (1));

return statearr_18861;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____1 = (function (state_18846){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_18846);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e18863){var ex__18350__auto__ = e18863;
var statearr_18872_21041 = state_18846;
(statearr_18872_21041[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_18846[(4)]))){
var statearr_18873_21047 = state_18846;
(statearr_18873_21047[(1)] = cljs.core.first((state_18846[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21052 = state_18846;
state_18846 = G__21052;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__ = function(state_18846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____1.call(this,state_18846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_18874 = f__18578__auto__();
(statearr_18874[(6)] = c__18577__auto___21026);

return statearr_18874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__18875){
var vec__18876 = p__18875;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18876,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18876,(1),null);
var job = vec__18876;
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
var n__5616__auto___21063 = n;
var __21064 = (0);
while(true){
if((__21064 < n__5616__auto___21063)){
var G__18880_21065 = type;
var G__18880_21066__$1 = (((G__18880_21065 instanceof cljs.core.Keyword))?G__18880_21065.fqn:null);
switch (G__18880_21066__$1) {
case "compute":
var c__18577__auto___21068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21064,c__18577__auto___21068,G__18880_21065,G__18880_21066__$1,n__5616__auto___21063,jobs,results,process__$1,async){
return (function (){
var f__18578__auto__ = (function (){var switch__18346__auto__ = ((function (__21064,c__18577__auto___21068,G__18880_21065,G__18880_21066__$1,n__5616__auto___21063,jobs,results,process__$1,async){
return (function (state_18894){
var state_val_18895 = (state_18894[(1)]);
if((state_val_18895 === (1))){
var state_18894__$1 = state_18894;
var statearr_18896_21069 = state_18894__$1;
(statearr_18896_21069[(2)] = null);

(statearr_18896_21069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (2))){
var state_18894__$1 = state_18894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18894__$1,(4),jobs);
} else {
if((state_val_18895 === (3))){
var inst_18891 = (state_18894[(2)]);
var state_18894__$1 = state_18894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18894__$1,inst_18891);
} else {
if((state_val_18895 === (4))){
var inst_18883 = (state_18894[(2)]);
var inst_18884 = process__$1(inst_18883);
var state_18894__$1 = state_18894;
if(cljs.core.truth_(inst_18884)){
var statearr_18897_21070 = state_18894__$1;
(statearr_18897_21070[(1)] = (5));

} else {
var statearr_18898_21071 = state_18894__$1;
(statearr_18898_21071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (5))){
var state_18894__$1 = state_18894;
var statearr_18899_21072 = state_18894__$1;
(statearr_18899_21072[(2)] = null);

(statearr_18899_21072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (6))){
var state_18894__$1 = state_18894;
var statearr_18900_21080 = state_18894__$1;
(statearr_18900_21080[(2)] = null);

(statearr_18900_21080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (7))){
var inst_18889 = (state_18894[(2)]);
var state_18894__$1 = state_18894;
var statearr_18901_21081 = state_18894__$1;
(statearr_18901_21081[(2)] = inst_18889);

(statearr_18901_21081[(1)] = (3));


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
});})(__21064,c__18577__auto___21068,G__18880_21065,G__18880_21066__$1,n__5616__auto___21063,jobs,results,process__$1,async))
;
return ((function (__21064,switch__18346__auto__,c__18577__auto___21068,G__18880_21065,G__18880_21066__$1,n__5616__auto___21063,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____0 = (function (){
var statearr_18905 = [null,null,null,null,null,null,null];
(statearr_18905[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__);

(statearr_18905[(1)] = (1));

return statearr_18905;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____1 = (function (state_18894){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_18894);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e18906){var ex__18350__auto__ = e18906;
var statearr_18907_21092 = state_18894;
(statearr_18907_21092[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_18894[(4)]))){
var statearr_18908_21093 = state_18894;
(statearr_18908_21093[(1)] = cljs.core.first((state_18894[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21094 = state_18894;
state_18894 = G__21094;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__ = function(state_18894){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____1.call(this,state_18894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__;
})()
;})(__21064,switch__18346__auto__,c__18577__auto___21068,G__18880_21065,G__18880_21066__$1,n__5616__auto___21063,jobs,results,process__$1,async))
})();
var state__18579__auto__ = (function (){var statearr_18909 = f__18578__auto__();
(statearr_18909[(6)] = c__18577__auto___21068);

return statearr_18909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
});})(__21064,c__18577__auto___21068,G__18880_21065,G__18880_21066__$1,n__5616__auto___21063,jobs,results,process__$1,async))
);


break;
case "async":
var c__18577__auto___21095 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21064,c__18577__auto___21095,G__18880_21065,G__18880_21066__$1,n__5616__auto___21063,jobs,results,process__$1,async){
return (function (){
var f__18578__auto__ = (function (){var switch__18346__auto__ = ((function (__21064,c__18577__auto___21095,G__18880_21065,G__18880_21066__$1,n__5616__auto___21063,jobs,results,process__$1,async){
return (function (state_18923){
var state_val_18924 = (state_18923[(1)]);
if((state_val_18924 === (1))){
var state_18923__$1 = state_18923;
var statearr_18925_21099 = state_18923__$1;
(statearr_18925_21099[(2)] = null);

(statearr_18925_21099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (2))){
var state_18923__$1 = state_18923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18923__$1,(4),jobs);
} else {
if((state_val_18924 === (3))){
var inst_18921 = (state_18923[(2)]);
var state_18923__$1 = state_18923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18923__$1,inst_18921);
} else {
if((state_val_18924 === (4))){
var inst_18913 = (state_18923[(2)]);
var inst_18914 = async(inst_18913);
var state_18923__$1 = state_18923;
if(cljs.core.truth_(inst_18914)){
var statearr_18926_21100 = state_18923__$1;
(statearr_18926_21100[(1)] = (5));

} else {
var statearr_18927_21101 = state_18923__$1;
(statearr_18927_21101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (5))){
var state_18923__$1 = state_18923;
var statearr_18928_21102 = state_18923__$1;
(statearr_18928_21102[(2)] = null);

(statearr_18928_21102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (6))){
var state_18923__$1 = state_18923;
var statearr_18929_21103 = state_18923__$1;
(statearr_18929_21103[(2)] = null);

(statearr_18929_21103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (7))){
var inst_18919 = (state_18923[(2)]);
var state_18923__$1 = state_18923;
var statearr_18930_21104 = state_18923__$1;
(statearr_18930_21104[(2)] = inst_18919);

(statearr_18930_21104[(1)] = (3));


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
});})(__21064,c__18577__auto___21095,G__18880_21065,G__18880_21066__$1,n__5616__auto___21063,jobs,results,process__$1,async))
;
return ((function (__21064,switch__18346__auto__,c__18577__auto___21095,G__18880_21065,G__18880_21066__$1,n__5616__auto___21063,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____0 = (function (){
var statearr_18932 = [null,null,null,null,null,null,null];
(statearr_18932[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__);

(statearr_18932[(1)] = (1));

return statearr_18932;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____1 = (function (state_18923){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_18923);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e18936){var ex__18350__auto__ = e18936;
var statearr_18937_21105 = state_18923;
(statearr_18937_21105[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_18923[(4)]))){
var statearr_18938_21106 = state_18923;
(statearr_18938_21106[(1)] = cljs.core.first((state_18923[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21107 = state_18923;
state_18923 = G__21107;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__ = function(state_18923){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____1.call(this,state_18923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__;
})()
;})(__21064,switch__18346__auto__,c__18577__auto___21095,G__18880_21065,G__18880_21066__$1,n__5616__auto___21063,jobs,results,process__$1,async))
})();
var state__18579__auto__ = (function (){var statearr_18939 = f__18578__auto__();
(statearr_18939[(6)] = c__18577__auto___21095);

return statearr_18939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
});})(__21064,c__18577__auto___21095,G__18880_21065,G__18880_21066__$1,n__5616__auto___21063,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18880_21066__$1)].join('')));

}

var G__21108 = (__21064 + (1));
__21064 = G__21108;
continue;
} else {
}
break;
}

var c__18577__auto___21109 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18346__auto__ = (function (state_18962){
var state_val_18963 = (state_18962[(1)]);
if((state_val_18963 === (7))){
var inst_18958 = (state_18962[(2)]);
var state_18962__$1 = state_18962;
var statearr_18965_21112 = state_18962__$1;
(statearr_18965_21112[(2)] = inst_18958);

(statearr_18965_21112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (1))){
var state_18962__$1 = state_18962;
var statearr_18966_21113 = state_18962__$1;
(statearr_18966_21113[(2)] = null);

(statearr_18966_21113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (4))){
var inst_18942 = (state_18962[(7)]);
var inst_18942__$1 = (state_18962[(2)]);
var inst_18943 = (inst_18942__$1 == null);
var state_18962__$1 = (function (){var statearr_18968 = state_18962;
(statearr_18968[(7)] = inst_18942__$1);

return statearr_18968;
})();
if(cljs.core.truth_(inst_18943)){
var statearr_18969_21114 = state_18962__$1;
(statearr_18969_21114[(1)] = (5));

} else {
var statearr_18970_21115 = state_18962__$1;
(statearr_18970_21115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (6))){
var inst_18942 = (state_18962[(7)]);
var inst_18947 = (state_18962[(8)]);
var inst_18947__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18948 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18950 = [inst_18942,inst_18947__$1];
var inst_18951 = (new cljs.core.PersistentVector(null,2,(5),inst_18948,inst_18950,null));
var state_18962__$1 = (function (){var statearr_18971 = state_18962;
(statearr_18971[(8)] = inst_18947__$1);

return statearr_18971;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18962__$1,(8),jobs,inst_18951);
} else {
if((state_val_18963 === (3))){
var inst_18960 = (state_18962[(2)]);
var state_18962__$1 = state_18962;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18962__$1,inst_18960);
} else {
if((state_val_18963 === (2))){
var state_18962__$1 = state_18962;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18962__$1,(4),from);
} else {
if((state_val_18963 === (9))){
var inst_18955 = (state_18962[(2)]);
var state_18962__$1 = (function (){var statearr_18973 = state_18962;
(statearr_18973[(9)] = inst_18955);

return statearr_18973;
})();
var statearr_18974_21121 = state_18962__$1;
(statearr_18974_21121[(2)] = null);

(statearr_18974_21121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (5))){
var inst_18945 = cljs.core.async.close_BANG_(jobs);
var state_18962__$1 = state_18962;
var statearr_18976_21122 = state_18962__$1;
(statearr_18976_21122[(2)] = inst_18945);

(statearr_18976_21122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (8))){
var inst_18947 = (state_18962[(8)]);
var inst_18953 = (state_18962[(2)]);
var state_18962__$1 = (function (){var statearr_18977 = state_18962;
(statearr_18977[(10)] = inst_18953);

return statearr_18977;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18962__$1,(9),results,inst_18947);
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
var cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____0 = (function (){
var statearr_18979 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18979[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__);

(statearr_18979[(1)] = (1));

return statearr_18979;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____1 = (function (state_18962){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_18962);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e18982){var ex__18350__auto__ = e18982;
var statearr_18983_21127 = state_18962;
(statearr_18983_21127[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_18962[(4)]))){
var statearr_18984_21131 = state_18962;
(statearr_18984_21131[(1)] = cljs.core.first((state_18962[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21132 = state_18962;
state_18962 = G__21132;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__ = function(state_18962){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____1.call(this,state_18962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_18985 = f__18578__auto__();
(statearr_18985[(6)] = c__18577__auto___21109);

return statearr_18985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));


var c__18577__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18346__auto__ = (function (state_19023){
var state_val_19024 = (state_19023[(1)]);
if((state_val_19024 === (7))){
var inst_19019 = (state_19023[(2)]);
var state_19023__$1 = state_19023;
var statearr_19025_21133 = state_19023__$1;
(statearr_19025_21133[(2)] = inst_19019);

(statearr_19025_21133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (20))){
var state_19023__$1 = state_19023;
var statearr_19027_21134 = state_19023__$1;
(statearr_19027_21134[(2)] = null);

(statearr_19027_21134[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (1))){
var state_19023__$1 = state_19023;
var statearr_19052_21135 = state_19023__$1;
(statearr_19052_21135[(2)] = null);

(statearr_19052_21135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (4))){
var inst_18988 = (state_19023[(7)]);
var inst_18988__$1 = (state_19023[(2)]);
var inst_18989 = (inst_18988__$1 == null);
var state_19023__$1 = (function (){var statearr_19054 = state_19023;
(statearr_19054[(7)] = inst_18988__$1);

return statearr_19054;
})();
if(cljs.core.truth_(inst_18989)){
var statearr_19055_21136 = state_19023__$1;
(statearr_19055_21136[(1)] = (5));

} else {
var statearr_19056_21140 = state_19023__$1;
(statearr_19056_21140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (15))){
var inst_19001 = (state_19023[(8)]);
var state_19023__$1 = state_19023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19023__$1,(18),to,inst_19001);
} else {
if((state_val_19024 === (21))){
var inst_19014 = (state_19023[(2)]);
var state_19023__$1 = state_19023;
var statearr_19060_21141 = state_19023__$1;
(statearr_19060_21141[(2)] = inst_19014);

(statearr_19060_21141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (13))){
var inst_19016 = (state_19023[(2)]);
var state_19023__$1 = (function (){var statearr_19061 = state_19023;
(statearr_19061[(9)] = inst_19016);

return statearr_19061;
})();
var statearr_19062_21142 = state_19023__$1;
(statearr_19062_21142[(2)] = null);

(statearr_19062_21142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (6))){
var inst_18988 = (state_19023[(7)]);
var state_19023__$1 = state_19023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19023__$1,(11),inst_18988);
} else {
if((state_val_19024 === (17))){
var inst_19009 = (state_19023[(2)]);
var state_19023__$1 = state_19023;
if(cljs.core.truth_(inst_19009)){
var statearr_19079_21143 = state_19023__$1;
(statearr_19079_21143[(1)] = (19));

} else {
var statearr_19080_21144 = state_19023__$1;
(statearr_19080_21144[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (3))){
var inst_19021 = (state_19023[(2)]);
var state_19023__$1 = state_19023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19023__$1,inst_19021);
} else {
if((state_val_19024 === (12))){
var inst_18998 = (state_19023[(10)]);
var state_19023__$1 = state_19023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19023__$1,(14),inst_18998);
} else {
if((state_val_19024 === (2))){
var state_19023__$1 = state_19023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19023__$1,(4),results);
} else {
if((state_val_19024 === (19))){
var state_19023__$1 = state_19023;
var statearr_19086_21148 = state_19023__$1;
(statearr_19086_21148[(2)] = null);

(statearr_19086_21148[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (11))){
var inst_18998 = (state_19023[(2)]);
var state_19023__$1 = (function (){var statearr_19087 = state_19023;
(statearr_19087[(10)] = inst_18998);

return statearr_19087;
})();
var statearr_19088_21149 = state_19023__$1;
(statearr_19088_21149[(2)] = null);

(statearr_19088_21149[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (9))){
var state_19023__$1 = state_19023;
var statearr_19094_21150 = state_19023__$1;
(statearr_19094_21150[(2)] = null);

(statearr_19094_21150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (5))){
var state_19023__$1 = state_19023;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19112_21152 = state_19023__$1;
(statearr_19112_21152[(1)] = (8));

} else {
var statearr_19117_21153 = state_19023__$1;
(statearr_19117_21153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (14))){
var inst_19001 = (state_19023[(8)]);
var inst_19003 = (state_19023[(11)]);
var inst_19001__$1 = (state_19023[(2)]);
var inst_19002 = (inst_19001__$1 == null);
var inst_19003__$1 = cljs.core.not(inst_19002);
var state_19023__$1 = (function (){var statearr_19124 = state_19023;
(statearr_19124[(8)] = inst_19001__$1);

(statearr_19124[(11)] = inst_19003__$1);

return statearr_19124;
})();
if(inst_19003__$1){
var statearr_19125_21157 = state_19023__$1;
(statearr_19125_21157[(1)] = (15));

} else {
var statearr_19127_21158 = state_19023__$1;
(statearr_19127_21158[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (16))){
var inst_19003 = (state_19023[(11)]);
var state_19023__$1 = state_19023;
var statearr_19130_21159 = state_19023__$1;
(statearr_19130_21159[(2)] = inst_19003);

(statearr_19130_21159[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (10))){
var inst_18995 = (state_19023[(2)]);
var state_19023__$1 = state_19023;
var statearr_19140_21160 = state_19023__$1;
(statearr_19140_21160[(2)] = inst_18995);

(statearr_19140_21160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (18))){
var inst_19006 = (state_19023[(2)]);
var state_19023__$1 = state_19023;
var statearr_19141_21164 = state_19023__$1;
(statearr_19141_21164[(2)] = inst_19006);

(statearr_19141_21164[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (8))){
var inst_18992 = cljs.core.async.close_BANG_(to);
var state_19023__$1 = state_19023;
var statearr_19142_21165 = state_19023__$1;
(statearr_19142_21165[(2)] = inst_18992);

(statearr_19142_21165[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____0 = (function (){
var statearr_19143 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19143[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__);

(statearr_19143[(1)] = (1));

return statearr_19143;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____1 = (function (state_19023){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_19023);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e19145){var ex__18350__auto__ = e19145;
var statearr_19146_21166 = state_19023;
(statearr_19146_21166[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_19023[(4)]))){
var statearr_19147_21167 = state_19023;
(statearr_19147_21167[(1)] = cljs.core.first((state_19023[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21168 = state_19023;
state_19023 = G__21168;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__ = function(state_19023){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____1.call(this,state_19023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18347__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_19148 = f__18578__auto__();
(statearr_19148[(6)] = c__18577__auto__);

return statearr_19148;
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
var G__19151 = arguments.length;
switch (G__19151) {
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
var G__19162 = arguments.length;
switch (G__19162) {
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
var G__19169 = arguments.length;
switch (G__19169) {
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
var c__18577__auto___21179 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18346__auto__ = (function (state_19196){
var state_val_19197 = (state_19196[(1)]);
if((state_val_19197 === (7))){
var inst_19192 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
var statearr_19198_21180 = state_19196__$1;
(statearr_19198_21180[(2)] = inst_19192);

(statearr_19198_21180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (1))){
var state_19196__$1 = state_19196;
var statearr_19199_21181 = state_19196__$1;
(statearr_19199_21181[(2)] = null);

(statearr_19199_21181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (4))){
var inst_19172 = (state_19196[(7)]);
var inst_19172__$1 = (state_19196[(2)]);
var inst_19173 = (inst_19172__$1 == null);
var state_19196__$1 = (function (){var statearr_19200 = state_19196;
(statearr_19200[(7)] = inst_19172__$1);

return statearr_19200;
})();
if(cljs.core.truth_(inst_19173)){
var statearr_19201_21182 = state_19196__$1;
(statearr_19201_21182[(1)] = (5));

} else {
var statearr_19203_21183 = state_19196__$1;
(statearr_19203_21183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (13))){
var state_19196__$1 = state_19196;
var statearr_19204_21184 = state_19196__$1;
(statearr_19204_21184[(2)] = null);

(statearr_19204_21184[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (6))){
var inst_19172 = (state_19196[(7)]);
var inst_19178 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19172) : p.call(null,inst_19172));
var state_19196__$1 = state_19196;
if(cljs.core.truth_(inst_19178)){
var statearr_19205_21187 = state_19196__$1;
(statearr_19205_21187[(1)] = (9));

} else {
var statearr_19206_21188 = state_19196__$1;
(statearr_19206_21188[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (3))){
var inst_19194 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19196__$1,inst_19194);
} else {
if((state_val_19197 === (12))){
var state_19196__$1 = state_19196;
var statearr_19207_21190 = state_19196__$1;
(statearr_19207_21190[(2)] = null);

(statearr_19207_21190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (2))){
var state_19196__$1 = state_19196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19196__$1,(4),ch);
} else {
if((state_val_19197 === (11))){
var inst_19172 = (state_19196[(7)]);
var inst_19182 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19196__$1,(8),inst_19182,inst_19172);
} else {
if((state_val_19197 === (9))){
var state_19196__$1 = state_19196;
var statearr_19208_21191 = state_19196__$1;
(statearr_19208_21191[(2)] = tc);

(statearr_19208_21191[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (5))){
var inst_19175 = cljs.core.async.close_BANG_(tc);
var inst_19176 = cljs.core.async.close_BANG_(fc);
var state_19196__$1 = (function (){var statearr_19209 = state_19196;
(statearr_19209[(8)] = inst_19175);

return statearr_19209;
})();
var statearr_19210_21192 = state_19196__$1;
(statearr_19210_21192[(2)] = inst_19176);

(statearr_19210_21192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (14))){
var inst_19190 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
var statearr_19211_21193 = state_19196__$1;
(statearr_19211_21193[(2)] = inst_19190);

(statearr_19211_21193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (10))){
var state_19196__$1 = state_19196;
var statearr_19212_21194 = state_19196__$1;
(statearr_19212_21194[(2)] = fc);

(statearr_19212_21194[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (8))){
var inst_19184 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
if(cljs.core.truth_(inst_19184)){
var statearr_19213_21195 = state_19196__$1;
(statearr_19213_21195[(1)] = (12));

} else {
var statearr_19214_21196 = state_19196__$1;
(statearr_19214_21196[(1)] = (13));

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
var cljs$core$async$state_machine__18347__auto__ = null;
var cljs$core$async$state_machine__18347__auto____0 = (function (){
var statearr_19215 = [null,null,null,null,null,null,null,null,null];
(statearr_19215[(0)] = cljs$core$async$state_machine__18347__auto__);

(statearr_19215[(1)] = (1));

return statearr_19215;
});
var cljs$core$async$state_machine__18347__auto____1 = (function (state_19196){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_19196);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e19216){var ex__18350__auto__ = e19216;
var statearr_19217_21197 = state_19196;
(statearr_19217_21197[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_19196[(4)]))){
var statearr_19219_21198 = state_19196;
(statearr_19219_21198[(1)] = cljs.core.first((state_19196[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21199 = state_19196;
state_19196 = G__21199;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
cljs$core$async$state_machine__18347__auto__ = function(state_19196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18347__auto____1.call(this,state_19196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18347__auto____0;
cljs$core$async$state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18347__auto____1;
return cljs$core$async$state_machine__18347__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_19220 = f__18578__auto__();
(statearr_19220[(6)] = c__18577__auto___21179);

return statearr_19220;
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
var f__18578__auto__ = (function (){var switch__18346__auto__ = (function (state_19243){
var state_val_19245 = (state_19243[(1)]);
if((state_val_19245 === (7))){
var inst_19239 = (state_19243[(2)]);
var state_19243__$1 = state_19243;
var statearr_19246_21205 = state_19243__$1;
(statearr_19246_21205[(2)] = inst_19239);

(statearr_19246_21205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (1))){
var inst_19222 = init;
var inst_19223 = inst_19222;
var state_19243__$1 = (function (){var statearr_19247 = state_19243;
(statearr_19247[(7)] = inst_19223);

return statearr_19247;
})();
var statearr_19249_21206 = state_19243__$1;
(statearr_19249_21206[(2)] = null);

(statearr_19249_21206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (4))){
var inst_19226 = (state_19243[(8)]);
var inst_19226__$1 = (state_19243[(2)]);
var inst_19227 = (inst_19226__$1 == null);
var state_19243__$1 = (function (){var statearr_19250 = state_19243;
(statearr_19250[(8)] = inst_19226__$1);

return statearr_19250;
})();
if(cljs.core.truth_(inst_19227)){
var statearr_19251_21211 = state_19243__$1;
(statearr_19251_21211[(1)] = (5));

} else {
var statearr_19252_21212 = state_19243__$1;
(statearr_19252_21212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (6))){
var inst_19223 = (state_19243[(7)]);
var inst_19226 = (state_19243[(8)]);
var inst_19230 = (state_19243[(9)]);
var inst_19230__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_19223,inst_19226) : f.call(null,inst_19223,inst_19226));
var inst_19231 = cljs.core.reduced_QMARK_(inst_19230__$1);
var state_19243__$1 = (function (){var statearr_19253 = state_19243;
(statearr_19253[(9)] = inst_19230__$1);

return statearr_19253;
})();
if(inst_19231){
var statearr_19254_21213 = state_19243__$1;
(statearr_19254_21213[(1)] = (8));

} else {
var statearr_19255_21214 = state_19243__$1;
(statearr_19255_21214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (3))){
var inst_19241 = (state_19243[(2)]);
var state_19243__$1 = state_19243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19243__$1,inst_19241);
} else {
if((state_val_19245 === (2))){
var state_19243__$1 = state_19243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19243__$1,(4),ch);
} else {
if((state_val_19245 === (9))){
var inst_19230 = (state_19243[(9)]);
var inst_19223 = inst_19230;
var state_19243__$1 = (function (){var statearr_19257 = state_19243;
(statearr_19257[(7)] = inst_19223);

return statearr_19257;
})();
var statearr_19258_21215 = state_19243__$1;
(statearr_19258_21215[(2)] = null);

(statearr_19258_21215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (5))){
var inst_19223 = (state_19243[(7)]);
var state_19243__$1 = state_19243;
var statearr_19259_21216 = state_19243__$1;
(statearr_19259_21216[(2)] = inst_19223);

(statearr_19259_21216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (10))){
var inst_19237 = (state_19243[(2)]);
var state_19243__$1 = state_19243;
var statearr_19260_21217 = state_19243__$1;
(statearr_19260_21217[(2)] = inst_19237);

(statearr_19260_21217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (8))){
var inst_19230 = (state_19243[(9)]);
var inst_19233 = cljs.core.deref(inst_19230);
var state_19243__$1 = state_19243;
var statearr_19261_21218 = state_19243__$1;
(statearr_19261_21218[(2)] = inst_19233);

(statearr_19261_21218[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__18347__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18347__auto____0 = (function (){
var statearr_19262 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19262[(0)] = cljs$core$async$reduce_$_state_machine__18347__auto__);

(statearr_19262[(1)] = (1));

return statearr_19262;
});
var cljs$core$async$reduce_$_state_machine__18347__auto____1 = (function (state_19243){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_19243);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e19264){var ex__18350__auto__ = e19264;
var statearr_19265_21219 = state_19243;
(statearr_19265_21219[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_19243[(4)]))){
var statearr_19266_21220 = state_19243;
(statearr_19266_21220[(1)] = cljs.core.first((state_19243[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21221 = state_19243;
state_19243 = G__21221;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18347__auto__ = function(state_19243){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18347__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18347__auto____1.call(this,state_19243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18347__auto____0;
cljs$core$async$reduce_$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18347__auto____1;
return cljs$core$async$reduce_$_state_machine__18347__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_19267 = f__18578__auto__();
(statearr_19267[(6)] = c__18577__auto__);

return statearr_19267;
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
var f__18578__auto__ = (function (){var switch__18346__auto__ = (function (state_19273){
var state_val_19274 = (state_19273[(1)]);
if((state_val_19274 === (1))){
var inst_19268 = cljs.core.async.reduce(f__$1,init,ch);
var state_19273__$1 = state_19273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19273__$1,(2),inst_19268);
} else {
if((state_val_19274 === (2))){
var inst_19270 = (state_19273[(2)]);
var inst_19271 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_19270) : f__$1.call(null,inst_19270));
var state_19273__$1 = state_19273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19273__$1,inst_19271);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__18347__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18347__auto____0 = (function (){
var statearr_19275 = [null,null,null,null,null,null,null];
(statearr_19275[(0)] = cljs$core$async$transduce_$_state_machine__18347__auto__);

(statearr_19275[(1)] = (1));

return statearr_19275;
});
var cljs$core$async$transduce_$_state_machine__18347__auto____1 = (function (state_19273){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_19273);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e19276){var ex__18350__auto__ = e19276;
var statearr_19277_21224 = state_19273;
(statearr_19277_21224[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_19273[(4)]))){
var statearr_19278_21225 = state_19273;
(statearr_19278_21225[(1)] = cljs.core.first((state_19273[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21228 = state_19273;
state_19273 = G__21228;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18347__auto__ = function(state_19273){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18347__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18347__auto____1.call(this,state_19273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18347__auto____0;
cljs$core$async$transduce_$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18347__auto____1;
return cljs$core$async$transduce_$_state_machine__18347__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_19280 = f__18578__auto__();
(statearr_19280[(6)] = c__18577__auto__);

return statearr_19280;
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
var G__19282 = arguments.length;
switch (G__19282) {
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
var f__18578__auto__ = (function (){var switch__18346__auto__ = (function (state_19308){
var state_val_19309 = (state_19308[(1)]);
if((state_val_19309 === (7))){
var inst_19289 = (state_19308[(2)]);
var state_19308__$1 = state_19308;
var statearr_19310_21236 = state_19308__$1;
(statearr_19310_21236[(2)] = inst_19289);

(statearr_19310_21236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19309 === (1))){
var inst_19283 = cljs.core.seq(coll);
var inst_19284 = inst_19283;
var state_19308__$1 = (function (){var statearr_19311 = state_19308;
(statearr_19311[(7)] = inst_19284);

return statearr_19311;
})();
var statearr_19312_21237 = state_19308__$1;
(statearr_19312_21237[(2)] = null);

(statearr_19312_21237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19309 === (4))){
var inst_19284 = (state_19308[(7)]);
var inst_19287 = cljs.core.first(inst_19284);
var state_19308__$1 = state_19308;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19308__$1,(7),ch,inst_19287);
} else {
if((state_val_19309 === (13))){
var inst_19302 = (state_19308[(2)]);
var state_19308__$1 = state_19308;
var statearr_19314_21238 = state_19308__$1;
(statearr_19314_21238[(2)] = inst_19302);

(statearr_19314_21238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19309 === (6))){
var inst_19292 = (state_19308[(2)]);
var state_19308__$1 = state_19308;
if(cljs.core.truth_(inst_19292)){
var statearr_19315_21239 = state_19308__$1;
(statearr_19315_21239[(1)] = (8));

} else {
var statearr_19316_21240 = state_19308__$1;
(statearr_19316_21240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19309 === (3))){
var inst_19306 = (state_19308[(2)]);
var state_19308__$1 = state_19308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19308__$1,inst_19306);
} else {
if((state_val_19309 === (12))){
var state_19308__$1 = state_19308;
var statearr_19317_21241 = state_19308__$1;
(statearr_19317_21241[(2)] = null);

(statearr_19317_21241[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19309 === (2))){
var inst_19284 = (state_19308[(7)]);
var state_19308__$1 = state_19308;
if(cljs.core.truth_(inst_19284)){
var statearr_19318_21242 = state_19308__$1;
(statearr_19318_21242[(1)] = (4));

} else {
var statearr_19319_21243 = state_19308__$1;
(statearr_19319_21243[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19309 === (11))){
var inst_19299 = cljs.core.async.close_BANG_(ch);
var state_19308__$1 = state_19308;
var statearr_19320_21244 = state_19308__$1;
(statearr_19320_21244[(2)] = inst_19299);

(statearr_19320_21244[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19309 === (9))){
var state_19308__$1 = state_19308;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19322_21245 = state_19308__$1;
(statearr_19322_21245[(1)] = (11));

} else {
var statearr_19323_21246 = state_19308__$1;
(statearr_19323_21246[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19309 === (5))){
var inst_19284 = (state_19308[(7)]);
var state_19308__$1 = state_19308;
var statearr_19324_21248 = state_19308__$1;
(statearr_19324_21248[(2)] = inst_19284);

(statearr_19324_21248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19309 === (10))){
var inst_19304 = (state_19308[(2)]);
var state_19308__$1 = state_19308;
var statearr_19325_21249 = state_19308__$1;
(statearr_19325_21249[(2)] = inst_19304);

(statearr_19325_21249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19309 === (8))){
var inst_19284 = (state_19308[(7)]);
var inst_19294 = cljs.core.next(inst_19284);
var inst_19284__$1 = inst_19294;
var state_19308__$1 = (function (){var statearr_19326 = state_19308;
(statearr_19326[(7)] = inst_19284__$1);

return statearr_19326;
})();
var statearr_19327_21250 = state_19308__$1;
(statearr_19327_21250[(2)] = null);

(statearr_19327_21250[(1)] = (2));


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
var cljs$core$async$state_machine__18347__auto__ = null;
var cljs$core$async$state_machine__18347__auto____0 = (function (){
var statearr_19328 = [null,null,null,null,null,null,null,null];
(statearr_19328[(0)] = cljs$core$async$state_machine__18347__auto__);

(statearr_19328[(1)] = (1));

return statearr_19328;
});
var cljs$core$async$state_machine__18347__auto____1 = (function (state_19308){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_19308);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e19329){var ex__18350__auto__ = e19329;
var statearr_19331_21255 = state_19308;
(statearr_19331_21255[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_19308[(4)]))){
var statearr_19332_21256 = state_19308;
(statearr_19332_21256[(1)] = cljs.core.first((state_19308[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21257 = state_19308;
state_19308 = G__21257;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
cljs$core$async$state_machine__18347__auto__ = function(state_19308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18347__auto____1.call(this,state_19308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18347__auto____0;
cljs$core$async$state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18347__auto____1;
return cljs$core$async$state_machine__18347__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_19333 = f__18578__auto__();
(statearr_19333[(6)] = c__18577__auto__);

return statearr_19333;
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
var G__19335 = arguments.length;
switch (G__19335) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_21259 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_21259(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_21260 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_21260(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_21261 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_21261(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_21262 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_21262(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19340 = (function (ch,cs,meta19341){
this.ch = ch;
this.cs = cs;
this.meta19341 = meta19341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19342,meta19341__$1){
var self__ = this;
var _19342__$1 = this;
return (new cljs.core.async.t_cljs$core$async19340(self__.ch,self__.cs,meta19341__$1));
}));

(cljs.core.async.t_cljs$core$async19340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19342){
var self__ = this;
var _19342__$1 = this;
return self__.meta19341;
}));

(cljs.core.async.t_cljs$core$async19340.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19340.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19340.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19340.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async19340.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async19340.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async19340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19341","meta19341",-1262577731,null)], null);
}));

(cljs.core.async.t_cljs$core$async19340.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19340");

(cljs.core.async.t_cljs$core$async19340.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async19340");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19340.
 */
cljs.core.async.__GT_t_cljs$core$async19340 = (function cljs$core$async$__GT_t_cljs$core$async19340(ch,cs,meta19341){
return (new cljs.core.async.t_cljs$core$async19340(ch,cs,meta19341));
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
var m = (new cljs.core.async.t_cljs$core$async19340(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__18577__auto___21267 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18346__auto__ = (function (state_19480){
var state_val_19481 = (state_19480[(1)]);
if((state_val_19481 === (7))){
var inst_19476 = (state_19480[(2)]);
var state_19480__$1 = state_19480;
var statearr_19482_21268 = state_19480__$1;
(statearr_19482_21268[(2)] = inst_19476);

(statearr_19482_21268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (20))){
var inst_19379 = (state_19480[(7)]);
var inst_19391 = cljs.core.first(inst_19379);
var inst_19393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19391,(0),null);
var inst_19394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19391,(1),null);
var state_19480__$1 = (function (){var statearr_19483 = state_19480;
(statearr_19483[(8)] = inst_19393);

return statearr_19483;
})();
if(cljs.core.truth_(inst_19394)){
var statearr_19484_21269 = state_19480__$1;
(statearr_19484_21269[(1)] = (22));

} else {
var statearr_19486_21270 = state_19480__$1;
(statearr_19486_21270[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (27))){
var inst_19423 = (state_19480[(9)]);
var inst_19425 = (state_19480[(10)]);
var inst_19430 = (state_19480[(11)]);
var inst_19348 = (state_19480[(12)]);
var inst_19430__$1 = cljs.core._nth(inst_19423,inst_19425);
var inst_19431 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19430__$1,inst_19348,done);
var state_19480__$1 = (function (){var statearr_19488 = state_19480;
(statearr_19488[(11)] = inst_19430__$1);

return statearr_19488;
})();
if(cljs.core.truth_(inst_19431)){
var statearr_19489_21271 = state_19480__$1;
(statearr_19489_21271[(1)] = (30));

} else {
var statearr_19490_21272 = state_19480__$1;
(statearr_19490_21272[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (1))){
var state_19480__$1 = state_19480;
var statearr_19491_21273 = state_19480__$1;
(statearr_19491_21273[(2)] = null);

(statearr_19491_21273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (24))){
var inst_19379 = (state_19480[(7)]);
var inst_19400 = (state_19480[(2)]);
var inst_19401 = cljs.core.next(inst_19379);
var inst_19357 = inst_19401;
var inst_19358 = null;
var inst_19359 = (0);
var inst_19360 = (0);
var state_19480__$1 = (function (){var statearr_19492 = state_19480;
(statearr_19492[(13)] = inst_19400);

(statearr_19492[(14)] = inst_19357);

(statearr_19492[(15)] = inst_19358);

(statearr_19492[(16)] = inst_19359);

(statearr_19492[(17)] = inst_19360);

return statearr_19492;
})();
var statearr_19493_21279 = state_19480__$1;
(statearr_19493_21279[(2)] = null);

(statearr_19493_21279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (39))){
var state_19480__$1 = state_19480;
var statearr_19497_21280 = state_19480__$1;
(statearr_19497_21280[(2)] = null);

(statearr_19497_21280[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (4))){
var inst_19348 = (state_19480[(12)]);
var inst_19348__$1 = (state_19480[(2)]);
var inst_19349 = (inst_19348__$1 == null);
var state_19480__$1 = (function (){var statearr_19498 = state_19480;
(statearr_19498[(12)] = inst_19348__$1);

return statearr_19498;
})();
if(cljs.core.truth_(inst_19349)){
var statearr_19499_21281 = state_19480__$1;
(statearr_19499_21281[(1)] = (5));

} else {
var statearr_19500_21282 = state_19480__$1;
(statearr_19500_21282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (15))){
var inst_19360 = (state_19480[(17)]);
var inst_19357 = (state_19480[(14)]);
var inst_19358 = (state_19480[(15)]);
var inst_19359 = (state_19480[(16)]);
var inst_19375 = (state_19480[(2)]);
var inst_19376 = (inst_19360 + (1));
var tmp19494 = inst_19359;
var tmp19495 = inst_19357;
var tmp19496 = inst_19358;
var inst_19357__$1 = tmp19495;
var inst_19358__$1 = tmp19496;
var inst_19359__$1 = tmp19494;
var inst_19360__$1 = inst_19376;
var state_19480__$1 = (function (){var statearr_19501 = state_19480;
(statearr_19501[(18)] = inst_19375);

(statearr_19501[(14)] = inst_19357__$1);

(statearr_19501[(15)] = inst_19358__$1);

(statearr_19501[(16)] = inst_19359__$1);

(statearr_19501[(17)] = inst_19360__$1);

return statearr_19501;
})();
var statearr_19502_21287 = state_19480__$1;
(statearr_19502_21287[(2)] = null);

(statearr_19502_21287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (21))){
var inst_19404 = (state_19480[(2)]);
var state_19480__$1 = state_19480;
var statearr_19506_21288 = state_19480__$1;
(statearr_19506_21288[(2)] = inst_19404);

(statearr_19506_21288[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (31))){
var inst_19430 = (state_19480[(11)]);
var inst_19434 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19430);
var state_19480__$1 = state_19480;
var statearr_19507_21289 = state_19480__$1;
(statearr_19507_21289[(2)] = inst_19434);

(statearr_19507_21289[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (32))){
var inst_19425 = (state_19480[(10)]);
var inst_19422 = (state_19480[(19)]);
var inst_19423 = (state_19480[(9)]);
var inst_19424 = (state_19480[(20)]);
var inst_19436 = (state_19480[(2)]);
var inst_19437 = (inst_19425 + (1));
var tmp19503 = inst_19424;
var tmp19504 = inst_19422;
var tmp19505 = inst_19423;
var inst_19422__$1 = tmp19504;
var inst_19423__$1 = tmp19505;
var inst_19424__$1 = tmp19503;
var inst_19425__$1 = inst_19437;
var state_19480__$1 = (function (){var statearr_19508 = state_19480;
(statearr_19508[(21)] = inst_19436);

(statearr_19508[(19)] = inst_19422__$1);

(statearr_19508[(9)] = inst_19423__$1);

(statearr_19508[(20)] = inst_19424__$1);

(statearr_19508[(10)] = inst_19425__$1);

return statearr_19508;
})();
var statearr_19509_21290 = state_19480__$1;
(statearr_19509_21290[(2)] = null);

(statearr_19509_21290[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (40))){
var inst_19449 = (state_19480[(22)]);
var inst_19453 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19449);
var state_19480__$1 = state_19480;
var statearr_19510_21291 = state_19480__$1;
(statearr_19510_21291[(2)] = inst_19453);

(statearr_19510_21291[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (33))){
var inst_19440 = (state_19480[(23)]);
var inst_19442 = cljs.core.chunked_seq_QMARK_(inst_19440);
var state_19480__$1 = state_19480;
if(inst_19442){
var statearr_19511_21292 = state_19480__$1;
(statearr_19511_21292[(1)] = (36));

} else {
var statearr_19512_21293 = state_19480__$1;
(statearr_19512_21293[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (13))){
var inst_19369 = (state_19480[(24)]);
var inst_19372 = cljs.core.async.close_BANG_(inst_19369);
var state_19480__$1 = state_19480;
var statearr_19513_21294 = state_19480__$1;
(statearr_19513_21294[(2)] = inst_19372);

(statearr_19513_21294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (22))){
var inst_19393 = (state_19480[(8)]);
var inst_19397 = cljs.core.async.close_BANG_(inst_19393);
var state_19480__$1 = state_19480;
var statearr_19514_21295 = state_19480__$1;
(statearr_19514_21295[(2)] = inst_19397);

(statearr_19514_21295[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (36))){
var inst_19440 = (state_19480[(23)]);
var inst_19444 = cljs.core.chunk_first(inst_19440);
var inst_19445 = cljs.core.chunk_rest(inst_19440);
var inst_19446 = cljs.core.count(inst_19444);
var inst_19422 = inst_19445;
var inst_19423 = inst_19444;
var inst_19424 = inst_19446;
var inst_19425 = (0);
var state_19480__$1 = (function (){var statearr_19517 = state_19480;
(statearr_19517[(19)] = inst_19422);

(statearr_19517[(9)] = inst_19423);

(statearr_19517[(20)] = inst_19424);

(statearr_19517[(10)] = inst_19425);

return statearr_19517;
})();
var statearr_19518_21297 = state_19480__$1;
(statearr_19518_21297[(2)] = null);

(statearr_19518_21297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (41))){
var inst_19440 = (state_19480[(23)]);
var inst_19455 = (state_19480[(2)]);
var inst_19456 = cljs.core.next(inst_19440);
var inst_19422 = inst_19456;
var inst_19423 = null;
var inst_19424 = (0);
var inst_19425 = (0);
var state_19480__$1 = (function (){var statearr_19520 = state_19480;
(statearr_19520[(25)] = inst_19455);

(statearr_19520[(19)] = inst_19422);

(statearr_19520[(9)] = inst_19423);

(statearr_19520[(20)] = inst_19424);

(statearr_19520[(10)] = inst_19425);

return statearr_19520;
})();
var statearr_19522_21298 = state_19480__$1;
(statearr_19522_21298[(2)] = null);

(statearr_19522_21298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (43))){
var state_19480__$1 = state_19480;
var statearr_19525_21299 = state_19480__$1;
(statearr_19525_21299[(2)] = null);

(statearr_19525_21299[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (29))){
var inst_19464 = (state_19480[(2)]);
var state_19480__$1 = state_19480;
var statearr_19529_21300 = state_19480__$1;
(statearr_19529_21300[(2)] = inst_19464);

(statearr_19529_21300[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (44))){
var inst_19473 = (state_19480[(2)]);
var state_19480__$1 = (function (){var statearr_19530 = state_19480;
(statearr_19530[(26)] = inst_19473);

return statearr_19530;
})();
var statearr_19531_21301 = state_19480__$1;
(statearr_19531_21301[(2)] = null);

(statearr_19531_21301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (6))){
var inst_19414 = (state_19480[(27)]);
var inst_19413 = cljs.core.deref(cs);
var inst_19414__$1 = cljs.core.keys(inst_19413);
var inst_19415 = cljs.core.count(inst_19414__$1);
var inst_19416 = cljs.core.reset_BANG_(dctr,inst_19415);
var inst_19421 = cljs.core.seq(inst_19414__$1);
var inst_19422 = inst_19421;
var inst_19423 = null;
var inst_19424 = (0);
var inst_19425 = (0);
var state_19480__$1 = (function (){var statearr_19532 = state_19480;
(statearr_19532[(27)] = inst_19414__$1);

(statearr_19532[(28)] = inst_19416);

(statearr_19532[(19)] = inst_19422);

(statearr_19532[(9)] = inst_19423);

(statearr_19532[(20)] = inst_19424);

(statearr_19532[(10)] = inst_19425);

return statearr_19532;
})();
var statearr_19533_21302 = state_19480__$1;
(statearr_19533_21302[(2)] = null);

(statearr_19533_21302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (28))){
var inst_19422 = (state_19480[(19)]);
var inst_19440 = (state_19480[(23)]);
var inst_19440__$1 = cljs.core.seq(inst_19422);
var state_19480__$1 = (function (){var statearr_19534 = state_19480;
(statearr_19534[(23)] = inst_19440__$1);

return statearr_19534;
})();
if(inst_19440__$1){
var statearr_19535_21303 = state_19480__$1;
(statearr_19535_21303[(1)] = (33));

} else {
var statearr_19536_21304 = state_19480__$1;
(statearr_19536_21304[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (25))){
var inst_19425 = (state_19480[(10)]);
var inst_19424 = (state_19480[(20)]);
var inst_19427 = (inst_19425 < inst_19424);
var inst_19428 = inst_19427;
var state_19480__$1 = state_19480;
if(cljs.core.truth_(inst_19428)){
var statearr_19537_21305 = state_19480__$1;
(statearr_19537_21305[(1)] = (27));

} else {
var statearr_19538_21306 = state_19480__$1;
(statearr_19538_21306[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (34))){
var state_19480__$1 = state_19480;
var statearr_19539_21307 = state_19480__$1;
(statearr_19539_21307[(2)] = null);

(statearr_19539_21307[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (17))){
var state_19480__$1 = state_19480;
var statearr_19540_21308 = state_19480__$1;
(statearr_19540_21308[(2)] = null);

(statearr_19540_21308[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (3))){
var inst_19478 = (state_19480[(2)]);
var state_19480__$1 = state_19480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19480__$1,inst_19478);
} else {
if((state_val_19481 === (12))){
var inst_19409 = (state_19480[(2)]);
var state_19480__$1 = state_19480;
var statearr_19546_21309 = state_19480__$1;
(statearr_19546_21309[(2)] = inst_19409);

(statearr_19546_21309[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (2))){
var state_19480__$1 = state_19480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19480__$1,(4),ch);
} else {
if((state_val_19481 === (23))){
var state_19480__$1 = state_19480;
var statearr_19550_21313 = state_19480__$1;
(statearr_19550_21313[(2)] = null);

(statearr_19550_21313[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (35))){
var inst_19462 = (state_19480[(2)]);
var state_19480__$1 = state_19480;
var statearr_19552_21314 = state_19480__$1;
(statearr_19552_21314[(2)] = inst_19462);

(statearr_19552_21314[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (19))){
var inst_19379 = (state_19480[(7)]);
var inst_19383 = cljs.core.chunk_first(inst_19379);
var inst_19384 = cljs.core.chunk_rest(inst_19379);
var inst_19385 = cljs.core.count(inst_19383);
var inst_19357 = inst_19384;
var inst_19358 = inst_19383;
var inst_19359 = inst_19385;
var inst_19360 = (0);
var state_19480__$1 = (function (){var statearr_19556 = state_19480;
(statearr_19556[(14)] = inst_19357);

(statearr_19556[(15)] = inst_19358);

(statearr_19556[(16)] = inst_19359);

(statearr_19556[(17)] = inst_19360);

return statearr_19556;
})();
var statearr_19557_21315 = state_19480__$1;
(statearr_19557_21315[(2)] = null);

(statearr_19557_21315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (11))){
var inst_19357 = (state_19480[(14)]);
var inst_19379 = (state_19480[(7)]);
var inst_19379__$1 = cljs.core.seq(inst_19357);
var state_19480__$1 = (function (){var statearr_19559 = state_19480;
(statearr_19559[(7)] = inst_19379__$1);

return statearr_19559;
})();
if(inst_19379__$1){
var statearr_19560_21316 = state_19480__$1;
(statearr_19560_21316[(1)] = (16));

} else {
var statearr_19561_21317 = state_19480__$1;
(statearr_19561_21317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (9))){
var inst_19411 = (state_19480[(2)]);
var state_19480__$1 = state_19480;
var statearr_19562_21323 = state_19480__$1;
(statearr_19562_21323[(2)] = inst_19411);

(statearr_19562_21323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (5))){
var inst_19355 = cljs.core.deref(cs);
var inst_19356 = cljs.core.seq(inst_19355);
var inst_19357 = inst_19356;
var inst_19358 = null;
var inst_19359 = (0);
var inst_19360 = (0);
var state_19480__$1 = (function (){var statearr_19564 = state_19480;
(statearr_19564[(14)] = inst_19357);

(statearr_19564[(15)] = inst_19358);

(statearr_19564[(16)] = inst_19359);

(statearr_19564[(17)] = inst_19360);

return statearr_19564;
})();
var statearr_19568_21324 = state_19480__$1;
(statearr_19568_21324[(2)] = null);

(statearr_19568_21324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (14))){
var state_19480__$1 = state_19480;
var statearr_19573_21326 = state_19480__$1;
(statearr_19573_21326[(2)] = null);

(statearr_19573_21326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (45))){
var inst_19470 = (state_19480[(2)]);
var state_19480__$1 = state_19480;
var statearr_19575_21327 = state_19480__$1;
(statearr_19575_21327[(2)] = inst_19470);

(statearr_19575_21327[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (26))){
var inst_19414 = (state_19480[(27)]);
var inst_19466 = (state_19480[(2)]);
var inst_19467 = cljs.core.seq(inst_19414);
var state_19480__$1 = (function (){var statearr_19579 = state_19480;
(statearr_19579[(29)] = inst_19466);

return statearr_19579;
})();
if(inst_19467){
var statearr_19580_21328 = state_19480__$1;
(statearr_19580_21328[(1)] = (42));

} else {
var statearr_19581_21330 = state_19480__$1;
(statearr_19581_21330[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (16))){
var inst_19379 = (state_19480[(7)]);
var inst_19381 = cljs.core.chunked_seq_QMARK_(inst_19379);
var state_19480__$1 = state_19480;
if(inst_19381){
var statearr_19582_21331 = state_19480__$1;
(statearr_19582_21331[(1)] = (19));

} else {
var statearr_19585_21332 = state_19480__$1;
(statearr_19585_21332[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (38))){
var inst_19459 = (state_19480[(2)]);
var state_19480__$1 = state_19480;
var statearr_19587_21333 = state_19480__$1;
(statearr_19587_21333[(2)] = inst_19459);

(statearr_19587_21333[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (30))){
var state_19480__$1 = state_19480;
var statearr_19591_21334 = state_19480__$1;
(statearr_19591_21334[(2)] = null);

(statearr_19591_21334[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (10))){
var inst_19358 = (state_19480[(15)]);
var inst_19360 = (state_19480[(17)]);
var inst_19368 = cljs.core._nth(inst_19358,inst_19360);
var inst_19369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19368,(0),null);
var inst_19370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19368,(1),null);
var state_19480__$1 = (function (){var statearr_19596 = state_19480;
(statearr_19596[(24)] = inst_19369);

return statearr_19596;
})();
if(cljs.core.truth_(inst_19370)){
var statearr_19597_21336 = state_19480__$1;
(statearr_19597_21336[(1)] = (13));

} else {
var statearr_19598_21337 = state_19480__$1;
(statearr_19598_21337[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (18))){
var inst_19407 = (state_19480[(2)]);
var state_19480__$1 = state_19480;
var statearr_19601_21338 = state_19480__$1;
(statearr_19601_21338[(2)] = inst_19407);

(statearr_19601_21338[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (42))){
var state_19480__$1 = state_19480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19480__$1,(45),dchan);
} else {
if((state_val_19481 === (37))){
var inst_19440 = (state_19480[(23)]);
var inst_19449 = (state_19480[(22)]);
var inst_19348 = (state_19480[(12)]);
var inst_19449__$1 = cljs.core.first(inst_19440);
var inst_19450 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19449__$1,inst_19348,done);
var state_19480__$1 = (function (){var statearr_19605 = state_19480;
(statearr_19605[(22)] = inst_19449__$1);

return statearr_19605;
})();
if(cljs.core.truth_(inst_19450)){
var statearr_19606_21343 = state_19480__$1;
(statearr_19606_21343[(1)] = (39));

} else {
var statearr_19607_21344 = state_19480__$1;
(statearr_19607_21344[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (8))){
var inst_19360 = (state_19480[(17)]);
var inst_19359 = (state_19480[(16)]);
var inst_19362 = (inst_19360 < inst_19359);
var inst_19363 = inst_19362;
var state_19480__$1 = state_19480;
if(cljs.core.truth_(inst_19363)){
var statearr_19610_21345 = state_19480__$1;
(statearr_19610_21345[(1)] = (10));

} else {
var statearr_19612_21346 = state_19480__$1;
(statearr_19612_21346[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__18347__auto__ = null;
var cljs$core$async$mult_$_state_machine__18347__auto____0 = (function (){
var statearr_19618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19618[(0)] = cljs$core$async$mult_$_state_machine__18347__auto__);

(statearr_19618[(1)] = (1));

return statearr_19618;
});
var cljs$core$async$mult_$_state_machine__18347__auto____1 = (function (state_19480){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_19480);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e19619){var ex__18350__auto__ = e19619;
var statearr_19620_21347 = state_19480;
(statearr_19620_21347[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_19480[(4)]))){
var statearr_19621_21349 = state_19480;
(statearr_19621_21349[(1)] = cljs.core.first((state_19480[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21350 = state_19480;
state_19480 = G__21350;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18347__auto__ = function(state_19480){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18347__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18347__auto____1.call(this,state_19480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18347__auto____0;
cljs$core$async$mult_$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18347__auto____1;
return cljs$core$async$mult_$_state_machine__18347__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_19625 = f__18578__auto__();
(statearr_19625[(6)] = c__18577__auto___21267);

return statearr_19625;
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
var G__19640 = arguments.length;
switch (G__19640) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_21354 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_21354(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_21355 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_21355(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_21356 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_21356(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_21357 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_21357(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_21358 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_21358(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21361 = arguments.length;
var i__5750__auto___21362 = (0);
while(true){
if((i__5750__auto___21362 < len__5749__auto___21361)){
args__5755__auto__.push((arguments[i__5750__auto___21362]));

var G__21369 = (i__5750__auto___21362 + (1));
i__5750__auto___21362 = G__21369;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19702){
var map__19705 = p__19702;
var map__19705__$1 = cljs.core.__destructure_map(map__19705);
var opts = map__19705__$1;
var statearr_19706_21375 = state;
(statearr_19706_21375[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_19708_21376 = state;
(statearr_19708_21376[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_19709_21377 = state;
(statearr_19709_21377[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19692){
var G__19693 = cljs.core.first(seq19692);
var seq19692__$1 = cljs.core.next(seq19692);
var G__19694 = cljs.core.first(seq19692__$1);
var seq19692__$2 = cljs.core.next(seq19692__$1);
var G__19695 = cljs.core.first(seq19692__$2);
var seq19692__$3 = cljs.core.next(seq19692__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19693,G__19694,G__19695,seq19692__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19727 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19728){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19728 = meta19728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19729,meta19728__$1){
var self__ = this;
var _19729__$1 = this;
return (new cljs.core.async.t_cljs$core$async19727(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19728__$1));
}));

(cljs.core.async.t_cljs$core$async19727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19729){
var self__ = this;
var _19729__$1 = this;
return self__.meta19728;
}));

(cljs.core.async.t_cljs$core$async19727.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19727.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19727.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19727.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19727.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19727.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19727.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19727.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19728","meta19728",-69147552,null)], null);
}));

(cljs.core.async.t_cljs$core$async19727.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19727.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19727");

(cljs.core.async.t_cljs$core$async19727.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async19727");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19727.
 */
cljs.core.async.__GT_t_cljs$core$async19727 = (function cljs$core$async$__GT_t_cljs$core$async19727(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19728){
return (new cljs.core.async.t_cljs$core$async19727(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19728));
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
var m = (new cljs.core.async.t_cljs$core$async19727(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__18577__auto___21383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18346__auto__ = (function (state_19857){
var state_val_19858 = (state_19857[(1)]);
if((state_val_19858 === (7))){
var inst_19803 = (state_19857[(2)]);
var state_19857__$1 = state_19857;
if(cljs.core.truth_(inst_19803)){
var statearr_19868_21388 = state_19857__$1;
(statearr_19868_21388[(1)] = (8));

} else {
var statearr_19869_21389 = state_19857__$1;
(statearr_19869_21389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (20))){
var inst_19792 = (state_19857[(7)]);
var state_19857__$1 = state_19857;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19857__$1,(23),out,inst_19792);
} else {
if((state_val_19858 === (1))){
var inst_19770 = calc_state();
var inst_19771 = cljs.core.__destructure_map(inst_19770);
var inst_19772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19771,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19771,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19771,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19777 = inst_19770;
var state_19857__$1 = (function (){var statearr_19870 = state_19857;
(statearr_19870[(8)] = inst_19772);

(statearr_19870[(9)] = inst_19773);

(statearr_19870[(10)] = inst_19775);

(statearr_19870[(11)] = inst_19777);

return statearr_19870;
})();
var statearr_19875_21390 = state_19857__$1;
(statearr_19875_21390[(2)] = null);

(statearr_19875_21390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (24))){
var inst_19781 = (state_19857[(12)]);
var inst_19777 = inst_19781;
var state_19857__$1 = (function (){var statearr_19879 = state_19857;
(statearr_19879[(11)] = inst_19777);

return statearr_19879;
})();
var statearr_19880_21391 = state_19857__$1;
(statearr_19880_21391[(2)] = null);

(statearr_19880_21391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (4))){
var inst_19792 = (state_19857[(7)]);
var inst_19797 = (state_19857[(13)]);
var inst_19791 = (state_19857[(2)]);
var inst_19792__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19791,(0),null);
var inst_19793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19791,(1),null);
var inst_19797__$1 = (inst_19792__$1 == null);
var state_19857__$1 = (function (){var statearr_19881 = state_19857;
(statearr_19881[(7)] = inst_19792__$1);

(statearr_19881[(14)] = inst_19793);

(statearr_19881[(13)] = inst_19797__$1);

return statearr_19881;
})();
if(cljs.core.truth_(inst_19797__$1)){
var statearr_19882_21408 = state_19857__$1;
(statearr_19882_21408[(1)] = (5));

} else {
var statearr_19883_21409 = state_19857__$1;
(statearr_19883_21409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (15))){
var inst_19782 = (state_19857[(15)]);
var inst_19823 = (state_19857[(16)]);
var inst_19823__$1 = cljs.core.empty_QMARK_(inst_19782);
var state_19857__$1 = (function (){var statearr_19885 = state_19857;
(statearr_19885[(16)] = inst_19823__$1);

return statearr_19885;
})();
if(inst_19823__$1){
var statearr_19886_21417 = state_19857__$1;
(statearr_19886_21417[(1)] = (17));

} else {
var statearr_19887_21418 = state_19857__$1;
(statearr_19887_21418[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (21))){
var inst_19781 = (state_19857[(12)]);
var inst_19777 = inst_19781;
var state_19857__$1 = (function (){var statearr_19891 = state_19857;
(statearr_19891[(11)] = inst_19777);

return statearr_19891;
})();
var statearr_19893_21422 = state_19857__$1;
(statearr_19893_21422[(2)] = null);

(statearr_19893_21422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (13))){
var inst_19811 = (state_19857[(2)]);
var inst_19813 = calc_state();
var inst_19777 = inst_19813;
var state_19857__$1 = (function (){var statearr_19894 = state_19857;
(statearr_19894[(17)] = inst_19811);

(statearr_19894[(11)] = inst_19777);

return statearr_19894;
})();
var statearr_19895_21426 = state_19857__$1;
(statearr_19895_21426[(2)] = null);

(statearr_19895_21426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (22))){
var inst_19845 = (state_19857[(2)]);
var state_19857__$1 = state_19857;
var statearr_19904_21427 = state_19857__$1;
(statearr_19904_21427[(2)] = inst_19845);

(statearr_19904_21427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (6))){
var inst_19793 = (state_19857[(14)]);
var inst_19801 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19793,change);
var state_19857__$1 = state_19857;
var statearr_19905_21429 = state_19857__$1;
(statearr_19905_21429[(2)] = inst_19801);

(statearr_19905_21429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (25))){
var state_19857__$1 = state_19857;
var statearr_19906_21431 = state_19857__$1;
(statearr_19906_21431[(2)] = null);

(statearr_19906_21431[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (17))){
var inst_19784 = (state_19857[(18)]);
var inst_19793 = (state_19857[(14)]);
var inst_19826 = (inst_19784.cljs$core$IFn$_invoke$arity$1 ? inst_19784.cljs$core$IFn$_invoke$arity$1(inst_19793) : inst_19784.call(null,inst_19793));
var inst_19827 = cljs.core.not(inst_19826);
var state_19857__$1 = state_19857;
var statearr_19908_21439 = state_19857__$1;
(statearr_19908_21439[(2)] = inst_19827);

(statearr_19908_21439[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (3))){
var inst_19849 = (state_19857[(2)]);
var state_19857__$1 = state_19857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19857__$1,inst_19849);
} else {
if((state_val_19858 === (12))){
var state_19857__$1 = state_19857;
var statearr_19909_21442 = state_19857__$1;
(statearr_19909_21442[(2)] = null);

(statearr_19909_21442[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (2))){
var inst_19777 = (state_19857[(11)]);
var inst_19781 = (state_19857[(12)]);
var inst_19781__$1 = cljs.core.__destructure_map(inst_19777);
var inst_19782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19781__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19781__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19781__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19857__$1 = (function (){var statearr_19917 = state_19857;
(statearr_19917[(12)] = inst_19781__$1);

(statearr_19917[(15)] = inst_19782);

(statearr_19917[(18)] = inst_19784);

return statearr_19917;
})();
return cljs.core.async.ioc_alts_BANG_(state_19857__$1,(4),inst_19785);
} else {
if((state_val_19858 === (23))){
var inst_19836 = (state_19857[(2)]);
var state_19857__$1 = state_19857;
if(cljs.core.truth_(inst_19836)){
var statearr_19919_21444 = state_19857__$1;
(statearr_19919_21444[(1)] = (24));

} else {
var statearr_19920_21445 = state_19857__$1;
(statearr_19920_21445[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (19))){
var inst_19831 = (state_19857[(2)]);
var state_19857__$1 = state_19857;
var statearr_19924_21446 = state_19857__$1;
(statearr_19924_21446[(2)] = inst_19831);

(statearr_19924_21446[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (11))){
var inst_19793 = (state_19857[(14)]);
var inst_19808 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19793);
var state_19857__$1 = state_19857;
var statearr_19925_21448 = state_19857__$1;
(statearr_19925_21448[(2)] = inst_19808);

(statearr_19925_21448[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (9))){
var inst_19782 = (state_19857[(15)]);
var inst_19793 = (state_19857[(14)]);
var inst_19817 = (state_19857[(19)]);
var inst_19817__$1 = (inst_19782.cljs$core$IFn$_invoke$arity$1 ? inst_19782.cljs$core$IFn$_invoke$arity$1(inst_19793) : inst_19782.call(null,inst_19793));
var state_19857__$1 = (function (){var statearr_19927 = state_19857;
(statearr_19927[(19)] = inst_19817__$1);

return statearr_19927;
})();
if(cljs.core.truth_(inst_19817__$1)){
var statearr_19928_21449 = state_19857__$1;
(statearr_19928_21449[(1)] = (14));

} else {
var statearr_19932_21450 = state_19857__$1;
(statearr_19932_21450[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (5))){
var inst_19797 = (state_19857[(13)]);
var state_19857__$1 = state_19857;
var statearr_19934_21452 = state_19857__$1;
(statearr_19934_21452[(2)] = inst_19797);

(statearr_19934_21452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (14))){
var inst_19817 = (state_19857[(19)]);
var state_19857__$1 = state_19857;
var statearr_19935_21457 = state_19857__$1;
(statearr_19935_21457[(2)] = inst_19817);

(statearr_19935_21457[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (26))){
var inst_19841 = (state_19857[(2)]);
var state_19857__$1 = state_19857;
var statearr_19936_21458 = state_19857__$1;
(statearr_19936_21458[(2)] = inst_19841);

(statearr_19936_21458[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (16))){
var inst_19833 = (state_19857[(2)]);
var state_19857__$1 = state_19857;
if(cljs.core.truth_(inst_19833)){
var statearr_19940_21459 = state_19857__$1;
(statearr_19940_21459[(1)] = (20));

} else {
var statearr_19941_21460 = state_19857__$1;
(statearr_19941_21460[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (10))){
var inst_19847 = (state_19857[(2)]);
var state_19857__$1 = state_19857;
var statearr_19943_21462 = state_19857__$1;
(statearr_19943_21462[(2)] = inst_19847);

(statearr_19943_21462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (18))){
var inst_19823 = (state_19857[(16)]);
var state_19857__$1 = state_19857;
var statearr_19944_21463 = state_19857__$1;
(statearr_19944_21463[(2)] = inst_19823);

(statearr_19944_21463[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (8))){
var inst_19792 = (state_19857[(7)]);
var inst_19805 = (inst_19792 == null);
var state_19857__$1 = state_19857;
if(cljs.core.truth_(inst_19805)){
var statearr_19945_21464 = state_19857__$1;
(statearr_19945_21464[(1)] = (11));

} else {
var statearr_19947_21465 = state_19857__$1;
(statearr_19947_21465[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__18347__auto__ = null;
var cljs$core$async$mix_$_state_machine__18347__auto____0 = (function (){
var statearr_19948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19948[(0)] = cljs$core$async$mix_$_state_machine__18347__auto__);

(statearr_19948[(1)] = (1));

return statearr_19948;
});
var cljs$core$async$mix_$_state_machine__18347__auto____1 = (function (state_19857){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_19857);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e19949){var ex__18350__auto__ = e19949;
var statearr_19950_21466 = state_19857;
(statearr_19950_21466[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_19857[(4)]))){
var statearr_19951_21467 = state_19857;
(statearr_19951_21467[(1)] = cljs.core.first((state_19857[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21468 = state_19857;
state_19857 = G__21468;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18347__auto__ = function(state_19857){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18347__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18347__auto____1.call(this,state_19857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18347__auto____0;
cljs$core$async$mix_$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18347__auto____1;
return cljs$core$async$mix_$_state_machine__18347__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_19956 = f__18578__auto__();
(statearr_19956[(6)] = c__18577__auto___21383);

return statearr_19956;
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

var cljs$core$async$Pub$sub_STAR_$dyn_21475 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_21475(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_21477 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_21477(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_21482 = (function() {
var G__21483 = null;
var G__21483__1 = (function (p){
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
var G__21483__2 = (function (p,v){
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
G__21483 = function(p,v){
switch(arguments.length){
case 1:
return G__21483__1.call(this,p);
case 2:
return G__21483__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21483.cljs$core$IFn$_invoke$arity$1 = G__21483__1;
G__21483.cljs$core$IFn$_invoke$arity$2 = G__21483__2;
return G__21483;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19981 = arguments.length;
switch (G__19981) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21482(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21482(p,v);
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
cljs.core.async.t_cljs$core$async19985 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19986){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19986 = meta19986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19987,meta19986__$1){
var self__ = this;
var _19987__$1 = this;
return (new cljs.core.async.t_cljs$core$async19985(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19986__$1));
}));

(cljs.core.async.t_cljs$core$async19985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19987){
var self__ = this;
var _19987__$1 = this;
return self__.meta19986;
}));

(cljs.core.async.t_cljs$core$async19985.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19985.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19985.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19985.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19985.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async19985.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19985.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19986","meta19986",-1063692002,null)], null);
}));

(cljs.core.async.t_cljs$core$async19985.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19985");

(cljs.core.async.t_cljs$core$async19985.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async19985");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19985.
 */
cljs.core.async.__GT_t_cljs$core$async19985 = (function cljs$core$async$__GT_t_cljs$core$async19985(ch,topic_fn,buf_fn,mults,ensure_mult,meta19986){
return (new cljs.core.async.t_cljs$core$async19985(ch,topic_fn,buf_fn,mults,ensure_mult,meta19986));
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
var G__19984 = arguments.length;
switch (G__19984) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__19982_SHARP_){
if(cljs.core.truth_((p1__19982_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19982_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19982_SHARP_.call(null,topic)))){
return p1__19982_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19982_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async19985(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__18577__auto___21491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18346__auto__ = (function (state_20063){
var state_val_20064 = (state_20063[(1)]);
if((state_val_20064 === (7))){
var inst_20059 = (state_20063[(2)]);
var state_20063__$1 = state_20063;
var statearr_20066_21492 = state_20063__$1;
(statearr_20066_21492[(2)] = inst_20059);

(statearr_20066_21492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (20))){
var state_20063__$1 = state_20063;
var statearr_20068_21493 = state_20063__$1;
(statearr_20068_21493[(2)] = null);

(statearr_20068_21493[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (1))){
var state_20063__$1 = state_20063;
var statearr_20069_21494 = state_20063__$1;
(statearr_20069_21494[(2)] = null);

(statearr_20069_21494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (24))){
var inst_20042 = (state_20063[(7)]);
var inst_20051 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_20042);
var state_20063__$1 = state_20063;
var statearr_20070_21516 = state_20063__$1;
(statearr_20070_21516[(2)] = inst_20051);

(statearr_20070_21516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (4))){
var inst_19992 = (state_20063[(8)]);
var inst_19992__$1 = (state_20063[(2)]);
var inst_19993 = (inst_19992__$1 == null);
var state_20063__$1 = (function (){var statearr_20071 = state_20063;
(statearr_20071[(8)] = inst_19992__$1);

return statearr_20071;
})();
if(cljs.core.truth_(inst_19993)){
var statearr_20072_21531 = state_20063__$1;
(statearr_20072_21531[(1)] = (5));

} else {
var statearr_20073_21533 = state_20063__$1;
(statearr_20073_21533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (15))){
var inst_20036 = (state_20063[(2)]);
var state_20063__$1 = state_20063;
var statearr_20074_21534 = state_20063__$1;
(statearr_20074_21534[(2)] = inst_20036);

(statearr_20074_21534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (21))){
var inst_20056 = (state_20063[(2)]);
var state_20063__$1 = (function (){var statearr_20075 = state_20063;
(statearr_20075[(9)] = inst_20056);

return statearr_20075;
})();
var statearr_20076_21542 = state_20063__$1;
(statearr_20076_21542[(2)] = null);

(statearr_20076_21542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (13))){
var inst_20016 = (state_20063[(10)]);
var inst_20018 = cljs.core.chunked_seq_QMARK_(inst_20016);
var state_20063__$1 = state_20063;
if(inst_20018){
var statearr_20077_21554 = state_20063__$1;
(statearr_20077_21554[(1)] = (16));

} else {
var statearr_20078_21555 = state_20063__$1;
(statearr_20078_21555[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (22))){
var inst_20048 = (state_20063[(2)]);
var state_20063__$1 = state_20063;
if(cljs.core.truth_(inst_20048)){
var statearr_20079_21556 = state_20063__$1;
(statearr_20079_21556[(1)] = (23));

} else {
var statearr_20080_21557 = state_20063__$1;
(statearr_20080_21557[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (6))){
var inst_19992 = (state_20063[(8)]);
var inst_20042 = (state_20063[(7)]);
var inst_20044 = (state_20063[(11)]);
var inst_20042__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19992) : topic_fn.call(null,inst_19992));
var inst_20043 = cljs.core.deref(mults);
var inst_20044__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20043,inst_20042__$1);
var state_20063__$1 = (function (){var statearr_20081 = state_20063;
(statearr_20081[(7)] = inst_20042__$1);

(statearr_20081[(11)] = inst_20044__$1);

return statearr_20081;
})();
if(cljs.core.truth_(inst_20044__$1)){
var statearr_20082_21576 = state_20063__$1;
(statearr_20082_21576[(1)] = (19));

} else {
var statearr_20083_21577 = state_20063__$1;
(statearr_20083_21577[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (25))){
var inst_20053 = (state_20063[(2)]);
var state_20063__$1 = state_20063;
var statearr_20084_21587 = state_20063__$1;
(statearr_20084_21587[(2)] = inst_20053);

(statearr_20084_21587[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (17))){
var inst_20016 = (state_20063[(10)]);
var inst_20027 = cljs.core.first(inst_20016);
var inst_20028 = cljs.core.async.muxch_STAR_(inst_20027);
var inst_20029 = cljs.core.async.close_BANG_(inst_20028);
var inst_20030 = cljs.core.next(inst_20016);
var inst_20002 = inst_20030;
var inst_20003 = null;
var inst_20004 = (0);
var inst_20005 = (0);
var state_20063__$1 = (function (){var statearr_20085 = state_20063;
(statearr_20085[(12)] = inst_20029);

(statearr_20085[(13)] = inst_20002);

(statearr_20085[(14)] = inst_20003);

(statearr_20085[(15)] = inst_20004);

(statearr_20085[(16)] = inst_20005);

return statearr_20085;
})();
var statearr_20087_21589 = state_20063__$1;
(statearr_20087_21589[(2)] = null);

(statearr_20087_21589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (3))){
var inst_20061 = (state_20063[(2)]);
var state_20063__$1 = state_20063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20063__$1,inst_20061);
} else {
if((state_val_20064 === (12))){
var inst_20038 = (state_20063[(2)]);
var state_20063__$1 = state_20063;
var statearr_20088_21597 = state_20063__$1;
(statearr_20088_21597[(2)] = inst_20038);

(statearr_20088_21597[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (2))){
var state_20063__$1 = state_20063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20063__$1,(4),ch);
} else {
if((state_val_20064 === (23))){
var state_20063__$1 = state_20063;
var statearr_20090_21598 = state_20063__$1;
(statearr_20090_21598[(2)] = null);

(statearr_20090_21598[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (19))){
var inst_20044 = (state_20063[(11)]);
var inst_19992 = (state_20063[(8)]);
var inst_20046 = cljs.core.async.muxch_STAR_(inst_20044);
var state_20063__$1 = state_20063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20063__$1,(22),inst_20046,inst_19992);
} else {
if((state_val_20064 === (11))){
var inst_20002 = (state_20063[(13)]);
var inst_20016 = (state_20063[(10)]);
var inst_20016__$1 = cljs.core.seq(inst_20002);
var state_20063__$1 = (function (){var statearr_20091 = state_20063;
(statearr_20091[(10)] = inst_20016__$1);

return statearr_20091;
})();
if(inst_20016__$1){
var statearr_20092_21608 = state_20063__$1;
(statearr_20092_21608[(1)] = (13));

} else {
var statearr_20097_21610 = state_20063__$1;
(statearr_20097_21610[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (9))){
var inst_20040 = (state_20063[(2)]);
var state_20063__$1 = state_20063;
var statearr_20099_21617 = state_20063__$1;
(statearr_20099_21617[(2)] = inst_20040);

(statearr_20099_21617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (5))){
var inst_19999 = cljs.core.deref(mults);
var inst_20000 = cljs.core.vals(inst_19999);
var inst_20001 = cljs.core.seq(inst_20000);
var inst_20002 = inst_20001;
var inst_20003 = null;
var inst_20004 = (0);
var inst_20005 = (0);
var state_20063__$1 = (function (){var statearr_20100 = state_20063;
(statearr_20100[(13)] = inst_20002);

(statearr_20100[(14)] = inst_20003);

(statearr_20100[(15)] = inst_20004);

(statearr_20100[(16)] = inst_20005);

return statearr_20100;
})();
var statearr_20101_21626 = state_20063__$1;
(statearr_20101_21626[(2)] = null);

(statearr_20101_21626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (14))){
var state_20063__$1 = state_20063;
var statearr_20105_21631 = state_20063__$1;
(statearr_20105_21631[(2)] = null);

(statearr_20105_21631[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (16))){
var inst_20016 = (state_20063[(10)]);
var inst_20022 = cljs.core.chunk_first(inst_20016);
var inst_20023 = cljs.core.chunk_rest(inst_20016);
var inst_20024 = cljs.core.count(inst_20022);
var inst_20002 = inst_20023;
var inst_20003 = inst_20022;
var inst_20004 = inst_20024;
var inst_20005 = (0);
var state_20063__$1 = (function (){var statearr_20106 = state_20063;
(statearr_20106[(13)] = inst_20002);

(statearr_20106[(14)] = inst_20003);

(statearr_20106[(15)] = inst_20004);

(statearr_20106[(16)] = inst_20005);

return statearr_20106;
})();
var statearr_20107_21635 = state_20063__$1;
(statearr_20107_21635[(2)] = null);

(statearr_20107_21635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (10))){
var inst_20003 = (state_20063[(14)]);
var inst_20005 = (state_20063[(16)]);
var inst_20002 = (state_20063[(13)]);
var inst_20004 = (state_20063[(15)]);
var inst_20010 = cljs.core._nth(inst_20003,inst_20005);
var inst_20011 = cljs.core.async.muxch_STAR_(inst_20010);
var inst_20012 = cljs.core.async.close_BANG_(inst_20011);
var inst_20013 = (inst_20005 + (1));
var tmp20102 = inst_20003;
var tmp20103 = inst_20002;
var tmp20104 = inst_20004;
var inst_20002__$1 = tmp20103;
var inst_20003__$1 = tmp20102;
var inst_20004__$1 = tmp20104;
var inst_20005__$1 = inst_20013;
var state_20063__$1 = (function (){var statearr_20108 = state_20063;
(statearr_20108[(17)] = inst_20012);

(statearr_20108[(13)] = inst_20002__$1);

(statearr_20108[(14)] = inst_20003__$1);

(statearr_20108[(15)] = inst_20004__$1);

(statearr_20108[(16)] = inst_20005__$1);

return statearr_20108;
})();
var statearr_20109_21649 = state_20063__$1;
(statearr_20109_21649[(2)] = null);

(statearr_20109_21649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (18))){
var inst_20033 = (state_20063[(2)]);
var state_20063__$1 = state_20063;
var statearr_20111_21651 = state_20063__$1;
(statearr_20111_21651[(2)] = inst_20033);

(statearr_20111_21651[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (8))){
var inst_20005 = (state_20063[(16)]);
var inst_20004 = (state_20063[(15)]);
var inst_20007 = (inst_20005 < inst_20004);
var inst_20008 = inst_20007;
var state_20063__$1 = state_20063;
if(cljs.core.truth_(inst_20008)){
var statearr_20112_21652 = state_20063__$1;
(statearr_20112_21652[(1)] = (10));

} else {
var statearr_20114_21653 = state_20063__$1;
(statearr_20114_21653[(1)] = (11));

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
var cljs$core$async$state_machine__18347__auto__ = null;
var cljs$core$async$state_machine__18347__auto____0 = (function (){
var statearr_20117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20117[(0)] = cljs$core$async$state_machine__18347__auto__);

(statearr_20117[(1)] = (1));

return statearr_20117;
});
var cljs$core$async$state_machine__18347__auto____1 = (function (state_20063){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_20063);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e20118){var ex__18350__auto__ = e20118;
var statearr_20119_21655 = state_20063;
(statearr_20119_21655[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_20063[(4)]))){
var statearr_20120_21657 = state_20063;
(statearr_20120_21657[(1)] = cljs.core.first((state_20063[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21658 = state_20063;
state_20063 = G__21658;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
cljs$core$async$state_machine__18347__auto__ = function(state_20063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18347__auto____1.call(this,state_20063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18347__auto____0;
cljs$core$async$state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18347__auto____1;
return cljs$core$async$state_machine__18347__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_20121 = f__18578__auto__();
(statearr_20121[(6)] = c__18577__auto___21491);

return statearr_20121;
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
var G__20126 = arguments.length;
switch (G__20126) {
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
var G__20128 = arguments.length;
switch (G__20128) {
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
var G__20143 = arguments.length;
switch (G__20143) {
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
var c__18577__auto___21700 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18346__auto__ = (function (state_20205){
var state_val_20206 = (state_20205[(1)]);
if((state_val_20206 === (7))){
var state_20205__$1 = state_20205;
var statearr_20207_21707 = state_20205__$1;
(statearr_20207_21707[(2)] = null);

(statearr_20207_21707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (1))){
var state_20205__$1 = state_20205;
var statearr_20208_21708 = state_20205__$1;
(statearr_20208_21708[(2)] = null);

(statearr_20208_21708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (4))){
var inst_20153 = (state_20205[(7)]);
var inst_20152 = (state_20205[(8)]);
var inst_20155 = (inst_20153 < inst_20152);
var state_20205__$1 = state_20205;
if(cljs.core.truth_(inst_20155)){
var statearr_20210_21709 = state_20205__$1;
(statearr_20210_21709[(1)] = (6));

} else {
var statearr_20214_21714 = state_20205__$1;
(statearr_20214_21714[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (15))){
var inst_20191 = (state_20205[(9)]);
var inst_20196 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_20191);
var state_20205__$1 = state_20205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20205__$1,(17),out,inst_20196);
} else {
if((state_val_20206 === (13))){
var inst_20191 = (state_20205[(9)]);
var inst_20191__$1 = (state_20205[(2)]);
var inst_20192 = cljs.core.some(cljs.core.nil_QMARK_,inst_20191__$1);
var state_20205__$1 = (function (){var statearr_20215 = state_20205;
(statearr_20215[(9)] = inst_20191__$1);

return statearr_20215;
})();
if(cljs.core.truth_(inst_20192)){
var statearr_20216_21735 = state_20205__$1;
(statearr_20216_21735[(1)] = (14));

} else {
var statearr_20217_21736 = state_20205__$1;
(statearr_20217_21736[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (6))){
var state_20205__$1 = state_20205;
var statearr_20218_21745 = state_20205__$1;
(statearr_20218_21745[(2)] = null);

(statearr_20218_21745[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (17))){
var inst_20198 = (state_20205[(2)]);
var state_20205__$1 = (function (){var statearr_20220 = state_20205;
(statearr_20220[(10)] = inst_20198);

return statearr_20220;
})();
var statearr_20221_21759 = state_20205__$1;
(statearr_20221_21759[(2)] = null);

(statearr_20221_21759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (3))){
var inst_20203 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20205__$1,inst_20203);
} else {
if((state_val_20206 === (12))){
var _ = (function (){var statearr_20222 = state_20205;
(statearr_20222[(4)] = cljs.core.rest((state_20205[(4)])));

return statearr_20222;
})();
var state_20205__$1 = state_20205;
var ex20219 = (state_20205__$1[(2)]);
var statearr_20223_21771 = state_20205__$1;
(statearr_20223_21771[(5)] = ex20219);


if((ex20219 instanceof Object)){
var statearr_20224_21773 = state_20205__$1;
(statearr_20224_21773[(1)] = (11));

(statearr_20224_21773[(5)] = null);

} else {
throw ex20219;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (2))){
var inst_20151 = cljs.core.reset_BANG_(dctr,cnt);
var inst_20152 = cnt;
var inst_20153 = (0);
var state_20205__$1 = (function (){var statearr_20229 = state_20205;
(statearr_20229[(11)] = inst_20151);

(statearr_20229[(8)] = inst_20152);

(statearr_20229[(7)] = inst_20153);

return statearr_20229;
})();
var statearr_20232_21794 = state_20205__$1;
(statearr_20232_21794[(2)] = null);

(statearr_20232_21794[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (11))){
var inst_20170 = (state_20205[(2)]);
var inst_20171 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_20205__$1 = (function (){var statearr_20233 = state_20205;
(statearr_20233[(12)] = inst_20170);

return statearr_20233;
})();
var statearr_20235_21815 = state_20205__$1;
(statearr_20235_21815[(2)] = inst_20171);

(statearr_20235_21815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (9))){
var inst_20153 = (state_20205[(7)]);
var _ = (function (){var statearr_20236 = state_20205;
(statearr_20236[(4)] = cljs.core.cons((12),(state_20205[(4)])));

return statearr_20236;
})();
var inst_20177 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_20153) : chs__$1.call(null,inst_20153));
var inst_20178 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_20153) : done.call(null,inst_20153));
var inst_20179 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_20177,inst_20178);
var ___$1 = (function (){var statearr_20238 = state_20205;
(statearr_20238[(4)] = cljs.core.rest((state_20205[(4)])));

return statearr_20238;
})();
var state_20205__$1 = state_20205;
var statearr_20239_21825 = state_20205__$1;
(statearr_20239_21825[(2)] = inst_20179);

(statearr_20239_21825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (5))){
var inst_20189 = (state_20205[(2)]);
var state_20205__$1 = (function (){var statearr_20240 = state_20205;
(statearr_20240[(13)] = inst_20189);

return statearr_20240;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20205__$1,(13),dchan);
} else {
if((state_val_20206 === (14))){
var inst_20194 = cljs.core.async.close_BANG_(out);
var state_20205__$1 = state_20205;
var statearr_20241_21827 = state_20205__$1;
(statearr_20241_21827[(2)] = inst_20194);

(statearr_20241_21827[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (16))){
var inst_20201 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
var statearr_20242_21828 = state_20205__$1;
(statearr_20242_21828[(2)] = inst_20201);

(statearr_20242_21828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (10))){
var inst_20153 = (state_20205[(7)]);
var inst_20182 = (state_20205[(2)]);
var inst_20183 = (inst_20153 + (1));
var inst_20153__$1 = inst_20183;
var state_20205__$1 = (function (){var statearr_20243 = state_20205;
(statearr_20243[(14)] = inst_20182);

(statearr_20243[(7)] = inst_20153__$1);

return statearr_20243;
})();
var statearr_20244_21832 = state_20205__$1;
(statearr_20244_21832[(2)] = null);

(statearr_20244_21832[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (8))){
var inst_20187 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
var statearr_20245_21833 = state_20205__$1;
(statearr_20245_21833[(2)] = inst_20187);

(statearr_20245_21833[(1)] = (5));


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
var cljs$core$async$state_machine__18347__auto__ = null;
var cljs$core$async$state_machine__18347__auto____0 = (function (){
var statearr_20246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20246[(0)] = cljs$core$async$state_machine__18347__auto__);

(statearr_20246[(1)] = (1));

return statearr_20246;
});
var cljs$core$async$state_machine__18347__auto____1 = (function (state_20205){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_20205);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e20247){var ex__18350__auto__ = e20247;
var statearr_20248_21834 = state_20205;
(statearr_20248_21834[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_20205[(4)]))){
var statearr_20249_21835 = state_20205;
(statearr_20249_21835[(1)] = cljs.core.first((state_20205[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21836 = state_20205;
state_20205 = G__21836;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
cljs$core$async$state_machine__18347__auto__ = function(state_20205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18347__auto____1.call(this,state_20205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18347__auto____0;
cljs$core$async$state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18347__auto____1;
return cljs$core$async$state_machine__18347__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_20250 = f__18578__auto__();
(statearr_20250[(6)] = c__18577__auto___21700);

return statearr_20250;
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
var G__20255 = arguments.length;
switch (G__20255) {
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
var c__18577__auto___21848 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18346__auto__ = (function (state_20292){
var state_val_20293 = (state_20292[(1)]);
if((state_val_20293 === (7))){
var inst_20271 = (state_20292[(7)]);
var inst_20272 = (state_20292[(8)]);
var inst_20271__$1 = (state_20292[(2)]);
var inst_20272__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20271__$1,(0),null);
var inst_20273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20271__$1,(1),null);
var inst_20274 = (inst_20272__$1 == null);
var state_20292__$1 = (function (){var statearr_20294 = state_20292;
(statearr_20294[(7)] = inst_20271__$1);

(statearr_20294[(8)] = inst_20272__$1);

(statearr_20294[(9)] = inst_20273);

return statearr_20294;
})();
if(cljs.core.truth_(inst_20274)){
var statearr_20295_21853 = state_20292__$1;
(statearr_20295_21853[(1)] = (8));

} else {
var statearr_20296_21854 = state_20292__$1;
(statearr_20296_21854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20293 === (1))){
var inst_20257 = cljs.core.vec(chs);
var inst_20258 = inst_20257;
var state_20292__$1 = (function (){var statearr_20297 = state_20292;
(statearr_20297[(10)] = inst_20258);

return statearr_20297;
})();
var statearr_20298_21855 = state_20292__$1;
(statearr_20298_21855[(2)] = null);

(statearr_20298_21855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20293 === (4))){
var inst_20258 = (state_20292[(10)]);
var state_20292__$1 = state_20292;
return cljs.core.async.ioc_alts_BANG_(state_20292__$1,(7),inst_20258);
} else {
if((state_val_20293 === (6))){
var inst_20288 = (state_20292[(2)]);
var state_20292__$1 = state_20292;
var statearr_20299_21856 = state_20292__$1;
(statearr_20299_21856[(2)] = inst_20288);

(statearr_20299_21856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20293 === (3))){
var inst_20290 = (state_20292[(2)]);
var state_20292__$1 = state_20292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20292__$1,inst_20290);
} else {
if((state_val_20293 === (2))){
var inst_20258 = (state_20292[(10)]);
var inst_20260 = cljs.core.count(inst_20258);
var inst_20261 = (inst_20260 > (0));
var state_20292__$1 = state_20292;
if(cljs.core.truth_(inst_20261)){
var statearr_20305_21862 = state_20292__$1;
(statearr_20305_21862[(1)] = (4));

} else {
var statearr_20306_21863 = state_20292__$1;
(statearr_20306_21863[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20293 === (11))){
var inst_20258 = (state_20292[(10)]);
var inst_20281 = (state_20292[(2)]);
var tmp20300 = inst_20258;
var inst_20258__$1 = tmp20300;
var state_20292__$1 = (function (){var statearr_20308 = state_20292;
(statearr_20308[(11)] = inst_20281);

(statearr_20308[(10)] = inst_20258__$1);

return statearr_20308;
})();
var statearr_20309_21864 = state_20292__$1;
(statearr_20309_21864[(2)] = null);

(statearr_20309_21864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20293 === (9))){
var inst_20272 = (state_20292[(8)]);
var state_20292__$1 = state_20292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20292__$1,(11),out,inst_20272);
} else {
if((state_val_20293 === (5))){
var inst_20286 = cljs.core.async.close_BANG_(out);
var state_20292__$1 = state_20292;
var statearr_20311_21865 = state_20292__$1;
(statearr_20311_21865[(2)] = inst_20286);

(statearr_20311_21865[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20293 === (10))){
var inst_20284 = (state_20292[(2)]);
var state_20292__$1 = state_20292;
var statearr_20313_21867 = state_20292__$1;
(statearr_20313_21867[(2)] = inst_20284);

(statearr_20313_21867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20293 === (8))){
var inst_20258 = (state_20292[(10)]);
var inst_20271 = (state_20292[(7)]);
var inst_20272 = (state_20292[(8)]);
var inst_20273 = (state_20292[(9)]);
var inst_20276 = (function (){var cs = inst_20258;
var vec__20267 = inst_20271;
var v = inst_20272;
var c = inst_20273;
return (function (p1__20252_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__20252_SHARP_);
});
})();
var inst_20277 = cljs.core.filterv(inst_20276,inst_20258);
var inst_20258__$1 = inst_20277;
var state_20292__$1 = (function (){var statearr_20314 = state_20292;
(statearr_20314[(10)] = inst_20258__$1);

return statearr_20314;
})();
var statearr_20315_21872 = state_20292__$1;
(statearr_20315_21872[(2)] = null);

(statearr_20315_21872[(1)] = (2));


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
var cljs$core$async$state_machine__18347__auto__ = null;
var cljs$core$async$state_machine__18347__auto____0 = (function (){
var statearr_20316 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20316[(0)] = cljs$core$async$state_machine__18347__auto__);

(statearr_20316[(1)] = (1));

return statearr_20316;
});
var cljs$core$async$state_machine__18347__auto____1 = (function (state_20292){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_20292);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e20317){var ex__18350__auto__ = e20317;
var statearr_20318_21874 = state_20292;
(statearr_20318_21874[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_20292[(4)]))){
var statearr_20319_21875 = state_20292;
(statearr_20319_21875[(1)] = cljs.core.first((state_20292[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21879 = state_20292;
state_20292 = G__21879;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
cljs$core$async$state_machine__18347__auto__ = function(state_20292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18347__auto____1.call(this,state_20292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18347__auto____0;
cljs$core$async$state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18347__auto____1;
return cljs$core$async$state_machine__18347__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_20321 = f__18578__auto__();
(statearr_20321[(6)] = c__18577__auto___21848);

return statearr_20321;
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
var G__20327 = arguments.length;
switch (G__20327) {
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
var c__18577__auto___21881 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18346__auto__ = (function (state_20351){
var state_val_20352 = (state_20351[(1)]);
if((state_val_20352 === (7))){
var inst_20333 = (state_20351[(7)]);
var inst_20333__$1 = (state_20351[(2)]);
var inst_20334 = (inst_20333__$1 == null);
var inst_20335 = cljs.core.not(inst_20334);
var state_20351__$1 = (function (){var statearr_20353 = state_20351;
(statearr_20353[(7)] = inst_20333__$1);

return statearr_20353;
})();
if(inst_20335){
var statearr_20354_21882 = state_20351__$1;
(statearr_20354_21882[(1)] = (8));

} else {
var statearr_20355_21883 = state_20351__$1;
(statearr_20355_21883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (1))){
var inst_20328 = (0);
var state_20351__$1 = (function (){var statearr_20356 = state_20351;
(statearr_20356[(8)] = inst_20328);

return statearr_20356;
})();
var statearr_20357_21884 = state_20351__$1;
(statearr_20357_21884[(2)] = null);

(statearr_20357_21884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (4))){
var state_20351__$1 = state_20351;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20351__$1,(7),ch);
} else {
if((state_val_20352 === (6))){
var inst_20346 = (state_20351[(2)]);
var state_20351__$1 = state_20351;
var statearr_20358_21886 = state_20351__$1;
(statearr_20358_21886[(2)] = inst_20346);

(statearr_20358_21886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (3))){
var inst_20348 = (state_20351[(2)]);
var inst_20349 = cljs.core.async.close_BANG_(out);
var state_20351__$1 = (function (){var statearr_20359 = state_20351;
(statearr_20359[(9)] = inst_20348);

return statearr_20359;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20351__$1,inst_20349);
} else {
if((state_val_20352 === (2))){
var inst_20328 = (state_20351[(8)]);
var inst_20330 = (inst_20328 < n);
var state_20351__$1 = state_20351;
if(cljs.core.truth_(inst_20330)){
var statearr_20364_21888 = state_20351__$1;
(statearr_20364_21888[(1)] = (4));

} else {
var statearr_20365_21890 = state_20351__$1;
(statearr_20365_21890[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (11))){
var inst_20328 = (state_20351[(8)]);
var inst_20338 = (state_20351[(2)]);
var inst_20339 = (inst_20328 + (1));
var inst_20328__$1 = inst_20339;
var state_20351__$1 = (function (){var statearr_20366 = state_20351;
(statearr_20366[(10)] = inst_20338);

(statearr_20366[(8)] = inst_20328__$1);

return statearr_20366;
})();
var statearr_20367_21891 = state_20351__$1;
(statearr_20367_21891[(2)] = null);

(statearr_20367_21891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (9))){
var state_20351__$1 = state_20351;
var statearr_20368_21892 = state_20351__$1;
(statearr_20368_21892[(2)] = null);

(statearr_20368_21892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (5))){
var state_20351__$1 = state_20351;
var statearr_20370_21893 = state_20351__$1;
(statearr_20370_21893[(2)] = null);

(statearr_20370_21893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (10))){
var inst_20343 = (state_20351[(2)]);
var state_20351__$1 = state_20351;
var statearr_20374_21894 = state_20351__$1;
(statearr_20374_21894[(2)] = inst_20343);

(statearr_20374_21894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (8))){
var inst_20333 = (state_20351[(7)]);
var state_20351__$1 = state_20351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20351__$1,(11),out,inst_20333);
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
var cljs$core$async$state_machine__18347__auto__ = null;
var cljs$core$async$state_machine__18347__auto____0 = (function (){
var statearr_20375 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20375[(0)] = cljs$core$async$state_machine__18347__auto__);

(statearr_20375[(1)] = (1));

return statearr_20375;
});
var cljs$core$async$state_machine__18347__auto____1 = (function (state_20351){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_20351);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e20376){var ex__18350__auto__ = e20376;
var statearr_20377_21895 = state_20351;
(statearr_20377_21895[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_20351[(4)]))){
var statearr_20378_21896 = state_20351;
(statearr_20378_21896[(1)] = cljs.core.first((state_20351[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21898 = state_20351;
state_20351 = G__21898;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
cljs$core$async$state_machine__18347__auto__ = function(state_20351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18347__auto____1.call(this,state_20351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18347__auto____0;
cljs$core$async$state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18347__auto____1;
return cljs$core$async$state_machine__18347__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_20379 = f__18578__auto__();
(statearr_20379[(6)] = c__18577__auto___21881);

return statearr_20379;
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
cljs.core.async.t_cljs$core$async20389 = (function (f,ch,meta20387,_,fn1,meta20390){
this.f = f;
this.ch = ch;
this.meta20387 = meta20387;
this._ = _;
this.fn1 = fn1;
this.meta20390 = meta20390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20391,meta20390__$1){
var self__ = this;
var _20391__$1 = this;
return (new cljs.core.async.t_cljs$core$async20389(self__.f,self__.ch,self__.meta20387,self__._,self__.fn1,meta20390__$1));
}));

(cljs.core.async.t_cljs$core$async20389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20391){
var self__ = this;
var _20391__$1 = this;
return self__.meta20390;
}));

(cljs.core.async.t_cljs$core$async20389.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20389.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async20389.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20389.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__20382_SHARP_){
var G__20392 = (((p1__20382_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20382_SHARP_) : self__.f.call(null,p1__20382_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20392) : f1.call(null,G__20392));
});
}));

(cljs.core.async.t_cljs$core$async20389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20387","meta20387",313927749,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20386","cljs.core.async/t_cljs$core$async20386",-523509856,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20390","meta20390",1165030017,null)], null);
}));

(cljs.core.async.t_cljs$core$async20389.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20389");

(cljs.core.async.t_cljs$core$async20389.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async20389");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20389.
 */
cljs.core.async.__GT_t_cljs$core$async20389 = (function cljs$core$async$__GT_t_cljs$core$async20389(f,ch,meta20387,_,fn1,meta20390){
return (new cljs.core.async.t_cljs$core$async20389(f,ch,meta20387,_,fn1,meta20390));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20386 = (function (f,ch,meta20387){
this.f = f;
this.ch = ch;
this.meta20387 = meta20387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20388,meta20387__$1){
var self__ = this;
var _20388__$1 = this;
return (new cljs.core.async.t_cljs$core$async20386(self__.f,self__.ch,meta20387__$1));
}));

(cljs.core.async.t_cljs$core$async20386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20388){
var self__ = this;
var _20388__$1 = this;
return self__.meta20387;
}));

(cljs.core.async.t_cljs$core$async20386.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20386.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20386.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20386.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20386.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async20389(self__.f,self__.ch,self__.meta20387,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20393 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20393) : self__.f.call(null,G__20393));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async20386.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20386.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async20386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20387","meta20387",313927749,null)], null);
}));

(cljs.core.async.t_cljs$core$async20386.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20386");

(cljs.core.async.t_cljs$core$async20386.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async20386");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20386.
 */
cljs.core.async.__GT_t_cljs$core$async20386 = (function cljs$core$async$__GT_t_cljs$core$async20386(f,ch,meta20387){
return (new cljs.core.async.t_cljs$core$async20386(f,ch,meta20387));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async20386(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20394 = (function (f,ch,meta20395){
this.f = f;
this.ch = ch;
this.meta20395 = meta20395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20396,meta20395__$1){
var self__ = this;
var _20396__$1 = this;
return (new cljs.core.async.t_cljs$core$async20394(self__.f,self__.ch,meta20395__$1));
}));

(cljs.core.async.t_cljs$core$async20394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20396){
var self__ = this;
var _20396__$1 = this;
return self__.meta20395;
}));

(cljs.core.async.t_cljs$core$async20394.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20394.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20394.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20394.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20394.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20394.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async20394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20395","meta20395",874259008,null)], null);
}));

(cljs.core.async.t_cljs$core$async20394.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20394.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20394");

(cljs.core.async.t_cljs$core$async20394.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async20394");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20394.
 */
cljs.core.async.__GT_t_cljs$core$async20394 = (function cljs$core$async$__GT_t_cljs$core$async20394(f,ch,meta20395){
return (new cljs.core.async.t_cljs$core$async20394(f,ch,meta20395));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async20394(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20401 = (function (p,ch,meta20402){
this.p = p;
this.ch = ch;
this.meta20402 = meta20402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20403,meta20402__$1){
var self__ = this;
var _20403__$1 = this;
return (new cljs.core.async.t_cljs$core$async20401(self__.p,self__.ch,meta20402__$1));
}));

(cljs.core.async.t_cljs$core$async20401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20403){
var self__ = this;
var _20403__$1 = this;
return self__.meta20402;
}));

(cljs.core.async.t_cljs$core$async20401.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20401.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20401.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20401.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20401.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20401.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20401.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async20401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20402","meta20402",-600859203,null)], null);
}));

(cljs.core.async.t_cljs$core$async20401.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20401");

(cljs.core.async.t_cljs$core$async20401.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async20401");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20401.
 */
cljs.core.async.__GT_t_cljs$core$async20401 = (function cljs$core$async$__GT_t_cljs$core$async20401(p,ch,meta20402){
return (new cljs.core.async.t_cljs$core$async20401(p,ch,meta20402));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async20401(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20409 = arguments.length;
switch (G__20409) {
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
var c__18577__auto___21922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18346__auto__ = (function (state_20450){
var state_val_20451 = (state_20450[(1)]);
if((state_val_20451 === (7))){
var inst_20446 = (state_20450[(2)]);
var state_20450__$1 = state_20450;
var statearr_20460_21925 = state_20450__$1;
(statearr_20460_21925[(2)] = inst_20446);

(statearr_20460_21925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20451 === (1))){
var state_20450__$1 = state_20450;
var statearr_20467_21926 = state_20450__$1;
(statearr_20467_21926[(2)] = null);

(statearr_20467_21926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20451 === (4))){
var inst_20426 = (state_20450[(7)]);
var inst_20426__$1 = (state_20450[(2)]);
var inst_20427 = (inst_20426__$1 == null);
var state_20450__$1 = (function (){var statearr_20474 = state_20450;
(statearr_20474[(7)] = inst_20426__$1);

return statearr_20474;
})();
if(cljs.core.truth_(inst_20427)){
var statearr_20475_21929 = state_20450__$1;
(statearr_20475_21929[(1)] = (5));

} else {
var statearr_20476_21930 = state_20450__$1;
(statearr_20476_21930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20451 === (6))){
var inst_20426 = (state_20450[(7)]);
var inst_20431 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20426) : p.call(null,inst_20426));
var state_20450__$1 = state_20450;
if(cljs.core.truth_(inst_20431)){
var statearr_20477_21931 = state_20450__$1;
(statearr_20477_21931[(1)] = (8));

} else {
var statearr_20478_21932 = state_20450__$1;
(statearr_20478_21932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20451 === (3))){
var inst_20448 = (state_20450[(2)]);
var state_20450__$1 = state_20450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20450__$1,inst_20448);
} else {
if((state_val_20451 === (2))){
var state_20450__$1 = state_20450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20450__$1,(4),ch);
} else {
if((state_val_20451 === (11))){
var inst_20440 = (state_20450[(2)]);
var state_20450__$1 = state_20450;
var statearr_20479_21933 = state_20450__$1;
(statearr_20479_21933[(2)] = inst_20440);

(statearr_20479_21933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20451 === (9))){
var state_20450__$1 = state_20450;
var statearr_20480_21935 = state_20450__$1;
(statearr_20480_21935[(2)] = null);

(statearr_20480_21935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20451 === (5))){
var inst_20429 = cljs.core.async.close_BANG_(out);
var state_20450__$1 = state_20450;
var statearr_20483_21937 = state_20450__$1;
(statearr_20483_21937[(2)] = inst_20429);

(statearr_20483_21937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20451 === (10))){
var inst_20443 = (state_20450[(2)]);
var state_20450__$1 = (function (){var statearr_20484 = state_20450;
(statearr_20484[(8)] = inst_20443);

return statearr_20484;
})();
var statearr_20485_21938 = state_20450__$1;
(statearr_20485_21938[(2)] = null);

(statearr_20485_21938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20451 === (8))){
var inst_20426 = (state_20450[(7)]);
var state_20450__$1 = state_20450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20450__$1,(11),out,inst_20426);
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
var cljs$core$async$state_machine__18347__auto__ = null;
var cljs$core$async$state_machine__18347__auto____0 = (function (){
var statearr_20487 = [null,null,null,null,null,null,null,null,null];
(statearr_20487[(0)] = cljs$core$async$state_machine__18347__auto__);

(statearr_20487[(1)] = (1));

return statearr_20487;
});
var cljs$core$async$state_machine__18347__auto____1 = (function (state_20450){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_20450);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e20488){var ex__18350__auto__ = e20488;
var statearr_20489_21939 = state_20450;
(statearr_20489_21939[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_20450[(4)]))){
var statearr_20490_21942 = state_20450;
(statearr_20490_21942[(1)] = cljs.core.first((state_20450[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21945 = state_20450;
state_20450 = G__21945;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
cljs$core$async$state_machine__18347__auto__ = function(state_20450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18347__auto____1.call(this,state_20450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18347__auto____0;
cljs$core$async$state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18347__auto____1;
return cljs$core$async$state_machine__18347__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_20491 = f__18578__auto__();
(statearr_20491[(6)] = c__18577__auto___21922);

return statearr_20491;
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
var G__20496 = arguments.length;
switch (G__20496) {
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
var f__18578__auto__ = (function (){var switch__18346__auto__ = (function (state_20558){
var state_val_20559 = (state_20558[(1)]);
if((state_val_20559 === (7))){
var inst_20554 = (state_20558[(2)]);
var state_20558__$1 = state_20558;
var statearr_20560_21960 = state_20558__$1;
(statearr_20560_21960[(2)] = inst_20554);

(statearr_20560_21960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20559 === (20))){
var inst_20524 = (state_20558[(7)]);
var inst_20535 = (state_20558[(2)]);
var inst_20536 = cljs.core.next(inst_20524);
var inst_20510 = inst_20536;
var inst_20511 = null;
var inst_20512 = (0);
var inst_20513 = (0);
var state_20558__$1 = (function (){var statearr_20561 = state_20558;
(statearr_20561[(8)] = inst_20535);

(statearr_20561[(9)] = inst_20510);

(statearr_20561[(10)] = inst_20511);

(statearr_20561[(11)] = inst_20512);

(statearr_20561[(12)] = inst_20513);

return statearr_20561;
})();
var statearr_20562_21964 = state_20558__$1;
(statearr_20562_21964[(2)] = null);

(statearr_20562_21964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20559 === (1))){
var state_20558__$1 = state_20558;
var statearr_20563_21965 = state_20558__$1;
(statearr_20563_21965[(2)] = null);

(statearr_20563_21965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20559 === (4))){
var inst_20499 = (state_20558[(13)]);
var inst_20499__$1 = (state_20558[(2)]);
var inst_20500 = (inst_20499__$1 == null);
var state_20558__$1 = (function (){var statearr_20564 = state_20558;
(statearr_20564[(13)] = inst_20499__$1);

return statearr_20564;
})();
if(cljs.core.truth_(inst_20500)){
var statearr_20565_21969 = state_20558__$1;
(statearr_20565_21969[(1)] = (5));

} else {
var statearr_20566_21970 = state_20558__$1;
(statearr_20566_21970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20559 === (15))){
var state_20558__$1 = state_20558;
var statearr_20570_21972 = state_20558__$1;
(statearr_20570_21972[(2)] = null);

(statearr_20570_21972[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20559 === (21))){
var state_20558__$1 = state_20558;
var statearr_20571_21974 = state_20558__$1;
(statearr_20571_21974[(2)] = null);

(statearr_20571_21974[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20559 === (13))){
var inst_20513 = (state_20558[(12)]);
var inst_20510 = (state_20558[(9)]);
var inst_20511 = (state_20558[(10)]);
var inst_20512 = (state_20558[(11)]);
var inst_20520 = (state_20558[(2)]);
var inst_20521 = (inst_20513 + (1));
var tmp20567 = inst_20510;
var tmp20568 = inst_20511;
var tmp20569 = inst_20512;
var inst_20510__$1 = tmp20567;
var inst_20511__$1 = tmp20568;
var inst_20512__$1 = tmp20569;
var inst_20513__$1 = inst_20521;
var state_20558__$1 = (function (){var statearr_20572 = state_20558;
(statearr_20572[(14)] = inst_20520);

(statearr_20572[(9)] = inst_20510__$1);

(statearr_20572[(10)] = inst_20511__$1);

(statearr_20572[(11)] = inst_20512__$1);

(statearr_20572[(12)] = inst_20513__$1);

return statearr_20572;
})();
var statearr_20573_21982 = state_20558__$1;
(statearr_20573_21982[(2)] = null);

(statearr_20573_21982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20559 === (22))){
var state_20558__$1 = state_20558;
var statearr_20574_21983 = state_20558__$1;
(statearr_20574_21983[(2)] = null);

(statearr_20574_21983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20559 === (6))){
var inst_20499 = (state_20558[(13)]);
var inst_20508 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20499) : f.call(null,inst_20499));
var inst_20509 = cljs.core.seq(inst_20508);
var inst_20510 = inst_20509;
var inst_20511 = null;
var inst_20512 = (0);
var inst_20513 = (0);
var state_20558__$1 = (function (){var statearr_20575 = state_20558;
(statearr_20575[(9)] = inst_20510);

(statearr_20575[(10)] = inst_20511);

(statearr_20575[(11)] = inst_20512);

(statearr_20575[(12)] = inst_20513);

return statearr_20575;
})();
var statearr_20576_21989 = state_20558__$1;
(statearr_20576_21989[(2)] = null);

(statearr_20576_21989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20559 === (17))){
var inst_20524 = (state_20558[(7)]);
var inst_20528 = cljs.core.chunk_first(inst_20524);
var inst_20529 = cljs.core.chunk_rest(inst_20524);
var inst_20530 = cljs.core.count(inst_20528);
var inst_20510 = inst_20529;
var inst_20511 = inst_20528;
var inst_20512 = inst_20530;
var inst_20513 = (0);
var state_20558__$1 = (function (){var statearr_20577 = state_20558;
(statearr_20577[(9)] = inst_20510);

(statearr_20577[(10)] = inst_20511);

(statearr_20577[(11)] = inst_20512);

(statearr_20577[(12)] = inst_20513);

return statearr_20577;
})();
var statearr_20578_21992 = state_20558__$1;
(statearr_20578_21992[(2)] = null);

(statearr_20578_21992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20559 === (3))){
var inst_20556 = (state_20558[(2)]);
var state_20558__$1 = state_20558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20558__$1,inst_20556);
} else {
if((state_val_20559 === (12))){
var inst_20544 = (state_20558[(2)]);
var state_20558__$1 = state_20558;
var statearr_20584_21994 = state_20558__$1;
(statearr_20584_21994[(2)] = inst_20544);

(statearr_20584_21994[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20559 === (2))){
var state_20558__$1 = state_20558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20558__$1,(4),in$);
} else {
if((state_val_20559 === (23))){
var inst_20552 = (state_20558[(2)]);
var state_20558__$1 = state_20558;
var statearr_20588_21997 = state_20558__$1;
(statearr_20588_21997[(2)] = inst_20552);

(statearr_20588_21997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20559 === (19))){
var inst_20539 = (state_20558[(2)]);
var state_20558__$1 = state_20558;
var statearr_20592_22001 = state_20558__$1;
(statearr_20592_22001[(2)] = inst_20539);

(statearr_20592_22001[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20559 === (11))){
var inst_20510 = (state_20558[(9)]);
var inst_20524 = (state_20558[(7)]);
var inst_20524__$1 = cljs.core.seq(inst_20510);
var state_20558__$1 = (function (){var statearr_20593 = state_20558;
(statearr_20593[(7)] = inst_20524__$1);

return statearr_20593;
})();
if(inst_20524__$1){
var statearr_20594_22003 = state_20558__$1;
(statearr_20594_22003[(1)] = (14));

} else {
var statearr_20595_22004 = state_20558__$1;
(statearr_20595_22004[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20559 === (9))){
var inst_20546 = (state_20558[(2)]);
var inst_20547 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20558__$1 = (function (){var statearr_20596 = state_20558;
(statearr_20596[(15)] = inst_20546);

return statearr_20596;
})();
if(cljs.core.truth_(inst_20547)){
var statearr_20597_22005 = state_20558__$1;
(statearr_20597_22005[(1)] = (21));

} else {
var statearr_20598_22010 = state_20558__$1;
(statearr_20598_22010[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20559 === (5))){
var inst_20502 = cljs.core.async.close_BANG_(out);
var state_20558__$1 = state_20558;
var statearr_20599_22011 = state_20558__$1;
(statearr_20599_22011[(2)] = inst_20502);

(statearr_20599_22011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20559 === (14))){
var inst_20524 = (state_20558[(7)]);
var inst_20526 = cljs.core.chunked_seq_QMARK_(inst_20524);
var state_20558__$1 = state_20558;
if(inst_20526){
var statearr_20600_22020 = state_20558__$1;
(statearr_20600_22020[(1)] = (17));

} else {
var statearr_20601_22021 = state_20558__$1;
(statearr_20601_22021[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20559 === (16))){
var inst_20542 = (state_20558[(2)]);
var state_20558__$1 = state_20558;
var statearr_20602_22022 = state_20558__$1;
(statearr_20602_22022[(2)] = inst_20542);

(statearr_20602_22022[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20559 === (10))){
var inst_20511 = (state_20558[(10)]);
var inst_20513 = (state_20558[(12)]);
var inst_20518 = cljs.core._nth(inst_20511,inst_20513);
var state_20558__$1 = state_20558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20558__$1,(13),out,inst_20518);
} else {
if((state_val_20559 === (18))){
var inst_20524 = (state_20558[(7)]);
var inst_20533 = cljs.core.first(inst_20524);
var state_20558__$1 = state_20558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20558__$1,(20),out,inst_20533);
} else {
if((state_val_20559 === (8))){
var inst_20513 = (state_20558[(12)]);
var inst_20512 = (state_20558[(11)]);
var inst_20515 = (inst_20513 < inst_20512);
var inst_20516 = inst_20515;
var state_20558__$1 = state_20558;
if(cljs.core.truth_(inst_20516)){
var statearr_20603_22034 = state_20558__$1;
(statearr_20603_22034[(1)] = (10));

} else {
var statearr_20604_22036 = state_20558__$1;
(statearr_20604_22036[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__18347__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18347__auto____0 = (function (){
var statearr_20605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20605[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18347__auto__);

(statearr_20605[(1)] = (1));

return statearr_20605;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18347__auto____1 = (function (state_20558){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_20558);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e20606){var ex__18350__auto__ = e20606;
var statearr_20607_22047 = state_20558;
(statearr_20607_22047[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_20558[(4)]))){
var statearr_20608_22050 = state_20558;
(statearr_20608_22050[(1)] = cljs.core.first((state_20558[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22051 = state_20558;
state_20558 = G__22051;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18347__auto__ = function(state_20558){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18347__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18347__auto____1.call(this,state_20558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18347__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18347__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18347__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_20609 = f__18578__auto__();
(statearr_20609[(6)] = c__18577__auto__);

return statearr_20609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));

return c__18577__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20611 = arguments.length;
switch (G__20611) {
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
var G__20615 = arguments.length;
switch (G__20615) {
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
var G__20619 = arguments.length;
switch (G__20619) {
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
var c__18577__auto___22064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18346__auto__ = (function (state_20647){
var state_val_20648 = (state_20647[(1)]);
if((state_val_20648 === (7))){
var inst_20642 = (state_20647[(2)]);
var state_20647__$1 = state_20647;
var statearr_20649_22065 = state_20647__$1;
(statearr_20649_22065[(2)] = inst_20642);

(statearr_20649_22065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20648 === (1))){
var inst_20622 = null;
var state_20647__$1 = (function (){var statearr_20650 = state_20647;
(statearr_20650[(7)] = inst_20622);

return statearr_20650;
})();
var statearr_20651_22066 = state_20647__$1;
(statearr_20651_22066[(2)] = null);

(statearr_20651_22066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20648 === (4))){
var inst_20626 = (state_20647[(8)]);
var inst_20626__$1 = (state_20647[(2)]);
var inst_20628 = (inst_20626__$1 == null);
var inst_20629 = cljs.core.not(inst_20628);
var state_20647__$1 = (function (){var statearr_20652 = state_20647;
(statearr_20652[(8)] = inst_20626__$1);

return statearr_20652;
})();
if(inst_20629){
var statearr_20653_22067 = state_20647__$1;
(statearr_20653_22067[(1)] = (5));

} else {
var statearr_20654_22068 = state_20647__$1;
(statearr_20654_22068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20648 === (6))){
var state_20647__$1 = state_20647;
var statearr_20655_22069 = state_20647__$1;
(statearr_20655_22069[(2)] = null);

(statearr_20655_22069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20648 === (3))){
var inst_20644 = (state_20647[(2)]);
var inst_20645 = cljs.core.async.close_BANG_(out);
var state_20647__$1 = (function (){var statearr_20656 = state_20647;
(statearr_20656[(9)] = inst_20644);

return statearr_20656;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20647__$1,inst_20645);
} else {
if((state_val_20648 === (2))){
var state_20647__$1 = state_20647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20647__$1,(4),ch);
} else {
if((state_val_20648 === (11))){
var inst_20626 = (state_20647[(8)]);
var inst_20636 = (state_20647[(2)]);
var inst_20622 = inst_20626;
var state_20647__$1 = (function (){var statearr_20657 = state_20647;
(statearr_20657[(10)] = inst_20636);

(statearr_20657[(7)] = inst_20622);

return statearr_20657;
})();
var statearr_20658_22070 = state_20647__$1;
(statearr_20658_22070[(2)] = null);

(statearr_20658_22070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20648 === (9))){
var inst_20626 = (state_20647[(8)]);
var state_20647__$1 = state_20647;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20647__$1,(11),out,inst_20626);
} else {
if((state_val_20648 === (5))){
var inst_20626 = (state_20647[(8)]);
var inst_20622 = (state_20647[(7)]);
var inst_20631 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20626,inst_20622);
var state_20647__$1 = state_20647;
if(inst_20631){
var statearr_20660_22073 = state_20647__$1;
(statearr_20660_22073[(1)] = (8));

} else {
var statearr_20661_22074 = state_20647__$1;
(statearr_20661_22074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20648 === (10))){
var inst_20639 = (state_20647[(2)]);
var state_20647__$1 = state_20647;
var statearr_20662_22076 = state_20647__$1;
(statearr_20662_22076[(2)] = inst_20639);

(statearr_20662_22076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20648 === (8))){
var inst_20622 = (state_20647[(7)]);
var tmp20659 = inst_20622;
var inst_20622__$1 = tmp20659;
var state_20647__$1 = (function (){var statearr_20663 = state_20647;
(statearr_20663[(7)] = inst_20622__$1);

return statearr_20663;
})();
var statearr_20664_22077 = state_20647__$1;
(statearr_20664_22077[(2)] = null);

(statearr_20664_22077[(1)] = (2));


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
var cljs$core$async$state_machine__18347__auto__ = null;
var cljs$core$async$state_machine__18347__auto____0 = (function (){
var statearr_20668 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20668[(0)] = cljs$core$async$state_machine__18347__auto__);

(statearr_20668[(1)] = (1));

return statearr_20668;
});
var cljs$core$async$state_machine__18347__auto____1 = (function (state_20647){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_20647);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e20669){var ex__18350__auto__ = e20669;
var statearr_20670_22078 = state_20647;
(statearr_20670_22078[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_20647[(4)]))){
var statearr_20671_22079 = state_20647;
(statearr_20671_22079[(1)] = cljs.core.first((state_20647[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22080 = state_20647;
state_20647 = G__22080;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
cljs$core$async$state_machine__18347__auto__ = function(state_20647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18347__auto____1.call(this,state_20647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18347__auto____0;
cljs$core$async$state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18347__auto____1;
return cljs$core$async$state_machine__18347__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_20672 = f__18578__auto__();
(statearr_20672[(6)] = c__18577__auto___22064);

return statearr_20672;
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
var G__20684 = arguments.length;
switch (G__20684) {
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
var c__18577__auto___22093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18346__auto__ = (function (state_20735){
var state_val_20736 = (state_20735[(1)]);
if((state_val_20736 === (7))){
var inst_20728 = (state_20735[(2)]);
var state_20735__$1 = state_20735;
var statearr_20737_22100 = state_20735__$1;
(statearr_20737_22100[(2)] = inst_20728);

(statearr_20737_22100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20736 === (1))){
var inst_20688 = (new Array(n));
var inst_20689 = inst_20688;
var inst_20690 = (0);
var state_20735__$1 = (function (){var statearr_20744 = state_20735;
(statearr_20744[(7)] = inst_20689);

(statearr_20744[(8)] = inst_20690);

return statearr_20744;
})();
var statearr_20749_22104 = state_20735__$1;
(statearr_20749_22104[(2)] = null);

(statearr_20749_22104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20736 === (4))){
var inst_20693 = (state_20735[(9)]);
var inst_20693__$1 = (state_20735[(2)]);
var inst_20694 = (inst_20693__$1 == null);
var inst_20695 = cljs.core.not(inst_20694);
var state_20735__$1 = (function (){var statearr_20753 = state_20735;
(statearr_20753[(9)] = inst_20693__$1);

return statearr_20753;
})();
if(inst_20695){
var statearr_20754_22116 = state_20735__$1;
(statearr_20754_22116[(1)] = (5));

} else {
var statearr_20755_22117 = state_20735__$1;
(statearr_20755_22117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20736 === (15))){
var inst_20722 = (state_20735[(2)]);
var state_20735__$1 = state_20735;
var statearr_20760_22124 = state_20735__$1;
(statearr_20760_22124[(2)] = inst_20722);

(statearr_20760_22124[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20736 === (13))){
var state_20735__$1 = state_20735;
var statearr_20761_22125 = state_20735__$1;
(statearr_20761_22125[(2)] = null);

(statearr_20761_22125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20736 === (6))){
var inst_20690 = (state_20735[(8)]);
var inst_20715 = (inst_20690 > (0));
var state_20735__$1 = state_20735;
if(cljs.core.truth_(inst_20715)){
var statearr_20762_22126 = state_20735__$1;
(statearr_20762_22126[(1)] = (12));

} else {
var statearr_20763_22127 = state_20735__$1;
(statearr_20763_22127[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20736 === (3))){
var inst_20730 = (state_20735[(2)]);
var state_20735__$1 = state_20735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20735__$1,inst_20730);
} else {
if((state_val_20736 === (12))){
var inst_20689 = (state_20735[(7)]);
var inst_20720 = cljs.core.vec(inst_20689);
var state_20735__$1 = state_20735;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20735__$1,(15),out,inst_20720);
} else {
if((state_val_20736 === (2))){
var state_20735__$1 = state_20735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20735__$1,(4),ch);
} else {
if((state_val_20736 === (11))){
var inst_20705 = (state_20735[(2)]);
var inst_20706 = (new Array(n));
var inst_20689 = inst_20706;
var inst_20690 = (0);
var state_20735__$1 = (function (){var statearr_20766 = state_20735;
(statearr_20766[(10)] = inst_20705);

(statearr_20766[(7)] = inst_20689);

(statearr_20766[(8)] = inst_20690);

return statearr_20766;
})();
var statearr_20767_22129 = state_20735__$1;
(statearr_20767_22129[(2)] = null);

(statearr_20767_22129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20736 === (9))){
var inst_20689 = (state_20735[(7)]);
var inst_20703 = cljs.core.vec(inst_20689);
var state_20735__$1 = state_20735;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20735__$1,(11),out,inst_20703);
} else {
if((state_val_20736 === (5))){
var inst_20689 = (state_20735[(7)]);
var inst_20690 = (state_20735[(8)]);
var inst_20693 = (state_20735[(9)]);
var inst_20698 = (state_20735[(11)]);
var inst_20697 = (inst_20689[inst_20690] = inst_20693);
var inst_20698__$1 = (inst_20690 + (1));
var inst_20699 = (inst_20698__$1 < n);
var state_20735__$1 = (function (){var statearr_20768 = state_20735;
(statearr_20768[(12)] = inst_20697);

(statearr_20768[(11)] = inst_20698__$1);

return statearr_20768;
})();
if(cljs.core.truth_(inst_20699)){
var statearr_20769_22134 = state_20735__$1;
(statearr_20769_22134[(1)] = (8));

} else {
var statearr_20770_22135 = state_20735__$1;
(statearr_20770_22135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20736 === (14))){
var inst_20725 = (state_20735[(2)]);
var inst_20726 = cljs.core.async.close_BANG_(out);
var state_20735__$1 = (function (){var statearr_20772 = state_20735;
(statearr_20772[(13)] = inst_20725);

return statearr_20772;
})();
var statearr_20773_22136 = state_20735__$1;
(statearr_20773_22136[(2)] = inst_20726);

(statearr_20773_22136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20736 === (10))){
var inst_20709 = (state_20735[(2)]);
var state_20735__$1 = state_20735;
var statearr_20774_22137 = state_20735__$1;
(statearr_20774_22137[(2)] = inst_20709);

(statearr_20774_22137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20736 === (8))){
var inst_20689 = (state_20735[(7)]);
var inst_20698 = (state_20735[(11)]);
var tmp20771 = inst_20689;
var inst_20689__$1 = tmp20771;
var inst_20690 = inst_20698;
var state_20735__$1 = (function (){var statearr_20775 = state_20735;
(statearr_20775[(7)] = inst_20689__$1);

(statearr_20775[(8)] = inst_20690);

return statearr_20775;
})();
var statearr_20776_22138 = state_20735__$1;
(statearr_20776_22138[(2)] = null);

(statearr_20776_22138[(1)] = (2));


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
var cljs$core$async$state_machine__18347__auto__ = null;
var cljs$core$async$state_machine__18347__auto____0 = (function (){
var statearr_20777 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20777[(0)] = cljs$core$async$state_machine__18347__auto__);

(statearr_20777[(1)] = (1));

return statearr_20777;
});
var cljs$core$async$state_machine__18347__auto____1 = (function (state_20735){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_20735);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e20778){var ex__18350__auto__ = e20778;
var statearr_20779_22139 = state_20735;
(statearr_20779_22139[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_20735[(4)]))){
var statearr_20780_22141 = state_20735;
(statearr_20780_22141[(1)] = cljs.core.first((state_20735[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22144 = state_20735;
state_20735 = G__22144;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
cljs$core$async$state_machine__18347__auto__ = function(state_20735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18347__auto____1.call(this,state_20735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18347__auto____0;
cljs$core$async$state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18347__auto____1;
return cljs$core$async$state_machine__18347__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_20781 = f__18578__auto__();
(statearr_20781[(6)] = c__18577__auto___22093);

return statearr_20781;
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
var G__20783 = arguments.length;
switch (G__20783) {
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
var c__18577__auto___22146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18346__auto__ = (function (state_20841){
var state_val_20842 = (state_20841[(1)]);
if((state_val_20842 === (7))){
var inst_20837 = (state_20841[(2)]);
var state_20841__$1 = state_20841;
var statearr_20844_22147 = state_20841__$1;
(statearr_20844_22147[(2)] = inst_20837);

(statearr_20844_22147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20842 === (1))){
var inst_20786 = [];
var inst_20787 = inst_20786;
var inst_20788 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20841__$1 = (function (){var statearr_20845 = state_20841;
(statearr_20845[(7)] = inst_20787);

(statearr_20845[(8)] = inst_20788);

return statearr_20845;
})();
var statearr_20847_22148 = state_20841__$1;
(statearr_20847_22148[(2)] = null);

(statearr_20847_22148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20842 === (4))){
var inst_20791 = (state_20841[(9)]);
var inst_20791__$1 = (state_20841[(2)]);
var inst_20792 = (inst_20791__$1 == null);
var inst_20793 = cljs.core.not(inst_20792);
var state_20841__$1 = (function (){var statearr_20848 = state_20841;
(statearr_20848[(9)] = inst_20791__$1);

return statearr_20848;
})();
if(inst_20793){
var statearr_20849_22152 = state_20841__$1;
(statearr_20849_22152[(1)] = (5));

} else {
var statearr_20850_22153 = state_20841__$1;
(statearr_20850_22153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20842 === (15))){
var inst_20787 = (state_20841[(7)]);
var inst_20829 = cljs.core.vec(inst_20787);
var state_20841__$1 = state_20841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20841__$1,(18),out,inst_20829);
} else {
if((state_val_20842 === (13))){
var inst_20814 = (state_20841[(2)]);
var state_20841__$1 = state_20841;
var statearr_20851_22154 = state_20841__$1;
(statearr_20851_22154[(2)] = inst_20814);

(statearr_20851_22154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20842 === (6))){
var inst_20787 = (state_20841[(7)]);
var inst_20816 = inst_20787.length;
var inst_20817 = (inst_20816 > (0));
var state_20841__$1 = state_20841;
if(cljs.core.truth_(inst_20817)){
var statearr_20852_22156 = state_20841__$1;
(statearr_20852_22156[(1)] = (15));

} else {
var statearr_20853_22157 = state_20841__$1;
(statearr_20853_22157[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20842 === (17))){
var inst_20834 = (state_20841[(2)]);
var inst_20835 = cljs.core.async.close_BANG_(out);
var state_20841__$1 = (function (){var statearr_20854 = state_20841;
(statearr_20854[(10)] = inst_20834);

return statearr_20854;
})();
var statearr_20855_22158 = state_20841__$1;
(statearr_20855_22158[(2)] = inst_20835);

(statearr_20855_22158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20842 === (3))){
var inst_20839 = (state_20841[(2)]);
var state_20841__$1 = state_20841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20841__$1,inst_20839);
} else {
if((state_val_20842 === (12))){
var inst_20787 = (state_20841[(7)]);
var inst_20806 = cljs.core.vec(inst_20787);
var state_20841__$1 = state_20841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20841__$1,(14),out,inst_20806);
} else {
if((state_val_20842 === (2))){
var state_20841__$1 = state_20841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20841__$1,(4),ch);
} else {
if((state_val_20842 === (11))){
var inst_20787 = (state_20841[(7)]);
var inst_20791 = (state_20841[(9)]);
var inst_20795 = (state_20841[(11)]);
var inst_20803 = inst_20787.push(inst_20791);
var tmp20856 = inst_20787;
var inst_20787__$1 = tmp20856;
var inst_20788 = inst_20795;
var state_20841__$1 = (function (){var statearr_20857 = state_20841;
(statearr_20857[(12)] = inst_20803);

(statearr_20857[(7)] = inst_20787__$1);

(statearr_20857[(8)] = inst_20788);

return statearr_20857;
})();
var statearr_20858_22169 = state_20841__$1;
(statearr_20858_22169[(2)] = null);

(statearr_20858_22169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20842 === (9))){
var inst_20788 = (state_20841[(8)]);
var inst_20799 = cljs.core.keyword_identical_QMARK_(inst_20788,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_20841__$1 = state_20841;
var statearr_20862_22170 = state_20841__$1;
(statearr_20862_22170[(2)] = inst_20799);

(statearr_20862_22170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20842 === (5))){
var inst_20791 = (state_20841[(9)]);
var inst_20795 = (state_20841[(11)]);
var inst_20788 = (state_20841[(8)]);
var inst_20796 = (state_20841[(13)]);
var inst_20795__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20791) : f.call(null,inst_20791));
var inst_20796__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20795__$1,inst_20788);
var state_20841__$1 = (function (){var statearr_20863 = state_20841;
(statearr_20863[(11)] = inst_20795__$1);

(statearr_20863[(13)] = inst_20796__$1);

return statearr_20863;
})();
if(inst_20796__$1){
var statearr_20864_22176 = state_20841__$1;
(statearr_20864_22176[(1)] = (8));

} else {
var statearr_20865_22177 = state_20841__$1;
(statearr_20865_22177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20842 === (14))){
var inst_20791 = (state_20841[(9)]);
var inst_20795 = (state_20841[(11)]);
var inst_20808 = (state_20841[(2)]);
var inst_20810 = [];
var inst_20811 = inst_20810.push(inst_20791);
var inst_20787 = inst_20810;
var inst_20788 = inst_20795;
var state_20841__$1 = (function (){var statearr_20875 = state_20841;
(statearr_20875[(14)] = inst_20808);

(statearr_20875[(15)] = inst_20811);

(statearr_20875[(7)] = inst_20787);

(statearr_20875[(8)] = inst_20788);

return statearr_20875;
})();
var statearr_20876_22185 = state_20841__$1;
(statearr_20876_22185[(2)] = null);

(statearr_20876_22185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20842 === (16))){
var state_20841__$1 = state_20841;
var statearr_20877_22187 = state_20841__$1;
(statearr_20877_22187[(2)] = null);

(statearr_20877_22187[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20842 === (10))){
var inst_20801 = (state_20841[(2)]);
var state_20841__$1 = state_20841;
if(cljs.core.truth_(inst_20801)){
var statearr_20879_22188 = state_20841__$1;
(statearr_20879_22188[(1)] = (11));

} else {
var statearr_20880_22189 = state_20841__$1;
(statearr_20880_22189[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20842 === (18))){
var inst_20831 = (state_20841[(2)]);
var state_20841__$1 = state_20841;
var statearr_20881_22190 = state_20841__$1;
(statearr_20881_22190[(2)] = inst_20831);

(statearr_20881_22190[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20842 === (8))){
var inst_20796 = (state_20841[(13)]);
var state_20841__$1 = state_20841;
var statearr_20882_22195 = state_20841__$1;
(statearr_20882_22195[(2)] = inst_20796);

(statearr_20882_22195[(1)] = (10));


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
var cljs$core$async$state_machine__18347__auto__ = null;
var cljs$core$async$state_machine__18347__auto____0 = (function (){
var statearr_20883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20883[(0)] = cljs$core$async$state_machine__18347__auto__);

(statearr_20883[(1)] = (1));

return statearr_20883;
});
var cljs$core$async$state_machine__18347__auto____1 = (function (state_20841){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_20841);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e20884){var ex__18350__auto__ = e20884;
var statearr_20885_22196 = state_20841;
(statearr_20885_22196[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_20841[(4)]))){
var statearr_20886_22197 = state_20841;
(statearr_20886_22197[(1)] = cljs.core.first((state_20841[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22198 = state_20841;
state_20841 = G__22198;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
cljs$core$async$state_machine__18347__auto__ = function(state_20841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18347__auto____1.call(this,state_20841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18347__auto____0;
cljs$core$async$state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18347__auto____1;
return cljs$core$async$state_machine__18347__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_20887 = f__18578__auto__();
(statearr_20887[(6)] = c__18577__auto___22146);

return statearr_20887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
