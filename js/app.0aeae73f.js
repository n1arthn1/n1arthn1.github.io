(function(e){function a(a){for(var t,n,r=a[0],l=a[1],c=a[2],m=0,u=[];m<r.length;m++)n=r[m],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);d&&d(a);while(u.length)u.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var e,a=0;a<o.length;a++){for(var s=o[a],t=!0,r=1;r<s.length;r++){var l=s[r];0!==i[l]&&(t=!1)}t&&(o.splice(a--,1),e=n(n.s=s[0]))}return e}var t={},i={app:0},o=[];function n(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,a,s){n.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,a){if(1&a&&(e=n(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)n.d(s,t,function(a){return e[a]}.bind(null,t));return s},n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=a,r=r.slice();for(var c=0;c<r.length;c++)a(r[c]);var d=l;o.push([0,"chunk-vendors"]),s()})({0:function(e,a,s){e.exports=s("56d7")},"034f":function(e,a,s){"use strict";s("85ec")},"0a9f":function(e,a,s){"use strict";s("890b")},"0d64":function(e,a,s){},"19c9":function(e,a,s){},"52f8":function(e,a,s){},5510:function(e,a,s){e.exports=s.p+"img/whatsapp-svgrepo-com.9ada85f9.svg"},"56d7":function(e,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var t=s("2b0e"),i=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{attrs:{id:"app"}},[s("Nav"),s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1)],1)},o=[],n=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("nav",[s("div",{staticClass:"nav-links"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/personal"}},[e._v("Pessoal")]),s("router-link",{staticClass:"nav-link",attrs:{to:"/professional"}},[e._v("Profissional")])],1),s("div",{staticClass:"nav-icons"},["/personal"==this.$route.path||"/"==this.$route.path?s("div",{staticClass:"nav-icon"},[e._m(0)]):e._e(),"/personal"==this.$route.path||"/"==this.$route.path?s("div",{staticClass:"nav-icon"},[e._m(1)]):e._e()]),s("Modal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],staticClass:"modals",on:{close:e.closeModal}})],1)},r=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a",{staticClass:"c-nav-list_link",attrs:{href:"mailto:artur.a.patricio@gmail.com",target:"_blank",rel:"noopener","aria-label":"e-mail"}},[t("img",{staticClass:"resposive-img",attrs:{src:s("6549"),width:"20",height:"20"}})])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a",{staticClass:"c-nav-list_link",attrs:{href:"https://api.whatsapp.com/send?phone=5511991465492&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vi%20seu%20site%2C%20e...",target:"_blank",rel:"noopener","aria-label":"whatsapp"}},[t("img",{staticClass:"resposive-img",attrs:{src:s("5510"),width:"20",height:"20"}})])}],l=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("transition",{attrs:{name:"modal-fade"}},[s("div",{staticClass:"modal-backdrop"},[s("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[s("header",{staticClass:"modal-header",attrs:{id:"modalTitle"}},[e._t("header",[e._v(" Meus Favoritos ")])],2),s("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[s("div",{staticClass:"title-body"},[e._v(" Filmes ")]),s("ul",[s("li",[e._v("Trilogia Batman por Christopher Nolan")]),s("li",[e._v("A Ilha do Medo")]),s("li",[e._v("A Origem")])])]),s("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[s("div",{staticClass:"title-body"},[e._v(" Músicas ")]),s("ul",[s("li",[e._v("Alicia Keys")]),s("li",[e._v("Maria Gadu")]),s("li",[e._v("Legião Urbana")])])]),s("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[s("div",{staticClass:"title-body"},[e._v(" Livros ")]),s("ul",[s("li",[e._v("O Poder da Persuasão, Robert B. Cialdini")]),s("li",[e._v("Mais Esperto que o Diabo, Napoleon Hill")]),s("li",[e._v("Código da Inteligência, Augusto Cury")])])]),s("div",[s("footer",{staticClass:"modal-footer"},[e._t("footer",[s("a",{staticClass:"btngreen",attrs:{type:"button","aria-label":"Close modal"},on:{click:e.close}},[e._v("Fechar")])])],2)])])])])},c=[],d={name:"modal",data:function(){return{show:!1}},methods:{close:function(){this.$emit("close")}}},m=d,u=(s("f62f"),s("2877")),p=Object(u["a"])(m,l,c,!1,null,"3c8bf1d2",null),v=p.exports,f={data:function(){return{isModalVisible:!1}},components:{Modal:v},methods:{showModal:function(){this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1}}},h=f,b=(s("5b49"),Object(u["a"])(h,n,r,!1,null,null,null)),g=b.exports,_={name:"App",components:{Nav:g},mounted:function(){document.body.classList.add("bg-app")},destroyed:function(){document.body.classList.remove("bg-app")}},C=_,w=(s("034f"),Object(u["a"])(C,i,o,!1,null,null,null)),E=w.exports,A=s("8c4f"),M=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("body",{staticClass:"s-home"},[s("span",{directives:[{name:"touch",rawName:"v-touch:swipe.right",value:e.swipeHandler,expression:"swipeHandler",arg:"swipe",modifiers:{right:!0}}]},[e._m(0)])])},x=[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"main-content"},[s("section",{staticClass:"about",attrs:{id:"about"}},[s("div",{staticClass:"section-header"},[s("h2",[e._v("Sobre mim")]),s("a",{staticClass:"resume-download",attrs:{href:"https://docs.google.com/document/d/e/2PACX-1vRwK42G6ZMLUrDFvyhIEAgn-33QX2CKENi5JP5d5LuED2HRTDGw38gAkFP9MJ2gESomjE5hJGsmCo4A/pub","data-toggle":"tooltip","data-placement":"bottom",title:"","data-original-title":"Download",target:"_blank"}},[e._v(" Download CV ")])]),s("div",{staticClass:"intro"},[s("p",[e._v(" Analista de Sistemas, formado pela Faculdade de Tecnologia de São Paulo em 2018, tenho experiência em Javascript, desenvolvimento Web e Mobile. Desenvolvendo soluções com diferentes metodologias (MVC, SCRUM) e linguagens de programação, analisando o desempenho dos sistemas implantados, reavaliando rotinas, manuais e métodos de trabalho, verificando se atendem ao usuário, sugerindo metodologias de trabalho mais eficazes, buscarei oportunidades semelhantes para otimizar processos. ")]),s("ul",{staticClass:"info"},[s("li",[s("strong",[e._v("Aniversário:")]),e._v(" 18 de março, 1992")]),s("li",[s("strong",[e._v("Local:")]),e._v(" Rua das Fermatas, n4 - São Paulo/SP ")]),s("li",[s("strong",[e._v("Email:")]),e._v(" artur.a.patricio@gmail.com")]),s("li",[s("strong",[e._v("Fone:")]),e._v(" +55 11 99146-5492")])])])]),s("section",{staticClass:"resume",attrs:{id:"education"}},[s("div",{staticClass:"section-header"},[s("h2",[e._v("Formação")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"top-item resume-item"},[s("h2",[e._v("FATEC - FACULDADE DE TECNOLOGIA DE SAO PAULO")]),s("span",[e._v("DEZEMBRO, 2018")]),s("p",[e._v(" Cria, projeta, desenvolve e configura programas, softwares e sistemas para inúmeras empresas. Faz auditoria de sistemas para avaliar possíveis erros e falhas. Além disso, o tecnólogo em Análise e Desenvolvimento de Sistemas está apto a prestar consultoria e desenvolver pesquisas. ")])])]),s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"resume-item"},[s("h2",[e._v("ETEC - ESCOLA TECNICA ESTADUAL DE SAO PAULO")]),s("span",[e._v("DEZEMBRO, 2012")]),s("p",[e._v(" Realiza o desenvolvimento de projetos de sistemas eletrônicos embarcados aplicando tecnologia de circuitos microprocessados e microcontrolados, bem como semicondutores de potência e componentes microeletrônicos. Implementa interfaces de automação com comandos eletromecânicos ou controladores lógicos programáveis instalados em sistemas de controle de processos. Executa e supervisiona trabalhos de instalação e reparo de equipamentos, sistemas eletrônicos inclusive de transmissão e recepção de sinais. Realiza testes de calibração em equipamentos eletrônicos com o uso de aparelhos eletrônicos de medição. Aplica técnicas e métodos de controle de erros e defeitos na linha de produção. Participa na identificação e atuação das causas geradoras de defeito a fim de manter a qualidade dos produtos e serviços. Aplica normas técnicas e de segurança do trabalho e meio ambiente em conformidade com os padrões nacionais e internacionais. ")])])])])]),s("section",{staticClass:"resume",attrs:{id:"experience"}},[s("div",{staticClass:"section-header"},[s("h2",[e._v("Experiencia")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"top-item resume-item"},[s("h2",[e._v("Hospital Albert Einstein")]),s("span",[e._v("ANALISTA DE SISTEMAS JR | NOV 18 - FEV 20")]),s("p",[e._v(" Sustentação de sistemas externos e internos. Implantação de novas unidades administradas pelo Hospital Albert Einstein. Desenvolvimento de sistemas legados, realizando o levantamento de requisitos e desenvolvimento utilizando tecnologias como HL7. Vasta experiências com Cerner Millennium. ")])])]),s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"resume-item"},[s("h2",[e._v("Hospital Albert Einstein")]),s("span",[e._v("ESTAGIARIO | MAR 17 - OUT 18")]),s("p",[e._v(" Análise de requisitos para criação de novas implementações, parametrização da integração entre sistemas internos e externos e sustentação relacionadas a estes Sistemas(Cerner). ")])])]),s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"resume-item"},[s("h2",[e._v("LowCost")]),s("span",[e._v("ANALISTA | JAN 15 - DEZ 15")]),s("p",[e._v(" Realização de suporte de impressoras via telefone para todo o Brasil. Marcação de atendimentos técnicos supervisionados quando necessário. Auxilio no planejamento de aquisição de novos clientes entre eles Castrolanda, ID Logistics. ")])])])])]),s("section",{staticClass:"resume",attrs:{id:"skill"}},[s("div",{staticClass:"section-header"},[s("h2",[e._v("Conhecimentos")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"top-item resume-item"},[s("h2",[e._v("Desenvolvimento Web")]),s("p",[e._v(" Desenvolvimento de projetos pessoais e comerciais, com algumas linguagens de programação e tecnologias (Javascript, REST, HTML, CSS, VueJs, Jquery, Bootstrap e Flutter). destaco o desenvolvimento de uma aplicação para gerenciamento de eventos, em parceria com colegas de faculdade implantamos esta solução na faculdade em que nos formamos e apresentamos como TCC, utilizando Angular e SpringBoot. ")])])]),s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"resume-item"},[s("h2",[e._v("Linux")]),s("p",[e._v(" Minha principal OS para desenvolvimento, do ponto de vista DEV é a OS a se escolher, do ponto de vista empresarial, Windows ainda é mais amigavel. Em preparaçao para a conquista da Certificaçao LPI. ")])])]),s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"resume-item"},[s("h2",[e._v("MySQL")]),s("p",[e._v(" Experiência com bancos de dados relacionais e não-relacionais (MongoDB), criação de querys/procedures personalizadas com tecnologia fornecida pelo ERP Cerner Milleniun, que mescla alguns métodos fornecidos pelo próprio ERP e a possibilidade de escrita em SQL. ")])])]),s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"resume-item"},[s("h2",[e._v("Cerner Millenium")]),s("p",[e._v(" Sistema de prontuários eletrônicos, e base para principais soluções clínicas, utilizado no Hospital Albert, referência em qualidade e agilidade no atendimento, ERP disponibiliza inúmeras ferramentas para gestão de PRT assim como ferramentas para criação de soluções personalizadas. ")])])]),s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"resume-item"},[s("h2",[e._v("HL7")]),s("p",[e._v(" Padrão HL7(Health Level 7), padrão utilizado na representação e a transferência de dados clínicos e administrativos entre sistemas de informação em saúde ")])])])])])])}],S={methods:{swipeHandler:function(){this.$router.push("personal")}}},y=S,O=(s("7a15"),Object(u["a"])(y,M,x,!1,null,"54012960",null)),D=O.exports,P=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"c_content"},[s("span",{directives:[{name:"touch",rawName:"v-touch:swipe.left",value:e.swipeHandler,expression:"swipeHandler",arg:"swipe",modifiers:{left:!0}}]},[s("div",{staticClass:"c_main"},[s("h1",{staticClass:"c_main_title"},[e._v("DEV's.")]),s("h1",{staticClass:"c_main_title_m"},[e._v("DEV's.")]),s("h2",{staticClass:"c_main_sub"},[e._v(" Olá, meu nome é Artur. ")]),s("vue-typer",{attrs:{text:"Analista e Desenvolvedor, também sou Técnico em Eletrônica apaixonado por esporte e tecnologia. Microempreendedor certificado pelo Sebrae para atuar com Marketing Digital.",repeat:0}})],1),s("div",{staticClass:"c-tiles"},[s("a",{staticClass:"c-tile",attrs:{"aria-label":"Álbum de Familia"}},[s("h2",{staticClass:"c-tile_title"},[e._v("Álbum de Familia")]),s("div",{staticClass:"c-tile_holder"},[s("img",{staticClass:"c-tile_img",attrs:{src:e.src[e.currentSrc],alt:"Alicia","aria-label":"Image of Alicia"},on:{click:function(a){return e.changePhoto()},mouseover:function(a){return e.changePhoto()}}})])]),s("a",{staticClass:"c-tile",attrs:{"aria-label":"Meus Favoritos"},on:{click:function(a){return e.showModal()}}},[s("h2",{staticClass:"c-tile_title"},[e._v("Meus Favoritos")]),e._m(0)])]),s("Modal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],staticClass:"modals",on:{close:e.closeModal}})],1)])},L=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"c-tile_holder"},[t("img",{staticClass:"c-tile_img",attrs:{src:s("736d"),alt:"Esporte","aria-label":"Sport image"}})])}],k={components:{Modal:v},data:function(){return{src:["https://n1arthn1.github.io/img/ali.7e3a582f.webp","https://n1arthn1.github.io/img/bbAli.webp","https://n1arthn1.github.io/img/fa&bb.webp"],isModalVisible:!1,currentSrc:0}},methods:{changePhoto:function(){this.currentSrc<this.src.length-1?this.currentSrc++:this.currentSrc=0},showModal:function(){this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1},swipeHandler:function(){this.$router.push("professional")}}},T=k,j=(s("79f5"),s("0a9f"),Object(u["a"])(T,P,L,!1,null,"66f28450",null)),V=j.exports;t["a"].use(A["a"]);var F=[{path:"/professional",component:D},{path:"/personal",component:V},{path:"/",component:V}],R=new A["a"]({routes:F}),H=R,$=s("0086"),q=s.n($),z=s("e956"),I=s.n(z);"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js"),t["a"].use(I.a),t["a"].use(q.a,{disableClick:!0}),t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(E)},router:H}).$mount("#app")},"58de":function(e,a,s){},"5b49":function(e,a,s){"use strict";s("58de")},6549:function(e,a,s){e.exports=s.p+"img/email-svgrepo-com.cee522e3.svg"},"736d":function(e,a,s){e.exports=s.p+"img/book.bbb0dfa5.webp"},"79f5":function(e,a,s){"use strict";s("19c9")},"7a15":function(e,a,s){"use strict";s("0d64")},"85ec":function(e,a,s){},"890b":function(e,a,s){},f62f:function(e,a,s){"use strict";s("52f8")}});
//# sourceMappingURL=app.0aeae73f.js.map