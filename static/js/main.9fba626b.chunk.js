(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{237:function(e,t,n){},251:function(e,t){},253:function(e,t){},263:function(e,t){},265:function(e,t){},292:function(e,t){},294:function(e,t){},295:function(e,t){},300:function(e,t){},302:function(e,t){},321:function(e,t){},333:function(e,t){},336:function(e,t){},343:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n(41),o=n.n(c),i=n(44),s=(n(237),n(10)),l=n(60),u=n(3),d=n(35),j=n(420),b=n(416),h=n(399),p=n(419),f=n(421),x=n(426),O=n(423),m=n(425),v=n(422),g=n(206),w=n.n(g),_=n(209),E=n.n(_),k=n(210),F=n.n(k),y=n(412),D=n(405),S=n(427),T=n(1),C=240,I=Object(u.a)(p.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return Object(l.a)({transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},n&&{width:"calc(100% - ".concat(C,"px)"),marginLeft:"".concat(C,"px"),transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})})})),L=Object(u.a)("div")((function(e){var t=e.theme;return Object(l.a)(Object(l.a)({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-end"})})),M=function(){var e=Object(d.a)(),t=r.useState(!1),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(T.jsxs)(j.a,{sx:{display:"flex"},children:[Object(T.jsx)(h.a,{}),Object(T.jsx)(I,{position:"fixed",open:a,children:Object(T.jsxs)(f.a,{children:[Object(T.jsx)(v.a,{color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},edge:"start",sx:Object(l.a)({mr:2},a&&{display:"none"}),children:Object(T.jsx)(w.a,{})}),Object(T.jsx)(O.a,{variant:"h6",noWrap:!0,component:"div",children:Object(T.jsx)(i.b,{to:"/",style:{color:"#fff"},children:"Dropbox"})})]})}),Object(T.jsxs)(b.a,{sx:{width:C,flexShrink:0,"& .MuiDrawer-paper":{width:C,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:a,children:[Object(T.jsx)(L,{children:Object(T.jsx)(v.a,{onClick:function(){c(!1)},children:"ltr"===e.direction?Object(T.jsx)(E.a,{}):Object(T.jsx)(F.a,{})})}),Object(T.jsx)(m.a,{}),Object(T.jsx)(x.a,{children:["Home","Photos","Deleted Files"].map((function(e){return Object(T.jsx)(y.a,{disablePadding:!0,children:Object(T.jsx)(D.a,{children:Object(T.jsx)(S.a,{primary:e})})},e)}))}),Object(T.jsx)(m.a,{})]})]})},N=n(15),A=n.n(N),P=n(22),U=n(424),z=n(408),q=n(403),B=n(407),H=n(418),R=n(12),W=n(148);function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a={method:t};return n&&(a.headers={"Content-Type":"application/x-www-form-urlencoded"},a.body=n),fetch(e,a).then((function(e){if(!e.ok)throw new Error;return e.json()}))}!function(e){e.LOAD_FILES="Unable to load Files",e.DELETE_FILES="Unable to delete Files",e.CREATE_FOLDER="Unable to create Folder",e.UPLOAD_FILE="Unable to upload File"}(a||(a={}));var Z=function(e,t){return V(e,"POST",t)},G={grant_type:"authorization_code",redirect_uri:"https://pashamalyshkin.github.io/DBB_box-app/",client_id:"k56627zrptuzaqd",client_secret:"aqy91zqawycph9p"},J=Object(r.createContext)({dropbox:new W.Dropbox,isModalActive:!1,errorMessage:"",isError:!1,files:[],setFiles:function(){},setIsModalActive:function(){},setIsError:function(){},setErrorMessage:function(){},uploadFile:function(){},loadToken:function(){}}),Y=function(e){var t=e.children,n=r.useState(!1),c=Object(s.a)(n,2),o=c[0],i=c[1],l=Object(r.useState)(""),u=Object(s.a)(l,2),d=u[0],j=u[1],b=Object(r.useState)(!1),h=Object(s.a)(b,2),p=h[0],f=h[1],x=Object(r.useState)([]),O=Object(s.a)(x,2),m=O[0],v=O[1],g=Object(R.j)().pathname,w=function(){var e=Object(P.a)(A.a.mark((function e(){var t,n,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URLSearchParams(window.location.search),!(n=t.get("code"))){e.next=7;break}return e.next=5,Z("https://api.dropbox.com/oauth2/token","code=".concat(n,"&").concat(Object.entries(G).map((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];return"".concat(n,"=").concat(encodeURIComponent(a))})).join("&")));case 5:a=e.sent,sessionStorage.setItem("accessToken",a.access_token);case 7:t.delete("code");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=new W.Dropbox({accessToken:sessionStorage.getItem("accessToken")||""}),E=function(){var e=Object(P.a)(A.a.mark((function e(t){var n,r,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=null===(n=t.target.files)||void 0===n?void 0:n[0]){e.next=3;break}return e.abrupt("return");case 3:return c="/"===g?"".concat(g).concat(r.name):"".concat(g,"/").concat(r.name),e.prev=4,e.next=7,_.filesUpload({path:c,contents:r,autorename:!0});case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(4),j(a.UPLOAD_FILE),f(!0);case 13:window.location.reload();case 14:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t){return e.apply(this,arguments)}}(),k={dropbox:_,errorMessage:d,isError:p,isModalActive:o,files:m,setFiles:v,setErrorMessage:j,setIsError:f,setIsModalActive:i,uploadFile:E,loadToken:w};return Object(T.jsx)(J.Provider,{value:k,children:t})},K=function(){var e=Object(r.useContext)(J);if(!e)throw new Error("useDropbox must be used within a DropboxContextValue");return e},Q={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",minWidth:300,maxWidth:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},X=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],o=K(),i=o.isModalActive,l=o.setIsModalActive,u=o.setErrorMessage,d=o.setIsError,b=o.dropbox,h=Object(R.j)().pathname,p=function(){var e=Object(P.a)(A.a.mark((function e(t){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r="/"===h?"".concat(h).concat(n):"".concat(h,"/").concat(n),e.prev=2,e.next=5,b.filesCreateFolderV2({path:r,autorename:!0});case 5:e.next=11;break;case 7:e.prev=7,e.t0=e.catch(2),u(a.CREATE_FOLDER),d(!0);case 11:window.location.reload();case 12:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsx)("div",{children:Object(T.jsx)(z.a,{className:"modal","aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:i,onClose:function(){return l(!1)},closeAfterTransition:!0,slots:{backdrop:U.a},slotProps:{backdrop:{timeout:500}},children:Object(T.jsx)(q.a,{in:i,children:Object(T.jsxs)(j.a,{sx:Q,children:[Object(T.jsx)(O.a,{sx:{marginBottom:"16px "},children:"Create Folder"}),Object(T.jsxs)("form",{className:"modal__form",onSubmit:p,children:[Object(T.jsx)(B.a,{id:"outlined-basic",label:"Folder Name",variant:"outlined",value:n,onChange:function(e){return c(e.target.value)}}),Object(T.jsx)(H.a,{type:"submit",variant:"contained",className:"modal__button",disabled:0===n.length,children:"Create"})]})]})})})})},$=n(21),ee=n(430),te=n(434),ne=n(433),ae=n(429),re=n(431),ce=n(432),oe=n(417),ie=n(409),se=function(){return Object(T.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"32",viewBox:"0 -960 960 960",width:"32",children:Object(T.jsx)("path",{d:"M140-160q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h281l60 60h339q23 0 41.5 18.5T880-680v460q0 23-18.5 41.5T820-160H140Zm0-60h680v-460H456l-60-60H140v520Zm0 0v-520 520Z"})})},le=n(428),ue=function(){return Object(T.jsx)("div",{className:"loader",children:Object(T.jsx)(j.a,{sx:{display:"flex"},children:Object(T.jsx)(le.a,{})})})},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=e.getDate(),n=e.getMonth()+1,a=e.getFullYear(),r=e.getHours(),c=e.getMinutes(),o="".concat(t,"/").concat(n,"/").concat(a),i="".concat(r,":").concat(c.toString().padStart(2,"0")),s=r>=12?"pm":"am";return i+=" ".concat(s),"".concat(o," ").concat(i)},je=n(117),be=function(){var e=K().uploadFile;return Object(T.jsx)("div",{className:"uploader",children:Object(T.jsxs)("form",{className:"uploader__form",children:[Object(T.jsx)("label",{htmlFor:"uploader",className:"uploader__label",children:Object(T.jsx)(je.a,{color:"#1475cf",size:60})}),Object(T.jsx)("input",{id:"uploader",name:"uploader",type:"file",onChange:e,className:"uploader__input"})]})})},he=function(e){var t=e.filesToShow,n=e.isLoading,a=e.filesToDelete,c=e.onDelete,o=function(e){return"folder"===e},i=Object(R.j)().pathname,s=Object(R.l)();return Object(r.useEffect)((function(){c([])}),[i]),Object(T.jsx)(T.Fragment,{children:n?Object(T.jsx)(ue,{}):Object(T.jsx)(T.Fragment,{children:t.length?Object(T.jsx)(ae.a,{component:oe.a,children:Object(T.jsxs)(ee.a,{sx:{minWidth:650},"aria-label":"caption table",children:[Object(T.jsx)(re.a,{children:Object(T.jsxs)(ce.a,{children:[Object(T.jsx)(ne.a,{align:"left",children:"Files"}),Object(T.jsx)(ne.a,{align:"right",children:"Modified"})]})}),Object(T.jsx)(te.a,{children:t.map((function(e){return Object(T.jsxs)(ce.a,{children:[Object(T.jsx)(ne.a,{component:"th",scope:"row",children:Object(T.jsxs)("div",{className:"files-table__cell-content",children:[Object(T.jsx)(ie.a,{onChange:function(){return function(e){if(a.includes(e)){var t=a.filter((function(t){return t!==e}));c(t)}else c([].concat(Object($.a)(a),[e]))}(e.path_display)},inputProps:{"aria-label":"controlled"}}),Object(T.jsx)("div",{className:"files-table__cell-image",children:e.thumbnail?Object(T.jsx)("img",{src:(t=e.thumbnail,"data:image/jpeg;base64, ".concat(t)),alt:e.name}):Object(T.jsx)(se,{})}),Object(T.jsx)("button",{className:"files-table__button",type:"button",onClick:function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";o(e)&&s(t)}(e[".tag"],e.path_lower)},children:e.name})]})}),Object(T.jsx)(ne.a,{align:"right",children:e.client_modified&&de(new Date(e.client_modified))})]},e.id);var t}))})]})}):Object(T.jsx)(be,{})})})},pe=n(413),fe=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(R.j)().pathname,o=Object(R.l)();Object(r.useEffect)((function(){var e=c.split("/").filter((function(e){return e}));a(e)}),[c]);var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,t={color:"#736c64",pointerEvents:"auto"};return e!==n.length-1&&"/"!==c||(t.color="#000",t.pointerEvents="none"),t};return Object(T.jsx)("div",{role:"presentation",className:"breadcrumbs",children:Object(T.jsxs)(pe.a,{"aria-label":"breadcrumb",children:[Object(T.jsx)(i.b,{to:"/",style:l(),children:"Dropbox"}),n.map((function(e,t){return Object(T.jsx)("button",{type:"button",className:"breadcrumbs__button",onClick:function(){return function(e){var t=n.findIndex((function(t){return t===e})),a=n.slice(0,t+1).join("/");o(a)}(e)},style:l(t),children:e},e)}))]})})},xe=n(410),Oe=n(411),me=function(){var e=K(),t=e.isError,n=e.setIsError,a=e.errorMessage;return Object(T.jsx)(Oe.a,{open:t,onClose:function(){return n(!1)},autoHideDuration:6e3,children:Object(T.jsx)(xe.a,{severity:"error",children:a})})},ve=n(211),ge=n.n(ve),we=function(e){var t=e.onDelete,n=e.hasFilesToDelete,a=K(),r=a.setIsModalActive,c=a.uploadFile;return Object(T.jsxs)("div",{className:"toolbar",children:[Object(T.jsxs)(H.a,{variant:"contained",onClick:t,children:[Object(T.jsx)("label",{htmlFor:"file",className:"toolbar__label",children:"Upload"}),Object(T.jsx)("input",{id:"file",className:"toolbar__input-file",type:"file",onChange:c})]}),Object(T.jsxs)(H.a,{variant:"contained",onClick:function(){return r(!0)},children:[Object(T.jsx)(je.b,{size:20}),Object(T.jsx)(O.a,{sx:{fontSize:"0.875rem",marginLeft:"10px"},children:"Create Folder"})]}),n&&Object(T.jsx)(H.a,{variant:"outlined",onClick:t,startIcon:Object(T.jsx)(ge.a,{}),children:"Delete"})]})},_e=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(!1),i=Object(s.a)(o,2),u=i[0],d=i[1],j=Object(R.j)().pathname,b=void 0===j?"":j,h=n.length>0,p=sessionStorage.getItem("accessToken"),f=K(),x=f.setIsError,O=f.setErrorMessage,m=f.dropbox,v=f.files,g=f.setFiles,w=f.loadToken,_=function(){var e=Object(P.a)(A.a.mark((function e(){var t,n,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,m.filesListFolder({path:"/"===b?"":b});case 4:return t=e.sent,n=t.result.entries,r=n.filter((function(e){return"file"===e[".tag"]})).map((function(e){return{path:e.path_lower,format:"jpeg",size:"w32h32"}})),e.next=9,m.filesGetThumbnailBatch({entries:r});case 9:e.sent.result.entries.forEach((function(e){if("metadata"in e){var t=n.findIndex((function(t){return e.metadata.path_lower===t.path_lower}));n[t]=Object(l.a)(Object(l.a)({},n[t]),{},{thumbnail:e.thumbnail})}})),g(n),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),O(a.LOAD_FILES),x(!0);case 18:return e.prev=18,d(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[0,14,18,21]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(P.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all(n.map((function(e){return m.filesDeleteV2({path:e})})));case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),O(a.DELETE_FILES),x(!0);case 9:c([]),_();case 11:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){sessionStorage.getItem("accessToken")||w(),_()}),[b,p]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(fe,{}),Object(T.jsx)(we,{hasFilesToDelete:h,onDelete:E}),Object(T.jsx)(he,{filesToShow:v,filesToDelete:n,onDelete:c,isLoading:u}),Object(T.jsx)(me,{})]})},Ee=function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(M,{}),Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)(_e,{}),Object(T.jsx)(X,{})]})]})},ke=function(e){var t=e.children;return Object(T.jsx)(Y,{children:t})};o.a.render(Object(T.jsx)(i.a,{children:Object(T.jsx)(ke,{children:Object(T.jsx)(Ee,{})})}),document.getElementById("root"))}},[[343,1,2]]]);
//# sourceMappingURL=main.9fba626b.chunk.js.map