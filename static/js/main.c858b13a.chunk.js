(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(6),i=n.n(r),s=n(8),l=n(2);var u=n(7),o=n.n(u),j=(n(13),n(0)),d=function(e){var t=e.value,n=e.onClick,c=e.highlight;return Object(j.jsx)("button",{className:o()("start__btn",{highlight:c}),onClick:n,children:t})},h=(n(15),function(e){var t=e.squares,n=e.onClick,c=e.winnerLine;return Object(j.jsx)("div",{className:"grid",children:t.map((function(e,t){return Object(j.jsx)(d,{value:e,onClick:function(){return n(t)},highlight:c&&c.includes(t)},t)}))})}),O=(n(16),function(e){var t=e.playerOne,n=e.setPlayerOne,c=e.playerTwo,a=e.setPlayerTwo,r=e.setShowModal;return Object(j.jsx)("div",{className:"modal",children:Object(j.jsx)("div",{className:"modal__container",children:Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("div",{className:"player",children:Object(j.jsx)("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438\u0433\u0440\u043e\u043a\u0430 \u21161",value:t,onChange:function(e){return n(e.target.value)},maxLength:10})}),Object(j.jsx)("div",{className:"player",children:Object(j.jsx)("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438\u0433\u0440\u043e\u043a\u0430 \u21162",value:c,onChange:function(e){return a(e.target.value)},maxLength:10})}),Object(j.jsx)("button",{onClick:function(){(t||c)&&(n(t),a(c),r(!1))},className:"start",children:"\u0418\u0433\u0440\u0430\u0442\u044c"})]})})})}),b=function(){var e=a.a.useState(!0),t=Object(l.a)(e,2),n=t[0],c=t[1],r=a.a.useState(""),i=Object(l.a)(r,2),u=i[0],o=i[1],d=a.a.useState(""),b=Object(l.a)(d,2),f=b[0],x=b[1],v=a.a.useState(0),m=Object(l.a)(v,2),p=m[0],g=m[1],y=a.a.useState(0),w=Object(l.a)(y,2),N=w[0],S=w[1],k=a.a.useState(Array(9).fill(null)),C=Object(l.a)(k,2),T=C[0],L=C[1],P=a.a.useState(!0),_=Object(l.a)(P,2),A=_[0],M=_[1],q=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var c=Object(l.a)(t[n],3),a=c[0],r=c[1],i=c[2];if(e[a]&&e[a]===e[r]&&e[a]===e[i])return{winner:e[a],line:t[n]};if(!e.includes(null))return{winner:"\u041d\u0438\u0447\u044c\u044f!"}}return{winner:null}}(T),E=q.winner,J=Object(s.a)(T),X=function(){L(Array(9).fill(null)),M(!0)};return a.a.useEffect((function(){var e;return E&&"X"===E&&(e=setTimeout((function(){X()}),1e3),g((function(e){return e+1}))),E&&"O"===E&&(e=setTimeout((function(){X(),S((function(e){return e+1}))}),1e3)),E&&"\u041d\u0438\u0447\u044c\u044f!"===E&&(e=setTimeout((function(){X(),g(p),S(N)}),1e3)),function(){clearTimeout(e)}}),[E]),Object(j.jsxs)("div",{children:[n&&Object(j.jsx)(O,{playerOne:u,setPlayerOne:o,playerTwo:f,setPlayerTwo:x,setShowModal:c}),Object(j.jsxs)("div",{className:"tictactoe",children:[Object(j.jsx)(h,{squares:T,onClick:function(e){E||J[e]||(J[e]=A?"X":"O",L(J),M(!A))},winnerLine:q.line}),Object(j.jsxs)("div",{className:"score",children:[Object(j.jsx)("h3",{children:"Score"}),u&&Object(j.jsxs)("p",{children:[u,": ",p]}),f&&Object(j.jsxs)("p",{children:[f,": ",N]}),Object(j.jsx)("p",{children:"\u041d\u0438\u0447\u044c\u044f!"===E?"\u041d\u0438\u0447\u044c\u044f!":""})]})]})]})},f=(n(17),function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(b,{})})});n(18);i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.c858b13a.chunk.js.map