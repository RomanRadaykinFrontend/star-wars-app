(this["webpackJsonpstar-wars-app"]=this["webpackJsonpstar-wars-app"]||[]).push([[0],{17:function(e,t,a){e.exports={cardNav:"BlockOnMainPage_cardNav__3XeRG",container:"BlockOnMainPage_container__tZtBz",block:"BlockOnMainPage_block__125iM",block_item:"BlockOnMainPage_block_item__2Up1N",mainImage:"BlockOnMainPage_mainImage__3kihy",wrapperContainer:"BlockOnMainPage_wrapperContainer__3Olaw",showAll:"BlockOnMainPage_showAll__1P_4Y"}},18:function(e,t,a){e.exports={specificItemWrapper:"SpecificItem_specificItemWrapper__cK4Ds",photo:"SpecificItem_photo__26RLp",info:"SpecificItem_info__kM2Ex"}},22:function(e,t,a){e.exports={cardNav:"CardItem_cardNav__2zy8b",container:"CardItem_container__sDI1r",block:"CardItem_block__2lZDc",block_item:"CardItem_block_item__30vff",mainImage:"CardItem_mainImage__eBD57",wrapperContainer:"CardItem_wrapperContainer__hNzeR"}},23:function(e,t,a){e.exports={cardNav:"AllItems_cardNav__3TbcF",container:"AllItems_container__1vn2X",block:"AllItems_block__3lyCN",block_item:"AllItems_block_item__1MJy0",mainImage:"AllItems_mainImage___elSk",wrapperContainer:"AllItems_wrapperContainer__1vX7w"}},40:function(e,t,a){e.exports={nav:"Nav_nav__3HRmH"}},47:function(e,t,a){},48:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(19),r=a.n(s),i=(a(47),a(48),a(11)),o=a(4),l=a(38),p=a.n(l).a.create({baseURL:"https://swapi.dev/api/"}),m=function(e,t){return p.get("".concat(e,"/").concat(t))},u=function(){return p.get("people")},j=function(){return p.get("planets")},b=function(){return p.get("starships")},O=function(){return p.get("vehicles")},h={people:[]},f=a(42),d=a(17),_=a.n(d),v=a(5),g=a(22),x=a.n(g),I=a(1),y=function(e){return Object(I.jsx)(v.b,{className:x.a.cardNav,to:"/".concat(e.name,"/").concat(e.pictureNumberString),children:Object(I.jsxs)("div",{className:x.a.block_item,children:[Object(I.jsx)("img",{src:e.imageURL+"".concat(e.pictureNumberString,".jpg"),onError:function(e){e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"},alt:"image",className:x.a.mainImage}),Object(I.jsx)("span",{children:e.itemName})]},e.pictureNumberString)})},N=function(e){return(e.match(/[0-9]/g)||[]).join("")};var E=function(e){var t=Object(c.useState)([]),a=Object(f.a)(t,2),n=a[0],s=a[1];Object(c.useEffect)((function(){var t=[];if(10===e.arrayOfElements.length)for(var a=0;a<8;a++)t.push(e.arrayOfElements[a]);s(e.arrayOfElements)}),[e.arrayOfElements]);var r=n.map((function(t){var a=N(t.url);return Object(I.jsx)(y,{pictureNumberString:a,name:e.name.toLowerCase(),itemName:t.name,imageURL:e.imageURL})}));return Object(I.jsx)("div",{children:Object(I.jsx)("div",{className:_.a.wrapperContainer,children:Object(I.jsxs)("div",{className:_.a.container,children:[Object(I.jsx)("h1",{children:e.name}),Object(I.jsx)("div",{className:_.a.block,children:r}),Object(I.jsxs)(v.b,{to:"/".concat(e.name.toLowerCase()),className:_.a.showAll,children:["show all ",e.name.toLowerCase()]})]})})})},S=a(7),w={planets:[]},k={starships:[]},C={vehicles:[]},L=a(40),P=a.n(L),D=function(){return Object(I.jsxs)("nav",{className:P.a.nav,children:[Object(I.jsx)(v.b,{to:"/",children:"Main"}),Object(I.jsx)(v.b,{to:"/characters",children:"Characters"}),Object(I.jsx)(v.b,{to:"/planets",children:"Planets"}),Object(I.jsx)(v.b,{to:"/starships",children:"Starships"}),Object(I.jsx)(v.b,{to:"/vehicles",children:"Vehicles"})]})},T=a(3),R=a(23),A=a.n(R),M=function(e){var t="https://starwars-visualguide.com/assets/img/",a=Object(S.c)((function(e){return e})),c=a.peoplesData,n=a.starshipsData,s=a.vehiclesData,r=a.planetsData,i=(Object(S.b)(),[]);switch(e.typeOfItems){case"characters":i=c.people.map((function(a){var c=N(a.url);return Object(I.jsx)(y,{pictureNumberString:c,name:e.typeOfItems,itemName:a.name,imageURL:t+e.typeOfItems+"/"})}));break;case"planets":i=r.planets.map((function(a){var c=N(a.url);return Object(I.jsx)(y,{pictureNumberString:c,name:e.typeOfItems,itemName:a.name,imageURL:t+e.typeOfItems+"/"})}));break;case"starships":i=n.starships.map((function(a){var c=N(a.url);return Object(I.jsx)(y,{pictureNumberString:c,name:e.typeOfItems,itemName:a.name,imageURL:t+e.typeOfItems+"/"})}));break;case"vehicles":i=s.vehicles.map((function(a){var c=N(a.url);return Object(I.jsx)(y,{pictureNumberString:c,name:e.typeOfItems,itemName:a.name,imageURL:t+e.typeOfItems+"/"})}))}return Object(I.jsx)("div",{className:A.a.wrapperContainer,children:Object(I.jsx)("div",{className:A.a.container,children:Object(I.jsx)("div",{className:A.a.block,children:i})})})},U=function(e){return Object(I.jsx)(M,{typeOfItems:e.typeOfItems})},B=function(e){return Object(I.jsx)(M,{typeOfItems:e.typeOfItems})},F=function(e){return Object(I.jsx)(M,{typeOfItems:e.typeOfItems})},H=function(e){return Object(I.jsx)("div",{children:Object(I.jsx)(M,{typeOfItems:e.typeOfItems})})},V=a(18),z=a.n(V),J={specificItem:{}},W=function(){var e=Object(T.e)(),t=e.species,a=e.id,n=Object(S.b)(),s=Object(S.c)((function(e){return e.specificItemData.specificItem}));Object(c.useEffect)((function(){n(function(e,t){return function(a){m(e,t).then((function(e){a({type:"SET_SPECIFIC_ITEM",payload:{specificItem:e.data}})}))}}(t,a))}),[]);var r=Object.entries(s);console.log(r);var i=r.map((function(e){if("films"!==e[0]&&"species"!==e[0]&&"vehicles"!==e[0]&&"starships"!==e[0]&&"created"!==e[0]&&"edited"!==e[0]&&"url"!==e[0]&&"homeworld"!==e[0]&&"residents"!==e[0]&&"pilots"!==e[0])return[(e[0][0].toUpperCase()+e[0].substring(1)+": ").split("_").join(" "),e[1]]}));return Object(I.jsxs)("div",{className:z.a.specificItemWrapper,children:[Object(I.jsx)("div",{className:z.a.photo,children:Object(I.jsx)("img",{src:"https://starwars-visualguide.com/assets/img/"+"".concat(t,"/").concat(a,".jpg"),onError:function(e){e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"},alt:"image",className:z.a.mainImage})}),Object(I.jsx)("div",{className:z.a.info,style:{color:"white"},children:i.map((function(e){return Object(I.jsx)("div",{children:e})}))})]})};var X=function(){var e=Object(S.b)(),t=Object(S.c)((function(e){return e.peoplesData.people})),a=Object(S.c)((function(e){return e.planetsData.planets})),n=Object(S.c)((function(e){return e.starshipsData.starships})),s=Object(S.c)((function(e){return e.vehiclesData.vehicles}));return Object(c.useEffect)((function(){e((function(e){u().then((function(t){e({type:"SET_PEOPLE",payload:{people:t.data.results}})}))})),e((function(e){j().then((function(t){e({type:"SET_PLANETS",payload:{planets:t.data.results}})}))})),e((function(e){b().then((function(t){e({type:"SET_STARSHIPS",payload:{starships:t.data.results}})}))})),e((function(e){O().then((function(t){e({type:"SET_VEHICLES",payload:{vehicles:t.data.results}})}))}))}),[]),Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)(D,{}),Object(I.jsx)(T.a,{exact:!0,path:"/",render:function(){return Object(I.jsx)(E,{arrayOfElements:t,name:"Characters",imageURL:"https://starwars-visualguide.com/assets/img/characters/"})}}),Object(I.jsx)(T.a,{exact:!0,path:"/",render:function(){return Object(I.jsx)(E,{arrayOfElements:a,name:"Planets",imageURL:"https://starwars-visualguide.com/assets/img/planets/"})}}),Object(I.jsx)(T.a,{exact:!0,path:"/",render:function(){return Object(I.jsx)(E,{arrayOfElements:n,name:"Starships",imageURL:"https://starwars-visualguide.com/assets/img/starships/"})}}),Object(I.jsx)(T.a,{exact:!0,path:"/",render:function(){return Object(I.jsx)(E,{arrayOfElements:s,name:"Vehicles",imageURL:"https://starwars-visualguide.com/assets/img/vehicles/"})}}),Object(I.jsx)(T.a,{exact:!0,path:"/characters",render:function(){return Object(I.jsx)(H,{typeOfItems:"characters"})}}),Object(I.jsx)(T.a,{exact:!0,path:"/starships",render:function(){return Object(I.jsx)(B,{typeOfItems:"starships"})}}),Object(I.jsx)(T.a,{exact:!0,path:"/vehicles",render:function(){return Object(I.jsx)(F,{typeOfItems:"vehicles"})}}),Object(I.jsx)(T.a,{exact:!0,path:"/planets",render:function(){return Object(I.jsx)(U,{typeOfItems:"planets"})}}),Object(I.jsx)(T.a,{path:"/:species/:id",render:function(){return Object(I.jsx)(W,{})}})]})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))},G=a(41),K=a(14),Y=Object(K.c)({peoplesData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PEOPLE":return Object(o.a)(Object(o.a)({},e),{},{people:[].concat(Object(i.a)(t.payload.people),Object(i.a)(e.people))});default:return e}},planetsData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PLANETS":return Object(o.a)(Object(o.a)({},e),{},{planets:[].concat(Object(i.a)(t.payload.planets),Object(i.a)(e.planets))});default:return e}},starshipsData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STARSHIPS":return Object(o.a)(Object(o.a)({},e),{},{starships:[].concat(Object(i.a)(t.payload.starships),Object(i.a)(e.starships))});default:return e}},vehiclesData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VEHICLES":return Object(o.a)(Object(o.a)({},e),{},{vehicles:[].concat(Object(i.a)(t.payload.vehicles),Object(i.a)(e.vehicles))});default:return e}},specificItemData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SPECIFIC_ITEM":return Object(o.a)(Object(o.a)({},e),{},{specificItem:t.payload.specificItem});default:return e}}}),q=Object(K.d)(Y,Object(K.a)(G.a));r.a.render(Object(I.jsx)(n.a.StrictMode,{children:Object(I.jsx)(S.a,{store:q,children:Object(I.jsx)(v.a,{children:Object(I.jsx)(X,{})})})}),document.getElementById("root")),Z()}},[[73,1,2]]]);
//# sourceMappingURL=main.e70449a8.chunk.js.map