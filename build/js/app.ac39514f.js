(function(){"use strict";var __webpack_modules__={6652:function(__unused_webpack_module,__webpack_exports__){__webpack_exports__["Z"]={data:function(){return{running:!1,summary:!1,jobs:[],job:"",inputs:[],logs:[],good:0,bad:0,osszeg1:10,osszeg2:0,osszeg3:0,osszeg4:0,kivonas1:10,kivonas2:0,kivonas3:0,rel1:10,max:5}},methods:{rand:function(t,e){return Math.round(Math.random()*(e-t)+t)},random:function(t,e){let s=[];e=e||0;for(let a=0;a<5;a++)s.push(this.rand(e,t));let i=s.sort().filter((function(t,e,s){return!e||t!=s[e-1]})).map((t=>({value:t,sort:Math.random()}))).sort(((t,e)=>t.sort-e.sort)).map((({value:t})=>t));return i[this.rand(0,i.length-1)]},generate:function(){if(0!=this.jobs.length)switch(this.jobs.shift()){case"osszeg1":var t=this.random(this.max);e=this.random(t),s=t-e,this.job=e+"+"+s+"=?",this.genNumberInput();break;case"osszeg2":t=this.random(this.max);e=this.random(t),this.job=e+"+?="+t,this.genNumberInput();break;case"osszeg3":t=this.random(this.max);e=this.random(t),this.job="?+"+e+"="+t,this.genNumberInput();break;case"kivonas1":var e=this.random(this.max),s=this.random(e);this.job=e+"-"+s+"=?",this.genNumberInput();break;case"kivonas2":t=this.random(this.max);e=this.random(t),this.job=t+"-?="+e,this.genNumberInput();case"kivonas3":t=this.random(this.max);e=this.random(t),s=t-e,this.job="?-"+e+"="+s,this.genNumberInput();break;case"rel1":this.job=this.random(this.max)+"?"+this.random(this.max),this.genRelInput();break;case"osszeg4":var i;t=this.random(this.max,this.max>9?5:0);e=this.random(t),t-=e,s=this.random(t),i=t-s,this.job=e+"+"+s+"+"+i+"=?",this.genNumberInput();break}else this.summary=!0},genNumberInput:function(){this.inputs=[];for(let t=0;t<this.max+1;t++)this.inputs.push(t)},genRelInput:function(){this.inputs=["<",">","="]},isOk:function(input){return!!eval(input.replace("=","=="))},onClick:function(t){this.logs.length>4&&this.logs.shift();var e=this.job.replace("?",t);this.logs.push(e),this.isOk(e)?(this.good++,this.generate()):this.bad++},reset:function(){this.running=!1,this.summary=!1},onStartBtn:function(){var t;for(t=0;t!=this.rel1;t++)this.jobs.push("rel1");for(t=0;t!=this.osszeg1;t++)this.jobs.push("osszeg1");for(t=0;t!=this.kivonas1;t++)this.jobs.push("kivonas1");for(t=0;t!=this.osszeg2;t++)this.jobs.push("osszeg2");for(t=0;t!=this.osszeg3;t++)this.jobs.push("osszeg3");for(t=0;t!=this.kivonas2;t++)this.jobs.push("kivonas2");for(t=0;t!=this.kivonas3;t++)this.jobs.push("kivonas3");for(t=0;t!=this.osszeg4;t++)this.jobs.push("osszeg4");this.generate(),this.running=!0}}}},4367:function(__unused_webpack_module,__webpack_exports__){__webpack_exports__["Z"]={data:function(){return{first:null,second:null,op:null,input:null,good_count:0,celebration:!1}},mounted:function(){this.generate()},watch:{input:function(val){val==eval(this.first+this.op+this.second)&&(this.generate(),this.good_count++,this.celebration=!0,clearTimeout(this.setTimeouttmp),this.setTimeouttmp=setTimeout((t=>this.celebration=!1),2e3))}},methods:{rand:function(t,e){return Math.round(Math.random()*(e-t)+t)},random:function(t,e){let s=[];e=e||0;for(let a=0;a<5;a++)s.push(this.rand(e,t));let i=s.sort().filter((function(t,e,s){return!e||t!=s[e-1]})).map((t=>({value:t,sort:Math.random()}))).sort(((t,e)=>t.sort-e.sort)).map((({value:t})=>t));return i[this.rand(0,i.length-1)]},generate:function(){var type=this.random(0,2);switch(this.input=null,type){case 2:this.first=this.random(10,99),this.second=this.random(0,9),this.op="-";break;case 1:this.second=this.random(10,99),this.first=this.random(0,9),this.op="+";break;default:this.first=this.random(10,99),this.second=this.random(0,9),this.op="+";break}console.log("help :D "+eval(this.first+this.op+this.second)),this.$nextTick((t=>this.$refs.field.focus()))}}}},4690:function(__unused_webpack_module,__webpack_exports__){__webpack_exports__["Z"]={data:function(){return{first:null,second:null,op:null,input:null,good_count:0,celebration:!1}},mounted:function(){this.generate()},watch:{input:function(val){val==eval(this.first+this.op+this.second)&&(this.generate(),this.good_count++,this.celebration=!0,clearTimeout(this.setTimeouttmp),this.setTimeouttmp=setTimeout((t=>this.celebration=!1),2e3))}},methods:{rand:function(t,e){return Math.round(Math.random()*(e-t)+t)},random:function(t,e){let s=[];e=e||0;for(let a=0;a<5;a++)s.push(this.rand(e,t));let i=s.sort().filter((function(t,e,s){return!e||t!=s[e-1]})).map((t=>({value:t,sort:Math.random()}))).sort(((t,e)=>t.sort-e.sort)).map((({value:t})=>t));return i[this.rand(0,i.length-1)]},generate:function(){var type=this.random(0,2);switch(this.input=null,type){case 2:this.first=this.random(0,99),this.second=this.random(0,this.first),this.op="-";break;case 1:this.second=this.random(0,99),this.first=this.random(0,99-this.second),this.op="+";break;default:this.first=this.random(0,99),this.second=this.random(0,99-this.first),this.op="+";break}console.log("help :D "+eval(this.first+this.op+this.second)),this.$nextTick((t=>this.$refs.field.focus()))}}}},5551:function(__unused_webpack_module,__webpack_exports__){__webpack_exports__["Z"]={data:function(){return{first:null,second:null,op:null,input:null,good_count:0,celebration:!1}},mounted:function(){this.generate()},watch:{input:function(val){val==eval(this.first+this.op+this.second)&&(this.generate(),this.good_count++,this.celebration=!0,clearTimeout(this.setTimeouttmp),this.setTimeouttmp=setTimeout((t=>this.celebration=!1),2e3))}},methods:{rand:function(t,e){return Math.round(Math.random()*(e-t)+t)},random:function(t,e){let s=[];e=e||0;for(let a=0;a<5;a++)s.push(this.rand(e,t));let i=s.sort().filter((function(t,e,s){return!e||t!=s[e-1]})).map((t=>({value:t,sort:Math.random()}))).sort(((t,e)=>t.sort-e.sort)).map((({value:t})=>t));return i[this.rand(0,i.length-1)]},generate:function(){this.first=this.random(1,10),this.second=this.random(2,5);var type=this.random(0,2);this.op="*",this.input=null,console.log("help :D "+eval(this.first+this.op+this.second)),this.$nextTick((t=>this.$refs.field.focus()))}}}},7967:function(t,e,s){s(6124);var i=s(144),a=s(8947),o=s(9417),n=s(7810);a.vI.add(o.mRB),i.ZP.component("font-awesome-icon",n.GN);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"noselect",attrs:{id:"wrap"}},[e("mainMsg"),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showWrap,expression:"showWrap"}],attrs:{id:"app"}},[e("div",{staticClass:"main_page"},[t._m(0),e("div",{staticClass:"sHeader noPrint"}),e("div",{staticClass:"content"},[t.isIE?[t._m(1)]:[e("keep-alive",[e("router-view")],1)]],2)])]),e("div",{staticClass:"toPrint cflex"},[e("div",[e("div",[t._v(" Kérem, gondoljon a környezetére, mielőtt kinyomtatja ezt az oldalt! ")]),e("div",{staticClass:"cflex greenTree gap"},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-tree"}}),e("font-awesome-icon",{attrs:{icon:"fa-solid fa-tree"}}),e("font-awesome-icon",{attrs:{icon:"fa-solid fa-tree"}})],1)])])],1)},l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"bHeader noPrint"},[e("h1",{staticClass:"site_name"},[t._v("megyik88.hu")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"Box"},[e("div",{staticClass:"BoxHeader"},[t._v("Miért pont Internet Explorer?")]),e("div",{staticClass:"BoxCt"},[t._v(" A te fajtád nehezíti meg a fejlesztők életét. Használd inkább az alábbi böngészőt: "),e("a",{attrs:{target:"_blank",href:"https://www.google.com/chrome/"}},[t._v(" LINK ")])])])}],c=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"move-in"}},[t.txt?e("div",{class:t.cls,attrs:{id:"msg"},domProps:{innerHTML:t._s(t.txt)}}):t._e()])},u=[],d={created:function(){s.g.Msg=this},data:function(){return{time:0,txt:!1,counting:!1,cls:null}},methods:{timedMsg:function(t,e,s){var i=this;i.txt?(i.txt=!1,setTimeout((function(){i.timedMsg(t,e,s)}),500)):(i.cls=e||"info",i.txt=t,i.time=s||5,!1===i.counting&&i.doCount())},doCount:function(){var t=this;t.counting=!0,t.time<1?(t.counting=!1,t.txt=!1):setTimeout((function(){t.time--,t.doCount()}),1e3)},s:function(t,e){this.timedMsg(t,"success",e)},i:function(t,e){this.timedMsg(t,"info",e)},w:function(t,e){this.timedMsg(t,"warning",e)},e:function(t,e){this.timedMsg(t,"error",e)}}},h=d,m=s(1001),_=(0,m.Z)(h,c,u,!1,null,null,null),v=_.exports,p={created:function(){s.g.App=this,this.isIE||console.log("̄😂 ?"),console.log("̄¯_(ツ)_/¯")},data:function(){return document.body.className=document.body.className="style_red",{isIE:!!document.documentMode,showWrap:!0,style:"style_red"}},watch:{style:function(t){document.body.className=document.body.className=t}},components:{mainMsg:v}},f=p,g=(0,m.Z)(f,r,l,!1,null,"7c017e9d",null),k=g.exports,b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Box"},[t.title?e("div",{staticClass:"BoxHeader"},[t._v(t._s(t.title))]):t._e(),e("div",{staticClass:"BoxCt"},[t._t("default")],2)])},y=[],j={props:{title:String}},z=j,x=(0,m.Z)(z,b,y,!1,null,null,null),w=x.exports,C=s(8345),T=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hflex gap noPrint"},[e("Box",[e("div",{staticClass:"box_for_image"},[e("div",{staticClass:"img_bg"},[e("img",{staticClass:"megyik88_img pointer",attrs:{src:t.images[t.activeImage],alt:"Okos és sármos Megyik Zolán profil képe"},on:{click:t.onImgClick}})]),e("h2",{staticClass:"BoxHeader"},[t._v("Megyik Zoltán")]),e("div",{staticClass:"BoxCt"},[e("div",[t._v("Szoftverfejlesztő")])]),e("div",{staticClass:"BoxCt"},[e("div",[t.noLink?t._e():e("a",{staticClass:"bold",attrs:{target:"_BLANK",href:"https://www.linkedin.com/in/zoltán-megyik-294559184"}},[t._v("LinkedIn profil")])])])]),e("div",{staticClass:"BoxCt"},[e("div",[e("ul",[e("li",[t._v(' Ez egy Vue-ban készített "single-page" web alkalmazás. Nevezhetjük az én kis személyes fejlesztői játszóteremnek '),e("a",{staticClass:"smallLink",attrs:{target:"_BLANK",href:"https://github.com/mzoli88/megyik88-web"}},[t._v(" (https://github.com/mzoli88/megyik88-web) ")])]),e("li",[t._v("Nyomd meg az F11-es gombot")]),e("li",{domProps:{innerHTML:t._s(t.todayText)}}),e("li",[t._v("Nyomtasd ki ezt az oldalt (Ctrl + p)")])])])])]),e("Box",{attrs:{title:"Változtassunk az oldal külsején"}},[e("div",[t._v(" Nem tetszik a dizájn? "),0==t.style_count?e("span",[t._v("Hátha tudok segíteni.")]):t._e(),t.style_count>=10?e("span",[t._v(" Kattintások száma: "+t._s(t.click_count)+" ")]):t._e()]),e("ul",[e("li",[t.noLink?t._e():e("a",{on:{click:t.changeStyle}},[t._v(t._s(t.style_btn_text))])])])]),e("Box",{attrs:{title:"Matek a fiammal"}},[t._v(" Bizony a számítógép elé ültetem gyakorolni. Igy jár az, akinek programozó az apja: "),e("ul",[e("li",[t.noLink?t._e():e("router-link",{attrs:{to:"/math_2"}},[t._v(" 1. osztály (v1.3) ")])],1),e("li",[t.noLink?t._e():e("router-link",{attrs:{to:"/math_3"}},[t._v(" 2. osztály - összadás, kivonás (könnyű) (v1.0) ")])],1),e("li",[t.noLink?t._e():e("router-link",{attrs:{to:"/math_3_2"}},[t._v(" 2. osztály - összadás, kivonás (nehéz) (v1.0) ")])],1),e("li",[t.noLink?t._e():e("router-link",{attrs:{to:"/math_4"}},[t._v(" 2. osztály - Sorbarendezés (v1.0) ")])],1),e("li",[t.noLink?t._e():e("router-link",{attrs:{to:"/math_5"}},[t._v(" 2. osztály - Kezdő szorzás (v1.0) ")])],1),e("li",[t.noLink?t._e():e("router-link",{attrs:{to:"/jly"}},[t._v(" 2. osztály - Nyelvtan: Ly/j (v1.0) ")])],1)])]),e("Box",{attrs:{title:"Játék a születési dátummal"}},[t._v(" Készítettem egy kis dátum-idő kalkulátort, amivel részletes információkat tudhatsz meg a korodról. Használhatod arra is, hogy megnézd mióta dolgozol a jelenlegi munkahelyeden. "),e("br"),e("ul",[e("li",[t.noLink?t._e():e("router-link",{attrs:{to:"/age"}},[t._v(" Link a játékhoz ")])],1)])])],1)},M=[],B={data:function(){var t=["Vasárnap van! &#127881; (Holnap hétfő &#128546;)","Hétfő van, &#128557; sajnálatos","Már csak 3 nap és péntek","Már csak 2 nap és péntek","Már csak 1 nap és péntek","Péntek van! &#127881;&#127881;&#127881;","Szombat van, nem kell dolgozni! &#127881;"];return{todayText:t[(new Date).getDay()],click_count:0,style_count:0,style_btn_text:"<< katt ide >>",activeImage:0,noLink:!1,images:["pic/megyik88.jpg","pic/megyik88_evil.jpg"]}},methods:{changeStyle:function(t){switch(this.style_count++,this.click_count++,this.style_count){case 1:case 4:case 5:case 6:case 7:case 8:case 9:break;case 2:this.style_btn_text+=" ... Talán bugos?";break;case 3:this.style_btn_text+=" ...Próbáld még...";break;case 10:this.style_btn_text="Megoldottam, most már menni fog!";break;case 11:var e=document.createElement("div");e.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;z-index:100;background:#000",e.innerHTML='<img src="pic/mzoli88_portrait_scary.jpg" alt="megyik scare" style="display: block;margin: auto;margin-top: 35vh;">',e.className="noselect",document.body.appendChild(e),App.showWrap=!1,setTimeout((function(){document.body.removeChild(e),App.showWrap=!0}),4e3),this.style_btn_text="Hehe";break;case 12:this.style_btn_text+=" he";break;case 13:this.style_btn_text+=" he";break;case 14:this.style_btn_text+=" he";break;case 15:this.style_btn_text="<< Következő >>",App.style="style_simple",this.delayBtn(),Msg.i("Igy nézhetnek ki az oldalak css nélkül.",6);break;case 16:this.style_btn_text="<< Következő >>",App.style="style_apache";break;case 17:this.style_btn_text="<< Következő >>",App.style="style_colorfull";break;case 18:this.style_btn_text="<< Következő >>",App.style="style_black";break;case 19:this.style_btn_text="<< Következő >>",App.style="style_green";break;default:App.style="style_red",this.style_count=15;break}if(22==this.click_count){e=document.createElement("div");e.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;z-index:100;background:#fff",e.innerHTML='<img class="tmp_db_img" src="pic/db.jpg" alt="db" >',e.className="noselect",document.body.appendChild(e),App.showWrap=!1,setTimeout((function(){Msg.i("Hoppá!",2),setTimeout((function(){Msg.i("Kérlek, csukd be a szemed és ne nyomj semmit!",3),setTimeout((function(){Msg.i("Mindjárt megoldom...",4),setTimeout((function(){document.body.removeChild(e),App.showWrap=!0}),6e3)}),3500)}),3500)}),1500)}},onImgClick:function(){this.activeImage++,this.activeImage>=this.images.length&&(this.activeImage=0)},delayBtn:function(){var t=this;t.noLink=!0,setTimeout((function(){t.noLink=!1}),1e3)}}},N=B,S=(0,m.Z)(N,T,M,!1,null,"dd59b348",null),P=S.exports,I=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"Box"},[e("div",{staticClass:"BoxHeader"},[t._v("Kérlek, add meg a születésed napját:")]),e("div",{staticClass:"BoxCt"},[e("form",{attrs:{autocomplete:"off"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.y,expression:"y"}],attrs:{type:"text",name:"y",min:"0",max:"2400",placeholder:"Év"},domProps:{value:t.y},on:{input:function(e){e.target.composing||(t.y=e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.m,expression:"m"}],attrs:{type:"text",name:"m",min:"1",max:"12",placeholder:"Hónap"},domProps:{value:t.m},on:{input:function(e){e.target.composing||(t.m=e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.d,expression:"d"}],attrs:{type:"text",name:"d",min:"1",max:"31",placeholder:"Nap"},domProps:{value:t.d},on:{input:function(e){e.target.composing||(t.d=e.target.value)}}})])]),t.errors.length?e("div",{staticClass:"BoxCt_error"},t._l(t.errors,(function(s,i){return e("div",{key:i+"_e"},[t._v(" "+t._s(s)+" ")])})),0):t._e(),t.out_sec?e("div",{staticClass:"BoxCt_info"},[e("div",[e("span",{staticClass:"bold"},[t._v(t._s(t.out_year))]),t._v(" éves vagy, ")]),e("div",[e("span",{staticClass:"bold"},[t._v(t._s(t.out_day))]),t._v(" napja születtél, ")]),e("div",[t._v(" ... az "),e("span",{staticClass:"bold"},[t._v(t._s(t.out_hour))]),t._v(" óra, ")]),e("div",[t._v(" ... vagy "),e("span",{staticClass:"bold"},[t._v(t._s(t.out_min))]),t._v(" perc, ")]),e("div",[t._v(" ... vagy "),e("span",{staticClass:"bold"},[t._v(t._s(t.out_sec))]),t._v(" másodperc. Milyen öreg vagy! ")]),e("br"),e("div",[t._v("Szerinted számolja a szökőéveket is?")])]):t._e(),e("br"),e("a",{on:{click:t.back}},[t._v("Vissza")])])])},L=[],Z={data:function(){return{y:null,m:null,d:null,out_sec:!1,out_min:!1,out_hour:!1,out_day:!1,out_year:!1,fulldate:null,errors:[]}},watch:{y:function(){this.validateDate()},m:function(){this.validateDate()},d:function(){this.validateDate()}},methods:{back:function(){this.$router.push("/")},timer:function(){this.validateDate(),clearTimeout(this.tmpTimer),this.tmpTimer=setTimeout(this.timer,1e3)},validateDate:function(){if(this.out_sec=!1,this.errors=[],!this.y||!this.m||!this.d)return!1;var t=/^[0-9]+$/;if(!t.test(this.y)||!t.test(this.m)||!t.test(this.d))return this.errors.push("Te egy speciális korban (vagy kórral) születtél.");var e=parseInt(this.y),s=parseInt(this.m),i=parseInt(this.d),a=new Date,o=Date.parse(e+"-"+s+"-"+i);return s==a.getMonth()+1&&i==a.getDate()&&Msg.s("Boldog születésnapot!"),e<=1900&&this.errors.push("Valaki nagyon öreg!"),(s<1||s>12)&&this.errors.push('"'+s+'" - van ilyen hónap?'),o?o>a.getTime()?this.errors.push("Időutazás?"):void(e<100||(this.out_sec=Math.floor((a.getTime()-o)/1e3),this.out_min=Math.floor(this.out_sec/60),this.out_hour=Math.floor(this.out_min/60),this.out_day=Math.floor(this.out_hour/24),this.out_year=Math.abs(new Date(a.getTime()-o).getUTCFullYear()-1970))):this.errors.push("Nem létezik ilyen nap!")}},activated:function(){this.$nextTick(this.timer)},beforeRouteLeave:function(t,e,s){clearTimeout(this.tmpTimer),s()}},H=Z,q=(0,m.Z)(H,I,L,!1,null,null,null),K=q.exports,$=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hflex fit gap Box"},[e("div",[e("router-link",{attrs:{to:"/"}},[t._v(" Vissza ")])],1),t.running?[e("div",{staticClass:"center"},[e("div",[t._v("Jó: "+t._s(t.good))]),e("div",[t._v("Rossz: "+t._s(t.bad))])]),t.summary?[e("div",[e("div",{staticClass:"Blue btn",on:{click:t.reset}},[t._v("Kész!")])])]:[e("div",{staticClass:"vflex bnumber center"},[t._v(" "+t._s(t.job.replace("?","☐"))+" ")]),e("div",{staticClass:"vflex center"},t._l(t.inputs,(function(s,i){return e("div",{key:"indexA"+i},[e("div",{staticClass:"btn Blue",on:{click:function(e){return t.onClick(s)}}},[t._v(t._s(s))])])})),0),e("div",{staticClass:"hflex gap scroll"},t._l(t.logs.slice().reverse(),(function(s,i){return e("div",{key:"indexB"+i,staticClass:"center"},[e("div",{class:[t.isOk(s)?"Green":"Red","snumber"]},[t._v(" "+t._s(s)+" ")])])})),0)]]:e("div",{staticClass:"hflex gap center"},[e("label",[t._v("Kérem, határozza meg típusonként a feladatok darabszámát!")]),e("br"),e("div",{staticClass:"vflex gap"},[e("label",[t._v("max szám")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.max,expression:"max",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.max},on:{input:function(e){e.target.composing||(t.max=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),e("div",{staticClass:"vflex gap"},[e("label",[t._v("1 > 2")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.rel1,expression:"rel1",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.rel1},on:{input:function(e){e.target.composing||(t.rel1=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" db. ")]),e("div",{staticClass:"vflex gap"},[e("label",[t._v("1 + 2 = ☐")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.osszeg1,expression:"osszeg1",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.osszeg1},on:{input:function(e){e.target.composing||(t.osszeg1=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" db. ")]),e("div",{staticClass:"vflex gap"},[e("label",[t._v("1 - 2 = ☐")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.kivonas1,expression:"kivonas1",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.kivonas1},on:{input:function(e){e.target.composing||(t.kivonas1=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" db. ")]),e("div",{staticClass:"vflex gap"},[e("label",[t._v("1 + ☐ = 2")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.osszeg2,expression:"osszeg2",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.osszeg2},on:{input:function(e){e.target.composing||(t.osszeg2=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" db. ")]),e("div",{staticClass:"vflex gap"},[e("label",[t._v("☐ + 1 = 2")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.osszeg3,expression:"osszeg3",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.osszeg3},on:{input:function(e){e.target.composing||(t.osszeg3=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" db. ")]),e("div",{staticClass:"vflex gap"},[e("label",[t._v("2 - ☐ = 1")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.kivonas2,expression:"kivonas2",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.kivonas2},on:{input:function(e){e.target.composing||(t.kivonas2=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" db. ")]),e("div",{staticClass:"vflex gap"},[e("label",[t._v("☐ - 1 = 2")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.kivonas3,expression:"kivonas3",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.kivonas3},on:{input:function(e){e.target.composing||(t.kivonas3=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" db. ")]),e("div",{staticClass:"vflex gap"},[e("label",[t._v("1 + 2 + 3 = 6")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.osszeg4,expression:"osszeg4",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.osszeg4},on:{input:function(e){e.target.composing||(t.osszeg4=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" db. ")]),e("div",{staticClass:"Blue btn",on:{click:t.onStartBtn}},[t._v("Kezdés")])])],2)},D=[],A=s(6652),O=A.Z,U=(0,m.Z)(O,$,D,!1,null,"5500ee6d",null),J=U.exports,V=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"hflex fit gap Box"},[e("div",[e("router-link",{attrs:{to:"/"}},[t._v(" Vissza ")])],1),e("div",{staticClass:"vflex"},[e("div",{staticClass:"toDoCount"},[t._v(" "+t._s(t.first)+" "+t._s(t.op)+" "+t._s(t.second)+" = "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],ref:"field",attrs:{type:"number"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})]),e("div",{staticClass:"fit"}),e("div",[t._v("Megoldott feladatok száma:"+t._s(t.good_count))])])]),t.celebration?e("div",{staticClass:"fit"},[e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"})]):t._e()])},R=[],E=s(4367),W=E.Z,G=(0,m.Z)(W,V,R,!1,null,"5a6da96b",null),F=G.exports,Y=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"hflex fit gap Box"},[e("div",[e("router-link",{attrs:{to:"/"}},[t._v(" Vissza ")])],1),e("div",{staticClass:"vflex"},[e("div",{staticClass:"toDoCount"},[t._v(" "+t._s(t.first)+" "+t._s(t.op)+" "+t._s(t.second)+" = "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],ref:"field",attrs:{type:"number"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})]),e("div",{staticClass:"fit"}),e("div",[t._v("Megoldott feladatok száma:"+t._s(t.good_count))])])]),t.celebration?e("div",{staticClass:"fit"},[e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"})]):t._e()])},Q=[],X=s(4690),tt=X.Z,et=(0,m.Z)(tt,Y,Q,!1,null,"f33c8dcc",null),st=et.exports,it=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"hflex fit gap Box"},[e("div",[e("router-link",{attrs:{to:"/"}},[t._v(" Vissza ")])],1),e("div",[t._v("Megoldott feladatok száma:"+t._s(t.good_count))]),e("div",[t._v("Sikertelen feladatok száma:"+t._s(t.bad_count))]),1!=t.phase||t.celebration?t._e():[0==t.sortType?e("div",{staticClass:"taskText"},[t._v(" Rendezd növekvő sorrendbe! ")]):e("div",{staticClass:"taskText"},[t._v("Rendezd csökkenő sorrendbe!")])],e("div",{staticClass:"hflex gap"},[e("div",{staticClass:"vflex"},t._l(t.toSelect,(function(s,i){return e("button",{key:"a"+i,staticClass:"numberBox",class:t.selected.includes(i)?"selected":null,on:{click:function(e){!t.selected.includes(i)&&t.onSelect(s,i)}}},[t._v(" "+t._s(s)+" ")])})),0),2!=t.phase||t.celebration?t._e():[0==t.oddType?e("div",{staticClass:"taskText"},[t._v(" Most válaszd ki a páros számokat! ")]):e("div",{staticClass:"taskText"},[t._v(" Most válaszd ki a páratlan számokat! ")])],e("div",{staticClass:"vflex gap"},t._l(t.selected,(function(s,i){return e("div",{key:s+"b"+i,staticClass:"numberBoxSelected",class:t.selected2.includes(i)?"selected2":null,on:{click:function(e){return t.onSelect2(t.toSelect[s],i)}}},[t._v(" "+t._s(t.toSelect[s])+" ")])})),0)],2)],2),t.celebration?e("div",{staticClass:"fit"},[e("div",{staticClass:"feelBad cflex",staticStyle:{"font-size":"200px"}},[t._v("☺")]),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"})]):t._e(),t.celebration||t.feelBad?e("div",{staticClass:"fit feelBad cflex",staticStyle:{"font-size":"200px"}},[e("button",{staticClass:"nextBTN",on:{click:t.generate}},[t._v("Következő feladat")])]):t._e(),t.feelBad?e("div",{staticClass:"fit feelBad cflex",staticStyle:{"font-size":"200px"}},[t._v(" ☹ ")]):t._e()])},at=[],ot={data:function(){return{toSelect:[],selected:[],selected2:[],oddType:0,sortType:0,good_count:0,bad_count:0,phase:1,celebration:!1,feelBad:!1}},mounted:function(){this.generate()},methods:{isgood:function(){if(2==this.phase){var t=this.selected.filter(((t,e)=>!this.selected2.includes(e))).filter((t=>this.oddType?this.toSelect[t]%2!=0:this.toSelect[t]%2==0));0==t.length&&this.runGood()}},rand:function(t,e){return Math.round(Math.random()*(e-t)+t)},random:function(t,e){let s=[];e=e||0;for(let a=0;a<5;a++)s.push(this.rand(e,t));let i=s.sort().filter((function(t,e,s){return!e||t!=s[e-1]})).map((t=>({value:t,sort:Math.random()}))).sort(((t,e)=>t.sort-e.sort)).map((({value:t})=>t));return i[this.rand(0,i.length-1)]},runGood:function(t){this.good_count++,this.celebration=!0},runBad:function(t){this.bad_count++,this.feelBad=!0},generate:function(){this.sortType=this.random(0,1),this.oddType=this.random(0,1),this.toSelect=[],this.selected=[],this.selected2=[],this.phase=1,this.celebration=!1,this.feelBad=!1,this.toSelect.push(this.random(0,100)),this.toSelect.push(this.random(0,100)),this.toSelect.push(this.random(0,100)),this.toSelect.push(this.random(0,100)),this.toSelect.push(this.random(0,100)),this.toSelect.push(this.random(0,100)),this.toSelect.push(this.random(0,100)),this.toSelect.push(this.random(0,100))},onSelect:function(t,e){if(!this.feelBad){var s=this.toSelect.filter(((t,e)=>!this.selected.includes(e))).filter((e=>this.sortType?e>t:e<t));s.length?this.runBad():(this.selected.push(e),s=this.toSelect.filter(((t,e)=>!this.selected.includes(e))),s.length||(this.phase=2)),this.isgood()}},onSelect2:function(t,e){this.selected2.includes(e)||this.feelBad||2==this.phase&&(t%2==0?this.oddType?this.runBad():(this.selected2.push(e),this.isgood()):this.oddType?(this.selected2.push(e),this.isgood()):this.runBad())}}},nt=ot,rt=(0,m.Z)(nt,it,at,!1,null,"0a383918",null),lt=rt.exports,ct=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"hflex fit gap Box"},[e("div",[t._v("Megoldott feladatok száma:"+t._s(t.good_count))]),e("div",[e("router-link",{attrs:{to:"/"}},[t._v(" Vissza ")])],1),e("div",{staticClass:"vflex"},[e("div",{staticClass:"toDoCount"},t._l(t.second,(function(s){return e("span",{key:s},[t._v(" "+t._s(t.first)+" "),s!=t.second?e("span",[t._v("+")]):t._e()])})),0)]),e("div",{staticClass:"vflex"},[e("div",{staticClass:"toDoCount"},[t._v(" "+t._s(t.first)+" "+t._s(t.op)+" "+t._s(t.second)+" = "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],ref:"field",attrs:{type:"number"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})]),e("div",{staticClass:"fit"})])]),t.celebration?e("div",{staticClass:"fit"},[e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"})]):t._e()])},ut=[],dt=s(5551),ht=dt.Z,mt=(0,m.Z)(ht,ct,ut,!1,null,"6b30920f",null),_t=mt.exports,vt=function(){var t=this,e=t._self._c;return e("div",[e("div",[t._v("Jó:"+t._s(t.good_count))]),e("div",[t._v("Rossz:"+t._s(t.bad_count))]),e("div",{staticClass:"pointer",on:{click:t.read}},[t._v("Hang lejátszása 🔊")]),!t.index||t.good||t.bad?t._e():e("h2",[t._v(" "+t._s(t.words[t.index].replace("j","_").replace("J","_").replace("ly","_").replace("Ly","_"))+" ")]),t.good||t.bad?e("h2",{staticClass:"answer",class:{red:t.bad,green:t.good}},[t._v(" "+t._s(t.words[t.index])+" ")]):t._e(),!t.index||t.good||t.bad?e("div",[e("div",{staticClass:"btn Blue",on:{click:t.next}},[t._v("Következő")])]):e("div",{staticClass:"vflex gap"},[e("div",{staticClass:"Blue btn",on:{click:t.onJ}},[t._v("j")]),e("div",{staticClass:"Blue btn",on:{click:t.onLy}},[t._v("ly")])]),t.celebration?e("div",{staticClass:"fit"},[e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"}),e("div",{staticClass:"firework"})]):t._e()])},pt=[],ft=["ajak","ajándék","ajtó","ájul","akadály","amely","apály","aszály","átkelőhely","bagoly","baj","báj","bajnok","bajusz","bármely","bátyja","bélyeg","bivaly","bója","bolygó","bojler","bolyong","bojt","borbély","borjú","bújik","cikkely","csekély","cserje","dagály","derelye","díj","éjfél","éjjel","éjszaka","ejt","ejtőernyő","eleje","éljen!","engedély","erély","esély","évfolyam","fahéj","fáj","fájdalom","fáklya","fej","fejedelem","fejsze","fejt","fekhely","felejt","férj","fogoly","fojt","folyam","folyékony","folyik","folyó","folyosó","folytat","földrajz","furulya","fürj","gally","gépjármű","gereblye","Gergely","gólya","golyó","gomblyuk","gömbölyű","görkorcsolya","gulyás","gyapjú","gyújt","gyűjt","gyűjtemény","haj","háj","hajít","hajnal","Hajnalka","hajó","hajrá!","hajt","hajtás","héj","héja","hely","helyes","helyesírás","helyett","helyez","helyezés","helyiség","helység","helyszín","hógolyózik","hólyag","homályos","hópehely","hüvelyk","ibolya","Ibolya","idején","időjárás","ifjú","íj","íjász","ijed","ijedség","ijeszt","ilyen","injekció","írásjel","jácint","jaguár","jajgat","János","január","japán","jár","jármű","járvány","játék","játszik","javít","jég","jegy","jel","jelen","jeles","jellem","jelvény","jelző","jérce","jó","jobb","jókor","jólelkű","jósol","jószág","József","jön","jövő","Judit","juh","juhar","juhász","Júlia","Julianna","július","június","jut","jutalom","kályha","Károly","kastély","keselyű","kétely","király","királynő","komoly","korcsolya","kölyök","kristály","kulcslyuk","lábujj","lajhár","Lajos","lefolyó","lejjebb","lejtő","lyuk","lyukas","lyukasztó","máj","májas","majdan","majdcsak","majom","május","mély","melyik","mélység","Mihály","milyen","moly","mosoly","mosolyog","muszáj","műhely","nyáj","nyavalya","nyavalyog","nyújt","nyújtózik","óhaj","olaj","olyan","olykor","osztály","pajta","pajtás","pajzs","pálya","pályázat","papagáj","paraj","pehely","persely","petrezselyem","pisztoly","pocsolya","pólya","pulyka","raj","rajong","rajt","rajta","rajz","rejt","rejtvény","ricsaj","saját","sajnál","sajnos","sajt","segély","sejt","sekély","selejt","selyem","selymes","sikoly","sóhaj","sólyom","sújt","súly","súlyos","súlyzó","süllyed","szabály","szabályos","száj","szeszélyes","szíj","szomjas","táj","talaj","tégely","tej","tejföl","teljes","teljesít","terjeszt","teteje","tojás","tolvaj ","tűzhely","új (nem régi)","újév","újdonság","ujj (testrész)","újra","újság","uszály","ünnepély","vaj","váj","vajon?","valójában","vályog","vályú","varjú","veszély","veszélyes","zaj","zsálya","zsámoly","zsivaj"],gt={data:function(){return{index:null,words:null,celebration:!1,good:!1,bad:!1,good_count:0,bad_count:0}},mounted:function(){this.words=ft,this.$nextTick((()=>{this.generate()}))},methods:{rand:function(t,e){return Math.round(Math.random()*(e-t)+t)},random:function(t,e){let s=[];e=e||0;for(let a=0;a<5;a++)s.push(this.rand(e,t));let i=s.sort().filter((function(t,e,s){return!e||t!=s[e-1]})).map((t=>({value:t,sort:Math.random()}))).sort(((t,e)=>t.sort-e.sort)).map((({value:t})=>t));return i[this.rand(0,i.length-1)]},generate:function(){this.index=this.random(0,this.words.length-1),this.read()},read:function(){var t=new SpeechSynthesisUtterance(this.words[this.index]);t.lang="hu-HU",window.speechSynthesis.speak(t)},onJ:function(){this.words[this.index].toLowerCase().includes("j")?this.dogood():this.dobad()},onLy:function(){this.words[this.index].toLowerCase().includes("ly")?this.dogood():this.dobad()},dogood:function(){this.good=!0,this.celebration=!0,this.good_count++},dobad:function(){this.bad=!0,this.bad_count++},next:function(){this.good&&this.words.splice(this.index,1),this.bad=!1,this.good=!1,this.celebration=!1,this.generate()}}},kt=gt,bt=(0,m.Z)(kt,vt,pt,!1,null,"e4a19ce4",null),yt=bt.exports;i.ZP.use(C.ZP);var jt=new C.ZP({mode:"history",base:"",routes:[{path:"/",name:"home",component:P},{path:"/age",name:"age",component:K},{path:"/math_2",name:"math_2",component:J},{path:"/math_3",name:"math_3",component:F},{path:"/math_3_2",name:"math_3_2",component:st},{path:"/math_4",name:"math_4",component:lt},{path:"/math_5",name:"math_5",component:_t},{path:"/jly",name:"jly",component:yt}]});i.ZP.component("Box",w),i.ZP.config.productionTip=!1,new i.ZP({router:jt,render:function(t){return t(k)}}).$mount("#app")}},__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var s=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t].call(s.exports,s,s.exports,__webpack_require__),s.exports}__webpack_require__.m=__webpack_modules__,function(){var t=[];__webpack_require__.O=function(e,s,i,a){if(!s){var o=1/0;for(c=0;c<t.length;c++){s=t[c][0],i=t[c][1],a=t[c][2];for(var n=!0,r=0;r<s.length;r++)(!1&a||o>=a)&&Object.keys(__webpack_require__.O).every((function(t){return __webpack_require__.O[t](s[r])}))?s.splice(r--,1):(n=!1,a<o&&(o=a));if(n){t.splice(c--,1);var l=i();void 0!==l&&(e=l)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[s,i,a]}}(),function(){__webpack_require__.d=function(t,e){for(var s in e)__webpack_require__.o(e,s)&&!__webpack_require__.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};__webpack_require__.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,a,o=s[0],n=s[1],r=s[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(i in n)__webpack_require__.o(n,i)&&(__webpack_require__.m[i]=n[i]);if(r)var c=r(__webpack_require__)}for(e&&e(s);l<o.length;l++)a=o[l],__webpack_require__.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return __webpack_require__.O(c)},s=self["webpackChunkapp"]=self["webpackChunkapp"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var __webpack_exports__=__webpack_require__.O(void 0,[998],(function(){return __webpack_require__(7967)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();