(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"7abc":function(t,e,i){"use strict";i.r(e),i.d(e,"open",(function(){return c}));var n=i("74ce");function o(){let t=0,e=[];return{notify(){t++;const i=e;e=[],i.forEach(t=>t())},observe(){let i=t;return{changed:()=>new Promise(n=>{if(i!==t)return n();e.push(n)}).then(()=>{i=t})}}}}var r=function(t,e,i,n){function o(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,r){function s(t){try{l(n.next(t))}catch(e){r(e)}}function c(t){try{l(n["throw"](t))}catch(e){r(e)}}function l(t){t.done?i(t.value):o(t.value).then(s,c)}l((n=n.apply(t,e||[])).next())}))};function s(t){const e=o();return{insert:(i,n)=>r(this,void 0,void 0,(function*(){n?yield t.put(i):yield t.add(i),e.notify()})),update:(i,n)=>r(this,void 0,void 0,(function*(){Object.keys(i).length>0?yield t.where(i).modify(n):yield t.toCollection().modify(n),e.notify()})),delete:i=>r(this,void 0,void 0,(function*(){Object.keys(i).length>0?yield t.where(i).delete():yield t.toCollection().delete(),e.notify()})),all:()=>{const e={};return{where(t){return e.cond=t,this},reverse(){return e.reverse=!0,this},limit(t,i){return e.limit={count:t,offset:i},this},query(){let i;return e.cond&&(i=t.where(e.cond)),e.reverse&&(i=(i||t).reverse()),e.limit&&(e.limit.offset&&(i=(i||t).offset(e.limit.offset)),i=(i||t).limit(e.limit.count)),(i||t).toArray()}}},observe:()=>e.observe()}}function c(){return r(this,void 0,void 0,(function*(){const t=new n["a"]("data-store");return t.version(1).stores({configs:"key",wallets:"++id, gid",activities:"++id, gid, walletId, createdTime, status"}),yield t.open(),{configs:s(t.table("configs")),wallets:s(t.table("wallets")),activities:s(t.table("activities")),transaction:e=>t.transaction("rw",t.tables,()=>e()),waitFor:t=>n["a"].waitFor(t)}}))}}}]);