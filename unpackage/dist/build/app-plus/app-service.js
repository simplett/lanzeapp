var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^onUpImg']],[[4],[[5],[[4],[[5],[1,'upOosData']]]]]]]],[[4],[[5],[[5],[1,'^onImgDel']],[[4],[[5],[[4],[[5],[1,'delImgInfo']]]]]]]]])
Z([3,'uImage'])
Z([[7],[3,'upImgOos']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showHeader']])
Z([3,'__l'])
Z([3,'__e'])
Z(z[2])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^onUpImg']],[[4],[[5],[[4],[[5],[1,'upOosData']]]]]]]],[[4],[[5],[[5],[1,'^onImgDel']],[[4],[[5],[[4],[[5],[1,'delImgInfo']]]]]]]]])
Z([3,'uImage'])
Z([[7],[3,'upImgOos']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'target'])
Z([[7],[3,'orderbyList']])
Z(z[0])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'target data-v-41ce1c09']],[[2,'?:'],[[6],[[7],[3,'target']],[3,'selected']],[1,'on'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'select']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[6],[[7],[3,'target']],[3,'orderbyicon']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'header'])
Z([[7],[3,'showBack']])
Z(z[1])
Z([3,'__e'])
Z(z[3])
Z([[4],[[5],[[5],[1,'popup spec']],[[7],[3,'specClass']]]])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'discard']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'hideSpec']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[3])
Z([3,'layer'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'discard']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!='],[[7],[3,'selectSpec']],[1,null]])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'Rindex'])
Z([3,'row'])
Z([[7],[3,'ratingsList']])
Z(z[0])
Z([[6],[[7],[3,'row']],[3,'append']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShowOauth']])
Z([3,'list'])
Z([[6],[[7],[3,'showProvider']],[3,'weixin']])
Z([[6],[[7],[3,'showProvider']],[3,'qq']])
Z([[6],[[7],[3,'showProvider']],[3,'sinaweibo']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'content'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'hideEmoji']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'index'])
Z([3,'row'])
Z([[7],[3,'msgList']])
Z(z[3])
Z(z[4])
Z([[2,'+'],[1,'msg'],[[6],[[7],[3,'row']],[3,'id']]])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'uid']],[[7],[3,'myuid']]])
Z([3,'left'])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'text']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'voice']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'img']])
Z([[2,'!='],[[6],[[7],[3,'row']],[3,'uid']],[[7],[3,'myuid']]])
Z([3,'right'])
Z(z[11])
Z(z[12])
Z(z[13])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'chat'])
Z([[7],[3,'chatList']])
Z(z[0])
Z([3,'__e'])
Z([3,'row'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toChat']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'chatList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[2,'>'],[[6],[[7],[3,'chat']],[3,'tisNum']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showHeader']])
Z(z[0])
Z(z[0])
Z([3,'__l'])
Z([3,'__e'])
Z(z[4])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^onUpImg']],[[4],[[5],[[4],[[5],[1,'upOosData']]]]]]]],[[4],[[5],[[5],[1,'^onImgDel']],[[4],[[5],[[4],[[5],[1,'delImgInfo']]]]]]]]])
Z([3,'uImage'])
Z([[7],[3,'upImgOos']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showHeader']])
Z(z[0])
Z(z[0])
Z([[2,'=='],[[6],[[7],[3,'goodsList']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'selectedList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showHeader']])
Z(z[0])
Z(z[0])
Z([3,'index'])
Z([3,'row'])
Z([[7],[3,'Promotion']])
Z(z[3])
Z([3,'__e'])
Z([3,'column'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toPromotion']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'Promotion']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'row']],[3,'countdown']])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showHeader']])
Z(z[0])
Z(z[0])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'row'])
Z([[7],[3,'addressList']])
Z(z[0])
Z([3,'__e'])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'select']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'addressList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'row']],[3,'isDefault']])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'editType']],[1,'edit']])
Z([3,'__l'])
Z([3,'__e'])
Z(z[2])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^onCancel']],[[4],[[5],[[4],[[5],[1,'onCancel']]]]]]]],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm']]]]]]]]])
Z([3,'mpvueCityPicker'])
Z([[7],[3,'cityPickerValue']])
Z([[7],[3,'themeColor']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'list'])
Z([[2,'=='],[[6],[[7],[3,'couponValidList']],[3,'length']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'couponinvalidList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'list'])
Z([[2,'=='],[[6],[[7],[3,'goodsList']],[3,'length']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'shopList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'list'])
Z([[2,'=='],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'row'])
Z([[7],[3,'list']])
Z(z[2])
Z([3,'btns'])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'unpaid']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'back']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'unreceived']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'received']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'completed']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'refunds']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'cancelled']])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/mpvue-citypicker/mpvueCityPicker.wxml','./components/sunui-upimg/sunui-upimg-alioos.wxml','./pages/ali/ali.wxml','./pages/ali/codelist/codelist.wxml','./pages/ali/select/select.wxml','./pages/goods/goods-list/goods-list.wxml','./pages/goods/goods.wxml','./pages/goods/ratings/ratings.wxml','./pages/login/login.wxml','./pages/login/register.wxml','./pages/login/resetpasswd.wxml','./pages/msg/chat/chat.wxml','./pages/msg/msg.wxml','./pages/order/confirmation.wxml','./pages/pay/payment/payment.wxml','./pages/pay/success/success.wxml','./pages/tabBar/ali/ali.wxml','./pages/tabBar/cart/cart.wxml','./pages/tabBar/category/category.wxml','./pages/tabBar/home/home.wxml','./pages/tabBar/user/user.wxml','./pages/user/address/address.wxml','./pages/user/address/edit/edit.wxml','./pages/user/coupon/coupon.wxml','./pages/user/deposit/deposit.wxml','./pages/user/keep/keep.wxml','./pages/user/myQR/myQR.wxml','./pages/user/order_list/order_list.wxml','./pages/user/setting/revise/Hphoto.wxml','./pages/user/setting/revise/rename.wxml','./pages/user/setting/setting.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oD=_mz(z,'sunui-upoos',['bind:__l',0,'bind:onImgDel',1,'bind:onUpImg',1,'class',2,'data-event-opts',3,'data-ref',4,'upImgConfig',5,'vueId',6],[],e,s,gg)
_(r,oD)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var cF=_n('view')
var hG=_v()
_(cF,hG)
if(_oz(z,0,e,s,gg)){hG.wxVkey=1
}
var oH=_mz(z,'sunui-upoos',['bind:__l',1,'bind:onImgDel',1,'bind:onUpImg',2,'class',3,'data-event-opts',4,'data-ref',5,'upImgConfig',6,'vueId',7],[],e,s,gg)
_(cF,oH)
hG.wxXCkey=1
_(r,cF)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var lK=_v()
_(r,lK)
var aL=function(eN,tM,bO,gg){
var xQ=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],eN,tM,gg)
var oR=_v()
_(xQ,oR)
if(_oz(z,7,eN,tM,gg)){oR.wxVkey=1
}
oR.wxXCkey=1
_(bO,xQ)
return bO
}
lK.wxXCkey=2
_2z(z,2,aL,e,s,gg,lK,'target','index','index')
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var cT=_n('view')
var hU=_n('view')
_rz(z,hU,'class',0,e,s,gg)
var oV=_v()
_(hU,oV)
if(_oz(z,1,e,s,gg)){oV.wxVkey=1
}
var cW=_v()
_(hU,cW)
if(_oz(z,2,e,s,gg)){cW.wxVkey=1
}
oV.wxXCkey=1
cW.wxXCkey=1
_(cT,hU)
var oX=_mz(z,'view',['bindtap',3,'catchtouchmove',1,'class',2,'data-event-opts',3],[],e,s,gg)
var lY=_mz(z,'view',['catchtap',7,'class',1,'data-event-opts',2],[],e,s,gg)
var aZ=_v()
_(lY,aZ)
if(_oz(z,10,e,s,gg)){aZ.wxVkey=1
}
aZ.wxXCkey=1
_(oX,lY)
_(cT,oX)
_(r,cT)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var e2=_v()
_(r,e2)
var b3=function(x5,o4,o6,gg){
var c8=_v()
_(o6,c8)
if(_oz(z,4,x5,o4,gg)){c8.wxVkey=1
}
c8.wxXCkey=1
return o6
}
e2.wxXCkey=2
_2z(z,2,b3,e,s,gg,e2,'row','Rindex','Rindex')
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var o0=_v()
_(r,o0)
if(_oz(z,0,e,s,gg)){o0.wxVkey=1
var cAB=_n('view')
_rz(z,cAB,'class',1,e,s,gg)
var oBB=_v()
_(cAB,oBB)
if(_oz(z,2,e,s,gg)){oBB.wxVkey=1
}
var lCB=_v()
_(cAB,lCB)
if(_oz(z,3,e,s,gg)){lCB.wxVkey=1
}
var aDB=_v()
_(cAB,aDB)
if(_oz(z,4,e,s,gg)){aDB.wxVkey=1
}
oBB.wxXCkey=1
lCB.wxXCkey=1
aDB.wxXCkey=1
_(o0,cAB)
}
o0.wxXCkey=1
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var oHB=_mz(z,'view',['bindtouchstart',0,'class',1,'data-event-opts',1],[],e,s,gg)
var xIB=_v()
_(oHB,xIB)
var oJB=function(cLB,fKB,hMB,gg){
var cOB=_mz(z,'view',['class',7,'id',1],[],cLB,fKB,gg)
var oPB=_v()
_(cOB,oPB)
if(_oz(z,9,cLB,fKB,gg)){oPB.wxVkey=1
var aRB=_n('view')
_rz(z,aRB,'class',10,cLB,fKB,gg)
var tSB=_v()
_(aRB,tSB)
if(_oz(z,11,cLB,fKB,gg)){tSB.wxVkey=1
}
var eTB=_v()
_(aRB,eTB)
if(_oz(z,12,cLB,fKB,gg)){eTB.wxVkey=1
}
var bUB=_v()
_(aRB,bUB)
if(_oz(z,13,cLB,fKB,gg)){bUB.wxVkey=1
}
tSB.wxXCkey=1
eTB.wxXCkey=1
bUB.wxXCkey=1
_(oPB,aRB)
}
var lQB=_v()
_(cOB,lQB)
if(_oz(z,14,cLB,fKB,gg)){lQB.wxVkey=1
var oVB=_n('view')
_rz(z,oVB,'class',15,cLB,fKB,gg)
var xWB=_v()
_(oVB,xWB)
if(_oz(z,16,cLB,fKB,gg)){xWB.wxVkey=1
}
var oXB=_v()
_(oVB,oXB)
if(_oz(z,17,cLB,fKB,gg)){oXB.wxVkey=1
}
var fYB=_v()
_(oVB,fYB)
if(_oz(z,18,cLB,fKB,gg)){fYB.wxVkey=1
}
xWB.wxXCkey=1
oXB.wxXCkey=1
fYB.wxXCkey=1
_(lQB,oVB)
}
oPB.wxXCkey=1
lQB.wxXCkey=1
_(hMB,cOB)
return hMB
}
xIB.wxXCkey=2
_2z(z,5,oJB,e,s,gg,xIB,'row','index','index')
_(r,oHB)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var h1B=_v()
_(r,h1B)
var o2B=function(o4B,c3B,l5B,gg){
var t7B=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],o4B,c3B,gg)
var e8B=_v()
_(t7B,e8B)
if(_oz(z,7,o4B,c3B,gg)){e8B.wxVkey=1
}
e8B.wxXCkey=1
_(l5B,t7B)
return l5B
}
h1B.wxXCkey=2
_2z(z,2,o2B,e,s,gg,h1B,'chat','index','index')
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var fCC=_n('view')
var cDC=_v()
_(fCC,cDC)
if(_oz(z,0,e,s,gg)){cDC.wxVkey=1
}
var hEC=_v()
_(fCC,hEC)
if(_oz(z,1,e,s,gg)){hEC.wxVkey=1
}
var oFC=_v()
_(fCC,oFC)
if(_oz(z,2,e,s,gg)){oFC.wxVkey=1
}
var cGC=_mz(z,'sunui-upoos',['bind:__l',3,'bind:onImgDel',1,'bind:onUpImg',2,'class',3,'data-event-opts',4,'data-ref',5,'upImgConfig',6,'vueId',7],[],e,s,gg)
_(fCC,cGC)
cDC.wxXCkey=1
hEC.wxXCkey=1
oFC.wxXCkey=1
_(r,fCC)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var lIC=_n('view')
var aJC=_v()
_(lIC,aJC)
if(_oz(z,0,e,s,gg)){aJC.wxVkey=1
}
var tKC=_v()
_(lIC,tKC)
if(_oz(z,1,e,s,gg)){tKC.wxVkey=1
}
var eLC=_v()
_(lIC,eLC)
if(_oz(z,2,e,s,gg)){eLC.wxVkey=1
}
var bMC=_v()
_(lIC,bMC)
if(_oz(z,3,e,s,gg)){bMC.wxVkey=1
}
var oNC=_v()
_(lIC,oNC)
if(_oz(z,4,e,s,gg)){oNC.wxVkey=1
}
aJC.wxXCkey=1
tKC.wxXCkey=1
eLC.wxXCkey=1
bMC.wxXCkey=1
oNC.wxXCkey=1
_(r,lIC)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var fQC=_n('view')
var cRC=_v()
_(fQC,cRC)
if(_oz(z,0,e,s,gg)){cRC.wxVkey=1
}
var hSC=_v()
_(fQC,hSC)
if(_oz(z,1,e,s,gg)){hSC.wxVkey=1
}
var oTC=_v()
_(fQC,oTC)
if(_oz(z,2,e,s,gg)){oTC.wxVkey=1
}
var cUC=_v()
_(fQC,cUC)
var oVC=function(aXC,lWC,tYC,gg){
var b1C=_mz(z,'view',['bindtap',7,'class',1,'data-event-opts',2],[],aXC,lWC,gg)
var o2C=_v()
_(b1C,o2C)
if(_oz(z,10,aXC,lWC,gg)){o2C.wxVkey=1
}
o2C.wxXCkey=1
_(tYC,b1C)
return tYC
}
cUC.wxXCkey=2
_2z(z,5,oVC,e,s,gg,cUC,'row','index','index')
cRC.wxXCkey=1
hSC.wxXCkey=1
oTC.wxXCkey=1
_(r,fQC)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var o4C=_n('view')
var f5C=_v()
_(o4C,f5C)
if(_oz(z,0,e,s,gg)){f5C.wxVkey=1
}
var c6C=_v()
_(o4C,c6C)
if(_oz(z,1,e,s,gg)){c6C.wxVkey=1
}
var h7C=_v()
_(o4C,h7C)
if(_oz(z,2,e,s,gg)){h7C.wxVkey=1
}
f5C.wxXCkey=1
c6C.wxXCkey=1
h7C.wxXCkey=1
_(r,o4C)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var c9C=_v()
_(r,c9C)
var o0C=function(aBD,lAD,tCD,gg){
var bED=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],aBD,lAD,gg)
var oFD=_v()
_(bED,oFD)
if(_oz(z,7,aBD,lAD,gg)){oFD.wxVkey=1
}
oFD.wxXCkey=1
_(tCD,bED)
return tCD
}
c9C.wxXCkey=2
_2z(z,2,o0C,e,s,gg,c9C,'row','index','index')
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var oHD=_n('view')
var fID=_v()
_(oHD,fID)
if(_oz(z,0,e,s,gg)){fID.wxVkey=1
}
var cJD=_mz(z,'mpvue-city-picker',['bind:__l',1,'bind:onCancel',1,'bind:onConfirm',2,'class',3,'data-event-opts',4,'data-ref',5,'pickerValueDefault',6,'themeColor',7,'vueId',8],[],e,s,gg)
_(oHD,cJD)
fID.wxXCkey=1
_(r,oHD)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var oLD=_n('view')
_rz(z,oLD,'class',0,e,s,gg)
var cMD=_v()
_(oLD,cMD)
if(_oz(z,1,e,s,gg)){cMD.wxVkey=1
}
var oND=_v()
_(oLD,oND)
if(_oz(z,2,e,s,gg)){oND.wxVkey=1
}
cMD.wxXCkey=1
oND.wxXCkey=1
_(r,oLD)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var tQD=_n('view')
_rz(z,tQD,'class',0,e,s,gg)
var eRD=_v()
_(tQD,eRD)
if(_oz(z,1,e,s,gg)){eRD.wxVkey=1
}
var bSD=_v()
_(tQD,bSD)
if(_oz(z,2,e,s,gg)){bSD.wxVkey=1
}
eRD.wxXCkey=1
bSD.wxXCkey=1
_(r,tQD)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var oVD=_n('view')
_rz(z,oVD,'class',0,e,s,gg)
var fWD=_v()
_(oVD,fWD)
if(_oz(z,1,e,s,gg)){fWD.wxVkey=1
}
var cXD=_v()
_(oVD,cXD)
var hYD=function(c1D,oZD,o2D,gg){
var a4D=_n('view')
_rz(z,a4D,'class',6,c1D,oZD,gg)
var t5D=_v()
_(a4D,t5D)
if(_oz(z,7,c1D,oZD,gg)){t5D.wxVkey=1
}
var e6D=_v()
_(a4D,e6D)
if(_oz(z,8,c1D,oZD,gg)){e6D.wxVkey=1
}
var b7D=_v()
_(a4D,b7D)
if(_oz(z,9,c1D,oZD,gg)){b7D.wxVkey=1
}
var o8D=_v()
_(a4D,o8D)
if(_oz(z,10,c1D,oZD,gg)){o8D.wxVkey=1
}
var x9D=_v()
_(a4D,x9D)
if(_oz(z,11,c1D,oZD,gg)){x9D.wxVkey=1
}
var o0D=_v()
_(a4D,o0D)
if(_oz(z,12,c1D,oZD,gg)){o0D.wxVkey=1
}
var fAE=_v()
_(a4D,fAE)
if(_oz(z,13,c1D,oZD,gg)){fAE.wxVkey=1
}
t5D.wxXCkey=1
e6D.wxXCkey=1
b7D.wxXCkey=1
o8D.wxXCkey=1
x9D.wxXCkey=1
o0D.wxXCkey=1
fAE.wxXCkey=1
_(o2D,a4D)
return o2D
}
cXD.wxXCkey=2
_2z(z,4,hYD,e,s,gg,cXD,'row','index','index')
fWD.wxXCkey=1
_(r,oVD)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/tabBar/home/home","pages/tabBar/category/category","pages/ali/ali","pages/tabBar/cart/cart","pages/tabBar/user/user","pages/goods/goods-list/goods-list","pages/goods/goods","pages/login/login","pages/login/register","pages/login/resetpasswd","pages/order/confirmation","pages/user/order_list/order_list","pages/user/setting/revise/Hphoto","pages/user/setting/revise/rename","pages/user/myQR/myQR","pages/user/setting/setting","pages/user/setting/revise/Hphoto","pages/user/myQR/myQR","pages/msg/msg","pages/msg/chat/chat","pages/user/coupon/coupon","pages/user/keep/keep","pages/user/address/address","pages/user/address/edit/edit","pages/user/deposit/deposit","pages/pay/payment/payment","pages/pay/success/success","pages/goods/ratings/ratings","pages/ali/select/select","pages/tabBar/ali/ali","pages/ali/codelist/codelist"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff"},"tabBar":{"color":"#333333","selectedColor":"#f06c7a","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/tabBar/home/home","iconPath":"static/img/tabBar/home.png","selectedIconPath":"static/img/tabBar/home-on.png","text":"首页"},{"pagePath":"pages/tabBar/category/category","iconPath":"static/img/tabBar/category.png","selectedIconPath":"static/img/tabBar/category-on.png","text":"分类"},{"pagePath":"pages/tabBar/ali/ali","iconPath":"static/img/tabBar/category.png","selectedIconPath":"static/img/tabBar/category-on.png","text":"发布"},{"pagePath":"pages/tabBar/cart/cart","iconPath":"static/img/tabBar/cart.png","selectedIconPath":"static/img/tabBar/cart-on.png","text":"购物车"},{"pagePath":"pages/tabBar/user/user","iconPath":"static/img/tabBar/user.png","selectedIconPath":"static/img/tabBar/user-on.png","text":"我的"}]},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"蓝沢","compilerVersion":"2.3.3","usingComponents":{"sunui-upoos":"/components/sunui-upimg/sunui-upimg-alioos"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/mpvue-citypicker/mpvueCityPicker.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mpvue-citypicker/mpvueCityPicker.wxml']=$gwx('./components/mpvue-citypicker/mpvueCityPicker.wxml');

__wxAppCode__['components/sunui-upimg/sunui-upimg-alioos.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/sunui-upimg/sunui-upimg-alioos.wxml']=$gwx('./components/sunui-upimg/sunui-upimg-alioos.wxml');

__wxAppCode__['pages/ali/ali.json']={"enablePullDownRefresh":true,"navigationBarTextStyle":"white","titleNView":false,"bounce":"none","softinputNavBar":"none","subNVues":[{"id":"aliTitleNvue","path":"pages/tabBar/ali/alisubNvue/aliTitleNvue","type":"navigationBar"}],"usingComponents":{"sunui-upoos":"/components/sunui-upimg/sunui-upimg-alioos"}};
__wxAppCode__['pages/ali/ali.wxml']=$gwx('./pages/ali/ali.wxml');

__wxAppCode__['pages/ali/codelist/codelist.json']={"enablePullDownRefresh":true,"backgroundTextStyle":"light","navigationBarBackgroundColor":"#f06c7a","backgroundColorTop":"#f06c7a","navigationBarTextStyle":"white","titleNView":true,"usingComponents":{"sunui-upoos":"/components/sunui-upimg/sunui-upimg-alioos"}};
__wxAppCode__['pages/ali/codelist/codelist.wxml']=$gwx('./pages/ali/codelist/codelist.wxml');

__wxAppCode__['pages/ali/select/select.json']={"navigationBarTitleText":"发布商品","enablePullDownRefresh":false,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/ali/select/select.wxml']=$gwx('./pages/ali/select/select.wxml');

__wxAppCode__['pages/goods/goods-list/goods-list.json']={"navigationBarTitleText":"","enablePullDownRefresh":true,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/goods/goods-list/goods-list.wxml']=$gwx('./pages/goods/goods-list/goods-list.wxml');

__wxAppCode__['pages/goods/goods.json']={"navigationBarTitleText":"","navigationBarBackgroundColor":"#f1f1f1","onReachBottomDistance":50,"titleNView":false,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/goods/goods.wxml']=$gwx('./pages/goods/goods.wxml');

__wxAppCode__['pages/goods/ratings/ratings.json']={"navigationBarTitleText":"商品评论","enablePullDownRefresh":true,"onReachBottomDistance":50,"backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{}};
__wxAppCode__['pages/goods/ratings/ratings.wxml']=$gwx('./pages/goods/ratings/ratings.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"登录","navigationBarBackgroundColor":"#f06c7a","navigationBarTextStyle":"white","bounce":"none","softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/login/register.json']={"navigationBarTitleText":"注册账号","navigationBarBackgroundColor":"#f06c7a","navigationBarTextStyle":"white","bounce":"none","softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/login/register.wxml']=$gwx('./pages/login/register.wxml');

__wxAppCode__['pages/login/resetpasswd.json']={"navigationBarTitleText":"重置密码","navigationBarBackgroundColor":"#f06c7a","navigationBarTextStyle":"white","bounce":"none","softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/login/resetpasswd.wxml']=$gwx('./pages/login/resetpasswd.wxml');

__wxAppCode__['pages/msg/chat/chat.json']={"navigationBarBackgroundColor":"#f2f2f2","backgroundColorTop":"#e5e5e5","backgroundColorBottom":"#e5e5e5","softinputNavBar":"none","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/msg/chat/chat.wxml']=$gwx('./pages/msg/chat/chat.wxml');

__wxAppCode__['pages/msg/msg.json']={"enablePullDownRefresh":true,"navigationBarTitleText":"消息列表","navigationBarBackgroundColor":"#f06c7a","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/msg/msg.wxml']=$gwx('./pages/msg/msg.wxml');

__wxAppCode__['pages/order/confirmation.json']={"navigationBarTitleText":"确认订单","softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/order/confirmation.wxml']=$gwx('./pages/order/confirmation.wxml');

__wxAppCode__['pages/pay/payment/payment.json']={"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"订单支付","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{}};
__wxAppCode__['pages/pay/payment/payment.wxml']=$gwx('./pages/pay/payment/payment.wxml');

__wxAppCode__['pages/pay/success/success.json']={"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"支付成功","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{}};
__wxAppCode__['pages/pay/success/success.wxml']=$gwx('./pages/pay/success/success.wxml');

__wxAppCode__['pages/tabBar/ali/ali.json']={"enablePullDownRefresh":true,"navigationBarTextStyle":"black","titleNView":false,"softinputNavBar":"none","usingComponents":{"sunui-upoos":"/components/sunui-upimg/sunui-upimg-alioos"}};
__wxAppCode__['pages/tabBar/ali/ali.wxml']=$gwx('./pages/tabBar/ali/ali.wxml');

__wxAppCode__['pages/tabBar/cart/cart.json']={"enablePullDownRefresh":true,"navigationBarTextStyle":"black","titleNView":false,"softinputNavBar":"none","subNVues":[{"id":"cartTitleNvue","path":"pages/tabBar/cart/subNvue/cartTitleNvue","type":"navigationBar"}],"usingComponents":{}};
__wxAppCode__['pages/tabBar/cart/cart.wxml']=$gwx('./pages/tabBar/cart/cart.wxml');

__wxAppCode__['pages/tabBar/category/category.json']={"navigationBarTextStyle":"black","titleNView":false,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/tabBar/category/category.wxml']=$gwx('./pages/tabBar/category/category.wxml');

__wxAppCode__['pages/tabBar/home/home.json']={"navigationBarTextStyle":"black","enablePullDownRefresh":true,"onReachBottomDistance":50,"titleNView":false,"softinputNavBar":"none","subNVues":[{"id":"homeTitleNvue","path":"pages/tabBar/home/subNvue/homeTitleNvue","type":"navigationBar"}],"usingComponents":{}};
__wxAppCode__['pages/tabBar/home/home.wxml']=$gwx('./pages/tabBar/home/home.wxml');

__wxAppCode__['pages/tabBar/user/user.json']={"enablePullDownRefresh":true,"backgroundTextStyle":"light","navigationBarBackgroundColor":"#f06c7a","backgroundColorTop":"#f06c7a","navigationBarTextStyle":"white","titleNView":false,"subNVues":[{"id":"userTitleNvue","path":"pages/tabBar/user/subNvue/userTitleNvue","type":"navigationBar"}],"usingComponents":{}};
__wxAppCode__['pages/tabBar/user/user.wxml']=$gwx('./pages/tabBar/user/user.wxml');

__wxAppCode__['pages/user/address/address.json']={"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"地址管理","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{}};
__wxAppCode__['pages/user/address/address.wxml']=$gwx('./pages/user/address/address.wxml');

__wxAppCode__['pages/user/address/edit/edit.json']={"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"编辑收件人地址","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{"mpvue-city-picker":"/components/mpvue-citypicker/mpvueCityPicker"}};
__wxAppCode__['pages/user/address/edit/edit.wxml']=$gwx('./pages/user/address/edit/edit.wxml');

__wxAppCode__['pages/user/coupon/coupon.json']={"navigationBarTitleText":"优惠券","navigationBarBackgroundColor":"#f06c7a","navigationBarTextStyle":"white","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/user/coupon/coupon.wxml']=$gwx('./pages/user/coupon/coupon.wxml');

__wxAppCode__['pages/user/deposit/deposit.json']={"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"充值","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{}};
__wxAppCode__['pages/user/deposit/deposit.wxml']=$gwx('./pages/user/deposit/deposit.wxml');

__wxAppCode__['pages/user/keep/keep.json']={"navigationBarTitleText":"我的收藏","navigationBarBackgroundColor":"#f06c7a","navigationBarTextStyle":"white","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/user/keep/keep.wxml']=$gwx('./pages/user/keep/keep.wxml');

__wxAppCode__['pages/user/myQR/myQR.json']={"navigationBarTitleText":"我的二维码","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/user/myQR/myQR.wxml']=$gwx('./pages/user/myQR/myQR.wxml');

__wxAppCode__['pages/user/order_list/order_list.json']={"navigationBarTitleText":"我的订单","navigationBarBackgroundColor":"#f8f8f8","backgroundColorTop":"#f3f3f3","backgroundColorBottom":"#ffffff","usingComponents":{}};
__wxAppCode__['pages/user/order_list/order_list.wxml']=$gwx('./pages/user/order_list/order_list.wxml');

__wxAppCode__['pages/user/setting/revise/Hphoto.json']={"navigationBarBackgroundColor":"#f8f8f8","navigationBarTitleText":"我的头像","backgroundColorTop":"#ffffff","backgroundColorBottom":"#f3f3f3","usingComponents":{}};
__wxAppCode__['pages/user/setting/revise/Hphoto.wxml']=$gwx('./pages/user/setting/revise/Hphoto.wxml');

__wxAppCode__['pages/user/setting/revise/rename.json']={"navigationBarBackgroundColor":"#f8f8f8","navigationBarTitleText":"我的昵称","backgroundColorTop":"#ffffff","backgroundColorBottom":"#f3f3f3","usingComponents":{}};
__wxAppCode__['pages/user/setting/revise/rename.wxml']=$gwx('./pages/user/setting/revise/rename.wxml');

__wxAppCode__['pages/user/setting/setting.json']={"navigationBarBackgroundColor":"#f8f8f8","navigationBarTitleText":"我的设置","backgroundColorTop":"#ffffff","backgroundColorBottom":"#f3f3f3","usingComponents":{}};
__wxAppCode__['pages/user/setting/setting.wxml']=$gwx('./pages/user/setting/setting.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"163e":function(n,e,t){"use strict";(function(n){t("590e"),t("921b");var e=u(t("66fd")),o=u(t("4b2a"));function u(n){return n&&n.__esModule?n:{default:n}}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){c(n,e,t[e])})}return n}function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var a=function(){return Promise.all([t.e("common/vendor"),t.e("components/sunui-upimg/sunui-upimg-alioos")]).then(t.bind(null,"0ca6"))};e.default.component("sunui-upoos",a),e.default.config.productionTip=!1,o.default.mpType="app";var i=new e.default(r({},o.default));n(i).$mount()}).call(this,t("6e42")["createApp"])},3436:function(n,e,t){"use strict";var o=t("531e"),u=t.n(o);u.a},"4b2a":function(n,e,t){"use strict";t.r(e);var o=t("da46");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("3436");var r,c,a=t("2877"),i=Object(a["a"])(o["default"],r,c,!1,null,null,null);e["default"]=i.exports},"531e":function(n,e,t){},"6ec5":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={onLaunch:function(){console.log(n("App Launch"," at App.vue:4"))},onShow:function(){console.log(n("App Show"," at App.vue:7"))},onHide:function(){console.log(n("App Hide"," at App.vue:10"))}};e.default=t}).call(this,t("0de9")["default"])},da46:function(n,e,t){"use strict";t.r(e);var o=t("6ec5"),u=t.n(o);for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);e["default"]=u.a}},[["163e","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var r, o, a = t[0], c = t[1], l = t[2], s = 0, p = []; s < a.length; s++) {
      o = a[s], u[o] && p.push(u[o][0]), u[o] = 0;
    }

    for (r in c) {
      Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    }

    f && f(t);

    while (p.length) {
      p.shift()();
    }

    return i.push.apply(i, l || []), n();
  }

  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, o = 1; o < n.length; o++) {
        var a = n[o];
        0 !== u[a] && (r = !1);
      }

      r && (i.splice(t--, 1), e = c(c.s = n[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      u = {
    "common/runtime": 0
  },
      i = [];

  function a(e) {
    return c.p + "" + e + ".js";
  }

  function c(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports;
  }

  c.e = function (e) {
    var t = [],
        n = {
      "components/sunui-upimg/sunui-upimg-alioos": 1,
      "components/mpvue-citypicker/mpvueCityPicker": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var r = ({
        "components/sunui-upimg/sunui-upimg-alioos": "components/sunui-upimg/sunui-upimg-alioos",
        "components/mpvue-citypicker/mpvueCityPicker": "components/mpvue-citypicker/mpvueCityPicker"
      }[e] || e) + ".wxss", u = c.p + r, i = document.getElementsByTagName("link"), a = 0; a < i.length; a++) {
        var l = i[a],
            s = l.getAttribute("data-href") || l.getAttribute("href");
        if ("stylesheet" === l.rel && (s === r || s === u)) return t();
      }

      var p = document.getElementsByTagName("style");

      for (a = 0; a < p.length; a++) {
        l = p[a], s = l.getAttribute("data-href");
        if (s === r || s === u) return t();
      }

      var f = document.createElement("link");
      f.rel = "stylesheet", f.type = "text/css", f.onload = t, f.onerror = function (t) {
        var r = t && t.target && t.target.src || u,
            i = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        i.request = r, delete o[e], f.parentNode.removeChild(f), n(i);
      }, f.href = u;
      var m = document.getElementsByTagName("head")[0];
      m.appendChild(f);
    }).then(function () {
      o[e] = 0;
    }));
    var r = u[e];
    if (0 !== r) if (r) t.push(r[2]);else {
      var i = new Promise(function (t, n) {
        r = u[e] = [t, n];
      });
      t.push(r[2] = i);
      var l,
          s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, c.nc && s.setAttribute("nonce", c.nc), s.src = a(e), l = function l(t) {
        s.onerror = s.onload = null, clearTimeout(p);
        var n = u[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                i = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            i.type = r, i.request = o, n[1](i);
          }

          u[e] = void 0;
        }
      };
      var p = setTimeout(function () {
        l({
          type: "timeout",
          target: s
        });
      }, 12e4);
      s.onerror = s.onload = l, document.head.appendChild(s);
    }
    return Promise.all(t);
  }, c.m = e, c.c = r, c.d = function (e, t, n) {
    c.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, c.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, c.t = function (e, t) {
    if (1 & t && (e = c(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (c.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      c.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, c.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return c.d(t, "a", t), t;
  }, c.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, c.p = "/", c.oe = function (e) {
    throw console.error(e), e;
  };
  var l = global["webpackJsonp"] = global["webpackJsonp"] || [],
      s = l.push.bind(l);
  l.push = t, l = l.slice();

  for (var p = 0; p < l.length; p++) {
    t(l[p]);
  }

  var f = s;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(e,l,a){"use strict";function t(e){var l=Object.prototype.toString.call(e);return l.substring(8,l.length-1)}function u(){for(var e=arguments.length,l=new Array(e),a=0;a<e;a++)l[a]=arguments[a];var u=l.map(function(e){var l=Object.prototype.toString.call(e);if("[object object]"===l.toLowerCase())try{e="---BEGIN:JSON---"+JSON.stringify(e)+"---END:JSON---"}catch(u){e="[object object]"}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var a=t(e).toUpperCase();e="NUMBER"===a||"BOOLEAN"===a?"---BEGIN:"+a+"---"+e+"---END:"+a+"---":String(e)}return e}),n="";if(u.length>1){var r=u.pop();n=u.join("---COMMA---"),0===r.indexOf(" at ")?n+=r:n+="---COMMA---"+r}else n=u[0];return n}Object.defineProperty(l,"__esModule",{value:!0}),l.default=u},2877:function(e,l,a){"use strict";function t(e,l,a,t,u,n,r,v){var o,i="function"===typeof e?e.options:e;if(l&&(i.render=l,i.staticRenderFns=a,i._compiled=!0),t&&(i.functional=!0),n&&(i._scopeId="data-v-"+n),r?(o=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),u&&u.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},i._ssrRegister=o):u&&(o=v?function(){u.call(this,this.$root.$options.shadowRoot)}:u),o)if(i.functional){i._injectStyles=o;var b=i.render;i.render=function(e,l){return o.call(l),b(e,l)}}else{var s=i.beforeCreate;i.beforeCreate=s?[].concat(s,o):[o]}return{exports:e,options:i}}a.d(l,"a",function(){return t})},"3c35":function(e,l){(function(l){e.exports=l}).call(this,{})},"3f6d":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={pages:{"pages/tabBar/home/home":{navigationBarTextStyle:"black",enablePullDownRefresh:!0,onReachBottomDistance:50,titleNView:!1,softinputNavBar:"none",subNVues:[{id:"homeTitleNvue",path:"pages/tabBar/home/subNvue/homeTitleNvue",type:"navigationBar"}]},"pages/tabBar/category/category":{navigationBarTextStyle:"black",titleNView:!1,bounce:"none"},"pages/ali/ali":{enablePullDownRefresh:!0,navigationBarTextStyle:"white",titleNView:!1,bounce:"none",softinputNavBar:"none",subNVues:[{id:"aliTitleNvue",path:"pages/tabBar/ali/alisubNvue/aliTitleNvue",type:"navigationBar"}]},"pages/tabBar/cart/cart":{enablePullDownRefresh:!0,navigationBarTextStyle:"black",titleNView:!1,softinputNavBar:"none",subNVues:[{id:"cartTitleNvue",path:"pages/tabBar/cart/subNvue/cartTitleNvue",type:"navigationBar"}]},"pages/tabBar/user/user":{enablePullDownRefresh:!0,backgroundTextStyle:"light",navigationBarBackgroundColor:"#f06c7a",backgroundColorTop:"#f06c7a",navigationBarTextStyle:"white",titleNView:!1,subNVues:[{id:"userTitleNvue",path:"pages/tabBar/user/subNvue/userTitleNvue",type:"navigationBar"}]},"pages/goods/goods-list/goods-list":{navigationBarTitleText:"",enablePullDownRefresh:!0,bounce:"none"},"pages/goods/goods":{navigationBarTitleText:"",navigationBarBackgroundColor:"#f1f1f1",onReachBottomDistance:50,titleNView:!1,bounce:"none"},"pages/login/login":{navigationBarTitleText:"登录",navigationBarBackgroundColor:"#f06c7a",navigationBarTextStyle:"white",bounce:"none",softinputNavBar:"none"},"pages/login/register":{navigationBarTitleText:"注册账号",navigationBarBackgroundColor:"#f06c7a",navigationBarTextStyle:"white",bounce:"none",softinputNavBar:"none"},"pages/login/resetpasswd":{navigationBarTitleText:"重置密码",navigationBarBackgroundColor:"#f06c7a",navigationBarTextStyle:"white",bounce:"none",softinputNavBar:"none"},"pages/order/confirmation":{navigationBarTitleText:"确认订单",softinputNavBar:"none"},"pages/user/order_list/order_list":{navigationBarTitleText:"我的订单",navigationBarBackgroundColor:"#f8f8f8",backgroundColorTop:"#f3f3f3",backgroundColorBottom:"#ffffff"},"pages/user/setting/revise/Hphoto":{navigationBarBackgroundColor:"#f8f8f8",navigationBarTitleText:"我的头像",backgroundColorTop:"#ffffff",backgroundColorBottom:"#f3f3f3",usingComponents:{}},"pages/user/setting/revise/rename":{navigationBarBackgroundColor:"#f8f8f8",navigationBarTitleText:"我的昵称",backgroundColorTop:"#ffffff",backgroundColorBottom:"#f3f3f3"},"pages/user/myQR/myQR":{navigationBarTitleText:"我的二维码",bounce:"none",usingComponents:{}},"pages/user/setting/setting":{navigationBarBackgroundColor:"#f8f8f8",navigationBarTitleText:"我的设置",backgroundColorTop:"#ffffff",backgroundColorBottom:"#f3f3f3"},"pages/msg/msg":{enablePullDownRefresh:!0,navigationBarTitleText:"消息列表",navigationBarBackgroundColor:"#f06c7a",navigationBarTextStyle:"white"},"pages/msg/chat/chat":{navigationBarBackgroundColor:"#f2f2f2",backgroundColorTop:"#e5e5e5",backgroundColorBottom:"#e5e5e5",softinputNavBar:"none",bounce:"none"},"pages/user/coupon/coupon":{navigationBarTitleText:"优惠券",navigationBarBackgroundColor:"#f06c7a",navigationBarTextStyle:"white",bounce:"none"},"pages/user/keep/keep":{navigationBarTitleText:"我的收藏",navigationBarBackgroundColor:"#f06c7a",navigationBarTextStyle:"white",bounce:"none"},"pages/user/address/address":{navigationBarBackgroundColor:"#ffffff",navigationBarTitleText:"地址管理",backgroundColorTop:"#ffffff",backgroundColorBottom:"#ffffff"},"pages/user/address/edit/edit":{navigationBarBackgroundColor:"#ffffff",navigationBarTitleText:"编辑收件人地址",backgroundColorTop:"#ffffff",backgroundColorBottom:"#ffffff"},"pages/user/deposit/deposit":{navigationBarBackgroundColor:"#ffffff",navigationBarTitleText:"充值",backgroundColorTop:"#ffffff",backgroundColorBottom:"#ffffff"},"pages/pay/payment/payment":{navigationBarBackgroundColor:"#ffffff",navigationBarTitleText:"订单支付",backgroundColorTop:"#ffffff",backgroundColorBottom:"#ffffff"},"pages/pay/success/success":{navigationBarBackgroundColor:"#ffffff",navigationBarTitleText:"支付成功",backgroundColorTop:"#ffffff",backgroundColorBottom:"#ffffff"},"pages/goods/ratings/ratings":{navigationBarTitleText:"商品评论",enablePullDownRefresh:!0,onReachBottomDistance:50,backgroundColorTop:"#ffffff",backgroundColorBottom:"#ffffff"},"pages/ali/select/select":{navigationBarTitleText:"发布商品",enablePullDownRefresh:!1,bounce:"none"},"pages/tabBar/ali/ali":{enablePullDownRefresh:!0,navigationBarTextStyle:"black",titleNView:!1,softinputNavBar:"none"},"pages/ali/codelist/codelist":{enablePullDownRefresh:!0,backgroundTextStyle:"light",navigationBarBackgroundColor:"#f06c7a",backgroundColorTop:"#f06c7a",navigationBarTextStyle:"white",titleNView:!0}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"",navigationBarBackgroundColor:"#ffffff",backgroundColor:"#ffffff",backgroundColorTop:"#ffffff",backgroundColorBottom:"#ffffff"}};l.default=t},4362:function(e,l,a){l.nextTick=function(e){setTimeout(e,0)},l.platform=l.arch=l.execPath=l.title="browser",l.pid=1,l.browser=!0,l.env={},l.argv=[],l.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,t="/";l.cwd=function(){return t},l.chdir=function(l){e||(e=a("df7c")),t=e.resolve(l,t)}}(),l.exit=l.kill=l.umask=l.dlopen=l.uptime=l.memoryUsage=l.uvCounters=function(){},l.features={}},4974:function(e,l,a){"use strict";var t=a("d3ab");(function(){var e=t.util;t.HMAC=function(l,a,t,u){t=t.length>4*l._blocksize?l(t,{asBytes:!0}):e.stringToBytes(t);for(var n=t,r=t.slice(0),v=0;v<4*l._blocksize;v++)n[v]^=92,r[v]^=54;var o=l(e.bytesToString(n)+l(e.bytesToString(r)+a,{asString:!0}),{asBytes:!0});return u&&u.asBytes?o:u&&u.asString?e.bytesToString(o):e.bytesToHex(o)}})(),e.exports=t},"4ba1":function(e,l,a){"use strict";var t=a("d3ab");(function(){var e=t.util,l=t.SHA1=function(a,t){var u=e.wordsToBytes(l._sha1(a));return t&&t.asBytes?u:t&&t.asString?e.bytesToString(u):e.bytesToHex(u)};l._sha1=function(l){var a=e.stringToWords(l),t=8*l.length,u=[],n=1732584193,r=-271733879,v=-1732584194,o=271733878,i=-1009589776;a[t>>5]|=128<<24-t%32,a[15+(t+64>>>9<<4)]=t;for(var b=0;b<a.length;b+=16){for(var s=n,c=r,f=v,p=o,h=i,d=0;d<80;d++){if(d<16)u[d]=a[b+d];else{var y=u[d-3]^u[d-8]^u[d-14]^u[d-16];u[d]=y<<1|y>>>31}var g=(n<<5|n>>>27)+i+(u[d]>>>0)+(d<20?1518500249+(r&v|~r&o):d<40?1859775393+(r^v^o):d<60?(r&v|r&o|v&o)-1894007588:(r^v^o)-899497514);i=o,o=v,v=r<<30|r>>>2,r=n,n=g}n+=s,r+=c,v+=f,o+=p,i+=h}return[n,r,v,o,i]},l._blocksize=16})(),e.exports=t},"590e":function(e,l,a){},"62f2":function(module,exports,__webpack_require__){"use strict";(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */!function(){function t(e){if(e)d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d,this.buffer8=l;else if(a){var t=new ArrayBuffer(68);this.buffer8=new Uint8Array(t),this.blocks=new Uint32Array(t)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var r="input is invalid type",e="object"==typeof window,i=e?window:{};i.JS_MD5_NO_WINDOW&&(e=!1);var s=!e&&"object"==typeof self,h=!i.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;h?i=global:s&&(i=self);var f=!i.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,o=__webpack_require__("3c35"),a=!i.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,n="0123456789abcdef".split(""),u=[128,32768,8388608,-2147483648],y=[0,8,16,24],c=["hex","array","digest","buffer","arrayBuffer","base64"],p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),d=[],l;if(a){var A=new ArrayBuffer(68);l=new Uint8Array(A),d=new Uint32Array(A)}!i.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!a||!i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var b=function(e){return function(l){return new t(!0).update(l)[e]()}},v=function(){var e=b("hex");h&&(e=w(e)),e.create=function(){return new t},e.update=function(l){return e.create().update(l)};for(var l=0;l<c.length;++l){var a=c[l];e[a]=b(a)}return e},w=function w(t){var e=eval("require('crypto')"),i=eval("require('buffer').Buffer"),s=function(l){if("string"==typeof l)return e.createHash("md5").update(l,"utf8").digest("hex");if(null===l||void 0===l)throw r;return l.constructor===ArrayBuffer&&(l=new Uint8Array(l)),Array.isArray(l)||ArrayBuffer.isView(l)||l.constructor===i?e.createHash("md5").update(new i(l)).digest("hex"):t(l)};return s};t.prototype.update=function(e){if(!this.finalized){var l,t=typeof e;if("string"!==t){if("object"!==t)throw r;if(null===e)throw r;if(a&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||a&&ArrayBuffer.isView(e)))throw r;l=!0}for(var u,n,v=0,o=e.length,i=this.blocks,b=this.buffer8;v<o;){if(this.hashed&&(this.hashed=!1,i[0]=i[16],i[16]=i[1]=i[2]=i[3]=i[4]=i[5]=i[6]=i[7]=i[8]=i[9]=i[10]=i[11]=i[12]=i[13]=i[14]=i[15]=0),l)if(a)for(n=this.start;v<o&&n<64;++v)b[n++]=e[v];else for(n=this.start;v<o&&n<64;++v)i[n>>2]|=e[v]<<y[3&n++];else if(a)for(n=this.start;v<o&&n<64;++v)(u=e.charCodeAt(v))<128?b[n++]=u:u<2048?(b[n++]=192|u>>6,b[n++]=128|63&u):u<55296||u>=57344?(b[n++]=224|u>>12,b[n++]=128|u>>6&63,b[n++]=128|63&u):(u=65536+((1023&u)<<10|1023&e.charCodeAt(++v)),b[n++]=240|u>>18,b[n++]=128|u>>12&63,b[n++]=128|u>>6&63,b[n++]=128|63&u);else for(n=this.start;v<o&&n<64;++v)(u=e.charCodeAt(v))<128?i[n>>2]|=u<<y[3&n++]:u<2048?(i[n>>2]|=(192|u>>6)<<y[3&n++],i[n>>2]|=(128|63&u)<<y[3&n++]):u<55296||u>=57344?(i[n>>2]|=(224|u>>12)<<y[3&n++],i[n>>2]|=(128|u>>6&63)<<y[3&n++],i[n>>2]|=(128|63&u)<<y[3&n++]):(u=65536+((1023&u)<<10|1023&e.charCodeAt(++v)),i[n>>2]|=(240|u>>18)<<y[3&n++],i[n>>2]|=(128|u>>12&63)<<y[3&n++],i[n>>2]|=(128|u>>6&63)<<y[3&n++],i[n>>2]|=(128|63&u)<<y[3&n++]);this.lastByteIndex=n,this.bytes+=n-this.start,n>=64?(this.start=n-64,this.hash(),this.hashed=!0):this.start=n}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,l=this.lastByteIndex;e[l>>2]|=u[3&l],l>=56&&(this.hashed||this.hash(),e[0]=e[16],e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.bytes<<3,e[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},t.prototype.hash=function(){var e,l,a,t,u,n,r=this.blocks;this.first?l=((l=((e=((e=r[0]-680876937)<<7|e>>>25)-271733879<<0)^(a=((a=(-271733879^(t=((t=(-1732584194^2004318071&e)+r[1]-117830708)<<12|t>>>20)+e<<0)&(-271733879^e))+r[2]-1126478375)<<17|a>>>15)+t<<0)&(t^e))+r[3]-1316259209)<<22|l>>>10)+a<<0:(e=this.h0,l=this.h1,a=this.h2,l=((l+=((e=((e+=((t=this.h3)^l&(a^t))+r[0]-680876936)<<7|e>>>25)+l<<0)^(a=((a+=(l^(t=((t+=(a^e&(l^a))+r[1]-389564586)<<12|t>>>20)+e<<0)&(e^l))+r[2]+606105819)<<17|a>>>15)+t<<0)&(t^e))+r[3]-1044525330)<<22|l>>>10)+a<<0),l=((l+=((e=((e+=(t^l&(a^t))+r[4]-176418897)<<7|e>>>25)+l<<0)^(a=((a+=(l^(t=((t+=(a^e&(l^a))+r[5]+1200080426)<<12|t>>>20)+e<<0)&(e^l))+r[6]-1473231341)<<17|a>>>15)+t<<0)&(t^e))+r[7]-45705983)<<22|l>>>10)+a<<0,l=((l+=((e=((e+=(t^l&(a^t))+r[8]+1770035416)<<7|e>>>25)+l<<0)^(a=((a+=(l^(t=((t+=(a^e&(l^a))+r[9]-1958414417)<<12|t>>>20)+e<<0)&(e^l))+r[10]-42063)<<17|a>>>15)+t<<0)&(t^e))+r[11]-1990404162)<<22|l>>>10)+a<<0,l=((l+=((e=((e+=(t^l&(a^t))+r[12]+1804603682)<<7|e>>>25)+l<<0)^(a=((a+=(l^(t=((t+=(a^e&(l^a))+r[13]-40341101)<<12|t>>>20)+e<<0)&(e^l))+r[14]-1502002290)<<17|a>>>15)+t<<0)&(t^e))+r[15]+1236535329)<<22|l>>>10)+a<<0,l=((l+=((t=((t+=(l^a&((e=((e+=(a^t&(l^a))+r[1]-165796510)<<5|e>>>27)+l<<0)^l))+r[6]-1069501632)<<9|t>>>23)+e<<0)^e&((a=((a+=(e^l&(t^e))+r[11]+643717713)<<14|a>>>18)+t<<0)^t))+r[0]-373897302)<<20|l>>>12)+a<<0,l=((l+=((t=((t+=(l^a&((e=((e+=(a^t&(l^a))+r[5]-701558691)<<5|e>>>27)+l<<0)^l))+r[10]+38016083)<<9|t>>>23)+e<<0)^e&((a=((a+=(e^l&(t^e))+r[15]-660478335)<<14|a>>>18)+t<<0)^t))+r[4]-405537848)<<20|l>>>12)+a<<0,l=((l+=((t=((t+=(l^a&((e=((e+=(a^t&(l^a))+r[9]+568446438)<<5|e>>>27)+l<<0)^l))+r[14]-1019803690)<<9|t>>>23)+e<<0)^e&((a=((a+=(e^l&(t^e))+r[3]-187363961)<<14|a>>>18)+t<<0)^t))+r[8]+1163531501)<<20|l>>>12)+a<<0,l=((l+=((t=((t+=(l^a&((e=((e+=(a^t&(l^a))+r[13]-1444681467)<<5|e>>>27)+l<<0)^l))+r[2]-51403784)<<9|t>>>23)+e<<0)^e&((a=((a+=(e^l&(t^e))+r[7]+1735328473)<<14|a>>>18)+t<<0)^t))+r[12]-1926607734)<<20|l>>>12)+a<<0,l=((l+=((n=(t=((t+=((u=l^a)^(e=((e+=(u^t)+r[5]-378558)<<4|e>>>28)+l<<0))+r[8]-2022574463)<<11|t>>>21)+e<<0)^e)^(a=((a+=(n^l)+r[11]+1839030562)<<16|a>>>16)+t<<0))+r[14]-35309556)<<23|l>>>9)+a<<0,l=((l+=((n=(t=((t+=((u=l^a)^(e=((e+=(u^t)+r[1]-1530992060)<<4|e>>>28)+l<<0))+r[4]+1272893353)<<11|t>>>21)+e<<0)^e)^(a=((a+=(n^l)+r[7]-155497632)<<16|a>>>16)+t<<0))+r[10]-1094730640)<<23|l>>>9)+a<<0,l=((l+=((n=(t=((t+=((u=l^a)^(e=((e+=(u^t)+r[13]+681279174)<<4|e>>>28)+l<<0))+r[0]-358537222)<<11|t>>>21)+e<<0)^e)^(a=((a+=(n^l)+r[3]-722521979)<<16|a>>>16)+t<<0))+r[6]+76029189)<<23|l>>>9)+a<<0,l=((l+=((n=(t=((t+=((u=l^a)^(e=((e+=(u^t)+r[9]-640364487)<<4|e>>>28)+l<<0))+r[12]-421815835)<<11|t>>>21)+e<<0)^e)^(a=((a+=(n^l)+r[15]+530742520)<<16|a>>>16)+t<<0))+r[2]-995338651)<<23|l>>>9)+a<<0,l=((l+=((t=((t+=(l^((e=((e+=(a^(l|~t))+r[0]-198630844)<<6|e>>>26)+l<<0)|~a))+r[7]+1126891415)<<10|t>>>22)+e<<0)^((a=((a+=(e^(t|~l))+r[14]-1416354905)<<15|a>>>17)+t<<0)|~e))+r[5]-57434055)<<21|l>>>11)+a<<0,l=((l+=((t=((t+=(l^((e=((e+=(a^(l|~t))+r[12]+1700485571)<<6|e>>>26)+l<<0)|~a))+r[3]-1894986606)<<10|t>>>22)+e<<0)^((a=((a+=(e^(t|~l))+r[10]-1051523)<<15|a>>>17)+t<<0)|~e))+r[1]-2054922799)<<21|l>>>11)+a<<0,l=((l+=((t=((t+=(l^((e=((e+=(a^(l|~t))+r[8]+1873313359)<<6|e>>>26)+l<<0)|~a))+r[15]-30611744)<<10|t>>>22)+e<<0)^((a=((a+=(e^(t|~l))+r[6]-1560198380)<<15|a>>>17)+t<<0)|~e))+r[13]+1309151649)<<21|l>>>11)+a<<0,l=((l+=((t=((t+=(l^((e=((e+=(a^(l|~t))+r[4]-145523070)<<6|e>>>26)+l<<0)|~a))+r[11]-1120210379)<<10|t>>>22)+e<<0)^((a=((a+=(e^(t|~l))+r[2]+718787259)<<15|a>>>17)+t<<0)|~e))+r[9]-343485551)<<21|l>>>11)+a<<0,this.first?(this.h0=e+1732584193<<0,this.h1=l-271733879<<0,this.h2=a-1732584194<<0,this.h3=t+271733878<<0,this.first=!1):(this.h0=this.h0+e<<0,this.h1=this.h1+l<<0,this.h2=this.h2+a<<0,this.h3=this.h3+t<<0)},t.prototype.hex=function(){this.finalize();var e=this.h0,l=this.h1,a=this.h2,t=this.h3;return n[e>>4&15]+n[15&e]+n[e>>12&15]+n[e>>8&15]+n[e>>20&15]+n[e>>16&15]+n[e>>28&15]+n[e>>24&15]+n[l>>4&15]+n[15&l]+n[l>>12&15]+n[l>>8&15]+n[l>>20&15]+n[l>>16&15]+n[l>>28&15]+n[l>>24&15]+n[a>>4&15]+n[15&a]+n[a>>12&15]+n[a>>8&15]+n[a>>20&15]+n[a>>16&15]+n[a>>28&15]+n[a>>24&15]+n[t>>4&15]+n[15&t]+n[t>>12&15]+n[t>>8&15]+n[t>>20&15]+n[t>>16&15]+n[t>>28&15]+n[t>>24&15]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var e=this.h0,l=this.h1,a=this.h2,t=this.h3;return[255&e,e>>8&255,e>>16&255,e>>24&255,255&l,l>>8&255,l>>16&255,l>>24&255,255&a,a>>8&255,a>>16&255,a>>24&255,255&t,t>>8&255,t>>16&255,t>>24&255]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(16),l=new Uint32Array(e);return l[0]=this.h0,l[1]=this.h1,l[2]=this.h2,l[3]=this.h3,e},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.base64=function(){for(var e,l,a,t="",u=this.array(),n=0;n<15;)e=u[n++],l=u[n++],a=u[n++],t+=p[e>>>2]+p[63&(e<<4|l>>>4)]+p[63&(l<<2|a>>>6)]+p[63&a];return e=u[n],t+(p[e>>>2]+p[e<<4&63]+"==")};var _=v();f?module.exports=_:(i.md5=_,o&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return _}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))},"66fd":function(e,l,a){"use strict";a.r(l),function(e){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var a=Object.freeze({});function t(e){return void 0===e||null===e}function u(e){return void 0!==e&&null!==e}function n(e){return!0===e}function r(e){return!1===e}function v(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function o(e){return null!==e&&"object"===typeof e}var i=Object.prototype.toString;function b(e){return"[object Object]"===i.call(e)}function s(e){return"[object RegExp]"===i.call(e)}function c(e){var l=parseFloat(String(e));return l>=0&&Math.floor(l)===l&&isFinite(e)}function f(e){return u(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function p(e){return null==e?"":Array.isArray(e)||b(e)&&e.toString===i?JSON.stringify(e,null,2):String(e)}function h(e){var l=parseFloat(e);return isNaN(l)?e:l}function d(e,l){for(var a=Object.create(null),t=e.split(","),u=0;u<t.length;u++)a[t[u]]=!0;return l?function(e){return a[e.toLowerCase()]}:function(e){return a[e]}}d("slot,component",!0);var y=d("key,ref,slot,slot-scope,is");function g(e,l){if(e.length){var a=e.indexOf(l);if(a>-1)return e.splice(a,1)}}var _=Object.prototype.hasOwnProperty;function m(e,l){return _.call(e,l)}function w(e){var l=Object.create(null);return function(a){var t=l[a];return t||(l[a]=e(a))}}var k=/-(\w)/g,A=w(function(e){return e.replace(k,function(e,l){return l?l.toUpperCase():""})}),x=w(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),$=/\B([A-Z])/g,O=w(function(e){return e.replace($,"-$1").toLowerCase()});function S(e,l){function a(a){var t=arguments.length;return t?t>1?e.apply(l,arguments):e.call(l,a):e.call(l)}return a._length=e.length,a}function T(e,l){return e.bind(l)}var C=Function.prototype.bind?T:S;function j(e,l){l=l||0;var a=e.length-l,t=new Array(a);while(a--)t[a]=e[a+l];return t}function B(e,l){for(var a in l)e[a]=l[a];return e}function E(e){for(var l={},a=0;a<e.length;a++)e[a]&&B(l,e[a]);return l}function D(e,l,a){}var P=function(e,l,a){return!1},N=function(e){return e};function R(e,l){if(e===l)return!0;var a=o(e),t=o(l);if(!a||!t)return!a&&!t&&String(e)===String(l);try{var u=Array.isArray(e),n=Array.isArray(l);if(u&&n)return e.length===l.length&&e.every(function(e,a){return R(e,l[a])});if(e instanceof Date&&l instanceof Date)return e.getTime()===l.getTime();if(u||n)return!1;var r=Object.keys(e),v=Object.keys(l);return r.length===v.length&&r.every(function(a){return R(e[a],l[a])})}catch(i){return!1}}function I(e,l){for(var a=0;a<e.length;a++)if(R(e[a],l))return a;return-1}function M(e){var l=!1;return function(){l||(l=!0,e.apply(this,arguments))}}var L=["component","directive","filter"],q=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],U={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:P,isReservedAttr:P,isUnknownElement:P,getTagNamespace:D,parsePlatformTagName:N,mustUseProp:P,async:!0,_lifecycleHooks:q},V=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function F(e){var l=(e+"").charCodeAt(0);return 36===l||95===l}function H(e,l,a,t){Object.defineProperty(e,l,{value:a,enumerable:!!t,writable:!0,configurable:!0})}var z=new RegExp("[^"+V.source+".$_\\d]");function W(e){if(!z.test(e)){var l=e.split(".");return function(e){for(var a=0;a<l.length;a++){if(!e)return;e=e[l[a]]}return e}}}var J,G="__proto__"in{},K="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=X&&WXEnvironment.platform.toLowerCase(),Z=K&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),ee=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),le=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===Y),ae=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(K)try{var te={};Object.defineProperty(te,"passive",{get:function(){}}),window.addEventListener("test-passive",null,te)}catch(eu){}var ue=function(){return void 0===J&&(J=!K&&!X&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),J},ne=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function re(e){return"function"===typeof e&&/native code/.test(e.toString())}var ve,oe="undefined"!==typeof Symbol&&re(Symbol)&&"undefined"!==typeof Reflect&&re(Reflect.ownKeys);ve="undefined"!==typeof Set&&re(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ie=D,be=0,se=function(){this.id=be++,this.subs=[]};function ce(e){se.SharedObject.targetStack.push(e),se.SharedObject.target=e}function fe(){se.SharedObject.targetStack.pop(),se.SharedObject.target=se.SharedObject.targetStack[se.SharedObject.targetStack.length-1]}se.prototype.addSub=function(e){this.subs.push(e)},se.prototype.removeSub=function(e){g(this.subs,e)},se.prototype.depend=function(){se.SharedObject.target&&se.SharedObject.target.addDep(this)},se.prototype.notify=function(){var e=this.subs.slice();for(var l=0,a=e.length;l<a;l++)e[l].update()},se.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},se.SharedObject.target=null,se.SharedObject.targetStack=[];var pe=function(e,l,a,t,u,n,r,v){this.tag=e,this.data=l,this.children=a,this.text=t,this.elm=u,this.ns=void 0,this.context=n,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=l&&l.key,this.componentOptions=r,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=v,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},he={child:{configurable:!0}};he.child.get=function(){return this.componentInstance},Object.defineProperties(pe.prototype,he);var de=function(e){void 0===e&&(e="");var l=new pe;return l.text=e,l.isComment=!0,l};function ye(e){return new pe(void 0,void 0,void 0,String(e))}function ge(e){var l=new pe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return l.ns=e.ns,l.isStatic=e.isStatic,l.key=e.key,l.isComment=e.isComment,l.fnContext=e.fnContext,l.fnOptions=e.fnOptions,l.fnScopeId=e.fnScopeId,l.asyncMeta=e.asyncMeta,l.isCloned=!0,l}var _e=Array.prototype,me=Object.create(_e),we=["push","pop","shift","unshift","splice","sort","reverse"];we.forEach(function(e){var l=_e[e];H(me,e,function(){var a=[],t=arguments.length;while(t--)a[t]=arguments[t];var u,n=l.apply(this,a),r=this.__ob__;switch(e){case"push":case"unshift":u=a;break;case"splice":u=a.slice(2);break}return u&&r.observeArray(u),r.dep.notify(),n})});var ke=Object.getOwnPropertyNames(me),Ae=!0;function xe(e){Ae=e}var $e=function(e){this.value=e,this.dep=new se,this.vmCount=0,H(e,"__ob__",this),Array.isArray(e)?(G?e.push!==e.__proto__.push?Se(e,me,ke):Oe(e,me):Se(e,me,ke),this.observeArray(e)):this.walk(e)};function Oe(e,l){e.__proto__=l}function Se(e,l,a){for(var t=0,u=a.length;t<u;t++){var n=a[t];H(e,n,l[n])}}function Te(e,l){var a;if(o(e)&&!(e instanceof pe))return m(e,"__ob__")&&e.__ob__ instanceof $e?a=e.__ob__:Ae&&!ue()&&(Array.isArray(e)||b(e))&&Object.isExtensible(e)&&!e._isVue&&(a=new $e(e)),l&&a&&a.vmCount++,a}function Ce(e,l,a,t,u){var n=new se,r=Object.getOwnPropertyDescriptor(e,l);if(!r||!1!==r.configurable){var v=r&&r.get,o=r&&r.set;v&&!o||2!==arguments.length||(a=e[l]);var i=!u&&Te(a);Object.defineProperty(e,l,{enumerable:!0,configurable:!0,get:function(){var l=v?v.call(e):a;return se.SharedObject.target&&(n.depend(),i&&(i.dep.depend(),Array.isArray(l)&&Ee(l))),l},set:function(l){var t=v?v.call(e):a;l===t||l!==l&&t!==t||v&&!o||(o?o.call(e,l):a=l,i=!u&&Te(l),n.notify())}})}}function je(e,l,a){if(Array.isArray(e)&&c(l))return e.length=Math.max(e.length,l),e.splice(l,1,a),a;if(l in e&&!(l in Object.prototype))return e[l]=a,a;var t=e.__ob__;return e._isVue||t&&t.vmCount?a:t?(Ce(t.value,l,a),t.dep.notify(),a):(e[l]=a,a)}function Be(e,l){if(Array.isArray(e)&&c(l))e.splice(l,1);else{var a=e.__ob__;e._isVue||a&&a.vmCount||m(e,l)&&(delete e[l],a&&a.dep.notify())}}function Ee(e){for(var l=void 0,a=0,t=e.length;a<t;a++)l=e[a],l&&l.__ob__&&l.__ob__.dep.depend(),Array.isArray(l)&&Ee(l)}$e.prototype.walk=function(e){for(var l=Object.keys(e),a=0;a<l.length;a++)Ce(e,l[a])},$e.prototype.observeArray=function(e){for(var l=0,a=e.length;l<a;l++)Te(e[l])};var De=U.optionMergeStrategies;function Pe(e,l){if(!l)return e;for(var a,t,u,n=oe?Reflect.ownKeys(l):Object.keys(l),r=0;r<n.length;r++)a=n[r],"__ob__"!==a&&(t=e[a],u=l[a],m(e,a)?t!==u&&b(t)&&b(u)&&Pe(t,u):je(e,a,u));return e}function Ne(e,l,a){return a?function(){var t="function"===typeof l?l.call(a,a):l,u="function"===typeof e?e.call(a,a):e;return t?Pe(t,u):u}:l?e?function(){return Pe("function"===typeof l?l.call(this,this):l,"function"===typeof e?e.call(this,this):e)}:l:e}function Re(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?Ie(a):a}function Ie(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function Me(e,l,a,t){var u=Object.create(e||null);return l?B(u,l):u}De.data=function(e,l,a){return a?Ne(e,l,a):l&&"function"!==typeof l?e:Ne(e,l)},q.forEach(function(e){De[e]=Re}),L.forEach(function(e){De[e+"s"]=Me}),De.watch=function(e,l,a,t){if(e===ae&&(e=void 0),l===ae&&(l=void 0),!l)return Object.create(e||null);if(!e)return l;var u={};for(var n in B(u,e),l){var r=u[n],v=l[n];r&&!Array.isArray(r)&&(r=[r]),u[n]=r?r.concat(v):Array.isArray(v)?v:[v]}return u},De.props=De.methods=De.inject=De.computed=function(e,l,a,t){if(!e)return l;var u=Object.create(null);return B(u,e),l&&B(u,l),u},De.provide=Ne;var Le=function(e,l){return void 0===l?e:l};function qe(e,l){var a=e.props;if(a){var t,u,n,r={};if(Array.isArray(a)){t=a.length;while(t--)u=a[t],"string"===typeof u&&(n=A(u),r[n]={type:null})}else if(b(a))for(var v in a)u=a[v],n=A(v),r[n]=b(u)?u:{type:u};else 0;e.props=r}}function Ue(e,l){var a=e.inject;if(a){var t=e.inject={};if(Array.isArray(a))for(var u=0;u<a.length;u++)t[a[u]]={from:a[u]};else if(b(a))for(var n in a){var r=a[n];t[n]=b(r)?B({from:n},r):{from:r}}else 0}}function Ve(e){var l=e.directives;if(l)for(var a in l){var t=l[a];"function"===typeof t&&(l[a]={bind:t,update:t})}}function Fe(e,l,a){if("function"===typeof l&&(l=l.options),qe(l,a),Ue(l,a),Ve(l),!l._base&&(l.extends&&(e=Fe(e,l.extends,a)),l.mixins))for(var t=0,u=l.mixins.length;t<u;t++)e=Fe(e,l.mixins[t],a);var n,r={};for(n in e)v(n);for(n in l)m(e,n)||v(n);function v(t){var u=De[t]||Le;r[t]=u(e[t],l[t],a,t)}return r}function He(e,l,a,t){if("string"===typeof a){var u=e[l];if(m(u,a))return u[a];var n=A(a);if(m(u,n))return u[n];var r=x(n);if(m(u,r))return u[r];var v=u[a]||u[n]||u[r];return v}}function ze(e,l,a,t){var u=l[e],n=!m(a,e),r=a[e],v=Ke(Boolean,u.type);if(v>-1)if(n&&!m(u,"default"))r=!1;else if(""===r||r===O(e)){var o=Ke(String,u.type);(o<0||v<o)&&(r=!0)}if(void 0===r){r=We(t,u,e);var i=Ae;xe(!0),Te(r),xe(i)}return r}function We(e,l,a){if(m(l,"default")){var t=l.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[a]&&void 0!==e._props[a]?e._props[a]:"function"===typeof t&&"Function"!==Je(l.type)?t.call(e):t}}function Je(e){var l=e&&e.toString().match(/^\s*function (\w+)/);return l?l[1]:""}function Ge(e,l){return Je(e)===Je(l)}function Ke(e,l){if(!Array.isArray(l))return Ge(l,e)?0:-1;for(var a=0,t=l.length;a<t;a++)if(Ge(l[a],e))return a;return-1}function Xe(e,l,a){ce();try{if(l){var t=l;while(t=t.$parent){var u=t.$options.errorCaptured;if(u)for(var n=0;n<u.length;n++)try{var r=!1===u[n].call(t,e,l,a);if(r)return}catch(eu){Ze(eu,t,"errorCaptured hook")}}}Ze(e,l,a)}finally{fe()}}function Ye(e,l,a,t,u){var n;try{n=a?e.apply(l,a):e.call(l),n&&!n._isVue&&f(n)&&!n._handled&&(n.catch(function(e){return Xe(e,t,u+" (Promise/async)")}),n._handled=!0)}catch(eu){Xe(eu,t,u)}return n}function Ze(e,l,a){if(U.errorHandler)try{return U.errorHandler.call(null,e,l,a)}catch(eu){eu!==e&&Qe(eu,null,"config.errorHandler")}Qe(e,l,a)}function Qe(e,l,a){if(!K&&!X||"undefined"===typeof console)throw e;console.error(e)}var el,ll=[],al=!1;function tl(){al=!1;var e=ll.slice(0);ll.length=0;for(var l=0;l<e.length;l++)e[l]()}if("undefined"!==typeof Promise&&re(Promise)){var ul=Promise.resolve();el=function(){ul.then(tl),le&&setTimeout(D)}}else if(Q||"undefined"===typeof MutationObserver||!re(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())el="undefined"!==typeof setImmediate&&re(setImmediate)?function(){setImmediate(tl)}:function(){setTimeout(tl,0)};else{var nl=1,rl=new MutationObserver(tl),vl=document.createTextNode(String(nl));rl.observe(vl,{characterData:!0}),el=function(){nl=(nl+1)%2,vl.data=String(nl)}}function ol(e,l){var a;if(ll.push(function(){if(e)try{e.call(l)}catch(eu){Xe(eu,l,"nextTick")}else a&&a(l)}),al||(al=!0,el()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){a=e})}var il=new ve;function bl(e){sl(e,il),il.clear()}function sl(e,l){var a,t,u=Array.isArray(e);if(!(!u&&!o(e)||Object.isFrozen(e)||e instanceof pe)){if(e.__ob__){var n=e.__ob__.dep.id;if(l.has(n))return;l.add(n)}if(u){a=e.length;while(a--)sl(e[a],l)}else{t=Object.keys(e),a=t.length;while(a--)sl(e[t[a]],l)}}}var cl=w(function(e){var l="&"===e.charAt(0);e=l?e.slice(1):e;var a="~"===e.charAt(0);e=a?e.slice(1):e;var t="!"===e.charAt(0);return e=t?e.slice(1):e,{name:e,once:a,capture:t,passive:l}});function fl(e,l){function a(){var e=arguments,t=a.fns;if(!Array.isArray(t))return Ye(t,null,arguments,l,"v-on handler");for(var u=t.slice(),n=0;n<u.length;n++)Ye(u[n],null,e,l,"v-on handler")}return a.fns=e,a}function pl(e,l,a,u,r,v){var o,i,b,s;for(o in e)i=e[o],b=l[o],s=cl(o),t(i)||(t(b)?(t(i.fns)&&(i=e[o]=fl(i,v)),n(s.once)&&(i=e[o]=r(s.name,i,s.capture)),a(s.name,i,s.capture,s.passive,s.params)):i!==b&&(b.fns=i,e[o]=b));for(o in l)t(e[o])&&(s=cl(o),u(s.name,l[o],s.capture))}function hl(e,l,a){var n=l.options.props;if(!t(n)){var r={},v=e.attrs,o=e.props;if(u(v)||u(o))for(var i in n){var b=O(i);dl(r,o,i,b,!0)||dl(r,v,i,b,!1)}return r}}function dl(e,l,a,t,n){if(u(l)){if(m(l,a))return e[a]=l[a],n||delete l[a],!0;if(m(l,t))return e[a]=l[t],n||delete l[t],!0}return!1}function yl(e){for(var l=0;l<e.length;l++)if(Array.isArray(e[l]))return Array.prototype.concat.apply([],e);return e}function gl(e){return v(e)?[ye(e)]:Array.isArray(e)?ml(e):void 0}function _l(e){return u(e)&&u(e.text)&&r(e.isComment)}function ml(e,l){var a,r,o,i,b=[];for(a=0;a<e.length;a++)r=e[a],t(r)||"boolean"===typeof r||(o=b.length-1,i=b[o],Array.isArray(r)?r.length>0&&(r=ml(r,(l||"")+"_"+a),_l(r[0])&&_l(i)&&(b[o]=ye(i.text+r[0].text),r.shift()),b.push.apply(b,r)):v(r)?_l(i)?b[o]=ye(i.text+r):""!==r&&b.push(ye(r)):_l(r)&&_l(i)?b[o]=ye(i.text+r.text):(n(e._isVList)&&u(r.tag)&&t(r.key)&&u(l)&&(r.key="__vlist"+l+"_"+a+"__"),b.push(r)));return b}function wl(e){var l=e.$options.provide;l&&(e._provided="function"===typeof l?l.call(e):l)}function kl(e){var l=Al(e.$options.inject,e);l&&(xe(!1),Object.keys(l).forEach(function(a){Ce(e,a,l[a])}),xe(!0))}function Al(e,l){if(e){for(var a=Object.create(null),t=oe?Reflect.ownKeys(e):Object.keys(e),u=0;u<t.length;u++){var n=t[u];if("__ob__"!==n){var r=e[n].from,v=l;while(v){if(v._provided&&m(v._provided,r)){a[n]=v._provided[r];break}v=v.$parent}if(!v)if("default"in e[n]){var o=e[n].default;a[n]="function"===typeof o?o.call(l):o}else 0}}return a}}function xl(e,l){if(!e||!e.length)return{};for(var a={},t=0,u=e.length;t<u;t++){var n=e[t],r=n.data;if(r&&r.attrs&&r.attrs.slot&&delete r.attrs.slot,n.context!==l&&n.fnContext!==l||!r||null==r.slot)n.asyncMeta&&n.asyncMeta.data&&"page"===n.asyncMeta.data.slot?(a["page"]||(a["page"]=[])).push(n):(a.default||(a.default=[])).push(n);else{var v=r.slot,o=a[v]||(a[v]=[]);"template"===n.tag?o.push.apply(o,n.children||[]):o.push(n)}}for(var i in a)a[i].every($l)&&delete a[i];return a}function $l(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Ol(e,l,t){var u,n=Object.keys(l).length>0,r=e?!!e.$stable:!n,v=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(r&&t&&t!==a&&v===t.$key&&!n&&!t.$hasNormal)return t;for(var o in u={},e)e[o]&&"$"!==o[0]&&(u[o]=Sl(l,o,e[o]))}else u={};for(var i in l)i in u||(u[i]=Tl(l,i));return e&&Object.isExtensible(e)&&(e._normalized=u),H(u,"$stable",r),H(u,"$key",v),H(u,"$hasNormal",n),u}function Sl(e,l,a){var t=function(){var e=arguments.length?a.apply(null,arguments):a({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:gl(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return a.proxy&&Object.defineProperty(e,l,{get:t,enumerable:!0,configurable:!0}),t}function Tl(e,l){return function(){return e[l]}}function Cl(e,l){var a,t,n,r,v;if(Array.isArray(e)||"string"===typeof e)for(a=new Array(e.length),t=0,n=e.length;t<n;t++)a[t]=l(e[t],t);else if("number"===typeof e)for(a=new Array(e),t=0;t<e;t++)a[t]=l(t+1,t);else if(o(e))if(oe&&e[Symbol.iterator]){a=[];var i=e[Symbol.iterator](),b=i.next();while(!b.done)a.push(l(b.value,a.length)),b=i.next()}else for(r=Object.keys(e),a=new Array(r.length),t=0,n=r.length;t<n;t++)v=r[t],a[t]=l(e[v],v,t);return u(a)||(a=[]),a._isVList=!0,a}function jl(e,l,a,t){var u,n=this.$scopedSlots[e];n?(a=a||{},t&&(a=B(B({},t),a)),u=n(a)||l):u=this.$slots[e]||l;var r=a&&a.slot;return r?this.$createElement("template",{slot:r},u):u}function Bl(e){return He(this.$options,"filters",e,!0)||N}function El(e,l){return Array.isArray(e)?-1===e.indexOf(l):e!==l}function Dl(e,l,a,t,u){var n=U.keyCodes[l]||a;return u&&t&&!U.keyCodes[l]?El(u,t):n?El(n,e):t?O(t)!==l:void 0}function Pl(e,l,a,t,u){if(a)if(o(a)){var n;Array.isArray(a)&&(a=E(a));var r=function(r){if("class"===r||"style"===r||y(r))n=e;else{var v=e.attrs&&e.attrs.type;n=t||U.mustUseProp(l,v,r)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var o=A(r),i=O(r);if(!(o in n)&&!(i in n)&&(n[r]=a[r],u)){var b=e.on||(e.on={});b["update:"+r]=function(e){a[r]=e}}};for(var v in a)r(v)}else;return e}function Nl(e,l){var a=this._staticTrees||(this._staticTrees=[]),t=a[e];return t&&!l?t:(t=a[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Il(t,"__static__"+e,!1),t)}function Rl(e,l,a){return Il(e,"__once__"+l+(a?"_"+a:""),!0),e}function Il(e,l,a){if(Array.isArray(e))for(var t=0;t<e.length;t++)e[t]&&"string"!==typeof e[t]&&Ml(e[t],l+"_"+t,a);else Ml(e,l,a)}function Ml(e,l,a){e.isStatic=!0,e.key=l,e.isOnce=a}function Ll(e,l){if(l)if(b(l)){var a=e.on=e.on?B({},e.on):{};for(var t in l){var u=a[t],n=l[t];a[t]=u?[].concat(u,n):n}}else;return e}function ql(e,l,a,t){l=l||{$stable:!a};for(var u=0;u<e.length;u++){var n=e[u];Array.isArray(n)?ql(n,l,a):n&&(n.proxy&&(n.fn.proxy=!0),l[n.key]=n.fn)}return t&&(l.$key=t),l}function Ul(e,l){for(var a=0;a<l.length;a+=2){var t=l[a];"string"===typeof t&&t&&(e[l[a]]=l[a+1])}return e}function Vl(e,l){return"string"===typeof e?l+e:e}function Fl(e){e._o=Rl,e._n=h,e._s=p,e._l=Cl,e._t=jl,e._q=R,e._i=I,e._m=Nl,e._f=Bl,e._k=Dl,e._b=Pl,e._v=ye,e._e=de,e._u=ql,e._g=Ll,e._d=Ul,e._p=Vl}function Hl(e,l,t,u,r){var v,o=this,i=r.options;m(u,"_uid")?(v=Object.create(u),v._original=u):(v=u,u=u._original);var b=n(i._compiled),s=!b;this.data=e,this.props=l,this.children=t,this.parent=u,this.listeners=e.on||a,this.injections=Al(i.inject,u),this.slots=function(){return o.$slots||Ol(e.scopedSlots,o.$slots=xl(t,u)),o.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ol(e.scopedSlots,this.slots())}}),b&&(this.$options=i,this.$slots=this.slots(),this.$scopedSlots=Ol(e.scopedSlots,this.$slots)),i._scopeId?this._c=function(e,l,a,t){var n=ta(v,e,l,a,t,s);return n&&!Array.isArray(n)&&(n.fnScopeId=i._scopeId,n.fnContext=u),n}:this._c=function(e,l,a,t){return ta(v,e,l,a,t,s)}}function zl(e,l,t,n,r){var v=e.options,o={},i=v.props;if(u(i))for(var b in i)o[b]=ze(b,i,l||a);else u(t.attrs)&&Jl(o,t.attrs),u(t.props)&&Jl(o,t.props);var s=new Hl(t,o,r,n,e),c=v.render.call(null,s._c,s);if(c instanceof pe)return Wl(c,t,s.parent,v,s);if(Array.isArray(c)){for(var f=gl(c)||[],p=new Array(f.length),h=0;h<f.length;h++)p[h]=Wl(f[h],t,s.parent,v,s);return p}}function Wl(e,l,a,t,u){var n=ge(e);return n.fnContext=a,n.fnOptions=t,l.slot&&((n.data||(n.data={})).slot=l.slot),n}function Jl(e,l){for(var a in l)e[A(a)]=l[a]}Fl(Hl.prototype);var Gl={init:function(e,l){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var a=e;Gl.prepatch(a,a)}else{var t=e.componentInstance=Yl(e,ka);t.$mount(l?e.elm:void 0,l)}},prepatch:function(e,l){var a=l.componentOptions,t=l.componentInstance=e.componentInstance;Oa(t,a.propsData,a.listeners,l,a.children)},insert:function(e){var l=e.context,a=e.componentInstance;a._isMounted||(a._isMounted=!0,ja(a,"mounted")),e.data.keepAlive&&(l._isMounted?Va(a):Ta(a,!0))},destroy:function(e){var l=e.componentInstance;l._isDestroyed||(e.data.keepAlive?Ca(l,!0):l.$destroy())}},Kl=Object.keys(Gl);function Xl(e,l,a,r,v){if(!t(e)){var i=a.$options._base;if(o(e)&&(e=i.extend(e)),"function"===typeof e){var b;if(t(e.cid)&&(b=e,e=fa(b,i),void 0===e))return ca(b,l,a,r,v);l=l||{},st(e),u(l.model)&&ea(e.options,l);var s=hl(l,e,v);if(n(e.options.functional))return zl(e,s,l,a,r);var c=l.on;if(l.on=l.nativeOn,n(e.options.abstract)){var f=l.slot;l={},f&&(l.slot=f)}Zl(l);var p=e.options.name||v,h=new pe("vue-component-"+e.cid+(p?"-"+p:""),l,void 0,void 0,void 0,a,{Ctor:e,propsData:s,listeners:c,tag:v,children:r},b);return h}}}function Yl(e,l){var a={_isComponent:!0,_parentVnode:e,parent:l},t=e.data.inlineTemplate;return u(t)&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),new e.componentOptions.Ctor(a)}function Zl(e){for(var l=e.hook||(e.hook={}),a=0;a<Kl.length;a++){var t=Kl[a],u=l[t],n=Gl[t];u===n||u&&u._merged||(l[t]=u?Ql(n,u):n)}}function Ql(e,l){var a=function(a,t){e(a,t),l(a,t)};return a._merged=!0,a}function ea(e,l){var a=e.model&&e.model.prop||"value",t=e.model&&e.model.event||"input";(l.attrs||(l.attrs={}))[a]=l.model.value;var n=l.on||(l.on={}),r=n[t],v=l.model.callback;u(r)?(Array.isArray(r)?-1===r.indexOf(v):r!==v)&&(n[t]=[v].concat(r)):n[t]=v}var la=1,aa=2;function ta(e,l,a,t,u,r){return(Array.isArray(a)||v(a))&&(u=t,t=a,a=void 0),n(r)&&(u=aa),ua(e,l,a,t,u)}function ua(e,l,a,t,n){if(u(a)&&u(a.__ob__))return de();if(u(a)&&u(a.is)&&(l=a.is),!l)return de();var r,v,o;(Array.isArray(t)&&"function"===typeof t[0]&&(a=a||{},a.scopedSlots={default:t[0]},t.length=0),n===aa?t=gl(t):n===la&&(t=yl(t)),"string"===typeof l)?(v=e.$vnode&&e.$vnode.ns||U.getTagNamespace(l),r=U.isReservedTag(l)?new pe(U.parsePlatformTagName(l),a,t,void 0,void 0,e):a&&a.pre||!u(o=He(e.$options,"components",l))?new pe(l,a,t,void 0,void 0,e):Xl(o,a,e,t,l)):r=Xl(l,a,e,t);return Array.isArray(r)?r:u(r)?(u(v)&&na(r,v),u(a)&&ra(a),r):de()}function na(e,l,a){if(e.ns=l,"foreignObject"===e.tag&&(l=void 0,a=!0),u(e.children))for(var r=0,v=e.children.length;r<v;r++){var o=e.children[r];u(o.tag)&&(t(o.ns)||n(a)&&"svg"!==o.tag)&&na(o,l,a)}}function ra(e){o(e.style)&&bl(e.style),o(e.class)&&bl(e.class)}function va(e){e._vnode=null,e._staticTrees=null;var l=e.$options,t=e.$vnode=l._parentVnode,u=t&&t.context;e.$slots=xl(l._renderChildren,u),e.$scopedSlots=a,e._c=function(l,a,t,u){return ta(e,l,a,t,u,!1)},e.$createElement=function(l,a,t,u){return ta(e,l,a,t,u,!0)};var n=t&&t.data;Ce(e,"$attrs",n&&n.attrs||a,null,!0),Ce(e,"$listeners",l._parentListeners||a,null,!0)}var oa,ia=null;function ba(e){Fl(e.prototype),e.prototype.$nextTick=function(e){return ol(e,this)},e.prototype._render=function(){var e,l=this,a=l.$options,t=a.render,u=a._parentVnode;u&&(l.$scopedSlots=Ol(u.data.scopedSlots,l.$slots,l.$scopedSlots)),l.$vnode=u;try{ia=l,e=t.call(l._renderProxy,l.$createElement)}catch(eu){Xe(eu,l,"render"),e=l._vnode}finally{ia=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof pe||(e=de()),e.parent=u,e}}function sa(e,l){return(e.__esModule||oe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),o(e)?l.extend(e):e}function ca(e,l,a,t,u){var n=de();return n.asyncFactory=e,n.asyncMeta={data:l,context:a,children:t,tag:u},n}function fa(e,l){if(n(e.error)&&u(e.errorComp))return e.errorComp;if(u(e.resolved))return e.resolved;var a=ia;if(a&&u(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a),n(e.loading)&&u(e.loadingComp))return e.loadingComp;if(a&&!u(e.owners)){var r=e.owners=[a],v=!0,i=null,b=null;a.$on("hook:destroyed",function(){return g(r,a)});var s=function(e){for(var l=0,a=r.length;l<a;l++)r[l].$forceUpdate();e&&(r.length=0,null!==i&&(clearTimeout(i),i=null),null!==b&&(clearTimeout(b),b=null))},c=M(function(a){e.resolved=sa(a,l),v?r.length=0:s(!0)}),p=M(function(l){u(e.errorComp)&&(e.error=!0,s(!0))}),h=e(c,p);return o(h)&&(f(h)?t(e.resolved)&&h.then(c,p):f(h.component)&&(h.component.then(c,p),u(h.error)&&(e.errorComp=sa(h.error,l)),u(h.loading)&&(e.loadingComp=sa(h.loading,l),0===h.delay?e.loading=!0:i=setTimeout(function(){i=null,t(e.resolved)&&t(e.error)&&(e.loading=!0,s(!1))},h.delay||200)),u(h.timeout)&&(b=setTimeout(function(){b=null,t(e.resolved)&&p(null)},h.timeout)))),v=!1,e.loading?e.loadingComp:e.resolved}}function pa(e){return e.isComment&&e.asyncFactory}function ha(e){if(Array.isArray(e))for(var l=0;l<e.length;l++){var a=e[l];if(u(a)&&(u(a.componentOptions)||pa(a)))return a}}function da(e){e._events=Object.create(null),e._hasHookEvent=!1;var l=e.$options._parentListeners;l&&ma(e,l)}function ya(e,l){oa.$on(e,l)}function ga(e,l){oa.$off(e,l)}function _a(e,l){var a=oa;return function t(){var u=l.apply(null,arguments);null!==u&&a.$off(e,t)}}function ma(e,l,a){oa=e,pl(l,a||{},ya,ga,_a,e),oa=void 0}function wa(e){var l=/^hook:/;e.prototype.$on=function(e,a){var t=this;if(Array.isArray(e))for(var u=0,n=e.length;u<n;u++)t.$on(e[u],a);else(t._events[e]||(t._events[e]=[])).push(a),l.test(e)&&(t._hasHookEvent=!0);return t},e.prototype.$once=function(e,l){var a=this;function t(){a.$off(e,t),l.apply(a,arguments)}return t.fn=l,a.$on(e,t),a},e.prototype.$off=function(e,l){var a=this;if(!arguments.length)return a._events=Object.create(null),a;if(Array.isArray(e)){for(var t=0,u=e.length;t<u;t++)a.$off(e[t],l);return a}var n,r=a._events[e];if(!r)return a;if(!l)return a._events[e]=null,a;var v=r.length;while(v--)if(n=r[v],n===l||n.fn===l){r.splice(v,1);break}return a},e.prototype.$emit=function(e){var l=this,a=l._events[e];if(a){a=a.length>1?j(a):a;for(var t=j(arguments,1),u='event handler for "'+e+'"',n=0,r=a.length;n<r;n++)Ye(a[n],l,t,l,u)}return l}}var ka=null;function Aa(e){var l=ka;return ka=e,function(){ka=l}}function xa(e){var l=e.$options,a=l.parent;if(a&&!l.abstract){while(a.$options.abstract&&a.$parent)a=a.$parent;a.$children.push(e)}e.$parent=a,e.$root=a?a.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function $a(e){e.prototype._update=function(e,l){var a=this,t=a.$el,u=a._vnode,n=Aa(a);a._vnode=e,a.$el=u?a.__patch__(u,e):a.__patch__(a.$el,e,l,!1),n(),t&&(t.__vue__=null),a.$el&&(a.$el.__vue__=a),a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){ja(e,"beforeDestroy"),e._isBeingDestroyed=!0;var l=e.$parent;!l||l._isBeingDestroyed||e.$options.abstract||g(l.$children,e),e._watcher&&e._watcher.teardown();var a=e._watchers.length;while(a--)e._watchers[a].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),ja(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Oa(e,l,t,u,n){var r=u.data.scopedSlots,v=e.$scopedSlots,o=!!(r&&!r.$stable||v!==a&&!v.$stable||r&&e.$scopedSlots.$key!==r.$key),i=!!(n||e.$options._renderChildren||o);if(e.$options._parentVnode=u,e.$vnode=u,e._vnode&&(e._vnode.parent=u),e.$options._renderChildren=n,e.$attrs=u.data.attrs||a,e.$listeners=t||a,l&&e.$options.props){xe(!1);for(var b=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var f=s[c],p=e.$options.props;b[f]=ze(f,p,l,e)}xe(!0),e.$options.propsData=l}t=t||a;var h=e.$options._parentListeners;e.$options._parentListeners=t,ma(e,t,h),i&&(e.$slots=xl(n,u.context),e.$forceUpdate())}function Sa(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Ta(e,l){if(l){if(e._directInactive=!1,Sa(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var a=0;a<e.$children.length;a++)Ta(e.$children[a]);ja(e,"activated")}}function Ca(e,l){if((!l||(e._directInactive=!0,!Sa(e)))&&!e._inactive){e._inactive=!0;for(var a=0;a<e.$children.length;a++)Ca(e.$children[a]);ja(e,"deactivated")}}function ja(e,l){ce();var a=e.$options[l],t=l+" hook";if(a)for(var u=0,n=a.length;u<n;u++)Ye(a[u],e,null,e,t);e._hasHookEvent&&e.$emit("hook:"+l),fe()}var Ba=[],Ea=[],Da={},Pa=!1,Na=!1,Ra=0;function Ia(){Ra=Ba.length=Ea.length=0,Da={},Pa=Na=!1}var Ma=Date.now;if(K&&!Q){var La=window.performance;La&&"function"===typeof La.now&&Ma()>document.createEvent("Event").timeStamp&&(Ma=function(){return La.now()})}function qa(){var e,l;for(Ma(),Na=!0,Ba.sort(function(e,l){return e.id-l.id}),Ra=0;Ra<Ba.length;Ra++)e=Ba[Ra],e.before&&e.before(),l=e.id,Da[l]=null,e.run();var a=Ea.slice(),t=Ba.slice();Ia(),Fa(a),Ua(t),ne&&U.devtools&&ne.emit("flush")}function Ua(e){var l=e.length;while(l--){var a=e[l],t=a.vm;t._watcher===a&&t._isMounted&&!t._isDestroyed&&ja(t,"updated")}}function Va(e){e._inactive=!1,Ea.push(e)}function Fa(e){for(var l=0;l<e.length;l++)e[l]._inactive=!0,Ta(e[l],!0)}function Ha(e){var l=e.id;if(null==Da[l]){if(Da[l]=!0,Na){var a=Ba.length-1;while(a>Ra&&Ba[a].id>e.id)a--;Ba.splice(a+1,0,e)}else Ba.push(e);Pa||(Pa=!0,ol(qa))}}var za=0,Wa=function(e,l,a,t,u){this.vm=e,u&&(e._watcher=this),e._watchers.push(this),t?(this.deep=!!t.deep,this.user=!!t.user,this.lazy=!!t.lazy,this.sync=!!t.sync,this.before=t.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++za,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ve,this.newDepIds=new ve,this.expression="","function"===typeof l?this.getter=l:(this.getter=W(l),this.getter||(this.getter=D)),this.value=this.lazy?void 0:this.get()};Wa.prototype.get=function(){var e;ce(this);var l=this.vm;try{e=this.getter.call(l,l)}catch(eu){if(!this.user)throw eu;Xe(eu,l,'getter for watcher "'+this.expression+'"')}finally{this.deep&&bl(e),fe(),this.cleanupDeps()}return e},Wa.prototype.addDep=function(e){var l=e.id;this.newDepIds.has(l)||(this.newDepIds.add(l),this.newDeps.push(e),this.depIds.has(l)||e.addSub(this))},Wa.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var l=this.deps[e];this.newDepIds.has(l.id)||l.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},Wa.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ha(this)},Wa.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||o(e)||this.deep){var l=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,l)}catch(eu){Xe(eu,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,l)}}},Wa.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Wa.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},Wa.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var Ja={enumerable:!0,configurable:!0,get:D,set:D};function Ga(e,l,a){Ja.get=function(){return this[l][a]},Ja.set=function(e){this[l][a]=e},Object.defineProperty(e,a,Ja)}function Ka(e){e._watchers=[];var l=e.$options;l.props&&Xa(e,l.props),l.methods&&ut(e,l.methods),l.data?Ya(e):Te(e._data={},!0),l.computed&&et(e,l.computed),l.watch&&l.watch!==ae&&nt(e,l.watch)}function Xa(e,l){var a=e.$options.propsData||{},t=e._props={},u=e.$options._propKeys=[],n=!e.$parent;n||xe(!1);var r=function(n){u.push(n);var r=ze(n,l,a,e);Ce(t,n,r),n in e||Ga(e,"_props",n)};for(var v in l)r(v);xe(!0)}function Ya(e){var l=e.$options.data;l=e._data="function"===typeof l?Za(l,e):l||{},b(l)||(l={});var a=Object.keys(l),t=e.$options.props,u=(e.$options.methods,a.length);while(u--){var n=a[u];0,t&&m(t,n)||F(n)||Ga(e,"_data",n)}Te(l,!0)}function Za(e,l){ce();try{return e.call(l,l)}catch(eu){return Xe(eu,l,"data()"),{}}finally{fe()}}var Qa={lazy:!0};function et(e,l){var a=e._computedWatchers=Object.create(null),t=ue();for(var u in l){var n=l[u],r="function"===typeof n?n:n.get;0,t||(a[u]=new Wa(e,r||D,D,Qa)),u in e||lt(e,u,n)}}function lt(e,l,a){var t=!ue();"function"===typeof a?(Ja.get=t?at(l):tt(a),Ja.set=D):(Ja.get=a.get?t&&!1!==a.cache?at(l):tt(a.get):D,Ja.set=a.set||D),Object.defineProperty(e,l,Ja)}function at(e){return function(){var l=this._computedWatchers&&this._computedWatchers[e];if(l)return l.dirty&&l.evaluate(),se.SharedObject.target&&l.depend(),l.value}}function tt(e){return function(){return e.call(this,this)}}function ut(e,l){e.$options.props;for(var a in l)e[a]="function"!==typeof l[a]?D:C(l[a],e)}function nt(e,l){for(var a in l){var t=l[a];if(Array.isArray(t))for(var u=0;u<t.length;u++)rt(e,a,t[u]);else rt(e,a,t)}}function rt(e,l,a,t){return b(a)&&(t=a,a=a.handler),"string"===typeof a&&(a=e[a]),e.$watch(l,a,t)}function vt(e){var l={get:function(){return this._data}},a={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",l),Object.defineProperty(e.prototype,"$props",a),e.prototype.$set=je,e.prototype.$delete=Be,e.prototype.$watch=function(e,l,a){var t=this;if(b(l))return rt(t,e,l,a);a=a||{},a.user=!0;var u=new Wa(t,e,l,a);if(a.immediate)try{l.call(t,u.value)}catch(n){Xe(n,t,'callback for immediate watcher "'+u.expression+'"')}return function(){u.teardown()}}}var ot=0;function it(e){e.prototype._init=function(e){var l=this;l._uid=ot++,l._isVue=!0,e&&e._isComponent?bt(l,e):l.$options=Fe(st(l.constructor),e||{},l),l._renderProxy=l,l._self=l,xa(l),da(l),va(l),ja(l,"beforeCreate"),"mp-toutiao"!==l.mpHost&&kl(l),Ka(l),"mp-toutiao"!==l.mpHost&&wl(l),"mp-toutiao"!==l.mpHost&&ja(l,"created"),l.$options.el&&l.$mount(l.$options.el)}}function bt(e,l){var a=e.$options=Object.create(e.constructor.options),t=l._parentVnode;a.parent=l.parent,a._parentVnode=t;var u=t.componentOptions;a.propsData=u.propsData,a._parentListeners=u.listeners,a._renderChildren=u.children,a._componentTag=u.tag,l.render&&(a.render=l.render,a.staticRenderFns=l.staticRenderFns)}function st(e){var l=e.options;if(e.super){var a=st(e.super),t=e.superOptions;if(a!==t){e.superOptions=a;var u=ct(e);u&&B(e.extendOptions,u),l=e.options=Fe(a,e.extendOptions),l.name&&(l.components[l.name]=e)}}return l}function ct(e){var l,a=e.options,t=e.sealedOptions;for(var u in a)a[u]!==t[u]&&(l||(l={}),l[u]=a[u]);return l}function ft(e){this._init(e)}function pt(e){e.use=function(e){var l=this._installedPlugins||(this._installedPlugins=[]);if(l.indexOf(e)>-1)return this;var a=j(arguments,1);return a.unshift(this),"function"===typeof e.install?e.install.apply(e,a):"function"===typeof e&&e.apply(null,a),l.push(e),this}}function ht(e){e.mixin=function(e){return this.options=Fe(this.options,e),this}}function dt(e){e.cid=0;var l=1;e.extend=function(e){e=e||{};var a=this,t=a.cid,u=e._Ctor||(e._Ctor={});if(u[t])return u[t];var n=e.name||a.options.name;var r=function(e){this._init(e)};return r.prototype=Object.create(a.prototype),r.prototype.constructor=r,r.cid=l++,r.options=Fe(a.options,e),r["super"]=a,r.options.props&&yt(r),r.options.computed&&gt(r),r.extend=a.extend,r.mixin=a.mixin,r.use=a.use,L.forEach(function(e){r[e]=a[e]}),n&&(r.options.components[n]=r),r.superOptions=a.options,r.extendOptions=e,r.sealedOptions=B({},r.options),u[t]=r,r}}function yt(e){var l=e.options.props;for(var a in l)Ga(e.prototype,"_props",a)}function gt(e){var l=e.options.computed;for(var a in l)lt(e.prototype,a,l[a])}function _t(e){L.forEach(function(l){e[l]=function(e,a){return a?("component"===l&&b(a)&&(a.name=a.name||e,a=this.options._base.extend(a)),"directive"===l&&"function"===typeof a&&(a={bind:a,update:a}),this.options[l+"s"][e]=a,a):this.options[l+"s"][e]}})}function mt(e){return e&&(e.Ctor.options.name||e.tag)}function wt(e,l){return Array.isArray(e)?e.indexOf(l)>-1:"string"===typeof e?e.split(",").indexOf(l)>-1:!!s(e)&&e.test(l)}function kt(e,l){var a=e.cache,t=e.keys,u=e._vnode;for(var n in a){var r=a[n];if(r){var v=mt(r.componentOptions);v&&!l(v)&&At(a,n,t,u)}}}function At(e,l,a,t){var u=e[l];!u||t&&u.tag===t.tag||u.componentInstance.$destroy(),e[l]=null,g(a,l)}it(ft),vt(ft),wa(ft),$a(ft),ba(ft);var xt=[String,RegExp,Array],$t={name:"keep-alive",abstract:!0,props:{include:xt,exclude:xt,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)At(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(l){kt(e,function(e){return wt(l,e)})}),this.$watch("exclude",function(l){kt(e,function(e){return!wt(l,e)})})},render:function(){var e=this.$slots.default,l=ha(e),a=l&&l.componentOptions;if(a){var t=mt(a),u=this,n=u.include,r=u.exclude;if(n&&(!t||!wt(n,t))||r&&t&&wt(r,t))return l;var v=this,o=v.cache,i=v.keys,b=null==l.key?a.Ctor.cid+(a.tag?"::"+a.tag:""):l.key;o[b]?(l.componentInstance=o[b].componentInstance,g(i,b),i.push(b)):(o[b]=l,i.push(b),this.max&&i.length>parseInt(this.max)&&At(o,i[0],i,this._vnode)),l.data.keepAlive=!0}return l||e&&e[0]}},Ot={KeepAlive:$t};function St(e){var l={get:function(){return U}};Object.defineProperty(e,"config",l),e.util={warn:ie,extend:B,mergeOptions:Fe,defineReactive:Ce},e.set=je,e.delete=Be,e.nextTick=ol,e.observable=function(e){return Te(e),e},e.options=Object.create(null),L.forEach(function(l){e.options[l+"s"]=Object.create(null)}),e.options._base=e,B(e.options.components,Ot),pt(e),ht(e),dt(e),_t(e)}St(ft),Object.defineProperty(ft.prototype,"$isServer",{get:ue}),Object.defineProperty(ft.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(ft,"FunctionalRenderContext",{value:Hl}),ft.version="2.6.10";var Tt="[object Array]",Ct="[object Object]";function jt(e,l){var a={};return Bt(e,l),Et(e,l,"",a),a}function Bt(e,l){if(e!==l){var a=Pt(e),t=Pt(l);if(a==Ct&&t==Ct){if(Object.keys(e).length>=Object.keys(l).length)for(var u in l){var n=e[u];void 0===n?e[u]=null:Bt(n,l[u])}}else a==Tt&&t==Tt&&e.length>=l.length&&l.forEach(function(l,a){Bt(e[a],l)})}}function Et(e,l,a,t){if(e!==l){var u=Pt(e),n=Pt(l);if(u==Ct)if(n!=Ct||Object.keys(e).length<Object.keys(l).length)Dt(t,a,e);else{var r=function(u){var n=e[u],r=l[u],v=Pt(n),o=Pt(r);if(v!=Tt&&v!=Ct)n!=l[u]&&Dt(t,(""==a?"":a+".")+u,n);else if(v==Tt)o!=Tt?Dt(t,(""==a?"":a+".")+u,n):n.length<r.length?Dt(t,(""==a?"":a+".")+u,n):n.forEach(function(e,l){Et(e,r[l],(""==a?"":a+".")+u+"["+l+"]",t)});else if(v==Ct)if(o!=Ct||Object.keys(n).length<Object.keys(r).length)Dt(t,(""==a?"":a+".")+u,n);else for(var i in n)Et(n[i],r[i],(""==a?"":a+".")+u+"."+i,t)};for(var v in e)r(v)}else u==Tt?n!=Tt?Dt(t,a,e):e.length<l.length?Dt(t,a,e):e.forEach(function(e,u){Et(e,l[u],a+"["+u+"]",t)}):Dt(t,a,e)}}function Dt(e,l,a){e[l]=a}function Pt(e){return Object.prototype.toString.call(e)}function Nt(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var l=e.$scope;console.log("["+ +new Date+"]["+(l.is||l.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var a=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var t=0;t<a.length;t++)a[t]()}}function Rt(e){return Ba.find(function(l){return e._watcher===l})}function It(e,l){if(!e.__next_tick_pending&&!Rt(e)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var a=e.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+e._uid+"]:nextVueTick")}return ol(l,e)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var t=e.$scope;console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+e._uid+"]:nextMPTick")}var u;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(l)try{l.call(e)}catch(eu){Xe(eu,e,"nextTick")}else u&&u(e)}),!l&&"undefined"!==typeof Promise)return new Promise(function(e){u=e})}function Mt(e){var l=Object.create(null),a=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{}));return a.reduce(function(l,a){return l[a]=e[a],l},l),Object.assign(l,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(l["name"]=e.name,l["value"]=e.value),JSON.parse(JSON.stringify(l))}var Lt=function(e,l){var a=this;if(null!==l&&("page"===this.mpType||"component"===this.mpType)){var t=this.$scope,u=Object.create(null);try{u=Mt(this)}catch(v){console.error(v)}u.__webviewId__=t.data.__webviewId__;var n=Object.create(null);Object.keys(u).forEach(function(e){n[e]=t.data[e]});var r=jt(u,n);Object.keys(r).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+this._uid+"]差量更新",JSON.stringify(r)),this.__next_tick_pending=!0,t.setData(r,function(){a.__next_tick_pending=!1,Nt(a)})):Nt(this)}};function qt(){}function Ut(e,l,a){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=qt),e.$options.render||(e.$options.render=qt),"mp-toutiao"!==e.mpHost&&ja(e,"beforeMount");var t=function(){e._update(e._render(),a)};return new Wa(e,t,D,{before:function(){e._isMounted&&!e._isDestroyed&&ja(e,"beforeUpdate")}},!0),a=!1,e}function Vt(e,l){return u(e)||u(l)?Ft(e,Ht(l)):""}function Ft(e,l){return e?l?e+" "+l:e:l||""}function Ht(e){return Array.isArray(e)?zt(e):o(e)?Wt(e):"string"===typeof e?e:""}function zt(e){for(var l,a="",t=0,n=e.length;t<n;t++)u(l=Ht(e[t]))&&""!==l&&(a&&(a+=" "),a+=l);return a}function Wt(e){var l="";for(var a in e)e[a]&&(l&&(l+=" "),l+=a);return l}var Jt=w(function(e){var l={},a=/;(?![^(]*\))/g,t=/:(.+)/;return e.split(a).forEach(function(e){if(e){var a=e.split(t);a.length>1&&(l[a[0].trim()]=a[1].trim())}}),l});function Gt(e){return Array.isArray(e)?E(e):"string"===typeof e?Jt(e):e}var Kt=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Xt(e,l){var a=l.split("."),t=a[0];return 0===t.indexOf("__$n")&&(t=parseInt(t.replace("__$n",""))),1===a.length?e[t]:Xt(e[t],a.slice(1).join("."))}function Yt(e){e.config.errorHandler=function(e){console.error(e)};var l=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:j(arguments,1)}),l.apply(this,arguments)},e.prototype.$nextTick=function(e){return It(this,e)},Kt.forEach(function(l){e.prototype[l]=function(e){if(this.$scope)return this.$scope[l](e)}}),e.prototype.__init_provide=wl,e.prototype.__init_injections=kl,e.prototype.__call_hook=function(e,l){var a=this;ce();var t,u=a.$options[e],n=e+" hook";if(u)for(var r=0,v=u.length;r<v;r++)t=Ye(u[r],a,l?[l]:null,a,n);return a._hasHookEvent&&a.$emit("hook:"+e),fe(),t},e.prototype.__set_model=function(e,l,a,t){Array.isArray(t)&&(-1!==t.indexOf("trim")&&(a=a.trim()),-1!==t.indexOf("number")&&(a=this._n(a))),e||(e=this),e[l]=a},e.prototype.__set_sync=function(e,l,a){e||(e=this),e[l]=a},e.prototype.__get_orig=function(e){return b(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,l){return Xt(l||this,e)},e.prototype.__get_class=function(e,l){return Vt(l,e)},e.prototype.__get_style=function(e,l){if(!e&&!l)return"";var a=Gt(e),t=l?B(l,a):a;return Object.keys(t).map(function(e){return O(e)+":"+t[e]}).join(";")},e.prototype.__map=function(e,l){var a,t,u,n,r;if(Array.isArray(e)){for(a=new Array(e.length),t=0,u=e.length;t<u;t++)a[t]=l(e[t],t);return a}if(o(e)){for(n=Object.keys(e),a=Object.create(null),t=0,u=n.length;t<u;t++)r=n[t],a[r]=l(e[r],r,t);return a}return[]}}var Zt=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function Qt(e){var l=e.extend;e.extend=function(e){e=e||{};var a=e.methods;return a&&Object.keys(a).forEach(function(l){-1!==Zt.indexOf(l)&&(e[l]=a[l],delete a[l])}),l.call(this,e)};var a=e.config.optionMergeStrategies,t=a.created;Zt.forEach(function(e){a[e]=t}),e.prototype.__lifecycle_hooks__=Zt}ft.prototype.__patch__=Lt,ft.prototype.$mount=function(e,l){return Ut(this,e,l)},Qt(ft),Yt(ft),l["default"]=ft}.call(this,a("c8ba"))},"6c91":function(e,l,a){"use strict";function t(e){this.key=e.key,this.requestConfig={key:e.key,s:"rsx",platform:"WXJS",appname:e.key,sdkversion:"1.2.0",logversion:"2.0"}}t.prototype.getWxLocation=function(e,l){wx.getLocation({type:"gcj02",success:function(e){var a=e.longitude+","+e.latitude;wx.setStorage({key:"userLocation",data:a}),l(a)},fail:function(a){wx.getStorage({key:"userLocation",success:function(e){e.data&&l(e.data)}}),e.fail({errCode:"0",errMsg:a.errMsg||""})}})},t.prototype.getRegeo=function(e){function l(l){var t=a.requestConfig;wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:a.key,location:l,extensions:"all",s:t.s,platform:t.platform,appname:a.key,sdkversion:t.sdkversion,logversion:t.logversion},method:"GET",header:{"content-type":"application/json"},success:function(a){var t,u,n,r,v,o,i,b,s;a.data.status&&"1"==a.data.status?(t=a.data.regeocode,u=t.addressComponent,n=[],r="",t&&t.roads[0]&&t.roads[0].name&&(r=t.roads[0].name+"附近"),v=l.split(",")[0],o=l.split(",")[1],t.pois&&t.pois[0]&&(r=t.pois[0].name+"附近",i=t.pois[0].location,i&&(v=parseFloat(i.split(",")[0]),o=parseFloat(i.split(",")[1]))),u.provice&&n.push(u.provice),u.city&&n.push(u.city),u.district&&n.push(u.district),u.streetNumber&&u.streetNumber.street&&u.streetNumber.number?(n.push(u.streetNumber.street),n.push(u.streetNumber.number)):(b="",t&&t.roads[0]&&t.roads[0].name&&(b=t.roads[0].name),n.push(b)),n=n.join(""),s=[{iconPath:e.iconPath,width:e.iconWidth,height:e.iconHeight,name:n,desc:r,longitude:v,latitude:o,id:0,regeocodeData:t}],e.success(s)):e.fail({errCode:a.data.infocode,errMsg:a.data.info})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})}var a=this;e.location?l(e.location):a.getWxLocation(e,function(e){l(e)})},t.prototype.getWeather=function(e){function l(l){var a="base";e.type&&"forecast"==e.type&&(a="all"),wx.request({url:"https://restapi.amap.com/v3/weather/weatherInfo",data:{key:t.key,city:l,extensions:a,s:u.s,platform:u.platform,appname:t.key,sdkversion:u.sdkversion,logversion:u.logversion},method:"GET",header:{"content-type":"application/json"},success:function(l){function a(e){var l={city:{text:"城市",data:e.city},weather:{text:"天气",data:e.weather},temperature:{text:"温度",data:e.temperature},winddirection:{text:"风向",data:e.winddirection+"风"},windpower:{text:"风力",data:e.windpower+"级"},humidity:{text:"湿度",data:e.humidity+"%"}};return l}var t,u;l.data.status&&"1"==l.data.status?l.data.lives?(t=l.data.lives,t&&t.length>0&&(t=t[0],u=a(t),u["liveData"]=t,e.success(u))):l.data.forecasts&&l.data.forecasts[0]&&e.success({forecast:l.data.forecasts[0]}):e.fail({errCode:l.data.infocode,errMsg:l.data.info})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})}function a(a){wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:t.key,location:a,extensions:"all",s:u.s,platform:u.platform,appname:t.key,sdkversion:u.sdkversion,logversion:u.logversion},method:"GET",header:{"content-type":"application/json"},success:function(a){var t,u;a.data.status&&"1"==a.data.status?(u=a.data.regeocode,u.addressComponent?t=u.addressComponent.adcode:u.aois&&u.aois.length>0&&(t=u.aois[0].adcode),l(t)):e.fail({errCode:a.data.infocode,errMsg:a.data.info})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})}var t=this,u=t.requestConfig;e.city?l(e.city):t.getWxLocation(e,function(e){a(e)})},t.prototype.getPoiAround=function(e){function l(l){var u={key:a.key,location:l,s:t.s,platform:t.platform,appname:a.key,sdkversion:t.sdkversion,logversion:t.logversion};e.querytypes&&(u["types"]=e.querytypes),e.querykeywords&&(u["keywords"]=e.querykeywords),wx.request({url:"https://restapi.amap.com/v3/place/around",data:u,method:"GET",header:{"content-type":"application/json"},success:function(l){var a,t,u,n;if(l.data.status&&"1"==l.data.status){if(l=l.data,l&&l.pois){for(a=[],t=0;t<l.pois.length;t++)u=0==t?e.iconPathSelected:e.iconPath,a.push({latitude:parseFloat(l.pois[t].location.split(",")[1]),longitude:parseFloat(l.pois[t].location.split(",")[0]),iconPath:u,width:22,height:32,id:t,name:l.pois[t].name,address:l.pois[t].address});n={markers:a,poisData:l.pois},e.success(n)}}else e.fail({errCode:l.data.infocode,errMsg:l.data.info})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})}var a=this,t=a.requestConfig;e.location?l(e.location):a.getWxLocation(e,function(e){l(e)})},t.prototype.getStaticmap=function(e){function l(l){u.push("location="+l),e.zoom&&u.push("zoom="+e.zoom),e.size&&u.push("size="+e.size),e.scale&&u.push("scale="+e.scale),e.markers&&u.push("markers="+e.markers),e.labels&&u.push("labels="+e.labels),e.paths&&u.push("paths="+e.paths),e.traffic&&u.push("traffic="+e.traffic);var a=n+u.join("&");e.success({url:a})}var a,t=this,u=[],n="https://restapi.amap.com/v3/staticmap?";u.push("key="+t.key),a=t.requestConfig,u.push("s="+a.s),u.push("platform="+a.platform),u.push("appname="+a.appname),u.push("sdkversion="+a.sdkversion),u.push("logversion="+a.logversion),e.location?l(e.location):t.getWxLocation(e,function(e){l(e)})},t.prototype.getInputtips=function(e){var l=this,a=l.requestConfig,t={key:l.key,s:a.s,platform:a.platform,appname:l.key,sdkversion:a.sdkversion,logversion:a.logversion};e.location&&(t["location"]=e.location),e.keywords&&(t["keywords"]=e.keywords),e.type&&(t["type"]=e.type),e.city&&(t["city"]=e.city),e.citylimit&&(t["citylimit"]=e.citylimit),wx.request({url:"https://restapi.amap.com/v3/assistant/inputtips",data:t,method:"GET",header:{"content-type":"application/json"},success:function(l){l&&l.data&&l.data.tips&&e.success({tips:l.data.tips})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})},t.prototype.getDrivingRoute=function(e){var l=this,a=l.requestConfig,t={key:l.key,s:a.s,platform:a.platform,appname:l.key,sdkversion:a.sdkversion,logversion:a.logversion};e.origin&&(t["origin"]=e.origin),e.destination&&(t["destination"]=e.destination),e.strategy&&(t["strategy"]=e.strategy),e.waypoints&&(t["waypoints"]=e.waypoints),e.avoidpolygons&&(t["avoidpolygons"]=e.avoidpolygons),e.avoidroad&&(t["avoidroad"]=e.avoidroad),wx.request({url:"https://restapi.amap.com/v3/direction/driving",data:t,method:"GET",header:{"content-type":"application/json"},success:function(l){l&&l.data&&l.data.route&&e.success({paths:l.data.route.paths,taxi_cost:l.data.route.taxi_cost||""})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})},t.prototype.getWalkingRoute=function(e){var l=this,a=l.requestConfig,t={key:l.key,s:a.s,platform:a.platform,appname:l.key,sdkversion:a.sdkversion,logversion:a.logversion};e.origin&&(t["origin"]=e.origin),e.destination&&(t["destination"]=e.destination),wx.request({url:"https://restapi.amap.com/v3/direction/walking",data:t,method:"GET",header:{"content-type":"application/json"},success:function(l){l&&l.data&&l.data.route&&e.success({paths:l.data.route.paths})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})},t.prototype.getTransitRoute=function(e){var l=this,a=l.requestConfig,t={key:l.key,s:a.s,platform:a.platform,appname:l.key,sdkversion:a.sdkversion,logversion:a.logversion};e.origin&&(t["origin"]=e.origin),e.destination&&(t["destination"]=e.destination),e.strategy&&(t["strategy"]=e.strategy),e.city&&(t["city"]=e.city),e.cityd&&(t["cityd"]=e.cityd),wx.request({url:"https://restapi.amap.com/v3/direction/transit/integrated",data:t,method:"GET",header:{"content-type":"application/json"},success:function(l){if(l&&l.data&&l.data.route){var a=l.data.route;e.success({distance:a.distance||"",taxi_cost:a.taxi_cost||"",transits:a.transits})}},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})},t.prototype.getRidingRoute=function(e){var l=this,a=l.requestConfig,t={key:l.key,s:a.s,platform:a.platform,appname:l.key,sdkversion:a.sdkversion,logversion:a.logversion};e.origin&&(t["origin"]=e.origin),e.destination&&(t["destination"]=e.destination),wx.request({url:"https://restapi.amap.com/v4/direction/bicycling",data:t,method:"GET",header:{"content-type":"application/json"},success:function(l){l&&l.data&&l.data.data&&e.success({paths:l.data.data.paths})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})},e.exports.AMapWX=t},"6e42":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.createApp=pl,l.createComponent=xl,l.createPage=Al,l.default=void 0;var t=u(a("66fd"));function u(e){return e&&e.__esModule?e:{default:e}}function n(e,l){return o(e)||v(e,l)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function v(e,l){var a=[],t=!0,u=!1,n=void 0;try{for(var r,v=e[Symbol.iterator]();!(t=(r=v.next()).done);t=!0)if(a.push(r.value),l&&a.length===l)break}catch(o){u=!0,n=o}finally{try{t||null==v["return"]||v["return"]()}finally{if(u)throw n}}return a}function o(e){if(Array.isArray(e))return e}function i(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function b(e){return f(e)||c(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function f(e){if(Array.isArray(e)){for(var l=0,a=new Array(e.length);l<e.length;l++)a[l]=e[l];return a}}var p=Object.prototype.toString,h=Object.prototype.hasOwnProperty;function d(e){return"function"===typeof e}function y(e){return"string"===typeof e}function g(e){return"[object Object]"===p.call(e)}function _(e,l){return h.call(e,l)}function m(){}function w(e){var l=Object.create(null);return function(a){var t=l[a];return t||(l[a]=e(a))}}var k=/-(\w)/g,A=w(function(e){return e.replace(k,function(e,l){return l?l.toUpperCase():""})}),x=["invoke","success","fail","complete","returnValue"],$={},O={};function S(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?T(a):a}function T(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function C(e,l){var a=e.indexOf(l);-1!==a&&e.splice(a,1)}function j(e,l){Object.keys(l).forEach(function(a){-1!==x.indexOf(a)&&d(l[a])&&(e[a]=S(e[a],l[a]))})}function B(e,l){e&&l&&Object.keys(l).forEach(function(a){-1!==x.indexOf(a)&&d(l[a])&&C(e[a],l[a])})}function E(e,l){"string"===typeof e&&g(l)?j(O[e]||(O[e]={}),l):g(e)&&j($,e)}function D(e,l){"string"===typeof e?g(l)?B(O[e],l):delete O[e]:g(e)&&B($,e)}function P(e){return function(l){return e(l)||l}}function N(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}function R(e,l){for(var a=!1,t=0;t<e.length;t++){var u=e[t];if(a)a=Promise.then(P(u));else{var n=u(l);if(N(n)&&(a=Promise.resolve(n)),!1===n)return{then:function(){}}}}return a||{then:function(e){return e(l)}}}function I(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(a){if(Array.isArray(e[a])){var t=l[a];l[a]=function(l){R(e[a],l).then(function(e){return d(t)&&t(e)||e})}}}),l}function M(e,l){var a=[];Array.isArray($.returnValue)&&a.push.apply(a,b($.returnValue));var t=O[e];return t&&Array.isArray(t.returnValue)&&a.push.apply(a,b(t.returnValue)),a.forEach(function(e){l=e(l)||l}),l}function L(e){var l=Object.create(null);Object.keys($).forEach(function(e){"returnValue"!==e&&(l[e]=$[e].slice())});var a=O[e];return a&&Object.keys(a).forEach(function(e){"returnValue"!==e&&(l[e]=(l[e]||[]).concat(a[e]))}),l}function q(e,l,a){for(var t=arguments.length,u=new Array(t>3?t-3:0),n=3;n<t;n++)u[n-3]=arguments[n];var r=L(e);if(r&&Object.keys(r).length){if(Array.isArray(r.invoke)){var v=R(r.invoke,a);return v.then(function(e){return l.apply(void 0,[I(r,e)].concat(u))})}return l.apply(void 0,[I(r,a)].concat(u))}return l.apply(void 0,[a].concat(u))}var U={returnValue:function(e){return N(e)?e.then(function(e){return e[1]}).catch(function(e){return e[0]}):e}},V=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,F=/^create|Manager$/,H=/^on/;function z(e){return F.test(e)}function W(e){return V.test(e)}function J(e){return H.test(e)}function G(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function K(e){return!(z(e)||W(e)||J(e))}function X(e,l){return K(e)?function(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,u=new Array(t>1?t-1:0),n=1;n<t;n++)u[n-1]=arguments[n];return d(a.success)||d(a.fail)||d(a.complete)?M(e,q.apply(void 0,[e,l,a].concat(u))):M(e,G(new Promise(function(t,n){q.apply(void 0,[e,l,Object.assign({},a,{success:t,fail:n})].concat(u)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var l=this.constructor;return this.then(function(a){return l.resolve(e()).then(function(){return a})},function(a){return l.resolve(e()).then(function(){throw a})})})})))}:l}var Y=1e-4,Z=750,Q=!1,ee=0,le=0;function ae(){var e=wx.getSystemInfoSync(),l=e.platform,a=e.pixelRatio,t=e.windowWidth;ee=t,le=a,Q="ios"===l}function te(e,l){if(0===ee&&ae(),e=Number(e),0===e)return 0;var a=e/Z*(l||ee);return a<0&&(a=-a),a=Math.floor(a+Y),0===a?1!==le&&Q?.5:1:e<0?-a:a}var ue={promiseInterceptor:U},ne=Object.freeze({upx2px:te,interceptors:ue,addInterceptor:E,removeInterceptor:D}),re={},ve=[],oe=[],ie=["success","fail","cancel","complete"];function be(e,l,a){return function(t){return l(ce(e,t,a))}}function se(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(g(l)){var n=!0===u?l:{};for(var r in d(a)&&(a=a(l,n)||{}),l)if(_(a,r)){var v=a[r];d(v)&&(v=v(l[r],l,n)),v?y(v)?n[v]=l[r]:g(v)&&(n[v.name?v.name:r]=v.value):console.warn("app-plus ".concat(e,"暂不支持").concat(r))}else-1!==ie.indexOf(r)?n[r]=be(e,l[r],t):u||(n[r]=l[r]);return n}return d(l)&&(l=be(e,l,t)),l}function ce(e,l,a){var t=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return d(re.returnValue)&&(l=re.returnValue(e,l)),se(e,l,a,{},t)}function fe(e,l){if(_(re,e)){var a=re[e];return a?function(l,t){var u=a;d(a)&&(u=a(l)),l=se(e,l,u.args,u.returnValue);var n=[l];"undefined"!==typeof t&&n.push(t);var r=wx[u.name||e].apply(wx,n);return W(e)?ce(e,r,u.returnValue,z(e)):r}:function(){console.error("app-plus 暂不支持".concat(e))}}return l}var pe=Object.create(null),he=["subscribePush","unsubscribePush","onPush","offPush","share"];function de(e){return function(l){var a=l.fail,t=l.complete,u={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};d(a)&&a(u),d(t)&&t(u)}}he.forEach(function(e){pe[e]=de(e)});var ye=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return e||(e=new t.default),e};var e}();function ge(e,l,a){return e[l].apply(e,a)}function _e(){return ge(ye(),"$on",Array.prototype.slice.call(arguments))}function me(){return ge(ye(),"$off",Array.prototype.slice.call(arguments))}function we(){return ge(ye(),"$once",Array.prototype.slice.call(arguments))}function ke(){return ge(ye(),"$emit",Array.prototype.slice.call(arguments))}var Ae=Object.freeze({$on:_e,$off:me,$once:we,$emit:ke});function xe(e){e.$processed=!0,e.postMessage=function(l){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:l},e.id)};var l=[];if(e.onMessage=function(e){l.push(e)},e.$consumeMessage=function(e){l.forEach(function(l){return l(e)})},e.__uniapp_mask_id){var a=e.__uniapp_mask,t=plus.webview.getWebviewById(e.__uniapp_mask_id);t=t.parent()||t;var u=e.show,n=e.hide,r=e.close,v=function(){t.setStyle({mask:a})},o=function(){t.setStyle({mask:"none"})};e.show=function(){v();for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];return u.apply(e,a)},e.hide=function(){o();for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];return n.apply(e,a)},e.close=function(){o(),l=[];for(var a=arguments.length,t=new Array(a),u=0;u<a;u++)t[u]=arguments[u];return r.apply(e,t)}}}function $e(e){var l=plus.webview.getWebviewById(e);return l&&!l.$processed&&xe(l),l}function Oe(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}var Se=Object.freeze({requireNativePlugin:Oe,getSubNVueById:$e}),Te=Page,Ce=Component,je=/:/g,Be=w(function(e){return A(e.replace(je,"-"))});function Ee(e){if(wx.canIUse("nextTick")){var l=e.triggerEvent;e.triggerEvent=function(a){for(var t=arguments.length,u=new Array(t>1?t-1:0),n=1;n<t;n++)u[n-1]=arguments[n];return l.apply(e,[Be(a)].concat(u))}}}function De(e,l){var a=l[e];l[e]=a?function(){Ee(this);for(var e=arguments.length,l=new Array(e),t=0;t<e;t++)l[t]=arguments[t];return a.apply(this,l)}:function(){Ee(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return De("onLoad",e),Te(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return De("created",e),Ce(e)};var Pe=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Ne(e,l){var a=e.$mp[e.mpType];l.forEach(function(l){_(a,l)&&(e[l]=a[l])})}function Re(e,l){if(!l)return!0;if(t.default.options&&Array.isArray(t.default.options[e]))return!0;if(l=l.default||l,d(l))return!!d(l.extendOptions[e])||!!(l.super&&l.super.options&&Array.isArray(l.super.options[e]));if(d(l[e]))return!0;var a=l.mixins;return Array.isArray(a)?!!a.find(function(l){return Re(e,l)}):void 0}function Ie(e,l,a){l.forEach(function(l){Re(l,a)&&(e[l]=function(e){return this.$vm&&this.$vm.__call_hook(l,e)})})}function Me(e,l){var a;return l=l.default||l,d(l)?(a=l,l=a.extendOptions):a=e.extend(l),[a,l]}function Le(e,l){if(Array.isArray(l)&&l.length){var a=Object.create(null);l.forEach(function(e){a[e]=!0}),e.$scopedSlots=e.$slots=a}}function qe(e,l){e=(e||"").split(",");var a=e.length;1===a?l._$vueId=e[0]:2===a&&(l._$vueId=e[0],l._$vuePid=e[1])}function Ue(e,l){var a=e.data||{},t=e.methods||{};if("function"===typeof a)try{a=a.call(l)}catch(u){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",a)}else try{a=JSON.parse(JSON.stringify(a))}catch(u){}return g(a)||(a={}),Object.keys(t).forEach(function(e){-1!==l.__lifecycle_hooks__.indexOf(e)||_(a,e)||(a[e]=t[e])}),a}var Ve=[String,Number,Boolean,Object,Array,null];function Fe(e){return function(l,a){this.$vm&&(this.$vm[e]=l)}}function He(e,l){var a=e["behaviors"],t=e["extends"],u=e["mixins"],n=e["props"];n||(e["props"]=n=[]);var r=[];return Array.isArray(a)&&a.forEach(function(e){r.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(n)?(n.push("name"),n.push("value")):(n["name"]={type:String,default:""},n["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),g(t)&&t.props&&r.push(l({properties:We(t.props,!0)})),Array.isArray(u)&&u.forEach(function(e){g(e)&&e.props&&r.push(l({properties:We(e.props,!0)}))}),r}function ze(e,l,a,t){return Array.isArray(l)&&1===l.length?l[0]:l}function We(e){var l=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return l||(a.vueId={type:String,value:""},a.vueSlots={type:null,value:[],observer:function(e,l){var a=Object.create(null);e.forEach(function(e){a[e]=!0}),this.setData({$slots:a})}}),Array.isArray(e)?e.forEach(function(e){a[e]={type:null,observer:Fe(e)}}):g(e)&&Object.keys(e).forEach(function(l){var t=e[l];if(g(t)){var u=t["default"];d(u)&&(u=u()),t.type=ze(l,t.type),a[l]={type:-1!==Ve.indexOf(t.type)?t.type:null,value:u,observer:Fe(l)}}else{var n=ze(l,t);a[l]={type:-1!==Ve.indexOf(n)?n:null,observer:Fe(l)}}}),a}function Je(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(l){}return e.stopPropagation=m,e.preventDefault=m,e.target=e.target||{},_(e,"detail")||(e.detail={}),g(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function Ge(e,l){var a=e;return l.forEach(function(l){var t=l[0],u=l[2];if(t||"undefined"!==typeof u){var n=l[1],r=l[3],v=t?e.__get_value(t,a):a;Number.isInteger(v)?a=u:n?Array.isArray(v)?a=v.find(function(l){return e.__get_value(n,l)===u}):g(v)?a=Object.keys(v).find(function(l){return e.__get_value(n,v[l])===u}):console.error("v-for 暂不支持循环数据：",v):a=v[u],r&&(a=e.__get_value(r,a))}}),a}function Ke(e,l,a){var t={};return Array.isArray(l)&&l.length&&l.forEach(function(l,u){"string"===typeof l?l?"$event"===l?t["$"+u]=a:0===l.indexOf("$event.")?t["$"+u]=e.__get_value(l.replace("$event.",""),a):t["$"+u]=e.__get_value(l):t["$"+u]=e:t["$"+u]=Ge(e,l)}),t}function Xe(e){for(var l={},a=1;a<e.length;a++){var t=e[a];l[t[0]]=t[1]}return l}function Ye(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],u=arguments.length>4?arguments[4]:void 0,n=arguments.length>5?arguments[5]:void 0,r=!1;if(u&&(r=l.currentTarget&&l.currentTarget.dataset&&"wx"===l.currentTarget.dataset.comType,!a.length))return r?[l]:l.detail.__args__||l.detail;var v=Ke(e,t,l),o=[];return a.forEach(function(e){"$event"===e?"__set_model"!==n||u?u&&!r?o.push(l.detail.__args__[0]):o.push(l):o.push(l.target.value):Array.isArray(e)&&"o"===e[0]?o.push(Xe(e)):"string"===typeof e&&_(v,e)?o.push(v[e]):o.push(e)}),o}var Ze="~",Qe="^";function el(e,l){return e===l||"regionchange"===l&&("begin"===e||"end"===e)}function ll(e){var l=this;e=Je(e);var a=(e.currentTarget||e.target).dataset;if(!a)return console.warn("事件信息不存在");var t=a.eventOpts||a["event-opts"];if(!t)return console.warn("事件信息不存在");var u=e.type,n=[];return t.forEach(function(a){var t=a[0],r=a[1],v=t.charAt(0)===Qe;t=v?t.slice(1):t;var o=t.charAt(0)===Ze;t=o?t.slice(1):t,r&&el(u,t)&&r.forEach(function(a){var t=a[0];if(t){var u=l.$vm;u.$options.generic&&u.$parent&&u.$parent.$parent&&(u=u.$parent.$parent);var r=u[t];if(!d(r))throw new Error(" _vm.".concat(t," is not a function"));if(o){if(r.once)return;r.once=!0}n.push(r.apply(u,Ye(l.$vm,e,a[1],a[2],v,t)))}})}),"input"===u&&1===n.length&&"undefined"!==typeof n[0]?n[0]:void 0}var al=["onShow","onHide","onError","onPageNotFound"];function tl(e,l){var a=l.mocks,u=l.initRefs;e.$options.store&&(t.default.prototype.$store=e.$options.store),t.default.prototype.mpHost="app-plus",t.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=i({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(u(this),Ne(this,a)))}});var n={onLaunch:function(l){this.$vm||(this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",l),this.$vm.__call_hook("onLaunch",l))}};return n.globalData=e.$options.globalData||{},Ie(n,al),n}var ul=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function nl(e,l){var a=e.$children,t=a.find(function(e){return e.$scope._$vueId===l});if(t)return t;for(var u=a.length-1;u>=0;u--)if(t=nl(a[u],l),t)return t}function rl(e){return Behavior(e)}function vl(){return!!this.route}function ol(e){this.triggerEvent("__l",e)}function il(e){var l=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},a=l.selectAllComponents(".vue-ref");a.forEach(function(l){var a=l.dataset.ref;e[a]=l.$vm||l});var t=l.selectAllComponents(".vue-ref-in-for");return t.forEach(function(l){var a=l.dataset.ref;e[a]||(e[a]=[]),e[a].push(l.$vm||l)}),e}})}function bl(e){var l,a=e.detail||e.value,t=a.vuePid,u=a.vueOptions;t&&(l=nl(this.$vm,t)),l||(l=this.$vm),u.parent=l}function sl(e){return tl(e,{mocks:ul,initRefs:il})}var cl=["onUniNViewMessage"];function fl(e){var l=sl(e);return Ie(l,cl),l}function pl(e){return App(fl(e)),e}function hl(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=l.isPage,u=l.initRelation,r=Me(t.default,e),v=n(r,2),o=v[0],i=v[1],b={options:{multipleSlots:!0,addGlobalClass:!0},data:Ue(i,t.default.prototype),behaviors:He(i,rl),properties:We(i.props,!1,i.__file),lifetimes:{attached:function(){var e=this.properties,l={mpType:a.call(this)?"page":"component",mpInstance:this,propsData:e};qe(e.vueId,this),u.call(this,{vuePid:this._$vuePid,vueOptions:l}),this.$vm=new o(l),Le(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:bl,__e:ll}};return Array.isArray(i.wxsCallMethods)&&i.wxsCallMethods.forEach(function(e){b.methods[e]=function(l){return this.$vm[e](l)}}),a?b:[b,o]}function dl(e){return hl(e,{isPage:vl,initRelation:ol})}function yl(e){var l=dl(e);return l.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},l}var gl=["onShow","onHide","onUnload"];function _l(e,l){l.isPage,l.initRelation;var a=yl(e);return Ie(a.methods,gl,e),a.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},a}function ml(e){return _l(e,{isPage:vl,initRelation:ol})}gl.push.apply(gl,Pe);var wl=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function kl(e){var l=ml(e);return Ie(l.methods,wl),l}function Al(e){return Component(kl(e))}function xl(e){return Component(yl(e))}ve.forEach(function(e){re[e]=!1}),oe.forEach(function(e){var l=re[e]&&re[e].name?re[e].name:e;wx.canIUse(l)||(re[e]=!1)});var $l={};Object.keys(ne).forEach(function(e){$l[e]=ne[e]}),Object.keys(Ae).forEach(function(e){$l[e]=Ae[e]}),Object.keys(Se).forEach(function(e){$l[e]=X(e,Se[e])}),Object.keys(wx).forEach(function(e){(_(wx,e)||_(re,e))&&($l[e]=X(e,fe(e,wx[e])))}),"undefined"!==typeof e&&(e.uni=$l,e.UniEmitter=Ae),wx.createApp=pl,wx.createPage=Al,wx.createComponent=xl;var Ol=$l,Sl=Ol;l.default=Sl}).call(this,a("c8ba"))},8189:function(e){e.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23320190923002",_inBundle:!1,_integrity:"sha512-MnftsvgOac3q1FCOBPzivbFn8GNQFo7D2DY325HeEZyFCWgx5GEwHpGYjT1PQU6v7DaDn0ruxa3ObdpUIYbmZw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23320190923002.tgz",_shasum:"0c400c140ca0b3c05f52d25f11583cf05a0c4e9a",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"fed4c73fb9142a1b277dd79313939cad90693d3e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23320190923002"}},"921b":function(e,l,a){"use strict";(function(e){var l=a("8189");function t(e,l){return!l||"object"!==typeof l&&"function"!==typeof l?u(e):l}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}function r(e,l){if("function"!==typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),l&&v(e,l)}function v(e,l){return v=Object.setPrototypeOf||function(e,l){return e.__proto__=l,e},v(e,l)}function o(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function i(e,l){for(var a=0;a<l.length;a++){var t=l[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function b(e,l,a){return l&&i(e.prototype,l),a&&i(e,a),e}var s=l.version,c="https://tongji.dcloud.io/uni/stat",f="https://tongji.dcloud.io/uni/stat.gif",p=1800,h=300,d=10,y="__DC_STAT_UUID",g="__DC_UUID_VALUE";function _(){var l="";if("n"===A()){try{l=plus.runtime.getDCloudId()}catch(a){l=""}return l}try{l=e.getStorageSync(y)}catch(a){l=g}if(!l){l=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(y,l)}catch(a){e.setStorageSync(y,g)}}return l}var m=function(e){var l=Object.keys(e),a=l.sort(),t={},u="";for(var n in a)t[a[n]]=e[a[n]],u+=a[n]+"="+e[a[n]]+"&";return{sign:"",options:u.substr(0,u.length-1)}},w=function(e){var l="";for(var a in e)l+=a+"="+e[a]+"&";return l.substr(0,l.length-1)},k=function(){return parseInt((new Date).getTime()/1e3)},A=function(){var e={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return e["app-plus"]},x=function(){var l="";return"wx"!==A()&&"qq"!==A()||(l=e.getAccountInfoSync().miniProgram.appId||""),l},$=function(){return"n"===A()?plus.runtime.version:""},O=function(){var e=A(),l="";return"n"===e&&(l=plus.runtime.channel),l},S=function(l){var a=A(),t="";return l||("wx"===a&&(t=e.getLaunchOptionsSync().scene),t)},T="First__Visit__Time",C="Last__Visit__Time",j=function(){var l=e.getStorageSync(T),a=0;return l?a=l:(a=k(),e.setStorageSync(T,a),e.removeStorageSync(C)),a},B=function(){var l=e.getStorageSync(C),a=0;return a=l||"",e.setStorageSync(C,k()),a},E="__page__residence__time",D=0,P=0,N=function(){return D=k(),"n"===A()&&e.setStorageSync(E,k()),D},R=function(){return P=k(),"n"===A()&&(D=e.getStorageSync(E)),P-D},I="Total__Visit__Count",M=function(){var l=e.getStorageSync(I),a=1;return l&&(a=l,a++),e.setStorageSync(I,a),a},L=function(e){var l={};for(var a in e)l[a]=encodeURIComponent(e[a]);return l},q=0,U=0,V=function(){var e=(new Date).getTime();return q=e,U=0,e},F=function(){var e=(new Date).getTime();return U=e,e},H=function(e){var l=0;if(0!==q&&(l=U-q),l=parseInt(l/1e3),l=l<1?1:l,"app"===e){var a=l>h;return{residenceTime:l,overtime:a}}if("page"===e){var t=l>p;return{residenceTime:l,overtime:t}}return{residenceTime:l}},z=function(){var e=getCurrentPages(),l=e[e.length-1],a=l.$vm;return"bd"===A()?a.$mp&&a.$mp.page.is:a.$scope&&a.$scope.route||a.$mp&&a.$mp.page.route},W=function(e){var l=getCurrentPages(),a=l[l.length-1],t=a.$vm,u=e._query,n=u&&"{}"!==JSON.stringify(u)?"?"+JSON.stringify(u):"";return e._query="","bd"===A()?t.$mp&&t.$mp.page.is+n:t.$scope&&t.$scope.route+n||t.$mp&&t.$mp.page.route+n},J=function(e){return!!("page"===e.mpType||e.$mp&&"page"===e.$mp.mpType||"page"===e.$options.mpType)},G=function(e,l){return e?"string"!==typeof e?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):e.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof l&&"object"!==typeof l?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof l&&l.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===e&&"string"!==typeof l?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},K=a("3f6d").default,X=a("9c16").default||a("9c16"),Y=e.getSystemInfoSync(),Z=function(){function l(){o(this,l),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:_(),ut:A(),mpn:x(),ak:X.appid,usv:s,v:$(),ch:O(),cn:"",pn:"",ct:"",t:k(),tt:"",p:"android"===Y.platform?"a":"i",brand:Y.brand||"",md:Y.model,sv:Y.system.replace(/(Android|iOS)\s/,""),mpsdk:Y.SDKVersion||"",mpv:Y.version||"",lang:Y.language,pr:Y.pixelRatio,ww:Y.windowWidth,wh:Y.windowHeight,sw:Y.screenWidth,sh:Y.screenHeight}}return b(l,[{key:"_applicationShow",value:function(){if(this.__licationHide){F();var e=H("app");if(e.overtime){var l={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(l)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(e,l){this.__licationHide=!0,F();var a=H();V();var t=W(this);this._sendHideRequest({urlref:t,urlref_ts:a.residenceTime},l)}},{key:"_pageShow",value:function(){var e=W(this),l=z();if(this._navigationBarTitle.config=K&&K.pages[l]&&K.pages[l].titleNView&&K.pages[l].titleNView.titleText||K&&K.pages[l]&&K.pages[l].navigationBarTitleText||"",this.__licationShow)return V(),this.__licationShow=!1,void(this._lastPageRoute=e);F(),this._lastPageRoute=e;var a=H("page");if(a.overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}V()}},{key:"_pageHide",value:function(){if(!this.__licationHide){F();var e=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:e.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(e){this._sendEventRequest({key:e},0)}},{key:"_sendReportRequest",value:function(e){this._navigationBarTitle.lt="1";var l=e.query&&"{}"!==JSON.stringify(e.query)?"?"+JSON.stringify(e.query):"";this.statData.lt="1",this.statData.url=e.path+l||"",this.statData.t=k(),this.statData.sc=S(e.scene),this.statData.fvts=j(),this.statData.lvts=B(),this.statData.tvc=M(),"n"===A()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(e){var l=e.url,a=e.urlref,t=e.urlref_ts;this._navigationBarTitle.lt="11";var u={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:l,tt:this.statData.tt,urlref:a,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:k(),p:this.statData.p};this.request(u)}},{key:"_sendHideRequest",value:function(e,l){var a=e.urlref,t=e.urlref_ts,u={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:a,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:k(),p:this.statData.p};this.request(u,l)}},{key:"_sendEventRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=e.key,a=void 0===l?"":l,t=e.value,u=void 0===t?"":t,n=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:n,ch:this.statData.ch,e_n:a,e_v:"object"===typeof u?JSON.stringify(u):u.toString(),usv:this.statData.usv,t:k(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var l=this;e.getNetworkType({success:function(e){l.statData.net=e.networkType,l.getLocation()}})}},{key:"getProperty",value:function(){var e=this;plus.runtime.getProperty(plus.runtime.appid,function(l){e.statData.v=l.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var l=this;X.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(l.statData.cn=e.address.country,l.statData.pn=e.address.province,l.statData.ct=e.address.city),l.statData.lat=e.latitude,l.statData.lng=e.longitude,l.request(l.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(l,a){var t=this,u=k(),n=this._navigationBarTitle;l.ttn=n.page,l.ttpj=n.config,l.ttc=n.report;var r=this._reportingRequestData;if("n"===A()&&(r=e.getStorageSync("__UNI__STAT__DATA")||{}),r[l.lt]||(r[l.lt]=[]),r[l.lt].push(l),"n"===A()&&e.setStorageSync("__UNI__STAT__DATA",r),!(R()<d)||a){var v=this._reportingRequestData;"n"===A()&&(v=e.getStorageSync("__UNI__STAT__DATA")),N();var o=[],i=[],b=[],c=function(e){var l=v[e];l.forEach(function(l){var a=w(l);0===e?o.push(a):3===e?b.push(a):i.push(a)})};for(var f in v)c(f);o.push.apply(o,i.concat(b));var p={usv:s,t:u,requests:JSON.stringify(o)};this._reportingRequestData={},"n"===A()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==l.ut?"n"!==A()||"a"!==this.statData.p?this._sendRequest(p):setTimeout(function(){t._sendRequest(p)},200):this.imageRequest(p)}}},{key:"_sendRequest",value:function(l){var a=this;e.request({url:c,method:"POST",data:l,success:function(){},fail:function(e){++a._retry<3&&setTimeout(function(){a._sendRequest(l)},1e3)}})}},{key:"imageRequest",value:function(e){var l=new Image,a=m(L(e)).options;l.src=f+"?"+a}},{key:"sendEvent",value:function(e,l){G(e,l)||("title"!==e?this._sendEventRequest({key:e,value:"object"===typeof l?JSON.stringify(l):l},1):this._navigationBarTitle.report=l)}}]),l}(),Q=function(l){function a(){var l;return o(this,a),l=t(this,n(a).call(this)),l.instance=null,"function"===typeof e.addInterceptor&&(l.addInterceptorInit(),l.interceptLogin(),l.interceptShare(!0),l.interceptRequestPayment()),l}return r(a,l),b(a,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new a),this.instance}}]),b(a,[{key:"addInterceptorInit",value:function(){var l=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){l._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var l=this;e.addInterceptor("login",{complete:function(){l._login()}})}},{key:"interceptShare",value:function(l){var a=this;l?e.addInterceptor("share",{success:function(){a._share()},fail:function(){a._share()}}):a._share()}},{key:"interceptRequestPayment",value:function(){var l=this;e.addInterceptor("requestPayment",{success:function(){l._payment("pay_success")},fail:function(){l._payment("pay_fail")}})}},{key:"report",value:function(e,l){this.self=l,N(),this.__licationShow=!0,this._sendReportRequest(e,!0)}},{key:"load",value:function(e,l){if(!l.$scope&&!l.$mp){var a=getCurrentPages();l.$scope=a[a.length-1]}this.self=l,this._query=e}},{key:"show",value:function(e){this.self=e,J(e)?this._pageShow(e):this._applicationShow(e)}},{key:"ready",value:function(e){}},{key:"hide",value:function(e){this.self=e,J(e)?this._pageHide(e):this._applicationHide(e,!0)}},{key:"error",value:function(e){this._platform;var l="";l=e.message?e.stack:JSON.stringify(e);var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:l,usv:this.statData.usv,t:k(),p:this.statData.p};this.request(a)}}]),a}(Z),ee=Q.getInstance(),le=!1,ae={onLaunch:function(e){ee.report(e,this)},onReady:function(){ee.ready(this)},onLoad:function(e){if(ee.load(e,this),this.$scope&&this.$scope.onShareAppMessage){var l=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(e){return ee.interceptShare(!1),l.call(this,e)}}},onShow:function(){le=!1,ee.show(this)},onHide:function(){le=!0,ee.hide(this)},onUnload:function(){le?le=!1:ee.hide(this)},onError:function(e){ee.error(e)}};function te(){var l=a("66fd");(l.default||l).mixin(ae),e.report=function(e,l){ee.sendEvent(e,l)}}te()}).call(this,a("6e42")["default"])},9574:function(e,l,a){"use strict";var t="http://4zlinkimgtest.oss-cn-beijing.aliyuncs.com/",u={uploadImageUrl:"".concat(t),AccessKeySecret:"zmOJcaqKJB5e4gqtLunHcNoMBTdDgp",OSSAccessKeyId:"LTAIPcJL9J5OZr2G",timeout:87600};e.exports=u},"96cf":function(e,l){!function(l){"use strict";var a,t=Object.prototype,u=t.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",v=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag",i="object"===typeof e,b=l.regeneratorRuntime;if(b)i&&(e.exports=b);else{b=l.regeneratorRuntime=i?e.exports:{},b.wrap=m;var s="suspendedStart",c="suspendedYield",f="executing",p="completed",h={},d={};d[r]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(E([])));g&&g!==t&&u.call(g,r)&&(d=g);var _=x.prototype=k.prototype=Object.create(d);A.prototype=_.constructor=x,x.constructor=A,x[o]=A.displayName="GeneratorFunction",b.isGeneratorFunction=function(e){var l="function"===typeof e&&e.constructor;return!!l&&(l===A||"GeneratorFunction"===(l.displayName||l.name))},b.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,o in e||(e[o]="GeneratorFunction")),e.prototype=Object.create(_),e},b.awrap=function(e){return{__await:e}},$(O.prototype),O.prototype[v]=function(){return this},b.AsyncIterator=O,b.async=function(e,l,a,t){var u=new O(m(e,l,a,t));return b.isGeneratorFunction(l)?u:u.next().then(function(e){return e.done?e.value:u.next()})},$(_),_[o]="Generator",_[r]=function(){return this},_.toString=function(){return"[object Generator]"},b.keys=function(e){var l=[];for(var a in e)l.push(a);return l.reverse(),function a(){while(l.length){var t=l.pop();if(t in e)return a.value=t,a.done=!1,a}return a.done=!0,a}},b.values=E,B.prototype={constructor:B,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(j),!e)for(var l in this)"t"===l.charAt(0)&&u.call(this,l)&&!isNaN(+l.slice(1))&&(this[l]=a)},stop:function(){this.done=!0;var e=this.tryEntries[0],l=e.completion;if("throw"===l.type)throw l.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var l=this;function t(t,u){return v.type="throw",v.arg=e,l.next=t,u&&(l.method="next",l.arg=a),!!u}for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n],v=r.completion;if("root"===r.tryLoc)return t("end");if(r.tryLoc<=this.prev){var o=u.call(r,"catchLoc"),i=u.call(r,"finallyLoc");if(o&&i){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);if(this.prev<r.finallyLoc)return t(r.finallyLoc)}else if(o){if(this.prev<r.catchLoc)return t(r.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return t(r.finallyLoc)}}}},abrupt:function(e,l){for(var a=this.tryEntries.length-1;a>=0;--a){var t=this.tryEntries[a];if(t.tryLoc<=this.prev&&u.call(t,"finallyLoc")&&this.prev<t.finallyLoc){var n=t;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=l&&l<=n.finallyLoc&&(n=null);var r=n?n.completion:{};return r.type=e,r.arg=l,n?(this.method="next",this.next=n.finallyLoc,h):this.complete(r)},complete:function(e,l){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&l&&(this.next=l),h},finish:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),j(a),h}},catch:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.tryLoc===e){var t=a.completion;if("throw"===t.type){var u=t.arg;j(a)}return u}}throw new Error("illegal catch attempt")},delegateYield:function(e,l,t){return this.delegate={iterator:E(e),resultName:l,nextLoc:t},"next"===this.method&&(this.arg=a),h}}}function m(e,l,a,t){var u=l&&l.prototype instanceof k?l:k,n=Object.create(u.prototype),r=new B(t||[]);return n._invoke=S(e,a,r),n}function w(e,l,a){try{return{type:"normal",arg:e.call(l,a)}}catch(t){return{type:"throw",arg:t}}}function k(){}function A(){}function x(){}function $(e){["next","throw","return"].forEach(function(l){e[l]=function(e){return this._invoke(l,e)}})}function O(e){function l(a,t,n,r){var v=w(e[a],e,t);if("throw"!==v.type){var o=v.arg,i=o.value;return i&&"object"===typeof i&&u.call(i,"__await")?Promise.resolve(i.__await).then(function(e){l("next",e,n,r)},function(e){l("throw",e,n,r)}):Promise.resolve(i).then(function(e){o.value=e,n(o)},function(e){return l("throw",e,n,r)})}r(v.arg)}var a;function t(e,t){function u(){return new Promise(function(a,u){l(e,t,a,u)})}return a=a?a.then(u,u):u()}this._invoke=t}function S(e,l,a){var t=s;return function(u,n){if(t===f)throw new Error("Generator is already running");if(t===p){if("throw"===u)throw n;return D()}a.method=u,a.arg=n;while(1){var r=a.delegate;if(r){var v=T(r,a);if(v){if(v===h)continue;return v}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(t===s)throw t=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);t=f;var o=w(e,l,a);if("normal"===o.type){if(t=a.done?p:c,o.arg===h)continue;return{value:o.arg,done:a.done}}"throw"===o.type&&(t=p,a.method="throw",a.arg=o.arg)}}}function T(e,l){var t=e.iterator[l.method];if(t===a){if(l.delegate=null,"throw"===l.method){if(e.iterator.return&&(l.method="return",l.arg=a,T(e,l),"throw"===l.method))return h;l.method="throw",l.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var u=w(t,e.iterator,l.arg);if("throw"===u.type)return l.method="throw",l.arg=u.arg,l.delegate=null,h;var n=u.arg;return n?n.done?(l[e.resultName]=n.value,l.next=e.nextLoc,"return"!==l.method&&(l.method="next",l.arg=a),l.delegate=null,h):n:(l.method="throw",l.arg=new TypeError("iterator result is not an object"),l.delegate=null,h)}function C(e){var l={tryLoc:e[0]};1 in e&&(l.catchLoc=e[1]),2 in e&&(l.finallyLoc=e[2],l.afterLoc=e[3]),this.tryEntries.push(l)}function j(e){var l=e.completion||{};l.type="normal",delete l.arg,e.completion=l}function B(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function E(e){if(e){var l=e[r];if(l)return l.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var t=-1,n=function l(){while(++t<e.length)if(u.call(e,t))return l.value=e[t],l.done=!1,l;return l.value=a,l.done=!0,l};return n.next=n}}return{next:D}}function D(){return{value:a,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9c16":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={appid:"__UNI__010C860"};l.default=t},a34a:function(e,l,a){e.exports=a("bbdd")},ad02:function(e,l,a){"use strict";var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);function n(e){var l,a,u,n,r,v;u=e.length,a=0,l="";while(a<u){if(n=255&e.charCodeAt(a++),a==u){l+=t.charAt(n>>2),l+=t.charAt((3&n)<<4),l+="==";break}if(r=e.charCodeAt(a++),a==u){l+=t.charAt(n>>2),l+=t.charAt((3&n)<<4|(240&r)>>4),l+=t.charAt((15&r)<<2),l+="=";break}v=e.charCodeAt(a++),l+=t.charAt(n>>2),l+=t.charAt((3&n)<<4|(240&r)>>4),l+=t.charAt((15&r)<<2|(192&v)>>6),l+=t.charAt(63&v)}return l}function r(e){var l,a,t,n,r,v,o;v=e.length,r=0,o="";while(r<v){do{l=u[255&e.charCodeAt(r++)]}while(r<v&&-1==l);if(-1==l)break;do{a=u[255&e.charCodeAt(r++)]}while(r<v&&-1==a);if(-1==a)break;o+=String.fromCharCode(l<<2|(48&a)>>4);do{if(t=255&e.charCodeAt(r++),61==t)return o;t=u[t]}while(r<v&&-1==t);if(-1==t)break;o+=String.fromCharCode((15&a)<<4|(60&t)>>2);do{if(n=255&e.charCodeAt(r++),61==n)return o;n=u[n]}while(r<v&&-1==n);if(-1==n)break;o+=String.fromCharCode((3&t)<<6|n)}return o}function v(e){var l,a,t,u;for(l="",t=e.length,a=0;a<t;a++)u=e.charCodeAt(a),u>=1&&u<=127?l+=e.charAt(a):u>2047?(l+=String.fromCharCode(224|u>>12&15),l+=String.fromCharCode(128|u>>6&63),l+=String.fromCharCode(128|u>>0&63)):(l+=String.fromCharCode(192|u>>6&31),l+=String.fromCharCode(128|u>>0&63));return l}function o(e){var l,a,t,u,n,r;l="",t=e.length,a=0;while(a<t)switch(u=e.charCodeAt(a++),u>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:l+=e.charAt(a-1);break;case 12:case 13:n=e.charCodeAt(a++),l+=String.fromCharCode((31&u)<<6|63&n);break;case 14:n=e.charCodeAt(a++),r=e.charCodeAt(a++),l+=String.fromCharCode((15&u)<<12|(63&n)<<6|(63&r)<<0);break}return l}e.exports={encode:n,decode:r,utf16to8:v,utf8to16:o}},bbdd:function(e,l,a){var t=function(){return this||"object"===typeof self&&self}()||Function("return this")(),u=t.regeneratorRuntime&&Object.getOwnPropertyNames(t).indexOf("regeneratorRuntime")>=0,n=u&&t.regeneratorRuntime;if(t.regeneratorRuntime=void 0,e.exports=a("96cf"),u)t.regeneratorRuntime=n;else try{delete t.regeneratorRuntime}catch(r){t.regeneratorRuntime=void 0}},bbf0:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[[[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"},{label:"海淀区",value:"110108"},{label:"门头沟区",value:"110109"},{label:"房山区",value:"110111"},{label:"通州区",value:"110112"},{label:"顺义区",value:"110113"},{label:"昌平区",value:"110114"},{label:"大兴区",value:"110115"},{label:"怀柔区",value:"110116"},{label:"平谷区",value:"110117"},{label:"密云区",value:"110118"},{label:"延庆区",value:"110119"}]],[[{label:"和平区",value:"120101"},{label:"河东区",value:"120102"},{label:"河西区",value:"120103"},{label:"南开区",value:"120104"},{label:"河北区",value:"120105"},{label:"红桥区",value:"120106"},{label:"东丽区",value:"120110"},{label:"西青区",value:"120111"},{label:"津南区",value:"120112"},{label:"北辰区",value:"120113"},{label:"武清区",value:"120114"},{label:"宝坻区",value:"120115"},{label:"滨海新区",value:"120116"},{label:"宁河区",value:"120117"},{label:"静海区",value:"120118"},{label:"蓟州区",value:"120119"}]],[[{label:"长安区",value:"130102"},{label:"桥西区",value:"130104"},{label:"新华区",value:"130105"},{label:"井陉矿区",value:"130107"},{label:"裕华区",value:"130108"},{label:"藁城区",value:"130109"},{label:"鹿泉区",value:"130110"},{label:"栾城区",value:"130111"},{label:"井陉县",value:"130121"},{label:"正定县",value:"130123"},{label:"行唐县",value:"130125"},{label:"灵寿县",value:"130126"},{label:"高邑县",value:"130127"},{label:"深泽县",value:"130128"},{label:"赞皇县",value:"130129"},{label:"无极县",value:"130130"},{label:"平山县",value:"130131"},{label:"元氏县",value:"130132"},{label:"赵县",value:"130133"},{label:"石家庄高新技术产业开发区",value:"130171"},{label:"石家庄循环化工园区",value:"130172"},{label:"辛集市",value:"130181"},{label:"晋州市",value:"130183"},{label:"新乐市",value:"130184"}],[{label:"路南区",value:"130202"},{label:"路北区",value:"130203"},{label:"古冶区",value:"130204"},{label:"开平区",value:"130205"},{label:"丰南区",value:"130207"},{label:"丰润区",value:"130208"},{label:"曹妃甸区",value:"130209"},{label:"滦县",value:"130223"},{label:"滦南县",value:"130224"},{label:"乐亭县",value:"130225"},{label:"迁西县",value:"130227"},{label:"玉田县",value:"130229"},{label:"唐山市芦台经济技术开发区",value:"130271"},{label:"唐山市汉沽管理区",value:"130272"},{label:"唐山高新技术产业开发区",value:"130273"},{label:"河北唐山海港经济开发区",value:"130274"},{label:"遵化市",value:"130281"},{label:"迁安市",value:"130283"}],[{label:"海港区",value:"130302"},{label:"山海关区",value:"130303"},{label:"北戴河区",value:"130304"},{label:"抚宁区",value:"130306"},{label:"青龙满族自治县",value:"130321"},{label:"昌黎县",value:"130322"},{label:"卢龙县",value:"130324"},{label:"秦皇岛市经济技术开发区",value:"130371"},{label:"北戴河新区",value:"130372"}],[{label:"邯山区",value:"130402"},{label:"丛台区",value:"130403"},{label:"复兴区",value:"130404"},{label:"峰峰矿区",value:"130406"},{label:"肥乡区",value:"130407"},{label:"永年区",value:"130408"},{label:"临漳县",value:"130423"},{label:"成安县",value:"130424"},{label:"大名县",value:"130425"},{label:"涉县",value:"130426"},{label:"磁县",value:"130427"},{label:"邱县",value:"130430"},{label:"鸡泽县",value:"130431"},{label:"广平县",value:"130432"},{label:"馆陶县",value:"130433"},{label:"魏县",value:"130434"},{label:"曲周县",value:"130435"},{label:"邯郸经济技术开发区",value:"130471"},{label:"邯郸冀南新区",value:"130473"},{label:"武安市",value:"130481"}],[{label:"桥东区",value:"130502"},{label:"桥西区",value:"130503"},{label:"邢台县",value:"130521"},{label:"临城县",value:"130522"},{label:"内丘县",value:"130523"},{label:"柏乡县",value:"130524"},{label:"隆尧县",value:"130525"},{label:"任县",value:"130526"},{label:"南和县",value:"130527"},{label:"宁晋县",value:"130528"},{label:"巨鹿县",value:"130529"},{label:"新河县",value:"130530"},{label:"广宗县",value:"130531"},{label:"平乡县",value:"130532"},{label:"威县",value:"130533"},{label:"清河县",value:"130534"},{label:"临西县",value:"130535"},{label:"河北邢台经济开发区",value:"130571"},{label:"南宫市",value:"130581"},{label:"沙河市",value:"130582"}],[{label:"竞秀区",value:"130602"},{label:"莲池区",value:"130606"},{label:"满城区",value:"130607"},{label:"清苑区",value:"130608"},{label:"徐水区",value:"130609"},{label:"涞水县",value:"130623"},{label:"阜平县",value:"130624"},{label:"定兴县",value:"130626"},{label:"唐县",value:"130627"},{label:"高阳县",value:"130628"},{label:"容城县",value:"130629"},{label:"涞源县",value:"130630"},{label:"望都县",value:"130631"},{label:"安新县",value:"130632"},{label:"易县",value:"130633"},{label:"曲阳县",value:"130634"},{label:"蠡县",value:"130635"},{label:"顺平县",value:"130636"},{label:"博野县",value:"130637"},{label:"雄县",value:"130638"},{label:"保定高新技术产业开发区",value:"130671"},{label:"保定白沟新城",value:"130672"},{label:"涿州市",value:"130681"},{label:"定州市",value:"130682"},{label:"安国市",value:"130683"},{label:"高碑店市",value:"130684"}],[{label:"桥东区",value:"130702"},{label:"桥西区",value:"130703"},{label:"宣化区",value:"130705"},{label:"下花园区",value:"130706"},{label:"万全区",value:"130708"},{label:"崇礼区",value:"130709"},{label:"张北县",value:"130722"},{label:"康保县",value:"130723"},{label:"沽源县",value:"130724"},{label:"尚义县",value:"130725"},{label:"蔚县",value:"130726"},{label:"阳原县",value:"130727"},{label:"怀安县",value:"130728"},{label:"怀来县",value:"130730"},{label:"涿鹿县",value:"130731"},{label:"赤城县",value:"130732"},{label:"张家口市高新技术产业开发区",value:"130771"},{label:"张家口市察北管理区",value:"130772"},{label:"张家口市塞北管理区",value:"130773"}],[{label:"双桥区",value:"130802"},{label:"双滦区",value:"130803"},{label:"鹰手营子矿区",value:"130804"},{label:"承德县",value:"130821"},{label:"兴隆县",value:"130822"},{label:"滦平县",value:"130824"},{label:"隆化县",value:"130825"},{label:"丰宁满族自治县",value:"130826"},{label:"宽城满族自治县",value:"130827"},{label:"围场满族蒙古族自治县",value:"130828"},{label:"承德高新技术产业开发区",value:"130871"},{label:"平泉市",value:"130881"}],[{label:"新华区",value:"130902"},{label:"运河区",value:"130903"},{label:"沧县",value:"130921"},{label:"青县",value:"130922"},{label:"东光县",value:"130923"},{label:"海兴县",value:"130924"},{label:"盐山县",value:"130925"},{label:"肃宁县",value:"130926"},{label:"南皮县",value:"130927"},{label:"吴桥县",value:"130928"},{label:"献县",value:"130929"},{label:"孟村回族自治县",value:"130930"},{label:"河北沧州经济开发区",value:"130971"},{label:"沧州高新技术产业开发区",value:"130972"},{label:"沧州渤海新区",value:"130973"},{label:"泊头市",value:"130981"},{label:"任丘市",value:"130982"},{label:"黄骅市",value:"130983"},{label:"河间市",value:"130984"}],[{label:"安次区",value:"131002"},{label:"广阳区",value:"131003"},{label:"固安县",value:"131022"},{label:"永清县",value:"131023"},{label:"香河县",value:"131024"},{label:"大城县",value:"131025"},{label:"文安县",value:"131026"},{label:"大厂回族自治县",value:"131028"},{label:"廊坊经济技术开发区",value:"131071"},{label:"霸州市",value:"131081"},{label:"三河市",value:"131082"}],[{label:"桃城区",value:"131102"},{label:"冀州区",value:"131103"},{label:"枣强县",value:"131121"},{label:"武邑县",value:"131122"},{label:"武强县",value:"131123"},{label:"饶阳县",value:"131124"},{label:"安平县",value:"131125"},{label:"故城县",value:"131126"},{label:"景县",value:"131127"},{label:"阜城县",value:"131128"},{label:"河北衡水经济开发区",value:"131171"},{label:"衡水滨湖新区",value:"131172"},{label:"深州市",value:"131182"}]],[[{label:"小店区",value:"140105"},{label:"迎泽区",value:"140106"},{label:"杏花岭区",value:"140107"},{label:"尖草坪区",value:"140108"},{label:"万柏林区",value:"140109"},{label:"晋源区",value:"140110"},{label:"清徐县",value:"140121"},{label:"阳曲县",value:"140122"},{label:"娄烦县",value:"140123"},{label:"山西转型综合改革示范区",value:"140171"},{label:"古交市",value:"140181"}],[{label:"城区",value:"140202"},{label:"矿区",value:"140203"},{label:"南郊区",value:"140211"},{label:"新荣区",value:"140212"},{label:"阳高县",value:"140221"},{label:"天镇县",value:"140222"},{label:"广灵县",value:"140223"},{label:"灵丘县",value:"140224"},{label:"浑源县",value:"140225"},{label:"左云县",value:"140226"},{label:"大同县",value:"140227"},{label:"山西大同经济开发区",value:"140271"}],[{label:"城区",value:"140302"},{label:"矿区",value:"140303"},{label:"郊区",value:"140311"},{label:"平定县",value:"140321"},{label:"盂县",value:"140322"},{label:"山西阳泉经济开发区",value:"140371"}],[{label:"城区",value:"140402"},{label:"郊区",value:"140411"},{label:"长治县",value:"140421"},{label:"襄垣县",value:"140423"},{label:"屯留县",value:"140424"},{label:"平顺县",value:"140425"},{label:"黎城县",value:"140426"},{label:"壶关县",value:"140427"},{label:"长子县",value:"140428"},{label:"武乡县",value:"140429"},{label:"沁县",value:"140430"},{label:"沁源县",value:"140431"},{label:"山西长治高新技术产业园区",value:"140471"},{label:"潞城市",value:"140481"}],[{label:"城区",value:"140502"},{label:"沁水县",value:"140521"},{label:"阳城县",value:"140522"},{label:"陵川县",value:"140524"},{label:"泽州县",value:"140525"},{label:"高平市",value:"140581"}],[{label:"朔城区",value:"140602"},{label:"平鲁区",value:"140603"},{label:"山阴县",value:"140621"},{label:"应县",value:"140622"},{label:"右玉县",value:"140623"},{label:"怀仁县",value:"140624"},{label:"山西朔州经济开发区",value:"140671"}],[{label:"榆次区",value:"140702"},{label:"榆社县",value:"140721"},{label:"左权县",value:"140722"},{label:"和顺县",value:"140723"},{label:"昔阳县",value:"140724"},{label:"寿阳县",value:"140725"},{label:"太谷县",value:"140726"},{label:"祁县",value:"140727"},{label:"平遥县",value:"140728"},{label:"灵石县",value:"140729"},{label:"介休市",value:"140781"}],[{label:"盐湖区",value:"140802"},{label:"临猗县",value:"140821"},{label:"万荣县",value:"140822"},{label:"闻喜县",value:"140823"},{label:"稷山县",value:"140824"},{label:"新绛县",value:"140825"},{label:"绛县",value:"140826"},{label:"垣曲县",value:"140827"},{label:"夏县",value:"140828"},{label:"平陆县",value:"140829"},{label:"芮城县",value:"140830"},{label:"永济市",value:"140881"},{label:"河津市",value:"140882"}],[{label:"忻府区",value:"140902"},{label:"定襄县",value:"140921"},{label:"五台县",value:"140922"},{label:"代县",value:"140923"},{label:"繁峙县",value:"140924"},{label:"宁武县",value:"140925"},{label:"静乐县",value:"140926"},{label:"神池县",value:"140927"},{label:"五寨县",value:"140928"},{label:"岢岚县",value:"140929"},{label:"河曲县",value:"140930"},{label:"保德县",value:"140931"},{label:"偏关县",value:"140932"},{label:"五台山风景名胜区",value:"140971"},{label:"原平市",value:"140981"}],[{label:"尧都区",value:"141002"},{label:"曲沃县",value:"141021"},{label:"翼城县",value:"141022"},{label:"襄汾县",value:"141023"},{label:"洪洞县",value:"141024"},{label:"古县",value:"141025"},{label:"安泽县",value:"141026"},{label:"浮山县",value:"141027"},{label:"吉县",value:"141028"},{label:"乡宁县",value:"141029"},{label:"大宁县",value:"141030"},{label:"隰县",value:"141031"},{label:"永和县",value:"141032"},{label:"蒲县",value:"141033"},{label:"汾西县",value:"141034"},{label:"侯马市",value:"141081"},{label:"霍州市",value:"141082"}],[{label:"离石区",value:"141102"},{label:"文水县",value:"141121"},{label:"交城县",value:"141122"},{label:"兴县",value:"141123"},{label:"临县",value:"141124"},{label:"柳林县",value:"141125"},{label:"石楼县",value:"141126"},{label:"岚县",value:"141127"},{label:"方山县",value:"141128"},{label:"中阳县",value:"141129"},{label:"交口县",value:"141130"},{label:"孝义市",value:"141181"},{label:"汾阳市",value:"141182"}]],[[{label:"新城区",value:"150102"},{label:"回民区",value:"150103"},{label:"玉泉区",value:"150104"},{label:"赛罕区",value:"150105"},{label:"土默特左旗",value:"150121"},{label:"托克托县",value:"150122"},{label:"和林格尔县",value:"150123"},{label:"清水河县",value:"150124"},{label:"武川县",value:"150125"},{label:"呼和浩特金海工业园区",value:"150171"},{label:"呼和浩特经济技术开发区",value:"150172"}],[{label:"东河区",value:"150202"},{label:"昆都仑区",value:"150203"},{label:"青山区",value:"150204"},{label:"石拐区",value:"150205"},{label:"白云鄂博矿区",value:"150206"},{label:"九原区",value:"150207"},{label:"土默特右旗",value:"150221"},{label:"固阳县",value:"150222"},{label:"达尔罕茂明安联合旗",value:"150223"},{label:"包头稀土高新技术产业开发区",value:"150271"}],[{label:"海勃湾区",value:"150302"},{label:"海南区",value:"150303"},{label:"乌达区",value:"150304"}],[{label:"红山区",value:"150402"},{label:"元宝山区",value:"150403"},{label:"松山区",value:"150404"},{label:"阿鲁科尔沁旗",value:"150421"},{label:"巴林左旗",value:"150422"},{label:"巴林右旗",value:"150423"},{label:"林西县",value:"150424"},{label:"克什克腾旗",value:"150425"},{label:"翁牛特旗",value:"150426"},{label:"喀喇沁旗",value:"150428"},{label:"宁城县",value:"150429"},{label:"敖汉旗",value:"150430"}],[{label:"科尔沁区",value:"150502"},{label:"科尔沁左翼中旗",value:"150521"},{label:"科尔沁左翼后旗",value:"150522"},{label:"开鲁县",value:"150523"},{label:"库伦旗",value:"150524"},{label:"奈曼旗",value:"150525"},{label:"扎鲁特旗",value:"150526"},{label:"通辽经济技术开发区",value:"150571"},{label:"霍林郭勒市",value:"150581"}],[{label:"东胜区",value:"150602"},{label:"康巴什区",value:"150603"},{label:"达拉特旗",value:"150621"},{label:"准格尔旗",value:"150622"},{label:"鄂托克前旗",value:"150623"},{label:"鄂托克旗",value:"150624"},{label:"杭锦旗",value:"150625"},{label:"乌审旗",value:"150626"},{label:"伊金霍洛旗",value:"150627"}],[{label:"海拉尔区",value:"150702"},{label:"扎赉诺尔区",value:"150703"},{label:"阿荣旗",value:"150721"},{label:"莫力达瓦达斡尔族自治旗",value:"150722"},{label:"鄂伦春自治旗",value:"150723"},{label:"鄂温克族自治旗",value:"150724"},{label:"陈巴尔虎旗",value:"150725"},{label:"新巴尔虎左旗",value:"150726"},{label:"新巴尔虎右旗",value:"150727"},{label:"满洲里市",value:"150781"},{label:"牙克石市",value:"150782"},{label:"扎兰屯市",value:"150783"},{label:"额尔古纳市",value:"150784"},{label:"根河市",value:"150785"}],[{label:"临河区",value:"150802"},{label:"五原县",value:"150821"},{label:"磴口县",value:"150822"},{label:"乌拉特前旗",value:"150823"},{label:"乌拉特中旗",value:"150824"},{label:"乌拉特后旗",value:"150825"},{label:"杭锦后旗",value:"150826"}],[{label:"集宁区",value:"150902"},{label:"卓资县",value:"150921"},{label:"化德县",value:"150922"},{label:"商都县",value:"150923"},{label:"兴和县",value:"150924"},{label:"凉城县",value:"150925"},{label:"察哈尔右翼前旗",value:"150926"},{label:"察哈尔右翼中旗",value:"150927"},{label:"察哈尔右翼后旗",value:"150928"},{label:"四子王旗",value:"150929"},{label:"丰镇市",value:"150981"}],[{label:"乌兰浩特市",value:"152201"},{label:"阿尔山市",value:"152202"},{label:"科尔沁右翼前旗",value:"152221"},{label:"科尔沁右翼中旗",value:"152222"},{label:"扎赉特旗",value:"152223"},{label:"突泉县",value:"152224"}],[{label:"二连浩特市",value:"152501"},{label:"锡林浩特市",value:"152502"},{label:"阿巴嘎旗",value:"152522"},{label:"苏尼特左旗",value:"152523"},{label:"苏尼特右旗",value:"152524"},{label:"东乌珠穆沁旗",value:"152525"},{label:"西乌珠穆沁旗",value:"152526"},{label:"太仆寺旗",value:"152527"},{label:"镶黄旗",value:"152528"},{label:"正镶白旗",value:"152529"},{label:"正蓝旗",value:"152530"},{label:"多伦县",value:"152531"},{label:"乌拉盖管委会",value:"152571"}],[{label:"阿拉善左旗",value:"152921"},{label:"阿拉善右旗",value:"152922"},{label:"额济纳旗",value:"152923"},{label:"内蒙古阿拉善经济开发区",value:"152971"}]],[[{label:"和平区",value:"210102"},{label:"沈河区",value:"210103"},{label:"大东区",value:"210104"},{label:"皇姑区",value:"210105"},{label:"铁西区",value:"210106"},{label:"苏家屯区",value:"210111"},{label:"浑南区",value:"210112"},{label:"沈北新区",value:"210113"},{label:"于洪区",value:"210114"},{label:"辽中区",value:"210115"},{label:"康平县",value:"210123"},{label:"法库县",value:"210124"},{label:"新民市",value:"210181"}],[{label:"中山区",value:"210202"},{label:"西岗区",value:"210203"},{label:"沙河口区",value:"210204"},{label:"甘井子区",value:"210211"},{label:"旅顺口区",value:"210212"},{label:"金州区",value:"210213"},{label:"普兰店区",value:"210214"},{label:"长海县",value:"210224"},{label:"瓦房店市",value:"210281"},{label:"庄河市",value:"210283"}],[{label:"铁东区",value:"210302"},{label:"铁西区",value:"210303"},{label:"立山区",value:"210304"},{label:"千山区",value:"210311"},{label:"台安县",value:"210321"},{label:"岫岩满族自治县",value:"210323"},{label:"海城市",value:"210381"}],[{label:"新抚区",value:"210402"},{label:"东洲区",value:"210403"},{label:"望花区",value:"210404"},{label:"顺城区",value:"210411"},{label:"抚顺县",value:"210421"},{label:"新宾满族自治县",value:"210422"},{label:"清原满族自治县",value:"210423"}],[{label:"平山区",value:"210502"},{label:"溪湖区",value:"210503"},{label:"明山区",value:"210504"},{label:"南芬区",value:"210505"},{label:"本溪满族自治县",value:"210521"},{label:"桓仁满族自治县",value:"210522"}],[{label:"元宝区",value:"210602"},{label:"振兴区",value:"210603"},{label:"振安区",value:"210604"},{label:"宽甸满族自治县",value:"210624"},{label:"东港市",value:"210681"},{label:"凤城市",value:"210682"}],[{label:"古塔区",value:"210702"},{label:"凌河区",value:"210703"},{label:"太和区",value:"210711"},{label:"黑山县",value:"210726"},{label:"义县",value:"210727"},{label:"凌海市",value:"210781"},{label:"北镇市",value:"210782"}],[{label:"站前区",value:"210802"},{label:"西市区",value:"210803"},{label:"鲅鱼圈区",value:"210804"},{label:"老边区",value:"210811"},{label:"盖州市",value:"210881"},{label:"大石桥市",value:"210882"}],[{label:"海州区",value:"210902"},{label:"新邱区",value:"210903"},{label:"太平区",value:"210904"},{label:"清河门区",value:"210905"},{label:"细河区",value:"210911"},{label:"阜新蒙古族自治县",value:"210921"},{label:"彰武县",value:"210922"}],[{label:"白塔区",value:"211002"},{label:"文圣区",value:"211003"},{label:"宏伟区",value:"211004"},{label:"弓长岭区",value:"211005"},{label:"太子河区",value:"211011"},{label:"辽阳县",value:"211021"},{label:"灯塔市",value:"211081"}],[{label:"双台子区",value:"211102"},{label:"兴隆台区",value:"211103"},{label:"大洼区",value:"211104"},{label:"盘山县",value:"211122"}],[{label:"银州区",value:"211202"},{label:"清河区",value:"211204"},{label:"铁岭县",value:"211221"},{label:"西丰县",value:"211223"},{label:"昌图县",value:"211224"},{label:"调兵山市",value:"211281"},{label:"开原市",value:"211282"}],[{label:"双塔区",value:"211302"},{label:"龙城区",value:"211303"},{label:"朝阳县",value:"211321"},{label:"建平县",value:"211322"},{label:"喀喇沁左翼蒙古族自治县",value:"211324"},{label:"北票市",value:"211381"},{label:"凌源市",value:"211382"}],[{label:"连山区",value:"211402"},{label:"龙港区",value:"211403"},{label:"南票区",value:"211404"},{label:"绥中县",value:"211421"},{label:"建昌县",value:"211422"},{label:"兴城市",value:"211481"}]],[[{label:"南关区",value:"220102"},{label:"宽城区",value:"220103"},{label:"朝阳区",value:"220104"},{label:"二道区",value:"220105"},{label:"绿园区",value:"220106"},{label:"双阳区",value:"220112"},{label:"九台区",value:"220113"},{label:"农安县",value:"220122"},{label:"长春经济技术开发区",value:"220171"},{label:"长春净月高新技术产业开发区",value:"220172"},{label:"长春高新技术产业开发区",value:"220173"},{label:"长春汽车经济技术开发区",value:"220174"},{label:"榆树市",value:"220182"},{label:"德惠市",value:"220183"}],[{label:"昌邑区",value:"220202"},{label:"龙潭区",value:"220203"},{label:"船营区",value:"220204"},{label:"丰满区",value:"220211"},{label:"永吉县",value:"220221"},{label:"吉林经济开发区",value:"220271"},{label:"吉林高新技术产业开发区",value:"220272"},{label:"吉林中国新加坡食品区",value:"220273"},{label:"蛟河市",value:"220281"},{label:"桦甸市",value:"220282"},{label:"舒兰市",value:"220283"},{label:"磐石市",value:"220284"}],[{label:"铁西区",value:"220302"},{label:"铁东区",value:"220303"},{label:"梨树县",value:"220322"},{label:"伊通满族自治县",value:"220323"},{label:"公主岭市",value:"220381"},{label:"双辽市",value:"220382"}],[{label:"龙山区",value:"220402"},{label:"西安区",value:"220403"},{label:"东丰县",value:"220421"},{label:"东辽县",value:"220422"}],[{label:"东昌区",value:"220502"},{label:"二道江区",value:"220503"},{label:"通化县",value:"220521"},{label:"辉南县",value:"220523"},{label:"柳河县",value:"220524"},{label:"梅河口市",value:"220581"},{label:"集安市",value:"220582"}],[{label:"浑江区",value:"220602"},{label:"江源区",value:"220605"},{label:"抚松县",value:"220621"},{label:"靖宇县",value:"220622"},{label:"长白朝鲜族自治县",value:"220623"},{label:"临江市",value:"220681"}],[{label:"宁江区",value:"220702"},{label:"前郭尔罗斯蒙古族自治县",value:"220721"},{label:"长岭县",value:"220722"},{label:"乾安县",value:"220723"},{label:"吉林松原经济开发区",value:"220771"},{label:"扶余市",value:"220781"}],[{label:"洮北区",value:"220802"},{label:"镇赉县",value:"220821"},{label:"通榆县",value:"220822"},{label:"吉林白城经济开发区",value:"220871"},{label:"洮南市",value:"220881"},{label:"大安市",value:"220882"}],[{label:"延吉市",value:"222401"},{label:"图们市",value:"222402"},{label:"敦化市",value:"222403"},{label:"珲春市",value:"222404"},{label:"龙井市",value:"222405"},{label:"和龙市",value:"222406"},{label:"汪清县",value:"222424"},{label:"安图县",value:"222426"}]],[[{label:"道里区",value:"230102"},{label:"南岗区",value:"230103"},{label:"道外区",value:"230104"},{label:"平房区",value:"230108"},{label:"松北区",value:"230109"},{label:"香坊区",value:"230110"},{label:"呼兰区",value:"230111"},{label:"阿城区",value:"230112"},{label:"双城区",value:"230113"},{label:"依兰县",value:"230123"},{label:"方正县",value:"230124"},{label:"宾县",value:"230125"},{label:"巴彦县",value:"230126"},{label:"木兰县",value:"230127"},{label:"通河县",value:"230128"},{label:"延寿县",value:"230129"},{label:"尚志市",value:"230183"},{label:"五常市",value:"230184"}],[{label:"龙沙区",value:"230202"},{label:"建华区",value:"230203"},{label:"铁锋区",value:"230204"},{label:"昂昂溪区",value:"230205"},{label:"富拉尔基区",value:"230206"},{label:"碾子山区",value:"230207"},{label:"梅里斯达斡尔族区",value:"230208"},{label:"龙江县",value:"230221"},{label:"依安县",value:"230223"},{label:"泰来县",value:"230224"},{label:"甘南县",value:"230225"},{label:"富裕县",value:"230227"},{label:"克山县",value:"230229"},{label:"克东县",value:"230230"},{label:"拜泉县",value:"230231"},{label:"讷河市",value:"230281"}],[{label:"鸡冠区",value:"230302"},{label:"恒山区",value:"230303"},{label:"滴道区",value:"230304"},{label:"梨树区",value:"230305"},{label:"城子河区",value:"230306"},{label:"麻山区",value:"230307"},{label:"鸡东县",value:"230321"},{label:"虎林市",value:"230381"},{label:"密山市",value:"230382"}],[{label:"向阳区",value:"230402"},{label:"工农区",value:"230403"},{label:"南山区",value:"230404"},{label:"兴安区",value:"230405"},{label:"东山区",value:"230406"},{label:"兴山区",value:"230407"},{label:"萝北县",value:"230421"},{label:"绥滨县",value:"230422"}],[{label:"尖山区",value:"230502"},{label:"岭东区",value:"230503"},{label:"四方台区",value:"230505"},{label:"宝山区",value:"230506"},{label:"集贤县",value:"230521"},{label:"友谊县",value:"230522"},{label:"宝清县",value:"230523"},{label:"饶河县",value:"230524"}],[{label:"萨尔图区",value:"230602"},{label:"龙凤区",value:"230603"},{label:"让胡路区",value:"230604"},{label:"红岗区",value:"230605"},{label:"大同区",value:"230606"},{label:"肇州县",value:"230621"},{label:"肇源县",value:"230622"},{label:"林甸县",value:"230623"},{label:"杜尔伯特蒙古族自治县",value:"230624"},{label:"大庆高新技术产业开发区",value:"230671"}],[{label:"伊春区",value:"230702"},{label:"南岔区",value:"230703"},{label:"友好区",value:"230704"},{label:"西林区",value:"230705"},{label:"翠峦区",value:"230706"},{label:"新青区",value:"230707"},{label:"美溪区",value:"230708"},{label:"金山屯区",value:"230709"},{label:"五营区",value:"230710"},{label:"乌马河区",value:"230711"},{label:"汤旺河区",value:"230712"},{label:"带岭区",value:"230713"},{label:"乌伊岭区",value:"230714"},{label:"红星区",value:"230715"},{label:"上甘岭区",value:"230716"},{label:"嘉荫县",value:"230722"},{label:"铁力市",value:"230781"}],[{label:"向阳区",value:"230803"},{label:"前进区",value:"230804"},{label:"东风区",value:"230805"},{label:"郊区",value:"230811"},{label:"桦南县",value:"230822"},{label:"桦川县",value:"230826"},{label:"汤原县",value:"230828"},{label:"同江市",value:"230881"},{label:"富锦市",value:"230882"},{label:"抚远市",value:"230883"}],[{label:"新兴区",value:"230902"},{label:"桃山区",value:"230903"},{label:"茄子河区",value:"230904"},{label:"勃利县",value:"230921"}],[{label:"东安区",value:"231002"},{label:"阳明区",value:"231003"},{label:"爱民区",value:"231004"},{label:"西安区",value:"231005"},{label:"林口县",value:"231025"},{label:"牡丹江经济技术开发区",value:"231071"},{label:"绥芬河市",value:"231081"},{label:"海林市",value:"231083"},{label:"宁安市",value:"231084"},{label:"穆棱市",value:"231085"},{label:"东宁市",value:"231086"}],[{label:"爱辉区",value:"231102"},{label:"嫩江县",value:"231121"},{label:"逊克县",value:"231123"},{label:"孙吴县",value:"231124"},{label:"北安市",value:"231181"},{label:"五大连池市",value:"231182"}],[{label:"北林区",value:"231202"},{label:"望奎县",value:"231221"},{label:"兰西县",value:"231222"},{label:"青冈县",value:"231223"},{label:"庆安县",value:"231224"},{label:"明水县",value:"231225"},{label:"绥棱县",value:"231226"},{label:"安达市",value:"231281"},{label:"肇东市",value:"231282"},{label:"海伦市",value:"231283"}],[{label:"加格达奇区",value:"232701"},{label:"松岭区",value:"232702"},{label:"新林区",value:"232703"},{label:"呼中区",value:"232704"},{label:"呼玛县",value:"232721"},{label:"塔河县",value:"232722"},{label:"漠河县",value:"232723"}]],[[{label:"黄浦区",value:"310101"},{label:"徐汇区",value:"310104"},{label:"长宁区",value:"310105"},{label:"静安区",value:"310106"},{label:"普陀区",value:"310107"},{label:"虹口区",value:"310109"},{label:"杨浦区",value:"310110"},{label:"闵行区",value:"310112"},{label:"宝山区",value:"310113"},{label:"嘉定区",value:"310114"},{label:"浦东新区",value:"310115"},{label:"金山区",value:"310116"},{label:"松江区",value:"310117"},{label:"青浦区",value:"310118"},{label:"奉贤区",value:"310120"},{label:"崇明区",value:"310151"}]],[[{label:"玄武区",value:"320102"},{label:"秦淮区",value:"320104"},{label:"建邺区",value:"320105"},{label:"鼓楼区",value:"320106"},{label:"浦口区",value:"320111"},{label:"栖霞区",value:"320113"},{label:"雨花台区",value:"320114"},{label:"江宁区",value:"320115"},{label:"六合区",value:"320116"},{label:"溧水区",value:"320117"},{label:"高淳区",value:"320118"}],[{label:"锡山区",value:"320205"},{label:"惠山区",value:"320206"},{label:"滨湖区",value:"320211"},{label:"梁溪区",value:"320213"},{label:"新吴区",value:"320214"},{label:"江阴市",value:"320281"},{label:"宜兴市",value:"320282"}],[{label:"鼓楼区",value:"320302"},{label:"云龙区",value:"320303"},{label:"贾汪区",value:"320305"},{label:"泉山区",value:"320311"},{label:"铜山区",value:"320312"},{label:"丰县",value:"320321"},{label:"沛县",value:"320322"},{label:"睢宁县",value:"320324"},{label:"徐州经济技术开发区",value:"320371"},{label:"新沂市",value:"320381"},{label:"邳州市",value:"320382"}],[{label:"天宁区",value:"320402"},{label:"钟楼区",value:"320404"},{label:"新北区",value:"320411"},{label:"武进区",value:"320412"},{label:"金坛区",value:"320413"},{label:"溧阳市",value:"320481"}],[{label:"虎丘区",value:"320505"},{label:"吴中区",value:"320506"},{label:"相城区",value:"320507"},{label:"姑苏区",value:"320508"},{label:"吴江区",value:"320509"},{label:"苏州工业园区",value:"320571"},{label:"常熟市",value:"320581"},{label:"张家港市",value:"320582"},{label:"昆山市",value:"320583"},{label:"太仓市",value:"320585"}],[{label:"崇川区",value:"320602"},{label:"港闸区",value:"320611"},{label:"通州区",value:"320612"},{label:"海安县",value:"320621"},{label:"如东县",value:"320623"},{label:"南通经济技术开发区",value:"320671"},{label:"启东市",value:"320681"},{label:"如皋市",value:"320682"},{label:"海门市",value:"320684"}],[{label:"连云区",value:"320703"},{label:"海州区",value:"320706"},{label:"赣榆区",value:"320707"},{label:"东海县",value:"320722"},{label:"灌云县",value:"320723"},{label:"灌南县",value:"320724"},{label:"连云港经济技术开发区",value:"320771"},{label:"连云港高新技术产业开发区",value:"320772"}],[{label:"淮安区",value:"320803"},{label:"淮阴区",value:"320804"},{label:"清江浦区",value:"320812"},{label:"洪泽区",value:"320813"},{label:"涟水县",value:"320826"},{label:"盱眙县",value:"320830"},{label:"金湖县",value:"320831"},{label:"淮安经济技术开发区",value:"320871"}],[{label:"亭湖区",value:"320902"},{label:"盐都区",value:"320903"},{label:"大丰区",value:"320904"},{label:"响水县",value:"320921"},{label:"滨海县",value:"320922"},{label:"阜宁县",value:"320923"},{label:"射阳县",value:"320924"},{label:"建湖县",value:"320925"},{label:"盐城经济技术开发区",value:"320971"},{label:"东台市",value:"320981"}],[{label:"广陵区",value:"321002"},{label:"邗江区",value:"321003"},{label:"江都区",value:"321012"},{label:"宝应县",value:"321023"},{label:"扬州经济技术开发区",value:"321071"},{label:"仪征市",value:"321081"},{label:"高邮市",value:"321084"}],[{label:"京口区",value:"321102"},{label:"润州区",value:"321111"},{label:"丹徒区",value:"321112"},{label:"镇江新区",value:"321171"},{label:"丹阳市",value:"321181"},{label:"扬中市",value:"321182"},{label:"句容市",value:"321183"}],[{label:"海陵区",value:"321202"},{label:"高港区",value:"321203"},{label:"姜堰区",value:"321204"},{label:"泰州医药高新技术产业开发区",value:"321271"},{label:"兴化市",value:"321281"},{label:"靖江市",value:"321282"},{label:"泰兴市",value:"321283"}],[{label:"宿城区",value:"321302"},{label:"宿豫区",value:"321311"},{label:"沭阳县",value:"321322"},{label:"泗阳县",value:"321323"},{label:"泗洪县",value:"321324"},{label:"宿迁经济技术开发区",value:"321371"}]],[[{label:"上城区",value:"330102"},{label:"下城区",value:"330103"},{label:"江干区",value:"330104"},{label:"拱墅区",value:"330105"},{label:"西湖区",value:"330106"},{label:"滨江区",value:"330108"},{label:"萧山区",value:"330109"},{label:"余杭区",value:"330110"},{label:"富阳区",value:"330111"},{label:"临安区",value:"330112"},{label:"桐庐县",value:"330122"},{label:"淳安县",value:"330127"},{label:"建德市",value:"330182"}],[{label:"海曙区",value:"330203"},{label:"江北区",value:"330205"},{label:"北仑区",value:"330206"},{label:"镇海区",value:"330211"},{label:"鄞州区",value:"330212"},{label:"奉化区",value:"330213"},{label:"象山县",value:"330225"},{label:"宁海县",value:"330226"},{label:"余姚市",value:"330281"},{label:"慈溪市",value:"330282"}],[{label:"鹿城区",value:"330302"},{label:"龙湾区",value:"330303"},{label:"瓯海区",value:"330304"},{label:"洞头区",value:"330305"},{label:"永嘉县",value:"330324"},{label:"平阳县",value:"330326"},{label:"苍南县",value:"330327"},{label:"文成县",value:"330328"},{label:"泰顺县",value:"330329"},{label:"温州经济技术开发区",value:"330371"},{label:"瑞安市",value:"330381"},{label:"乐清市",value:"330382"}],[{label:"南湖区",value:"330402"},{label:"秀洲区",value:"330411"},{label:"嘉善县",value:"330421"},{label:"海盐县",value:"330424"},{label:"海宁市",value:"330481"},{label:"平湖市",value:"330482"},{label:"桐乡市",value:"330483"}],[{label:"吴兴区",value:"330502"},{label:"南浔区",value:"330503"},{label:"德清县",value:"330521"},{label:"长兴县",value:"330522"},{label:"安吉县",value:"330523"}],[{label:"越城区",value:"330602"},{label:"柯桥区",value:"330603"},{label:"上虞区",value:"330604"},{label:"新昌县",value:"330624"},{label:"诸暨市",value:"330681"},{label:"嵊州市",value:"330683"}],[{label:"婺城区",value:"330702"},{label:"金东区",value:"330703"},{label:"武义县",value:"330723"},{label:"浦江县",value:"330726"},{label:"磐安县",value:"330727"},{label:"兰溪市",value:"330781"},{label:"义乌市",value:"330782"},{label:"东阳市",value:"330783"},{label:"永康市",value:"330784"}],[{label:"柯城区",value:"330802"},{label:"衢江区",value:"330803"},{label:"常山县",value:"330822"},{label:"开化县",value:"330824"},{label:"龙游县",value:"330825"},{label:"江山市",value:"330881"}],[{label:"定海区",value:"330902"},{label:"普陀区",value:"330903"},{label:"岱山县",value:"330921"},{label:"嵊泗县",value:"330922"}],[{label:"椒江区",value:"331002"},{label:"黄岩区",value:"331003"},{label:"路桥区",value:"331004"},{label:"三门县",value:"331022"},{label:"天台县",value:"331023"},{label:"仙居县",value:"331024"},{label:"温岭市",value:"331081"},{label:"临海市",value:"331082"},{label:"玉环市",value:"331083"}],[{label:"莲都区",value:"331102"},{label:"青田县",value:"331121"},{label:"缙云县",value:"331122"},{label:"遂昌县",value:"331123"},{label:"松阳县",value:"331124"},{label:"云和县",value:"331125"},{label:"庆元县",value:"331126"},{label:"景宁畲族自治县",value:"331127"},{label:"龙泉市",value:"331181"}]],[[{label:"瑶海区",value:"340102"},{label:"庐阳区",value:"340103"},{label:"蜀山区",value:"340104"},{label:"包河区",value:"340111"},{label:"长丰县",value:"340121"},{label:"肥东县",value:"340122"},{label:"肥西县",value:"340123"},{label:"庐江县",value:"340124"},{label:"合肥高新技术产业开发区",value:"340171"},{label:"合肥经济技术开发区",value:"340172"},{label:"合肥新站高新技术产业开发区",value:"340173"},{label:"巢湖市",value:"340181"}],[{label:"镜湖区",value:"340202"},{label:"弋江区",value:"340203"},{label:"鸠江区",value:"340207"},{label:"三山区",value:"340208"},{label:"芜湖县",value:"340221"},{label:"繁昌县",value:"340222"},{label:"南陵县",value:"340223"},{label:"无为县",value:"340225"},{label:"芜湖经济技术开发区",value:"340271"},{label:"安徽芜湖长江大桥经济开发区",value:"340272"}],[{label:"龙子湖区",value:"340302"},{label:"蚌山区",value:"340303"},{label:"禹会区",value:"340304"},{label:"淮上区",value:"340311"},{label:"怀远县",value:"340321"},{label:"五河县",value:"340322"},{label:"固镇县",value:"340323"},{label:"蚌埠市高新技术开发区",value:"340371"},{label:"蚌埠市经济开发区",value:"340372"}],[{label:"大通区",value:"340402"},{label:"田家庵区",value:"340403"},{label:"谢家集区",value:"340404"},{label:"八公山区",value:"340405"},{label:"潘集区",value:"340406"},{label:"凤台县",value:"340421"},{label:"寿县",value:"340422"}],[{label:"花山区",value:"340503"},{label:"雨山区",value:"340504"},{label:"博望区",value:"340506"},{label:"当涂县",value:"340521"},{label:"含山县",value:"340522"},{label:"和县",value:"340523"}],[{label:"杜集区",value:"340602"},{label:"相山区",value:"340603"},{label:"烈山区",value:"340604"},{label:"濉溪县",value:"340621"}],[{label:"铜官区",value:"340705"},{label:"义安区",value:"340706"},{label:"郊区",value:"340711"},{label:"枞阳县",value:"340722"}],[{label:"迎江区",value:"340802"},{label:"大观区",value:"340803"},{label:"宜秀区",value:"340811"},{label:"怀宁县",value:"340822"},{label:"潜山县",value:"340824"},{label:"太湖县",value:"340825"},{label:"宿松县",value:"340826"},{label:"望江县",value:"340827"},{label:"岳西县",value:"340828"},{label:"安徽安庆经济开发区",value:"340871"},{label:"桐城市",value:"340881"}],[{label:"屯溪区",value:"341002"},{label:"黄山区",value:"341003"},{label:"徽州区",value:"341004"},{label:"歙县",value:"341021"},{label:"休宁县",value:"341022"},{label:"黟县",value:"341023"},{label:"祁门县",value:"341024"}],[{label:"琅琊区",value:"341102"},{label:"南谯区",value:"341103"},{label:"来安县",value:"341122"},{label:"全椒县",value:"341124"},{label:"定远县",value:"341125"},{label:"凤阳县",value:"341126"},{label:"苏滁现代产业园",value:"341171"},{label:"滁州经济技术开发区",value:"341172"},{label:"天长市",value:"341181"},{label:"明光市",value:"341182"}],[{label:"颍州区",value:"341202"},{label:"颍东区",value:"341203"},{label:"颍泉区",value:"341204"},{label:"临泉县",value:"341221"},{label:"太和县",value:"341222"},{label:"阜南县",value:"341225"},{label:"颍上县",value:"341226"},{label:"阜阳合肥现代产业园区",value:"341271"},{label:"阜阳经济技术开发区",value:"341272"},{label:"界首市",value:"341282"}],[{label:"埇桥区",value:"341302"},{label:"砀山县",value:"341321"},{label:"萧县",value:"341322"},{label:"灵璧县",value:"341323"},{label:"泗县",value:"341324"},{label:"宿州马鞍山现代产业园区",value:"341371"},{label:"宿州经济技术开发区",value:"341372"}],[{label:"金安区",value:"341502"},{label:"裕安区",value:"341503"},{label:"叶集区",value:"341504"},{label:"霍邱县",value:"341522"},{label:"舒城县",value:"341523"},{label:"金寨县",value:"341524"},{label:"霍山县",value:"341525"}],[{label:"谯城区",value:"341602"},{label:"涡阳县",value:"341621"},{label:"蒙城县",value:"341622"},{label:"利辛县",value:"341623"}],[{label:"贵池区",value:"341702"},{label:"东至县",value:"341721"},{label:"石台县",value:"341722"},{label:"青阳县",value:"341723"}],[{label:"宣州区",value:"341802"},{label:"郎溪县",value:"341821"},{label:"广德县",value:"341822"},{label:"泾县",value:"341823"},{label:"绩溪县",value:"341824"},{label:"旌德县",value:"341825"},{label:"宣城市经济开发区",value:"341871"},{label:"宁国市",value:"341881"}]],[[{label:"鼓楼区",value:"350102"},{label:"台江区",value:"350103"},{label:"仓山区",value:"350104"},{label:"马尾区",value:"350105"},{label:"晋安区",value:"350111"},{label:"闽侯县",value:"350121"},{label:"连江县",value:"350122"},{label:"罗源县",value:"350123"},{label:"闽清县",value:"350124"},{label:"永泰县",value:"350125"},{label:"平潭县",value:"350128"},{label:"福清市",value:"350181"},{label:"长乐市",value:"350182"}],[{label:"思明区",value:"350203"},{label:"海沧区",value:"350205"},{label:"湖里区",value:"350206"},{label:"集美区",value:"350211"},{label:"同安区",value:"350212"},{label:"翔安区",value:"350213"}],[{label:"城厢区",value:"350302"},{label:"涵江区",value:"350303"},{label:"荔城区",value:"350304"},{label:"秀屿区",value:"350305"},{label:"仙游县",value:"350322"}],[{label:"梅列区",value:"350402"},{label:"三元区",value:"350403"},{label:"明溪县",value:"350421"},{label:"清流县",value:"350423"},{label:"宁化县",value:"350424"},{label:"大田县",value:"350425"},{label:"尤溪县",value:"350426"},{label:"沙县",value:"350427"},{label:"将乐县",value:"350428"},{label:"泰宁县",value:"350429"},{label:"建宁县",value:"350430"},{label:"永安市",value:"350481"}],[{label:"鲤城区",value:"350502"},{label:"丰泽区",value:"350503"},{label:"洛江区",value:"350504"},{label:"泉港区",value:"350505"},{label:"惠安县",value:"350521"},{label:"安溪县",value:"350524"},{label:"永春县",value:"350525"},{label:"德化县",value:"350526"},{label:"金门县",value:"350527"},{label:"石狮市",value:"350581"},{label:"晋江市",value:"350582"},{label:"南安市",value:"350583"}],[{label:"芗城区",value:"350602"},{label:"龙文区",value:"350603"},{label:"云霄县",value:"350622"},{label:"漳浦县",value:"350623"},{label:"诏安县",value:"350624"},{label:"长泰县",value:"350625"},{label:"东山县",value:"350626"},{label:"南靖县",value:"350627"},{label:"平和县",value:"350628"},{label:"华安县",value:"350629"},{label:"龙海市",value:"350681"}],[{label:"延平区",value:"350702"},{label:"建阳区",value:"350703"},{label:"顺昌县",value:"350721"},{label:"浦城县",value:"350722"},{label:"光泽县",value:"350723"},{label:"松溪县",value:"350724"},{label:"政和县",value:"350725"},{label:"邵武市",value:"350781"},{label:"武夷山市",value:"350782"},{label:"建瓯市",value:"350783"}],[{label:"新罗区",value:"350802"},{label:"永定区",value:"350803"},{label:"长汀县",value:"350821"},{label:"上杭县",value:"350823"},{label:"武平县",value:"350824"},{label:"连城县",value:"350825"},{label:"漳平市",value:"350881"}],[{label:"蕉城区",value:"350902"},{label:"霞浦县",value:"350921"},{label:"古田县",value:"350922"},{label:"屏南县",value:"350923"},{label:"寿宁县",value:"350924"},{label:"周宁县",value:"350925"},{label:"柘荣县",value:"350926"},{label:"福安市",value:"350981"},{label:"福鼎市",value:"350982"}]],[[{label:"东湖区",value:"360102"},{label:"西湖区",value:"360103"},{label:"青云谱区",value:"360104"},{label:"湾里区",value:"360105"},{label:"青山湖区",value:"360111"},{label:"新建区",value:"360112"},{label:"南昌县",value:"360121"},{label:"安义县",value:"360123"},{label:"进贤县",value:"360124"}],[{label:"昌江区",value:"360202"},{label:"珠山区",value:"360203"},{label:"浮梁县",value:"360222"},{label:"乐平市",value:"360281"}],[{label:"安源区",value:"360302"},{label:"湘东区",value:"360313"},{label:"莲花县",value:"360321"},{label:"上栗县",value:"360322"},{label:"芦溪县",value:"360323"}],[{label:"濂溪区",value:"360402"},{label:"浔阳区",value:"360403"},{label:"柴桑区",value:"360404"},{label:"武宁县",value:"360423"},{label:"修水县",value:"360424"},{label:"永修县",value:"360425"},{label:"德安县",value:"360426"},{label:"都昌县",value:"360428"},{label:"湖口县",value:"360429"},{label:"彭泽县",value:"360430"},{label:"瑞昌市",value:"360481"},{label:"共青城市",value:"360482"},{label:"庐山市",value:"360483"}],[{label:"渝水区",value:"360502"},{label:"分宜县",value:"360521"}],[{label:"月湖区",value:"360602"},{label:"余江县",value:"360622"},{label:"贵溪市",value:"360681"}],[{label:"章贡区",value:"360702"},{label:"南康区",value:"360703"},{label:"赣县区",value:"360704"},{label:"信丰县",value:"360722"},{label:"大余县",value:"360723"},{label:"上犹县",value:"360724"},{label:"崇义县",value:"360725"},{label:"安远县",value:"360726"},{label:"龙南县",value:"360727"},{label:"定南县",value:"360728"},{label:"全南县",value:"360729"},{label:"宁都县",value:"360730"},{label:"于都县",value:"360731"},{label:"兴国县",value:"360732"},{label:"会昌县",value:"360733"},{label:"寻乌县",value:"360734"},{label:"石城县",value:"360735"},{label:"瑞金市",value:"360781"}],[{label:"吉州区",value:"360802"},{label:"青原区",value:"360803"},{label:"吉安县",value:"360821"},{label:"吉水县",value:"360822"},{label:"峡江县",value:"360823"},{label:"新干县",value:"360824"},{label:"永丰县",value:"360825"},{label:"泰和县",value:"360826"},{label:"遂川县",value:"360827"},{label:"万安县",value:"360828"},{label:"安福县",value:"360829"},{label:"永新县",value:"360830"},{label:"井冈山市",value:"360881"}],[{label:"袁州区",value:"360902"},{label:"奉新县",value:"360921"},{label:"万载县",value:"360922"},{label:"上高县",value:"360923"},{label:"宜丰县",value:"360924"},{label:"靖安县",value:"360925"},{label:"铜鼓县",value:"360926"},{label:"丰城市",value:"360981"},{label:"樟树市",value:"360982"},{label:"高安市",value:"360983"}],[{label:"临川区",value:"361002"},{label:"东乡区",value:"361003"},{label:"南城县",value:"361021"},{label:"黎川县",value:"361022"},{label:"南丰县",value:"361023"},{label:"崇仁县",value:"361024"},{label:"乐安县",value:"361025"},{label:"宜黄县",value:"361026"},{label:"金溪县",value:"361027"},{label:"资溪县",value:"361028"},{label:"广昌县",value:"361030"}],[{label:"信州区",value:"361102"},{label:"广丰区",value:"361103"},{label:"上饶县",value:"361121"},{label:"玉山县",value:"361123"},{label:"铅山县",value:"361124"},{label:"横峰县",value:"361125"},{label:"弋阳县",value:"361126"},{label:"余干县",value:"361127"},{label:"鄱阳县",value:"361128"},{label:"万年县",value:"361129"},{label:"婺源县",value:"361130"},{label:"德兴市",value:"361181"}]],[[{label:"历下区",value:"370102"},{label:"市中区",value:"370103"},{label:"槐荫区",value:"370104"},{label:"天桥区",value:"370105"},{label:"历城区",value:"370112"},{label:"长清区",value:"370113"},{label:"章丘区",value:"370114"},{label:"平阴县",value:"370124"},{label:"济阳县",value:"370125"},{label:"商河县",value:"370126"},{label:"济南高新技术产业开发区",value:"370171"}],[{label:"市南区",value:"370202"},{label:"市北区",value:"370203"},{label:"黄岛区",value:"370211"},{label:"崂山区",value:"370212"},{label:"李沧区",value:"370213"},{label:"城阳区",value:"370214"},{label:"即墨区",value:"370215"},{label:"青岛高新技术产业开发区",value:"370271"},{label:"胶州市",value:"370281"},{label:"平度市",value:"370283"},{label:"莱西市",value:"370285"}],[{label:"淄川区",value:"370302"},{label:"张店区",value:"370303"},{label:"博山区",value:"370304"},{label:"临淄区",value:"370305"},{label:"周村区",value:"370306"},{label:"桓台县",value:"370321"},{label:"高青县",value:"370322"},{label:"沂源县",value:"370323"}],[{label:"市中区",value:"370402"},{label:"薛城区",value:"370403"},{label:"峄城区",value:"370404"},{label:"台儿庄区",value:"370405"},{label:"山亭区",value:"370406"},{label:"滕州市",value:"370481"}],[{label:"东营区",value:"370502"},{label:"河口区",value:"370503"},{label:"垦利区",value:"370505"},{label:"利津县",value:"370522"},{label:"广饶县",value:"370523"},{label:"东营经济技术开发区",value:"370571"},{label:"东营港经济开发区",value:"370572"}],[{label:"芝罘区",value:"370602"},{label:"福山区",value:"370611"},{label:"牟平区",value:"370612"},{label:"莱山区",value:"370613"},{label:"长岛县",value:"370634"},{label:"烟台高新技术产业开发区",value:"370671"},{label:"烟台经济技术开发区",value:"370672"},{label:"龙口市",value:"370681"},{label:"莱阳市",value:"370682"},{label:"莱州市",value:"370683"},{label:"蓬莱市",value:"370684"},{label:"招远市",value:"370685"},{label:"栖霞市",value:"370686"},{label:"海阳市",value:"370687"}],[{label:"潍城区",value:"370702"},{label:"寒亭区",value:"370703"},{label:"坊子区",value:"370704"},{label:"奎文区",value:"370705"},{label:"临朐县",value:"370724"},{label:"昌乐县",value:"370725"},{label:"潍坊滨海经济技术开发区",value:"370772"},{label:"青州市",value:"370781"},{label:"诸城市",value:"370782"},{label:"寿光市",value:"370783"},{label:"安丘市",value:"370784"},{label:"高密市",value:"370785"},{label:"昌邑市",value:"370786"}],[{label:"任城区",value:"370811"},{label:"兖州区",value:"370812"},{label:"微山县",value:"370826"},{label:"鱼台县",value:"370827"},{label:"金乡县",value:"370828"},{label:"嘉祥县",value:"370829"},{label:"汶上县",value:"370830"},{label:"泗水县",value:"370831"},{label:"梁山县",value:"370832"},{label:"济宁高新技术产业开发区",value:"370871"},{label:"曲阜市",value:"370881"},{label:"邹城市",value:"370883"}],[{label:"泰山区",value:"370902"},{label:"岱岳区",value:"370911"},{label:"宁阳县",value:"370921"},{label:"东平县",value:"370923"},{label:"新泰市",value:"370982"},{label:"肥城市",value:"370983"}],[{label:"环翠区",value:"371002"},{label:"文登区",value:"371003"},{label:"威海火炬高技术产业开发区",value:"371071"},{label:"威海经济技术开发区",value:"371072"},{label:"威海临港经济技术开发区",value:"371073"},{label:"荣成市",value:"371082"},{label:"乳山市",value:"371083"}],[{label:"东港区",value:"371102"},{label:"岚山区",value:"371103"},{label:"五莲县",value:"371121"},{label:"莒县",value:"371122"},{label:"日照经济技术开发区",value:"371171"},{label:"日照国际海洋城",value:"371172"}],[{label:"莱城区",value:"371202"},{label:"钢城区",value:"371203"}],[{label:"兰山区",value:"371302"},{label:"罗庄区",value:"371311"},{label:"河东区",value:"371312"},{label:"沂南县",value:"371321"},{label:"郯城县",value:"371322"},{label:"沂水县",value:"371323"},{label:"兰陵县",value:"371324"},{label:"费县",value:"371325"},{label:"平邑县",value:"371326"},{label:"莒南县",value:"371327"},{label:"蒙阴县",value:"371328"},{label:"临沭县",value:"371329"},{label:"临沂高新技术产业开发区",value:"371371"},{label:"临沂经济技术开发区",value:"371372"},{label:"临沂临港经济开发区",value:"371373"}],[{label:"德城区",value:"371402"},{label:"陵城区",value:"371403"},{label:"宁津县",value:"371422"},{label:"庆云县",value:"371423"},{label:"临邑县",value:"371424"},{label:"齐河县",value:"371425"},{label:"平原县",value:"371426"},{label:"夏津县",value:"371427"},{label:"武城县",value:"371428"},{label:"德州经济技术开发区",value:"371471"},{label:"德州运河经济开发区",value:"371472"},{label:"乐陵市",value:"371481"},{label:"禹城市",value:"371482"}],[{label:"东昌府区",value:"371502"},{label:"阳谷县",value:"371521"},{label:"莘县",value:"371522"},{label:"茌平县",value:"371523"},{label:"东阿县",value:"371524"},{label:"冠县",value:"371525"},{label:"高唐县",value:"371526"},{label:"临清市",value:"371581"}],[{label:"滨城区",value:"371602"},{label:"沾化区",value:"371603"},{label:"惠民县",value:"371621"},{label:"阳信县",value:"371622"},{label:"无棣县",value:"371623"},{label:"博兴县",value:"371625"},{label:"邹平县",value:"371626"}],[{label:"牡丹区",value:"371702"},{label:"定陶区",value:"371703"},{label:"曹县",value:"371721"},{label:"单县",value:"371722"},{label:"成武县",value:"371723"},{label:"巨野县",value:"371724"},{label:"郓城县",value:"371725"},{label:"鄄城县",value:"371726"},{label:"东明县",value:"371728"},{label:"菏泽经济技术开发区",value:"371771"},{label:"菏泽高新技术开发区",value:"371772"}]],[[{label:"中原区",value:"410102"},{label:"二七区",value:"410103"},{label:"管城回族区",value:"410104"},{label:"金水区",value:"410105"},{label:"上街区",value:"410106"},{label:"惠济区",value:"410108"},{label:"中牟县",value:"410122"},{label:"郑州经济技术开发区",value:"410171"},{label:"郑州高新技术产业开发区",value:"410172"},{label:"郑州航空港经济综合实验区",value:"410173"},{label:"巩义市",value:"410181"},{label:"荥阳市",value:"410182"},{label:"新密市",value:"410183"},{label:"新郑市",value:"410184"},{label:"登封市",value:"410185"}],[{label:"龙亭区",value:"410202"},{label:"顺河回族区",value:"410203"},{label:"鼓楼区",value:"410204"},{label:"禹王台区",value:"410205"},{label:"祥符区",value:"410212"},{label:"杞县",value:"410221"},{label:"通许县",value:"410222"},{label:"尉氏县",value:"410223"},{label:"兰考县",value:"410225"}],[{label:"老城区",value:"410302"},{label:"西工区",value:"410303"},{label:"瀍河回族区",value:"410304"},{label:"涧西区",value:"410305"},{label:"吉利区",value:"410306"},{label:"洛龙区",value:"410311"},{label:"孟津县",value:"410322"},{label:"新安县",value:"410323"},{label:"栾川县",value:"410324"},{label:"嵩县",value:"410325"},{label:"汝阳县",value:"410326"},{label:"宜阳县",value:"410327"},{label:"洛宁县",value:"410328"},{label:"伊川县",value:"410329"},{label:"洛阳高新技术产业开发区",value:"410371"},{label:"偃师市",value:"410381"}],[{label:"新华区",value:"410402"},{label:"卫东区",value:"410403"},{label:"石龙区",value:"410404"},{label:"湛河区",value:"410411"},{label:"宝丰县",value:"410421"},{label:"叶县",value:"410422"},{label:"鲁山县",value:"410423"},{label:"郏县",value:"410425"},{label:"平顶山高新技术产业开发区",value:"410471"},{label:"平顶山市新城区",value:"410472"},{label:"舞钢市",value:"410481"},{label:"汝州市",value:"410482"}],[{label:"文峰区",value:"410502"},{label:"北关区",value:"410503"},{label:"殷都区",value:"410505"},{label:"龙安区",value:"410506"},{label:"安阳县",value:"410522"},{label:"汤阴县",value:"410523"},{label:"滑县",value:"410526"},{label:"内黄县",value:"410527"},{label:"安阳高新技术产业开发区",value:"410571"},{label:"林州市",value:"410581"}],[{label:"鹤山区",value:"410602"},{label:"山城区",value:"410603"},{label:"淇滨区",value:"410611"},{label:"浚县",value:"410621"},{label:"淇县",value:"410622"},{label:"鹤壁经济技术开发区",value:"410671"}],[{label:"红旗区",value:"410702"},{label:"卫滨区",value:"410703"},{label:"凤泉区",value:"410704"},{label:"牧野区",value:"410711"},{label:"新乡县",value:"410721"},{label:"获嘉县",value:"410724"},{label:"原阳县",value:"410725"},{label:"延津县",value:"410726"},{label:"封丘县",value:"410727"},{label:"长垣县",value:"410728"},{label:"新乡高新技术产业开发区",value:"410771"},{label:"新乡经济技术开发区",value:"410772"},{label:"新乡市平原城乡一体化示范区",value:"410773"},{label:"卫辉市",value:"410781"},{label:"辉县市",value:"410782"}],[{label:"解放区",value:"410802"},{label:"中站区",value:"410803"},{label:"马村区",value:"410804"},{label:"山阳区",value:"410811"},{label:"修武县",value:"410821"},{label:"博爱县",value:"410822"},{label:"武陟县",value:"410823"},{label:"温县",value:"410825"},{label:"焦作城乡一体化示范区",value:"410871"},{label:"沁阳市",value:"410882"},{label:"孟州市",value:"410883"}],[{label:"华龙区",value:"410902"},{label:"清丰县",value:"410922"},{label:"南乐县",value:"410923"},{label:"范县",value:"410926"},{label:"台前县",value:"410927"},{label:"濮阳县",value:"410928"},{label:"河南濮阳工业园区",value:"410971"},{label:"濮阳经济技术开发区",value:"410972"}],[{label:"魏都区",value:"411002"},{label:"建安区",value:"411003"},{label:"鄢陵县",value:"411024"},{label:"襄城县",value:"411025"},{label:"许昌经济技术开发区",value:"411071"},{label:"禹州市",value:"411081"},{label:"长葛市",value:"411082"}],[{label:"源汇区",value:"411102"},{label:"郾城区",value:"411103"},{label:"召陵区",value:"411104"},{label:"舞阳县",value:"411121"},{label:"临颍县",value:"411122"},{label:"漯河经济技术开发区",value:"411171"}],[{label:"湖滨区",value:"411202"},{label:"陕州区",value:"411203"},{label:"渑池县",value:"411221"},{label:"卢氏县",value:"411224"},{label:"河南三门峡经济开发区",value:"411271"},{label:"义马市",value:"411281"},{label:"灵宝市",value:"411282"}],[{label:"宛城区",value:"411302"},{label:"卧龙区",value:"411303"},{label:"南召县",value:"411321"},{label:"方城县",value:"411322"},{label:"西峡县",value:"411323"},{label:"镇平县",value:"411324"},{label:"内乡县",value:"411325"},{label:"淅川县",value:"411326"},{label:"社旗县",value:"411327"},{label:"唐河县",value:"411328"},{label:"新野县",value:"411329"},{label:"桐柏县",value:"411330"},{label:"南阳高新技术产业开发区",value:"411371"},{label:"南阳市城乡一体化示范区",value:"411372"},{label:"邓州市",value:"411381"}],[{label:"梁园区",value:"411402"},{label:"睢阳区",value:"411403"},{label:"民权县",value:"411421"},{label:"睢县",value:"411422"},{label:"宁陵县",value:"411423"},{label:"柘城县",value:"411424"},{label:"虞城县",value:"411425"},{label:"夏邑县",value:"411426"},{label:"豫东综合物流产业聚集区",value:"411471"},{label:"河南商丘经济开发区",value:"411472"},{label:"永城市",value:"411481"}],[{label:"浉河区",value:"411502"},{label:"平桥区",value:"411503"},{label:"罗山县",value:"411521"},{label:"光山县",value:"411522"},{label:"新县",value:"411523"},{label:"商城县",value:"411524"},{label:"固始县",value:"411525"},{label:"潢川县",value:"411526"},{label:"淮滨县",value:"411527"},{label:"息县",value:"411528"},{label:"信阳高新技术产业开发区",value:"411571"}],[{label:"川汇区",value:"411602"},{label:"扶沟县",value:"411621"},{label:"西华县",value:"411622"},{label:"商水县",value:"411623"},{label:"沈丘县",value:"411624"},{label:"郸城县",value:"411625"},{label:"淮阳县",value:"411626"},{label:"太康县",value:"411627"},{label:"鹿邑县",value:"411628"},{label:"河南周口经济开发区",value:"411671"},{label:"项城市",value:"411681"}],[{label:"驿城区",value:"411702"},{label:"西平县",value:"411721"},{label:"上蔡县",value:"411722"},{label:"平舆县",value:"411723"},{label:"正阳县",value:"411724"},{label:"确山县",value:"411725"},{label:"泌阳县",value:"411726"},{label:"汝南县",value:"411727"},{label:"遂平县",value:"411728"},{label:"新蔡县",value:"411729"},{label:"河南驻马店经济开发区",value:"411771"}],[{label:"济源市",value:"419001"}]],[[{label:"江岸区",value:"420102"},{label:"江汉区",value:"420103"},{label:"硚口区",value:"420104"},{label:"汉阳区",value:"420105"},{label:"武昌区",value:"420106"},{label:"青山区",value:"420107"},{label:"洪山区",value:"420111"},{label:"东西湖区",value:"420112"},{label:"汉南区",value:"420113"},{label:"蔡甸区",value:"420114"},{label:"江夏区",value:"420115"},{label:"黄陂区",value:"420116"},{label:"新洲区",value:"420117"}],[{label:"黄石港区",value:"420202"},{label:"西塞山区",value:"420203"},{label:"下陆区",value:"420204"},{label:"铁山区",value:"420205"},{label:"阳新县",value:"420222"},{label:"大冶市",value:"420281"}],[{label:"茅箭区",value:"420302"},{label:"张湾区",value:"420303"},{label:"郧阳区",value:"420304"},{label:"郧西县",value:"420322"},{label:"竹山县",value:"420323"},{label:"竹溪县",value:"420324"},{label:"房县",value:"420325"},{label:"丹江口市",value:"420381"}],[{label:"西陵区",value:"420502"},{label:"伍家岗区",value:"420503"},{label:"点军区",value:"420504"},{label:"猇亭区",value:"420505"},{label:"夷陵区",value:"420506"},{label:"远安县",value:"420525"},{label:"兴山县",value:"420526"},{label:"秭归县",value:"420527"},{label:"长阳土家族自治县",value:"420528"},{label:"五峰土家族自治县",value:"420529"},{label:"宜都市",value:"420581"},{label:"当阳市",value:"420582"},{label:"枝江市",value:"420583"}],[{label:"襄城区",value:"420602"},{label:"樊城区",value:"420606"},{label:"襄州区",value:"420607"},{label:"南漳县",value:"420624"},{label:"谷城县",value:"420625"},{label:"保康县",value:"420626"},{label:"老河口市",value:"420682"},{label:"枣阳市",value:"420683"},{label:"宜城市",value:"420684"}],[{label:"梁子湖区",value:"420702"},{label:"华容区",value:"420703"},{label:"鄂城区",value:"420704"}],[{label:"东宝区",value:"420802"},{label:"掇刀区",value:"420804"},{label:"京山县",value:"420821"},{label:"沙洋县",value:"420822"},{label:"钟祥市",value:"420881"}],[{label:"孝南区",value:"420902"},{label:"孝昌县",value:"420921"},{label:"大悟县",value:"420922"},{label:"云梦县",value:"420923"},{label:"应城市",value:"420981"},{label:"安陆市",value:"420982"},{label:"汉川市",value:"420984"}],[{label:"沙市区",value:"421002"},{label:"荆州区",value:"421003"},{label:"公安县",value:"421022"},{label:"监利县",value:"421023"},{label:"江陵县",value:"421024"},{label:"荆州经济技术开发区",value:"421071"},{label:"石首市",value:"421081"},{label:"洪湖市",value:"421083"},{label:"松滋市",value:"421087"}],[{label:"黄州区",value:"421102"},{label:"团风县",value:"421121"},{label:"红安县",value:"421122"},{label:"罗田县",value:"421123"},{label:"英山县",value:"421124"},{label:"浠水县",value:"421125"},{label:"蕲春县",value:"421126"},{label:"黄梅县",value:"421127"},{label:"龙感湖管理区",value:"421171"},{label:"麻城市",value:"421181"},{label:"武穴市",value:"421182"}],[{label:"咸安区",value:"421202"},{label:"嘉鱼县",value:"421221"},{label:"通城县",value:"421222"},{label:"崇阳县",value:"421223"},{label:"通山县",value:"421224"},{label:"赤壁市",value:"421281"}],[{label:"曾都区",value:"421303"},{label:"随县",value:"421321"},{label:"广水市",value:"421381"}],[{label:"恩施市",value:"422801"},{label:"利川市",value:"422802"},{label:"建始县",value:"422822"},{label:"巴东县",value:"422823"},{label:"宣恩县",value:"422825"},{label:"咸丰县",value:"422826"},{label:"来凤县",value:"422827"},{label:"鹤峰县",value:"422828"}],[{label:"仙桃市",value:"429004"},{label:"潜江市",value:"429005"},{label:"天门市",value:"429006"},{label:"神农架林区",value:"429021"}]],[[{label:"芙蓉区",value:"430102"},{label:"天心区",value:"430103"},{label:"岳麓区",value:"430104"},{label:"开福区",value:"430105"},{label:"雨花区",value:"430111"},{label:"望城区",value:"430112"},{label:"长沙县",value:"430121"},{label:"浏阳市",value:"430181"},{label:"宁乡市",value:"430182"}],[{label:"荷塘区",value:"430202"},{label:"芦淞区",value:"430203"},{label:"石峰区",value:"430204"},{label:"天元区",value:"430211"},{label:"株洲县",value:"430221"},{label:"攸县",value:"430223"},{label:"茶陵县",value:"430224"},{label:"炎陵县",value:"430225"},{label:"云龙示范区",value:"430271"},{label:"醴陵市",value:"430281"}],[{label:"雨湖区",value:"430302"},{label:"岳塘区",value:"430304"},{label:"湘潭县",value:"430321"},{label:"湖南湘潭高新技术产业园区",value:"430371"},{label:"湘潭昭山示范区",value:"430372"},{label:"湘潭九华示范区",value:"430373"},{label:"湘乡市",value:"430381"},{label:"韶山市",value:"430382"}],[{label:"珠晖区",value:"430405"},{label:"雁峰区",value:"430406"},{label:"石鼓区",value:"430407"},{label:"蒸湘区",value:"430408"},{label:"南岳区",value:"430412"},{label:"衡阳县",value:"430421"},{label:"衡南县",value:"430422"},{label:"衡山县",value:"430423"},{label:"衡东县",value:"430424"},{label:"祁东县",value:"430426"},{label:"衡阳综合保税区",value:"430471"},{label:"湖南衡阳高新技术产业园区",value:"430472"},{label:"湖南衡阳松木经济开发区",value:"430473"},{label:"耒阳市",value:"430481"},{label:"常宁市",value:"430482"}],[{label:"双清区",value:"430502"},{label:"大祥区",value:"430503"},{label:"北塔区",value:"430511"},{label:"邵东县",value:"430521"},{label:"新邵县",value:"430522"},{label:"邵阳县",value:"430523"},{label:"隆回县",value:"430524"},{label:"洞口县",value:"430525"},{label:"绥宁县",value:"430527"},{label:"新宁县",value:"430528"},{label:"城步苗族自治县",value:"430529"},{label:"武冈市",value:"430581"}],[{label:"岳阳楼区",value:"430602"},{label:"云溪区",value:"430603"},{label:"君山区",value:"430611"},{label:"岳阳县",value:"430621"},{label:"华容县",value:"430623"},{label:"湘阴县",value:"430624"},{label:"平江县",value:"430626"},{label:"岳阳市屈原管理区",value:"430671"},{label:"汨罗市",value:"430681"},{label:"临湘市",value:"430682"}],[{label:"武陵区",value:"430702"},{label:"鼎城区",value:"430703"},{label:"安乡县",value:"430721"},{label:"汉寿县",value:"430722"},{label:"澧县",value:"430723"},{label:"临澧县",value:"430724"},{label:"桃源县",value:"430725"},{label:"石门县",value:"430726"},{label:"常德市西洞庭管理区",value:"430771"},{label:"津市市",value:"430781"}],[{label:"永定区",value:"430802"},{label:"武陵源区",value:"430811"},{label:"慈利县",value:"430821"},{label:"桑植县",value:"430822"}],[{label:"资阳区",value:"430902"},{label:"赫山区",value:"430903"},{label:"南县",value:"430921"},{label:"桃江县",value:"430922"},{label:"安化县",value:"430923"},{label:"益阳市大通湖管理区",value:"430971"},{label:"湖南益阳高新技术产业园区",value:"430972"},{label:"沅江市",value:"430981"}],[{label:"北湖区",value:"431002"},{label:"苏仙区",value:"431003"},{label:"桂阳县",value:"431021"},{label:"宜章县",value:"431022"},{label:"永兴县",value:"431023"},{label:"嘉禾县",value:"431024"},{label:"临武县",value:"431025"},{label:"汝城县",value:"431026"},{label:"桂东县",value:"431027"},{label:"安仁县",value:"431028"},{label:"资兴市",value:"431081"}],[{label:"零陵区",value:"431102"},{label:"冷水滩区",value:"431103"},{label:"祁阳县",value:"431121"},{label:"东安县",value:"431122"},{label:"双牌县",value:"431123"},{label:"道县",value:"431124"},{label:"江永县",value:"431125"},{label:"宁远县",value:"431126"},{label:"蓝山县",value:"431127"},{label:"新田县",value:"431128"},{label:"江华瑶族自治县",value:"431129"},{label:"永州经济技术开发区",value:"431171"},{label:"永州市金洞管理区",value:"431172"},{label:"永州市回龙圩管理区",value:"431173"}],[{label:"鹤城区",value:"431202"},{label:"中方县",value:"431221"},{label:"沅陵县",value:"431222"},{label:"辰溪县",value:"431223"},{label:"溆浦县",value:"431224"},{label:"会同县",value:"431225"},{label:"麻阳苗族自治县",value:"431226"},{label:"新晃侗族自治县",value:"431227"},{label:"芷江侗族自治县",value:"431228"},{label:"靖州苗族侗族自治县",value:"431229"},{label:"通道侗族自治县",value:"431230"},{label:"怀化市洪江管理区",value:"431271"},{label:"洪江市",value:"431281"}],[{label:"娄星区",value:"431302"},{label:"双峰县",value:"431321"},{label:"新化县",value:"431322"},{label:"冷水江市",value:"431381"},{label:"涟源市",value:"431382"}],[{label:"吉首市",value:"433101"},{label:"泸溪县",value:"433122"},{label:"凤凰县",value:"433123"},{label:"花垣县",value:"433124"},{label:"保靖县",value:"433125"},{label:"古丈县",value:"433126"},{label:"永顺县",value:"433127"},{label:"龙山县",value:"433130"},{label:"湖南吉首经济开发区",value:"433172"},{label:"湖南永顺经济开发区",value:"433173"}]],[[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"},{label:"天河区",value:"440106"},{label:"白云区",value:"440111"},{label:"黄埔区",value:"440112"},{label:"番禺区",value:"440113"},{label:"花都区",value:"440114"},{label:"南沙区",value:"440115"},{label:"从化区",value:"440117"},{label:"增城区",value:"440118"}],[{label:"武江区",value:"440203"},{label:"浈江区",value:"440204"},{label:"曲江区",value:"440205"},{label:"始兴县",value:"440222"},{label:"仁化县",value:"440224"},{label:"翁源县",value:"440229"},{label:"乳源瑶族自治县",value:"440232"},{label:"新丰县",value:"440233"},{label:"乐昌市",value:"440281"},{label:"南雄市",value:"440282"}],[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"},{label:"南山区",value:"440305"},{label:"宝安区",value:"440306"},{label:"龙岗区",value:"440307"},{label:"盐田区",value:"440308"},{label:"龙华区",value:"440309"},{label:"坪山区",value:"440310"}],[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"},{label:"濠江区",value:"440512"},{label:"潮阳区",value:"440513"},{label:"潮南区",value:"440514"},{label:"澄海区",value:"440515"},{label:"南澳县",value:"440523"}],[{label:"禅城区",value:"440604"},{label:"南海区",value:"440605"},{label:"顺德区",value:"440606"},{label:"三水区",value:"440607"},{label:"高明区",value:"440608"}],[{label:"蓬江区",value:"440703"},{label:"江海区",value:"440704"},{label:"新会区",value:"440705"},{label:"台山市",value:"440781"},{label:"开平市",value:"440783"},{label:"鹤山市",value:"440784"},{label:"恩平市",value:"440785"}],[{label:"赤坎区",value:"440802"},{label:"霞山区",value:"440803"},{label:"坡头区",value:"440804"},{label:"麻章区",value:"440811"},{label:"遂溪县",value:"440823"},{label:"徐闻县",value:"440825"},{label:"廉江市",value:"440881"},{label:"雷州市",value:"440882"},{label:"吴川市",value:"440883"}],[{label:"茂南区",value:"440902"},{label:"电白区",value:"440904"},{label:"高州市",value:"440981"},{label:"化州市",value:"440982"},{label:"信宜市",value:"440983"}],[{label:"端州区",value:"441202"},{label:"鼎湖区",value:"441203"},{label:"高要区",value:"441204"},{label:"广宁县",value:"441223"},{label:"怀集县",value:"441224"},{label:"封开县",value:"441225"},{label:"德庆县",value:"441226"},{label:"四会市",value:"441284"}],[{label:"惠城区",value:"441302"},{label:"惠阳区",value:"441303"},{label:"博罗县",value:"441322"},{label:"惠东县",value:"441323"},{label:"龙门县",value:"441324"}],[{label:"梅江区",value:"441402"},{label:"梅县区",value:"441403"},{label:"大埔县",value:"441422"},{label:"丰顺县",value:"441423"},{label:"五华县",value:"441424"},{label:"平远县",value:"441426"},{label:"蕉岭县",value:"441427"},{label:"兴宁市",value:"441481"}],[{label:"城区",value:"441502"},{label:"海丰县",value:"441521"},{label:"陆河县",value:"441523"},{label:"陆丰市",value:"441581"}],[{label:"源城区",value:"441602"},{label:"紫金县",value:"441621"},{label:"龙川县",value:"441622"},{label:"连平县",value:"441623"},{label:"和平县",value:"441624"},{label:"东源县",value:"441625"}],[{label:"江城区",value:"441702"},{label:"阳东区",value:"441704"},{label:"阳西县",value:"441721"},{label:"阳春市",value:"441781"}],[{label:"清城区",value:"441802"},{label:"清新区",value:"441803"},{label:"佛冈县",value:"441821"},{label:"阳山县",value:"441823"},{label:"连山壮族瑶族自治县",value:"441825"},{label:"连南瑶族自治县",value:"441826"},{label:"英德市",value:"441881"},{label:"连州市",value:"441882"}],[{label:"东莞市",value:"441900"}],[{label:"中山市",value:"442000"}],[{label:"湘桥区",value:"445102"},{label:"潮安区",value:"445103"},{label:"饶平县",value:"445122"}],[{label:"榕城区",value:"445202"},{label:"揭东区",value:"445203"},{label:"揭西县",value:"445222"},{label:"惠来县",value:"445224"},{label:"普宁市",value:"445281"}],[{label:"云城区",value:"445302"},{label:"云安区",value:"445303"},{label:"新兴县",value:"445321"},{label:"郁南县",value:"445322"},{label:"罗定市",value:"445381"}]],[[{label:"兴宁区",value:"450102"},{label:"青秀区",value:"450103"},{label:"江南区",value:"450105"},{label:"西乡塘区",value:"450107"},{label:"良庆区",value:"450108"},{label:"邕宁区",value:"450109"},{label:"武鸣区",value:"450110"},{label:"隆安县",value:"450123"},{label:"马山县",value:"450124"},{label:"上林县",value:"450125"},{label:"宾阳县",value:"450126"},{label:"横县",value:"450127"}],[{label:"城中区",value:"450202"},{label:"鱼峰区",value:"450203"},{label:"柳南区",value:"450204"},{label:"柳北区",value:"450205"},{label:"柳江区",value:"450206"},{label:"柳城县",value:"450222"},{label:"鹿寨县",value:"450223"},{label:"融安县",value:"450224"},{label:"融水苗族自治县",value:"450225"},{label:"三江侗族自治县",value:"450226"}],[{label:"秀峰区",value:"450302"},{label:"叠彩区",value:"450303"},{label:"象山区",value:"450304"},{label:"七星区",value:"450305"},{label:"雁山区",value:"450311"},{label:"临桂区",value:"450312"},{label:"阳朔县",value:"450321"},{label:"灵川县",value:"450323"},{label:"全州县",value:"450324"},{label:"兴安县",value:"450325"},{label:"永福县",value:"450326"},{label:"灌阳县",value:"450327"},{label:"龙胜各族自治县",value:"450328"},{label:"资源县",value:"450329"},{label:"平乐县",value:"450330"},{label:"荔浦县",value:"450331"},{label:"恭城瑶族自治县",value:"450332"}],[{label:"万秀区",value:"450403"},{label:"长洲区",value:"450405"},{label:"龙圩区",value:"450406"},{label:"苍梧县",value:"450421"},{label:"藤县",value:"450422"},{label:"蒙山县",value:"450423"},{label:"岑溪市",value:"450481"}],[{label:"海城区",value:"450502"},{label:"银海区",value:"450503"},{label:"铁山港区",value:"450512"},{label:"合浦县",value:"450521"}],[{label:"港口区",value:"450602"},{label:"防城区",value:"450603"},{label:"上思县",value:"450621"},{label:"东兴市",value:"450681"}],[{label:"钦南区",value:"450702"},{label:"钦北区",value:"450703"},{label:"灵山县",value:"450721"},{label:"浦北县",value:"450722"}],[{label:"港北区",value:"450802"},{label:"港南区",value:"450803"},{label:"覃塘区",value:"450804"},{label:"平南县",value:"450821"},{label:"桂平市",value:"450881"}],[{label:"玉州区",value:"450902"},{label:"福绵区",value:"450903"},{label:"容县",value:"450921"},{label:"陆川县",value:"450922"},{label:"博白县",value:"450923"},{label:"兴业县",value:"450924"},{label:"北流市",value:"450981"}],[{label:"右江区",value:"451002"},{label:"田阳县",value:"451021"},{label:"田东县",value:"451022"},{label:"平果县",value:"451023"},{label:"德保县",value:"451024"},{label:"那坡县",value:"451026"},{label:"凌云县",value:"451027"},{label:"乐业县",value:"451028"},{label:"田林县",value:"451029"},{label:"西林县",value:"451030"},{label:"隆林各族自治县",value:"451031"},{label:"靖西市",value:"451081"}],[{label:"八步区",value:"451102"},{label:"平桂区",value:"451103"},{label:"昭平县",value:"451121"},{label:"钟山县",value:"451122"},{label:"富川瑶族自治县",value:"451123"}],[{label:"金城江区",value:"451202"},{label:"宜州区",value:"451203"},{label:"南丹县",value:"451221"},{label:"天峨县",value:"451222"},{label:"凤山县",value:"451223"},{label:"东兰县",value:"451224"},{label:"罗城仫佬族自治县",value:"451225"},{label:"环江毛南族自治县",value:"451226"},{label:"巴马瑶族自治县",value:"451227"},{label:"都安瑶族自治县",value:"451228"},{label:"大化瑶族自治县",value:"451229"}],[{label:"兴宾区",value:"451302"},{label:"忻城县",value:"451321"},{label:"象州县",value:"451322"},{label:"武宣县",value:"451323"},{label:"金秀瑶族自治县",value:"451324"},{label:"合山市",value:"451381"}],[{label:"江州区",value:"451402"},{label:"扶绥县",value:"451421"},{label:"宁明县",value:"451422"},{label:"龙州县",value:"451423"},{label:"大新县",value:"451424"},{label:"天等县",value:"451425"},{label:"凭祥市",value:"451481"}]],[[{label:"秀英区",value:"460105"},{label:"龙华区",value:"460106"},{label:"琼山区",value:"460107"},{label:"美兰区",value:"460108"}],[{label:"海棠区",value:"460202"},{label:"吉阳区",value:"460203"},{label:"天涯区",value:"460204"},{label:"崖州区",value:"460205"}],[{label:"西沙群岛",value:"460321"},{label:"南沙群岛",value:"460322"},{label:"中沙群岛的岛礁及其海域",value:"460323"}],[{label:"儋州市",value:"460400"}],[{label:"五指山市",value:"469001"},{label:"琼海市",value:"469002"},{label:"文昌市",value:"469005"},{label:"万宁市",value:"469006"},{label:"东方市",value:"469007"},{label:"定安县",value:"469021"},{label:"屯昌县",value:"469022"},{label:"澄迈县",value:"469023"},{label:"临高县",value:"469024"},{label:"白沙黎族自治县",value:"469025"},{label:"昌江黎族自治县",value:"469026"},{label:"乐东黎族自治县",value:"469027"},{label:"陵水黎族自治县",value:"469028"},{label:"保亭黎族苗族自治县",value:"469029"},{label:"琼中黎族苗族自治县",value:"469030"}]],[[{label:"万州区",value:"500101"},{label:"涪陵区",value:"500102"},{label:"渝中区",value:"500103"},{label:"大渡口区",value:"500104"},{label:"江北区",value:"500105"},{label:"沙坪坝区",value:"500106"},{label:"九龙坡区",value:"500107"},{label:"南岸区",value:"500108"},{label:"北碚区",value:"500109"},{label:"綦江区",value:"500110"},{label:"大足区",value:"500111"},{label:"渝北区",value:"500112"},{label:"巴南区",value:"500113"},{label:"黔江区",value:"500114"},{label:"长寿区",value:"500115"},{label:"江津区",value:"500116"},{label:"合川区",value:"500117"},{label:"永川区",value:"500118"},{label:"南川区",value:"500119"},{label:"璧山区",value:"500120"},{label:"铜梁区",value:"500151"},{label:"潼南区",value:"500152"},{label:"荣昌区",value:"500153"},{label:"开州区",value:"500154"},{label:"梁平区",value:"500155"},{label:"武隆区",value:"500156"}],[{label:"城口县",value:"500229"},{label:"丰都县",value:"500230"},{label:"垫江县",value:"500231"},{label:"忠县",value:"500233"},{label:"云阳县",value:"500235"},{label:"奉节县",value:"500236"},{label:"巫山县",value:"500237"},{label:"巫溪县",value:"500238"},{label:"石柱土家族自治县",value:"500240"},{label:"秀山土家族苗族自治县",value:"500241"},{label:"酉阳土家族苗族自治县",value:"500242"},{label:"彭水苗族土家族自治县",value:"500243"}]],[[{label:"锦江区",value:"510104"},{label:"青羊区",value:"510105"},{label:"金牛区",value:"510106"},{label:"武侯区",value:"510107"},{label:"成华区",value:"510108"},{label:"龙泉驿区",value:"510112"},{label:"青白江区",value:"510113"},{label:"新都区",value:"510114"},{label:"温江区",value:"510115"},{label:"双流区",value:"510116"},{label:"郫都区",value:"510117"},{label:"金堂县",value:"510121"},{label:"大邑县",value:"510129"},{label:"蒲江县",value:"510131"},{label:"新津县",value:"510132"},{label:"都江堰市",value:"510181"},{label:"彭州市",value:"510182"},{label:"邛崃市",value:"510183"},{label:"崇州市",value:"510184"},{label:"简阳市",value:"510185"}],[{label:"自流井区",value:"510302"},{label:"贡井区",value:"510303"},{label:"大安区",value:"510304"},{label:"沿滩区",value:"510311"},{label:"荣县",value:"510321"},{label:"富顺县",value:"510322"}],[{label:"东区",value:"510402"},{label:"西区",value:"510403"},{label:"仁和区",value:"510411"},{label:"米易县",value:"510421"},{label:"盐边县",value:"510422"}],[{label:"江阳区",value:"510502"},{label:"纳溪区",value:"510503"},{label:"龙马潭区",value:"510504"},{label:"泸县",value:"510521"},{label:"合江县",value:"510522"},{label:"叙永县",value:"510524"},{label:"古蔺县",value:"510525"}],[{label:"旌阳区",value:"510603"},{label:"罗江区",value:"510604"},{label:"中江县",value:"510623"},{label:"广汉市",value:"510681"},{label:"什邡市",value:"510682"},{label:"绵竹市",value:"510683"}],[{label:"涪城区",value:"510703"},{label:"游仙区",value:"510704"},{label:"安州区",value:"510705"},{label:"三台县",value:"510722"},{label:"盐亭县",value:"510723"},{label:"梓潼县",value:"510725"},{label:"北川羌族自治县",value:"510726"},{label:"平武县",value:"510727"},{label:"江油市",value:"510781"}],[{label:"利州区",value:"510802"},{label:"昭化区",value:"510811"},{label:"朝天区",value:"510812"},{label:"旺苍县",value:"510821"},{label:"青川县",value:"510822"},{label:"剑阁县",value:"510823"},{label:"苍溪县",value:"510824"}],[{label:"船山区",value:"510903"},{label:"安居区",value:"510904"},{label:"蓬溪县",value:"510921"},{label:"射洪县",value:"510922"},{label:"大英县",value:"510923"}],[{label:"市中区",value:"511002"},{label:"东兴区",value:"511011"},{label:"威远县",value:"511024"},{label:"资中县",value:"511025"},{label:"内江经济开发区",value:"511071"},{label:"隆昌市",value:"511083"}],[{label:"市中区",value:"511102"},{label:"沙湾区",value:"511111"},{label:"五通桥区",value:"511112"},{label:"金口河区",value:"511113"},{label:"犍为县",value:"511123"},{label:"井研县",value:"511124"},{label:"夹江县",value:"511126"},{label:"沐川县",value:"511129"},{label:"峨边彝族自治县",value:"511132"},{label:"马边彝族自治县",value:"511133"},{label:"峨眉山市",value:"511181"}],[{label:"顺庆区",value:"511302"},{label:"高坪区",value:"511303"},{label:"嘉陵区",value:"511304"},{label:"南部县",value:"511321"},{label:"营山县",value:"511322"},{label:"蓬安县",value:"511323"},{label:"仪陇县",value:"511324"},{label:"西充县",value:"511325"},{label:"阆中市",value:"511381"}],[{label:"东坡区",value:"511402"},{label:"彭山区",value:"511403"},{label:"仁寿县",value:"511421"},{label:"洪雅县",value:"511423"},{label:"丹棱县",value:"511424"},{label:"青神县",value:"511425"}],[{label:"翠屏区",value:"511502"},{label:"南溪区",value:"511503"},{label:"宜宾县",value:"511521"},{label:"江安县",value:"511523"},{label:"长宁县",value:"511524"},{label:"高县",value:"511525"},{label:"珙县",value:"511526"},{label:"筠连县",value:"511527"},{label:"兴文县",value:"511528"},{label:"屏山县",value:"511529"}],[{label:"广安区",value:"511602"},{label:"前锋区",value:"511603"},{label:"岳池县",value:"511621"},{label:"武胜县",value:"511622"},{label:"邻水县",value:"511623"},{label:"华蓥市",value:"511681"}],[{label:"通川区",value:"511702"},{label:"达川区",value:"511703"},{label:"宣汉县",value:"511722"},{label:"开江县",value:"511723"},{label:"大竹县",value:"511724"},{label:"渠县",value:"511725"},{label:"达州经济开发区",value:"511771"},{label:"万源市",value:"511781"}],[{label:"雨城区",value:"511802"},{label:"名山区",value:"511803"},{label:"荥经县",value:"511822"},{label:"汉源县",value:"511823"},{label:"石棉县",value:"511824"},{label:"天全县",value:"511825"},{label:"芦山县",value:"511826"},{label:"宝兴县",value:"511827"}],[{label:"巴州区",value:"511902"},{label:"恩阳区",value:"511903"},{label:"通江县",value:"511921"},{label:"南江县",value:"511922"},{label:"平昌县",value:"511923"},{label:"巴中经济开发区",value:"511971"}],[{label:"雁江区",value:"512002"},{label:"安岳县",value:"512021"},{label:"乐至县",value:"512022"}],[{label:"马尔康市",value:"513201"},{label:"汶川县",value:"513221"},{label:"理县",value:"513222"},{label:"茂县",value:"513223"},{label:"松潘县",value:"513224"},{label:"九寨沟县",value:"513225"},{label:"金川县",value:"513226"},{label:"小金县",value:"513227"},{label:"黑水县",value:"513228"},{label:"壤塘县",value:"513230"},{label:"阿坝县",value:"513231"},{label:"若尔盖县",value:"513232"},{label:"红原县",value:"513233"}],[{label:"康定市",value:"513301"},{label:"泸定县",value:"513322"},{label:"丹巴县",value:"513323"},{label:"九龙县",value:"513324"},{label:"雅江县",value:"513325"},{label:"道孚县",value:"513326"},{label:"炉霍县",value:"513327"},{label:"甘孜县",value:"513328"},{label:"新龙县",value:"513329"},{label:"德格县",value:"513330"},{label:"白玉县",value:"513331"},{label:"石渠县",value:"513332"},{label:"色达县",value:"513333"},{label:"理塘县",value:"513334"},{label:"巴塘县",value:"513335"},{label:"乡城县",value:"513336"},{label:"稻城县",value:"513337"},{label:"得荣县",value:"513338"}],[{label:"西昌市",value:"513401"},{label:"木里藏族自治县",value:"513422"},{label:"盐源县",value:"513423"},{label:"德昌县",value:"513424"},{label:"会理县",value:"513425"},{label:"会东县",value:"513426"},{label:"宁南县",value:"513427"},{label:"普格县",value:"513428"},{label:"布拖县",value:"513429"},{label:"金阳县",value:"513430"},{label:"昭觉县",value:"513431"},{label:"喜德县",value:"513432"},{label:"冕宁县",value:"513433"},{label:"越西县",value:"513434"},{label:"甘洛县",value:"513435"},{label:"美姑县",value:"513436"},{label:"雷波县",value:"513437"}]],[[{label:"南明区",value:"520102"},{label:"云岩区",value:"520103"},{label:"花溪区",value:"520111"},{label:"乌当区",value:"520112"},{label:"白云区",value:"520113"},{label:"观山湖区",value:"520115"},{label:"开阳县",value:"520121"},{label:"息烽县",value:"520122"},{label:"修文县",value:"520123"},{label:"清镇市",value:"520181"}],[{label:"钟山区",value:"520201"},{label:"六枝特区",value:"520203"},{label:"水城县",value:"520221"},{label:"盘州市",value:"520281"}],[{label:"红花岗区",value:"520302"},{label:"汇川区",value:"520303"},{label:"播州区",value:"520304"},{label:"桐梓县",value:"520322"},{label:"绥阳县",value:"520323"},{label:"正安县",value:"520324"},{label:"道真仡佬族苗族自治县",value:"520325"},{label:"务川仡佬族苗族自治县",value:"520326"},{label:"凤冈县",value:"520327"},{label:"湄潭县",value:"520328"},{label:"余庆县",value:"520329"},{label:"习水县",value:"520330"},{label:"赤水市",value:"520381"},{label:"仁怀市",value:"520382"}],[{label:"西秀区",value:"520402"},{label:"平坝区",value:"520403"},{label:"普定县",value:"520422"},{label:"镇宁布依族苗族自治县",value:"520423"},{label:"关岭布依族苗族自治县",value:"520424"},{label:"紫云苗族布依族自治县",value:"520425"}],[{label:"七星关区",value:"520502"},{label:"大方县",value:"520521"},{label:"黔西县",value:"520522"},{label:"金沙县",value:"520523"},{label:"织金县",value:"520524"},{label:"纳雍县",value:"520525"},{label:"威宁彝族回族苗族自治县",value:"520526"},{label:"赫章县",value:"520527"}],[{label:"碧江区",value:"520602"},{label:"万山区",value:"520603"},{label:"江口县",value:"520621"},{label:"玉屏侗族自治县",value:"520622"},{label:"石阡县",value:"520623"},{label:"思南县",value:"520624"},{label:"印江土家族苗族自治县",value:"520625"},{label:"德江县",value:"520626"},{label:"沿河土家族自治县",value:"520627"},{label:"松桃苗族自治县",value:"520628"}],[{label:"兴义市",value:"522301"},{label:"兴仁县",value:"522322"},{label:"普安县",value:"522323"},{label:"晴隆县",value:"522324"},{label:"贞丰县",value:"522325"},{label:"望谟县",value:"522326"},{label:"册亨县",value:"522327"},{label:"安龙县",value:"522328"}],[{label:"凯里市",value:"522601"},{label:"黄平县",value:"522622"},{label:"施秉县",value:"522623"},{label:"三穗县",value:"522624"},{label:"镇远县",value:"522625"},{label:"岑巩县",value:"522626"},{label:"天柱县",value:"522627"},{label:"锦屏县",value:"522628"},{label:"剑河县",value:"522629"},{label:"台江县",value:"522630"},{label:"黎平县",value:"522631"},{label:"榕江县",value:"522632"},{label:"从江县",value:"522633"},{label:"雷山县",value:"522634"},{label:"麻江县",value:"522635"},{label:"丹寨县",value:"522636"}],[{label:"都匀市",value:"522701"},{label:"福泉市",value:"522702"},{label:"荔波县",value:"522722"},{label:"贵定县",value:"522723"},{label:"瓮安县",value:"522725"},{label:"独山县",value:"522726"},{label:"平塘县",value:"522727"},{label:"罗甸县",value:"522728"},{label:"长顺县",value:"522729"},{label:"龙里县",value:"522730"},{label:"惠水县",value:"522731"},{label:"三都水族自治县",value:"522732"}]],[[{label:"五华区",value:"530102"},{label:"盘龙区",value:"530103"},{label:"官渡区",value:"530111"},{label:"西山区",value:"530112"},{label:"东川区",value:"530113"},{label:"呈贡区",value:"530114"},{label:"晋宁区",value:"530115"},{label:"富民县",value:"530124"},{label:"宜良县",value:"530125"},{label:"石林彝族自治县",value:"530126"},{label:"嵩明县",value:"530127"},{label:"禄劝彝族苗族自治县",value:"530128"},{label:"寻甸回族彝族自治县",value:"530129"},{label:"安宁市",value:"530181"}],[{label:"麒麟区",value:"530302"},{label:"沾益区",value:"530303"},{label:"马龙县",value:"530321"},{label:"陆良县",value:"530322"},{label:"师宗县",value:"530323"},{label:"罗平县",value:"530324"},{label:"富源县",value:"530325"},{label:"会泽县",value:"530326"},{label:"宣威市",value:"530381"}],[{label:"红塔区",value:"530402"},{label:"江川区",value:"530403"},{label:"澄江县",value:"530422"},{label:"通海县",value:"530423"},{label:"华宁县",value:"530424"},{label:"易门县",value:"530425"},{label:"峨山彝族自治县",value:"530426"},{label:"新平彝族傣族自治县",value:"530427"},{label:"元江哈尼族彝族傣族自治县",value:"530428"}],[{label:"隆阳区",value:"530502"},{label:"施甸县",value:"530521"},{label:"龙陵县",value:"530523"},{label:"昌宁县",value:"530524"},{label:"腾冲市",value:"530581"}],[{label:"昭阳区",value:"530602"},{label:"鲁甸县",value:"530621"},{label:"巧家县",value:"530622"},{label:"盐津县",value:"530623"},{label:"大关县",value:"530624"},{label:"永善县",value:"530625"},{label:"绥江县",value:"530626"},{label:"镇雄县",value:"530627"},{label:"彝良县",value:"530628"},{label:"威信县",value:"530629"},{label:"水富县",value:"530630"}],[{label:"古城区",value:"530702"},{label:"玉龙纳西族自治县",value:"530721"},{label:"永胜县",value:"530722"},{label:"华坪县",value:"530723"},{label:"宁蒗彝族自治县",value:"530724"}],[{label:"思茅区",value:"530802"},{label:"宁洱哈尼族彝族自治县",value:"530821"},{label:"墨江哈尼族自治县",value:"530822"},{label:"景东彝族自治县",value:"530823"},{label:"景谷傣族彝族自治县",value:"530824"},{label:"镇沅彝族哈尼族拉祜族自治县",value:"530825"},{label:"江城哈尼族彝族自治县",value:"530826"},{label:"孟连傣族拉祜族佤族自治县",value:"530827"},{label:"澜沧拉祜族自治县",value:"530828"},{label:"西盟佤族自治县",value:"530829"}],[{label:"临翔区",value:"530902"},{label:"凤庆县",value:"530921"},{label:"云县",value:"530922"},{label:"永德县",value:"530923"},{label:"镇康县",value:"530924"},{label:"双江拉祜族佤族布朗族傣族自治县",value:"530925"},{label:"耿马傣族佤族自治县",value:"530926"},{label:"沧源佤族自治县",value:"530927"}],[{label:"楚雄市",value:"532301"},{label:"双柏县",value:"532322"},{label:"牟定县",value:"532323"},{label:"南华县",value:"532324"},{label:"姚安县",value:"532325"},{label:"大姚县",value:"532326"},{label:"永仁县",value:"532327"},{label:"元谋县",value:"532328"},{label:"武定县",value:"532329"},{label:"禄丰县",value:"532331"}],[{label:"个旧市",value:"532501"},{label:"开远市",value:"532502"},{label:"蒙自市",value:"532503"},{label:"弥勒市",value:"532504"},{label:"屏边苗族自治县",value:"532523"},{label:"建水县",value:"532524"},{label:"石屏县",value:"532525"},{label:"泸西县",value:"532527"},{label:"元阳县",value:"532528"},{label:"红河县",value:"532529"},{label:"金平苗族瑶族傣族自治县",value:"532530"},{label:"绿春县",value:"532531"},{label:"河口瑶族自治县",value:"532532"}],[{label:"文山市",value:"532601"},{label:"砚山县",value:"532622"},{label:"西畴县",value:"532623"},{label:"麻栗坡县",value:"532624"},{label:"马关县",value:"532625"},{label:"丘北县",value:"532626"},{label:"广南县",value:"532627"},{label:"富宁县",value:"532628"}],[{label:"景洪市",value:"532801"},{label:"勐海县",value:"532822"},{label:"勐腊县",value:"532823"}],[{label:"大理市",value:"532901"},{label:"漾濞彝族自治县",value:"532922"},{label:"祥云县",value:"532923"},{label:"宾川县",value:"532924"},{label:"弥渡县",value:"532925"},{label:"南涧彝族自治县",value:"532926"},{label:"巍山彝族回族自治县",value:"532927"},{label:"永平县",value:"532928"},{label:"云龙县",value:"532929"},{label:"洱源县",value:"532930"},{label:"剑川县",value:"532931"},{label:"鹤庆县",value:"532932"}],[{label:"瑞丽市",value:"533102"},{label:"芒市",value:"533103"},{label:"梁河县",value:"533122"},{label:"盈江县",value:"533123"},{label:"陇川县",value:"533124"}],[{label:"泸水市",value:"533301"},{label:"福贡县",value:"533323"},{label:"贡山独龙族怒族自治县",value:"533324"},{label:"兰坪白族普米族自治县",value:"533325"}],[{label:"香格里拉市",value:"533401"},{label:"德钦县",value:"533422"},{label:"维西傈僳族自治县",value:"533423"}]],[[{label:"城关区",value:"540102"},{label:"堆龙德庆区",value:"540103"},{label:"林周县",value:"540121"},{label:"当雄县",value:"540122"},{label:"尼木县",value:"540123"},{label:"曲水县",value:"540124"},{label:"达孜县",value:"540126"},{label:"墨竹工卡县",value:"540127"},{label:"格尔木藏青工业园区",value:"540171"},{label:"拉萨经济技术开发区",value:"540172"},{label:"西藏文化旅游创意园区",value:"540173"},{label:"达孜工业园区",value:"540174"}],[{label:"桑珠孜区",value:"540202"},{label:"南木林县",value:"540221"},{label:"江孜县",value:"540222"},{label:"定日县",value:"540223"},{label:"萨迦县",value:"540224"},{label:"拉孜县",value:"540225"},{label:"昂仁县",value:"540226"},{label:"谢通门县",value:"540227"},{label:"白朗县",value:"540228"},{label:"仁布县",value:"540229"},{label:"康马县",value:"540230"},{label:"定结县",value:"540231"},{label:"仲巴县",value:"540232"},{label:"亚东县",value:"540233"},{label:"吉隆县",value:"540234"},{label:"聂拉木县",value:"540235"},{label:"萨嘎县",value:"540236"},{label:"岗巴县",value:"540237"}],[{label:"卡若区",value:"540302"},{label:"江达县",value:"540321"},{label:"贡觉县",value:"540322"},{label:"类乌齐县",value:"540323"},{label:"丁青县",value:"540324"},{label:"察雅县",value:"540325"},{label:"八宿县",value:"540326"},{label:"左贡县",value:"540327"},{label:"芒康县",value:"540328"},{label:"洛隆县",value:"540329"},{label:"边坝县",value:"540330"}],[{label:"巴宜区",value:"540402"},{label:"工布江达县",value:"540421"},{label:"米林县",value:"540422"},{label:"墨脱县",value:"540423"},{label:"波密县",value:"540424"},{label:"察隅县",value:"540425"},{label:"朗县",value:"540426"}],[{label:"乃东区",value:"540502"},{label:"扎囊县",value:"540521"},{label:"贡嘎县",value:"540522"},{label:"桑日县",value:"540523"},{label:"琼结县",value:"540524"},{label:"曲松县",value:"540525"},{label:"措美县",value:"540526"},{label:"洛扎县",value:"540527"},{label:"加查县",value:"540528"},{label:"隆子县",value:"540529"},{label:"错那县",value:"540530"},{label:"浪卡子县",value:"540531"}],[{label:"那曲县",value:"542421"},{label:"嘉黎县",value:"542422"},{label:"比如县",value:"542423"},{label:"聂荣县",value:"542424"},{label:"安多县",value:"542425"},{label:"申扎县",value:"542426"},{label:"索县",value:"542427"},{label:"班戈县",value:"542428"},{label:"巴青县",value:"542429"},{label:"尼玛县",value:"542430"},{label:"双湖县",value:"542431"}],[{label:"普兰县",value:"542521"},{label:"札达县",value:"542522"},{label:"噶尔县",value:"542523"},{label:"日土县",value:"542524"},{label:"革吉县",value:"542525"},{label:"改则县",value:"542526"},{label:"措勤县",value:"542527"}]],[[{label:"新城区",value:"610102"},{label:"碑林区",value:"610103"},{label:"莲湖区",value:"610104"},{label:"灞桥区",value:"610111"},{label:"未央区",value:"610112"},{label:"雁塔区",value:"610113"},{label:"阎良区",value:"610114"},{label:"临潼区",value:"610115"},{label:"长安区",value:"610116"},{label:"高陵区",value:"610117"},{label:"鄠邑区",value:"610118"},{label:"蓝田县",value:"610122"},{label:"周至县",value:"610124"}],[{label:"王益区",value:"610202"},{label:"印台区",value:"610203"},{label:"耀州区",value:"610204"},{label:"宜君县",value:"610222"}],[{label:"渭滨区",value:"610302"},{label:"金台区",value:"610303"},{label:"陈仓区",value:"610304"},{label:"凤翔县",value:"610322"},{label:"岐山县",value:"610323"},{label:"扶风县",value:"610324"},{label:"眉县",value:"610326"},{label:"陇县",value:"610327"},{label:"千阳县",value:"610328"},{label:"麟游县",value:"610329"},{label:"凤县",value:"610330"},{label:"太白县",value:"610331"}],[{label:"秦都区",value:"610402"},{label:"杨陵区",value:"610403"},{label:"渭城区",value:"610404"},{label:"三原县",value:"610422"},{label:"泾阳县",value:"610423"},{label:"乾县",value:"610424"},{label:"礼泉县",value:"610425"},{label:"永寿县",value:"610426"},{label:"彬县",value:"610427"},{label:"长武县",value:"610428"},{label:"旬邑县",value:"610429"},{label:"淳化县",value:"610430"},{label:"武功县",value:"610431"},{label:"兴平市",value:"610481"}],[{label:"临渭区",value:"610502"},{label:"华州区",value:"610503"},{label:"潼关县",value:"610522"},{label:"大荔县",value:"610523"},{label:"合阳县",value:"610524"},{label:"澄城县",value:"610525"},{label:"蒲城县",value:"610526"},{label:"白水县",value:"610527"},{label:"富平县",value:"610528"},{label:"韩城市",value:"610581"},{label:"华阴市",value:"610582"}],[{label:"宝塔区",value:"610602"},{label:"安塞区",value:"610603"},{label:"延长县",value:"610621"},{label:"延川县",value:"610622"},{label:"子长县",value:"610623"},{label:"志丹县",value:"610625"},{label:"吴起县",value:"610626"},{label:"甘泉县",value:"610627"},{label:"富县",value:"610628"},{label:"洛川县",value:"610629"},{label:"宜川县",value:"610630"},{label:"黄龙县",value:"610631"},{label:"黄陵县",value:"610632"}],[{label:"汉台区",value:"610702"},{label:"南郑区",value:"610703"},{label:"城固县",value:"610722"},{label:"洋县",value:"610723"},{label:"西乡县",value:"610724"},{label:"勉县",value:"610725"},{label:"宁强县",value:"610726"},{label:"略阳县",value:"610727"},{label:"镇巴县",value:"610728"},{label:"留坝县",value:"610729"},{label:"佛坪县",value:"610730"}],[{label:"榆阳区",value:"610802"},{label:"横山区",value:"610803"},{label:"府谷县",value:"610822"},{label:"靖边县",value:"610824"},{label:"定边县",value:"610825"},{label:"绥德县",value:"610826"},{label:"米脂县",value:"610827"},{label:"佳县",value:"610828"},{label:"吴堡县",value:"610829"},{label:"清涧县",value:"610830"},{label:"子洲县",value:"610831"},{label:"神木市",value:"610881"}],[{label:"汉滨区",value:"610902"},{label:"汉阴县",value:"610921"},{label:"石泉县",value:"610922"},{label:"宁陕县",value:"610923"},{label:"紫阳县",value:"610924"},{label:"岚皋县",value:"610925"},{label:"平利县",value:"610926"},{label:"镇坪县",value:"610927"},{label:"旬阳县",value:"610928"},{label:"白河县",value:"610929"}],[{label:"商州区",value:"611002"},{label:"洛南县",value:"611021"},{label:"丹凤县",value:"611022"},{label:"商南县",value:"611023"},{label:"山阳县",value:"611024"},{label:"镇安县",value:"611025"},{label:"柞水县",value:"611026"}]],[[{label:"城关区",value:"620102"},{label:"七里河区",value:"620103"},{label:"西固区",value:"620104"},{label:"安宁区",value:"620105"},{label:"红古区",value:"620111"},{label:"永登县",value:"620121"},{label:"皋兰县",value:"620122"},{label:"榆中县",value:"620123"},{label:"兰州新区",value:"620171"}],[{label:"嘉峪关市",value:"620201"}],[{label:"金川区",value:"620302"},{label:"永昌县",value:"620321"}],[{label:"白银区",value:"620402"},{label:"平川区",value:"620403"},{label:"靖远县",value:"620421"},{label:"会宁县",value:"620422"},{label:"景泰县",value:"620423"}],[{label:"秦州区",value:"620502"},{label:"麦积区",value:"620503"},{label:"清水县",value:"620521"},{label:"秦安县",value:"620522"},{label:"甘谷县",value:"620523"},{label:"武山县",value:"620524"},{label:"张家川回族自治县",value:"620525"}],[{label:"凉州区",value:"620602"},{label:"民勤县",value:"620621"},{label:"古浪县",value:"620622"},{label:"天祝藏族自治县",value:"620623"}],[{label:"甘州区",value:"620702"},{label:"肃南裕固族自治县",value:"620721"},{label:"民乐县",value:"620722"},{label:"临泽县",value:"620723"},{label:"高台县",value:"620724"},{label:"山丹县",value:"620725"}],[{label:"崆峒区",value:"620802"},{label:"泾川县",value:"620821"},{label:"灵台县",value:"620822"},{label:"崇信县",value:"620823"},{label:"华亭县",value:"620824"},{label:"庄浪县",value:"620825"},{label:"静宁县",value:"620826"},{label:"平凉工业园区",value:"620871"}],[{label:"肃州区",value:"620902"},{label:"金塔县",value:"620921"},{label:"瓜州县",value:"620922"},{label:"肃北蒙古族自治县",value:"620923"},{label:"阿克塞哈萨克族自治县",value:"620924"},{label:"玉门市",value:"620981"},{label:"敦煌市",value:"620982"}],[{label:"西峰区",value:"621002"},{label:"庆城县",value:"621021"},{label:"环县",value:"621022"},{label:"华池县",value:"621023"},{label:"合水县",value:"621024"},{label:"正宁县",value:"621025"},{label:"宁县",value:"621026"},{label:"镇原县",value:"621027"}],[{label:"安定区",value:"621102"},{label:"通渭县",value:"621121"},{label:"陇西县",value:"621122"},{label:"渭源县",value:"621123"},{label:"临洮县",value:"621124"},{label:"漳县",value:"621125"},{label:"岷县",value:"621126"}],[{label:"武都区",value:"621202"},{label:"成县",value:"621221"},{label:"文县",value:"621222"},{label:"宕昌县",value:"621223"},{label:"康县",value:"621224"},{label:"西和县",value:"621225"},{label:"礼县",value:"621226"},{label:"徽县",value:"621227"},{label:"两当县",value:"621228"}],[{label:"临夏市",value:"622901"},{label:"临夏县",value:"622921"},{label:"康乐县",value:"622922"},{label:"永靖县",value:"622923"},{label:"广河县",value:"622924"},{label:"和政县",value:"622925"},{label:"东乡族自治县",value:"622926"},{label:"积石山保安族东乡族撒拉族自治县",value:"622927"}],[{label:"合作市",value:"623001"},{label:"临潭县",value:"623021"},{label:"卓尼县",value:"623022"},{label:"舟曲县",value:"623023"},{label:"迭部县",value:"623024"},{label:"玛曲县",value:"623025"},{label:"碌曲县",value:"623026"},{label:"夏河县",value:"623027"}]],[[{label:"城东区",value:"630102"},{label:"城中区",value:"630103"},{label:"城西区",value:"630104"},{label:"城北区",value:"630105"},{label:"大通回族土族自治县",value:"630121"},{label:"湟中县",value:"630122"},{label:"湟源县",value:"630123"}],[{label:"乐都区",value:"630202"},{label:"平安区",value:"630203"},{label:"民和回族土族自治县",value:"630222"},{label:"互助土族自治县",value:"630223"},{label:"化隆回族自治县",value:"630224"},{label:"循化撒拉族自治县",value:"630225"}],[{label:"门源回族自治县",value:"632221"},{label:"祁连县",value:"632222"},{label:"海晏县",value:"632223"},{label:"刚察县",value:"632224"}],[{label:"同仁县",value:"632321"},{label:"尖扎县",value:"632322"},{label:"泽库县",value:"632323"},{label:"河南蒙古族自治县",value:"632324"}],[{label:"共和县",value:"632521"},{label:"同德县",value:"632522"},{label:"贵德县",value:"632523"},{label:"兴海县",value:"632524"},{label:"贵南县",value:"632525"}],[{label:"玛沁县",value:"632621"},{label:"班玛县",value:"632622"},{label:"甘德县",value:"632623"},{label:"达日县",value:"632624"},{label:"久治县",value:"632625"},{label:"玛多县",value:"632626"}],[{label:"玉树市",value:"632701"},{label:"杂多县",value:"632722"},{label:"称多县",value:"632723"},{label:"治多县",value:"632724"},{label:"囊谦县",value:"632725"},{label:"曲麻莱县",value:"632726"}],[{label:"格尔木市",value:"632801"},{label:"德令哈市",value:"632802"},{label:"乌兰县",value:"632821"},{label:"都兰县",value:"632822"},{label:"天峻县",value:"632823"},{label:"大柴旦行政委员会",value:"632857"},{label:"冷湖行政委员会",value:"632858"},{label:"茫崖行政委员会",value:"632859"}]],[[{label:"兴庆区",value:"640104"},{label:"西夏区",value:"640105"},{label:"金凤区",value:"640106"},{label:"永宁县",value:"640121"},{label:"贺兰县",value:"640122"},{label:"灵武市",value:"640181"}],[{label:"大武口区",value:"640202"},{label:"惠农区",value:"640205"},{label:"平罗县",value:"640221"}],[{label:"利通区",value:"640302"},{label:"红寺堡区",value:"640303"},{label:"盐池县",value:"640323"},{label:"同心县",value:"640324"},{label:"青铜峡市",value:"640381"}],[{label:"原州区",value:"640402"},{label:"西吉县",value:"640422"},{label:"隆德县",value:"640423"},{label:"泾源县",value:"640424"},{label:"彭阳县",value:"640425"}],[{label:"沙坡头区",value:"640502"},{label:"中宁县",value:"640521"},{label:"海原县",value:"640522"}]],[[{label:"天山区",value:"650102"},{label:"沙依巴克区",value:"650103"},{label:"新市区",value:"650104"},{label:"水磨沟区",value:"650105"},{label:"头屯河区",value:"650106"},{label:"达坂城区",value:"650107"},{label:"米东区",value:"650109"},{label:"乌鲁木齐县",value:"650121"},{label:"乌鲁木齐经济技术开发区",value:"650171"},{label:"乌鲁木齐高新技术产业开发区",value:"650172"}],[{label:"独山子区",value:"650202"},{label:"克拉玛依区",value:"650203"},{label:"白碱滩区",value:"650204"},{label:"乌尔禾区",value:"650205"}],[{label:"高昌区",value:"650402"},{label:"鄯善县",value:"650421"},{label:"托克逊县",value:"650422"}],[{label:"伊州区",value:"650502"},{label:"巴里坤哈萨克自治县",value:"650521"},{label:"伊吾县",value:"650522"}],[{label:"昌吉市",value:"652301"},{label:"阜康市",value:"652302"},{label:"呼图壁县",value:"652323"},{label:"玛纳斯县",value:"652324"},{label:"奇台县",value:"652325"},{label:"吉木萨尔县",value:"652327"},{label:"木垒哈萨克自治县",value:"652328"}],[{label:"博乐市",value:"652701"},{label:"阿拉山口市",value:"652702"},{label:"精河县",value:"652722"},{label:"温泉县",value:"652723"}],[{label:"库尔勒市",value:"652801"},{label:"轮台县",value:"652822"},{label:"尉犁县",value:"652823"},{label:"若羌县",value:"652824"},{label:"且末县",value:"652825"},{label:"焉耆回族自治县",value:"652826"},{label:"和静县",value:"652827"},{label:"和硕县",value:"652828"},{label:"博湖县",value:"652829"},{label:"库尔勒经济技术开发区",value:"652871"}],[{label:"阿克苏市",value:"652901"},{label:"温宿县",value:"652922"},{label:"库车县",value:"652923"},{label:"沙雅县",value:"652924"},{label:"新和县",value:"652925"},{label:"拜城县",value:"652926"},{label:"乌什县",value:"652927"},{label:"阿瓦提县",value:"652928"},{label:"柯坪县",value:"652929"}],[{label:"阿图什市",value:"653001"},{label:"阿克陶县",value:"653022"},{label:"阿合奇县",value:"653023"},{label:"乌恰县",value:"653024"}],[{label:"喀什市",value:"653101"},{label:"疏附县",value:"653121"},{label:"疏勒县",value:"653122"},{label:"英吉沙县",value:"653123"},{label:"泽普县",value:"653124"},{label:"莎车县",value:"653125"},{label:"叶城县",value:"653126"},{label:"麦盖提县",value:"653127"},{label:"岳普湖县",value:"653128"},{label:"伽师县",value:"653129"},{label:"巴楚县",value:"653130"},{label:"塔什库尔干塔吉克自治县",value:"653131"}],[{label:"和田市",value:"653201"},{label:"和田县",value:"653221"},{label:"墨玉县",value:"653222"},{label:"皮山县",value:"653223"},{label:"洛浦县",value:"653224"},{label:"策勒县",value:"653225"},{label:"于田县",value:"653226"},{label:"民丰县",value:"653227"}],[{label:"伊宁市",value:"654002"},{label:"奎屯市",value:"654003"},{label:"霍尔果斯市",value:"654004"},{label:"伊宁县",value:"654021"},{label:"察布查尔锡伯自治县",value:"654022"},{label:"霍城县",value:"654023"},{label:"巩留县",value:"654024"},{label:"新源县",value:"654025"},{label:"昭苏县",value:"654026"},{label:"特克斯县",value:"654027"},{label:"尼勒克县",value:"654028"}],[{label:"塔城市",value:"654201"},{label:"乌苏市",value:"654202"},{label:"额敏县",value:"654221"},{label:"沙湾县",value:"654223"},{label:"托里县",value:"654224"},{label:"裕民县",value:"654225"},{label:"和布克赛尔蒙古自治县",value:"654226"}],[{label:"阿勒泰市",value:"654301"},{label:"布尔津县",value:"654321"},{label:"富蕴县",value:"654322"},{label:"福海县",value:"654323"},{label:"哈巴河县",value:"654324"},{label:"青河县",value:"654325"},{label:"吉木乃县",value:"654326"}],[{label:"石河子市",value:"659001"},{label:"阿拉尔市",value:"659002"},{label:"图木舒克市",value:"659003"},{label:"五家渠市",value:"659004"},{label:"铁门关市",value:"659006"}]],[[{label:"台北",value:"660101"}],[{label:"高雄",value:"660201"}],[{label:"基隆",value:"660301"}],[{label:"台中",value:"660401"}],[{label:"台南",value:"660501"}],[{label:"新竹",value:"660601"}],[{label:"嘉义",value:"660701"}],[{label:"宜兰",value:"660801"}],[{label:"桃园",value:"660901"}],[{label:"苗栗",value:"661001"}],[{label:"彰化",value:"661101"}],[{label:"南投",value:"661201"}],[{label:"云林",value:"661301"}],[{label:"屏东",value:"661401"}],[{label:"台东",value:"661501"}],[{label:"花莲",value:"661601"}],[{label:"澎湖",value:"661701"}]],[[{label:"香港岛",value:"670101"}],[{label:"九龙",value:"670201"}],[{label:"新界",value:"670301"}]],[[{label:"澳门半岛",value:"680101"}],[{label:"氹仔岛",value:"680201"}],[{label:"路环岛",value:"680301"}],[{label:"路氹城",value:"680401"}]]],u=t;l.default=u},c8ba:function(e,l){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(t){"object"===typeof window&&(a=window)}e.exports=a},d3ab:function(e,l,a){"use strict";var t={};(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=t.util={rotl:function(e,l){return e<<l|e>>>32-l},rotr:function(e,l){return e<<32-l|e>>>l},endian:function(e){if(e.constructor==Number)return 16711935&l.rotl(e,8)|4278255360&l.rotl(e,24);for(var a=0;a<e.length;a++)e[a]=l.endian(e[a]);return e},randomBytes:function(e){for(var l=[];e>0;e--)l.push(Math.floor(256*Math.random()));return l},stringToBytes:function(e){for(var l=[],a=0;a<e.length;a++)l.push(e.charCodeAt(a));return l},bytesToString:function(e){for(var l=[],a=0;a<e.length;a++)l.push(String.fromCharCode(e[a]));return l.join("")},stringToWords:function(e){for(var l=[],a=0,t=0;a<e.length;a++,t+=8)l[t>>>5]|=e.charCodeAt(a)<<24-t%32;return l},bytesToWords:function(e){for(var l=[],a=0,t=0;a<e.length;a++,t+=8)l[t>>>5]|=e[a]<<24-t%32;return l},wordsToBytes:function(e){for(var l=[],a=0;a<32*e.length;a+=8)l.push(e[a>>>5]>>>24-a%32&255);return l},bytesToHex:function(e){for(var l=[],a=0;a<e.length;a++)l.push((e[a]>>>4).toString(16)),l.push((15&e[a]).toString(16));return l.join("")},hexToBytes:function(e){for(var l=[],a=0;a<e.length;a+=2)l.push(parseInt(e.substr(a,2),16));return l},bytesToBase64:function(a){if("function"==typeof btoa)return btoa(l.bytesToString(a));for(var t,u=[],n=0;n<a.length;n++)switch(n%3){case 0:u.push(e.charAt(a[n]>>>2)),t=(3&a[n])<<4;break;case 1:u.push(e.charAt(t|a[n]>>>4)),t=(15&a[n])<<2;break;case 2:u.push(e.charAt(t|a[n]>>>6)),u.push(e.charAt(63&a[n])),t=-1}void 0!=t&&-1!=t&&u.push(e.charAt(t));while(u.length%4!=0)u.push("=");return u.join("")},base64ToBytes:function(a){if("function"==typeof atob)return l.stringToBytes(atob(a));a=a.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],u=0;u<a.length;u++)switch(u%4){case 1:t.push(e.indexOf(a.charAt(u-1))<<2|e.indexOf(a.charAt(u))>>>4);break;case 2:t.push((15&e.indexOf(a.charAt(u-1)))<<4|e.indexOf(a.charAt(u))>>>2);break;case 3:t.push((3&e.indexOf(a.charAt(u-1)))<<6|e.indexOf(a.charAt(u)));break}return t}};t.mode={}})(),e.exports=t},d79b:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[[{label:"市辖区",value:"1101"}],[{label:"市辖区",value:"1201"}],[{label:"石家庄市",value:"1301"},{label:"唐山市",value:"1302"},{label:"秦皇岛市",value:"1303"},{label:"邯郸市",value:"1304"},{label:"邢台市",value:"1305"},{label:"保定市",value:"1306"},{label:"张家口市",value:"1307"},{label:"承德市",value:"1308"},{label:"沧州市",value:"1309"},{label:"廊坊市",value:"1310"},{label:"衡水市",value:"1311"}],[{label:"太原市",value:"1401"},{label:"大同市",value:"1402"},{label:"阳泉市",value:"1403"},{label:"长治市",value:"1404"},{label:"晋城市",value:"1405"},{label:"朔州市",value:"1406"},{label:"晋中市",value:"1407"},{label:"运城市",value:"1408"},{label:"忻州市",value:"1409"},{label:"临汾市",value:"1410"},{label:"吕梁市",value:"1411"}],[{label:"呼和浩特市",value:"1501"},{label:"包头市",value:"1502"},{label:"乌海市",value:"1503"},{label:"赤峰市",value:"1504"},{label:"通辽市",value:"1505"},{label:"鄂尔多斯市",value:"1506"},{label:"呼伦贝尔市",value:"1507"},{label:"巴彦淖尔市",value:"1508"},{label:"乌兰察布市",value:"1509"},{label:"兴安盟",value:"1522"},{label:"锡林郭勒盟",value:"1525"},{label:"阿拉善盟",value:"1529"}],[{label:"沈阳市",value:"2101"},{label:"大连市",value:"2102"},{label:"鞍山市",value:"2103"},{label:"抚顺市",value:"2104"},{label:"本溪市",value:"2105"},{label:"丹东市",value:"2106"},{label:"锦州市",value:"2107"},{label:"营口市",value:"2108"},{label:"阜新市",value:"2109"},{label:"辽阳市",value:"2110"},{label:"盘锦市",value:"2111"},{label:"铁岭市",value:"2112"},{label:"朝阳市",value:"2113"},{label:"葫芦岛市",value:"2114"}],[{label:"长春市",value:"2201"},{label:"吉林市",value:"2202"},{label:"四平市",value:"2203"},{label:"辽源市",value:"2204"},{label:"通化市",value:"2205"},{label:"白山市",value:"2206"},{label:"松原市",value:"2207"},{label:"白城市",value:"2208"},{label:"延边朝鲜族自治州",value:"2224"}],[{label:"哈尔滨市",value:"2301"},{label:"齐齐哈尔市",value:"2302"},{label:"鸡西市",value:"2303"},{label:"鹤岗市",value:"2304"},{label:"双鸭山市",value:"2305"},{label:"大庆市",value:"2306"},{label:"伊春市",value:"2307"},{label:"佳木斯市",value:"2308"},{label:"七台河市",value:"2309"},{label:"牡丹江市",value:"2310"},{label:"黑河市",value:"2311"},{label:"绥化市",value:"2312"},{label:"大兴安岭地区",value:"2327"}],[{label:"市辖区",value:"3101"}],[{label:"南京市",value:"3201"},{label:"无锡市",value:"3202"},{label:"徐州市",value:"3203"},{label:"常州市",value:"3204"},{label:"苏州市",value:"3205"},{label:"南通市",value:"3206"},{label:"连云港市",value:"3207"},{label:"淮安市",value:"3208"},{label:"盐城市",value:"3209"},{label:"扬州市",value:"3210"},{label:"镇江市",value:"3211"},{label:"泰州市",value:"3212"},{label:"宿迁市",value:"3213"}],[{label:"杭州市",value:"3301"},{label:"宁波市",value:"3302"},{label:"温州市",value:"3303"},{label:"嘉兴市",value:"3304"},{label:"湖州市",value:"3305"},{label:"绍兴市",value:"3306"},{label:"金华市",value:"3307"},{label:"衢州市",value:"3308"},{label:"舟山市",value:"3309"},{label:"台州市",value:"3310"},{label:"丽水市",value:"3311"}],[{label:"合肥市",value:"3401"},{label:"芜湖市",value:"3402"},{label:"蚌埠市",value:"3403"},{label:"淮南市",value:"3404"},{label:"马鞍山市",value:"3405"},{label:"淮北市",value:"3406"},{label:"铜陵市",value:"3407"},{label:"安庆市",value:"3408"},{label:"黄山市",value:"3410"},{label:"滁州市",value:"3411"},{label:"阜阳市",value:"3412"},{label:"宿州市",value:"3413"},{label:"六安市",value:"3415"},{label:"亳州市",value:"3416"},{label:"池州市",value:"3417"},{label:"宣城市",value:"3418"}],[{label:"福州市",value:"3501"},{label:"厦门市",value:"3502"},{label:"莆田市",value:"3503"},{label:"三明市",value:"3504"},{label:"泉州市",value:"3505"},{label:"漳州市",value:"3506"},{label:"南平市",value:"3507"},{label:"龙岩市",value:"3508"},{label:"宁德市",value:"3509"}],[{label:"南昌市",value:"3601"},{label:"景德镇市",value:"3602"},{label:"萍乡市",value:"3603"},{label:"九江市",value:"3604"},{label:"新余市",value:"3605"},{label:"鹰潭市",value:"3606"},{label:"赣州市",value:"3607"},{label:"吉安市",value:"3608"},{label:"宜春市",value:"3609"},{label:"抚州市",value:"3610"},{label:"上饶市",value:"3611"}],[{label:"济南市",value:"3701"},{label:"青岛市",value:"3702"},{label:"淄博市",value:"3703"},{label:"枣庄市",value:"3704"},{label:"东营市",value:"3705"},{label:"烟台市",value:"3706"},{label:"潍坊市",value:"3707"},{label:"济宁市",value:"3708"},{label:"泰安市",value:"3709"},{label:"威海市",value:"3710"},{label:"日照市",value:"3711"},{label:"莱芜市",value:"3712"},{label:"临沂市",value:"3713"},{label:"德州市",value:"3714"},{label:"聊城市",value:"3715"},{label:"滨州市",value:"3716"},{label:"菏泽市",value:"3717"}],[{label:"郑州市",value:"4101"},{label:"开封市",value:"4102"},{label:"洛阳市",value:"4103"},{label:"平顶山市",value:"4104"},{label:"安阳市",value:"4105"},{label:"鹤壁市",value:"4106"},{label:"新乡市",value:"4107"},{label:"焦作市",value:"4108"},{label:"濮阳市",value:"4109"},{label:"许昌市",value:"4110"},{label:"漯河市",value:"4111"},{label:"三门峡市",value:"4112"},{label:"南阳市",value:"4113"},{label:"商丘市",value:"4114"},{label:"信阳市",value:"4115"},{label:"周口市",value:"4116"},{label:"驻马店市",value:"4117"},{label:"省直辖县级行政区划",value:"4190"}],[{label:"武汉市",value:"4201"},{label:"黄石市",value:"4202"},{label:"十堰市",value:"4203"},{label:"宜昌市",value:"4205"},{label:"襄阳市",value:"4206"},{label:"鄂州市",value:"4207"},{label:"荆门市",value:"4208"},{label:"孝感市",value:"4209"},{label:"荆州市",value:"4210"},{label:"黄冈市",value:"4211"},{label:"咸宁市",value:"4212"},{label:"随州市",value:"4213"},{label:"恩施土家族苗族自治州",value:"4228"},{label:"省直辖县级行政区划",value:"4290"}],[{label:"长沙市",value:"4301"},{label:"株洲市",value:"4302"},{label:"湘潭市",value:"4303"},{label:"衡阳市",value:"4304"},{label:"邵阳市",value:"4305"},{label:"岳阳市",value:"4306"},{label:"常德市",value:"4307"},{label:"张家界市",value:"4308"},{label:"益阳市",value:"4309"},{label:"郴州市",value:"4310"},{label:"永州市",value:"4311"},{label:"怀化市",value:"4312"},{label:"娄底市",value:"4313"},{label:"湘西土家族苗族自治州",value:"4331"}],[{label:"广州市",value:"4401"},{label:"韶关市",value:"4402"},{label:"深圳市",value:"4403"},{label:"珠海市",value:"4404"},{label:"汕头市",value:"4405"},{label:"佛山市",value:"4406"},{label:"江门市",value:"4407"},{label:"湛江市",value:"4408"},{label:"茂名市",value:"4409"},{label:"肇庆市",value:"4412"},{label:"惠州市",value:"4413"},{label:"梅州市",value:"4414"},{label:"汕尾市",value:"4415"},{label:"河源市",value:"4416"},{label:"阳江市",value:"4417"},{label:"清远市",value:"4418"},{label:"东莞市",value:"4419"},{label:"中山市",value:"4420"},{label:"潮州市",value:"4451"},{label:"揭阳市",value:"4452"},{label:"云浮市",value:"4453"}],[{label:"南宁市",value:"4501"},{label:"柳州市",value:"4502"},{label:"桂林市",value:"4503"},{label:"梧州市",value:"4504"},{label:"北海市",value:"4505"},{label:"防城港市",value:"4506"},{label:"钦州市",value:"4507"},{label:"贵港市",value:"4508"},{label:"玉林市",value:"4509"},{label:"百色市",value:"4510"},{label:"贺州市",value:"4511"},{label:"河池市",value:"4512"},{label:"来宾市",value:"4513"},{label:"崇左市",value:"4514"}],[{label:"海口市",value:"4601"},{label:"三亚市",value:"4602"},{label:"三沙市",value:"4603"},{label:"儋州市",value:"4604"},{label:"省直辖县级行政区划",value:"4690"}],[{label:"市辖区",value:"5001"},{label:"县",value:"5002"}],[{label:"成都市",value:"5101"},{label:"自贡市",value:"5103"},{label:"攀枝花市",value:"5104"},{label:"泸州市",value:"5105"},{label:"德阳市",value:"5106"},{label:"绵阳市",value:"5107"},{label:"广元市",value:"5108"},{label:"遂宁市",value:"5109"},{label:"内江市",value:"5110"},{label:"乐山市",value:"5111"},{label:"南充市",value:"5113"},{label:"眉山市",value:"5114"},{label:"宜宾市",value:"5115"},{label:"广安市",value:"5116"},{label:"达州市",value:"5117"},{label:"雅安市",value:"5118"},{label:"巴中市",value:"5119"},{label:"资阳市",value:"5120"},{label:"阿坝藏族羌族自治州",value:"5132"},{label:"甘孜藏族自治州",value:"5133"},{label:"凉山彝族自治州",value:"5134"}],[{label:"贵阳市",value:"5201"},{label:"六盘水市",value:"5202"},{label:"遵义市",value:"5203"},{label:"安顺市",value:"5204"},{label:"毕节市",value:"5205"},{label:"铜仁市",value:"5206"},{label:"黔西南布依族苗族自治州",value:"5223"},{label:"黔东南苗族侗族自治州",value:"5226"},{label:"黔南布依族苗族自治州",value:"5227"}],[{label:"昆明市",value:"5301"},{label:"曲靖市",value:"5303"},{label:"玉溪市",value:"5304"},{label:"保山市",value:"5305"},{label:"昭通市",value:"5306"},{label:"丽江市",value:"5307"},{label:"普洱市",value:"5308"},{label:"临沧市",value:"5309"},{label:"楚雄彝族自治州",value:"5323"},{label:"红河哈尼族彝族自治州",value:"5325"},{label:"文山壮族苗族自治州",value:"5326"},{label:"西双版纳傣族自治州",value:"5328"},{label:"大理白族自治州",value:"5329"},{label:"德宏傣族景颇族自治州",value:"5331"},{label:"怒江傈僳族自治州",value:"5333"},{label:"迪庆藏族自治州",value:"5334"}],[{label:"拉萨市",value:"5401"},{label:"日喀则市",value:"5402"},{label:"昌都市",value:"5403"},{label:"林芝市",value:"5404"},{label:"山南市",value:"5405"},{label:"那曲地区",value:"5424"},{label:"阿里地区",value:"5425"}],[{label:"西安市",value:"6101"},{label:"铜川市",value:"6102"},{label:"宝鸡市",value:"6103"},{label:"咸阳市",value:"6104"},{label:"渭南市",value:"6105"},{label:"延安市",value:"6106"},{label:"汉中市",value:"6107"},{label:"榆林市",value:"6108"},{label:"安康市",value:"6109"},{label:"商洛市",value:"6110"}],[{label:"兰州市",value:"6201"},{label:"嘉峪关市",value:"6202"},{label:"金昌市",value:"6203"},{label:"白银市",value:"6204"},{label:"天水市",value:"6205"},{label:"武威市",value:"6206"},{label:"张掖市",value:"6207"},{label:"平凉市",value:"6208"},{label:"酒泉市",value:"6209"},{label:"庆阳市",value:"6210"},{label:"定西市",value:"6211"},{label:"陇南市",value:"6212"},{label:"临夏回族自治州",value:"6229"},{label:"甘南藏族自治州",value:"6230"}],[{label:"西宁市",value:"6301"},{label:"海东市",value:"6302"},{label:"海北藏族自治州",value:"6322"},{label:"黄南藏族自治州",value:"6323"},{label:"海南藏族自治州",value:"6325"},{label:"果洛藏族自治州",value:"6326"},{label:"玉树藏族自治州",value:"6327"},{label:"海西蒙古族藏族自治州",value:"6328"}],[{label:"银川市",value:"6401"},{label:"石嘴山市",value:"6402"},{label:"吴忠市",value:"6403"},{label:"固原市",value:"6404"},{label:"中卫市",value:"6405"}],[{label:"乌鲁木齐市",value:"6501"},{label:"克拉玛依市",value:"6502"},{label:"吐鲁番市",value:"6504"},{label:"哈密市",value:"6505"},{label:"昌吉回族自治州",value:"6523"},{label:"博尔塔拉蒙古自治州",value:"6527"},{label:"巴音郭楞蒙古自治州",value:"6528"},{label:"阿克苏地区",value:"6529"},{label:"克孜勒苏柯尔克孜自治州",value:"6530"},{label:"喀什地区",value:"6531"},{label:"和田地区",value:"6532"},{label:"伊犁哈萨克自治州",value:"6540"},{label:"塔城地区",value:"6542"},{label:"阿勒泰地区",value:"6543"},{label:"自治区直辖县级行政区划",value:"6590"}],[{label:"台北",value:"6601"},{label:"高雄",value:"6602"},{label:"基隆",value:"6603"},{label:"台中",value:"6604"},{label:"台南",value:"6605"},{label:"新竹",value:"6606"},{label:"嘉义",value:"6607"},{label:"宜兰",value:"6608"},{label:"桃园",value:"6609"},{label:"苗栗",value:"6610"},{label:"彰化",value:"6611"},{label:"南投",value:"6612"},{label:"云林",value:"6613"},{label:"屏东",value:"6614"},{label:"台东",value:"6615"},{label:"花莲",value:"6616"},{label:"澎湖",value:"6617"}],[{label:"香港岛",value:"6701"},{label:"九龙",value:"6702"},{label:"新界",value:"6703"}],[{label:"澳门半岛",value:"6801"},{label:"氹仔岛",value:"6802"},{label:"路环岛",value:"6803"},{label:"路氹城",value:"6804"}]],u=t;l.default=u},df7c:function(e,l,a){(function(e){function a(e,l){for(var a=0,t=e.length-1;t>=0;t--){var u=e[t];"."===u?e.splice(t,1):".."===u?(e.splice(t,1),a++):a&&(e.splice(t,1),a--)}if(l)for(;a--;a)e.unshift("..");return e}var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,u=function(e){return t.exec(e).slice(1)};function n(e,l){if(e.filter)return e.filter(l);for(var a=[],t=0;t<e.length;t++)l(e[t],t,e)&&a.push(e[t]);return a}l.resolve=function(){for(var l="",t=!1,u=arguments.length-1;u>=-1&&!t;u--){var r=u>=0?arguments[u]:e.cwd();if("string"!==typeof r)throw new TypeError("Arguments to path.resolve must be strings");r&&(l=r+"/"+l,t="/"===r.charAt(0))}return l=a(n(l.split("/"),function(e){return!!e}),!t).join("/"),(t?"/":"")+l||"."},l.normalize=function(e){var t=l.isAbsolute(e),u="/"===r(e,-1);return e=a(n(e.split("/"),function(e){return!!e}),!t).join("/"),e||t||(e="."),e&&u&&(e+="/"),(t?"/":"")+e},l.isAbsolute=function(e){return"/"===e.charAt(0)},l.join=function(){var e=Array.prototype.slice.call(arguments,0);return l.normalize(n(e,function(e,l){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},l.relative=function(e,a){function t(e){for(var l=0;l<e.length;l++)if(""!==e[l])break;for(var a=e.length-1;a>=0;a--)if(""!==e[a])break;return l>a?[]:e.slice(l,a-l+1)}e=l.resolve(e).substr(1),a=l.resolve(a).substr(1);for(var u=t(e.split("/")),n=t(a.split("/")),r=Math.min(u.length,n.length),v=r,o=0;o<r;o++)if(u[o]!==n[o]){v=o;break}var i=[];for(o=v;o<u.length;o++)i.push("..");return i=i.concat(n.slice(v)),i.join("/")},l.sep="/",l.delimiter=":",l.dirname=function(e){var l=u(e),a=l[0],t=l[1];return a||t?(t&&(t=t.substr(0,t.length-1)),a+t):"."},l.basename=function(e,l){var a=u(e)[2];return l&&a.substr(-1*l.length)===l&&(a=a.substr(0,a.length-l.length)),a},l.extname=function(e){return u(e)[3]};var r="b"==="ab".substr(-1)?function(e,l,a){return e.substr(l,a)}:function(e,l,a){return l<0&&(l=e.length+l),e.substr(l,a)}}).call(this,a("4362"))},fbe1:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[{label:"北京市",value:"11"},{label:"天津市",value:"12"},{label:"河北省",value:"13"},{label:"山西省",value:"14"},{label:"内蒙古自治区",value:"15"},{label:"辽宁省",value:"21"},{label:"吉林省",value:"22"},{label:"黑龙江省",value:"23"},{label:"上海市",value:"31"},{label:"江苏省",value:"32"},{label:"浙江省",value:"33"},{label:"安徽省",value:"34"},{label:"福建省",value:"35"},{label:"江西省",value:"36"},{label:"山东省",value:"37"},{label:"河南省",value:"41"},{label:"湖北省",value:"42"},{label:"湖南省",value:"43"},{label:"广东省",value:"44"},{label:"广西壮族自治区",value:"45"},{label:"海南省",value:"46"},{label:"重庆市",value:"50"},{label:"四川省",value:"51"},{label:"贵州省",value:"52"},{label:"云南省",value:"53"},{label:"西藏自治区",value:"54"},{label:"陕西省",value:"61"},{label:"甘肃省",value:"62"},{label:"青海省",value:"63"},{label:"宁夏回族自治区",value:"64"},{label:"新疆维吾尔自治区",value:"65"},{label:"台湾",value:"66"},{label:"香港",value:"67"},{label:"澳门",value:"68"}],u=t;l.default=u}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/mpvue-citypicker/mpvueCityPicker';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mpvue-citypicker/mpvueCityPicker.js';

define('components/mpvue-citypicker/mpvueCityPicker.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mpvue-citypicker/mpvueCityPicker"], {
  "26cb": function cb(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("4fd0"),
        u = i.n(a);

    for (var l in a) {
      "default" !== l && function (t) {
        i.d(e, t, function () {
          return a[t];
        });
      }(l);
    }

    e["default"] = u.a;
  },
  "4ddf": function ddf(t, e, i) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    i.d(e, "a", function () {
      return a;
    }), i.d(e, "b", function () {
      return u;
    });
  },
  "4fd0": function fd0(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = n(i("fbe1")),
        u = n(i("d79b")),
        l = n(i("bbf0"));

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var r = {
      data: function data() {
        return {
          pickerValue: [0, 0, 0],
          provinceDataList: [],
          cityDataList: [],
          areaDataList: [],
          showPicker: !1
        };
      },
      created: function created() {
        this.init();
      },
      props: {
        pickerValueDefault: {
          type: Array,
          default: function _default() {
            return [0, 0, 0];
          }
        },
        themeColor: String
      },
      watch: {
        pickerValueDefault: function pickerValueDefault() {
          this.init();
        }
      },
      methods: {
        init: function init() {
          this.handPickValueDefault(), this.provinceDataList = a.default, this.cityDataList = u.default[this.pickerValueDefault[0]], this.areaDataList = l.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]], this.pickerValue = this.pickerValueDefault;
        },
        show: function show() {
          var t = this;
          setTimeout(function () {
            t.showPicker = !0;
          }, 0);
        },
        maskClick: function maskClick() {
          this.pickerCancel();
        },
        pickerCancel: function pickerCancel() {
          this.showPicker = !1, this._$emit("onCancel");
        },
        pickerConfirm: function pickerConfirm(t) {
          this.showPicker = !1, this._$emit("onConfirm");
        },
        showPickerView: function showPickerView() {
          this.showPicker = !0;
        },
        handPickValueDefault: function handPickValueDefault() {
          this.pickerValueDefault !== [0, 0, 0] && (this.pickerValueDefault[0] > a.default.length - 1 && (this.pickerValueDefault[0] = a.default.length - 1), this.pickerValueDefault[1] > u.default[this.pickerValueDefault[0]].length - 1 && (this.pickerValueDefault[1] = u.default[this.pickerValueDefault[0]].length - 1), this.pickerValueDefault[2] > l.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]].length - 1 && (this.pickerValueDefault[2] = l.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]].length - 1));
        },
        pickerChange: function pickerChange(t) {
          var e = t.mp.detail.value;
          this.pickerValue[0] !== e[0] ? (this.cityDataList = u.default[e[0]], this.areaDataList = l.default[e[0]][0], e[1] = 0, e[2] = 0) : this.pickerValue[1] !== e[1] && (this.areaDataList = l.default[e[0]][e[1]], e[2] = 0), this.pickerValue = e, this._$emit("onChange");
        },
        _$emit: function _$emit(t) {
          var e = {
            label: this._getLabel(),
            value: this.pickerValue,
            cityCode: this._getCityCode()
          };
          this.$emit(t, e);
        },
        _getLabel: function _getLabel() {
          var t = this.provinceDataList[this.pickerValue[0]].label + "-" + this.cityDataList[this.pickerValue[1]].label + "-" + this.areaDataList[this.pickerValue[2]].label;
          return t;
        },
        _getCityCode: function _getCityCode() {
          return this.areaDataList[this.pickerValue[2]].value;
        }
      }
    };
    e.default = r;
  },
  "51a9": function a9(t, e, i) {},
  "880a": function a(t, e, i) {
    "use strict";

    var a = i("51a9"),
        u = i.n(a);
    u.a;
  },
  ad87: function ad87(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("4ddf"),
        u = i("26cb");

    for (var l in u) {
      "default" !== l && function (t) {
        i.d(e, t, function () {
          return u[t];
        });
      }(l);
    }

    i("880a");
    var n = i("2877"),
        r = Object(n["a"])(u["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = r.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mpvue-citypicker/mpvueCityPicker-create-component', {
  'components/mpvue-citypicker/mpvueCityPicker-create-component': function componentsMpvueCitypickerMpvueCityPickerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ad87"));
  }
}, [['components/mpvue-citypicker/mpvueCityPicker-create-component']]]);
});
require('components/mpvue-citypicker/mpvueCityPicker.js');
__wxRoute = 'components/sunui-upimg/sunui-upimg-alioos';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/sunui-upimg/sunui-upimg-alioos.js';

define('components/sunui-upimg/sunui-upimg-alioos.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/sunui-upimg/sunui-upimg-alioos"], {
  "0ca6": function ca6(e, t, n) {
    "use strict";

    n.r(t);
    var i = n("d609"),
        r = n("86c9");

    for (var u in r) {
      "default" !== u && function (e) {
        n.d(t, e, function () {
          return r[e];
        });
      }(u);
    }

    n("0d18");
    var a = n("2877"),
        s = Object(a["a"])(r["default"], i["a"], i["b"], !1, null, "a7fe8d82", null);
    t["default"] = s.exports;
  },
  "0d18": function d18(e, t, n) {
    "use strict";

    var i = n("f9fd"),
        r = n.n(i);
    r.a;
  },
  "86c9": function c9(e, t, n) {
    "use strict";

    n.r(t);
    var i = n("ed03"),
        r = n.n(i);

    for (var u in i) {
      "default" !== u && function (e) {
        n.d(t, e, function () {
          return i[e];
        });
      }(u);
    }

    t["default"] = r.a;
  },
  d609: function d609(e, t, n) {
    "use strict";

    var i = function i() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        r = [];

    n.d(t, "a", function () {
      return i;
    }), n.d(t, "b", function () {
      return r;
    });
  },
  ed03: function ed03(e, t, n) {
    "use strict";

    (function (e, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var r = u(n("a34a"));

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function a(e, t, n, i, r, u, a) {
        try {
          var s = e[u](a),
              o = s.value;
        } catch (c) {
          return void n(c);
        }

        s.done ? t(o) : Promise.resolve(o).then(i, r);
      }

      function s(e) {
        return function () {
          var t = this,
              n = arguments;
          return new Promise(function (i, r) {
            var u = e.apply(t, n);

            function s(e) {
              a(u, i, r, s, o, "next", e);
            }

            function o(e) {
              a(u, i, r, s, o, "throw", e);
            }

            s(void 0);
          });
        };
      }

      var o = n("9574"),
          c = n("ad02");
      n("4974"), n("4ba1");
      var l = n("d3ab"),
          p = {
        data: function data() {
          return {
            upload_after_list: [],
            upload_picture_list: []
          };
        },
        name: "sunui-upimg",
        props: {
          upImgConfig: {
            type: Object
          }
        },
        created: function created() {},
        methods: {
          initServerImage: function initServerImage(e) {
            this.upload_picture_list = e;
          },
          chooseImage: function chooseImage(e) {
            m(this, parseInt(e), this.upImgConfig);
          },
          uploadimage: function uploadimage(e) {
            h(this, e);
          },
          deleteImg: function deleteImg(e) {
            g(e, this);
          },
          previewImg: function previewImg(e) {
            y(e, this);
          },
          previewImgs: function previewImgs(e) {
            w(e, this);
          }
        }
      };
      t.default = p;

      var f = function f() {
        var e = new Date();
        e.setHours(e.getHours() + o.timeout);
        var t = e.toISOString(),
            n = {
          expiration: t,
          conditions: [["content-length-range", 0, 5242880]]
        },
            i = c.encode(JSON.stringify(n));
        return i;
      },
          d = function d(e, t) {
        var n = e.upImgConfig.aliConfig.AccessKeySecret || o.AccessKeySecret,
            i = l.HMAC(l.SHA1, t, n, {
          asBytes: !0
        }),
            r = l.util.bytesToBase64(i);
        return r;
      },
          _ = function () {
        var t = s(r.default.mark(function t(n, u, a, o) {
          var c, l, p, _, h, g, m;

          return r.default.wrap(function (t) {
            while (1) {
              switch (t.prev = t.next) {
                case 0:
                  return c = {
                    aliyunFileKey: "".concat(u.aliConfig.oosDirectory, "/") + new Date().getTime() + Math.floor(150 * Math.random()) + ".png",
                    aliyunServerURL: u.aliConfig.url,
                    accessid: u.aliConfig.OSSAccessKeyId,
                    url: u.aliConfig.url || "",
                    oos: u.aliConfig.oos || !1
                  }, l = c.aliyunFileKey ? c.aliyunFileKey : "", p = c.aliyunServerURL ? c.aliyunServerURL : "", _ = c.accessid ? c.accessid : "", h = f(), g = d(n, h), t.next = 8, e.uploadFile({
                    url: c.url,
                    filePath: a[o]["path"],
                    name: "file",
                    formData: {
                      key: l,
                      policy: h,
                      OSSAccessKeyId: _,
                      signature: g,
                      success_action_status: "200"
                    },
                    success: function () {
                      var t = s(r.default.mark(function t(u) {
                        var s;
                        return r.default.wrap(function (t) {
                          while (1) {
                            switch (t.prev = t.next) {
                              case 0:
                                if (200 != u.statusCode) {
                                  t.next = 10;
                                  break;
                                }

                                return s = p + l, console.log(i("%c 阿里云上传(成功返回地址):".concat(s), "color:#1AAD19", " at components\\sunui-upimg\\sunui-upimg-alioos.vue:139")), a[o]["path_server"] = s, n.upload_picture_list = a, t.next = 7, n.$emit("onUpImg", n.upload_picture_list);

                              case 7:
                                e.hideLoading(), t.next = 15;
                                break;

                              case 10:
                                e.showLoading({
                                  title: "上传失败!"
                                }), setTimeout(function () {
                                  e.hideLoading();
                                }, 2e3), n.upload_picture_list = [], n.upload_after_list = [], console.warn(i("阿里云上传图片失败,返回状态码:", u.statusCode, " at components\\sunui-upimg\\sunui-upimg-alioos.vue:153"));

                              case 15:
                              case "end":
                                return t.stop();
                            }
                          }
                        }, t, this);
                      }));

                      function u(e) {
                        return t.apply(this, arguments);
                      }

                      return u;
                    }(),
                    fail: function () {
                      var t = s(r.default.mark(function t(n) {
                        return r.default.wrap(function (t) {
                          while (1) {
                            switch (t.prev = t.next) {
                              case 0:
                                e.showLoading({
                                  title: "上传失败!"
                                }), setTimeout(function () {
                                  e.hideLoading();
                                }, 2e3), console.log(i(n, " at components\\sunui-upimg\\sunui-upimg-alioos.vue:163"));

                              case 3:
                              case "end":
                                return t.stop();
                            }
                          }
                        }, t, this);
                      }));

                      function n(e) {
                        return t.apply(this, arguments);
                      }

                      return n;
                    }()
                  });

                case 8:
                  m = t.sent, m.onProgressUpdate(function () {
                    var e = s(r.default.mark(function e(t) {
                      var i, u;
                      return r.default.wrap(function (e) {
                        while (1) {
                          switch (e.prev = e.next) {
                            case 0:
                              i = 0, u = n.upload_picture_list.length;

                            case 1:
                              if (!(i < u)) {
                                e.next = 8;
                                break;
                              }

                              return e.next = 4, t.progress;

                            case 4:
                              a[i]["upload_percent"] = e.sent;

                            case 5:
                              i++, e.next = 1;
                              break;

                            case 8:
                              n.upload_picture_list = a;

                            case 9:
                            case "end":
                              return e.stop();
                          }
                        }
                      }, e, this);
                    }));
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  }());

                case 10:
                case "end":
                  return t.stop();
              }
            }
          }, t, this);
        }));
        return function (e, n, i, r) {
          return t.apply(this, arguments);
        };
      }(),
          h = function () {
        var e = s(r.default.mark(function e(t, n) {
          var i, u;
          return r.default.wrap(function (e) {
            while (1) {
              switch (e.prev = e.next) {
                case 0:
                  i = 0, u = t.upload_picture_list.length;

                case 1:
                  if (!(i < u)) {
                    e.next = 8;
                    break;
                  }

                  if (0 != t.upload_picture_list[i]["upload_percent"]) {
                    e.next = 5;
                    break;
                  }

                  return e.next = 5, _(t, n, t.upload_picture_list, i);

                case 5:
                  i++, e.next = 1;
                  break;

                case 8:
                case "end":
                  return e.stop();
              }
            }
          }, e, this);
        }));
        return function (t, n) {
          return e.apply(this, arguments);
        };
      }(),
          g = function () {
        var e = s(r.default.mark(function e(t, n) {
          return r.default.wrap(function (e) {
            while (1) {
              switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, n.$emit("onImgDel", {
                    url: t.currentTarget.dataset.url,
                    index: t.currentTarget.dataset.index
                  });

                case 2:
                  n.upload_picture_list.splice(t.currentTarget.dataset.index, 1), n.upload_after_list.splice(t.currentTarget.dataset.index, 1), n.upload_picture_list = n.upload_picture_list;

                case 5:
                case "end":
                  return e.stop();
              }
            }
          }, e, this);
        }));
        return function (t, n) {
          return e.apply(this, arguments);
        };
      }(),
          m = function m(t, n, i) {
        var u = {
          aliConfig: {
            AccessKeySecret: i.aliConfig.AccessKeySecret,
            OSSAccessKeyId: i.aliConfig.OSSAccessKeyId,
            oosDirectory: i.aliConfig.oosDirectory,
            url: i.aliConfig.url
          },
          count: n,
          tips: i.tips || !1,
          notli: i.notli,
          sourceType: i.sourceType,
          sizeType: i.sizeType
        };
        e.chooseImage({
          count: u.notli ? u.count = 9 : 0 == t.upload_after_list.length ? u.count : u.count - t.upload_after_list.length,
          sizeType: "" == u.sizeType || void 0 == u.sizeType || 1 == u.sizeType ? ["compressed"] : ["original"],
          sourceType: "" == u.sourceType || void 0 == u.sourceType ? ["album", "camera"] : "camera" == u.sourceType ? ["camera"] : "album" == u.sourceType ? ["album"] : ["album", "camera"],
          success: function () {
            var e = s(r.default.mark(function e(n) {
              var i, a;
              return r.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      for (i = 0, a = n.tempFiles.length; i < a; i++) {
                        n.tempFiles[i]["upload_percent"] = 0, n.tempFiles[i]["path_server"] = "", t.upload_picture_list.push(n.tempFiles[i]), t.upload_picture_list.length > u.count && (t.upload_picture_list = t.upload_picture_list.slice(0, u.count));
                      }

                      return e.next = 3, v(t, n, u);

                    case 3:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));

            function n(t) {
              return e.apply(this, arguments);
            }

            return n;
          }()
        });
      },
          v = function v(e, t, n) {
        !n.notli && n.count == e.upload_picture_list.length && h(e, n), n.notli && 9 == n.count && h(e, n), e.upload_after_list = e.upload_after_list.concat(t.tempFilePaths).slice(0, n.count), e.upload_picture_list = e.upload_picture_list.slice(0, n.count);
      },
          y = function y(t, n) {
        e.previewImage({
          current: n.upload_after_list[t.currentTarget.dataset.index],
          urls: n.upload_after_list
        });
      },
          w = function () {
        var t = s(r.default.mark(function t(n, i) {
          var u, a, s;
          return r.default.wrap(function (t) {
            while (1) {
              switch (t.prev = t.next) {
                case 0:
                  for (u = [], a = 0, s = i.upload_picture_list.length; a < s; a++) {
                    u.push(i.upload_picture_list[a].path_server);
                  }

                  e.previewImage({
                    current: n.currentTarget.dataset.src,
                    urls: u
                  });

                case 3:
                case "end":
                  return t.stop();
              }
            }
          }, t, this);
        }));
        return function (e, n) {
          return t.apply(this, arguments);
        };
      }();
    }).call(this, n("6e42")["default"], n("0de9")["default"]);
  },
  f9fd: function f9fd(e, t, n) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/sunui-upimg/sunui-upimg-alioos-create-component', {
  'components/sunui-upimg/sunui-upimg-alioos-create-component': function componentsSunuiUpimgSunuiUpimgAlioosCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0ca6"));
  }
}, [['components/sunui-upimg/sunui-upimg-alioos-create-component']]]);
});
require('components/sunui-upimg/sunui-upimg-alioos.js');

__wxRoute = 'pages/tabBar/home/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/home/home.js';

define('pages/tabBar/home/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/home/home"],{"29cd":function(t,o,n){"use strict";(function(t,e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=a(n("6c91"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t){return u(t)||s(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var o=0,n=new Array(t.length);o<t.length;o++)n[o]=t[o];return n}}var d={data:function(){return{kword:"",showHeader:!0,afterHeaderOpacity:1,headerPosition:"fixed",headerTop:null,statusTop:null,nVueTitle:null,city:"北京",currentSwiper:0,swiperList:[{id:1,src:"url1",img:"/static/img/1.jpg"},{id:2,src:"url2",img:"/static/img/2.jpg"},{id:3,src:"url3",img:"/static/img/3.jpg"}],categoryList:[{id:1,name:"数码",img:"/static/img/category/1.png"},{id:2,name:"家电",img:"/static/img/category/2.png"},{id:3,name:"饰品",img:"/static/img/category/3.png"},{id:4,name:"日用",img:"/static/img/category/4.png"},{id:5,name:"健康",img:"/static/img/category/5.png"},{id:6,name:"运动",img:"/static/img/category/6.png"},{id:7,name:"书籍",img:"/static/img/category/7.png"},{id:8,name:"服装",img:"/static/img/category/8.png"},{id:9,name:"书籍",img:"/static/img/category/7.png"},{id:10,name:"服装",img:"/static/img/category/8.png"}],Promotion:[],productList:[],loadingText:"正在加载..."}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){this.load(),setTimeout(function(){t.stopPullDownRefresh()},1e3)},onReachBottom:function(){t.showToast({title:"触发上拉加载"});var o=this.productList.length;if(o>=1e3)return this.loadingText="到底了",!1;this.load()},onLoad:function(){var o=this;this.nVueTitle=t.getSubNVueById("homeTitleNvue"),this.nVueTitle.onMessage(function(t){}),this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight(),this.amapPlugin=new i.default.AMapWX({key:"7c235a9ac4e25e482614c6b8eac6fd8e"}),this.amapPlugin.getRegeo({success:function(t){o.city=t[0].regeocodeData.addressComponent.city.replace(/市/g,""),o.nVueTitle.postMessage({type:"location",city:o.city})}}),this.Timer(),this.load(),this.loadPromotion()},methods:{load:function(){var o=this;t.request({url:"http://120.79.19.253:10086/Index",data:{type:"new"},success:function(t){console.log(e("$$$$$$$$$$$$$$$$$$$$$$$$",t.data.data," at pages\\tabBar\\home\\home.vue:253")),o.text="request success";var n=t.data.data,i=[{}],a=[],c=!0,s=!1,u=void 0;try{for(var d,l=n[Symbol.iterator]();!(c=(d=l.next()).done);c=!0){var g=d.value,m=/;/;if(m.test(g.pimages)){var f=g.pimages.split(";");a.push(f[0])}else a.push(g.pimages)}}catch(h){s=!0,u=h}finally{try{c||null==l.return||l.return()}finally{if(s)throw u}}for(var g in n)i[g]={goods_id:n[g].pid,img:a[g],name:n[g].pname,price:n[g].price,slogan:n[g].watched};console.log(e(i,"%%%%%%%%%%%%%%%%%%%%%%%%%%%"," at pages\\tabBar\\home\\home.vue:277")),0!==o.productList.length?o.productList=[].concat(r(o.productList),i):o.productList=[].concat(i)}})},loadPromotion:function(){for(var t=new Date,o=t.getFullYear(),n=t.getMonth()+1,e=t.getDate(),i=o+"/"+n+"/"+e+" 23:59:59",a=[{title:"整点秒杀",ad:"整天秒杀专区",img:"/static/img/s1.jpg",countdown:!1},{title:"限时抢购",ad:"每天23点上线",img:"/static/img/s2.jpg",countdown:i}],r=0;r<a.length;r++){var c=a[r];if(c.countdown){var s="00",u="00",d="00",l=new Date,g=new Date(i);if(!(l>=g)){var m=parseInt((g.getTime()-l.getTime())/1e3);s=parseInt(m/3600),u=parseInt(m%3600/60),d=m%60,s=s<10?"0"+s:s,u=u<10?"0"+u:u,d=d<10?"0"+d:d}a[r].countdown={h:s,m:u,s:d}}}this.Promotion=a},Timer:function(){var t=this;setInterval(function(){if(t.Promotion.length>0)for(var o=0;o<t.Promotion.length;o++){var n=t.Promotion[o];n.countdown&&(0==n.countdown.h&&0==n.countdown.m&&0==n.countdown.s||(n.countdown.s>0?(n.countdown.s--,n.countdown.s=n.countdown.s<10?"0"+n.countdown.s:n.countdown.s):n.countdown.m>0?(n.countdown.m--,n.countdown.m=n.countdown.m<10?"0"+n.countdown.m:n.countdown.m,n.countdown.s=59):n.countdown.h>0&&(n.countdown.h--,n.countdown.h=n.countdown.h<10?"0"+n.countdown.h:n.countdown.h,n.countdown.m=59,n.countdown.s=59),t.Promotion[o].countdown=n.countdown))}},1e3)},toMsg:function(){t.navigateTo({url:"../../msg/msg"})},toSearch:function(){t.navigateTo({url:"../../goods/goods-list/goods-list?kword="+this.kword}),t.showToast({title:"建议跳转到新页面做搜索功能"})},toSwiper:function(o){t.showToast({title:o.src,icon:"none"})},toCategory:function(o){t.setStorageSync("catName",o.name),t.navigateTo({url:"../../goods/goods-list/goods-list?codeid="+o.id+"&name="+o.name})},toPromotion:function(o){t.showToast({title:o.title,icon:"none"})},toGoods:function(o){t.showToast({title:"商品"+o.goods_id,icon:"none"}),t.navigateTo({url:"../../goods/goods?pid="+o.goods_id})},swiperChange:function(t){this.currentSwiper=t.detail.current}}};o.default=d}).call(this,n("6e42")["default"],n("0de9")["default"])},"4a97":function(t,o,n){"use strict";var e=function(){var t=this,o=t.$createElement;t._self._c},i=[];n.d(o,"a",function(){return e}),n.d(o,"b",function(){return i})},"60fb":function(t,o,n){},"7fc0":function(t,o,n){"use strict";n.r(o);var e=n("4a97"),i=n("a2cd");for(var a in i)"default"!==a&&function(t){n.d(o,t,function(){return i[t]})}(a);n("8695");var r=n("2877"),c=Object(r["a"])(i["default"],e["a"],e["b"],!1,null,null,null);o["default"]=c.exports},8695:function(t,o,n){"use strict";var e=n("60fb"),i=n.n(e);i.a},"92eb":function(t,o,n){"use strict";(function(t){n("590e"),n("921b");e(n("66fd"));var o=e(n("7fc0"));function e(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,n("6e42")["createPage"])},a2cd:function(t,o,n){"use strict";n.r(o);var e=n("29cd"),i=n.n(e);for(var a in e)"default"!==a&&function(t){n.d(o,t,function(){return e[t]})}(a);o["default"]=i.a}},[["92eb","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/home/home.js');
__wxRoute = 'pages/tabBar/category/category';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/category/category.js';

define('pages/tabBar/category/category.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/category/category"],{"5e10":function(n,i,c){"use strict";(function(n){c("590e"),c("921b");s(c("66fd"));var i=s(c("f34e"));function s(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,c("6e42")["createPage"])},6650:function(n,i,c){"use strict";c.r(i);var s=c("9887"),a=c.n(s);for(var e in s)"default"!==e&&function(n){c.d(i,n,function(){return s[n]})}(e);i["default"]=a.a},9887:function(n,i,c){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=a(c("6c91"));function a(n){return n&&n.__esModule?n:{default:n}}var e={data:function(){return{showCategoryIndex:0,headerPosition:"fixed",city:"北京",productlist:[{id:"1",listname:"数码产品",codelist:[101,102,103,104,105,106],name:["炫酷电脑","手机一族","相机拍摄","智能穿戴","电脑周边","网络设备"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/0_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/0_8.png"],divstyle:"linear-gradient(45deg, #c4e4ff, #91ccff)"},{id:"2",listname:"运动体育",codelist:[201,202,203,204,205,206],name:["运动器材","户外运动","健身塑形","球类包陪","小众运动","运动鞋"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/1_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/1_8.png"],divstyle:"linear-gradient(45deg, #f4c9ff, #ff9eee)"},{id:"3",listname:"服装服饰",codelist:[301,302,303,304,305,306],name:["运动风格","休闲风格","商务风格","百搭风格","街头风格","简约风格"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/2_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/2_8.png"],divstyle:"#ffd0dc"},{id:"4",listname:"饰品首饰",codelist:[401,402,403,404,405,406],name:["新潮搭配","服饰配饰","首饰手表","珠宝一类","眼睛一族","各种包包"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/3_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/3_8.png"],divstyle:"#ffd0dc"},{id:"5",listname:"家用电器",codelist:[501,502,503,504,505,506],name:["厨卫电器","小家电","环境电器","大家电","温控电气","其他电器"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/4_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/4_8.png"],divstyle:"#ffd0dc"},{id:"6",listname:"宠物用品",codelist:[601,602,603,604,605,606],name:["宠物玩具","宠物零食","喂食器","宠物","宠物药品","宠物之家"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/5_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/5_8.png"],divstyle:"#ffd0dc"},{id:"7",listname:"日用百货",codelist:[701,702,703,704,705,706],name:["文具教具","餐饮用具","厨房用品","床上用品","家居日用","其他日用"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/6_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/6_8.png"],divstyle:"#ffe0cd"},{id:"8",listname:"左图右史",codelist:[801,802,803,804,805,806],name:["国际名著","工具用书","课本教材","科普类书","小说大全","100本必读"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/7_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/7_8.png"],divstyle:"#ffe0cd"},{id:"9",listname:"美容护肤",codelist:[901,902,903,904,905,906],name:["化妆彩妆","护理护肤","口红卖场","美容美颜","香水一类","滋生面膜"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/8_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/8_8.png"],divstyle:"#ffe0cd"},{id:"10",listname:"健康养生",codelist:[1001,1002,1003,1004,1005,1006],name:["计生用品","外用理疗","传统滋补","保健品","养生药品","养生食物"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/9_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/9_8.png"],divstyle:"#ffe0cd"}]}},onPageScroll:function(n){n.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onLoad:function(){var n=this;this.amapPlugin=new s.default.AMapWX({key:"7c235a9ac4e25e482614c6b8eac6fd8e"}),this.amapPlugin.getRegeo({success:function(i){n.city=i[0].regeocodeData.addressComponent.city.replace(/市/g,"")}})},methods:{toMsg:function(){n.navigateTo({url:"../../msg/msg"})},showCategory:function(n){this.showCategoryIndex=n},toCategory:function(i,c){n.setStorageSync("catName",i),n.navigateTo({url:"../../goods/goods-list/goods-list?codelist="+c+"&listname="+i})},toSearch:function(){n.showToast({title:"建议跳转到新页面做搜索功能"})}}};i.default=e}).call(this,c("6e42")["default"])},aa6e:function(n,i,c){"use strict";var s=function(){var n=this,i=n.$createElement;n._self._c},a=[];c.d(i,"a",function(){return s}),c.d(i,"b",function(){return a})},c8c6:function(n,i,c){},ca52:function(n,i,c){"use strict";var s=c("c8c6"),a=c.n(s);a.a},f34e:function(n,i,c){"use strict";c.r(i);var s=c("aa6e"),a=c("6650");for(var e in a)"default"!==e&&function(n){c.d(i,n,function(){return a[n]})}(e);c("ca52");var o=c("2877"),u=Object(o["a"])(a["default"],s["a"],s["b"],!1,null,null,null);i["default"]=u.exports}},[["5e10","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/category/category.js');
__wxRoute = 'pages/ali/ali';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ali/ali.js';

define('pages/ali/ali.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ali/ali"],{3370:function(e,t,n){"use strict";n.r(t);var r=n("914f"),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=a.a},"6f81":function(e,t,n){"use strict";(function(e){n("590e"),n("921b");r(n("66fd"));var t=r(n("cdf2"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"914f":function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,r,a,o,u){try{var i=e[o](u),c=i.value}catch(s){return void n(s)}i.done?t(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){u(o,r,a,i,c,"next",e)}function c(e){u(o,r,a,i,c,"throw",e)}i(void 0)})}}var c={data:function(){return{oosArr:[],upImgOos:{aliConfig:{AccessKeySecret:"CbVR0tmpKXqAIEXxavJDqad3lcIIez",OSSAccessKeyId:"LTAIlbkoZl60gNWT",oosDirectory:"userimage",url:"https://simplett-img.oss-cn-beijing.aliyuncs.com/"},notli:!1,count:4,upBgColor:"#E8A400",upIconColor:"#eee",upSvgIconName:"icon-certificate"}}},methods:{uImageTap:function(){this.$refs.uImage.uploadimage(this.upImgOos)},delImgInfo:function(){var t=i(a.default.mark(function t(n){return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:console.log(e("你删除的图片地址为:",n,this.oosArr.splice(n.index,1)," at pages\\ali\\ali.vue:47"));case 1:case"end":return t.stop()}},t,this)}));function n(e){return t.apply(this,arguments)}return n}(),upOosData:function(){var t=i(a.default.mark(function t(n){var o,u,i;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:o=[],u=0,i=n.length;case 2:if(!(u<i)){t.next=15;break}if(t.prev=3,""==n[u].path_server){t.next=7;break}return t.next=7,o.push(n[u].path_server.split(","));case 7:t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](3),console.log(e("上传失败..."," at pages\\ali\\ali.vue:59"));case 12:u++,t.next=2;break;case 15:this.oosArr=o,o.length==this.upImgOos.count&&r.showToast({title:"上传成功",icon:"none"});case 17:case"end":return t.stop()}},t,this,[[3,9]])}));function n(e){return t.apply(this,arguments)}return n}(),getUpImgInfoOos:function(){console.log(e("阿里云转成一维数组:",this.oosArr.join().split(",")," at pages\\ali\\ali.vue:75"))}}};t.default=c}).call(this,n("0de9")["default"],n("6e42")["default"])},cd35:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},cdf2:function(e,t,n){"use strict";n.r(t);var r=n("cd35"),a=n("3370");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var u=n("2877"),i=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=i.exports}},[["6f81","common/runtime","common/vendor"]]]);
});
require('pages/ali/ali.js');
__wxRoute = 'pages/tabBar/cart/cart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/cart/cart.js';

define('pages/tabBar/cart/cart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/cart/cart"],{3173:function(t,s,e){"use strict";var i=e("7126"),o=e.n(i);o.a},"40c5":function(t,s,e){"use strict";(function(t){e("590e"),e("921b");i(e("66fd"));var s=i(e("650f"));function i(t){return t&&t.__esModule?t:{default:t}}t(s.default)}).call(this,e("6e42")["createPage"])},"650f":function(t,s,e){"use strict";e.r(s);var i=e("9ee6"),o=e("f64b");for(var n in o)"default"!==n&&function(t){e.d(s,t,function(){return o[t]})}(n);e("3173");var l=e("2877"),h=Object(l["a"])(o["default"],i["a"],i["b"],!1,null,null,null);s["default"]=h.exports},7126:function(t,s,e){},"9ee6":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c},o=[];e.d(s,"a",function(){return i}),e.d(s,"b",function(){return o})},d175:function(t,s,e){"use strict";(function(t,e){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var o={data:function(){return{sumPrice:"0.00",headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,selectedList:[],isAllselected:!1,goodsList:[],theIndex:null,oldIndex:null,isStop:!1}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onLoad:function(){this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight()},onShow:function(){this.getcartdata()},methods:{getcartdata:function(){var s=this;t.getStorage({key:"shoucanlist",success:function(t){s.goodsList=t.data},fail:function(t){s.goodsList=[{id:1,img:"/static/img/goods/p1.jpg",name:"蓝沢官方的模板数据",spec:"规格:S码",price:127.5,number:1,selected:!1}]}})},joinGoods:function(t){for(var s=this.goodsList.length,e=!1,o=0;o<s;o++){var n=this.goodsList[o];if(n.id==t.id){this.goodsList[o].number++,e=!0;break}}e||this.goodsList[i].unshift(t)},touchStart:function(t,s){s.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[s.touches[0].pageX,s.touches[0].pageY])},touchMove:function(t,s){var e=this;if(s.touches.length>1)this.isStop=!0;else{var i=s.touches[0].pageX-this.initXY[0],o=s.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(i)<5||(Math.abs(o)>Math.abs(i)?this.isStop=!0:i<0?(this.theIndex=t,this.isStop=!0):i>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout(function(){e.oldIndex=null},150)))}},touchEnd:function(t,s){this.isStop=!1},toGoods:function(s){t.showToast({title:"商品"+s.id,icon:"none"}),t.navigateTo({url:"../../goods/goods?pid="+s.id})},toConfirmation:function(){for(var s=[],e=this.goodsList.length,i=0;i<e;i++)this.goodsList[i].selected&&s.push(this.goodsList[i]);s.length<1?t.showToast({title:"请选择商品结算",icon:"none"}):t.setStorage({key:"buylist",data:s,success:function(){t.navigateTo({url:"../../order/confirmation"})}})},deleteGoods:function(s){var i=[],o=!0,n=!1,l=void 0;try{for(var h,d=this.goodsList[Symbol.iterator]();!(o=(h=d.next()).done);o=!0){var u=h.value;u.id==s?console.log(e("删除了id为："+s+"号的商品"," at pages\\tabBar\\cart\\cart.vue:242")):i.push(u)}}catch(c){n=!0,l=c}finally{try{o||null==d.return||d.return()}finally{if(n)throw l}}t.setStorage({key:"shoucanlist",data:i,success:function(t){console.log(e("缓存中删除成功"," at pages\\tabBar\\cart\\cart.vue:251"))},fail:function(s){t.showToast({title:"删除失败",icon:"none"})}}),this.getcartdata(),this.selectedList.splice(this.selectedList.indexOf(s),1),this.sum(),this.oldIndex=null,this.theIndex=null},deleteList:function(){this.selectedList.length;while(this.selectedList.length>0)this.deleteGoods(this.selectedList[0]);this.selectedList=[],this.isAllselected=this.selectedList.length==this.goodsList.length&&this.goodsList.length>0,this.sum()},selected:function(t){this.goodsList[t].selected=!this.goodsList[t].selected;var s=this.selectedList.indexOf(this.goodsList[t].id);s>-1?this.selectedList.splice(s,1):this.selectedList.push(this.goodsList[t].id),this.isAllselected=this.selectedList.length==this.goodsList.length,this.sum()},allSelect:function(){for(var t=this.goodsList.length,s=[],e=0;e<t;e++)this.goodsList[e].selected=!this.isAllselected,s.push(this.goodsList[e].id);this.selectedList=this.isAllselected?[]:s,this.isAllselected=!this.isAllselected&&0!=this.goodsList.length,this.sum()},sub:function(t){this.goodsList[t].number<=1||(this.goodsList[t].number--,this.sum())},add:function(t){this.goodsList[t].number++,this.sum()},sum:function(t,s){this.sumPrice=0;for(var e=this.goodsList.length,i=0;i<e;i++)this.goodsList[i].selected&&(this.sumPrice=t&&i==s?this.sumPrice+t.detail.value*this.goodsList[i].price:this.sumPrice+this.goodsList[i].number*this.goodsList[i].price);this.sumPrice=this.sumPrice.toFixed(2)},discard:function(){}}};s.default=o}).call(this,e("6e42")["default"],e("0de9")["default"])},f64b:function(t,s,e){"use strict";e.r(s);var i=e("d175"),o=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(s,t,function(){return i[t]})}(n);s["default"]=o.a}},[["40c5","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/cart/cart.js');
__wxRoute = 'pages/tabBar/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/user/user.js';

define('pages/tabBar/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/user/user"],{"011a":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s})},"1ee0":function(t,e,n){},"7ede":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{face:"",isfirst:!0,headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,user:{username:"游客1002",face:"",integral:0,balance:0,envelope:0},orderList:[{text:"待发货",icon:"fahuo"},{text:"待收货",icon:"shouhuo"},{text:"待评价",icon:"pingjia"}],mytoolbarList:[{url:"../../user/keep/keep",text:"我的收藏",img:"/static/img/user/point.png"},{url:"../../user/coupon/coupon",text:"我的关注",img:"/static/img/user/quan.png"},{url:"",text:"评论",img:"/static/img/user/renw.png"},{url:"../../user/address/address",text:"收货地址",img:"/static/img/user/addr.png"}]}},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onLoad:function(){this.statusHeight=0,this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight()},onReady:function(){t.setStorage({key:"UserInfo",data:!1,success:function(){},fail:function(t){}})},onShow:function(){var e=this;t.getStorage({key:"UserInfo",success:function(t){t.data?e.user=t.data:e.isfirst},fail:function(t){}}),this.face=t.getStorage({key:"faces",success:function(t){return console.log(n(t.data[0]," at pages\\tabBar\\user\\user.vue:194")),t.data[0]}}),console.log(n("gggggggggggggggggs",this.user.face,"hhhhhhhhhhhhhhhhhhhhhhhh"," at pages\\tabBar\\user\\user.vue:200")),this.user.face=this.face.substring(2),console.log(n(this.face.substring(2)+"3wwwwwwwwwwwwwwwwwwwwwwwww"," at pages\\tabBar\\user\\user.vue:202"))},methods:{toMsg:function(){t.navigateTo({url:"../../msg/msg"})},toOrderList:function(e){t.setStorageSync("tbIndex",e),t.navigateTo({url:"../../user/order_list/order_list?tbIndex="+e})},toSetting:function(){t.navigateTo({url:"../../user/setting/setting"})},toMyQR:function(){t.navigateTo({url:"../../user/myQR/myQR"})},toLogin:function(){t.showToast({title:"请登录",icon:"none"}),t.navigateTo({url:"../../login/login"}),this.isfirst=!1},isLogin:function(){var e=t.getStorageSync("UserInfo");return!!e},toDeposit:function(){t.navigateTo({url:"../../user/deposit/deposit"})},toPage:function(e){e?t.navigateTo({url:e}):t.showToast({title:"模板未包含此页面",icon:"none"})}}};e.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},"931f":function(t,e,n){"use strict";n.r(e);var o=n("7ede"),s=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=s.a},"9b4f":function(t,e,n){"use strict";var o=n("1ee0"),s=n.n(o);s.a},be12:function(t,e,n){"use strict";n.r(e);var o=n("011a"),s=n("931f");for(var u in s)"default"!==u&&function(t){n.d(e,t,function(){return s[t]})}(u);n("9b4f");var a=n("2877"),i=Object(a["a"])(s["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports},f0bf:function(t,e,n){"use strict";(function(t){n("590e"),n("921b");o(n("66fd"));var e=o(n("be12"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["f0bf","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/user/user.js');
__wxRoute = 'pages/goods/goods-list/goods-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goods/goods-list/goods-list.js';

define('pages/goods/goods-list/goods-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods-list/goods-list"],{"044d":function(t,o,e){"use strict";e.r(o);var s=e("5808"),i=e.n(s);for(var a in s)"default"!==a&&function(t){e.d(o,t,function(){return s[t]})}(a);o["default"]=i.a},"2c67":function(t,o,e){},5808:function(t,o,e){"use strict";(function(t,e){function s(t){return r(t)||a(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function r(t){if(Array.isArray(t)){for(var o=0,e=new Array(t.length);o<t.length;o++)e[o]=t[o];return e}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={data:function(){return{codelist:"",codename:"",goodsList:[],mychange:!0,loadingText:"正在加载...",headerTop:"0px",headerPosition:"fixed",orderbyList:[{text:"销量",selected:!0,orderbyicon:!1,orderby:0},{text:"价格",selected:!1,orderbyicon:["sheng","jiang"],orderby:0},{text:"好评",selected:!1,orderbyicon:!1,orderby:0}],orderby:"sheng"}},onLoad:function(o){console.log(t(o.codelist,o.listname," at pages\\goods\\goods-list\\goods-list.vue:62")),o.codelist?(this.codelist=o.codelist,this.codename=o.listname,this.mychange=1,console.log(t("列表跳转",this.codelist,this.codename," at pages\\goods\\goods-list\\goods-list.vue:67"))):o.codeid?(this.codelist=o.codeid,this.codename=o.name,this.mychange=2,console.log(t("主页跳转",this.codelist,this.codename," at pages\\goods\\goods-list\\goods-list.vue:72"))):o.kword&&(this.kword=o.kword,this.codename=this.kword,this.mychange=3),e.setNavigationBarTitle({title:this.codename}),this.reload()},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){var t=this;setTimeout(function(){t.reload(),e.stopPullDownRefresh()},1e3)},onReachBottom:function(){e.showToast({title:"触发上拉加载"});var t=this.goodsList.length;if(t>=1e3)return this.loadingText="到底了",!1;this.loadingText="正在加载...";this.goodsList[t-1].goods_id;this.reload()},methods:{reload:function(){var o=this;1==this.mychange?e.request({url:"http://120.79.19.253:10086/Search",data:{type:"categories",codelist:this.codelist},success:function(e){console.log(t("$$$$$$$$$$$$$$$$$$$$$$$$",e.data.data," at pages\\goods\\goods-list\\goods-list.vue:135")),o.text="request success";var i=e.data.data,a=[{}],r=[],n=!0,d=!1,l=void 0;try{for(var c,u=i[Symbol.iterator]();!(n=(c=u.next()).done);n=!0){var g=c.value,h=/;/;if(h.test(g.pimages)){var f=g.pimages.split(";");r.push(f[0])}else r.push(g.pimages)}}catch($){d=!0,l=$}finally{try{n||null==u.return||u.return()}finally{if(d)throw l}}for(var g in i)a[g]={goods_id:i[g].pid,img:r[g],name:i[g].pname,price:i[g].price,slogan:i[g].watched};console.log(t(a,"%%%%%%%%%%%%%%%%%%%%%%%%%%%"," at pages\\goods\\goods-list\\goods-list.vue:159")),o.goodsList=[].concat(s(o.goodsList),a)}}):2==this.mychange?e.request({url:"http://120.79.19.253:10086/Search",data:{type:"code",code:this.codelist},success:function(e){console.log(t("$$$$$$$$$$$$$$$$$$$$$$$$",e.data.data," at pages\\goods\\goods-list\\goods-list.vue:171")),o.text="request success";var i=e.data.data,a=[{}],r=[],n=!0,d=!1,l=void 0;try{for(var c,u=i[Symbol.iterator]();!(n=(c=u.next()).done);n=!0){var g=c.value,h=/;/;if(h.test(g.pimages)){var f=g.pimages.split(";");r.push(f[0])}else r.push(g.pimages)}}catch($){d=!0,l=$}finally{try{n||null==u.return||u.return()}finally{if(d)throw l}}for(var g in i)a[g]={goods_id:i[g].pid,img:r[g],name:i[g].pname,price:i[g].price,slogan:i[g].watched};console.log(t(a,"%%%%%%%%%%%%%%%%%%%%%%%%%%%"," at pages\\goods\\goods-list\\goods-list.vue:195")),o.goodsList=[].concat(s(o.goodsList),a)}}):3==this.mychange&&e.request({url:"http://120.79.19.253:10086/Search",data:{type:"category",kw:this.kword},success:function(e){console.log(t("$$$$$$$$$$$$$$$$$$$$$$$$",e.data.data," at pages\\goods\\goods-list\\goods-list.vue:207")),o.text="request success";var i=e.data.data,a=[{}],r=[],n=!0,d=!1,l=void 0;try{for(var c,u=i[Symbol.iterator]();!(n=(c=u.next()).done);n=!0){var g=c.value,h=/;/;if(h.test(g.pimages)){var f=g.pimages.split(";");r.push(f[0])}else r.push(g.pimages)}}catch($){d=!0,l=$}finally{try{n||null==u.return||u.return()}finally{if(d)throw l}}for(var g in i)a[g]={goods_id:i[g].pid,img:r[g],name:i[g].pname,price:i[g].price,slogan:i[g].watched};console.log(t(a,"%%%%%%%%%%%%%%%%%%%%%%%%%%%"," at pages\\goods\\goods-list\\goods-list.vue:231")),o.goodsList=[].concat(s(o.goodsList),a)}}),console.log(t("reload"," at pages\\goods\\goods-list\\goods-list.vue:237"))},toGoods:function(t){e.navigateTo({url:"../goods?pid="+t.goods_id})},select:function(t){var o=this.orderbyList[t].text+"排序 ";if(this.orderbyList[t].orderbyicon){var s=0==this.orderbyList[t].orderby?"升序":"降序";this.orderbyList[t].selected&&(s=0==this.orderbyList[t].orderby?"降序":"升序",this.orderbyList[t].orderby=0==this.orderbyList[t].orderby?1:0),o+=s}this.orderbyList[t].selected=!0;for(var i=this.orderbyList.length,a=0;a<i;a++)a!=t&&(this.orderbyList[a].selected=!1);e.showToast({title:o,icon:"none"})}}};o.default=n}).call(this,e("0de9")["default"],e("6e42")["default"])},"5a5d":function(t,o,e){"use strict";e.r(o);var s=e("9e83"),i=e("044d");for(var a in i)"default"!==a&&function(t){e.d(o,t,function(){return i[t]})}(a);e("d87a");var r=e("2877"),n=Object(r["a"])(i["default"],s["a"],s["b"],!1,null,"41ce1c09",null);o["default"]=n.exports},"6c26":function(t,o,e){"use strict";(function(t){e("590e"),e("921b");s(e("66fd"));var o=s(e("5a5d"));function s(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,e("6e42")["createPage"])},"9e83":function(t,o,e){"use strict";var s=function(){var t=this,o=t.$createElement;t._self._c},i=[];e.d(o,"a",function(){return s}),e.d(o,"b",function(){return i})},d87a:function(t,o,e){"use strict";var s=e("2c67"),i=e.n(s);i.a}},[["6c26","common/runtime","common/vendor"]]]);
});
require('pages/goods/goods-list/goods-list.js');
__wxRoute = 'pages/goods/goods';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goods/goods.js';

define('pages/goods/goods.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods"],{2466:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];s.d(e,"a",function(){return o}),s.d(e,"b",function(){return i})},"26bb":function(t,e,s){"use strict";(function(t){s("590e"),s("921b");o(s("66fd"));var e=o(s("c07c"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,s("6e42")["createPage"])},7337:function(t,e,s){},7724:function(t,e,s){"use strict";s.r(e);var o=s("a250"),i=s.n(o);for(var a in o)"default"!==a&&function(t){s.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},a250:function(t,e,s){"use strict";(function(t,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{details:{},pid:"",beforeHeaderzIndex:11,afterHeaderzIndex:10,beforeHeaderOpacity:1,afterHeaderOpacity:0,showBack:!0,swiperList:[],currentSwiper:0,anchorlist:[],selectAnchor:0,serviceClass:"",specClass:"",shareClass:"",goodsData:{id:1,name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",price:"127.00",number:1,service:[],spec:["当面交易","蓝沢担保","线上发货"],comment:{}},selectSpec:null,isKeep:!1,descriptionStr:""}},onLoad:function(e){this.pid=e.pid,console.log(t(this.pid,"(((((((((((((((((((())))))))))))))))))))"," at pages\\goods\\goods.vue:252")),console.log(t(e.pid," at pages\\goods\\goods.vue:258"))},onReady:function(){this.calcAnchor(),this.todetails()},onPageScroll:function(t){this.selectAnchor=t.scrollTop>=this.anchorlist[2].top?2:t.scrollTop>=this.anchorlist[1].top?1:0;var e=375;t.scrollTop=t.scrollTop>e?375:t.scrollTop,this.afterHeaderOpacity=t.scrollTop*(1/e),this.beforeHeaderOpacity=1-this.afterHeaderOpacity,this.beforeHeaderzIndex=t.scrollTop>0?10:11,this.afterHeaderzIndex=t.scrollTop>0?11:10},onReachBottom:function(){s.showToast({title:"触发上拉加载"})},mounted:function(){},methods:{swiperChange:function(t){this.currentSwiper=t.detail.current},toMsg:function(){s.navigateTo({url:"../msg/msg"})},toChat:function(){s.navigateTo({url:"../msg/chat/chat?name=客服008"})},todetails:function(){var e=this;console.log(t("请求商品的详细数据"," at pages\\goods\\goods.vue:303")),s.request({url:"http://120.79.19.253:10086/Search",data:{type:"goods",pid:this.pid},success:function(o){if(console.log(t(o.data," at pages\\goods\\goods.vue:312")),1==o.data.status){var i=o.data;e.text="request success";i.p_description;var a=i.pid,n=i.pimages,c=i.pname,r=i.status,l=(i.uid,i.price);i.wcount;e.goodsData.name=c,e.goodsData.pid=a,e.goodsData.price=l,1==r&&(e.goodsData.service=[{name:"蓝沢担保",description:"此商品官方保证为正品"},{name:"极速退款",description:"此商品享受退货极速退款服务"},{name:"7天退换",description:"此商品享受7天无理由退换服务"}]),e.todetails=i;var u=[],d=/;/;if(d.test(n))for(var p in n=n.split(";"),n)u.push({id:p+1,img:n[p]});else u.push({id:1,img:n});if(e.swiperList=u,1===e.swiperList.length)e.descriptionStr='<div style="text-align:center; margin-bottom: 50px;"><img width="100%" src="'+e.swiperList[0].img+'"/></div>';else{e.descriptionStr='<div style="text-align:center; margin-bottom: 50px;">';var g=!0,h=!1,f=void 0;try{for(var m,v=e.swiperList[Symbol.iterator]();!(g=(m=v.next()).done);g=!0){p=m.value;e.descriptionStr+='<img width="100%" src='+p.img+"/>"}}catch(A){h=!0,f=A}finally{try{g||null==v.return||v.return()}finally{if(h)throw f}}e.descriptionStr+="</div>"}}else s.showToast({title:"商品不存在",position:"center",image:"../../static/img/myfail.png"}),e.swiperList=[{id:1,img:"https://ae01.alicdn.com/kf/HTB1Mj7iTmzqK1RjSZFjq6zlCFXaP.jpg"},{id:2,img:"https://ae01.alicdn.com/kf/HTB1fbseTmzqK1RjSZFLq6An2XXaL.jpg"},{id:3,img:"https://ae01.alicdn.com/kf/HTB1dPUMThnaK1RjSZFtq6zC2VXa0.jpg"},{id:4,img:"https://ae01.alicdn.com/kf/HTB1OHZrTXzqK1RjSZFvq6AB7VXaw.jpg"}]}}),s.request({url:"http://120.79.19.253:10086/Leftmessage",data:{type:"get",pid:this.pid},success:function(s){if(console.log(t(s.data.status,"fghjklkhgfhjhgfhjkhgfjkhgggggggggggggggggggggg"," at pages\\goods\\goods.vue:409")),0==s.data.status)e.goodsData.comment={number:0,userface:"https://simplett-img.oss-cn-beijing.aliyuncs.com/user_image/userimage.jpg",username:"系统提示",content:"此商品的人气还不够哦"};else{var o=s.data.data;o&&(e.goodsData.comment={number:o.length,userface:o[0].image,username:o[0].nickname,content:o[0].message})}}})},share:function(){this.shareClass="show"},hideShare:function(){var t=this;this.shareClass="hide",setTimeout(function(){t.shareClass="none"},150)},keep:function(){this.isKeep=!this.isKeep},joinCart:function(){var e=this.pid,o=this.swiperList[0].img,i=this.goodsData.price,a=this.goodsData.name,n=1,c={id:e,img:o,price:i,name:a,number:n,spec:"",selected:!1},r=[],l="";if(s.getStorage({key:"shoucanlist",success:function(e){console.log(t(e.data," at pages\\goods\\goods.vue:468")),l=e.data},fail:function(t){l=!1}}),console.log(t(l,"tttttttttttttttttttttttttttttttttt"," at pages\\goods\\goods.vue:475")),null!==this.selectSpec)if(0==l)c.spec=this.selectSpec,r.push(c),console.log(t("ppppppppppppppppppp",r," at pages\\goods\\goods.vue:480")),s.setStorage({key:"shoucanlist",data:r,success:function(t){s.showToast({title:"已加入购物车"})},fail:function(){s.showToast({title:"储存异常，加入购物车失败"})}});else{r=l;var u=!1,d=!0,p=!1,g=void 0;try{for(var h,f=r[Symbol.iterator]();!(d=(h=f.next()).done);d=!0){var m=h.value;m.id==e&&(u=!0)}}catch(v){p=!0,g=v}finally{try{d||null==f.return||f.return()}finally{if(p)throw g}}console.log(t(u,"ASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",e," at pages\\goods\\goods.vue:505")),u?s.showToast({title:"已存在购物车"}):(c.spec=this.selectSpec,r.push(c),s.setStorage({key:"shoucanlist",data:r,success:function(t){s.showToast({title:"已加入购物车"})},fail:function(t){s.showToast({title:"储存异常，加入购物车失败"})}}))}else s.showToast({title:"请选择规格之后再加入购物车",icon:"none"})},buy:function(){var t=this;if(null==this.selectSpec)return this.showSpec(function(){t.toConfirmation()});this.toConfirmation()},toRatings:function(){s.navigateTo({url:"ratings/ratings?pid="+this.pid})},toConfirmation:function(){var t=[],e={id:this.goodsData.id,img:this.swiperList[0].img,name:this.goodsData.name,spec:"规格:"+this.goodsData.spec[this.selectSpec],price:this.goodsData.price,number:this.goodsData.number};t.push(e),s.setStorage({key:"buylist",data:t,success:function(){s.navigateTo({url:"../order/confirmation"})}})},showComments:function(t){},setSelectSpec:function(t){this.selectSpec=t},sub:function(){this.goodsData.number<=1||(this.goodsData.number=1)},add:function(){this.goodsData.number=1},toAnchor:function(t){this.selectAnchor=t,s.pageScrollTo({scrollTop:this.anchorlist[t].top,duration:200})},calcAnchor:function(){var t=this;this.anchorlist=[{name:"主图",top:0},{name:"评价",top:0},{name:"详情",top:0}];var e=s.createSelectorQuery().select("#comments");e.boundingClientRect(function(e){var o=0;o=plus.navigator.getStatusbarHeight();var i=s.upx2px(100);t.anchorlist[1].top=e.top-i-o,t.anchorlist[2].top=e.bottom-i-o}).exec()},back:function(){s.navigateBack()},showService:function(){console.log(t("show"," at pages\\goods\\goods.vue:640")),this.serviceClass="show"},hideService:function(){var t=this;this.serviceClass="hide",setTimeout(function(){t.serviceClass="none"},200)},showSpec:function(e){console.log(t("show"," at pages\\goods\\goods.vue:652")),this.specClass="show",this.specCallback=e},specCallback:function(){},hideSpec:function(){var t=this;this.specClass="hide",this.selectSpec&&this.specCallback&&this.specCallback(),this.specCallback=!1,setTimeout(function(){t.specClass="none"},200)},discard:function(){}}};e.default=o}).call(this,s("0de9")["default"],s("6e42")["default"])},c07c:function(t,e,s){"use strict";s.r(e);var o=s("2466"),i=s("7724");for(var a in i)"default"!==a&&function(t){s.d(e,t,function(){return i[t]})}(a);s("f284");var n=s("2877"),c=Object(n["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},f284:function(t,e,s){"use strict";var o=s("7337"),i=s.n(o);i.a}},[["26bb","common/runtime","common/vendor"]]]);
});
require('pages/goods/goods.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0044":function(t,e,n){},"2abe":function(t,e,n){"use strict";n.r(e);var o=n("7588"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},7588:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("62f2"));function a(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{email:"",passwd:"",Status:"",isShowOauth:!0,showProvider:{weixin:!0,qq:!0,sinaweibo:!0,xiaomi:!0}}},onShow:function(){},onLoad:function(){this.isShowOauth=!0,this.getProvider()},methods:{oauthLogin:function(e){t.showLoading(),t.login({provider:e,success:function(n){console.log(o("success: "+JSON.stringify(n)," at pages\\login\\login.vue:70")),t.getUserInfo({provider:e,success:function(e){console.log(o("用户信息："+JSON.stringify(e.userInfo)," at pages\\login\\login.vue:75")),t.setStorage({key:"UserInfo",data:{username:e.userInfo.nickName,face:e.userInfo.avatarUrl,signature:"个性签名",integral:0,balance:0,envelope:0},success:function(){t.hideLoading(),t.showToast({title:"登录成功",icon:"success"}),setTimeout(function(){t.navigateBack()},300)}})}})},fail:function(t){console.log(o("fail: "+JSON.stringify(t)," at pages\\login\\login.vue:101"))}})},getProvider:function(){var e=this;t.getProvider({service:"oauth",success:function(t){for(var n=t.provider.length,o=0;o<n;o++)e.showProvider[t.provider[o]]=!0;0==t.provider.length&&(e.isShowOauth=!0)}})},toPage:function(e){t.hideKeyboard(),t.navigateTo({url:e})},doLogin:function(){var e=this;if(t.hideKeyboard(),!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.email))return t.showToast({title:"请填写正确邮箱",icon:"none"}),!1;if(!/^(\w){6,10}$/.test(this.passwd))return t.showToast({title:"密码错误",icon:"none"}),!1;t.showLoading({title:"提交中..."});var n={email:this.email,pwd:(0,i.default)(this.passwd)};t.request({url:"http://120.79.19.253:10086/Login",data:n,success:function(n){if(console.log(o("###################################这是登陆之后的数据",n.data," at pages\\login\\login.vue:156")),e.Status=n.data.status,1===e.Status){var i=n.data.token;t.setStorage({key:"token",data:i,success:function(){t.showToast({title:"登陆成功",position:"center",image:"../../static/img/mysuccess.png"}),t.navigateTo({url:"../tabBar/user/user"})},fail:function(){t.showToast({title:"用户数据写入失败，建议重启本应用",position:"center",image:"../../static/img/myfail.png"})}})}else t.showToast({title:"用户名或密码有误",position:"center",image:"../../static/img/myfail.png"});e.text="request success"}})}}};e.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},7625:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"9a17":function(t,e,n){"use strict";var o=n("0044"),i=n.n(o);i.a},a839:function(t,e,n){"use strict";(function(t){n("590e"),n("921b");o(n("66fd"));var e=o(n("ed23"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},ed23:function(t,e,n){"use strict";n.r(e);var o=n("7625"),i=n("2abe");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("9a17");var s=n("2877"),u=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports}},[["a839","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/login/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/register.js';

define('pages/login/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/register"],{"03f8":function(t,e,i){"use strict";i.r(e);var n=i("e5ee"),o=i("ca72");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("59c1");var s=i("2877"),u=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},"573a":function(t,e,i){},"59c1":function(t,e,i){"use strict";var n=i("573a"),o=i.n(n);o.a},a3e3:function(t,e,i){"use strict";(function(t){i("590e"),i("921b");n(i("66fd"));var e=n(i("03f8"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},c9cd:function(t,e,i){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("62f2"));function a(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{email:"",code:"",passwd:"",Status:"",getCodeText:"获取验证码",getCodeBtnColor:"#ffffff",getCodeisWaiting:!1}},onLoad:function(){},methods:{Timer:function(){},getCode:function(){var e=this;if(t.hideKeyboard(),!this.getCodeisWaiting)return/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.email)?void t.request({url:"http://120.79.19.253:10087/M",data:{email:this.email},success:function(i){console.log(n(i.data," at pages\\login\\register.vue:66")),e.text="request success",1==i.data.status&&(e.getCodeText="发送中...",e.getCodeisWaiting=!0,e.getCodeBtnColor="rgba(255,255,255,0.5)",setTimeout(function(){t.showToast({title:"验证码已发送",icon:"none"}),e.setTimer()},1e3))}}):(t.showToast({title:"请填写正确邮箱",icon:"none"}),!1)},setTimer:function(){var t=this,e=60;this.getCodeText="重新获取(60)",this.Timer=setInterval(function(){if(e<=0)return t.getCodeisWaiting=!1,t.getCodeBtnColor="#ffffff",t.getCodeText="获取验证码",void clearInterval(t.Timer);t.getCodeText="重新获取("+e+")",e--},1e3)},doReg:function(){var e=this;if(t.hideKeyboard(),!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.email))return t.showToast({title:"请填写正确邮箱",icon:"none"}),!1;if(!/^\w{6}$/.test(this.code))return t.showToast({title:"验证码不正确",icon:"none"}),!1;if(!/^(\w){6,10}$/.test(this.passwd))return t.showToast({title:"密码不正确",icon:"none"}),!1;t.showLoading({title:"提交中..."});var i={name:"新用户",pwd:(0,o.default)(this.passwd),email:this.email,yzm:this.code};t.request({url:"http://120.79.19.253:10086/Regist",data:i,success:function(i){if(e.text="request success",e.Status=i.data.status,1==e.Status){var n=i.data.token;t.setStorage({key:"token",data:n,success:function(){t.showToast({title:"登陆成功",position:"center",image:"../../static/img/mysuccess.png"})},fail:function(){t.showToast({title:"用户数据写入失败，建议重启本应用",position:"center",image:"../../static/img/myfail.png"})}})}else 2==e.Status?t.showToast({title:"邮箱的验证码出错",position:"center",image:"../../static/img/myfail.png"}):3==e.Status&&t.showToast({title:"邮箱被占用",position:"center",image:"../../static/img/myfail.png"})}})},toLogin:function(){t.hideKeyboard(),t.redirectTo({url:"login"}),t.navigateBack()}}};e.default=s}).call(this,i("6e42")["default"],i("0de9")["default"])},ca72:function(t,e,i){"use strict";i.r(e);var n=i("c9cd"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},e5ee:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})}},[["a3e3","common/runtime","common/vendor"]]]);
});
require('pages/login/register.js');
__wxRoute = 'pages/login/resetpasswd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/resetpasswd.js';

define('pages/login/resetpasswd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/resetpasswd"],{"068f":function(t,e,n){"use strict";n.r(e);var o=n("e200"),a=n("bf8b");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("6f10");var i=n("2877"),u=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},"6f10":function(t,e,n){"use strict";var o=n("99a0"),a=n.n(o);a.a},"99a0":function(t,e,n){},bf8b:function(t,e,n){"use strict";n.r(e);var o=n("c1aa"),a=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=a.a},c1aa:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(n("62f2"));function s(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{email:"",passwd1:"",phoneNumber:"",code:"",passwd:"",getCodeText:"获取验证码",getCodeBtnColor:"#ffffff",getCodeisWaiting:!1}},onLoad:function(){},methods:{Timer:function(){},setTimer:function(){var t=this,e=60;this.getCodeText="重新获取(60)",this.Timer=setInterval(function(){if(e<=0)return t.getCodeisWaiting=!1,t.getCodeBtnColor="#ffffff",t.getCodeText="获取验证码",void clearInterval(t.Timer);t.getCodeText="重新获取("+e+")",e--},1e3)},doReset:function(){var e=this;if(t.hideKeyboard(),!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.email))return t.showToast({title:"请填写正确的邮箱号",icon:"none"}),!1;if(!/^\d{6,10}$/.test(this.passwd))return t.showToast({title:"密码格式不正确",icon:"none"}),!1;if(this.passwd!==this.passwd1)return t.showToast({title:"两次密码不一致",icon:"none"}),!1;t.showLoading({title:"提交中..."});var n="";t.getStorage({key:"token",success:function(t){console.log(o(t.data," at pages\\login\\resetpasswd.vue:115")),n=t.data},fail:function(){t.showToast({title:"登陆状态异常，请重新登陆",icon:"none"})}}),console.log(o(n,"我是token"," at pages\\login\\resetpasswd.vue:126"));var s={email:this.email,token:n,type:"pwd",pwd:(0,a.default)(this.passwd1)};t.request({url:"http://120.79.19.253:10086/Mode",data:s,success:function(n){t.hideLoading(),console.log(o(n.data," at pages\\login\\resetpasswd.vue:139")),1==n.data.status?t.showToast({title:"密码修改成功",position:"center",image:"../../static/img/mysuccess.png"}):t.showToast({title:"密码修改失败",position:"center",image:"../../static/img/myfail.png"}),e.text="request success"}})}}};e.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])},da61:function(t,e,n){"use strict";(function(t){n("590e"),n("921b");o(n("66fd"));var e=o(n("068f"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},e200:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})}},[["da61","common/runtime","common/vendor"]]]);
});
require('pages/login/resetpasswd.js');
__wxRoute = 'pages/order/confirmation';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/confirmation.js';

define('pages/order/confirmation.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/confirmation"],{"1a48":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=(e._self._c,e._f("toFixed")(e.deduction)),i=e._f("toFixed")(e.goodsPrice),o=e._f("toFixed")(e.freight),r=e._f("toFixed")(e.deduction),s=e._f("toFixed")(e.sumPrice);e.$mp.data=Object.assign({},{$root:{f0:n,f1:i,f2:o,f3:r,f4:s}})},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"1a80":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{buylist:[],goodsPrice:0,sumPrice:0,freight:12,note:"",int:1200,deduction:0,recinfo:{id:1,name:"大黑哥",head:"大",tel:"18816881688",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!0}}},onShow:function(){var t=this;e.getStorage({key:"buylist",success:function(e){t.buylist=e.data,t.goodsPrice=0;for(var n=t.buylist.length,i=0;i<n;i++)t.goodsPrice=t.goodsPrice+t.buylist[i].number*t.buylist[i].price;t.deduction=t.int/100,t.sumPrice=t.goodsPrice-t.deduction+t.freight}}),e.getStorage({key:"selectAddress",success:function(n){t.recinfo=n.data,e.removeStorage({key:"selectAddress"})}})},onHide:function(){},onBackPress:function(){this.clearOrder()},filters:{toFixed:function(e){return parseFloat(e).toFixed(2)}},methods:{clearOrder:function(){var t=this;e.removeStorage({key:"buylist",success:function(e){t.buylist=[],console.log(n("remove buylist success"," at pages\\order\\confirmation.vue:160"))}})},toPay:function(){for(var t=this,n=[],i=[],o=this.buylist.length,r=0;r<o;r++)n.push(this.buylist[r]),i.push(this.buylist[r].id);0!=n.length?(e.showLoading({title:"正在提交订单..."}),setTimeout(function(){e.setStorage({key:"paymentOrder",data:n,success:function(){e.hideLoading(),e.redirectTo({url:"../pay/payment/payment?amount="+t.sumPrice})}})},1e3)):e.showToast({title:"订单信息有误，请重新购买",icon:"none"})},selectAddress:function(){e.navigateTo({url:"../user/address/address?type=select"})}}};t.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])},"4da2":function(e,t,n){"use strict";var i=n("f678"),o=n.n(i);o.a},"61d4":function(e,t,n){"use strict";n.r(t);var i=n("1a80"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=o.a},f327:function(e,t,n){"use strict";n.r(t);var i=n("1a48"),o=n("61d4");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("4da2");var s=n("2877"),u=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=u.exports},f60f:function(e,t,n){"use strict";(function(e){n("590e"),n("921b");i(n("66fd"));var t=i(n("f327"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},f678:function(e,t,n){}},[["f60f","common/runtime","common/vendor"]]]);
});
require('pages/order/confirmation.js');
__wxRoute = 'pages/user/order_list/order_list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/order_list/order_list.js';

define('pages/user/order_list/order_list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/order_list/order_list"],{"0be0":function(e,t,n){"use strict";(function(e){n("590e"),n("921b");i(n("66fd"));var t=i(n("781f"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"156f":function(e,t,n){"use strict";var i=n("c86a"),r=n.n(i);r.a},1659:function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{headerPosition:"fixed",headerTop:"0px",typeText:{unpaid:"等待付款",back:"等待商家发货",unreceived:"商家已发货",received:"等待用户评价",completed:"交易已完成",refunds:"商品退货处理中",cancelled:"订单已取消"},orderType:["全部","待付款","待发货","待收货","待评价","退换货"],orderList:[[{type:"unpaid",ordersn:0,goods_id:0,img:"/static/img/goods/p1.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"unpaid",ordersn:1,goods_id:1,img:"/static/img/goods/p2.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"back",ordersn:2,goods_id:1,img:"/static/img/goods/p3.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"unreceived",ordersn:3,goods_id:1,img:"/static/img/goods/p4.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"received",ordersn:4,goods_id:1,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"completed",ordersn:5,goods_id:1,img:"/static/img/goods/p6.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"refunds",ordersn:6,goods_id:1,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"cancelled",ordersn:7,goods_id:1,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1}],[{type:"unpaid",ordersn:0,goods_id:0,img:"/static/img/goods/p1.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"unpaid",ordersn:1,goods_id:1,img:"/static/img/goods/p2.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1}],[],[{type:"unreceived",ordersn:3,goods_id:1,img:"/static/img/goods/p4.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1}],[{type:"received",ordersn:4,goods_id:1,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1}],[{type:"refunds",ordersn:6,goods_id:1,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1}]],list:[],tabbarIndex:0}},onLoad:function(t){console.log(e("option: "+JSON.stringify(t)," at pages\\user\\order_list\\order_list.vue:105"));var n=parseInt(t.tbIndex)+1;this.list=this.orderList[n],this.tabbarIndex=n},onPageScroll:function(e){},methods:{showType:function(e){this.tabbarIndex=e,this.list=this.orderList[e]},showLogistics:function(e){},remindDeliver:function(e){n.showToast({title:"已提醒商家发货"})},cancelOrder:function(t){var i=this;n.showModal({title:"取消订单",content:"确定取消此订单？",success:function(n){n.confirm?(console.log(e("用户点击确定"," at pages\\user\\order_list\\order_list.vue:144")),i.doCancelOrder(t.ordersn)):n.cancel&&console.log(e("用户点击取消"," at pages\\user\\order_list\\order_list.vue:147"))}})},doCancelOrder:function(e){for(var t=this.orderList.length,n=0;n<t;n++){var i=this.orderList[n],r=i.length;if(r>0&&"unpaid"==i[0].type)for(var o=0;o<r;o++)if(this.orderList[n][o].ordersn==e){this.orderList[n][o].type="cancelled";break}}},toPayment:function(e){n.showLoading({title:"正在获取订单..."});var t=[];t.push(e),setTimeout(function(){n.setStorage({key:"paymentOrder",data:t,success:function(){n.hideLoading(),n.navigateTo({url:"../../pay/payment/payment?amount="+e.payment})}})},500)}}};t.default=i}).call(this,n("0de9")["default"],n("6e42")["default"])},"30d7":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r})},"781f":function(e,t,n){"use strict";n.r(t);var i=n("30d7"),r=n("e3f4");for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);n("156f");var s=n("2877"),d=Object(s["a"])(r["default"],i["a"],i["b"],!1,null,null,null);t["default"]=d.exports},c86a:function(e,t,n){},e3f4:function(e,t,n){"use strict";n.r(t);var i=n("1659"),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=r.a}},[["0be0","common/runtime","common/vendor"]]]);
});
require('pages/user/order_list/order_list.js');
__wxRoute = 'pages/user/setting/revise/Hphoto';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/setting/revise/Hphoto.js';

define('pages/user/setting/revise/Hphoto.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/setting/revise/Hphoto"],{"0010":function(e,t,n){"use strict";n.r(t);var u=n("4335"),o=n("423d");for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);n("f301");var a=n("2877"),r=Object(a["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=r.exports},"2fbd":function(e,t,n){},"423d":function(e,t,n){"use strict";n.r(t);var u=n("74d4"),o=n.n(u);for(var s in u)"default"!==s&&function(e){n.d(t,e,function(){return u[e]})}(s);t["default"]=o.a},4335:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return o})},"74d4":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{chooseImgFromAlbums:function(){e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(t){e.previewImage({urls:t.tempFilePaths,fail:function(e){console.log(n(e.errMsg," at pages\\user\\setting\\revise\\Hphoto.vue:33"))}}),console.log(n(t.tempFilePaths," at pages\\user\\setting\\revise\\Hphoto.vue:37")),e.setStorage({key:"faces",data:t.tempFilePaths,success:function(){console.log(n("success"," at pages\\user\\setting\\revise\\Hphoto.vue:42"))}})}})}}};t.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},da2f:function(e,t,n){"use strict";(function(e){n("590e"),n("921b");u(n("66fd"));var t=u(n("0010"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},f301:function(e,t,n){"use strict";var u=n("2fbd"),o=n.n(u);o.a}},[["da2f","common/runtime","common/vendor"]]]);
});
require('pages/user/setting/revise/Hphoto.js');
__wxRoute = 'pages/user/setting/revise/rename';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/setting/revise/rename.js';

define('pages/user/setting/revise/rename.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/setting/revise/rename"],{"02ae":function(e,t,n){"use strict";(function(e){n("590e"),n("921b");a(n("66fd"));var t=a(n("9544"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"7eb4":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{}},methods:{onReady:function(){e.setStorage({key:"rename",data:res.tempFilePaths,success:function(){console.log(n("success"," at pages\\user\\setting\\revise\\rename.vue:28"))}})}}};t.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},"8dd2":function(e,t,n){},9544:function(e,t,n){"use strict";n.r(t);var a=n("c404"),u=n("b28a");for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);n("d65a");var c=n("2877"),o=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,"7183c86a",null);t["default"]=o.exports},b28a:function(e,t,n){"use strict";n.r(t);var a=n("7eb4"),u=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=u.a},c404:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return u})},d65a:function(e,t,n){"use strict";var a=n("8dd2"),u=n.n(a);u.a}},[["02ae","common/runtime","common/vendor"]]]);
});
require('pages/user/setting/revise/rename.js');
__wxRoute = 'pages/user/myQR/myQR';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/myQR/myQR.js';

define('pages/user/myQR/myQR.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/myQR/myQR"],{"0b43":function(t,e,n){"use strict";(function(t){n("590e"),n("921b");u(n("66fd"));var e=u(n("cc45"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"4b0b":function(t,e,n){"use strict";var u=n("b5d3"),i=n.n(u);i.a},b34c:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{tis:"保存到相册",showBtn:!1}},onLoad:function(){this.showBtn=!0},methods:{printscreen:function(){this.tis="正在保存";var e=this.$mp.page.$getAppWebview(),u=new plus.nativeObj.Bitmap;this.showBtn=!1,this.$nextTick(function(){var i=this;setTimeout(function(){e.draw(u,function(e){i.showBtn=!0,console.log(t("bitmap绘制图片成功"," at pages\\user\\myQR\\myQR.vue:45")),console.log(t("e: "+JSON.stringify(e)," at pages\\user\\myQR\\myQR.vue:46")),u.save("_doc/Qr.jpg",{overwrite:!0,quality:100},function(t){plus.gallery.save(t.target,function(t){n.showToast({title:"保存成功"}),i.tis="保存到相册",u.clear()},function(t){u.clear()})},function(e){console.log(t("保存图片失败："+JSON.stringify(e)," at pages\\user\\myQR\\myQR.vue:61"))})},function(e){console.log(t("bitmap绘制图片失败："+JSON.stringify(e)," at pages\\user\\myQR\\myQR.vue:64"))})},200)})}}};e.default=u}).call(this,n("0de9")["default"],n("6e42")["default"])},b5d3:function(t,e,n){},cc45:function(t,e,n){"use strict";n.r(e);var u=n("dedc"),i=n("e6d3");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("4b0b");var a=n("2877"),c=Object(a["a"])(i["default"],u["a"],u["b"],!1,null,null,null);e["default"]=c.exports},dedc:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return i})},e6d3:function(t,e,n){"use strict";n.r(e);var u=n("b34c"),i=n.n(u);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);e["default"]=i.a}},[["0b43","common/runtime","common/vendor"]]]);
});
require('pages/user/myQR/myQR.js');
__wxRoute = 'pages/user/setting/setting';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/setting/setting.js';

define('pages/user/setting/setting.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/setting/setting"],{2269:function(t,e,n){"use strict";n.r(e);var u=n("a8e9"),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e["default"]=a.a},"5b41":function(t,e,n){"use strict";n.r(e);var u=n("6561"),a=n("2269");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("9f96");var i=n("2877"),o=Object(i["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=o.exports},6561:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},"746a":function(t,e,n){},"9f96":function(t,e,n){"use strict";var u=n("746a"),a=n.n(u);a.a},a8e9:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},methods:{showType:function(t){this.tabbarIndex=t,this.list=this.orderList[t]},Hphoto:function(){t.navigateTo({url:"/pages/user/setting/revise/Hphoto"})},rename:function(){t.navigateTo({url:"/pages/user/setting/revise/rename"})}}};e.default=n}).call(this,n("6e42")["default"])},d0e8:function(t,e,n){"use strict";(function(t){n("590e"),n("921b");u(n("66fd"));var e=u(n("5b41"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["d0e8","common/runtime","common/vendor"]]]);
});
require('pages/user/setting/setting.js');
__wxRoute = 'pages/user/setting/revise/Hphoto';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/setting/revise/Hphoto.js';

define('pages/user/setting/revise/Hphoto.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/setting/revise/Hphoto"],{"0010":function(e,t,n){"use strict";n.r(t);var u=n("4335"),o=n("423d");for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);n("f301");var a=n("2877"),r=Object(a["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=r.exports},"2fbd":function(e,t,n){},"423d":function(e,t,n){"use strict";n.r(t);var u=n("74d4"),o=n.n(u);for(var s in u)"default"!==s&&function(e){n.d(t,e,function(){return u[e]})}(s);t["default"]=o.a},4335:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return o})},"74d4":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{chooseImgFromAlbums:function(){e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(t){e.previewImage({urls:t.tempFilePaths,fail:function(e){console.log(n(e.errMsg," at pages\\user\\setting\\revise\\Hphoto.vue:33"))}}),console.log(n(t.tempFilePaths," at pages\\user\\setting\\revise\\Hphoto.vue:37")),e.setStorage({key:"faces",data:t.tempFilePaths,success:function(){console.log(n("success"," at pages\\user\\setting\\revise\\Hphoto.vue:42"))}})}})}}};t.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},da2f:function(e,t,n){"use strict";(function(e){n("590e"),n("921b");u(n("66fd"));var t=u(n("0010"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},f301:function(e,t,n){"use strict";var u=n("2fbd"),o=n.n(u);o.a}},[["da2f","common/runtime","common/vendor"]]]);
});
require('pages/user/setting/revise/Hphoto.js');
__wxRoute = 'pages/user/myQR/myQR';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/myQR/myQR.js';

define('pages/user/myQR/myQR.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/myQR/myQR"],{"0b43":function(t,e,n){"use strict";(function(t){n("590e"),n("921b");u(n("66fd"));var e=u(n("cc45"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"4b0b":function(t,e,n){"use strict";var u=n("b5d3"),i=n.n(u);i.a},b34c:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{tis:"保存到相册",showBtn:!1}},onLoad:function(){this.showBtn=!0},methods:{printscreen:function(){this.tis="正在保存";var e=this.$mp.page.$getAppWebview(),u=new plus.nativeObj.Bitmap;this.showBtn=!1,this.$nextTick(function(){var i=this;setTimeout(function(){e.draw(u,function(e){i.showBtn=!0,console.log(t("bitmap绘制图片成功"," at pages\\user\\myQR\\myQR.vue:45")),console.log(t("e: "+JSON.stringify(e)," at pages\\user\\myQR\\myQR.vue:46")),u.save("_doc/Qr.jpg",{overwrite:!0,quality:100},function(t){plus.gallery.save(t.target,function(t){n.showToast({title:"保存成功"}),i.tis="保存到相册",u.clear()},function(t){u.clear()})},function(e){console.log(t("保存图片失败："+JSON.stringify(e)," at pages\\user\\myQR\\myQR.vue:61"))})},function(e){console.log(t("bitmap绘制图片失败："+JSON.stringify(e)," at pages\\user\\myQR\\myQR.vue:64"))})},200)})}}};e.default=u}).call(this,n("0de9")["default"],n("6e42")["default"])},b5d3:function(t,e,n){},cc45:function(t,e,n){"use strict";n.r(e);var u=n("dedc"),i=n("e6d3");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("4b0b");var a=n("2877"),c=Object(a["a"])(i["default"],u["a"],u["b"],!1,null,null,null);e["default"]=c.exports},dedc:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return i})},e6d3:function(t,e,n){"use strict";n.r(e);var u=n("b34c"),i=n.n(u);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);e["default"]=i.a}},[["0b43","common/runtime","common/vendor"]]]);
});
require('pages/user/myQR/myQR.js');
__wxRoute = 'pages/msg/msg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/msg/msg.js';

define('pages/msg/msg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/msg/msg"],{"367d":function(e,t,i){"use strict";i.r(t);var a=i("baf3"),c=i.n(a);for(var m in a)"default"!==m&&function(e){i.d(t,e,function(){return a[e]})}(m);t["default"]=c.a},"6cf9":function(e,t,i){"use strict";(function(e){i("590e"),i("921b");a(i("66fd"));var t=a(i("9c08"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])},"7b35":function(e,t,i){"use strict";var a=i("a9d2"),c=i.n(a);c.a},"9c08":function(e,t,i){"use strict";i.r(t);var a=i("c0e4"),c=i("367d");for(var m in c)"default"!==m&&function(e){i.d(t,e,function(){return c[e]})}(m);i("7b35");var u=i("2877"),s=Object(u["a"])(c["default"],a["a"],a["b"],!1,null,null,null);t["default"]=s.exports},a9d2:function(e,t,i){},baf3:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{chatList:[{uid:1,username:"鲜果蔬专营店",face:"/static/img/im/face/face_1.jpg",time:"13:08",msg:"亲，20点前下单都是当天送达的",tisNum:1},{uid:2,username:"官店大欺客旗舰店",face:"/static/img/im/face/face_2.jpg",time:"13:05",msg:"问那么多干什么？不想买就滚~",tisNum:0},{uid:3,username:"妙不可言",face:"/static/img/im/face/face_3.jpg",time:"12:15",msg:"推荐一个商品呗？",tisNum:0},{uid:4,username:"茶叶专卖",face:"/static/img/im/face/face_4.jpg",time:"12:11",msg:"现在卖的都是未过青的茶哦",tisNum:0},{uid:5,username:"likeKiss客服",face:"/static/img/im/face/face_5.jpg",time:"12:10",msg:"你好，发福建快递多久送到的？",tisNum:0},{uid:6,username:"白开水",face:"/static/img/im/face/face_6.jpg",time:"12:10",msg:"在吗？",tisNum:0},{uid:7,username:"衣帽间的叹息",face:"/static/img/im/face/face_7.jpg",time:"11:56",msg:"新品上市，欢迎选购",tisNum:0},{uid:8,username:"景萧疏",face:"/static/img/im/face/face_8.jpg",time:"11:56",msg:"商品七天无理由退换的",tisNum:0},{uid:9,username:"文宁先生",face:"/static/img/im/face/face_9.jpg",time:"12:15",msg:"星期天再发货的",tisNum:0},{uid:10,username:"高端Chieh",face:"/static/img/im/face/face_10.jpg",time:"12:36",msg:"建议你直接先测量好尺码在选购的。",tisNum:0},{uid:11,username:"mode旗舰店",face:"/static/img/im/face/face_11.jpg",time:"12:40",msg:"新品5折，还有大量优惠券。",tisNum:0},{uid:12,username:"敏萘客服",face:"/static/img/im/face/face_12.jpg",time:"12:36",msg:"还没有用，等我明天早上试一下",tisNum:0},{uid:13,username:"春天里的花",face:"/static/img/im/face/face_13.jpg",time:"12:36",msg:"适用于成年人的，小孩不适用的",tisNum:0},{uid:14,username:"电脑外设专业户",face:"/static/img/im/face/face_13.jpg",time:"12:36",msg:"把上面的螺丝拆下来，把铁片撬开就能看见了",tisNum:0},{uid:15,username:"至善汽车用品",face:"/static/img/im/face/face_15.jpg",time:"12:36",msg:"这个产品是原车配件，完美装上的",tisNum:10}]}},onPullDownRefresh:function(){setTimeout(function(){e.stopPullDownRefresh()},1e3)},onLoad:function(){},methods:{toChat:function(t){e.navigateTo({url:"chat/chat?name="+t.username})}}};t.default=i}).call(this,i("6e42")["default"])},c0e4:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},c=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return c})}},[["6cf9","common/runtime","common/vendor"]]]);
});
require('pages/msg/msg.js');
__wxRoute = 'pages/msg/chat/chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/msg/chat/chat.js';

define('pages/msg/chat/chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/msg/chat/chat"],{"4ce3":function(i,g,t){"use strict";var f=function(){var i=this,g=i.$createElement;i._self._c},l=[];t.d(g,"a",function(){return f}),t.d(g,"b",function(){return l})},"63ab":function(i,g,t){"use strict";(function(i,t){Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var f={data:function(){return{textMsg:"",scrollAnimation:!1,scrollTop:0,scrollToView:"",msgList:[],msgImgList:[],myuid:0,RECORDER:i.getRecorderManager(),isVoice:!1,voiceTis:"按住 说话",recordTis:"手指上滑 取消发送",recording:!1,willStop:!1,initPoint:{identifier:0,Y:0},recordTimer:null,recordLength:0,AUDIO:i.createInnerAudioContext(),playMsgid:null,VoiceTimer:null,showEmji:"",emojiList:[[{url:"100.gif",alt:"[微笑]"},{url:"101.gif",alt:"[伤心]"},{url:"102.gif",alt:"[美女]"},{url:"103.gif",alt:"[发呆]"},{url:"104.gif",alt:"[墨镜]"},{url:"105.gif",alt:"[哭]"},{url:"106.gif",alt:"[羞]"},{url:"107.gif",alt:"[哑]"},{url:"108.gif",alt:"[睡]"},{url:"109.gif",alt:"[哭]"},{url:"110.gif",alt:"[囧]"},{url:"111.gif",alt:"[怒]"},{url:"112.gif",alt:"[调皮]"},{url:"113.gif",alt:"[笑]"},{url:"114.gif",alt:"[惊讶]"},{url:"115.gif",alt:"[难过]"},{url:"116.gif",alt:"[酷]"},{url:"117.gif",alt:"[汗]"},{url:"118.gif",alt:"[抓狂]"},{url:"119.gif",alt:"[吐]"},{url:"120.gif",alt:"[笑]"},{url:"121.gif",alt:"[快乐]"},{url:"122.gif",alt:"[奇]"},{url:"123.gif",alt:"[傲]"}],[{url:"124.gif",alt:"[饿]"},{url:"125.gif",alt:"[累]"},{url:"126.gif",alt:"[吓]"},{url:"127.gif",alt:"[汗]"},{url:"128.gif",alt:"[高兴]"},{url:"129.gif",alt:"[闲]"},{url:"130.gif",alt:"[努力]"},{url:"131.gif",alt:"[骂]"},{url:"132.gif",alt:"[疑问]"},{url:"133.gif",alt:"[秘密]"},{url:"134.gif",alt:"[乱]"},{url:"135.gif",alt:"[疯]"},{url:"136.gif",alt:"[哀]"},{url:"137.gif",alt:"[鬼]"},{url:"138.gif",alt:"[打击]"},{url:"139.gif",alt:"[bye]"},{url:"140.gif",alt:"[汗]"},{url:"141.gif",alt:"[抠]"},{url:"142.gif",alt:"[鼓掌]"},{url:"143.gif",alt:"[糟糕]"},{url:"144.gif",alt:"[恶搞]"},{url:"145.gif",alt:"[什么]"},{url:"146.gif",alt:"[什么]"},{url:"147.gif",alt:"[累]"}],[{url:"148.gif",alt:"[看]"},{url:"149.gif",alt:"[难过]"},{url:"150.gif",alt:"[难过]"},{url:"151.gif",alt:"[坏]"},{url:"152.gif",alt:"[亲]"},{url:"153.gif",alt:"[吓]"},{url:"154.gif",alt:"[可怜]"},{url:"155.gif",alt:"[刀]"},{url:"156.gif",alt:"[水果]"},{url:"157.gif",alt:"[酒]"},{url:"158.gif",alt:"[篮球]"},{url:"159.gif",alt:"[乒乓]"},{url:"160.gif",alt:"[咖啡]"},{url:"161.gif",alt:"[美食]"},{url:"162.gif",alt:"[动物]"},{url:"163.gif",alt:"[鲜花]"},{url:"164.gif",alt:"[枯]"},{url:"165.gif",alt:"[唇]"},{url:"166.gif",alt:"[爱]"},{url:"167.gif",alt:"[分手]"},{url:"168.gif",alt:"[生日]"},{url:"169.gif",alt:"[电]"},{url:"170.gif",alt:"[炸弹]"},{url:"171.gif",alt:"[刀子]"}],[{url:"172.gif",alt:"[足球]"},{url:"173.gif",alt:"[瓢虫]"},{url:"174.gif",alt:"[翔]"},{url:"175.gif",alt:"[月亮]"},{url:"176.gif",alt:"[太阳]"},{url:"177.gif",alt:"[礼物]"},{url:"178.gif",alt:"[抱抱]"},{url:"179.gif",alt:"[拇指]"},{url:"180.gif",alt:"[贬低]"},{url:"181.gif",alt:"[握手]"},{url:"182.gif",alt:"[剪刀手]"},{url:"183.gif",alt:"[抱拳]"},{url:"184.gif",alt:"[勾引]"},{url:"185.gif",alt:"[拳头]"},{url:"186.gif",alt:"[小拇指]"},{url:"187.gif",alt:"[拇指八]"},{url:"188.gif",alt:"[食指]"},{url:"189.gif",alt:"[ok]"},{url:"190.gif",alt:"[情侣]"},{url:"191.gif",alt:"[爱心]"},{url:"192.gif",alt:"[蹦哒]"},{url:"193.gif",alt:"[颤抖]"},{url:"194.gif",alt:"[怄气]"},{url:"195.gif",alt:"[跳舞]"}],[{url:"196.gif",alt:"[发呆]"},{url:"197.gif",alt:"[背着]"},{url:"198.gif",alt:"[伸手]"},{url:"199.gif",alt:"[耍帅]"},{url:"200.png",alt:"[微笑]"},{url:"201.png",alt:"[生病]"},{url:"202.png",alt:"[哭泣]"},{url:"203.png",alt:"[吐舌]"},{url:"204.png",alt:"[迷糊]"},{url:"205.png",alt:"[瞪眼]"},{url:"206.png",alt:"[恐怖]"},{url:"207.png",alt:"[忧愁]"},{url:"208.png",alt:"[眨眉]"},{url:"209.png",alt:"[闭眼]"},{url:"210.png",alt:"[鄙视]"},{url:"211.png",alt:"[阴暗]"},{url:"212.png",alt:"[小鬼]"},{url:"213.png",alt:"[礼物]"},{url:"214.png",alt:"[拜佛]"},{url:"215.png",alt:"[力量]"},{url:"216.png",alt:"[金钱]"},{url:"217.png",alt:"[蛋糕]"},{url:"218.png",alt:"[彩带]"},{url:"219.png",alt:"[礼物]"}]],onlineEmoji:{"100.gif":"AbNQgA.gif","101.gif":"AbN3ut.gif","102.gif":"AbNM3d.gif","103.gif":"AbN8DP.gif","104.gif":"AbNljI.gif","105.gif":"AbNtUS.gif","106.gif":"AbNGHf.gif","107.gif":"AbNYE8.gif","108.gif":"AbNaCQ.gif","109.gif":"AbNN4g.gif","110.gif":"AbN0vn.gif","111.gif":"AbNd3j.gif","112.gif":"AbNsbV.gif","113.gif":"AbNwgs.gif","114.gif":"AbNrD0.gif","115.gif":"AbNDuq.gif","116.gif":"AbNg5F.gif","117.gif":"AbN6ET.gif","118.gif":"AbNcUU.gif","119.gif":"AbNRC4.gif","120.gif":"AbNhvR.gif","121.gif":"AbNf29.gif","122.gif":"AbNW8J.gif","123.gif":"AbNob6.gif","124.gif":"AbN5K1.gif","125.gif":"AbNHUO.gif","126.gif":"AbNIDx.gif","127.gif":"AbN7VK.gif","128.gif":"AbNb5D.gif","129.gif":"AbNX2d.gif","130.gif":"AbNLPe.gif","131.gif":"AbNjxA.gif","132.gif":"AbNO8H.gif","133.gif":"AbNxKI.gif","134.gif":"AbNzrt.gif","135.gif":"AbU9Vf.gif","136.gif":"AbUSqP.gif","137.gif":"AbUCa8.gif","138.gif":"AbUkGQ.gif","139.gif":"AbUFPg.gif","140.gif":"AbUPIS.gif","141.gif":"AbUZMn.gif","142.gif":"AbUExs.gif","143.gif":"AbUA2j.gif","144.gif":"AbUMIU.gif","145.gif":"AbUerq.gif","146.gif":"AbUKaT.gif","147.gif":"AbUmq0.gif","148.gif":"AbUuZV.gif","149.gif":"AbUliF.gif","150.gif":"AbU1G4.gif","151.gif":"AbU8z9.gif","152.gif":"AbU3RJ.gif","153.gif":"AbUYs1.gif","154.gif":"AbUJMR.gif","155.gif":"AbUadK.gif","156.gif":"AbUtqx.gif","157.gif":"AbUUZ6.gif","158.gif":"AbUBJe.gif","159.gif":"AbUdIO.gif","160.gif":"AbU0iD.gif","161.gif":"AbUrzd.gif","162.gif":"AbUDRH.gif","163.gif":"AbUyQA.gif","164.gif":"AbUWo8.gif","165.gif":"AbU6sI.gif","166.gif":"AbU2eP.gif","167.gif":"AbUcLt.gif","168.gif":"AbU4Jg.gif","169.gif":"AbURdf.gif","170.gif":"AbUhFS.gif","171.gif":"AbU5WQ.gif","172.gif":"AbULwV.gif","173.gif":"AbUIzj.gif","174.gif":"AbUTQs.gif","175.gif":"AbU7yn.gif","176.gif":"AbUqe0.gif","177.gif":"AbUHLq.gif","178.gif":"AbUOoT.gif","179.gif":"AbUvYF.gif","180.gif":"AbUjFU.gif","181.gif":"AbaSSJ.gif","182.gif":"AbUxW4.gif","183.gif":"AbaCO1.gif","184.gif":"Abapl9.gif","185.gif":"Aba9yR.gif","186.gif":"AbaFw6.gif","187.gif":"Abaiex.gif","188.gif":"AbakTK.gif","189.gif":"AbaZfe.png","190.gif":"AbaEFO.gif","191.gif":"AbaVYD.gif","192.gif":"AbamSH.gif","193.gif":"AbaKOI.gif","194.gif":"Abanld.gif","195.gif":"Abau6A.gif","196.gif":"AbaQmt.gif","197.gif":"Abal0P.gif","198.gif":"AbatpQ.gif","199.gif":"Aba1Tf.gif","200.png":"Aba8k8.png","201.png":"AbaGtS.png","202.png":"AbaJfg.png","203.png":"AbaNlj.png","204.png":"Abawmq.png","205.png":"AbaU6s.png","206.png":"AbaaXn.png","207.png":"Aba000.png","208.png":"AbarkT.png","209.png":"AbastU.png","210.png":"AbaB7V.png","211.png":"Abafn1.png","212.png":"Abacp4.png","213.png":"AbayhF.png","214.png":"Abag1J.png","215.png":"Aba2c9.png","216.png":"AbaRXR.png","217.png":"Aba476.png","218.png":"Abah0x.png","219.png":"Abdg58.png"}}},onLoad:function(g){var t=this;i.setNavigationBarTitle({title:g.name}),this.getMsgList(),this.AUDIO.onEnded(function(i){t.playMsgid=null}),this.RECORDER.onStart(function(i){t.recordBegin(i)}),this.RECORDER.onStop(function(i){t.recordEnd(i)})},methods:{getMsgList:function(){for(var i=[{id:0,uid:0,username:"大黑哥",face:"/static/img/face.jpg",time:"12:56",type:"text",msg:{content:"为什么温度会相差那么大？"}},{id:1,uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:"12:57",type:"text",msg:{content:"这个是有偏差的，两个温度相差十几二十度是很正常的，如果相差五十度，那即是质量问题了。"}},{id:2,uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:"12:59",type:"voice",msg:{url:"/static/voice/3.aac",length:"00:06"}},{id:3,uid:0,username:"大黑哥",face:"/static/img/face.jpg",time:"13:05",type:"voice",msg:{url:"/static/voice/2.mp3",length:"00:06"}},{id:4,uid:0,username:"大黑哥",face:"/static/img/face.jpg",time:"13:05",type:"img",msg:{url:"/static/img/goods/p10.jpg",w:200,h:200}},{id:5,uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:"12:59",type:"img",msg:{url:"/static/img/q.jpg",w:1920,h:1080}}],g=0;g<i.length;g++)"img"==i[g].type&&(i[g]=this.setPicSize(i[g]),console.log(t("list[i]: "+JSON.stringify(i[g])," at pages\\msg\\chat\\chat.vue:187")),this.msgImgList.push(i[g].msg.url));this.msgList=i,this.$nextTick(function(){this.scrollTop=9999,this.scrollAnimation=!0})},setPicSize:function(g){var t=i.upx2px(350),f=i.upx2px(350);if(g.msg.w>t||g.msg.h>f){var l=g.msg.w/g.msg.h;g.msg.w>g.msg.h?(g.msg.w=t,g.msg.h=g.msg.w/l):(g.msg.h=f,g.msg.w=g.msg.h*l)}return g},screenMsg:function(g){switch(g.uid!=this.myuid&&i.vibrateLong(),g.type){case"text":this.addTextMsg(g);break;case"voice":this.addVoiceMsg(g);break;case"img":this.addImgMsg(g);break}this.$nextTick(function(){this.scrollToView="msg"+g.id})},chooseEmoji:function(){this.showEmji="showEmoji"==this.showEmji?"hideEmoji":"showEmoji"},hideEmoji:function(){this.showEmji="showEmoji"==this.showEmji?"hideEmoji":""},addEmoji:function(i){this.textMsg+=i.alt},sendText:function(){if(this.hideEmoji(),this.textMsg){var i=this.replaceEmoji(this.textMsg),g={content:i};this.sendMsg(g,"text"),this.textMsg=""}},replaceEmoji:function(i){var g=this,f=i.replace(/\[([^(\]|\[)]*)\]/g,function(i,f){console.log(t("item: "+i," at pages\\msg\\chat\\chat.vue:262"));for(var l=0;l<g.emojiList.length;l++)for(var a=g.emojiList[l],e=0;e<a.length;e++){var s=a[e];if(s.alt==i){var n="https://s2.ax1x.com/2019/04/12/",r='<img src="'+n+g.onlineEmoji[s.url]+'">';return console.log(t("imgstr: "+r," at pages\\msg\\chat\\chat.vue:271")),r}}});return'<div style="display: flex;align-items: center;">'+f+"</div>"},chooseImage:function(){var g=this;this.hideEmoji(),i.chooseImage({sizeType:["original","compressed"],success:function(f){for(var l=function(l){i.getImageInfo({src:f.tempFilePaths[l],success:function(i){console.log(t(i.width," at pages\\msg\\chat\\chat.vue:289")),console.log(t(i.height," at pages\\msg\\chat\\chat.vue:290"));var a={url:f.tempFilePaths[l],w:i.width,h:i.height};g.sendMsg(a,"img")}})},a=0;a<f.tempFilePaths.length;a++)l(a)}})},sendMsg:function(i,g){var t=new Date,f=this.msgList[this.msgList.length-1].id;f++;var l={id:f,uid:0,username:"大黑哥",face:"/static/img/face.jpg",time:t.getHours()+":"+t.getMinutes(),type:g,msg:i};this.screenMsg(l)},addTextMsg:function(i){this.msgList.push(i)},addVoiceMsg:function(i){this.msgList.push(i)},addImgMsg:function(i){i=this.setPicSize(i),this.msgImgList.push(i.msg.url),this.msgList.push(i)},showPic:function(g){i.previewImage({indicator:"none",current:g.msg.url,urls:this.msgImgList})},playVoice:function(i){this.playMsgid=i.id,this.AUDIO.src=i.msg.url,console.log(t("msg.msg.url: "+i.msg.url," at pages\\msg\\chat\\chat.vue:342")),this.AUDIO.play()},voiceBegin:function(i){i.touches.length>1||(this.initPoint.Y=i.touches[0].clientY,this.initPoint.identifier=i.touches[0].identifier,this.RECORDER.start({format:"aac"}))},recordBegin:function(i){var g=this;this.recording=!0,this.voiceTis="松开 结束",this.recordLength=0,this.recordTimer=setInterval(function(){g.recordLength++},1e3)},voiceCancel:function(){this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.willStop=!0,this.RECORDER.stop()},voiceIng:function(g){if(this.recording){var t=g.touches[0];this.initPoint.Y-t.clientY>=i.upx2px(100)?(this.willStop=!0,this.recordTis="松开手指 取消发送"):(this.willStop=!1,this.recordTis="手指上滑 取消发送")}},voiceEnd:function(i){this.recording&&(this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.RECORDER.stop())},recordEnd:function(i){if(clearInterval(this.recordTimer),this.willStop)console.log(t("取消发送录音"," at pages\\msg\\chat\\chat.vue:421"));else{plus.io.resolveLocalFileSystemURL(i.tempFilePath,function(i){i.file(function(i){console.log(t(i.size+"--"+i.name," at pages\\msg\\chat\\chat.vue:404"))})},function(i){alert("Resolve file URL failed: "+i.message)}),console.log(t("e: "+JSON.stringify(i)," at pages\\msg\\chat\\chat.vue:409"));var g={length:0,url:i.tempFilePath},f=parseInt(this.recordLength/60),l=this.recordLength%60;f=f<10?"0"+f:f,l=l<10?"0"+l:l,g.length=f+":"+l,this.sendMsg(g,"voice")}this.willStop=!1},switchVoice:function(){this.hideEmoji(),this.isVoice=!this.isVoice},discard:function(){}}};g.default=f}).call(this,t("6e42")["default"],t("0de9")["default"])},"84d5":function(i,g,t){"use strict";(function(i){t("590e"),t("921b");f(t("66fd"));var g=f(t("f69b"));function f(i){return i&&i.__esModule?i:{default:i}}i(g.default)}).call(this,t("6e42")["createPage"])},"9d44":function(i,g,t){},c0f7:function(i,g,t){"use strict";t.r(g);var f=t("63ab"),l=t.n(f);for(var a in f)"default"!==a&&function(i){t.d(g,i,function(){return f[i]})}(a);g["default"]=l.a},f341:function(i,g,t){"use strict";var f=t("9d44"),l=t.n(f);l.a},f69b:function(i,g,t){"use strict";t.r(g);var f=t("4ce3"),l=t("c0f7");for(var a in l)"default"!==a&&function(i){t.d(g,i,function(){return l[i]})}(a);t("f341");var e=t("2877"),s=Object(e["a"])(l["default"],f["a"],f["b"],!1,null,null,null);g["default"]=s.exports}},[["84d5","common/runtime","common/vendor"]]]);
});
require('pages/msg/chat/chat.js');
__wxRoute = 'pages/user/coupon/coupon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/coupon/coupon.js';

define('pages/user/coupon/coupon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/coupon/coupon"],{"0972":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{couponValidList:[{id:1,title:"日常用品立减10元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"10",criteria:"满50使用"},{id:2,title:"家用电器立减100元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"100",criteria:"满500使用"},{id:3,title:"全场立减10元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"10",criteria:"无门槛"},{id:4,title:"全场立减50元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"50",criteria:"满1000使用"}],couponinvalidList:[{id:1,title:"日常用品立减10元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"10",criteria:"满50使用"},{id:2,title:"家用电器立减100元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"100",criteria:"满500使用"},{id:3,title:"全场立减10元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"10",criteria:"无门槛"},{id:4,title:"全场立减50元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"50",criteria:"满1000使用"}],headerTop:0,typeClass:"valid",subState:"",theIndex:null,oldIndex:null,isStop:!1}},onPageScroll:function(t){},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onLoad:function(){},methods:{switchType:function(e){var i=this;this.typeClass!=e&&(t.pageScrollTo({scrollTop:0,duration:0}),this.typeClass=e,this.subState=""==this.typeClass?"":"show"+e,setTimeout(function(){i.oldIndex=null,i.theIndex=null,i.subState="valid"==i.typeClass?"":i.subState},200))},touchStart:function(t,e){e.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[e.touches[0].pageX,e.touches[0].pageY])},touchMove:function(t,e){var i=this;if(e.touches.length>1)this.isStop=!0;else{var n=e.touches[0].pageX-this.initXY[0],o=e.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(n)<5||(Math.abs(o)>Math.abs(n)?this.isStop=!0:n<0?(this.theIndex=t,this.isStop=!0):n>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout(function(){i.oldIndex=null},150)))}},touchEnd:function(t,e){this.isStop=!1},deleteCoupon:function(t,e){for(var i=e.length,n=0;n<i;n++)if(t==e[n].id){e.splice(n,1);break}this.oldIndex=null,this.theIndex=null},discard:function(){}}};e.default=i}).call(this,i("6e42")["default"])},"216b":function(t,e,i){"use strict";i.r(e);var n=i("0972"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=o.a},"46db":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},"75d5":function(t,e,i){"use strict";(function(t){i("590e"),i("921b");n(i("66fd"));var e=n(i("d532"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},"830e":function(t,e,i){},d532:function(t,e,i){"use strict";i.r(e);var n=i("46db"),o=i("216b");for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);i("f7f9");var r=i("2877"),u=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},f7f9:function(t,e,i){"use strict";var n=i("830e"),o=i.n(n);o.a}},[["75d5","common/runtime","common/vendor"]]]);
});
require('pages/user/coupon/coupon.js');
__wxRoute = 'pages/user/keep/keep';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/keep/keep.js';

define('pages/user/keep/keep.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/keep/keep"],{"15ab":function(t,e,n){"use strict";n.r(e);var i=n("a7a1"),s=n("75c0");for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);n("effb");var u=n("2877"),a=Object(u["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=a.exports},"516b":function(t,e,n){},"75c0":function(t,e,n){"use strict";n.r(e);var i=n("bf2a"),s=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=s.a},a7a1:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},b706:function(t,e,n){"use strict";(function(t){n("590e"),n("921b");i(n("66fd"));var e=i(n("15ab"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},bf2a:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{goodsList:[{id:1,img:"/static/img/goods/p1.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:2,img:"/static/img/goods/p1.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:3,img:"/static/img/goods/p1.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1}],shopList:[{id:1,name:"冰鲜专卖店",img:"/static/img/shop/1.jpg"},{id:2,name:"果蔬天下",img:"/static/img/shop/2.jpg"},{id:3,name:"办公耗材用品店",img:"/static/img/shop/3.jpg"},{id:4,name:"天天看好书",img:"/static/img/shop/4.jpg"}],headerTop:0,typeClass:"goods",subState:"",theIndex:null,oldIndex:null,isStop:!1}},onPageScroll:function(t){},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onLoad:function(){},methods:{switchType:function(e){var n=this;this.typeClass!=e&&(t.pageScrollTo({scrollTop:0,duration:0}),this.typeClass=e,this.subState=""==this.typeClass?"":"show"+e,setTimeout(function(){n.oldIndex=null,n.theIndex=null,n.subState="goods"==n.typeClass?"":n.subState},200))},touchStart:function(t,e){e.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[e.touches[0].pageX,e.touches[0].pageY])},touchMove:function(t,e){var n=this;if(e.touches.length>1)this.isStop=!0;else{var i=e.touches[0].pageX-this.initXY[0],s=e.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(i)<5||(Math.abs(s)>Math.abs(i)?this.isStop=!0:i<0?(this.theIndex=t,this.isStop=!0):i>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout(function(){n.oldIndex=null},150)))}},touchEnd:function(t,e){this.isStop=!1},deleteCoupon:function(t,e){for(var n=e.length,i=0;i<n;i++)if(t==e[i].id){e.splice(i,1);break}this.oldIndex=null,this.theIndex=null},discard:function(){}}};e.default=n}).call(this,n("6e42")["default"])},effb:function(t,e,n){"use strict";var i=n("516b"),s=n.n(i);s.a}},[["b706","common/runtime","common/vendor"]]]);
});
require('pages/user/keep/keep.js');
__wxRoute = 'pages/user/address/address';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/address/address.js';

define('pages/user/address/address.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/address/address"],{"1ea5":function(e,t,a){"use strict";a.r(t);var d=a("ec19"),s=a("48b0");for(var i in s)"default"!==i&&function(e){a.d(t,e,function(){return s[e]})}(i);a("f3ff");var n=a("2877"),r=Object(n["a"])(s["default"],d["a"],d["b"],!1,null,null,null);t["default"]=r.exports},"48b0":function(e,t,a){"use strict";a.r(t);var d=a("8380"),s=a.n(d);for(var i in d)"default"!==i&&function(e){a.d(t,e,function(){return d[e]})}(i);t["default"]=s.a},8380:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{isSelect:!1,addressList:[{id:1,name:"大黑哥",head:"大",tel:"18816881688",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!0},{id:2,name:"大黑哥",head:"大",tel:"15812341234",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深北小道2222号有名公寓502"},isDefault:!1},{id:3,name:"老大哥",head:"老",tel:"18155467897",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!1},{id:4,name:"王小妹",head:"王",tel:"13425654895",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!1}]}},onShow:function(){var t=this;e.getStorage({key:"delAddress",success:function(a){var d=t.addressList.length;if(a.data.hasOwnProperty("id"))for(var s=0;s<d;s++)if(t.addressList[s].id==a.data.id){t.addressList.splice(s,1);break}e.removeStorage({key:"delAddress"})}}),e.getStorage({key:"saveAddress",success:function(a){var d=t.addressList.length;if(a.data.hasOwnProperty("id")){for(var s=0;s<d;s++)if(t.addressList[s].id==a.data.id){t.addressList.splice(s,1,a.data);break}}else{var i=t.addressList[d-1];i++,a.data.id=i,t.addressList.push(a.data)}e.removeStorage({key:"saveAddress"})}})},onLoad:function(e){"select"==e.type&&(this.isSelect=!0)},methods:{edit:function(t){e.setStorage({key:"address",data:t,success:function(){e.navigateTo({url:"edit/edit?type=edit"})}})},add:function(){e.navigateTo({url:"edit/edit?type=add"})},select:function(t){this.isSelect&&e.setStorage({key:"selectAddress",data:t,success:function(){e.navigateBack()}})}}};t.default=a}).call(this,a("6e42")["default"])},cfdb:function(e,t,a){"use strict";(function(e){a("590e"),a("921b");d(a("66fd"));var t=d(a("1ea5"));function d(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},e221:function(e,t,a){},ec19:function(e,t,a){"use strict";var d=function(){var e=this,t=e.$createElement;e._self._c},s=[];a.d(t,"a",function(){return d}),a.d(t,"b",function(){return s})},f3ff:function(e,t,a){"use strict";var d=a("e221"),s=a.n(d);s.a}},[["cfdb","common/runtime","common/vendor"]]]);
});
require('pages/user/address/address.js');
__wxRoute = 'pages/user/address/edit/edit';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/address/edit/edit.js';

define('pages/user/address/edit/edit.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/address/edit/edit"],{"3b46":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},"4f42":function(e,t,i){"use strict";var n=i("af15"),a=i.n(n);a.a},5534:function(e,t,i){"use strict";i.r(t);var n=i("3b46"),a=i("572a");for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);i("4f42");var o=i("2877"),d=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=d.exports},"572a":function(e,t,i){"use strict";i.r(t);var n=i("6c05"),a=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);t["default"]=a.a},"6c05":function(e,t,i){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return Promise.all([i.e("common/vendor"),i.e("components/mpvue-citypicker/mpvueCityPicker")]).then(i.bind(null,"ad87"))},s={components:{mpvueCityPicker:a},data:function(){return{editType:"edit",id:"",name:"",tel:"",detailed:"",isDefault:!1,cityPickerValue:[0,0,1],themeColor:"#007AFF",region:{label:"请点击选择地址",value:[],cityCode:""}}},methods:{onCancel:function(t){console.log(e(t," at pages\\user\\address\\edit\\edit.vue:81"))},chooseCity:function(){this.$refs.mpvueCityPicker.show()},onConfirm:function(e){this.region=e,this.cityPickerValue=e.value},isDefaultChange:function(e){this.isDefault=e.detail.value},del:function(){var t=this;n.showModal({title:"删除提示",content:"你将删除这个收货地址",success:function(i){i.confirm?n.setStorage({key:"delAddress",data:{id:t.id},success:function(){n.navigateBack()}}):i.cancel&&console.log(e("用户点击取消"," at pages\\user\\address\\edit\\edit.vue:107"))}})},save:function(){var t={name:this.name,head:this.name.substr(0,1),tel:this.tel,address:{region:this.region,detailed:this.detailed},isDefault:this.isDefault};"edit"==this.editType&&(t.id=this.id),t.name?t.tel?t.address.detailed?0!=t.address.region.value.length?(n.showLoading({title:"正在提交"}),setTimeout(function(){n.setStorage({key:"saveAddress",data:t,success:function(){n.hideLoading(),n.navigateBack()}})},300),console.log(e(" at pages\\user\\address\\edit\\edit.vue:149"))):n.showToast({title:"请选择收件地址",icon:"none"}):n.showToast({title:"请输入收件人详细地址",icon:"none"}):n.showToast({title:"请输入收件人电话号码",icon:"none"}):n.showToast({title:"请输入收件人姓名",icon:"none"})}},onLoad:function(e){var t=this;this.editType=e.type,"edit"==e.type&&n.getStorage({key:"address",success:function(e){t.id=e.data.id,t.name=e.data.name,t.tel=e.data.tel,t.detailed=e.data.address.detailed,t.isDefault=e.data.isDefault,t.cityPickerValue=e.data.address.region.value,t.region=e.data.address.region}})},onBackPress:function(){if(this.$refs.mpvueCityPicker.showPicker)return this.$refs.mpvueCityPicker.pickerCancel(),!0},onUnload:function(){this.$refs.mpvueCityPicker.showPicker&&this.$refs.mpvueCityPicker.pickerCancel()}};t.default=s}).call(this,i("0de9")["default"],i("6e42")["default"])},af15:function(e,t,i){},d34d:function(e,t,i){"use strict";(function(e){i("590e"),i("921b");n(i("66fd"));var t=n(i("5534"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])}},[["d34d","common/runtime","common/vendor"]]]);
});
require('pages/user/address/edit/edit.js');
__wxRoute = 'pages/user/deposit/deposit';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/deposit/deposit.js';

define('pages/user/deposit/deposit.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/deposit/deposit"],{"27f2":function(t,n,e){"use strict";(function(t){e("590e"),e("921b");o(e("66fd"));var n=o(e("f838"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"46f5":function(t,n,e){},"61ad":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c;t._isMounted||(t.e0=function(n){t.paytype="alipay"},t.e1=function(n){t.paytype="wxpay"})},u=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u})},"6af7":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{inputAmount:"",amountList:[10,50,100],paytype:"alipay"}},methods:{select:function(t){this.inputAmount=t},doDeposit:function(){var n=this;"NaN"!=parseFloat(this.inputAmount).toString()?this.inputAmount<=0?t.showToast({title:"请输入大于0的金额",icon:"none"}):parseFloat(this.inputAmount).toFixed(2)==parseFloat(this.inputAmount)?(t.showLoading({title:"支付中..."}),setTimeout(function(){t.hideLoading(),t.showToast({title:"支付成功"}),setTimeout(function(){t.redirectTo({url:"../../pay/success/success?amount="+n.inputAmount})},300)},700)):t.showToast({title:"最多只能输入两位小数哦~",icon:"none"}):t.showToast({title:"请输入正确金额",icon:"none"})}},onLoad:function(){}};n.default=e}).call(this,e("6e42")["default"])},9717:function(t,n,e){"use strict";var o=e("46f5"),u=e.n(o);u.a},d151:function(t,n,e){"use strict";e.r(n);var o=e("6af7"),u=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=u.a},f838:function(t,n,e){"use strict";e.r(n);var o=e("61ad"),u=e("d151");for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);e("9717");var a=e("2877"),s=Object(a["a"])(u["default"],o["a"],o["b"],!1,null,null,null);n["default"]=s.exports}},[["27f2","common/runtime","common/vendor"]]]);
});
require('pages/user/deposit/deposit.js');
__wxRoute = 'pages/pay/payment/payment';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pay/payment/payment.js';

define('pages/pay/payment/payment.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pay/payment/payment"],{"0555":function(t,e,n){"use strict";var a=n("c08d"),o=n.n(a);o.a},3340:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{amount:0,orderName:"",paytype:"alipay"}},onLoad:function(e){var n=this;this.amount=parseFloat(e.amount).toFixed(2),t.getStorage({key:"paymentOrder",success:function(e){e.data.length>1?n.orderName="多商品合并支付":n.orderName=e.data[0].name,t.removeStorage({key:"paymentOrder"})}})},methods:{doDeposit:function(){var e=this;t.showLoading({title:"支付中..."}),setTimeout(function(){t.hideLoading(),t.showToast({title:"支付成功"}),setTimeout(function(){t.redirectTo({url:"../../pay/success/success?amount="+e.amount})},300)},700)}}};e.default=n}).call(this,n("6e42")["default"])},"4df5":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.paytype="alipay"},t.e1=function(e){t.paytype="wxpay"})},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},8052:function(t,e,n){"use strict";(function(t){n("590e"),n("921b");a(n("66fd"));var e=a(n("ef60"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c08d:function(t,e,n){},daa3:function(t,e,n){"use strict";n.r(e);var a=n("3340"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a},ef60:function(t,e,n){"use strict";n.r(e);var a=n("4df5"),o=n("daa3");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("0555");var r=n("2877"),i=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports}},[["8052","common/runtime","common/vendor"]]]);
});
require('pages/pay/payment/payment.js');
__wxRoute = 'pages/pay/success/success';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pay/success/success.js';

define('pages/pay/success/success.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pay/success/success"],{"2a18":function(t,n,e){"use strict";e.r(n);var u=e("ab36"),a=e("e486");for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);e("3c79");var o=e("2877"),r=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=r.exports},"3c79":function(t,n,e){"use strict";var u=e("dfed"),a=e.n(u);a.a},"8cc5":function(t,n,e){"use strict";(function(t){e("590e"),e("921b");u(e("66fd"));var n=u(e("2a18"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},ab36:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},dfed:function(t,n,e){},e486:function(t,n,e){"use strict";e.r(n);var u=e("eb5c"),a=e.n(u);for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);n["default"]=a.a},eb5c:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{amount:0}},onLoad:function(t){this.amount=parseFloat(t.amount).toFixed(2)},methods:{toUser:function(){t.switchTab({url:"/pages/tabBar/user/user"})}}};n.default=e}).call(this,e("6e42")["default"])}},[["8cc5","common/runtime","common/vendor"]]]);
});
require('pages/pay/success/success.js');
__wxRoute = 'pages/goods/ratings/ratings';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goods/ratings/ratings.js';

define('pages/goods/ratings/ratings.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/ratings/ratings"],{1621:function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{pid:"",labelList:[{name:"全部",number:25,type:"all"},{name:"好评",number:23,type:"good"},{name:"中评",number:1,type:"secondary"},{name:"差评",number:1,type:"poor"},{name:"有图",number:12,type:"img"},{name:"视频",number:2,type:"video"},{name:"追加",number:2,type:"append"}],labelIndex:0,ratingsList:[{id:3,username:"小黑狗",face:"/static/img/face.jpg",date:"2019-04-21",spec:"规格: XL",grade:"poor",first:{content:"好评，看图",img:["https://ae01.alicdn.com/kf/HTB111soTbvpK1RjSZPiq6zmwXXaB.jpg","https://ae01.alicdn.com/kf/HTB1O2TRTmzqK1RjSZPcq6zTepXa4.jpg"],video:[]}},{id:3,username:"小黑狗",face:"/static/img/face.jpg",date:"2019-04-21",spec:"规格: XL",grade:"secondary",first:{content:"系统默认好评",img:[],video:[]}}],videoDirection:0,showFullscreenBtn:!0,showPlayBtn:!0,isPlayVideo:!0,videoSrc:""}},onLoad:function(e){this.pid=e.pid,this.getmsg()},onReady:function(t){this.videoContext=e.createVideoContext("myVideo")},onPullDownRefresh:function(){setTimeout(function(){e.stopPullDownRefresh()},1e3)},onReachBottom:function(){e.showToast({title:"触发上拉加载"})},methods:{getmsg:function(){var t=this;e.request({url:"http://120.79.19.253:10086/Leftmessage",data:{type:"get",pid:this.pid},success:function(e){if(console.log(n(e.data.status,"fghjklkhgfhjhgfhjkhgfjkhgggggggggggggggggggggg"," at pages\\goods\\ratings\\ratings.vue:184")),0==e.data.status)t.ratingsList.push({id:0,username:"系统",face:"/static/img/face.jpg",date:"00-00-00",spec:"规格: 常规",grade:"secondary",first:{content:"系统默认好评",img:["https://ae01.alicdn.com/kf/HTB111soTbvpK1RjSZPiq6zmwXXaB.jpg","https://ae01.alicdn.com/kf/HTB1O2TRTmzqK1RjSZPcq6zTepXa4.jpg"],video:[]}});else{var i=e.data.data,a=!0,o=!1,s=void 0;try{for(var r,c=i[Symbol.iterator]();!(a=(r=c.next()).done);a=!0){var u=r.value;t.ratingsList.push({id:u.uid,username:u.nickname,face:u.image,date:u.time,spec:"规格: 常规",grade:"secondary",first:{content:u.message,img:[],video:[]}})}}catch(d){o=!0,s=d}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}}}})},loadRatings:function(t){this.labelIndex=t,e.showToast({title:"切换评论列表"})},playVideo:function(e){this.videoSrc=e,this.$nextTick(function(){this.videoContext.requestFullScreen({direction:0})})},stopPlayVideo:function(){this.videoContext.pause()},videoPause:function(){this.videoSrc=""},viderFullscreen:function(e){e.detail.fullScreen?this.videoContext.play():this.stopPlayVideo()},showBigImg:function(t,n){e.previewImage({current:t,urls:n})}}};t.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])},"1f1b":function(e,t,n){"use strict";n.r(t);var i=n("1621"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},4013:function(e,t,n){},"4b6c":function(e,t,n){"use strict";var i=n("4013"),a=n.n(i);a.a},6679:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},7747:function(e,t,n){"use strict";n.r(t);var i=n("6679"),a=n("1f1b");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("4b6c");var s=n("2877"),r=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,null,null);t["default"]=r.exports},"7b91":function(e,t,n){"use strict";(function(e){n("590e"),n("921b");i(n("66fd"));var t=i(n("7747"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["7b91","common/runtime","common/vendor"]]]);
});
require('pages/goods/ratings/ratings.js');
__wxRoute = 'pages/ali/select/select';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ali/select/select.js';

define('pages/ali/select/select.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ali/select/select"],{"0744":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},"0a5a":function(t,e,n){"use strict";n.r(e);var a=n("abba"),u=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=u.a},2252:function(t,e,n){"use strict";(function(t){n("590e"),n("921b");a(n("66fd"));var e=a(n("9258"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},9258:function(t,e,n){"use strict";n.r(e);var a=n("0744"),u=n("0a5a");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);var c=n("2877"),o=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},abba:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}}};e.default=a}},[["2252","common/runtime","common/vendor"]]]);
});
require('pages/ali/select/select.js');
__wxRoute = 'pages/tabBar/ali/ali';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/ali/ali.js';

define('pages/tabBar/ali/ali.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/ali/ali"],{"591d":function(e,n,a){"use strict";var t=a("8dbd"),i=a.n(t);i.a},"5a4d":function(e,n,a){"use strict";a.r(n);var t=a("adb2"),i=a("dde7");for(var o in i)"default"!==o&&function(e){a.d(n,e,function(){return i[e]})}(o);a("591d");var s=a("2877"),c=Object(s["a"])(i["default"],t["a"],t["b"],!1,null,null,null);n["default"]=c.exports},"5c87":function(e,n,a){"use strict";(function(e){a("590e"),a("921b");t(a("66fd"));var n=t(a("5a4d"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("6e42")["createPage"])},"8dbd":function(e,n,a){},a8a4:function(e,n,a){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(a("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,n,a,t,i,o,s){try{var c=e[o](s),u=c.value}catch(l){return void a(l)}c.done?n(u):Promise.resolve(u).then(t,i)}function c(e){return function(){var n=this,a=arguments;return new Promise(function(t,i){var o=e.apply(n,a);function c(e){s(o,t,i,c,u,"next",e)}function u(e){s(o,t,i,c,u,"throw",e)}c(void 0)})}}var u={data:function(){return{codedata:[{code:1,name:"数码产品",englishname:"DIGTAL PRODUCTS",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0.png"},{code:2,name:"运动体育",englishname:"MOTION SPORTS",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_0.png"},{code:3,name:"服装服饰",englishname:"CLOTHING AND APPAREL",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2.png"},{code:4,name:"饰品首饰",englishname:"JEWELRY AND ORNAMENTS",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3.png"},{code:5,name:"家用电器",englishname:"ELECTIC APPLIANCE",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4.png"},{code:6,name:"宠物用品",englishname:"PET SUPPLIES",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5.png"},{code:7,name:"日用百货",englishname:"ARTICLES OF DAILY USE",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6.png"},{code:8,name:"左图右史",englishname:"BOOL COMPLETE",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7.png"},{code:9,name:"美容护肤",englishname:"COSMETIC SKIN CARE",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8.png"},{code:10,name:"健康养生",englishname:"HEALTH PRESERVATION",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9.png"}],myheightSvg:{height:""},headerTop:null,statusTop:null,headerPosition:"fixed",showHeader:!0,oosArr:[],upImgOos:{aliConfig:{AccessKeySecret:"CbVR0tmpKXqAIEXxavJDqad3lcIIez",OSSAccessKeyId:"LTAIlbkoZl60gNWT",oosDirectory:"userimage",url:"https://simplett-img.oss-cn-beijing.aliyuncs.com/"},notli:!1,count:4,upBgColor:"#E8A400",upIconColor:"#eee",upSvgIconName:"icon-certificate"}}},onLaunch:function(){this.getWidth(),console.log(e("初始化的生命周期"," at pages\\tabBar\\ali\\ali.vue:124"))},onLoad:function(){this.getWidth(),console.log(e("onload"," at pages\\tabBar\\ali\\ali.vue:128"))},onShow:function(){this.getWidth(),console.log(e("Onshow"," at pages\\tabBar\\ali\\ali.vue:132"))},computed:{getmyheight:function(){var e=t.getSystemInfoSync().windowWidth,n=.22*e+"px";return{height:n}}},methods:{tocodelist:function(n){console.log(e("点击"," at pages\\tabBar\\ali\\ali.vue:144")),t.navigateTo({url:"/pages/ali/codelist/codelist?codeid="+n}),t.setStorage({key:"codeid",data:n,success:function(){console.log(e("成功选择"," at pages\\tabBar\\ali\\ali.vue:152"))}})},getWidth:function(){var n=t.getSystemInfoSync().windowWidth;console.log(e(n,"mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"," at pages\\tabBar\\ali\\ali.vue:158")),this.myheightSvg.height=.22*n+"px",console.log(e(this.myheightSvg," at pages\\tabBar\\ali\\ali.vue:160"))},onPageScroll:function(e){this.headerPosition=e.scrollTop>=0?"fixed":"absolute",this.headerTop=e.scrollTop>=0?null:0,this.statusTop=e.scrollTop>=0?null:-this.statusHeight+"px"},uImageTap:function(){this.$refs.uImage.uploadimage(this.upImgOos)},delImgInfo:function(){var n=c(i.default.mark(function n(a){return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:console.log(e("你删除的图片地址为:",a,this.oosArr.splice(a.index,1)," at pages\\tabBar\\ali\\ali.vue:173"));case 1:case"end":return n.stop()}},n,this)}));function a(e){return n.apply(this,arguments)}return a}(),upOosData:function(){var n=c(i.default.mark(function n(a){var o,s,c;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:o=[],s=0,c=a.length;case 2:if(!(s<c)){n.next=15;break}if(n.prev=3,""==a[s].path_server){n.next=7;break}return n.next=7,o.push(a[s].path_server.split(","));case 7:n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](3),console.log(e("上传失败..."," at pages\\tabBar\\ali\\ali.vue:185"));case 12:s++,n.next=2;break;case 15:this.oosArr=o,o.length==this.upImgOos.count&&t.showToast({title:"上传成功",icon:"none"});case 17:case"end":return n.stop()}},n,this,[[3,9]])}));function a(e){return n.apply(this,arguments)}return a}(),getUpImgInfoOos:function(){console.log(e("阿里云转成一维数组:",this.oosArr.join().split(",")," at pages\\tabBar\\ali\\ali.vue:201"))}}};n.default=u}).call(this,a("0de9")["default"],a("6e42")["default"])},adb2:function(e,n,a){"use strict";var t=function(){var e=this,n=e.$createElement;e._self._c},i=[];a.d(n,"a",function(){return t}),a.d(n,"b",function(){return i})},dde7:function(e,n,a){"use strict";a.r(n);var t=a("a8a4"),i=a.n(t);for(var o in t)"default"!==o&&function(e){a.d(n,e,function(){return t[e]})}(o);n["default"]=i.a}},[["5c87","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/ali/ali.js');
__wxRoute = 'pages/ali/codelist/codelist';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ali/codelist/codelist.js';

define('pages/ali/codelist/codelist.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ali/codelist/codelist"],{"05e7":function(n,i,s){"use strict";s.r(i);var c=s("fa36"),a=s.n(c);for(var e in c)"default"!==e&&function(n){s.d(i,n,function(){return c[n]})}(e);i["default"]=a.a},"2d6f":function(n,i,s){"use strict";var c=s("5ad2"),a=s.n(c);a.a},"32f0":function(n,i,s){"use strict";(function(n){s("590e"),s("921b");c(s("66fd"));var i=c(s("9388"));function c(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,s("6e42")["createPage"])},"5ad2":function(n,i,s){},9388:function(n,i,s){"use strict";s.r(i);var c=s("e4b5"),a=s("05e7");for(var e in a)"default"!==e&&function(n){s.d(i,n,function(){return a[n]})}(e);s("2d6f");var o=s("2877"),t=Object(o["a"])(a["default"],c["a"],c["b"],!1,null,null,null);i["default"]=t.exports},e4b5:function(n,i,s){"use strict";var c=function(){var n=this,i=n.$createElement;n._self._c},a=[];s.d(i,"a",function(){return c}),s.d(i,"b",function(){return a})},fa36:function(n,i,s){"use strict";(function(n,c){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e(s("a34a"));function e(n){return n&&n.__esModule?n:{default:n}}function o(n,i,s,c,a,e,o){try{var t=n[e](o),u=t.value}catch(g){return void s(g)}t.done?i(u):Promise.resolve(u).then(c,a)}function t(n){return function(){var i=this,s=arguments;return new Promise(function(c,a){var e=n.apply(i,s);function t(n){o(e,c,a,t,u,"next",n)}function u(n){o(e,c,a,t,u,"throw",n)}t(void 0)})}}var u={data:function(){return{price:"",p_description:"",fontcount:"0",productlist:[{codelist:[101,102,103,104,105,106],name:["炫酷电脑","手机一族","相机拍摄","智能穿戴","电脑周边","网络设备"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/0_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/0_8.png"],divstyle:"linear-gradient(45deg, #c4e4ff, #91ccff)"},{codelist:[201,202,203,204,205,206],name:["运动器材","户外运动","健身塑形","球类包陪","小众运动","运动鞋"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/1_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/1_8.png"],divstyle:"linear-gradient(45deg, #f4c9ff, #ff9eee)"},{codelist:[301,302,303,304,305,306],name:["运动风格","休闲风格","商务风格","百搭风格","街头风格","简约风格"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/2_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/2_8.png"],divstyle:"#ffd0dc"},{codelist:[401,402,403,404,405,406],name:["新潮搭配","服饰配饰","首饰手表","珠宝一类","眼睛一族","各种包包"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/3_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/3_8.png"],divstyle:"#ffd0dc"},{codelist:[501,502,503,504,505,506],name:["厨卫电器","小家电","环境电器","大家电","温控电气","其他电器"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/4_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/4_8.png"],divstyle:"#ffd0dc"},{codelist:[601,602,603,604,605,606],name:["宠物玩具","宠物零食","喂食器","宠物","宠物药品","宠物之家"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/5_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/5_8.png"],divstyle:"#ffd0dc"},{codelist:[701,702,703,704,705,706],name:["文具教具","餐饮用具","厨房用品","床上用品","家居日用","其他日用"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/6_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/6_8.png"],divstyle:"#ffe0cd"},{codelist:[801,802,803,804,805,806],name:["国际名著","工具用书","课本教材","科普类书","小说大全","100本必读"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/7_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/7_8.png"],divstyle:"#ffe0cd"},{codelist:[901,902,903,904,905,906],name:["化妆彩妆","护理护肤","口红卖场","美容美颜","香水一类","滋生面膜"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/8_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/8_8.png"],divstyle:"#ffe0cd"},{codelist:[1001,1002,1003,1004,1005,1006],name:["计生用品","外用理疗","传统滋补","保健品","养生药品","养生食物"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/9_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/9_8.png"],divstyle:"#ffe0cd"}],myheightSvg:{height:""},headerTop:null,statusTop:null,headerPosition:"fixed",showHeader:!0,oosArr:[],upImgOos:{aliConfig:{AccessKeySecret:"CbVR0tmpKXqAIEXxavJDqad3lcIIez",OSSAccessKeyId:"LTAIlbkoZl60gNWT",oosDirectory:"userimage",url:"https://simplett-img.oss-cn-beijing.aliyuncs.com/"},notli:!1,count:8,upBgColor:"#E8A400",upIconColor:"#eee",upSvgIconName:"icon-certificate"}}},onLoad:function(i){console.log(n(i.codeid," at pages\\ali\\codelist\\codelist.vue:329"))},onShow:function(){console.log(n("Onshow"," at pages\\ali\\codelist\\codelist.vue:333"))},watch:{p_description:function(){var n=this.p_description.length;this.fontcount=n}},methods:{onPageScroll:function(n){this.headerPosition=n.scrollTop>=0?"fixed":"absolute",this.headerTop=n.scrollTop>=0?null:0,this.statusTop=n.scrollTop>=0?null:-this.statusHeight+"px"},uImageTap:function(){this.$refs.uImage.uploadimage(this.upImgOos)},delImgInfo:function(){var i=t(a.default.mark(function i(s){return a.default.wrap(function(i){while(1)switch(i.prev=i.next){case 0:console.log(n("你删除的图片地址为:",s,this.oosArr.splice(s.index,1)," at pages\\ali\\codelist\\codelist.vue:353"));case 1:case"end":return i.stop()}},i,this)}));function s(n){return i.apply(this,arguments)}return s}(),upOosData:function(){var i=t(a.default.mark(function i(s){var e,o,t;return a.default.wrap(function(i){while(1)switch(i.prev=i.next){case 0:e=[],o=0,t=s.length;case 2:if(!(o<t)){i.next=15;break}if(i.prev=3,""==s[o].path_server){i.next=7;break}return i.next=7,e.push(s[o].path_server.split(","));case 7:i.next=12;break;case 9:i.prev=9,i.t0=i["catch"](3),console.log(n("上传失败..."," at pages\\ali\\codelist\\codelist.vue:365"));case 12:o++,i.next=2;break;case 15:this.oosArr=e,e.length==this.upImgOos.count&&c.showToast({title:"上传成功",icon:"none"});case 17:case"end":return i.stop()}},i,this,[[3,9]])}));function s(n){return i.apply(this,arguments)}return s}(),getUpImgInfoOos:function(){console.log(n("阿里云转成一维数组:",this.oosArr.join().split(",")," at pages\\ali\\codelist\\codelist.vue:381"))}}};i.default=u}).call(this,s("0de9")["default"],s("6e42")["default"])}},[["32f0","common/runtime","common/vendor"]]]);
});
require('pages/ali/codelist/codelist.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

