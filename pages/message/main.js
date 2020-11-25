require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([0],{"+OMS":function(t,e){},"0TCG":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("5nAL"),a=s.n(n),o=s("71/x");new a.a(o.a).$mount()},"71/x":function(t,e,s){"use strict";var n=s("LoSv"),a=s("ycyE");var o=function(t){s("RplY")},i=s("ybqe")(n.a,a.a,o,"data-v-aa6b1776",null);e.a=i.exports},EG8Y:function(t,e,s){"use strict";var n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form"},[s("image",{staticClass:"head-img",attrs:{src:"../../static/images/green-flower.png"}}),t._v(" "),s("p",{staticClass:"title"},[s("span",[t._v("* ")]),t._v("姓名\n    ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"怎么称呼您呢？",maxlength:"6",eventid:"0"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("p",{staticClass:"title"},[s("span",[t._v("* ")]),t._v("电话\n    ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"number",placeholder:"请填写有效的手机号码",maxlength:"11",eventid:"1"},domProps:{value:t.phone},on:{input:[function(e){e.target.composing||(t.phone=e.target.value)},t.checkPhone]}}),t._v(" "),s("p",{staticClass:"title"},[t._v("\n        几人出席\n    ")]),t._v(" "),s("radio-group",{staticClass:"group",attrs:{eventid:"2",mpcomid:"0"},on:{change:t.radioChange}},t._l(t.list,function(e,n){return s("label",{key:n,staticClass:"radio"},[s("radio",{attrs:{value:e.name,checked:e.checked}}),t._v("\n            "+t._s(e.value)+"\n        ")],1)})),t._v(" "),s("p",{staticClass:"title"},[t._v("\n        备注\n    ")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.desc,expression:"desc"}],staticClass:"desc",attrs:{focus:"true",maxlength:"80",placeholder:"请填写您的备注需求",name:"textarea","placeholder-style":"color:#ccc;",eventid:"3"},domProps:{value:t.desc},on:{input:function(e){e.target.composing||(t.desc=e.target.value)}}}),t._v(" "),s("div",{staticClass:"btn"},[s("button",{staticClass:"left",attrs:{eventid:"4"},on:{tap:t.submit}},[t._v("确认提交")]),t._v(" "),s("button",{staticClass:"right",attrs:{eventid:"5"},on:{tap:t.cancel}},[t._v("取消")])],1)],1)},staticRenderFns:[]};e.a=n},ExdG:function(t,e){},LoSv:function(t,e,s){"use strict";var n=s("kzMD"),a=s("RBhD"),o=s("eCqM"),i=s("bV25");e.a={name:"Message",components:{HVideo:n.a,HForm:a.a,HFormlist:o.a},data:function(){return{isOpen:!1,desc:"",messageList:[],openId:"",userInfo:"",isForm:!1,isVideo:!1,isFormlist:!1,formList:[],url:"",poster:""}},onLoad:function(){this.getVideoUrl()},onShow:function(){this.isVideo=!1,this.isForm=!1,this.isFormlist=!1,this.getMessageList()},computed:{isAdmin:function(){return"oc-_o5Zw-GOZIh2rdWHTo3CTPn-M"===this.openId}},methods:{getVideoUrl:function(){var t=this;wx.cloud.database().collection("common").get().then(function(e){t.url=e.data[0].videoUrl,t.poster=e.data[0].poster})},toMessage:function(t){var e=this;"getUserInfo:ok"===t.target.errMsg&&wx.getUserInfo({success:function(t){e.userInfo=t.userInfo,e.isOpen=!0,e.getOpenId()}})},cancel:function(){this.isOpen=!1},sendMessage:function(){var t=this;if(t.desc){var e=wx.cloud.database().collection("message");wx.cloud.callFunction({name:"msgCheck",data:{content:this.desc}}).then(function(s){200!==s.result.code?i.a.showToast("不能说敏感词哦~"):e.add({data:{desc:t.desc,type:"message",time:t.getNowFormatDate(),url:t.userInfo.avatarUrl,name:t.userInfo.nickName}}).then(function(e){t.isOpen=!1,t.desc="",t.getMessageList()})})}else i.a.showToast("说点什么吧~")},deleteMessage:function(t){var e=this;wx.showModal({title:"提示",content:"确认删除？",success:function(s){s.confirm?e.isAdmin?wx.cloud.callFunction({name:"message",data:{_id:t._id}}).then(function(t){e.desc="",e.getMessageList()}):wx.cloud.database().collection("message").doc(t._id).remove().then(function(t){e.desc="",e.getMessageList()}).catch(function(t){console.log(t)}):s.cancel}})},getNowFormatDate:function(){var t=new Date,e=t.getFullYear(),s=t.getMonth()+1,n=t.getDate(),a=t.getHours(),o=t.getMinutes(),i=t.getSeconds(),c=e+"-";return s<10&&(c+="0"),c+=s+"-",n<10&&(c+="0"),c+=n+" ",a<10&&(c+="0"),c+=a+":",o<10&&(c+="0"),c+=o+":",i<10&&(c+="0"),c+=i},getMessageList:function(){var t=this;wx.cloud.callFunction({name:"messageList",data:{}}).then(function(e){t.messageList=e.result.data.reverse()})},toForm:function(t){var e=this;"getUserInfo:ok"===t.target.errMsg&&wx.getUserInfo({success:function(t){e.userInfo=t.userInfo,e.getOpenId("present")}})},closeForm:function(){this.isForm=!1},addUser:function(){wx.cloud.database().collection("user").add({data:{user:this.userInfo}}).then(function(t){})},getOpenId:function(t){var e=this;wx.cloud.callFunction({name:"user",data:{}}).then(function(s){e.openId=s.result.openid,"present"===t?e.getIsPresentExist():e.getIsExist()})},getIsPresentExist:function(){var t=this;wx.cloud.database().collection("present").where({_openid:t.openId}).get().then(function(e){0!==e.data.length?(t.$children[0].name=e.data[0].name,t.$children[0].phone=e.data[0].phone,t.$children[0].desc=e.data[0].desc,t.$children[0].list.forEach(function(t){t.checked=e.data[0].count===t.name}),t.$children[0]._id=e.data[0]._id,t.$children[0].phoneFlag=!0):(t.$children[0].dataFlag=!1,t.$children[0]._id=""),t.isForm=!0})},getIsExist:function(){var t=this;wx.cloud.database().collection("user").where({_openid:t.openId}).get().then(function(e){0===e.data.length&&t.addUser()})},toVideo:function(){this.isVideo=!0,this.musicPlay=!1,this.globalData.innerAudioContext.paused||(this.musicPlay=!0,this.globalData.innerAudioContext.pause())},closeVideo:function(){this.isVideo=!1,this.musicPlay&&this.globalData.innerAudioContext.play()},lookList:function(){this.isFormlist=!0,this.getFromlist()},closeFormlist:function(){this.isFormlist=!1},getFromlist:function(){var t=this;wx.cloud.callFunction({name:"presentList",data:{}}).then(function(e){t.formList=e.result.data.reverse().map(function(e){return{count:e.count,desc:e.desc,name:e.name,phone:t.isAdmin?e.phone:e.phone.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2"),_id:e._id,_openid:e._openid}})})}},onShareAppMessage:function(t){return{title:"徐凯和陈慧的婚礼邀请函",path:"/pages/index/main",imageUrl:"../../static/images/share.jpg"}}}},Qd2b:function(t,e,s){"use strict";e.a={name:"Formlist",props:["formList"],methods:{close:function(){this.$emit("closeFormlist")}},watch:{formList:function(t,e){}}}},RBhD:function(t,e,s){"use strict";var n=s("Sxg7"),a=s("EG8Y");var o=function(t){s("+OMS")},i=s("ybqe")(n.a,a.a,o,"data-v-b8028aba",null);e.a=i.exports},RplY:function(t,e){},Sxg7:function(t,e,s){"use strict";var n=s("bV25");e.a={name:"Form",data:function(){return{list:[{name:"自己出席",value:"自己出席",checked:!0},{name:"两人出席",value:"两人出席",checked:!1},{name:"三人出席",value:"三人出席",checked:!1},{name:"三人以上",value:"三人以上",checked:!1}],desc:"",name:"",phone:"",count:"自己出席",phoneFlag:!1,_id:""}},methods:{cancel:function(){this.$emit("closeForm")},radioChange:function(t){var e=this;e.count=t.mp.detail.value,e.list.forEach(function(t){t.name===e.count?t.checked=!0:t.checked=!1})},submit:function(){this.name?this.phoneFlag?this.addPresent():n.a.showToast("请正确输入您的手机号码"):n.a.showToast("请填写您的姓名")},checkPhone:function(){11===this.phone.length&&(/^(1[3-9][0-9])\d{8}$/.test(this.phone)?this.phoneFlag=!0:(this.phoneFlag=!1,n.a.showToast("手机号码格式不正确")))},CheckString:function(t){wx.cloud.callFunction({name:"msgCheck",data:{content:t}}).then(function(t){return t.result.code})},addPresent:function(){var t=this,e=wx.cloud.database().collection("present");""!==this._id?wx.cloud.callFunction({name:"msgCheck",data:{content:t.name}}).then(function(s){""!==t.name&&200!==s.result.code?n.a.showToast("不能说敏感词哦~"):wx.cloud.callFunction({name:"msgCheck",data:{content:t.desc}}).then(function(s){""!==t.desc&&200!==s.result.code?n.a.showToast("不能说敏感词哦~"):e.doc(t._id).update({data:{name:t.name,phone:t.phone,count:t.count,desc:t.desc},success:function(e){t.name="",t.phone="",t.count="自己出席",t.desc="",t.$emit("closeForm")}})})}):wx.cloud.callFunction({name:"msgCheck",data:{content:t.name}}).then(function(s){""!==t.name&&200!==s.result.code?n.a.showToast("不能说敏感词哦~"):wx.cloud.callFunction({name:"msgCheck",data:{content:t.desc}}).then(function(s){""!==t.desc&&200!==s.result.code?n.a.showToast("不能说敏感词哦~"):e.add({data:{name:t.name,phone:t.phone,count:t.count,desc:t.desc}}).then(function(e){t.name="",t.phone="",t.count="自己出席",t.desc="",t.$emit("closeForm")})})})}}}},ZmHW:function(t,e,s){"use strict";e.a={name:"Video",data:function(){return{inputValue:"",danmuList:[]}},props:["url","poster"],onLoad:function(){this.getMessageList(),this.videoContext=wx.createVideoContext("myVideo")},methods:{play:function(t){this.musicPlay=!1,this.globalData.innerAudioContext.paused||(this.musicPlay=!0,this.globalData.innerAudioContext.pause())},ended:function(t){this.musicPlay&&this.globalData.innerAudioContext.play()},bindInputBlur:function(t){this.inputValue=t.mp.detail.value},bindSendDanmu:function(){this.videoContext.sendDanmu({text:this.inputValue,color:this.getRandomColor()})},getRandomColor:function(){for(var t=[],e=0;e<3;++e){var s=Math.floor(256*Math.random()).toString(16);s=1===s.length?"0"+s:s,t.push(s)}return"#"+t.join("")},getMessageList:function(){var t=this;wx.cloud.database().collection("message").get().then(function(e){var s=e.data.reverse(),n=[];s.length>0&&(s.forEach(function(e,s){n.push({text:e.desc,color:t.getRandomColor(),time:1+2*s})}),t.danmuList=n)})},close:function(){this.videoContext.stop(),this.$emit("closeVideo")}}}},eCqM:function(t,e,s){"use strict";var n=s("Qd2b"),a=s("gqZl");var o=function(t){s("fOsK")},i=s("ybqe")(n.a,a.a,o,"data-v-3162eec1",null);e.a=i.exports},fOsK:function(t,e){},gqZl:function(t,e,s){"use strict";var n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("scroll-view",{staticClass:"formlist",attrs:{"scroll-y":""}},t._l(t.formList,function(e,n){return s("li",{key:n,staticClass:"item"},[s("div",{staticClass:"item-top"},[s("span",{staticClass:"left"},[t._v(t._s(e.name))]),t._v(" "),s("span",{staticClass:"right"},[t._v(t._s(e.phone))])]),t._v(" "),s("div",{staticClass:"item-middle"},[s("p",{staticClass:"address"},[s("span",[t._v(t._s(e.count))]),t._v(" "),e.desc?s("span",[t._v("备注："+t._s(e.desc))]):t._e()])],1)])})),t._v(" "),s("image",{attrs:{src:"../../static/images/close1.png",eventid:"0"},on:{tap:t.close}})],1)},staticRenderFns:[]};e.a=n},kzMD:function(t,e,s){"use strict";var n=s("ZmHW"),a=s("mr6I");var o=function(t){s("ExdG")},i=s("ybqe")(n.a,a.a,o,"data-v-7be485a8",null);e.a=i.exports},mr6I:function(t,e,s){"use strict";var n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section"},[s("video",{staticStyle:{cursor:"pointer"},attrs:{id:"myVideo",src:t.url,"danmu-list":t.danmuList,"enable-danmu":"","danmu-btn":"",controls:"",poster:t.poster,eventid:"0"},on:{play:t.play,ended:t.ended}}),t._v(" "),s("div",{staticClass:"btn-area"},[s("input",{attrs:{placeholder:"请输入临时弹幕，真实弹幕来自留言","placeholder-style":"color:#bbb",eventid:"1"},on:{blur:t.bindInputBlur}}),t._v(" "),s("button",{attrs:{eventid:"2"},on:{tap:t.bindSendDanmu}},[t._v("点击生成临时弹幕")]),t._v(" "),s("image",{attrs:{src:"../../static/images/close1.png",eventid:"3"},on:{tap:t.close}})],1)])},staticRenderFns:[]};e.a=n},ycyE:function(t,e,s){"use strict";var n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message"},[s("scroll-view",{staticClass:"box",attrs:{"scroll-y":"",eventid:"1"},on:{scroll:t.scroll}},[s("p",{staticClass:"place"}),t._v(" "),t._l(t.messageList,function(e,n){return s("div",{key:n,staticClass:"item"},[s("image",{staticClass:"left",attrs:{src:e.url}}),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"top"},[s("div",{staticClass:"delete",attrs:{eventid:"0_"+n},on:{tap:function(s){t.deleteMessage(e)}}},[e._openid===t.openId||t.isAdmin?s("image",{staticClass:"delete_icon",attrs:{src:"../../static/images/close.png"}}):t._e()]),t._v(" "),s("span",{staticClass:"top-l"},[t._v(t._s(e.name))]),t._v(" "),s("span",{staticClass:"top-r"},[t._v(t._s(e.time))])]),t._v(" "),s("p",{staticClass:"con"},[t._v(t._s(e.desc))])],1)])}),t._v(" "),s("p",{staticClass:"place-end"})],2),t._v(" "),s("div",{staticClass:"bottom"},[s("button",{staticClass:"left",attrs:{lang:"zh_CN","open-type":"getUserInfo",eventid:"2"},on:{getuserinfo:t.toMessage}},[t._v("说点啥吧")]),t._v(" "),s("button",{staticClass:"right",attrs:{"open-type":"getUserInfo",eventid:"3"},on:{getuserinfo:t.toForm}},[t._v("我要出席")])],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"dialog"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.desc,expression:"desc"}],staticClass:"desc",attrs:{focus:"true",maxlength:"80",placeholder:"在这里输入您想要说的话",name:"textarea","placeholder-style":"color:#ccc;",eventid:"4"},domProps:{value:t.desc},on:{input:function(e){e.target.composing||(t.desc=e.target.value)}}}),t._v(" "),s("div",{staticClass:"btn"},[s("button",{staticClass:"left",attrs:{eventid:"5"},on:{tap:t.sendMessage}},[t._v("发送留言")]),t._v(" "),s("button",{staticClass:"right",attrs:{eventid:"6"},on:{tap:t.cancel}},[t._v("取消")])],1)]),t._v(" "),""!==t.url&&void 0!==t.url?s("div",{staticClass:"video-dialog",attrs:{eventid:"7"},on:{tap:t.toVideo}},[s("image",{attrs:{src:"../../static/images/video1.png"}})]):t._e(),t._v(" "),s("div",{staticClass:"form-dialog",attrs:{eventid:"8"},on:{tap:t.lookList}},[s("image",{attrs:{src:"../../static/images/form.png"}})]),t._v(" "),t.isVideo?s("div",{staticClass:"video"},[s("h-video",{attrs:{url:t.url,poster:t.poster,eventid:"9",mpcomid:"0"},on:{closeVideo:t.closeVideo}})],1):t._e(),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isForm,expression:"isForm"}],ref:"form",staticClass:"form"},[s("h-form",{attrs:{eventid:"10",mpcomid:"1"},on:{closeForm:t.closeForm,getFromlist:t.getFromlist}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isFormlist,expression:"isFormlist"}],staticClass:"form-list"},[s("h-formlist",{attrs:{formList:t.formList,eventid:"11",mpcomid:"2"},on:{closeFormlist:t.closeFormlist}})],1)],1)},staticRenderFns:[]};e.a=n}},["0TCG"]);