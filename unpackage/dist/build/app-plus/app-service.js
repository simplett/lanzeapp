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
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'w-picker-cnt']],[[2,'?:'],[[7],[3,'showPicker']],[1,'show'],[1,'']]]])
Z([[2,'=='],[[7],[3,'mode']],[1,'half']])
Z([[2,'=='],[[7],[3,'mode']],[1,'date']])
Z([[2,'=='],[[7],[3,'mode']],[1,'yearMonth']])
Z([[2,'=='],[[7],[3,'mode']],[1,'dateTime']])
Z([[2,'=='],[[7],[3,'mode']],[1,'range']])
Z([[2,'=='],[[7],[3,'mode']],[1,'time']])
Z([[2,'=='],[[7],[3,'mode']],[1,'region']])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'bindChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'itemHeight']])
Z([[7],[3,'pickVal']])
Z([[2,'!'],[[7],[3,'hideArea']]])
Z([[2,'=='],[[7],[3,'mode']],[1,'selector']])
Z([[2,'=='],[[7],[3,'mode']],[1,'limit']])
Z([[2,'=='],[[7],[3,'mode']],[1,'limitHour']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^onUpImg']],[[4],[[5],[[4],[[5],[1,'upOosData']]]]]]]],[[4],[[5],[[5],[1,'^onImgDel']],[[4],[[5],[[4],[[5],[1,'delImgInfo']]]]]]]]])
Z([3,'uImage'])
Z([[7],[3,'upImgOos']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([3,'data-v-deee141e vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^onUpImg']],[[4],[[5],[[4],[[5],[1,'upOosData']]]]]]]],[[4],[[5],[[5],[1,'^onImgDel']],[[4],[[5],[[4],[[5],[1,'delImgInfo']]]]]]]]])
Z([3,'uImage'])
Z([[7],[3,'upImgOos']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-5b902270'])
Z([[7],[3,'showHeader']])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'target'])
Z([[7],[3,'orderbyList']])
Z(z[0])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'target data-v-bfa49fdc']],[[2,'?:'],[[6],[[7],[3,'target']],[3,'selected']],[1,'on'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'select']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[6],[[7],[3,'target']],[3,'orderbyicon']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShowOauth']])
Z([3,'list'])
Z([[6],[[7],[3,'showProvider']],[3,'weixin']])
Z([[6],[[7],[3,'showProvider']],[3,'qq']])
Z([[6],[[7],[3,'showProvider']],[3,'sinaweibo']])
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
Z([3,'__e'])
Z([3,'content'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'hideEmoji']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[0])
Z([3,'msg-list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[1,'init']]]]]]]]])
Z([1,50])
Z([[7],[3,'scrollTop']])
Z([[7],[3,'scrollAnimation']])
Z([3,'true'])
Z([3,'index'])
Z([3,'row'])
Z([[6],[[7],[3,'messgedata']],[1,1]])
Z(z[10])
Z(z[11])
Z([[2,'=='],[[6],[[7],[3,'row']],[1,'user']],[1,'me']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'user']],[1,'you']])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'chat'])
Z([[7],[3,'chatList']])
Z(z[0])
Z([3,'__e'])
Z([3,'row'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toChat']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'chatList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[2,'>'],[[6],[[7],[3,'chat']],[3,'tisNum']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
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
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'lanzepadding'])
Z([[7],[3,'showHeader']])
Z(z[1])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showHeader']])
Z(z[0])
Z(z[0])
Z([[2,'=='],[[6],[[7],[3,'goodsList']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'selectedList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showHeader']])
Z(z[0])
Z(z[0])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showHeader']])
Z(z[0])
Z(z[0])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'row'])
Z([[7],[3,'addressList']])
Z(z[0])
Z([3,'__e'])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'select']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'addressList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'row']],[3,'isDefault']])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'list'])
Z([[2,'=='],[[6],[[7],[3,'couponValidList']],[3,'length']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'couponinvalidList']],[3,'length']],[1,0]])
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
Z([[2,'=='],[[6],[[7],[3,'goodsList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'ifShow']])
Z([[7],[3,'background']])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'qrcode1'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^result']],[[4],[[5],[[4],[[5],[1,'qrR']]]]]]]]])
Z([3,'qrcode'])
Z([[7],[3,'foreground']])
Z([[7],[3,'icon']])
Z([[7],[3,'iconsize']])
Z([[7],[3,'loadMake']])
Z([[7],[3,'lv']])
Z([[7],[3,'onval']])
Z([[7],[3,'pdground']])
Z([[7],[3,'size']])
Z([[7],[3,'unit']])
Z([1,true])
Z([[7],[3,'val']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
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
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'completed']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'refunds']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'cancelled']])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/mpvue-citypicker/mpvueCityPicker.wxml','./components/sunui-upimg/sunui-upimg-alioos.wxml','./components/tki-qrcode/tki-qrcode.wxml','./components/w-picker/w-picker.wxml','./pages/ali/ali.wxml','./pages/ali/codelist/codelist.wxml','./pages/ali/select/select.wxml','./pages/goods/goods-list/goods-list.wxml','./pages/goods/goods.wxml','./pages/goods/ratings/ratings.wxml','./pages/index/guide.wxml','./pages/index/index.wxml','./pages/login/login.wxml','./pages/login/register.wxml','./pages/login/resetpasswd.wxml','./pages/msg/chat/chat.wxml','./pages/msg/msg.wxml','./pages/order/confirmation.wxml','./pages/pay/payment/payment.wxml','./pages/pay/success/success.wxml','./pages/tabBar/ali/ali.wxml','./pages/tabBar/cart/cart.wxml','./pages/tabBar/category/category.wxml','./pages/tabBar/home/home.wxml','./pages/tabBar/user/user.wxml','./pages/user/address/address.wxml','./pages/user/address/edit/edit.wxml','./pages/user/coupon/coupon.wxml','./pages/user/deposit/deposit.wxml','./pages/user/keep/keep.wxml','./pages/user/myQR/myQR.wxml','./pages/user/order_list/order_list.wxml','./pages/user/setting/revise/Hphoto.wxml','./pages/user/setting/revise/pay/pay.wxml','./pages/user/setting/revise/rename.wxml','./pages/user/setting/revise/signature/signature.wxml','./pages/user/setting/setting.wxml'];d_[x[0]]={}
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
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var fE=_n('view')
_rz(z,fE,'class',0,e,s,gg)
var cF=_v()
_(fE,cF)
if(_oz(z,1,e,s,gg)){cF.wxVkey=1
}
var hG=_v()
_(fE,hG)
if(_oz(z,2,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(fE,oH)
if(_oz(z,3,e,s,gg)){oH.wxVkey=1
}
var cI=_v()
_(fE,cI)
if(_oz(z,4,e,s,gg)){cI.wxVkey=1
}
var oJ=_v()
_(fE,oJ)
if(_oz(z,5,e,s,gg)){oJ.wxVkey=1
}
var lK=_v()
_(fE,lK)
if(_oz(z,6,e,s,gg)){lK.wxVkey=1
}
var aL=_v()
_(fE,aL)
if(_oz(z,7,e,s,gg)){aL.wxVkey=1
var oP=_mz(z,'picker-view',['bindchange',8,'data-event-opts',1,'indicatorStyle',2,'value',3],[],e,s,gg)
var xQ=_v()
_(oP,xQ)
if(_oz(z,12,e,s,gg)){xQ.wxVkey=1
}
xQ.wxXCkey=1
_(aL,oP)
}
var tM=_v()
_(fE,tM)
if(_oz(z,13,e,s,gg)){tM.wxVkey=1
}
var eN=_v()
_(fE,eN)
if(_oz(z,14,e,s,gg)){eN.wxVkey=1
}
var bO=_v()
_(fE,bO)
if(_oz(z,15,e,s,gg)){bO.wxVkey=1
}
cF.wxXCkey=1
hG.wxXCkey=1
oH.wxXCkey=1
cI.wxXCkey=1
oJ.wxXCkey=1
lK.wxXCkey=1
aL.wxXCkey=1
tM.wxXCkey=1
eN.wxXCkey=1
bO.wxXCkey=1
_(r,fE)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var fS=_mz(z,'sunui-upoos',['bind:__l',0,'bind:onImgDel',1,'bind:onUpImg',1,'class',2,'data-event-opts',3,'data-ref',4,'upImgConfig',5,'vueId',6],[],e,s,gg)
_(r,fS)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var hU=_mz(z,'sunui-upoos',['bind:__l',0,'bind:onImgDel',1,'bind:onUpImg',1,'class',2,'data-event-opts',3,'data-ref',4,'upImgConfig',5,'vueId',6],[],e,s,gg)
_(r,hU)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var cW=_n('view')
_rz(z,cW,'class',0,e,s,gg)
var oX=_v()
_(cW,oX)
if(_oz(z,1,e,s,gg)){oX.wxVkey=1
}
var lY=_v()
_(cW,lY)
if(_oz(z,2,e,s,gg)){lY.wxVkey=1
}
oX.wxXCkey=1
lY.wxXCkey=1
_(r,cW)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var t1=_v()
_(r,t1)
var e2=function(o4,b3,x5,gg){
var f7=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],o4,b3,gg)
var c8=_v()
_(f7,c8)
if(_oz(z,7,o4,b3,gg)){c8.wxVkey=1
}
c8.wxXCkey=1
_(x5,f7)
return x5
}
t1.wxXCkey=2
_2z(z,2,e2,e,s,gg,t1,'target','index','index')
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var o0=_n('view')
var cAB=_n('view')
_rz(z,cAB,'class',0,e,s,gg)
var oBB=_v()
_(cAB,oBB)
if(_oz(z,1,e,s,gg)){oBB.wxVkey=1
}
var lCB=_v()
_(cAB,lCB)
if(_oz(z,2,e,s,gg)){lCB.wxVkey=1
}
oBB.wxXCkey=1
lCB.wxXCkey=1
_(o0,cAB)
var aDB=_mz(z,'view',['bindtap',3,'catchtouchmove',1,'class',2,'data-event-opts',3],[],e,s,gg)
var tEB=_mz(z,'view',['catchtap',7,'class',1,'data-event-opts',2],[],e,s,gg)
var eFB=_v()
_(tEB,eFB)
if(_oz(z,10,e,s,gg)){eFB.wxVkey=1
}
eFB.wxXCkey=1
_(aDB,tEB)
_(o0,aDB)
_(r,o0)
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
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var fKB=_v()
_(r,fKB)
if(_oz(z,0,e,s,gg)){fKB.wxVkey=1
var cLB=_n('view')
_rz(z,cLB,'class',1,e,s,gg)
var hMB=_v()
_(cLB,hMB)
if(_oz(z,2,e,s,gg)){hMB.wxVkey=1
}
var oNB=_v()
_(cLB,oNB)
if(_oz(z,3,e,s,gg)){oNB.wxVkey=1
}
var cOB=_v()
_(cLB,cOB)
if(_oz(z,4,e,s,gg)){cOB.wxVkey=1
}
hMB.wxXCkey=1
oNB.wxXCkey=1
cOB.wxXCkey=1
_(fKB,cLB)
}
fKB.wxXCkey=1
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
var tSB=_mz(z,'view',['bindtouchstart',0,'class',1,'data-event-opts',1],[],e,s,gg)
var eTB=_mz(z,'scroll-view',['bindscrolltolower',3,'class',1,'data-event-opts',2,'lowerThreshold',3,'scrollTop',4,'scrollWithAnimation',5,'scrollY',6],[],e,s,gg)
var bUB=_v()
_(eTB,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_n('view')
_rz(z,h1B,'class',14,oXB,xWB,gg)
var o2B=_v()
_(h1B,o2B)
if(_oz(z,15,oXB,xWB,gg)){o2B.wxVkey=1
}
var c3B=_v()
_(h1B,c3B)
if(_oz(z,16,oXB,xWB,gg)){c3B.wxVkey=1
}
o2B.wxXCkey=1
c3B.wxXCkey=1
_(fYB,h1B)
return fYB
}
bUB.wxXCkey=2
_2z(z,12,oVB,e,s,gg,bUB,'row','index','index')
_(tSB,eTB)
_(r,tSB)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var l5B=_v()
_(r,l5B)
var a6B=function(e8B,t7B,b9B,gg){
var xAC=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],e8B,t7B,gg)
var oBC=_v()
_(xAC,oBC)
if(_oz(z,7,e8B,t7B,gg)){oBC.wxVkey=1
}
oBC.wxXCkey=1
_(b9B,xAC)
return b9B
}
l5B.wxXCkey=2
_2z(z,2,a6B,e,s,gg,l5B,'chat','index','index')
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
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
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var cGC=_n('view')
_rz(z,cGC,'class',0,e,s,gg)
var oHC=_v()
_(cGC,oHC)
if(_oz(z,1,e,s,gg)){oHC.wxVkey=1
}
var lIC=_v()
_(cGC,lIC)
if(_oz(z,2,e,s,gg)){lIC.wxVkey=1
}
var aJC=_v()
_(cGC,aJC)
if(_oz(z,3,e,s,gg)){aJC.wxVkey=1
}
oHC.wxXCkey=1
lIC.wxXCkey=1
aJC.wxXCkey=1
_(r,cGC)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var eLC=_n('view')
var bMC=_v()
_(eLC,bMC)
if(_oz(z,0,e,s,gg)){bMC.wxVkey=1
}
var oNC=_v()
_(eLC,oNC)
if(_oz(z,1,e,s,gg)){oNC.wxVkey=1
}
var xOC=_v()
_(eLC,xOC)
if(_oz(z,2,e,s,gg)){xOC.wxVkey=1
}
var oPC=_v()
_(eLC,oPC)
if(_oz(z,3,e,s,gg)){oPC.wxVkey=1
}
var fQC=_v()
_(eLC,fQC)
if(_oz(z,4,e,s,gg)){fQC.wxVkey=1
}
bMC.wxXCkey=1
oNC.wxXCkey=1
xOC.wxXCkey=1
oPC.wxXCkey=1
fQC.wxXCkey=1
_(r,eLC)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var oTC=_n('view')
var cUC=_v()
_(oTC,cUC)
if(_oz(z,0,e,s,gg)){cUC.wxVkey=1
}
var oVC=_v()
_(oTC,oVC)
if(_oz(z,1,e,s,gg)){oVC.wxVkey=1
}
var lWC=_v()
_(oTC,lWC)
if(_oz(z,2,e,s,gg)){lWC.wxVkey=1
}
cUC.wxXCkey=1
oVC.wxXCkey=1
lWC.wxXCkey=1
_(r,oTC)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var tYC=_n('view')
var eZC=_v()
_(tYC,eZC)
if(_oz(z,0,e,s,gg)){eZC.wxVkey=1
}
var b1C=_v()
_(tYC,b1C)
if(_oz(z,1,e,s,gg)){b1C.wxVkey=1
}
var o2C=_v()
_(tYC,o2C)
if(_oz(z,2,e,s,gg)){o2C.wxVkey=1
}
eZC.wxXCkey=1
b1C.wxXCkey=1
o2C.wxXCkey=1
_(r,tYC)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var o4C=_v()
_(r,o4C)
var f5C=function(h7C,c6C,o8C,gg){
var o0C=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],h7C,c6C,gg)
var lAD=_v()
_(o0C,lAD)
if(_oz(z,7,h7C,c6C,gg)){lAD.wxVkey=1
}
lAD.wxXCkey=1
_(o8C,o0C)
return o8C
}
o4C.wxXCkey=2
_2z(z,2,f5C,e,s,gg,o4C,'row','index','index')
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var tCD=_n('view')
var eDD=_v()
_(tCD,eDD)
if(_oz(z,0,e,s,gg)){eDD.wxVkey=1
}
var bED=_mz(z,'mpvue-city-picker',['bind:__l',1,'bind:onCancel',1,'bind:onConfirm',2,'class',3,'data-event-opts',4,'data-ref',5,'pickerValueDefault',6,'themeColor',7,'vueId',8],[],e,s,gg)
_(tCD,bED)
eDD.wxXCkey=1
_(r,tCD)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var xGD=_n('view')
_rz(z,xGD,'class',0,e,s,gg)
var oHD=_v()
_(xGD,oHD)
if(_oz(z,1,e,s,gg)){oHD.wxVkey=1
}
var fID=_v()
_(xGD,fID)
if(_oz(z,2,e,s,gg)){fID.wxVkey=1
}
oHD.wxXCkey=1
fID.wxXCkey=1
_(r,xGD)
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
var oLD=_v()
_(r,oLD)
if(_oz(z,0,e,s,gg)){oLD.wxVkey=1
}
oLD.wxXCkey=1
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var oND=_v()
_(r,oND)
if(_oz(z,0,e,s,gg)){oND.wxVkey=1
var lOD=_mz(z,'tki-qrcode',['background',1,'bind:__l',1,'bind:result',2,'cid',3,'class',4,'data-event-opts',5,'data-ref',6,'foreground',7,'icon',8,'iconSize',9,'loadMake',10,'lv',11,'onval',12,'pdground',13,'size',14,'unit',15,'usingComponents',16,'val',17,'vueId',18],[],e,s,gg)
_(oND,lOD)
}
oND.wxXCkey=1
oND.wxXCkey=3
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var tQD=_n('view')
_rz(z,tQD,'class',0,e,s,gg)
var eRD=_v()
_(tQD,eRD)
if(_oz(z,1,e,s,gg)){eRD.wxVkey=1
}
var bSD=_v()
_(tQD,bSD)
var oTD=function(oVD,xUD,fWD,gg){
var hYD=_n('view')
_rz(z,hYD,'class',6,oVD,xUD,gg)
var oZD=_v()
_(hYD,oZD)
if(_oz(z,7,oVD,xUD,gg)){oZD.wxVkey=1
}
var c1D=_v()
_(hYD,c1D)
if(_oz(z,8,oVD,xUD,gg)){c1D.wxVkey=1
}
var o2D=_v()
_(hYD,o2D)
if(_oz(z,9,oVD,xUD,gg)){o2D.wxVkey=1
}
var l3D=_v()
_(hYD,l3D)
if(_oz(z,10,oVD,xUD,gg)){l3D.wxVkey=1
}
var a4D=_v()
_(hYD,a4D)
if(_oz(z,11,oVD,xUD,gg)){a4D.wxVkey=1
}
oZD.wxXCkey=1
c1D.wxXCkey=1
o2D.wxXCkey=1
l3D.wxXCkey=1
a4D.wxXCkey=1
_(fWD,hYD)
return fWD
}
bSD.wxXCkey=2
_2z(z,4,oTD,e,s,gg,bSD,'row','index','index')
eRD.wxXCkey=1
_(r,tQD)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
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



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/index/guide","pages/tabBar/home/home","pages/tabBar/category/category","pages/ali/ali","pages/tabBar/cart/cart","pages/tabBar/user/user","pages/goods/goods-list/goods-list","pages/goods/goods","pages/login/login","pages/login/register","pages/login/resetpasswd","pages/order/confirmation","pages/user/order_list/order_list","pages/user/setting/revise/Hphoto","pages/user/setting/revise/rename","pages/user/myQR/myQR","pages/user/setting/setting","pages/user/setting/revise/Hphoto","pages/user/setting/revise/rename","pages/user/myQR/myQR","pages/msg/msg","pages/msg/chat/chat","pages/user/coupon/coupon","pages/user/keep/keep","pages/user/address/address","pages/user/address/edit/edit","pages/user/deposit/deposit","pages/pay/payment/payment","pages/pay/success/success","pages/goods/ratings/ratings","pages/ali/select/select","pages/tabBar/ali/ali","pages/ali/codelist/codelist","pages/tabBar/ali/ali","pages/ali/codelist/codelist","pages/user/setting/revise/signature/signature","pages/user/setting/revise/pay/pay"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff"},"tabBar":{"color":"#333333","selectedColor":"#f06c7a","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/tabBar/home/home","iconPath":"static/img/tabBar/1-1.png","selectedIconPath":"static/img/tabBar/1.png","text":"首页"},{"pagePath":"pages/tabBar/category/category","iconPath":"static/img/tabBar/2-2.png","selectedIconPath":"static/img/tabBar/2.png","text":"分类"},{"pagePath":"pages/tabBar/ali/ali","iconPath":"static/img/tabBar/3-3.png","selectedIconPath":"static/img/tabBar/3.png","text":"发布"},{"pagePath":"pages/tabBar/cart/cart","iconPath":"static/img/tabBar/4-4.png","selectedIconPath":"static/img/tabBar/4.png","text":"购物车"},{"pagePath":"pages/tabBar/user/user","iconPath":"static/img/tabBar/5-5.png","selectedIconPath":"static/img/tabBar/5.png","text":"我的"}]},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"蓝沢易购","compilerVersion":"2.3.3","usingComponents":{"sunui-upoos":"/components/sunui-upimg/sunui-upimg-alioos"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/mpvue-citypicker/mpvueCityPicker.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mpvue-citypicker/mpvueCityPicker.wxml']=$gwx('./components/mpvue-citypicker/mpvueCityPicker.wxml');

__wxAppCode__['components/sunui-upimg/sunui-upimg-alioos.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/sunui-upimg/sunui-upimg-alioos.wxml']=$gwx('./components/sunui-upimg/sunui-upimg-alioos.wxml');

__wxAppCode__['components/tki-qrcode/tki-qrcode.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/tki-qrcode/tki-qrcode.wxml']=$gwx('./components/tki-qrcode/tki-qrcode.wxml');

__wxAppCode__['components/w-picker/w-picker.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/w-picker/w-picker.wxml']=$gwx('./components/w-picker/w-picker.wxml');

__wxAppCode__['pages/ali/ali.json']={"enablePullDownRefresh":true,"navigationBarTextStyle":"white","titleNView":false,"bounce":"none","softinputNavBar":"none","usingComponents":{"sunui-upoos":"/components/sunui-upimg/sunui-upimg-alioos"}};
__wxAppCode__['pages/ali/ali.wxml']=$gwx('./pages/ali/ali.wxml');

__wxAppCode__['pages/ali/codelist/codelist.json']={"enablePullDownRefresh":true,"backgroundTextStyle":"light","navigationBarBackgroundColor":"#f06c7a","backgroundColorTop":"#f06c7a","navigationBarTextStyle":"white","titleNView":true,"usingComponents":{"sunui-upoos":"/components/sunui-upimg/sunui-upimg-alioos"}};
__wxAppCode__['pages/ali/codelist/codelist.wxml']=$gwx('./pages/ali/codelist/codelist.wxml');

__wxAppCode__['pages/ali/select/select.json']={"navigationBarTitleText":"发布商品","enablePullDownRefresh":false,"bounce":"none","usingComponents":{"w-picker":"/components/w-picker/w-picker"}};
__wxAppCode__['pages/ali/select/select.wxml']=$gwx('./pages/ali/select/select.wxml');

__wxAppCode__['pages/goods/goods-list/goods-list.json']={"navigationBarTitleText":"","enablePullDownRefresh":true,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/goods/goods-list/goods-list.wxml']=$gwx('./pages/goods/goods-list/goods-list.wxml');

__wxAppCode__['pages/goods/goods.json']={"navigationBarTitleText":"","navigationBarBackgroundColor":"#f1f1f1","onReachBottomDistance":50,"titleNView":false,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/goods/goods.wxml']=$gwx('./pages/goods/goods.wxml');

__wxAppCode__['pages/goods/ratings/ratings.json']={"navigationBarTitleText":"商品评论","enablePullDownRefresh":true,"onReachBottomDistance":50,"backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{}};
__wxAppCode__['pages/goods/ratings/ratings.wxml']=$gwx('./pages/goods/ratings/ratings.wxml');

__wxAppCode__['pages/index/guide.json']={"navigationBarTitleText":"","titleNView":false,"usingComponents":{}};
__wxAppCode__['pages/index/guide.wxml']=$gwx('./pages/index/guide.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"启动页","titleNView":false,"usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

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

__wxAppCode__['pages/tabBar/ali/ali.json']={"enablePullDownRefresh":true,"navigationBarTextStyle":"black","titleNView":false,"bounce":"none","softinputNavBar":"none","subNVues":[{"id":"aliTitleNvue","path":"pages/tabBar/ali/subNvue/aliTitleNvue","type":"navigationBar"}],"usingComponents":{}};
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

__wxAppCode__['pages/user/myQR/myQR.json']={"navigationBarTitleText":"我的二维码","bounce":"none","usingComponents":{"tki-qrcode":"/components/tki-qrcode/tki-qrcode"}};
__wxAppCode__['pages/user/myQR/myQR.wxml']=$gwx('./pages/user/myQR/myQR.wxml');

__wxAppCode__['pages/user/order_list/order_list.json']={"navigationBarTitleText":"我的订单","navigationBarBackgroundColor":"#f8f8f8","backgroundColorTop":"#f3f3f3","backgroundColorBottom":"#ffffff","usingComponents":{}};
__wxAppCode__['pages/user/order_list/order_list.wxml']=$gwx('./pages/user/order_list/order_list.wxml');

__wxAppCode__['pages/user/setting/revise/Hphoto.json']={"navigationBarBackgroundColor":"#f8f8f8","navigationBarTitleText":"我的头像","backgroundColorTop":"#ffffff","backgroundColorBottom":"#f3f3f3","usingComponents":{}};
__wxAppCode__['pages/user/setting/revise/Hphoto.wxml']=$gwx('./pages/user/setting/revise/Hphoto.wxml');

__wxAppCode__['pages/user/setting/revise/pay/pay.json']={"usingComponents":{}};
__wxAppCode__['pages/user/setting/revise/pay/pay.wxml']=$gwx('./pages/user/setting/revise/pay/pay.wxml');

__wxAppCode__['pages/user/setting/revise/rename.json']={"navigationBarBackgroundColor":"#f8f8f8","navigationBarTitleText":"我的昵称","backgroundColorTop":"#ffffff","backgroundColorBottom":"#f3f3f3","usingComponents":{}};
__wxAppCode__['pages/user/setting/revise/rename.wxml']=$gwx('./pages/user/setting/revise/rename.wxml');

__wxAppCode__['pages/user/setting/revise/signature/signature.json']={"navigationBarTitleText":"个性签名","usingComponents":{}};
__wxAppCode__['pages/user/setting/revise/signature/signature.wxml']=$gwx('./pages/user/setting/revise/signature/signature.wxml');

__wxAppCode__['pages/user/setting/setting.json']={"navigationBarBackgroundColor":"#f8f8f8","navigationBarTitleText":"我的设置","backgroundColorTop":"#ffffff","backgroundColorBottom":"#f3f3f3","usingComponents":{}};
__wxAppCode__['pages/user/setting/setting.wxml']=$gwx('./pages/user/setting/setting.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"163e":function(n,e,t){"use strict";(function(n){t("590e"),t("921b");var e=u(t("66fd")),o=u(t("4b2a"));function u(n){return n&&n.__esModule?n:{default:n}}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){c(n,e,t[e])})}return n}function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var a=function(){return Promise.all([t.e("common/vendor"),t.e("components/sunui-upimg/sunui-upimg-alioos")]).then(t.bind(null,"0ca6"))};e.default.component("sunui-upoos",a),e.default.config.productionTip=!1,o.default.mpType="app";var i=new e.default(r({},o.default));n(i).$mount()}).call(this,t("6e42")["createApp"])},3436:function(n,e,t){"use strict";var o=t("531e"),u=t.n(o);u.a},"4b2a":function(n,e,t){"use strict";t.r(e);var o=t("da46");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("3436");var r,c,a=t("2877"),i=Object(a["a"])(o["default"],r,c,!1,null,null,null);e["default"]=i.exports},"531e":function(n,e,t){},"6ec5":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={onLaunch:function(){console.log(n("App Launch"," at App.vue:4"))},onShow:function(){console.log(n("App Show"," at App.vue:7"))},onHide:function(){console.log(n("App Hide"," at App.vue:10"))}};e.default=t}).call(this,t("0de9")["default"])},da46:function(n,e,t){"use strict";t.r(e);var o=t("6ec5"),u=t.n(o);for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);e["default"]=u.a}},[["163e","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var r, o, c = t[0], a = t[1], p = t[2], s = 0, l = []; s < c.length; s++) {
      o = c[s], i[o] && l.push(i[o][0]), i[o] = 0;
    }

    for (r in a) {
      Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }

    m && m(t);

    while (l.length) {
      l.shift()();
    }

    return u.push.apply(u, p || []), n();
  }

  function n() {
    for (var e, t = 0; t < u.length; t++) {
      for (var n = u[t], r = !0, o = 1; o < n.length; o++) {
        var c = n[o];
        0 !== i[c] && (r = !1);
      }

      r && (u.splice(t--, 1), e = a(a.s = n[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      i = {
    "common/runtime": 0
  },
      u = [];

  function c(e) {
    return a.p + "" + e + ".js";
  }

  function a(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, a), n.l = !0, n.exports;
  }

  a.e = function (e) {
    var t = [],
        n = {
      "components/sunui-upimg/sunui-upimg-alioos": 1,
      "components/tki-qrcode/tki-qrcode": 1,
      "components/mpvue-citypicker/mpvueCityPicker": 1,
      "components/w-picker/w-picker": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var r = ({
        "components/sunui-upimg/sunui-upimg-alioos": "components/sunui-upimg/sunui-upimg-alioos",
        "components/tki-qrcode/tki-qrcode": "components/tki-qrcode/tki-qrcode",
        "components/mpvue-citypicker/mpvueCityPicker": "components/mpvue-citypicker/mpvueCityPicker",
        "components/w-picker/w-picker": "components/w-picker/w-picker"
      }[e] || e) + ".wxss", i = a.p + r, u = document.getElementsByTagName("link"), c = 0; c < u.length; c++) {
        var p = u[c],
            s = p.getAttribute("data-href") || p.getAttribute("href");
        if ("stylesheet" === p.rel && (s === r || s === i)) return t();
      }

      var l = document.getElementsByTagName("style");

      for (c = 0; c < l.length; c++) {
        p = l[c], s = p.getAttribute("data-href");
        if (s === r || s === i) return t();
      }

      var m = document.createElement("link");
      m.rel = "stylesheet", m.type = "text/css", m.onload = t, m.onerror = function (t) {
        var r = t && t.target && t.target.src || i,
            u = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        u.request = r, delete o[e], m.parentNode.removeChild(m), n(u);
      }, m.href = i;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(m);
    }).then(function () {
      o[e] = 0;
    }));
    var r = i[e];
    if (0 !== r) if (r) t.push(r[2]);else {
      var u = new Promise(function (t, n) {
        r = i[e] = [t, n];
      });
      t.push(r[2] = u);
      var p,
          s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, a.nc && s.setAttribute("nonce", a.nc), s.src = c(e), p = function p(t) {
        s.onerror = s.onload = null, clearTimeout(l);
        var n = i[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                u = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            u.type = r, u.request = o, n[1](u);
          }

          i[e] = void 0;
        }
      };
      var l = setTimeout(function () {
        p({
          type: "timeout",
          target: s
        });
      }, 12e4);
      s.onerror = s.onload = p, document.head.appendChild(s);
    }
    return Promise.all(t);
  }, a.m = e, a.c = r, a.d = function (e, t, n) {
    a.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, a.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, a.t = function (e, t) {
    if (1 & t && (e = a(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (a.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      a.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, a.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return a.d(t, "a", t), t;
  }, a.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, a.p = "/", a.oe = function (e) {
    throw console.error(e), e;
  };
  var p = global["webpackJsonp"] = global["webpackJsonp"] || [],
      s = p.push.bind(p);
  p.push = t, p = p.slice();

  for (var l = 0; l < p.length; l++) {
    t(p[l]);
  }

  var m = s;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(l,e,a){"use strict";function u(l){var e=Object.prototype.toString.call(l);return e.substring(8,e.length-1)}function v(){for(var l=arguments.length,e=new Array(l),a=0;a<l;a++)e[a]=arguments[a];var v=e.map(function(l){var e=Object.prototype.toString.call(l);if("[object object]"===e.toLowerCase())try{l="---BEGIN:JSON---"+JSON.stringify(l)+"---END:JSON---"}catch(v){l="[object object]"}else if(null===l)l="---NULL---";else if(void 0===l)l="---UNDEFINED---";else{var a=u(l).toUpperCase();l="NUMBER"===a||"BOOLEAN"===a?"---BEGIN:"+a+"---"+l+"---END:"+a+"---":String(l)}return l}),b="";if(v.length>1){var t=v.pop();b=v.join("---COMMA---"),0===t.indexOf(" at ")?b+=t:b+="---COMMA---"+t}else b=v[0];return b}Object.defineProperty(e,"__esModule",{value:!0}),e.default=v},2877:function(l,e,a){"use strict";function u(l,e,a,u,v,b,t,n){var r,o="function"===typeof l?l.options:l;if(e&&(o.render=e,o.staticRenderFns=a,o._compiled=!0),u&&(o.functional=!0),b&&(o._scopeId="data-v-"+b),t?(r=function(l){l=l||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,l||"undefined"===typeof __VUE_SSR_CONTEXT__||(l=__VUE_SSR_CONTEXT__),v&&v.call(this,l),l&&l._registeredComponents&&l._registeredComponents.add(t)},o._ssrRegister=r):v&&(r=n?function(){v.call(this,this.$root.$options.shadowRoot)}:v),r)if(o.functional){o._injectStyles=r;var i=o.render;o.render=function(l,e){return r.call(e),i(l,e)}}else{var s=o.beforeCreate;o.beforeCreate=s?[].concat(s,r):[r]}return{exports:l,options:o}}a.d(e,"a",function(){return u})},"376c":function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=[[[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"},{label:"海淀区",value:"110108"},{label:"门头沟区",value:"110109"},{label:"房山区",value:"110111"},{label:"通州区",value:"110112"},{label:"顺义区",value:"110113"},{label:"昌平区",value:"110114"},{label:"大兴区",value:"110115"},{label:"怀柔区",value:"110116"},{label:"平谷区",value:"110117"},{label:"密云区",value:"110118"},{label:"延庆区",value:"110119"}]],[[{label:"和平区",value:"120101"},{label:"河东区",value:"120102"},{label:"河西区",value:"120103"},{label:"南开区",value:"120104"},{label:"河北区",value:"120105"},{label:"红桥区",value:"120106"},{label:"东丽区",value:"120110"},{label:"西青区",value:"120111"},{label:"津南区",value:"120112"},{label:"北辰区",value:"120113"},{label:"武清区",value:"120114"},{label:"宝坻区",value:"120115"},{label:"滨海新区",value:"120116"},{label:"宁河区",value:"120117"},{label:"静海区",value:"120118"},{label:"蓟州区",value:"120119"}]],[[{label:"长安区",value:"130102"},{label:"桥西区",value:"130104"},{label:"新华区",value:"130105"},{label:"井陉矿区",value:"130107"},{label:"裕华区",value:"130108"},{label:"藁城区",value:"130109"},{label:"鹿泉区",value:"130110"},{label:"栾城区",value:"130111"},{label:"井陉县",value:"130121"},{label:"正定县",value:"130123"},{label:"行唐县",value:"130125"},{label:"灵寿县",value:"130126"},{label:"高邑县",value:"130127"},{label:"深泽县",value:"130128"},{label:"赞皇县",value:"130129"},{label:"无极县",value:"130130"},{label:"平山县",value:"130131"},{label:"元氏县",value:"130132"},{label:"赵县",value:"130133"},{label:"石家庄高新技术产业开发区",value:"130171"},{label:"石家庄循环化工园区",value:"130172"},{label:"辛集市",value:"130181"},{label:"晋州市",value:"130183"},{label:"新乐市",value:"130184"}],[{label:"路南区",value:"130202"},{label:"路北区",value:"130203"},{label:"古冶区",value:"130204"},{label:"开平区",value:"130205"},{label:"丰南区",value:"130207"},{label:"丰润区",value:"130208"},{label:"曹妃甸区",value:"130209"},{label:"滦县",value:"130223"},{label:"滦南县",value:"130224"},{label:"乐亭县",value:"130225"},{label:"迁西县",value:"130227"},{label:"玉田县",value:"130229"},{label:"唐山市芦台经济技术开发区",value:"130271"},{label:"唐山市汉沽管理区",value:"130272"},{label:"唐山高新技术产业开发区",value:"130273"},{label:"河北唐山海港经济开发区",value:"130274"},{label:"遵化市",value:"130281"},{label:"迁安市",value:"130283"}],[{label:"海港区",value:"130302"},{label:"山海关区",value:"130303"},{label:"北戴河区",value:"130304"},{label:"抚宁区",value:"130306"},{label:"青龙满族自治县",value:"130321"},{label:"昌黎县",value:"130322"},{label:"卢龙县",value:"130324"},{label:"秦皇岛市经济技术开发区",value:"130371"},{label:"北戴河新区",value:"130372"}],[{label:"邯山区",value:"130402"},{label:"丛台区",value:"130403"},{label:"复兴区",value:"130404"},{label:"峰峰矿区",value:"130406"},{label:"肥乡区",value:"130407"},{label:"永年区",value:"130408"},{label:"临漳县",value:"130423"},{label:"成安县",value:"130424"},{label:"大名县",value:"130425"},{label:"涉县",value:"130426"},{label:"磁县",value:"130427"},{label:"邱县",value:"130430"},{label:"鸡泽县",value:"130431"},{label:"广平县",value:"130432"},{label:"馆陶县",value:"130433"},{label:"魏县",value:"130434"},{label:"曲周县",value:"130435"},{label:"邯郸经济技术开发区",value:"130471"},{label:"邯郸冀南新区",value:"130473"},{label:"武安市",value:"130481"}],[{label:"桥东区",value:"130502"},{label:"桥西区",value:"130503"},{label:"邢台县",value:"130521"},{label:"临城县",value:"130522"},{label:"内丘县",value:"130523"},{label:"柏乡县",value:"130524"},{label:"隆尧县",value:"130525"},{label:"任县",value:"130526"},{label:"南和县",value:"130527"},{label:"宁晋县",value:"130528"},{label:"巨鹿县",value:"130529"},{label:"新河县",value:"130530"},{label:"广宗县",value:"130531"},{label:"平乡县",value:"130532"},{label:"威县",value:"130533"},{label:"清河县",value:"130534"},{label:"临西县",value:"130535"},{label:"河北邢台经济开发区",value:"130571"},{label:"南宫市",value:"130581"},{label:"沙河市",value:"130582"}],[{label:"竞秀区",value:"130602"},{label:"莲池区",value:"130606"},{label:"满城区",value:"130607"},{label:"清苑区",value:"130608"},{label:"徐水区",value:"130609"},{label:"涞水县",value:"130623"},{label:"阜平县",value:"130624"},{label:"定兴县",value:"130626"},{label:"唐县",value:"130627"},{label:"高阳县",value:"130628"},{label:"容城县",value:"130629"},{label:"涞源县",value:"130630"},{label:"望都县",value:"130631"},{label:"安新县",value:"130632"},{label:"易县",value:"130633"},{label:"曲阳县",value:"130634"},{label:"蠡县",value:"130635"},{label:"顺平县",value:"130636"},{label:"博野县",value:"130637"},{label:"雄县",value:"130638"},{label:"保定高新技术产业开发区",value:"130671"},{label:"保定白沟新城",value:"130672"},{label:"涿州市",value:"130681"},{label:"定州市",value:"130682"},{label:"安国市",value:"130683"},{label:"高碑店市",value:"130684"}],[{label:"桥东区",value:"130702"},{label:"桥西区",value:"130703"},{label:"宣化区",value:"130705"},{label:"下花园区",value:"130706"},{label:"万全区",value:"130708"},{label:"崇礼区",value:"130709"},{label:"张北县",value:"130722"},{label:"康保县",value:"130723"},{label:"沽源县",value:"130724"},{label:"尚义县",value:"130725"},{label:"蔚县",value:"130726"},{label:"阳原县",value:"130727"},{label:"怀安县",value:"130728"},{label:"怀来县",value:"130730"},{label:"涿鹿县",value:"130731"},{label:"赤城县",value:"130732"},{label:"张家口市高新技术产业开发区",value:"130771"},{label:"张家口市察北管理区",value:"130772"},{label:"张家口市塞北管理区",value:"130773"}],[{label:"双桥区",value:"130802"},{label:"双滦区",value:"130803"},{label:"鹰手营子矿区",value:"130804"},{label:"承德县",value:"130821"},{label:"兴隆县",value:"130822"},{label:"滦平县",value:"130824"},{label:"隆化县",value:"130825"},{label:"丰宁满族自治县",value:"130826"},{label:"宽城满族自治县",value:"130827"},{label:"围场满族蒙古族自治县",value:"130828"},{label:"承德高新技术产业开发区",value:"130871"},{label:"平泉市",value:"130881"}],[{label:"新华区",value:"130902"},{label:"运河区",value:"130903"},{label:"沧县",value:"130921"},{label:"青县",value:"130922"},{label:"东光县",value:"130923"},{label:"海兴县",value:"130924"},{label:"盐山县",value:"130925"},{label:"肃宁县",value:"130926"},{label:"南皮县",value:"130927"},{label:"吴桥县",value:"130928"},{label:"献县",value:"130929"},{label:"孟村回族自治县",value:"130930"},{label:"河北沧州经济开发区",value:"130971"},{label:"沧州高新技术产业开发区",value:"130972"},{label:"沧州渤海新区",value:"130973"},{label:"泊头市",value:"130981"},{label:"任丘市",value:"130982"},{label:"黄骅市",value:"130983"},{label:"河间市",value:"130984"}],[{label:"安次区",value:"131002"},{label:"广阳区",value:"131003"},{label:"固安县",value:"131022"},{label:"永清县",value:"131023"},{label:"香河县",value:"131024"},{label:"大城县",value:"131025"},{label:"文安县",value:"131026"},{label:"大厂回族自治县",value:"131028"},{label:"廊坊经济技术开发区",value:"131071"},{label:"霸州市",value:"131081"},{label:"三河市",value:"131082"}],[{label:"桃城区",value:"131102"},{label:"冀州区",value:"131103"},{label:"枣强县",value:"131121"},{label:"武邑县",value:"131122"},{label:"武强县",value:"131123"},{label:"饶阳县",value:"131124"},{label:"安平县",value:"131125"},{label:"故城县",value:"131126"},{label:"景县",value:"131127"},{label:"阜城县",value:"131128"},{label:"河北衡水经济开发区",value:"131171"},{label:"衡水滨湖新区",value:"131172"},{label:"深州市",value:"131182"}]],[[{label:"小店区",value:"140105"},{label:"迎泽区",value:"140106"},{label:"杏花岭区",value:"140107"},{label:"尖草坪区",value:"140108"},{label:"万柏林区",value:"140109"},{label:"晋源区",value:"140110"},{label:"清徐县",value:"140121"},{label:"阳曲县",value:"140122"},{label:"娄烦县",value:"140123"},{label:"山西转型综合改革示范区",value:"140171"},{label:"古交市",value:"140181"}],[{label:"城区",value:"140202"},{label:"矿区",value:"140203"},{label:"南郊区",value:"140211"},{label:"新荣区",value:"140212"},{label:"阳高县",value:"140221"},{label:"天镇县",value:"140222"},{label:"广灵县",value:"140223"},{label:"灵丘县",value:"140224"},{label:"浑源县",value:"140225"},{label:"左云县",value:"140226"},{label:"大同县",value:"140227"},{label:"山西大同经济开发区",value:"140271"}],[{label:"城区",value:"140302"},{label:"矿区",value:"140303"},{label:"郊区",value:"140311"},{label:"平定县",value:"140321"},{label:"盂县",value:"140322"},{label:"山西阳泉经济开发区",value:"140371"}],[{label:"城区",value:"140402"},{label:"郊区",value:"140411"},{label:"长治县",value:"140421"},{label:"襄垣县",value:"140423"},{label:"屯留县",value:"140424"},{label:"平顺县",value:"140425"},{label:"黎城县",value:"140426"},{label:"壶关县",value:"140427"},{label:"长子县",value:"140428"},{label:"武乡县",value:"140429"},{label:"沁县",value:"140430"},{label:"沁源县",value:"140431"},{label:"山西长治高新技术产业园区",value:"140471"},{label:"潞城市",value:"140481"}],[{label:"城区",value:"140502"},{label:"沁水县",value:"140521"},{label:"阳城县",value:"140522"},{label:"陵川县",value:"140524"},{label:"泽州县",value:"140525"},{label:"高平市",value:"140581"}],[{label:"朔城区",value:"140602"},{label:"平鲁区",value:"140603"},{label:"山阴县",value:"140621"},{label:"应县",value:"140622"},{label:"右玉县",value:"140623"},{label:"怀仁县",value:"140624"},{label:"山西朔州经济开发区",value:"140671"}],[{label:"榆次区",value:"140702"},{label:"榆社县",value:"140721"},{label:"左权县",value:"140722"},{label:"和顺县",value:"140723"},{label:"昔阳县",value:"140724"},{label:"寿阳县",value:"140725"},{label:"太谷县",value:"140726"},{label:"祁县",value:"140727"},{label:"平遥县",value:"140728"},{label:"灵石县",value:"140729"},{label:"介休市",value:"140781"}],[{label:"盐湖区",value:"140802"},{label:"临猗县",value:"140821"},{label:"万荣县",value:"140822"},{label:"闻喜县",value:"140823"},{label:"稷山县",value:"140824"},{label:"新绛县",value:"140825"},{label:"绛县",value:"140826"},{label:"垣曲县",value:"140827"},{label:"夏县",value:"140828"},{label:"平陆县",value:"140829"},{label:"芮城县",value:"140830"},{label:"永济市",value:"140881"},{label:"河津市",value:"140882"}],[{label:"忻府区",value:"140902"},{label:"定襄县",value:"140921"},{label:"五台县",value:"140922"},{label:"代县",value:"140923"},{label:"繁峙县",value:"140924"},{label:"宁武县",value:"140925"},{label:"静乐县",value:"140926"},{label:"神池县",value:"140927"},{label:"五寨县",value:"140928"},{label:"岢岚县",value:"140929"},{label:"河曲县",value:"140930"},{label:"保德县",value:"140931"},{label:"偏关县",value:"140932"},{label:"五台山风景名胜区",value:"140971"},{label:"原平市",value:"140981"}],[{label:"尧都区",value:"141002"},{label:"曲沃县",value:"141021"},{label:"翼城县",value:"141022"},{label:"襄汾县",value:"141023"},{label:"洪洞县",value:"141024"},{label:"古县",value:"141025"},{label:"安泽县",value:"141026"},{label:"浮山县",value:"141027"},{label:"吉县",value:"141028"},{label:"乡宁县",value:"141029"},{label:"大宁县",value:"141030"},{label:"隰县",value:"141031"},{label:"永和县",value:"141032"},{label:"蒲县",value:"141033"},{label:"汾西县",value:"141034"},{label:"侯马市",value:"141081"},{label:"霍州市",value:"141082"}],[{label:"离石区",value:"141102"},{label:"文水县",value:"141121"},{label:"交城县",value:"141122"},{label:"兴县",value:"141123"},{label:"临县",value:"141124"},{label:"柳林县",value:"141125"},{label:"石楼县",value:"141126"},{label:"岚县",value:"141127"},{label:"方山县",value:"141128"},{label:"中阳县",value:"141129"},{label:"交口县",value:"141130"},{label:"孝义市",value:"141181"},{label:"汾阳市",value:"141182"}]],[[{label:"新城区",value:"150102"},{label:"回民区",value:"150103"},{label:"玉泉区",value:"150104"},{label:"赛罕区",value:"150105"},{label:"土默特左旗",value:"150121"},{label:"托克托县",value:"150122"},{label:"和林格尔县",value:"150123"},{label:"清水河县",value:"150124"},{label:"武川县",value:"150125"},{label:"呼和浩特金海工业园区",value:"150171"},{label:"呼和浩特经济技术开发区",value:"150172"}],[{label:"东河区",value:"150202"},{label:"昆都仑区",value:"150203"},{label:"青山区",value:"150204"},{label:"石拐区",value:"150205"},{label:"白云鄂博矿区",value:"150206"},{label:"九原区",value:"150207"},{label:"土默特右旗",value:"150221"},{label:"固阳县",value:"150222"},{label:"达尔罕茂明安联合旗",value:"150223"},{label:"包头稀土高新技术产业开发区",value:"150271"}],[{label:"海勃湾区",value:"150302"},{label:"海南区",value:"150303"},{label:"乌达区",value:"150304"}],[{label:"红山区",value:"150402"},{label:"元宝山区",value:"150403"},{label:"松山区",value:"150404"},{label:"阿鲁科尔沁旗",value:"150421"},{label:"巴林左旗",value:"150422"},{label:"巴林右旗",value:"150423"},{label:"林西县",value:"150424"},{label:"克什克腾旗",value:"150425"},{label:"翁牛特旗",value:"150426"},{label:"喀喇沁旗",value:"150428"},{label:"宁城县",value:"150429"},{label:"敖汉旗",value:"150430"}],[{label:"科尔沁区",value:"150502"},{label:"科尔沁左翼中旗",value:"150521"},{label:"科尔沁左翼后旗",value:"150522"},{label:"开鲁县",value:"150523"},{label:"库伦旗",value:"150524"},{label:"奈曼旗",value:"150525"},{label:"扎鲁特旗",value:"150526"},{label:"通辽经济技术开发区",value:"150571"},{label:"霍林郭勒市",value:"150581"}],[{label:"东胜区",value:"150602"},{label:"康巴什区",value:"150603"},{label:"达拉特旗",value:"150621"},{label:"准格尔旗",value:"150622"},{label:"鄂托克前旗",value:"150623"},{label:"鄂托克旗",value:"150624"},{label:"杭锦旗",value:"150625"},{label:"乌审旗",value:"150626"},{label:"伊金霍洛旗",value:"150627"}],[{label:"海拉尔区",value:"150702"},{label:"扎赉诺尔区",value:"150703"},{label:"阿荣旗",value:"150721"},{label:"莫力达瓦达斡尔族自治旗",value:"150722"},{label:"鄂伦春自治旗",value:"150723"},{label:"鄂温克族自治旗",value:"150724"},{label:"陈巴尔虎旗",value:"150725"},{label:"新巴尔虎左旗",value:"150726"},{label:"新巴尔虎右旗",value:"150727"},{label:"满洲里市",value:"150781"},{label:"牙克石市",value:"150782"},{label:"扎兰屯市",value:"150783"},{label:"额尔古纳市",value:"150784"},{label:"根河市",value:"150785"}],[{label:"临河区",value:"150802"},{label:"五原县",value:"150821"},{label:"磴口县",value:"150822"},{label:"乌拉特前旗",value:"150823"},{label:"乌拉特中旗",value:"150824"},{label:"乌拉特后旗",value:"150825"},{label:"杭锦后旗",value:"150826"}],[{label:"集宁区",value:"150902"},{label:"卓资县",value:"150921"},{label:"化德县",value:"150922"},{label:"商都县",value:"150923"},{label:"兴和县",value:"150924"},{label:"凉城县",value:"150925"},{label:"察哈尔右翼前旗",value:"150926"},{label:"察哈尔右翼中旗",value:"150927"},{label:"察哈尔右翼后旗",value:"150928"},{label:"四子王旗",value:"150929"},{label:"丰镇市",value:"150981"}],[{label:"乌兰浩特市",value:"152201"},{label:"阿尔山市",value:"152202"},{label:"科尔沁右翼前旗",value:"152221"},{label:"科尔沁右翼中旗",value:"152222"},{label:"扎赉特旗",value:"152223"},{label:"突泉县",value:"152224"}],[{label:"二连浩特市",value:"152501"},{label:"锡林浩特市",value:"152502"},{label:"阿巴嘎旗",value:"152522"},{label:"苏尼特左旗",value:"152523"},{label:"苏尼特右旗",value:"152524"},{label:"东乌珠穆沁旗",value:"152525"},{label:"西乌珠穆沁旗",value:"152526"},{label:"太仆寺旗",value:"152527"},{label:"镶黄旗",value:"152528"},{label:"正镶白旗",value:"152529"},{label:"正蓝旗",value:"152530"},{label:"多伦县",value:"152531"},{label:"乌拉盖管委会",value:"152571"}],[{label:"阿拉善左旗",value:"152921"},{label:"阿拉善右旗",value:"152922"},{label:"额济纳旗",value:"152923"},{label:"内蒙古阿拉善经济开发区",value:"152971"}]],[[{label:"和平区",value:"210102"},{label:"沈河区",value:"210103"},{label:"大东区",value:"210104"},{label:"皇姑区",value:"210105"},{label:"铁西区",value:"210106"},{label:"苏家屯区",value:"210111"},{label:"浑南区",value:"210112"},{label:"沈北新区",value:"210113"},{label:"于洪区",value:"210114"},{label:"辽中区",value:"210115"},{label:"康平县",value:"210123"},{label:"法库县",value:"210124"},{label:"新民市",value:"210181"}],[{label:"中山区",value:"210202"},{label:"西岗区",value:"210203"},{label:"沙河口区",value:"210204"},{label:"甘井子区",value:"210211"},{label:"旅顺口区",value:"210212"},{label:"金州区",value:"210213"},{label:"普兰店区",value:"210214"},{label:"长海县",value:"210224"},{label:"瓦房店市",value:"210281"},{label:"庄河市",value:"210283"}],[{label:"铁东区",value:"210302"},{label:"铁西区",value:"210303"},{label:"立山区",value:"210304"},{label:"千山区",value:"210311"},{label:"台安县",value:"210321"},{label:"岫岩满族自治县",value:"210323"},{label:"海城市",value:"210381"}],[{label:"新抚区",value:"210402"},{label:"东洲区",value:"210403"},{label:"望花区",value:"210404"},{label:"顺城区",value:"210411"},{label:"抚顺县",value:"210421"},{label:"新宾满族自治县",value:"210422"},{label:"清原满族自治县",value:"210423"}],[{label:"平山区",value:"210502"},{label:"溪湖区",value:"210503"},{label:"明山区",value:"210504"},{label:"南芬区",value:"210505"},{label:"本溪满族自治县",value:"210521"},{label:"桓仁满族自治县",value:"210522"}],[{label:"元宝区",value:"210602"},{label:"振兴区",value:"210603"},{label:"振安区",value:"210604"},{label:"宽甸满族自治县",value:"210624"},{label:"东港市",value:"210681"},{label:"凤城市",value:"210682"}],[{label:"古塔区",value:"210702"},{label:"凌河区",value:"210703"},{label:"太和区",value:"210711"},{label:"黑山县",value:"210726"},{label:"义县",value:"210727"},{label:"凌海市",value:"210781"},{label:"北镇市",value:"210782"}],[{label:"站前区",value:"210802"},{label:"西市区",value:"210803"},{label:"鲅鱼圈区",value:"210804"},{label:"老边区",value:"210811"},{label:"盖州市",value:"210881"},{label:"大石桥市",value:"210882"}],[{label:"海州区",value:"210902"},{label:"新邱区",value:"210903"},{label:"太平区",value:"210904"},{label:"清河门区",value:"210905"},{label:"细河区",value:"210911"},{label:"阜新蒙古族自治县",value:"210921"},{label:"彰武县",value:"210922"}],[{label:"白塔区",value:"211002"},{label:"文圣区",value:"211003"},{label:"宏伟区",value:"211004"},{label:"弓长岭区",value:"211005"},{label:"太子河区",value:"211011"},{label:"辽阳县",value:"211021"},{label:"灯塔市",value:"211081"}],[{label:"双台子区",value:"211102"},{label:"兴隆台区",value:"211103"},{label:"大洼区",value:"211104"},{label:"盘山县",value:"211122"}],[{label:"银州区",value:"211202"},{label:"清河区",value:"211204"},{label:"铁岭县",value:"211221"},{label:"西丰县",value:"211223"},{label:"昌图县",value:"211224"},{label:"调兵山市",value:"211281"},{label:"开原市",value:"211282"}],[{label:"双塔区",value:"211302"},{label:"龙城区",value:"211303"},{label:"朝阳县",value:"211321"},{label:"建平县",value:"211322"},{label:"喀喇沁左翼蒙古族自治县",value:"211324"},{label:"北票市",value:"211381"},{label:"凌源市",value:"211382"}],[{label:"连山区",value:"211402"},{label:"龙港区",value:"211403"},{label:"南票区",value:"211404"},{label:"绥中县",value:"211421"},{label:"建昌县",value:"211422"},{label:"兴城市",value:"211481"}]],[[{label:"南关区",value:"220102"},{label:"宽城区",value:"220103"},{label:"朝阳区",value:"220104"},{label:"二道区",value:"220105"},{label:"绿园区",value:"220106"},{label:"双阳区",value:"220112"},{label:"九台区",value:"220113"},{label:"农安县",value:"220122"},{label:"长春经济技术开发区",value:"220171"},{label:"长春净月高新技术产业开发区",value:"220172"},{label:"长春高新技术产业开发区",value:"220173"},{label:"长春汽车经济技术开发区",value:"220174"},{label:"榆树市",value:"220182"},{label:"德惠市",value:"220183"}],[{label:"昌邑区",value:"220202"},{label:"龙潭区",value:"220203"},{label:"船营区",value:"220204"},{label:"丰满区",value:"220211"},{label:"永吉县",value:"220221"},{label:"吉林经济开发区",value:"220271"},{label:"吉林高新技术产业开发区",value:"220272"},{label:"吉林中国新加坡食品区",value:"220273"},{label:"蛟河市",value:"220281"},{label:"桦甸市",value:"220282"},{label:"舒兰市",value:"220283"},{label:"磐石市",value:"220284"}],[{label:"铁西区",value:"220302"},{label:"铁东区",value:"220303"},{label:"梨树县",value:"220322"},{label:"伊通满族自治县",value:"220323"},{label:"公主岭市",value:"220381"},{label:"双辽市",value:"220382"}],[{label:"龙山区",value:"220402"},{label:"西安区",value:"220403"},{label:"东丰县",value:"220421"},{label:"东辽县",value:"220422"}],[{label:"东昌区",value:"220502"},{label:"二道江区",value:"220503"},{label:"通化县",value:"220521"},{label:"辉南县",value:"220523"},{label:"柳河县",value:"220524"},{label:"梅河口市",value:"220581"},{label:"集安市",value:"220582"}],[{label:"浑江区",value:"220602"},{label:"江源区",value:"220605"},{label:"抚松县",value:"220621"},{label:"靖宇县",value:"220622"},{label:"长白朝鲜族自治县",value:"220623"},{label:"临江市",value:"220681"}],[{label:"宁江区",value:"220702"},{label:"前郭尔罗斯蒙古族自治县",value:"220721"},{label:"长岭县",value:"220722"},{label:"乾安县",value:"220723"},{label:"吉林松原经济开发区",value:"220771"},{label:"扶余市",value:"220781"}],[{label:"洮北区",value:"220802"},{label:"镇赉县",value:"220821"},{label:"通榆县",value:"220822"},{label:"吉林白城经济开发区",value:"220871"},{label:"洮南市",value:"220881"},{label:"大安市",value:"220882"}],[{label:"延吉市",value:"222401"},{label:"图们市",value:"222402"},{label:"敦化市",value:"222403"},{label:"珲春市",value:"222404"},{label:"龙井市",value:"222405"},{label:"和龙市",value:"222406"},{label:"汪清县",value:"222424"},{label:"安图县",value:"222426"}]],[[{label:"道里区",value:"230102"},{label:"南岗区",value:"230103"},{label:"道外区",value:"230104"},{label:"平房区",value:"230108"},{label:"松北区",value:"230109"},{label:"香坊区",value:"230110"},{label:"呼兰区",value:"230111"},{label:"阿城区",value:"230112"},{label:"双城区",value:"230113"},{label:"依兰县",value:"230123"},{label:"方正县",value:"230124"},{label:"宾县",value:"230125"},{label:"巴彦县",value:"230126"},{label:"木兰县",value:"230127"},{label:"通河县",value:"230128"},{label:"延寿县",value:"230129"},{label:"尚志市",value:"230183"},{label:"五常市",value:"230184"}],[{label:"龙沙区",value:"230202"},{label:"建华区",value:"230203"},{label:"铁锋区",value:"230204"},{label:"昂昂溪区",value:"230205"},{label:"富拉尔基区",value:"230206"},{label:"碾子山区",value:"230207"},{label:"梅里斯达斡尔族区",value:"230208"},{label:"龙江县",value:"230221"},{label:"依安县",value:"230223"},{label:"泰来县",value:"230224"},{label:"甘南县",value:"230225"},{label:"富裕县",value:"230227"},{label:"克山县",value:"230229"},{label:"克东县",value:"230230"},{label:"拜泉县",value:"230231"},{label:"讷河市",value:"230281"}],[{label:"鸡冠区",value:"230302"},{label:"恒山区",value:"230303"},{label:"滴道区",value:"230304"},{label:"梨树区",value:"230305"},{label:"城子河区",value:"230306"},{label:"麻山区",value:"230307"},{label:"鸡东县",value:"230321"},{label:"虎林市",value:"230381"},{label:"密山市",value:"230382"}],[{label:"向阳区",value:"230402"},{label:"工农区",value:"230403"},{label:"南山区",value:"230404"},{label:"兴安区",value:"230405"},{label:"东山区",value:"230406"},{label:"兴山区",value:"230407"},{label:"萝北县",value:"230421"},{label:"绥滨县",value:"230422"}],[{label:"尖山区",value:"230502"},{label:"岭东区",value:"230503"},{label:"四方台区",value:"230505"},{label:"宝山区",value:"230506"},{label:"集贤县",value:"230521"},{label:"友谊县",value:"230522"},{label:"宝清县",value:"230523"},{label:"饶河县",value:"230524"}],[{label:"萨尔图区",value:"230602"},{label:"龙凤区",value:"230603"},{label:"让胡路区",value:"230604"},{label:"红岗区",value:"230605"},{label:"大同区",value:"230606"},{label:"肇州县",value:"230621"},{label:"肇源县",value:"230622"},{label:"林甸县",value:"230623"},{label:"杜尔伯特蒙古族自治县",value:"230624"},{label:"大庆高新技术产业开发区",value:"230671"}],[{label:"伊春区",value:"230702"},{label:"南岔区",value:"230703"},{label:"友好区",value:"230704"},{label:"西林区",value:"230705"},{label:"翠峦区",value:"230706"},{label:"新青区",value:"230707"},{label:"美溪区",value:"230708"},{label:"金山屯区",value:"230709"},{label:"五营区",value:"230710"},{label:"乌马河区",value:"230711"},{label:"汤旺河区",value:"230712"},{label:"带岭区",value:"230713"},{label:"乌伊岭区",value:"230714"},{label:"红星区",value:"230715"},{label:"上甘岭区",value:"230716"},{label:"嘉荫县",value:"230722"},{label:"铁力市",value:"230781"}],[{label:"向阳区",value:"230803"},{label:"前进区",value:"230804"},{label:"东风区",value:"230805"},{label:"郊区",value:"230811"},{label:"桦南县",value:"230822"},{label:"桦川县",value:"230826"},{label:"汤原县",value:"230828"},{label:"同江市",value:"230881"},{label:"富锦市",value:"230882"},{label:"抚远市",value:"230883"}],[{label:"新兴区",value:"230902"},{label:"桃山区",value:"230903"},{label:"茄子河区",value:"230904"},{label:"勃利县",value:"230921"}],[{label:"东安区",value:"231002"},{label:"阳明区",value:"231003"},{label:"爱民区",value:"231004"},{label:"西安区",value:"231005"},{label:"林口县",value:"231025"},{label:"牡丹江经济技术开发区",value:"231071"},{label:"绥芬河市",value:"231081"},{label:"海林市",value:"231083"},{label:"宁安市",value:"231084"},{label:"穆棱市",value:"231085"},{label:"东宁市",value:"231086"}],[{label:"爱辉区",value:"231102"},{label:"嫩江县",value:"231121"},{label:"逊克县",value:"231123"},{label:"孙吴县",value:"231124"},{label:"北安市",value:"231181"},{label:"五大连池市",value:"231182"}],[{label:"北林区",value:"231202"},{label:"望奎县",value:"231221"},{label:"兰西县",value:"231222"},{label:"青冈县",value:"231223"},{label:"庆安县",value:"231224"},{label:"明水县",value:"231225"},{label:"绥棱县",value:"231226"},{label:"安达市",value:"231281"},{label:"肇东市",value:"231282"},{label:"海伦市",value:"231283"}],[{label:"加格达奇区",value:"232701"},{label:"松岭区",value:"232702"},{label:"新林区",value:"232703"},{label:"呼中区",value:"232704"},{label:"呼玛县",value:"232721"},{label:"塔河县",value:"232722"},{label:"漠河县",value:"232723"}]],[[{label:"黄浦区",value:"310101"},{label:"徐汇区",value:"310104"},{label:"长宁区",value:"310105"},{label:"静安区",value:"310106"},{label:"普陀区",value:"310107"},{label:"虹口区",value:"310109"},{label:"杨浦区",value:"310110"},{label:"闵行区",value:"310112"},{label:"宝山区",value:"310113"},{label:"嘉定区",value:"310114"},{label:"浦东新区",value:"310115"},{label:"金山区",value:"310116"},{label:"松江区",value:"310117"},{label:"青浦区",value:"310118"},{label:"奉贤区",value:"310120"},{label:"崇明区",value:"310151"}]],[[{label:"玄武区",value:"320102"},{label:"秦淮区",value:"320104"},{label:"建邺区",value:"320105"},{label:"鼓楼区",value:"320106"},{label:"浦口区",value:"320111"},{label:"栖霞区",value:"320113"},{label:"雨花台区",value:"320114"},{label:"江宁区",value:"320115"},{label:"六合区",value:"320116"},{label:"溧水区",value:"320117"},{label:"高淳区",value:"320118"}],[{label:"锡山区",value:"320205"},{label:"惠山区",value:"320206"},{label:"滨湖区",value:"320211"},{label:"梁溪区",value:"320213"},{label:"新吴区",value:"320214"},{label:"江阴市",value:"320281"},{label:"宜兴市",value:"320282"}],[{label:"鼓楼区",value:"320302"},{label:"云龙区",value:"320303"},{label:"贾汪区",value:"320305"},{label:"泉山区",value:"320311"},{label:"铜山区",value:"320312"},{label:"丰县",value:"320321"},{label:"沛县",value:"320322"},{label:"睢宁县",value:"320324"},{label:"徐州经济技术开发区",value:"320371"},{label:"新沂市",value:"320381"},{label:"邳州市",value:"320382"}],[{label:"天宁区",value:"320402"},{label:"钟楼区",value:"320404"},{label:"新北区",value:"320411"},{label:"武进区",value:"320412"},{label:"金坛区",value:"320413"},{label:"溧阳市",value:"320481"}],[{label:"虎丘区",value:"320505"},{label:"吴中区",value:"320506"},{label:"相城区",value:"320507"},{label:"姑苏区",value:"320508"},{label:"吴江区",value:"320509"},{label:"苏州工业园区",value:"320571"},{label:"常熟市",value:"320581"},{label:"张家港市",value:"320582"},{label:"昆山市",value:"320583"},{label:"太仓市",value:"320585"}],[{label:"崇川区",value:"320602"},{label:"港闸区",value:"320611"},{label:"通州区",value:"320612"},{label:"海安县",value:"320621"},{label:"如东县",value:"320623"},{label:"南通经济技术开发区",value:"320671"},{label:"启东市",value:"320681"},{label:"如皋市",value:"320682"},{label:"海门市",value:"320684"}],[{label:"连云区",value:"320703"},{label:"海州区",value:"320706"},{label:"赣榆区",value:"320707"},{label:"东海县",value:"320722"},{label:"灌云县",value:"320723"},{label:"灌南县",value:"320724"},{label:"连云港经济技术开发区",value:"320771"},{label:"连云港高新技术产业开发区",value:"320772"}],[{label:"淮安区",value:"320803"},{label:"淮阴区",value:"320804"},{label:"清江浦区",value:"320812"},{label:"洪泽区",value:"320813"},{label:"涟水县",value:"320826"},{label:"盱眙县",value:"320830"},{label:"金湖县",value:"320831"},{label:"淮安经济技术开发区",value:"320871"}],[{label:"亭湖区",value:"320902"},{label:"盐都区",value:"320903"},{label:"大丰区",value:"320904"},{label:"响水县",value:"320921"},{label:"滨海县",value:"320922"},{label:"阜宁县",value:"320923"},{label:"射阳县",value:"320924"},{label:"建湖县",value:"320925"},{label:"盐城经济技术开发区",value:"320971"},{label:"东台市",value:"320981"}],[{label:"广陵区",value:"321002"},{label:"邗江区",value:"321003"},{label:"江都区",value:"321012"},{label:"宝应县",value:"321023"},{label:"扬州经济技术开发区",value:"321071"},{label:"仪征市",value:"321081"},{label:"高邮市",value:"321084"}],[{label:"京口区",value:"321102"},{label:"润州区",value:"321111"},{label:"丹徒区",value:"321112"},{label:"镇江新区",value:"321171"},{label:"丹阳市",value:"321181"},{label:"扬中市",value:"321182"},{label:"句容市",value:"321183"}],[{label:"海陵区",value:"321202"},{label:"高港区",value:"321203"},{label:"姜堰区",value:"321204"},{label:"泰州医药高新技术产业开发区",value:"321271"},{label:"兴化市",value:"321281"},{label:"靖江市",value:"321282"},{label:"泰兴市",value:"321283"}],[{label:"宿城区",value:"321302"},{label:"宿豫区",value:"321311"},{label:"沭阳县",value:"321322"},{label:"泗阳县",value:"321323"},{label:"泗洪县",value:"321324"},{label:"宿迁经济技术开发区",value:"321371"}]],[[{label:"上城区",value:"330102"},{label:"下城区",value:"330103"},{label:"江干区",value:"330104"},{label:"拱墅区",value:"330105"},{label:"西湖区",value:"330106"},{label:"滨江区",value:"330108"},{label:"萧山区",value:"330109"},{label:"余杭区",value:"330110"},{label:"富阳区",value:"330111"},{label:"临安区",value:"330112"},{label:"桐庐县",value:"330122"},{label:"淳安县",value:"330127"},{label:"建德市",value:"330182"}],[{label:"海曙区",value:"330203"},{label:"江北区",value:"330205"},{label:"北仑区",value:"330206"},{label:"镇海区",value:"330211"},{label:"鄞州区",value:"330212"},{label:"奉化区",value:"330213"},{label:"象山县",value:"330225"},{label:"宁海县",value:"330226"},{label:"余姚市",value:"330281"},{label:"慈溪市",value:"330282"}],[{label:"鹿城区",value:"330302"},{label:"龙湾区",value:"330303"},{label:"瓯海区",value:"330304"},{label:"洞头区",value:"330305"},{label:"永嘉县",value:"330324"},{label:"平阳县",value:"330326"},{label:"苍南县",value:"330327"},{label:"文成县",value:"330328"},{label:"泰顺县",value:"330329"},{label:"温州经济技术开发区",value:"330371"},{label:"瑞安市",value:"330381"},{label:"乐清市",value:"330382"}],[{label:"南湖区",value:"330402"},{label:"秀洲区",value:"330411"},{label:"嘉善县",value:"330421"},{label:"海盐县",value:"330424"},{label:"海宁市",value:"330481"},{label:"平湖市",value:"330482"},{label:"桐乡市",value:"330483"}],[{label:"吴兴区",value:"330502"},{label:"南浔区",value:"330503"},{label:"德清县",value:"330521"},{label:"长兴县",value:"330522"},{label:"安吉县",value:"330523"}],[{label:"越城区",value:"330602"},{label:"柯桥区",value:"330603"},{label:"上虞区",value:"330604"},{label:"新昌县",value:"330624"},{label:"诸暨市",value:"330681"},{label:"嵊州市",value:"330683"}],[{label:"婺城区",value:"330702"},{label:"金东区",value:"330703"},{label:"武义县",value:"330723"},{label:"浦江县",value:"330726"},{label:"磐安县",value:"330727"},{label:"兰溪市",value:"330781"},{label:"义乌市",value:"330782"},{label:"东阳市",value:"330783"},{label:"永康市",value:"330784"}],[{label:"柯城区",value:"330802"},{label:"衢江区",value:"330803"},{label:"常山县",value:"330822"},{label:"开化县",value:"330824"},{label:"龙游县",value:"330825"},{label:"江山市",value:"330881"}],[{label:"定海区",value:"330902"},{label:"普陀区",value:"330903"},{label:"岱山县",value:"330921"},{label:"嵊泗县",value:"330922"}],[{label:"椒江区",value:"331002"},{label:"黄岩区",value:"331003"},{label:"路桥区",value:"331004"},{label:"三门县",value:"331022"},{label:"天台县",value:"331023"},{label:"仙居县",value:"331024"},{label:"温岭市",value:"331081"},{label:"临海市",value:"331082"},{label:"玉环市",value:"331083"}],[{label:"莲都区",value:"331102"},{label:"青田县",value:"331121"},{label:"缙云县",value:"331122"},{label:"遂昌县",value:"331123"},{label:"松阳县",value:"331124"},{label:"云和县",value:"331125"},{label:"庆元县",value:"331126"},{label:"景宁畲族自治县",value:"331127"},{label:"龙泉市",value:"331181"}]],[[{label:"瑶海区",value:"340102"},{label:"庐阳区",value:"340103"},{label:"蜀山区",value:"340104"},{label:"包河区",value:"340111"},{label:"长丰县",value:"340121"},{label:"肥东县",value:"340122"},{label:"肥西县",value:"340123"},{label:"庐江县",value:"340124"},{label:"合肥高新技术产业开发区",value:"340171"},{label:"合肥经济技术开发区",value:"340172"},{label:"合肥新站高新技术产业开发区",value:"340173"},{label:"巢湖市",value:"340181"}],[{label:"镜湖区",value:"340202"},{label:"弋江区",value:"340203"},{label:"鸠江区",value:"340207"},{label:"三山区",value:"340208"},{label:"芜湖县",value:"340221"},{label:"繁昌县",value:"340222"},{label:"南陵县",value:"340223"},{label:"无为县",value:"340225"},{label:"芜湖经济技术开发区",value:"340271"},{label:"安徽芜湖长江大桥经济开发区",value:"340272"}],[{label:"龙子湖区",value:"340302"},{label:"蚌山区",value:"340303"},{label:"禹会区",value:"340304"},{label:"淮上区",value:"340311"},{label:"怀远县",value:"340321"},{label:"五河县",value:"340322"},{label:"固镇县",value:"340323"},{label:"蚌埠市高新技术开发区",value:"340371"},{label:"蚌埠市经济开发区",value:"340372"}],[{label:"大通区",value:"340402"},{label:"田家庵区",value:"340403"},{label:"谢家集区",value:"340404"},{label:"八公山区",value:"340405"},{label:"潘集区",value:"340406"},{label:"凤台县",value:"340421"},{label:"寿县",value:"340422"}],[{label:"花山区",value:"340503"},{label:"雨山区",value:"340504"},{label:"博望区",value:"340506"},{label:"当涂县",value:"340521"},{label:"含山县",value:"340522"},{label:"和县",value:"340523"}],[{label:"杜集区",value:"340602"},{label:"相山区",value:"340603"},{label:"烈山区",value:"340604"},{label:"濉溪县",value:"340621"}],[{label:"铜官区",value:"340705"},{label:"义安区",value:"340706"},{label:"郊区",value:"340711"},{label:"枞阳县",value:"340722"}],[{label:"迎江区",value:"340802"},{label:"大观区",value:"340803"},{label:"宜秀区",value:"340811"},{label:"怀宁县",value:"340822"},{label:"潜山县",value:"340824"},{label:"太湖县",value:"340825"},{label:"宿松县",value:"340826"},{label:"望江县",value:"340827"},{label:"岳西县",value:"340828"},{label:"安徽安庆经济开发区",value:"340871"},{label:"桐城市",value:"340881"}],[{label:"屯溪区",value:"341002"},{label:"黄山区",value:"341003"},{label:"徽州区",value:"341004"},{label:"歙县",value:"341021"},{label:"休宁县",value:"341022"},{label:"黟县",value:"341023"},{label:"祁门县",value:"341024"}],[{label:"琅琊区",value:"341102"},{label:"南谯区",value:"341103"},{label:"来安县",value:"341122"},{label:"全椒县",value:"341124"},{label:"定远县",value:"341125"},{label:"凤阳县",value:"341126"},{label:"苏滁现代产业园",value:"341171"},{label:"滁州经济技术开发区",value:"341172"},{label:"天长市",value:"341181"},{label:"明光市",value:"341182"}],[{label:"颍州区",value:"341202"},{label:"颍东区",value:"341203"},{label:"颍泉区",value:"341204"},{label:"临泉县",value:"341221"},{label:"太和县",value:"341222"},{label:"阜南县",value:"341225"},{label:"颍上县",value:"341226"},{label:"阜阳合肥现代产业园区",value:"341271"},{label:"阜阳经济技术开发区",value:"341272"},{label:"界首市",value:"341282"}],[{label:"埇桥区",value:"341302"},{label:"砀山县",value:"341321"},{label:"萧县",value:"341322"},{label:"灵璧县",value:"341323"},{label:"泗县",value:"341324"},{label:"宿州马鞍山现代产业园区",value:"341371"},{label:"宿州经济技术开发区",value:"341372"}],[{label:"金安区",value:"341502"},{label:"裕安区",value:"341503"},{label:"叶集区",value:"341504"},{label:"霍邱县",value:"341522"},{label:"舒城县",value:"341523"},{label:"金寨县",value:"341524"},{label:"霍山县",value:"341525"}],[{label:"谯城区",value:"341602"},{label:"涡阳县",value:"341621"},{label:"蒙城县",value:"341622"},{label:"利辛县",value:"341623"}],[{label:"贵池区",value:"341702"},{label:"东至县",value:"341721"},{label:"石台县",value:"341722"},{label:"青阳县",value:"341723"}],[{label:"宣州区",value:"341802"},{label:"郎溪县",value:"341821"},{label:"广德县",value:"341822"},{label:"泾县",value:"341823"},{label:"绩溪县",value:"341824"},{label:"旌德县",value:"341825"},{label:"宣城市经济开发区",value:"341871"},{label:"宁国市",value:"341881"}]],[[{label:"鼓楼区",value:"350102"},{label:"台江区",value:"350103"},{label:"仓山区",value:"350104"},{label:"马尾区",value:"350105"},{label:"晋安区",value:"350111"},{label:"闽侯县",value:"350121"},{label:"连江县",value:"350122"},{label:"罗源县",value:"350123"},{label:"闽清县",value:"350124"},{label:"永泰县",value:"350125"},{label:"平潭县",value:"350128"},{label:"福清市",value:"350181"},{label:"长乐市",value:"350182"}],[{label:"思明区",value:"350203"},{label:"海沧区",value:"350205"},{label:"湖里区",value:"350206"},{label:"集美区",value:"350211"},{label:"同安区",value:"350212"},{label:"翔安区",value:"350213"}],[{label:"城厢区",value:"350302"},{label:"涵江区",value:"350303"},{label:"荔城区",value:"350304"},{label:"秀屿区",value:"350305"},{label:"仙游县",value:"350322"}],[{label:"梅列区",value:"350402"},{label:"三元区",value:"350403"},{label:"明溪县",value:"350421"},{label:"清流县",value:"350423"},{label:"宁化县",value:"350424"},{label:"大田县",value:"350425"},{label:"尤溪县",value:"350426"},{label:"沙县",value:"350427"},{label:"将乐县",value:"350428"},{label:"泰宁县",value:"350429"},{label:"建宁县",value:"350430"},{label:"永安市",value:"350481"}],[{label:"鲤城区",value:"350502"},{label:"丰泽区",value:"350503"},{label:"洛江区",value:"350504"},{label:"泉港区",value:"350505"},{label:"惠安县",value:"350521"},{label:"安溪县",value:"350524"},{label:"永春县",value:"350525"},{label:"德化县",value:"350526"},{label:"金门县",value:"350527"},{label:"石狮市",value:"350581"},{label:"晋江市",value:"350582"},{label:"南安市",value:"350583"}],[{label:"芗城区",value:"350602"},{label:"龙文区",value:"350603"},{label:"云霄县",value:"350622"},{label:"漳浦县",value:"350623"},{label:"诏安县",value:"350624"},{label:"长泰县",value:"350625"},{label:"东山县",value:"350626"},{label:"南靖县",value:"350627"},{label:"平和县",value:"350628"},{label:"华安县",value:"350629"},{label:"龙海市",value:"350681"}],[{label:"延平区",value:"350702"},{label:"建阳区",value:"350703"},{label:"顺昌县",value:"350721"},{label:"浦城县",value:"350722"},{label:"光泽县",value:"350723"},{label:"松溪县",value:"350724"},{label:"政和县",value:"350725"},{label:"邵武市",value:"350781"},{label:"武夷山市",value:"350782"},{label:"建瓯市",value:"350783"}],[{label:"新罗区",value:"350802"},{label:"永定区",value:"350803"},{label:"长汀县",value:"350821"},{label:"上杭县",value:"350823"},{label:"武平县",value:"350824"},{label:"连城县",value:"350825"},{label:"漳平市",value:"350881"}],[{label:"蕉城区",value:"350902"},{label:"霞浦县",value:"350921"},{label:"古田县",value:"350922"},{label:"屏南县",value:"350923"},{label:"寿宁县",value:"350924"},{label:"周宁县",value:"350925"},{label:"柘荣县",value:"350926"},{label:"福安市",value:"350981"},{label:"福鼎市",value:"350982"}]],[[{label:"东湖区",value:"360102"},{label:"西湖区",value:"360103"},{label:"青云谱区",value:"360104"},{label:"湾里区",value:"360105"},{label:"青山湖区",value:"360111"},{label:"新建区",value:"360112"},{label:"南昌县",value:"360121"},{label:"安义县",value:"360123"},{label:"进贤县",value:"360124"}],[{label:"昌江区",value:"360202"},{label:"珠山区",value:"360203"},{label:"浮梁县",value:"360222"},{label:"乐平市",value:"360281"}],[{label:"安源区",value:"360302"},{label:"湘东区",value:"360313"},{label:"莲花县",value:"360321"},{label:"上栗县",value:"360322"},{label:"芦溪县",value:"360323"}],[{label:"濂溪区",value:"360402"},{label:"浔阳区",value:"360403"},{label:"柴桑区",value:"360404"},{label:"武宁县",value:"360423"},{label:"修水县",value:"360424"},{label:"永修县",value:"360425"},{label:"德安县",value:"360426"},{label:"都昌县",value:"360428"},{label:"湖口县",value:"360429"},{label:"彭泽县",value:"360430"},{label:"瑞昌市",value:"360481"},{label:"共青城市",value:"360482"},{label:"庐山市",value:"360483"}],[{label:"渝水区",value:"360502"},{label:"分宜县",value:"360521"}],[{label:"月湖区",value:"360602"},{label:"余江县",value:"360622"},{label:"贵溪市",value:"360681"}],[{label:"章贡区",value:"360702"},{label:"南康区",value:"360703"},{label:"赣县区",value:"360704"},{label:"信丰县",value:"360722"},{label:"大余县",value:"360723"},{label:"上犹县",value:"360724"},{label:"崇义县",value:"360725"},{label:"安远县",value:"360726"},{label:"龙南县",value:"360727"},{label:"定南县",value:"360728"},{label:"全南县",value:"360729"},{label:"宁都县",value:"360730"},{label:"于都县",value:"360731"},{label:"兴国县",value:"360732"},{label:"会昌县",value:"360733"},{label:"寻乌县",value:"360734"},{label:"石城县",value:"360735"},{label:"瑞金市",value:"360781"}],[{label:"吉州区",value:"360802"},{label:"青原区",value:"360803"},{label:"吉安县",value:"360821"},{label:"吉水县",value:"360822"},{label:"峡江县",value:"360823"},{label:"新干县",value:"360824"},{label:"永丰县",value:"360825"},{label:"泰和县",value:"360826"},{label:"遂川县",value:"360827"},{label:"万安县",value:"360828"},{label:"安福县",value:"360829"},{label:"永新县",value:"360830"},{label:"井冈山市",value:"360881"}],[{label:"袁州区",value:"360902"},{label:"奉新县",value:"360921"},{label:"万载县",value:"360922"},{label:"上高县",value:"360923"},{label:"宜丰县",value:"360924"},{label:"靖安县",value:"360925"},{label:"铜鼓县",value:"360926"},{label:"丰城市",value:"360981"},{label:"樟树市",value:"360982"},{label:"高安市",value:"360983"}],[{label:"临川区",value:"361002"},{label:"东乡区",value:"361003"},{label:"南城县",value:"361021"},{label:"黎川县",value:"361022"},{label:"南丰县",value:"361023"},{label:"崇仁县",value:"361024"},{label:"乐安县",value:"361025"},{label:"宜黄县",value:"361026"},{label:"金溪县",value:"361027"},{label:"资溪县",value:"361028"},{label:"广昌县",value:"361030"}],[{label:"信州区",value:"361102"},{label:"广丰区",value:"361103"},{label:"上饶县",value:"361121"},{label:"玉山县",value:"361123"},{label:"铅山县",value:"361124"},{label:"横峰县",value:"361125"},{label:"弋阳县",value:"361126"},{label:"余干县",value:"361127"},{label:"鄱阳县",value:"361128"},{label:"万年县",value:"361129"},{label:"婺源县",value:"361130"},{label:"德兴市",value:"361181"}]],[[{label:"历下区",value:"370102"},{label:"市中区",value:"370103"},{label:"槐荫区",value:"370104"},{label:"天桥区",value:"370105"},{label:"历城区",value:"370112"},{label:"长清区",value:"370113"},{label:"章丘区",value:"370114"},{label:"平阴县",value:"370124"},{label:"济阳县",value:"370125"},{label:"商河县",value:"370126"},{label:"济南高新技术产业开发区",value:"370171"}],[{label:"市南区",value:"370202"},{label:"市北区",value:"370203"},{label:"黄岛区",value:"370211"},{label:"崂山区",value:"370212"},{label:"李沧区",value:"370213"},{label:"城阳区",value:"370214"},{label:"即墨区",value:"370215"},{label:"青岛高新技术产业开发区",value:"370271"},{label:"胶州市",value:"370281"},{label:"平度市",value:"370283"},{label:"莱西市",value:"370285"}],[{label:"淄川区",value:"370302"},{label:"张店区",value:"370303"},{label:"博山区",value:"370304"},{label:"临淄区",value:"370305"},{label:"周村区",value:"370306"},{label:"桓台县",value:"370321"},{label:"高青县",value:"370322"},{label:"沂源县",value:"370323"}],[{label:"市中区",value:"370402"},{label:"薛城区",value:"370403"},{label:"峄城区",value:"370404"},{label:"台儿庄区",value:"370405"},{label:"山亭区",value:"370406"},{label:"滕州市",value:"370481"}],[{label:"东营区",value:"370502"},{label:"河口区",value:"370503"},{label:"垦利区",value:"370505"},{label:"利津县",value:"370522"},{label:"广饶县",value:"370523"},{label:"东营经济技术开发区",value:"370571"},{label:"东营港经济开发区",value:"370572"}],[{label:"芝罘区",value:"370602"},{label:"福山区",value:"370611"},{label:"牟平区",value:"370612"},{label:"莱山区",value:"370613"},{label:"长岛县",value:"370634"},{label:"烟台高新技术产业开发区",value:"370671"},{label:"烟台经济技术开发区",value:"370672"},{label:"龙口市",value:"370681"},{label:"莱阳市",value:"370682"},{label:"莱州市",value:"370683"},{label:"蓬莱市",value:"370684"},{label:"招远市",value:"370685"},{label:"栖霞市",value:"370686"},{label:"海阳市",value:"370687"}],[{label:"潍城区",value:"370702"},{label:"寒亭区",value:"370703"},{label:"坊子区",value:"370704"},{label:"奎文区",value:"370705"},{label:"临朐县",value:"370724"},{label:"昌乐县",value:"370725"},{label:"潍坊滨海经济技术开发区",value:"370772"},{label:"青州市",value:"370781"},{label:"诸城市",value:"370782"},{label:"寿光市",value:"370783"},{label:"安丘市",value:"370784"},{label:"高密市",value:"370785"},{label:"昌邑市",value:"370786"}],[{label:"任城区",value:"370811"},{label:"兖州区",value:"370812"},{label:"微山县",value:"370826"},{label:"鱼台县",value:"370827"},{label:"金乡县",value:"370828"},{label:"嘉祥县",value:"370829"},{label:"汶上县",value:"370830"},{label:"泗水县",value:"370831"},{label:"梁山县",value:"370832"},{label:"济宁高新技术产业开发区",value:"370871"},{label:"曲阜市",value:"370881"},{label:"邹城市",value:"370883"}],[{label:"泰山区",value:"370902"},{label:"岱岳区",value:"370911"},{label:"宁阳县",value:"370921"},{label:"东平县",value:"370923"},{label:"新泰市",value:"370982"},{label:"肥城市",value:"370983"}],[{label:"环翠区",value:"371002"},{label:"文登区",value:"371003"},{label:"威海火炬高技术产业开发区",value:"371071"},{label:"威海经济技术开发区",value:"371072"},{label:"威海临港经济技术开发区",value:"371073"},{label:"荣成市",value:"371082"},{label:"乳山市",value:"371083"}],[{label:"东港区",value:"371102"},{label:"岚山区",value:"371103"},{label:"五莲县",value:"371121"},{label:"莒县",value:"371122"},{label:"日照经济技术开发区",value:"371171"},{label:"日照国际海洋城",value:"371172"}],[{label:"莱城区",value:"371202"},{label:"钢城区",value:"371203"}],[{label:"兰山区",value:"371302"},{label:"罗庄区",value:"371311"},{label:"河东区",value:"371312"},{label:"沂南县",value:"371321"},{label:"郯城县",value:"371322"},{label:"沂水县",value:"371323"},{label:"兰陵县",value:"371324"},{label:"费县",value:"371325"},{label:"平邑县",value:"371326"},{label:"莒南县",value:"371327"},{label:"蒙阴县",value:"371328"},{label:"临沭县",value:"371329"},{label:"临沂高新技术产业开发区",value:"371371"},{label:"临沂经济技术开发区",value:"371372"},{label:"临沂临港经济开发区",value:"371373"}],[{label:"德城区",value:"371402"},{label:"陵城区",value:"371403"},{label:"宁津县",value:"371422"},{label:"庆云县",value:"371423"},{label:"临邑县",value:"371424"},{label:"齐河县",value:"371425"},{label:"平原县",value:"371426"},{label:"夏津县",value:"371427"},{label:"武城县",value:"371428"},{label:"德州经济技术开发区",value:"371471"},{label:"德州运河经济开发区",value:"371472"},{label:"乐陵市",value:"371481"},{label:"禹城市",value:"371482"}],[{label:"东昌府区",value:"371502"},{label:"阳谷县",value:"371521"},{label:"莘县",value:"371522"},{label:"茌平县",value:"371523"},{label:"东阿县",value:"371524"},{label:"冠县",value:"371525"},{label:"高唐县",value:"371526"},{label:"临清市",value:"371581"}],[{label:"滨城区",value:"371602"},{label:"沾化区",value:"371603"},{label:"惠民县",value:"371621"},{label:"阳信县",value:"371622"},{label:"无棣县",value:"371623"},{label:"博兴县",value:"371625"},{label:"邹平县",value:"371626"}],[{label:"牡丹区",value:"371702"},{label:"定陶区",value:"371703"},{label:"曹县",value:"371721"},{label:"单县",value:"371722"},{label:"成武县",value:"371723"},{label:"巨野县",value:"371724"},{label:"郓城县",value:"371725"},{label:"鄄城县",value:"371726"},{label:"东明县",value:"371728"},{label:"菏泽经济技术开发区",value:"371771"},{label:"菏泽高新技术开发区",value:"371772"}]],[[{label:"中原区",value:"410102"},{label:"二七区",value:"410103"},{label:"管城回族区",value:"410104"},{label:"金水区",value:"410105"},{label:"上街区",value:"410106"},{label:"惠济区",value:"410108"},{label:"中牟县",value:"410122"},{label:"郑州经济技术开发区",value:"410171"},{label:"郑州高新技术产业开发区",value:"410172"},{label:"郑州航空港经济综合实验区",value:"410173"},{label:"巩义市",value:"410181"},{label:"荥阳市",value:"410182"},{label:"新密市",value:"410183"},{label:"新郑市",value:"410184"},{label:"登封市",value:"410185"}],[{label:"龙亭区",value:"410202"},{label:"顺河回族区",value:"410203"},{label:"鼓楼区",value:"410204"},{label:"禹王台区",value:"410205"},{label:"祥符区",value:"410212"},{label:"杞县",value:"410221"},{label:"通许县",value:"410222"},{label:"尉氏县",value:"410223"},{label:"兰考县",value:"410225"}],[{label:"老城区",value:"410302"},{label:"西工区",value:"410303"},{label:"瀍河回族区",value:"410304"},{label:"涧西区",value:"410305"},{label:"吉利区",value:"410306"},{label:"洛龙区",value:"410311"},{label:"孟津县",value:"410322"},{label:"新安县",value:"410323"},{label:"栾川县",value:"410324"},{label:"嵩县",value:"410325"},{label:"汝阳县",value:"410326"},{label:"宜阳县",value:"410327"},{label:"洛宁县",value:"410328"},{label:"伊川县",value:"410329"},{label:"洛阳高新技术产业开发区",value:"410371"},{label:"偃师市",value:"410381"}],[{label:"新华区",value:"410402"},{label:"卫东区",value:"410403"},{label:"石龙区",value:"410404"},{label:"湛河区",value:"410411"},{label:"宝丰县",value:"410421"},{label:"叶县",value:"410422"},{label:"鲁山县",value:"410423"},{label:"郏县",value:"410425"},{label:"平顶山高新技术产业开发区",value:"410471"},{label:"平顶山市新城区",value:"410472"},{label:"舞钢市",value:"410481"},{label:"汝州市",value:"410482"}],[{label:"文峰区",value:"410502"},{label:"北关区",value:"410503"},{label:"殷都区",value:"410505"},{label:"龙安区",value:"410506"},{label:"安阳县",value:"410522"},{label:"汤阴县",value:"410523"},{label:"滑县",value:"410526"},{label:"内黄县",value:"410527"},{label:"安阳高新技术产业开发区",value:"410571"},{label:"林州市",value:"410581"}],[{label:"鹤山区",value:"410602"},{label:"山城区",value:"410603"},{label:"淇滨区",value:"410611"},{label:"浚县",value:"410621"},{label:"淇县",value:"410622"},{label:"鹤壁经济技术开发区",value:"410671"}],[{label:"红旗区",value:"410702"},{label:"卫滨区",value:"410703"},{label:"凤泉区",value:"410704"},{label:"牧野区",value:"410711"},{label:"新乡县",value:"410721"},{label:"获嘉县",value:"410724"},{label:"原阳县",value:"410725"},{label:"延津县",value:"410726"},{label:"封丘县",value:"410727"},{label:"长垣县",value:"410728"},{label:"新乡高新技术产业开发区",value:"410771"},{label:"新乡经济技术开发区",value:"410772"},{label:"新乡市平原城乡一体化示范区",value:"410773"},{label:"卫辉市",value:"410781"},{label:"辉县市",value:"410782"}],[{label:"解放区",value:"410802"},{label:"中站区",value:"410803"},{label:"马村区",value:"410804"},{label:"山阳区",value:"410811"},{label:"修武县",value:"410821"},{label:"博爱县",value:"410822"},{label:"武陟县",value:"410823"},{label:"温县",value:"410825"},{label:"焦作城乡一体化示范区",value:"410871"},{label:"沁阳市",value:"410882"},{label:"孟州市",value:"410883"}],[{label:"华龙区",value:"410902"},{label:"清丰县",value:"410922"},{label:"南乐县",value:"410923"},{label:"范县",value:"410926"},{label:"台前县",value:"410927"},{label:"濮阳县",value:"410928"},{label:"河南濮阳工业园区",value:"410971"},{label:"濮阳经济技术开发区",value:"410972"}],[{label:"魏都区",value:"411002"},{label:"建安区",value:"411003"},{label:"鄢陵县",value:"411024"},{label:"襄城县",value:"411025"},{label:"许昌经济技术开发区",value:"411071"},{label:"禹州市",value:"411081"},{label:"长葛市",value:"411082"}],[{label:"源汇区",value:"411102"},{label:"郾城区",value:"411103"},{label:"召陵区",value:"411104"},{label:"舞阳县",value:"411121"},{label:"临颍县",value:"411122"},{label:"漯河经济技术开发区",value:"411171"}],[{label:"湖滨区",value:"411202"},{label:"陕州区",value:"411203"},{label:"渑池县",value:"411221"},{label:"卢氏县",value:"411224"},{label:"河南三门峡经济开发区",value:"411271"},{label:"义马市",value:"411281"},{label:"灵宝市",value:"411282"}],[{label:"宛城区",value:"411302"},{label:"卧龙区",value:"411303"},{label:"南召县",value:"411321"},{label:"方城县",value:"411322"},{label:"西峡县",value:"411323"},{label:"镇平县",value:"411324"},{label:"内乡县",value:"411325"},{label:"淅川县",value:"411326"},{label:"社旗县",value:"411327"},{label:"唐河县",value:"411328"},{label:"新野县",value:"411329"},{label:"桐柏县",value:"411330"},{label:"南阳高新技术产业开发区",value:"411371"},{label:"南阳市城乡一体化示范区",value:"411372"},{label:"邓州市",value:"411381"}],[{label:"梁园区",value:"411402"},{label:"睢阳区",value:"411403"},{label:"民权县",value:"411421"},{label:"睢县",value:"411422"},{label:"宁陵县",value:"411423"},{label:"柘城县",value:"411424"},{label:"虞城县",value:"411425"},{label:"夏邑县",value:"411426"},{label:"豫东综合物流产业聚集区",value:"411471"},{label:"河南商丘经济开发区",value:"411472"},{label:"永城市",value:"411481"}],[{label:"浉河区",value:"411502"},{label:"平桥区",value:"411503"},{label:"罗山县",value:"411521"},{label:"光山县",value:"411522"},{label:"新县",value:"411523"},{label:"商城县",value:"411524"},{label:"固始县",value:"411525"},{label:"潢川县",value:"411526"},{label:"淮滨县",value:"411527"},{label:"息县",value:"411528"},{label:"信阳高新技术产业开发区",value:"411571"}],[{label:"川汇区",value:"411602"},{label:"扶沟县",value:"411621"},{label:"西华县",value:"411622"},{label:"商水县",value:"411623"},{label:"沈丘县",value:"411624"},{label:"郸城县",value:"411625"},{label:"淮阳县",value:"411626"},{label:"太康县",value:"411627"},{label:"鹿邑县",value:"411628"},{label:"河南周口经济开发区",value:"411671"},{label:"项城市",value:"411681"}],[{label:"驿城区",value:"411702"},{label:"西平县",value:"411721"},{label:"上蔡县",value:"411722"},{label:"平舆县",value:"411723"},{label:"正阳县",value:"411724"},{label:"确山县",value:"411725"},{label:"泌阳县",value:"411726"},{label:"汝南县",value:"411727"},{label:"遂平县",value:"411728"},{label:"新蔡县",value:"411729"},{label:"河南驻马店经济开发区",value:"411771"}],[{label:"济源市",value:"419001"}]],[[{label:"江岸区",value:"420102"},{label:"江汉区",value:"420103"},{label:"硚口区",value:"420104"},{label:"汉阳区",value:"420105"},{label:"武昌区",value:"420106"},{label:"青山区",value:"420107"},{label:"洪山区",value:"420111"},{label:"东西湖区",value:"420112"},{label:"汉南区",value:"420113"},{label:"蔡甸区",value:"420114"},{label:"江夏区",value:"420115"},{label:"黄陂区",value:"420116"},{label:"新洲区",value:"420117"}],[{label:"黄石港区",value:"420202"},{label:"西塞山区",value:"420203"},{label:"下陆区",value:"420204"},{label:"铁山区",value:"420205"},{label:"阳新县",value:"420222"},{label:"大冶市",value:"420281"}],[{label:"茅箭区",value:"420302"},{label:"张湾区",value:"420303"},{label:"郧阳区",value:"420304"},{label:"郧西县",value:"420322"},{label:"竹山县",value:"420323"},{label:"竹溪县",value:"420324"},{label:"房县",value:"420325"},{label:"丹江口市",value:"420381"}],[{label:"西陵区",value:"420502"},{label:"伍家岗区",value:"420503"},{label:"点军区",value:"420504"},{label:"猇亭区",value:"420505"},{label:"夷陵区",value:"420506"},{label:"远安县",value:"420525"},{label:"兴山县",value:"420526"},{label:"秭归县",value:"420527"},{label:"长阳土家族自治县",value:"420528"},{label:"五峰土家族自治县",value:"420529"},{label:"宜都市",value:"420581"},{label:"当阳市",value:"420582"},{label:"枝江市",value:"420583"}],[{label:"襄城区",value:"420602"},{label:"樊城区",value:"420606"},{label:"襄州区",value:"420607"},{label:"南漳县",value:"420624"},{label:"谷城县",value:"420625"},{label:"保康县",value:"420626"},{label:"老河口市",value:"420682"},{label:"枣阳市",value:"420683"},{label:"宜城市",value:"420684"}],[{label:"梁子湖区",value:"420702"},{label:"华容区",value:"420703"},{label:"鄂城区",value:"420704"}],[{label:"东宝区",value:"420802"},{label:"掇刀区",value:"420804"},{label:"京山县",value:"420821"},{label:"沙洋县",value:"420822"},{label:"钟祥市",value:"420881"}],[{label:"孝南区",value:"420902"},{label:"孝昌县",value:"420921"},{label:"大悟县",value:"420922"},{label:"云梦县",value:"420923"},{label:"应城市",value:"420981"},{label:"安陆市",value:"420982"},{label:"汉川市",value:"420984"}],[{label:"沙市区",value:"421002"},{label:"荆州区",value:"421003"},{label:"公安县",value:"421022"},{label:"监利县",value:"421023"},{label:"江陵县",value:"421024"},{label:"荆州经济技术开发区",value:"421071"},{label:"石首市",value:"421081"},{label:"洪湖市",value:"421083"},{label:"松滋市",value:"421087"}],[{label:"黄州区",value:"421102"},{label:"团风县",value:"421121"},{label:"红安县",value:"421122"},{label:"罗田县",value:"421123"},{label:"英山县",value:"421124"},{label:"浠水县",value:"421125"},{label:"蕲春县",value:"421126"},{label:"黄梅县",value:"421127"},{label:"龙感湖管理区",value:"421171"},{label:"麻城市",value:"421181"},{label:"武穴市",value:"421182"}],[{label:"咸安区",value:"421202"},{label:"嘉鱼县",value:"421221"},{label:"通城县",value:"421222"},{label:"崇阳县",value:"421223"},{label:"通山县",value:"421224"},{label:"赤壁市",value:"421281"}],[{label:"曾都区",value:"421303"},{label:"随县",value:"421321"},{label:"广水市",value:"421381"}],[{label:"恩施市",value:"422801"},{label:"利川市",value:"422802"},{label:"建始县",value:"422822"},{label:"巴东县",value:"422823"},{label:"宣恩县",value:"422825"},{label:"咸丰县",value:"422826"},{label:"来凤县",value:"422827"},{label:"鹤峰县",value:"422828"}],[{label:"仙桃市",value:"429004"},{label:"潜江市",value:"429005"},{label:"天门市",value:"429006"},{label:"神农架林区",value:"429021"}]],[[{label:"芙蓉区",value:"430102"},{label:"天心区",value:"430103"},{label:"岳麓区",value:"430104"},{label:"开福区",value:"430105"},{label:"雨花区",value:"430111"},{label:"望城区",value:"430112"},{label:"长沙县",value:"430121"},{label:"浏阳市",value:"430181"},{label:"宁乡市",value:"430182"}],[{label:"荷塘区",value:"430202"},{label:"芦淞区",value:"430203"},{label:"石峰区",value:"430204"},{label:"天元区",value:"430211"},{label:"株洲县",value:"430221"},{label:"攸县",value:"430223"},{label:"茶陵县",value:"430224"},{label:"炎陵县",value:"430225"},{label:"云龙示范区",value:"430271"},{label:"醴陵市",value:"430281"}],[{label:"雨湖区",value:"430302"},{label:"岳塘区",value:"430304"},{label:"湘潭县",value:"430321"},{label:"湖南湘潭高新技术产业园区",value:"430371"},{label:"湘潭昭山示范区",value:"430372"},{label:"湘潭九华示范区",value:"430373"},{label:"湘乡市",value:"430381"},{label:"韶山市",value:"430382"}],[{label:"珠晖区",value:"430405"},{label:"雁峰区",value:"430406"},{label:"石鼓区",value:"430407"},{label:"蒸湘区",value:"430408"},{label:"南岳区",value:"430412"},{label:"衡阳县",value:"430421"},{label:"衡南县",value:"430422"},{label:"衡山县",value:"430423"},{label:"衡东县",value:"430424"},{label:"祁东县",value:"430426"},{label:"衡阳综合保税区",value:"430471"},{label:"湖南衡阳高新技术产业园区",value:"430472"},{label:"湖南衡阳松木经济开发区",value:"430473"},{label:"耒阳市",value:"430481"},{label:"常宁市",value:"430482"}],[{label:"双清区",value:"430502"},{label:"大祥区",value:"430503"},{label:"北塔区",value:"430511"},{label:"邵东县",value:"430521"},{label:"新邵县",value:"430522"},{label:"邵阳县",value:"430523"},{label:"隆回县",value:"430524"},{label:"洞口县",value:"430525"},{label:"绥宁县",value:"430527"},{label:"新宁县",value:"430528"},{label:"城步苗族自治县",value:"430529"},{label:"武冈市",value:"430581"}],[{label:"岳阳楼区",value:"430602"},{label:"云溪区",value:"430603"},{label:"君山区",value:"430611"},{label:"岳阳县",value:"430621"},{label:"华容县",value:"430623"},{label:"湘阴县",value:"430624"},{label:"平江县",value:"430626"},{label:"岳阳市屈原管理区",value:"430671"},{label:"汨罗市",value:"430681"},{label:"临湘市",value:"430682"}],[{label:"武陵区",value:"430702"},{label:"鼎城区",value:"430703"},{label:"安乡县",value:"430721"},{label:"汉寿县",value:"430722"},{label:"澧县",value:"430723"},{label:"临澧县",value:"430724"},{label:"桃源县",value:"430725"},{label:"石门县",value:"430726"},{label:"常德市西洞庭管理区",value:"430771"},{label:"津市市",value:"430781"}],[{label:"永定区",value:"430802"},{label:"武陵源区",value:"430811"},{label:"慈利县",value:"430821"},{label:"桑植县",value:"430822"}],[{label:"资阳区",value:"430902"},{label:"赫山区",value:"430903"},{label:"南县",value:"430921"},{label:"桃江县",value:"430922"},{label:"安化县",value:"430923"},{label:"益阳市大通湖管理区",value:"430971"},{label:"湖南益阳高新技术产业园区",value:"430972"},{label:"沅江市",value:"430981"}],[{label:"北湖区",value:"431002"},{label:"苏仙区",value:"431003"},{label:"桂阳县",value:"431021"},{label:"宜章县",value:"431022"},{label:"永兴县",value:"431023"},{label:"嘉禾县",value:"431024"},{label:"临武县",value:"431025"},{label:"汝城县",value:"431026"},{label:"桂东县",value:"431027"},{label:"安仁县",value:"431028"},{label:"资兴市",value:"431081"}],[{label:"零陵区",value:"431102"},{label:"冷水滩区",value:"431103"},{label:"祁阳县",value:"431121"},{label:"东安县",value:"431122"},{label:"双牌县",value:"431123"},{label:"道县",value:"431124"},{label:"江永县",value:"431125"},{label:"宁远县",value:"431126"},{label:"蓝山县",value:"431127"},{label:"新田县",value:"431128"},{label:"江华瑶族自治县",value:"431129"},{label:"永州经济技术开发区",value:"431171"},{label:"永州市金洞管理区",value:"431172"},{label:"永州市回龙圩管理区",value:"431173"}],[{label:"鹤城区",value:"431202"},{label:"中方县",value:"431221"},{label:"沅陵县",value:"431222"},{label:"辰溪县",value:"431223"},{label:"溆浦县",value:"431224"},{label:"会同县",value:"431225"},{label:"麻阳苗族自治县",value:"431226"},{label:"新晃侗族自治县",value:"431227"},{label:"芷江侗族自治县",value:"431228"},{label:"靖州苗族侗族自治县",value:"431229"},{label:"通道侗族自治县",value:"431230"},{label:"怀化市洪江管理区",value:"431271"},{label:"洪江市",value:"431281"}],[{label:"娄星区",value:"431302"},{label:"双峰县",value:"431321"},{label:"新化县",value:"431322"},{label:"冷水江市",value:"431381"},{label:"涟源市",value:"431382"}],[{label:"吉首市",value:"433101"},{label:"泸溪县",value:"433122"},{label:"凤凰县",value:"433123"},{label:"花垣县",value:"433124"},{label:"保靖县",value:"433125"},{label:"古丈县",value:"433126"},{label:"永顺县",value:"433127"},{label:"龙山县",value:"433130"},{label:"湖南吉首经济开发区",value:"433172"},{label:"湖南永顺经济开发区",value:"433173"}]],[[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"},{label:"天河区",value:"440106"},{label:"白云区",value:"440111"},{label:"黄埔区",value:"440112"},{label:"番禺区",value:"440113"},{label:"花都区",value:"440114"},{label:"南沙区",value:"440115"},{label:"从化区",value:"440117"},{label:"增城区",value:"440118"}],[{label:"武江区",value:"440203"},{label:"浈江区",value:"440204"},{label:"曲江区",value:"440205"},{label:"始兴县",value:"440222"},{label:"仁化县",value:"440224"},{label:"翁源县",value:"440229"},{label:"乳源瑶族自治县",value:"440232"},{label:"新丰县",value:"440233"},{label:"乐昌市",value:"440281"},{label:"南雄市",value:"440282"}],[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"},{label:"南山区",value:"440305"},{label:"宝安区",value:"440306"},{label:"龙岗区",value:"440307"},{label:"盐田区",value:"440308"},{label:"龙华区",value:"440309"},{label:"坪山区",value:"440310"}],[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"},{label:"濠江区",value:"440512"},{label:"潮阳区",value:"440513"},{label:"潮南区",value:"440514"},{label:"澄海区",value:"440515"},{label:"南澳县",value:"440523"}],[{label:"禅城区",value:"440604"},{label:"南海区",value:"440605"},{label:"顺德区",value:"440606"},{label:"三水区",value:"440607"},{label:"高明区",value:"440608"}],[{label:"蓬江区",value:"440703"},{label:"江海区",value:"440704"},{label:"新会区",value:"440705"},{label:"台山市",value:"440781"},{label:"开平市",value:"440783"},{label:"鹤山市",value:"440784"},{label:"恩平市",value:"440785"}],[{label:"赤坎区",value:"440802"},{label:"霞山区",value:"440803"},{label:"坡头区",value:"440804"},{label:"麻章区",value:"440811"},{label:"遂溪县",value:"440823"},{label:"徐闻县",value:"440825"},{label:"廉江市",value:"440881"},{label:"雷州市",value:"440882"},{label:"吴川市",value:"440883"}],[{label:"茂南区",value:"440902"},{label:"电白区",value:"440904"},{label:"高州市",value:"440981"},{label:"化州市",value:"440982"},{label:"信宜市",value:"440983"}],[{label:"端州区",value:"441202"},{label:"鼎湖区",value:"441203"},{label:"高要区",value:"441204"},{label:"广宁县",value:"441223"},{label:"怀集县",value:"441224"},{label:"封开县",value:"441225"},{label:"德庆县",value:"441226"},{label:"四会市",value:"441284"}],[{label:"惠城区",value:"441302"},{label:"惠阳区",value:"441303"},{label:"博罗县",value:"441322"},{label:"惠东县",value:"441323"},{label:"龙门县",value:"441324"}],[{label:"梅江区",value:"441402"},{label:"梅县区",value:"441403"},{label:"大埔县",value:"441422"},{label:"丰顺县",value:"441423"},{label:"五华县",value:"441424"},{label:"平远县",value:"441426"},{label:"蕉岭县",value:"441427"},{label:"兴宁市",value:"441481"}],[{label:"城区",value:"441502"},{label:"海丰县",value:"441521"},{label:"陆河县",value:"441523"},{label:"陆丰市",value:"441581"}],[{label:"源城区",value:"441602"},{label:"紫金县",value:"441621"},{label:"龙川县",value:"441622"},{label:"连平县",value:"441623"},{label:"和平县",value:"441624"},{label:"东源县",value:"441625"}],[{label:"江城区",value:"441702"},{label:"阳东区",value:"441704"},{label:"阳西县",value:"441721"},{label:"阳春市",value:"441781"}],[{label:"清城区",value:"441802"},{label:"清新区",value:"441803"},{label:"佛冈县",value:"441821"},{label:"阳山县",value:"441823"},{label:"连山壮族瑶族自治县",value:"441825"},{label:"连南瑶族自治县",value:"441826"},{label:"英德市",value:"441881"},{label:"连州市",value:"441882"}],[{label:"东莞市",value:"441900"}],[{label:"中山市",value:"442000"}],[{label:"湘桥区",value:"445102"},{label:"潮安区",value:"445103"},{label:"饶平县",value:"445122"}],[{label:"榕城区",value:"445202"},{label:"揭东区",value:"445203"},{label:"揭西县",value:"445222"},{label:"惠来县",value:"445224"},{label:"普宁市",value:"445281"}],[{label:"云城区",value:"445302"},{label:"云安区",value:"445303"},{label:"新兴县",value:"445321"},{label:"郁南县",value:"445322"},{label:"罗定市",value:"445381"}]],[[{label:"兴宁区",value:"450102"},{label:"青秀区",value:"450103"},{label:"江南区",value:"450105"},{label:"西乡塘区",value:"450107"},{label:"良庆区",value:"450108"},{label:"邕宁区",value:"450109"},{label:"武鸣区",value:"450110"},{label:"隆安县",value:"450123"},{label:"马山县",value:"450124"},{label:"上林县",value:"450125"},{label:"宾阳县",value:"450126"},{label:"横县",value:"450127"}],[{label:"城中区",value:"450202"},{label:"鱼峰区",value:"450203"},{label:"柳南区",value:"450204"},{label:"柳北区",value:"450205"},{label:"柳江区",value:"450206"},{label:"柳城县",value:"450222"},{label:"鹿寨县",value:"450223"},{label:"融安县",value:"450224"},{label:"融水苗族自治县",value:"450225"},{label:"三江侗族自治县",value:"450226"}],[{label:"秀峰区",value:"450302"},{label:"叠彩区",value:"450303"},{label:"象山区",value:"450304"},{label:"七星区",value:"450305"},{label:"雁山区",value:"450311"},{label:"临桂区",value:"450312"},{label:"阳朔县",value:"450321"},{label:"灵川县",value:"450323"},{label:"全州县",value:"450324"},{label:"兴安县",value:"450325"},{label:"永福县",value:"450326"},{label:"灌阳县",value:"450327"},{label:"龙胜各族自治县",value:"450328"},{label:"资源县",value:"450329"},{label:"平乐县",value:"450330"},{label:"荔浦县",value:"450331"},{label:"恭城瑶族自治县",value:"450332"}],[{label:"万秀区",value:"450403"},{label:"长洲区",value:"450405"},{label:"龙圩区",value:"450406"},{label:"苍梧县",value:"450421"},{label:"藤县",value:"450422"},{label:"蒙山县",value:"450423"},{label:"岑溪市",value:"450481"}],[{label:"海城区",value:"450502"},{label:"银海区",value:"450503"},{label:"铁山港区",value:"450512"},{label:"合浦县",value:"450521"}],[{label:"港口区",value:"450602"},{label:"防城区",value:"450603"},{label:"上思县",value:"450621"},{label:"东兴市",value:"450681"}],[{label:"钦南区",value:"450702"},{label:"钦北区",value:"450703"},{label:"灵山县",value:"450721"},{label:"浦北县",value:"450722"}],[{label:"港北区",value:"450802"},{label:"港南区",value:"450803"},{label:"覃塘区",value:"450804"},{label:"平南县",value:"450821"},{label:"桂平市",value:"450881"}],[{label:"玉州区",value:"450902"},{label:"福绵区",value:"450903"},{label:"容县",value:"450921"},{label:"陆川县",value:"450922"},{label:"博白县",value:"450923"},{label:"兴业县",value:"450924"},{label:"北流市",value:"450981"}],[{label:"右江区",value:"451002"},{label:"田阳县",value:"451021"},{label:"田东县",value:"451022"},{label:"平果县",value:"451023"},{label:"德保县",value:"451024"},{label:"那坡县",value:"451026"},{label:"凌云县",value:"451027"},{label:"乐业县",value:"451028"},{label:"田林县",value:"451029"},{label:"西林县",value:"451030"},{label:"隆林各族自治县",value:"451031"},{label:"靖西市",value:"451081"}],[{label:"八步区",value:"451102"},{label:"平桂区",value:"451103"},{label:"昭平县",value:"451121"},{label:"钟山县",value:"451122"},{label:"富川瑶族自治县",value:"451123"}],[{label:"金城江区",value:"451202"},{label:"宜州区",value:"451203"},{label:"南丹县",value:"451221"},{label:"天峨县",value:"451222"},{label:"凤山县",value:"451223"},{label:"东兰县",value:"451224"},{label:"罗城仫佬族自治县",value:"451225"},{label:"环江毛南族自治县",value:"451226"},{label:"巴马瑶族自治县",value:"451227"},{label:"都安瑶族自治县",value:"451228"},{label:"大化瑶族自治县",value:"451229"}],[{label:"兴宾区",value:"451302"},{label:"忻城县",value:"451321"},{label:"象州县",value:"451322"},{label:"武宣县",value:"451323"},{label:"金秀瑶族自治县",value:"451324"},{label:"合山市",value:"451381"}],[{label:"江州区",value:"451402"},{label:"扶绥县",value:"451421"},{label:"宁明县",value:"451422"},{label:"龙州县",value:"451423"},{label:"大新县",value:"451424"},{label:"天等县",value:"451425"},{label:"凭祥市",value:"451481"}]],[[{label:"秀英区",value:"460105"},{label:"龙华区",value:"460106"},{label:"琼山区",value:"460107"},{label:"美兰区",value:"460108"}],[{label:"海棠区",value:"460202"},{label:"吉阳区",value:"460203"},{label:"天涯区",value:"460204"},{label:"崖州区",value:"460205"}],[{label:"西沙群岛",value:"460321"},{label:"南沙群岛",value:"460322"},{label:"中沙群岛的岛礁及其海域",value:"460323"}],[{label:"儋州市",value:"460400"}],[{label:"五指山市",value:"469001"},{label:"琼海市",value:"469002"},{label:"文昌市",value:"469005"},{label:"万宁市",value:"469006"},{label:"东方市",value:"469007"},{label:"定安县",value:"469021"},{label:"屯昌县",value:"469022"},{label:"澄迈县",value:"469023"},{label:"临高县",value:"469024"},{label:"白沙黎族自治县",value:"469025"},{label:"昌江黎族自治县",value:"469026"},{label:"乐东黎族自治县",value:"469027"},{label:"陵水黎族自治县",value:"469028"},{label:"保亭黎族苗族自治县",value:"469029"},{label:"琼中黎族苗族自治县",value:"469030"}]],[[{label:"万州区",value:"500101"},{label:"涪陵区",value:"500102"},{label:"渝中区",value:"500103"},{label:"大渡口区",value:"500104"},{label:"江北区",value:"500105"},{label:"沙坪坝区",value:"500106"},{label:"九龙坡区",value:"500107"},{label:"南岸区",value:"500108"},{label:"北碚区",value:"500109"},{label:"綦江区",value:"500110"},{label:"大足区",value:"500111"},{label:"渝北区",value:"500112"},{label:"巴南区",value:"500113"},{label:"黔江区",value:"500114"},{label:"长寿区",value:"500115"},{label:"江津区",value:"500116"},{label:"合川区",value:"500117"},{label:"永川区",value:"500118"},{label:"南川区",value:"500119"},{label:"璧山区",value:"500120"},{label:"铜梁区",value:"500151"},{label:"潼南区",value:"500152"},{label:"荣昌区",value:"500153"},{label:"开州区",value:"500154"},{label:"梁平区",value:"500155"},{label:"武隆区",value:"500156"}],[{label:"城口县",value:"500229"},{label:"丰都县",value:"500230"},{label:"垫江县",value:"500231"},{label:"忠县",value:"500233"},{label:"云阳县",value:"500235"},{label:"奉节县",value:"500236"},{label:"巫山县",value:"500237"},{label:"巫溪县",value:"500238"},{label:"石柱土家族自治县",value:"500240"},{label:"秀山土家族苗族自治县",value:"500241"},{label:"酉阳土家族苗族自治县",value:"500242"},{label:"彭水苗族土家族自治县",value:"500243"}]],[[{label:"锦江区",value:"510104"},{label:"青羊区",value:"510105"},{label:"金牛区",value:"510106"},{label:"武侯区",value:"510107"},{label:"成华区",value:"510108"},{label:"龙泉驿区",value:"510112"},{label:"青白江区",value:"510113"},{label:"新都区",value:"510114"},{label:"温江区",value:"510115"},{label:"双流区",value:"510116"},{label:"郫都区",value:"510117"},{label:"金堂县",value:"510121"},{label:"大邑县",value:"510129"},{label:"蒲江县",value:"510131"},{label:"新津县",value:"510132"},{label:"都江堰市",value:"510181"},{label:"彭州市",value:"510182"},{label:"邛崃市",value:"510183"},{label:"崇州市",value:"510184"},{label:"简阳市",value:"510185"}],[{label:"自流井区",value:"510302"},{label:"贡井区",value:"510303"},{label:"大安区",value:"510304"},{label:"沿滩区",value:"510311"},{label:"荣县",value:"510321"},{label:"富顺县",value:"510322"}],[{label:"东区",value:"510402"},{label:"西区",value:"510403"},{label:"仁和区",value:"510411"},{label:"米易县",value:"510421"},{label:"盐边县",value:"510422"}],[{label:"江阳区",value:"510502"},{label:"纳溪区",value:"510503"},{label:"龙马潭区",value:"510504"},{label:"泸县",value:"510521"},{label:"合江县",value:"510522"},{label:"叙永县",value:"510524"},{label:"古蔺县",value:"510525"}],[{label:"旌阳区",value:"510603"},{label:"罗江区",value:"510604"},{label:"中江县",value:"510623"},{label:"广汉市",value:"510681"},{label:"什邡市",value:"510682"},{label:"绵竹市",value:"510683"}],[{label:"涪城区",value:"510703"},{label:"游仙区",value:"510704"},{label:"安州区",value:"510705"},{label:"三台县",value:"510722"},{label:"盐亭县",value:"510723"},{label:"梓潼县",value:"510725"},{label:"北川羌族自治县",value:"510726"},{label:"平武县",value:"510727"},{label:"江油市",value:"510781"}],[{label:"利州区",value:"510802"},{label:"昭化区",value:"510811"},{label:"朝天区",value:"510812"},{label:"旺苍县",value:"510821"},{label:"青川县",value:"510822"},{label:"剑阁县",value:"510823"},{label:"苍溪县",value:"510824"}],[{label:"船山区",value:"510903"},{label:"安居区",value:"510904"},{label:"蓬溪县",value:"510921"},{label:"射洪县",value:"510922"},{label:"大英县",value:"510923"}],[{label:"市中区",value:"511002"},{label:"东兴区",value:"511011"},{label:"威远县",value:"511024"},{label:"资中县",value:"511025"},{label:"内江经济开发区",value:"511071"},{label:"隆昌市",value:"511083"}],[{label:"市中区",value:"511102"},{label:"沙湾区",value:"511111"},{label:"五通桥区",value:"511112"},{label:"金口河区",value:"511113"},{label:"犍为县",value:"511123"},{label:"井研县",value:"511124"},{label:"夹江县",value:"511126"},{label:"沐川县",value:"511129"},{label:"峨边彝族自治县",value:"511132"},{label:"马边彝族自治县",value:"511133"},{label:"峨眉山市",value:"511181"}],[{label:"顺庆区",value:"511302"},{label:"高坪区",value:"511303"},{label:"嘉陵区",value:"511304"},{label:"南部县",value:"511321"},{label:"营山县",value:"511322"},{label:"蓬安县",value:"511323"},{label:"仪陇县",value:"511324"},{label:"西充县",value:"511325"},{label:"阆中市",value:"511381"}],[{label:"东坡区",value:"511402"},{label:"彭山区",value:"511403"},{label:"仁寿县",value:"511421"},{label:"洪雅县",value:"511423"},{label:"丹棱县",value:"511424"},{label:"青神县",value:"511425"}],[{label:"翠屏区",value:"511502"},{label:"南溪区",value:"511503"},{label:"宜宾县",value:"511521"},{label:"江安县",value:"511523"},{label:"长宁县",value:"511524"},{label:"高县",value:"511525"},{label:"珙县",value:"511526"},{label:"筠连县",value:"511527"},{label:"兴文县",value:"511528"},{label:"屏山县",value:"511529"}],[{label:"广安区",value:"511602"},{label:"前锋区",value:"511603"},{label:"岳池县",value:"511621"},{label:"武胜县",value:"511622"},{label:"邻水县",value:"511623"},{label:"华蓥市",value:"511681"}],[{label:"通川区",value:"511702"},{label:"达川区",value:"511703"},{label:"宣汉县",value:"511722"},{label:"开江县",value:"511723"},{label:"大竹县",value:"511724"},{label:"渠县",value:"511725"},{label:"达州经济开发区",value:"511771"},{label:"万源市",value:"511781"}],[{label:"雨城区",value:"511802"},{label:"名山区",value:"511803"},{label:"荥经县",value:"511822"},{label:"汉源县",value:"511823"},{label:"石棉县",value:"511824"},{label:"天全县",value:"511825"},{label:"芦山县",value:"511826"},{label:"宝兴县",value:"511827"}],[{label:"巴州区",value:"511902"},{label:"恩阳区",value:"511903"},{label:"通江县",value:"511921"},{label:"南江县",value:"511922"},{label:"平昌县",value:"511923"},{label:"巴中经济开发区",value:"511971"}],[{label:"雁江区",value:"512002"},{label:"安岳县",value:"512021"},{label:"乐至县",value:"512022"}],[{label:"马尔康市",value:"513201"},{label:"汶川县",value:"513221"},{label:"理县",value:"513222"},{label:"茂县",value:"513223"},{label:"松潘县",value:"513224"},{label:"九寨沟县",value:"513225"},{label:"金川县",value:"513226"},{label:"小金县",value:"513227"},{label:"黑水县",value:"513228"},{label:"壤塘县",value:"513230"},{label:"阿坝县",value:"513231"},{label:"若尔盖县",value:"513232"},{label:"红原县",value:"513233"}],[{label:"康定市",value:"513301"},{label:"泸定县",value:"513322"},{label:"丹巴县",value:"513323"},{label:"九龙县",value:"513324"},{label:"雅江县",value:"513325"},{label:"道孚县",value:"513326"},{label:"炉霍县",value:"513327"},{label:"甘孜县",value:"513328"},{label:"新龙县",value:"513329"},{label:"德格县",value:"513330"},{label:"白玉县",value:"513331"},{label:"石渠县",value:"513332"},{label:"色达县",value:"513333"},{label:"理塘县",value:"513334"},{label:"巴塘县",value:"513335"},{label:"乡城县",value:"513336"},{label:"稻城县",value:"513337"},{label:"得荣县",value:"513338"}],[{label:"西昌市",value:"513401"},{label:"木里藏族自治县",value:"513422"},{label:"盐源县",value:"513423"},{label:"德昌县",value:"513424"},{label:"会理县",value:"513425"},{label:"会东县",value:"513426"},{label:"宁南县",value:"513427"},{label:"普格县",value:"513428"},{label:"布拖县",value:"513429"},{label:"金阳县",value:"513430"},{label:"昭觉县",value:"513431"},{label:"喜德县",value:"513432"},{label:"冕宁县",value:"513433"},{label:"越西县",value:"513434"},{label:"甘洛县",value:"513435"},{label:"美姑县",value:"513436"},{label:"雷波县",value:"513437"}]],[[{label:"南明区",value:"520102"},{label:"云岩区",value:"520103"},{label:"花溪区",value:"520111"},{label:"乌当区",value:"520112"},{label:"白云区",value:"520113"},{label:"观山湖区",value:"520115"},{label:"开阳县",value:"520121"},{label:"息烽县",value:"520122"},{label:"修文县",value:"520123"},{label:"清镇市",value:"520181"}],[{label:"钟山区",value:"520201"},{label:"六枝特区",value:"520203"},{label:"水城县",value:"520221"},{label:"盘州市",value:"520281"}],[{label:"红花岗区",value:"520302"},{label:"汇川区",value:"520303"},{label:"播州区",value:"520304"},{label:"桐梓县",value:"520322"},{label:"绥阳县",value:"520323"},{label:"正安县",value:"520324"},{label:"道真仡佬族苗族自治县",value:"520325"},{label:"务川仡佬族苗族自治县",value:"520326"},{label:"凤冈县",value:"520327"},{label:"湄潭县",value:"520328"},{label:"余庆县",value:"520329"},{label:"习水县",value:"520330"},{label:"赤水市",value:"520381"},{label:"仁怀市",value:"520382"}],[{label:"西秀区",value:"520402"},{label:"平坝区",value:"520403"},{label:"普定县",value:"520422"},{label:"镇宁布依族苗族自治县",value:"520423"},{label:"关岭布依族苗族自治县",value:"520424"},{label:"紫云苗族布依族自治县",value:"520425"}],[{label:"七星关区",value:"520502"},{label:"大方县",value:"520521"},{label:"黔西县",value:"520522"},{label:"金沙县",value:"520523"},{label:"织金县",value:"520524"},{label:"纳雍县",value:"520525"},{label:"威宁彝族回族苗族自治县",value:"520526"},{label:"赫章县",value:"520527"}],[{label:"碧江区",value:"520602"},{label:"万山区",value:"520603"},{label:"江口县",value:"520621"},{label:"玉屏侗族自治县",value:"520622"},{label:"石阡县",value:"520623"},{label:"思南县",value:"520624"},{label:"印江土家族苗族自治县",value:"520625"},{label:"德江县",value:"520626"},{label:"沿河土家族自治县",value:"520627"},{label:"松桃苗族自治县",value:"520628"}],[{label:"兴义市",value:"522301"},{label:"兴仁县",value:"522322"},{label:"普安县",value:"522323"},{label:"晴隆县",value:"522324"},{label:"贞丰县",value:"522325"},{label:"望谟县",value:"522326"},{label:"册亨县",value:"522327"},{label:"安龙县",value:"522328"}],[{label:"凯里市",value:"522601"},{label:"黄平县",value:"522622"},{label:"施秉县",value:"522623"},{label:"三穗县",value:"522624"},{label:"镇远县",value:"522625"},{label:"岑巩县",value:"522626"},{label:"天柱县",value:"522627"},{label:"锦屏县",value:"522628"},{label:"剑河县",value:"522629"},{label:"台江县",value:"522630"},{label:"黎平县",value:"522631"},{label:"榕江县",value:"522632"},{label:"从江县",value:"522633"},{label:"雷山县",value:"522634"},{label:"麻江县",value:"522635"},{label:"丹寨县",value:"522636"}],[{label:"都匀市",value:"522701"},{label:"福泉市",value:"522702"},{label:"荔波县",value:"522722"},{label:"贵定县",value:"522723"},{label:"瓮安县",value:"522725"},{label:"独山县",value:"522726"},{label:"平塘县",value:"522727"},{label:"罗甸县",value:"522728"},{label:"长顺县",value:"522729"},{label:"龙里县",value:"522730"},{label:"惠水县",value:"522731"},{label:"三都水族自治县",value:"522732"}]],[[{label:"五华区",value:"530102"},{label:"盘龙区",value:"530103"},{label:"官渡区",value:"530111"},{label:"西山区",value:"530112"},{label:"东川区",value:"530113"},{label:"呈贡区",value:"530114"},{label:"晋宁区",value:"530115"},{label:"富民县",value:"530124"},{label:"宜良县",value:"530125"},{label:"石林彝族自治县",value:"530126"},{label:"嵩明县",value:"530127"},{label:"禄劝彝族苗族自治县",value:"530128"},{label:"寻甸回族彝族自治县",value:"530129"},{label:"安宁市",value:"530181"}],[{label:"麒麟区",value:"530302"},{label:"沾益区",value:"530303"},{label:"马龙县",value:"530321"},{label:"陆良县",value:"530322"},{label:"师宗县",value:"530323"},{label:"罗平县",value:"530324"},{label:"富源县",value:"530325"},{label:"会泽县",value:"530326"},{label:"宣威市",value:"530381"}],[{label:"红塔区",value:"530402"},{label:"江川区",value:"530403"},{label:"澄江县",value:"530422"},{label:"通海县",value:"530423"},{label:"华宁县",value:"530424"},{label:"易门县",value:"530425"},{label:"峨山彝族自治县",value:"530426"},{label:"新平彝族傣族自治县",value:"530427"},{label:"元江哈尼族彝族傣族自治县",value:"530428"}],[{label:"隆阳区",value:"530502"},{label:"施甸县",value:"530521"},{label:"龙陵县",value:"530523"},{label:"昌宁县",value:"530524"},{label:"腾冲市",value:"530581"}],[{label:"昭阳区",value:"530602"},{label:"鲁甸县",value:"530621"},{label:"巧家县",value:"530622"},{label:"盐津县",value:"530623"},{label:"大关县",value:"530624"},{label:"永善县",value:"530625"},{label:"绥江县",value:"530626"},{label:"镇雄县",value:"530627"},{label:"彝良县",value:"530628"},{label:"威信县",value:"530629"},{label:"水富县",value:"530630"}],[{label:"古城区",value:"530702"},{label:"玉龙纳西族自治县",value:"530721"},{label:"永胜县",value:"530722"},{label:"华坪县",value:"530723"},{label:"宁蒗彝族自治县",value:"530724"}],[{label:"思茅区",value:"530802"},{label:"宁洱哈尼族彝族自治县",value:"530821"},{label:"墨江哈尼族自治县",value:"530822"},{label:"景东彝族自治县",value:"530823"},{label:"景谷傣族彝族自治县",value:"530824"},{label:"镇沅彝族哈尼族拉祜族自治县",value:"530825"},{label:"江城哈尼族彝族自治县",value:"530826"},{label:"孟连傣族拉祜族佤族自治县",value:"530827"},{label:"澜沧拉祜族自治县",value:"530828"},{label:"西盟佤族自治县",value:"530829"}],[{label:"临翔区",value:"530902"},{label:"凤庆县",value:"530921"},{label:"云县",value:"530922"},{label:"永德县",value:"530923"},{label:"镇康县",value:"530924"},{label:"双江拉祜族佤族布朗族傣族自治县",value:"530925"},{label:"耿马傣族佤族自治县",value:"530926"},{label:"沧源佤族自治县",value:"530927"}],[{label:"楚雄市",value:"532301"},{label:"双柏县",value:"532322"},{label:"牟定县",value:"532323"},{label:"南华县",value:"532324"},{label:"姚安县",value:"532325"},{label:"大姚县",value:"532326"},{label:"永仁县",value:"532327"},{label:"元谋县",value:"532328"},{label:"武定县",value:"532329"},{label:"禄丰县",value:"532331"}],[{label:"个旧市",value:"532501"},{label:"开远市",value:"532502"},{label:"蒙自市",value:"532503"},{label:"弥勒市",value:"532504"},{label:"屏边苗族自治县",value:"532523"},{label:"建水县",value:"532524"},{label:"石屏县",value:"532525"},{label:"泸西县",value:"532527"},{label:"元阳县",value:"532528"},{label:"红河县",value:"532529"},{label:"金平苗族瑶族傣族自治县",value:"532530"},{label:"绿春县",value:"532531"},{label:"河口瑶族自治县",value:"532532"}],[{label:"文山市",value:"532601"},{label:"砚山县",value:"532622"},{label:"西畴县",value:"532623"},{label:"麻栗坡县",value:"532624"},{label:"马关县",value:"532625"},{label:"丘北县",value:"532626"},{label:"广南县",value:"532627"},{label:"富宁县",value:"532628"}],[{label:"景洪市",value:"532801"},{label:"勐海县",value:"532822"},{label:"勐腊县",value:"532823"}],[{label:"大理市",value:"532901"},{label:"漾濞彝族自治县",value:"532922"},{label:"祥云县",value:"532923"},{label:"宾川县",value:"532924"},{label:"弥渡县",value:"532925"},{label:"南涧彝族自治县",value:"532926"},{label:"巍山彝族回族自治县",value:"532927"},{label:"永平县",value:"532928"},{label:"云龙县",value:"532929"},{label:"洱源县",value:"532930"},{label:"剑川县",value:"532931"},{label:"鹤庆县",value:"532932"}],[{label:"瑞丽市",value:"533102"},{label:"芒市",value:"533103"},{label:"梁河县",value:"533122"},{label:"盈江县",value:"533123"},{label:"陇川县",value:"533124"}],[{label:"泸水市",value:"533301"},{label:"福贡县",value:"533323"},{label:"贡山独龙族怒族自治县",value:"533324"},{label:"兰坪白族普米族自治县",value:"533325"}],[{label:"香格里拉市",value:"533401"},{label:"德钦县",value:"533422"},{label:"维西傈僳族自治县",value:"533423"}]],[[{label:"城关区",value:"540102"},{label:"堆龙德庆区",value:"540103"},{label:"林周县",value:"540121"},{label:"当雄县",value:"540122"},{label:"尼木县",value:"540123"},{label:"曲水县",value:"540124"},{label:"达孜县",value:"540126"},{label:"墨竹工卡县",value:"540127"},{label:"格尔木藏青工业园区",value:"540171"},{label:"拉萨经济技术开发区",value:"540172"},{label:"西藏文化旅游创意园区",value:"540173"},{label:"达孜工业园区",value:"540174"}],[{label:"桑珠孜区",value:"540202"},{label:"南木林县",value:"540221"},{label:"江孜县",value:"540222"},{label:"定日县",value:"540223"},{label:"萨迦县",value:"540224"},{label:"拉孜县",value:"540225"},{label:"昂仁县",value:"540226"},{label:"谢通门县",value:"540227"},{label:"白朗县",value:"540228"},{label:"仁布县",value:"540229"},{label:"康马县",value:"540230"},{label:"定结县",value:"540231"},{label:"仲巴县",value:"540232"},{label:"亚东县",value:"540233"},{label:"吉隆县",value:"540234"},{label:"聂拉木县",value:"540235"},{label:"萨嘎县",value:"540236"},{label:"岗巴县",value:"540237"}],[{label:"卡若区",value:"540302"},{label:"江达县",value:"540321"},{label:"贡觉县",value:"540322"},{label:"类乌齐县",value:"540323"},{label:"丁青县",value:"540324"},{label:"察雅县",value:"540325"},{label:"八宿县",value:"540326"},{label:"左贡县",value:"540327"},{label:"芒康县",value:"540328"},{label:"洛隆县",value:"540329"},{label:"边坝县",value:"540330"}],[{label:"巴宜区",value:"540402"},{label:"工布江达县",value:"540421"},{label:"米林县",value:"540422"},{label:"墨脱县",value:"540423"},{label:"波密县",value:"540424"},{label:"察隅县",value:"540425"},{label:"朗县",value:"540426"}],[{label:"乃东区",value:"540502"},{label:"扎囊县",value:"540521"},{label:"贡嘎县",value:"540522"},{label:"桑日县",value:"540523"},{label:"琼结县",value:"540524"},{label:"曲松县",value:"540525"},{label:"措美县",value:"540526"},{label:"洛扎县",value:"540527"},{label:"加查县",value:"540528"},{label:"隆子县",value:"540529"},{label:"错那县",value:"540530"},{label:"浪卡子县",value:"540531"}],[{label:"那曲县",value:"542421"},{label:"嘉黎县",value:"542422"},{label:"比如县",value:"542423"},{label:"聂荣县",value:"542424"},{label:"安多县",value:"542425"},{label:"申扎县",value:"542426"},{label:"索县",value:"542427"},{label:"班戈县",value:"542428"},{label:"巴青县",value:"542429"},{label:"尼玛县",value:"542430"},{label:"双湖县",value:"542431"}],[{label:"普兰县",value:"542521"},{label:"札达县",value:"542522"},{label:"噶尔县",value:"542523"},{label:"日土县",value:"542524"},{label:"革吉县",value:"542525"},{label:"改则县",value:"542526"},{label:"措勤县",value:"542527"}]],[[{label:"新城区",value:"610102"},{label:"碑林区",value:"610103"},{label:"莲湖区",value:"610104"},{label:"灞桥区",value:"610111"},{label:"未央区",value:"610112"},{label:"雁塔区",value:"610113"},{label:"阎良区",value:"610114"},{label:"临潼区",value:"610115"},{label:"长安区",value:"610116"},{label:"高陵区",value:"610117"},{label:"鄠邑区",value:"610118"},{label:"蓝田县",value:"610122"},{label:"周至县",value:"610124"}],[{label:"王益区",value:"610202"},{label:"印台区",value:"610203"},{label:"耀州区",value:"610204"},{label:"宜君县",value:"610222"}],[{label:"渭滨区",value:"610302"},{label:"金台区",value:"610303"},{label:"陈仓区",value:"610304"},{label:"凤翔县",value:"610322"},{label:"岐山县",value:"610323"},{label:"扶风县",value:"610324"},{label:"眉县",value:"610326"},{label:"陇县",value:"610327"},{label:"千阳县",value:"610328"},{label:"麟游县",value:"610329"},{label:"凤县",value:"610330"},{label:"太白县",value:"610331"}],[{label:"秦都区",value:"610402"},{label:"杨陵区",value:"610403"},{label:"渭城区",value:"610404"},{label:"三原县",value:"610422"},{label:"泾阳县",value:"610423"},{label:"乾县",value:"610424"},{label:"礼泉县",value:"610425"},{label:"永寿县",value:"610426"},{label:"彬县",value:"610427"},{label:"长武县",value:"610428"},{label:"旬邑县",value:"610429"},{label:"淳化县",value:"610430"},{label:"武功县",value:"610431"},{label:"兴平市",value:"610481"}],[{label:"临渭区",value:"610502"},{label:"华州区",value:"610503"},{label:"潼关县",value:"610522"},{label:"大荔县",value:"610523"},{label:"合阳县",value:"610524"},{label:"澄城县",value:"610525"},{label:"蒲城县",value:"610526"},{label:"白水县",value:"610527"},{label:"富平县",value:"610528"},{label:"韩城市",value:"610581"},{label:"华阴市",value:"610582"}],[{label:"宝塔区",value:"610602"},{label:"安塞区",value:"610603"},{label:"延长县",value:"610621"},{label:"延川县",value:"610622"},{label:"子长县",value:"610623"},{label:"志丹县",value:"610625"},{label:"吴起县",value:"610626"},{label:"甘泉县",value:"610627"},{label:"富县",value:"610628"},{label:"洛川县",value:"610629"},{label:"宜川县",value:"610630"},{label:"黄龙县",value:"610631"},{label:"黄陵县",value:"610632"}],[{label:"汉台区",value:"610702"},{label:"南郑区",value:"610703"},{label:"城固县",value:"610722"},{label:"洋县",value:"610723"},{label:"西乡县",value:"610724"},{label:"勉县",value:"610725"},{label:"宁强县",value:"610726"},{label:"略阳县",value:"610727"},{label:"镇巴县",value:"610728"},{label:"留坝县",value:"610729"},{label:"佛坪县",value:"610730"}],[{label:"榆阳区",value:"610802"},{label:"横山区",value:"610803"},{label:"府谷县",value:"610822"},{label:"靖边县",value:"610824"},{label:"定边县",value:"610825"},{label:"绥德县",value:"610826"},{label:"米脂县",value:"610827"},{label:"佳县",value:"610828"},{label:"吴堡县",value:"610829"},{label:"清涧县",value:"610830"},{label:"子洲县",value:"610831"},{label:"神木市",value:"610881"}],[{label:"汉滨区",value:"610902"},{label:"汉阴县",value:"610921"},{label:"石泉县",value:"610922"},{label:"宁陕县",value:"610923"},{label:"紫阳县",value:"610924"},{label:"岚皋县",value:"610925"},{label:"平利县",value:"610926"},{label:"镇坪县",value:"610927"},{label:"旬阳县",value:"610928"},{label:"白河县",value:"610929"}],[{label:"商州区",value:"611002"},{label:"洛南县",value:"611021"},{label:"丹凤县",value:"611022"},{label:"商南县",value:"611023"},{label:"山阳县",value:"611024"},{label:"镇安县",value:"611025"},{label:"柞水县",value:"611026"}]],[[{label:"城关区",value:"620102"},{label:"七里河区",value:"620103"},{label:"西固区",value:"620104"},{label:"安宁区",value:"620105"},{label:"红古区",value:"620111"},{label:"永登县",value:"620121"},{label:"皋兰县",value:"620122"},{label:"榆中县",value:"620123"},{label:"兰州新区",value:"620171"}],[{label:"嘉峪关市",value:"620201"}],[{label:"金川区",value:"620302"},{label:"永昌县",value:"620321"}],[{label:"白银区",value:"620402"},{label:"平川区",value:"620403"},{label:"靖远县",value:"620421"},{label:"会宁县",value:"620422"},{label:"景泰县",value:"620423"}],[{label:"秦州区",value:"620502"},{label:"麦积区",value:"620503"},{label:"清水县",value:"620521"},{label:"秦安县",value:"620522"},{label:"甘谷县",value:"620523"},{label:"武山县",value:"620524"},{label:"张家川回族自治县",value:"620525"}],[{label:"凉州区",value:"620602"},{label:"民勤县",value:"620621"},{label:"古浪县",value:"620622"},{label:"天祝藏族自治县",value:"620623"}],[{label:"甘州区",value:"620702"},{label:"肃南裕固族自治县",value:"620721"},{label:"民乐县",value:"620722"},{label:"临泽县",value:"620723"},{label:"高台县",value:"620724"},{label:"山丹县",value:"620725"}],[{label:"崆峒区",value:"620802"},{label:"泾川县",value:"620821"},{label:"灵台县",value:"620822"},{label:"崇信县",value:"620823"},{label:"华亭县",value:"620824"},{label:"庄浪县",value:"620825"},{label:"静宁县",value:"620826"},{label:"平凉工业园区",value:"620871"}],[{label:"肃州区",value:"620902"},{label:"金塔县",value:"620921"},{label:"瓜州县",value:"620922"},{label:"肃北蒙古族自治县",value:"620923"},{label:"阿克塞哈萨克族自治县",value:"620924"},{label:"玉门市",value:"620981"},{label:"敦煌市",value:"620982"}],[{label:"西峰区",value:"621002"},{label:"庆城县",value:"621021"},{label:"环县",value:"621022"},{label:"华池县",value:"621023"},{label:"合水县",value:"621024"},{label:"正宁县",value:"621025"},{label:"宁县",value:"621026"},{label:"镇原县",value:"621027"}],[{label:"安定区",value:"621102"},{label:"通渭县",value:"621121"},{label:"陇西县",value:"621122"},{label:"渭源县",value:"621123"},{label:"临洮县",value:"621124"},{label:"漳县",value:"621125"},{label:"岷县",value:"621126"}],[{label:"武都区",value:"621202"},{label:"成县",value:"621221"},{label:"文县",value:"621222"},{label:"宕昌县",value:"621223"},{label:"康县",value:"621224"},{label:"西和县",value:"621225"},{label:"礼县",value:"621226"},{label:"徽县",value:"621227"},{label:"两当县",value:"621228"}],[{label:"临夏市",value:"622901"},{label:"临夏县",value:"622921"},{label:"康乐县",value:"622922"},{label:"永靖县",value:"622923"},{label:"广河县",value:"622924"},{label:"和政县",value:"622925"},{label:"东乡族自治县",value:"622926"},{label:"积石山保安族东乡族撒拉族自治县",value:"622927"}],[{label:"合作市",value:"623001"},{label:"临潭县",value:"623021"},{label:"卓尼县",value:"623022"},{label:"舟曲县",value:"623023"},{label:"迭部县",value:"623024"},{label:"玛曲县",value:"623025"},{label:"碌曲县",value:"623026"},{label:"夏河县",value:"623027"}]],[[{label:"城东区",value:"630102"},{label:"城中区",value:"630103"},{label:"城西区",value:"630104"},{label:"城北区",value:"630105"},{label:"大通回族土族自治县",value:"630121"},{label:"湟中县",value:"630122"},{label:"湟源县",value:"630123"}],[{label:"乐都区",value:"630202"},{label:"平安区",value:"630203"},{label:"民和回族土族自治县",value:"630222"},{label:"互助土族自治县",value:"630223"},{label:"化隆回族自治县",value:"630224"},{label:"循化撒拉族自治县",value:"630225"}],[{label:"门源回族自治县",value:"632221"},{label:"祁连县",value:"632222"},{label:"海晏县",value:"632223"},{label:"刚察县",value:"632224"}],[{label:"同仁县",value:"632321"},{label:"尖扎县",value:"632322"},{label:"泽库县",value:"632323"},{label:"河南蒙古族自治县",value:"632324"}],[{label:"共和县",value:"632521"},{label:"同德县",value:"632522"},{label:"贵德县",value:"632523"},{label:"兴海县",value:"632524"},{label:"贵南县",value:"632525"}],[{label:"玛沁县",value:"632621"},{label:"班玛县",value:"632622"},{label:"甘德县",value:"632623"},{label:"达日县",value:"632624"},{label:"久治县",value:"632625"},{label:"玛多县",value:"632626"}],[{label:"玉树市",value:"632701"},{label:"杂多县",value:"632722"},{label:"称多县",value:"632723"},{label:"治多县",value:"632724"},{label:"囊谦县",value:"632725"},{label:"曲麻莱县",value:"632726"}],[{label:"格尔木市",value:"632801"},{label:"德令哈市",value:"632802"},{label:"乌兰县",value:"632821"},{label:"都兰县",value:"632822"},{label:"天峻县",value:"632823"},{label:"大柴旦行政委员会",value:"632857"},{label:"冷湖行政委员会",value:"632858"},{label:"茫崖行政委员会",value:"632859"}]],[[{label:"兴庆区",value:"640104"},{label:"西夏区",value:"640105"},{label:"金凤区",value:"640106"},{label:"永宁县",value:"640121"},{label:"贺兰县",value:"640122"},{label:"灵武市",value:"640181"}],[{label:"大武口区",value:"640202"},{label:"惠农区",value:"640205"},{label:"平罗县",value:"640221"}],[{label:"利通区",value:"640302"},{label:"红寺堡区",value:"640303"},{label:"盐池县",value:"640323"},{label:"同心县",value:"640324"},{label:"青铜峡市",value:"640381"}],[{label:"原州区",value:"640402"},{label:"西吉县",value:"640422"},{label:"隆德县",value:"640423"},{label:"泾源县",value:"640424"},{label:"彭阳县",value:"640425"}],[{label:"沙坡头区",value:"640502"},{label:"中宁县",value:"640521"},{label:"海原县",value:"640522"}]],[[{label:"天山区",value:"650102"},{label:"沙依巴克区",value:"650103"},{label:"新市区",value:"650104"},{label:"水磨沟区",value:"650105"},{label:"头屯河区",value:"650106"},{label:"达坂城区",value:"650107"},{label:"米东区",value:"650109"},{label:"乌鲁木齐县",value:"650121"},{label:"乌鲁木齐经济技术开发区",value:"650171"},{label:"乌鲁木齐高新技术产业开发区",value:"650172"}],[{label:"独山子区",value:"650202"},{label:"克拉玛依区",value:"650203"},{label:"白碱滩区",value:"650204"},{label:"乌尔禾区",value:"650205"}],[{label:"高昌区",value:"650402"},{label:"鄯善县",value:"650421"},{label:"托克逊县",value:"650422"}],[{label:"伊州区",value:"650502"},{label:"巴里坤哈萨克自治县",value:"650521"},{label:"伊吾县",value:"650522"}],[{label:"昌吉市",value:"652301"},{label:"阜康市",value:"652302"},{label:"呼图壁县",value:"652323"},{label:"玛纳斯县",value:"652324"},{label:"奇台县",value:"652325"},{label:"吉木萨尔县",value:"652327"},{label:"木垒哈萨克自治县",value:"652328"}],[{label:"博乐市",value:"652701"},{label:"阿拉山口市",value:"652702"},{label:"精河县",value:"652722"},{label:"温泉县",value:"652723"}],[{label:"库尔勒市",value:"652801"},{label:"轮台县",value:"652822"},{label:"尉犁县",value:"652823"},{label:"若羌县",value:"652824"},{label:"且末县",value:"652825"},{label:"焉耆回族自治县",value:"652826"},{label:"和静县",value:"652827"},{label:"和硕县",value:"652828"},{label:"博湖县",value:"652829"},{label:"库尔勒经济技术开发区",value:"652871"}],[{label:"阿克苏市",value:"652901"},{label:"温宿县",value:"652922"},{label:"库车县",value:"652923"},{label:"沙雅县",value:"652924"},{label:"新和县",value:"652925"},{label:"拜城县",value:"652926"},{label:"乌什县",value:"652927"},{label:"阿瓦提县",value:"652928"},{label:"柯坪县",value:"652929"}],[{label:"阿图什市",value:"653001"},{label:"阿克陶县",value:"653022"},{label:"阿合奇县",value:"653023"},{label:"乌恰县",value:"653024"}],[{label:"喀什市",value:"653101"},{label:"疏附县",value:"653121"},{label:"疏勒县",value:"653122"},{label:"英吉沙县",value:"653123"},{label:"泽普县",value:"653124"},{label:"莎车县",value:"653125"},{label:"叶城县",value:"653126"},{label:"麦盖提县",value:"653127"},{label:"岳普湖县",value:"653128"},{label:"伽师县",value:"653129"},{label:"巴楚县",value:"653130"},{label:"塔什库尔干塔吉克自治县",value:"653131"}],[{label:"和田市",value:"653201"},{label:"和田县",value:"653221"},{label:"墨玉县",value:"653222"},{label:"皮山县",value:"653223"},{label:"洛浦县",value:"653224"},{label:"策勒县",value:"653225"},{label:"于田县",value:"653226"},{label:"民丰县",value:"653227"}],[{label:"伊宁市",value:"654002"},{label:"奎屯市",value:"654003"},{label:"霍尔果斯市",value:"654004"},{label:"伊宁县",value:"654021"},{label:"察布查尔锡伯自治县",value:"654022"},{label:"霍城县",value:"654023"},{label:"巩留县",value:"654024"},{label:"新源县",value:"654025"},{label:"昭苏县",value:"654026"},{label:"特克斯县",value:"654027"},{label:"尼勒克县",value:"654028"}],[{label:"塔城市",value:"654201"},{label:"乌苏市",value:"654202"},{label:"额敏县",value:"654221"},{label:"沙湾县",value:"654223"},{label:"托里县",value:"654224"},{label:"裕民县",value:"654225"},{label:"和布克赛尔蒙古自治县",value:"654226"}],[{label:"阿勒泰市",value:"654301"},{label:"布尔津县",value:"654321"},{label:"富蕴县",value:"654322"},{label:"福海县",value:"654323"},{label:"哈巴河县",value:"654324"},{label:"青河县",value:"654325"},{label:"吉木乃县",value:"654326"}],[{label:"石河子市",value:"659001"},{label:"阿拉尔市",value:"659002"},{label:"图木舒克市",value:"659003"},{label:"五家渠市",value:"659004"},{label:"铁门关市",value:"659006"}]],[[{label:"台北",value:"660101"}],[{label:"高雄",value:"660201"}],[{label:"基隆",value:"660301"}],[{label:"台中",value:"660401"}],[{label:"台南",value:"660501"}],[{label:"新竹",value:"660601"}],[{label:"嘉义",value:"660701"}],[{label:"宜兰",value:"660801"}],[{label:"桃园",value:"660901"}],[{label:"苗栗",value:"661001"}],[{label:"彰化",value:"661101"}],[{label:"南投",value:"661201"}],[{label:"云林",value:"661301"}],[{label:"屏东",value:"661401"}],[{label:"台东",value:"661501"}],[{label:"花莲",value:"661601"}],[{label:"澎湖",value:"661701"}]],[[{label:"香港岛",value:"670101"}],[{label:"九龙",value:"670201"}],[{label:"新界",value:"670301"}]],[[{label:"澳门半岛",value:"680101"}],[{label:"氹仔岛",value:"680201"}],[{label:"路环岛",value:"680301"}],[{label:"路氹城",value:"680401"}]]],v=u;e.default=v},"3c35":function(l,e){(function(e){l.exports=e}).call(this,{})},"3f6d":function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={pages:{"pages/index/index":{navigationBarTitleText:"启动页",titleNView:!1},"pages/index/guide":{navigationBarTitleText:"",titleNView:!1},"pages/tabBar/home/home":{navigationBarTextStyle:"black",enablePullDownRefresh:!0,onReachBottomDistance:50,titleNView:!1,softinputNavBar:"none",subNVues:[{id:"homeTitleNvue",path:"pages/tabBar/home/subNvue/homeTitleNvue",type:"navigationBar"}]},"pages/tabBar/category/category":{navigationBarTextStyle:"black",titleNView:!1,bounce:"none"},"pages/ali/ali":{enablePullDownRefresh:!0,navigationBarTextStyle:"white",titleNView:!1,bounce:"none",softinputNavBar:"none"},"pages/tabBar/cart/cart":{enablePullDownRefresh:!0,navigationBarTextStyle:"black",titleNView:!1,softinputNavBar:"none",subNVues:[{id:"cartTitleNvue",path:"pages/tabBar/cart/subNvue/cartTitleNvue",type:"navigationBar"}]},"pages/tabBar/user/user":{enablePullDownRefresh:!0,backgroundTextStyle:"light",navigationBarBackgroundColor:"#f06c7a",backgroundColorTop:"#f06c7a",navigationBarTextStyle:"white",titleNView:!1,subNVues:[{id:"userTitleNvue",path:"pages/tabBar/user/subNvue/userTitleNvue",type:"navigationBar"}]},"pages/goods/goods-list/goods-list":{navigationBarTitleText:"",enablePullDownRefresh:!0,bounce:"none"},"pages/goods/goods":{navigationBarTitleText:"",navigationBarBackgroundColor:"#f1f1f1",onReachBottomDistance:50,titleNView:!1,bounce:"none"},"pages/login/login":{navigationBarTitleText:"登录",navigationBarBackgroundColor:"#f06c7a",navigationBarTextStyle:"white",bounce:"none",softinputNavBar:"none"},"pages/login/register":{navigationBarTitleText:"注册账号",navigationBarBackgroundColor:"#f06c7a",navigationBarTextStyle:"white",bounce:"none",softinputNavBar:"none"},"pages/login/resetpasswd":{navigationBarTitleText:"重置密码",navigationBarBackgroundColor:"#f06c7a",navigationBarTextStyle:"white",bounce:"none",softinputNavBar:"none"},"pages/order/confirmation":{navigationBarTitleText:"确认订单",softinputNavBar:"none"},"pages/user/order_list/order_list":{navigationBarTitleText:"我的订单",navigationBarBackgroundColor:"#f8f8f8",backgroundColorTop:"#f3f3f3",backgroundColorBottom:"#ffffff"},"pages/user/setting/revise/Hphoto":{navigationBarBackgroundColor:"#f8f8f8",navigationBarTitleText:"我的头像",backgroundColorTop:"#ffffff",backgroundColorBottom:"#f3f3f3",usingComponents:{}},"pages/user/setting/revise/rename":{navigationBarBackgroundColor:"#f8f8f8",navigationBarTitleText:"我的昵称",backgroundColorTop:"#ffffff",backgroundColorBottom:"#f3f3f3",usingComponents:{}},"pages/user/myQR/myQR":{navigationBarTitleText:"我的二维码",bounce:"none",usingComponents:{}},"pages/user/setting/setting":{navigationBarBackgroundColor:"#f8f8f8",navigationBarTitleText:"我的设置",backgroundColorTop:"#ffffff",backgroundColorBottom:"#f3f3f3"},"pages/msg/msg":{enablePullDownRefresh:!0,navigationBarTitleText:"消息列表",navigationBarBackgroundColor:"#f06c7a",navigationBarTextStyle:"white"},"pages/msg/chat/chat":{navigationBarBackgroundColor:"#f2f2f2",backgroundColorTop:"#e5e5e5",backgroundColorBottom:"#e5e5e5",softinputNavBar:"none",bounce:"none"},"pages/user/coupon/coupon":{navigationBarTitleText:"优惠券",navigationBarBackgroundColor:"#f06c7a",navigationBarTextStyle:"white",bounce:"none"},"pages/user/keep/keep":{navigationBarTitleText:"我的收藏",navigationBarBackgroundColor:"#f06c7a",navigationBarTextStyle:"white",bounce:"none"},"pages/user/address/address":{navigationBarBackgroundColor:"#ffffff",navigationBarTitleText:"地址管理",backgroundColorTop:"#ffffff",backgroundColorBottom:"#ffffff"},"pages/user/address/edit/edit":{navigationBarBackgroundColor:"#ffffff",navigationBarTitleText:"编辑收件人地址",backgroundColorTop:"#ffffff",backgroundColorBottom:"#ffffff"},"pages/user/deposit/deposit":{navigationBarBackgroundColor:"#ffffff",navigationBarTitleText:"充值",backgroundColorTop:"#ffffff",backgroundColorBottom:"#ffffff"},"pages/pay/payment/payment":{navigationBarBackgroundColor:"#ffffff",navigationBarTitleText:"订单支付",backgroundColorTop:"#ffffff",backgroundColorBottom:"#ffffff"},"pages/pay/success/success":{navigationBarBackgroundColor:"#ffffff",navigationBarTitleText:"支付成功",backgroundColorTop:"#ffffff",backgroundColorBottom:"#ffffff"},"pages/goods/ratings/ratings":{navigationBarTitleText:"商品评论",enablePullDownRefresh:!0,onReachBottomDistance:50,backgroundColorTop:"#ffffff",backgroundColorBottom:"#ffffff"},"pages/ali/select/select":{navigationBarTitleText:"发布商品",enablePullDownRefresh:!1,bounce:"none"},"pages/tabBar/ali/ali":{enablePullDownRefresh:!0,navigationBarTextStyle:"black",titleNView:!1,bounce:"none",softinputNavBar:"none",subNVues:[{id:"aliTitleNvue",path:"pages/tabBar/ali/subNvue/aliTitleNvue",type:"navigationBar"}],usingComponents:{}},"pages/ali/codelist/codelist":{enablePullDownRefresh:!0,backgroundTextStyle:"light",navigationBarBackgroundColor:"#f06c7a",backgroundColorTop:"#f06c7a",navigationBarTextStyle:"white",titleNView:!0,usingComponents:{}},"pages/user/setting/revise/signature/signature":{navigationBarTitleText:"个性签名"},"pages/user/setting/revise/pay/pay":{}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"",navigationBarBackgroundColor:"#ffffff",backgroundColor:"#ffffff",backgroundColorTop:"#ffffff",backgroundColorBottom:"#ffffff"}};e.default=u},4362:function(l,e,a){e.nextTick=function(l){setTimeout(l,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(l){throw new Error("No such module. (Possibly not yet loaded)")},function(){var l,u="/";e.cwd=function(){return u},e.chdir=function(e){l||(l=a("df7c")),u=l.resolve(e,u)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},4974:function(l,e,a){"use strict";var u=a("d3ab");(function(){var l=u.util;u.HMAC=function(e,a,u,v){u=u.length>4*e._blocksize?e(u,{asBytes:!0}):l.stringToBytes(u);for(var b=u,t=u.slice(0),n=0;n<4*e._blocksize;n++)b[n]^=92,t[n]^=54;var r=e(l.bytesToString(b)+e(l.bytesToString(t)+a,{asString:!0}),{asBytes:!0});return v&&v.asBytes?r:v&&v.asString?l.bytesToString(r):l.bytesToHex(r)}})(),l.exports=u},"4ba1":function(l,e,a){"use strict";var u=a("d3ab");(function(){var l=u.util,e=u.SHA1=function(a,u){var v=l.wordsToBytes(e._sha1(a));return u&&u.asBytes?v:u&&u.asString?l.bytesToString(v):l.bytesToHex(v)};e._sha1=function(e){var a=l.stringToWords(e),u=8*e.length,v=[],b=1732584193,t=-271733879,n=-1732584194,r=271733878,o=-1009589776;a[u>>5]|=128<<24-u%32,a[15+(u+64>>>9<<4)]=u;for(var i=0;i<a.length;i+=16){for(var s=b,c=t,f=n,p=r,h=o,d=0;d<80;d++){if(d<16)v[d]=a[i+d];else{var g=v[d-3]^v[d-8]^v[d-14]^v[d-16];v[d]=g<<1|g>>>31}var y=(b<<5|b>>>27)+o+(v[d]>>>0)+(d<20?1518500249+(t&n|~t&r):d<40?1859775393+(t^n^r):d<60?(t&n|t&r|n&r)-1894007588:(t^n^r)-899497514);o=r,r=n,n=t<<30|t>>>2,t=b,b=y}b+=s,t+=c,n+=f,r+=p,o+=h}return[b,t,n,r,o]},e._blocksize=16})(),l.exports=u},"590e":function(l,e,a){},"62f2":function(module,exports,__webpack_require__){"use strict";(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */!function(){function t(e){if(e)d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d,this.buffer8=l;else if(a){var u=new ArrayBuffer(68);this.buffer8=new Uint8Array(u),this.blocks=new Uint32Array(u)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var r="input is invalid type",e="object"==typeof window,i=e?window:{};i.JS_MD5_NO_WINDOW&&(e=!1);var s=!e&&"object"==typeof self,h=!i.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;h?i=global:s&&(i=self);var f=!i.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,o=__webpack_require__("3c35"),a=!i.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,n="0123456789abcdef".split(""),u=[128,32768,8388608,-2147483648],y=[0,8,16,24],c=["hex","array","digest","buffer","arrayBuffer","base64"],p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),d=[],l;if(a){var A=new ArrayBuffer(68);l=new Uint8Array(A),d=new Uint32Array(A)}!i.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(l){return"[object Array]"===Object.prototype.toString.call(l)}),!a||!i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(l){return"object"==typeof l&&l.buffer&&l.buffer.constructor===ArrayBuffer});var b=function(l){return function(e){return new t(!0).update(e)[l]()}},v=function(){var l=b("hex");h&&(l=w(l)),l.create=function(){return new t},l.update=function(e){return l.create().update(e)};for(var e=0;e<c.length;++e){var a=c[e];l[a]=b(a)}return l},w=function w(t){var e=eval("require('crypto')"),i=eval("require('buffer').Buffer"),s=function(l){if("string"==typeof l)return e.createHash("md5").update(l,"utf8").digest("hex");if(null===l||void 0===l)throw r;return l.constructor===ArrayBuffer&&(l=new Uint8Array(l)),Array.isArray(l)||ArrayBuffer.isView(l)||l.constructor===i?e.createHash("md5").update(new i(l)).digest("hex"):t(l)};return s};t.prototype.update=function(l){if(!this.finalized){var e,u=typeof l;if("string"!==u){if("object"!==u)throw r;if(null===l)throw r;if(a&&l.constructor===ArrayBuffer)l=new Uint8Array(l);else if(!(Array.isArray(l)||a&&ArrayBuffer.isView(l)))throw r;e=!0}for(var v,b,t=0,n=l.length,o=this.blocks,i=this.buffer8;t<n;){if(this.hashed&&(this.hashed=!1,o[0]=o[16],o[16]=o[1]=o[2]=o[3]=o[4]=o[5]=o[6]=o[7]=o[8]=o[9]=o[10]=o[11]=o[12]=o[13]=o[14]=o[15]=0),e)if(a)for(b=this.start;t<n&&b<64;++t)i[b++]=l[t];else for(b=this.start;t<n&&b<64;++t)o[b>>2]|=l[t]<<y[3&b++];else if(a)for(b=this.start;t<n&&b<64;++t)(v=l.charCodeAt(t))<128?i[b++]=v:v<2048?(i[b++]=192|v>>6,i[b++]=128|63&v):v<55296||v>=57344?(i[b++]=224|v>>12,i[b++]=128|v>>6&63,i[b++]=128|63&v):(v=65536+((1023&v)<<10|1023&l.charCodeAt(++t)),i[b++]=240|v>>18,i[b++]=128|v>>12&63,i[b++]=128|v>>6&63,i[b++]=128|63&v);else for(b=this.start;t<n&&b<64;++t)(v=l.charCodeAt(t))<128?o[b>>2]|=v<<y[3&b++]:v<2048?(o[b>>2]|=(192|v>>6)<<y[3&b++],o[b>>2]|=(128|63&v)<<y[3&b++]):v<55296||v>=57344?(o[b>>2]|=(224|v>>12)<<y[3&b++],o[b>>2]|=(128|v>>6&63)<<y[3&b++],o[b>>2]|=(128|63&v)<<y[3&b++]):(v=65536+((1023&v)<<10|1023&l.charCodeAt(++t)),o[b>>2]|=(240|v>>18)<<y[3&b++],o[b>>2]|=(128|v>>12&63)<<y[3&b++],o[b>>2]|=(128|v>>6&63)<<y[3&b++],o[b>>2]|=(128|63&v)<<y[3&b++]);this.lastByteIndex=b,this.bytes+=b-this.start,b>=64?(this.start=b-64,this.hash(),this.hashed=!0):this.start=b}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var l=this.blocks,e=this.lastByteIndex;l[e>>2]|=u[3&e],e>=56&&(this.hashed||this.hash(),l[0]=l[16],l[16]=l[1]=l[2]=l[3]=l[4]=l[5]=l[6]=l[7]=l[8]=l[9]=l[10]=l[11]=l[12]=l[13]=l[14]=l[15]=0),l[14]=this.bytes<<3,l[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},t.prototype.hash=function(){var l,e,a,u,v,b,t=this.blocks;this.first?e=((e=((l=((l=t[0]-680876937)<<7|l>>>25)-271733879<<0)^(a=((a=(-271733879^(u=((u=(-1732584194^2004318071&l)+t[1]-117830708)<<12|u>>>20)+l<<0)&(-271733879^l))+t[2]-1126478375)<<17|a>>>15)+u<<0)&(u^l))+t[3]-1316259209)<<22|e>>>10)+a<<0:(l=this.h0,e=this.h1,a=this.h2,e=((e+=((l=((l+=((u=this.h3)^e&(a^u))+t[0]-680876936)<<7|l>>>25)+e<<0)^(a=((a+=(e^(u=((u+=(a^l&(e^a))+t[1]-389564586)<<12|u>>>20)+l<<0)&(l^e))+t[2]+606105819)<<17|a>>>15)+u<<0)&(u^l))+t[3]-1044525330)<<22|e>>>10)+a<<0),e=((e+=((l=((l+=(u^e&(a^u))+t[4]-176418897)<<7|l>>>25)+e<<0)^(a=((a+=(e^(u=((u+=(a^l&(e^a))+t[5]+1200080426)<<12|u>>>20)+l<<0)&(l^e))+t[6]-1473231341)<<17|a>>>15)+u<<0)&(u^l))+t[7]-45705983)<<22|e>>>10)+a<<0,e=((e+=((l=((l+=(u^e&(a^u))+t[8]+1770035416)<<7|l>>>25)+e<<0)^(a=((a+=(e^(u=((u+=(a^l&(e^a))+t[9]-1958414417)<<12|u>>>20)+l<<0)&(l^e))+t[10]-42063)<<17|a>>>15)+u<<0)&(u^l))+t[11]-1990404162)<<22|e>>>10)+a<<0,e=((e+=((l=((l+=(u^e&(a^u))+t[12]+1804603682)<<7|l>>>25)+e<<0)^(a=((a+=(e^(u=((u+=(a^l&(e^a))+t[13]-40341101)<<12|u>>>20)+l<<0)&(l^e))+t[14]-1502002290)<<17|a>>>15)+u<<0)&(u^l))+t[15]+1236535329)<<22|e>>>10)+a<<0,e=((e+=((u=((u+=(e^a&((l=((l+=(a^u&(e^a))+t[1]-165796510)<<5|l>>>27)+e<<0)^e))+t[6]-1069501632)<<9|u>>>23)+l<<0)^l&((a=((a+=(l^e&(u^l))+t[11]+643717713)<<14|a>>>18)+u<<0)^u))+t[0]-373897302)<<20|e>>>12)+a<<0,e=((e+=((u=((u+=(e^a&((l=((l+=(a^u&(e^a))+t[5]-701558691)<<5|l>>>27)+e<<0)^e))+t[10]+38016083)<<9|u>>>23)+l<<0)^l&((a=((a+=(l^e&(u^l))+t[15]-660478335)<<14|a>>>18)+u<<0)^u))+t[4]-405537848)<<20|e>>>12)+a<<0,e=((e+=((u=((u+=(e^a&((l=((l+=(a^u&(e^a))+t[9]+568446438)<<5|l>>>27)+e<<0)^e))+t[14]-1019803690)<<9|u>>>23)+l<<0)^l&((a=((a+=(l^e&(u^l))+t[3]-187363961)<<14|a>>>18)+u<<0)^u))+t[8]+1163531501)<<20|e>>>12)+a<<0,e=((e+=((u=((u+=(e^a&((l=((l+=(a^u&(e^a))+t[13]-1444681467)<<5|l>>>27)+e<<0)^e))+t[2]-51403784)<<9|u>>>23)+l<<0)^l&((a=((a+=(l^e&(u^l))+t[7]+1735328473)<<14|a>>>18)+u<<0)^u))+t[12]-1926607734)<<20|e>>>12)+a<<0,e=((e+=((b=(u=((u+=((v=e^a)^(l=((l+=(v^u)+t[5]-378558)<<4|l>>>28)+e<<0))+t[8]-2022574463)<<11|u>>>21)+l<<0)^l)^(a=((a+=(b^e)+t[11]+1839030562)<<16|a>>>16)+u<<0))+t[14]-35309556)<<23|e>>>9)+a<<0,e=((e+=((b=(u=((u+=((v=e^a)^(l=((l+=(v^u)+t[1]-1530992060)<<4|l>>>28)+e<<0))+t[4]+1272893353)<<11|u>>>21)+l<<0)^l)^(a=((a+=(b^e)+t[7]-155497632)<<16|a>>>16)+u<<0))+t[10]-1094730640)<<23|e>>>9)+a<<0,e=((e+=((b=(u=((u+=((v=e^a)^(l=((l+=(v^u)+t[13]+681279174)<<4|l>>>28)+e<<0))+t[0]-358537222)<<11|u>>>21)+l<<0)^l)^(a=((a+=(b^e)+t[3]-722521979)<<16|a>>>16)+u<<0))+t[6]+76029189)<<23|e>>>9)+a<<0,e=((e+=((b=(u=((u+=((v=e^a)^(l=((l+=(v^u)+t[9]-640364487)<<4|l>>>28)+e<<0))+t[12]-421815835)<<11|u>>>21)+l<<0)^l)^(a=((a+=(b^e)+t[15]+530742520)<<16|a>>>16)+u<<0))+t[2]-995338651)<<23|e>>>9)+a<<0,e=((e+=((u=((u+=(e^((l=((l+=(a^(e|~u))+t[0]-198630844)<<6|l>>>26)+e<<0)|~a))+t[7]+1126891415)<<10|u>>>22)+l<<0)^((a=((a+=(l^(u|~e))+t[14]-1416354905)<<15|a>>>17)+u<<0)|~l))+t[5]-57434055)<<21|e>>>11)+a<<0,e=((e+=((u=((u+=(e^((l=((l+=(a^(e|~u))+t[12]+1700485571)<<6|l>>>26)+e<<0)|~a))+t[3]-1894986606)<<10|u>>>22)+l<<0)^((a=((a+=(l^(u|~e))+t[10]-1051523)<<15|a>>>17)+u<<0)|~l))+t[1]-2054922799)<<21|e>>>11)+a<<0,e=((e+=((u=((u+=(e^((l=((l+=(a^(e|~u))+t[8]+1873313359)<<6|l>>>26)+e<<0)|~a))+t[15]-30611744)<<10|u>>>22)+l<<0)^((a=((a+=(l^(u|~e))+t[6]-1560198380)<<15|a>>>17)+u<<0)|~l))+t[13]+1309151649)<<21|e>>>11)+a<<0,e=((e+=((u=((u+=(e^((l=((l+=(a^(e|~u))+t[4]-145523070)<<6|l>>>26)+e<<0)|~a))+t[11]-1120210379)<<10|u>>>22)+l<<0)^((a=((a+=(l^(u|~e))+t[2]+718787259)<<15|a>>>17)+u<<0)|~l))+t[9]-343485551)<<21|e>>>11)+a<<0,this.first?(this.h0=l+1732584193<<0,this.h1=e-271733879<<0,this.h2=a-1732584194<<0,this.h3=u+271733878<<0,this.first=!1):(this.h0=this.h0+l<<0,this.h1=this.h1+e<<0,this.h2=this.h2+a<<0,this.h3=this.h3+u<<0)},t.prototype.hex=function(){this.finalize();var l=this.h0,e=this.h1,a=this.h2,u=this.h3;return n[l>>4&15]+n[15&l]+n[l>>12&15]+n[l>>8&15]+n[l>>20&15]+n[l>>16&15]+n[l>>28&15]+n[l>>24&15]+n[e>>4&15]+n[15&e]+n[e>>12&15]+n[e>>8&15]+n[e>>20&15]+n[e>>16&15]+n[e>>28&15]+n[e>>24&15]+n[a>>4&15]+n[15&a]+n[a>>12&15]+n[a>>8&15]+n[a>>20&15]+n[a>>16&15]+n[a>>28&15]+n[a>>24&15]+n[u>>4&15]+n[15&u]+n[u>>12&15]+n[u>>8&15]+n[u>>20&15]+n[u>>16&15]+n[u>>28&15]+n[u>>24&15]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var l=this.h0,e=this.h1,a=this.h2,u=this.h3;return[255&l,l>>8&255,l>>16&255,l>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&a,a>>8&255,a>>16&255,a>>24&255,255&u,u>>8&255,u>>16&255,u>>24&255]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var l=new ArrayBuffer(16),e=new Uint32Array(l);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,l},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.base64=function(){for(var l,e,a,u="",v=this.array(),b=0;b<15;)l=v[b++],e=v[b++],a=v[b++],u+=p[l>>>2]+p[63&(l<<4|e>>>4)]+p[63&(e<<2|a>>>6)]+p[63&a];return l=v[b],u+(p[l>>>2]+p[l<<4&63]+"==")};var _=v();f?module.exports=_:(i.md5=_,o&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return _}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))},"66fd":function(l,e,a){"use strict";a.r(e),function(l){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var a=Object.freeze({});function u(l){return void 0===l||null===l}function v(l){return void 0!==l&&null!==l}function b(l){return!0===l}function t(l){return!1===l}function n(l){return"string"===typeof l||"number"===typeof l||"symbol"===typeof l||"boolean"===typeof l}function r(l){return null!==l&&"object"===typeof l}var o=Object.prototype.toString;function i(l){return"[object Object]"===o.call(l)}function s(l){return"[object RegExp]"===o.call(l)}function c(l){var e=parseFloat(String(l));return e>=0&&Math.floor(e)===e&&isFinite(l)}function f(l){return v(l)&&"function"===typeof l.then&&"function"===typeof l.catch}function p(l){return null==l?"":Array.isArray(l)||i(l)&&l.toString===o?JSON.stringify(l,null,2):String(l)}function h(l){var e=parseFloat(l);return isNaN(e)?l:e}function d(l,e){for(var a=Object.create(null),u=l.split(","),v=0;v<u.length;v++)a[u[v]]=!0;return e?function(l){return a[l.toLowerCase()]}:function(l){return a[l]}}d("slot,component",!0);var g=d("key,ref,slot,slot-scope,is");function y(l,e){if(l.length){var a=l.indexOf(e);if(a>-1)return l.splice(a,1)}}var m=Object.prototype.hasOwnProperty;function _(l,e){return m.call(l,e)}function w(l){var e=Object.create(null);return function(a){var u=e[a];return u||(e[a]=l(a))}}var k=/-(\w)/g,A=w(function(l){return l.replace(k,function(l,e){return e?e.toUpperCase():""})}),x=w(function(l){return l.charAt(0).toUpperCase()+l.slice(1)}),T=/\B([A-Z])/g,O=w(function(l){return l.replace(T,"-$1").toLowerCase()});function S(l,e){function a(a){var u=arguments.length;return u?u>1?l.apply(e,arguments):l.call(e,a):l.call(e)}return a._length=l.length,a}function C(l,e){return l.bind(e)}var $=Function.prototype.bind?C:S;function D(l,e){e=e||0;var a=l.length-e,u=new Array(a);while(a--)u[a]=l[a+e];return u}function B(l,e){for(var a in e)l[a]=e[a];return l}function E(l){for(var e={},a=0;a<l.length;a++)l[a]&&B(e,l[a]);return e}function P(l,e,a){}var j=function(l,e,a){return!1},N=function(l){return l};function R(l,e){if(l===e)return!0;var a=r(l),u=r(e);if(!a||!u)return!a&&!u&&String(l)===String(e);try{var v=Array.isArray(l),b=Array.isArray(e);if(v&&b)return l.length===e.length&&l.every(function(l,a){return R(l,e[a])});if(l instanceof Date&&e instanceof Date)return l.getTime()===e.getTime();if(v||b)return!1;var t=Object.keys(l),n=Object.keys(e);return t.length===n.length&&t.every(function(a){return R(l[a],e[a])})}catch(o){return!1}}function M(l,e){for(var a=0;a<l.length;a++)if(R(l[a],e))return a;return-1}function I(l){var e=!1;return function(){e||(e=!0,l.apply(this,arguments))}}var L=["component","directive","filter"],F=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:j,isReservedAttr:j,isUnknownElement:j,getTagNamespace:P,parsePlatformTagName:N,mustUseProp:j,async:!0,_lifecycleHooks:F},V=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function U(l){var e=(l+"").charCodeAt(0);return 36===e||95===e}function H(l,e,a,u){Object.defineProperty(l,e,{value:a,enumerable:!!u,writable:!0,configurable:!0})}var z=new RegExp("[^"+V.source+".$_\\d]");function G(l){if(!z.test(l)){var e=l.split(".");return function(l){for(var a=0;a<e.length;a++){if(!l)return;l=l[e[a]]}return l}}}var W,J="__proto__"in{},K="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=Y&&WXEnvironment.platform.toLowerCase(),Q=K&&window.navigator.userAgent.toLowerCase(),Z=Q&&/msie|trident/.test(Q),ll=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),el=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===X),al=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(K)try{var ul={};Object.defineProperty(ul,"passive",{get:function(){}}),window.addEventListener("test-passive",null,ul)}catch(lv){}var vl=function(){return void 0===W&&(W=!K&&!Y&&"undefined"!==typeof l&&(l["process"]&&"server"===l["process"].env.VUE_ENV)),W},bl=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function tl(l){return"function"===typeof l&&/native code/.test(l.toString())}var nl,rl="undefined"!==typeof Symbol&&tl(Symbol)&&"undefined"!==typeof Reflect&&tl(Reflect.ownKeys);nl="undefined"!==typeof Set&&tl(Set)?Set:function(){function l(){this.set=Object.create(null)}return l.prototype.has=function(l){return!0===this.set[l]},l.prototype.add=function(l){this.set[l]=!0},l.prototype.clear=function(){this.set=Object.create(null)},l}();var ol=P,il=0,sl=function(){this.id=il++,this.subs=[]};function cl(l){sl.SharedObject.targetStack.push(l),sl.SharedObject.target=l}function fl(){sl.SharedObject.targetStack.pop(),sl.SharedObject.target=sl.SharedObject.targetStack[sl.SharedObject.targetStack.length-1]}sl.prototype.addSub=function(l){this.subs.push(l)},sl.prototype.removeSub=function(l){y(this.subs,l)},sl.prototype.depend=function(){sl.SharedObject.target&&sl.SharedObject.target.addDep(this)},sl.prototype.notify=function(){var l=this.subs.slice();for(var e=0,a=l.length;e<a;e++)l[e].update()},sl.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},sl.SharedObject.target=null,sl.SharedObject.targetStack=[];var pl=function(l,e,a,u,v,b,t,n){this.tag=l,this.data=e,this.children=a,this.text=u,this.elm=v,this.ns=void 0,this.context=b,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=t,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=n,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},hl={child:{configurable:!0}};hl.child.get=function(){return this.componentInstance},Object.defineProperties(pl.prototype,hl);var dl=function(l){void 0===l&&(l="");var e=new pl;return e.text=l,e.isComment=!0,e};function gl(l){return new pl(void 0,void 0,void 0,String(l))}function yl(l){var e=new pl(l.tag,l.data,l.children&&l.children.slice(),l.text,l.elm,l.context,l.componentOptions,l.asyncFactory);return e.ns=l.ns,e.isStatic=l.isStatic,e.key=l.key,e.isComment=l.isComment,e.fnContext=l.fnContext,e.fnOptions=l.fnOptions,e.fnScopeId=l.fnScopeId,e.asyncMeta=l.asyncMeta,e.isCloned=!0,e}var ml=Array.prototype,_l=Object.create(ml),wl=["push","pop","shift","unshift","splice","sort","reverse"];wl.forEach(function(l){var e=ml[l];H(_l,l,function(){var a=[],u=arguments.length;while(u--)a[u]=arguments[u];var v,b=e.apply(this,a),t=this.__ob__;switch(l){case"push":case"unshift":v=a;break;case"splice":v=a.slice(2);break}return v&&t.observeArray(v),t.dep.notify(),b})});var kl=Object.getOwnPropertyNames(_l),Al=!0;function xl(l){Al=l}var Tl=function(l){this.value=l,this.dep=new sl,this.vmCount=0,H(l,"__ob__",this),Array.isArray(l)?(J?l.push!==l.__proto__.push?Sl(l,_l,kl):Ol(l,_l):Sl(l,_l,kl),this.observeArray(l)):this.walk(l)};function Ol(l,e){l.__proto__=e}function Sl(l,e,a){for(var u=0,v=a.length;u<v;u++){var b=a[u];H(l,b,e[b])}}function Cl(l,e){var a;if(r(l)&&!(l instanceof pl))return _(l,"__ob__")&&l.__ob__ instanceof Tl?a=l.__ob__:Al&&!vl()&&(Array.isArray(l)||i(l))&&Object.isExtensible(l)&&!l._isVue&&(a=new Tl(l)),e&&a&&a.vmCount++,a}function $l(l,e,a,u,v){var b=new sl,t=Object.getOwnPropertyDescriptor(l,e);if(!t||!1!==t.configurable){var n=t&&t.get,r=t&&t.set;n&&!r||2!==arguments.length||(a=l[e]);var o=!v&&Cl(a);Object.defineProperty(l,e,{enumerable:!0,configurable:!0,get:function(){var e=n?n.call(l):a;return sl.SharedObject.target&&(b.depend(),o&&(o.dep.depend(),Array.isArray(e)&&El(e))),e},set:function(e){var u=n?n.call(l):a;e===u||e!==e&&u!==u||n&&!r||(r?r.call(l,e):a=e,o=!v&&Cl(e),b.notify())}})}}function Dl(l,e,a){if(Array.isArray(l)&&c(e))return l.length=Math.max(l.length,e),l.splice(e,1,a),a;if(e in l&&!(e in Object.prototype))return l[e]=a,a;var u=l.__ob__;return l._isVue||u&&u.vmCount?a:u?($l(u.value,e,a),u.dep.notify(),a):(l[e]=a,a)}function Bl(l,e){if(Array.isArray(l)&&c(e))l.splice(e,1);else{var a=l.__ob__;l._isVue||a&&a.vmCount||_(l,e)&&(delete l[e],a&&a.dep.notify())}}function El(l){for(var e=void 0,a=0,u=l.length;a<u;a++)e=l[a],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&El(e)}Tl.prototype.walk=function(l){for(var e=Object.keys(l),a=0;a<e.length;a++)$l(l,e[a])},Tl.prototype.observeArray=function(l){for(var e=0,a=l.length;e<a;e++)Cl(l[e])};var Pl=q.optionMergeStrategies;function jl(l,e){if(!e)return l;for(var a,u,v,b=rl?Reflect.ownKeys(e):Object.keys(e),t=0;t<b.length;t++)a=b[t],"__ob__"!==a&&(u=l[a],v=e[a],_(l,a)?u!==v&&i(u)&&i(v)&&jl(u,v):Dl(l,a,v));return l}function Nl(l,e,a){return a?function(){var u="function"===typeof e?e.call(a,a):e,v="function"===typeof l?l.call(a,a):l;return u?jl(u,v):v}:e?l?function(){return jl("function"===typeof e?e.call(this,this):e,"function"===typeof l?l.call(this,this):l)}:e:l}function Rl(l,e){var a=e?l?l.concat(e):Array.isArray(e)?e:[e]:l;return a?Ml(a):a}function Ml(l){for(var e=[],a=0;a<l.length;a++)-1===e.indexOf(l[a])&&e.push(l[a]);return e}function Il(l,e,a,u){var v=Object.create(l||null);return e?B(v,e):v}Pl.data=function(l,e,a){return a?Nl(l,e,a):e&&"function"!==typeof e?l:Nl(l,e)},F.forEach(function(l){Pl[l]=Rl}),L.forEach(function(l){Pl[l+"s"]=Il}),Pl.watch=function(l,e,a,u){if(l===al&&(l=void 0),e===al&&(e=void 0),!e)return Object.create(l||null);if(!l)return e;var v={};for(var b in B(v,l),e){var t=v[b],n=e[b];t&&!Array.isArray(t)&&(t=[t]),v[b]=t?t.concat(n):Array.isArray(n)?n:[n]}return v},Pl.props=Pl.methods=Pl.inject=Pl.computed=function(l,e,a,u){if(!l)return e;var v=Object.create(null);return B(v,l),e&&B(v,e),v},Pl.provide=Nl;var Ll=function(l,e){return void 0===e?l:e};function Fl(l,e){var a=l.props;if(a){var u,v,b,t={};if(Array.isArray(a)){u=a.length;while(u--)v=a[u],"string"===typeof v&&(b=A(v),t[b]={type:null})}else if(i(a))for(var n in a)v=a[n],b=A(n),t[b]=i(v)?v:{type:v};else 0;l.props=t}}function ql(l,e){var a=l.inject;if(a){var u=l.inject={};if(Array.isArray(a))for(var v=0;v<a.length;v++)u[a[v]]={from:a[v]};else if(i(a))for(var b in a){var t=a[b];u[b]=i(t)?B({from:b},t):{from:t}}else 0}}function Vl(l){var e=l.directives;if(e)for(var a in e){var u=e[a];"function"===typeof u&&(e[a]={bind:u,update:u})}}function Ul(l,e,a){if("function"===typeof e&&(e=e.options),Fl(e,a),ql(e,a),Vl(e),!e._base&&(e.extends&&(l=Ul(l,e.extends,a)),e.mixins))for(var u=0,v=e.mixins.length;u<v;u++)l=Ul(l,e.mixins[u],a);var b,t={};for(b in l)n(b);for(b in e)_(l,b)||n(b);function n(u){var v=Pl[u]||Ll;t[u]=v(l[u],e[u],a,u)}return t}function Hl(l,e,a,u){if("string"===typeof a){var v=l[e];if(_(v,a))return v[a];var b=A(a);if(_(v,b))return v[b];var t=x(b);if(_(v,t))return v[t];var n=v[a]||v[b]||v[t];return n}}function zl(l,e,a,u){var v=e[l],b=!_(a,l),t=a[l],n=Kl(Boolean,v.type);if(n>-1)if(b&&!_(v,"default"))t=!1;else if(""===t||t===O(l)){var r=Kl(String,v.type);(r<0||n<r)&&(t=!0)}if(void 0===t){t=Gl(u,v,l);var o=Al;xl(!0),Cl(t),xl(o)}return t}function Gl(l,e,a){if(_(e,"default")){var u=e.default;return l&&l.$options.propsData&&void 0===l.$options.propsData[a]&&void 0!==l._props[a]?l._props[a]:"function"===typeof u&&"Function"!==Wl(e.type)?u.call(l):u}}function Wl(l){var e=l&&l.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Jl(l,e){return Wl(l)===Wl(e)}function Kl(l,e){if(!Array.isArray(e))return Jl(e,l)?0:-1;for(var a=0,u=e.length;a<u;a++)if(Jl(e[a],l))return a;return-1}function Yl(l,e,a){cl();try{if(e){var u=e;while(u=u.$parent){var v=u.$options.errorCaptured;if(v)for(var b=0;b<v.length;b++)try{var t=!1===v[b].call(u,l,e,a);if(t)return}catch(lv){Ql(lv,u,"errorCaptured hook")}}}Ql(l,e,a)}finally{fl()}}function Xl(l,e,a,u,v){var b;try{b=a?l.apply(e,a):l.call(e),b&&!b._isVue&&f(b)&&!b._handled&&(b.catch(function(l){return Yl(l,u,v+" (Promise/async)")}),b._handled=!0)}catch(lv){Yl(lv,u,v)}return b}function Ql(l,e,a){if(q.errorHandler)try{return q.errorHandler.call(null,l,e,a)}catch(lv){lv!==l&&Zl(lv,null,"config.errorHandler")}Zl(l,e,a)}function Zl(l,e,a){if(!K&&!Y||"undefined"===typeof console)throw l;console.error(l)}var le,ee=[],ae=!1;function ue(){ae=!1;var l=ee.slice(0);ee.length=0;for(var e=0;e<l.length;e++)l[e]()}if("undefined"!==typeof Promise&&tl(Promise)){var ve=Promise.resolve();le=function(){ve.then(ue),el&&setTimeout(P)}}else if(Z||"undefined"===typeof MutationObserver||!tl(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())le="undefined"!==typeof setImmediate&&tl(setImmediate)?function(){setImmediate(ue)}:function(){setTimeout(ue,0)};else{var be=1,te=new MutationObserver(ue),ne=document.createTextNode(String(be));te.observe(ne,{characterData:!0}),le=function(){be=(be+1)%2,ne.data=String(be)}}function re(l,e){var a;if(ee.push(function(){if(l)try{l.call(e)}catch(lv){Yl(lv,e,"nextTick")}else a&&a(e)}),ae||(ae=!0,le()),!l&&"undefined"!==typeof Promise)return new Promise(function(l){a=l})}var oe=new nl;function ie(l){se(l,oe),oe.clear()}function se(l,e){var a,u,v=Array.isArray(l);if(!(!v&&!r(l)||Object.isFrozen(l)||l instanceof pl)){if(l.__ob__){var b=l.__ob__.dep.id;if(e.has(b))return;e.add(b)}if(v){a=l.length;while(a--)se(l[a],e)}else{u=Object.keys(l),a=u.length;while(a--)se(l[u[a]],e)}}}var ce=w(function(l){var e="&"===l.charAt(0);l=e?l.slice(1):l;var a="~"===l.charAt(0);l=a?l.slice(1):l;var u="!"===l.charAt(0);return l=u?l.slice(1):l,{name:l,once:a,capture:u,passive:e}});function fe(l,e){function a(){var l=arguments,u=a.fns;if(!Array.isArray(u))return Xl(u,null,arguments,e,"v-on handler");for(var v=u.slice(),b=0;b<v.length;b++)Xl(v[b],null,l,e,"v-on handler")}return a.fns=l,a}function pe(l,e,a,v,t,n){var r,o,i,s;for(r in l)o=l[r],i=e[r],s=ce(r),u(o)||(u(i)?(u(o.fns)&&(o=l[r]=fe(o,n)),b(s.once)&&(o=l[r]=t(s.name,o,s.capture)),a(s.name,o,s.capture,s.passive,s.params)):o!==i&&(i.fns=o,l[r]=i));for(r in e)u(l[r])&&(s=ce(r),v(s.name,e[r],s.capture))}function he(l,e,a){var b=e.options.props;if(!u(b)){var t={},n=l.attrs,r=l.props;if(v(n)||v(r))for(var o in b){var i=O(o);de(t,r,o,i,!0)||de(t,n,o,i,!1)}return t}}function de(l,e,a,u,b){if(v(e)){if(_(e,a))return l[a]=e[a],b||delete e[a],!0;if(_(e,u))return l[a]=e[u],b||delete e[u],!0}return!1}function ge(l){for(var e=0;e<l.length;e++)if(Array.isArray(l[e]))return Array.prototype.concat.apply([],l);return l}function ye(l){return n(l)?[gl(l)]:Array.isArray(l)?_e(l):void 0}function me(l){return v(l)&&v(l.text)&&t(l.isComment)}function _e(l,e){var a,t,r,o,i=[];for(a=0;a<l.length;a++)t=l[a],u(t)||"boolean"===typeof t||(r=i.length-1,o=i[r],Array.isArray(t)?t.length>0&&(t=_e(t,(e||"")+"_"+a),me(t[0])&&me(o)&&(i[r]=gl(o.text+t[0].text),t.shift()),i.push.apply(i,t)):n(t)?me(o)?i[r]=gl(o.text+t):""!==t&&i.push(gl(t)):me(t)&&me(o)?i[r]=gl(o.text+t.text):(b(l._isVList)&&v(t.tag)&&u(t.key)&&v(e)&&(t.key="__vlist"+e+"_"+a+"__"),i.push(t)));return i}function we(l){var e=l.$options.provide;e&&(l._provided="function"===typeof e?e.call(l):e)}function ke(l){var e=Ae(l.$options.inject,l);e&&(xl(!1),Object.keys(e).forEach(function(a){$l(l,a,e[a])}),xl(!0))}function Ae(l,e){if(l){for(var a=Object.create(null),u=rl?Reflect.ownKeys(l):Object.keys(l),v=0;v<u.length;v++){var b=u[v];if("__ob__"!==b){var t=l[b].from,n=e;while(n){if(n._provided&&_(n._provided,t)){a[b]=n._provided[t];break}n=n.$parent}if(!n)if("default"in l[b]){var r=l[b].default;a[b]="function"===typeof r?r.call(e):r}else 0}}return a}}function xe(l,e){if(!l||!l.length)return{};for(var a={},u=0,v=l.length;u<v;u++){var b=l[u],t=b.data;if(t&&t.attrs&&t.attrs.slot&&delete t.attrs.slot,b.context!==e&&b.fnContext!==e||!t||null==t.slot)b.asyncMeta&&b.asyncMeta.data&&"page"===b.asyncMeta.data.slot?(a["page"]||(a["page"]=[])).push(b):(a.default||(a.default=[])).push(b);else{var n=t.slot,r=a[n]||(a[n]=[]);"template"===b.tag?r.push.apply(r,b.children||[]):r.push(b)}}for(var o in a)a[o].every(Te)&&delete a[o];return a}function Te(l){return l.isComment&&!l.asyncFactory||" "===l.text}function Oe(l,e,u){var v,b=Object.keys(e).length>0,t=l?!!l.$stable:!b,n=l&&l.$key;if(l){if(l._normalized)return l._normalized;if(t&&u&&u!==a&&n===u.$key&&!b&&!u.$hasNormal)return u;for(var r in v={},l)l[r]&&"$"!==r[0]&&(v[r]=Se(e,r,l[r]))}else v={};for(var o in e)o in v||(v[o]=Ce(e,o));return l&&Object.isExtensible(l)&&(l._normalized=v),H(v,"$stable",t),H(v,"$key",n),H(v,"$hasNormal",b),v}function Se(l,e,a){var u=function(){var l=arguments.length?a.apply(null,arguments):a({});return l=l&&"object"===typeof l&&!Array.isArray(l)?[l]:ye(l),l&&(0===l.length||1===l.length&&l[0].isComment)?void 0:l};return a.proxy&&Object.defineProperty(l,e,{get:u,enumerable:!0,configurable:!0}),u}function Ce(l,e){return function(){return l[e]}}function $e(l,e){var a,u,b,t,n;if(Array.isArray(l)||"string"===typeof l)for(a=new Array(l.length),u=0,b=l.length;u<b;u++)a[u]=e(l[u],u);else if("number"===typeof l)for(a=new Array(l),u=0;u<l;u++)a[u]=e(u+1,u);else if(r(l))if(rl&&l[Symbol.iterator]){a=[];var o=l[Symbol.iterator](),i=o.next();while(!i.done)a.push(e(i.value,a.length)),i=o.next()}else for(t=Object.keys(l),a=new Array(t.length),u=0,b=t.length;u<b;u++)n=t[u],a[u]=e(l[n],n,u);return v(a)||(a=[]),a._isVList=!0,a}function De(l,e,a,u){var v,b=this.$scopedSlots[l];b?(a=a||{},u&&(a=B(B({},u),a)),v=b(a)||e):v=this.$slots[l]||e;var t=a&&a.slot;return t?this.$createElement("template",{slot:t},v):v}function Be(l){return Hl(this.$options,"filters",l,!0)||N}function Ee(l,e){return Array.isArray(l)?-1===l.indexOf(e):l!==e}function Pe(l,e,a,u,v){var b=q.keyCodes[e]||a;return v&&u&&!q.keyCodes[e]?Ee(v,u):b?Ee(b,l):u?O(u)!==e:void 0}function je(l,e,a,u,v){if(a)if(r(a)){var b;Array.isArray(a)&&(a=E(a));var t=function(t){if("class"===t||"style"===t||g(t))b=l;else{var n=l.attrs&&l.attrs.type;b=u||q.mustUseProp(e,n,t)?l.domProps||(l.domProps={}):l.attrs||(l.attrs={})}var r=A(t),o=O(t);if(!(r in b)&&!(o in b)&&(b[t]=a[t],v)){var i=l.on||(l.on={});i["update:"+t]=function(l){a[t]=l}}};for(var n in a)t(n)}else;return l}function Ne(l,e){var a=this._staticTrees||(this._staticTrees=[]),u=a[l];return u&&!e?u:(u=a[l]=this.$options.staticRenderFns[l].call(this._renderProxy,null,this),Me(u,"__static__"+l,!1),u)}function Re(l,e,a){return Me(l,"__once__"+e+(a?"_"+a:""),!0),l}function Me(l,e,a){if(Array.isArray(l))for(var u=0;u<l.length;u++)l[u]&&"string"!==typeof l[u]&&Ie(l[u],e+"_"+u,a);else Ie(l,e,a)}function Ie(l,e,a){l.isStatic=!0,l.key=e,l.isOnce=a}function Le(l,e){if(e)if(i(e)){var a=l.on=l.on?B({},l.on):{};for(var u in e){var v=a[u],b=e[u];a[u]=v?[].concat(v,b):b}}else;return l}function Fe(l,e,a,u){e=e||{$stable:!a};for(var v=0;v<l.length;v++){var b=l[v];Array.isArray(b)?Fe(b,e,a):b&&(b.proxy&&(b.fn.proxy=!0),e[b.key]=b.fn)}return u&&(e.$key=u),e}function qe(l,e){for(var a=0;a<e.length;a+=2){var u=e[a];"string"===typeof u&&u&&(l[e[a]]=e[a+1])}return l}function Ve(l,e){return"string"===typeof l?e+l:l}function Ue(l){l._o=Re,l._n=h,l._s=p,l._l=$e,l._t=De,l._q=R,l._i=M,l._m=Ne,l._f=Be,l._k=Pe,l._b=je,l._v=gl,l._e=dl,l._u=Fe,l._g=Le,l._d=qe,l._p=Ve}function He(l,e,u,v,t){var n,r=this,o=t.options;_(v,"_uid")?(n=Object.create(v),n._original=v):(n=v,v=v._original);var i=b(o._compiled),s=!i;this.data=l,this.props=e,this.children=u,this.parent=v,this.listeners=l.on||a,this.injections=Ae(o.inject,v),this.slots=function(){return r.$slots||Oe(l.scopedSlots,r.$slots=xe(u,v)),r.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Oe(l.scopedSlots,this.slots())}}),i&&(this.$options=o,this.$slots=this.slots(),this.$scopedSlots=Oe(l.scopedSlots,this.$slots)),o._scopeId?this._c=function(l,e,a,u){var b=ua(n,l,e,a,u,s);return b&&!Array.isArray(b)&&(b.fnScopeId=o._scopeId,b.fnContext=v),b}:this._c=function(l,e,a,u){return ua(n,l,e,a,u,s)}}function ze(l,e,u,b,t){var n=l.options,r={},o=n.props;if(v(o))for(var i in o)r[i]=zl(i,o,e||a);else v(u.attrs)&&We(r,u.attrs),v(u.props)&&We(r,u.props);var s=new He(u,r,t,b,l),c=n.render.call(null,s._c,s);if(c instanceof pl)return Ge(c,u,s.parent,n,s);if(Array.isArray(c)){for(var f=ye(c)||[],p=new Array(f.length),h=0;h<f.length;h++)p[h]=Ge(f[h],u,s.parent,n,s);return p}}function Ge(l,e,a,u,v){var b=yl(l);return b.fnContext=a,b.fnOptions=u,e.slot&&((b.data||(b.data={})).slot=e.slot),b}function We(l,e){for(var a in e)l[A(a)]=e[a]}Ue(He.prototype);var Je={init:function(l,e){if(l.componentInstance&&!l.componentInstance._isDestroyed&&l.data.keepAlive){var a=l;Je.prepatch(a,a)}else{var u=l.componentInstance=Xe(l,ka);u.$mount(e?l.elm:void 0,e)}},prepatch:function(l,e){var a=e.componentOptions,u=e.componentInstance=l.componentInstance;Oa(u,a.propsData,a.listeners,e,a.children)},insert:function(l){var e=l.context,a=l.componentInstance;a._isMounted||(a._isMounted=!0,Da(a,"mounted")),l.data.keepAlive&&(e._isMounted?Va(a):Ca(a,!0))},destroy:function(l){var e=l.componentInstance;e._isDestroyed||(l.data.keepAlive?$a(e,!0):e.$destroy())}},Ke=Object.keys(Je);function Ye(l,e,a,t,n){if(!u(l)){var o=a.$options._base;if(r(l)&&(l=o.extend(l)),"function"===typeof l){var i;if(u(l.cid)&&(i=l,l=fa(i,o),void 0===l))return ca(i,e,a,t,n);e=e||{},su(l),v(e.model)&&la(l.options,e);var s=he(e,l,n);if(b(l.options.functional))return ze(l,s,e,a,t);var c=e.on;if(e.on=e.nativeOn,b(l.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}Qe(e);var p=l.options.name||n,h=new pl("vue-component-"+l.cid+(p?"-"+p:""),e,void 0,void 0,void 0,a,{Ctor:l,propsData:s,listeners:c,tag:n,children:t},i);return h}}}function Xe(l,e){var a={_isComponent:!0,_parentVnode:l,parent:e},u=l.data.inlineTemplate;return v(u)&&(a.render=u.render,a.staticRenderFns=u.staticRenderFns),new l.componentOptions.Ctor(a)}function Qe(l){for(var e=l.hook||(l.hook={}),a=0;a<Ke.length;a++){var u=Ke[a],v=e[u],b=Je[u];v===b||v&&v._merged||(e[u]=v?Ze(b,v):b)}}function Ze(l,e){var a=function(a,u){l(a,u),e(a,u)};return a._merged=!0,a}function la(l,e){var a=l.model&&l.model.prop||"value",u=l.model&&l.model.event||"input";(e.attrs||(e.attrs={}))[a]=e.model.value;var b=e.on||(e.on={}),t=b[u],n=e.model.callback;v(t)?(Array.isArray(t)?-1===t.indexOf(n):t!==n)&&(b[u]=[n].concat(t)):b[u]=n}var ea=1,aa=2;function ua(l,e,a,u,v,t){return(Array.isArray(a)||n(a))&&(v=u,u=a,a=void 0),b(t)&&(v=aa),va(l,e,a,u,v)}function va(l,e,a,u,b){if(v(a)&&v(a.__ob__))return dl();if(v(a)&&v(a.is)&&(e=a.is),!e)return dl();var t,n,r;(Array.isArray(u)&&"function"===typeof u[0]&&(a=a||{},a.scopedSlots={default:u[0]},u.length=0),b===aa?u=ye(u):b===ea&&(u=ge(u)),"string"===typeof e)?(n=l.$vnode&&l.$vnode.ns||q.getTagNamespace(e),t=q.isReservedTag(e)?new pl(q.parsePlatformTagName(e),a,u,void 0,void 0,l):a&&a.pre||!v(r=Hl(l.$options,"components",e))?new pl(e,a,u,void 0,void 0,l):Ye(r,a,l,u,e)):t=Ye(e,a,l,u);return Array.isArray(t)?t:v(t)?(v(n)&&ba(t,n),v(a)&&ta(a),t):dl()}function ba(l,e,a){if(l.ns=e,"foreignObject"===l.tag&&(e=void 0,a=!0),v(l.children))for(var t=0,n=l.children.length;t<n;t++){var r=l.children[t];v(r.tag)&&(u(r.ns)||b(a)&&"svg"!==r.tag)&&ba(r,e,a)}}function ta(l){r(l.style)&&ie(l.style),r(l.class)&&ie(l.class)}function na(l){l._vnode=null,l._staticTrees=null;var e=l.$options,u=l.$vnode=e._parentVnode,v=u&&u.context;l.$slots=xe(e._renderChildren,v),l.$scopedSlots=a,l._c=function(e,a,u,v){return ua(l,e,a,u,v,!1)},l.$createElement=function(e,a,u,v){return ua(l,e,a,u,v,!0)};var b=u&&u.data;$l(l,"$attrs",b&&b.attrs||a,null,!0),$l(l,"$listeners",e._parentListeners||a,null,!0)}var ra,oa=null;function ia(l){Ue(l.prototype),l.prototype.$nextTick=function(l){return re(l,this)},l.prototype._render=function(){var l,e=this,a=e.$options,u=a.render,v=a._parentVnode;v&&(e.$scopedSlots=Oe(v.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=v;try{oa=e,l=u.call(e._renderProxy,e.$createElement)}catch(lv){Yl(lv,e,"render"),l=e._vnode}finally{oa=null}return Array.isArray(l)&&1===l.length&&(l=l[0]),l instanceof pl||(l=dl()),l.parent=v,l}}function sa(l,e){return(l.__esModule||rl&&"Module"===l[Symbol.toStringTag])&&(l=l.default),r(l)?e.extend(l):l}function ca(l,e,a,u,v){var b=dl();return b.asyncFactory=l,b.asyncMeta={data:e,context:a,children:u,tag:v},b}function fa(l,e){if(b(l.error)&&v(l.errorComp))return l.errorComp;if(v(l.resolved))return l.resolved;var a=oa;if(a&&v(l.owners)&&-1===l.owners.indexOf(a)&&l.owners.push(a),b(l.loading)&&v(l.loadingComp))return l.loadingComp;if(a&&!v(l.owners)){var t=l.owners=[a],n=!0,o=null,i=null;a.$on("hook:destroyed",function(){return y(t,a)});var s=function(l){for(var e=0,a=t.length;e<a;e++)t[e].$forceUpdate();l&&(t.length=0,null!==o&&(clearTimeout(o),o=null),null!==i&&(clearTimeout(i),i=null))},c=I(function(a){l.resolved=sa(a,e),n?t.length=0:s(!0)}),p=I(function(e){v(l.errorComp)&&(l.error=!0,s(!0))}),h=l(c,p);return r(h)&&(f(h)?u(l.resolved)&&h.then(c,p):f(h.component)&&(h.component.then(c,p),v(h.error)&&(l.errorComp=sa(h.error,e)),v(h.loading)&&(l.loadingComp=sa(h.loading,e),0===h.delay?l.loading=!0:o=setTimeout(function(){o=null,u(l.resolved)&&u(l.error)&&(l.loading=!0,s(!1))},h.delay||200)),v(h.timeout)&&(i=setTimeout(function(){i=null,u(l.resolved)&&p(null)},h.timeout)))),n=!1,l.loading?l.loadingComp:l.resolved}}function pa(l){return l.isComment&&l.asyncFactory}function ha(l){if(Array.isArray(l))for(var e=0;e<l.length;e++){var a=l[e];if(v(a)&&(v(a.componentOptions)||pa(a)))return a}}function da(l){l._events=Object.create(null),l._hasHookEvent=!1;var e=l.$options._parentListeners;e&&_a(l,e)}function ga(l,e){ra.$on(l,e)}function ya(l,e){ra.$off(l,e)}function ma(l,e){var a=ra;return function u(){var v=e.apply(null,arguments);null!==v&&a.$off(l,u)}}function _a(l,e,a){ra=l,pe(e,a||{},ga,ya,ma,l),ra=void 0}function wa(l){var e=/^hook:/;l.prototype.$on=function(l,a){var u=this;if(Array.isArray(l))for(var v=0,b=l.length;v<b;v++)u.$on(l[v],a);else(u._events[l]||(u._events[l]=[])).push(a),e.test(l)&&(u._hasHookEvent=!0);return u},l.prototype.$once=function(l,e){var a=this;function u(){a.$off(l,u),e.apply(a,arguments)}return u.fn=e,a.$on(l,u),a},l.prototype.$off=function(l,e){var a=this;if(!arguments.length)return a._events=Object.create(null),a;if(Array.isArray(l)){for(var u=0,v=l.length;u<v;u++)a.$off(l[u],e);return a}var b,t=a._events[l];if(!t)return a;if(!e)return a._events[l]=null,a;var n=t.length;while(n--)if(b=t[n],b===e||b.fn===e){t.splice(n,1);break}return a},l.prototype.$emit=function(l){var e=this,a=e._events[l];if(a){a=a.length>1?D(a):a;for(var u=D(arguments,1),v='event handler for "'+l+'"',b=0,t=a.length;b<t;b++)Xl(a[b],e,u,e,v)}return e}}var ka=null;function Aa(l){var e=ka;return ka=l,function(){ka=e}}function xa(l){var e=l.$options,a=e.parent;if(a&&!e.abstract){while(a.$options.abstract&&a.$parent)a=a.$parent;a.$children.push(l)}l.$parent=a,l.$root=a?a.$root:l,l.$children=[],l.$refs={},l._watcher=null,l._inactive=null,l._directInactive=!1,l._isMounted=!1,l._isDestroyed=!1,l._isBeingDestroyed=!1}function Ta(l){l.prototype._update=function(l,e){var a=this,u=a.$el,v=a._vnode,b=Aa(a);a._vnode=l,a.$el=v?a.__patch__(v,l):a.__patch__(a.$el,l,e,!1),b(),u&&(u.__vue__=null),a.$el&&(a.$el.__vue__=a),a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)},l.prototype.$forceUpdate=function(){var l=this;l._watcher&&l._watcher.update()},l.prototype.$destroy=function(){var l=this;if(!l._isBeingDestroyed){Da(l,"beforeDestroy"),l._isBeingDestroyed=!0;var e=l.$parent;!e||e._isBeingDestroyed||l.$options.abstract||y(e.$children,l),l._watcher&&l._watcher.teardown();var a=l._watchers.length;while(a--)l._watchers[a].teardown();l._data.__ob__&&l._data.__ob__.vmCount--,l._isDestroyed=!0,l.__patch__(l._vnode,null),Da(l,"destroyed"),l.$off(),l.$el&&(l.$el.__vue__=null),l.$vnode&&(l.$vnode.parent=null)}}}function Oa(l,e,u,v,b){var t=v.data.scopedSlots,n=l.$scopedSlots,r=!!(t&&!t.$stable||n!==a&&!n.$stable||t&&l.$scopedSlots.$key!==t.$key),o=!!(b||l.$options._renderChildren||r);if(l.$options._parentVnode=v,l.$vnode=v,l._vnode&&(l._vnode.parent=v),l.$options._renderChildren=b,l.$attrs=v.data.attrs||a,l.$listeners=u||a,e&&l.$options.props){xl(!1);for(var i=l._props,s=l.$options._propKeys||[],c=0;c<s.length;c++){var f=s[c],p=l.$options.props;i[f]=zl(f,p,e,l)}xl(!0),l.$options.propsData=e}u=u||a;var h=l.$options._parentListeners;l.$options._parentListeners=u,_a(l,u,h),o&&(l.$slots=xe(b,v.context),l.$forceUpdate())}function Sa(l){while(l&&(l=l.$parent))if(l._inactive)return!0;return!1}function Ca(l,e){if(e){if(l._directInactive=!1,Sa(l))return}else if(l._directInactive)return;if(l._inactive||null===l._inactive){l._inactive=!1;for(var a=0;a<l.$children.length;a++)Ca(l.$children[a]);Da(l,"activated")}}function $a(l,e){if((!e||(l._directInactive=!0,!Sa(l)))&&!l._inactive){l._inactive=!0;for(var a=0;a<l.$children.length;a++)$a(l.$children[a]);Da(l,"deactivated")}}function Da(l,e){cl();var a=l.$options[e],u=e+" hook";if(a)for(var v=0,b=a.length;v<b;v++)Xl(a[v],l,null,l,u);l._hasHookEvent&&l.$emit("hook:"+e),fl()}var Ba=[],Ea=[],Pa={},ja=!1,Na=!1,Ra=0;function Ma(){Ra=Ba.length=Ea.length=0,Pa={},ja=Na=!1}var Ia=Date.now;if(K&&!Z){var La=window.performance;La&&"function"===typeof La.now&&Ia()>document.createEvent("Event").timeStamp&&(Ia=function(){return La.now()})}function Fa(){var l,e;for(Ia(),Na=!0,Ba.sort(function(l,e){return l.id-e.id}),Ra=0;Ra<Ba.length;Ra++)l=Ba[Ra],l.before&&l.before(),e=l.id,Pa[e]=null,l.run();var a=Ea.slice(),u=Ba.slice();Ma(),Ua(a),qa(u),bl&&q.devtools&&bl.emit("flush")}function qa(l){var e=l.length;while(e--){var a=l[e],u=a.vm;u._watcher===a&&u._isMounted&&!u._isDestroyed&&Da(u,"updated")}}function Va(l){l._inactive=!1,Ea.push(l)}function Ua(l){for(var e=0;e<l.length;e++)l[e]._inactive=!0,Ca(l[e],!0)}function Ha(l){var e=l.id;if(null==Pa[e]){if(Pa[e]=!0,Na){var a=Ba.length-1;while(a>Ra&&Ba[a].id>l.id)a--;Ba.splice(a+1,0,l)}else Ba.push(l);ja||(ja=!0,re(Fa))}}var za=0,Ga=function(l,e,a,u,v){this.vm=l,v&&(l._watcher=this),l._watchers.push(this),u?(this.deep=!!u.deep,this.user=!!u.user,this.lazy=!!u.lazy,this.sync=!!u.sync,this.before=u.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++za,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new nl,this.newDepIds=new nl,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=P)),this.value=this.lazy?void 0:this.get()};Ga.prototype.get=function(){var l;cl(this);var e=this.vm;try{l=this.getter.call(e,e)}catch(lv){if(!this.user)throw lv;Yl(lv,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ie(l),fl(),this.cleanupDeps()}return l},Ga.prototype.addDep=function(l){var e=l.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(l),this.depIds.has(e)||l.addSub(this))},Ga.prototype.cleanupDeps=function(){var l=this.deps.length;while(l--){var e=this.deps[l];this.newDepIds.has(e.id)||e.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},Ga.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ha(this)},Ga.prototype.run=function(){if(this.active){var l=this.get();if(l!==this.value||r(l)||this.deep){var e=this.value;if(this.value=l,this.user)try{this.cb.call(this.vm,l,e)}catch(lv){Yl(lv,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,l,e)}}},Ga.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ga.prototype.depend=function(){var l=this.deps.length;while(l--)this.deps[l].depend()},Ga.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var l=this.deps.length;while(l--)this.deps[l].removeSub(this);this.active=!1}};var Wa={enumerable:!0,configurable:!0,get:P,set:P};function Ja(l,e,a){Wa.get=function(){return this[e][a]},Wa.set=function(l){this[e][a]=l},Object.defineProperty(l,a,Wa)}function Ka(l){l._watchers=[];var e=l.$options;e.props&&Ya(l,e.props),e.methods&&vu(l,e.methods),e.data?Xa(l):Cl(l._data={},!0),e.computed&&lu(l,e.computed),e.watch&&e.watch!==al&&bu(l,e.watch)}function Ya(l,e){var a=l.$options.propsData||{},u=l._props={},v=l.$options._propKeys=[],b=!l.$parent;b||xl(!1);var t=function(b){v.push(b);var t=zl(b,e,a,l);$l(u,b,t),b in l||Ja(l,"_props",b)};for(var n in e)t(n);xl(!0)}function Xa(l){var e=l.$options.data;e=l._data="function"===typeof e?Qa(e,l):e||{},i(e)||(e={});var a=Object.keys(e),u=l.$options.props,v=(l.$options.methods,a.length);while(v--){var b=a[v];0,u&&_(u,b)||U(b)||Ja(l,"_data",b)}Cl(e,!0)}function Qa(l,e){cl();try{return l.call(e,e)}catch(lv){return Yl(lv,e,"data()"),{}}finally{fl()}}var Za={lazy:!0};function lu(l,e){var a=l._computedWatchers=Object.create(null),u=vl();for(var v in e){var b=e[v],t="function"===typeof b?b:b.get;0,u||(a[v]=new Ga(l,t||P,P,Za)),v in l||eu(l,v,b)}}function eu(l,e,a){var u=!vl();"function"===typeof a?(Wa.get=u?au(e):uu(a),Wa.set=P):(Wa.get=a.get?u&&!1!==a.cache?au(e):uu(a.get):P,Wa.set=a.set||P),Object.defineProperty(l,e,Wa)}function au(l){return function(){var e=this._computedWatchers&&this._computedWatchers[l];if(e)return e.dirty&&e.evaluate(),sl.SharedObject.target&&e.depend(),e.value}}function uu(l){return function(){return l.call(this,this)}}function vu(l,e){l.$options.props;for(var a in e)l[a]="function"!==typeof e[a]?P:$(e[a],l)}function bu(l,e){for(var a in e){var u=e[a];if(Array.isArray(u))for(var v=0;v<u.length;v++)tu(l,a,u[v]);else tu(l,a,u)}}function tu(l,e,a,u){return i(a)&&(u=a,a=a.handler),"string"===typeof a&&(a=l[a]),l.$watch(e,a,u)}function nu(l){var e={get:function(){return this._data}},a={get:function(){return this._props}};Object.defineProperty(l.prototype,"$data",e),Object.defineProperty(l.prototype,"$props",a),l.prototype.$set=Dl,l.prototype.$delete=Bl,l.prototype.$watch=function(l,e,a){var u=this;if(i(e))return tu(u,l,e,a);a=a||{},a.user=!0;var v=new Ga(u,l,e,a);if(a.immediate)try{e.call(u,v.value)}catch(b){Yl(b,u,'callback for immediate watcher "'+v.expression+'"')}return function(){v.teardown()}}}var ru=0;function ou(l){l.prototype._init=function(l){var e=this;e._uid=ru++,e._isVue=!0,l&&l._isComponent?iu(e,l):e.$options=Ul(su(e.constructor),l||{},e),e._renderProxy=e,e._self=e,xa(e),da(e),na(e),Da(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&ke(e),Ka(e),"mp-toutiao"!==e.mpHost&&we(e),"mp-toutiao"!==e.mpHost&&Da(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function iu(l,e){var a=l.$options=Object.create(l.constructor.options),u=e._parentVnode;a.parent=e.parent,a._parentVnode=u;var v=u.componentOptions;a.propsData=v.propsData,a._parentListeners=v.listeners,a._renderChildren=v.children,a._componentTag=v.tag,e.render&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns)}function su(l){var e=l.options;if(l.super){var a=su(l.super),u=l.superOptions;if(a!==u){l.superOptions=a;var v=cu(l);v&&B(l.extendOptions,v),e=l.options=Ul(a,l.extendOptions),e.name&&(e.components[e.name]=l)}}return e}function cu(l){var e,a=l.options,u=l.sealedOptions;for(var v in a)a[v]!==u[v]&&(e||(e={}),e[v]=a[v]);return e}function fu(l){this._init(l)}function pu(l){l.use=function(l){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(l)>-1)return this;var a=D(arguments,1);return a.unshift(this),"function"===typeof l.install?l.install.apply(l,a):"function"===typeof l&&l.apply(null,a),e.push(l),this}}function hu(l){l.mixin=function(l){return this.options=Ul(this.options,l),this}}function du(l){l.cid=0;var e=1;l.extend=function(l){l=l||{};var a=this,u=a.cid,v=l._Ctor||(l._Ctor={});if(v[u])return v[u];var b=l.name||a.options.name;var t=function(l){this._init(l)};return t.prototype=Object.create(a.prototype),t.prototype.constructor=t,t.cid=e++,t.options=Ul(a.options,l),t["super"]=a,t.options.props&&gu(t),t.options.computed&&yu(t),t.extend=a.extend,t.mixin=a.mixin,t.use=a.use,L.forEach(function(l){t[l]=a[l]}),b&&(t.options.components[b]=t),t.superOptions=a.options,t.extendOptions=l,t.sealedOptions=B({},t.options),v[u]=t,t}}function gu(l){var e=l.options.props;for(var a in e)Ja(l.prototype,"_props",a)}function yu(l){var e=l.options.computed;for(var a in e)eu(l.prototype,a,e[a])}function mu(l){L.forEach(function(e){l[e]=function(l,a){return a?("component"===e&&i(a)&&(a.name=a.name||l,a=this.options._base.extend(a)),"directive"===e&&"function"===typeof a&&(a={bind:a,update:a}),this.options[e+"s"][l]=a,a):this.options[e+"s"][l]}})}function _u(l){return l&&(l.Ctor.options.name||l.tag)}function wu(l,e){return Array.isArray(l)?l.indexOf(e)>-1:"string"===typeof l?l.split(",").indexOf(e)>-1:!!s(l)&&l.test(e)}function ku(l,e){var a=l.cache,u=l.keys,v=l._vnode;for(var b in a){var t=a[b];if(t){var n=_u(t.componentOptions);n&&!e(n)&&Au(a,b,u,v)}}}function Au(l,e,a,u){var v=l[e];!v||u&&v.tag===u.tag||v.componentInstance.$destroy(),l[e]=null,y(a,e)}ou(fu),nu(fu),wa(fu),Ta(fu),ia(fu);var xu=[String,RegExp,Array],Tu={name:"keep-alive",abstract:!0,props:{include:xu,exclude:xu,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var l in this.cache)Au(this.cache,l,this.keys)},mounted:function(){var l=this;this.$watch("include",function(e){ku(l,function(l){return wu(e,l)})}),this.$watch("exclude",function(e){ku(l,function(l){return!wu(e,l)})})},render:function(){var l=this.$slots.default,e=ha(l),a=e&&e.componentOptions;if(a){var u=_u(a),v=this,b=v.include,t=v.exclude;if(b&&(!u||!wu(b,u))||t&&u&&wu(t,u))return e;var n=this,r=n.cache,o=n.keys,i=null==e.key?a.Ctor.cid+(a.tag?"::"+a.tag:""):e.key;r[i]?(e.componentInstance=r[i].componentInstance,y(o,i),o.push(i)):(r[i]=e,o.push(i),this.max&&o.length>parseInt(this.max)&&Au(r,o[0],o,this._vnode)),e.data.keepAlive=!0}return e||l&&l[0]}},Ou={KeepAlive:Tu};function Su(l){var e={get:function(){return q}};Object.defineProperty(l,"config",e),l.util={warn:ol,extend:B,mergeOptions:Ul,defineReactive:$l},l.set=Dl,l.delete=Bl,l.nextTick=re,l.observable=function(l){return Cl(l),l},l.options=Object.create(null),L.forEach(function(e){l.options[e+"s"]=Object.create(null)}),l.options._base=l,B(l.options.components,Ou),pu(l),hu(l),du(l),mu(l)}Su(fu),Object.defineProperty(fu.prototype,"$isServer",{get:vl}),Object.defineProperty(fu.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(fu,"FunctionalRenderContext",{value:He}),fu.version="2.6.10";var Cu="[object Array]",$u="[object Object]";function Du(l,e){var a={};return Bu(l,e),Eu(l,e,"",a),a}function Bu(l,e){if(l!==e){var a=ju(l),u=ju(e);if(a==$u&&u==$u){if(Object.keys(l).length>=Object.keys(e).length)for(var v in e){var b=l[v];void 0===b?l[v]=null:Bu(b,e[v])}}else a==Cu&&u==Cu&&l.length>=e.length&&e.forEach(function(e,a){Bu(l[a],e)})}}function Eu(l,e,a,u){if(l!==e){var v=ju(l),b=ju(e);if(v==$u)if(b!=$u||Object.keys(l).length<Object.keys(e).length)Pu(u,a,l);else{var t=function(v){var b=l[v],t=e[v],n=ju(b),r=ju(t);if(n!=Cu&&n!=$u)b!=e[v]&&Pu(u,(""==a?"":a+".")+v,b);else if(n==Cu)r!=Cu?Pu(u,(""==a?"":a+".")+v,b):b.length<t.length?Pu(u,(""==a?"":a+".")+v,b):b.forEach(function(l,e){Eu(l,t[e],(""==a?"":a+".")+v+"["+e+"]",u)});else if(n==$u)if(r!=$u||Object.keys(b).length<Object.keys(t).length)Pu(u,(""==a?"":a+".")+v,b);else for(var o in b)Eu(b[o],t[o],(""==a?"":a+".")+v+"."+o,u)};for(var n in l)t(n)}else v==Cu?b!=Cu?Pu(u,a,l):l.length<e.length?Pu(u,a,l):l.forEach(function(l,v){Eu(l,e[v],a+"["+v+"]",u)}):Pu(u,a,l)}}function Pu(l,e,a){l[e]=a}function ju(l){return Object.prototype.toString.call(l)}function Nu(l){if(l.__next_tick_callbacks&&l.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=l.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+l._uid+"]:flushCallbacks["+l.__next_tick_callbacks.length+"]")}var a=l.__next_tick_callbacks.slice(0);l.__next_tick_callbacks.length=0;for(var u=0;u<a.length;u++)a[u]()}}function Ru(l){return Ba.find(function(e){return l._watcher===e})}function Mu(l,e){if(!l.__next_tick_pending&&!Ru(l)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var a=l.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+l._uid+"]:nextVueTick")}return re(e,l)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var u=l.$scope;console.log("["+ +new Date+"]["+(u.is||u.route)+"]["+l._uid+"]:nextMPTick")}var v;if(l.__next_tick_callbacks||(l.__next_tick_callbacks=[]),l.__next_tick_callbacks.push(function(){if(e)try{e.call(l)}catch(lv){Yl(lv,l,"nextTick")}else v&&v(l)}),!e&&"undefined"!==typeof Promise)return new Promise(function(l){v=l})}function Iu(l){var e=Object.create(null),a=[].concat(Object.keys(l._data||{}),Object.keys(l._computedWatchers||{}));return a.reduce(function(e,a){return e[a]=l[a],e},e),Object.assign(e,l.$mp.data||{}),Array.isArray(l.$options.behaviors)&&-1!==l.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=l.name,e["value"]=l.value),JSON.parse(JSON.stringify(e))}var Lu=function(l,e){var a=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var u=this.$scope,v=Object.create(null);try{v=Iu(this)}catch(n){console.error(n)}v.__webviewId__=u.data.__webviewId__;var b=Object.create(null);Object.keys(v).forEach(function(l){b[l]=u.data[l]});var t=Du(v,b);Object.keys(t).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(u.is||u.route)+"]["+this._uid+"]差量更新",JSON.stringify(t)),this.__next_tick_pending=!0,u.setData(t,function(){a.__next_tick_pending=!1,Nu(a)})):Nu(this)}};function Fu(){}function qu(l,e,a){if(!l.mpType)return l;"app"===l.mpType&&(l.$options.render=Fu),l.$options.render||(l.$options.render=Fu),"mp-toutiao"!==l.mpHost&&Da(l,"beforeMount");var u=function(){l._update(l._render(),a)};return new Ga(l,u,P,{before:function(){l._isMounted&&!l._isDestroyed&&Da(l,"beforeUpdate")}},!0),a=!1,l}function Vu(l,e){return v(l)||v(e)?Uu(l,Hu(e)):""}function Uu(l,e){return l?e?l+" "+e:l:e||""}function Hu(l){return Array.isArray(l)?zu(l):r(l)?Gu(l):"string"===typeof l?l:""}function zu(l){for(var e,a="",u=0,b=l.length;u<b;u++)v(e=Hu(l[u]))&&""!==e&&(a&&(a+=" "),a+=e);return a}function Gu(l){var e="";for(var a in l)l[a]&&(e&&(e+=" "),e+=a);return e}var Wu=w(function(l){var e={},a=/;(?![^(]*\))/g,u=/:(.+)/;return l.split(a).forEach(function(l){if(l){var a=l.split(u);a.length>1&&(e[a[0].trim()]=a[1].trim())}}),e});function Ju(l){return Array.isArray(l)?E(l):"string"===typeof l?Wu(l):l}var Ku=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yu(l,e){var a=e.split("."),u=a[0];return 0===u.indexOf("__$n")&&(u=parseInt(u.replace("__$n",""))),1===a.length?l[u]:Yu(l[u],a.slice(1).join("."))}function Xu(l){l.config.errorHandler=function(l){console.error(l)};var e=l.prototype.$emit;l.prototype.$emit=function(l){return this.$scope&&l&&this.$scope["triggerEvent"](l,{__args__:D(arguments,1)}),e.apply(this,arguments)},l.prototype.$nextTick=function(l){return Mu(this,l)},Ku.forEach(function(e){l.prototype[e]=function(l){if(this.$scope)return this.$scope[e](l)}}),l.prototype.__init_provide=we,l.prototype.__init_injections=ke,l.prototype.__call_hook=function(l,e){var a=this;cl();var u,v=a.$options[l],b=l+" hook";if(v)for(var t=0,n=v.length;t<n;t++)u=Xl(v[t],a,e?[e]:null,a,b);return a._hasHookEvent&&a.$emit("hook:"+l),fl(),u},l.prototype.__set_model=function(l,e,a,u){Array.isArray(u)&&(-1!==u.indexOf("trim")&&(a=a.trim()),-1!==u.indexOf("number")&&(a=this._n(a))),l||(l=this),l[e]=a},l.prototype.__set_sync=function(l,e,a){l||(l=this),l[e]=a},l.prototype.__get_orig=function(l){return i(l)&&l["$orig"]||l},l.prototype.__get_value=function(l,e){return Yu(e||this,l)},l.prototype.__get_class=function(l,e){return Vu(e,l)},l.prototype.__get_style=function(l,e){if(!l&&!e)return"";var a=Ju(l),u=e?B(e,a):a;return Object.keys(u).map(function(l){return O(l)+":"+u[l]}).join(";")},l.prototype.__map=function(l,e){var a,u,v,b,t;if(Array.isArray(l)){for(a=new Array(l.length),u=0,v=l.length;u<v;u++)a[u]=e(l[u],u);return a}if(r(l)){for(b=Object.keys(l),a=Object.create(null),u=0,v=b.length;u<v;u++)t=b[u],a[t]=e(l[t],t,u);return a}return[]}}var Qu=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function Zu(l){var e=l.extend;l.extend=function(l){l=l||{};var a=l.methods;return a&&Object.keys(a).forEach(function(e){-1!==Qu.indexOf(e)&&(l[e]=a[e],delete a[e])}),e.call(this,l)};var a=l.config.optionMergeStrategies,u=a.created;Qu.forEach(function(l){a[l]=u}),l.prototype.__lifecycle_hooks__=Qu}fu.prototype.__patch__=Lu,fu.prototype.$mount=function(l,e){return qu(this,l,e)},Zu(fu),Xu(fu),e["default"]=fu}.call(this,a("c8ba"))},"67d3":function(l,e,a){"use strict";(function(l){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={};(function(){function e(l){var e,a,u;return l<128?[l]:l<2048?(e=192+(l>>6),a=128+(63&l),[e,a]):(e=224+(l>>12),a=128+(l>>6&63),u=128+(63&l),[e,a,u])}function u(l){for(var a=[],u=0;u<l.length;u++)for(var v=l.charCodeAt(u),b=e(v),t=0;t<b.length;t++)a.push(b[t]);return a}function v(l,e){this.typeNumber=-1,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=l,this.utf8bytes=u(l),this.make()}v.prototype={constructor:v,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(l){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,l),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,l)},setupPositionProbePattern:function(l,e){for(var a=-1;a<=7;a++)if(!(l+a<=-1||this.moduleCount<=l+a))for(var u=-1;u<=7;u++)e+u<=-1||this.moduleCount<=e+u||(this.modules[l+a][e+u]=0<=a&&a<=6&&(0==u||6==u)||0<=u&&u<=6&&(0==a||6==a)||2<=a&&a<=4&&2<=u&&u<=4)},createQrcode:function(){for(var l=0,e=0,a=null,u=0;u<8;u++){this.makeImpl(u);var v=n.getLostPoint(this);(0==u||l>v)&&(l=v,e=u,a=this.modules)}this.modules=a,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var l=8;l<this.moduleCount-8;l++)null==this.modules[l][6]&&(this.modules[l][6]=l%2==0,null==this.modules[6][l]&&(this.modules[6][l]=l%2==0))},setupPositionAdjustPattern:function(){for(var l=n.getPatternPosition(this.typeNumber),e=0;e<l.length;e++)for(var a=0;a<l.length;a++){var u=l[e],v=l[a];if(null==this.modules[u][v])for(var b=-2;b<=2;b++)for(var t=-2;t<=2;t++)this.modules[u+b][v+t]=-2==b||2==b||-2==t||2==t||0==b&&0==t}},setupTypeNumber:function(l){for(var e=n.getBCHTypeNumber(this.typeNumber),a=0;a<18;a++){var u=!l&&1==(e>>a&1);this.modules[Math.floor(a/3)][a%3+this.moduleCount-8-3]=u,this.modules[a%3+this.moduleCount-8-3][Math.floor(a/3)]=u}},setupTypeInfo:function(l,e){for(var a=b[this.errorCorrectLevel]<<3|e,u=n.getBCHTypeInfo(a),v=0;v<15;v++){var t=!l&&1==(u>>v&1);v<6?this.modules[v][8]=t:v<8?this.modules[v+1][8]=t:this.modules[this.moduleCount-15+v][8]=t;t=!l&&1==(u>>v&1);v<8?this.modules[8][this.moduleCount-v-1]=t:v<9?this.modules[8][15-v-1+1]=t:this.modules[8][15-v-1]=t}this.modules[this.moduleCount-8][8]=!l},createData:function(){var l=new c,e=this.typeNumber>9?16:8;l.put(4,4),l.put(this.utf8bytes.length,e);for(var a=0,u=this.utf8bytes.length;a<u;a++)l.put(this.utf8bytes[a],8);l.length+4<=8*this.totalDataCount&&l.put(0,4);while(l.length%8!=0)l.putBit(!1);while(1){if(l.length>=8*this.totalDataCount)break;if(l.put(v.PAD0,8),l.length>=8*this.totalDataCount)break;l.put(v.PAD1,8)}return this.createBytes(l)},createBytes:function(l){for(var e=0,a=0,u=0,v=this.rsBlock.length/3,b=new Array,t=0;t<v;t++)for(var r=this.rsBlock[3*t+0],o=this.rsBlock[3*t+1],s=this.rsBlock[3*t+2],c=0;c<r;c++)b.push([s,o]);for(var f=new Array(b.length),p=new Array(b.length),h=0;h<b.length;h++){var d=b[h][0],g=b[h][1]-d;a=Math.max(a,d),u=Math.max(u,g),f[h]=new Array(d);for(t=0;t<f[h].length;t++)f[h][t]=255&l.buffer[t+e];e+=d;var y=n.getErrorCorrectPolynomial(g),m=new i(f[h],y.getLength()-1),_=m.mod(y);p[h]=new Array(y.getLength()-1);for(t=0;t<p[h].length;t++){var w=t+_.getLength()-p[h].length;p[h][t]=w>=0?_.get(w):0}}var k=new Array(this.totalDataCount),A=0;for(t=0;t<a;t++)for(h=0;h<b.length;h++)t<f[h].length&&(k[A++]=f[h][t]);for(t=0;t<u;t++)for(h=0;h<b.length;h++)t<p[h].length&&(k[A++]=p[h][t]);return k},mapData:function(l,e){for(var a=-1,u=this.moduleCount-1,v=7,b=0,t=this.moduleCount-1;t>0;t-=2){6==t&&t--;while(1){for(var r=0;r<2;r++)if(null==this.modules[u][t-r]){var o=!1;b<l.length&&(o=1==(l[b]>>>v&1));var i=n.getMask(e,u,t-r);i&&(o=!o),this.modules[u][t-r]=o,v--,-1==v&&(b++,v=7)}if(u+=a,u<0||this.moduleCount<=u){u-=a,a=-a;break}}}}},v.PAD0=236,v.PAD1=17;for(var b=[1,0,3,2],t={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},n={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(l){var e=l<<10;while(n.getBCHDigit(e)-n.getBCHDigit(n.G15)>=0)e^=n.G15<<n.getBCHDigit(e)-n.getBCHDigit(n.G15);return(l<<10|e)^n.G15_MASK},getBCHTypeNumber:function(l){var e=l<<12;while(n.getBCHDigit(e)-n.getBCHDigit(n.G18)>=0)e^=n.G18<<n.getBCHDigit(e)-n.getBCHDigit(n.G18);return l<<12|e},getBCHDigit:function(l){var e=0;while(0!=l)e++,l>>>=1;return e},getPatternPosition:function(l){return n.PATTERN_POSITION_TABLE[l-1]},getMask:function(l,e,a){switch(l){case t.PATTERN000:return(e+a)%2==0;case t.PATTERN001:return e%2==0;case t.PATTERN010:return a%3==0;case t.PATTERN011:return(e+a)%3==0;case t.PATTERN100:return(Math.floor(e/2)+Math.floor(a/3))%2==0;case t.PATTERN101:return e*a%2+e*a%3==0;case t.PATTERN110:return(e*a%2+e*a%3)%2==0;case t.PATTERN111:return(e*a%3+(e+a)%2)%2==0;default:throw new Error("bad maskPattern:"+l)}},getErrorCorrectPolynomial:function(l){for(var e=new i([1],0),a=0;a<l;a++)e=e.multiply(new i([1,r.gexp(a)],0));return e},getLostPoint:function(l){for(var e=l.getModuleCount(),a=0,u=0,v=0;v<e;v++)for(var b=0,t=l.modules[v][0],n=0;n<e;n++){var r=l.modules[v][n];if(n<e-6&&r&&!l.modules[v][n+1]&&l.modules[v][n+2]&&l.modules[v][n+3]&&l.modules[v][n+4]&&!l.modules[v][n+5]&&l.modules[v][n+6]&&(n<e-10?l.modules[v][n+7]&&l.modules[v][n+8]&&l.modules[v][n+9]&&l.modules[v][n+10]&&(a+=40):n>3&&l.modules[v][n-1]&&l.modules[v][n-2]&&l.modules[v][n-3]&&l.modules[v][n-4]&&(a+=40)),v<e-1&&n<e-1){var o=0;r&&o++,l.modules[v+1][n]&&o++,l.modules[v][n+1]&&o++,l.modules[v+1][n+1]&&o++,0!=o&&4!=o||(a+=3)}t^r?b++:(t=r,b>=5&&(a+=3+b-5),b=1),r&&u++}for(n=0;n<e;n++)for(b=0,t=l.modules[0][n],v=0;v<e;v++){r=l.modules[v][n];v<e-6&&r&&!l.modules[v+1][n]&&l.modules[v+2][n]&&l.modules[v+3][n]&&l.modules[v+4][n]&&!l.modules[v+5][n]&&l.modules[v+6][n]&&(v<e-10?l.modules[v+7][n]&&l.modules[v+8][n]&&l.modules[v+9][n]&&l.modules[v+10][n]&&(a+=40):v>3&&l.modules[v-1][n]&&l.modules[v-2][n]&&l.modules[v-3][n]&&l.modules[v-4][n]&&(a+=40)),t^r?b++:(t=r,b>=5&&(a+=3+b-5),b=1)}var i=Math.abs(100*u/e/e-50)/5;return a+=10*i,a}},r={glog:function(l){if(l<1)throw new Error("glog("+l+")");return r.LOG_TABLE[l]},gexp:function(l){while(l<0)l+=255;while(l>=256)l-=255;return r.EXP_TABLE[l]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},o=0;o<8;o++)r.EXP_TABLE[o]=1<<o;for(o=8;o<256;o++)r.EXP_TABLE[o]=r.EXP_TABLE[o-4]^r.EXP_TABLE[o-5]^r.EXP_TABLE[o-6]^r.EXP_TABLE[o-8];for(o=0;o<255;o++)r.LOG_TABLE[r.EXP_TABLE[o]]=o;function i(l,e){if(void 0==l.length)throw new Error(l.length+"/"+e);var a=0;while(a<l.length&&0==l[a])a++;this.num=new Array(l.length-a+e);for(var u=0;u<l.length-a;u++)this.num[u]=l[u+a]}i.prototype={get:function(l){return this.num[l]},getLength:function(){return this.num.length},multiply:function(l){for(var e=new Array(this.getLength()+l.getLength()-1),a=0;a<this.getLength();a++)for(var u=0;u<l.getLength();u++)e[a+u]^=r.gexp(r.glog(this.get(a))+r.glog(l.get(u)));return new i(e,0)},mod:function(l){var e=this.getLength(),a=l.getLength();if(e-a<0)return this;for(var u=new Array(e),v=0;v<e;v++)u[v]=this.get(v);while(u.length>=a){var b=r.glog(u[0])-r.glog(l.get(0));for(v=0;v<l.getLength();v++)u[v]^=r.gexp(r.glog(l.get(v))+b);while(0==u[0])u.shift()}return new i(u,0)}};var s=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];function c(){this.buffer=new Array,this.length=0}v.prototype.getRightType=function(){for(var l=1;l<41;l++){var e=s[4*(l-1)+this.errorCorrectLevel];if(void 0==e)throw new Error("bad rs block @ typeNumber:"+l+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var a=e.length/3,u=0,v=0;v<a;v++){var b=e[3*v+0],t=e[3*v+2];u+=t*b}var n=l>9?2:1;if(this.utf8bytes.length+n<u||40==l){this.typeNumber=l,this.rsBlock=e,this.totalDataCount=u;break}}},c.prototype={get:function(l){var e=Math.floor(l/8);return this.buffer[e]>>>7-l%8&1},put:function(l,e){for(var a=0;a<e;a++)this.putBit(l>>>e-a-1&1)},putBit:function(l){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),l&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var f=[];a=function(e){if(this.options={text:"",size:256,correctLevel:3,background:"#ffffff",foreground:"#000000",pdground:"#000000",image:"",imageSize:30,canvasId:e.canvasId,context:e.context,usingComponents:e.usingComponents,showLoading:e.showLoading,loadingText:e.loadingText},"string"===typeof e&&(e={text:e}),e)for(var a in e)this.options[a]=e[a];for(var u=null,b=(a=0,f.length);a<b;a++)if(f[a].text==this.options.text&&f[a].text.correctLevel==this.options.correctLevel){u=f[a].obj;break}a==b&&(u=new v(this.options.text,this.options.correctLevel),f.push({text:this.options.text,correctLevel:this.options.correctLevel,obj:u}));var t=function(l){var e=l.options;return e.pdground&&(l.row>1&&l.row<5&&l.col>1&&l.col<5||l.row>l.count-6&&l.row<l.count-2&&l.col>1&&l.col<5||l.row>1&&l.row<5&&l.col>l.count-6&&l.col<l.count-2)?e.pdground:e.foreground},n=function(e){e.showLoading&&l.showLoading({title:e.loadingText,mask:!0});for(var a=l.createCanvasContext(e.canvasId,e.context),v=u.getModuleCount(),b=e.size,n=e.imageSize,o=(b/v).toPrecision(4),i=(b/v).toPrecision(4),s=0;s<v;s++)for(var c=0;c<v;c++){var f=Math.ceil((c+1)*o)-Math.floor(c*o),p=Math.ceil((s+1)*o)-Math.floor(s*o),h=t({row:s,col:c,count:v,options:e});a.setFillStyle(u.modules[s][c]?h:e.background),a.fillRect(Math.round(c*o),Math.round(s*i),f,p)}if(e.image){var d=function(l,a,u,v,b,t,n,r,o){l.setLineWidth(n),l.setFillStyle(e.background),l.setStrokeStyle(e.background),l.beginPath(),l.moveTo(a+t,u),l.arcTo(a+v,u,a+v,u+t,t),l.arcTo(a+v,u+b,a+v-t,u+b,t),l.arcTo(a,u+b,a,u+b-t,t),l.arcTo(a,u,a+t,u,t),l.closePath(),r&&l.fill(),o&&l.stroke()},g=Number(((b-n)/2).toFixed(2)),y=Number(((b-n)/2).toFixed(2));d(a,g,y,n,n,2,6,!0,!0),a.drawImage(e.image,g,y,n,n)}setTimeout(function(){a.draw(!0,function(){setTimeout(function(){l.canvasToTempFilePath({width:e.width,height:e.height,destWidth:e.width,destHeight:e.height,canvasId:e.canvasId,quality:Number(1),success:function(l){e.cbResult&&(r(l.tempFilePath)?r(l.apFilePath)?e.cbResult(l.tempFilePath):e.cbResult(l.apFilePath):e.cbResult(l.tempFilePath))},fail:function(l){e.cbResult&&e.cbResult(l)},complete:function(){l.hideLoading()}},e.context)},e.text.length+100)})},e.usingComponents?0:150)};n(this.options);var r=function(l){var e=typeof l,a=!1;return"number"==e&&""==String(l)?a=!0:"undefined"==e?a=!0:"object"==e?"{}"!=JSON.stringify(l)&&"[]"!=JSON.stringify(l)&&null!=l||(a=!0):"string"==e?""!=l&&"undefined"!=l&&"null"!=l&&"{}"!=l&&"[]"!=l||(a=!0):"function"==e&&(a=!1),a}},a.prototype.clear=function(e){var a=l.createCanvasContext(this.options.canvasId,this.options.context);a.clearRect(0,0,this.options.size,this.options.size),a.draw(!1,function(){e&&e()})}})();var u=a;e.default=u}).call(this,a("6e42")["default"])},"6c91":function(l,e,a){"use strict";function u(l){this.key=l.key,this.requestConfig={key:l.key,s:"rsx",platform:"WXJS",appname:l.key,sdkversion:"1.2.0",logversion:"2.0"}}u.prototype.getWxLocation=function(l,e){wx.getLocation({type:"gcj02",success:function(l){var a=l.longitude+","+l.latitude;wx.setStorage({key:"userLocation",data:a}),e(a)},fail:function(a){wx.getStorage({key:"userLocation",success:function(l){l.data&&e(l.data)}}),l.fail({errCode:"0",errMsg:a.errMsg||""})}})},u.prototype.getRegeo=function(l){function e(e){var u=a.requestConfig;wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:a.key,location:e,extensions:"all",s:u.s,platform:u.platform,appname:a.key,sdkversion:u.sdkversion,logversion:u.logversion},method:"GET",header:{"content-type":"application/json"},success:function(a){var u,v,b,t,n,r,o,i,s;a.data.status&&"1"==a.data.status?(u=a.data.regeocode,v=u.addressComponent,b=[],t="",u&&u.roads[0]&&u.roads[0].name&&(t=u.roads[0].name+"附近"),n=e.split(",")[0],r=e.split(",")[1],u.pois&&u.pois[0]&&(t=u.pois[0].name+"附近",o=u.pois[0].location,o&&(n=parseFloat(o.split(",")[0]),r=parseFloat(o.split(",")[1]))),v.provice&&b.push(v.provice),v.city&&b.push(v.city),v.district&&b.push(v.district),v.streetNumber&&v.streetNumber.street&&v.streetNumber.number?(b.push(v.streetNumber.street),b.push(v.streetNumber.number)):(i="",u&&u.roads[0]&&u.roads[0].name&&(i=u.roads[0].name),b.push(i)),b=b.join(""),s=[{iconPath:l.iconPath,width:l.iconWidth,height:l.iconHeight,name:b,desc:t,longitude:n,latitude:r,id:0,regeocodeData:u}],l.success(s)):l.fail({errCode:a.data.infocode,errMsg:a.data.info})},fail:function(e){l.fail({errCode:"0",errMsg:e.errMsg||""})}})}var a=this;l.location?e(l.location):a.getWxLocation(l,function(l){e(l)})},u.prototype.getWeather=function(l){function e(e){var a="base";l.type&&"forecast"==l.type&&(a="all"),wx.request({url:"https://restapi.amap.com/v3/weather/weatherInfo",data:{key:u.key,city:e,extensions:a,s:v.s,platform:v.platform,appname:u.key,sdkversion:v.sdkversion,logversion:v.logversion},method:"GET",header:{"content-type":"application/json"},success:function(e){function a(l){var e={city:{text:"城市",data:l.city},weather:{text:"天气",data:l.weather},temperature:{text:"温度",data:l.temperature},winddirection:{text:"风向",data:l.winddirection+"风"},windpower:{text:"风力",data:l.windpower+"级"},humidity:{text:"湿度",data:l.humidity+"%"}};return e}var u,v;e.data.status&&"1"==e.data.status?e.data.lives?(u=e.data.lives,u&&u.length>0&&(u=u[0],v=a(u),v["liveData"]=u,l.success(v))):e.data.forecasts&&e.data.forecasts[0]&&l.success({forecast:e.data.forecasts[0]}):l.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){l.fail({errCode:"0",errMsg:e.errMsg||""})}})}function a(a){wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:u.key,location:a,extensions:"all",s:v.s,platform:v.platform,appname:u.key,sdkversion:v.sdkversion,logversion:v.logversion},method:"GET",header:{"content-type":"application/json"},success:function(a){var u,v;a.data.status&&"1"==a.data.status?(v=a.data.regeocode,v.addressComponent?u=v.addressComponent.adcode:v.aois&&v.aois.length>0&&(u=v.aois[0].adcode),e(u)):l.fail({errCode:a.data.infocode,errMsg:a.data.info})},fail:function(e){l.fail({errCode:"0",errMsg:e.errMsg||""})}})}var u=this,v=u.requestConfig;l.city?e(l.city):u.getWxLocation(l,function(l){a(l)})},u.prototype.getPoiAround=function(l){function e(e){var v={key:a.key,location:e,s:u.s,platform:u.platform,appname:a.key,sdkversion:u.sdkversion,logversion:u.logversion};l.querytypes&&(v["types"]=l.querytypes),l.querykeywords&&(v["keywords"]=l.querykeywords),wx.request({url:"https://restapi.amap.com/v3/place/around",data:v,method:"GET",header:{"content-type":"application/json"},success:function(e){var a,u,v,b;if(e.data.status&&"1"==e.data.status){if(e=e.data,e&&e.pois){for(a=[],u=0;u<e.pois.length;u++)v=0==u?l.iconPathSelected:l.iconPath,a.push({latitude:parseFloat(e.pois[u].location.split(",")[1]),longitude:parseFloat(e.pois[u].location.split(",")[0]),iconPath:v,width:22,height:32,id:u,name:e.pois[u].name,address:e.pois[u].address});b={markers:a,poisData:e.pois},l.success(b)}}else l.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){l.fail({errCode:"0",errMsg:e.errMsg||""})}})}var a=this,u=a.requestConfig;l.location?e(l.location):a.getWxLocation(l,function(l){e(l)})},u.prototype.getStaticmap=function(l){function e(e){v.push("location="+e),l.zoom&&v.push("zoom="+l.zoom),l.size&&v.push("size="+l.size),l.scale&&v.push("scale="+l.scale),l.markers&&v.push("markers="+l.markers),l.labels&&v.push("labels="+l.labels),l.paths&&v.push("paths="+l.paths),l.traffic&&v.push("traffic="+l.traffic);var a=b+v.join("&");l.success({url:a})}var a,u=this,v=[],b="https://restapi.amap.com/v3/staticmap?";v.push("key="+u.key),a=u.requestConfig,v.push("s="+a.s),v.push("platform="+a.platform),v.push("appname="+a.appname),v.push("sdkversion="+a.sdkversion),v.push("logversion="+a.logversion),l.location?e(l.location):u.getWxLocation(l,function(l){e(l)})},u.prototype.getInputtips=function(l){var e=this,a=e.requestConfig,u={key:e.key,s:a.s,platform:a.platform,appname:e.key,sdkversion:a.sdkversion,logversion:a.logversion};l.location&&(u["location"]=l.location),l.keywords&&(u["keywords"]=l.keywords),l.type&&(u["type"]=l.type),l.city&&(u["city"]=l.city),l.citylimit&&(u["citylimit"]=l.citylimit),wx.request({url:"https://restapi.amap.com/v3/assistant/inputtips",data:u,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.tips&&l.success({tips:e.data.tips})},fail:function(e){l.fail({errCode:"0",errMsg:e.errMsg||""})}})},u.prototype.getDrivingRoute=function(l){var e=this,a=e.requestConfig,u={key:e.key,s:a.s,platform:a.platform,appname:e.key,sdkversion:a.sdkversion,logversion:a.logversion};l.origin&&(u["origin"]=l.origin),l.destination&&(u["destination"]=l.destination),l.strategy&&(u["strategy"]=l.strategy),l.waypoints&&(u["waypoints"]=l.waypoints),l.avoidpolygons&&(u["avoidpolygons"]=l.avoidpolygons),l.avoidroad&&(u["avoidroad"]=l.avoidroad),wx.request({url:"https://restapi.amap.com/v3/direction/driving",data:u,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&l.success({paths:e.data.route.paths,taxi_cost:e.data.route.taxi_cost||""})},fail:function(e){l.fail({errCode:"0",errMsg:e.errMsg||""})}})},u.prototype.getWalkingRoute=function(l){var e=this,a=e.requestConfig,u={key:e.key,s:a.s,platform:a.platform,appname:e.key,sdkversion:a.sdkversion,logversion:a.logversion};l.origin&&(u["origin"]=l.origin),l.destination&&(u["destination"]=l.destination),wx.request({url:"https://restapi.amap.com/v3/direction/walking",data:u,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&l.success({paths:e.data.route.paths})},fail:function(e){l.fail({errCode:"0",errMsg:e.errMsg||""})}})},u.prototype.getTransitRoute=function(l){var e=this,a=e.requestConfig,u={key:e.key,s:a.s,platform:a.platform,appname:e.key,sdkversion:a.sdkversion,logversion:a.logversion};l.origin&&(u["origin"]=l.origin),l.destination&&(u["destination"]=l.destination),l.strategy&&(u["strategy"]=l.strategy),l.city&&(u["city"]=l.city),l.cityd&&(u["cityd"]=l.cityd),wx.request({url:"https://restapi.amap.com/v3/direction/transit/integrated",data:u,method:"GET",header:{"content-type":"application/json"},success:function(e){if(e&&e.data&&e.data.route){var a=e.data.route;l.success({distance:a.distance||"",taxi_cost:a.taxi_cost||"",transits:a.transits})}},fail:function(e){l.fail({errCode:"0",errMsg:e.errMsg||""})}})},u.prototype.getRidingRoute=function(l){var e=this,a=e.requestConfig,u={key:e.key,s:a.s,platform:a.platform,appname:e.key,sdkversion:a.sdkversion,logversion:a.logversion};l.origin&&(u["origin"]=l.origin),l.destination&&(u["destination"]=l.destination),wx.request({url:"https://restapi.amap.com/v4/direction/bicycling",data:u,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.data&&l.success({paths:e.data.data.paths})},fail:function(e){l.fail({errCode:"0",errMsg:e.errMsg||""})}})},l.exports.AMapWX=u},"6e42":function(l,e,a){"use strict";(function(l){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=pe,e.createComponent=xe,e.createPage=Ae,e.default=void 0;var u=v(a("66fd"));function v(l){return l&&l.__esModule?l:{default:l}}function b(l,e){return r(l)||n(l,e)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function n(l,e){var a=[],u=!0,v=!1,b=void 0;try{for(var t,n=l[Symbol.iterator]();!(u=(t=n.next()).done);u=!0)if(a.push(t.value),e&&a.length===e)break}catch(r){v=!0,b=r}finally{try{u||null==n["return"]||n["return"]()}finally{if(v)throw b}}return a}function r(l){if(Array.isArray(l))return l}function o(l,e,a){return e in l?Object.defineProperty(l,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):l[e]=a,l}function i(l){return f(l)||c(l)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(l){if(Symbol.iterator in Object(l)||"[object Arguments]"===Object.prototype.toString.call(l))return Array.from(l)}function f(l){if(Array.isArray(l)){for(var e=0,a=new Array(l.length);e<l.length;e++)a[e]=l[e];return a}}var p=Object.prototype.toString,h=Object.prototype.hasOwnProperty;function d(l){return"function"===typeof l}function g(l){return"string"===typeof l}function y(l){return"[object Object]"===p.call(l)}function m(l,e){return h.call(l,e)}function _(){}function w(l){var e=Object.create(null);return function(a){var u=e[a];return u||(e[a]=l(a))}}var k=/-(\w)/g,A=w(function(l){return l.replace(k,function(l,e){return e?e.toUpperCase():""})}),x=["invoke","success","fail","complete","returnValue"],T={},O={};function S(l,e){var a=e?l?l.concat(e):Array.isArray(e)?e:[e]:l;return a?C(a):a}function C(l){for(var e=[],a=0;a<l.length;a++)-1===e.indexOf(l[a])&&e.push(l[a]);return e}function $(l,e){var a=l.indexOf(e);-1!==a&&l.splice(a,1)}function D(l,e){Object.keys(e).forEach(function(a){-1!==x.indexOf(a)&&d(e[a])&&(l[a]=S(l[a],e[a]))})}function B(l,e){l&&e&&Object.keys(e).forEach(function(a){-1!==x.indexOf(a)&&d(e[a])&&$(l[a],e[a])})}function E(l,e){"string"===typeof l&&y(e)?D(O[l]||(O[l]={}),e):y(l)&&D(T,l)}function P(l,e){"string"===typeof l?y(e)?B(O[l],e):delete O[l]:y(l)&&B(T,l)}function j(l){return function(e){return l(e)||e}}function N(l){return!!l&&("object"===typeof l||"function"===typeof l)&&"function"===typeof l.then}function R(l,e){for(var a=!1,u=0;u<l.length;u++){var v=l[u];if(a)a=Promise.then(j(v));else{var b=v(e);if(N(b)&&(a=Promise.resolve(b)),!1===b)return{then:function(){}}}}return a||{then:function(l){return l(e)}}}function M(l){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(a){if(Array.isArray(l[a])){var u=e[a];e[a]=function(e){R(l[a],e).then(function(l){return d(u)&&u(l)||l})}}}),e}function I(l,e){var a=[];Array.isArray(T.returnValue)&&a.push.apply(a,i(T.returnValue));var u=O[l];return u&&Array.isArray(u.returnValue)&&a.push.apply(a,i(u.returnValue)),a.forEach(function(l){e=l(e)||e}),e}function L(l){var e=Object.create(null);Object.keys(T).forEach(function(l){"returnValue"!==l&&(e[l]=T[l].slice())});var a=O[l];return a&&Object.keys(a).forEach(function(l){"returnValue"!==l&&(e[l]=(e[l]||[]).concat(a[l]))}),e}function F(l,e,a){for(var u=arguments.length,v=new Array(u>3?u-3:0),b=3;b<u;b++)v[b-3]=arguments[b];var t=L(l);if(t&&Object.keys(t).length){if(Array.isArray(t.invoke)){var n=R(t.invoke,a);return n.then(function(l){return e.apply(void 0,[M(t,l)].concat(v))})}return e.apply(void 0,[M(t,a)].concat(v))}return e.apply(void 0,[a].concat(v))}var q={returnValue:function(l){return N(l)?l.then(function(l){return l[1]}).catch(function(l){return l[0]}):l}},V=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,U=/^create|Manager$/,H=/^on/;function z(l){return U.test(l)}function G(l){return V.test(l)}function W(l){return H.test(l)}function J(l){return l.then(function(l){return[null,l]}).catch(function(l){return[l]})}function K(l){return!(z(l)||G(l)||W(l))}function Y(l,e){return K(l)?function(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments.length,v=new Array(u>1?u-1:0),b=1;b<u;b++)v[b-1]=arguments[b];return d(a.success)||d(a.fail)||d(a.complete)?I(l,F.apply(void 0,[l,e,a].concat(v))):I(l,J(new Promise(function(u,b){F.apply(void 0,[l,e,Object.assign({},a,{success:u,fail:b})].concat(v)),Promise.prototype.finally||(Promise.prototype.finally=function(l){var e=this.constructor;return this.then(function(a){return e.resolve(l()).then(function(){return a})},function(a){return e.resolve(l()).then(function(){throw a})})})})))}:e}var X=1e-4,Q=750,Z=!1,ll=0,el=0;function al(){var l=wx.getSystemInfoSync(),e=l.platform,a=l.pixelRatio,u=l.windowWidth;ll=u,el=a,Z="ios"===e}function ul(l,e){if(0===ll&&al(),l=Number(l),0===l)return 0;var a=l/Q*(e||ll);return a<0&&(a=-a),a=Math.floor(a+X),0===a?1!==el&&Z?.5:1:l<0?-a:a}var vl={promiseInterceptor:q},bl=Object.freeze({upx2px:ul,interceptors:vl,addInterceptor:E,removeInterceptor:P}),tl={},nl=[],rl=[],ol=["success","fail","cancel","complete"];function il(l,e,a){return function(u){return e(cl(l,u,a))}}function sl(l,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},v=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(y(e)){var b=!0===v?e:{};for(var t in d(a)&&(a=a(e,b)||{}),e)if(m(a,t)){var n=a[t];d(n)&&(n=n(e[t],e,b)),n?g(n)?b[n]=e[t]:y(n)&&(b[n.name?n.name:t]=n.value):console.warn("app-plus ".concat(l,"暂不支持").concat(t))}else-1!==ol.indexOf(t)?b[t]=il(l,e[t],u):v||(b[t]=e[t]);return b}return d(e)&&(e=il(l,e,u)),e}function cl(l,e,a){var u=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return d(tl.returnValue)&&(e=tl.returnValue(l,e)),sl(l,e,a,{},u)}function fl(l,e){if(m(tl,l)){var a=tl[l];return a?function(e,u){var v=a;d(a)&&(v=a(e)),e=sl(l,e,v.args,v.returnValue);var b=[e];"undefined"!==typeof u&&b.push(u);var t=wx[v.name||l].apply(wx,b);return G(l)?cl(l,t,v.returnValue,z(l)):t}:function(){console.error("app-plus 暂不支持".concat(l))}}return e}var pl=Object.create(null),hl=["subscribePush","unsubscribePush","onPush","offPush","share"];function dl(l){return function(e){var a=e.fail,u=e.complete,v={errMsg:"".concat(l,":fail:暂不支持 ").concat(l," 方法")};d(a)&&a(v),d(u)&&u(v)}}hl.forEach(function(l){pl[l]=dl(l)});var gl=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return l||(l=new u.default),l};var l}();function yl(l,e,a){return l[e].apply(l,a)}function ml(){return yl(gl(),"$on",Array.prototype.slice.call(arguments))}function _l(){return yl(gl(),"$off",Array.prototype.slice.call(arguments))}function wl(){return yl(gl(),"$once",Array.prototype.slice.call(arguments))}function kl(){return yl(gl(),"$emit",Array.prototype.slice.call(arguments))}var Al=Object.freeze({$on:ml,$off:_l,$once:wl,$emit:kl});function xl(l){l.$processed=!0,l.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},l.id)};var e=[];if(l.onMessage=function(l){e.push(l)},l.$consumeMessage=function(l){e.forEach(function(e){return e(l)})},l.__uniapp_mask_id){var a=l.__uniapp_mask,u=plus.webview.getWebviewById(l.__uniapp_mask_id);u=u.parent()||u;var v=l.show,b=l.hide,t=l.close,n=function(){u.setStyle({mask:a})},r=function(){u.setStyle({mask:"none"})};l.show=function(){n();for(var e=arguments.length,a=new Array(e),u=0;u<e;u++)a[u]=arguments[u];return v.apply(l,a)},l.hide=function(){r();for(var e=arguments.length,a=new Array(e),u=0;u<e;u++)a[u]=arguments[u];return b.apply(l,a)},l.close=function(){r(),e=[];for(var a=arguments.length,u=new Array(a),v=0;v<a;v++)u[v]=arguments[v];return t.apply(l,u)}}}function Tl(l){var e=plus.webview.getWebviewById(l);return e&&!e.$processed&&xl(e),e}function Ol(l){return"undefined"!==typeof weex?weex.requireModule(l):__requireNativePlugin__(l)}var Sl=Object.freeze({requireNativePlugin:Ol,getSubNVueById:Tl}),Cl=Page,$l=Component,Dl=/:/g,Bl=w(function(l){return A(l.replace(Dl,"-"))});function El(l){if(wx.canIUse("nextTick")){var e=l.triggerEvent;l.triggerEvent=function(a){for(var u=arguments.length,v=new Array(u>1?u-1:0),b=1;b<u;b++)v[b-1]=arguments[b];return e.apply(l,[Bl(a)].concat(v))}}}function Pl(l,e){var a=e[l];e[l]=a?function(){El(this);for(var l=arguments.length,e=new Array(l),u=0;u<l;u++)e[u]=arguments[u];return a.apply(this,e)}:function(){El(this)}}Page=function(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Pl("onLoad",l),Cl(l)},Component=function(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Pl("created",l),$l(l)};var jl=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Nl(l,e){var a=l.$mp[l.mpType];e.forEach(function(e){m(a,e)&&(l[e]=a[e])})}function Rl(l,e){if(!e)return!0;if(u.default.options&&Array.isArray(u.default.options[l]))return!0;if(e=e.default||e,d(e))return!!d(e.extendOptions[l])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[l]));if(d(e[l]))return!0;var a=e.mixins;return Array.isArray(a)?!!a.find(function(e){return Rl(l,e)}):void 0}function Ml(l,e,a){e.forEach(function(e){Rl(e,a)&&(l[e]=function(l){return this.$vm&&this.$vm.__call_hook(e,l)})})}function Il(l,e){var a;return e=e.default||e,d(e)?(a=e,e=a.extendOptions):a=l.extend(e),[a,e]}function Ll(l,e){if(Array.isArray(e)&&e.length){var a=Object.create(null);e.forEach(function(l){a[l]=!0}),l.$scopedSlots=l.$slots=a}}function Fl(l,e){l=(l||"").split(",");var a=l.length;1===a?e._$vueId=l[0]:2===a&&(e._$vueId=l[0],e._$vuePid=l[1])}function ql(l,e){var a=l.data||{},u=l.methods||{};if("function"===typeof a)try{a=a.call(e)}catch(v){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",a)}else try{a=JSON.parse(JSON.stringify(a))}catch(v){}return y(a)||(a={}),Object.keys(u).forEach(function(l){-1!==e.__lifecycle_hooks__.indexOf(l)||m(a,l)||(a[l]=u[l])}),a}var Vl=[String,Number,Boolean,Object,Array,null];function Ul(l){return function(e,a){this.$vm&&(this.$vm[l]=e)}}function Hl(l,e){var a=l["behaviors"],u=l["extends"],v=l["mixins"],b=l["props"];b||(l["props"]=b=[]);var t=[];return Array.isArray(a)&&a.forEach(function(l){t.push(l.replace("uni://","wx".concat("://"))),"uni://form-field"===l&&(Array.isArray(b)?(b.push("name"),b.push("value")):(b["name"]={type:String,default:""},b["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),y(u)&&u.props&&t.push(e({properties:Gl(u.props,!0)})),Array.isArray(v)&&v.forEach(function(l){y(l)&&l.props&&t.push(e({properties:Gl(l.props,!0)}))}),t}function zl(l,e,a,u){return Array.isArray(e)&&1===e.length?e[0]:e}function Gl(l){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(a.vueId={type:String,value:""},a.vueSlots={type:null,value:[],observer:function(l,e){var a=Object.create(null);l.forEach(function(l){a[l]=!0}),this.setData({$slots:a})}}),Array.isArray(l)?l.forEach(function(l){a[l]={type:null,observer:Ul(l)}}):y(l)&&Object.keys(l).forEach(function(e){var u=l[e];if(y(u)){var v=u["default"];d(v)&&(v=v()),u.type=zl(e,u.type),a[e]={type:-1!==Vl.indexOf(u.type)?u.type:null,value:v,observer:Ul(e)}}else{var b=zl(e,u);a[e]={type:-1!==Vl.indexOf(b)?b:null,observer:Ul(e)}}}),a}function Wl(l){try{l.mp=JSON.parse(JSON.stringify(l))}catch(e){}return l.stopPropagation=_,l.preventDefault=_,l.target=l.target||{},m(l,"detail")||(l.detail={}),y(l.detail)&&(l.target=Object.assign({},l.target,l.detail)),l}function Jl(l,e){var a=l;return e.forEach(function(e){var u=e[0],v=e[2];if(u||"undefined"!==typeof v){var b=e[1],t=e[3],n=u?l.__get_value(u,a):a;Number.isInteger(n)?a=v:b?Array.isArray(n)?a=n.find(function(e){return l.__get_value(b,e)===v}):y(n)?a=Object.keys(n).find(function(e){return l.__get_value(b,n[e])===v}):console.error("v-for 暂不支持循环数据：",n):a=n[v],t&&(a=l.__get_value(t,a))}}),a}function Kl(l,e,a){var u={};return Array.isArray(e)&&e.length&&e.forEach(function(e,v){"string"===typeof e?e?"$event"===e?u["$"+v]=a:0===e.indexOf("$event.")?u["$"+v]=l.__get_value(e.replace("$event.",""),a):u["$"+v]=l.__get_value(e):u["$"+v]=l:u["$"+v]=Jl(l,e)}),u}function Yl(l){for(var e={},a=1;a<l.length;a++){var u=l[a];e[u[0]]=u[1]}return e}function Xl(l,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],v=arguments.length>4?arguments[4]:void 0,b=arguments.length>5?arguments[5]:void 0,t=!1;if(v&&(t=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!a.length))return t?[e]:e.detail.__args__||e.detail;var n=Kl(l,u,e),r=[];return a.forEach(function(l){"$event"===l?"__set_model"!==b||v?v&&!t?r.push(e.detail.__args__[0]):r.push(e):r.push(e.target.value):Array.isArray(l)&&"o"===l[0]?r.push(Yl(l)):"string"===typeof l&&m(n,l)?r.push(n[l]):r.push(l)}),r}var Ql="~",Zl="^";function le(l,e){return l===e||"regionchange"===e&&("begin"===l||"end"===l)}function ee(l){var e=this;l=Wl(l);var a=(l.currentTarget||l.target).dataset;if(!a)return console.warn("事件信息不存在");var u=a.eventOpts||a["event-opts"];if(!u)return console.warn("事件信息不存在");var v=l.type,b=[];return u.forEach(function(a){var u=a[0],t=a[1],n=u.charAt(0)===Zl;u=n?u.slice(1):u;var r=u.charAt(0)===Ql;u=r?u.slice(1):u,t&&le(v,u)&&t.forEach(function(a){var u=a[0];if(u){var v=e.$vm;v.$options.generic&&v.$parent&&v.$parent.$parent&&(v=v.$parent.$parent);var t=v[u];if(!d(t))throw new Error(" _vm.".concat(u," is not a function"));if(r){if(t.once)return;t.once=!0}b.push(t.apply(v,Xl(e.$vm,l,a[1],a[2],n,u)))}})}),"input"===v&&1===b.length&&"undefined"!==typeof b[0]?b[0]:void 0}var ae=["onShow","onHide","onError","onPageNotFound"];function ue(l,e){var a=e.mocks,v=e.initRefs;l.$options.store&&(u.default.prototype.$store=l.$options.store),u.default.prototype.mpHost="app-plus",u.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=o({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(v(this),Nl(this,a)))}});var b={onLaunch:function(e){this.$vm||(this.$vm=l,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return b.globalData=l.$options.globalData||{},Ml(b,ae),b}var ve=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function be(l,e){var a=l.$children,u=a.find(function(l){return l.$scope._$vueId===e});if(u)return u;for(var v=a.length-1;v>=0;v--)if(u=be(a[v],e),u)return u}function te(l){return Behavior(l)}function ne(){return!!this.route}function re(l){this.triggerEvent("__l",l)}function oe(l){var e=l.$scope;Object.defineProperty(l,"$refs",{get:function(){var l={},a=e.selectAllComponents(".vue-ref");a.forEach(function(e){var a=e.dataset.ref;l[a]=e.$vm||e});var u=e.selectAllComponents(".vue-ref-in-for");return u.forEach(function(e){var a=e.dataset.ref;l[a]||(l[a]=[]),l[a].push(e.$vm||e)}),l}})}function ie(l){var e,a=l.detail||l.value,u=a.vuePid,v=a.vueOptions;u&&(e=be(this.$vm,u)),e||(e=this.$vm),v.parent=e}function se(l){return ue(l,{mocks:ve,initRefs:oe})}var ce=["onUniNViewMessage"];function fe(l){var e=se(l);return Ml(e,ce),e}function pe(l){return App(fe(l)),l}function he(l){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.isPage,v=e.initRelation,t=Il(u.default,l),n=b(t,2),r=n[0],o=n[1],i={options:{multipleSlots:!0,addGlobalClass:!0},data:ql(o,u.default.prototype),behaviors:Hl(o,te),properties:Gl(o.props,!1,o.__file),lifetimes:{attached:function(){var l=this.properties,e={mpType:a.call(this)?"page":"component",mpInstance:this,propsData:l};Fl(l.vueId,this),v.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new r(e),Ll(this.$vm,l.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(l){this.$vm&&this.$vm.__call_hook("onPageShow",l)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(l){this.$vm&&this.$vm.__call_hook("onPageResize",l)}},methods:{__l:ie,__e:ee}};return Array.isArray(o.wxsCallMethods)&&o.wxsCallMethods.forEach(function(l){i.methods[l]=function(e){return this.$vm[l](e)}}),a?i:[i,r]}function de(l){return he(l,{isPage:ne,initRelation:re})}function ge(l){var e=de(l);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var ye=["onShow","onHide","onUnload"];function me(l,e){e.isPage,e.initRelation;var a=ge(l);return Ml(a.methods,ye,l),a.methods.onLoad=function(l){this.$vm.$mp.query=l,this.$vm.__call_hook("onLoad",l)},a}function _e(l){return me(l,{isPage:ne,initRelation:re})}ye.push.apply(ye,jl);var we=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function ke(l){var e=_e(l);return Ml(e.methods,we),e}function Ae(l){return Component(ke(l))}function xe(l){return Component(ge(l))}nl.forEach(function(l){tl[l]=!1}),rl.forEach(function(l){var e=tl[l]&&tl[l].name?tl[l].name:l;wx.canIUse(e)||(tl[l]=!1)});var Te={};Object.keys(bl).forEach(function(l){Te[l]=bl[l]}),Object.keys(Al).forEach(function(l){Te[l]=Al[l]}),Object.keys(Sl).forEach(function(l){Te[l]=Y(l,Sl[l])}),Object.keys(wx).forEach(function(l){(m(wx,l)||m(tl,l))&&(Te[l]=Y(l,fl(l,wx[l])))}),"undefined"!==typeof l&&(l.uni=Te,l.UniEmitter=Al),wx.createApp=pe,wx.createPage=Ae,wx.createComponent=xe;var Oe=Te,Se=Oe;e.default=Se}).call(this,a("c8ba"))},8189:function(l){l.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23320190923002",_inBundle:!1,_integrity:"sha512-MnftsvgOac3q1FCOBPzivbFn8GNQFo7D2DY325HeEZyFCWgx5GEwHpGYjT1PQU6v7DaDn0ruxa3ObdpUIYbmZw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23320190923002.tgz",_shasum:"0c400c140ca0b3c05f52d25f11583cf05a0c4e9a",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"fed4c73fb9142a1b277dd79313939cad90693d3e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23320190923002"}},8622:function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=[[{label:"市辖区",value:"1101"}],[{label:"市辖区",value:"1201"}],[{label:"石家庄市",value:"1301"},{label:"唐山市",value:"1302"},{label:"秦皇岛市",value:"1303"},{label:"邯郸市",value:"1304"},{label:"邢台市",value:"1305"},{label:"保定市",value:"1306"},{label:"张家口市",value:"1307"},{label:"承德市",value:"1308"},{label:"沧州市",value:"1309"},{label:"廊坊市",value:"1310"},{label:"衡水市",value:"1311"}],[{label:"太原市",value:"1401"},{label:"大同市",value:"1402"},{label:"阳泉市",value:"1403"},{label:"长治市",value:"1404"},{label:"晋城市",value:"1405"},{label:"朔州市",value:"1406"},{label:"晋中市",value:"1407"},{label:"运城市",value:"1408"},{label:"忻州市",value:"1409"},{label:"临汾市",value:"1410"},{label:"吕梁市",value:"1411"}],[{label:"呼和浩特市",value:"1501"},{label:"包头市",value:"1502"},{label:"乌海市",value:"1503"},{label:"赤峰市",value:"1504"},{label:"通辽市",value:"1505"},{label:"鄂尔多斯市",value:"1506"},{label:"呼伦贝尔市",value:"1507"},{label:"巴彦淖尔市",value:"1508"},{label:"乌兰察布市",value:"1509"},{label:"兴安盟",value:"1522"},{label:"锡林郭勒盟",value:"1525"},{label:"阿拉善盟",value:"1529"}],[{label:"沈阳市",value:"2101"},{label:"大连市",value:"2102"},{label:"鞍山市",value:"2103"},{label:"抚顺市",value:"2104"},{label:"本溪市",value:"2105"},{label:"丹东市",value:"2106"},{label:"锦州市",value:"2107"},{label:"营口市",value:"2108"},{label:"阜新市",value:"2109"},{label:"辽阳市",value:"2110"},{label:"盘锦市",value:"2111"},{label:"铁岭市",value:"2112"},{label:"朝阳市",value:"2113"},{label:"葫芦岛市",value:"2114"}],[{label:"长春市",value:"2201"},{label:"吉林市",value:"2202"},{label:"四平市",value:"2203"},{label:"辽源市",value:"2204"},{label:"通化市",value:"2205"},{label:"白山市",value:"2206"},{label:"松原市",value:"2207"},{label:"白城市",value:"2208"},{label:"延边朝鲜族自治州",value:"2224"}],[{label:"哈尔滨市",value:"2301"},{label:"齐齐哈尔市",value:"2302"},{label:"鸡西市",value:"2303"},{label:"鹤岗市",value:"2304"},{label:"双鸭山市",value:"2305"},{label:"大庆市",value:"2306"},{label:"伊春市",value:"2307"},{label:"佳木斯市",value:"2308"},{label:"七台河市",value:"2309"},{label:"牡丹江市",value:"2310"},{label:"黑河市",value:"2311"},{label:"绥化市",value:"2312"},{label:"大兴安岭地区",value:"2327"}],[{label:"市辖区",value:"3101"}],[{label:"南京市",value:"3201"},{label:"无锡市",value:"3202"},{label:"徐州市",value:"3203"},{label:"常州市",value:"3204"},{label:"苏州市",value:"3205"},{label:"南通市",value:"3206"},{label:"连云港市",value:"3207"},{label:"淮安市",value:"3208"},{label:"盐城市",value:"3209"},{label:"扬州市",value:"3210"},{label:"镇江市",value:"3211"},{label:"泰州市",value:"3212"},{label:"宿迁市",value:"3213"}],[{label:"杭州市",value:"3301"},{label:"宁波市",value:"3302"},{label:"温州市",value:"3303"},{label:"嘉兴市",value:"3304"},{label:"湖州市",value:"3305"},{label:"绍兴市",value:"3306"},{label:"金华市",value:"3307"},{label:"衢州市",value:"3308"},{label:"舟山市",value:"3309"},{label:"台州市",value:"3310"},{label:"丽水市",value:"3311"}],[{label:"合肥市",value:"3401"},{label:"芜湖市",value:"3402"},{label:"蚌埠市",value:"3403"},{label:"淮南市",value:"3404"},{label:"马鞍山市",value:"3405"},{label:"淮北市",value:"3406"},{label:"铜陵市",value:"3407"},{label:"安庆市",value:"3408"},{label:"黄山市",value:"3410"},{label:"滁州市",value:"3411"},{label:"阜阳市",value:"3412"},{label:"宿州市",value:"3413"},{label:"六安市",value:"3415"},{label:"亳州市",value:"3416"},{label:"池州市",value:"3417"},{label:"宣城市",value:"3418"}],[{label:"福州市",value:"3501"},{label:"厦门市",value:"3502"},{label:"莆田市",value:"3503"},{label:"三明市",value:"3504"},{label:"泉州市",value:"3505"},{label:"漳州市",value:"3506"},{label:"南平市",value:"3507"},{label:"龙岩市",value:"3508"},{label:"宁德市",value:"3509"}],[{label:"南昌市",value:"3601"},{label:"景德镇市",value:"3602"},{label:"萍乡市",value:"3603"},{label:"九江市",value:"3604"},{label:"新余市",value:"3605"},{label:"鹰潭市",value:"3606"},{label:"赣州市",value:"3607"},{label:"吉安市",value:"3608"},{label:"宜春市",value:"3609"},{label:"抚州市",value:"3610"},{label:"上饶市",value:"3611"}],[{label:"济南市",value:"3701"},{label:"青岛市",value:"3702"},{label:"淄博市",value:"3703"},{label:"枣庄市",value:"3704"},{label:"东营市",value:"3705"},{label:"烟台市",value:"3706"},{label:"潍坊市",value:"3707"},{label:"济宁市",value:"3708"},{label:"泰安市",value:"3709"},{label:"威海市",value:"3710"},{label:"日照市",value:"3711"},{label:"莱芜市",value:"3712"},{label:"临沂市",value:"3713"},{label:"德州市",value:"3714"},{label:"聊城市",value:"3715"},{label:"滨州市",value:"3716"},{label:"菏泽市",value:"3717"}],[{label:"郑州市",value:"4101"},{label:"开封市",value:"4102"},{label:"洛阳市",value:"4103"},{label:"平顶山市",value:"4104"},{label:"安阳市",value:"4105"},{label:"鹤壁市",value:"4106"},{label:"新乡市",value:"4107"},{label:"焦作市",value:"4108"},{label:"濮阳市",value:"4109"},{label:"许昌市",value:"4110"},{label:"漯河市",value:"4111"},{label:"三门峡市",value:"4112"},{label:"南阳市",value:"4113"},{label:"商丘市",value:"4114"},{label:"信阳市",value:"4115"},{label:"周口市",value:"4116"},{label:"驻马店市",value:"4117"},{label:"省直辖县级行政区划",value:"4190"}],[{label:"武汉市",value:"4201"},{label:"黄石市",value:"4202"},{label:"十堰市",value:"4203"},{label:"宜昌市",value:"4205"},{label:"襄阳市",value:"4206"},{label:"鄂州市",value:"4207"},{label:"荆门市",value:"4208"},{label:"孝感市",value:"4209"},{label:"荆州市",value:"4210"},{label:"黄冈市",value:"4211"},{label:"咸宁市",value:"4212"},{label:"随州市",value:"4213"},{label:"恩施土家族苗族自治州",value:"4228"},{label:"省直辖县级行政区划",value:"4290"}],[{label:"长沙市",value:"4301"},{label:"株洲市",value:"4302"},{label:"湘潭市",value:"4303"},{label:"衡阳市",value:"4304"},{label:"邵阳市",value:"4305"},{label:"岳阳市",value:"4306"},{label:"常德市",value:"4307"},{label:"张家界市",value:"4308"},{label:"益阳市",value:"4309"},{label:"郴州市",value:"4310"},{label:"永州市",value:"4311"},{label:"怀化市",value:"4312"},{label:"娄底市",value:"4313"},{label:"湘西土家族苗族自治州",value:"4331"}],[{label:"广州市",value:"4401"},{label:"韶关市",value:"4402"},{label:"深圳市",value:"4403"},{label:"珠海市",value:"4404"},{label:"汕头市",value:"4405"},{label:"佛山市",value:"4406"},{label:"江门市",value:"4407"},{label:"湛江市",value:"4408"},{label:"茂名市",value:"4409"},{label:"肇庆市",value:"4412"},{label:"惠州市",value:"4413"},{label:"梅州市",value:"4414"},{label:"汕尾市",value:"4415"},{label:"河源市",value:"4416"},{label:"阳江市",value:"4417"},{label:"清远市",value:"4418"},{label:"东莞市",value:"4419"},{label:"中山市",value:"4420"},{label:"潮州市",value:"4451"},{label:"揭阳市",value:"4452"},{label:"云浮市",value:"4453"}],[{label:"南宁市",value:"4501"},{label:"柳州市",value:"4502"},{label:"桂林市",value:"4503"},{label:"梧州市",value:"4504"},{label:"北海市",value:"4505"},{label:"防城港市",value:"4506"},{label:"钦州市",value:"4507"},{label:"贵港市",value:"4508"},{label:"玉林市",value:"4509"},{label:"百色市",value:"4510"},{label:"贺州市",value:"4511"},{label:"河池市",value:"4512"},{label:"来宾市",value:"4513"},{label:"崇左市",value:"4514"}],[{label:"海口市",value:"4601"},{label:"三亚市",value:"4602"},{label:"三沙市",value:"4603"},{label:"儋州市",value:"4604"},{label:"省直辖县级行政区划",value:"4690"}],[{label:"市辖区",value:"5001"},{label:"县",value:"5002"}],[{label:"成都市",value:"5101"},{label:"自贡市",value:"5103"},{label:"攀枝花市",value:"5104"},{label:"泸州市",value:"5105"},{label:"德阳市",value:"5106"},{label:"绵阳市",value:"5107"},{label:"广元市",value:"5108"},{label:"遂宁市",value:"5109"},{label:"内江市",value:"5110"},{label:"乐山市",value:"5111"},{label:"南充市",value:"5113"},{label:"眉山市",value:"5114"},{label:"宜宾市",value:"5115"},{label:"广安市",value:"5116"},{label:"达州市",value:"5117"},{label:"雅安市",value:"5118"},{label:"巴中市",value:"5119"},{label:"资阳市",value:"5120"},{label:"阿坝藏族羌族自治州",value:"5132"},{label:"甘孜藏族自治州",value:"5133"},{label:"凉山彝族自治州",value:"5134"}],[{label:"贵阳市",value:"5201"},{label:"六盘水市",value:"5202"},{label:"遵义市",value:"5203"},{label:"安顺市",value:"5204"},{label:"毕节市",value:"5205"},{label:"铜仁市",value:"5206"},{label:"黔西南布依族苗族自治州",value:"5223"},{label:"黔东南苗族侗族自治州",value:"5226"},{label:"黔南布依族苗族自治州",value:"5227"}],[{label:"昆明市",value:"5301"},{label:"曲靖市",value:"5303"},{label:"玉溪市",value:"5304"},{label:"保山市",value:"5305"},{label:"昭通市",value:"5306"},{label:"丽江市",value:"5307"},{label:"普洱市",value:"5308"},{label:"临沧市",value:"5309"},{label:"楚雄彝族自治州",value:"5323"},{label:"红河哈尼族彝族自治州",value:"5325"},{label:"文山壮族苗族自治州",value:"5326"},{label:"西双版纳傣族自治州",value:"5328"},{label:"大理白族自治州",value:"5329"},{label:"德宏傣族景颇族自治州",value:"5331"},{label:"怒江傈僳族自治州",value:"5333"},{label:"迪庆藏族自治州",value:"5334"}],[{label:"拉萨市",value:"5401"},{label:"日喀则市",value:"5402"},{label:"昌都市",value:"5403"},{label:"林芝市",value:"5404"},{label:"山南市",value:"5405"},{label:"那曲地区",value:"5424"},{label:"阿里地区",value:"5425"}],[{label:"西安市",value:"6101"},{label:"铜川市",value:"6102"},{label:"宝鸡市",value:"6103"},{label:"咸阳市",value:"6104"},{label:"渭南市",value:"6105"},{label:"延安市",value:"6106"},{label:"汉中市",value:"6107"},{label:"榆林市",value:"6108"},{label:"安康市",value:"6109"},{label:"商洛市",value:"6110"}],[{label:"兰州市",value:"6201"},{label:"嘉峪关市",value:"6202"},{label:"金昌市",value:"6203"},{label:"白银市",value:"6204"},{label:"天水市",value:"6205"},{label:"武威市",value:"6206"},{label:"张掖市",value:"6207"},{label:"平凉市",value:"6208"},{label:"酒泉市",value:"6209"},{label:"庆阳市",value:"6210"},{label:"定西市",value:"6211"},{label:"陇南市",value:"6212"},{label:"临夏回族自治州",value:"6229"},{label:"甘南藏族自治州",value:"6230"}],[{label:"西宁市",value:"6301"},{label:"海东市",value:"6302"},{label:"海北藏族自治州",value:"6322"},{label:"黄南藏族自治州",value:"6323"},{label:"海南藏族自治州",value:"6325"},{label:"果洛藏族自治州",value:"6326"},{label:"玉树藏族自治州",value:"6327"},{label:"海西蒙古族藏族自治州",value:"6328"}],[{label:"银川市",value:"6401"},{label:"石嘴山市",value:"6402"},{label:"吴忠市",value:"6403"},{label:"固原市",value:"6404"},{label:"中卫市",value:"6405"}],[{label:"乌鲁木齐市",value:"6501"},{label:"克拉玛依市",value:"6502"},{label:"吐鲁番市",value:"6504"},{label:"哈密市",value:"6505"},{label:"昌吉回族自治州",value:"6523"},{label:"博尔塔拉蒙古自治州",value:"6527"},{label:"巴音郭楞蒙古自治州",value:"6528"},{label:"阿克苏地区",value:"6529"},{label:"克孜勒苏柯尔克孜自治州",value:"6530"},{label:"喀什地区",value:"6531"},{label:"和田地区",value:"6532"},{label:"伊犁哈萨克自治州",value:"6540"},{label:"塔城地区",value:"6542"},{label:"阿勒泰地区",value:"6543"},{label:"自治区直辖县级行政区划",value:"6590"}],[{label:"台北",value:"6601"},{label:"高雄",value:"6602"},{label:"基隆",value:"6603"},{label:"台中",value:"6604"},{label:"台南",value:"6605"},{label:"新竹",value:"6606"},{label:"嘉义",value:"6607"},{label:"宜兰",value:"6608"},{label:"桃园",value:"6609"},{label:"苗栗",value:"6610"},{label:"彰化",value:"6611"},{label:"南投",value:"6612"},{label:"云林",value:"6613"},{label:"屏东",value:"6614"},{label:"台东",value:"6615"},{label:"花莲",value:"6616"},{label:"澎湖",value:"6617"}],[{label:"香港岛",value:"6701"},{label:"九龙",value:"6702"},{label:"新界",value:"6703"}],[{label:"澳门半岛",value:"6801"},{label:"氹仔岛",value:"6802"},{label:"路环岛",value:"6803"},{label:"路氹城",value:"6804"}]],v=u;e.default=v},8981:function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=[{label:"北京市",value:"11"},{label:"天津市",value:"12"},{label:"河北省",value:"13"},{label:"山西省",value:"14"},{label:"内蒙古自治区",value:"15"},{label:"辽宁省",value:"21"},{label:"吉林省",value:"22"},{label:"黑龙江省",value:"23"},{label:"上海市",value:"31"},{label:"江苏省",value:"32"},{label:"浙江省",value:"33"},{label:"安徽省",value:"34"},{label:"福建省",value:"35"},{label:"江西省",value:"36"},{label:"山东省",value:"37"},{label:"河南省",value:"41"},{label:"湖北省",value:"42"},{label:"湖南省",value:"43"},{label:"广东省",value:"44"},{label:"广西壮族自治区",value:"45"},{label:"海南省",value:"46"},{label:"重庆市",value:"50"},{label:"四川省",value:"51"},{label:"贵州省",value:"52"},{label:"云南省",value:"53"},{label:"西藏自治区",value:"54"},{label:"陕西省",value:"61"},{label:"甘肃省",value:"62"},{label:"青海省",value:"63"},{label:"宁夏回族自治区",value:"64"},{label:"新疆维吾尔自治区",value:"65"},{label:"台湾",value:"66"},{label:"香港",value:"67"},{label:"澳门",value:"68"}],v=u;e.default=v},"921b":function(l,e,a){"use strict";(function(l){var e=a("8189");function u(l,e){return!e||"object"!==typeof e&&"function"!==typeof e?v(l):e}function v(l){if(void 0===l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function b(l){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(l){return l.__proto__||Object.getPrototypeOf(l)},b(l)}function t(l,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");l.prototype=Object.create(e&&e.prototype,{constructor:{value:l,writable:!0,configurable:!0}}),e&&n(l,e)}function n(l,e){return n=Object.setPrototypeOf||function(l,e){return l.__proto__=e,l},n(l,e)}function r(l,e){if(!(l instanceof e))throw new TypeError("Cannot call a class as a function")}function o(l,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function i(l,e,a){return e&&o(l.prototype,e),a&&o(l,a),l}var s=e.version,c="https://tongji.dcloud.io/uni/stat",f="https://tongji.dcloud.io/uni/stat.gif",p=1800,h=300,d=10,g="__DC_STAT_UUID",y="__DC_UUID_VALUE";function m(){var e="";if("n"===A()){try{e=plus.runtime.getDCloudId()}catch(a){e=""}return e}try{e=l.getStorageSync(g)}catch(a){e=y}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{l.setStorageSync(g,e)}catch(a){l.setStorageSync(g,y)}}return e}var _=function(l){var e=Object.keys(l),a=e.sort(),u={},v="";for(var b in a)u[a[b]]=l[a[b]],v+=a[b]+"="+l[a[b]]+"&";return{sign:"",options:v.substr(0,v.length-1)}},w=function(l){var e="";for(var a in l)e+=a+"="+l[a]+"&";return e.substr(0,e.length-1)},k=function(){return parseInt((new Date).getTime()/1e3)},A=function(){var l={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return l["app-plus"]},x=function(){var e="";return"wx"!==A()&&"qq"!==A()||(e=l.getAccountInfoSync().miniProgram.appId||""),e},T=function(){return"n"===A()?plus.runtime.version:""},O=function(){var l=A(),e="";return"n"===l&&(e=plus.runtime.channel),e},S=function(e){var a=A(),u="";return e||("wx"===a&&(u=l.getLaunchOptionsSync().scene),u)},C="First__Visit__Time",$="Last__Visit__Time",D=function(){var e=l.getStorageSync(C),a=0;return e?a=e:(a=k(),l.setStorageSync(C,a),l.removeStorageSync($)),a},B=function(){var e=l.getStorageSync($),a=0;return a=e||"",l.setStorageSync($,k()),a},E="__page__residence__time",P=0,j=0,N=function(){return P=k(),"n"===A()&&l.setStorageSync(E,k()),P},R=function(){return j=k(),"n"===A()&&(P=l.getStorageSync(E)),j-P},M="Total__Visit__Count",I=function(){var e=l.getStorageSync(M),a=1;return e&&(a=e,a++),l.setStorageSync(M,a),a},L=function(l){var e={};for(var a in l)e[a]=encodeURIComponent(l[a]);return e},F=0,q=0,V=function(){var l=(new Date).getTime();return F=l,q=0,l},U=function(){var l=(new Date).getTime();return q=l,l},H=function(l){var e=0;if(0!==F&&(e=q-F),e=parseInt(e/1e3),e=e<1?1:e,"app"===l){var a=e>h;return{residenceTime:e,overtime:a}}if("page"===l){var u=e>p;return{residenceTime:e,overtime:u}}return{residenceTime:e}},z=function(){var l=getCurrentPages(),e=l[l.length-1],a=e.$vm;return"bd"===A()?a.$mp&&a.$mp.page.is:a.$scope&&a.$scope.route||a.$mp&&a.$mp.page.route},G=function(l){var e=getCurrentPages(),a=e[e.length-1],u=a.$vm,v=l._query,b=v&&"{}"!==JSON.stringify(v)?"?"+JSON.stringify(v):"";return l._query="","bd"===A()?u.$mp&&u.$mp.page.is+b:u.$scope&&u.$scope.route+b||u.$mp&&u.$mp.page.route+b},W=function(l){return!!("page"===l.mpType||l.$mp&&"page"===l.$mp.mpType||"page"===l.$options.mpType)},J=function(l,e){return l?"string"!==typeof l?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):l.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===l&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},K=a("3f6d").default,Y=a("9c16").default||a("9c16"),X=l.getSystemInfoSync(),Q=function(){function e(){r(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:A(),mpn:x(),ak:Y.appid,usv:s,v:T(),ch:O(),cn:"",pn:"",ct:"",t:k(),tt:"",p:"android"===X.platform?"a":"i",brand:X.brand||"",md:X.model,sv:X.system.replace(/(Android|iOS)\s/,""),mpsdk:X.SDKVersion||"",mpv:X.version||"",lang:X.language,pr:X.pixelRatio,ww:X.windowWidth,wh:X.windowHeight,sw:X.screenWidth,sh:X.screenHeight}}return i(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){U();var l=H("app");if(l.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(l,e){this.__licationHide=!0,U();var a=H();V();var u=G(this);this._sendHideRequest({urlref:u,urlref_ts:a.residenceTime},e)}},{key:"_pageShow",value:function(){var l=G(this),e=z();if(this._navigationBarTitle.config=K&&K.pages[e]&&K.pages[e].titleNView&&K.pages[e].titleNView.titleText||K&&K.pages[e]&&K.pages[e].navigationBarTitleText||"",this.__licationShow)return V(),this.__licationShow=!1,void(this._lastPageRoute=l);U(),this._lastPageRoute=l;var a=H("page");if(a.overtime){var u={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(u)}V()}},{key:"_pageHide",value:function(){if(!this.__licationHide){U();var l=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:l.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(l){this._sendEventRequest({key:l},0)}},{key:"_sendReportRequest",value:function(l){this._navigationBarTitle.lt="1";var e=l.query&&"{}"!==JSON.stringify(l.query)?"?"+JSON.stringify(l.query):"";this.statData.lt="1",this.statData.url=l.path+e||"",this.statData.t=k(),this.statData.sc=S(l.scene),this.statData.fvts=D(),this.statData.lvts=B(),this.statData.tvc=I(),"n"===A()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(l){var e=l.url,a=l.urlref,u=l.urlref_ts;this._navigationBarTitle.lt="11";var v={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:a,urlref_ts:u,ch:this.statData.ch,usv:this.statData.usv,t:k(),p:this.statData.p};this.request(v)}},{key:"_sendHideRequest",value:function(l,e){var a=l.urlref,u=l.urlref_ts,v={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:a,urlref_ts:u,ch:this.statData.ch,usv:this.statData.usv,t:k(),p:this.statData.p};this.request(v,e)}},{key:"_sendEventRequest",value:function(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=l.key,a=void 0===e?"":e,u=l.value,v=void 0===u?"":u,b=this._lastPageRoute,t={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:b,ch:this.statData.ch,e_n:a,e_v:"object"===typeof v?JSON.stringify(v):v.toString(),usv:this.statData.usv,t:k(),p:this.statData.p};this.request(t)}},{key:"getNetworkInfo",value:function(){var e=this;l.getNetworkType({success:function(l){e.statData.net=l.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var l=this;plus.runtime.getProperty(plus.runtime.appid,function(e){l.statData.v=e.version||"",l.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;Y.getLocation?l.getLocation({type:"wgs84",geocode:!0,success:function(l){l.address&&(e.statData.cn=l.address.country,e.statData.pn=l.address.province,e.statData.ct=l.address.city),e.statData.lat=l.latitude,e.statData.lng=l.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,a){var u=this,v=k(),b=this._navigationBarTitle;e.ttn=b.page,e.ttpj=b.config,e.ttc=b.report;var t=this._reportingRequestData;if("n"===A()&&(t=l.getStorageSync("__UNI__STAT__DATA")||{}),t[e.lt]||(t[e.lt]=[]),t[e.lt].push(e),"n"===A()&&l.setStorageSync("__UNI__STAT__DATA",t),!(R()<d)||a){var n=this._reportingRequestData;"n"===A()&&(n=l.getStorageSync("__UNI__STAT__DATA")),N();var r=[],o=[],i=[],c=function(l){var e=n[l];e.forEach(function(e){var a=w(e);0===l?r.push(a):3===l?i.push(a):o.push(a)})};for(var f in n)c(f);r.push.apply(r,o.concat(i));var p={usv:s,t:v,requests:JSON.stringify(r)};this._reportingRequestData={},"n"===A()&&l.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==A()||"a"!==this.statData.p?this._sendRequest(p):setTimeout(function(){u._sendRequest(p)},200):this.imageRequest(p)}}},{key:"_sendRequest",value:function(e){var a=this;l.request({url:c,method:"POST",data:e,success:function(){},fail:function(l){++a._retry<3&&setTimeout(function(){a._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(l){var e=new Image,a=_(L(l)).options;e.src=f+"?"+a}},{key:"sendEvent",value:function(l,e){J(l,e)||("title"!==l?this._sendEventRequest({key:l,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Z=function(e){function a(){var e;return r(this,a),e=u(this,b(a).call(this)),e.instance=null,"function"===typeof l.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return t(a,e),i(a,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new a),this.instance}}]),i(a,[{key:"addInterceptorInit",value:function(){var e=this;l.addInterceptor("setNavigationBarTitle",{invoke:function(l){e._navigationBarTitle.page=l.title}})}},{key:"interceptLogin",value:function(){var e=this;l.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var a=this;e?l.addInterceptor("share",{success:function(){a._share()},fail:function(){a._share()}}):a._share()}},{key:"interceptRequestPayment",value:function(){var e=this;l.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(l,e){this.self=e,N(),this.__licationShow=!0,this._sendReportRequest(l,!0)}},{key:"load",value:function(l,e){if(!e.$scope&&!e.$mp){var a=getCurrentPages();e.$scope=a[a.length-1]}this.self=e,this._query=l}},{key:"show",value:function(l){this.self=l,W(l)?this._pageShow(l):this._applicationShow(l)}},{key:"ready",value:function(l){}},{key:"hide",value:function(l){this.self=l,W(l)?this._pageHide(l):this._applicationHide(l,!0)}},{key:"error",value:function(l){this._platform;var e="";e=l.message?l.stack:JSON.stringify(l);var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:k(),p:this.statData.p};this.request(a)}}]),a}(Q),ll=Z.getInstance(),el=!1,al={onLaunch:function(l){ll.report(l,this)},onReady:function(){ll.ready(this)},onLoad:function(l){if(ll.load(l,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(l){return ll.interceptShare(!1),e.call(this,l)}}},onShow:function(){el=!1,ll.show(this)},onHide:function(){el=!0,ll.hide(this)},onUnload:function(){el?el=!1:ll.hide(this)},onError:function(l){ll.error(l)}};function ul(){var e=a("66fd");(e.default||e).mixin(al),l.report=function(l,e){ll.sendEvent(l,e)}}ul()}).call(this,a("6e42")["default"])},9574:function(l,e,a){"use strict";var u="http://4zlinkimgtest.oss-cn-beijing.aliyuncs.com/",v={uploadImageUrl:"".concat(u),AccessKeySecret:"zmOJcaqKJB5e4gqtLunHcNoMBTdDgp",OSSAccessKeyId:"LTAIPcJL9J5OZr2G",timeout:87600};l.exports=v},"96cf":function(l,e){!function(e){"use strict";var a,u=Object.prototype,v=u.hasOwnProperty,b="function"===typeof Symbol?Symbol:{},t=b.iterator||"@@iterator",n=b.asyncIterator||"@@asyncIterator",r=b.toStringTag||"@@toStringTag",o="object"===typeof l,i=e.regeneratorRuntime;if(i)o&&(l.exports=i);else{i=e.regeneratorRuntime=o?l.exports:{},i.wrap=_;var s="suspendedStart",c="suspendedYield",f="executing",p="completed",h={},d={};d[t]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(E([])));y&&y!==u&&v.call(y,t)&&(d=y);var m=x.prototype=k.prototype=Object.create(d);A.prototype=m.constructor=x,x.constructor=A,x[r]=A.displayName="GeneratorFunction",i.isGeneratorFunction=function(l){var e="function"===typeof l&&l.constructor;return!!e&&(e===A||"GeneratorFunction"===(e.displayName||e.name))},i.mark=function(l){return Object.setPrototypeOf?Object.setPrototypeOf(l,x):(l.__proto__=x,r in l||(l[r]="GeneratorFunction")),l.prototype=Object.create(m),l},i.awrap=function(l){return{__await:l}},T(O.prototype),O.prototype[n]=function(){return this},i.AsyncIterator=O,i.async=function(l,e,a,u){var v=new O(_(l,e,a,u));return i.isGeneratorFunction(e)?v:v.next().then(function(l){return l.done?l.value:v.next()})},T(m),m[r]="Generator",m[t]=function(){return this},m.toString=function(){return"[object Generator]"},i.keys=function(l){var e=[];for(var a in l)e.push(a);return e.reverse(),function a(){while(e.length){var u=e.pop();if(u in l)return a.value=u,a.done=!1,a}return a.done=!0,a}},i.values=E,B.prototype={constructor:B,reset:function(l){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(D),!l)for(var e in this)"t"===e.charAt(0)&&v.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=a)},stop:function(){this.done=!0;var l=this.tryEntries[0],e=l.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(l){if(this.done)throw l;var e=this;function u(u,v){return n.type="throw",n.arg=l,e.next=u,v&&(e.method="next",e.arg=a),!!v}for(var b=this.tryEntries.length-1;b>=0;--b){var t=this.tryEntries[b],n=t.completion;if("root"===t.tryLoc)return u("end");if(t.tryLoc<=this.prev){var r=v.call(t,"catchLoc"),o=v.call(t,"finallyLoc");if(r&&o){if(this.prev<t.catchLoc)return u(t.catchLoc,!0);if(this.prev<t.finallyLoc)return u(t.finallyLoc)}else if(r){if(this.prev<t.catchLoc)return u(t.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<t.finallyLoc)return u(t.finallyLoc)}}}},abrupt:function(l,e){for(var a=this.tryEntries.length-1;a>=0;--a){var u=this.tryEntries[a];if(u.tryLoc<=this.prev&&v.call(u,"finallyLoc")&&this.prev<u.finallyLoc){var b=u;break}}b&&("break"===l||"continue"===l)&&b.tryLoc<=e&&e<=b.finallyLoc&&(b=null);var t=b?b.completion:{};return t.type=l,t.arg=e,b?(this.method="next",this.next=b.finallyLoc,h):this.complete(t)},complete:function(l,e){if("throw"===l.type)throw l.arg;return"break"===l.type||"continue"===l.type?this.next=l.arg:"return"===l.type?(this.rval=this.arg=l.arg,this.method="return",this.next="end"):"normal"===l.type&&e&&(this.next=e),h},finish:function(l){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===l)return this.complete(a.completion,a.afterLoc),D(a),h}},catch:function(l){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===l){var u=a.completion;if("throw"===u.type){var v=u.arg;D(a)}return v}}throw new Error("illegal catch attempt")},delegateYield:function(l,e,u){return this.delegate={iterator:E(l),resultName:e,nextLoc:u},"next"===this.method&&(this.arg=a),h}}}function _(l,e,a,u){var v=e&&e.prototype instanceof k?e:k,b=Object.create(v.prototype),t=new B(u||[]);return b._invoke=S(l,a,t),b}function w(l,e,a){try{return{type:"normal",arg:l.call(e,a)}}catch(u){return{type:"throw",arg:u}}}function k(){}function A(){}function x(){}function T(l){["next","throw","return"].forEach(function(e){l[e]=function(l){return this._invoke(e,l)}})}function O(l){function e(a,u,b,t){var n=w(l[a],l,u);if("throw"!==n.type){var r=n.arg,o=r.value;return o&&"object"===typeof o&&v.call(o,"__await")?Promise.resolve(o.__await).then(function(l){e("next",l,b,t)},function(l){e("throw",l,b,t)}):Promise.resolve(o).then(function(l){r.value=l,b(r)},function(l){return e("throw",l,b,t)})}t(n.arg)}var a;function u(l,u){function v(){return new Promise(function(a,v){e(l,u,a,v)})}return a=a?a.then(v,v):v()}this._invoke=u}function S(l,e,a){var u=s;return function(v,b){if(u===f)throw new Error("Generator is already running");if(u===p){if("throw"===v)throw b;return P()}a.method=v,a.arg=b;while(1){var t=a.delegate;if(t){var n=C(t,a);if(n){if(n===h)continue;return n}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(u===s)throw u=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);u=f;var r=w(l,e,a);if("normal"===r.type){if(u=a.done?p:c,r.arg===h)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(u=p,a.method="throw",a.arg=r.arg)}}}function C(l,e){var u=l.iterator[e.method];if(u===a){if(e.delegate=null,"throw"===e.method){if(l.iterator.return&&(e.method="return",e.arg=a,C(l,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var v=w(u,l.iterator,e.arg);if("throw"===v.type)return e.method="throw",e.arg=v.arg,e.delegate=null,h;var b=v.arg;return b?b.done?(e[l.resultName]=b.value,e.next=l.nextLoc,"return"!==e.method&&(e.method="next",e.arg=a),e.delegate=null,h):b:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function $(l){var e={tryLoc:l[0]};1 in l&&(e.catchLoc=l[1]),2 in l&&(e.finallyLoc=l[2],e.afterLoc=l[3]),this.tryEntries.push(e)}function D(l){var e=l.completion||{};e.type="normal",delete e.arg,l.completion=e}function B(l){this.tryEntries=[{tryLoc:"root"}],l.forEach($,this),this.reset(!0)}function E(l){if(l){var e=l[t];if(e)return e.call(l);if("function"===typeof l.next)return l;if(!isNaN(l.length)){var u=-1,b=function e(){while(++u<l.length)if(v.call(l,u))return e.value=l[u],e.done=!1,e;return e.value=a,e.done=!0,e};return b.next=b}}return{next:P}}function P(){return{value:a,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9c16":function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={appid:"__UNI__010C860"};e.default=u},a34a:function(l,e,a){l.exports=a("bbdd")},ad02:function(l,e,a){"use strict";var u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",v=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);function b(l){var e,a,v,b,t,n;v=l.length,a=0,e="";while(a<v){if(b=255&l.charCodeAt(a++),a==v){e+=u.charAt(b>>2),e+=u.charAt((3&b)<<4),e+="==";break}if(t=l.charCodeAt(a++),a==v){e+=u.charAt(b>>2),e+=u.charAt((3&b)<<4|(240&t)>>4),e+=u.charAt((15&t)<<2),e+="=";break}n=l.charCodeAt(a++),e+=u.charAt(b>>2),e+=u.charAt((3&b)<<4|(240&t)>>4),e+=u.charAt((15&t)<<2|(192&n)>>6),e+=u.charAt(63&n)}return e}function t(l){var e,a,u,b,t,n,r;n=l.length,t=0,r="";while(t<n){do{e=v[255&l.charCodeAt(t++)]}while(t<n&&-1==e);if(-1==e)break;do{a=v[255&l.charCodeAt(t++)]}while(t<n&&-1==a);if(-1==a)break;r+=String.fromCharCode(e<<2|(48&a)>>4);do{if(u=255&l.charCodeAt(t++),61==u)return r;u=v[u]}while(t<n&&-1==u);if(-1==u)break;r+=String.fromCharCode((15&a)<<4|(60&u)>>2);do{if(b=255&l.charCodeAt(t++),61==b)return r;b=v[b]}while(t<n&&-1==b);if(-1==b)break;r+=String.fromCharCode((3&u)<<6|b)}return r}function n(l){var e,a,u,v;for(e="",u=l.length,a=0;a<u;a++)v=l.charCodeAt(a),v>=1&&v<=127?e+=l.charAt(a):v>2047?(e+=String.fromCharCode(224|v>>12&15),e+=String.fromCharCode(128|v>>6&63),e+=String.fromCharCode(128|v>>0&63)):(e+=String.fromCharCode(192|v>>6&31),e+=String.fromCharCode(128|v>>0&63));return e}function r(l){var e,a,u,v,b,t;e="",u=l.length,a=0;while(a<u)switch(v=l.charCodeAt(a++),v>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:e+=l.charAt(a-1);break;case 12:case 13:b=l.charCodeAt(a++),e+=String.fromCharCode((31&v)<<6|63&b);break;case 14:b=l.charCodeAt(a++),t=l.charCodeAt(a++),e+=String.fromCharCode((15&v)<<12|(63&b)<<6|(63&t)<<0);break}return e}l.exports={encode:b,decode:t,utf16to8:n,utf8to16:r}},bbdd:function(l,e,a){var u=function(){return this||"object"===typeof self&&self}()||Function("return this")(),v=u.regeneratorRuntime&&Object.getOwnPropertyNames(u).indexOf("regeneratorRuntime")>=0,b=v&&u.regeneratorRuntime;if(u.regeneratorRuntime=void 0,l.exports=a("96cf"),v)u.regeneratorRuntime=b;else try{delete u.regeneratorRuntime}catch(t){u.regeneratorRuntime=void 0}},bbf0:function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=[[[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"},{label:"海淀区",value:"110108"},{label:"门头沟区",value:"110109"},{label:"房山区",value:"110111"},{label:"通州区",value:"110112"},{label:"顺义区",value:"110113"},{label:"昌平区",value:"110114"},{label:"大兴区",value:"110115"},{label:"怀柔区",value:"110116"},{label:"平谷区",value:"110117"},{label:"密云区",value:"110118"},{label:"延庆区",value:"110119"}]],[[{label:"和平区",value:"120101"},{label:"河东区",value:"120102"},{label:"河西区",value:"120103"},{label:"南开区",value:"120104"},{label:"河北区",value:"120105"},{label:"红桥区",value:"120106"},{label:"东丽区",value:"120110"},{label:"西青区",value:"120111"},{label:"津南区",value:"120112"},{label:"北辰区",value:"120113"},{label:"武清区",value:"120114"},{label:"宝坻区",value:"120115"},{label:"滨海新区",value:"120116"},{label:"宁河区",value:"120117"},{label:"静海区",value:"120118"},{label:"蓟州区",value:"120119"}]],[[{label:"长安区",value:"130102"},{label:"桥西区",value:"130104"},{label:"新华区",value:"130105"},{label:"井陉矿区",value:"130107"},{label:"裕华区",value:"130108"},{label:"藁城区",value:"130109"},{label:"鹿泉区",value:"130110"},{label:"栾城区",value:"130111"},{label:"井陉县",value:"130121"},{label:"正定县",value:"130123"},{label:"行唐县",value:"130125"},{label:"灵寿县",value:"130126"},{label:"高邑县",value:"130127"},{label:"深泽县",value:"130128"},{label:"赞皇县",value:"130129"},{label:"无极县",value:"130130"},{label:"平山县",value:"130131"},{label:"元氏县",value:"130132"},{label:"赵县",value:"130133"},{label:"石家庄高新技术产业开发区",value:"130171"},{label:"石家庄循环化工园区",value:"130172"},{label:"辛集市",value:"130181"},{label:"晋州市",value:"130183"},{label:"新乐市",value:"130184"}],[{label:"路南区",value:"130202"},{label:"路北区",value:"130203"},{label:"古冶区",value:"130204"},{label:"开平区",value:"130205"},{label:"丰南区",value:"130207"},{label:"丰润区",value:"130208"},{label:"曹妃甸区",value:"130209"},{label:"滦县",value:"130223"},{label:"滦南县",value:"130224"},{label:"乐亭县",value:"130225"},{label:"迁西县",value:"130227"},{label:"玉田县",value:"130229"},{label:"唐山市芦台经济技术开发区",value:"130271"},{label:"唐山市汉沽管理区",value:"130272"},{label:"唐山高新技术产业开发区",value:"130273"},{label:"河北唐山海港经济开发区",value:"130274"},{label:"遵化市",value:"130281"},{label:"迁安市",value:"130283"}],[{label:"海港区",value:"130302"},{label:"山海关区",value:"130303"},{label:"北戴河区",value:"130304"},{label:"抚宁区",value:"130306"},{label:"青龙满族自治县",value:"130321"},{label:"昌黎县",value:"130322"},{label:"卢龙县",value:"130324"},{label:"秦皇岛市经济技术开发区",value:"130371"},{label:"北戴河新区",value:"130372"}],[{label:"邯山区",value:"130402"},{label:"丛台区",value:"130403"},{label:"复兴区",value:"130404"},{label:"峰峰矿区",value:"130406"},{label:"肥乡区",value:"130407"},{label:"永年区",value:"130408"},{label:"临漳县",value:"130423"},{label:"成安县",value:"130424"},{label:"大名县",value:"130425"},{label:"涉县",value:"130426"},{label:"磁县",value:"130427"},{label:"邱县",value:"130430"},{label:"鸡泽县",value:"130431"},{label:"广平县",value:"130432"},{label:"馆陶县",value:"130433"},{label:"魏县",value:"130434"},{label:"曲周县",value:"130435"},{label:"邯郸经济技术开发区",value:"130471"},{label:"邯郸冀南新区",value:"130473"},{label:"武安市",value:"130481"}],[{label:"桥东区",value:"130502"},{label:"桥西区",value:"130503"},{label:"邢台县",value:"130521"},{label:"临城县",value:"130522"},{label:"内丘县",value:"130523"},{label:"柏乡县",value:"130524"},{label:"隆尧县",value:"130525"},{label:"任县",value:"130526"},{label:"南和县",value:"130527"},{label:"宁晋县",value:"130528"},{label:"巨鹿县",value:"130529"},{label:"新河县",value:"130530"},{label:"广宗县",value:"130531"},{label:"平乡县",value:"130532"},{label:"威县",value:"130533"},{label:"清河县",value:"130534"},{label:"临西县",value:"130535"},{label:"河北邢台经济开发区",value:"130571"},{label:"南宫市",value:"130581"},{label:"沙河市",value:"130582"}],[{label:"竞秀区",value:"130602"},{label:"莲池区",value:"130606"},{label:"满城区",value:"130607"},{label:"清苑区",value:"130608"},{label:"徐水区",value:"130609"},{label:"涞水县",value:"130623"},{label:"阜平县",value:"130624"},{label:"定兴县",value:"130626"},{label:"唐县",value:"130627"},{label:"高阳县",value:"130628"},{label:"容城县",value:"130629"},{label:"涞源县",value:"130630"},{label:"望都县",value:"130631"},{label:"安新县",value:"130632"},{label:"易县",value:"130633"},{label:"曲阳县",value:"130634"},{label:"蠡县",value:"130635"},{label:"顺平县",value:"130636"},{label:"博野县",value:"130637"},{label:"雄县",value:"130638"},{label:"保定高新技术产业开发区",value:"130671"},{label:"保定白沟新城",value:"130672"},{label:"涿州市",value:"130681"},{label:"定州市",value:"130682"},{label:"安国市",value:"130683"},{label:"高碑店市",value:"130684"}],[{label:"桥东区",value:"130702"},{label:"桥西区",value:"130703"},{label:"宣化区",value:"130705"},{label:"下花园区",value:"130706"},{label:"万全区",value:"130708"},{label:"崇礼区",value:"130709"},{label:"张北县",value:"130722"},{label:"康保县",value:"130723"},{label:"沽源县",value:"130724"},{label:"尚义县",value:"130725"},{label:"蔚县",value:"130726"},{label:"阳原县",value:"130727"},{label:"怀安县",value:"130728"},{label:"怀来县",value:"130730"},{label:"涿鹿县",value:"130731"},{label:"赤城县",value:"130732"},{label:"张家口市高新技术产业开发区",value:"130771"},{label:"张家口市察北管理区",value:"130772"},{label:"张家口市塞北管理区",value:"130773"}],[{label:"双桥区",value:"130802"},{label:"双滦区",value:"130803"},{label:"鹰手营子矿区",value:"130804"},{label:"承德县",value:"130821"},{label:"兴隆县",value:"130822"},{label:"滦平县",value:"130824"},{label:"隆化县",value:"130825"},{label:"丰宁满族自治县",value:"130826"},{label:"宽城满族自治县",value:"130827"},{label:"围场满族蒙古族自治县",value:"130828"},{label:"承德高新技术产业开发区",value:"130871"},{label:"平泉市",value:"130881"}],[{label:"新华区",value:"130902"},{label:"运河区",value:"130903"},{label:"沧县",value:"130921"},{label:"青县",value:"130922"},{label:"东光县",value:"130923"},{label:"海兴县",value:"130924"},{label:"盐山县",value:"130925"},{label:"肃宁县",value:"130926"},{label:"南皮县",value:"130927"},{label:"吴桥县",value:"130928"},{label:"献县",value:"130929"},{label:"孟村回族自治县",value:"130930"},{label:"河北沧州经济开发区",value:"130971"},{label:"沧州高新技术产业开发区",value:"130972"},{label:"沧州渤海新区",value:"130973"},{label:"泊头市",value:"130981"},{label:"任丘市",value:"130982"},{label:"黄骅市",value:"130983"},{label:"河间市",value:"130984"}],[{label:"安次区",value:"131002"},{label:"广阳区",value:"131003"},{label:"固安县",value:"131022"},{label:"永清县",value:"131023"},{label:"香河县",value:"131024"},{label:"大城县",value:"131025"},{label:"文安县",value:"131026"},{label:"大厂回族自治县",value:"131028"},{label:"廊坊经济技术开发区",value:"131071"},{label:"霸州市",value:"131081"},{label:"三河市",value:"131082"}],[{label:"桃城区",value:"131102"},{label:"冀州区",value:"131103"},{label:"枣强县",value:"131121"},{label:"武邑县",value:"131122"},{label:"武强县",value:"131123"},{label:"饶阳县",value:"131124"},{label:"安平县",value:"131125"},{label:"故城县",value:"131126"},{label:"景县",value:"131127"},{label:"阜城县",value:"131128"},{label:"河北衡水经济开发区",value:"131171"},{label:"衡水滨湖新区",value:"131172"},{label:"深州市",value:"131182"}]],[[{label:"小店区",value:"140105"},{label:"迎泽区",value:"140106"},{label:"杏花岭区",value:"140107"},{label:"尖草坪区",value:"140108"},{label:"万柏林区",value:"140109"},{label:"晋源区",value:"140110"},{label:"清徐县",value:"140121"},{label:"阳曲县",value:"140122"},{label:"娄烦县",value:"140123"},{label:"山西转型综合改革示范区",value:"140171"},{label:"古交市",value:"140181"}],[{label:"城区",value:"140202"},{label:"矿区",value:"140203"},{label:"南郊区",value:"140211"},{label:"新荣区",value:"140212"},{label:"阳高县",value:"140221"},{label:"天镇县",value:"140222"},{label:"广灵县",value:"140223"},{label:"灵丘县",value:"140224"},{label:"浑源县",value:"140225"},{label:"左云县",value:"140226"},{label:"大同县",value:"140227"},{label:"山西大同经济开发区",value:"140271"}],[{label:"城区",value:"140302"},{label:"矿区",value:"140303"},{label:"郊区",value:"140311"},{label:"平定县",value:"140321"},{label:"盂县",value:"140322"},{label:"山西阳泉经济开发区",value:"140371"}],[{label:"城区",value:"140402"},{label:"郊区",value:"140411"},{label:"长治县",value:"140421"},{label:"襄垣县",value:"140423"},{label:"屯留县",value:"140424"},{label:"平顺县",value:"140425"},{label:"黎城县",value:"140426"},{label:"壶关县",value:"140427"},{label:"长子县",value:"140428"},{label:"武乡县",value:"140429"},{label:"沁县",value:"140430"},{label:"沁源县",value:"140431"},{label:"山西长治高新技术产业园区",value:"140471"},{label:"潞城市",value:"140481"}],[{label:"城区",value:"140502"},{label:"沁水县",value:"140521"},{label:"阳城县",value:"140522"},{label:"陵川县",value:"140524"},{label:"泽州县",value:"140525"},{label:"高平市",value:"140581"}],[{label:"朔城区",value:"140602"},{label:"平鲁区",value:"140603"},{label:"山阴县",value:"140621"},{label:"应县",value:"140622"},{label:"右玉县",value:"140623"},{label:"怀仁县",value:"140624"},{label:"山西朔州经济开发区",value:"140671"}],[{label:"榆次区",value:"140702"},{label:"榆社县",value:"140721"},{label:"左权县",value:"140722"},{label:"和顺县",value:"140723"},{label:"昔阳县",value:"140724"},{label:"寿阳县",value:"140725"},{label:"太谷县",value:"140726"},{label:"祁县",value:"140727"},{label:"平遥县",value:"140728"},{label:"灵石县",value:"140729"},{label:"介休市",value:"140781"}],[{label:"盐湖区",value:"140802"},{label:"临猗县",value:"140821"},{label:"万荣县",value:"140822"},{label:"闻喜县",value:"140823"},{label:"稷山县",value:"140824"},{label:"新绛县",value:"140825"},{label:"绛县",value:"140826"},{label:"垣曲县",value:"140827"},{label:"夏县",value:"140828"},{label:"平陆县",value:"140829"},{label:"芮城县",value:"140830"},{label:"永济市",value:"140881"},{label:"河津市",value:"140882"}],[{label:"忻府区",value:"140902"},{label:"定襄县",value:"140921"},{label:"五台县",value:"140922"},{label:"代县",value:"140923"},{label:"繁峙县",value:"140924"},{label:"宁武县",value:"140925"},{label:"静乐县",value:"140926"},{label:"神池县",value:"140927"},{label:"五寨县",value:"140928"},{label:"岢岚县",value:"140929"},{label:"河曲县",value:"140930"},{label:"保德县",value:"140931"},{label:"偏关县",value:"140932"},{label:"五台山风景名胜区",value:"140971"},{label:"原平市",value:"140981"}],[{label:"尧都区",value:"141002"},{label:"曲沃县",value:"141021"},{label:"翼城县",value:"141022"},{label:"襄汾县",value:"141023"},{label:"洪洞县",value:"141024"},{label:"古县",value:"141025"},{label:"安泽县",value:"141026"},{label:"浮山县",value:"141027"},{label:"吉县",value:"141028"},{label:"乡宁县",value:"141029"},{label:"大宁县",value:"141030"},{label:"隰县",value:"141031"},{label:"永和县",value:"141032"},{label:"蒲县",value:"141033"},{label:"汾西县",value:"141034"},{label:"侯马市",value:"141081"},{label:"霍州市",value:"141082"}],[{label:"离石区",value:"141102"},{label:"文水县",value:"141121"},{label:"交城县",value:"141122"},{label:"兴县",value:"141123"},{label:"临县",value:"141124"},{label:"柳林县",value:"141125"},{label:"石楼县",value:"141126"},{label:"岚县",value:"141127"},{label:"方山县",value:"141128"},{label:"中阳县",value:"141129"},{label:"交口县",value:"141130"},{label:"孝义市",value:"141181"},{label:"汾阳市",value:"141182"}]],[[{label:"新城区",value:"150102"},{label:"回民区",value:"150103"},{label:"玉泉区",value:"150104"},{label:"赛罕区",value:"150105"},{label:"土默特左旗",value:"150121"},{label:"托克托县",value:"150122"},{label:"和林格尔县",value:"150123"},{label:"清水河县",value:"150124"},{label:"武川县",value:"150125"},{label:"呼和浩特金海工业园区",value:"150171"},{label:"呼和浩特经济技术开发区",value:"150172"}],[{label:"东河区",value:"150202"},{label:"昆都仑区",value:"150203"},{label:"青山区",value:"150204"},{label:"石拐区",value:"150205"},{label:"白云鄂博矿区",value:"150206"},{label:"九原区",value:"150207"},{label:"土默特右旗",value:"150221"},{label:"固阳县",value:"150222"},{label:"达尔罕茂明安联合旗",value:"150223"},{label:"包头稀土高新技术产业开发区",value:"150271"}],[{label:"海勃湾区",value:"150302"},{label:"海南区",value:"150303"},{label:"乌达区",value:"150304"}],[{label:"红山区",value:"150402"},{label:"元宝山区",value:"150403"},{label:"松山区",value:"150404"},{label:"阿鲁科尔沁旗",value:"150421"},{label:"巴林左旗",value:"150422"},{label:"巴林右旗",value:"150423"},{label:"林西县",value:"150424"},{label:"克什克腾旗",value:"150425"},{label:"翁牛特旗",value:"150426"},{label:"喀喇沁旗",value:"150428"},{label:"宁城县",value:"150429"},{label:"敖汉旗",value:"150430"}],[{label:"科尔沁区",value:"150502"},{label:"科尔沁左翼中旗",value:"150521"},{label:"科尔沁左翼后旗",value:"150522"},{label:"开鲁县",value:"150523"},{label:"库伦旗",value:"150524"},{label:"奈曼旗",value:"150525"},{label:"扎鲁特旗",value:"150526"},{label:"通辽经济技术开发区",value:"150571"},{label:"霍林郭勒市",value:"150581"}],[{label:"东胜区",value:"150602"},{label:"康巴什区",value:"150603"},{label:"达拉特旗",value:"150621"},{label:"准格尔旗",value:"150622"},{label:"鄂托克前旗",value:"150623"},{label:"鄂托克旗",value:"150624"},{label:"杭锦旗",value:"150625"},{label:"乌审旗",value:"150626"},{label:"伊金霍洛旗",value:"150627"}],[{label:"海拉尔区",value:"150702"},{label:"扎赉诺尔区",value:"150703"},{label:"阿荣旗",value:"150721"},{label:"莫力达瓦达斡尔族自治旗",value:"150722"},{label:"鄂伦春自治旗",value:"150723"},{label:"鄂温克族自治旗",value:"150724"},{label:"陈巴尔虎旗",value:"150725"},{label:"新巴尔虎左旗",value:"150726"},{label:"新巴尔虎右旗",value:"150727"},{label:"满洲里市",value:"150781"},{label:"牙克石市",value:"150782"},{label:"扎兰屯市",value:"150783"},{label:"额尔古纳市",value:"150784"},{label:"根河市",value:"150785"}],[{label:"临河区",value:"150802"},{label:"五原县",value:"150821"},{label:"磴口县",value:"150822"},{label:"乌拉特前旗",value:"150823"},{label:"乌拉特中旗",value:"150824"},{label:"乌拉特后旗",value:"150825"},{label:"杭锦后旗",value:"150826"}],[{label:"集宁区",value:"150902"},{label:"卓资县",value:"150921"},{label:"化德县",value:"150922"},{label:"商都县",value:"150923"},{label:"兴和县",value:"150924"},{label:"凉城县",value:"150925"},{label:"察哈尔右翼前旗",value:"150926"},{label:"察哈尔右翼中旗",value:"150927"},{label:"察哈尔右翼后旗",value:"150928"},{label:"四子王旗",value:"150929"},{label:"丰镇市",value:"150981"}],[{label:"乌兰浩特市",value:"152201"},{label:"阿尔山市",value:"152202"},{label:"科尔沁右翼前旗",value:"152221"},{label:"科尔沁右翼中旗",value:"152222"},{label:"扎赉特旗",value:"152223"},{label:"突泉县",value:"152224"}],[{label:"二连浩特市",value:"152501"},{label:"锡林浩特市",value:"152502"},{label:"阿巴嘎旗",value:"152522"},{label:"苏尼特左旗",value:"152523"},{label:"苏尼特右旗",value:"152524"},{label:"东乌珠穆沁旗",value:"152525"},{label:"西乌珠穆沁旗",value:"152526"},{label:"太仆寺旗",value:"152527"},{label:"镶黄旗",value:"152528"},{label:"正镶白旗",value:"152529"},{label:"正蓝旗",value:"152530"},{label:"多伦县",value:"152531"},{label:"乌拉盖管委会",value:"152571"}],[{label:"阿拉善左旗",value:"152921"},{label:"阿拉善右旗",value:"152922"},{label:"额济纳旗",value:"152923"},{label:"内蒙古阿拉善经济开发区",value:"152971"}]],[[{label:"和平区",value:"210102"},{label:"沈河区",value:"210103"},{label:"大东区",value:"210104"},{label:"皇姑区",value:"210105"},{label:"铁西区",value:"210106"},{label:"苏家屯区",value:"210111"},{label:"浑南区",value:"210112"},{label:"沈北新区",value:"210113"},{label:"于洪区",value:"210114"},{label:"辽中区",value:"210115"},{label:"康平县",value:"210123"},{label:"法库县",value:"210124"},{label:"新民市",value:"210181"}],[{label:"中山区",value:"210202"},{label:"西岗区",value:"210203"},{label:"沙河口区",value:"210204"},{label:"甘井子区",value:"210211"},{label:"旅顺口区",value:"210212"},{label:"金州区",value:"210213"},{label:"普兰店区",value:"210214"},{label:"长海县",value:"210224"},{label:"瓦房店市",value:"210281"},{label:"庄河市",value:"210283"}],[{label:"铁东区",value:"210302"},{label:"铁西区",value:"210303"},{label:"立山区",value:"210304"},{label:"千山区",value:"210311"},{label:"台安县",value:"210321"},{label:"岫岩满族自治县",value:"210323"},{label:"海城市",value:"210381"}],[{label:"新抚区",value:"210402"},{label:"东洲区",value:"210403"},{label:"望花区",value:"210404"},{label:"顺城区",value:"210411"},{label:"抚顺县",value:"210421"},{label:"新宾满族自治县",value:"210422"},{label:"清原满族自治县",value:"210423"}],[{label:"平山区",value:"210502"},{label:"溪湖区",value:"210503"},{label:"明山区",value:"210504"},{label:"南芬区",value:"210505"},{label:"本溪满族自治县",value:"210521"},{label:"桓仁满族自治县",value:"210522"}],[{label:"元宝区",value:"210602"},{label:"振兴区",value:"210603"},{label:"振安区",value:"210604"},{label:"宽甸满族自治县",value:"210624"},{label:"东港市",value:"210681"},{label:"凤城市",value:"210682"}],[{label:"古塔区",value:"210702"},{label:"凌河区",value:"210703"},{label:"太和区",value:"210711"},{label:"黑山县",value:"210726"},{label:"义县",value:"210727"},{label:"凌海市",value:"210781"},{label:"北镇市",value:"210782"}],[{label:"站前区",value:"210802"},{label:"西市区",value:"210803"},{label:"鲅鱼圈区",value:"210804"},{label:"老边区",value:"210811"},{label:"盖州市",value:"210881"},{label:"大石桥市",value:"210882"}],[{label:"海州区",value:"210902"},{label:"新邱区",value:"210903"},{label:"太平区",value:"210904"},{label:"清河门区",value:"210905"},{label:"细河区",value:"210911"},{label:"阜新蒙古族自治县",value:"210921"},{label:"彰武县",value:"210922"}],[{label:"白塔区",value:"211002"},{label:"文圣区",value:"211003"},{label:"宏伟区",value:"211004"},{label:"弓长岭区",value:"211005"},{label:"太子河区",value:"211011"},{label:"辽阳县",value:"211021"},{label:"灯塔市",value:"211081"}],[{label:"双台子区",value:"211102"},{label:"兴隆台区",value:"211103"},{label:"大洼区",value:"211104"},{label:"盘山县",value:"211122"}],[{label:"银州区",value:"211202"},{label:"清河区",value:"211204"},{label:"铁岭县",value:"211221"},{label:"西丰县",value:"211223"},{label:"昌图县",value:"211224"},{label:"调兵山市",value:"211281"},{label:"开原市",value:"211282"}],[{label:"双塔区",value:"211302"},{label:"龙城区",value:"211303"},{label:"朝阳县",value:"211321"},{label:"建平县",value:"211322"},{label:"喀喇沁左翼蒙古族自治县",value:"211324"},{label:"北票市",value:"211381"},{label:"凌源市",value:"211382"}],[{label:"连山区",value:"211402"},{label:"龙港区",value:"211403"},{label:"南票区",value:"211404"},{label:"绥中县",value:"211421"},{label:"建昌县",value:"211422"},{label:"兴城市",value:"211481"}]],[[{label:"南关区",value:"220102"},{label:"宽城区",value:"220103"},{label:"朝阳区",value:"220104"},{label:"二道区",value:"220105"},{label:"绿园区",value:"220106"},{label:"双阳区",value:"220112"},{label:"九台区",value:"220113"},{label:"农安县",value:"220122"},{label:"长春经济技术开发区",value:"220171"},{label:"长春净月高新技术产业开发区",value:"220172"},{label:"长春高新技术产业开发区",value:"220173"},{label:"长春汽车经济技术开发区",value:"220174"},{label:"榆树市",value:"220182"},{label:"德惠市",value:"220183"}],[{label:"昌邑区",value:"220202"},{label:"龙潭区",value:"220203"},{label:"船营区",value:"220204"},{label:"丰满区",value:"220211"},{label:"永吉县",value:"220221"},{label:"吉林经济开发区",value:"220271"},{label:"吉林高新技术产业开发区",value:"220272"},{label:"吉林中国新加坡食品区",value:"220273"},{label:"蛟河市",value:"220281"},{label:"桦甸市",value:"220282"},{label:"舒兰市",value:"220283"},{label:"磐石市",value:"220284"}],[{label:"铁西区",value:"220302"},{label:"铁东区",value:"220303"},{label:"梨树县",value:"220322"},{label:"伊通满族自治县",value:"220323"},{label:"公主岭市",value:"220381"},{label:"双辽市",value:"220382"}],[{label:"龙山区",value:"220402"},{label:"西安区",value:"220403"},{label:"东丰县",value:"220421"},{label:"东辽县",value:"220422"}],[{label:"东昌区",value:"220502"},{label:"二道江区",value:"220503"},{label:"通化县",value:"220521"},{label:"辉南县",value:"220523"},{label:"柳河县",value:"220524"},{label:"梅河口市",value:"220581"},{label:"集安市",value:"220582"}],[{label:"浑江区",value:"220602"},{label:"江源区",value:"220605"},{label:"抚松县",value:"220621"},{label:"靖宇县",value:"220622"},{label:"长白朝鲜族自治县",value:"220623"},{label:"临江市",value:"220681"}],[{label:"宁江区",value:"220702"},{label:"前郭尔罗斯蒙古族自治县",value:"220721"},{label:"长岭县",value:"220722"},{label:"乾安县",value:"220723"},{label:"吉林松原经济开发区",value:"220771"},{label:"扶余市",value:"220781"}],[{label:"洮北区",value:"220802"},{label:"镇赉县",value:"220821"},{label:"通榆县",value:"220822"},{label:"吉林白城经济开发区",value:"220871"},{label:"洮南市",value:"220881"},{label:"大安市",value:"220882"}],[{label:"延吉市",value:"222401"},{label:"图们市",value:"222402"},{label:"敦化市",value:"222403"},{label:"珲春市",value:"222404"},{label:"龙井市",value:"222405"},{label:"和龙市",value:"222406"},{label:"汪清县",value:"222424"},{label:"安图县",value:"222426"}]],[[{label:"道里区",value:"230102"},{label:"南岗区",value:"230103"},{label:"道外区",value:"230104"},{label:"平房区",value:"230108"},{label:"松北区",value:"230109"},{label:"香坊区",value:"230110"},{label:"呼兰区",value:"230111"},{label:"阿城区",value:"230112"},{label:"双城区",value:"230113"},{label:"依兰县",value:"230123"},{label:"方正县",value:"230124"},{label:"宾县",value:"230125"},{label:"巴彦县",value:"230126"},{label:"木兰县",value:"230127"},{label:"通河县",value:"230128"},{label:"延寿县",value:"230129"},{label:"尚志市",value:"230183"},{label:"五常市",value:"230184"}],[{label:"龙沙区",value:"230202"},{label:"建华区",value:"230203"},{label:"铁锋区",value:"230204"},{label:"昂昂溪区",value:"230205"},{label:"富拉尔基区",value:"230206"},{label:"碾子山区",value:"230207"},{label:"梅里斯达斡尔族区",value:"230208"},{label:"龙江县",value:"230221"},{label:"依安县",value:"230223"},{label:"泰来县",value:"230224"},{label:"甘南县",value:"230225"},{label:"富裕县",value:"230227"},{label:"克山县",value:"230229"},{label:"克东县",value:"230230"},{label:"拜泉县",value:"230231"},{label:"讷河市",value:"230281"}],[{label:"鸡冠区",value:"230302"},{label:"恒山区",value:"230303"},{label:"滴道区",value:"230304"},{label:"梨树区",value:"230305"},{label:"城子河区",value:"230306"},{label:"麻山区",value:"230307"},{label:"鸡东县",value:"230321"},{label:"虎林市",value:"230381"},{label:"密山市",value:"230382"}],[{label:"向阳区",value:"230402"},{label:"工农区",value:"230403"},{label:"南山区",value:"230404"},{label:"兴安区",value:"230405"},{label:"东山区",value:"230406"},{label:"兴山区",value:"230407"},{label:"萝北县",value:"230421"},{label:"绥滨县",value:"230422"}],[{label:"尖山区",value:"230502"},{label:"岭东区",value:"230503"},{label:"四方台区",value:"230505"},{label:"宝山区",value:"230506"},{label:"集贤县",value:"230521"},{label:"友谊县",value:"230522"},{label:"宝清县",value:"230523"},{label:"饶河县",value:"230524"}],[{label:"萨尔图区",value:"230602"},{label:"龙凤区",value:"230603"},{label:"让胡路区",value:"230604"},{label:"红岗区",value:"230605"},{label:"大同区",value:"230606"},{label:"肇州县",value:"230621"},{label:"肇源县",value:"230622"},{label:"林甸县",value:"230623"},{label:"杜尔伯特蒙古族自治县",value:"230624"},{label:"大庆高新技术产业开发区",value:"230671"}],[{label:"伊春区",value:"230702"},{label:"南岔区",value:"230703"},{label:"友好区",value:"230704"},{label:"西林区",value:"230705"},{label:"翠峦区",value:"230706"},{label:"新青区",value:"230707"},{label:"美溪区",value:"230708"},{label:"金山屯区",value:"230709"},{label:"五营区",value:"230710"},{label:"乌马河区",value:"230711"},{label:"汤旺河区",value:"230712"},{label:"带岭区",value:"230713"},{label:"乌伊岭区",value:"230714"},{label:"红星区",value:"230715"},{label:"上甘岭区",value:"230716"},{label:"嘉荫县",value:"230722"},{label:"铁力市",value:"230781"}],[{label:"向阳区",value:"230803"},{label:"前进区",value:"230804"},{label:"东风区",value:"230805"},{label:"郊区",value:"230811"},{label:"桦南县",value:"230822"},{label:"桦川县",value:"230826"},{label:"汤原县",value:"230828"},{label:"同江市",value:"230881"},{label:"富锦市",value:"230882"},{label:"抚远市",value:"230883"}],[{label:"新兴区",value:"230902"},{label:"桃山区",value:"230903"},{label:"茄子河区",value:"230904"},{label:"勃利县",value:"230921"}],[{label:"东安区",value:"231002"},{label:"阳明区",value:"231003"},{label:"爱民区",value:"231004"},{label:"西安区",value:"231005"},{label:"林口县",value:"231025"},{label:"牡丹江经济技术开发区",value:"231071"},{label:"绥芬河市",value:"231081"},{label:"海林市",value:"231083"},{label:"宁安市",value:"231084"},{label:"穆棱市",value:"231085"},{label:"东宁市",value:"231086"}],[{label:"爱辉区",value:"231102"},{label:"嫩江县",value:"231121"},{label:"逊克县",value:"231123"},{label:"孙吴县",value:"231124"},{label:"北安市",value:"231181"},{label:"五大连池市",value:"231182"}],[{label:"北林区",value:"231202"},{label:"望奎县",value:"231221"},{label:"兰西县",value:"231222"},{label:"青冈县",value:"231223"},{label:"庆安县",value:"231224"},{label:"明水县",value:"231225"},{label:"绥棱县",value:"231226"},{label:"安达市",value:"231281"},{label:"肇东市",value:"231282"},{label:"海伦市",value:"231283"}],[{label:"加格达奇区",value:"232701"},{label:"松岭区",value:"232702"},{label:"新林区",value:"232703"},{label:"呼中区",value:"232704"},{label:"呼玛县",value:"232721"},{label:"塔河县",value:"232722"},{label:"漠河县",value:"232723"}]],[[{label:"黄浦区",value:"310101"},{label:"徐汇区",value:"310104"},{label:"长宁区",value:"310105"},{label:"静安区",value:"310106"},{label:"普陀区",value:"310107"},{label:"虹口区",value:"310109"},{label:"杨浦区",value:"310110"},{label:"闵行区",value:"310112"},{label:"宝山区",value:"310113"},{label:"嘉定区",value:"310114"},{label:"浦东新区",value:"310115"},{label:"金山区",value:"310116"},{label:"松江区",value:"310117"},{label:"青浦区",value:"310118"},{label:"奉贤区",value:"310120"},{label:"崇明区",value:"310151"}]],[[{label:"玄武区",value:"320102"},{label:"秦淮区",value:"320104"},{label:"建邺区",value:"320105"},{label:"鼓楼区",value:"320106"},{label:"浦口区",value:"320111"},{label:"栖霞区",value:"320113"},{label:"雨花台区",value:"320114"},{label:"江宁区",value:"320115"},{label:"六合区",value:"320116"},{label:"溧水区",value:"320117"},{label:"高淳区",value:"320118"}],[{label:"锡山区",value:"320205"},{label:"惠山区",value:"320206"},{label:"滨湖区",value:"320211"},{label:"梁溪区",value:"320213"},{label:"新吴区",value:"320214"},{label:"江阴市",value:"320281"},{label:"宜兴市",value:"320282"}],[{label:"鼓楼区",value:"320302"},{label:"云龙区",value:"320303"},{label:"贾汪区",value:"320305"},{label:"泉山区",value:"320311"},{label:"铜山区",value:"320312"},{label:"丰县",value:"320321"},{label:"沛县",value:"320322"},{label:"睢宁县",value:"320324"},{label:"徐州经济技术开发区",value:"320371"},{label:"新沂市",value:"320381"},{label:"邳州市",value:"320382"}],[{label:"天宁区",value:"320402"},{label:"钟楼区",value:"320404"},{label:"新北区",value:"320411"},{label:"武进区",value:"320412"},{label:"金坛区",value:"320413"},{label:"溧阳市",value:"320481"}],[{label:"虎丘区",value:"320505"},{label:"吴中区",value:"320506"},{label:"相城区",value:"320507"},{label:"姑苏区",value:"320508"},{label:"吴江区",value:"320509"},{label:"苏州工业园区",value:"320571"},{label:"常熟市",value:"320581"},{label:"张家港市",value:"320582"},{label:"昆山市",value:"320583"},{label:"太仓市",value:"320585"}],[{label:"崇川区",value:"320602"},{label:"港闸区",value:"320611"},{label:"通州区",value:"320612"},{label:"海安县",value:"320621"},{label:"如东县",value:"320623"},{label:"南通经济技术开发区",value:"320671"},{label:"启东市",value:"320681"},{label:"如皋市",value:"320682"},{label:"海门市",value:"320684"}],[{label:"连云区",value:"320703"},{label:"海州区",value:"320706"},{label:"赣榆区",value:"320707"},{label:"东海县",value:"320722"},{label:"灌云县",value:"320723"},{label:"灌南县",value:"320724"},{label:"连云港经济技术开发区",value:"320771"},{label:"连云港高新技术产业开发区",value:"320772"}],[{label:"淮安区",value:"320803"},{label:"淮阴区",value:"320804"},{label:"清江浦区",value:"320812"},{label:"洪泽区",value:"320813"},{label:"涟水县",value:"320826"},{label:"盱眙县",value:"320830"},{label:"金湖县",value:"320831"},{label:"淮安经济技术开发区",value:"320871"}],[{label:"亭湖区",value:"320902"},{label:"盐都区",value:"320903"},{label:"大丰区",value:"320904"},{label:"响水县",value:"320921"},{label:"滨海县",value:"320922"},{label:"阜宁县",value:"320923"},{label:"射阳县",value:"320924"},{label:"建湖县",value:"320925"},{label:"盐城经济技术开发区",value:"320971"},{label:"东台市",value:"320981"}],[{label:"广陵区",value:"321002"},{label:"邗江区",value:"321003"},{label:"江都区",value:"321012"},{label:"宝应县",value:"321023"},{label:"扬州经济技术开发区",value:"321071"},{label:"仪征市",value:"321081"},{label:"高邮市",value:"321084"}],[{label:"京口区",value:"321102"},{label:"润州区",value:"321111"},{label:"丹徒区",value:"321112"},{label:"镇江新区",value:"321171"},{label:"丹阳市",value:"321181"},{label:"扬中市",value:"321182"},{label:"句容市",value:"321183"}],[{label:"海陵区",value:"321202"},{label:"高港区",value:"321203"},{label:"姜堰区",value:"321204"},{label:"泰州医药高新技术产业开发区",value:"321271"},{label:"兴化市",value:"321281"},{label:"靖江市",value:"321282"},{label:"泰兴市",value:"321283"}],[{label:"宿城区",value:"321302"},{label:"宿豫区",value:"321311"},{label:"沭阳县",value:"321322"},{label:"泗阳县",value:"321323"},{label:"泗洪县",value:"321324"},{label:"宿迁经济技术开发区",value:"321371"}]],[[{label:"上城区",value:"330102"},{label:"下城区",value:"330103"},{label:"江干区",value:"330104"},{label:"拱墅区",value:"330105"},{label:"西湖区",value:"330106"},{label:"滨江区",value:"330108"},{label:"萧山区",value:"330109"},{label:"余杭区",value:"330110"},{label:"富阳区",value:"330111"},{label:"临安区",value:"330112"},{label:"桐庐县",value:"330122"},{label:"淳安县",value:"330127"},{label:"建德市",value:"330182"}],[{label:"海曙区",value:"330203"},{label:"江北区",value:"330205"},{label:"北仑区",value:"330206"},{label:"镇海区",value:"330211"},{label:"鄞州区",value:"330212"},{label:"奉化区",value:"330213"},{label:"象山县",value:"330225"},{label:"宁海县",value:"330226"},{label:"余姚市",value:"330281"},{label:"慈溪市",value:"330282"}],[{label:"鹿城区",value:"330302"},{label:"龙湾区",value:"330303"},{label:"瓯海区",value:"330304"},{label:"洞头区",value:"330305"},{label:"永嘉县",value:"330324"},{label:"平阳县",value:"330326"},{label:"苍南县",value:"330327"},{label:"文成县",value:"330328"},{label:"泰顺县",value:"330329"},{label:"温州经济技术开发区",value:"330371"},{label:"瑞安市",value:"330381"},{label:"乐清市",value:"330382"}],[{label:"南湖区",value:"330402"},{label:"秀洲区",value:"330411"},{label:"嘉善县",value:"330421"},{label:"海盐县",value:"330424"},{label:"海宁市",value:"330481"},{label:"平湖市",value:"330482"},{label:"桐乡市",value:"330483"}],[{label:"吴兴区",value:"330502"},{label:"南浔区",value:"330503"},{label:"德清县",value:"330521"},{label:"长兴县",value:"330522"},{label:"安吉县",value:"330523"}],[{label:"越城区",value:"330602"},{label:"柯桥区",value:"330603"},{label:"上虞区",value:"330604"},{label:"新昌县",value:"330624"},{label:"诸暨市",value:"330681"},{label:"嵊州市",value:"330683"}],[{label:"婺城区",value:"330702"},{label:"金东区",value:"330703"},{label:"武义县",value:"330723"},{label:"浦江县",value:"330726"},{label:"磐安县",value:"330727"},{label:"兰溪市",value:"330781"},{label:"义乌市",value:"330782"},{label:"东阳市",value:"330783"},{label:"永康市",value:"330784"}],[{label:"柯城区",value:"330802"},{label:"衢江区",value:"330803"},{label:"常山县",value:"330822"},{label:"开化县",value:"330824"},{label:"龙游县",value:"330825"},{label:"江山市",value:"330881"}],[{label:"定海区",value:"330902"},{label:"普陀区",value:"330903"},{label:"岱山县",value:"330921"},{label:"嵊泗县",value:"330922"}],[{label:"椒江区",value:"331002"},{label:"黄岩区",value:"331003"},{label:"路桥区",value:"331004"},{label:"三门县",value:"331022"},{label:"天台县",value:"331023"},{label:"仙居县",value:"331024"},{label:"温岭市",value:"331081"},{label:"临海市",value:"331082"},{label:"玉环市",value:"331083"}],[{label:"莲都区",value:"331102"},{label:"青田县",value:"331121"},{label:"缙云县",value:"331122"},{label:"遂昌县",value:"331123"},{label:"松阳县",value:"331124"},{label:"云和县",value:"331125"},{label:"庆元县",value:"331126"},{label:"景宁畲族自治县",value:"331127"},{label:"龙泉市",value:"331181"}]],[[{label:"瑶海区",value:"340102"},{label:"庐阳区",value:"340103"},{label:"蜀山区",value:"340104"},{label:"包河区",value:"340111"},{label:"长丰县",value:"340121"},{label:"肥东县",value:"340122"},{label:"肥西县",value:"340123"},{label:"庐江县",value:"340124"},{label:"合肥高新技术产业开发区",value:"340171"},{label:"合肥经济技术开发区",value:"340172"},{label:"合肥新站高新技术产业开发区",value:"340173"},{label:"巢湖市",value:"340181"}],[{label:"镜湖区",value:"340202"},{label:"弋江区",value:"340203"},{label:"鸠江区",value:"340207"},{label:"三山区",value:"340208"},{label:"芜湖县",value:"340221"},{label:"繁昌县",value:"340222"},{label:"南陵县",value:"340223"},{label:"无为县",value:"340225"},{label:"芜湖经济技术开发区",value:"340271"},{label:"安徽芜湖长江大桥经济开发区",value:"340272"}],[{label:"龙子湖区",value:"340302"},{label:"蚌山区",value:"340303"},{label:"禹会区",value:"340304"},{label:"淮上区",value:"340311"},{label:"怀远县",value:"340321"},{label:"五河县",value:"340322"},{label:"固镇县",value:"340323"},{label:"蚌埠市高新技术开发区",value:"340371"},{label:"蚌埠市经济开发区",value:"340372"}],[{label:"大通区",value:"340402"},{label:"田家庵区",value:"340403"},{label:"谢家集区",value:"340404"},{label:"八公山区",value:"340405"},{label:"潘集区",value:"340406"},{label:"凤台县",value:"340421"},{label:"寿县",value:"340422"}],[{label:"花山区",value:"340503"},{label:"雨山区",value:"340504"},{label:"博望区",value:"340506"},{label:"当涂县",value:"340521"},{label:"含山县",value:"340522"},{label:"和县",value:"340523"}],[{label:"杜集区",value:"340602"},{label:"相山区",value:"340603"},{label:"烈山区",value:"340604"},{label:"濉溪县",value:"340621"}],[{label:"铜官区",value:"340705"},{label:"义安区",value:"340706"},{label:"郊区",value:"340711"},{label:"枞阳县",value:"340722"}],[{label:"迎江区",value:"340802"},{label:"大观区",value:"340803"},{label:"宜秀区",value:"340811"},{label:"怀宁县",value:"340822"},{label:"潜山县",value:"340824"},{label:"太湖县",value:"340825"},{label:"宿松县",value:"340826"},{label:"望江县",value:"340827"},{label:"岳西县",value:"340828"},{label:"安徽安庆经济开发区",value:"340871"},{label:"桐城市",value:"340881"}],[{label:"屯溪区",value:"341002"},{label:"黄山区",value:"341003"},{label:"徽州区",value:"341004"},{label:"歙县",value:"341021"},{label:"休宁县",value:"341022"},{label:"黟县",value:"341023"},{label:"祁门县",value:"341024"}],[{label:"琅琊区",value:"341102"},{label:"南谯区",value:"341103"},{label:"来安县",value:"341122"},{label:"全椒县",value:"341124"},{label:"定远县",value:"341125"},{label:"凤阳县",value:"341126"},{label:"苏滁现代产业园",value:"341171"},{label:"滁州经济技术开发区",value:"341172"},{label:"天长市",value:"341181"},{label:"明光市",value:"341182"}],[{label:"颍州区",value:"341202"},{label:"颍东区",value:"341203"},{label:"颍泉区",value:"341204"},{label:"临泉县",value:"341221"},{label:"太和县",value:"341222"},{label:"阜南县",value:"341225"},{label:"颍上县",value:"341226"},{label:"阜阳合肥现代产业园区",value:"341271"},{label:"阜阳经济技术开发区",value:"341272"},{label:"界首市",value:"341282"}],[{label:"埇桥区",value:"341302"},{label:"砀山县",value:"341321"},{label:"萧县",value:"341322"},{label:"灵璧县",value:"341323"},{label:"泗县",value:"341324"},{label:"宿州马鞍山现代产业园区",value:"341371"},{label:"宿州经济技术开发区",value:"341372"}],[{label:"金安区",value:"341502"},{label:"裕安区",value:"341503"},{label:"叶集区",value:"341504"},{label:"霍邱县",value:"341522"},{label:"舒城县",value:"341523"},{label:"金寨县",value:"341524"},{label:"霍山县",value:"341525"}],[{label:"谯城区",value:"341602"},{label:"涡阳县",value:"341621"},{label:"蒙城县",value:"341622"},{label:"利辛县",value:"341623"}],[{label:"贵池区",value:"341702"},{label:"东至县",value:"341721"},{label:"石台县",value:"341722"},{label:"青阳县",value:"341723"}],[{label:"宣州区",value:"341802"},{label:"郎溪县",value:"341821"},{label:"广德县",value:"341822"},{label:"泾县",value:"341823"},{label:"绩溪县",value:"341824"},{label:"旌德县",value:"341825"},{label:"宣城市经济开发区",value:"341871"},{label:"宁国市",value:"341881"}]],[[{label:"鼓楼区",value:"350102"},{label:"台江区",value:"350103"},{label:"仓山区",value:"350104"},{label:"马尾区",value:"350105"},{label:"晋安区",value:"350111"},{label:"闽侯县",value:"350121"},{label:"连江县",value:"350122"},{label:"罗源县",value:"350123"},{label:"闽清县",value:"350124"},{label:"永泰县",value:"350125"},{label:"平潭县",value:"350128"},{label:"福清市",value:"350181"},{label:"长乐市",value:"350182"}],[{label:"思明区",value:"350203"},{label:"海沧区",value:"350205"},{label:"湖里区",value:"350206"},{label:"集美区",value:"350211"},{label:"同安区",value:"350212"},{label:"翔安区",value:"350213"}],[{label:"城厢区",value:"350302"},{label:"涵江区",value:"350303"},{label:"荔城区",value:"350304"},{label:"秀屿区",value:"350305"},{label:"仙游县",value:"350322"}],[{label:"梅列区",value:"350402"},{label:"三元区",value:"350403"},{label:"明溪县",value:"350421"},{label:"清流县",value:"350423"},{label:"宁化县",value:"350424"},{label:"大田县",value:"350425"},{label:"尤溪县",value:"350426"},{label:"沙县",value:"350427"},{label:"将乐县",value:"350428"},{label:"泰宁县",value:"350429"},{label:"建宁县",value:"350430"},{label:"永安市",value:"350481"}],[{label:"鲤城区",value:"350502"},{label:"丰泽区",value:"350503"},{label:"洛江区",value:"350504"},{label:"泉港区",value:"350505"},{label:"惠安县",value:"350521"},{label:"安溪县",value:"350524"},{label:"永春县",value:"350525"},{label:"德化县",value:"350526"},{label:"金门县",value:"350527"},{label:"石狮市",value:"350581"},{label:"晋江市",value:"350582"},{label:"南安市",value:"350583"}],[{label:"芗城区",value:"350602"},{label:"龙文区",value:"350603"},{label:"云霄县",value:"350622"},{label:"漳浦县",value:"350623"},{label:"诏安县",value:"350624"},{label:"长泰县",value:"350625"},{label:"东山县",value:"350626"},{label:"南靖县",value:"350627"},{label:"平和县",value:"350628"},{label:"华安县",value:"350629"},{label:"龙海市",value:"350681"}],[{label:"延平区",value:"350702"},{label:"建阳区",value:"350703"},{label:"顺昌县",value:"350721"},{label:"浦城县",value:"350722"},{label:"光泽县",value:"350723"},{label:"松溪县",value:"350724"},{label:"政和县",value:"350725"},{label:"邵武市",value:"350781"},{label:"武夷山市",value:"350782"},{label:"建瓯市",value:"350783"}],[{label:"新罗区",value:"350802"},{label:"永定区",value:"350803"},{label:"长汀县",value:"350821"},{label:"上杭县",value:"350823"},{label:"武平县",value:"350824"},{label:"连城县",value:"350825"},{label:"漳平市",value:"350881"}],[{label:"蕉城区",value:"350902"},{label:"霞浦县",value:"350921"},{label:"古田县",value:"350922"},{label:"屏南县",value:"350923"},{label:"寿宁县",value:"350924"},{label:"周宁县",value:"350925"},{label:"柘荣县",value:"350926"},{label:"福安市",value:"350981"},{label:"福鼎市",value:"350982"}]],[[{label:"东湖区",value:"360102"},{label:"西湖区",value:"360103"},{label:"青云谱区",value:"360104"},{label:"湾里区",value:"360105"},{label:"青山湖区",value:"360111"},{label:"新建区",value:"360112"},{label:"南昌县",value:"360121"},{label:"安义县",value:"360123"},{label:"进贤县",value:"360124"}],[{label:"昌江区",value:"360202"},{label:"珠山区",value:"360203"},{label:"浮梁县",value:"360222"},{label:"乐平市",value:"360281"}],[{label:"安源区",value:"360302"},{label:"湘东区",value:"360313"},{label:"莲花县",value:"360321"},{label:"上栗县",value:"360322"},{label:"芦溪县",value:"360323"}],[{label:"濂溪区",value:"360402"},{label:"浔阳区",value:"360403"},{label:"柴桑区",value:"360404"},{label:"武宁县",value:"360423"},{label:"修水县",value:"360424"},{label:"永修县",value:"360425"},{label:"德安县",value:"360426"},{label:"都昌县",value:"360428"},{label:"湖口县",value:"360429"},{label:"彭泽县",value:"360430"},{label:"瑞昌市",value:"360481"},{label:"共青城市",value:"360482"},{label:"庐山市",value:"360483"}],[{label:"渝水区",value:"360502"},{label:"分宜县",value:"360521"}],[{label:"月湖区",value:"360602"},{label:"余江县",value:"360622"},{label:"贵溪市",value:"360681"}],[{label:"章贡区",value:"360702"},{label:"南康区",value:"360703"},{label:"赣县区",value:"360704"},{label:"信丰县",value:"360722"},{label:"大余县",value:"360723"},{label:"上犹县",value:"360724"},{label:"崇义县",value:"360725"},{label:"安远县",value:"360726"},{label:"龙南县",value:"360727"},{label:"定南县",value:"360728"},{label:"全南县",value:"360729"},{label:"宁都县",value:"360730"},{label:"于都县",value:"360731"},{label:"兴国县",value:"360732"},{label:"会昌县",value:"360733"},{label:"寻乌县",value:"360734"},{label:"石城县",value:"360735"},{label:"瑞金市",value:"360781"}],[{label:"吉州区",value:"360802"},{label:"青原区",value:"360803"},{label:"吉安县",value:"360821"},{label:"吉水县",value:"360822"},{label:"峡江县",value:"360823"},{label:"新干县",value:"360824"},{label:"永丰县",value:"360825"},{label:"泰和县",value:"360826"},{label:"遂川县",value:"360827"},{label:"万安县",value:"360828"},{label:"安福县",value:"360829"},{label:"永新县",value:"360830"},{label:"井冈山市",value:"360881"}],[{label:"袁州区",value:"360902"},{label:"奉新县",value:"360921"},{label:"万载县",value:"360922"},{label:"上高县",value:"360923"},{label:"宜丰县",value:"360924"},{label:"靖安县",value:"360925"},{label:"铜鼓县",value:"360926"},{label:"丰城市",value:"360981"},{label:"樟树市",value:"360982"},{label:"高安市",value:"360983"}],[{label:"临川区",value:"361002"},{label:"东乡区",value:"361003"},{label:"南城县",value:"361021"},{label:"黎川县",value:"361022"},{label:"南丰县",value:"361023"},{label:"崇仁县",value:"361024"},{label:"乐安县",value:"361025"},{label:"宜黄县",value:"361026"},{label:"金溪县",value:"361027"},{label:"资溪县",value:"361028"},{label:"广昌县",value:"361030"}],[{label:"信州区",value:"361102"},{label:"广丰区",value:"361103"},{label:"上饶县",value:"361121"},{label:"玉山县",value:"361123"},{label:"铅山县",value:"361124"},{label:"横峰县",value:"361125"},{label:"弋阳县",value:"361126"},{label:"余干县",value:"361127"},{label:"鄱阳县",value:"361128"},{label:"万年县",value:"361129"},{label:"婺源县",value:"361130"},{label:"德兴市",value:"361181"}]],[[{label:"历下区",value:"370102"},{label:"市中区",value:"370103"},{label:"槐荫区",value:"370104"},{label:"天桥区",value:"370105"},{label:"历城区",value:"370112"},{label:"长清区",value:"370113"},{label:"章丘区",value:"370114"},{label:"平阴县",value:"370124"},{label:"济阳县",value:"370125"},{label:"商河县",value:"370126"},{label:"济南高新技术产业开发区",value:"370171"}],[{label:"市南区",value:"370202"},{label:"市北区",value:"370203"},{label:"黄岛区",value:"370211"},{label:"崂山区",value:"370212"},{label:"李沧区",value:"370213"},{label:"城阳区",value:"370214"},{label:"即墨区",value:"370215"},{label:"青岛高新技术产业开发区",value:"370271"},{label:"胶州市",value:"370281"},{label:"平度市",value:"370283"},{label:"莱西市",value:"370285"}],[{label:"淄川区",value:"370302"},{label:"张店区",value:"370303"},{label:"博山区",value:"370304"},{label:"临淄区",value:"370305"},{label:"周村区",value:"370306"},{label:"桓台县",value:"370321"},{label:"高青县",value:"370322"},{label:"沂源县",value:"370323"}],[{label:"市中区",value:"370402"},{label:"薛城区",value:"370403"},{label:"峄城区",value:"370404"},{label:"台儿庄区",value:"370405"},{label:"山亭区",value:"370406"},{label:"滕州市",value:"370481"}],[{label:"东营区",value:"370502"},{label:"河口区",value:"370503"},{label:"垦利区",value:"370505"},{label:"利津县",value:"370522"},{label:"广饶县",value:"370523"},{label:"东营经济技术开发区",value:"370571"},{label:"东营港经济开发区",value:"370572"}],[{label:"芝罘区",value:"370602"},{label:"福山区",value:"370611"},{label:"牟平区",value:"370612"},{label:"莱山区",value:"370613"},{label:"长岛县",value:"370634"},{label:"烟台高新技术产业开发区",value:"370671"},{label:"烟台经济技术开发区",value:"370672"},{label:"龙口市",value:"370681"},{label:"莱阳市",value:"370682"},{label:"莱州市",value:"370683"},{label:"蓬莱市",value:"370684"},{label:"招远市",value:"370685"},{label:"栖霞市",value:"370686"},{label:"海阳市",value:"370687"}],[{label:"潍城区",value:"370702"},{label:"寒亭区",value:"370703"},{label:"坊子区",value:"370704"},{label:"奎文区",value:"370705"},{label:"临朐县",value:"370724"},{label:"昌乐县",value:"370725"},{label:"潍坊滨海经济技术开发区",value:"370772"},{label:"青州市",value:"370781"},{label:"诸城市",value:"370782"},{label:"寿光市",value:"370783"},{label:"安丘市",value:"370784"},{label:"高密市",value:"370785"},{label:"昌邑市",value:"370786"}],[{label:"任城区",value:"370811"},{label:"兖州区",value:"370812"},{label:"微山县",value:"370826"},{label:"鱼台县",value:"370827"},{label:"金乡县",value:"370828"},{label:"嘉祥县",value:"370829"},{label:"汶上县",value:"370830"},{label:"泗水县",value:"370831"},{label:"梁山县",value:"370832"},{label:"济宁高新技术产业开发区",value:"370871"},{label:"曲阜市",value:"370881"},{label:"邹城市",value:"370883"}],[{label:"泰山区",value:"370902"},{label:"岱岳区",value:"370911"},{label:"宁阳县",value:"370921"},{label:"东平县",value:"370923"},{label:"新泰市",value:"370982"},{label:"肥城市",value:"370983"}],[{label:"环翠区",value:"371002"},{label:"文登区",value:"371003"},{label:"威海火炬高技术产业开发区",value:"371071"},{label:"威海经济技术开发区",value:"371072"},{label:"威海临港经济技术开发区",value:"371073"},{label:"荣成市",value:"371082"},{label:"乳山市",value:"371083"}],[{label:"东港区",value:"371102"},{label:"岚山区",value:"371103"},{label:"五莲县",value:"371121"},{label:"莒县",value:"371122"},{label:"日照经济技术开发区",value:"371171"},{label:"日照国际海洋城",value:"371172"}],[{label:"莱城区",value:"371202"},{label:"钢城区",value:"371203"}],[{label:"兰山区",value:"371302"},{label:"罗庄区",value:"371311"},{label:"河东区",value:"371312"},{label:"沂南县",value:"371321"},{label:"郯城县",value:"371322"},{label:"沂水县",value:"371323"},{label:"兰陵县",value:"371324"},{label:"费县",value:"371325"},{label:"平邑县",value:"371326"},{label:"莒南县",value:"371327"},{label:"蒙阴县",value:"371328"},{label:"临沭县",value:"371329"},{label:"临沂高新技术产业开发区",value:"371371"},{label:"临沂经济技术开发区",value:"371372"},{label:"临沂临港经济开发区",value:"371373"}],[{label:"德城区",value:"371402"},{label:"陵城区",value:"371403"},{label:"宁津县",value:"371422"},{label:"庆云县",value:"371423"},{label:"临邑县",value:"371424"},{label:"齐河县",value:"371425"},{label:"平原县",value:"371426"},{label:"夏津县",value:"371427"},{label:"武城县",value:"371428"},{label:"德州经济技术开发区",value:"371471"},{label:"德州运河经济开发区",value:"371472"},{label:"乐陵市",value:"371481"},{label:"禹城市",value:"371482"}],[{label:"东昌府区",value:"371502"},{label:"阳谷县",value:"371521"},{label:"莘县",value:"371522"},{label:"茌平县",value:"371523"},{label:"东阿县",value:"371524"},{label:"冠县",value:"371525"},{label:"高唐县",value:"371526"},{label:"临清市",value:"371581"}],[{label:"滨城区",value:"371602"},{label:"沾化区",value:"371603"},{label:"惠民县",value:"371621"},{label:"阳信县",value:"371622"},{label:"无棣县",value:"371623"},{label:"博兴县",value:"371625"},{label:"邹平县",value:"371626"}],[{label:"牡丹区",value:"371702"},{label:"定陶区",value:"371703"},{label:"曹县",value:"371721"},{label:"单县",value:"371722"},{label:"成武县",value:"371723"},{label:"巨野县",value:"371724"},{label:"郓城县",value:"371725"},{label:"鄄城县",value:"371726"},{label:"东明县",value:"371728"},{label:"菏泽经济技术开发区",value:"371771"},{label:"菏泽高新技术开发区",value:"371772"}]],[[{label:"中原区",value:"410102"},{label:"二七区",value:"410103"},{label:"管城回族区",value:"410104"},{label:"金水区",value:"410105"},{label:"上街区",value:"410106"},{label:"惠济区",value:"410108"},{label:"中牟县",value:"410122"},{label:"郑州经济技术开发区",value:"410171"},{label:"郑州高新技术产业开发区",value:"410172"},{label:"郑州航空港经济综合实验区",value:"410173"},{label:"巩义市",value:"410181"},{label:"荥阳市",value:"410182"},{label:"新密市",value:"410183"},{label:"新郑市",value:"410184"},{label:"登封市",value:"410185"}],[{label:"龙亭区",value:"410202"},{label:"顺河回族区",value:"410203"},{label:"鼓楼区",value:"410204"},{label:"禹王台区",value:"410205"},{label:"祥符区",value:"410212"},{label:"杞县",value:"410221"},{label:"通许县",value:"410222"},{label:"尉氏县",value:"410223"},{label:"兰考县",value:"410225"}],[{label:"老城区",value:"410302"},{label:"西工区",value:"410303"},{label:"瀍河回族区",value:"410304"},{label:"涧西区",value:"410305"},{label:"吉利区",value:"410306"},{label:"洛龙区",value:"410311"},{label:"孟津县",value:"410322"},{label:"新安县",value:"410323"},{label:"栾川县",value:"410324"},{label:"嵩县",value:"410325"},{label:"汝阳县",value:"410326"},{label:"宜阳县",value:"410327"},{label:"洛宁县",value:"410328"},{label:"伊川县",value:"410329"},{label:"洛阳高新技术产业开发区",value:"410371"},{label:"偃师市",value:"410381"}],[{label:"新华区",value:"410402"},{label:"卫东区",value:"410403"},{label:"石龙区",value:"410404"},{label:"湛河区",value:"410411"},{label:"宝丰县",value:"410421"},{label:"叶县",value:"410422"},{label:"鲁山县",value:"410423"},{label:"郏县",value:"410425"},{label:"平顶山高新技术产业开发区",value:"410471"},{label:"平顶山市新城区",value:"410472"},{label:"舞钢市",value:"410481"},{label:"汝州市",value:"410482"}],[{label:"文峰区",value:"410502"},{label:"北关区",value:"410503"},{label:"殷都区",value:"410505"},{label:"龙安区",value:"410506"},{label:"安阳县",value:"410522"},{label:"汤阴县",value:"410523"},{label:"滑县",value:"410526"},{label:"内黄县",value:"410527"},{label:"安阳高新技术产业开发区",value:"410571"},{label:"林州市",value:"410581"}],[{label:"鹤山区",value:"410602"},{label:"山城区",value:"410603"},{label:"淇滨区",value:"410611"},{label:"浚县",value:"410621"},{label:"淇县",value:"410622"},{label:"鹤壁经济技术开发区",value:"410671"}],[{label:"红旗区",value:"410702"},{label:"卫滨区",value:"410703"},{label:"凤泉区",value:"410704"},{label:"牧野区",value:"410711"},{label:"新乡县",value:"410721"},{label:"获嘉县",value:"410724"},{label:"原阳县",value:"410725"},{label:"延津县",value:"410726"},{label:"封丘县",value:"410727"},{label:"长垣县",value:"410728"},{label:"新乡高新技术产业开发区",value:"410771"},{label:"新乡经济技术开发区",value:"410772"},{label:"新乡市平原城乡一体化示范区",value:"410773"},{label:"卫辉市",value:"410781"},{label:"辉县市",value:"410782"}],[{label:"解放区",value:"410802"},{label:"中站区",value:"410803"},{label:"马村区",value:"410804"},{label:"山阳区",value:"410811"},{label:"修武县",value:"410821"},{label:"博爱县",value:"410822"},{label:"武陟县",value:"410823"},{label:"温县",value:"410825"},{label:"焦作城乡一体化示范区",value:"410871"},{label:"沁阳市",value:"410882"},{label:"孟州市",value:"410883"}],[{label:"华龙区",value:"410902"},{label:"清丰县",value:"410922"},{label:"南乐县",value:"410923"},{label:"范县",value:"410926"},{label:"台前县",value:"410927"},{label:"濮阳县",value:"410928"},{label:"河南濮阳工业园区",value:"410971"},{label:"濮阳经济技术开发区",value:"410972"}],[{label:"魏都区",value:"411002"},{label:"建安区",value:"411003"},{label:"鄢陵县",value:"411024"},{label:"襄城县",value:"411025"},{label:"许昌经济技术开发区",value:"411071"},{label:"禹州市",value:"411081"},{label:"长葛市",value:"411082"}],[{label:"源汇区",value:"411102"},{label:"郾城区",value:"411103"},{label:"召陵区",value:"411104"},{label:"舞阳县",value:"411121"},{label:"临颍县",value:"411122"},{label:"漯河经济技术开发区",value:"411171"}],[{label:"湖滨区",value:"411202"},{label:"陕州区",value:"411203"},{label:"渑池县",value:"411221"},{label:"卢氏县",value:"411224"},{label:"河南三门峡经济开发区",value:"411271"},{label:"义马市",value:"411281"},{label:"灵宝市",value:"411282"}],[{label:"宛城区",value:"411302"},{label:"卧龙区",value:"411303"},{label:"南召县",value:"411321"},{label:"方城县",value:"411322"},{label:"西峡县",value:"411323"},{label:"镇平县",value:"411324"},{label:"内乡县",value:"411325"},{label:"淅川县",value:"411326"},{label:"社旗县",value:"411327"},{label:"唐河县",value:"411328"},{label:"新野县",value:"411329"},{label:"桐柏县",value:"411330"},{label:"南阳高新技术产业开发区",value:"411371"},{label:"南阳市城乡一体化示范区",value:"411372"},{label:"邓州市",value:"411381"}],[{label:"梁园区",value:"411402"},{label:"睢阳区",value:"411403"},{label:"民权县",value:"411421"},{label:"睢县",value:"411422"},{label:"宁陵县",value:"411423"},{label:"柘城县",value:"411424"},{label:"虞城县",value:"411425"},{label:"夏邑县",value:"411426"},{label:"豫东综合物流产业聚集区",value:"411471"},{label:"河南商丘经济开发区",value:"411472"},{label:"永城市",value:"411481"}],[{label:"浉河区",value:"411502"},{label:"平桥区",value:"411503"},{label:"罗山县",value:"411521"},{label:"光山县",value:"411522"},{label:"新县",value:"411523"},{label:"商城县",value:"411524"},{label:"固始县",value:"411525"},{label:"潢川县",value:"411526"},{label:"淮滨县",value:"411527"},{label:"息县",value:"411528"},{label:"信阳高新技术产业开发区",value:"411571"}],[{label:"川汇区",value:"411602"},{label:"扶沟县",value:"411621"},{label:"西华县",value:"411622"},{label:"商水县",value:"411623"},{label:"沈丘县",value:"411624"},{label:"郸城县",value:"411625"},{label:"淮阳县",value:"411626"},{label:"太康县",value:"411627"},{label:"鹿邑县",value:"411628"},{label:"河南周口经济开发区",value:"411671"},{label:"项城市",value:"411681"}],[{label:"驿城区",value:"411702"},{label:"西平县",value:"411721"},{label:"上蔡县",value:"411722"},{label:"平舆县",value:"411723"},{label:"正阳县",value:"411724"},{label:"确山县",value:"411725"},{label:"泌阳县",value:"411726"},{label:"汝南县",value:"411727"},{label:"遂平县",value:"411728"},{label:"新蔡县",value:"411729"},{label:"河南驻马店经济开发区",value:"411771"}],[{label:"济源市",value:"419001"}]],[[{label:"江岸区",value:"420102"},{label:"江汉区",value:"420103"},{label:"硚口区",value:"420104"},{label:"汉阳区",value:"420105"},{label:"武昌区",value:"420106"},{label:"青山区",value:"420107"},{label:"洪山区",value:"420111"},{label:"东西湖区",value:"420112"},{label:"汉南区",value:"420113"},{label:"蔡甸区",value:"420114"},{label:"江夏区",value:"420115"},{label:"黄陂区",value:"420116"},{label:"新洲区",value:"420117"}],[{label:"黄石港区",value:"420202"},{label:"西塞山区",value:"420203"},{label:"下陆区",value:"420204"},{label:"铁山区",value:"420205"},{label:"阳新县",value:"420222"},{label:"大冶市",value:"420281"}],[{label:"茅箭区",value:"420302"},{label:"张湾区",value:"420303"},{label:"郧阳区",value:"420304"},{label:"郧西县",value:"420322"},{label:"竹山县",value:"420323"},{label:"竹溪县",value:"420324"},{label:"房县",value:"420325"},{label:"丹江口市",value:"420381"}],[{label:"西陵区",value:"420502"},{label:"伍家岗区",value:"420503"},{label:"点军区",value:"420504"},{label:"猇亭区",value:"420505"},{label:"夷陵区",value:"420506"},{label:"远安县",value:"420525"},{label:"兴山县",value:"420526"},{label:"秭归县",value:"420527"},{label:"长阳土家族自治县",value:"420528"},{label:"五峰土家族自治县",value:"420529"},{label:"宜都市",value:"420581"},{label:"当阳市",value:"420582"},{label:"枝江市",value:"420583"}],[{label:"襄城区",value:"420602"},{label:"樊城区",value:"420606"},{label:"襄州区",value:"420607"},{label:"南漳县",value:"420624"},{label:"谷城县",value:"420625"},{label:"保康县",value:"420626"},{label:"老河口市",value:"420682"},{label:"枣阳市",value:"420683"},{label:"宜城市",value:"420684"}],[{label:"梁子湖区",value:"420702"},{label:"华容区",value:"420703"},{label:"鄂城区",value:"420704"}],[{label:"东宝区",value:"420802"},{label:"掇刀区",value:"420804"},{label:"京山县",value:"420821"},{label:"沙洋县",value:"420822"},{label:"钟祥市",value:"420881"}],[{label:"孝南区",value:"420902"},{label:"孝昌县",value:"420921"},{label:"大悟县",value:"420922"},{label:"云梦县",value:"420923"},{label:"应城市",value:"420981"},{label:"安陆市",value:"420982"},{label:"汉川市",value:"420984"}],[{label:"沙市区",value:"421002"},{label:"荆州区",value:"421003"},{label:"公安县",value:"421022"},{label:"监利县",value:"421023"},{label:"江陵县",value:"421024"},{label:"荆州经济技术开发区",value:"421071"},{label:"石首市",value:"421081"},{label:"洪湖市",value:"421083"},{label:"松滋市",value:"421087"}],[{label:"黄州区",value:"421102"},{label:"团风县",value:"421121"},{label:"红安县",value:"421122"},{label:"罗田县",value:"421123"},{label:"英山县",value:"421124"},{label:"浠水县",value:"421125"},{label:"蕲春县",value:"421126"},{label:"黄梅县",value:"421127"},{label:"龙感湖管理区",value:"421171"},{label:"麻城市",value:"421181"},{label:"武穴市",value:"421182"}],[{label:"咸安区",value:"421202"},{label:"嘉鱼县",value:"421221"},{label:"通城县",value:"421222"},{label:"崇阳县",value:"421223"},{label:"通山县",value:"421224"},{label:"赤壁市",value:"421281"}],[{label:"曾都区",value:"421303"},{label:"随县",value:"421321"},{label:"广水市",value:"421381"}],[{label:"恩施市",value:"422801"},{label:"利川市",value:"422802"},{label:"建始县",value:"422822"},{label:"巴东县",value:"422823"},{label:"宣恩县",value:"422825"},{label:"咸丰县",value:"422826"},{label:"来凤县",value:"422827"},{label:"鹤峰县",value:"422828"}],[{label:"仙桃市",value:"429004"},{label:"潜江市",value:"429005"},{label:"天门市",value:"429006"},{label:"神农架林区",value:"429021"}]],[[{label:"芙蓉区",value:"430102"},{label:"天心区",value:"430103"},{label:"岳麓区",value:"430104"},{label:"开福区",value:"430105"},{label:"雨花区",value:"430111"},{label:"望城区",value:"430112"},{label:"长沙县",value:"430121"},{label:"浏阳市",value:"430181"},{label:"宁乡市",value:"430182"}],[{label:"荷塘区",value:"430202"},{label:"芦淞区",value:"430203"},{label:"石峰区",value:"430204"},{label:"天元区",value:"430211"},{label:"株洲县",value:"430221"},{label:"攸县",value:"430223"},{label:"茶陵县",value:"430224"},{label:"炎陵县",value:"430225"},{label:"云龙示范区",value:"430271"},{label:"醴陵市",value:"430281"}],[{label:"雨湖区",value:"430302"},{label:"岳塘区",value:"430304"},{label:"湘潭县",value:"430321"},{label:"湖南湘潭高新技术产业园区",value:"430371"},{label:"湘潭昭山示范区",value:"430372"},{label:"湘潭九华示范区",value:"430373"},{label:"湘乡市",value:"430381"},{label:"韶山市",value:"430382"}],[{label:"珠晖区",value:"430405"},{label:"雁峰区",value:"430406"},{label:"石鼓区",value:"430407"},{label:"蒸湘区",value:"430408"},{label:"南岳区",value:"430412"},{label:"衡阳县",value:"430421"},{label:"衡南县",value:"430422"},{label:"衡山县",value:"430423"},{label:"衡东县",value:"430424"},{label:"祁东县",value:"430426"},{label:"衡阳综合保税区",value:"430471"},{label:"湖南衡阳高新技术产业园区",value:"430472"},{label:"湖南衡阳松木经济开发区",value:"430473"},{label:"耒阳市",value:"430481"},{label:"常宁市",value:"430482"}],[{label:"双清区",value:"430502"},{label:"大祥区",value:"430503"},{label:"北塔区",value:"430511"},{label:"邵东县",value:"430521"},{label:"新邵县",value:"430522"},{label:"邵阳县",value:"430523"},{label:"隆回县",value:"430524"},{label:"洞口县",value:"430525"},{label:"绥宁县",value:"430527"},{label:"新宁县",value:"430528"},{label:"城步苗族自治县",value:"430529"},{label:"武冈市",value:"430581"}],[{label:"岳阳楼区",value:"430602"},{label:"云溪区",value:"430603"},{label:"君山区",value:"430611"},{label:"岳阳县",value:"430621"},{label:"华容县",value:"430623"},{label:"湘阴县",value:"430624"},{label:"平江县",value:"430626"},{label:"岳阳市屈原管理区",value:"430671"},{label:"汨罗市",value:"430681"},{label:"临湘市",value:"430682"}],[{label:"武陵区",value:"430702"},{label:"鼎城区",value:"430703"},{label:"安乡县",value:"430721"},{label:"汉寿县",value:"430722"},{label:"澧县",value:"430723"},{label:"临澧县",value:"430724"},{label:"桃源县",value:"430725"},{label:"石门县",value:"430726"},{label:"常德市西洞庭管理区",value:"430771"},{label:"津市市",value:"430781"}],[{label:"永定区",value:"430802"},{label:"武陵源区",value:"430811"},{label:"慈利县",value:"430821"},{label:"桑植县",value:"430822"}],[{label:"资阳区",value:"430902"},{label:"赫山区",value:"430903"},{label:"南县",value:"430921"},{label:"桃江县",value:"430922"},{label:"安化县",value:"430923"},{label:"益阳市大通湖管理区",value:"430971"},{label:"湖南益阳高新技术产业园区",value:"430972"},{label:"沅江市",value:"430981"}],[{label:"北湖区",value:"431002"},{label:"苏仙区",value:"431003"},{label:"桂阳县",value:"431021"},{label:"宜章县",value:"431022"},{label:"永兴县",value:"431023"},{label:"嘉禾县",value:"431024"},{label:"临武县",value:"431025"},{label:"汝城县",value:"431026"},{label:"桂东县",value:"431027"},{label:"安仁县",value:"431028"},{label:"资兴市",value:"431081"}],[{label:"零陵区",value:"431102"},{label:"冷水滩区",value:"431103"},{label:"祁阳县",value:"431121"},{label:"东安县",value:"431122"},{label:"双牌县",value:"431123"},{label:"道县",value:"431124"},{label:"江永县",value:"431125"},{label:"宁远县",value:"431126"},{label:"蓝山县",value:"431127"},{label:"新田县",value:"431128"},{label:"江华瑶族自治县",value:"431129"},{label:"永州经济技术开发区",value:"431171"},{label:"永州市金洞管理区",value:"431172"},{label:"永州市回龙圩管理区",value:"431173"}],[{label:"鹤城区",value:"431202"},{label:"中方县",value:"431221"},{label:"沅陵县",value:"431222"},{label:"辰溪县",value:"431223"},{label:"溆浦县",value:"431224"},{label:"会同县",value:"431225"},{label:"麻阳苗族自治县",value:"431226"},{label:"新晃侗族自治县",value:"431227"},{label:"芷江侗族自治县",value:"431228"},{label:"靖州苗族侗族自治县",value:"431229"},{label:"通道侗族自治县",value:"431230"},{label:"怀化市洪江管理区",value:"431271"},{label:"洪江市",value:"431281"}],[{label:"娄星区",value:"431302"},{label:"双峰县",value:"431321"},{label:"新化县",value:"431322"},{label:"冷水江市",value:"431381"},{label:"涟源市",value:"431382"}],[{label:"吉首市",value:"433101"},{label:"泸溪县",value:"433122"},{label:"凤凰县",value:"433123"},{label:"花垣县",value:"433124"},{label:"保靖县",value:"433125"},{label:"古丈县",value:"433126"},{label:"永顺县",value:"433127"},{label:"龙山县",value:"433130"},{label:"湖南吉首经济开发区",value:"433172"},{label:"湖南永顺经济开发区",value:"433173"}]],[[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"},{label:"天河区",value:"440106"},{label:"白云区",value:"440111"},{label:"黄埔区",value:"440112"},{label:"番禺区",value:"440113"},{label:"花都区",value:"440114"},{label:"南沙区",value:"440115"},{label:"从化区",value:"440117"},{label:"增城区",value:"440118"}],[{label:"武江区",value:"440203"},{label:"浈江区",value:"440204"},{label:"曲江区",value:"440205"},{label:"始兴县",value:"440222"},{label:"仁化县",value:"440224"},{label:"翁源县",value:"440229"},{label:"乳源瑶族自治县",value:"440232"},{label:"新丰县",value:"440233"},{label:"乐昌市",value:"440281"},{label:"南雄市",value:"440282"}],[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"},{label:"南山区",value:"440305"},{label:"宝安区",value:"440306"},{label:"龙岗区",value:"440307"},{label:"盐田区",value:"440308"},{label:"龙华区",value:"440309"},{label:"坪山区",value:"440310"}],[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"},{label:"濠江区",value:"440512"},{label:"潮阳区",value:"440513"},{label:"潮南区",value:"440514"},{label:"澄海区",value:"440515"},{label:"南澳县",value:"440523"}],[{label:"禅城区",value:"440604"},{label:"南海区",value:"440605"},{label:"顺德区",value:"440606"},{label:"三水区",value:"440607"},{label:"高明区",value:"440608"}],[{label:"蓬江区",value:"440703"},{label:"江海区",value:"440704"},{label:"新会区",value:"440705"},{label:"台山市",value:"440781"},{label:"开平市",value:"440783"},{label:"鹤山市",value:"440784"},{label:"恩平市",value:"440785"}],[{label:"赤坎区",value:"440802"},{label:"霞山区",value:"440803"},{label:"坡头区",value:"440804"},{label:"麻章区",value:"440811"},{label:"遂溪县",value:"440823"},{label:"徐闻县",value:"440825"},{label:"廉江市",value:"440881"},{label:"雷州市",value:"440882"},{label:"吴川市",value:"440883"}],[{label:"茂南区",value:"440902"},{label:"电白区",value:"440904"},{label:"高州市",value:"440981"},{label:"化州市",value:"440982"},{label:"信宜市",value:"440983"}],[{label:"端州区",value:"441202"},{label:"鼎湖区",value:"441203"},{label:"高要区",value:"441204"},{label:"广宁县",value:"441223"},{label:"怀集县",value:"441224"},{label:"封开县",value:"441225"},{label:"德庆县",value:"441226"},{label:"四会市",value:"441284"}],[{label:"惠城区",value:"441302"},{label:"惠阳区",value:"441303"},{label:"博罗县",value:"441322"},{label:"惠东县",value:"441323"},{label:"龙门县",value:"441324"}],[{label:"梅江区",value:"441402"},{label:"梅县区",value:"441403"},{label:"大埔县",value:"441422"},{label:"丰顺县",value:"441423"},{label:"五华县",value:"441424"},{label:"平远县",value:"441426"},{label:"蕉岭县",value:"441427"},{label:"兴宁市",value:"441481"}],[{label:"城区",value:"441502"},{label:"海丰县",value:"441521"},{label:"陆河县",value:"441523"},{label:"陆丰市",value:"441581"}],[{label:"源城区",value:"441602"},{label:"紫金县",value:"441621"},{label:"龙川县",value:"441622"},{label:"连平县",value:"441623"},{label:"和平县",value:"441624"},{label:"东源县",value:"441625"}],[{label:"江城区",value:"441702"},{label:"阳东区",value:"441704"},{label:"阳西县",value:"441721"},{label:"阳春市",value:"441781"}],[{label:"清城区",value:"441802"},{label:"清新区",value:"441803"},{label:"佛冈县",value:"441821"},{label:"阳山县",value:"441823"},{label:"连山壮族瑶族自治县",value:"441825"},{label:"连南瑶族自治县",value:"441826"},{label:"英德市",value:"441881"},{label:"连州市",value:"441882"}],[{label:"东莞市",value:"441900"}],[{label:"中山市",value:"442000"}],[{label:"湘桥区",value:"445102"},{label:"潮安区",value:"445103"},{label:"饶平县",value:"445122"}],[{label:"榕城区",value:"445202"},{label:"揭东区",value:"445203"},{label:"揭西县",value:"445222"},{label:"惠来县",value:"445224"},{label:"普宁市",value:"445281"}],[{label:"云城区",value:"445302"},{label:"云安区",value:"445303"},{label:"新兴县",value:"445321"},{label:"郁南县",value:"445322"},{label:"罗定市",value:"445381"}]],[[{label:"兴宁区",value:"450102"},{label:"青秀区",value:"450103"},{label:"江南区",value:"450105"},{label:"西乡塘区",value:"450107"},{label:"良庆区",value:"450108"},{label:"邕宁区",value:"450109"},{label:"武鸣区",value:"450110"},{label:"隆安县",value:"450123"},{label:"马山县",value:"450124"},{label:"上林县",value:"450125"},{label:"宾阳县",value:"450126"},{label:"横县",value:"450127"}],[{label:"城中区",value:"450202"},{label:"鱼峰区",value:"450203"},{label:"柳南区",value:"450204"},{label:"柳北区",value:"450205"},{label:"柳江区",value:"450206"},{label:"柳城县",value:"450222"},{label:"鹿寨县",value:"450223"},{label:"融安县",value:"450224"},{label:"融水苗族自治县",value:"450225"},{label:"三江侗族自治县",value:"450226"}],[{label:"秀峰区",value:"450302"},{label:"叠彩区",value:"450303"},{label:"象山区",value:"450304"},{label:"七星区",value:"450305"},{label:"雁山区",value:"450311"},{label:"临桂区",value:"450312"},{label:"阳朔县",value:"450321"},{label:"灵川县",value:"450323"},{label:"全州县",value:"450324"},{label:"兴安县",value:"450325"},{label:"永福县",value:"450326"},{label:"灌阳县",value:"450327"},{label:"龙胜各族自治县",value:"450328"},{label:"资源县",value:"450329"},{label:"平乐县",value:"450330"},{label:"荔浦县",value:"450331"},{label:"恭城瑶族自治县",value:"450332"}],[{label:"万秀区",value:"450403"},{label:"长洲区",value:"450405"},{label:"龙圩区",value:"450406"},{label:"苍梧县",value:"450421"},{label:"藤县",value:"450422"},{label:"蒙山县",value:"450423"},{label:"岑溪市",value:"450481"}],[{label:"海城区",value:"450502"},{label:"银海区",value:"450503"},{label:"铁山港区",value:"450512"},{label:"合浦县",value:"450521"}],[{label:"港口区",value:"450602"},{label:"防城区",value:"450603"},{label:"上思县",value:"450621"},{label:"东兴市",value:"450681"}],[{label:"钦南区",value:"450702"},{label:"钦北区",value:"450703"},{label:"灵山县",value:"450721"},{label:"浦北县",value:"450722"}],[{label:"港北区",value:"450802"},{label:"港南区",value:"450803"},{label:"覃塘区",value:"450804"},{label:"平南县",value:"450821"},{label:"桂平市",value:"450881"}],[{label:"玉州区",value:"450902"},{label:"福绵区",value:"450903"},{label:"容县",value:"450921"},{label:"陆川县",value:"450922"},{label:"博白县",value:"450923"},{label:"兴业县",value:"450924"},{label:"北流市",value:"450981"}],[{label:"右江区",value:"451002"},{label:"田阳县",value:"451021"},{label:"田东县",value:"451022"},{label:"平果县",value:"451023"},{label:"德保县",value:"451024"},{label:"那坡县",value:"451026"},{label:"凌云县",value:"451027"},{label:"乐业县",value:"451028"},{label:"田林县",value:"451029"},{label:"西林县",value:"451030"},{label:"隆林各族自治县",value:"451031"},{label:"靖西市",value:"451081"}],[{label:"八步区",value:"451102"},{label:"平桂区",value:"451103"},{label:"昭平县",value:"451121"},{label:"钟山县",value:"451122"},{label:"富川瑶族自治县",value:"451123"}],[{label:"金城江区",value:"451202"},{label:"宜州区",value:"451203"},{label:"南丹县",value:"451221"},{label:"天峨县",value:"451222"},{label:"凤山县",value:"451223"},{label:"东兰县",value:"451224"},{label:"罗城仫佬族自治县",value:"451225"},{label:"环江毛南族自治县",value:"451226"},{label:"巴马瑶族自治县",value:"451227"},{label:"都安瑶族自治县",value:"451228"},{label:"大化瑶族自治县",value:"451229"}],[{label:"兴宾区",value:"451302"},{label:"忻城县",value:"451321"},{label:"象州县",value:"451322"},{label:"武宣县",value:"451323"},{label:"金秀瑶族自治县",value:"451324"},{label:"合山市",value:"451381"}],[{label:"江州区",value:"451402"},{label:"扶绥县",value:"451421"},{label:"宁明县",value:"451422"},{label:"龙州县",value:"451423"},{label:"大新县",value:"451424"},{label:"天等县",value:"451425"},{label:"凭祥市",value:"451481"}]],[[{label:"秀英区",value:"460105"},{label:"龙华区",value:"460106"},{label:"琼山区",value:"460107"},{label:"美兰区",value:"460108"}],[{label:"海棠区",value:"460202"},{label:"吉阳区",value:"460203"},{label:"天涯区",value:"460204"},{label:"崖州区",value:"460205"}],[{label:"西沙群岛",value:"460321"},{label:"南沙群岛",value:"460322"},{label:"中沙群岛的岛礁及其海域",value:"460323"}],[{label:"儋州市",value:"460400"}],[{label:"五指山市",value:"469001"},{label:"琼海市",value:"469002"},{label:"文昌市",value:"469005"},{label:"万宁市",value:"469006"},{label:"东方市",value:"469007"},{label:"定安县",value:"469021"},{label:"屯昌县",value:"469022"},{label:"澄迈县",value:"469023"},{label:"临高县",value:"469024"},{label:"白沙黎族自治县",value:"469025"},{label:"昌江黎族自治县",value:"469026"},{label:"乐东黎族自治县",value:"469027"},{label:"陵水黎族自治县",value:"469028"},{label:"保亭黎族苗族自治县",value:"469029"},{label:"琼中黎族苗族自治县",value:"469030"}]],[[{label:"万州区",value:"500101"},{label:"涪陵区",value:"500102"},{label:"渝中区",value:"500103"},{label:"大渡口区",value:"500104"},{label:"江北区",value:"500105"},{label:"沙坪坝区",value:"500106"},{label:"九龙坡区",value:"500107"},{label:"南岸区",value:"500108"},{label:"北碚区",value:"500109"},{label:"綦江区",value:"500110"},{label:"大足区",value:"500111"},{label:"渝北区",value:"500112"},{label:"巴南区",value:"500113"},{label:"黔江区",value:"500114"},{label:"长寿区",value:"500115"},{label:"江津区",value:"500116"},{label:"合川区",value:"500117"},{label:"永川区",value:"500118"},{label:"南川区",value:"500119"},{label:"璧山区",value:"500120"},{label:"铜梁区",value:"500151"},{label:"潼南区",value:"500152"},{label:"荣昌区",value:"500153"},{label:"开州区",value:"500154"},{label:"梁平区",value:"500155"},{label:"武隆区",value:"500156"}],[{label:"城口县",value:"500229"},{label:"丰都县",value:"500230"},{label:"垫江县",value:"500231"},{label:"忠县",value:"500233"},{label:"云阳县",value:"500235"},{label:"奉节县",value:"500236"},{label:"巫山县",value:"500237"},{label:"巫溪县",value:"500238"},{label:"石柱土家族自治县",value:"500240"},{label:"秀山土家族苗族自治县",value:"500241"},{label:"酉阳土家族苗族自治县",value:"500242"},{label:"彭水苗族土家族自治县",value:"500243"}]],[[{label:"锦江区",value:"510104"},{label:"青羊区",value:"510105"},{label:"金牛区",value:"510106"},{label:"武侯区",value:"510107"},{label:"成华区",value:"510108"},{label:"龙泉驿区",value:"510112"},{label:"青白江区",value:"510113"},{label:"新都区",value:"510114"},{label:"温江区",value:"510115"},{label:"双流区",value:"510116"},{label:"郫都区",value:"510117"},{label:"金堂县",value:"510121"},{label:"大邑县",value:"510129"},{label:"蒲江县",value:"510131"},{label:"新津县",value:"510132"},{label:"都江堰市",value:"510181"},{label:"彭州市",value:"510182"},{label:"邛崃市",value:"510183"},{label:"崇州市",value:"510184"},{label:"简阳市",value:"510185"}],[{label:"自流井区",value:"510302"},{label:"贡井区",value:"510303"},{label:"大安区",value:"510304"},{label:"沿滩区",value:"510311"},{label:"荣县",value:"510321"},{label:"富顺县",value:"510322"}],[{label:"东区",value:"510402"},{label:"西区",value:"510403"},{label:"仁和区",value:"510411"},{label:"米易县",value:"510421"},{label:"盐边县",value:"510422"}],[{label:"江阳区",value:"510502"},{label:"纳溪区",value:"510503"},{label:"龙马潭区",value:"510504"},{label:"泸县",value:"510521"},{label:"合江县",value:"510522"},{label:"叙永县",value:"510524"},{label:"古蔺县",value:"510525"}],[{label:"旌阳区",value:"510603"},{label:"罗江区",value:"510604"},{label:"中江县",value:"510623"},{label:"广汉市",value:"510681"},{label:"什邡市",value:"510682"},{label:"绵竹市",value:"510683"}],[{label:"涪城区",value:"510703"},{label:"游仙区",value:"510704"},{label:"安州区",value:"510705"},{label:"三台县",value:"510722"},{label:"盐亭县",value:"510723"},{label:"梓潼县",value:"510725"},{label:"北川羌族自治县",value:"510726"},{label:"平武县",value:"510727"},{label:"江油市",value:"510781"}],[{label:"利州区",value:"510802"},{label:"昭化区",value:"510811"},{label:"朝天区",value:"510812"},{label:"旺苍县",value:"510821"},{label:"青川县",value:"510822"},{label:"剑阁县",value:"510823"},{label:"苍溪县",value:"510824"}],[{label:"船山区",value:"510903"},{label:"安居区",value:"510904"},{label:"蓬溪县",value:"510921"},{label:"射洪县",value:"510922"},{label:"大英县",value:"510923"}],[{label:"市中区",value:"511002"},{label:"东兴区",value:"511011"},{label:"威远县",value:"511024"},{label:"资中县",value:"511025"},{label:"内江经济开发区",value:"511071"},{label:"隆昌市",value:"511083"}],[{label:"市中区",value:"511102"},{label:"沙湾区",value:"511111"},{label:"五通桥区",value:"511112"},{label:"金口河区",value:"511113"},{label:"犍为县",value:"511123"},{label:"井研县",value:"511124"},{label:"夹江县",value:"511126"},{label:"沐川县",value:"511129"},{label:"峨边彝族自治县",value:"511132"},{label:"马边彝族自治县",value:"511133"},{label:"峨眉山市",value:"511181"}],[{label:"顺庆区",value:"511302"},{label:"高坪区",value:"511303"},{label:"嘉陵区",value:"511304"},{label:"南部县",value:"511321"},{label:"营山县",value:"511322"},{label:"蓬安县",value:"511323"},{label:"仪陇县",value:"511324"},{label:"西充县",value:"511325"},{label:"阆中市",value:"511381"}],[{label:"东坡区",value:"511402"},{label:"彭山区",value:"511403"},{label:"仁寿县",value:"511421"},{label:"洪雅县",value:"511423"},{label:"丹棱县",value:"511424"},{label:"青神县",value:"511425"}],[{label:"翠屏区",value:"511502"},{label:"南溪区",value:"511503"},{label:"宜宾县",value:"511521"},{label:"江安县",value:"511523"},{label:"长宁县",value:"511524"},{label:"高县",value:"511525"},{label:"珙县",value:"511526"},{label:"筠连县",value:"511527"},{label:"兴文县",value:"511528"},{label:"屏山县",value:"511529"}],[{label:"广安区",value:"511602"},{label:"前锋区",value:"511603"},{label:"岳池县",value:"511621"},{label:"武胜县",value:"511622"},{label:"邻水县",value:"511623"},{label:"华蓥市",value:"511681"}],[{label:"通川区",value:"511702"},{label:"达川区",value:"511703"},{label:"宣汉县",value:"511722"},{label:"开江县",value:"511723"},{label:"大竹县",value:"511724"},{label:"渠县",value:"511725"},{label:"达州经济开发区",value:"511771"},{label:"万源市",value:"511781"}],[{label:"雨城区",value:"511802"},{label:"名山区",value:"511803"},{label:"荥经县",value:"511822"},{label:"汉源县",value:"511823"},{label:"石棉县",value:"511824"},{label:"天全县",value:"511825"},{label:"芦山县",value:"511826"},{label:"宝兴县",value:"511827"}],[{label:"巴州区",value:"511902"},{label:"恩阳区",value:"511903"},{label:"通江县",value:"511921"},{label:"南江县",value:"511922"},{label:"平昌县",value:"511923"},{label:"巴中经济开发区",value:"511971"}],[{label:"雁江区",value:"512002"},{label:"安岳县",value:"512021"},{label:"乐至县",value:"512022"}],[{label:"马尔康市",value:"513201"},{label:"汶川县",value:"513221"},{label:"理县",value:"513222"},{label:"茂县",value:"513223"},{label:"松潘县",value:"513224"},{label:"九寨沟县",value:"513225"},{label:"金川县",value:"513226"},{label:"小金县",value:"513227"},{label:"黑水县",value:"513228"},{label:"壤塘县",value:"513230"},{label:"阿坝县",value:"513231"},{label:"若尔盖县",value:"513232"},{label:"红原县",value:"513233"}],[{label:"康定市",value:"513301"},{label:"泸定县",value:"513322"},{label:"丹巴县",value:"513323"},{label:"九龙县",value:"513324"},{label:"雅江县",value:"513325"},{label:"道孚县",value:"513326"},{label:"炉霍县",value:"513327"},{label:"甘孜县",value:"513328"},{label:"新龙县",value:"513329"},{label:"德格县",value:"513330"},{label:"白玉县",value:"513331"},{label:"石渠县",value:"513332"},{label:"色达县",value:"513333"},{label:"理塘县",value:"513334"},{label:"巴塘县",value:"513335"},{label:"乡城县",value:"513336"},{label:"稻城县",value:"513337"},{label:"得荣县",value:"513338"}],[{label:"西昌市",value:"513401"},{label:"木里藏族自治县",value:"513422"},{label:"盐源县",value:"513423"},{label:"德昌县",value:"513424"},{label:"会理县",value:"513425"},{label:"会东县",value:"513426"},{label:"宁南县",value:"513427"},{label:"普格县",value:"513428"},{label:"布拖县",value:"513429"},{label:"金阳县",value:"513430"},{label:"昭觉县",value:"513431"},{label:"喜德县",value:"513432"},{label:"冕宁县",value:"513433"},{label:"越西县",value:"513434"},{label:"甘洛县",value:"513435"},{label:"美姑县",value:"513436"},{label:"雷波县",value:"513437"}]],[[{label:"南明区",value:"520102"},{label:"云岩区",value:"520103"},{label:"花溪区",value:"520111"},{label:"乌当区",value:"520112"},{label:"白云区",value:"520113"},{label:"观山湖区",value:"520115"},{label:"开阳县",value:"520121"},{label:"息烽县",value:"520122"},{label:"修文县",value:"520123"},{label:"清镇市",value:"520181"}],[{label:"钟山区",value:"520201"},{label:"六枝特区",value:"520203"},{label:"水城县",value:"520221"},{label:"盘州市",value:"520281"}],[{label:"红花岗区",value:"520302"},{label:"汇川区",value:"520303"},{label:"播州区",value:"520304"},{label:"桐梓县",value:"520322"},{label:"绥阳县",value:"520323"},{label:"正安县",value:"520324"},{label:"道真仡佬族苗族自治县",value:"520325"},{label:"务川仡佬族苗族自治县",value:"520326"},{label:"凤冈县",value:"520327"},{label:"湄潭县",value:"520328"},{label:"余庆县",value:"520329"},{label:"习水县",value:"520330"},{label:"赤水市",value:"520381"},{label:"仁怀市",value:"520382"}],[{label:"西秀区",value:"520402"},{label:"平坝区",value:"520403"},{label:"普定县",value:"520422"},{label:"镇宁布依族苗族自治县",value:"520423"},{label:"关岭布依族苗族自治县",value:"520424"},{label:"紫云苗族布依族自治县",value:"520425"}],[{label:"七星关区",value:"520502"},{label:"大方县",value:"520521"},{label:"黔西县",value:"520522"},{label:"金沙县",value:"520523"},{label:"织金县",value:"520524"},{label:"纳雍县",value:"520525"},{label:"威宁彝族回族苗族自治县",value:"520526"},{label:"赫章县",value:"520527"}],[{label:"碧江区",value:"520602"},{label:"万山区",value:"520603"},{label:"江口县",value:"520621"},{label:"玉屏侗族自治县",value:"520622"},{label:"石阡县",value:"520623"},{label:"思南县",value:"520624"},{label:"印江土家族苗族自治县",value:"520625"},{label:"德江县",value:"520626"},{label:"沿河土家族自治县",value:"520627"},{label:"松桃苗族自治县",value:"520628"}],[{label:"兴义市",value:"522301"},{label:"兴仁县",value:"522322"},{label:"普安县",value:"522323"},{label:"晴隆县",value:"522324"},{label:"贞丰县",value:"522325"},{label:"望谟县",value:"522326"},{label:"册亨县",value:"522327"},{label:"安龙县",value:"522328"}],[{label:"凯里市",value:"522601"},{label:"黄平县",value:"522622"},{label:"施秉县",value:"522623"},{label:"三穗县",value:"522624"},{label:"镇远县",value:"522625"},{label:"岑巩县",value:"522626"},{label:"天柱县",value:"522627"},{label:"锦屏县",value:"522628"},{label:"剑河县",value:"522629"},{label:"台江县",value:"522630"},{label:"黎平县",value:"522631"},{label:"榕江县",value:"522632"},{label:"从江县",value:"522633"},{label:"雷山县",value:"522634"},{label:"麻江县",value:"522635"},{label:"丹寨县",value:"522636"}],[{label:"都匀市",value:"522701"},{label:"福泉市",value:"522702"},{label:"荔波县",value:"522722"},{label:"贵定县",value:"522723"},{label:"瓮安县",value:"522725"},{label:"独山县",value:"522726"},{label:"平塘县",value:"522727"},{label:"罗甸县",value:"522728"},{label:"长顺县",value:"522729"},{label:"龙里县",value:"522730"},{label:"惠水县",value:"522731"},{label:"三都水族自治县",value:"522732"}]],[[{label:"五华区",value:"530102"},{label:"盘龙区",value:"530103"},{label:"官渡区",value:"530111"},{label:"西山区",value:"530112"},{label:"东川区",value:"530113"},{label:"呈贡区",value:"530114"},{label:"晋宁区",value:"530115"},{label:"富民县",value:"530124"},{label:"宜良县",value:"530125"},{label:"石林彝族自治县",value:"530126"},{label:"嵩明县",value:"530127"},{label:"禄劝彝族苗族自治县",value:"530128"},{label:"寻甸回族彝族自治县",value:"530129"},{label:"安宁市",value:"530181"}],[{label:"麒麟区",value:"530302"},{label:"沾益区",value:"530303"},{label:"马龙县",value:"530321"},{label:"陆良县",value:"530322"},{label:"师宗县",value:"530323"},{label:"罗平县",value:"530324"},{label:"富源县",value:"530325"},{label:"会泽县",value:"530326"},{label:"宣威市",value:"530381"}],[{label:"红塔区",value:"530402"},{label:"江川区",value:"530403"},{label:"澄江县",value:"530422"},{label:"通海县",value:"530423"},{label:"华宁县",value:"530424"},{label:"易门县",value:"530425"},{label:"峨山彝族自治县",value:"530426"},{label:"新平彝族傣族自治县",value:"530427"},{label:"元江哈尼族彝族傣族自治县",value:"530428"}],[{label:"隆阳区",value:"530502"},{label:"施甸县",value:"530521"},{label:"龙陵县",value:"530523"},{label:"昌宁县",value:"530524"},{label:"腾冲市",value:"530581"}],[{label:"昭阳区",value:"530602"},{label:"鲁甸县",value:"530621"},{label:"巧家县",value:"530622"},{label:"盐津县",value:"530623"},{label:"大关县",value:"530624"},{label:"永善县",value:"530625"},{label:"绥江县",value:"530626"},{label:"镇雄县",value:"530627"},{label:"彝良县",value:"530628"},{label:"威信县",value:"530629"},{label:"水富县",value:"530630"}],[{label:"古城区",value:"530702"},{label:"玉龙纳西族自治县",value:"530721"},{label:"永胜县",value:"530722"},{label:"华坪县",value:"530723"},{label:"宁蒗彝族自治县",value:"530724"}],[{label:"思茅区",value:"530802"},{label:"宁洱哈尼族彝族自治县",value:"530821"},{label:"墨江哈尼族自治县",value:"530822"},{label:"景东彝族自治县",value:"530823"},{label:"景谷傣族彝族自治县",value:"530824"},{label:"镇沅彝族哈尼族拉祜族自治县",value:"530825"},{label:"江城哈尼族彝族自治县",value:"530826"},{label:"孟连傣族拉祜族佤族自治县",value:"530827"},{label:"澜沧拉祜族自治县",value:"530828"},{label:"西盟佤族自治县",value:"530829"}],[{label:"临翔区",value:"530902"},{label:"凤庆县",value:"530921"},{label:"云县",value:"530922"},{label:"永德县",value:"530923"},{label:"镇康县",value:"530924"},{label:"双江拉祜族佤族布朗族傣族自治县",value:"530925"},{label:"耿马傣族佤族自治县",value:"530926"},{label:"沧源佤族自治县",value:"530927"}],[{label:"楚雄市",value:"532301"},{label:"双柏县",value:"532322"},{label:"牟定县",value:"532323"},{label:"南华县",value:"532324"},{label:"姚安县",value:"532325"},{label:"大姚县",value:"532326"},{label:"永仁县",value:"532327"},{label:"元谋县",value:"532328"},{label:"武定县",value:"532329"},{label:"禄丰县",value:"532331"}],[{label:"个旧市",value:"532501"},{label:"开远市",value:"532502"},{label:"蒙自市",value:"532503"},{label:"弥勒市",value:"532504"},{label:"屏边苗族自治县",value:"532523"},{label:"建水县",value:"532524"},{label:"石屏县",value:"532525"},{label:"泸西县",value:"532527"},{label:"元阳县",value:"532528"},{label:"红河县",value:"532529"},{label:"金平苗族瑶族傣族自治县",value:"532530"},{label:"绿春县",value:"532531"},{label:"河口瑶族自治县",value:"532532"}],[{label:"文山市",value:"532601"},{label:"砚山县",value:"532622"},{label:"西畴县",value:"532623"},{label:"麻栗坡县",value:"532624"},{label:"马关县",value:"532625"},{label:"丘北县",value:"532626"},{label:"广南县",value:"532627"},{label:"富宁县",value:"532628"}],[{label:"景洪市",value:"532801"},{label:"勐海县",value:"532822"},{label:"勐腊县",value:"532823"}],[{label:"大理市",value:"532901"},{label:"漾濞彝族自治县",value:"532922"},{label:"祥云县",value:"532923"},{label:"宾川县",value:"532924"},{label:"弥渡县",value:"532925"},{label:"南涧彝族自治县",value:"532926"},{label:"巍山彝族回族自治县",value:"532927"},{label:"永平县",value:"532928"},{label:"云龙县",value:"532929"},{label:"洱源县",value:"532930"},{label:"剑川县",value:"532931"},{label:"鹤庆县",value:"532932"}],[{label:"瑞丽市",value:"533102"},{label:"芒市",value:"533103"},{label:"梁河县",value:"533122"},{label:"盈江县",value:"533123"},{label:"陇川县",value:"533124"}],[{label:"泸水市",value:"533301"},{label:"福贡县",value:"533323"},{label:"贡山独龙族怒族自治县",value:"533324"},{label:"兰坪白族普米族自治县",value:"533325"}],[{label:"香格里拉市",value:"533401"},{label:"德钦县",value:"533422"},{label:"维西傈僳族自治县",value:"533423"}]],[[{label:"城关区",value:"540102"},{label:"堆龙德庆区",value:"540103"},{label:"林周县",value:"540121"},{label:"当雄县",value:"540122"},{label:"尼木县",value:"540123"},{label:"曲水县",value:"540124"},{label:"达孜县",value:"540126"},{label:"墨竹工卡县",value:"540127"},{label:"格尔木藏青工业园区",value:"540171"},{label:"拉萨经济技术开发区",value:"540172"},{label:"西藏文化旅游创意园区",value:"540173"},{label:"达孜工业园区",value:"540174"}],[{label:"桑珠孜区",value:"540202"},{label:"南木林县",value:"540221"},{label:"江孜县",value:"540222"},{label:"定日县",value:"540223"},{label:"萨迦县",value:"540224"},{label:"拉孜县",value:"540225"},{label:"昂仁县",value:"540226"},{label:"谢通门县",value:"540227"},{label:"白朗县",value:"540228"},{label:"仁布县",value:"540229"},{label:"康马县",value:"540230"},{label:"定结县",value:"540231"},{label:"仲巴县",value:"540232"},{label:"亚东县",value:"540233"},{label:"吉隆县",value:"540234"},{label:"聂拉木县",value:"540235"},{label:"萨嘎县",value:"540236"},{label:"岗巴县",value:"540237"}],[{label:"卡若区",value:"540302"},{label:"江达县",value:"540321"},{label:"贡觉县",value:"540322"},{label:"类乌齐县",value:"540323"},{label:"丁青县",value:"540324"},{label:"察雅县",value:"540325"},{label:"八宿县",value:"540326"},{label:"左贡县",value:"540327"},{label:"芒康县",value:"540328"},{label:"洛隆县",value:"540329"},{label:"边坝县",value:"540330"}],[{label:"巴宜区",value:"540402"},{label:"工布江达县",value:"540421"},{label:"米林县",value:"540422"},{label:"墨脱县",value:"540423"},{label:"波密县",value:"540424"},{label:"察隅县",value:"540425"},{label:"朗县",value:"540426"}],[{label:"乃东区",value:"540502"},{label:"扎囊县",value:"540521"},{label:"贡嘎县",value:"540522"},{label:"桑日县",value:"540523"},{label:"琼结县",value:"540524"},{label:"曲松县",value:"540525"},{label:"措美县",value:"540526"},{label:"洛扎县",value:"540527"},{label:"加查县",value:"540528"},{label:"隆子县",value:"540529"},{label:"错那县",value:"540530"},{label:"浪卡子县",value:"540531"}],[{label:"那曲县",value:"542421"},{label:"嘉黎县",value:"542422"},{label:"比如县",value:"542423"},{label:"聂荣县",value:"542424"},{label:"安多县",value:"542425"},{label:"申扎县",value:"542426"},{label:"索县",value:"542427"},{label:"班戈县",value:"542428"},{label:"巴青县",value:"542429"},{label:"尼玛县",value:"542430"},{label:"双湖县",value:"542431"}],[{label:"普兰县",value:"542521"},{label:"札达县",value:"542522"},{label:"噶尔县",value:"542523"},{label:"日土县",value:"542524"},{label:"革吉县",value:"542525"},{label:"改则县",value:"542526"},{label:"措勤县",value:"542527"}]],[[{label:"新城区",value:"610102"},{label:"碑林区",value:"610103"},{label:"莲湖区",value:"610104"},{label:"灞桥区",value:"610111"},{label:"未央区",value:"610112"},{label:"雁塔区",value:"610113"},{label:"阎良区",value:"610114"},{label:"临潼区",value:"610115"},{label:"长安区",value:"610116"},{label:"高陵区",value:"610117"},{label:"鄠邑区",value:"610118"},{label:"蓝田县",value:"610122"},{label:"周至县",value:"610124"}],[{label:"王益区",value:"610202"},{label:"印台区",value:"610203"},{label:"耀州区",value:"610204"},{label:"宜君县",value:"610222"}],[{label:"渭滨区",value:"610302"},{label:"金台区",value:"610303"},{label:"陈仓区",value:"610304"},{label:"凤翔县",value:"610322"},{label:"岐山县",value:"610323"},{label:"扶风县",value:"610324"},{label:"眉县",value:"610326"},{label:"陇县",value:"610327"},{label:"千阳县",value:"610328"},{label:"麟游县",value:"610329"},{label:"凤县",value:"610330"},{label:"太白县",value:"610331"}],[{label:"秦都区",value:"610402"},{label:"杨陵区",value:"610403"},{label:"渭城区",value:"610404"},{label:"三原县",value:"610422"},{label:"泾阳县",value:"610423"},{label:"乾县",value:"610424"},{label:"礼泉县",value:"610425"},{label:"永寿县",value:"610426"},{label:"彬县",value:"610427"},{label:"长武县",value:"610428"},{label:"旬邑县",value:"610429"},{label:"淳化县",value:"610430"},{label:"武功县",value:"610431"},{label:"兴平市",value:"610481"}],[{label:"临渭区",value:"610502"},{label:"华州区",value:"610503"},{label:"潼关县",value:"610522"},{label:"大荔县",value:"610523"},{label:"合阳县",value:"610524"},{label:"澄城县",value:"610525"},{label:"蒲城县",value:"610526"},{label:"白水县",value:"610527"},{label:"富平县",value:"610528"},{label:"韩城市",value:"610581"},{label:"华阴市",value:"610582"}],[{label:"宝塔区",value:"610602"},{label:"安塞区",value:"610603"},{label:"延长县",value:"610621"},{label:"延川县",value:"610622"},{label:"子长县",value:"610623"},{label:"志丹县",value:"610625"},{label:"吴起县",value:"610626"},{label:"甘泉县",value:"610627"},{label:"富县",value:"610628"},{label:"洛川县",value:"610629"},{label:"宜川县",value:"610630"},{label:"黄龙县",value:"610631"},{label:"黄陵县",value:"610632"}],[{label:"汉台区",value:"610702"},{label:"南郑区",value:"610703"},{label:"城固县",value:"610722"},{label:"洋县",value:"610723"},{label:"西乡县",value:"610724"},{label:"勉县",value:"610725"},{label:"宁强县",value:"610726"},{label:"略阳县",value:"610727"},{label:"镇巴县",value:"610728"},{label:"留坝县",value:"610729"},{label:"佛坪县",value:"610730"}],[{label:"榆阳区",value:"610802"},{label:"横山区",value:"610803"},{label:"府谷县",value:"610822"},{label:"靖边县",value:"610824"},{label:"定边县",value:"610825"},{label:"绥德县",value:"610826"},{label:"米脂县",value:"610827"},{label:"佳县",value:"610828"},{label:"吴堡县",value:"610829"},{label:"清涧县",value:"610830"},{label:"子洲县",value:"610831"},{label:"神木市",value:"610881"}],[{label:"汉滨区",value:"610902"},{label:"汉阴县",value:"610921"},{label:"石泉县",value:"610922"},{label:"宁陕县",value:"610923"},{label:"紫阳县",value:"610924"},{label:"岚皋县",value:"610925"},{label:"平利县",value:"610926"},{label:"镇坪县",value:"610927"},{label:"旬阳县",value:"610928"},{label:"白河县",value:"610929"}],[{label:"商州区",value:"611002"},{label:"洛南县",value:"611021"},{label:"丹凤县",value:"611022"},{label:"商南县",value:"611023"},{label:"山阳县",value:"611024"},{label:"镇安县",value:"611025"},{label:"柞水县",value:"611026"}]],[[{label:"城关区",value:"620102"},{label:"七里河区",value:"620103"},{label:"西固区",value:"620104"},{label:"安宁区",value:"620105"},{label:"红古区",value:"620111"},{label:"永登县",value:"620121"},{label:"皋兰县",value:"620122"},{label:"榆中县",value:"620123"},{label:"兰州新区",value:"620171"}],[{label:"嘉峪关市",value:"620201"}],[{label:"金川区",value:"620302"},{label:"永昌县",value:"620321"}],[{label:"白银区",value:"620402"},{label:"平川区",value:"620403"},{label:"靖远县",value:"620421"},{label:"会宁县",value:"620422"},{label:"景泰县",value:"620423"}],[{label:"秦州区",value:"620502"},{label:"麦积区",value:"620503"},{label:"清水县",value:"620521"},{label:"秦安县",value:"620522"},{label:"甘谷县",value:"620523"},{label:"武山县",value:"620524"},{label:"张家川回族自治县",value:"620525"}],[{label:"凉州区",value:"620602"},{label:"民勤县",value:"620621"},{label:"古浪县",value:"620622"},{label:"天祝藏族自治县",value:"620623"}],[{label:"甘州区",value:"620702"},{label:"肃南裕固族自治县",value:"620721"},{label:"民乐县",value:"620722"},{label:"临泽县",value:"620723"},{label:"高台县",value:"620724"},{label:"山丹县",value:"620725"}],[{label:"崆峒区",value:"620802"},{label:"泾川县",value:"620821"},{label:"灵台县",value:"620822"},{label:"崇信县",value:"620823"},{label:"华亭县",value:"620824"},{label:"庄浪县",value:"620825"},{label:"静宁县",value:"620826"},{label:"平凉工业园区",value:"620871"}],[{label:"肃州区",value:"620902"},{label:"金塔县",value:"620921"},{label:"瓜州县",value:"620922"},{label:"肃北蒙古族自治县",value:"620923"},{label:"阿克塞哈萨克族自治县",value:"620924"},{label:"玉门市",value:"620981"},{label:"敦煌市",value:"620982"}],[{label:"西峰区",value:"621002"},{label:"庆城县",value:"621021"},{label:"环县",value:"621022"},{label:"华池县",value:"621023"},{label:"合水县",value:"621024"},{label:"正宁县",value:"621025"},{label:"宁县",value:"621026"},{label:"镇原县",value:"621027"}],[{label:"安定区",value:"621102"},{label:"通渭县",value:"621121"},{label:"陇西县",value:"621122"},{label:"渭源县",value:"621123"},{label:"临洮县",value:"621124"},{label:"漳县",value:"621125"},{label:"岷县",value:"621126"}],[{label:"武都区",value:"621202"},{label:"成县",value:"621221"},{label:"文县",value:"621222"},{label:"宕昌县",value:"621223"},{label:"康县",value:"621224"},{label:"西和县",value:"621225"},{label:"礼县",value:"621226"},{label:"徽县",value:"621227"},{label:"两当县",value:"621228"}],[{label:"临夏市",value:"622901"},{label:"临夏县",value:"622921"},{label:"康乐县",value:"622922"},{label:"永靖县",value:"622923"},{label:"广河县",value:"622924"},{label:"和政县",value:"622925"},{label:"东乡族自治县",value:"622926"},{label:"积石山保安族东乡族撒拉族自治县",value:"622927"}],[{label:"合作市",value:"623001"},{label:"临潭县",value:"623021"},{label:"卓尼县",value:"623022"},{label:"舟曲县",value:"623023"},{label:"迭部县",value:"623024"},{label:"玛曲县",value:"623025"},{label:"碌曲县",value:"623026"},{label:"夏河县",value:"623027"}]],[[{label:"城东区",value:"630102"},{label:"城中区",value:"630103"},{label:"城西区",value:"630104"},{label:"城北区",value:"630105"},{label:"大通回族土族自治县",value:"630121"},{label:"湟中县",value:"630122"},{label:"湟源县",value:"630123"}],[{label:"乐都区",value:"630202"},{label:"平安区",value:"630203"},{label:"民和回族土族自治县",value:"630222"},{label:"互助土族自治县",value:"630223"},{label:"化隆回族自治县",value:"630224"},{label:"循化撒拉族自治县",value:"630225"}],[{label:"门源回族自治县",value:"632221"},{label:"祁连县",value:"632222"},{label:"海晏县",value:"632223"},{label:"刚察县",value:"632224"}],[{label:"同仁县",value:"632321"},{label:"尖扎县",value:"632322"},{label:"泽库县",value:"632323"},{label:"河南蒙古族自治县",value:"632324"}],[{label:"共和县",value:"632521"},{label:"同德县",value:"632522"},{label:"贵德县",value:"632523"},{label:"兴海县",value:"632524"},{label:"贵南县",value:"632525"}],[{label:"玛沁县",value:"632621"},{label:"班玛县",value:"632622"},{label:"甘德县",value:"632623"},{label:"达日县",value:"632624"},{label:"久治县",value:"632625"},{label:"玛多县",value:"632626"}],[{label:"玉树市",value:"632701"},{label:"杂多县",value:"632722"},{label:"称多县",value:"632723"},{label:"治多县",value:"632724"},{label:"囊谦县",value:"632725"},{label:"曲麻莱县",value:"632726"}],[{label:"格尔木市",value:"632801"},{label:"德令哈市",value:"632802"},{label:"乌兰县",value:"632821"},{label:"都兰县",value:"632822"},{label:"天峻县",value:"632823"},{label:"大柴旦行政委员会",value:"632857"},{label:"冷湖行政委员会",value:"632858"},{label:"茫崖行政委员会",value:"632859"}]],[[{label:"兴庆区",value:"640104"},{label:"西夏区",value:"640105"},{label:"金凤区",value:"640106"},{label:"永宁县",value:"640121"},{label:"贺兰县",value:"640122"},{label:"灵武市",value:"640181"}],[{label:"大武口区",value:"640202"},{label:"惠农区",value:"640205"},{label:"平罗县",value:"640221"}],[{label:"利通区",value:"640302"},{label:"红寺堡区",value:"640303"},{label:"盐池县",value:"640323"},{label:"同心县",value:"640324"},{label:"青铜峡市",value:"640381"}],[{label:"原州区",value:"640402"},{label:"西吉县",value:"640422"},{label:"隆德县",value:"640423"},{label:"泾源县",value:"640424"},{label:"彭阳县",value:"640425"}],[{label:"沙坡头区",value:"640502"},{label:"中宁县",value:"640521"},{label:"海原县",value:"640522"}]],[[{label:"天山区",value:"650102"},{label:"沙依巴克区",value:"650103"},{label:"新市区",value:"650104"},{label:"水磨沟区",value:"650105"},{label:"头屯河区",value:"650106"},{label:"达坂城区",value:"650107"},{label:"米东区",value:"650109"},{label:"乌鲁木齐县",value:"650121"},{label:"乌鲁木齐经济技术开发区",value:"650171"},{label:"乌鲁木齐高新技术产业开发区",value:"650172"}],[{label:"独山子区",value:"650202"},{label:"克拉玛依区",value:"650203"},{label:"白碱滩区",value:"650204"},{label:"乌尔禾区",value:"650205"}],[{label:"高昌区",value:"650402"},{label:"鄯善县",value:"650421"},{label:"托克逊县",value:"650422"}],[{label:"伊州区",value:"650502"},{label:"巴里坤哈萨克自治县",value:"650521"},{label:"伊吾县",value:"650522"}],[{label:"昌吉市",value:"652301"},{label:"阜康市",value:"652302"},{label:"呼图壁县",value:"652323"},{label:"玛纳斯县",value:"652324"},{label:"奇台县",value:"652325"},{label:"吉木萨尔县",value:"652327"},{label:"木垒哈萨克自治县",value:"652328"}],[{label:"博乐市",value:"652701"},{label:"阿拉山口市",value:"652702"},{label:"精河县",value:"652722"},{label:"温泉县",value:"652723"}],[{label:"库尔勒市",value:"652801"},{label:"轮台县",value:"652822"},{label:"尉犁县",value:"652823"},{label:"若羌县",value:"652824"},{label:"且末县",value:"652825"},{label:"焉耆回族自治县",value:"652826"},{label:"和静县",value:"652827"},{label:"和硕县",value:"652828"},{label:"博湖县",value:"652829"},{label:"库尔勒经济技术开发区",value:"652871"}],[{label:"阿克苏市",value:"652901"},{label:"温宿县",value:"652922"},{label:"库车县",value:"652923"},{label:"沙雅县",value:"652924"},{label:"新和县",value:"652925"},{label:"拜城县",value:"652926"},{label:"乌什县",value:"652927"},{label:"阿瓦提县",value:"652928"},{label:"柯坪县",value:"652929"}],[{label:"阿图什市",value:"653001"},{label:"阿克陶县",value:"653022"},{label:"阿合奇县",value:"653023"},{label:"乌恰县",value:"653024"}],[{label:"喀什市",value:"653101"},{label:"疏附县",value:"653121"},{label:"疏勒县",value:"653122"},{label:"英吉沙县",value:"653123"},{label:"泽普县",value:"653124"},{label:"莎车县",value:"653125"},{label:"叶城县",value:"653126"},{label:"麦盖提县",value:"653127"},{label:"岳普湖县",value:"653128"},{label:"伽师县",value:"653129"},{label:"巴楚县",value:"653130"},{label:"塔什库尔干塔吉克自治县",value:"653131"}],[{label:"和田市",value:"653201"},{label:"和田县",value:"653221"},{label:"墨玉县",value:"653222"},{label:"皮山县",value:"653223"},{label:"洛浦县",value:"653224"},{label:"策勒县",value:"653225"},{label:"于田县",value:"653226"},{label:"民丰县",value:"653227"}],[{label:"伊宁市",value:"654002"},{label:"奎屯市",value:"654003"},{label:"霍尔果斯市",value:"654004"},{label:"伊宁县",value:"654021"},{label:"察布查尔锡伯自治县",value:"654022"},{label:"霍城县",value:"654023"},{label:"巩留县",value:"654024"},{label:"新源县",value:"654025"},{label:"昭苏县",value:"654026"},{label:"特克斯县",value:"654027"},{label:"尼勒克县",value:"654028"}],[{label:"塔城市",value:"654201"},{label:"乌苏市",value:"654202"},{label:"额敏县",value:"654221"},{label:"沙湾县",value:"654223"},{label:"托里县",value:"654224"},{label:"裕民县",value:"654225"},{label:"和布克赛尔蒙古自治县",value:"654226"}],[{label:"阿勒泰市",value:"654301"},{label:"布尔津县",value:"654321"},{label:"富蕴县",value:"654322"},{label:"福海县",value:"654323"},{label:"哈巴河县",value:"654324"},{label:"青河县",value:"654325"},{label:"吉木乃县",value:"654326"}],[{label:"石河子市",value:"659001"},{label:"阿拉尔市",value:"659002"},{label:"图木舒克市",value:"659003"},{label:"五家渠市",value:"659004"},{label:"铁门关市",value:"659006"}]],[[{label:"台北",value:"660101"}],[{label:"高雄",value:"660201"}],[{label:"基隆",value:"660301"}],[{label:"台中",value:"660401"}],[{label:"台南",value:"660501"}],[{label:"新竹",value:"660601"}],[{label:"嘉义",value:"660701"}],[{label:"宜兰",value:"660801"}],[{label:"桃园",value:"660901"}],[{label:"苗栗",value:"661001"}],[{label:"彰化",value:"661101"}],[{label:"南投",value:"661201"}],[{label:"云林",value:"661301"}],[{label:"屏东",value:"661401"}],[{label:"台东",value:"661501"}],[{label:"花莲",value:"661601"}],[{label:"澎湖",value:"661701"}]],[[{label:"香港岛",value:"670101"}],[{label:"九龙",value:"670201"}],[{label:"新界",value:"670301"}]],[[{label:"澳门半岛",value:"680101"}],[{label:"氹仔岛",value:"680201"}],[{label:"路环岛",value:"680301"}],[{label:"路氹城",value:"680401"}]]],v=u;e.default=v},c8ba:function(l,e){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(u){"object"===typeof window&&(a=window)}l.exports=a},d0aa:function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(l){return l<10?"0"+l:l+""},v={date:{init:function(l,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"date",v=arguments.length>3?arguments[3]:void 0,b=arguments.length>4?arguments[4]:void 0,t=arguments.length>5?arguments[5]:void 0,n=arguments.length>6?arguments[6]:void 0,r=new Date,o=[],i=new Date(l.toString()),s=new Date(e.toString());l>e&&(i=new Date(e.toString()),s=new Date(l.toString()));for(var c=i.getFullYear(),f=(i.getMonth(),s.getFullYear()),p=[],h=[],d=[],g=[],y=[],m=[],_=[],w=[],k=t?1*b[1]:b[1]+1,A=r.getFullYear(),x=r.getMonth()+1,T=r.getDate(),O=new Date(c,k,0).getDate(),S=c;S<=f;S++)p.push(S+"");var C=p[b[0]];switch(a){case"half":case"date":case"yearMonth":if(n&&C==A){for(var $=1;$<=x;$++)h.push(u($));for(var D=1;D<=T;D++)d.push(u(D))}else{for(var B=1;B<=12;B++)h.push(u(B));for(var E=1;E<=O;E++)d.push(u(E))}break;default:for(var P=1;P<=12;P++)h.push(u(P));for(var j=1;j<=O;j++)d.push(u(j));break}for(var N=0;N<24;N++)g.push(u(N));for(var R=0;R<60;R+=1*v)y.push(u(R));for(var M=0;M<60;M++)m.push(u(M));switch(t&&(w=[p.indexOf(b[0]),h.indexOf(b[1]),d.indexOf(b[2]),g.indexOf(b[3]),-1==y.indexOf(b[4])?0:y.indexOf(b[4]),m.indexOf(b[5])]),a){case"range":return t?(o=[w[0],w[1],w[2],0,w[0],w[1],w[2]],{years:p,months:h,days:d,defaultVal:o}):{years:p,months:h,days:d};case"date":return t?(o=[w[0],w[1],w[2]],{years:p,months:h,days:d,defaultVal:o}):{years:p,months:h,days:d};case"half":return _=[{label:"上午",value:0},{label:"下午",value:1}],t?(o=[w[0],w[1],w[2],w[3]],{years:p,months:h,days:d,areas:_,defaultVal:o}):{years:p,months:h,days:d,areas:_};case"yearMonth":return t?(o=[w[0],w[1]],{years:p,months:h,defaultVal:o}):{years:p,months:h};case"dateTime":return t?(o=w,{years:p,months:h,days:d,hours:g,minutes:y,seconds:m,defaultVal:o}):{years:p,months:h,days:d,hours:g,minutes:y,seconds:m};case"time":return t?(o=[w[3],w[4],w[5]],{hours:g,minutes:y,seconds:m,defaultVal:o}):{hours:g,minutes:y,seconds:m}}},initMonths:function(l,e){var a=new Date,v=a.getFullYear(),b=a.getMonth()+1,t=(a.getDate(),v==l),n=[];if(t&&e)for(var r=1;r<=b;r++)n.push(u(r));else for(var o=1;o<=12;o++)n.push(u(o));return n},initDays:function(l,e,a){var v=new Date,b=v.getFullYear(),t=v.getMonth()+1,n=v.getDate(),r=b==l&&t==e,o=new Date(l,e,0).getDate(),i=[];if(r&&a)for(var s=1;s<=n;s++)i.push(u(s));else for(var c=1;c<=o;c++)i.push(u(c));return i}},limitHour:{init:function(){for(var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,e=new Date,a=[],v=[],b=[],t=(new Date).getHours(),n=["周日","周一","周二","周三","周四","周五","周六"],r=0;r<l;r++){var o=void 0,i=void 0,s=void 0,c=void 0;o=e.getFullYear(),i=u(e.getMonth()+1),s=u(e.getDate()),c=n[e.getDay()];var f="";switch(r){case 0:f="今天";break;case 1:f="明天";break;case 2:f="后天";break;default:f=i+"月"+s+"日 "+c;break}a.push({label:f,value:o+"-"+i+"-"+s,today:0==r}),e.setDate(e.getDate()+1)}v=t>12?[{label:"下午",value:1}]:[{label:"上午",value:0},{label:"下午",value:1}];for(var p=t>12?t-12:t;p<=12;p++)b.push({label:u(p),value:u(t>12?p+12:p)});return{date:a,areas:v,hours:b}},initAreas:function(l){var e=[],a=(new Date).getHours();return e=l.today&&a>12?[{label:"下午",value:1}]:[{label:"上午",value:0},{label:"下午",value:1}],e},initHours:function(l,e){var a=[],v=(new Date).getHours();if(l.today)if(1==e.value&&v<=12)for(var b=1;b<=12;b++)a.push({label:u(b),value:u(1==e.value?b+12:b)});else for(var t=v>12?v-12:v;t<=12;t++)a.push({label:u(t),value:u(1==e.value?t+12:t)});else for(var n=1;n<=12;n++)a.push({label:u(n),value:u(1==e.value?n+12:n)});return a}},limit:{init:function(){for(var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,v=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,b=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30,t=new Date,n=new Date((new Date).getTime()+60*b*1e3),r=[],o=[],i=[],s=n.getHours(),c=Math.floor(n.getMinutes()/v)*v,f=["周日","周一","周二","周三","周四","周五","周六"],p=0;p<l;p++){var h=void 0,d=void 0,g=void 0,y=void 0;h=t.getFullYear(),d=u(t.getMonth()+1),g=u(t.getDate()),y=f[t.getDay()];var m="";switch(p){case 0:m="今天";break;case 1:m="明天";break;case 2:m="后天";break;default:m=d+"月"+g+"日 "+y;break}r.push({label:m,value:h+"-"+d+"-"+g,flag:0==p}),t.setDate(t.getDate()+1)}s<e&&(s=e),s>a&&(s=a);for(var _=1*s;_<=1*a;_++)o.push({label:u(_),value:u(_),flag:_==s});for(var w=c;w<60;w+=1*v)i.push({label:u(w),value:u(w)});return{date:r,hours:o,minutes:i}},initHours:function(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]?arguments[3]:30),v=arguments.length>4?arguments[4]:void 0,b=[],t=v.split("-"),n=new Date,r=n.getFullYear(),o=n.getMonth()+1,i=n.getDate(),s=new Date((new Date).getTime()+60*a*1e3),c=s.getHours(),f=r==t[0]&&o==t[1]&&i==t[2];if(c>e&&(c=e),f)for(var p=1*c;p<=1*e;p++)b.push({label:u(p),value:u(p),flag:p==c});else for(var h=1*l;h<=1*e;h++)b.push({label:u(h),value:u(h),flag:!1});return b},initMinutes:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30,a=arguments.length>4?arguments[4]:void 0,v=arguments.length>5?arguments[5]:void 0,b=[],t=new Date((new Date).getTime()+60*e*1e3),n=a.split("-"),r=new Date,o=r.getFullYear(),i=r.getMonth()+1,s=r.getDate(),c=t.getHours(),f=Math.floor(t.getMinutes()/l)*l,p=o==n[0]&&i==n[1]&&s==n[2];if(p)if(v==c)for(var h=f;h<60;h+=1*l)b.push({label:u(h),value:u(h)});else for(var d=0;d<60;d+=1*l)b.push({label:u(d),value:u(d)});else for(var g=0;g<60;g+=1*l)b.push({label:u(g),value:u(g)});return b}},range:{init:function(l,e,a,v){new Date;var b=[],t=new Date(l.toString()),n=new Date(e.toString());l>e&&(t=new Date(e.toString()),n=new Date(l.toString()));for(var r=t.getFullYear(),o=(t.getMonth(),n.getFullYear()),i=[],s=[],c=[],f=[],p=[],h=[],d=v?1*a[1]:a[1]+1,g=new Date(r,d,0).getDate(),y=r;y<=o;y++)i.push(y+"");for(var m=1;m<=12;m++)s.push(u(m));for(var _=1;_<=g;_++)c.push(u(_));for(var w=r;w<=o;w++)f.push(w+"");for(var k=1;k<=12;k++)p.push(u(k));for(var A=1;A<=g;A++)h.push(u(A));return v?(b=[i.indexOf(a[0]),s.indexOf(a[1]),c.indexOf(a[2]),0,f.indexOf(a[0]),p.indexOf(a[1]),h.indexOf(a[2])],{fyears:i,fmonths:s,fdays:c,tyears:f,tmonths:p,tdays:h,defaultVal:b}):{fyears:i,fmonths:s,fdays:c,tyears:f,tmonths:p,tdays:h}},initDays:function(l,e){for(var a=new Date(l,e,0).getDate(),v=[],b=1;b<=a;b++)v.push(u(b));return v}}},b=v;e.default=b},d3ab:function(l,e,a){"use strict";var u={};(function(){var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e=u.util={rotl:function(l,e){return l<<e|l>>>32-e},rotr:function(l,e){return l<<32-e|l>>>e},endian:function(l){if(l.constructor==Number)return 16711935&e.rotl(l,8)|4278255360&e.rotl(l,24);for(var a=0;a<l.length;a++)l[a]=e.endian(l[a]);return l},randomBytes:function(l){for(var e=[];l>0;l--)e.push(Math.floor(256*Math.random()));return e},stringToBytes:function(l){for(var e=[],a=0;a<l.length;a++)e.push(l.charCodeAt(a));return e},bytesToString:function(l){for(var e=[],a=0;a<l.length;a++)e.push(String.fromCharCode(l[a]));return e.join("")},stringToWords:function(l){for(var e=[],a=0,u=0;a<l.length;a++,u+=8)e[u>>>5]|=l.charCodeAt(a)<<24-u%32;return e},bytesToWords:function(l){for(var e=[],a=0,u=0;a<l.length;a++,u+=8)e[u>>>5]|=l[a]<<24-u%32;return e},wordsToBytes:function(l){for(var e=[],a=0;a<32*l.length;a+=8)e.push(l[a>>>5]>>>24-a%32&255);return e},bytesToHex:function(l){for(var e=[],a=0;a<l.length;a++)e.push((l[a]>>>4).toString(16)),e.push((15&l[a]).toString(16));return e.join("")},hexToBytes:function(l){for(var e=[],a=0;a<l.length;a+=2)e.push(parseInt(l.substr(a,2),16));return e},bytesToBase64:function(a){if("function"==typeof btoa)return btoa(e.bytesToString(a));for(var u,v=[],b=0;b<a.length;b++)switch(b%3){case 0:v.push(l.charAt(a[b]>>>2)),u=(3&a[b])<<4;break;case 1:v.push(l.charAt(u|a[b]>>>4)),u=(15&a[b])<<2;break;case 2:v.push(l.charAt(u|a[b]>>>6)),v.push(l.charAt(63&a[b])),u=-1}void 0!=u&&-1!=u&&v.push(l.charAt(u));while(v.length%4!=0)v.push("=");return v.join("")},base64ToBytes:function(a){if("function"==typeof atob)return e.stringToBytes(atob(a));a=a.replace(/[^A-Z0-9+\/]/gi,"");for(var u=[],v=0;v<a.length;v++)switch(v%4){case 1:u.push(l.indexOf(a.charAt(v-1))<<2|l.indexOf(a.charAt(v))>>>4);break;case 2:u.push((15&l.indexOf(a.charAt(v-1)))<<4|l.indexOf(a.charAt(v))>>>2);break;case 3:u.push((3&l.indexOf(a.charAt(v-1)))<<6|l.indexOf(a.charAt(v)));break}return u}};u.mode={}})(),l.exports=u},d79b:function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=[[{label:"市辖区",value:"1101"}],[{label:"市辖区",value:"1201"}],[{label:"石家庄市",value:"1301"},{label:"唐山市",value:"1302"},{label:"秦皇岛市",value:"1303"},{label:"邯郸市",value:"1304"},{label:"邢台市",value:"1305"},{label:"保定市",value:"1306"},{label:"张家口市",value:"1307"},{label:"承德市",value:"1308"},{label:"沧州市",value:"1309"},{label:"廊坊市",value:"1310"},{label:"衡水市",value:"1311"}],[{label:"太原市",value:"1401"},{label:"大同市",value:"1402"},{label:"阳泉市",value:"1403"},{label:"长治市",value:"1404"},{label:"晋城市",value:"1405"},{label:"朔州市",value:"1406"},{label:"晋中市",value:"1407"},{label:"运城市",value:"1408"},{label:"忻州市",value:"1409"},{label:"临汾市",value:"1410"},{label:"吕梁市",value:"1411"}],[{label:"呼和浩特市",value:"1501"},{label:"包头市",value:"1502"},{label:"乌海市",value:"1503"},{label:"赤峰市",value:"1504"},{label:"通辽市",value:"1505"},{label:"鄂尔多斯市",value:"1506"},{label:"呼伦贝尔市",value:"1507"},{label:"巴彦淖尔市",value:"1508"},{label:"乌兰察布市",value:"1509"},{label:"兴安盟",value:"1522"},{label:"锡林郭勒盟",value:"1525"},{label:"阿拉善盟",value:"1529"}],[{label:"沈阳市",value:"2101"},{label:"大连市",value:"2102"},{label:"鞍山市",value:"2103"},{label:"抚顺市",value:"2104"},{label:"本溪市",value:"2105"},{label:"丹东市",value:"2106"},{label:"锦州市",value:"2107"},{label:"营口市",value:"2108"},{label:"阜新市",value:"2109"},{label:"辽阳市",value:"2110"},{label:"盘锦市",value:"2111"},{label:"铁岭市",value:"2112"},{label:"朝阳市",value:"2113"},{label:"葫芦岛市",value:"2114"}],[{label:"长春市",value:"2201"},{label:"吉林市",value:"2202"},{label:"四平市",value:"2203"},{label:"辽源市",value:"2204"},{label:"通化市",value:"2205"},{label:"白山市",value:"2206"},{label:"松原市",value:"2207"},{label:"白城市",value:"2208"},{label:"延边朝鲜族自治州",value:"2224"}],[{label:"哈尔滨市",value:"2301"},{label:"齐齐哈尔市",value:"2302"},{label:"鸡西市",value:"2303"},{label:"鹤岗市",value:"2304"},{label:"双鸭山市",value:"2305"},{label:"大庆市",value:"2306"},{label:"伊春市",value:"2307"},{label:"佳木斯市",value:"2308"},{label:"七台河市",value:"2309"},{label:"牡丹江市",value:"2310"},{label:"黑河市",value:"2311"},{label:"绥化市",value:"2312"},{label:"大兴安岭地区",value:"2327"}],[{label:"市辖区",value:"3101"}],[{label:"南京市",value:"3201"},{label:"无锡市",value:"3202"},{label:"徐州市",value:"3203"},{label:"常州市",value:"3204"},{label:"苏州市",value:"3205"},{label:"南通市",value:"3206"},{label:"连云港市",value:"3207"},{label:"淮安市",value:"3208"},{label:"盐城市",value:"3209"},{label:"扬州市",value:"3210"},{label:"镇江市",value:"3211"},{label:"泰州市",value:"3212"},{label:"宿迁市",value:"3213"}],[{label:"杭州市",value:"3301"},{label:"宁波市",value:"3302"},{label:"温州市",value:"3303"},{label:"嘉兴市",value:"3304"},{label:"湖州市",value:"3305"},{label:"绍兴市",value:"3306"},{label:"金华市",value:"3307"},{label:"衢州市",value:"3308"},{label:"舟山市",value:"3309"},{label:"台州市",value:"3310"},{label:"丽水市",value:"3311"}],[{label:"合肥市",value:"3401"},{label:"芜湖市",value:"3402"},{label:"蚌埠市",value:"3403"},{label:"淮南市",value:"3404"},{label:"马鞍山市",value:"3405"},{label:"淮北市",value:"3406"},{label:"铜陵市",value:"3407"},{label:"安庆市",value:"3408"},{label:"黄山市",value:"3410"},{label:"滁州市",value:"3411"},{label:"阜阳市",value:"3412"},{label:"宿州市",value:"3413"},{label:"六安市",value:"3415"},{label:"亳州市",value:"3416"},{label:"池州市",value:"3417"},{label:"宣城市",value:"3418"}],[{label:"福州市",value:"3501"},{label:"厦门市",value:"3502"},{label:"莆田市",value:"3503"},{label:"三明市",value:"3504"},{label:"泉州市",value:"3505"},{label:"漳州市",value:"3506"},{label:"南平市",value:"3507"},{label:"龙岩市",value:"3508"},{label:"宁德市",value:"3509"}],[{label:"南昌市",value:"3601"},{label:"景德镇市",value:"3602"},{label:"萍乡市",value:"3603"},{label:"九江市",value:"3604"},{label:"新余市",value:"3605"},{label:"鹰潭市",value:"3606"},{label:"赣州市",value:"3607"},{label:"吉安市",value:"3608"},{label:"宜春市",value:"3609"},{label:"抚州市",value:"3610"},{label:"上饶市",value:"3611"}],[{label:"济南市",value:"3701"},{label:"青岛市",value:"3702"},{label:"淄博市",value:"3703"},{label:"枣庄市",value:"3704"},{label:"东营市",value:"3705"},{label:"烟台市",value:"3706"},{label:"潍坊市",value:"3707"},{label:"济宁市",value:"3708"},{label:"泰安市",value:"3709"},{label:"威海市",value:"3710"},{label:"日照市",value:"3711"},{label:"莱芜市",value:"3712"},{label:"临沂市",value:"3713"},{label:"德州市",value:"3714"},{label:"聊城市",value:"3715"},{label:"滨州市",value:"3716"},{label:"菏泽市",value:"3717"}],[{label:"郑州市",value:"4101"},{label:"开封市",value:"4102"},{label:"洛阳市",value:"4103"},{label:"平顶山市",value:"4104"},{label:"安阳市",value:"4105"},{label:"鹤壁市",value:"4106"},{label:"新乡市",value:"4107"},{label:"焦作市",value:"4108"},{label:"濮阳市",value:"4109"},{label:"许昌市",value:"4110"},{label:"漯河市",value:"4111"},{label:"三门峡市",value:"4112"},{label:"南阳市",value:"4113"},{label:"商丘市",value:"4114"},{label:"信阳市",value:"4115"},{label:"周口市",value:"4116"},{label:"驻马店市",value:"4117"},{label:"省直辖县级行政区划",value:"4190"}],[{label:"武汉市",value:"4201"},{label:"黄石市",value:"4202"},{label:"十堰市",value:"4203"},{label:"宜昌市",value:"4205"},{label:"襄阳市",value:"4206"},{label:"鄂州市",value:"4207"},{label:"荆门市",value:"4208"},{label:"孝感市",value:"4209"},{label:"荆州市",value:"4210"},{label:"黄冈市",value:"4211"},{label:"咸宁市",value:"4212"},{label:"随州市",value:"4213"},{label:"恩施土家族苗族自治州",value:"4228"},{label:"省直辖县级行政区划",value:"4290"}],[{label:"长沙市",value:"4301"},{label:"株洲市",value:"4302"},{label:"湘潭市",value:"4303"},{label:"衡阳市",value:"4304"},{label:"邵阳市",value:"4305"},{label:"岳阳市",value:"4306"},{label:"常德市",value:"4307"},{label:"张家界市",value:"4308"},{label:"益阳市",value:"4309"},{label:"郴州市",value:"4310"},{label:"永州市",value:"4311"},{label:"怀化市",value:"4312"},{label:"娄底市",value:"4313"},{label:"湘西土家族苗族自治州",value:"4331"}],[{label:"广州市",value:"4401"},{label:"韶关市",value:"4402"},{label:"深圳市",value:"4403"},{label:"珠海市",value:"4404"},{label:"汕头市",value:"4405"},{label:"佛山市",value:"4406"},{label:"江门市",value:"4407"},{label:"湛江市",value:"4408"},{label:"茂名市",value:"4409"},{label:"肇庆市",value:"4412"},{label:"惠州市",value:"4413"},{label:"梅州市",value:"4414"},{label:"汕尾市",value:"4415"},{label:"河源市",value:"4416"},{label:"阳江市",value:"4417"},{label:"清远市",value:"4418"},{label:"东莞市",value:"4419"},{label:"中山市",value:"4420"},{label:"潮州市",value:"4451"},{label:"揭阳市",value:"4452"},{label:"云浮市",value:"4453"}],[{label:"南宁市",value:"4501"},{label:"柳州市",value:"4502"},{label:"桂林市",value:"4503"},{label:"梧州市",value:"4504"},{label:"北海市",value:"4505"},{label:"防城港市",value:"4506"},{label:"钦州市",value:"4507"},{label:"贵港市",value:"4508"},{label:"玉林市",value:"4509"},{label:"百色市",value:"4510"},{label:"贺州市",value:"4511"},{label:"河池市",value:"4512"},{label:"来宾市",value:"4513"},{label:"崇左市",value:"4514"}],[{label:"海口市",value:"4601"},{label:"三亚市",value:"4602"},{label:"三沙市",value:"4603"},{label:"儋州市",value:"4604"},{label:"省直辖县级行政区划",value:"4690"}],[{label:"市辖区",value:"5001"},{label:"县",value:"5002"}],[{label:"成都市",value:"5101"},{label:"自贡市",value:"5103"},{label:"攀枝花市",value:"5104"},{label:"泸州市",value:"5105"},{label:"德阳市",value:"5106"},{label:"绵阳市",value:"5107"},{label:"广元市",value:"5108"},{label:"遂宁市",value:"5109"},{label:"内江市",value:"5110"},{label:"乐山市",value:"5111"},{label:"南充市",value:"5113"},{label:"眉山市",value:"5114"},{label:"宜宾市",value:"5115"},{label:"广安市",value:"5116"},{label:"达州市",value:"5117"},{label:"雅安市",value:"5118"},{label:"巴中市",value:"5119"},{label:"资阳市",value:"5120"},{label:"阿坝藏族羌族自治州",value:"5132"},{label:"甘孜藏族自治州",value:"5133"},{label:"凉山彝族自治州",value:"5134"}],[{label:"贵阳市",value:"5201"},{label:"六盘水市",value:"5202"},{label:"遵义市",value:"5203"},{label:"安顺市",value:"5204"},{label:"毕节市",value:"5205"},{label:"铜仁市",value:"5206"},{label:"黔西南布依族苗族自治州",value:"5223"},{label:"黔东南苗族侗族自治州",value:"5226"},{label:"黔南布依族苗族自治州",value:"5227"}],[{label:"昆明市",value:"5301"},{label:"曲靖市",value:"5303"},{label:"玉溪市",value:"5304"},{label:"保山市",value:"5305"},{label:"昭通市",value:"5306"},{label:"丽江市",value:"5307"},{label:"普洱市",value:"5308"},{label:"临沧市",value:"5309"},{label:"楚雄彝族自治州",value:"5323"},{label:"红河哈尼族彝族自治州",value:"5325"},{label:"文山壮族苗族自治州",value:"5326"},{label:"西双版纳傣族自治州",value:"5328"},{label:"大理白族自治州",value:"5329"},{label:"德宏傣族景颇族自治州",value:"5331"},{label:"怒江傈僳族自治州",value:"5333"},{label:"迪庆藏族自治州",value:"5334"}],[{label:"拉萨市",value:"5401"},{label:"日喀则市",value:"5402"},{label:"昌都市",value:"5403"},{label:"林芝市",value:"5404"},{label:"山南市",value:"5405"},{label:"那曲地区",value:"5424"},{label:"阿里地区",value:"5425"}],[{label:"西安市",value:"6101"},{label:"铜川市",value:"6102"},{label:"宝鸡市",value:"6103"},{label:"咸阳市",value:"6104"},{label:"渭南市",value:"6105"},{label:"延安市",value:"6106"},{label:"汉中市",value:"6107"},{label:"榆林市",value:"6108"},{label:"安康市",value:"6109"},{label:"商洛市",value:"6110"}],[{label:"兰州市",value:"6201"},{label:"嘉峪关市",value:"6202"},{label:"金昌市",value:"6203"},{label:"白银市",value:"6204"},{label:"天水市",value:"6205"},{label:"武威市",value:"6206"},{label:"张掖市",value:"6207"},{label:"平凉市",value:"6208"},{label:"酒泉市",value:"6209"},{label:"庆阳市",value:"6210"},{label:"定西市",value:"6211"},{label:"陇南市",value:"6212"},{label:"临夏回族自治州",value:"6229"},{label:"甘南藏族自治州",value:"6230"}],[{label:"西宁市",value:"6301"},{label:"海东市",value:"6302"},{label:"海北藏族自治州",value:"6322"},{label:"黄南藏族自治州",value:"6323"},{label:"海南藏族自治州",value:"6325"},{label:"果洛藏族自治州",value:"6326"},{label:"玉树藏族自治州",value:"6327"},{label:"海西蒙古族藏族自治州",value:"6328"}],[{label:"银川市",value:"6401"},{label:"石嘴山市",value:"6402"},{label:"吴忠市",value:"6403"},{label:"固原市",value:"6404"},{label:"中卫市",value:"6405"}],[{label:"乌鲁木齐市",value:"6501"},{label:"克拉玛依市",value:"6502"},{label:"吐鲁番市",value:"6504"},{label:"哈密市",value:"6505"},{label:"昌吉回族自治州",value:"6523"},{label:"博尔塔拉蒙古自治州",value:"6527"},{label:"巴音郭楞蒙古自治州",value:"6528"},{label:"阿克苏地区",value:"6529"},{label:"克孜勒苏柯尔克孜自治州",value:"6530"},{label:"喀什地区",value:"6531"},{label:"和田地区",value:"6532"},{label:"伊犁哈萨克自治州",value:"6540"},{label:"塔城地区",value:"6542"},{label:"阿勒泰地区",value:"6543"},{label:"自治区直辖县级行政区划",value:"6590"}],[{label:"台北",value:"6601"},{label:"高雄",value:"6602"},{label:"基隆",value:"6603"},{label:"台中",value:"6604"},{label:"台南",value:"6605"},{label:"新竹",value:"6606"},{label:"嘉义",value:"6607"},{label:"宜兰",value:"6608"},{label:"桃园",value:"6609"},{label:"苗栗",value:"6610"},{label:"彰化",value:"6611"},{label:"南投",value:"6612"},{label:"云林",value:"6613"},{label:"屏东",value:"6614"},{label:"台东",value:"6615"},{label:"花莲",value:"6616"},{label:"澎湖",value:"6617"}],[{label:"香港岛",value:"6701"},{label:"九龙",value:"6702"},{label:"新界",value:"6703"}],[{label:"澳门半岛",value:"6801"},{label:"氹仔岛",value:"6802"},{label:"路环岛",value:"6803"},{label:"路氹城",value:"6804"}]],v=u;e.default=v},df7c:function(l,e,a){(function(l){function a(l,e){for(var a=0,u=l.length-1;u>=0;u--){var v=l[u];"."===v?l.splice(u,1):".."===v?(l.splice(u,1),a++):a&&(l.splice(u,1),a--)}if(e)for(;a--;a)l.unshift("..");return l}var u=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,v=function(l){return u.exec(l).slice(1)};function b(l,e){if(l.filter)return l.filter(e);for(var a=[],u=0;u<l.length;u++)e(l[u],u,l)&&a.push(l[u]);return a}e.resolve=function(){for(var e="",u=!1,v=arguments.length-1;v>=-1&&!u;v--){var t=v>=0?arguments[v]:l.cwd();if("string"!==typeof t)throw new TypeError("Arguments to path.resolve must be strings");t&&(e=t+"/"+e,u="/"===t.charAt(0))}return e=a(b(e.split("/"),function(l){return!!l}),!u).join("/"),(u?"/":"")+e||"."},e.normalize=function(l){var u=e.isAbsolute(l),v="/"===t(l,-1);return l=a(b(l.split("/"),function(l){return!!l}),!u).join("/"),l||u||(l="."),l&&v&&(l+="/"),(u?"/":"")+l},e.isAbsolute=function(l){return"/"===l.charAt(0)},e.join=function(){var l=Array.prototype.slice.call(arguments,0);return e.normalize(b(l,function(l,e){if("string"!==typeof l)throw new TypeError("Arguments to path.join must be strings");return l}).join("/"))},e.relative=function(l,a){function u(l){for(var e=0;e<l.length;e++)if(""!==l[e])break;for(var a=l.length-1;a>=0;a--)if(""!==l[a])break;return e>a?[]:l.slice(e,a-e+1)}l=e.resolve(l).substr(1),a=e.resolve(a).substr(1);for(var v=u(l.split("/")),b=u(a.split("/")),t=Math.min(v.length,b.length),n=t,r=0;r<t;r++)if(v[r]!==b[r]){n=r;break}var o=[];for(r=n;r<v.length;r++)o.push("..");return o=o.concat(b.slice(n)),o.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(l){var e=v(l),a=e[0],u=e[1];return a||u?(u&&(u=u.substr(0,u.length-1)),a+u):"."},e.basename=function(l,e){var a=v(l)[2];return e&&a.substr(-1*e.length)===e&&(a=a.substr(0,a.length-e.length)),a},e.extname=function(l){return v(l)[3]};var t="b"==="ab".substr(-1)?function(l,e,a){return l.substr(e,a)}:function(l,e,a){return e<0&&(e=l.length+e),l.substr(e,a)}}).call(this,a("4362"))},fbe1:function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=[{label:"北京市",value:"11"},{label:"天津市",value:"12"},{label:"河北省",value:"13"},{label:"山西省",value:"14"},{label:"内蒙古自治区",value:"15"},{label:"辽宁省",value:"21"},{label:"吉林省",value:"22"},{label:"黑龙江省",value:"23"},{label:"上海市",value:"31"},{label:"江苏省",value:"32"},{label:"浙江省",value:"33"},{label:"安徽省",value:"34"},{label:"福建省",value:"35"},{label:"江西省",value:"36"},{label:"山东省",value:"37"},{label:"河南省",value:"41"},{label:"湖北省",value:"42"},{label:"湖南省",value:"43"},{label:"广东省",value:"44"},{label:"广西壮族自治区",value:"45"},{label:"海南省",value:"46"},{label:"重庆市",value:"50"},{label:"四川省",value:"51"},{label:"贵州省",value:"52"},{label:"云南省",value:"53"},{label:"西藏自治区",value:"54"},{label:"陕西省",value:"61"},{label:"甘肃省",value:"62"},{label:"青海省",value:"63"},{label:"宁夏回族自治区",value:"64"},{label:"新疆维吾尔自治区",value:"65"},{label:"台湾",value:"66"},{label:"香港",value:"67"},{label:"澳门",value:"68"}],v=u;e.default=v}}]);
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
__wxRoute = 'components/tki-qrcode/tki-qrcode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/tki-qrcode/tki-qrcode.js';

define('components/tki-qrcode/tki-qrcode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/tki-qrcode/tki-qrcode"], {
  "32c8": function c8(t, e, n) {},
  "5ceb": function ceb(t, e, n) {
    "use strict";

    var i = n("32c8"),
        o = n.n(i);
    o.a;
  },
  7074: function _(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("f9be"),
        o = n("ee30");

    for (var u in o) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(u);
    }

    n("5ceb");
    var a = n("2877"),
        r = Object(a["a"])(o["default"], i["a"], i["b"], !1, null, null, null);
    e["default"] = r.exports;
  },
  "71b4": function b4(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i,
          o = u(n("67d3"));

      function u(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      var a = {
        name: "tki-qrcode",
        props: {
          cid: {
            type: String,
            default: "tki-qrcode-canvas"
          },
          size: {
            type: Number,
            default: 200
          },
          unit: {
            type: String,
            default: "upx"
          },
          show: {
            type: Boolean,
            default: !0
          },
          val: {
            type: String,
            default: ""
          },
          background: {
            type: String,
            default: "#ffffff"
          },
          foreground: {
            type: String,
            default: "#000000"
          },
          pdground: {
            type: String,
            default: "#000000"
          },
          icon: {
            type: String,
            default: ""
          },
          iconSize: {
            type: Number,
            default: 40
          },
          lv: {
            type: Number,
            default: 3
          },
          onval: {
            type: Boolean,
            default: !1
          },
          loadMake: {
            type: Boolean,
            default: !1
          },
          usingComponents: {
            type: Boolean,
            default: !0
          },
          showLoading: {
            type: Boolean,
            default: !0
          },
          loadingText: {
            type: String,
            default: "二维码生成中"
          }
        },
        data: function data() {
          return {
            result: ""
          };
        },
        methods: {
          _makeCode: function _makeCode() {
            var e = this;
            this._empty(this.val) ? t.showToast({
              title: "二维码内容不能为空",
              icon: "none",
              duration: 2e3
            }) : i = new o.default({
              context: e,
              canvasId: e.cid,
              usingComponents: e.usingComponents,
              showLoading: e.showLoading,
              loadingText: e.loadingText,
              text: e.val,
              size: e.cpSize,
              background: e.background,
              foreground: e.foreground,
              pdground: e.pdground,
              correctLevel: e.lv,
              image: e.icon,
              imageSize: e.iconSize,
              cbResult: function cbResult(t) {
                e._result(t);
              }
            });
          },
          _clearCode: function _clearCode() {
            this._result(""), i.clear();
          },
          _saveCode: function _saveCode() {
            var e = this;
            "" != this.result && t.saveImageToPhotosAlbum({
              filePath: e.result,
              success: function success() {
                t.showToast({
                  title: "二维码保存成功",
                  icon: "success",
                  duration: 2e3
                });
              }
            });
          },
          _result: function _result(t) {
            this.result = t, this.$emit("result", t);
          },
          _empty: function _empty(t) {
            var e = typeof t,
                n = !1;
            return "number" == e && "" == String(t) ? n = !0 : "undefined" == e ? n = !0 : "object" == e ? "{}" != JSON.stringify(t) && "[]" != JSON.stringify(t) && null != t || (n = !0) : "string" == e ? "" != t && "undefined" != t && "null" != t && "{}" != t && "[]" != t || (n = !0) : "function" == e && (n = !1), n;
          }
        },
        watch: {
          size: function size(t, e) {
            var n = this;
            t == e || this._empty(t) || (this.cSize = t, this._empty(this.val) || setTimeout(function () {
              n._makeCode();
            }, 100));
          },
          val: function val(t, e) {
            var n = this;
            this.onval && (t == e || this._empty(t) || setTimeout(function () {
              n._makeCode();
            }, 0));
          }
        },
        computed: {
          cpSize: function cpSize() {
            return "upx" == this.unit ? t.upx2px(this.size) : this.size;
          }
        },
        mounted: function mounted() {
          var t = this;
          this.loadMake && (this._empty(this.val) || setTimeout(function () {
            t._makeCode();
          }, 0));
        }
      };
      e.default = a;
    }).call(this, n("6e42")["default"]);
  },
  ee30: function ee30(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("71b4"),
        o = n.n(i);

    for (var u in i) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(u);
    }

    e["default"] = o.a;
  },
  f9be: function f9be(t, e, n) {
    "use strict";

    var i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        o = [];

    n.d(e, "a", function () {
      return i;
    }), n.d(e, "b", function () {
      return o;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/tki-qrcode/tki-qrcode-create-component', {
  'components/tki-qrcode/tki-qrcode-create-component': function componentsTkiQrcodeTkiQrcodeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7074"));
  }
}, [['components/tki-qrcode/tki-qrcode-create-component']]]);
});
require('components/tki-qrcode/tki-qrcode.js');
__wxRoute = 'components/w-picker/w-picker';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/w-picker/w-picker.js';

define('components/w-picker/w-picker.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/w-picker/w-picker"], {
  "23dd": function dd(a, t, e) {
    "use strict";

    var r = function r() {
      var a = this,
          t = a.$createElement;
      a._self._c;
    },
        s = [];

    e.d(t, "a", function () {
      return r;
    }), e.d(t, "b", function () {
      return s;
    });
  },
  "447f": function f(a, t, e) {
    "use strict";

    e.r(t);
    var r = e("8087"),
        s = e.n(r);

    for (var n in r) {
      "default" !== n && function (a) {
        e.d(t, a, function () {
          return r[a];
        });
      }(n);
    }

    t["default"] = s.a;
  },
  5137: function _(a, t, e) {
    "use strict";

    var r = e("f558"),
        s = e.n(r);
    s.a;
  },
  8087: function _(a, t, e) {
    "use strict";

    (function (a, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var s = u(e("8981")),
          n = u(e("8622")),
          l = u(e("376c")),
          d = u(e("d0aa"));

      function u(a) {
        return a && a.__esModule ? a : {
          default: a
        };
      }

      function i(a, t) {
        for (var e = 0; e < t.length; e++) {
          if (a === t[e]) return !0;
        }

        throw new Error("mode无效，请选择有效的mode!");
      }

      var c = {
        data: function data() {
          return {
            result: [],
            data: {},
            checkArr: [],
            checkValue: [],
            pickVal: [],
            showPicker: !1,
            resultStr: "",
            itemHeight: "height: ".concat(a.upx2px(88), "px;")
          };
        },
        computed: {},
        props: {
          mode: {
            type: String,
            validator: function validator(a) {
              var t = ["half", "date", "dateTime", "yearMonth", "time", "region", "selector", "limit", "limitHour", "range"];
              return i(a, t);
            },
            default: function _default() {
              return "date";
            }
          },
          themeColor: {
            type: String,
            default: function _default() {
              return "#f5a200";
            }
          },
          startYear: {
            type: [String, Number],
            default: function _default() {
              return "1970";
            }
          },
          endYear: {
            type: [String, Number],
            default: function _default() {
              return new Date().getFullYear() + "";
            }
          },
          defaultVal: {
            type: Array,
            default: function _default() {
              return [0, 0, 0, 0, 0, 0, 0];
            }
          },
          areaCode: {
            type: Array,
            default: function _default() {
              return null;
            }
          },
          hideArea: {
            type: Boolean,
            default: !1
          },
          step: {
            type: [String, Number],
            default: 1
          },
          current: {
            type: Boolean,
            default: !1
          },
          selectList: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          dayStep: {
            type: [String, Number],
            default: 7
          },
          startHour: {
            type: [String, Number],
            default: 8
          },
          endHour: {
            type: [String, Number],
            default: 20
          },
          minuteStep: {
            type: [String, Number],
            default: 10
          },
          afterStep: {
            type: [String, Number],
            default: 30
          },
          disabledAfter: {
            type: Boolean,
            default: !1
          }
        },
        watch: {
          mode: function mode() {
            this.initData();
          },
          selectList: function selectList() {
            this.initData();
          }
        },
        methods: {
          getRegionVal: function getRegionVal(a, t) {
            var e = a[0],
                d = a[1],
                u = 0,
                i = 0,
                c = 0,
                h = [],
                o = this;
            if (s.default.map(function (a, r) {
              t ? a.value == e && (u = r) : a.label == e && (u = r);
            }), n.default[u].map(function (a, e) {
              t ? a.value == d && (i = e) : a.label == d && (i = e);
            }), o.hideArea) h = [u, i];else {
              var f = a[2];
              l.default[u][i].map(function (a, e) {
                t ? a.value == f && (c = e) : a.label == f && (c = e);
              }), h = [u, i, c];
            }
            return console.log(r(h, " at components\\w-picker\\w-picker.vue:326")), h;
          },
          useCurrent: function useCurrent() {
            var a = new Date(),
                t = a.getFullYear().toString(),
                e = this.formatNum(a.getMonth() + 1).toString(),
                r = this.formatNum(a.getDate()).toString(),
                s = this.formatNum(a.getHours()).toString(),
                n = this.formatNum(a.getMinutes()).toString(),
                l = this.formatNum(a.getSeconds()).toString();
            return this.current ? [t, e, r, s, (Math.floor(n / this.step) * this.step).toString(), l] : this.defaultVal;
          },
          formatNum: function formatNum(a) {
            return a < 10 ? "0" + a : a + "";
          },
          maskTap: function maskTap() {
            this.showPicker = !1;
          },
          show: function show() {
            this.showPicker = !0;
          },
          hide: function hide() {
            this.showPicker = !1;
          },
          pickerCancel: function pickerCancel() {
            this.$emit("cancel", {
              checkArr: this.checkArr,
              defaultVal: this.pickVal
            }), this.showPicker = !1;
          },
          pickerConfirm: function pickerConfirm(t) {
            switch (this.mode) {
              case "range":
                var e = this.checkArr,
                    r = new Date(e[0], e[1], e[2]),
                    s = new Date(e[3], e[4], e[5]),
                    n = this.pickVal;
                r > s ? (this.checkArr = [e[3], e[4], e[5], e[0], e[1], e[2]], this.pickVal = [n[4], n[5], n[6], 0, n[0], n[1], n[2]], this.$emit("confirm", {
                  checkArr: this.checkArr,
                  from: e[3] + "-" + e[4] + "-" + e[5],
                  to: e[0] + "-" + e[1] + "-" + e[2],
                  defaultVal: this.pickVal,
                  result: this.resultStr
                })) : this.$emit("confirm", {
                  checkArr: this.checkArr,
                  from: e[0] + "-" + e[1] + "-" + e[2],
                  to: e[3] + "-" + e[4] + "-" + e[5],
                  defaultVal: this.pickVal,
                  result: this.resultStr
                });
                break;

              case "limit":
                var l = new Date().getTime(),
                    d = new Date(this.resultStr.replace(/-/g, "/")).getTime();
                if (l > d) return void a.showModal({
                  title: "提示",
                  content: "选择时间必须大于当前时间",
                  confirmColor: this.themeColor
                });
                this.$emit("confirm", {
                  checkArr: this.checkArr,
                  defaultVal: this.pickVal,
                  result: this.resultStr
                });
                break;

              case "region":
                this.$emit("confirm", {
                  checkArr: this.checkArr,
                  checkValue: this.checkValue,
                  defaultVal: this.pickVal,
                  result: this.resultStr
                });
                break;

              default:
                this.$emit("confirm", {
                  checkArr: this.checkArr,
                  defaultVal: this.pickVal,
                  result: this.resultStr
                });
                break;
            }

            this.showPicker = !1;
          },
          bindChange: function bindChange(a) {
            var t,
                e,
                r,
                s,
                u,
                i,
                c,
                h,
                o,
                f = this,
                m = a.detail.value,
                y = "",
                g = "",
                k = "",
                b = "",
                p = "",
                v = "",
                A = f.checkArr,
                S = [],
                V = [],
                w = f.mode;

            switch (w) {
              case "limitHour":
                if (s = f.data.date[m[0]], u = f.data.areas[m[1]], f.data.hours[m[2]], s.value != A[0].value) {
                  m[1] = 0, m[2] = 0;
                  var H = d.default.limitHour.initAreas(s);
                  f.data.areas = H;
                  var D = d.default.limitHour.initHours(s, f.data.areas[m[1]]);
                  f.data.hours = D;
                }

                if (u.value != A[1].value) {
                  m[2] = 0;
                  var M = d.default.limitHour.initHours(s, f.data.areas[m[1]]);
                  f.data.hours = M;
                }

                i = f.data.date[m[0]] || f.data.date[f.data.date.length - 1], c = f.data.areas[m[1]] || f.data.areas[f.data.areas.length - 1], h = f.data.hours[m[2]] || f.data.hours[f.data.hours.length - 1], f.checkArr = [i, c, h], f.resultStr = "".concat(i.value + " " + c.label + " " + h.label + "时");
                break;

              case "limit":
                if (s = f.data.date[m[0]], u = f.data.hours[m[1]], s.value != A[0].value) {
                  var N = d.default.limit.initHours(f.startHour, f.endHour, f.minuteStep, f.afterStep, s.value),
                      C = d.default.limit.initMinutes(f.startHour, f.endHour, f.minuteStep, f.afterStep, s.value, u.value);
                  f.data.hours = N, f.data.minutes = C;
                }

                if (u.value != A[1].value) {
                  var $ = d.default.limit.initMinutes(f.startHour, f.endHour, f.minuteStep, f.afterStep, s.value, u.value);
                  f.data.minutes = $;
                }

                i = f.data.date[m[0]] || f.data.date[f.data.date.length - 1], h = f.data.hours[m[1]] || f.data.hours[f.data.hours.length - 1], o = f.data.minutes[m[2]] || f.data.minutes[f.data.minutes.length - 1], f.checkArr = [i, h, o], f.resultStr = "".concat(i.value + " " + h.value + ":" + o.value + ":00");
                break;

              case "range":
                var T = f.data.fyears[m[0]] || f.data.fyears[f.data.fyears.length - 1],
                    Y = f.data.fmonths[m[1]] || f.data.fmonths[f.data.fmonths.length - 1],
                    P = f.data.fdays[m[2]] || f.data.fdays[f.data.fdays.length - 1],
                    x = f.data.tyears[m[4]] || f.data.tyears[f.data.tyears.length - 1],
                    _ = f.data.tmonths[m[5]] || f.data.tmonths[f.data.tmonths.length - 1],
                    B = f.data.tdays[m[6]] || f.data.tdays[f.data.tdays.length - 1];

                T != A[0] && (S = d.default.range.initDays(T, Y), f.data.fdays = S), Y != A[1] && (S = d.default.range.initDays(T, Y), f.data.fdays = S), x != A[3] && (S = d.default.range.initDays(x, _), f.data.tdays = S), _ != A[4] && (S = d.default.range.initDays(x, _), f.data.tdays = S), f.checkArr = [T, Y, P, x, _, B], f.resultStr = "".concat(T + "-" + Y + "-" + P + "至" + x + "-" + _ + "-" + B);
                break;

              case "half":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], r = f.data.areas[m[3]] || f.data.areas[f.data.areas.length - 1], y != A[0] && (S = d.default.date.initDays(y, g, f.disabledAfter), V = d.default.date.initMonths(y, f.disabledAfter), f.data.days = S, f.data.months = V), g != A[1] && (S = d.default.date.initDays(y, g, f.disabledAfter), f.data.days = S), f.checkArr = [y, g, k, r], f.resultStr = "".concat(y + "-" + g + "-" + k + r.label);
                break;

              case "date":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], y != A[0] && (S = d.default.date.initDays(y, g, f.disabledAfter), V = d.default.date.initMonths(y, f.disabledAfter), f.data.days = S, f.data.months = V), g != A[1] && (S = d.default.date.initDays(y, g, f.disabledAfter), f.data.days = S), f.checkArr = [y, g, k], f.resultStr = "".concat(y + "-" + g + "-" + k);
                break;

              case "yearMonth":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], y != A[0] && (V = d.default.date.initMonths(y, f.disabledAfter), f.data.months = V), f.checkArr = [y, g], f.resultStr = "".concat(y + "-" + g);
                break;

              case "dateTime":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], b = f.data.hours[m[3]] || f.data.hours[f.data.hours.length - 1], p = f.data.minutes[m[4]] || f.data.minutes[f.data.minutes.length - 1], v = f.data.seconds[m[5]] || f.data.seconds[f.data.seconds.length - 1], y != A[0] && (S = d.default.date.initDays(y, g), f.data.days = S), g != A[1] && (S = d.default.date.initDays(y, g), f.data.days = S), f.checkArr = [y, g, k, b, p, v], f.resultStr = "".concat(y + "-" + g + "-" + k + " " + b + ":" + p + ":" + v);
                break;

              case "time":
                b = f.data.hours[m[0]] || f.data.hours[f.data.hours.length - 1], p = f.data.minutes[m[1]] || f.data.minutes[f.data.minutes.length - 1], v = f.data.seconds[m[2]] || f.data.seconds[f.data.seconds.length - 1], f.checkArr = [b, p, v], f.resultStr = "".concat(b + ":" + p + ":" + v);
                break;

              case "region":
                t = f.data.provinces[m[0]].label, e = f.data.citys[m[1]].label, f.hideArea || (r = f.data.areas[m[2]].label), t != A[0] && (f.data.citys = n.default[m[0]], f.hideArea || (f.data.areas = l.default[m[0]][0]), m[1] = 0, m[2] = 0, e = f.data.citys[m[1]].label, f.hideArea || (r = f.data.areas[m[2]].label)), e == A[1] || f.hideArea || (f.data.areas = l.default[m[0]][m[1]], m[2] = 0, r = f.data.areas[m[2]].label), f.hideArea ? (f.checkArr = [t, e], f.checkValue = [f.data.provinces[m[0]].value, f.data.citys[m[1]].value], f.resultStr = t + e) : (f.checkArr = [t, e, r], f.checkValue = [f.data.provinces[m[0]].value, f.data.citys[m[1]].value, f.data.areas[m[2]].value], f.resultStr = t + e + r);
                break;

              case "selector":
                f.checkArr = f.data[m[0]] || f.data[f.data.length - 1], f.resultStr = f.data[m[0]].label || f.data[f.data.length - 1].label;
                break;
            }

            f.$nextTick(function () {
              f.pickVal = m;
            });
          },
          initData: function initData() {
            var a,
                t,
                e,
                r,
                u,
                i,
                c,
                h,
                o,
                f,
                m,
                y,
                g = this,
                k = {},
                b = g.mode,
                p = [];

            switch (b) {
              case "region":
                p = g.areaCode ? g.getRegionVal(g.areaCode, !0) : g.getRegionVal(g.defaultVal), k = g.hideArea ? {
                  provinces: s.default,
                  citys: n.default[p[0]]
                } : {
                  provinces: s.default,
                  citys: n.default[p[0]],
                  areas: l.default[p[0]][p[1]]
                };
                break;

              case "selector":
                k = g.selectList, p = g.defaultVal;
                break;

              case "limit":
                k = d.default.limit.init(g.dayStep, g.startHour, g.endHour, g.minuteStep, g.afterStep), p = k.defaultVal && g.current ? k.defaultVal : g.defaultVal;
                break;

              case "limitHour":
                k = d.default.limitHour.init(g.dayStep), p = k.defaultVal && g.current ? k.defaultVal : g.defaultVal;
                break;

              case "range":
                k = d.default.range.init(g.startYear, g.endYear, g.useCurrent(), g.current), p = k.defaultVal && g.current ? k.defaultVal : g.defaultVal;
                break;

              default:
                k = d.default.date.init(g.startYear, g.endYear, g.mode, g.step, g.useCurrent(), g.current, g.disabledAfter), p = k.defaultVal && g.current ? k.defaultVal : g.defaultVal;
                break;
            }

            switch (g.data = k, b) {
              case "limitHour":
                f = k.date[p[0]] || k.date[k.date.length - 1], m = k.areas[p[2]] || k.areas[k.areas.length - 1], y = k.hours[p[1]] || k.hours[k.hours.length - 1], g.checkArr = [f, m, y], g.resultStr = "".concat(f.value + " " + m.label + " " + y.label + "时");
                break;

              case "limit":
                f = k.date[p[0]] || k.date[k.date.length - 1], m = k.hours[p[1]] || k.hours[k.hours.length - 1], y = k.minutes[p[2]] || k.minutes[k.minutes.length - 1], g.checkArr = [f, m, y], g.resultStr = "".concat(f.value + " " + m.value + ":" + y.value + ":00");
                break;

              case "range":
                var v = k.fyears[p[0]] || k.fyears[k.fyears.length - 1],
                    A = k.fmonths[p[1]] || k.fmonths[k.fmonths.length - 1],
                    S = k.fdays[p[2]] || k.fdays[k.fdays.length - 1],
                    V = k.tyears[p[4]] || k.tyears[k.tyears.length - 1],
                    w = k.tmonths[p[5]] || k.tmonths[k.tmonths.length - 1],
                    H = k.tdays[p[6]] || k.tdays[k.tdays.length - 1];
                g.checkArr = [v, A, S, V, w, H], g.resultStr = "".concat(v + "-" + A + "-" + S + "至" + V + "-" + w + "-" + H);
                break;

              case "half":
                a = k.years[p[0]] || k.years[k.years.length - 1], t = k.months[p[1]] || k.months[k.months.length - 1], e = k.days[p[2]] || k.days[k.days.length - 1], o = k.areas[p[3]] || k.areas[k.areas.length - 1], g.checkArr = [a, t, e, o], g.resultStr = "".concat(a + "-" + t + "-" + e + " " + o.label);
                break;

              case "date":
                a = k.years[p[0]] || k.years[k.years.length - 1], t = k.months[p[1]] || k.months[k.months.length - 1], e = k.days[p[2]] || k.days[k.days.length - 1], g.checkArr = [a, t, e], g.resultStr = "".concat(a + "-" + t + "-" + e);
                break;

              case "yearMonth":
                a = k.years[p[0]] || k.years[k.years.length - 1], t = k.months[p[1]] || k.months[k.months.length - 1], g.checkArr = [a, t], g.resultStr = "".concat(a + "-" + t);
                break;

              case "dateTime":
                a = k.years[p[0]] || k.years[k.years.length - 1], t = k.months[p[1]] || k.months[k.months.length - 1], e = k.days[p[2]] || k.days[k.days.length - 1], r = k.hours[p[3]] || k.hours[k.hours.length - 1], u = k.minutes[p[4]] || k.minutes[k.minutes.length - 1], i = k.seconds[p[5]] || k.seconds[k.seconds.length - 1], g.resultStr = "".concat(a + "-" + t + "-" + e + " " + r + ":" + u + ":" + i), g.checkArr = [a, t, e, r, u];
                break;

              case "time":
                r = k.hours[p[0]] || k.hours[k.hours.length - 1], u = k.minutes[p[1]] || k.minutes[k.minutes.length - 1], i = k.seconds[p[2]] || k.seconds[k.seconds.length - 1], g.checkArr = [r, u, i], g.resultStr = "".concat(r + ":" + u + ":" + i);
                break;

              case "region":
                c = k.provinces[p[0]], h = k.citys[p[1]], g.hideArea ? (g.checkArr = [c.label, h.label], g.checkValue = [c.value, h.value], g.resultStr = c.label + h.label) : (o = k.areas[p[2]], g.checkArr = [c.label, h.label, o.label], g.checkValue = [c.value, h.value, o.value], g.resultStr = c.label + h.label + o.label);
                break;

              case "selector":
                g.checkArr = k[p[0]] || k[k.length - 1], g.resultStr = k[p[0]].label || k[k.length - 1].label;
                break;
            }

            g.$nextTick(function () {
              g.pickVal = p;
            });
          }
        },
        mounted: function mounted() {
          this.initData();
        }
      };
      t.default = c;
    }).call(this, e("6e42")["default"], e("0de9")["default"]);
  },
  d1c2: function d1c2(a, t, e) {
    "use strict";

    e.r(t);
    var r = e("23dd"),
        s = e("447f");

    for (var n in s) {
      "default" !== n && function (a) {
        e.d(t, a, function () {
          return s[a];
        });
      }(n);
    }

    e("5137");
    var l = e("2877"),
        d = Object(l["a"])(s["default"], r["a"], r["b"], !1, null, null, null);
    t["default"] = d.exports;
  },
  f558: function f558(a, t, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/w-picker/w-picker-create-component', {
  'components/w-picker/w-picker-create-component': function componentsWPickerWPickerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d1c2"));
  }
}, [['components/w-picker/w-picker-create-component']]]);
});
require('components/w-picker/w-picker.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"048b":function(e,n,t){"use strict";t.r(n);var a=t("19bb"),u=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);n["default"]=u.a},"19bb":function(e,n,t){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{}},onLoad:function(){this.loadExecution()},methods:{loadExecution:function(){try{var n=e.getStorageSync("launchFlag");n?1==n?e.switchTab({url:"/pages/tabBar/home/home"}):e.redirectTo({url:"/pages/index/guide"}):(e.setStorage({key:"launchFlag",data:!0,success:function(){console.log(t("存储launchFlag"," at pages\\index\\index.vue:40"))}}),e.redirectTo({url:"/pages/index/guide"}))}catch(a){e.setStorage({key:"launchFlag",data:!0,success:function(){console.log(t("error时存储launchFlag"," at pages\\index\\index.vue:53"))}}),e.redirectTo({url:"/pages/index/guide"})}}}};n.default=a}).call(this,t("6e42")["default"],t("0de9")["default"])},9215:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return u})},d42a:function(e,n,t){"use strict";(function(e){t("590e"),t("921b");a(t("66fd"));var n=a(t("d779"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},d779:function(e,n,t){"use strict";t.r(n);var a=t("9215"),u=t("048b");for(var o in u)"default"!==o&&function(e){t.d(n,e,function(){return u[e]})}(o);var c=t("2877"),r=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=r.exports}},[["d42a","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/index/guide';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/guide.js';

define('pages/index/guide.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/guide"],{"0e9f":function(e,t,n){"use strict";(function(e){n("590e"),n("921b");u(n("66fd"));var t=u(n("de4f"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},4013:function(e,t,n){"use strict";n.r(t);var u=n("820e"),a=n.n(u);for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);t["default"]=a.a},4198:function(e,t,n){},4308:function(e,t,n){"use strict";var u=n("4198"),a=n.n(u);a.a},"820e":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{background:["color1","color2","color3"],autoplay:!1,duration:500,jumpover:"跳过",experience:"立即体验"}},methods:{launchFlag:function(){e.setStorage({key:"launchFlag",data:!0}),e.switchTab({url:"/pages/tabBar/home/home"})}}};t.default=n}).call(this,n("6e42")["default"])},de4f:function(e,t,n){"use strict";n.r(t);var u=n("f230"),a=n("4013");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("4308");var r=n("2877"),c=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},f230:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return a})}},[["0e9f","common/runtime","common/vendor"]]]);
});
require('pages/index/guide.js');
__wxRoute = 'pages/tabBar/home/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/home/home.js';

define('pages/tabBar/home/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/home/home"],{"29cd":function(t,o,n){"use strict";(function(t,e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=a(n("6c91"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t){return u(t)||c(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var o=0,n=new Array(t.length);o<t.length;o++)n[o]=t[o];return n}}var d={data:function(){return{kword:"",showHeader:!0,afterHeaderOpacity:1,headerPosition:"fixed",headerTop:null,statusTop:null,nVueTitle:null,city:"北京",currentSwiper:0,swiperList:[{id:1,title:"业务完善中...",img:"/static/img/1.jpg"},{id:2,title:"业务完善中...",img:"/static/img/2.jpg"},{id:3,title:"业务完善中...",img:"/static/img/3.jpg"}],summsg:{"00":[["2019-05-45","2019-05-45"],[{user:"you",msg:"616516311111111111111111111111111111111111111111111111111111111"},{user:"you",msg:"616516311111111111111111111111111111111111111111111111111111111"}],"00"["2019-05-45"],[{user:"me",msg:"616516"}],"00"]},categoryList:[{id:1,name:"数码",img:"/static/img/category/1.png"},{id:2,name:"运动",img:"/static/img/category/6.png"},{id:3,name:"服装",img:"/static/img/category/8.png"},{id:4,name:"饰品",img:"/static/img/category/3.png"},{id:5,name:"家电",img:"/static/img/category/2.png"},{id:6,name:"宠物",img:"/static/img/category/11.png"},{id:7,img:"/static/img/category/2.png",name:"日用"},{id:8,name:"书籍",img:"/static/img/category/7.png"},{id:9,name:"美容",img:"/static/img/category/9.png"},{id:10,name:"健康",img:"/static/img/category/5.png"}],Promotion:[],productList:[],loadingText:"正在加载..."}},onLaunch:function(){t.setStorage({key:"summsg",data:thid.summsg,success:function(t){console.log(e("页面初始化完成，聊天数据加载"," at pages\\tabBar\\home\\home.vue:219"))}})},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){this.load(),setTimeout(function(){t.stopPullDownRefresh()},1e3)},onReachBottom:function(){var t=this.productList.length;if(t>=1e3)return this.loadingText="到底了",!1;this.load()},onLoad:function(o){var n=this;console.log(e(o," at pages\\tabBar\\home\\home.vue:246")),"mylike"==o.type&&t.navigateTo({url:"../../../goods/goods?pid="+o.pid}),this.nVueTitle=t.getSubNVueById("homeTitleNvue"),this.nVueTitle.onMessage(function(t){}),this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight(),this.amapPlugin=new i.default.AMapWX({key:"7c235a9ac4e25e482614c6b8eac6fd8e"}),this.amapPlugin.getRegeo({success:function(t){n.city=t[0].regeocodeData.addressComponent.city.replace(/市/g,""),n.nVueTitle.postMessage({type:"location",city:n.city})}}),this.Timer(),this.load(),this.loadPromotion()},methods:{tobanner:function(){t.showToast({title:"业务功能完善中，敬请期待",icon:"none"})},load:function(){var o=this;t.request({url:"http://120.79.19.253:10086/Index",data:{type:"new"},success:function(t){console.log(e("$$$$$$$$$$$$$$$$$$$$$$$$",t.data.data," at pages\\tabBar\\home\\home.vue:297")),o.text="request success";var n=t.data.data,i=[{}],a=[],r=!0,c=!1,u=void 0;try{for(var d,g=n[Symbol.iterator]();!(r=(d=g.next()).done);r=!0){var l=d.value,m=/;/;if(m.test(l.pimages)){var f=l.pimages.split(";");a.push(f[0])}else a.push(l.pimages)}}catch(h){c=!0,u=h}finally{try{r||null==g.return||g.return()}finally{if(c)throw u}}for(var l in n)i[l]={goods_id:n[l].pid,img:a[l],name:n[l].pname,price:n[l].price,slogan:n[l].watched};console.log(e(i,"%%%%%%%%%%%%%%%%%%%%%%%%%%%"," at pages\\tabBar\\home\\home.vue:321")),0!==o.productList.length?o.productList=[].concat(s(o.productList),i):o.productList=[].concat(i)}})},loadPromotion:function(){for(var t=new Date,o=t.getFullYear(),n=t.getMonth()+1,e=t.getDate(),i=o+"/"+n+"/"+e+" 23:59:59",a=[{title:"整点秒杀",ad:"整天秒杀专区",img:"/static/img/s1.jpg",countdown:!1},{title:"限时抢购",ad:"每天23点上线",img:"/static/img/s2.jpg",countdown:i}],s=0;s<a.length;s++){var r=a[s];if(r.countdown){var c="00",u="00",d="00",g=new Date,l=new Date(i);if(!(g>=l)){var m=parseInt((l.getTime()-g.getTime())/1e3);c=parseInt(m/3600),u=parseInt(m%3600/60),d=m%60,c=c<10?"0"+c:c,u=u<10?"0"+u:u,d=d<10?"0"+d:d}a[s].countdown={h:c,m:u,s:d}}}this.Promotion=a},Timer:function(){var t=this;setInterval(function(){if(t.Promotion.length>0)for(var o=0;o<t.Promotion.length;o++){var n=t.Promotion[o];n.countdown&&(0==n.countdown.h&&0==n.countdown.m&&0==n.countdown.s||(n.countdown.s>0?(n.countdown.s--,n.countdown.s=n.countdown.s<10?"0"+n.countdown.s:n.countdown.s):n.countdown.m>0?(n.countdown.m--,n.countdown.m=n.countdown.m<10?"0"+n.countdown.m:n.countdown.m,n.countdown.s=59):n.countdown.h>0&&(n.countdown.h--,n.countdown.h=n.countdown.h<10?"0"+n.countdown.h:n.countdown.h,n.countdown.m=59,n.countdown.s=59),t.Promotion[o].countdown=n.countdown))}},1e3)},toMsg:function(){t.navigateTo({url:"../../msg/msg"})},toSearch:function(){t.navigateTo({url:"../../goods/goods-list/goods-list?kword="+this.kword})},toSwiper:function(o){t.showToast({title:o.title,icon:"none"})},toCategory:function(o){t.setStorageSync("catName",o.name),t.navigateTo({url:"../../goods/goods-list/goods-list?codeid="+o.id+"&name="+o.name})},toPromotion:function(o){t.showToast({title:o.title,icon:"none"})},toGoods:function(o){t.navigateTo({url:"../../goods/goods?pid="+o.goods_id})},swiperChange:function(t){this.currentSwiper=t.detail.current}}};o.default=d}).call(this,n("6e42")["default"],n("0de9")["default"])},"60fb":function(t,o,n){},"7fc0":function(t,o,n){"use strict";n.r(o);var e=n("d050"),i=n("a2cd");for(var a in i)"default"!==a&&function(t){n.d(o,t,function(){return i[t]})}(a);n("8695");var s=n("2877"),r=Object(s["a"])(i["default"],e["a"],e["b"],!1,null,null,null);o["default"]=r.exports},8695:function(t,o,n){"use strict";var e=n("60fb"),i=n.n(e);i.a},"92eb":function(t,o,n){"use strict";(function(t){n("590e"),n("921b");e(n("66fd"));var o=e(n("7fc0"));function e(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,n("6e42")["createPage"])},a2cd:function(t,o,n){"use strict";n.r(o);var e=n("29cd"),i=n.n(e);for(var a in e)"default"!==a&&function(t){n.d(o,t,function(){return e[t]})}(a);o["default"]=i.a},d050:function(t,o,n){"use strict";var e=function(){var t=this,o=t.$createElement;t._self._c},i=[];n.d(o,"a",function(){return e}),n.d(o,"b",function(){return i})}},[["92eb","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/home/home.js');
__wxRoute = 'pages/tabBar/category/category';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/category/category.js';

define('pages/tabBar/category/category.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/category/category"],{3537:function(n,i,c){"use strict";var s=function(){var n=this,i=n.$createElement;n._self._c},a=[];c.d(i,"a",function(){return s}),c.d(i,"b",function(){return a})},"5e10":function(n,i,c){"use strict";(function(n){c("590e"),c("921b");s(c("66fd"));var i=s(c("f34e"));function s(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,c("6e42")["createPage"])},6650:function(n,i,c){"use strict";c.r(i);var s=c("9887"),a=c.n(s);for(var o in s)"default"!==o&&function(n){c.d(i,n,function(){return s[n]})}(o);i["default"]=a.a},9887:function(n,i,c){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=a(c("6c91"));function a(n){return n&&n.__esModule?n:{default:n}}var o={data:function(){return{kword:"",showCategoryIndex:0,headerPosition:"fixed",city:"北京",productlist:[{id:"1",listname:"数码产品",codelist:[101,102,103,104,105,106],name:["炫酷电脑","手机一族","相机拍摄","智能穿戴","电脑周边","网络设备"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/0_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/0_8.png"],divstyle:"linear-gradient(45deg, #c4e4ff, #91ccff)"},{id:"2",listname:"运动体育",codelist:[201,202,203,204,205,206],name:["运动器材","户外运动","健身塑形","球类包陪","小众运动","运动鞋"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/1_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/1_8.png"],divstyle:"linear-gradient(45deg, #f4c9ff, #ff9eee)"},{id:"3",listname:"服装服饰",codelist:[301,302,303,304,305,306],name:["运动风格","休闲风格","商务风格","百搭风格","街头风格","简约风格"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/2_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/2_8.png"],divstyle:"#ffd0dc"},{id:"4",listname:"饰品首饰",codelist:[401,402,403,404,405,406],name:["新潮搭配","服饰配饰","首饰手表","珠宝一类","眼睛一族","各种包包"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/3_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/3_8.png"],divstyle:"#ffd0dc"},{id:"5",listname:"家用电器",codelist:[501,502,503,504,505,506],name:["厨卫电器","小家电","环境电器","大家电","温控电气","其他电器"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/4_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/4_8.png"],divstyle:"#ffd0dc"},{id:"6",listname:"宠物用品",codelist:[601,602,603,604,605,606],name:["宠物玩具","宠物零食","喂食器","宠物","宠物药品","宠物之家"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/5_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/5_8.png"],divstyle:"#ffd0dc"},{id:"7",listname:"日用百货",codelist:[701,702,703,704,705,706],name:["文具教具","餐饮用具","厨房用品","床上用品","家居日用","其他日用"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/6_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/6_8.png"],divstyle:"#ffe0cd"},{id:"8",listname:"左图右史",codelist:[801,802,803,804,805,806],name:["国际名著","工具用书","课本教材","科普类书","小说大全","100本必读"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/7_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/7_8.png"],divstyle:"#ffe0cd"},{id:"9",listname:"美容护肤",codelist:[901,902,903,904,905,906],name:["化妆彩妆","护理护肤","口红卖场","美容美颜","香水一类","滋生面膜"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/8_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/8_8.png"],divstyle:"#ffe0cd"},{id:"10",listname:"健康养生",codelist:[1001,1002,1003,1004,1005,1006],name:["计生用品","外用理疗","传统滋补","保健品","养生药品","养生食物"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/9_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/9_8.png"],divstyle:"#ffe0cd"}]}},onPageScroll:function(n){n.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onLoad:function(){var n=this;this.amapPlugin=new s.default.AMapWX({key:"7c235a9ac4e25e482614c6b8eac6fd8e"}),this.amapPlugin.getRegeo({success:function(i){n.city=i[0].regeocodeData.addressComponent.city.replace(/市/g,"")}})},methods:{toMsg:function(){n.navigateTo({url:"../../msg/msg"})},showCategory:function(n){this.showCategoryIndex=n},toCategory:function(i,c){n.setStorageSync("catName",i),n.navigateTo({url:"../../goods/goods-list/goods-list?codelist="+c+"&listname="+i})},toSearch:function(){n.navigateTo({url:"../../goods/goods-list/goods-list?kword="+this.kword})}}};i.default=o}).call(this,c("6e42")["default"])},c8c6:function(n,i,c){},ca52:function(n,i,c){"use strict";var s=c("c8c6"),a=c.n(s);a.a},f34e:function(n,i,c){"use strict";c.r(i);var s=c("3537"),a=c("6650");for(var o in a)"default"!==o&&function(n){c.d(i,n,function(){return a[n]})}(o);c("ca52");var e=c("2877"),u=Object(e["a"])(a["default"],s["a"],s["b"],!1,null,null,null);i["default"]=u.exports}},[["5e10","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/category/category.js');
__wxRoute = 'pages/ali/ali';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ali/ali.js';

define('pages/ali/ali.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ali/ali"],{3370:function(e,t,n){"use strict";n.r(t);var r=n("914f"),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=a.a},"6f81":function(e,t,n){"use strict";(function(e){n("590e"),n("921b");r(n("66fd"));var t=r(n("cdf2"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"914f":function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,r,a,o,u){try{var i=e[o](u),c=i.value}catch(s){return void n(s)}i.done?t(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){u(o,r,a,i,c,"next",e)}function c(e){u(o,r,a,i,c,"throw",e)}i(void 0)})}}var c={data:function(){return{oosArr:[],upImgOos:{aliConfig:{AccessKeySecret:"CbVR0tmpKXqAIEXxavJDqad3lcIIez",OSSAccessKeyId:"LTAIlbkoZl60gNWT",oosDirectory:"userimage",url:"https://simplett-img.oss-cn-beijing.aliyuncs.com/"},notli:!1,count:4,upBgColor:"#E8A400",upIconColor:"#eee",upSvgIconName:"icon-certificate"}}},methods:{uImageTap:function(){this.$refs.uImage.uploadimage(this.upImgOos)},delImgInfo:function(){var t=i(a.default.mark(function t(n){return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:console.log(e("你删除的图片地址为:",n,this.oosArr.splice(n.index,1)," at pages\\ali\\ali.vue:47"));case 1:case"end":return t.stop()}},t,this)}));function n(e){return t.apply(this,arguments)}return n}(),upOosData:function(){var t=i(a.default.mark(function t(n){var o,u,i;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:o=[],u=0,i=n.length;case 2:if(!(u<i)){t.next=15;break}if(t.prev=3,""==n[u].path_server){t.next=7;break}return t.next=7,o.push(n[u].path_server.split(","));case 7:t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](3),console.log(e("上传失败..."," at pages\\ali\\ali.vue:59"));case 12:u++,t.next=2;break;case 15:this.oosArr=o,o.length==this.upImgOos.count&&r.showToast({title:"上传成功",icon:"none"});case 17:case"end":return t.stop()}},t,this,[[3,9]])}));function n(e){return t.apply(this,arguments)}return n}(),getUpImgInfoOos:function(){console.log(e("阿里云转成一维数组:",this.oosArr.join().split(",")," at pages\\ali\\ali.vue:75"))}}};t.default=c}).call(this,n("0de9")["default"],n("6e42")["default"])},cd35:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},cdf2:function(e,t,n){"use strict";n.r(t);var r=n("cd35"),a=n("3370");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var u=n("2877"),i=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=i.exports}},[["6f81","common/runtime","common/vendor"]]]);
});
require('pages/ali/ali.js');
__wxRoute = 'pages/tabBar/cart/cart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/cart/cart.js';

define('pages/tabBar/cart/cart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/cart/cart"],{3173:function(t,s,e){"use strict";var i=e("7126"),o=e.n(i);o.a},"3c2b":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c},o=[];e.d(s,"a",function(){return i}),e.d(s,"b",function(){return o})},"40c5":function(t,s,e){"use strict";(function(t){e("590e"),e("921b");i(e("66fd"));var s=i(e("650f"));function i(t){return t&&t.__esModule?t:{default:t}}t(s.default)}).call(this,e("6e42")["createPage"])},"650f":function(t,s,e){"use strict";e.r(s);var i=e("3c2b"),o=e("f64b");for(var n in o)"default"!==n&&function(t){e.d(s,t,function(){return o[t]})}(n);e("3173");var l=e("2877"),h=Object(l["a"])(o["default"],i["a"],i["b"],!1,null,null,null);s["default"]=h.exports},7126:function(t,s,e){},d175:function(t,s,e){"use strict";(function(t,e){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var o={data:function(){return{sumPrice:"0.00",headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,selectedList:[],isAllselected:!1,goodsList:[],theIndex:null,oldIndex:null,isStop:!1}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onLoad:function(){this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight()},onShow:function(){this.getcartdata()},methods:{getcartdata:function(){var s=this;t.getStorage({key:"shoucanlist",success:function(t){s.goodsList=t.data},fail:function(t){s.goodsList=[]}})},joinGoods:function(t){for(var s=this.goodsList.length,e=!1,o=0;o<s;o++){var n=this.goodsList[o];if(n.id==t.id){this.goodsList[o].number++,e=!0;break}}e||this.goodsList[i].unshift(t)},touchStart:function(t,s){s.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[s.touches[0].pageX,s.touches[0].pageY])},touchMove:function(t,s){var e=this;if(s.touches.length>1)this.isStop=!0;else{var i=s.touches[0].pageX-this.initXY[0],o=s.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(i)<5||(Math.abs(o)>Math.abs(i)?this.isStop=!0:i<0?(this.theIndex=t,this.isStop=!0):i>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout(function(){e.oldIndex=null},150)))}},touchEnd:function(t,s){this.isStop=!1},toGoods:function(s){t.navigateTo({url:"../../goods/goods?pid="+s.id})},toConfirmation:function(){for(var s=[],e=this.goodsList.length,i=0;i<e;i++)this.goodsList[i].selected&&s.push(this.goodsList[i]);s.length<1?t.showToast({title:"请选择商品结算",icon:"none"}):t.setStorage({key:"buylist",data:s,success:function(){t.navigateTo({url:"../../order/confirmation"})}})},deleteGoods:function(s){var i=[],o=!0,n=!1,l=void 0;try{for(var h,d=this.goodsList[Symbol.iterator]();!(o=(h=d.next()).done);o=!0){var u=h.value;u.id==s?console.log(e("删除了id为："+s+"号的商品"," at pages\\tabBar\\cart\\cart.vue:240")):i.push(u)}}catch(c){n=!0,l=c}finally{try{o||null==d.return||d.return()}finally{if(n)throw l}}t.setStorage({key:"shoucanlist",data:i,success:function(t){console.log(e("缓存中删除成功"," at pages\\tabBar\\cart\\cart.vue:249"))},fail:function(s){t.showToast({title:"删除失败",icon:"none"})}}),this.getcartdata(),this.selectedList.splice(this.selectedList.indexOf(s),1),this.sum(),this.oldIndex=null,this.theIndex=null},deleteList:function(){this.selectedList.length;while(this.selectedList.length>0)this.deleteGoods(this.selectedList[0]);this.selectedList=[],this.isAllselected=this.selectedList.length==this.goodsList.length&&this.goodsList.length>0,this.sum()},selected:function(t){this.goodsList[t].selected=!this.goodsList[t].selected;var s=this.selectedList.indexOf(this.goodsList[t].id);s>-1?this.selectedList.splice(s,1):this.selectedList.push(this.goodsList[t].id),this.isAllselected=this.selectedList.length==this.goodsList.length,this.sum()},allSelect:function(){for(var t=this.goodsList.length,s=[],e=0;e<t;e++)this.goodsList[e].selected=!this.isAllselected,s.push(this.goodsList[e].id);this.selectedList=this.isAllselected?[]:s,this.isAllselected=!this.isAllselected&&0!=this.goodsList.length,this.sum()},sub:function(t){this.goodsList[t].number<=1||(this.goodsList[t].number--,this.sum())},add:function(t){this.goodsList[t].number++,this.sum()},sum:function(t,s){this.sumPrice=0;for(var e=this.goodsList.length,i=0;i<e;i++)this.goodsList[i].selected&&(this.sumPrice=t&&i==s?this.sumPrice+t.detail.value*this.goodsList[i].price:this.sumPrice+this.goodsList[i].number*this.goodsList[i].price);this.sumPrice=this.sumPrice.toFixed(2)},discard:function(){}}};s.default=o}).call(this,e("6e42")["default"],e("0de9")["default"])},f64b:function(t,s,e){"use strict";e.r(s);var i=e("d175"),o=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(s,t,function(){return i[t]})}(n);s["default"]=o.a}},[["40c5","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/cart/cart.js');
__wxRoute = 'pages/tabBar/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/user/user.js';

define('pages/tabBar/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/user/user"],{"161b":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"1ee0":function(t,e,n){},"7ede":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{face:"../../../static/img/face.jpg",nickname:"游客1001",signature:"",isfirst:!0,headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,user:{face:"",integral:0,balance:0,envelope:0},orderList:[{text:"待付款",icon:"fukuan"},{text:"待发货",icon:"fahuo"},{text:"待收货",icon:"shouhuo"},{text:"待评价",icon:"pingjia"}],mytoolbarList:[{url:"../../user/keep/keep",text:"我的收藏",img:"/static/img/user/point.png"},{url:"../../user/coupon/coupon",text:"我的关注",img:"/static/img/user/quan.png"},{url:"../../user/address/address",text:"收货地址",img:"/static/img/user/addr.png"}]}},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onLoad:function(){this.myseleif(),this.statusHeight=0,this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight()},onReady:function(){this.myseleif(),t.setStorage({key:"UserInfo",data:!1,success:function(){},fail:function(t){}})},onShow:function(){var e=this;this.myseleif(),t.getStorage({key:"UserInfo",success:function(t){t.data?e.user=t.data:e.isfirst},fail:function(t){}})},methods:{myseleif:function(){var e=this;t.getStorage({key:"face",success:function(t){e.face=t.data[0],console.log(n(e.face.substring(2)," at pages\\tabBar\\user\\user.vue:205"))},fail:function(t){e.face="../../../static/img/face.jpg"}}),t.getStorage({key:"rename",success:function(t){e.nickname=t.data,console.log(n("成功获取rename"+e.nickname," at pages\\tabBar\\user\\user.vue:215"))},fail:function(t){e.nickname="蓝泽邀请你修改昵称"}}),t.getStorage({key:"signature",success:function(t){e.signature=t.data,console.log(n("成功获取signature"+e.signature," at pages\\tabBar\\user\\user.vue:225"))},fail:function(t){e.signature="一路同行，感谢有你"}})},toMsg:function(){t.navigateTo({url:"../../msg/msg"})},toOrderList:function(e){t.setStorageSync("tbIndex",e),t.navigateTo({url:"../../user/order_list/order_list?tbIndex="+e})},toSetting:function(){t.navigateTo({url:"../../user/setting/setting"})},toMyQR:function(){t.navigateTo({url:"../../user/myQR/myQR"})},toLogin:function(){t.showToast({title:"请登录",icon:"none"}),t.navigateTo({url:"../../login/login"}),this.isfirst=!1},isLogin:function(){var e=t.getStorageSync("UserInfo");return!!e},toDeposit:function(){t.navigateTo({url:"../../user/deposit/deposit"})},toPage:function(e){e?t.navigateTo({url:e}):t.showToast({title:"模板未包含此页面",icon:"none"})},undo:function(){t.showToast({title:"业务功能完善中，敬请期待",icon:"none"})}}};e.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},"931f":function(t,e,n){"use strict";n.r(e);var o=n("7ede"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=i.a},"9b4f":function(t,e,n){"use strict";var o=n("1ee0"),i=n.n(o);i.a},be12:function(t,e,n){"use strict";n.r(e);var o=n("161b"),i=n("931f");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("9b4f");var a=n("2877"),u=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},f0bf:function(t,e,n){"use strict";(function(t){n("590e"),n("921b");o(n("66fd"));var e=o(n("be12"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["f0bf","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/user/user.js');
__wxRoute = 'pages/goods/goods-list/goods-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goods/goods-list/goods-list.js';

define('pages/goods/goods-list/goods-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods-list/goods-list"],{"044d":function(t,e,o){"use strict";o.r(e);var s=o("5808"),i=o.n(s);for(var r in s)"default"!==r&&function(t){o.d(e,t,function(){return s[t]})}(r);e["default"]=i.a},"0c51":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},i=[];o.d(e,"a",function(){return s}),o.d(e,"b",function(){return i})},"3eb9":function(t,e,o){},5808:function(t,e,o){"use strict";(function(t,o){function s(t){return a(t)||r(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function a(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{codelist:"",codename:"",goodsList:[],mychange:!0,loadingText:"正在加载...",headerTop:"0px",headerPosition:"fixed",orderbyList:[{text:"销量",selected:!0,orderbyicon:!1,orderby:0},{text:"价格",selected:!1,orderbyicon:["sheng","jiang"],orderby:0},{text:"好评",selected:!1,orderbyicon:!1,orderby:0}],orderby:"sheng"}},onLoad:function(e){console.log(t(e.codelist,e.listname," at pages\\goods\\goods-list\\goods-list.vue:62")),e.codelist?(this.codelist=e.codelist,this.codename=e.listname,this.mychange=1,console.log(t("列表跳转",this.codelist,this.codename," at pages\\goods\\goods-list\\goods-list.vue:67"))):e.codeid?(this.codelist=e.codeid,this.codename=e.name,this.mychange=2,console.log(t("主页跳转",this.codelist,this.codename," at pages\\goods\\goods-list\\goods-list.vue:72"))):e.kword&&(this.kword=e.kword,this.codename=this.kword,this.mychange=3),o.setNavigationBarTitle({title:this.codename}),this.reload()},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){var t=this;setTimeout(function(){t.reload(),o.stopPullDownRefresh()},1e3)},onReachBottom:function(){var t=this.goodsList.length;if(t>=1e3)return this.loadingText="到底了",!1;this.loadingText="正在加载...";this.goodsList[t-1].goods_id;this.reload()},methods:{reload:function(){var e=this;1==this.mychange?o.request({url:"http://120.79.19.253:10086/Search",data:{type:"categories",codelist:this.codelist},success:function(o){console.log(t("$$$$$$$$$$$$$$$$$$$$$$$$",o.data.data," at pages\\goods\\goods-list\\goods-list.vue:132")),e.text="request success";var i=o.data.data,r=[{}],a=[],n=!0,d=!1,l=void 0;try{for(var c,u=i[Symbol.iterator]();!(n=(c=u.next()).done);n=!0){var g=c.value,h=/;/;if(h.test(g.pimages)){var f=g.pimages.split(";");a.push(f[0])}else a.push(g.pimages)}}catch($){d=!0,l=$}finally{try{n||null==u.return||u.return()}finally{if(d)throw l}}for(var g in i)r[g]={goods_id:i[g].pid,img:a[g],name:i[g].pname,price:i[g].price,slogan:i[g].watched};console.log(t(r,"%%%%%%%%%%%%%%%%%%%%%%%%%%%"," at pages\\goods\\goods-list\\goods-list.vue:156")),e.goodsList=[].concat(s(e.goodsList),r)}}):2==this.mychange?o.request({url:"http://120.79.19.253:10086/Search",data:{type:"code",code:this.codelist},success:function(o){console.log(t("$$$$$$$$$$$$$$$$$$$$$$$$",o.data.data," at pages\\goods\\goods-list\\goods-list.vue:168")),e.text="request success";var i=o.data.data,r=[{}],a=[],n=!0,d=!1,l=void 0;try{for(var c,u=i[Symbol.iterator]();!(n=(c=u.next()).done);n=!0){var g=c.value,h=/;/;if(h.test(g.pimages)){var f=g.pimages.split(";");a.push(f[0])}else a.push(g.pimages)}}catch($){d=!0,l=$}finally{try{n||null==u.return||u.return()}finally{if(d)throw l}}for(var g in i)r[g]={goods_id:i[g].pid,img:a[g],name:i[g].pname,price:i[g].price,slogan:i[g].watched};console.log(t(r,"%%%%%%%%%%%%%%%%%%%%%%%%%%%"," at pages\\goods\\goods-list\\goods-list.vue:192")),e.goodsList=[].concat(s(e.goodsList),r)}}):3==this.mychange&&o.request({url:"http://120.79.19.253:10086/Search",data:{type:"category",kw:this.kword},success:function(o){console.log(t("$$$$$$$$$$$$$$$$$$$$$$$$",o.data.data," at pages\\goods\\goods-list\\goods-list.vue:204")),e.text="request success";var i=o.data.data,r=[{}],a=[],n=!0,d=!1,l=void 0;try{for(var c,u=i[Symbol.iterator]();!(n=(c=u.next()).done);n=!0){var g=c.value,h=/;/;if(h.test(g.pimages)){var f=g.pimages.split(";");a.push(f[0])}else a.push(g.pimages)}}catch($){d=!0,l=$}finally{try{n||null==u.return||u.return()}finally{if(d)throw l}}for(var g in i)r[g]={goods_id:i[g].pid,img:a[g],name:i[g].pname,price:i[g].price,slogan:i[g].watched};console.log(t(r,"%%%%%%%%%%%%%%%%%%%%%%%%%%%"," at pages\\goods\\goods-list\\goods-list.vue:228")),e.goodsList=[].concat(s(e.goodsList),r)}}),console.log(t("reload"," at pages\\goods\\goods-list\\goods-list.vue:234"))},toGoods:function(t){o.navigateTo({url:"../goods?pid="+t.goods_id})},select:function(t){this.orderbyList[t].text;if(this.orderbyList[t].orderbyicon){var e=0==this.orderbyList[t].orderby?"升序":"降序";this.orderbyList[t].selected&&(e=0==this.orderbyList[t].orderby?"降序":"升序",this.orderbyList[t].orderby=0==this.orderbyList[t].orderby?1:0),e}this.orderbyList[t].selected=!0;for(var o=this.orderbyList.length,s=0;s<o;s++)s!=t&&(this.orderbyList[s].selected=!1)}}};e.default=n}).call(this,o("0de9")["default"],o("6e42")["default"])},"5a5d":function(t,e,o){"use strict";o.r(e);var s=o("0c51"),i=o("044d");for(var r in i)"default"!==r&&function(t){o.d(e,t,function(){return i[t]})}(r);o("6878");var a=o("2877"),n=Object(a["a"])(i["default"],s["a"],s["b"],!1,null,"bfa49fdc",null);e["default"]=n.exports},6878:function(t,e,o){"use strict";var s=o("3eb9"),i=o.n(s);i.a},"6c26":function(t,e,o){"use strict";(function(t){o("590e"),o("921b");s(o("66fd"));var e=s(o("5a5d"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])}},[["6c26","common/runtime","common/vendor"]]]);
});
require('pages/goods/goods-list/goods-list.js');
__wxRoute = 'pages/goods/goods';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goods/goods.js';

define('pages/goods/goods.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods"],{"0804":function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];s.d(e,"a",function(){return o}),s.d(e,"b",function(){return i})},"26bb":function(t,e,s){"use strict";(function(t){s("590e"),s("921b");o(s("66fd"));var e=o(s("c07c"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,s("6e42")["createPage"])},7337:function(t,e,s){},7724:function(t,e,s){"use strict";s.r(e);var o=s("a250"),i=s.n(o);for(var a in o)"default"!==a&&function(t){s.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},a250:function(t,e,s){"use strict";(function(t,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{details:{},uid:"",pid:"",beforeHeaderzIndex:11,afterHeaderzIndex:10,beforeHeaderOpacity:1,afterHeaderOpacity:0,showBack:!0,swiperList:[],currentSwiper:0,anchorlist:[],selectAnchor:0,serviceClass:"",specClass:"",shareClass:"",goodsData:{id:1,name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",price:"127.00",number:1,service:[],spec:["当面交易","蓝沢担保","线上发货"],comment:{}},selectSpec:null,isKeep:!1,descriptionStr:""}},onLoad:function(e){this.pid=e.pid,console.log(t(this.pid,"(((((((((((((((((((())))))))))))))))))))"," at pages\\goods\\goods.vue:253")),console.log(t(e.pid," at pages\\goods\\goods.vue:259"))},onReady:function(){this.calcAnchor(),this.todetails()},onPageScroll:function(t){this.selectAnchor=t.scrollTop>=this.anchorlist[2].top?2:t.scrollTop>=this.anchorlist[1].top?1:0;var e=375;t.scrollTop=t.scrollTop>e?375:t.scrollTop,this.afterHeaderOpacity=t.scrollTop*(1/e),this.beforeHeaderOpacity=1-this.afterHeaderOpacity,this.beforeHeaderzIndex=t.scrollTop>0?10:11,this.afterHeaderzIndex=t.scrollTop>0?11:10},onReachBottom:function(){},mounted:function(){},methods:{swiperChange:function(t){this.currentSwiper=t.detail.current},toMsg:function(){s.navigateTo({url:"../msg/msg"})},toChat:function(){var e=!0,o=this.uid,i={};s.getStorage({key:"summsg",success:function(e){i=e.data,console.log(t(e.data,"聊天的数据"," at pages\\goods\\goods.vue:306"))},fail:function(a){console.log(t("失败"," at pages\\goods\\goods.vue:309")),i[o]=[[]],i[o][0]=[],i[o][1]=[],i[o][2]="",i[o][0].push("2018-01-01"),i[o][1].push({user:"me",msg:"hello"}),i[o][2]=o,s.setStorage({key:"summsg",data:i,success:function(s){console.log(t("成功"," at pages\\goods\\goods.vue:328")),e=!1}})}}),e&&(void 0==i[o]?(i[o]=[[]],i[o][0]=[],i[o][1]=[],i[o][2]="",i[o][0].push("2019-01-01"),i[o][1].push({user:"me",msg:"hello"}),i[o][2]=o):(i[o][0].push("2019-01-01"),i[o][1].push({user:"me",msg:"hello"}),i[o][2]=o,console.log(t("发送一次"," at pages\\goods\\goods.vue:358"))),s.setStorage({key:"summsg",data:i,success:function(e){var i={};s.getStorage({key:"token",success:function(t){i.token=t.data},fail:function(t){s.showToast({title:"请您登陆之后在进行此操作",icon:"none"})}}),i.ruid=o,i.type="add",i.message="hello!",i.ruid&&i.token&&(s.request({url:"http://120.79.19.253:10086/Chat",data:i,success:function(e){console.log(t(e,"商品详情发起对话"," at pages\\goods\\goods.vue:385")),s.navigateTo({url:"../msg/msg"})}}),console.log(t("消息发送成功过"," at pages\\goods\\goods.vue:392")),console.log(t("发消息函数被触发"," at pages\\goods\\goods.vue:393")))},fail:function(t){s.showToast({title:"联系客服失败，稍后再试",icon:"none"})}}))},todetails:function(){var e=this;console.log(t("请求商品的详细数据"," at pages\\goods\\goods.vue:412")),s.request({url:"http://120.79.19.253:10086/Search",data:{type:"goods",pid:this.pid},success:function(t){if(1==t.data.status){var o=t.data;e.text="request success";o.p_description;var i=o.pid,a=o.pimages,n=o.pname,c=o.status,r=o.uid,u=o.price;o.wcount;e.uid=r,e.goodsData.name=n,e.goodsData.pid=i,e.goodsData.price=u,1==c&&(e.goodsData.service=[{name:"蓝沢担保",description:"此商品官方保证为正品"},{name:"极速退款",description:"此商品享受退货极速退款服务"},{name:"7天退换",description:"此商品享受7天无理由退换服务"}]),e.todetails=o;var l=[],d=/ ;/,g=/;/;if(d.test(a))for(var p in a=a.split(" ;"),a)l.push({id:p+1,img:a[p]});else if(g.test(a))for(var p in a=a.split(";"),a)l.push({id:p+1,img:a[p]});else l.push({id:1,img:a});if(e.swiperList=l,1===e.swiperList.length)e.descriptionStr='<div style="text-align:center; margin-bottom: 50px;"><img width="100%" src="'.concat(e.swiperList[0].img,'"/></div>');else{e.descriptionStr='<div style="text-align:center; margin-bottom: 50px;">';var h=!0,f=!1,m=void 0;try{for(var v,S=e.swiperList[Symbol.iterator]();!(h=(v=S.next()).done);h=!0){p=v.value;e.descriptionStr+='<img width="100%" src="'.concat(p.img,'"/>')}}catch(b){f=!0,m=b}finally{try{h||null==S.return||S.return()}finally{if(f)throw m}}e.descriptionStr+="</div>"}}else s.showToast({title:"商品不存在",position:"center",image:"../../static/img/myfail.png"}),e.swiperList=[{id:1,img:"https://ae01.alicdn.com/kf/HTB1Mj7iTmzqK1RjSZFjq6zlCFXaP.jpg"},{id:2,img:"https://ae01.alicdn.com/kf/HTB1fbseTmzqK1RjSZFLq6An2XXaL.jpg"},{id:3,img:"https://ae01.alicdn.com/kf/HTB1dPUMThnaK1RjSZFtq6zC2VXa0.jpg"},{id:4,img:"https://ae01.alicdn.com/kf/HTB1OHZrTXzqK1RjSZFvq6AB7VXaw.jpg"}]}}),s.request({url:"http://120.79.19.253:10086/Leftmessage",data:{type:"get",pid:this.pid},success:function(s){if(console.log(t(s.data.status,"fghjklkhgfhjhgfhjkhgfjkhgggggggggggggggggggggg"," at pages\\goods\\goods.vue:526")),0==s.data.status)e.goodsData.comment={number:0,userface:"https://simplett-img.oss-cn-beijing.aliyuncs.com/user_image/userimage.jpg",username:"系统提示",content:"此商品的人气还不够哦"};else{var o=s.data.data;o&&(e.goodsData.comment={number:o.length,userface:o[0].image,username:o[0].nickname,content:o[0].message})}}})},share:function(){this.shareClass="show"},hideShare:function(){var t=this;this.shareClass="hide",setTimeout(function(){t.shareClass="none"},150)},keep:function(){this.isKeep=!this.isKeep},joinCart:function(){var e;if(s.getStorage({key:"token",success:function(t){e=t.data}}),e){var o=this.pid,i=this.swiperList[0].img,a=this.goodsData.price,n=this.goodsData.name,c=1,r={id:o,img:i,price:a,name:n,number:c,spec:"",selected:!1},u=[],l="";if(s.getStorage({key:"shoucanlist",success:function(t){l=t.data},fail:function(t){l=!1}}),console.log(t(l,"tttttttttttttttttttttttttttttttttt"," at pages\\goods\\goods.vue:601")),null!==this.selectSpec)if(0==l)r.spec=this.selectSpec,u.push(r),console.log(t("ppppppppppppppppppp",u," at pages\\goods\\goods.vue:606")),s.setStorage({key:"shoucanlist",data:u,success:function(t){s.showToast({title:"已加入购物车"})},fail:function(){s.showToast({title:"储存异常，加入购物车失败"})}});else{u=l;var d=!1,g=!0,p=!1,h=void 0;try{for(var f,m=u[Symbol.iterator]();!(g=(f=m.next()).done);g=!0){var v=f.value;v.id==o&&(d=!0)}}catch(S){p=!0,h=S}finally{try{g||null==m.return||m.return()}finally{if(p)throw h}}console.log(t(d,"ASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",o," at pages\\goods\\goods.vue:629")),d?s.showToast({title:"已存在购物车"}):(r.spec=this.selectSpec,u.push(r),s.setStorage({key:"shoucanlist",data:u,success:function(t){s.showToast({title:"已加入购物车"})},fail:function(t){s.showToast({title:"储存异常，加入购物车失败"})}}))}else s.showToast({title:"请选择交易模式之后再加入购物车",icon:"none"})}else s.showToast({title:"您未登陆或着登陆状态异常",icon:"none"})},addlike:function(){var e=this,o="";s.getStorage({key:"token",success:function(i){o=i.data;var a={token:o,pid:e.pid,type:"production",action:"add"};s.request({url:"http://120.79.19.253:10086/Subscribe",data:a,success:function(o){console.log(t(o.data,"hhhhhhhhhh"," at pages\\goods\\goods.vue:688")),1==o.data.status?(s.showToast({title:"收藏成功"}),e.keep()):s.showToast({title:"失败",icon:"none"})}})},fail:function(){s.showToast({title:"请登陆之后再使用此功能",icon:"none"})}})},buy:function(){var t,e=this;if(s.getStorage({key:"token",success:function(e){t=e.data}}),t){if(null==this.selectSpec)return this.showSpec(function(){e.toConfirmation()});this.toConfirmation()}else s.showToast({title:"您未登陆或着登陆状态异常",icon:"none"})},toRatings:function(){s.navigateTo({url:"ratings/ratings?pid="+this.pid})},toConfirmation:function(){var t=[],e={id:this.goodsData.id,img:this.swiperList[0].img,name:this.goodsData.name,spec:"交易模式:"+this.goodsData.spec[this.selectSpec],price:this.goodsData.price,number:this.goodsData.number};t.push(e),s.setStorage({key:"buylist",data:t,success:function(){s.navigateTo({url:"../order/confirmation"})}})},showComments:function(t){},setSelectSpec:function(t){this.selectSpec=t},sub:function(){this.goodsData.number<=1||(this.goodsData.number=1)},add:function(){this.goodsData.number=1},toAnchor:function(t){this.selectAnchor=t,s.pageScrollTo({scrollTop:this.anchorlist[t].top,duration:200})},calcAnchor:function(){var t=this;this.anchorlist=[{name:"主图",top:0},{name:"评价",top:0},{name:"详情",top:0}];var e=s.createSelectorQuery().select("#comments");e.boundingClientRect(function(e){var o=0;o=plus.navigator.getStatusbarHeight();var i=s.upx2px(100);t.anchorlist[1].top=e.top-i-o,t.anchorlist[2].top=e.bottom-i-o}).exec()},back:function(){s.navigateBack()},showService:function(){console.log(t("show"," at pages\\goods\\goods.vue:827")),this.serviceClass="show"},hideService:function(){var t=this;this.serviceClass="hide",setTimeout(function(){t.serviceClass="none"},200)},showSpec:function(e){console.log(t("show"," at pages\\goods\\goods.vue:839")),this.specClass="show",this.specCallback=e},specCallback:function(){},hideSpec:function(){var t=this;this.specClass="hide",this.selectSpec&&this.specCallback&&this.specCallback(),this.specCallback=!1,setTimeout(function(){t.specClass="none"},200)},discard:function(){}}};e.default=o}).call(this,s("0de9")["default"],s("6e42")["default"])},c07c:function(t,e,s){"use strict";s.r(e);var o=s("0804"),i=s("7724");for(var a in i)"default"!==a&&function(t){s.d(e,t,function(){return i[t]})}(a);s("f284");var n=s("2877"),c=Object(n["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},f284:function(t,e,s){"use strict";var o=s("7337"),i=s.n(o);i.a}},[["26bb","common/runtime","common/vendor"]]]);
});
require('pages/goods/goods.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0044":function(t,e,n){},"2abe":function(t,e,n){"use strict";n.r(e);var o=n("7588"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},7588:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("62f2"));function a(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{email:"",passwd:"",Status:"",isShowOauth:!0,showProvider:{weixin:!0,qq:!0,sinaweibo:!0,xiaomi:!0}}},onShow:function(){},onLoad:function(){this.isShowOauth=!0,this.getProvider()},methods:{oauthLogin:function(e){t.showLoading(),t.login({provider:e,success:function(n){console.log(o("success: "+JSON.stringify(n)," at pages\\login\\login.vue:70")),t.getUserInfo({provider:e,success:function(e){console.log(o("用户信息："+JSON.stringify(e.userInfo)," at pages\\login\\login.vue:75")),t.setStorage({key:"UserInfo",data:{username:e.userInfo.nickName,face:e.userInfo.avatarUrl,signature:"个性签名",integral:0,balance:0,envelope:0},success:function(){t.hideLoading(),t.showToast({title:"登录成功",icon:"success"}),setTimeout(function(){t.navigateBack()},300)}})}})},fail:function(t){console.log(o("fail: "+JSON.stringify(t)," at pages\\login\\login.vue:101"))}})},getProvider:function(){var e=this;t.getProvider({service:"oauth",success:function(t){for(var n=t.provider.length,o=0;o<n;o++)e.showProvider[t.provider[o]]=!0;0==t.provider.length&&(e.isShowOauth=!0)}})},toPage:function(e){t.hideKeyboard(),t.navigateTo({url:e})},doLogin:function(){var e=this;if(t.hideKeyboard(),!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.email))return t.showToast({title:"请填写正确邮箱",icon:"none"}),!1;if(!/^(\w){6,10}$/.test(this.passwd))return t.showToast({title:"密码错误",icon:"none"}),!1;t.showLoading({title:"提交中..."});var n={email:this.email,pwd:(0,i.default)(this.passwd)};t.request({url:"http://120.79.19.253:10086/Login",data:n,success:function(n){if(console.log(o("###################################这是登陆之后的数据",n.data," at pages\\login\\login.vue:156")),e.Status=n.data.status,1===e.Status){var i=n.data.token;t.setStorage({key:"token",data:i,success:function(){t.showToast({title:"登陆成功",position:"center",image:"../../static/img/mysuccess.png"}),t.switchTab({url:"/pages/tabBar/home/home"})},fail:function(){t.showToast({title:"用户数据写入失败，建议重启本应用",position:"center",image:"../../static/img/myfail.png"})}})}else t.showToast({title:"用户名或密码有误",position:"center",image:"../../static/img/myfail.png"});e.text="request success"}})}}};e.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},"9a17":function(t,e,n){"use strict";var o=n("0044"),i=n.n(o);i.a},a839:function(t,e,n){"use strict";(function(t){n("590e"),n("921b");o(n("66fd"));var e=o(n("ed23"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c8df:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},ed23:function(t,e,n){"use strict";n.r(e);var o=n("c8df"),i=n("2abe");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("9a17");var s=n("2877"),u=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports}},[["a839","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/login/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/register.js';

define('pages/login/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/register"],{"03f8":function(t,e,i){"use strict";i.r(e);var n=i("b6e7"),o=i("ca72");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("59c1");var s=i("2877"),u=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},"573a":function(t,e,i){},"59c1":function(t,e,i){"use strict";var n=i("573a"),o=i.n(n);o.a},a3e3:function(t,e,i){"use strict";(function(t){i("590e"),i("921b");n(i("66fd"));var e=n(i("03f8"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},b6e7:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},c9cd:function(t,e,i){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("62f2"));function a(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{email:"",code:"",passwd:"",Status:"",getCodeText:"获取验证码",getCodeBtnColor:"#ffffff",getCodeisWaiting:!1}},onLoad:function(){},methods:{Timer:function(){},getCode:function(){var e=this;if(t.hideKeyboard(),!this.getCodeisWaiting)return/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.email)?void t.request({url:"http://120.79.19.253:10087/M",data:{email:this.email},success:function(i){console.log(n(i.data," at pages\\login\\register.vue:66")),e.text="request success",1==i.data.status&&(e.getCodeText="发送中...",e.getCodeisWaiting=!0,e.getCodeBtnColor="rgba(255,255,255,0.5)",setTimeout(function(){t.showToast({title:"验证码已发送",icon:"none"}),e.setTimer()},1e3))}}):(t.showToast({title:"请填写正确邮箱",icon:"none"}),!1)},setTimer:function(){var t=this,e=60;this.getCodeText="重新获取(60)",this.Timer=setInterval(function(){if(e<=0)return t.getCodeisWaiting=!1,t.getCodeBtnColor="#ffffff",t.getCodeText="获取验证码",void clearInterval(t.Timer);t.getCodeText="重新获取("+e+")",e--},1e3)},doReg:function(){var e=this;if(t.hideKeyboard(),!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.email))return t.showToast({title:"请填写正确邮箱",icon:"none"}),!1;if(!/^\w{6}$/.test(this.code))return t.showToast({title:"验证码不正确",icon:"none"}),!1;if(!/^(\w){6,10}$/.test(this.passwd))return t.showToast({title:"密码不正确",icon:"none"}),!1;t.showLoading({title:"提交中..."});var i={name:"新用户",pwd:(0,o.default)(this.passwd),email:this.email,yzm:this.code};t.request({url:"http://120.79.19.253:10086/Regist",data:i,success:function(i){if(e.text="request success",e.Status=i.data.status,1==e.Status){var n=i.data.token;t.setStorage({key:"token",data:n,success:function(){t.showToast({title:"注册成功",position:"center",image:"../../static/img/mysuccess.png"}),t.switchTab({url:"/pages/tabBar/home/home"})},fail:function(){t.showToast({title:"用户数据写入失败，建议重启本应用",position:"center",image:"../../static/img/myfail.png"})}})}else 2==e.Status?t.showToast({title:"邮箱的验证码出错",position:"center",image:"../../static/img/myfail.png"}):3==e.Status&&t.showToast({title:"邮箱被占用",position:"center",image:"../../static/img/myfail.png"})}})},toLogin:function(){t.hideKeyboard(),t.redirectTo({url:"login"}),t.navigateBack()}}};e.default=s}).call(this,i("6e42")["default"],i("0de9")["default"])},ca72:function(t,e,i){"use strict";i.r(e);var n=i("c9cd"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a}},[["a3e3","common/runtime","common/vendor"]]]);
});
require('pages/login/register.js');
__wxRoute = 'pages/login/resetpasswd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/resetpasswd.js';

define('pages/login/resetpasswd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/resetpasswd"],{"068f":function(t,e,n){"use strict";n.r(e);var o=n("e200"),a=n("bf8b");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("6f10");var i=n("2877"),u=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},"6f10":function(t,e,n){"use strict";var o=n("99a0"),a=n.n(o);a.a},"99a0":function(t,e,n){},bf8b:function(t,e,n){"use strict";n.r(e);var o=n("c1aa"),a=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=a.a},c1aa:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(n("62f2"));function s(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{email:"",passwd1:"",phoneNumber:"",code:"",passwd:"",getCodeText:"获取验证码",getCodeBtnColor:"#ffffff",getCodeisWaiting:!1}},onLoad:function(){},methods:{Timer:function(){},setTimer:function(){var t=this,e=60;this.getCodeText="重新获取(60)",this.Timer=setInterval(function(){if(e<=0)return t.getCodeisWaiting=!1,t.getCodeBtnColor="#ffffff",t.getCodeText="获取验证码",void clearInterval(t.Timer);t.getCodeText="重新获取("+e+")",e--},1e3)},doReset:function(){var e=this;if(t.hideKeyboard(),!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.email))return t.showToast({title:"请填写正确的邮箱号",icon:"none"}),!1;if(!/^\d{6,10}$/.test(this.passwd))return t.showToast({title:"密码格式不正确",icon:"none"}),!1;if(this.passwd!==this.passwd1)return t.showToast({title:"两次密码不一致",icon:"none"}),!1;t.showLoading({title:"提交中..."});var n="";t.getStorage({key:"token",success:function(t){console.log(o(t.data," at pages\\login\\resetpasswd.vue:115")),n=t.data},fail:function(){t.showToast({title:"登陆状态异常，请重新登陆",icon:"none"})}}),console.log(o(n,"我是token"," at pages\\login\\resetpasswd.vue:126"));var s={email:this.email,token:n,type:"pwd",pwd:(0,a.default)(this.passwd1)};t.request({url:"http://120.79.19.253:10086/Mode",data:s,success:function(n){t.hideLoading(),console.log(o(n.data," at pages\\login\\resetpasswd.vue:139")),1==n.data.status?t.showToast({title:"密码修改成功",position:"center",image:"../../static/img/mysuccess.png"}):t.showToast({title:"密码修改失败",position:"center",image:"../../static/img/myfail.png"}),e.text="request success"}})}}};e.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])},da61:function(t,e,n){"use strict";(function(t){n("590e"),n("921b");o(n("66fd"));var e=o(n("068f"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},e200:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})}},[["da61","common/runtime","common/vendor"]]]);
});
require('pages/login/resetpasswd.js');
__wxRoute = 'pages/order/confirmation';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/confirmation.js';

define('pages/order/confirmation.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/confirmation"],{"1a80":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{buylist:[],goodsPrice:0,sumPrice:0,freight:12,note:"",int:1200,deduction:0,recinfo:{id:1,name:"大黑哥",head:"大",tel:"18816881688",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!0}}},onShow:function(){var t=this;e.getStorage({key:"buylist",success:function(e){t.buylist=e.data,t.goodsPrice=0;for(var n=t.buylist.length,o=0;o<n;o++)t.goodsPrice=t.goodsPrice+t.buylist[o].number*t.buylist[o].price;t.deduction=t.int/100,t.sumPrice=t.goodsPrice-t.deduction+t.freight}}),e.getStorage({key:"selectAddress",success:function(n){t.recinfo=n.data,e.removeStorage({key:"selectAddress"})}})},onHide:function(){},onBackPress:function(){this.clearOrder()},filters:{toFixed:function(e){return parseFloat(e).toFixed(2)}},methods:{clearOrder:function(){var t=this;e.removeStorage({key:"buylist",success:function(e){t.buylist=[],console.log(n("remove buylist success"," at pages\\order\\confirmation.vue:175"))}})},toPay:function(){var t=this,o=this.buylist;e.setStorage({key:"buydata",data:o,success:function(e){console.log(n("succress"," at pages\\order\\confirmation.vue:185"))}});for(var i=[],s=[],r=this.buylist.length,u=0;u<r;u++)i.push(this.buylist[u]),s.push(this.buylist[u].id);0!=i.length?(e.showLoading({title:"正在提交订单..."}),setTimeout(function(){e.setStorage({key:"paymentOrder",data:i,success:function(){e.hideLoading(),e.redirectTo({url:"../pay/payment/payment?amount="+t.sumPrice})}})},1e3)):e.showToast({title:"订单信息有误，请重新购买",icon:"none"})},selectAddress:function(){e.navigateTo({url:"../user/address/address?type=select"})}}};t.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},"4da2":function(e,t,n){"use strict";var o=n("f678"),i=n.n(o);i.a},"61d4":function(e,t,n){"use strict";n.r(t);var o=n("1a80"),i=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);t["default"]=i.a},"79fe":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=(e._self._c,e._f("toFixed")(e.goodsPrice)),o=e._f("toFixed")(e.freight),i=e._f("toFixed")(e.sumPrice);e.$mp.data=Object.assign({},{$root:{f0:n,f1:o,f2:i}})},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},f327:function(e,t,n){"use strict";n.r(t);var o=n("79fe"),i=n("61d4");for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);n("4da2");var r=n("2877"),u=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports},f60f:function(e,t,n){"use strict";(function(e){n("590e"),n("921b");o(n("66fd"));var t=o(n("f327"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},f678:function(e,t,n){}},[["f60f","common/runtime","common/vendor"]]]);
});
require('pages/order/confirmation.js');
__wxRoute = 'pages/user/order_list/order_list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/order_list/order_list.js';

define('pages/user/order_list/order_list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/order_list/order_list"],{"0be0":function(t,e,r){"use strict";(function(t){r("590e"),r("921b");n(r("66fd"));var e=n(r("781f"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("6e42")["createPage"])},"156f":function(t,e,r){"use strict";var n=r("c86a"),o=r.n(n);o.a},1659:function(t,e,r){"use strict";(function(t,r){function n(t){return s(t)||i(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function s(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{cartlistdata:[],headerPosition:"fixed",headerTop:"0px",typeText:{unpaid:"等待付款",back:"等待商家发货",unreceived:"商家已发货",received:"等待用户评价",completed:"交易已完成",refunds:"商品退货处理中",cancelled:"订单已取消"},orderType:["全部","待付款","待发货","待收货","待评价","退换货"],orderList:[[],[],[],[],[],[]],list:[],tabbarIndex:0}},onLoad:function(e){console.log(t("option: "+JSON.stringify(e)," at pages\\user\\order_list\\order_list.vue:95"));var r=parseInt(e.tbIndex)+1;this.list=this.orderList[r],this.tabbarIndex=r},onShow:function(){this.getcartdata()},onPageScroll:function(t){},methods:{getcartdata:function(){var t=this;r.getStorage({key:"shoucanlist",success:function(e){for(var r in t.orderList[1]=e.data,t.orderList[1])t.orderList[1][r]["type"]="unpaid",t.orderList[1][r]["goods_id"]=t.orderList[1][r].id,t.orderList[1][r]["payment"]=t.orderList[1][r].price,t.orderList[1][r]["ordersn"]=r;0==t.orderList[0].length?t.orderList[0]=n(t.orderList[1]):t.orderList[0]=[].concat(n(t.orderList[0]),n(t.orderList[1]))},fail:function(e){t.goodsList=[]}}),r.getStorage({key:"lanzelist",success:function(e){for(var r in t.orderList[2]=n(e.data),0==t.orderList[0].length?t.orderList[0]=n(t.orderList[2]):t.orderList[0]=[].concat(n(t.orderList[0]),n(t.orderList[2])),t.orderList[0])t.orderList[0][r].ordersn=r}})},showType:function(t){this.tabbarIndex=t,this.list=this.orderList[t]},showLogistics:function(t){},remindDeliver:function(t){r.showToast({title:"已提醒商家发货"})},cancelOrder:function(e){var n=this;r.showModal({title:"取消订单",content:"确定取消此订单？",success:function(r){r.confirm?(console.log(t("用户点击确定"," at pages\\user\\order_list\\order_list.vue:181")),n.doCancelOrder(e.ordersn)):r.cancel&&console.log(t("用户点击取消"," at pages\\user\\order_list\\order_list.vue:184"))}})},doCancelOrder:function(t){for(var e=this.orderList.length,r=0;r<e;r++){var n=this.orderList[r],o=n.length;if(o>0&&"unpaid"==n[0].type)for(var i=0;i<o;i++)if(this.orderList[r][i].ordersn==t){this.orderList[r][i].type="cancelled";break}}},toPayment:function(t){r.showLoading({title:"正在获取订单..."});var e=[];e.push(t),setTimeout(function(){r.setStorage({key:"paymentOrder",data:e,success:function(){r.hideLoading(),r.navigateTo({url:"../../pay/payment/payment?amount="+t.payment})}})},500)}}};e.default=a}).call(this,r("0de9")["default"],r("6e42")["default"])},7778:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];r.d(e,"a",function(){return n}),r.d(e,"b",function(){return o})},"781f":function(t,e,r){"use strict";r.r(e);var n=r("7778"),o=r("e3f4");for(var i in o)"default"!==i&&function(t){r.d(e,t,function(){return o[t]})}(i);r("156f");var s=r("2877"),a=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=a.exports},c86a:function(t,e,r){},e3f4:function(t,e,r){"use strict";r.r(e);var n=r("1659"),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,function(){return n[t]})}(i);e["default"]=o.a}},[["0be0","common/runtime","common/vendor"]]]);
});
require('pages/user/order_list/order_list.js');
__wxRoute = 'pages/user/setting/revise/Hphoto';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/setting/revise/Hphoto.js';

define('pages/user/setting/revise/Hphoto.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/setting/revise/Hphoto"],{"0010":function(e,t,n){"use strict";n.r(t);var a=n("038a"),o=n("423d");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("f301");var s=n("2877"),c=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports},"038a":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},"2fbd":function(e,t,n){},"423d":function(e,t,n){"use strict";n.r(t);var a=n("74d4"),o=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=o.a},"74d4":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{showface:""}},methods:{chooseImgFromAlbums:function(){e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(t){var a=this;e.previewImage({urls:t.tempFilePaths}),console.log(n(t.tempFilePaths," at pages\\user\\setting\\revise\\Hphoto.vue:43")),e.setStorage({key:"face",data:t.tempFilePaths,success:function(e){a.showface=e.data[0],console.log(n("success"," at pages\\user\\setting\\revise\\Hphoto.vue:49"))}})}})}},onShow:function(){var t=this;e.getStorage({key:"face",success:function(e){t.showface=e.data[0]}})}};t.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},da2f:function(e,t,n){"use strict";(function(e){n("590e"),n("921b");a(n("66fd"));var t=a(n("0010"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},f301:function(e,t,n){"use strict";var a=n("2fbd"),o=n.n(a);o.a}},[["da2f","common/runtime","common/vendor"]]]);
});
require('pages/user/setting/revise/Hphoto.js');
__wxRoute = 'pages/user/setting/revise/rename';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/setting/revise/rename.js';

define('pages/user/setting/revise/rename.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/setting/revise/rename"],{"02ae":function(e,t,n){"use strict";(function(e){n("590e"),n("921b");a(n("66fd"));var t=a(n("9544"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"7eb4":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{nickname:""}},methods:{getdata:function(){var t=this;e.getStorage({key:"rename",success:function(e){t.rename=e.data},fail:function(e){t.rename="蓝泽邀请你修改名字"}})},submit:function(){var t=this,a=this.nickname;e.showModal({content:"是否确认修改?",showCancel:!0,success:function(u){console.log(n(u," at pages\\user\\setting\\revise\\rename.vue:46")),u.confirm?(console.log(n(t.nickname,"ggggggggggggggggggggggg"," at pages\\user\\setting\\revise\\rename.vue:48")),e.setStorage({key:"rename",data:a,success:function(){e.navigateTo({url:"/pages/user/setting/setting"})}})):u.cancel&&console.log(n("用户点击取消"," at pages\\user\\setting\\revise\\rename.vue:60"))}})}},onReady:function(){this.getdata()},onShow:function(){this.getdata()},onLoad:function(){this.getdata()}};t.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},9544:function(e,t,n){"use strict";n.r(t);var a=n("ac52"),u=n("b28a");for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);n("e1d7");var s=n("2877"),c=Object(s["a"])(u["default"],a["a"],a["b"],!1,null,"18432a7c",null);t["default"]=c.exports},ac52:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return u})},b28a:function(e,t,n){"use strict";n.r(t);var a=n("7eb4"),u=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=u.a},e127:function(e,t,n){},e1d7:function(e,t,n){"use strict";var a=n("e127"),u=n.n(a);u.a}},[["02ae","common/runtime","common/vendor"]]]);
});
require('pages/user/setting/revise/rename.js');
__wxRoute = 'pages/user/myQR/myQR';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/myQR/myQR.js';

define('pages/user/myQR/myQR.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/myQR/myQR"],{"0b43":function(e,t,n){"use strict";(function(e){n("590e"),n("921b");o(n("66fd"));var t=o(n("cc45"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"4b0b":function(e,t,n){"use strict";var o=n("b5d3"),c=n.n(o);c.a},b34c:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=function(){return Promise.all([n.e("common/vendor"),n.e("components/tki-qrcode/tki-qrcode")]).then(n.bind(null,"7074"))},i={data:function(){return{ifShow:!0,val:"111",size:200,unit:"px",background:"#ffffff",foreground:"#000000",pdground:"#ff0000",icon:"",iconsize:40,lv:3,onval:!0,loadMake:!0,src:""}},methods:{sliderchange:function(e){this.size=e.detail.value},creatQrcode:function(){var t,n=this;e.getStorage({key:"token",success:function(c){t=c.data,e.request({url:"http://120.79.19.253:10086/Search",data:{token:t,type:"user"},success:function(e){if(console.log(o(e," at pages\\user\\myQR\\myQR.vue:62")),1==e.data.status){var t=e.data.uid,c={type:"user",uid:t};n.val=JSON.stringify(c),n.$refs.qrcode._makeCode()}}})},fail:function(t){e.showToast({title:"请您先登陆",icon:"none"})}})},saveQrcode:function(){this.$refs.qrcode._saveCode()},qrR:function(e){this.src=e},clearQrcode:function(){this.$refs.qrcode._clearCode(),this.val=""},ifQrcode:function(){this.ifShow=!this.ifShow},selectIcon:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){t.icon=e.tempFilePaths[0],setTimeout(function(){t.creatQrcode()},100)}})}},components:{tkiQrcode:c},onLoad:function(){this.creatQrcode()},onReady:function(){this.creatQrcode()}};t.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])},b5d3:function(e,t,n){},cc45:function(e,t,n){"use strict";n.r(t);var o=n("e099"),c=n("e6d3");for(var i in c)"default"!==i&&function(e){n.d(t,e,function(){return c[e]})}(i);n("4b0b");var r=n("2877"),u=Object(r["a"])(c["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports},e099:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c})},e6d3:function(e,t,n){"use strict";n.r(t);var o=n("b34c"),c=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=c.a}},[["0b43","common/runtime","common/vendor"]]]);
});
require('pages/user/myQR/myQR.js');
__wxRoute = 'pages/user/setting/setting';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/setting/setting.js';

define('pages/user/setting/setting.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/setting/setting"],{2269:function(e,t,n){"use strict";n.r(t);var a=n("a8e9"),s=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=s.a},5409:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s})},"5b41":function(e,t,n){"use strict";n.r(t);var a=n("5409"),s=n("2269");for(var i in s)"default"!==i&&function(e){n.d(t,e,function(){return s[e]})}(i);n("9f96");var u=n("2877"),o=Object(u["a"])(s["default"],a["a"],a["b"],!1,null,null,null);t["default"]=o.exports},"746a":function(e,t,n){},"9f96":function(e,t,n){"use strict";var a=n("746a"),s=n.n(a);s.a},a8e9:function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{face:"../../../static/img/face.jpg",nickname:"大黑哥",signature:""}},methods:{showType:function(e){this.tabbarIndex=e,this.list=this.orderList[e]},Hphoto:function(){e.navigateTo({url:"/pages/user/setting/revise/Hphoto"})},rename:function(){e.navigateTo({url:"/pages/user/setting/revise/rename"})},sign:function(){e.navigateTo({url:"/pages/user/setting/revise/signature/signature"})},address:function(){e.navigateTo({url:"/pages/user/address/address"})},repasswd:function(){e.navigateTo({url:"/pages/login/resetpasswd"})},pay:function(){e.navigateTo({url:"/pages/user/setting/revise/pay/pay"})},clearstorage:function(){e.getSavedFileInfo({filePath:"unifile://somefile",success:function(e){console.log(n(e.size," at pages\\user\\setting\\setting.vue:115")),console.log(n(e.createTime," at pages\\user\\setting\\setting.vue:116"))}})},removetoken:function(){e.getStorage({key:"token",success:function(t){var a=t.data;console.log(n(a,"aaaaaaaaaaaaaaaaaaaaaaaaa"," at pages\\user\\setting\\setting.vue:126")),e.request({url:"http://120.79.19.253:10086/Loginout",data:a,success:function(t){console.log(n(t.data,"ppppppppppppppp"," at pages\\user\\setting\\setting.vue:131")),e.clearStorage(),e.navigateTo({url:"../../login/login"})}})},fail:function(t){e.showToast({title:"您还未登录",icon:"none"})}})},onShow:function(){var t=this;e.getStorage({key:"face",success:function(e){t.face=e.data[0],console.log(n(t.face.substring(2)," at pages\\user\\setting\\setting.vue:156"))}}),e.getStorage({key:"rename",success:function(e){t.nickname=e.data,console.log(n("成功获取rename"+t.nickname," at pages\\user\\setting\\setting.vue:166"))},fail:function(e){t.nickname="蓝泽官方邀请你修改昵称"}}),e.getStorage({key:"signature",success:function(e){t.signature=e.data,console.log(n("成功获取signature"+t.signature," at pages\\user\\setting\\setting.vue:175"))},fail:function(e){t.signature="一路相伴，感谢有你"}})}}};t.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},d0e8:function(e,t,n){"use strict";(function(e){n("590e"),n("921b");a(n("66fd"));var t=a(n("5b41"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["d0e8","common/runtime","common/vendor"]]]);
});
require('pages/user/setting/setting.js');
__wxRoute = 'pages/user/setting/revise/Hphoto';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/setting/revise/Hphoto.js';

define('pages/user/setting/revise/Hphoto.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/setting/revise/Hphoto"],{"0010":function(e,t,n){"use strict";n.r(t);var a=n("038a"),o=n("423d");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("f301");var s=n("2877"),c=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports},"038a":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},"2fbd":function(e,t,n){},"423d":function(e,t,n){"use strict";n.r(t);var a=n("74d4"),o=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=o.a},"74d4":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{showface:""}},methods:{chooseImgFromAlbums:function(){e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(t){var a=this;e.previewImage({urls:t.tempFilePaths}),console.log(n(t.tempFilePaths," at pages\\user\\setting\\revise\\Hphoto.vue:43")),e.setStorage({key:"face",data:t.tempFilePaths,success:function(e){a.showface=e.data[0],console.log(n("success"," at pages\\user\\setting\\revise\\Hphoto.vue:49"))}})}})}},onShow:function(){var t=this;e.getStorage({key:"face",success:function(e){t.showface=e.data[0]}})}};t.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},da2f:function(e,t,n){"use strict";(function(e){n("590e"),n("921b");a(n("66fd"));var t=a(n("0010"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},f301:function(e,t,n){"use strict";var a=n("2fbd"),o=n.n(a);o.a}},[["da2f","common/runtime","common/vendor"]]]);
});
require('pages/user/setting/revise/Hphoto.js');
__wxRoute = 'pages/user/setting/revise/rename';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/setting/revise/rename.js';

define('pages/user/setting/revise/rename.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/setting/revise/rename"],{"02ae":function(e,t,n){"use strict";(function(e){n("590e"),n("921b");a(n("66fd"));var t=a(n("9544"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"7eb4":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{nickname:""}},methods:{getdata:function(){var t=this;e.getStorage({key:"rename",success:function(e){t.rename=e.data},fail:function(e){t.rename="蓝泽邀请你修改名字"}})},submit:function(){var t=this,a=this.nickname;e.showModal({content:"是否确认修改?",showCancel:!0,success:function(u){console.log(n(u," at pages\\user\\setting\\revise\\rename.vue:46")),u.confirm?(console.log(n(t.nickname,"ggggggggggggggggggggggg"," at pages\\user\\setting\\revise\\rename.vue:48")),e.setStorage({key:"rename",data:a,success:function(){e.navigateTo({url:"/pages/user/setting/setting"})}})):u.cancel&&console.log(n("用户点击取消"," at pages\\user\\setting\\revise\\rename.vue:60"))}})}},onReady:function(){this.getdata()},onShow:function(){this.getdata()},onLoad:function(){this.getdata()}};t.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},9544:function(e,t,n){"use strict";n.r(t);var a=n("ac52"),u=n("b28a");for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);n("e1d7");var s=n("2877"),c=Object(s["a"])(u["default"],a["a"],a["b"],!1,null,"18432a7c",null);t["default"]=c.exports},ac52:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return u})},b28a:function(e,t,n){"use strict";n.r(t);var a=n("7eb4"),u=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=u.a},e127:function(e,t,n){},e1d7:function(e,t,n){"use strict";var a=n("e127"),u=n.n(a);u.a}},[["02ae","common/runtime","common/vendor"]]]);
});
require('pages/user/setting/revise/rename.js');
__wxRoute = 'pages/user/myQR/myQR';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/myQR/myQR.js';

define('pages/user/myQR/myQR.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/myQR/myQR"],{"0b43":function(e,t,n){"use strict";(function(e){n("590e"),n("921b");o(n("66fd"));var t=o(n("cc45"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"4b0b":function(e,t,n){"use strict";var o=n("b5d3"),c=n.n(o);c.a},b34c:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=function(){return Promise.all([n.e("common/vendor"),n.e("components/tki-qrcode/tki-qrcode")]).then(n.bind(null,"7074"))},i={data:function(){return{ifShow:!0,val:"111",size:200,unit:"px",background:"#ffffff",foreground:"#000000",pdground:"#ff0000",icon:"",iconsize:40,lv:3,onval:!0,loadMake:!0,src:""}},methods:{sliderchange:function(e){this.size=e.detail.value},creatQrcode:function(){var t,n=this;e.getStorage({key:"token",success:function(c){t=c.data,e.request({url:"http://120.79.19.253:10086/Search",data:{token:t,type:"user"},success:function(e){if(console.log(o(e," at pages\\user\\myQR\\myQR.vue:62")),1==e.data.status){var t=e.data.uid,c={type:"user",uid:t};n.val=JSON.stringify(c),n.$refs.qrcode._makeCode()}}})},fail:function(t){e.showToast({title:"请您先登陆",icon:"none"})}})},saveQrcode:function(){this.$refs.qrcode._saveCode()},qrR:function(e){this.src=e},clearQrcode:function(){this.$refs.qrcode._clearCode(),this.val=""},ifQrcode:function(){this.ifShow=!this.ifShow},selectIcon:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){t.icon=e.tempFilePaths[0],setTimeout(function(){t.creatQrcode()},100)}})}},components:{tkiQrcode:c},onLoad:function(){this.creatQrcode()},onReady:function(){this.creatQrcode()}};t.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])},b5d3:function(e,t,n){},cc45:function(e,t,n){"use strict";n.r(t);var o=n("e099"),c=n("e6d3");for(var i in c)"default"!==i&&function(e){n.d(t,e,function(){return c[e]})}(i);n("4b0b");var r=n("2877"),u=Object(r["a"])(c["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports},e099:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c})},e6d3:function(e,t,n){"use strict";n.r(t);var o=n("b34c"),c=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=c.a}},[["0b43","common/runtime","common/vendor"]]]);
});
require('pages/user/myQR/myQR.js');
__wxRoute = 'pages/msg/msg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/msg/msg.js';

define('pages/msg/msg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/msg/msg"],{"367d":function(e,t,s){"use strict";s.r(t);var a=s("baf3"),n=s.n(a);for(var o in a)"default"!==o&&function(e){s.d(t,e,function(){return a[e]})}(o);t["default"]=n.a},"6cf9":function(e,t,s){"use strict";(function(e){s("590e"),s("921b");a(s("66fd"));var t=a(s("9c08"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,s("6e42")["createPage"])},"7b35":function(e,t,s){"use strict";var a=s("a9d2"),n=s.n(a);n.a},"9c08":function(e,t,s){"use strict";s.r(t);var a=s("b327"),n=s("367d");for(var o in n)"default"!==o&&function(e){s.d(t,e,function(){return n[e]})}(o);s("7b35");var u=s("2877"),i=Object(u["a"])(n["default"],a["a"],a["b"],!1,null,null,null);t["default"]=i.exports},a9d2:function(e,t,s){},b327:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},n=[];s.d(t,"a",function(){return a}),s.d(t,"b",function(){return n})},baf3:function(e,t,s){"use strict";(function(e,s){function a(e){return u(e)||o(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function u(e){if(Array.isArray(e)){for(var t=0,s=new Array(e.length);t<e.length;t++)s[t]=e[t];return s}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{SUMMSG:{},chatList:[{uid:1,username:"蓝沢助手",face:"/static/img/im/face/face_1.jpg",time:"13:08",msg:"亲，我们的工作时间是8点到20点",tisNum:1}]}},onPullDownRefresh:function(){setTimeout(function(){e.stopPullDownRefresh()},1e3)},onLoad:function(){this.changedata(),this.getmymsg()},methods:{endgetlist:function(t){var a=[];console.log(s(t," at pages\\msg\\msg.vue:54"));var n=0;for(var o in t)a[n]={},a[n]["uid"]=t[o][2],a[n]["time"]=t[o][0][t[o][0].length-1],a[n]["msg"]=t[o][1][t[o][0].length-1]["msg"],a[n]["tisNum"]=1,a[n]["pace"]="https://simplett-img.oss-cn-beijing.aliyuncs.com/user_image/userimage.jpg",a[n]["username"]="simplett",n++;this.chatList=a,console.log(s(a,"提取出聊天的列表"," at pages\\msg\\msg.vue:68"));var u=function(t){g=a[t].uid,e.request({url:"http://120.79.19.253:10086/Search",data:{uid:g,type:"user"},success:function(e){console.log(s(e.data," at pages\\msg\\msg.vue:79")),a[t]["username"]=e.data.nickname,a[t]["face"]=e.data.image}})};for(var i in a){var g;u(i)}this.chatList={},this.chatList=a,console.log(s(this.chatList,"??????"," at pages\\msg\\msg.vue:87"))},changedata:function(){var t=this;e.getStorage({key:"summsg",success:function(e){t.SUMMSG=e.data,console.log(s(e.data," at pages\\msg\\msg.vue:94")),e.data&&t.endgetlist(e.data)},fail:function(e){console.log(s("失败"," at pages\\msg\\msg.vue:102"))}})},getmymsg:function(){var t=this;setInterval(function(){console.log(s("请求聊天的数据"," at pages\\msg\\msg.vue:108"));var n="";e.getStorage({key:"token",success:function(e){n=e.data}}),n&&e.request({url:"http://120.79.19.253:10086/Chat",data:{token:n,type:"get"},success:function(n){console.log(s(n.data," at pages\\msg\\msg.vue:124"));var o=n.data.data,u={};if(o){console.log(s("收到的聊天消息",o," at pages\\msg\\msg.vue:128")),u=o.reduce(function(e,t){console.log(s(JSON.parse(t.message)," at pages\\msg\\msg.vue:131"));var a=JSON.parse(t.message);return void 0===e[a.suid]?(e[a.suid]=[[]],e[a.suid][0]=[],e[a.suid][1]=[],e[a.suid][2]="",e[a.suid][0].unshift(a.time),e[a.suid][1].unshift({user:"you",msg:a.message}),e[a.suid][2]=a.suid):(e[a.suid][0].unshift(a.time),e[a.suid][1].unshift({user:"you",msg:a.message})),e},{});var i={};for(var g in e.getStorage({key:"summsg",success:function(e){i=e.data}}),u)void 0==i[g]?(i[g]=[[]],console.log(s("@@@@@@@@@@@@@@@@@@@@@@@@@",u[g][0],u[g][1],u[g][2],g," at pages\\msg\\msg.vue:173")),i[g][0]=[],console.log(s("&&&&&&&&&&&&&&&&&&&&&",u[g][0]," at pages\\msg\\msg.vue:175")),i[g][1]=[],i[g][2]="",i[g][0]=a(u[g][0]),i[g][1]=a(u[g][1]),i[g][2]=u[g][2]):(i[g][0]=[].concat(a(i[g][0]),a(u[g][0])),i[g][1]=[].concat(a(i[g][1]),a(u[g][1])),i[g][2]=u[g][2]);console.log(s(i,"111111111111111111111111111111111111111111111111111111111111111111"," at pages\\msg\\msg.vue:187"));var c=[];for(var r in i)c.push({uid:i[r][2],time:i[r][0],msg:i[r][1]}),console.log(s(r," at pages\\msg\\msg.vue:192"));console.log(s(c,"显示在聊天列表里面的数据"," at pages\\msg\\msg.vue:194")),e.setStorage({key:"summsg",data:i,success:function(e){console.log(s("数据插入成功"," at pages\\msg\\msg.vue:199"))}}),console.log(s(i,"###################这是state.summsg############################"," at pages\\msg\\msg.vue:202")),console.log(s("聊天函数被触发"," at pages\\msg\\msg.vue:203")),t.changedata()}}})},1e3)},toChat:function(t){e.navigateTo({url:"chat/chat?uid="+t.uid+"&name="+t.username+"&youface="+t.face})}}};t.default=i}).call(this,s("6e42")["default"],s("0de9")["default"])}},[["6cf9","common/runtime","common/vendor"]]]);
});
require('pages/msg/msg.js');
__wxRoute = 'pages/msg/chat/chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/msg/chat/chat.js';

define('pages/msg/chat/chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/msg/chat/chat"],{"0769":function(i,t,g){"use strict";var f=function(){var i=this,t=i.$createElement;i._self._c},a=[];g.d(t,"a",function(){return f}),g.d(t,"b",function(){return a})},"63ab":function(i,t,g){"use strict";(function(i,g){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var f={data:function(){return{jli:500,youface:"",myface:"",messgedata:[],uid:"",textMsg:"",scrollAnimation:!1,scrollTop:0,scrollToView:"",msgList:[],msgImgList:[],myuid:0,RECORDER:i.getRecorderManager(),isVoice:!1,voiceTis:"按住 说话",recordTis:"手指上滑 取消发送",recording:!1,willStop:!1,initPoint:{identifier:0,Y:0},recordTimer:null,recordLength:0,AUDIO:i.createInnerAudioContext(),playMsgid:null,VoiceTimer:null,showEmji:"",emojiList:[[{url:"100.gif",alt:"[微笑]"},{url:"101.gif",alt:"[伤心]"},{url:"102.gif",alt:"[美女]"},{url:"103.gif",alt:"[发呆]"},{url:"104.gif",alt:"[墨镜]"},{url:"105.gif",alt:"[哭]"},{url:"106.gif",alt:"[羞]"},{url:"107.gif",alt:"[哑]"},{url:"108.gif",alt:"[睡]"},{url:"109.gif",alt:"[哭]"},{url:"110.gif",alt:"[囧]"},{url:"111.gif",alt:"[怒]"},{url:"112.gif",alt:"[调皮]"},{url:"113.gif",alt:"[笑]"},{url:"114.gif",alt:"[惊讶]"},{url:"115.gif",alt:"[难过]"},{url:"116.gif",alt:"[酷]"},{url:"117.gif",alt:"[汗]"},{url:"118.gif",alt:"[抓狂]"},{url:"119.gif",alt:"[吐]"},{url:"120.gif",alt:"[笑]"},{url:"121.gif",alt:"[快乐]"},{url:"122.gif",alt:"[奇]"},{url:"123.gif",alt:"[傲]"}],[{url:"124.gif",alt:"[饿]"},{url:"125.gif",alt:"[累]"},{url:"126.gif",alt:"[吓]"},{url:"127.gif",alt:"[汗]"},{url:"128.gif",alt:"[高兴]"},{url:"129.gif",alt:"[闲]"},{url:"130.gif",alt:"[努力]"},{url:"131.gif",alt:"[骂]"},{url:"132.gif",alt:"[疑问]"},{url:"133.gif",alt:"[秘密]"},{url:"134.gif",alt:"[乱]"},{url:"135.gif",alt:"[疯]"},{url:"136.gif",alt:"[哀]"},{url:"137.gif",alt:"[鬼]"},{url:"138.gif",alt:"[打击]"},{url:"139.gif",alt:"[bye]"},{url:"140.gif",alt:"[汗]"},{url:"141.gif",alt:"[抠]"},{url:"142.gif",alt:"[鼓掌]"},{url:"143.gif",alt:"[糟糕]"},{url:"144.gif",alt:"[恶搞]"},{url:"145.gif",alt:"[什么]"},{url:"146.gif",alt:"[什么]"},{url:"147.gif",alt:"[累]"}],[{url:"148.gif",alt:"[看]"},{url:"149.gif",alt:"[难过]"},{url:"150.gif",alt:"[难过]"},{url:"151.gif",alt:"[坏]"},{url:"152.gif",alt:"[亲]"},{url:"153.gif",alt:"[吓]"},{url:"154.gif",alt:"[可怜]"},{url:"155.gif",alt:"[刀]"},{url:"156.gif",alt:"[水果]"},{url:"157.gif",alt:"[酒]"},{url:"158.gif",alt:"[篮球]"},{url:"159.gif",alt:"[乒乓]"},{url:"160.gif",alt:"[咖啡]"},{url:"161.gif",alt:"[美食]"},{url:"162.gif",alt:"[动物]"},{url:"163.gif",alt:"[鲜花]"},{url:"164.gif",alt:"[枯]"},{url:"165.gif",alt:"[唇]"},{url:"166.gif",alt:"[爱]"},{url:"167.gif",alt:"[分手]"},{url:"168.gif",alt:"[生日]"},{url:"169.gif",alt:"[电]"},{url:"170.gif",alt:"[炸弹]"},{url:"171.gif",alt:"[刀子]"}],[{url:"172.gif",alt:"[足球]"},{url:"173.gif",alt:"[瓢虫]"},{url:"174.gif",alt:"[翔]"},{url:"175.gif",alt:"[月亮]"},{url:"176.gif",alt:"[太阳]"},{url:"177.gif",alt:"[礼物]"},{url:"178.gif",alt:"[抱抱]"},{url:"179.gif",alt:"[拇指]"},{url:"180.gif",alt:"[贬低]"},{url:"181.gif",alt:"[握手]"},{url:"182.gif",alt:"[剪刀手]"},{url:"183.gif",alt:"[抱拳]"},{url:"184.gif",alt:"[勾引]"},{url:"185.gif",alt:"[拳头]"},{url:"186.gif",alt:"[小拇指]"},{url:"187.gif",alt:"[拇指八]"},{url:"188.gif",alt:"[食指]"},{url:"189.gif",alt:"[ok]"},{url:"190.gif",alt:"[情侣]"},{url:"191.gif",alt:"[爱心]"},{url:"192.gif",alt:"[蹦哒]"},{url:"193.gif",alt:"[颤抖]"},{url:"194.gif",alt:"[怄气]"},{url:"195.gif",alt:"[跳舞]"}],[{url:"196.gif",alt:"[发呆]"},{url:"197.gif",alt:"[背着]"},{url:"198.gif",alt:"[伸手]"},{url:"199.gif",alt:"[耍帅]"},{url:"200.png",alt:"[微笑]"},{url:"201.png",alt:"[生病]"},{url:"202.png",alt:"[哭泣]"},{url:"203.png",alt:"[吐舌]"},{url:"204.png",alt:"[迷糊]"},{url:"205.png",alt:"[瞪眼]"},{url:"206.png",alt:"[恐怖]"},{url:"207.png",alt:"[忧愁]"},{url:"208.png",alt:"[眨眉]"},{url:"209.png",alt:"[闭眼]"},{url:"210.png",alt:"[鄙视]"},{url:"211.png",alt:"[阴暗]"},{url:"212.png",alt:"[小鬼]"},{url:"213.png",alt:"[礼物]"},{url:"214.png",alt:"[拜佛]"},{url:"215.png",alt:"[力量]"},{url:"216.png",alt:"[金钱]"},{url:"217.png",alt:"[蛋糕]"},{url:"218.png",alt:"[彩带]"},{url:"219.png",alt:"[礼物]"}]],onlineEmoji:{"100.gif":"AbNQgA.gif","101.gif":"AbN3ut.gif","102.gif":"AbNM3d.gif","103.gif":"AbN8DP.gif","104.gif":"AbNljI.gif","105.gif":"AbNtUS.gif","106.gif":"AbNGHf.gif","107.gif":"AbNYE8.gif","108.gif":"AbNaCQ.gif","109.gif":"AbNN4g.gif","110.gif":"AbN0vn.gif","111.gif":"AbNd3j.gif","112.gif":"AbNsbV.gif","113.gif":"AbNwgs.gif","114.gif":"AbNrD0.gif","115.gif":"AbNDuq.gif","116.gif":"AbNg5F.gif","117.gif":"AbN6ET.gif","118.gif":"AbNcUU.gif","119.gif":"AbNRC4.gif","120.gif":"AbNhvR.gif","121.gif":"AbNf29.gif","122.gif":"AbNW8J.gif","123.gif":"AbNob6.gif","124.gif":"AbN5K1.gif","125.gif":"AbNHUO.gif","126.gif":"AbNIDx.gif","127.gif":"AbN7VK.gif","128.gif":"AbNb5D.gif","129.gif":"AbNX2d.gif","130.gif":"AbNLPe.gif","131.gif":"AbNjxA.gif","132.gif":"AbNO8H.gif","133.gif":"AbNxKI.gif","134.gif":"AbNzrt.gif","135.gif":"AbU9Vf.gif","136.gif":"AbUSqP.gif","137.gif":"AbUCa8.gif","138.gif":"AbUkGQ.gif","139.gif":"AbUFPg.gif","140.gif":"AbUPIS.gif","141.gif":"AbUZMn.gif","142.gif":"AbUExs.gif","143.gif":"AbUA2j.gif","144.gif":"AbUMIU.gif","145.gif":"AbUerq.gif","146.gif":"AbUKaT.gif","147.gif":"AbUmq0.gif","148.gif":"AbUuZV.gif","149.gif":"AbUliF.gif","150.gif":"AbU1G4.gif","151.gif":"AbU8z9.gif","152.gif":"AbU3RJ.gif","153.gif":"AbUYs1.gif","154.gif":"AbUJMR.gif","155.gif":"AbUadK.gif","156.gif":"AbUtqx.gif","157.gif":"AbUUZ6.gif","158.gif":"AbUBJe.gif","159.gif":"AbUdIO.gif","160.gif":"AbU0iD.gif","161.gif":"AbUrzd.gif","162.gif":"AbUDRH.gif","163.gif":"AbUyQA.gif","164.gif":"AbUWo8.gif","165.gif":"AbU6sI.gif","166.gif":"AbU2eP.gif","167.gif":"AbUcLt.gif","168.gif":"AbU4Jg.gif","169.gif":"AbURdf.gif","170.gif":"AbUhFS.gif","171.gif":"AbU5WQ.gif","172.gif":"AbULwV.gif","173.gif":"AbUIzj.gif","174.gif":"AbUTQs.gif","175.gif":"AbU7yn.gif","176.gif":"AbUqe0.gif","177.gif":"AbUHLq.gif","178.gif":"AbUOoT.gif","179.gif":"AbUvYF.gif","180.gif":"AbUjFU.gif","181.gif":"AbaSSJ.gif","182.gif":"AbUxW4.gif","183.gif":"AbaCO1.gif","184.gif":"Abapl9.gif","185.gif":"Aba9yR.gif","186.gif":"AbaFw6.gif","187.gif":"Abaiex.gif","188.gif":"AbakTK.gif","189.gif":"AbaZfe.png","190.gif":"AbaEFO.gif","191.gif":"AbaVYD.gif","192.gif":"AbamSH.gif","193.gif":"AbaKOI.gif","194.gif":"Abanld.gif","195.gif":"Abau6A.gif","196.gif":"AbaQmt.gif","197.gif":"Abal0P.gif","198.gif":"AbatpQ.gif","199.gif":"Aba1Tf.gif","200.png":"Aba8k8.png","201.png":"AbaGtS.png","202.png":"AbaJfg.png","203.png":"AbaNlj.png","204.png":"Abawmq.png","205.png":"AbaU6s.png","206.png":"AbaaXn.png","207.png":"Aba000.png","208.png":"AbarkT.png","209.png":"AbastU.png","210.png":"AbaB7V.png","211.png":"Abafn1.png","212.png":"Abacp4.png","213.png":"AbayhF.png","214.png":"Abag1J.png","215.png":"Aba2c9.png","216.png":"AbaRXR.png","217.png":"Aba476.png","218.png":"Abah0x.png","219.png":"Abdg58.png"}}},onLoad:function(t){var f=this,a=t.name;this.uid=t.uid,this.youface=t.youface,this.init(),console.log(g(this.uid,a," at pages\\msg\\chat\\chat.vue:169")),i.setNavigationBarTitle({title:a}),this.getMsgList(),this.AUDIO.onEnded(function(i){f.playMsgid=null}),this.RECORDER.onStart(function(i){f.recordBegin(i)}),this.RECORDER.onStop(function(i){f.recordEnd(i)})},onShow:function(){var i=this;setInterval(function(){i.init()},1e3)},methods:{init:function(){var t=this;i.getStorage({key:"summsg",success:function(i){console.log(g(i.data,"这是聊天列表的消息"," at pages\\msg\\chat\\chat.vue:199")),t.messgedata=i.data[t.uid],console.log(g(t.messgedata,"000000000000000000"," at pages\\msg\\chat\\chat.vue:201"))}}),i.getStorage({key:"face",success:function(i){t.face=i.data[0],console.log(g(t.face.substring(2)," at pages\\msg\\chat\\chat.vue:211"))}}),i.getStorage({key:"face",success:function(i){t.myface=i.data[0],console.log(g(t.face.substring(2)," at pages\\msg\\chat\\chat.vue:220"))},fail:function(i){t.myface="https://simplett-img.oss-cn-beijing.aliyuncs.com/user_image/userimage.jpg",console.log(g("采用了默认的头像"," at pages\\msg\\chat\\chat.vue:224"))}}),this.getMsgList()},getbuttom:function(){i.pageScrollTo({scrollTop:this.jli,duration:300})},getMsgList:function(){var i=this;this.$nextTick(function(){i.scrollTop=i.jli,i.scrollAnimation=!0})},setPicSize:function(t){var g=i.upx2px(350),f=i.upx2px(350);if(t.msg.w>g||t.msg.h>f){var a=t.msg.w/t.msg.h;t.msg.w>t.msg.h?(t.msg.w=g,t.msg.h=t.msg.w/a):(t.msg.h=f,t.msg.w=t.msg.h*a)}return t},screenMsg:function(t){switch(t.uid!=this.myuid&&i.vibrateLong(),t.type){case"text":this.addTextMsg(t);break;case"voice":this.addVoiceMsg(t);break;case"img":this.addImgMsg(t);break}this.$nextTick(function(){this.scrollToView="msg"+t.id})},chooseEmoji:function(){this.showEmji="showEmoji"==this.showEmji?"hideEmoji":"showEmoji"},hideEmoji:function(){this.showEmji="showEmoji"==this.showEmji?"hideEmoji":""},addEmoji:function(i){this.textMsg+=i.alt},sendText:function(){var t=this;if(this.hideEmoji(),this.textMsg){var f="";i.getStorage({key:"token",success:function(a){f=a.data,i.request({url:"http://120.79.19.253:10086/Chat",data:{ruid:t.uid,token:f,type:"add",message:t.textMsg},success:function(f){if(console.log(g(f.data," at pages\\msg\\chat\\chat.vue:314")),1==f.data.status){var a={};i.getStorage({key:"summsg",success:function(i){a=i.data}}),a[t.uid][0].push("2019-01-01"),a[t.uid][1].push({user:"me",msg:t.textMsg}),console.log(g(a,"发送后的消息"," at pages\\msg\\chat\\chat.vue:326")),i.setStorage({key:"summsg",data:a,success:function(i){t.textMsg="",t.init(),t.jli=t.jli+500,console.log(g(t.jli,"9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"," at pages\\msg\\chat\\chat.vue:334")),t.getbuttom()},fail:function(t){i.showToast({title:"数据保存失败",icon:"none"})}})}else i.showToast({title:"消息发送失败",icon:"none"})}})},fail:function(t){i.showToast({title:"请登录之后在发送消息吧",icon:"none"})}})}else i.showToast({title:"不能发送空的内容",icon:"none"})},replaceEmoji:function(i){var t=this,f=i.replace(/\[([^(\]|\[)]*)\]/g,function(i,f){console.log(g("item: "+i," at pages\\msg\\chat\\chat.vue:374"));for(var a=0;a<t.emojiList.length;a++)for(var l=t.emojiList[a],e=0;e<l.length;e++){var s=l[e];if(s.alt==i){var n="https://s2.ax1x.com/2019/04/12/",r='<img src="'+n+t.onlineEmoji[s.url]+'">';return console.log(g("imgstr: "+r," at pages\\msg\\chat\\chat.vue:383")),r}}});return'<div style="display: flex;align-items: center;">'+f+"</div>"},chooseImage:function(){var t=this;this.hideEmoji(),i.chooseImage({sizeType:["original","compressed"],success:function(f){for(var a=function(a){i.getImageInfo({src:f.tempFilePaths[a],success:function(i){console.log(g(i.width," at pages\\msg\\chat\\chat.vue:401")),console.log(g(i.height," at pages\\msg\\chat\\chat.vue:402"));var l={url:f.tempFilePaths[a],w:i.width,h:i.height};t.sendMsg(l,"img")}})},l=0;l<f.tempFilePaths.length;l++)a(l)}})},sendMsg:function(i,t){var g=new Date,f=this.msgList[this.msgList.length-1].id;f++;var a={id:f,uid:0,username:"大黑哥",face:"/static/img/face.jpg",time:g.getHours()+":"+g.getMinutes(),type:t,msg:i};this.screenMsg(a)},addTextMsg:function(i){this.msgList.push(i)},addVoiceMsg:function(i){this.msgList.push(i)},addImgMsg:function(i){i=this.setPicSize(i),this.msgImgList.push(i.msg.url),this.msgList.push(i)},showPic:function(t){i.previewImage({indicator:"none",current:t.msg.url,urls:this.msgImgList})},playVoice:function(i){this.playMsgid=i.id,this.AUDIO.src=i.msg.url,console.log(g("msg.msg.url: "+i.msg.url," at pages\\msg\\chat\\chat.vue:454")),this.AUDIO.play()},voiceBegin:function(i){i.touches.length>1||(this.initPoint.Y=i.touches[0].clientY,this.initPoint.identifier=i.touches[0].identifier,this.RECORDER.start({format:"aac"}))},recordBegin:function(i){var t=this;this.recording=!0,this.voiceTis="松开 结束",this.recordLength=0,this.recordTimer=setInterval(function(){t.recordLength++},1e3)},voiceCancel:function(){this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.willStop=!0,this.RECORDER.stop()},voiceIng:function(t){if(this.recording){var g=t.touches[0];this.initPoint.Y-g.clientY>=i.upx2px(100)?(this.willStop=!0,this.recordTis="松开手指 取消发送"):(this.willStop=!1,this.recordTis="手指上滑 取消发送")}},voiceEnd:function(i){this.recording&&(this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.RECORDER.stop())},recordEnd:function(i){if(clearInterval(this.recordTimer),this.willStop)console.log(g("取消发送录音"," at pages\\msg\\chat\\chat.vue:533"));else{plus.io.resolveLocalFileSystemURL(i.tempFilePath,function(i){i.file(function(i){console.log(g(i.size+"--"+i.name," at pages\\msg\\chat\\chat.vue:516"))})},function(i){alert("Resolve file URL failed: "+i.message)}),console.log(g("e: "+JSON.stringify(i)," at pages\\msg\\chat\\chat.vue:521"));var t={length:0,url:i.tempFilePath},f=parseInt(this.recordLength/60),a=this.recordLength%60;f=f<10?"0"+f:f,a=a<10?"0"+a:a,t.length=f+":"+a,this.sendMsg(t,"voice")}this.willStop=!1},switchVoice:function(){this.hideEmoji(),this.isVoice=!this.isVoice},discard:function(){}}};t.default=f}).call(this,g("6e42")["default"],g("0de9")["default"])},"84d5":function(i,t,g){"use strict";(function(i){g("590e"),g("921b");f(g("66fd"));var t=f(g("f69b"));function f(i){return i&&i.__esModule?i:{default:i}}i(t.default)}).call(this,g("6e42")["createPage"])},"9d44":function(i,t,g){},c0f7:function(i,t,g){"use strict";g.r(t);var f=g("63ab"),a=g.n(f);for(var l in f)"default"!==l&&function(i){g.d(t,i,function(){return f[i]})}(l);t["default"]=a.a},f341:function(i,t,g){"use strict";var f=g("9d44"),a=g.n(f);a.a},f69b:function(i,t,g){"use strict";g.r(t);var f=g("0769"),a=g("c0f7");for(var l in a)"default"!==l&&function(i){g.d(t,i,function(){return a[i]})}(l);g("f341");var e=g("2877"),s=Object(e["a"])(a["default"],f["a"],f["b"],!1,null,null,null);t["default"]=s.exports}},[["84d5","common/runtime","common/vendor"]]]);
});
require('pages/msg/chat/chat.js');
__wxRoute = 'pages/user/coupon/coupon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/coupon/coupon.js';

define('pages/user/coupon/coupon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/coupon/coupon"],{"0972":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{couponValidList:[{id:1,title:"新用户立减10元",termStart:"2019-09-23",termEnd:"2019-10-23",ticket:"10",criteria:"无门槛使用"},{id:2,title:"蓝沢全场5元",termStart:"2019-09-23",termEnd:"2019-10-23",ticket:"100",criteria:"完成发布之后使用"},{id:3,title:"全场立减10元",termStart:"2019-09-23",termEnd:"2019-10-23",ticket:"10",criteria:"无门槛"},{id:4,title:"蓝沢VIP立减50元",termStart:"2019-09-23",termEnd:"2019-10-23",ticket:"50",criteria:"VIP满1000使用"}],couponinvalidList:[{id:1,title:"蓝沢10元优惠券",termStart:"2019-08-23",termEnd:"2019-09-23",ticket:"10",criteria:"满50使用"},{id:2,title:"蓝沢家电100元",termStart:"2019-08-23",termEnd:"2019-09-23",ticket:"100",criteria:"满500使用"},{id:3,title:"全场立减10元",termStart:"2019-08-23",termEnd:"2019-09-23",ticket:"10",criteria:"无门槛"},{id:4,title:"全场立减50元",termStart:"2019-08-23",termEnd:"2019-09-23",ticket:"50",criteria:"VIP满1000使用"}],headerTop:0,typeClass:"valid",subState:"",theIndex:null,oldIndex:null,isStop:!1}},onPageScroll:function(t){},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onLoad:function(){},methods:{switchType:function(e){var i=this;this.typeClass!=e&&(t.pageScrollTo({scrollTop:0,duration:0}),this.typeClass=e,this.subState=""==this.typeClass?"":"show"+e,setTimeout(function(){i.oldIndex=null,i.theIndex=null,i.subState="valid"==i.typeClass?"":i.subState},200))},touchStart:function(t,e){e.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[e.touches[0].pageX,e.touches[0].pageY])},touchMove:function(t,e){var i=this;if(e.touches.length>1)this.isStop=!0;else{var n=e.touches[0].pageX-this.initXY[0],o=e.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(n)<5||(Math.abs(o)>Math.abs(n)?this.isStop=!0:n<0?(this.theIndex=t,this.isStop=!0):n>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout(function(){i.oldIndex=null},150)))}},touchEnd:function(t,e){this.isStop=!1},deleteCoupon:function(t,e){for(var i=e.length,n=0;n<i;n++)if(t==e[n].id){e.splice(n,1);break}this.oldIndex=null,this.theIndex=null},discard:function(){}}};e.default=i}).call(this,i("6e42")["default"])},"216b":function(t,e,i){"use strict";i.r(e);var n=i("0972"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=o.a},"75d5":function(t,e,i){"use strict";(function(t){i("590e"),i("921b");n(i("66fd"));var e=n(i("d532"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},"79ab":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},"830e":function(t,e,i){},d532:function(t,e,i){"use strict";i.r(e);var n=i("79ab"),o=i("216b");for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);i("f7f9");var r=i("2877"),u=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},f7f9:function(t,e,i){"use strict";var n=i("830e"),o=i.n(n);o.a}},[["75d5","common/runtime","common/vendor"]]]);
});
require('pages/user/coupon/coupon.js');
__wxRoute = 'pages/user/keep/keep';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/keep/keep.js';

define('pages/user/keep/keep.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/keep/keep"],{"15ab":function(t,e,s){"use strict";s.r(e);var n=s("3c8d"),i=s("75c0");for(var o in i)"default"!==o&&function(t){s.d(e,t,function(){return i[t]})}(o);s("effb");var a=s("2877"),u=Object(a["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},"3c8d":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];s.d(e,"a",function(){return n}),s.d(e,"b",function(){return i})},"516b":function(t,e,s){},"75c0":function(t,e,s){"use strict";s.r(e);var n=s("bf2a"),i=s.n(n);for(var o in n)"default"!==o&&function(t){s.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},b706:function(t,e,s){"use strict";(function(t){s("590e"),s("921b");n(s("66fd"));var e=n(s("15ab"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,s("6e42")["createPage"])},bf2a:function(t,e,s){"use strict";(function(t,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{goodsList:[{sp_images:"https://img14.360buyimg.com/n7/s600x600_jfs/t1/59141/5/9072/153303/5d6690d9Ea8a24391/b2d424722149a8ff.jpg!cc_230x230.jpg",sp_name:"HUAWEI WATCH GT运动版 黑色 华为手表 (两周续航+户外运动手表+实时心率+高清彩屏+",sp_pid:2828,number:1,selected:!1}],shopList:[{id:1,name:"冰鲜专卖店",img:"/static/img/shop/1.jpg"},{id:2,name:"果蔬天下",img:"/static/img/shop/2.jpg"},{id:3,name:"办公耗材用品店",img:"/static/img/shop/3.jpg"},{id:4,name:"天天看好书",img:"/static/img/shop/4.jpg"}],headerTop:0,typeClass:"goods",subState:"",theIndex:null,oldIndex:null,isStop:!1}},onPageScroll:function(t){},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onLoad:function(){this.getlike()},onShow:function(){this.getlike()},methods:{toGoods:function(e){console.log(s(e," at pages\\user\\keep\\keep.vue:137")),t.reLaunch({url:"../../goods/goods?pid="+e})},changemylike:function(){var e,s=this;t.getStorage({key:"mylike",success:function(t){e=t.data,s.goodsList=e},fail:function(t){e=[{sp_images:"https://img14.360buyimg.com/n7/s600x600_jfs/t1/59141/5/9072/153303/5d6690d9Ea8a24391/b2d424722149a8ff.jpg!cc_230x230.jpg",sp_name:"HUAWEI WATCH GT运动版 黑色 华为手表 (两周续航+户外运动手表+实时心率+高清彩屏+",sp_pid:2828,number:1,selected:!1}],s.goodsList=e}})},getlike:function(){var e=this,n="";if(t.getStorage({key:"token",success:function(t){n=t.data}}),n){var i={token:n,type:"production",action:"get"};t.request({url:"http://120.79.19.253:10086/Subscribe",data:i,success:function(n){if(console.log(s(n.data,"hhhhhhhhhh"," at pages\\user\\keep\\keep.vue:180")),1==n.data.status){var i=n.data.sp_data,o=[],a=!0,u=!1,l=void 0;try{for(var c,h=i[Symbol.iterator]();!(a=(c=h.next()).done);a=!0){var d=c.value;d["number"]=1,d["selected"]=!1,o.push(d.sp_images)}}catch(p){u=!0,l=p}finally{try{a||null==h.return||h.return()}finally{if(u)throw l}}for(var r=0;r<o.length;r++){var f=/;/;f.test(o[r])&&(o[r]=o[r].split(";")[0])}for(var d in i)i[d].sp_images=o[d];console.log(s(i," at pages\\user\\keep\\keep.vue:202")),t.setStorage({key:"mylike",data:i,success:function(s){t.showToast({title:"成功"}),e.changemylike()}})}}})}else t.showToast({title:"请登陆之后再使用此功能"})},switchType:function(e){var s=this;this.typeClass!=e&&(t.pageScrollTo({scrollTop:0,duration:0}),this.typeClass=e,this.subState=""==this.typeClass?"":"show"+e,setTimeout(function(){s.oldIndex=null,s.theIndex=null,s.subState="goods"==s.typeClass?"":s.subState},200))},touchStart:function(t,e){e.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[e.touches[0].pageX,e.touches[0].pageY])},touchMove:function(t,e){var s=this;if(e.touches.length>1)this.isStop=!0;else{var n=e.touches[0].pageX-this.initXY[0],i=e.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(n)<5||(Math.abs(i)>Math.abs(n)?this.isStop=!0:n<0?(this.theIndex=t,this.isStop=!0):n>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout(function(){s.oldIndex=null},150)))}},touchEnd:function(t,e){this.isStop=!1},deleteCoupon:function(e,n){for(var i=this,o=n.length,a=0;a<o;a++)if(e==n[a].sp_pid){n.splice(a,1);break}t.setStorage({key:"mylike",data:n,success:function(t){console.log(s("成功"," at pages\\user\\keep\\keep.vue:304")),i.changemylike()}}),this.oldIndex=null,this.theIndex=null},discard:function(){}}};e.default=n}).call(this,s("6e42")["default"],s("0de9")["default"])},effb:function(t,e,s){"use strict";var n=s("516b"),i=s.n(n);i.a}},[["b706","common/runtime","common/vendor"]]]);
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
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pay/payment/payment"],{"0555":function(e,t,a){"use strict";var n=a("c08d"),o=a.n(n);o.a},3340:function(e,t,a){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{amount:0,orderName:"",paytype:"alipay"}},onLoad:function(t){var a=this;this.amount=parseFloat(t.amount).toFixed(2),e.getStorage({key:"paymentOrder",success:function(t){t.data.length>1?a.orderName="多商品合并支付":a.orderName=t.data[0].name,e.removeStorage({key:"paymentOrder"})}})},methods:{doDeposit:function(){var t,n=this;e.showLoading({title:"支付中..."}),e.getStorage({key:"buydata",success:function(n){t=n.data;var o,u=[];for(var s in t)t[s]["type"]="back",t[s]["goods_id"]=t[s].id,t[s]["payment"]=t[s].price,t[s]["ordersn"]=s;console.log(a(t,"8888888888888888888888888888"," at pages\\pay\\payment\\payment.vue:101")),e.setStorage({key:"lanzelist",data:t,success:function(e){console.log(a("成功"," at pages\\pay\\payment\\payment.vue:106"))},fail:function(e){console.log(a("失败"," at pages\\pay\\payment\\payment.vue:109"))}}),e.getStorage({key:"shoucanlist",success:function(t){o=t.data;var n=[];if(0!==u.length){for(var s=0;s<u.length;s++){var r=u[s];n.push(r.goods_id)}for(var c=[],i=0;i<n.length;i++)for(var d=0;d<o.length;d++)o[d]["goods_id"]==n[i]&&c.push(o[d]);e.setStorage({key:"shoucanlist",data:c,success:function(e){console.log(a("成功"," at pages\\pay\\payment\\payment.vue:139"))}})}}})}}),setTimeout(function(){e.hideLoading(),e.showToast({title:"支付成功"}),setTimeout(function(){e.redirectTo({url:"../../pay/success/success?amount="+n.amount})},300)},700)}}};t.default=n}).call(this,a("6e42")["default"],a("0de9")["default"])},7630:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.paytype="alipay"},e.e1=function(t){e.paytype="wxpay"})},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},8052:function(e,t,a){"use strict";(function(e){a("590e"),a("921b");n(a("66fd"));var t=n(a("ef60"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},c08d:function(e,t,a){},daa3:function(e,t,a){"use strict";a.r(t);var n=a("3340"),o=a.n(n);for(var u in n)"default"!==u&&function(e){a.d(t,e,function(){return n[e]})}(u);t["default"]=o.a},ef60:function(e,t,a){"use strict";a.r(t);var n=a("7630"),o=a("daa3");for(var u in o)"default"!==u&&function(e){a.d(t,e,function(){return o[e]})}(u);a("0555");var s=a("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=r.exports}},[["8052","common/runtime","common/vendor"]]]);
});
require('pages/pay/payment/payment.js');
__wxRoute = 'pages/pay/success/success';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pay/success/success.js';

define('pages/pay/success/success.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pay/success/success"],{"2a18":function(t,e,n){"use strict";n.r(e);var u=n("41e7"),a=n("e486");for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);n("3c79");var o=n("2877"),r=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=r.exports},"3c79":function(t,e,n){"use strict";var u=n("dfed"),a=n.n(u);a.a},"41e7":function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},"8cc5":function(t,e,n){"use strict";(function(t){n("590e"),n("921b");u(n("66fd"));var e=u(n("2a18"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},dfed:function(t,e,n){},e486:function(t,e,n){"use strict";n.r(e);var u=n("eb5c"),a=n.n(u);for(var c in u)"default"!==c&&function(t){n.d(e,t,function(){return u[t]})}(c);e["default"]=a.a},eb5c:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{amount:0}},onLoad:function(t){this.amount=parseFloat(t.amount).toFixed(2)},methods:{toUser:function(){t.switchTab({url:"/pages/tabBar/user/user"})}}};e.default=n}).call(this,n("6e42")["default"])}},[["8cc5","common/runtime","common/vendor"]]]);
});
require('pages/pay/success/success.js');
__wxRoute = 'pages/goods/ratings/ratings';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goods/ratings/ratings.js';

define('pages/goods/ratings/ratings.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/ratings/ratings"],{1621:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{pid:"",labelList:[{name:"全部",number:1,type:"all"}],labelIndex:0,ratingsList:[],videoDirection:0,showFullscreenBtn:!0,showPlayBtn:!0,isPlayVideo:!0,videoSrc:""}},onLoad:function(t){this.pid=t.pid,this.getmsg()},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onReachBottom:function(){},methods:{getmsg:function(){var e=this;t.request({url:"http://120.79.19.253:10086/Leftmessage",data:{type:"get",pid:this.pid},success:function(t){if(console.log(n(t.data.status,"fghjklkhgfhjhgfhjkhgfjkhgggggggggggggggggggggg"," at pages\\goods\\ratings\\ratings.vue:141")),0==t.data.status)e.ratingsList.push({id:0,username:"系统",face:"/static/img/face.jpg",date:"00-00-00",spec:"规格: 常规",grade:"secondary",first:{content:"系统默认好评",img:[],video:[]}});else{var a=t.data.data,i=!0,s=!1,o=void 0;try{for(var r,u=a[Symbol.iterator]();!(i=(r=u.next()).done);i=!0){var c=r.value;e.ratingsList.push({id:c.uid,username:c.nickname,face:c.image,date:c.time,spec:"规格: 常规",grade:"secondary",first:{content:c.message,img:[],video:[]}})}}catch(f){s=!0,o=f}finally{try{i||null==u.return||u.return()}finally{if(s)throw o}}}}})},loadRatings:function(e){this.labelIndex=e,t.showToast({title:"切换评论列表"})},showBigImg:function(e,n){t.previewImage({current:e,urls:n})}}};e.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},"1f1b":function(t,e,n){"use strict";n.r(e);var a=n("1621"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=i.a},40136:function(t,e,n){},"4b6c":function(t,e,n){"use strict";var a=n("40136"),i=n.n(a);i.a},7747:function(t,e,n){"use strict";n.r(e);var a=n("8f4f"),i=n("1f1b");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("4b6c");var o=n("2877"),r=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},"7b91":function(t,e,n){"use strict";(function(t){n("590e"),n("921b");a(n("66fd"));var e=a(n("7747"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"8f4f":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})}},[["7b91","common/runtime","common/vendor"]]]);
});
require('pages/goods/ratings/ratings.js');
__wxRoute = 'pages/ali/select/select';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ali/select/select.js';

define('pages/ali/select/select.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ali/select/select"],{"0a5a":function(e,l,a){"use strict";a.r(l);var t=a("abba"),u=a.n(t);for(var n in t)"default"!==n&&function(e){a.d(l,e,function(){return t[e]})}(n);l["default"]=u.a},2252:function(e,l,a){"use strict";(function(e){a("590e"),a("921b");t(a("66fd"));var l=t(a("9258"));function t(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"7cd6":function(e,l,a){"use strict";var t=a("9881"),u=a.n(t);u.a},9258:function(e,l,a){"use strict";a.r(l);var t=a("fce1"),u=a("0a5a");for(var n in u)"default"!==n&&function(e){a.d(l,e,function(){return u[e]})}(n);a("7cd6");var i=a("2877"),s=Object(i["a"])(u["default"],t["a"],t["b"],!1,null,"5b902270",null);l["default"]=s.exports},9881:function(e,l,a){},abba:function(e,l,a){"use strict";(function(e,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=function(){return Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(a.bind(null,"d1c2"))},n={data:function(){return{codelistid:0,index:0,array:[],items:[{value:"0",name:"全新 "},{value:"1",name:"99新",checked:"true"},{value:"2",name:"9成新"},{value:"3",name:"8成新"},{value:"4",name:"7成新"}],current:0,mypname:"",selectList:[{label:"101",value:"炫酷电脑"},{label:"102",value:"手机一族"},{label:"103",value:"相机拍摄"},{label:"104",value:"智能穿戴"},{label:"105",value:"电脑周边"},{label:"106",value:"网络设备"}],price:"",p_description:"",fontcount:"0",productlist:[[{label:"101",value:"炫酷电脑"},{label:"102",value:"手机一族"},{label:"103",value:"相机拍摄"},{label:"104",value:"智能穿戴"},{label:"105",value:"电脑周边"},{label:"106",value:"网络设备"}],[{label:"201",value:"运动器材"},{label:"202",value:"户外运动"},{label:"203",value:"健身塑形"},{label:"204",value:"球类包陪"},{label:"205",value:"小众运动"},{label:"206",value:"运动鞋"}],[{label:"301",value:"运动风格"},{label:"302",value:"休闲风格"},{label:"303",value:"商务风格"},{label:"304",value:"百搭风格"},{label:"305",value:"街头风格"},{label:"306",value:"简约风格"}],[{label:"401",value:"新潮搭配"},{label:"402",value:"服饰配饰"},{label:"403",value:"首饰手表"},{label:"404",value:"珠宝一类"},{label:"405",value:"眼睛一族"},{label:"406",value:"各种包包"}],[{label:"501",value:"厨卫电器"},{label:"502",value:"小家电"},{label:"503",value:"环境电器"},{label:"504",value:"大家电"},{label:"505",value:"温控电气"},{label:"506",value:"其他电器"}],[{label:"601",value:"宠物玩具"},{label:"602",value:"宠物零食"},{label:"603",value:"喂食器"},{label:"604",value:"宠物"},{label:"605",value:"宠物药品"},{label:"606",value:"宠物之家"}],[{label:"701",value:"文具教具"},{label:"702",value:"餐饮用具"},{label:"703",value:"厨房用品"},{label:"704",value:"床上用品"},{label:"705",value:"家居日用"},{label:"706",value:"其他日用"}],[{label:"801",value:"国际名著"},{label:"802",value:"工具用书"},{label:"803",value:"课本教材"},{label:"804",value:"科普类书"},{label:"805",value:"小说大全"},{label:"806",value:"本必读"}],[{label:"901",value:"化妆彩妆"},{label:"902",value:"护理护肤"},{label:"903",value:"口红卖场"},{label:"904",value:"美容美颜"},{label:"905",value:"香水一类"},{label:"906",value:"滋生面膜"}],[{label:"1001",value:"计生用品"},{label:"1002",value:"外用理疗"},{label:"1003",value:"传统滋补"},{label:"1004",value:"保健品"},{label:"1005",value:"养生药品"},{label:"1006",value:"养生食物"}]],myheightSvg:{height:""},headerTop:null,statusTop:null,headerPosition:"fixed",showHeader:!0}},components:{wPicker:u},onLoad:function(l){console.log(e(l.selectid,"55555555555555"," at pages\\ali\\select\\select.vue:313"));var a=l.selectid-1;this.codelistid=l.selectid,console.log(e(a,"ididididididididididididdi"," at pages\\ali\\select\\select.vue:316")),this.getselect(a)},onShow:function(){console.log(e("Onshow"," at pages\\ali\\select\\select.vue:321"))},methods:{savemydata:function(){var l=100*this.codelistid+this.index,a=this.mypname;console.log(e(a,l," at pages\\ali\\select\\select.vue:333")),l&&t.setStorage({key:"codelist",data:l,success:function(u){console.log(e("存入数据codelist",l," at pages\\ali\\select\\select.vue:340")),a&&t.setStorage({key:"pname",data:a,success:function(l){console.log(e("存入数据pname",a," at pages\\ali\\select\\select.vue:347")),t.navigateBack({delta:1})}})}})},radioChange:function(e){for(var l=0;l<this.items.length;l++)if(this.items[l].value===e.target.value){this.current=l;break}},bindPickerChange:function(l){console.log(e("picker发送选择改变，携带值为",l.target.value," at pages\\ali\\select\\select.vue:368")),this.index=l.target.value},getselect:function(l){console.log(e(l,"111111111111111111111111111111111"," at pages\\ali\\select\\select.vue:372"));var a=this.productlist[l];console.log(e(a,"22222222222222222222222222222222222222"," at pages\\ali\\select\\select.vue:374")),this.selectList=a},onPageScroll:function(e){this.headerPosition=e.scrollTop>=0?"fixed":"absolute",this.headerTop=e.scrollTop>=0?null:0,this.statusTop=e.scrollTop>=0?null:-this.statusHeight+"px"}}};l.default=n}).call(this,a("0de9")["default"],a("6e42")["default"])},fce1:function(e,l,a){"use strict";var t=function(){var e=this,l=e.$createElement;e._self._c},u=[];a.d(l,"a",function(){return t}),a.d(l,"b",function(){return u})}},[["2252","common/runtime","common/vendor"]]]);
});
require('pages/ali/select/select.js');
__wxRoute = 'pages/tabBar/ali/ali';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/ali/ali.js';

define('pages/tabBar/ali/ali.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/ali/ali"],{"591d":function(e,n,a){"use strict";var t=a("8dbd"),i=a.n(t);i.a},"5a4d":function(e,n,a){"use strict";a.r(n);var t=a("fc53"),i=a("dde7");for(var o in i)"default"!==o&&function(e){a.d(n,e,function(){return i[e]})}(o);a("591d");var s=a("2877"),c=Object(s["a"])(i["default"],t["a"],t["b"],!1,null,null,null);n["default"]=c.exports},"5c87":function(e,n,a){"use strict";(function(e){a("590e"),a("921b");t(a("66fd"));var n=t(a("5a4d"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("6e42")["createPage"])},"8dbd":function(e,n,a){},a8a4:function(e,n,a){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(a("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,n,a,t,i,o,s){try{var c=e[o](s),u=c.value}catch(l){return void a(l)}c.done?n(u):Promise.resolve(u).then(t,i)}function c(e){return function(){var n=this,a=arguments;return new Promise(function(t,i){var o=e.apply(n,a);function c(e){s(o,t,i,c,u,"next",e)}function u(e){s(o,t,i,c,u,"throw",e)}c(void 0)})}}var u={data:function(){return{codedata:[{code:1,name:"数码产品",englishname:"DIGTAL PRODUCTS",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0.png"},{code:2,name:"运动体育",englishname:"MOTION SPORTS",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_0.png"},{code:3,name:"服装服饰",englishname:"CLOTHING AND APPAREL",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2.png"},{code:4,name:"饰品首饰",englishname:"JEWELRY AND ORNAMENTS",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3.png"},{code:5,name:"家用电器",englishname:"ELECTIC APPLIANCE",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4.png"},{code:6,name:"宠物用品",englishname:"PET SUPPLIES",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5.png"},{code:7,name:"日用百货",englishname:"ARTICLES OF DAILY USE",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6.png"},{code:8,name:"左图右史",englishname:"BOOL COMPLETE",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7.png"},{code:9,name:"美容护肤",englishname:"COSMETIC SKIN CARE",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8.png"},{code:10,name:"健康养生",englishname:"HEALTH PRESERVATION",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9.png"}],myheightSvg:{height:""},headerTop:null,statusTop:null,headerPosition:"fixed",showHeader:!0,oosArr:[]}},onLaunch:function(){this.getWidth(),console.log(e("初始化的生命周期"," at pages\\tabBar\\ali\\ali.vue:101"))},onLoad:function(){this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight(),this.getWidth(),console.log(e("onload"," at pages\\tabBar\\ali\\ali.vue:112"))},onShow:function(){this.getWidth(),console.log(e("Onshow"," at pages\\tabBar\\ali\\ali.vue:116"))},computed:{getmyheight:function(){var e=t.getSystemInfoSync().windowWidth,n=.22*e+"px";return{height:n}}},methods:{tocodelist:function(n){console.log(e("点击"," at pages\\tabBar\\ali\\ali.vue:128")),t.navigateTo({url:"/pages/ali/codelist/codelist?codeid="+n,animationType:"slide-in-bottom",animationDuration:300}),t.setStorage({key:"codeid",data:n,success:function(){console.log(e("成功选择"," at pages\\tabBar\\ali\\ali.vue:138"))}})},getWidth:function(){var n=t.getSystemInfoSync().windowWidth;console.log(e(n,"mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"," at pages\\tabBar\\ali\\ali.vue:144")),this.myheightSvg.height=.22*n+"px",console.log(e(this.myheightSvg," at pages\\tabBar\\ali\\ali.vue:146"))},onPageScroll:function(e){this.headerPosition=e.scrollTop>=0?"fixed":"absolute",this.headerTop=e.scrollTop>=0?null:0,this.statusTop=e.scrollTop>=0?null:-this.statusHeight+"px"},uImageTap:function(){this.$refs.uImage.uploadimage(this.upImgOos)},delImgInfo:function(){var n=c(i.default.mark(function n(a){return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:console.log(e("你删除的图片地址为:",a,this.oosArr.splice(a.index,1)," at pages\\tabBar\\ali\\ali.vue:159"));case 1:case"end":return n.stop()}},n,this)}));function a(e){return n.apply(this,arguments)}return a}(),upOosData:function(){var n=c(i.default.mark(function n(a){var o,s,c;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:o=[],s=0,c=a.length;case 2:if(!(s<c)){n.next=15;break}if(n.prev=3,""==a[s].path_server){n.next=7;break}return n.next=7,o.push(a[s].path_server.split(","));case 7:n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](3),console.log(e("上传失败..."," at pages\\tabBar\\ali\\ali.vue:171"));case 12:s++,n.next=2;break;case 15:this.oosArr=o,o.length==this.upImgOos.count&&t.showToast({title:"上传成功",icon:"none"});case 17:case"end":return n.stop()}},n,this,[[3,9]])}));function a(e){return n.apply(this,arguments)}return a}(),getUpImgInfoOos:function(){console.log(e("阿里云转成一维数组:",this.oosArr.join().split(",")," at pages\\tabBar\\ali\\ali.vue:187"))}}};n.default=u}).call(this,a("0de9")["default"],a("6e42")["default"])},dde7:function(e,n,a){"use strict";a.r(n);var t=a("a8a4"),i=a.n(t);for(var o in t)"default"!==o&&function(e){a.d(n,e,function(){return t[e]})}(o);n["default"]=i.a},fc53:function(e,n,a){"use strict";var t=function(){var e=this,n=e.$createElement;e._self._c},i=[];a.d(n,"a",function(){return t}),a.d(n,"b",function(){return i})}},[["5c87","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/ali/ali.js');
__wxRoute = 'pages/ali/codelist/codelist';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ali/codelist/codelist.js';

define('pages/ali/codelist/codelist.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ali/codelist/codelist"],{"05e7":function(n,i,s){"use strict";s.r(i);var c=s("fa36"),a=s.n(c);for(var e in c)"default"!==e&&function(n){s.d(i,n,function(){return c[n]})}(e);i["default"]=a.a},"32f0":function(n,i,s){"use strict";(function(n){s("590e"),s("921b");c(s("66fd"));var i=c(s("9388"));function c(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,s("6e42")["createPage"])},"7dee":function(n,i,s){"use strict";var c=s("f2fc"),a=s.n(c);a.a},9388:function(n,i,s){"use strict";s.r(i);var c=s("a965"),a=s("05e7");for(var e in a)"default"!==e&&function(n){s.d(i,n,function(){return a[n]})}(e);s("7dee");var o=s("2877"),t=Object(o["a"])(a["default"],c["a"],c["b"],!1,null,"deee141e",null);i["default"]=t.exports},a965:function(n,i,s){"use strict";var c=function(){var n=this,i=n.$createElement;n._self._c},a=[];s.d(i,"a",function(){return c}),s.d(i,"b",function(){return a})},f2fc:function(n,i,s){},fa36:function(n,i,s){"use strict";(function(n,c){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e(s("a34a"));function e(n){return n&&n.__esModule?n:{default:n}}function o(n,i,s,c,a,e,o){try{var t=n[e](o),u=t.value}catch(l){return void s(l)}t.done?i(u):Promise.resolve(u).then(c,a)}function t(n){return function(){var i=this,s=arguments;return new Promise(function(c,a){var e=n.apply(i,s);function t(n){o(e,c,a,t,u,"next",n)}function u(n){o(e,c,a,t,u,"throw",n)}t(void 0)})}}var u={data:function(){return{mystatus:!1,upload:!1,images:"",selectid:"",price:"",p_description:"",fontcount:"0",productlist:[{codelist:[101,102,103,104,105,106],name:["炫酷电脑","手机一族","相机拍摄","智能穿戴","电脑周边","网络设备"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/0_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/0_8.png"],divstyle:"linear-gradient(45deg, #c4e4ff, #91ccff)"},{codelist:[201,202,203,204,205,206],name:["运动器材","户外运动","健身塑形","球类包陪","小众运动","运动鞋"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/1_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/1_8.png"],divstyle:"linear-gradient(45deg, #f4c9ff, #ff9eee)"},{codelist:[301,302,303,304,305,306],name:["运动风格","休闲风格","商务风格","百搭风格","街头风格","简约风格"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/2_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/2_8.png"],divstyle:"#ffd0dc"},{codelist:[401,402,403,404,405,406],name:["新潮搭配","服饰配饰","首饰手表","珠宝一类","眼睛一族","各种包包"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/3_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/3_8.png"],divstyle:"#ffd0dc"},{codelist:[501,502,503,504,505,506],name:["厨卫电器","小家电","环境电器","大家电","温控电气","其他电器"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/4_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/4_8.png"],divstyle:"#ffd0dc"},{codelist:[601,602,603,604,605,606],name:["宠物玩具","宠物零食","喂食器","宠物","宠物药品","宠物之家"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/5_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/5_8.png"],divstyle:"#ffd0dc"},{codelist:[701,702,703,704,705,706],name:["文具教具","餐饮用具","厨房用品","床上用品","家居日用","其他日用"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/6_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/6_8.png"],divstyle:"#ffe0cd"},{codelist:[801,802,803,804,805,806],name:["国际名著","工具用书","课本教材","科普类书","小说大全","100本必读"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/7_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/7_8.png"],divstyle:"#ffe0cd"},{codelist:[901,902,903,904,905,906],name:["化妆彩妆","护理护肤","口红卖场","美容美颜","香水一类","滋生面膜"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/8_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/8_8.png"],divstyle:"#ffe0cd"},{codelist:[1001,1002,1003,1004,1005,1006],name:["计生用品","外用理疗","传统滋补","保健品","养生药品","养生食物"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/9_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/9_8.png"],divstyle:"#ffe0cd"}],myheightSvg:{height:""},headerTop:null,statusTop:null,headerPosition:"fixed",showHeader:!0,oosArr:[],upImgOos:{aliConfig:{AccessKeySecret:"CbVR0tmpKXqAIEXxavJDqad3lcIIez",OSSAccessKeyId:"LTAIlbkoZl60gNWT",oosDirectory:"userimage",url:"https://simplett-img.oss-cn-beijing.aliyuncs.com/"},notli:!1,count:20,upBgColor:"#E8A400",upIconColor:"#eee",upSvgIconName:"icon-certificate"}}},onLoad:function(i){console.log(n(i.codeid," at pages\\ali\\codelist\\codelist.vue:341")),this.selectid=i.codeid},onShow:function(){console.log(n("Onshow"," at pages\\ali\\codelist\\codelist.vue:346"))},watch:{p_description:function(){var n=this.p_description.length;this.fontcount=n}},methods:{uploadimg:function(){this.uImageTap(),this.upload=!0},getlocaldata:function(){var i,s=this;(console.log(n(this.upload,this.mystatus,"这是发布的状态"," at pages\\ali\\codelist\\codelist.vue:361")),this.upload&&this.mystatus)?(c.showLoading({title:"加载中",icon:"loa",mask:!0}),this.uImageTap(),c.getStorage({key:"pname",success:function(a){var e;i=a.data,c.getStorage({key:"token",success:function(a){var o;e=a.data,s.getUpImgInfoOos(),c.getStorage({key:"codelist",success:function(a){o=a.data;var t=s.price,u=s.images,l=s.p_description,g="云南昆明",p=1;if(t)if(u)if(l){var h={name:i,price:t,cid:o,address:g,images:u,description:l,type:p,token:e};c.request({url:"http://120.79.19.253:10086/Release",data:h,success:function(i){console.log(n(i.data," at pages\\ali\\codelist\\codelist.vue:400")),1==i.data.status?(c.hideLoading(),c.removeStorage({key:"pname",success:function(i){console.log(n("success"," at pages\\ali\\codelist\\codelist.vue:407"))}}),c.removeStorage({key:"codelist",success:function(i){console.log(n("success"," at pages\\ali\\codelist\\codelist.vue:413"))}}),c.showToast({title:"发布成功,已进入审核队列",icon:"none"}),setTimeout(function(){c.switchTab({url:"/pages/tabBar/home/home"})},2e3)):(c.hideLoading(),c.showToast({title:"你的账号已过期，请登陆",icon:"none"}))}})}else c.showToast({title:"请输入商品的描述",icon:"none"}),c.hideLoading();else c.showToast({title:"请重新上传图片",icon:"none"}),c.hideLoading();else c.showToast({title:"请输入价格",icon:"none"}),c.hideLoading()},fail:function(n){c.hideLoading(),c.navigateTo({url:"../select/select?selectid="+s.selectid})}})},fail:function(n){c.hideLoading(),c.showToast({title:"请您先登陆"})}})},fail:function(){c.navigateTo({url:"../select/select?selectid="+s.selectid})}})):c.showToast({title:"请您先上传图片再进行发布",icon:"none"})},toselect:function(){c.navigateTo({url:"/pages/ali/select/select?selectid="+this.selectid})},onPageScroll:function(n){this.headerPosition=n.scrollTop>=0?"fixed":"absolute",this.headerTop=n.scrollTop>=0?null:0,this.statusTop=n.scrollTop>=0?null:-this.statusHeight+"px"},uImageTap:function(){this.$refs.uImage.uploadimage(this.upImgOos)},delImgInfo:function(){var i=t(a.default.mark(function i(s){return a.default.wrap(function(i){while(1)switch(i.prev=i.next){case 0:console.log(n("你删除的图片地址为:",s,this.oosArr.splice(s.index,1)," at pages\\ali\\codelist\\codelist.vue:506"));case 1:case"end":return i.stop()}},i,this)}));function s(n){return i.apply(this,arguments)}return s}(),upOosData:function(){var i=t(a.default.mark(function i(s){var e,o,t;return a.default.wrap(function(i){while(1)switch(i.prev=i.next){case 0:e=[],o=0,t=s.length;case 2:if(!(o<t)){i.next=15;break}if(i.prev=3,""==s[o].path_server){i.next=7;break}return i.next=7,e.push(s[o].path_server.split(","));case 7:i.next=12;break;case 9:i.prev=9,i.t0=i["catch"](3),console.log(n("上传失败..."," at pages\\ali\\codelist\\codelist.vue:518"));case 12:o++,i.next=2;break;case 15:this.oosArr=e,e.length==this.upImgOos.count&&(c.showToast({title:"上传成功",icon:"none"}),this.upload=!0),0!==s.length&&(this.mystatus=!0);case 18:case"end":return i.stop()}},i,this,[[3,9]])}));function s(n){return i.apply(this,arguments)}return s}(),getUpImgInfoOos:function(){console.log(n(this.oosArr," at pages\\ali\\codelist\\codelist.vue:539")),console.log(n("阿里云转成一维数组:",this.oosArr.join().split(",")," at pages\\ali\\codelist\\codelist.vue:540")),this.images=this.oosArr.join().split(",").join(";"),console.log(n(this.images," at pages\\ali\\codelist\\codelist.vue:542"))}}};i.default=u}).call(this,s("0de9")["default"],s("6e42")["default"])}},[["32f0","common/runtime","common/vendor"]]]);
});
require('pages/ali/codelist/codelist.js');
__wxRoute = 'pages/tabBar/ali/ali';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/ali/ali.js';

define('pages/tabBar/ali/ali.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/ali/ali"],{"591d":function(e,n,a){"use strict";var t=a("8dbd"),i=a.n(t);i.a},"5a4d":function(e,n,a){"use strict";a.r(n);var t=a("fc53"),i=a("dde7");for(var o in i)"default"!==o&&function(e){a.d(n,e,function(){return i[e]})}(o);a("591d");var s=a("2877"),c=Object(s["a"])(i["default"],t["a"],t["b"],!1,null,null,null);n["default"]=c.exports},"5c87":function(e,n,a){"use strict";(function(e){a("590e"),a("921b");t(a("66fd"));var n=t(a("5a4d"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("6e42")["createPage"])},"8dbd":function(e,n,a){},a8a4:function(e,n,a){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(a("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,n,a,t,i,o,s){try{var c=e[o](s),u=c.value}catch(l){return void a(l)}c.done?n(u):Promise.resolve(u).then(t,i)}function c(e){return function(){var n=this,a=arguments;return new Promise(function(t,i){var o=e.apply(n,a);function c(e){s(o,t,i,c,u,"next",e)}function u(e){s(o,t,i,c,u,"throw",e)}c(void 0)})}}var u={data:function(){return{codedata:[{code:1,name:"数码产品",englishname:"DIGTAL PRODUCTS",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0.png"},{code:2,name:"运动体育",englishname:"MOTION SPORTS",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_0.png"},{code:3,name:"服装服饰",englishname:"CLOTHING AND APPAREL",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2.png"},{code:4,name:"饰品首饰",englishname:"JEWELRY AND ORNAMENTS",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3.png"},{code:5,name:"家用电器",englishname:"ELECTIC APPLIANCE",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4.png"},{code:6,name:"宠物用品",englishname:"PET SUPPLIES",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5.png"},{code:7,name:"日用百货",englishname:"ARTICLES OF DAILY USE",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6.png"},{code:8,name:"左图右史",englishname:"BOOL COMPLETE",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7.png"},{code:9,name:"美容护肤",englishname:"COSMETIC SKIN CARE",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8.png"},{code:10,name:"健康养生",englishname:"HEALTH PRESERVATION",image_url:"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9.png"}],myheightSvg:{height:""},headerTop:null,statusTop:null,headerPosition:"fixed",showHeader:!0,oosArr:[]}},onLaunch:function(){this.getWidth(),console.log(e("初始化的生命周期"," at pages\\tabBar\\ali\\ali.vue:101"))},onLoad:function(){this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight(),this.getWidth(),console.log(e("onload"," at pages\\tabBar\\ali\\ali.vue:112"))},onShow:function(){this.getWidth(),console.log(e("Onshow"," at pages\\tabBar\\ali\\ali.vue:116"))},computed:{getmyheight:function(){var e=t.getSystemInfoSync().windowWidth,n=.22*e+"px";return{height:n}}},methods:{tocodelist:function(n){console.log(e("点击"," at pages\\tabBar\\ali\\ali.vue:128")),t.navigateTo({url:"/pages/ali/codelist/codelist?codeid="+n,animationType:"slide-in-bottom",animationDuration:300}),t.setStorage({key:"codeid",data:n,success:function(){console.log(e("成功选择"," at pages\\tabBar\\ali\\ali.vue:138"))}})},getWidth:function(){var n=t.getSystemInfoSync().windowWidth;console.log(e(n,"mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"," at pages\\tabBar\\ali\\ali.vue:144")),this.myheightSvg.height=.22*n+"px",console.log(e(this.myheightSvg," at pages\\tabBar\\ali\\ali.vue:146"))},onPageScroll:function(e){this.headerPosition=e.scrollTop>=0?"fixed":"absolute",this.headerTop=e.scrollTop>=0?null:0,this.statusTop=e.scrollTop>=0?null:-this.statusHeight+"px"},uImageTap:function(){this.$refs.uImage.uploadimage(this.upImgOos)},delImgInfo:function(){var n=c(i.default.mark(function n(a){return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:console.log(e("你删除的图片地址为:",a,this.oosArr.splice(a.index,1)," at pages\\tabBar\\ali\\ali.vue:159"));case 1:case"end":return n.stop()}},n,this)}));function a(e){return n.apply(this,arguments)}return a}(),upOosData:function(){var n=c(i.default.mark(function n(a){var o,s,c;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:o=[],s=0,c=a.length;case 2:if(!(s<c)){n.next=15;break}if(n.prev=3,""==a[s].path_server){n.next=7;break}return n.next=7,o.push(a[s].path_server.split(","));case 7:n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](3),console.log(e("上传失败..."," at pages\\tabBar\\ali\\ali.vue:171"));case 12:s++,n.next=2;break;case 15:this.oosArr=o,o.length==this.upImgOos.count&&t.showToast({title:"上传成功",icon:"none"});case 17:case"end":return n.stop()}},n,this,[[3,9]])}));function a(e){return n.apply(this,arguments)}return a}(),getUpImgInfoOos:function(){console.log(e("阿里云转成一维数组:",this.oosArr.join().split(",")," at pages\\tabBar\\ali\\ali.vue:187"))}}};n.default=u}).call(this,a("0de9")["default"],a("6e42")["default"])},dde7:function(e,n,a){"use strict";a.r(n);var t=a("a8a4"),i=a.n(t);for(var o in t)"default"!==o&&function(e){a.d(n,e,function(){return t[e]})}(o);n["default"]=i.a},fc53:function(e,n,a){"use strict";var t=function(){var e=this,n=e.$createElement;e._self._c},i=[];a.d(n,"a",function(){return t}),a.d(n,"b",function(){return i})}},[["5c87","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/ali/ali.js');
__wxRoute = 'pages/ali/codelist/codelist';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ali/codelist/codelist.js';

define('pages/ali/codelist/codelist.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ali/codelist/codelist"],{"05e7":function(n,i,s){"use strict";s.r(i);var c=s("fa36"),a=s.n(c);for(var e in c)"default"!==e&&function(n){s.d(i,n,function(){return c[n]})}(e);i["default"]=a.a},"32f0":function(n,i,s){"use strict";(function(n){s("590e"),s("921b");c(s("66fd"));var i=c(s("9388"));function c(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,s("6e42")["createPage"])},"7dee":function(n,i,s){"use strict";var c=s("f2fc"),a=s.n(c);a.a},9388:function(n,i,s){"use strict";s.r(i);var c=s("a965"),a=s("05e7");for(var e in a)"default"!==e&&function(n){s.d(i,n,function(){return a[n]})}(e);s("7dee");var o=s("2877"),t=Object(o["a"])(a["default"],c["a"],c["b"],!1,null,"deee141e",null);i["default"]=t.exports},a965:function(n,i,s){"use strict";var c=function(){var n=this,i=n.$createElement;n._self._c},a=[];s.d(i,"a",function(){return c}),s.d(i,"b",function(){return a})},f2fc:function(n,i,s){},fa36:function(n,i,s){"use strict";(function(n,c){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e(s("a34a"));function e(n){return n&&n.__esModule?n:{default:n}}function o(n,i,s,c,a,e,o){try{var t=n[e](o),u=t.value}catch(l){return void s(l)}t.done?i(u):Promise.resolve(u).then(c,a)}function t(n){return function(){var i=this,s=arguments;return new Promise(function(c,a){var e=n.apply(i,s);function t(n){o(e,c,a,t,u,"next",n)}function u(n){o(e,c,a,t,u,"throw",n)}t(void 0)})}}var u={data:function(){return{mystatus:!1,upload:!1,images:"",selectid:"",price:"",p_description:"",fontcount:"0",productlist:[{codelist:[101,102,103,104,105,106],name:["炫酷电脑","手机一族","相机拍摄","智能穿戴","电脑周边","网络设备"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/0_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/0_8.png"],divstyle:"linear-gradient(45deg, #c4e4ff, #91ccff)"},{codelist:[201,202,203,204,205,206],name:["运动器材","户外运动","健身塑形","球类包陪","小众运动","运动鞋"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/1_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/1_8.png"],divstyle:"linear-gradient(45deg, #f4c9ff, #ff9eee)"},{codelist:[301,302,303,304,305,306],name:["运动风格","休闲风格","商务风格","百搭风格","街头风格","简约风格"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/2_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/2_8.png"],divstyle:"#ffd0dc"},{codelist:[401,402,403,404,405,406],name:["新潮搭配","服饰配饰","首饰手表","珠宝一类","眼睛一族","各种包包"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/3_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/3_8.png"],divstyle:"#ffd0dc"},{codelist:[501,502,503,504,505,506],name:["厨卫电器","小家电","环境电器","大家电","温控电气","其他电器"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/4_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/4_8.png"],divstyle:"#ffd0dc"},{codelist:[601,602,603,604,605,606],name:["宠物玩具","宠物零食","喂食器","宠物","宠物药品","宠物之家"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/5_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/5_8.png"],divstyle:"#ffd0dc"},{codelist:[701,702,703,704,705,706],name:["文具教具","餐饮用具","厨房用品","床上用品","家居日用","其他日用"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/6_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/6_8.png"],divstyle:"#ffe0cd"},{codelist:[801,802,803,804,805,806],name:["国际名著","工具用书","课本教材","科普类书","小说大全","100本必读"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/7_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/7_8.png"],divstyle:"#ffe0cd"},{codelist:[901,902,903,904,905,906],name:["化妆彩妆","护理护肤","口红卖场","美容美颜","香水一类","滋生面膜"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/8_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/8_8.png"],divstyle:"#ffe0cd"},{codelist:[1001,1002,1003,1004,1005,1006],name:["计生用品","外用理疗","传统滋补","保健品","养生药品","养生食物"],imgurl:["http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_0.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_1.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_2.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_3.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_4.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_5.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_6.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/9_7.png","http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/9_8.png"],divstyle:"#ffe0cd"}],myheightSvg:{height:""},headerTop:null,statusTop:null,headerPosition:"fixed",showHeader:!0,oosArr:[],upImgOos:{aliConfig:{AccessKeySecret:"CbVR0tmpKXqAIEXxavJDqad3lcIIez",OSSAccessKeyId:"LTAIlbkoZl60gNWT",oosDirectory:"userimage",url:"https://simplett-img.oss-cn-beijing.aliyuncs.com/"},notli:!1,count:20,upBgColor:"#E8A400",upIconColor:"#eee",upSvgIconName:"icon-certificate"}}},onLoad:function(i){console.log(n(i.codeid," at pages\\ali\\codelist\\codelist.vue:341")),this.selectid=i.codeid},onShow:function(){console.log(n("Onshow"," at pages\\ali\\codelist\\codelist.vue:346"))},watch:{p_description:function(){var n=this.p_description.length;this.fontcount=n}},methods:{uploadimg:function(){this.uImageTap(),this.upload=!0},getlocaldata:function(){var i,s=this;(console.log(n(this.upload,this.mystatus,"这是发布的状态"," at pages\\ali\\codelist\\codelist.vue:361")),this.upload&&this.mystatus)?(c.showLoading({title:"加载中",icon:"loa",mask:!0}),this.uImageTap(),c.getStorage({key:"pname",success:function(a){var e;i=a.data,c.getStorage({key:"token",success:function(a){var o;e=a.data,s.getUpImgInfoOos(),c.getStorage({key:"codelist",success:function(a){o=a.data;var t=s.price,u=s.images,l=s.p_description,g="云南昆明",p=1;if(t)if(u)if(l){var h={name:i,price:t,cid:o,address:g,images:u,description:l,type:p,token:e};c.request({url:"http://120.79.19.253:10086/Release",data:h,success:function(i){console.log(n(i.data," at pages\\ali\\codelist\\codelist.vue:400")),1==i.data.status?(c.hideLoading(),c.removeStorage({key:"pname",success:function(i){console.log(n("success"," at pages\\ali\\codelist\\codelist.vue:407"))}}),c.removeStorage({key:"codelist",success:function(i){console.log(n("success"," at pages\\ali\\codelist\\codelist.vue:413"))}}),c.showToast({title:"发布成功,已进入审核队列",icon:"none"}),setTimeout(function(){c.switchTab({url:"/pages/tabBar/home/home"})},2e3)):(c.hideLoading(),c.showToast({title:"你的账号已过期，请登陆",icon:"none"}))}})}else c.showToast({title:"请输入商品的描述",icon:"none"}),c.hideLoading();else c.showToast({title:"请重新上传图片",icon:"none"}),c.hideLoading();else c.showToast({title:"请输入价格",icon:"none"}),c.hideLoading()},fail:function(n){c.hideLoading(),c.navigateTo({url:"../select/select?selectid="+s.selectid})}})},fail:function(n){c.hideLoading(),c.showToast({title:"请您先登陆"})}})},fail:function(){c.navigateTo({url:"../select/select?selectid="+s.selectid})}})):c.showToast({title:"请您先上传图片再进行发布",icon:"none"})},toselect:function(){c.navigateTo({url:"/pages/ali/select/select?selectid="+this.selectid})},onPageScroll:function(n){this.headerPosition=n.scrollTop>=0?"fixed":"absolute",this.headerTop=n.scrollTop>=0?null:0,this.statusTop=n.scrollTop>=0?null:-this.statusHeight+"px"},uImageTap:function(){this.$refs.uImage.uploadimage(this.upImgOos)},delImgInfo:function(){var i=t(a.default.mark(function i(s){return a.default.wrap(function(i){while(1)switch(i.prev=i.next){case 0:console.log(n("你删除的图片地址为:",s,this.oosArr.splice(s.index,1)," at pages\\ali\\codelist\\codelist.vue:506"));case 1:case"end":return i.stop()}},i,this)}));function s(n){return i.apply(this,arguments)}return s}(),upOosData:function(){var i=t(a.default.mark(function i(s){var e,o,t;return a.default.wrap(function(i){while(1)switch(i.prev=i.next){case 0:e=[],o=0,t=s.length;case 2:if(!(o<t)){i.next=15;break}if(i.prev=3,""==s[o].path_server){i.next=7;break}return i.next=7,e.push(s[o].path_server.split(","));case 7:i.next=12;break;case 9:i.prev=9,i.t0=i["catch"](3),console.log(n("上传失败..."," at pages\\ali\\codelist\\codelist.vue:518"));case 12:o++,i.next=2;break;case 15:this.oosArr=e,e.length==this.upImgOos.count&&(c.showToast({title:"上传成功",icon:"none"}),this.upload=!0),0!==s.length&&(this.mystatus=!0);case 18:case"end":return i.stop()}},i,this,[[3,9]])}));function s(n){return i.apply(this,arguments)}return s}(),getUpImgInfoOos:function(){console.log(n(this.oosArr," at pages\\ali\\codelist\\codelist.vue:539")),console.log(n("阿里云转成一维数组:",this.oosArr.join().split(",")," at pages\\ali\\codelist\\codelist.vue:540")),this.images=this.oosArr.join().split(",").join(";"),console.log(n(this.images," at pages\\ali\\codelist\\codelist.vue:542"))}}};i.default=u}).call(this,s("0de9")["default"],s("6e42")["default"])}},[["32f0","common/runtime","common/vendor"]]]);
});
require('pages/ali/codelist/codelist.js');
__wxRoute = 'pages/user/setting/revise/signature/signature';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/setting/revise/signature/signature.js';

define('pages/user/setting/revise/signature/signature.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/setting/revise/signature/signature"],{4812:function(t,e,n){"use strict";var a=n("ba6a"),u=n.n(a);u.a},"488f":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{signature:"这个人很懒，什么都没留下"}},methods:{getdata:function(){var e=this;t.getStorage({key:"signature",success:function(t){e.signature=t.data},fail:function(){e.signature="一路相伴，感谢有你"}})},submit:function(){var e=this,a=this.signature;console.log(n(a,"6666666s"," at pages\\user\\setting\\revise\\signature\\signature.vue:29")),t.showModal({content:"是否确认修改?",showCancel:!0,success:function(u){console.log(n(u," at pages\\user\\setting\\revise\\signature\\signature.vue:35")),u.confirm?(console.log(n(e.signature,"ggggggggggggggggggggggg"," at pages\\user\\setting\\revise\\signature\\signature.vue:37")),t.setStorage({key:"signature",data:a,success:function(){t.navigateTo({url:"/pages/user/setting/setting"})}})):u.cancel&&console.log(n("用户点击取消"," at pages\\user\\setting\\revise\\signature\\signature.vue:49"))}})}},onReady:function(){this.getdata()},onShow:function(){this.getdata()},onLoad:function(){this.getdata()}};e.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},9792:function(t,e,n){"use strict";(function(t){n("590e"),n("921b");a(n("66fd"));var e=a(n("a135"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},a135:function(t,e,n){"use strict";n.r(e);var a=n("c802"),u=n("e23e");for(var s in u)"default"!==s&&function(t){n.d(e,t,function(){return u[t]})}(s);n("4812");var i=n("2877"),r=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},ba6a:function(t,e,n){},c802:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},e23e:function(t,e,n){"use strict";n.r(e);var a=n("488f"),u=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=u.a}},[["9792","common/runtime","common/vendor"]]]);
});
require('pages/user/setting/revise/signature/signature.js');
__wxRoute = 'pages/user/setting/revise/pay/pay';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/setting/revise/pay/pay.js';

define('pages/user/setting/revise/pay/pay.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/setting/revise/pay/pay"],{"1b59":function(e,t,n){"use strict";(function(e){n("590e"),n("921b");u(n("66fd"));var t=u(n("ef26"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},a6a8:function(e,t,n){},ae8a:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}}};t.default=u},cec4:function(e,t,n){"use strict";n.r(t);var u=n("ae8a"),a=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);t["default"]=a.a},d010:function(e,t,n){"use strict";var u=n("a6a8"),a=n.n(u);a.a},ef26:function(e,t,n){"use strict";n.r(t);var u=n("f699"),a=n("cec4");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("d010");var c=n("2877"),f=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=f.exports},f699:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return a})}},[["1b59","common/runtime","common/vendor"]]]);
});
require('pages/user/setting/revise/pay/pay.js');
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

