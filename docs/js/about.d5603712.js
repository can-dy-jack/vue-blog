"use strict";(self["webpackChunkbooknote"]=self["webpackChunkbooknote"]||[]).push([[443],{210:function(t,a,e){e.r(a),e.d(a,{default:function(){return _}});var n=e(6252),i=e(3577);const r={class:"about"},s={class:"about-content"},d={class:"saying"},l={class:"h2"},o={style:{"text-align":"right"}},c={class:"tags"},g={class:"saying"},u={style:{"text-align":"center","font-size":"20px"}},h={style:{"text-align":"center","font-size":"20px"}},y={key:0,class:"tags"},m=["innerHTML"];function x(t,a,e,x,p,b){const f=(0,n.up)("HeadNav");return(0,n.wg)(),(0,n.iD)("div",r,[(0,n.Wm)(f,{sty:"about-img",title:"关于我",style:(0,i.j5)({background:"url("+p.img+") center"})},null,8,["style"]),(0,n._)("div",s,[(0,n._)("div",d,[(0,n._)("div",l,(0,i.zw)(p.saying.content),1),(0,n._)("div",o,"—— "+(0,i.zw)(p.saying.origin),1),(0,n._)("span",c,(0,i.zw)(p.saying.tag),1)]),(0,n._)("div",g,[(0,n._)("div",u,"阳历："+(0,i.zw)(p.day[0])+"-"+(0,i.zw)(p.day[1])+"-"+(0,i.zw)(p.day[2])+" "+(0,i.zw)(p.day[3]),1),(0,n._)("div",h,"阴历："+(0,i.zw)(p.day[4])+"年"+(0,i.zw)(p.day[6])+"月"+(0,i.zw)(p.day[7])+"日 / "+(0,i.zw)(p.day[5])+"年",1),p.day[9]?((0,n.wg)(),(0,n.iD)("span",y,(0,i.zw)(p.day[9]),1)):(0,n.kq)("",!0)]),(0,n._)("div",{class:"markdown-context",innerHTML:p.markdown},null,8,m)])])}var p=e(2110),b='<h1 id="about-me">About me</h1> <ul> <li>student</li> <li>front-end developer</li> <li>hexo-theme-delicate</li> </ul> <p><em>My social account:</em></p> <ul> <li>Github: <a href="https://github.com/can-dy-jack">can-dy-jack</a></li> <li>CSDN: <a href="https://blog.csdn.net/qq_46590483?spm=1001.2100.3001.5343">Kart jim</a></li> </ul> <p><em>My eamil:</em> 📫</p> <ul> <li><a href="mailto:&#106;&#106;&#x61;&#x63;&#x6b;&#x5f;&#99;&#x68;&#101;&#x6e;&#51;&#64;&#x31;&#54;&#51;&#46;&#x63;&#111;&#109;">&#106;&#106;&#x61;&#x63;&#x6b;&#x5f;&#99;&#x68;&#101;&#x6e;&#51;&#64;&#x31;&#54;&#51;&#46;&#x63;&#111;&#109;</a></li> <li><a href="mailto:&#107;&#97;&#x72;&#x74;&#106;&#105;&#x6d;&#x40;&#x31;&#54;&#x33;&#x2e;&#x63;&#111;&#109;">&#107;&#97;&#x72;&#x74;&#106;&#105;&#x6d;&#x40;&#x31;&#54;&#x33;&#x2e;&#x63;&#111;&#109;</a></li> </ul> <p><img src="https://github-readme-stats.vercel.app/api/pin/?username=can-dy-jack&repo=hexo-theme-delicate&theme=vue" alt="ReadMe Card"></p> <table> <thead> <tr> <th>More</th> </tr> </thead> <tbody><tr> <td>🔭 I’m currently working on shou university</td> </tr> <tr> <td>🌱 I’m currently learning vue...</td> </tr> <tr> <td>🤔 I’m looking for help with Website development</td> </tr> <tr> <td>💬 Ask me about ...</td> </tr> <tr> <td>👯 I’m looking to collaborate on ...</td> </tr> <tr> <td>😄 Pronouns: ...</td> </tr> <tr> <td>⚡ Fun fact: ...</td> </tr> <tr> <td>👍Dynamically generated stats for <a href="https://github.com/anuraghazra/github-readme-stats">github readmes：</a></td> </tr> </tbody></table> ',f=b;const v=e(9669);var w={components:{HeadNav:p.Z},data(){return{saying:{},markdown:f,img:"",day:[]}},methods:{getSaying:function(){v.get("https://api.xygeng.cn/one").then((t=>{this.saying=t.data.data})).catch((t=>{this.saying="error!"+t,console.error("api error!")}))},getImg:function(){v.get("https://api.xygeng.cn/Bing/url/").then((t=>{this.img=t.data.data}))},getDay:function(){v.get("https://api.xygeng.cn/day").then((t=>{const a=t.data.data;this.day=[a.solar.year,a.solar.month,a.solar.date,a.solar.day,a.lunar.year,a.lunar.animal,a.lunar.month,a.lunar.date,a.festival]}))}},created:function(){this.getSaying(),this.getImg(),this.getDay()}},k=e(3744);const z=(0,k.Z)(w,[["render",x]]);var _=z}}]);
//# sourceMappingURL=about.d5603712.js.map