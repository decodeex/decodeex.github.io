"use strict";(self.webpackChunk_decode_crm_client=self.webpackChunk_decode_crm_client||[]).push([[241],{88774:function(e,t,r){r.d(t,{i5:function(){return j},A0:function(){return d}});var n=r(2211),i=r(34556),o=r(40911),s=r(40860),c=(0,i.ZP)(o.Z,{shouldForwardProp:function(e){return"rounded"!==e}})((function(e){var t=e.rounded;return{display:"flex",listStyle:"none",alignItems:"center",justifyContent:"center","& li":{width:18,height:18,opacity:.32,cursor:"pointer"},"& li.slick-active":(0,n.Z)({opacity:1},t&&{"& .dotActive":{width:16,borderRadius:6}})}})),l=(0,i.ZP)("div")((function(){return{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}})),a=(0,i.ZP)("span")((function(e){var t=e.theme;return{width:8,height:8,borderRadius:"50%",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.short})}}));function d(e){var t=null===e||void 0===e?void 0:e.color,r=(null===e||void 0===e?void 0:e.rounded)||!1;return{appendDots:function(t){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(c,(0,n.Z)((0,n.Z)({rounded:r,component:"ul"},e),{},{children:t}))})},customPaging:function(){return(0,s.jsx)(l,{children:(0,s.jsx)(a,{className:"dotActive",sx:{bgcolor:t||"primary.main"}})})}}}var u=r(76956),h=r(25579),x=r(38263),f=r(53551),Z=r(5046),p=["filled","customIcon","onNext","onPrevious","children"],g=(0,i.ZP)(Z.w_,{shouldForwardProp:function(e){return"filled"!==e}})((function(e){var t=e.filled,r=e.theme;return(0,n.Z)({width:40,height:40,cursor:"pointer",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:r.palette.text.primary}},t&&{opacity:.48,borderRadius:1.5*Number(r.shape.borderRadius),color:r.palette.common.white,backgroundColor:r.palette.grey[900],"&:hover":{opacity:1,color:r.palette.common.white,backgroundColor:r.palette.grey[900]}})}));function j(e){var t=e.filled,r=void 0!==t&&t,i=e.customIcon,c=e.onNext,l=e.onPrevious,a=e.children,d=(0,u.Z)(e,p),f="rtl"===(0,h.Z)().direction,Z={position:"absolute",mt:-2.5,top:"50%",zIndex:9};return a?(0,s.jsxs)(o.Z,(0,n.Z)((0,n.Z)({},d),{},{children:[(0,s.jsx)(o.Z,{className:"arrow left",sx:(0,n.Z)((0,n.Z)({},Z),{},{left:0}),children:(0,s.jsx)(g,{filled:r,onClick:l,children:m(i,f)})}),a,(0,s.jsx)(o.Z,{className:"arrow right",sx:(0,n.Z)((0,n.Z)({},Z),{},{right:0}),children:(0,s.jsx)(g,{filled:r,onClick:c,children:v(i,f)})})]})):(0,s.jsxs)(x.Z,(0,n.Z)((0,n.Z)({direction:"row",spacing:1},d),{},{children:[(0,s.jsx)(g,{className:"arrow left",filled:r,onClick:l,children:m(i,f)}),(0,s.jsx)(g,{className:"arrow right",filled:r,onClick:c,children:v(i,f)})]}))}var m=function(e,t){return(0,s.jsx)(f.Z,{icon:e||"eva:arrow-right-fill",sx:(0,n.Z)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},v=function(e,t){return(0,s.jsx)(f.Z,{icon:e||"eva:arrow-right-fill",sx:(0,n.Z)({width:20,height:20},t&&{transform:" scaleX(-1)"})})},y=r(7095),w=r(24700);(0,i.ZP)(o.Z)((function(e){var t=e.theme;return{zIndex:9,display:"flex",alignItems:"center",position:"absolute",bottom:t.spacing(2),right:t.spacing(2),color:t.palette.common.white,borderRadius:t.shape.borderRadius,backgroundColor:(0,y.Fq)(t.palette.grey[900],.48)}})),(0,i.ZP)(w.Z)((function(e){return{padding:6,opacity:.48,color:e.theme.palette.common.white,"&:hover":{opacity:1}}}))},8777:function(e,t,r){r(63996),r(74724),r(55685),r(40860)},20241:function(e,t,r){r.r(t),r.d(t,{default:function(){return G}});var n=r(2211),i=r(25579),o=r(38405),s=r(5943),c=r(38263),l=r(45339),a=(r(13466),r(40860));var d=r(19477),u=r(45771),h=r(44659),x=r(88697),f=r(63996),Z=r(55685),p=r(62484),g=function(e){var t=e.item,r=(0,p.Z)();return(0,a.jsxs)(c.Z,{direction:"row",alignItems:"center",sx:{display:"flex !important"},onClick:function(){r("/crm/discover/index",{type:"announcement"})},children:[(0,a.jsx)(x.Z,{}),(0,a.jsx)(u.Z,{title:t.title,sx:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",cursor:"pointer",fontSize:14},children:t.title})]},t.id)};function j(e){var t=Object.assign({},((0,d.Z)(e),e)),r=(0,f.qg)().data,o=(0,i.Z)(),s={speed:800,autoplaySpeed:4e3,dots:!1,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,vertical:!0,verticalSwiping:!0,rtl:Boolean("rtl"===o.direction)};return(0,a.jsxs)(l.rg,(0,n.Z)((0,n.Z)({},t),{},{children:[1==r.length&&(0,a.jsx)(g,{item:r[0]}),r.length>1&&(0,a.jsx)(h.Z,(0,n.Z)((0,n.Z)({},s),{},{children:r.map((function(e){return(0,a.jsx)(g,{item:e})}))}))]}))}var m=r(57928),v=r(74724),y=r(88774);function w(e){var t=e.slides,r=void 0===t?[]:t,o=e.height,s=void 0===o?"auto":o,c=(0,i.Z)(),l=(0,n.Z)({speed:800,infinite:!0,dots:!0,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===c.direction)},(0,y.A0)({bottom:"2%",left:0,right:0,position:"absolute"}));return(0,a.jsx)(h.Z,(0,n.Z)((0,n.Z)({},l),{},{children:r.map((function(e,t){return(0,a.jsx)(v.Z,{alt:e.alt,src:e.src,sx:{height:s},onClick:e.onClick},e.id)}))}))}var b=r(40165);function C(){var e=(0,m.s0)(),t=((0,Z.Z)().currentLang,(0,f.Ny)({location:"Banner",type:"ClientWeb"}).data.map((function(t){return(0,n.Z)((0,n.Z)({},t),{},{src:t.picture,onClick:function(){(0,b.startsWith)(t.goto,"http")?window.open(t.goto,"_blank"):e(t.goto)}})})));return(0,a.jsx)(w,{slides:t,height:200})}r(8777);var k=r(93554),P=r(26624),I=r(83086),S=(r(66057),r(77317)),R=(r(71025),r(14448)),F=(r(50963),r(74866)),N=r(12130),B=r(23283),_=r(90669),z=r(40911),T=r(63158),D=r(72745),H=r(89728),q=r(55040),A=r(74384),E=r(74114),L=r(33252),M=r(38870),W=r(28792),X=r(52797),O=function(e){var t=e.item,r=(0,b.get)(t,"symbol"),n=(0,f.d2)({symbol:r}),i=(0,W.H)((function(e){return e.openProductDetail})),o=(0,A.F)({disableSyncService:!0}).getStockColorValue,s=o((0,b.get)(t,"priceChange")),l=(0,S.useState)(s),d=(0,N.Z)(l,2),h=d[0],x=d[1],Z=(0,b.first)(n),p=(0,S.useRef)(),g=(0,S.useRef)(),j=(0,S.useRef)();return(0,S.useEffect)((function(){return X.useMarketPriceStore.subscribe((function(e){if(Boolean((0,b.get)(e.prices,"".concat(r)))){var n=(0,b.get)(e.prices,"".concat(r,".a"))-Z,i=(0,_.currencyFormatorWithDecimal)(n,"",t.decimal,!0),s=(0,E.dH)(n/Z);p.current.innerHTML="".concat(n>0?"+":"").concat(i),g.current.innerHTML="".concat(n>0?"+":"").concat(s);var c=o(n);p.current.style.color=c,g.current.style.color=c,j.current.style.backgroundColor=c,c!==h&&x(c)}}))}),[t.decimal,Z]),(0,a.jsxs)(c.Z,{direction:"row",alignItems:"center",sx:{py:0,px:1},spacing:1,onClick:function(){return i(t.id,t)},children:[(0,a.jsx)(z.Z,{sx:{flex:1},children:(0,a.jsx)(D.Z,{item:t})}),(0,a.jsx)(z.Z,{sx:{flex:1},children:(0,a.jsx)(q.Z,{datas:n,color:h,height:40,width:120,backgroundColor:"#1E1E34"})}),(0,a.jsx)(z.Z,{sx:{flex:.8},children:(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(c.Z,{alignItems:"center",justifyContent:"center",ref:j,sx:{backgroundColor:s,height:"24px",px:1,borderRadius:"4px"},children:(0,a.jsx)(H.Z,{symbol:(0,b.get)(t,"symbol"),tokenBuy:(0,b.get)(t,"tokenBuy"),decimal:(0,b.get)(t,"decimal"),initPrice:(0,b.get)(t,"price")})}),(0,a.jsxs)(c.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,a.jsxs)(u.Z,{ref:p,color:s,sx:{fontSize:"11px"},children:[(0,b.get)(t,"priceChange")>0&&"+",(0,_.currencyFormatorDetail)((0,b.get)(t,"priceChange"),(0,b.get)(t,"tokenBuy"))]}),(0,a.jsxs)(u.Z,{ref:g,color:s,sx:{fontSize:"11px"},children:[(0,b.get)(t,"priceChangePercentage")>0&&"+",(0,E.dH)((0,b.get)(t,"priceChangePercentage"))]})]})]})})]})},V=function(e){var t=(0,B.useFavorite)(),r=t.favoritesId,n=t.initFavourite,i=(0,f.qB)({request:!0,favoritesId:r}),o=i.data,s=i.isLoading,l=(0,Z.Z)().t;return(0,S.useEffect)((function(){n()}),[]),(0,L.default)(),s?(0,a.jsx)(c.Z,{p:2,direction:"row",alignItems:"center",justifyContent:"center",children:(0,a.jsx)(T.Z,{})}):(0,a.jsxs)(z.Z,{children:[(0,a.jsx)(z.Z,{sx:{pl:1},children:(0,a.jsxs)(c.Z,{sx:{width:60},alignItems:"center",justifyContent:"center",children:[(0,a.jsx)(u.Z,{sx:{color:"rgb(255,197,0)",fontSize:"14px"},children:l("favourite")}),(0,a.jsx)(z.Z,{sx:{width:"100%",height:"2px",backgroundColor:"rgb(255,197,0)"}})]})}),o.map((function(e){return(0,a.jsx)(O,{item:e},null===e||void 0===e?void 0:e.id)})),(0,a.jsx)(M.Z,{})]})};function G(){var e=(0,F.p)(),t=(0,i.Z)();return(0,o.Z)(t.breakpoints.up("md"))?(0,a.jsxs)(s.ZP,{container:!0,spacing:1,direction:"row",justifyContent:"flex-start",alignItems:"stretch",children:[(0,a.jsx)(s.ZP,{item:!0,sx:{width:375,mr:1},children:(0,a.jsx)(c.Z,{children:(0,a.jsx)(R.Z,(0,n.Z)((0,n.Z)({},e),{},{children:(0,a.jsx)(P.Z,{})}))})}),(0,a.jsx)(s.ZP,{item:!0,xs:6,children:(0,a.jsxs)(c.Z,{spacing:1,sx:{display:"flex",height:"100%"},children:[(0,a.jsx)(j,{}),(0,a.jsx)(C,{}),(0,a.jsx)(k.Z,{})]})}),(0,a.jsx)(s.ZP,{item:!0,sx:{width:450},children:(0,a.jsx)(V,{})})]}):(0,a.jsxs)(s.ZP,{container:!0,spacing:1,direction:"column",justifyContent:"flex-start",alignItems:"stretch",children:[(0,a.jsx)(s.ZP,{item:!0,sx:{height:{xs:600},width:"100%"},children:(0,a.jsxs)(c.Z,{spacing:1,sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,a.jsx)(j,{}),(0,a.jsx)(C,{}),(0,a.jsx)(k.Z,{})]})}),(0,a.jsx)(s.ZP,{item:!0,xs:6,children:(0,a.jsx)(c.Z,{children:(0,a.jsx)(R.Z,(0,n.Z)((0,n.Z)({},e),{},{children:(0,a.jsx)(P.Z,{})}))})}),(0,a.jsx)(s.ZP,{item:!0,xs:6,children:(0,a.jsx)(R.Z,(0,n.Z)((0,n.Z)({},e),{},{children:(0,a.jsx)(I.Z,{})}))})]})}}}]);