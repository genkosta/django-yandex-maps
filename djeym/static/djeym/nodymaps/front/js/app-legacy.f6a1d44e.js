(function(e){function t(t){for(var a,l,i=t[0],s=t[1],c=t[2],u=0,p=[];u<i.length;u++)l=i[u],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&p.push(n[l][0]),n[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],a=!0,i=1;i<o.length;i++){var s=o[i];0!==n[s]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=o[0]))}return e}var a={},n={app:0},r=[];function l(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=a,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(o,a,function(t){return e[t]}.bind(null,a));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=s;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",{staticClass:"djeym",style:"width:"+e.widthMap+";height:"+e.heightMap+";",attrs:{id:"djeym-app"}},[o("v-sheet",{staticClass:"overflow-hidden",staticStyle:{position:"relative"},attrs:{tile:"",width:e.widthMap,height:e.heightMap}},[e.createPanel?o("v-navigation-drawer",{attrs:{app:"","hide-overlay":"",absolute:"",temporary:"",permanent:e.isPermanentPanel,width:e.widthPanel,height:e.heightMap,src:e.imgBgPanel},model:{value:e.openPanel,callback:function(t){e.openPanel=t},expression:"openPanel"}},[o("v-container",{staticClass:"pa-0",style:"min-height: 100%; background-color: "+e.tinting+";",attrs:{fluid:""}},[o("v-card-actions",{staticClass:"pb-0"},[o("v-spacer"),o("v-btn",{attrs:{icon:"",ripple:e.effectRipple},on:{click:function(t){t.stopPropagation(),e.isPermanentPanel=!1,e.openPanel=!1}}},[o("v-icon",{attrs:{color:e.colorControls}},[e._v("mdi-close")])],1)],1),o("v-tabs",{style:e.isHideTabs?"position: relative; top: -45px; z-index: -10;":"",attrs:{height:"42",centered:"","show-arrows":"","center-active":"","background-color":"transparent",color:e.colorControls},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[o("v-tabs-slider"),e._l(e.сategoryIcons,(function(t,a){return[e.isShowTab(a)?o("v-tab",{key:"button-tab-"+a,attrs:{href:"#tab-"+a,ripple:e.effectRipple}},[o("v-icon",[e._v(e._s(t))])],1):e._e()]}))],2),o("v-tabs-items",{style:"background-color: transparent;"+(e.isHideTabs?"top: -45px;":""),model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(3,(function(t,a){return o("v-tab-item",{key:"item-"+t,attrs:{value:"tab-"+a}},[0===a?[e.hideGeoTypes?e._e():o("v-card-title",{staticClass:"title pt-3 pb-0 px-3",class:e.centerGeoTypes?"justify-center":""},[e._v(e._s(e.geoTypeNameMarker?e.geoTypeNameMarker:e.$t("message.1")))])]:e._e(),1===a?[e.hideGeoTypes?e._e():o("v-card-title",{staticClass:"title pt-3 pb-0 px-3",class:e.centerGeoTypes?"justify-center":""},[e._v(e._s(e.geoTypeNameRoute?e.geoTypeNameRoute:e.$t("message.2")))])]:e._e(),2===a?[e.hideGeoTypes?e._e():o("v-card-title",{staticClass:"title pt-3 pb-0 px-3",class:e.centerGeoTypes?"justify-center":""},[e._v(e._s(e.geoTypeNameTerritory?e.geoTypeNameTerritory:e.$t("message.3")))])]:e._e(),e.hideGeoTypes?e._e():o("v-divider"),e.hideGeoTypes?o("div",{staticClass:"pt-4"}):e._e(),o("v-container",{staticClass:"pt-0",attrs:{fluid:""}},e._l(e.nextTwoFilters(a),(function(t,a,n){return o("v-list",{key:"filters-"+a,staticClass:"pa-0",staticStyle:{"background-color":"transparent"},attrs:{shaped:"shaped"===e.controlsShape,rounded:"rounded"===e.controlsShape,flat:"flat"===e.controlsShape,dense:""}},[0===n?[o("v-card-subtitle",{staticClass:"font-italic px-0 pb-1",class:n?"pt-1":"pt-0"},[e._v(e._s(t.length&&!e.hideGroupNames?e.groupNameCategories?e.groupNameCategories:e.$t("message.4"):""))])]:e._e(),1===n?[o("v-card-subtitle",{staticClass:"font-italic px-0 pb-1",class:n?"pt-1":"pt-0"},[e._v(e._s(t.length&&!e.hideGroupNames?e.groupNameSubcategories?e.groupNameSubcategories:e.$t("message.5"):""))])]:e._e(),o("v-list-item-group",{attrs:{multiple:(n+1)%2==0||e.multiple},model:{value:e.models[a],callback:function(t){e.$set(e.models,a,t)},expression:"models[modelKey]"}},e._l(t,(function(t){return o("v-list-item",{key:"control-"+t.id,staticClass:"mb-1",attrs:{color:t.color,ripple:e.effectRipple},on:{click:function(o){t.isActive=!t.isActive,e.filtering({id:t.id,modelKey:a})}}},[o("v-list-item-icon",{staticClass:"my-auto mr-3"},[o("v-icon",{attrs:{color:t.color}},[e._v(e._s(t.icon))])],1),o("v-list-item-content",[o("v-list-item-title",{staticClass:"subtitle-2 djeym-white-space-normal"},[e._v(e._s(t.title))])],1)],1)})),1)],2)})),1)],2)})),1)],1)],1):e._e(),e.createForm?o("v-navigation-drawer",{attrs:{app:"",right:"",absolute:"",temporary:"","hide-overlay":"",permanent:e.isPermanentForm,height:e.heightMap},model:{value:e.openForm,callback:function(t){e.openForm=t},expression:"openForm"}},[o("v-container",{staticClass:"pt-0",attrs:{fluid:""}},[o("v-row",[o("v-col",{staticClass:"pt-3 pb-5",attrs:{cols:"12"}},[o("v-select",{attrs:{items:e.customMarkerCategoryList,"item-text":"title","item-value":"id",label:e.$t("message.4"),dense:"","prepend-icon":"mdi-select-marker",color:e.colorControls,"item-color":e.colorControls,"hide-details":""},model:{value:e.updateCustomMarkerCategory,callback:function(t){e.updateCustomMarkerCategory=t},expression:"updateCustomMarkerCategory"}})],1)],1),e.customMarkerSubcategoryList.length?o("v-row",[o("v-col",{staticClass:"pt-3 pb-5",attrs:{cols:"12"}},[o("v-select",{attrs:{items:e.customMarkerSubcategoryList,"item-text":"title","item-value":"id",label:e.$t("message.5"),dense:"",multiple:"","prepend-icon":"mdi-select-multiple-marker",color:e.colorControls,"item-color":e.colorControls,"hide-details":""},model:{value:e.updateCustomMarkerSubcategories,callback:function(t){e.updateCustomMarkerSubcategories=t},expression:"updateCustomMarkerSubcategories"}})],1)],1):e._e(),o("v-row",[o("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"12"}},[o("v-file-input",{attrs:{label:e.$t("message.7"),"prepend-icon":"mdi-camera-outline",accept:"image/jpeg",hint:e.$t("message.15"),"persistent-hint":"",clearable:"",color:e.colorControls},on:{change:e.optimizeImage}})],1)],1),o("v-row",[o("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:e.$t("message.6"),color:e.colorControls,counter:"60","prepend-icon":"mdi-map-marker-circle",rules:e.titleRules(),clearable:""},model:{value:e.customMarkerTitle,callback:function(t){e.customMarkerTitle=t},expression:"customMarkerTitle"}})],1)],1),o("v-row",[o("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[o("v-textarea",{attrs:{counter:"300",label:e.$t("message.8"),rows:"1","prepend-icon":"mdi-tooltip-text-outline",color:e.colorControls,rules:e.descriptionRules(),clearable:""},model:{value:e.customMarkerDescription,callback:function(t){e.customMarkerDescription=t},expression:"customMarkerDescription"}})],1)],1),o("v-row",[o("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:e.$t("message.11"),color:e.colorControls,maxlength:"254","prepend-icon":"mdi-email-outline",clearable:"",rules:e.emailRules()},model:{value:e.customMarkerEmail,callback:function(t){e.customMarkerEmail=t},expression:"customMarkerEmail"}})],1)],1),o("v-row",[o("v-col",{attrs:{cols:"9"}},[o("v-btn",{attrs:{tile:"",depressed:"",block:"",color:"green darken-1",ripple:e.effectRipple},on:{click:function(t){return e.saveCustomMarker()}}},[o("span",{staticClass:"white--text"},[e._v(e._s(e.$t("message.10")))])])],1),o("v-col",{staticClass:"pl-0",attrs:{cols:"3"}},[o("v-btn",{attrs:{tile:"",depressed:"",block:"",color:"red darken-1",ripple:e.effectRipple},on:{click:function(t){return e.closeCustomMarker()}}},[o("v-icon",{attrs:{color:"white"}},[e._v("mdi-close")])],1)],1)],1)],1)],1):e._e(),o("v-container",{staticClass:"pa-0 fill-height",attrs:{fluid:""}},[o("div",{staticClass:"djeym-ymap",attrs:{fluid:"",id:"djeymYMapsID"}})]),o("v-snackbar",{attrs:{top:"","multi-line":"",vertical:"",timeout:0,color:e.$vuetify.theme.dark?"#323232":"white"},model:{value:e.showAlert,callback:function(t){e.showAlert=t},expression:"showAlert"}},[o("span",{class:e.$vuetify.theme.dark?"grey--text text--lighten-5":"grey--text text--darken-4",domProps:{innerHTML:e._s("<table><tr><td width='36px'><span class='mdi mdi-information-variant mdi-36px' style='position:relative;top:-10px;color:#1E88E5;'></span></td><td valign='top'>"+e.textAlert+"</td></tr></table>")}}),o("v-btn",{attrs:{text:"",color:"pink",ripple:e.effectRipple},on:{click:function(t){e.showAlert=!e.showAlert}}},[e._v(e._s(e.$t("message.16")))])],1),o("v-overlay",{attrs:{"z-index":"10000",value:e.progressBar}},[o("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),o("canvas",{staticClass:"djeym-hide",attrs:{id:"djeym-canvas"}})],1)],1)},r=[],l=(o("99af"),o("4de4"),o("4160"),o("a630"),o("caad"),o("d81d"),o("fb6a"),o("c19f"),o("ace4"),o("b64b"),o("d3b7"),o("07ac"),o("ac1f"),o("2532"),o("3ca3"),o("1276"),o("5cc6"),o("9a8c"),o("a975"),o("735e"),o("c1ac"),o("d139"),o("3a7b"),o("d5d6"),o("82f8"),o("e91f"),o("60bd"),o("5f96"),o("3280"),o("3fcc"),o("ca91"),o("25a1"),o("cd26"),o("3c5d"),o("2954"),o("649e"),o("219c"),o("170b"),o("b39a"),o("72f7"),o("159b"),o("ddb0"),o("ade3")),i={name:"App",data:function(){return{enableAjax:!0,createPanel:!1,createForm:!1,themeType:"light",colorControls:"#FFA000",colorButtonsText:"#212121",widthMap:"0",heightMap:"0",openPanel:!1,tmpOpenPanel:!1,isPermanentPanel:!1,widthPanel:380,imgBgPanel:void 0,tinting:"#00000000",tab:null,multiple:!0,isHideTabs:!1,centerGeoTypes:!1,hideGeoTypes:!1,geoTypeNameMarker:"",geoTypeNameRoute:"",geoTypeNameTerritory:"",hideGroupNames:!1,groupNameCategories:"",groupNameSubcategories:"",controlsShape:"shaped",effectRipple:!0,openForm:!1,isPermanentForm:!1,customMarkerTitle:null,customMarkerDescription:null,customMarkerEmail:null,customMarkerCategory:null,customMarkerSubcategories:[],customMarkerCategoryList:[],customMarkerSubcategoryList:[],customMarkerCoordinates:[0,0],customPlacemark:null,progressBar:!1,optimizedImgBlob:null,currImg:null,"сategoryIcons":["mdi-map-marker","mdi-routes","mdi-beach"],transCategoryNames:[1,2,3],transGroupNames:[4,5],filters:{a:[],b:[],c:[],d:[],e:[],f:[]},models:{a:[],b:[],c:[],d:[],e:[],f:[]},Map:null,mapCursor:null,isActiveHeatmap:!1,globalHeatmap:null,globalHeatPoints:null,globalObjMngPlacemark:null,globalObjMngPolyline:null,globalObjMngPolygon:null,showAlert:!1,textAlert:""}},computed:{updateCustomMarkerCategory:{get:function(){return this.customMarkerCategory},set:function(e){this.customMarkerCategory=e}},updateCustomMarkerSubcategories:{get:function(){return this.customMarkerSubcategories},set:function(e){this.customMarkerSubcategories=e}}},methods:{optimizeImage:function(e){var t=this;if(window.File&&window.FileReader&&window.FileList&&window.Blob){if(this.currImg=e,null!==e){var o,a,n=966,r=n,l=n,i=new FileReader,s=new Image;i.onload=function(){s.onload=function(){o=s.width,a=s.height,o>a?o>r&&(a=Math.floor(a*(r/o)),o=r):a>l&&(o=Math.floor(o*l/a),a=l);var n=window.document.getElementById("djeym-canvas"),i=n.getContext("2d");i.clearRect(0,0,n.width,n.height),n.width=o,n.height=a,i.drawImage(s,0,0,o,a);var c=n.toDataURL(e.type),d=function(e){for(var t=atob(e.split(",")[1]),o=new ArrayBuffer(t.length),a=new Uint8Array(o),n=0;n<t.length;n++)a[n]=t.charCodeAt(n);return new Blob([o],{type:"image/jpeg"})};t.optimizedImgBlob=d(c)},s.src=i.result},i.readAsDataURL(e)}}else this.alertSnackbarShow(this.$t("message.18"))},titleRules:function(){var e=this;return[function(t){return!!t||e.$t("message.12")},function(t){return String(t).length<=60||e.$t("message.13")}]},descriptionRules:function(){var e=this;return[function(t){return!!t||e.$t("message.12")},function(t){return String(t).length<=300||e.$t("message.14")}]},emailRules:function(){var e=this;return[function(t){return!!t||e.$t("message.12")}]},isShowTab:function(e){var t=this.filters;switch(e){case 0:return t.a.length>0||t.b.length>0;case 1:return t.c.length>0||t.d.length>0;case 2:return t.e.length>0||t.f.length>0}},nextTwoFilters:function(e){var t=this.filters,o={};return Object.keys(t).slice(e*=2,e+2).map((function(e){return Object(l["a"])({},e,t[e])})).forEach((function(e){o[Object.keys(e)[0]]=Object.values(e)[0]})),o},generalFilter:function(e){var t=[],o=[],a=0;this.filters[e.filterName1].forEach((function(e){e.isActive&&t.push(e.id)})),this.filters[e.filterName2].forEach((function(e){e.isActive&&o.push(e.id)})),a=o.length,a>0?this[e.globalObjMngName].setFilter((function(e){var n=e.properties.subCategoryIDs;return t.includes(e.properties.categoryID)&&n.filter((function(e){return o.includes(e)})).length===a})):this[e.globalObjMngName].setFilter((function(e){return t.includes(e.properties.categoryID)}))},filtering:function(e){var t=e.id,o=e.modelKey;if(!this.multiple&&["a","c","e","g","i"].includes(o))for(var a=this.filters[o],n=0,r=a.length;n<r;n++){var l=a[n];if(l.isActive&&l.id!==t){l.isActive=!1;break}}switch(o){case"a":case"b":this.generalFilter({filterName1:"a",filterName2:"b",globalObjMngName:"globalObjMngPlacemark"});break;case"c":case"d":this.generalFilter({filterName1:"c",filterName2:"d",globalObjMngName:"globalObjMngPolyline"});break;case"e":case"f":this.generalFilter({filterName1:"e",filterName2:"f",globalObjMngName:"globalObjMngPolygon"});break}},refreshVisibilityGeoObjects:function(){var e=this,t=[{filterName1:"a",filterName2:"b",globalObjMngName:"globalObjMngPlacemark"},{filterName1:"c",filterName2:"d",globalObjMngName:"globalObjMngPolyline"},{filterName1:"e",filterName2:"f",globalObjMngName:"globalObjMngPolygon"}];t.forEach((function(t){e.generalFilter({filterName1:t.filterName1,filterName2:t.filterName2,globalObjMngName:t.globalObjMngName})}))},ajaxErrorMessage:function(e,t,o,a){var n="".concat(t," , ").concat(o),r="ERROR<br>Request Failed -> ".concat(n),l="";void 0!==e.responseJSON&&void 0!==e.responseJSON.detail&&(l=e.responseJSON.detail),window.console.log(r),this.textAlert="".concat(r,"<br>Hint -> ").concat(a,"<br>").concat(l),this.showAlert=!0},uploadSettings:function(){var e=this;this.enableAjax&&window.$.getJSON("/djeym/ajax-upload-settings-front/",{mapID:window.djeymMapID}).done((function(t){e.themeType=t.themeType,e.$vuetify.theme.dark={light:!1,dark:!0}[e.themeType],e.colorControls=t.colorControls,e.colorButtonsText=t.colorButtonsText,e.widthPanel=t.widthPanel,e.сategoryIcons=t.сategoryIcons,e.imgBgPanel=t.imgBgPanel||void 0,e.tinting=t.tinting,e.centerGeoTypes=t.centerGeoTypes,e.hideGeoTypes=t.hideGeoTypes,e.geoTypeNameMarker=t.geoTypeNameMarker,e.geoTypeNameRoute=t.geoTypeNameRoute,e.geoTypeNameTerritory=t.geoTypeNameTerritory,e.hideGroupNames=t.hideGroupNames,e.groupNameCategories=t.groupNameCategories,e.groupNameSubcategories=t.groupNameSubcategories,e.controlsShape=t.controlsShape,e.effectRipple=t.effectRipple;var o=t.multiple,a=t.filters;e.multiple=o,e.filters=a;var n=e.models,r=!0;for(var l in a)r&&(n[l]=o?Array.from(Array(a[l].length).keys()):0),r=!r;e.customMarkerCategoryList=a.a.map((function(e){return{id:e.id,title:e.title}})),e.customMarkerSubcategoryList=a.b.map((function(e){return{id:e.id,title:e.title}}));var i=[a.a.length>0||a.b.length>0,a.c.length>0||a.d.length>0,a.e.length>0||a.f.length>0];e.isHideTabs=i.filter((function(e){return e})).length<2,t.openPanel?e.tmpOpenPanel=!0:(e.isPermanentPanel=!1,e.tmpOpenPanel=!1),e.isActiveHeatmap=t.heatmap.isActive,window.djeymYMaps.ready().then((function(){return e.initMap(t)}))})).fail((function(t,o,a){var n="Ajax - Upload all settings.";e.ajaxErrorMessage(t,o,a,n)}))},closeCustomMarker:function(){this.Map.balloon.close(),this.Map.geoObjects.remove(this.customPlacemark),this.customMarkerTitle=null,this.customMarkerDescription=null,this.customMarkerEmail=null,this.updateCustomMarkerCategory=null,this.updateCustomMarkerSubcategories=[],this.customMarkerCoordinates=[0,0],this.customPlacemark=null,this.isPermanentForm=!1,this.openForm=!1,this.progressBar=!1,this.optimizedImgBlob=null,this.currImg=null,this.showAlert=!1,this.mapCursor.remove()},saveCustomMarker:function(){var e=this;this.Map.balloon.close(),this.showAlert=!1;var t=this.customMarkerTitle,o=this.customMarkerDescription,a=this.customMarkerEmail,n=this.updateCustomMarkerCategory;if(!n)return this.textAlert="".concat(this.$t("message.4")," --\x3e ").concat(this.$t("message.12")),void(this.showAlert=!0);if(null===t)return this.textAlert="".concat(this.$t("message.6")," --\x3e ").concat(this.$t("message.12")),void(this.showAlert=!0);if(null===o)return this.textAlert="".concat(this.$t("message.8")," --\x3e ").concat(this.$t("message.12")),void(this.showAlert=!0);if(null===a)return this.textAlert="".concat(this.$t("message.11")," --\x3e ").concat(this.$t("message.12")),void(this.showAlert=!0);this.progressBar=!0;var r=new FormData;r.append("ymap",window.djeymMapID),r.append("csrfmiddlewaretoken",window.djeymCSRFToken),r.append("header",t),r.append("body",o),r.append("footer",""),r.append("category",+n),r.append("user_email",a),r.append("icon_slug","djeym-marker-default"),r.append("coordinates",JSON.stringify(this.customMarkerCoordinates)),r.append("active",!1),r.append("is_user_marker",!0),null!==this.currImg?r.append("user_image",this.optimizedImgBlob,"pic.jpg"):r.append("user_image",null),this.updateCustomMarkerSubcategories.forEach((function(e){r.append("subcategories",+e)})),window.$.ajax({type:"POST",url:"/djeym/ajax-save-cusotm-marker/",data:r,cache:!1,processData:!1,contentType:!1,dataType:"json"}).done((function(){setTimeout((function(){e.closeCustomMarker(),e.textAlert=e.$t("message.9"),e.showAlert=!0}),1e3)})).fail((function(t,o,a){setTimeout((function(){e.progressBar=!1;var n="Ajax - Save custom marker.";e.ajaxErrorMessage(t,o,a,n)}),1e3)}))},addPlacemarkTypeObjects:function(e){this.globalObjMngPlacemark.add({type:"FeatureCollection",features:e})},addHeatPoints:function(e){this.isActiveHeatmap&&(this.globalHeatPoints.features.push(e),this.globalHeatmap.setData(this.globalHeatPoints))},addPolylineTypeObjects:function(e){this.globalObjMngPolyline.add({type:"FeatureCollection",features:e})},addPolygonTypeObjects:function(e){this.globalObjMngPolygon.add({type:"FeatureCollection",features:e})},initMap:function(e){var t,o=this,a=e.currentTile,n=null!==a?new Function("return "+a.randomTileUrl):null,r=e.activeControls.includes("typeSelector"),l=e.activeControls.filter((function(e){return"typeSelector"!==e})),i=e.isRoundTheme,s=e.heatmap,c=[],d=function e(){c[3]=setTimeout((function(){var t=document.getElementById("djeymLoadIndicator");if(null!==t){t.style.display="block";var o=window.$("ymaps:regex(class, .*-balloon__content) img"),a=!1,n=0;if(0===o.length?a=!0:(o.each((function(e,t){t.complete&&n++})),n===o.length&&(a=!0)),a){window.$(".djeymUpdateInfoPreset").each((function(e,t){window.$(t).trigger("click")}));var r=document.getElementById("djeymModalLock");null!==r&&(c[1]=setTimeout((function(){c[0]=setTimeout((function(){r.remove()}),600),r.style.opacity=0}),200))}else c[2]=setTimeout((function(){e()}),100)}}),500)},u=window.djeymYMaps.templateLayoutFactory.createClass('<div class="djeym-pos-relative djeym-fill-hight"><div id="djeymModalLock"><div id="djeymLoadIndicator"></div></div><div class="djeym_ballon_header">{{ properties.balloonContentHeader|raw }}</div><div class="djeym_ballon_body">{{ properties.balloonContentBody|raw }}</div><div class="djeym_ballon_footer">{{ properties.balloonContentFooter|raw }}</div></div>'),p=window.djeymYMaps.templateLayoutFactory.createClass('<div class="djeym_layout_cluster_icon"><span style="background-color:'+e.colorBackgroundCountObjects+";color:"+e.textColorCountObjects+';">$[properties.geoObjects.length]</span></div>'),m=new window.djeymYMaps.Map("djeymYMapsID",{center:e.mapCenter,zoom:e.mapZoom,type:null,controls:i?[]:l},{minZoom:null!==a?a.minZoom:0,maxZoom:null!==a?a.maxZoom:23,geoObjectHasBalloon:!0,hasHint:!1,geoObjectBalloonMinWidth:322,geoObjectBalloonMaxWidth:342,geoObjectBalloonMinHeight:window.djeymBalloonMinHeight,geoObjectBalloonPanelMaxMapArea:0,geoObjectOpenBalloonOnClick:!0});if(this.Map=m,r)if(i?t=new window.djeymYMaps.control.TypeSelector({options:{layout:"round#listBoxLayout",size:"small",float:"none",position:{bottom:"40px",left:"10px"}}}):(t=new window.djeymYMaps.control.TypeSelector,t.options.set("panoramasItemMode",e.isPanorama?"ifMercator":"off")),t.addMapType("yandex#map",2),t.addMapType("yandex#satellite",3),t.addMapType("yandex#hybrid",4),null!==a){var g=function(){var e=new window.djeymYMaps.Layer(n(),{projection:window.djeymYMaps.projection.sphericalMercator});return e.getCopyrights=function(){return window.djeymYMaps.vow.resolve(a.copyrights)},e.getZoomRange=function(){return window.djeymYMaps.vow.resolve([a.minZoom,a.maxZoom])},e};window.djeymYMaps.layer.storage.add("tile#aerial",g);var b=new window.djeymYMaps.MapType(a.title,["tile#aerial"]);window.djeymYMaps.mapType.storage.add("tile#current",b),t.addMapType("tile#current",1),m.controls.add(t),m.setType("tile#current",{checkZoomRange:!0})}else m.controls.add(t),m.setType("yandex#map");else null!==a?(m.layers.add(new window.djeymYMaps.Layer(n(),{projection:window.djeymYMaps.projection.sphericalMercator})),m.copyrights.add(a.copyrights)):m.setType("yandex#map");if(i){if(l.includes("geolocationControl")){var f=new window.djeymYMaps.control.GeolocationControl({options:{layout:"round#buttonLayout",floatIndex:4,size:"small"}});m.controls.add(f)}if(l.includes("routeButtonControl")){var y=new window.djeymYMaps.control.Button({data:{iconType:"routes"},options:{layout:"round#buttonLayout",floatIndex:2,size:"small"}});m.controls.add(y),m.controls.add("routePanelControl",{visible:!1,showHeader:!0,floatIndex:1,float:"left",top:"auto",right:"auto",bottom:"auto",left:"auto"});var h=m.controls.get("routePanelControl");y.events.add("press",(function(){h.options.get("visible")?(h.options.set("visible",!1),h.routePanel.state.set("fromEnabled",!1)):(h.options.set("visible",!0),h.routePanel.state.set("fromEnabled",!0))}))}if(l.includes("searchControl")){var v=new window.djeymYMaps.control.SearchControl({options:{size:"small",float:"none",position:{top:-40}}}),w=new window.djeymYMaps.control.Button({data:{iconType:"loupe"},options:{layout:"round#buttonLayout",size:"small",floatIndex:3,selectOnClick:!1,float:"left"}});w.events.add("press",(function(){window.$("ymaps:regex(class, ymaps-.+-float-button-icon_icon_magnifier)").trigger("click")})),m.controls.add(v),m.controls.add(w)}if(l.includes("trafficControl")){var j=new window.djeymYMaps.control.TrafficControl({options:{visible:!1}}),M=new window.djeymYMaps.control.Button({data:{iconType:"traffic"},options:{layout:"round#buttonLayout",floatIndex:1,size:"small",float:"right"}});M.events.add("press",(function(){j.isTrafficShown()?j.hideTraffic():j.showTraffic()})),m.controls.add(j),m.controls.add(M)}if(l.includes("fullscreenControl")){var k=new window.djeymYMaps.control.FullscreenControl({data:{iconType:"expand"},options:{layout:"round#buttonLayout",size:"small",floatIndex:2,selectOnClick:!1}});k.events.add("press",(function(){k.isSelected()?m.container.exitFullscreen():m.container.enterFullscreen()})),m.container.events.add("fullscreenenter",(function(){k.data.set({iconType:"collapse"}),k.select()})),m.container.events.add("fullscreenexit",(function(){k.data.set({iconType:"expand"}),k.deselect()})),m.controls.add(k)}if(l.includes("zoomControl")){var C=new window.djeymYMaps.control.ZoomControl({options:{layout:"round#zoomLayout",size:"small"}});m.controls.add(C)}if(l.includes("rulerControl")){var P=new window.djeymYMaps.control.RulerControl({options:{layout:"round#rulerLayout",size:"small",position:{bottom:"40px",right:"10px"}}});m.controls.add(P)}}else l.includes("searchControl")&&e.isSearchByOrganization&&m.controls.get("searchControl").options.set("provider","yandex#search");s.isActive&&window.djeymYMaps.modules.require(["Heatmap"],(function(e){o.globalHeatPoints={type:"FeatureCollection",features:[]},o.globalHeatmap=new e(o.globalHeatPoints,{radius:s.radius,dissipating:s.dissipating,opacity:s.opacity,intensityOfMidpoint:s.intensity,gradient:{.1:s.gradient.color1,.2:s.gradient.color2,.7:s.gradient.color3,1:s.gradient.color4}}),o.globalHeatmap.setMap(m)})),m.events.add("balloonopen",(function(){for(var e=0,t=c.length;e<t;e++)clearTimeout(c[e]);d()})),window.$(document).on("click","ymaps:regex(class, .*-cluster-tabs__menu-item.*), ymaps:regex(class, .*-cluster-carousel__pager-item.*), ymaps:regex(class, .*-cluster-carousel__nav.*)",(function(e){e.stopPropagation();for(var t=0,o=c.length;t<o;t++)clearTimeout(c[t]);d()}));var x={geoObjectHasBalloon:!0,geoObjectHasHint:!1,geoObjectBalloonMinWidth:322,geoObjectBalloonMaxWidth:342,geoObjectBalloonMinHeight:window.djeymBalloonMinHeight,geoObjectBalloonPanelMaxMapArea:0,geoObjectBalloonContentLayout:u,geoObjectOpenBalloonOnClick:!1},O=parseInt(Math.min.apply(null,e.cluster.size)/2),T={clusterize:e.isClusterize,clusterHasBalloon:!0,clusterHasHint:!1,clusterIconContentLayout:e.isIconContentLayout?p:null,clusterBalloonItemContentLayout:u,clusterDisableClickZoom:!0,clusterOpenBalloonOnClick:!1,showInAlphabeticalOrder:!1,clusterBalloonPanelMaxMapArea:0,clusterMaxZoom:m.options.get("maxZoom"),gridSize:128,margin:O+2,clusterBalloonContentLayout:e.balloonContentLayout,clusterIcons:[{href:e.cluster.url,size:e.cluster.size,offset:e.cluster.offset,shape:{type:"Circle",coordinates:[0,0],radius:O}}]};Object.assign(T,x),this.globalObjMngPlacemark=new window.djeymYMaps.ObjectManager(T),this.globalObjMngPolyline=new window.djeymYMaps.ObjectManager(x),this.globalObjMngPolygon=new window.djeymYMaps.ObjectManager(x);var I=function(e){return e.properties.balloonContentHeader="",e.properties.balloonContentBody="",e.properties.balloonContentFooter="",e};this.globalObjMngPlacemark.clusters.events.add("click",(function(e){m.balloon.close(!0);for(var t=e.get("objectId"),a=o.globalObjMngPlacemark.clusters.getById(t),n=a.properties.geoObjects,r=n.length,l=[],i=0;i<r;i++)l.push(n[i].properties.id);for(var s=0;s<r;s++)o.globalObjMngPlacemark.clusters.balloon.setData(I(n[s]));setTimeout((function(){o.globalObjMngPlacemark.clusters.balloon.open(t)}),100),window.$.get("/djeym/ajax-balloon-content/",{ids:JSON.stringify(l),objType:"Point",isPresets:"True"}).done((function(e){for(var t,o,a=0;a<r;a++)t=n[a],o=e[t.properties.id],t.properties.balloonContentHeader=o.header,t.properties.balloonContentBody=o.body,t.properties.balloonContentFooter=o.footer;window.$("ymaps:regex(class, .*-cluster-tabs__menu-item.*)").eq(0).trigger("click")})).fail((function(e,t,a){var n="".concat(t," , ").concat(a),r="ERROR<br>Request Failed -> ".concat(n),l="Ajax - Uploading content for Cluster.";window.console.log(r),o.textAlert="".concat(r," <br>Hint -> ").concat(l),o.showAlert=!0}))}));var _=function(e){m.balloon.close(!0);var t=e.geometry.type;setTimeout((function(){"Point"===t?o.globalObjMngPlacemark.objects.balloon.open(e.id):"LineString"===t?o.globalObjMngPolyline.objects.balloon.open(e.id):"Polygon"===t&&o.globalObjMngPolygon.objects.balloon.open(e.id)}),100),window.$.get("/djeym/ajax-balloon-content/",{objID:e.properties.id,objType:t,isPresets:"True"}).done((function(a){e.properties.balloonContentHeader=a.header,e.properties.balloonContentBody=a.body,e.properties.balloonContentFooter=a.footer,"Point"===t?o.globalObjMngPlacemark.objects.balloon.setData(e):"LineString"===t?o.globalObjMngPolyline.objects.balloon.setData(e):"Polygon"===t&&o.globalObjMngPolygon.objects.balloon.setData(e)})).fail((function(e,t,a){var n="".concat(t," , ").concat(a),r="ERROR<br>Request Failed -> ".concat(n),l="Ajax - Uploading content for geo objects.";window.console.log(r),o.textAlert="".concat(r," <br>Hint -> ").concat(l),o.showAlert=!0}))};this.globalObjMngPlacemark.objects.events.add("click",(function(e){var t=e.get("objectId"),a=o.globalObjMngPlacemark.objects.getById(t);a=I(a),_(a)})),this.globalObjMngPolyline.objects.events.add("click",(function(e){var t=e.get("objectId"),a=o.globalObjMngPolyline.objects.getById(t);a=I(a),_(a)})),this.globalObjMngPolygon.objects.events.add("click",(function(e){var t=e.get("objectId"),a=o.globalObjMngPolygon.objects.getById(t);a=I(a),_(a)})),m.geoObjects.add(this.globalObjMngPlacemark),m.geoObjects.add(this.globalObjMngPolyline),m.geoObjects.add(this.globalObjMngPolygon),this.refreshVisibilityGeoObjects();var A=function e(t){window.$.getJSON("/djeym/ajax-upload-placemarks/",{mapID:window.djeymMapID,offset:t}).done((function(a){setTimeout((function(){a.length>0?(o.addPlacemarkTypeObjects(a),t+=1e3,e(t)):setTimeout((function(){return S(0)}),0)}),0)})).fail((function(e,t,a){var n="".concat(t," , ").concat(a),r="ERROR<br>Request Failed -> ".concat(n),l="Ajax - Load Placemarks.";window.console.log(r),o.textAlert="".concat(r," <br>Hint -> ").concat(l),o.showAlert=!0}))};A(0);var S=function e(t){window.$.getJSON("/djeym/ajax-upload-heat-points/",{mapID:window.djeymMapID,offset:t}).done((function(a){setTimeout((function(){a.length>0?(o.addHeatPoints(a),t+=1e3,e(t)):setTimeout((function(){return N(0)}),0)}),0)})).fail((function(e,t,a){var n="".concat(t," , ").concat(a),r="ERROR<br>Request Failed -> ".concat(n),l="Ajax - Loading Thermal points.";window.console.log(r),o.textAlert="".concat(r," <br>Hint -> ").concat(l),o.showAlert=!0}))},N=function e(t){window.$.getJSON("/djeym/ajax-upload-polylines/",{mapID:window.djeymMapID,offset:t}).done((function(a){setTimeout((function(){a.length>0?(o.addPolylineTypeObjects(a),t+=500,e(t)):setTimeout((function(){return R(0)}),0)}),0)})).fail((function(e,t,a){var n="".concat(t," , ").concat(a),r="ERROR<br>Request Failed -> ".concat(n),l="Ajax - Load Polylines.";window.console.log(r),o.textAlert="".concat(r," <br>Hint -> ").concat(l),o.showAlert=!0}))},R=function e(t){window.$.getJSON("/djeym/ajax-upload-polygons/",{mapID:window.djeymMapID,offset:t}).done((function(a){setTimeout((function(){a.length>0?(o.addPolygonTypeObjects(a),t+=500,e(t)):setTimeout((function(){window.$("#djeym-open-panel").length&&(o.createPanel=!0),window.$("#djeym-add-marker").length&&(o.createForm=!0),setTimeout((function(){o.tmpOpenPanel&&(o.openPanel=!0,o.isPermanentPanel=!0),window.$(document).on("click","#djeym-open-panel",(function(){o.openPanel=!0,o.isPermanentPanel=!0})),window.$(document).on("click","#djeym-add-marker",(function(){o.openForm||(o.Map.balloon.close(),o.mapCursor=o.Map.cursors.push("arrow"),o.isPermanentPanel=!1,o.openPanel=!1,o.openForm=!0,o.isPermanentForm=!0,o.customPlacemark=new window.djeymYMaps.Placemark(m.getCenter(),{hintContent:"",balloonContent:""},{iconLayout:"default#image",iconImageHref:"/static/djeym/img/center.svg",iconImageSize:[32,60],iconImageOffset:[-16,-60],draggable:!0}),o.customPlacemark.events.add("drag",(function(e){var t=e.get("target").geometry.getCoordinates();o.customMarkerCoordinates=t})),o.Map.geoObjects.add(o.customPlacemark),o.textAlert=o.$t("message.17"),o.showAlert=!0)})),o.Map.events.add("click",(function(e){if(null!==o.customPlacemark){var t=e.get("coords");o.customPlacemark.geometry.setCoordinates(t),o.customMarkerCoordinates=t}}))}),void 0!==o.imgBgPanel?1e3:0)}),0)}),0)})).fail((function(e,t,a){var n="".concat(t," , ").concat(a),r="ERROR<br>Request Failed -> ".concat(n),l="Ajax - Load Polygons.";window.console.log(r),o.textAlert="".concat(r," <br>Hint -> ").concat(l),o.showAlert=!0}))}}},created:function(){this.widthMap=window.djeymWidthMap,this.heightMap=window.djeymHeightMap,void 0!==window.djeymMapID&&window.$(".djeym-button-bar").show(),this.uploadSettings()}},s=i,c=(o("abb1"),o("2877")),d=o("6544"),u=o.n(d),p=o("7496"),m=o("8336"),g=o("99d9"),b=o("62ad"),f=o("a523"),y=o("ce7e"),h=o("23a7"),v=o("132d"),w=o("8860"),j=o("da13"),M=o("5d23"),k=o("1baa"),C=o("34c3"),P=o("f774"),x=o("a797"),O=o("490a"),T=o("0fd9"),I=o("b974"),_=o("8dd9"),A=o("2db4"),S=o("2fa4"),N=o("71a3"),R=o("c671"),B=o("fe57"),$=o("aac8"),F=o("9a96"),L=o("8654"),H=o("a844"),D=Object(c["a"])(s,n,r,!1,null,"1a3baa09",null),V=D.exports;u()(D,{VApp:p["a"],VBtn:m["a"],VCardActions:g["a"],VCardSubtitle:g["b"],VCardTitle:g["c"],VCol:b["a"],VContainer:f["a"],VDivider:y["a"],VFileInput:h["a"],VIcon:v["a"],VList:w["a"],VListItem:j["a"],VListItemContent:M["a"],VListItemGroup:k["a"],VListItemIcon:C["a"],VListItemTitle:M["b"],VNavigationDrawer:P["a"],VOverlay:x["a"],VProgressCircular:O["a"],VRow:T["a"],VSelect:I["a"],VSheet:_["a"],VSnackbar:A["a"],VSpacer:S["a"],VTab:N["a"],VTabItem:R["a"],VTabs:B["a"],VTabsItems:$["a"],VTabsSlider:F["a"],VTextField:L["a"],VTextarea:H["a"]});var Y=o("f309");a["a"].use(Y["a"]);var E={icons:{iconfont:"mdi"}},z=new Y["a"](E),G=o("a925");a["a"].use(G["a"]);var J={en:{message:{1:"Places",2:"Routes",3:"Territories",4:"Categories",5:"Subcategories",6:"Title",7:"Upload image",8:"Short description",9:"The marker will appear on the map after successful moderation.",10:"Save",11:"Your E-mail",12:"Required",13:"Max 60 characters",14:"Max 300 characters",15:"Only JPG files",16:"Close",17:"1. Click on the map in the right place.<br>2. If necessary, move the marker.",18:"The File APIs are not fully supported in this browser.",19:"Invalid address"}},ru:{message:{1:"Места",2:"Маршруты",3:"Территории",4:"Категории",5:"Подкатегории",6:"Название",7:"Загрузите изображение",8:"Краткое описание",9:"Маркер появится на карте после успешной модерации.",10:"Сохранить",11:"Ваш E-mail",12:"Обязательно",13:"Макс. 60 символов",14:"Макс. 300 символов",15:"Только JPG файлы",16:"Закрыть",17:"1. Кликните по карте в нужном месте.<br>2. Если необходимо, переместите маркер.",18:"Файловые API не полностью поддерживаются в этом браузере.",19:"Некорректный адрес"}}},Z=window.djeymLanguageCode.slice(0,2);Object.keys(J).includes(Z)||(Z="en");var q={locale:Z,messages:J},U=new G["a"](q);o("744d");a["a"].config.productionTip=!1,new a["a"]({vuetify:z,i18n:U,render:function(e){return e(V)}}).$mount("#djeym-app")},"5d71":function(e,t,o){},"744d":function(e,t,o){},abb1:function(e,t,o){"use strict";var a=o("5d71"),n=o.n(a);n.a}});
//# sourceMappingURL=app-legacy.f6a1d44e.js.map