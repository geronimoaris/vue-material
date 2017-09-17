webpackJsonp([28],{840:function(e,t,a){var s=a(1)(a(873),a(966),null,null,null);e.exports=s.exports},873:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{src:null}},methods:{loadImage:function(){var e=["assets/joker-1.jpg","assets/joker-2.jpg","assets/joker-3.jpg","assets/card-image-1.jpg","assets/card-image-2.jpg"];this.src=e[Math.floor(5*Math.random())]},clearImage:function(){this.src=null}}},e.exports=t.default},966:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page-content",{attrs:{"page-title":"Components - Image Loader"}},[a("docs-component",[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[e._v("Illustrations and photographs may load and transition in three phases by staggering opacity, exposure, and saturation levels.")])]),e._v(" "),a("div",{attrs:{slot:"api"},slot:"api"},[a("api-table",{attrs:{name:"md-image"}},[a("md-table",{attrs:{slot:"properties"},slot:"properties"},[a("md-table-header",[a("md-table-row",[a("md-table-head",[e._v("Name")]),e._v(" "),a("md-table-head",[e._v("Type")]),e._v(" "),a("md-table-head",[e._v("Description")])],1)],1),e._v(" "),a("md-table-body",[a("md-table-row",[a("md-table-cell",[e._v("md-src")]),e._v(" "),a("md-table-cell",[a("code",[e._v("String")])]),e._v(" "),a("md-table-cell",[e._v("The image source. Accepts any image file extension.")])],1)],1)],1)],1)],1),e._v(" "),a("div",{attrs:{slot:"example"},slot:"example"},[a("example-box",{attrs:{"card-title":"Default"}},[a("div",{attrs:{slot:"demo"},slot:"demo"},[a("md-button",{staticClass:"md-primary md-raised",on:{click:e.loadImage}},[e._v("Load Image")]),e._v(" "),a("md-button",{staticClass:"md-primary md-raised",on:{click:e.clearImage}},[e._v("Clear Image")]),e._v(" "),a("div",[a("md-image",{attrs:{"md-src":e.src}})],1)],1),e._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-button class="md-primary md-raised" @click="loadImage">Load Image</md-button>\n            <md-button class="md-primary md-raised" @click="clearImage">Clear Image</md-button>\n\n            <div>\n              <md-image :md-src="src"></md-image>\n            </div>\n          ')]),e._v(" "),a("code-block",{attrs:{lang:"xml"}},[e._v("\n            export default {\n              data: () => ({\n                src: null\n              }),\n              methods: {\n                loadImage() {\n                  let options = [\n                    'assets/joker-1.jpg',\n                    'assets/joker-2.jpg',\n                    'assets/joker-3.jpg',\n                    'assets/card-image-1.jpg',\n                    'assets/card-image-2.jpg'\n                  ];\n\n                  this.src = options[Math.floor(Math.random() * 5)];\n                },\n                clearImage() {\n                  this.src = null;\n                }\n              }\n            };\n          ")])],1)])],1)])],1)},staticRenderFns:[]}}});