(function(t){function e(e){for(var n,o,r=e[0],l=e[1],u=e[2],m=0,d=[];m<r.length;m++)o=r[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,r=1;r<s.length;r++){var l=s[r];0!==a[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0caa":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__["a"]={data:function(){return{running:!1,summary:!1,jobs:[],job:"",inputs:[],logs:[],good:0,bad:0,osszeg1:10,osszeg2:0,osszeg3:0,osszeg4:0,kivonas1:10,kivonas2:0,kivonas3:0,rel1:10,max:5}},methods:{rand:function(t,e){return Math.round(Math.random()*(e-t)+t)},random:function(t,e){let s=[];e=e||0;for(let a=0;a<5;a++)s.push(this.rand(e,t));let n=s.sort().filter((function(t,e,s){return!e||t!=s[e-1]})).map(t=>({value:t,sort:Math.random()})).sort((t,e)=>t.sort-e.sort).map(({value:t})=>t);return n[this.rand(0,n.length-1)]},generate:function(){if(0!=this.jobs.length)switch(this.jobs.shift()){case"osszeg1":var t=this.random(this.max);e=this.random(t),s=t-e,this.job=e+"+"+s+"=?",this.genNumberInput();break;case"osszeg2":t=this.random(this.max);e=this.random(t),this.job=e+"+?="+t,this.genNumberInput();break;case"osszeg3":t=this.random(this.max);e=this.random(t),this.job="?+"+e+"="+t,this.genNumberInput();break;case"kivonas1":var e=this.random(this.max),s=this.random(e);this.job=e+"-"+s+"=?",this.genNumberInput();break;case"kivonas2":t=this.random(this.max);e=this.random(t),this.job=t+"-?="+e,this.genNumberInput();case"kivonas3":t=this.random(this.max);e=this.random(t),s=t-e,this.job="?-"+e+"="+s,this.genNumberInput();break;case"rel1":this.job=this.random(this.max)+"?"+this.random(this.max),this.genRelInput();break;case"osszeg4":var n;t=this.random(this.max,this.max>9?5:0);e=this.random(t),t-=e,s=this.random(t),n=t-s,this.job=e+"+"+s+"+"+n+"=?",this.genNumberInput();break}else this.summary=!0},genNumberInput:function(){this.inputs=[];for(let t=0;t<this.max+1;t++)this.inputs.push(t)},genRelInput:function(){this.inputs=["<",">","="]},isOk:function(input){return!!eval(input.replace("=","=="))},onClick:function(t){this.logs.length>4&&this.logs.shift();var e=this.job.replace("?",t);this.logs.push(e),this.isOk(e)?(this.good++,this.generate()):this.bad++},reset:function(){this.running=!1,this.summary=!1},onStartBtn:function(){var t;for(t=0;t!=this.rel1;t++)this.jobs.push("rel1");for(t=0;t!=this.osszeg1;t++)this.jobs.push("osszeg1");for(t=0;t!=this.kivonas1;t++)this.jobs.push("kivonas1");for(t=0;t!=this.osszeg2;t++)this.jobs.push("osszeg2");for(t=0;t!=this.osszeg3;t++)this.jobs.push("osszeg3");for(t=0;t!=this.kivonas2;t++)this.jobs.push("kivonas2");for(t=0;t!=this.kivonas3;t++)this.jobs.push("kivonas3");for(t=0;t!=this.osszeg4;t++)this.jobs.push("osszeg4");this.generate(),this.running=!0}}}},"1b23":function(t,e,s){},"1b9d":function(t,e,s){},2698:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("db4d");var n=s("2b0e"),a=s("ecee"),i=s("c074"),o=s("ad3d");a["c"].add(i["a"]),n["a"].component("font-awesome-icon",o["a"]);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"noselect",attrs:{id:"wrap"}},[s("mainMsg"),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showWrap,expression:"showWrap"}],attrs:{id:"app"}},[s("div",{staticClass:"main_page"},[t._m(0),s("div",{staticClass:"sHeader noPrint"}),s("div",{staticClass:"content"},[t.isIE?[t._m(1)]:[s("keep-alive",[s("router-view")],1)]],2)])]),s("div",{staticClass:"toPrint cflex"},[s("div",[s("div",[t._v(" Kérem, gondoljon a környezetére, mielőtt kinyomtatja ezt az oldalt! ")]),s("div",{staticClass:"cflex greenTree gap"},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-tree"}}),s("font-awesome-icon",{attrs:{icon:"fa-solid fa-tree"}}),s("font-awesome-icon",{attrs:{icon:"fa-solid fa-tree"}})],1)])])],1)},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bHeader noPrint"},[s("h1",[t._v("megyik88.hu")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Box"},[s("div",{staticClass:"BoxHeader"},[t._v("Miért pont Internet Explorer?")]),s("div",{staticClass:"BoxCt"},[t._v(" A te fajtád nehezíti meg az életem. Használd inkább ezt: "),s("a",{attrs:{target:"_blank",href:"https://www.google.com/chrome/"}},[t._v("LINK")]),s("br"),t._v("I.E. alatt nem vagyok hajlandó megjeleneníteni rendes tartalmat! (Kivéve, ha fizetnek.) ")])])}],u=s("c92d"),c=u["a"],m=(s("8792"),s("84ee")),d=Object(m["a"])(c,r,l,!1,null,"72095009",null),v=d.exports,p=(s("7e79"),s("fc2a"),s("2698"),s("1b23"),s("78c8"),s("eb12"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Box"},[t.title?s("div",{staticClass:"BoxHeader"},[t._v(t._s(t.title))]):t._e(),s("div",{staticClass:"BoxCt"},[t._t("default")],2)])}),h=[],g={props:{title:String}},_=g,f=Object(m["a"])(_,p,h,!1,null,null,null),b=f.exports,k=s("8c4f"),y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hflex gap noPrint"},[s("Box",[s("div",{staticClass:"box_for_image"},[s("div",{staticClass:"img_bg"},[s("img",{staticClass:"megyik88_img pointer",attrs:{src:t.images[t.activeImage],alt:"Okos és sármos Megyik Zolán profil képe"},on:{click:t.onImgClick}})]),s("h2",{staticClass:"BoxHeader"},[t._v("Megyik Zoltán")]),s("div",{staticClass:"BoxCt"},[s("div",[t._v("Szoftverfejlesztő")])]),s("div",{staticClass:"BoxCt"},[s("div",[t.noLink?t._e():s("a",{staticClass:"bold",attrs:{target:"_BLANK",href:"https://www.linkedin.com/in/zoltán-megyik-294559184"}},[t._v("LinkedIn profil")])])])]),s("div",{staticClass:"BoxCt"},[s("br"),s("div",[t._v(" Jó tudni: "),s("ul",[s("li",{domProps:{innerHTML:t._s(t.todayText)}}),s("li",[t._v(" Megvagy! Rögzítettem az IP címed. (Legalább is, ha az Apache access log be van kapcsolva. Mind1, ha lesz időm akkor beállítom.) ")]),s("li",[t._v(" Házassági évforduló: Október 20 Mondjuk ezt csak nekem kell nagyon tudi. TODO: később Cron-t állítani, mert nem bízok a naptárban. ")]),s("li",[t._v("Próbáld meg nyomtatni az oldalt (Ctrl + p)")]),s("li",[t._v(' Ez egy Vue-ban készített "single-page" web alkalmazás. Nevezhetjük az én kis személyes fejlesztői játszóteremnek. ')])])])])]),s("Box",{attrs:{title:"Változtassunk az oldal külsején"}},[s("div",[t._v(" Nem tetszik a dizájn? "),0==t.style_count?s("span",[t._v("Tudom, érdekes a szín választás.")]):t._e(),t.style_count>=10?s("span",[t._v(" Kattintások száma: "+t._s(t.click_count)+" ")]):t._e()]),s("ul",[s("li",[t.noLink?t._e():s("a",{on:{click:t.changeStyle}},[t._v(t._s(t.style_btn_text))])])])]),s("Box",{attrs:{title:"Matek a fiammal"}},[t._v(" Bizony a számítógép elé ültetem gyakorolni. Igy jár az, akinek programozó az apja: "),s("ul",[s("li",[t.noLink?t._e():s("router-link",{attrs:{to:"/math_2"}},[t._v(" 1. osztály v1.3 ")])],1)])]),s("Box",{attrs:{title:"Játék a születési dátummal"}},[t._v(" Készítettem egy kis dátum-idő kalkulátort, amivel részletes információkat tudhatsz meg a korodról. Használhatod arra is, hogy megnézd mióta dolgozol a jelenlegi munkahelyeden. "),s("br"),s("ul",[s("li",[t.noLink?t._e():s("router-link",{attrs:{to:"/age"}},[t._v(" Link a játékhoz ")])],1)])])],1)},x=[],z={data:function(){var t=["Vasárnap van! &#127881; (Holnap hétfő &#128546;)","Hétfő van, &#128557; sajnálatos","Már csak 3 nap és péntek","Már csak 2 nap és péntek","Már csak 1 nap és péntek","Péntek van! &#127881;&#127881;&#127881;","Szombat van, nem kell dolgozni! &#127881;"];return{todayText:t[(new Date).getDay()],click_count:0,style_count:0,style_btn_text:"<< katt ide >>",activeImage:0,noLink:!1,images:["pic/megyik88.jpg","pic/megyik88_evil.jpg"]}},methods:{changeStyle:function(t){switch(this.style_count++,this.click_count++,this.style_count){case 1:case 4:case 5:case 6:case 7:case 8:case 9:break;case 2:this.style_btn_text+=" ... Talán bugos?";break;case 3:this.style_btn_text+=" ...Próbáld még...";break;case 10:this.style_btn_text="Megoldottam, most már menni fog!";break;case 11:var e=document.createElement("div");e.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;z-index:100;background:#000",e.innerHTML='<img src="pic/mzoli88_portrait_scary.jpg" alt="megyik scare" style="display: block;margin: auto;margin-top: 35vh;">',e.className="noselect",document.body.appendChild(e),App.showWrap=!1,setTimeout((function(){document.body.removeChild(e),App.showWrap=!0}),4e3),this.style_btn_text="Hehe";break;case 12:this.style_btn_text+=" he";break;case 13:this.style_btn_text+=" he";break;case 14:this.style_btn_text+=" he";break;case 15:this.style_btn_text="<< Következő >>",App.style="style_simple",this.delayBtn(),Msg.i("Igy nézhetnek ki az oldalak css nélkül.",6);break;case 16:this.style_btn_text="<< Következő >>",App.style="style_apache";break;case 17:this.style_btn_text="<< Következő >>",App.style="style_colorfull";break;case 18:this.style_btn_text="<< Következő >>",App.style="style_black";break;default:App.style="style_main",this.style_count=15;break}if(22==this.click_count){e=document.createElement("div");e.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;z-index:100;background:#fff",e.innerHTML='<img class="tmp_img" src="pic/db.jpg" alt="db" style="display: block;margin: auto;">',e.className="noselect",document.body.appendChild(e),App.showWrap=!1,setTimeout((function(){Msg.i("Hoppá!",2),setTimeout((function(){Msg.i("Kérlek, csukd be a szemed és ne nyomj semmit!",3),setTimeout((function(){Msg.i("Mindjárt megoldom...",4),setTimeout((function(){document.body.removeChild(e),App.showWrap=!0}),6e3)}),3500)}),3500)}),1500)}},onImgClick:function(){this.activeImage++,this.activeImage>=this.images.length&&(this.activeImage=0)},delayBtn:function(){var t=this;t.noLink=!0,setTimeout((function(){t.noLink=!1}),1e3)}}},C=z,j=Object(m["a"])(C,y,x,!1,null,null,null),w=j.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"Box"},[s("div",{staticClass:"BoxHeader"},[t._v("Kérlek, add meg a születésed napját:")]),s("div",{staticClass:"BoxCt"},[s("form",{attrs:{autocomplete:"off"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.y,expression:"y"}],attrs:{type:"text",name:"y",min:"0",max:"2400",placeholder:"Év"},domProps:{value:t.y},on:{input:function(e){e.target.composing||(t.y=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.m,expression:"m"}],attrs:{type:"text",name:"m",min:"1",max:"12",placeholder:"Hónap"},domProps:{value:t.m},on:{input:function(e){e.target.composing||(t.m=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.d,expression:"d"}],attrs:{type:"text",name:"d",min:"1",max:"31",placeholder:"Nap"},domProps:{value:t.d},on:{input:function(e){e.target.composing||(t.d=e.target.value)}}})])]),t.errors.length?s("div",{staticClass:"BoxCt_error"},t._l(t.errors,(function(e,n){return s("div",{key:n+"_e"},[t._v(" "+t._s(e)+" ")])})),0):t._e(),t.out_sec?s("div",{staticClass:"BoxCt_info"},[s("div",[s("span",{staticClass:"bold"},[t._v(t._s(t.out_year))]),t._v(" éves vagy, ")]),s("div",[s("span",{staticClass:"bold"},[t._v(t._s(t.out_day))]),t._v(" napja születtél, ")]),s("div",[t._v(" ... az "),s("span",{staticClass:"bold"},[t._v(t._s(t.out_hour))]),t._v(" óra, ")]),s("div",[t._v(" ... vagy "),s("span",{staticClass:"bold"},[t._v(t._s(t.out_min))]),t._v(" perc, ")]),s("div",[t._v(" ... vagy "),s("span",{staticClass:"bold"},[t._v(t._s(t.out_sec))]),t._v(" másodperc. Milyen öreg vagy! ")]),s("br"),s("div",[t._v("Szerinted számolja a szökőéveket is?")])]):t._e(),s("br"),s("a",{on:{click:t.back}},[t._v("Vissza")])])])},T=[],N={data:function(){return{y:null,m:null,d:null,out_sec:!1,out_min:!1,out_hour:!1,out_day:!1,out_year:!1,fulldate:null,errors:[]}},watch:{y:function(){this.validateDate()},m:function(){this.validateDate()},d:function(){this.validateDate()}},methods:{back:function(){this.$router.push("/")},timer:function(){this.validateDate(),clearTimeout(this.tmpTimer),this.tmpTimer=setTimeout(this.timer,1e3)},validateDate:function(){if(this.out_sec=!1,this.errors=[],!this.y||!this.m||!this.d)return!1;var t=/^[0-9]+$/;if(!t.test(this.y)||!t.test(this.m)||!t.test(this.d))return this.errors.push("Te egy speciális korban (vagy kórral) születtél.");var e=parseInt(this.y),s=parseInt(this.m),n=parseInt(this.d),a=new Date,i=Date.parse(e+"-"+s+"-"+n);return s==a.getMonth()+1&&n==a.getDate()&&Msg.s("Boldog születésnapot!"),e<=1900&&this.errors.push("Valaki nagyon öreg!"),(s<1||s>12)&&this.errors.push('"'+s+'" - van ilyen hónap?'),i?i>a.getTime()?this.errors.push("Időutazás?"):void(e<100||(this.out_sec=Math.floor((a.getTime()-i)/1e3),this.out_min=Math.floor(this.out_sec/60),this.out_hour=Math.floor(this.out_min/60),this.out_day=Math.floor(this.out_hour/24),this.out_year=Math.abs(new Date(a.getTime()-i).getUTCFullYear()-1970))):this.errors.push("Nem létezik ilyen nap!")}},activated:function(){this.$nextTick(this.timer)},beforeRouteLeave:function(t,e,s){clearTimeout(this.tmpTimer),s()}},B=N,I=Object(m["a"])(B,M,T,!1,null,null,null),P=I.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hflex fit gap Box"},[s("div",[s("router-link",{attrs:{to:"/"}},[t._v(" Vissza ")])],1),t.running?[s("div",{staticClass:"center"},[s("div",[t._v("Jó: "+t._s(t.good))]),s("div",[t._v("Rossz: "+t._s(t.bad))])]),t.summary?[s("div",[s("div",{staticClass:"Blue btn",on:{click:t.reset}},[t._v("Kész!")])])]:[s("div",{staticClass:"vflex bnumber center"},[t._v(" "+t._s(t.job.replace("?","☐"))+" ")]),s("div",{staticClass:"vflex center"},t._l(t.inputs,(function(e,n){return s("div",{key:"indexA"+n},[s("div",{staticClass:"btn Blue",on:{click:function(s){return t.onClick(e)}}},[t._v(t._s(e))])])})),0),s("div",{staticClass:"hflex gap scroll"},t._l(t.logs.slice().reverse(),(function(e,n){return s("div",{key:"indexB"+n,staticClass:"center"},[s("div",{class:[t.isOk(e)?"Green":"Red","snumber"]},[t._v(" "+t._s(e)+" ")])])})),0)]]:s("div",{staticClass:"hflex gap center"},[s("label",[t._v("Kérem, határozza meg típusonként a feladatok darabszámát!")]),s("br"),s("div",{staticClass:"vflex gap"},[s("label",[t._v("max szám")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.max,expression:"max",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.max},on:{input:function(e){e.target.composing||(t.max=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"vflex gap"},[s("label",[t._v("1 > 2")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.rel1,expression:"rel1",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.rel1},on:{input:function(e){e.target.composing||(t.rel1=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" db. ")]),s("div",{staticClass:"vflex gap"},[s("label",[t._v("1 + 2 = ☐")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.osszeg1,expression:"osszeg1",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.osszeg1},on:{input:function(e){e.target.composing||(t.osszeg1=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" db. ")]),s("div",{staticClass:"vflex gap"},[s("label",[t._v("1 - 2 = ☐")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.kivonas1,expression:"kivonas1",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.kivonas1},on:{input:function(e){e.target.composing||(t.kivonas1=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" db. ")]),s("div",{staticClass:"vflex gap"},[s("label",[t._v("1 + ☐ = 2")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.osszeg2,expression:"osszeg2",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.osszeg2},on:{input:function(e){e.target.composing||(t.osszeg2=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" db. ")]),s("div",{staticClass:"vflex gap"},[s("label",[t._v("☐ + 1 = 2")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.osszeg3,expression:"osszeg3",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.osszeg3},on:{input:function(e){e.target.composing||(t.osszeg3=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" db. ")]),s("div",{staticClass:"vflex gap"},[s("label",[t._v("2 - ☐ = 1")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.kivonas2,expression:"kivonas2",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.kivonas2},on:{input:function(e){e.target.composing||(t.kivonas2=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" db. ")]),s("div",{staticClass:"vflex gap"},[s("label",[t._v("☐ - 1 = 2")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.kivonas3,expression:"kivonas3",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.kivonas3},on:{input:function(e){e.target.composing||(t.kivonas3=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" db. ")]),s("div",{staticClass:"vflex gap"},[s("label",[t._v("1 + 2 + 3 = 6")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.osszeg4,expression:"osszeg4",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.osszeg4},on:{input:function(e){e.target.composing||(t.osszeg4=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" db. ")]),s("div",{staticClass:"Blue btn",on:{click:t.onStartBtn}},[t._v("Kezdés")])])],2)},$=[],H=s("0caa"),K=H["a"],L=(s("b7e7"),Object(m["a"])(K,O,$,!1,null,"5500ee6d",null)),E=L.exports;n["a"].use(k["a"]);var A=new k["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:w},{path:"/age",name:"age",component:P},{path:"/math_2",name:"math_2",component:E}]});n["a"].component("Box",b),n["a"].config.productionTip=!1,new n["a"]({router:A,render:function(t){return t(v)}}).$mount("#app")},"70aa":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"move-in"}},[t.txt?s("div",{class:t.cls,attrs:{id:"msg"},domProps:{innerHTML:t._s(t.txt)}}):t._e()])},a=[],i=s("7bd3"),o=i["a"],r=s("84ee"),l=Object(r["a"])(o,n,a,!1,null,null,null);e["a"]=l.exports},7717:function(t,e,s){},"78c8":function(t,e,s){},"7bd3":function(t,e,s){"use strict";(function(t){e["a"]={created:function(){t.Msg=this},data:function(){return{time:0,txt:!1,counting:!1,cls:null}},methods:{timedMsg:function(t,e,s){var n=this;n.txt?(n.txt=!1,setTimeout((function(){n.timedMsg(t,e,s)}),500)):(n.cls=e||"info",n.txt=t,n.time=s||5,!1===n.counting&&n.doCount())},doCount:function(){var t=this;t.counting=!0,t.time<1?(t.counting=!1,t.txt=!1):setTimeout((function(){t.time--,t.doCount()}),1e3)},s:function(t,e){this.timedMsg(t,"success",e)},i:function(t,e){this.timedMsg(t,"info",e)},w:function(t,e){this.timedMsg(t,"warning",e)},e:function(t,e){this.timedMsg(t,"error",e)}}}}).call(this,s("ec27"))},"7e79":function(t,e,s){},8792:function(t,e,s){"use strict";s("7717")},b7e7:function(t,e,s){"use strict";s("1b9d")},c92d:function(t,e,s){"use strict";(function(t){var n=s("70aa");e["a"]={created:function(){t.App=this,this.isIE||console.log("̄😂 ?"),console.log("̄¯_(ツ)_/¯")},data:function(){return document.body.className=document.body.className="style_main",{isIE:!!document.documentMode,menu_clicks:0,menu_click_run:!1,menu_click_status:0,menu_canClick:!0,showWrap:!0,style:"style_main"}},watch:{style:function(t){document.body.className=document.body.className=t}},methods:{menu_click:function(t){var e=this;if(this.menu_clicks++,t.ctrlKey)Msg.s("Yeeee... nézd, megnyitottál egy új lapot!");else if(e.menu_canClick){if(12==e.menu_clicks){switch(e.menu_click_status){case 0:Msg.i("Keresel valamit?");break;case 1:Msg.i("Talán segítségre szorulsz?");break;case 2:Msg.i("Tudom mi kell neked. Várj egy picit és átirányítalak..."),e.menu_canClick=!1,setTimeout((function(){window.open("http://google.com/search?q=hogy+ne+legyek+hülye"),e.menu_canClick=!0}),4e3);break;case 3:Msg.i("Nem volt jó? Pedig nekem sokat segített!");break;default:e.menu_click_status=-1;break}e.menu_clicks=0,e.menu_click_status++}0==e.menu_click_run&&(e.menu_click_run=!0,setTimeout((function(){e.menu_clicks=0,e.menu_click_run=!1}),5e3))}}},components:{mainMsg:n["a"]}}}).call(this,s("ec27"))},eb12:function(t,e,s){},fc2a:function(t,e,s){}});