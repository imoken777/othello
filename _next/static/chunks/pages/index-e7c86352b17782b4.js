(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(85)}])},85:function(e,t,n){"use strict";n.r(t);var i=n(5893),o=n(7294),l=n(2729),r=n.n(l);let _=()=>{let[e,t]=(0,o.useState)(1),[n,l]=(0,o.useState)([[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,3,0,0,0,0],[0,0,3,2,1,0,0,0],[0,0,0,1,2,3,0,0],[0,0,0,0,3,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]),_=e=>{let t=0;for(let i of n)for(let n of i)e===n&&t++;return t},d=e=>(e.map((t,n)=>t.map((t,i)=>{3===t&&(e[n][i]=0)})),e),f=(e,t,n,i)=>{let o=JSON.parse(JSON.stringify(e));for(let e of o)for(let i of e)3===i&&(o[n][t]=0);let r=[[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]],_=(e,t,n,i,o,l)=>void 0!==e[n+o]&&void 0!==e[n+o][t+i]&&0!==e[n+o][t+i]&&e[n+o][t+i]!==l&&0===e[n][t],d=(e,t,n,i,o,l)=>{let r=1;for(let _=1;n+_*o>=0&&n+_*o<e.length&&t+_*i>=0&&t+_*i<e.length&&0!==e[n+_*o][t+_*i]&&3!==e[n+_*o][t+_*i];_++){if(e[n+_*o][t+_*i]===l)return console.log(r),r;r++}return -1};(t=>{for(let n=0;n<e.length;n++)for(let i=0;i<e[n].length;i++)if(0===o[n][i]){for(let[l,f]of r)if(_(e,i,n,f,l,t)){let r=d(e,i,n,f,l,t);if(r>0){o[n][i]=3;break}}}})(3-i),l(o)},c=(i,o)=>{let r=JSON.parse(JSON.stringify(n));if(d(r),3!==n[o][i])return;let _=(e,t,n,i,o,l)=>void 0!==e[n+o]&&void 0!==e[n+o][t+i]&&0!==e[n+o][t+i]&&e[n+o][t+i]!==l&&0===e[n][t]||3===e[n][t],c=(e,t,n,i,o,l)=>{let r=1;for(let _=1;n+_*o>=0&&n+_*o<e.length&&t+_*i>=0&&t+_*i<e.length&&0!==e[n+_*o][t+_*i]&&3!==e[n+_*o][t+_*i];_++){if(e[n+_*o][t+_*i]===l)return console.log(r),r;r++}return -1},s=(e,t,n,i,o,l,_)=>{for(let e=1;e<l;e++)r[n+e*o][t+e*i]=_},a=!1;for(let[t,l]of[[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]])if(_(n,i,o,l,t,e)){let r=c(n,i,o,l,t,e);r>0&&(a=!0,s(n,i,o,l,t,r,e))}a&&(r[o][i]=e,t(3-e)),l(r),f(r,i,o,e),console.table(r)};return(0,i.jsxs)("div",{className:r().container,children:[(0,i.jsx)("div",{className:r().board,children:n.map((e,t)=>e.map((e,n)=>(0,i.jsx)("div",{className:r().cell,onClick:()=>c(n,t),children:0!==e&&(0,i.jsx)("div",{className:r().stone,style:{background:1===e?"#000":2===e?"#fff":"#ff0",width:3===e?"30px":"70px",height:3===e?"30px":"70px"}})},"".concat(n,"-").concat(t))))}),(0,i.jsx)("div",{children:1===e?"黒のターン":"白のターン"}),(0,i.jsxs)("div",{children:["黒",_(1)," 白",_(2)]})]})};t.default=_},2729:function(e){e.exports={container:"index_container__gnN1f",main:"index_main__kAcUb",footer:"index_footer__qq_p6",title:"index_title__gEapU",description:"index_description__087sm",code:"index_code__VeCgy",grid:"index_grid__FmmIe",card:"index_card__kAxi6",logo:"index_logo__FcDOZ",board:"index_board__2d6xe",cell:"index_cell__3W8ZQ",stone:"index_stone__oeDmm"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);