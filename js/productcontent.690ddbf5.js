(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["productcontent"],{"4de4":function(t,s,e){"use strict";var a=e("23e7"),i=e("b727").filter,r=e("1dde"),c=e("ae40"),n=r("filter"),o=c("filter");a({target:"Array",proto:!0,forced:!n||!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"5c5b":function(t,s,e){},b003:function(t,s,e){"use strict";e("5c5b")},bcad:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"productitem"}},[e("b-container",[e("span",{staticClass:"bg-lightblue1 ml-lg-5 namesize"},[t._v(t._s(t.product[0].name))]),e("br"),e("br"),e("div",{staticClass:"d-md-flex flex-column"},[e("div",{staticClass:"d-md-flex"},[e("img",{staticClass:"picsize ml-lg-5",attrs:{src:t.product[0].src}}),e("div",{staticClass:"d-flex align-items-center"},[e("p",[e("span",{staticClass:"font-weight-bold text-info",staticStyle:{"font-size":"1.5rem"}},[t._v("商品介紹")]),e("br"),t._v(t._s(t.product[0].description))])])]),e("div",{staticClass:"row product_container justify-content-between align-items-center"},[e("div",{staticClass:"col-lg-5 product_picture mr-3 m-lg-0"},[e("router-link",{staticClass:"text-black-50",staticStyle:{"font-size":"20px"},attrs:{to:"/products"}},[e("font-awesome-icon",{attrs:{icon:["fas","backward"]}}),t._v(" BACK")],1)],1),e("div",{staticClass:"col-lg-4 product_text_box"},[e("span",{staticClass:"bg-lightblue1 pricesize"},[t._v("售價 $")]),e("span",{staticClass:"bg-lightblue1 pricesize text-danger"},[t._v(t._s(t.product[0].price))]),e("span",{staticClass:"bg-lightblue1 pricesize"},[t._v("元整")])]),e("b-container",{staticClass:"mt-5 mb-5"},[e("b-tabs",{attrs:{"content-class":"mt-3",justified:""}},[e("b-tab",{attrs:{title:"付款及運送方式"}},[e("img",{staticClass:"w-100",attrs:{src:"https://li-water.com.tw/image/catalog/shop%20description/3.%E9%85%8D%E9%80%81%E6%96%B9%E5%BC%8F.jpg"}})]),e("b-tab",{attrs:{title:"注意事項"}},[e("img",{staticClass:"w-100",attrs:{src:"https://li-water.com.tw/image/catalog/shop%20description/1%E8%B3%BC%E8%B2%B7%E5%89%8D%E9%96%B1%E8%AE%80.jpg"}})])],1),e("hr")],1)],1)])]),e("div",{staticClass:"footer text-white"},[e("div",{staticClass:"row d-flex justify-content-around"}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center"},[t._m(0),t._v("【客服信箱】lij45112183@gmail.com"),e("br"),t._v("【客服LINE ID】 @klz6621q"),e("br"),e("a",{attrs:{href:"#"}},[e("font-awesome-icon",{staticClass:"fa-3x mr-md-5 text-white",attrs:{icon:["fab","line"]}})],1),e("a",{attrs:{href:"#"}},[e("font-awesome-icon",{staticClass:"fa-3x mr-md-5 text-white",attrs:{icon:["fab","facebook-square"]}})],1),e("a",{attrs:{href:"#"}},[e("font-awesome-icon",{staticClass:"fa-3x mr-md-5 text-white",attrs:{icon:["fab","instagram"]}})],1),e("a",{attrs:{href:"#"}},[e("font-awesome-icon",{staticClass:"fa-3x text-white",attrs:{icon:["fab","youtube"]}})],1)])]),t._m(1)])],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("【門市資訊】"),e("br"),t._v("長生淨水 03-9329722 宜蘭市中山路二段206-1號 ⏰營業時間:週一至週六 8:30~20:00"),e("br"),t._v("力健淨水 03-9557339 羅東鎮公正路296號1F ⏰營業時間:週一至週六 9:00~21:00"),e("br"),t._v("力樂淨水 03-9551206 羅東鎮純精路一段198號 ⏰營業時間:週一至週六9:00~21:00")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-12 text-center pt-1"},[e("div",{staticClass:"footer-copyright text-center py-3"},[t._v("Copyright © 2020 AMRITA TAIWAN All rights reserved.")])])}],r=(e("4de4"),e("d81d"),{name:"testabc",id:function(){return this.$route.params.id},data:function(){return{images:[],product:[]}},mounted:function(){var t=this;this.axios.get("https://amrita2021.herokuapp.com/albums/user/").then((function(s){s.data.success?(t.images=s.data.result.map((function(t){return t.src="https://amrita2021.herokuapp.com/albums/file/"+t.file,t.edit=!1,t.try="123",delete t.file,t})),t.product=t.images.filter((function(s){return s._id===t.$route.params.id}))):t.$swal({icon:"error",title:"錯誤",text:s.data.message})})).catch((function(s){t.$swal({icon:"error",title:"錯誤",text:s.response.data.message})}))}}),c=r,n=(e("b003"),e("2877")),o=Object(n["a"])(c,a,i,!1,null,null,null);s["default"]=o.exports},d81d:function(t,s,e){"use strict";var a=e("23e7"),i=e("b727").map,r=e("1dde"),c=e("ae40"),n=r("map"),o=c("map");a({target:"Array",proto:!0,forced:!n||!o},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=productcontent.690ddbf5.js.map