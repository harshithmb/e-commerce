(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),r=c.n(n),s=c(15),o=c.n(s),i=(c(40),c(41),c(42),c(14)),d=c(3),l=c(9),u=Object(l.b)((function(e){var t,c,a;return{count:null===e||void 0===e||null===(t=e.productReducer)||void 0===t||null===(c=t.cartProducts)||void 0===c?void 0:c.length,cartProducts:null===e||void 0===e||null===(a=e.productReducer)||void 0===a?void 0:a.cartProducts}}))((function(e){var t=e.count;e.cartProducts;return Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(a.jsx)("a",{className:"navbar-brand",href:"#",children:"SHOP"}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(a.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(a.jsx)("li",{className:"nav-item active ",children:Object(a.jsx)(i.b,{className:"nav-link",to:"/e-commerce",children:"Home"})}),Object(a.jsx)("li",{className:"nav-item active ",children:Object(a.jsxs)(i.b,{className:"nav-link",to:"/cart",children:["Cart",Object(a.jsx)("sup",{children:t})]})})]})})]})})),j=function(e){var t=e.title,c=e.description,n=e.children,r=e.className;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u,{}),Object(a.jsxs)("div",{className:"jumbotron",children:[Object(a.jsx)("h1",{className:"display-4",children:t}),Object(a.jsx)("p",{className:"lead",children:c}),Object(a.jsx)("div",{className:r,children:n})]})]})},b="ADD_PRODUCT",p="GET_PRODUCTS",v="USER_LOGIN",h=c(32),O=c.n(h),m=Object(l.b)(null,(function(e){return{addProductToCart:function(t){return e({type:b,payload:t})}}}))((function(e){var t=e.product,c=e.addProductToCart,n=e.index,r=t.name,s=t.brand,o=t.description,i=t.preview,d=t.id,l=t.price;return Object(a.jsxs)("div",{className:"card col-3 m-2",children:[Object(a.jsx)("img",{className:"card-img-top",src:i,alt:"Card image cap"}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("h5",{className:"card-title",children:[r," - ",d]}),Object(a.jsx)("p",{className:"card-text",children:null===o||void 0===o?void 0:o.substring(0,20)}),Object(a.jsx)("p",{className:"black",children:s}),Object(a.jsxs)("p",{className:"black-10 card-p",children:["Rs. ",l," "]}),Object(a.jsx)("button",{className:"btn-primary",onClick:function(){return c(t)},children:"Add to Cart"})]})]},n)})),x=Object(l.b)((function(e){var t;return{products:null===e||void 0===e||null===(t=e.productReducer)||void 0===t?void 0:t.products}}),(function(e){return{dispatchProducts:function(){return e((function(e){return O.a.get("https://5fc38a07e5c28f0016f54b09.mockapi.io/ajay/shoplane").then((function(t){return e({type:p,payload:t.data})}))}))}}}))((function(e){var t=e.products,c=e.dispatchProducts;return r.a.useEffect((function(){c()}),[]),console.log("products",t),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(j,{title:"Welcome to Shop",description:"Our Shop is the Best!",className:"d-flex flex-wrap justify-content-around",children:t.length&&(null===t||void 0===t?void 0:t.map((function(e,t){return Object(a.jsx)(m,{index:t,product:e})})))})})})),f=function(){return Object(a.jsx)(i.a,{children:Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{exact:!0,path:"/e-commerce",component:x}),Object(a.jsx)(d.a,{render:function(){return Object(a.jsx)(j,{title:"Page Not Found",description:"404 Error"})}})]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))},N=c(12),P=c(34),y=c(10),C={products:[],cartProducts:[]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case b:return Object(y.a)(Object(y.a)({},e),{},{cartProducts:[].concat(Object(P.a)(e.cartProducts),[a])});case p:return Object(y.a)(Object(y.a)({},e),{},{products:a});default:return e}},k={user:{name:""},login_status:!0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case v:return Object(y.a)(Object(y.a)({},e),{},{user:a});default:return e}},F=c(33),w=function(){var e=Object(N.c)({productReducer:R,userReducer:T});return Object(N.d)(e,Object(N.a)(F.a))}();o.a.render(Object(a.jsx)(l.a,{store:w,children:Object(a.jsx)(f,{})}),document.getElementById("root")),g()}},[[66,1,2]]]);
//# sourceMappingURL=main.913456a3.chunk.js.map