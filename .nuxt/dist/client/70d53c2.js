(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{206:function(e,t,r){var content=r(209);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(59).default)("6660e008",content,!0,{sourceMap:!1})},208:function(e,t,r){"use strict";r(206)},209:function(e,t,r){var n=r(58)(!1);n.push([e.i,".test-survey{margin:20px 0}.test-survey input{width:40px;margin:0 10px}.test-survey__line{margin:10px 0}",""]),e.exports=n},212:function(e,t,r){"use strict";r.r(t);var n=r(9),o=r(31);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={name:"Survey",computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)(["cards"]))},_=(r(208),r(24)),component=Object(_.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{staticClass:"test-survey"},e._l(e.cards,(function(t,n){return r("div",{key:n},[t?r("div",[r("h2",{staticClass:"card__title"},[e._v(e._s(t.name))]),e._v(" "),r("h3",{staticClass:"card__title"},[e._v(e._s(t.title))]),e._v(" "),t.fieldType?e._e():r("p",[e._v("Не выбрано условие")]),e._v(" "),"dropdown"==t.fieldType?r("div",[!t.fields||t.fields.length<1?r("p",[e._v("Не выбран параметр")]):e._e(),e._v(" "),e._l(t.fields,(function(n,o){return r("div",{key:o,staticClass:"test-survey__line"},[n.activetitle?r("input",{attrs:{type:"radio",name:t.name,id:""},domProps:{value:t.name}}):e._e(),e._v(" "),n.activetitle?r("label",{attrs:{for:t.name}},[e._v(e._s(n.activetitle))]):e._e()])}))],2):e._e(),e._v(" "),"range"==t.fieldType?r("div",[!t.fields||t.fields.length<1?r("p",[e._v("Не выбран диапазон")]):e._e(),e._v(" "),e._l(t.fields,(function(n,o){return r("div",{key:o,staticClass:"test-survey__line"},[n.from&&n.to?e._e():r("p",[e._v("Не выбран диапазон")]),e._v(" "),n.from&&n.to?r("label",{attrs:{for:t.name}},[e._v(e._s("От "+n.from+" до "+n.to+" "))]):e._e(),e._v(" "),n.from&&n.to?r("input",{attrs:{type:"number",min:n.from,max:n.to,name:t.name,id:""}}):e._e()])}))],2):e._e()]):e._e()])})),0),e._v(" "),r("nuxt-link",{staticClass:"big-button",attrs:{to:"/"}},[e._v(" Исправить ")])],1)}),[],!1,null,null,null);t.default=component.exports}}]);