(function(e){function a(a){for(var s,r,n=a[0],l=a[1],c=a[2],m=0,u=[];m<n.length;m++)r=n[m],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(a);while(u.length)u.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],s=!0,n=1;n<t.length;n++){var l=t[n];0!==i[l]&&(s=!1)}s&&(o.splice(a--,1),e=r(r.s=t[0]))}return e}var s={},i={app:0},o=[];function r(a){if(s[a])return s[a].exports;var t=s[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=s,r.d=function(e,a,t){r.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,a){if(1&a&&(e=r(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)r.d(t,s,function(a){return e[a]}.bind(null,s));return t},r.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=a,n=n.slice();for(var c=0;c<n.length;c++)a(n[c]);var d=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";t("85ec")},"22d7":function(e,a,t){"use strict";t("be87")},"32ef":function(e,a,t){},3374:function(e,a,t){"use strict";t("32ef")},"3b63":function(e,a,t){"use strict";t("ad97")},"46d1":function(e,a,t){e.exports=t.p+"img/sports.8fe5589d.webp"},"51fe":function(e,a,t){e.exports=t.p+"img/e-sports.371cdf19.webp"},5510:function(e,a,t){e.exports=t.p+"img/whatsapp-svgrepo-com.9ada85f9.svg"},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var s=t("2b0e"),i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("Nav"),t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view")],1)],1)},o=[],r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("nav",[t("div",{staticClass:"nav-links"},[t("router-link",{staticClass:"nav-link",attrs:{to:"/personal"}},[e._v("Pessoal")]),t("router-link",{staticClass:"nav-link",attrs:{to:"/professional"}},[e._v("Profissional")]),t("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[e._v("DEV's")])],1),t("div",{staticClass:"nav-icons"},["/personal"==this.$route.path||"/"==this.$route.path?t("div",{staticClass:"nav-icon"},[e._m(0)]):e._e(),"/personal"==this.$route.path||"/"==this.$route.path?t("div",{staticClass:"nav-icon"},[e._m(1)]):e._e()])])},n=[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("a",{staticClass:"c-nav-list_link",attrs:{href:"mailto:artur.a.patricio@gmail.com",target:"_blank",rel:"noopener","aria-label":"e-mail"}},[s("img",{staticClass:"resposive-img",attrs:{src:t("6549"),width:"20",height:"20"}})])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("a",{staticClass:"c-nav-list_link",attrs:{href:"https://api.whatsapp.com/send?phone=5511991465492&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vi%20seu%20site%2C%20e...",target:"_blank",rel:"noopener","aria-label":"whatsapp"}},[s("img",{staticClass:"resposive-img",attrs:{src:t("5510"),width:"20",height:"20"}})])}],l={},c=l,d=(t("5b49"),t("2877")),m=Object(d["a"])(c,r,n,!1,null,null,null),u=m.exports,p={name:"App",components:{Nav:u},mounted:function(){document.body.classList.add("bg-app")},destroyed:function(){document.body.classList.remove("bg-app")}},v=p,h=(t("034f"),Object(d["a"])(v,i,o,!1,null,null,null)),f=h.exports,_=t("8c4f"),b=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("body",{staticClass:"s-home"},[t("span",{directives:[{name:"touch",rawName:"v-touch:swipe",value:e.swipeHandler,expression:"swipeHandler",arg:"swipe"}]},[e._m(0)])])},C=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"main-content"},[t("section",{staticClass:"about",attrs:{id:"about"}},[t("div",{staticClass:"section-header"},[t("h2",[e._v("Sobre mim")]),t("a",{staticClass:"resume-download",attrs:{href:"https://docs.google.com/document/d/e/2PACX-1vRwK42G6ZMLUrDFvyhIEAgn-33QX2CKENi5JP5d5LuED2HRTDGw38gAkFP9MJ2gESomjE5hJGsmCo4A/pub","data-toggle":"tooltip","data-placement":"bottom",title:"","data-original-title":"Download",target:"_blank"}},[e._v(" Download CV ")])]),t("div",{staticClass:"intro"},[t("p",[e._v(" Analista de Sistemas, formado pela Faculdade de Tecnologia de São Paulo em 2018, durante minha formação atuei na área de Healthcare, como Analista de Sistemas Júnior no Hospital Albert Einstein, num período de 3 anos. Atuando na implantação de vários Laboratórios e Hospitais de grande porte, e desenvolvimento de soluções junto a Cerner. Desta maneira destaco minha capacidade de rápido aprendizado, boa relação interpessoal, trabalho em equipe e um alto senso de exatidão, como a profissões relacionadas a Healthcare necessitam. ")]),t("ul",{staticClass:"info"},[t("li",[t("strong",[e._v("Aniversário:")]),e._v(" 18 de março, 1992")]),t("li",[t("strong",[e._v("Local:")]),e._v(" Rua das Fermatas, n4 - Sao Paulo/SP ")]),t("li",[t("strong",[e._v("Email:")]),e._v(" artur.a.patricio@gmail.com")]),t("li",[t("strong",[e._v("Fone:")]),e._v(" +55 11 99146-5492")])])])]),t("section",{staticClass:"resume",attrs:{id:"education"}},[t("div",{staticClass:"section-header"},[t("h2",[e._v("Formaçao")])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"top-item resume-item"},[t("h2",[e._v("FATEC - FACULDADE DE TECNOLOGIA DE SAO PAULO")]),t("span",[e._v("DEZEMBRO, 2018")]),t("p",[e._v(" Cria, projeta, desenvolve e configura programas, softwares e sistemas para inúmeras empresas. Faz auditoria de sistemas para avaliar possíveis erros e falhas. Além disso, o tecnólogo em Análise e Desenvolvimento de Sistemas está apto a prestar consultoria e desenvolver pesquisas. ")])])]),t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"resume-item"},[t("h2",[e._v("ETEC - ESCOLA TECNICA ESTADUAL DE SAO PAULO")]),t("span",[e._v("DEZEMBRO, 2012")]),t("p",[e._v(" Realiza o desenvolvimento de projetos de sistemas eletrônicos embarcados aplicando tecnologia de circuitos microprocessados e microcontrolados, bem como semicondutores de potência e componentes microeletrônicos. Implementa interfaces de automação com comandos eletromecânicos ou controladores lógicos programáveis instalados em sistemas de controle de processos. Executa e supervisiona trabalhos de instalação e reparo de equipamentos, sistemas eletrônicos inclusive de transmissão e recepção de sinais. Realiza testes de calibração em equipamentos eletrônicos com o uso de aparelhos eletrônicos de medição. Aplica técnicas e métodos de controle de erros e defeitos na linha de produção. Participa na identificação e atuação das causas geradoras de defeito a fim de manter a qualidade dos produtos e serviços. Aplica normas técnicas e de segurança do trabalho e meio ambiente em conformidade com os padrões nacionais e internacionais. ")])])])])]),t("section",{staticClass:"resume",attrs:{id:"experience"}},[t("div",{staticClass:"section-header"},[t("h2",[e._v("Experiencia")])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"top-item resume-item"},[t("h2",[e._v("Hospital Albert Einstein")]),t("span",[e._v("ANALISTA DE SISTEMAS JR | NOV 18 - FEV 20")]),t("p",[e._v(" Sustentação de sistemas externos e internos. Implantação de novas unidades administradas pelo Hospital Albert Einstein. Desenvolvimento de sistemas legados, realizando o levantamento de requisitos e desenvolvimento utilizando tecnologias como HL7. Vasta experiências com Cerner Millennium. ")])])]),t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"resume-item"},[t("h2",[e._v("Hospital Albert Einstein")]),t("span",[e._v("ESTAGIARIO | MAR 17 - OUT 18")]),t("p",[e._v(" Análise de requisitos para criação de novas implementações, parametrização da integração entre sistemas internos e externos e sustentação relacionadas a estes Sistemas(Cerner). ")])])]),t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"resume-item"},[t("h2",[e._v("LowCost")]),t("span",[e._v("ANALISTA | JAN 15 - DEZ 15")]),t("p",[e._v(" Realização de suporte de impressoras via telefone para todo o Brasil. Marcação de atendimentos técnicos supervisionados quando necessário. Auxilio no planejamento de aquisição de novos clientes entre eles Castrolanda, ID Logistics. ")])])])])]),t("section",{staticClass:"resume",attrs:{id:"skill"}},[t("div",{staticClass:"section-header"},[t("h2",[e._v("Conhecimentos")])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"top-item resume-item"},[t("h2",[e._v("Java Script")]),t("p",[e._v("Conhecimento obtido atraves da utilizaçao em diversos projetos. Posso definir como minha primeira linguagem, a preferida.")])])]),t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"resume-item"},[t("h2",[e._v("Linux")]),t("p",[e._v("Minha principal OS para desenvolvimento, do ponto de vista DEV é a OS a se escolher, do ponto de vista empresarial, Windows ainda é mais amigavel. Em preparaçao para a conquista da Certificaçao LPI. ")])])]),t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"resume-item"},[t("h2",[e._v("MySQL")]),t("p",[e._v(" Construçao de diversas QUERYs persolizadas de acordo com os requisitos do cliente. ")])])]),t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"resume-item"},[t("h2",[e._v("Spring Boot")]),t("p",[e._v(" Desenvolvimento de um sistema para gerenciamento de participantes de eventos, como back-end utilizamos uma API REST utilizando o SPRING BOOT para os MODELs e regras de negocios, no front-end utilizamos ANGULAR. ")])])]),t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"resume-item"},[t("h2",[e._v("Vue")]),t("p",[e._v(" Desenvovimento de inumeros projetos para uso pessoal e publicados no GITHUB, gosto desse framework, pois me possibilita agilidade e boa docomentação. ")])])]),t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"resume-item"},[t("h2",[e._v("NPM")]),t("p",[e._v(" Conhecimento em desenvolvimento, pois engloba todo um ecosistema aberto, que so cresce a cada dia. ")])])]),t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"resume-item"},[t("h2",[e._v("Flutter")]),t("p",[e._v(" Apaixonado pela possibilidade de criar codigos cross plataforma com qualidade. ")])])]),t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"resume-item"},[t("h2",[e._v("HL7")]),t("p",[e._v(" Padrão HL7(Health Level 7), padrao utilizado na representação e a transferência de dados clínicos e administrativos entre sistemas de informação em saúde ")])])])])])])}],g={methods:{swipeHandler:function(e){"left"==e?this.$router.push("about"):"right"==e&&this.$router.push("personal")}}},w=g,E=(t("3374"),Object(d["a"])(w,b,C,!1,null,"ad788242",null)),A=E.exports,x=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"c_content"},[t("span",{directives:[{name:"touch",rawName:"v-touch:swipe.left",value:e.swipeHandler,expression:"swipeHandler",arg:"swipe",modifiers:{left:!0}}]},[e._m(0),t("div",{staticClass:"c-tiles"},[t("a",{staticClass:"c-tile",attrs:{"aria-label":"Em construçao"},on:{click:function(a){return e.changePhoto()}}},[t("h2",{staticClass:"c-tile_title"},[e._v("Familia")]),t("div",{staticClass:"c-tile_holder"},[t("img",{staticClass:"c-tile_img",attrs:{src:e.src[e.currentSrc],alt:"Alicia","aria-label":"Image of Alicia"}})])]),t("a",{staticClass:"c-tile",attrs:{"aria-label":"Em construçao"},on:{click:function(a){return e.showModal()}}},[t("h2",{staticClass:"c-tile_title"},[e._v("Recomendações")]),e._m(1)]),e._m(2),e._m(3)]),t("Modal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],staticClass:"modals",on:{close:e.closeModal}})],1)])},O=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"c_main"},[t("h1",{staticClass:"c_main_title"},[e._v("Olá, Eu sou o Artur.")]),t("h1",{staticClass:"c_main_title_m"},[e._v("DEV's.")]),t("p",{staticClass:"c_main_sub"},[e._v(" Analista e Desenvolvedor, tambem sou Técnico em Eletrônica apaixonado por esporte e tecnologia. ")])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"c-tile_holder"},[s("img",{staticClass:"c-tile_img",attrs:{src:t("736d"),alt:"Esporte","aria-label":"Sport image"}})])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("a",{staticClass:"c-tile",attrs:{href:"#","aria-label":"Em construçao"}},[s("h2",{staticClass:"c-tile_title"},[e._v("Campeonatos")]),s("div",{staticClass:"c-tile_holder"},[s("img",{staticClass:"c-tile_img",attrs:{alt:"Competiçao","aria-label":"Competition image",src:t("46d1")}})])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("a",{staticClass:"c-tile",attrs:{href:"https://www.youtube.com/c/ValenteHunter/featured","aria-label":"Parceria"}},[s("h2",{staticClass:"c-tile_title"},[e._v("Parcerias")]),s("div",{staticClass:"c-tile_holder"},[s("img",{staticClass:"c-tile_img",attrs:{alt:"Competiçao","aria-label":"Competition image",src:t("51fe")}})])])}],S=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("transition",{attrs:{name:"modal-fade"}},[t("div",{staticClass:"modal-backdrop"},[t("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[t("header",{staticClass:"modal-header",attrs:{id:"modalTitle"}},[e._t("header",[e._v(" Recomendaçoes ")])],2),t("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[t("div",{staticClass:"title-body"},[e._v(" Filmes ")]),t("ul",[t("li",[e._v("Batman by Nolan")]),t("li",[e._v("A ilha do Medo")]),t("li",[e._v("A Origem")])])]),t("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[t("div",{staticClass:"title-body"},[e._v(" Música ")]),t("ul",[t("li",[e._v("Alicia Keys")]),t("li",[e._v("Maria Gadu")]),t("li",[e._v("Legiao Urbana")])])]),t("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[t("div",{staticClass:"title-body"},[e._v(" Livros ")]),t("ul",[t("li",[e._v("O poder da persuasao")]),t("li",[e._v("UML - Uma aboragem pratica")]),t("li",[e._v("O Código da Inteligência")])])]),t("div",[t("footer",{staticClass:"modal-footer"},[e._t("footer",[t("a",{staticClass:"btngreen",attrs:{type:"button","aria-label":"Close modal"},on:{click:e.close}},[e._v("Fechar")])])],2)])])])])},y=[],D={name:"modal",data:function(){return{show:!1}},methods:{close:function(){this.$emit("close")}}},M=D,L=(t("22d7"),Object(d["a"])(M,S,y,!1,null,null,null)),P=L.exports,k={components:{Modal:P},data:function(){return{src:["https://n1arthn1.github.io/img/ali.7e3a582f.webp","https://n1arthn1.github.io/img/bbAli.webp","https://n1arthn1.github.io/img/fa&bb.webp"],isModalVisible:!1,currentSrc:0}},methods:{changePhoto:function(){this.currentSrc<this.src.length-1?this.currentSrc++:this.currentSrc=0},showModal:function(){this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1},swipeHandler:function(){this.$router.push("professional")}}},j=k,H=(t("3b63"),Object(d["a"])(j,x,O,!1,null,"c67d56b4",null)),$=H.exports,T=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"c_content c_main"},[t("div",{directives:[{name:"touch",rawName:"v-touch:swipe.right",value:e.swipeHandler,expression:"swipeHandler",arg:"swipe",modifiers:{right:!0}}],staticClass:"handler"},[t("h1",[e._v("Ola, DEV.!!")]),t("h2",[e._v("Breve descriçao de como o site foi construido!")])])])},I=[],N={methods:{swipeHandler:function(){this.$router.push("professional")}}},R=N,V=(t("b8ab"),Object(d["a"])(R,T,I,!1,null,null,null)),F=V.exports;s["a"].use(_["a"]);var z=[{path:"/professional",component:A},{path:"/personal",component:$},{path:"/",component:$},{path:"/about",component:F}],q=new _["a"]({routes:z}),U=q,G=t("0086"),J=t.n(G);"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js"),s["a"].use(J.a,{disableClick:!0}),s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(f)},router:U}).$mount("#app")},"58de":function(e,a,t){},"5b49":function(e,a,t){"use strict";t("58de")},6549:function(e,a,t){e.exports=t.p+"img/email-svgrepo-com.cee522e3.svg"},"736d":function(e,a,t){e.exports=t.p+"img/book.bbb0dfa5.webp"},"85ec":function(e,a,t){},"98e0":function(e,a,t){},ad97:function(e,a,t){},b8ab:function(e,a,t){"use strict";t("98e0")},be87:function(e,a,t){}});
//# sourceMappingURL=app.6339e6b4.js.map