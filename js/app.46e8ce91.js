(function(e){function t(t){for(var a,r,n=t[0],l=t[1],c=t[2],m=0,u=[];m<n.length;m++)r=n[m],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],a=!0,n=1;n<s.length;n++){var l=s[n];0!==i[l]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},i={app:0},o=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var d=l;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"0a3f":function(e,t,s){},"22d7":function(e,t,s){"use strict";s("be87")},"46d1":function(e,t,s){e.exports=s.p+"img/sports.8fe5589d.webp"},"51fe":function(e,t,s){e.exports=s.p+"img/e-sports.371cdf19.webp"},5510:function(e,t,s){e.exports=s.p+"img/whatsapp-svgrepo-com.9ada85f9.svg"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Nav"),s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1)],1)},o=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",[s("div",{staticClass:"nav-links"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/personal"}},[e._v("Pessoal")]),s("router-link",{staticClass:"nav-link",attrs:{to:"/professional"}},[e._v("Profissional")]),s("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[e._v("DEV's")])],1),s("div",{staticClass:"nav-icons"},["/personal"==this.$route.path||"/"==this.$route.path?s("div",{staticClass:"nav-icon"},[e._m(0)]):e._e(),"/personal"==this.$route.path||"/"==this.$route.path?s("div",{staticClass:"nav-icon"},[e._m(1)]):e._e()])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"c-nav-list_link",attrs:{href:"mailto:artur.a.patricio@gmail.com",target:"_blank",rel:"noopener","aria-label":"e-mail"}},[a("img",{staticClass:"resposive-img",attrs:{src:s("6549"),width:"20",height:"20"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"c-nav-list_link",attrs:{href:"https://api.whatsapp.com/send?phone=5511991465492&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vi%20seu%20site%2C%20e...",target:"_blank",rel:"noopener","aria-label":"whatsapp"}},[a("img",{staticClass:"resposive-img",attrs:{src:s("5510"),width:"20",height:"20"}})])}],l={},c=l,d=(s("5b49"),s("2877")),m=Object(d["a"])(c,r,n,!1,null,null,null),u=m.exports,p={name:"App",components:{Nav:u},mounted:function(){document.body.classList.add("bg-app")},destroyed:function(){document.body.classList.remove("bg-app")}},v=p,h=(s("034f"),Object(d["a"])(v,i,o,!1,null,null,null)),f=h.exports,_=s("8c4f"),b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("body",{staticClass:"s-home"},[s("span",{directives:[{name:"touch",rawName:"v-touch:swipe",value:e.swipeHandler,expression:"swipeHandler",arg:"swipe"}]},[e._m(0)])])},C=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main-content"},[s("section",{staticClass:"about",attrs:{id:"about"}},[s("div",{staticClass:"section-header"},[s("h2",[e._v("Sobre mim")]),s("a",{staticClass:"resume-download",attrs:{href:"https://docs.google.com/document/d/e/2PACX-1vRwK42G6ZMLUrDFvyhIEAgn-33QX2CKENi5JP5d5LuED2HRTDGw38gAkFP9MJ2gESomjE5hJGsmCo4A/pub","data-toggle":"tooltip","data-placement":"bottom",title:"","data-original-title":"Download",target:"_blank"}},[e._v(" Download CV ")])]),s("div",{staticClass:"intro"},[s("p",[e._v(" Analista de Sistemas, formado pela Faculdade de Tecnologia de São Paulo em 2018, durante minha formação atuei na área de Healthcare, como Analista de Sistemas Júnior no Hospital Albert Einstein, num período de 3 anos. Atuando na implantação de vários Laboratórios e Hospitais de grande porte, e desenvolvimento de soluções junto a Cerner. Desta maneira destaco minha capacidade de rápido aprendizado, boa relação interpessoal, trabalho em equipe e um alto senso de exatidão, como a profissões relacionadas a Healthcare necessitam. ")]),s("ul",{staticClass:"info"},[s("li",[s("strong",[e._v("Aniversário:")]),e._v(" 18 de março, 1992")]),s("li",[s("strong",[e._v("Local:")]),e._v(" Rua das Fermatas, n4 - Sao Paulo/SP")]),s("li",[s("strong",[e._v("Email:")]),e._v(" artur.a.patricio@gmail.com")]),s("li",[s("strong",[e._v("Fone:")]),e._v(" +55 11 99146-5492")])])])]),s("section",{staticClass:"resume",attrs:{id:"education"}},[s("div",{staticClass:"section-header"},[s("h2",[e._v("Formaçao")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"top-item resume-item"},[s("h2",[e._v("FATEC - FACULDADE DE TECNOLOGIA DE SAO PAULO")]),s("span",[e._v("DEZEMBRO, 2018")]),s("p",[e._v(" Cria, projeta, desenvolve e configura programas, softwares e sistemas para inúmeras empresas. Faz auditoria de sistemas para avaliar possíveis erros e falhas. Além disso, o tecnólogo em Análise e Desenvolvimento de Sistemas está apto a prestar consultoria e desenvolver pesquisas. ")])])]),s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"resume-item"},[s("h2",[e._v("ETEC - ESCOLA TECNICA ESTADUAL DE SAO PAULO")]),s("span",[e._v("DEZEMBRO, 2012")]),s("p",[e._v(" Realiza o desenvolvimento de projetos de sistemas eletrônicos embarcados aplicando tecnologia de circuitos microprocessados e microcontrolados, bem como semicondutores de potência e componentes microeletrônicos. Implementa interfaces de automação com comandos eletromecânicos ou controladores lógicos programáveis instalados em sistemas de controle de processos. Executa e supervisiona trabalhos de instalação e reparo de equipamentos, sistemas eletrônicos inclusive de transmissão e recepção de sinais. Realiza testes de calibração em equipamentos eletrônicos com o uso de aparelhos eletrônicos de medição. Aplica técnicas e métodos de controle de erros e defeitos na linha de produção. Participa na identificação e atuação das causas geradoras de defeito a fim de manter a qualidade dos produtos e serviços. Aplica normas técnicas e de segurança do trabalho e meio ambiente em conformidade com os padrões nacionais e internacionais. ")])])])])]),s("section",{staticClass:"resume",attrs:{id:"experience"}},[s("div",{staticClass:"section-header"},[s("h2",[e._v("Experiencia")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"top-item resume-item"},[s("h2",[e._v("Hospital Albert Einstein")]),s("span",[e._v("ANALISTA DE SISTEMAS JR | NOV 18 - FEV 20")]),s("p",[e._v(" Sustentação de sistemas externos e internos. Implantação de novas unidades administradas pelo Hospital Albert Einstein. Desenvolvimento de sistemas legados, realizando o levantamento de requisitos e desenvolvimento utilizando tecnologias como HL7. Vasta experiências com Cerner Millennium. ")])])]),s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"resume-item"},[s("h2",[e._v("Hospital Albert Einstein")]),s("span",[e._v("ESTAGIARIO | MAR 17 - OUT 18")]),s("p",[e._v(" Análise de requisitos para criação de novas implementações, parametrização da integração entre sistemas internos e externos e sustentação relacionadas a estes Sistemas(Cerner). ")])])]),s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"resume-item"},[s("h2",[e._v("LowCost")]),s("span",[e._v("ANALISTA | JAN 15 - DEZ 15")]),s("p",[e._v(" Realização de suporte de impressoras via telefone para todo o Brasil. Marcação de atendimentos técnicos supervisionados quando necessário. Auxilio no planejamento de aquisição de novos clientes entre eles Castrolanda, ID Logistics. ")])])])])]),s("section",{staticClass:"resume",attrs:{id:"skill"}},[s("div",{staticClass:"section-header"},[s("h2",[e._v("Conhecimentos")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"top-item resume-item"},[s("h2",[e._v("JAVA SCRIPT")]),s("p",[e._v("Conhecimento sólido, utilizado em diversos projetos.")])])]),s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"resume-item"},[s("h2",[e._v("MySQL")]),s("p",[e._v(" Contruçao de diversas QUERYs persolizadas de acordo com os requisitos do cliente. ")])])]),s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"resume-item"},[s("h2",[e._v("Spring Boot")]),s("p",[e._v(" Desenvolvimento de um sistema para gerenciamento de participantes de eventos, como back-end utilizamos uma API REST utilizando o SPRING BOOT para os MODELs e regras de negocios, no front-end utilizamos ANGULAR. ")])])]),s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"resume-item"},[s("h2",[e._v("Vue")]),s("p",[e._v(" Desenvovimento de inumeros projetos para uso pessoal e publicados no GITHUB, gosto desse framework, pois me possibilita agilidade e boa docomentação. ")])])]),s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"resume-item"},[s("h2",[e._v("NPM")]),s("p",[e._v(" Conhecimento em desenvolvimento, pois engloba todo um ecosistema aberto, que so cresce a cada dia. ")])])]),s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"resume-item"},[s("h2",[e._v("Flutter")]),s("p",[e._v(" Apaixonado pela possibilidade de criar codigos cross plataforma com qualidade. ")])])]),s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"resume-item"},[s("h2",[e._v("HL7")]),s("p",[e._v(" Padrão HL7(Health Level 7), padrao utilizado na representação e a transferência de dados clínicos e administrativos entre sistemas de informação em saúde ")])])])])])])}],g={methods:{swipeHandler:function(e){"left"==e?this.$router.push("about"):this.$router.push("personal")}}},w=g,A=(s("6ff9"),Object(d["a"])(w,b,C,!1,null,"51eb06ea",null)),E=A.exports,x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"c_content"},[s("span",{directives:[{name:"touch",rawName:"v-touch:swipe.left",value:e.swipeHandler,expression:"swipeHandler",arg:"swipe",modifiers:{left:!0}}]},[e._m(0),s("div",{staticClass:"c-tiles"},[s("a",{staticClass:"c-tile",attrs:{"aria-label":"Em construçao"},on:{click:function(t){return e.changePhoto()}}},[s("h2",{staticClass:"c-tile_title"},[e._v("Familia")]),s("div",{staticClass:"c-tile_holder"},[s("img",{staticClass:"c-tile_img",attrs:{src:e.src[e.currentSrc],alt:"Alicia","aria-label":"Image of Alicia"}})])]),s("a",{staticClass:"c-tile",attrs:{"aria-label":"Em construçao"},on:{click:function(t){return e.showModal()}}},[s("h2",{staticClass:"c-tile_title"},[e._v("Recomendações")]),e._m(1)]),e._m(2),e._m(3)])]),s("Modal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],staticClass:"modals",on:{close:e.closeModal}})],1)},O=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"c_main"},[s("h1",{staticClass:"c_main_title"},[e._v("Olá, Eu sou o Artur.")]),s("h1",{staticClass:"c_main_title_m"},[e._v("DEV's.")]),s("p",{staticClass:"c_main_sub"},[e._v(" Analista e Desenvolvedor, tambem sou Técnico em Eletrônica apaixonado por esporte e tecnologia. ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"c-tile_holder"},[a("img",{staticClass:"c-tile_img",attrs:{src:s("736d"),alt:"Esporte","aria-label":"Sport image"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"c-tile",attrs:{href:"#","aria-label":"Em construçao"}},[a("h2",{staticClass:"c-tile_title"},[e._v("Campeonatos")]),a("div",{staticClass:"c-tile_holder"},[a("img",{staticClass:"c-tile_img",attrs:{alt:"Competiçao","aria-label":"Competition image",src:s("46d1")}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"c-tile",attrs:{href:"https://www.youtube.com/c/ValenteHunter/featured","aria-label":"Parceria"}},[a("h2",{staticClass:"c-tile_title"},[e._v("Parcerias")]),a("div",{staticClass:"c-tile_holder"},[a("img",{staticClass:"c-tile_img",attrs:{alt:"Competiçao","aria-label":"Competition image",src:s("51fe")}})])])}],S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"modal-fade"}},[s("div",{staticClass:"modal-backdrop"},[s("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[s("header",{staticClass:"modal-header",attrs:{id:"modalTitle"}},[e._t("header",[e._v(" Recomendaçoes ")])],2),s("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[s("div",{staticClass:"body"},[e._v(" Filmes ")]),s("ul",[s("li",[e._v("Batman")]),s("li",[e._v("A ilha do Medo")]),s("li",[e._v("A Origem")])])]),s("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[s("div",{staticClass:"body"},[e._v(" Música ")]),s("ul",[s("li",[e._v("Alicia Keys")]),s("li",[e._v("Maria Gadu")]),s("li",[e._v("Legiao Urbana")])])]),s("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[s("div",{staticClass:"body"},[e._v(" Livros ")]),s("ul",[s("li",[e._v("O poder da persuasao")]),s("li",[e._v("UML")]),s("li",[e._v("O Código da Inteligência")])])]),s("div",[s("footer",{staticClass:"modal-footer"},[e._t("footer",[s("a",{staticClass:"btngreen",attrs:{type:"button","aria-label":"Close modal"},on:{click:e.close}},[e._v("Fechar")])])],2)])])])])},y=[],D={name:"modal",data:function(){return{show:!1}},methods:{close:function(){this.$emit("close")}}},M=D,k=(s("22d7"),Object(d["a"])(M,S,y,!1,null,null,null)),P=k.exports,L={components:{Modal:P},data:function(){return{src:["https://n1arthn1.github.io/img/ali.7e3a582f.webp","https://n1arthn1.github.io/img/bbAli.webp","https://n1arthn1.github.io/img/fa&bb.webp"],isModalVisible:!1,currentSrc:0}},methods:{changePhoto:function(){this.currentSrc<this.src.length-1?this.currentSrc++:this.currentSrc=0},showModal:function(){this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1},swipeHandler:function(){this.$router.push("professional")}}},j=L,H=(s("5d6d"),Object(d["a"])(j,x,O,!1,null,"152277a6",null)),$=H.exports,T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"c_content c_main"},[s("div",{directives:[{name:"touch",rawName:"v-touch:swipe.rigth",value:e.swipeHandler,expression:"swipeHandler",arg:"swipe",modifiers:{rigth:!0}}],staticClass:"handler"},[s("h1",[e._v("Ola, DEV.!!")]),s("h2",[e._v("Breve descriçao de como o site foi construido!")])])])},R=[],I={methods:{swipeHandler:function(){this.$router.push("professional")}}},N=I,V=(s("b8ab"),Object(d["a"])(N,T,R,!1,null,null,null)),F=V.exports;a["a"].use(_["a"]);var z=[{path:"/professional",component:E},{path:"/personal",component:$},{path:"/",component:$},{path:"/about",component:F}],q=new _["a"]({routes:z}),U=q,G=s("0086"),J=s.n(G);"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js"),a["a"].use(J.a,{disableClick:!0}),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(f)},router:U}).$mount("#app")},"58de":function(e,t,s){},"5b49":function(e,t,s){"use strict";s("58de")},"5d6d":function(e,t,s){"use strict";s("0a3f")},6549:function(e,t,s){e.exports=s.p+"img/email-svgrepo-com.cee522e3.svg"},"6ff9":function(e,t,s){"use strict";s("cd2e")},"736d":function(e,t,s){e.exports=s.p+"img/book.bbb0dfa5.webp"},"85ec":function(e,t,s){},"98e0":function(e,t,s){},b8ab:function(e,t,s){"use strict";s("98e0")},be87:function(e,t,s){},cd2e:function(e,t,s){}});
//# sourceMappingURL=app.46e8ce91.js.map