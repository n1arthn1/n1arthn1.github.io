(function(e){function a(a){for(var s,n,r=a[0],l=a[1],c=a[2],u=0,m=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&m.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(a);while(m.length)m.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],s=!0,r=1;r<t.length;r++){var l=t[r];0!==i[l]&&(s=!1)}s&&(o.splice(a--,1),e=n(n.s=t[0]))}return e}var s={},i={app:0},o=[];function n(a){if(s[a])return s[a].exports;var t=s[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=s,n.d=function(e,a,t){n.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,a){if(1&a&&(e=n(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)n.d(t,s,function(a){return e[a]}.bind(null,s));return t},n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=a,r=r.slice();for(var c=0;c<r.length;c++)a(r[c]);var d=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";t("27fb")},"0638":function(e,a,t){},"0a9f":function(e,a,t){"use strict";t("35b7")},"13ed":function(e,a,t){"use strict";t("0638")},"27fb":function(e,a,t){},"2d14":function(e,a,t){"use strict";t("f0cd")},"2e93":function(e,a){},"35b7":function(e,a,t){},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var s=t("2b0e"),i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("Nav"),t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view")],1),t("div"),t("Footer")],1)},o=[],n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("nav",[t("div",{staticClass:"nav-links"},[t("router-link",{staticClass:"nav-link",attrs:{to:"/personal"}},[e._v("Pessoal")]),t("router-link",{staticClass:"nav-link",attrs:{to:"/professional"}},[e._v("Profissional")])],1),t("Modal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],staticClass:"modals",on:{close:e.closeModal}})],1)},r=[],l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("transition",{attrs:{name:"modal-fade"}},[t("div",{staticClass:"modal-backdrop"},[t("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[t("header",{staticClass:"modal-header",attrs:{id:"modalTitle"}},[e._t("header",[e._v("\n          Meus Favoritos\n        ")])],2),t("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[t("div",{staticClass:"title-body"},[e._v("\n          Filmes\n        ")]),t("ul",[t("li",[e._v("Trilogia Batman por Christopher Nolan")]),t("li",[e._v("A Ilha do Medo")]),t("li",[e._v("A Origem")])])]),t("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[t("div",{staticClass:"title-body"},[e._v("\n          Músicas\n        ")]),t("ul",[t("li",[e._v("Alicia Keys")]),t("li",[e._v("Maria Gadu")]),t("li",[e._v("Legião Urbana")])])]),t("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[t("div",{staticClass:"title-body"},[e._v("\n          Livros\n        ")]),t("ul",[t("li",[e._v("O Poder da Persuasão, Robert B. Cialdini")]),t("li",[e._v("Mais Esperto que o Diabo, Napoleon Hill")]),t("li",[e._v("Código da Inteligência, Augusto Cury")])])]),t("div",[t("footer",{staticClass:"modal-footer"},[e._t("footer",[t("a",{staticClass:"btngreen",attrs:{type:"button","aria-label":"Close modal"},on:{click:e.close}},[e._v("Fechar")])])],2)])])])])},c=[],d={name:"modal",data:function(){return{show:!1}},methods:{close:function(){this.$emit("close")}}},u=d,m=(t("f62f"),t("2877")),p=Object(m["a"])(u,l,c,!1,null,"3c8bf1d2",null),v=p.exports,f={data:function(){return{isModalVisible:!1}},components:{Modal:v},methods:{showModal:function(){this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1}}},h=f,b=(t("5b49"),Object(m["a"])(h,n,r,!1,null,null,null)),g=b.exports,_=t("fd2d"),C={name:"App",components:{Nav:g,Footer:_["default"]},mounted:function(){document.body.classList.add("bg-app")},destroyed:function(){document.body.classList.remove("bg-app")}},w=C,E=(t("034f"),Object(m["a"])(w,i,o,!1,null,null,null)),A=E.exports,M=t("8c4f"),x=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("body",{staticClass:"s-home"},[t("span",{directives:[{name:"touch",rawName:"v-touch:swipe.right",value:e.swipeHandler,expression:"swipeHandler",arg:"swipe",modifiers:{right:!0}}]},[e._m(0)])])},S=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"main-content"},[t("section",{staticClass:"about",attrs:{id:"about"}},[t("div",{staticClass:"section-header"},[t("h2",[e._v("Sobre mim")]),t("a",{staticClass:"resume-download",attrs:{href:"https://docs.google.com/document/d/e/2PACX-1vRwK42G6ZMLUrDFvyhIEAgn-33QX2CKENi5JP5d5LuED2HRTDGw38gAkFP9MJ2gESomjE5hJGsmCo4A/pub","data-toggle":"tooltip","data-placement":"bottom",title:"","data-original-title":"Download",target:"_blank"}},[e._v("\n            Download CV\n          ")])]),t("div",{staticClass:"intro"},[t("p",[e._v("\n            Analista de Sistemas, formado pela Faculdade de Tecnologia de São\n            Paulo em 2018, tenho experiência em Javascript, desenvolvimento\n            Web e Mobile. Desenvolvendo soluções com diferentes metodologias\n            (MVC, SCRUM) e linguagens de programação, analisando o desempenho\n            dos sistemas implantados, reavaliando rotinas, manuais e métodos\n            de trabalho, verificando se atendem ao usuário, sugerindo\n            metodologias de trabalho mais eficazes, buscarei oportunidades\n            semelhantes para otimizar processos.\n          ")]),t("ul",{staticClass:"info"},[t("li",[t("strong",[e._v("Aniversário:")]),e._v(" 18 de março, 1992")]),t("li",[t("strong",[e._v("Local:")]),e._v(" Rua das Fermatas, n4 - São Paulo/SP\n            ")]),t("li",[t("strong",[e._v("Email:")]),e._v(" artur.a.patricio@gmail.com")]),t("li",[t("strong",[e._v("Fone:")]),e._v(" +55 11 99146-5492")])])])]),t("section",{staticClass:"resume",attrs:{id:"education"}},[t("div",{staticClass:"section-header"},[t("h2",[e._v("Formação")])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"top-item resume-item"},[t("h2",[e._v("FATEC - FACULDADE DE TECNOLOGIA DE SAO PAULO")]),t("span",[e._v("DEZEMBRO, 2018")]),t("p",[e._v("\n                Cria, projeta, desenvolve e configura programas, softwares e\n                sistemas para inúmeras empresas. Faz auditoria de sistemas\n                para avaliar possíveis erros e falhas. Além disso, o tecnólogo\n                em Análise e Desenvolvimento de Sistemas está apto a prestar\n                consultoria e desenvolver pesquisas.\n              ")])])]),t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"resume-item"},[t("h2",[e._v("ETEC - ESCOLA TECNICA ESTADUAL DE SAO PAULO")]),t("span",[e._v("DEZEMBRO, 2012")]),t("p",[e._v("\n                Realiza o desenvolvimento de projetos de sistemas eletrônicos\n                embarcados aplicando tecnologia de circuitos microprocessados\n                e microcontrolados, bem como semicondutores de potência e\n                componentes microeletrônicos. Implementa interfaces de\n                automação com comandos eletromecânicos ou controladores\n                lógicos programáveis instalados em sistemas de controle de\n                processos. Executa e supervisiona trabalhos de instalação e\n                reparo de equipamentos, sistemas eletrônicos inclusive de\n                transmissão e recepção de sinais. Realiza testes de calibração\n                em equipamentos eletrônicos com o uso de aparelhos eletrônicos\n                de medição. Aplica técnicas e métodos de controle de erros e\n                defeitos na linha de produção. Participa na identificação e\n                atuação das causas geradoras de defeito a fim de manter a\n                qualidade dos produtos e serviços. Aplica normas técnicas e de\n                segurança do trabalho e meio ambiente em conformidade com os\n                padrões nacionais e internacionais.\n              ")])])])])]),t("section",{staticClass:"resume",attrs:{id:"experience"}},[t("div",{staticClass:"section-header"},[t("h2",[e._v("Experiencia")])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"top-item resume-item"},[t("h2",[e._v("Hospital Albert Einstein")]),t("span",[e._v("ANALISTA DE SISTEMAS JR | NOV 18 - FEV 20")]),t("p",[e._v("\n                Sustentação de sistemas externos e internos. Implantação de\n                novas unidades administradas pelo Hospital Albert Einstein.\n                Desenvolvimento de sistemas legados, realizando o levantamento\n                de requisitos e desenvolvimento utilizando tecnologias como\n                HL7. Vasta experiências com Cerner Millennium.\n              ")])])]),t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"resume-item"},[t("h2",[e._v("Hospital Albert Einstein")]),t("span",[e._v("ESTAGIARIO | MAR 17 - OUT 18")]),t("p",[e._v("\n                Análise de requisitos para criação de novas implementações,\n                parametrização da integração entre sistemas internos e\n                externos e sustentação relacionadas a estes Sistemas(Cerner).\n              ")])])]),t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"resume-item"},[t("h2",[e._v("LowCost")]),t("span",[e._v("ANALISTA | JAN 15 - DEZ 15")]),t("p",[e._v("\n                Realização de suporte de impressoras via telefone para todo o\n                Brasil. Marcação de atendimentos técnicos supervisionados\n                quando necessário. Auxilio no planejamento de aquisição de\n                novos clientes entre eles Castrolanda, ID Logistics.\n              ")])])])])]),t("section",{staticClass:"resume",attrs:{id:"skill"}},[t("div",{staticClass:"section-header"},[t("h2",[e._v("Conhecimentos")])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"top-item resume-item"},[t("h2",[e._v("Desenvolvimento Web")]),t("p",[e._v("\n                Desenvolvimento de projetos pessoais e comerciais, com algumas\n                linguagens de programação e tecnologias (Javascript, REST, HTML, CSS, VueJs, Jquery, Bootstrap e Flutter). destaco o\n                desenvolvimento de uma aplicação para gerenciamento de\n                eventos, em parceria com colegas de faculdade implantamos esta\n                solução na faculdade em que nos formamos e apresentamos como\n                TCC, utilizando Angular e SpringBoot.\n              ")])])]),t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"resume-item"},[t("h2",[e._v("Linux")]),t("p",[e._v("\n                Minha principal OS para desenvolvimento, do ponto de vista DEV\n                é a OS a se escolher, do ponto de vista empresarial, Windows\n                ainda é mais amigavel. Em preparaçao para a conquista da\n                Certificaçao LPI.\n              ")])])]),t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"resume-item"},[t("h2",[e._v("MySQL")]),t("p",[e._v("\n                Experiência com bancos de dados relacionais e não-relacionais (MongoDB), criação de querys/procedures personalizadas com tecnologia fornecida pelo ERP Cerner Milleniun, que mescla alguns métodos fornecidos pelo próprio ERP e a possibilidade de escrita em SQL.\n              ")])])]),t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"resume-item"},[t("h2",[e._v("Cerner Millenium")]),t("p",[e._v("\n                Sistema de prontuários eletrônicos, e base para principais soluções clínicas, utilizado no Hospital Albert, referência em qualidade e agilidade no atendimento, ERP disponibiliza inúmeras ferramentas para gestão de PRT assim como ferramentas para criação de soluções personalizadas.\n              ")])])]),t("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[t("div",{staticClass:"resume-item"},[t("h2",[e._v("HL7")]),t("p",[e._v("\n                Padrão HL7(Health Level 7), padrão utilizado na representação\n                e a transferência de dados clínicos e administrativos entre\n                sistemas de informação em saúde\n              ")])])])])])])}],y={methods:{swipeHandler:function(){this.$router.push("personal")}}},D=y,O=(t("13ed"),Object(m["a"])(D,x,S,!1,null,"2a5f5d48",null)),P=O.exports,L=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"c_content"},[t("span",{directives:[{name:"touch",rawName:"v-touch:swipe.left",value:e.swipeHandler,expression:"swipeHandler",arg:"swipe",modifiers:{left:!0}}]},[t("div",{staticClass:"c_main"},[t("h1",{attrs:{"data-text":"FREED"}},[e._v("\nFREED")]),t("h1",{staticClass:"c_main_sub"},[e._v("\n          Marketing Digital\n        ")]),t("vue-typer",{attrs:{text:"Olá, meu nome é Artur, fundador da FREED, Analista e Desenvolvedor, também sou Técnico em Eletrônica apaixonado por esporte e tecnologia. Microempreendedor certificado pelo Sebrae para atuar com Marketing Digital.",repeat:0}})],1),t("div",{staticClass:"c-tiles"},[t("a",{staticClass:"c-tile",attrs:{"aria-label":"Álbum de Familia"}},[e._m(0),t("div",{staticClass:"c-tile_holder"},[t("img",{staticClass:"c-tile_img",attrs:{src:e.src[e.currentSrc],alt:"Alicia","aria-label":"Image of Alicia"},on:{click:function(a){return e.changePhoto()},mouseover:function(a){return e.changePhoto()}}})])]),t("a",{staticClass:"c-tile-f",attrs:{"aria-label":"Meus Favoritos"},on:{click:function(a){return e.showModal()}}},[e._m(1),e._m(2)]),e._m(3)])]),t("Modal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],staticClass:"modals",on:{close:e.closeModal}})],1)},k=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"c-description"},[t("h2",{staticClass:"c-tile_title"},[e._v("Álbum de Familia")]),t("h4",[e._v("\n              Está é minha pequena Alicia, minha filha que tanto Amo atualmente\n              com 2 anos e contando.\n            ")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"c-description"},[t("h2",{staticClass:"c-tile_title"},[e._v("Meus Favoritos")]),t("h4",[e._v("\n              Uma pequena descrição do meus principais gostos.\n            ")])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"c-tile_holder"},[s("img",{staticClass:"c-tile_img-f",attrs:{src:t("736d"),alt:"Diversao","aria-label":"Fun image"}})])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("a",{staticClass:"c-tile",attrs:{href:"https://atuante.glitch.me","aria-label":"Projetos Pessoais"}},[s("div",{staticClass:"c-description"},[s("h2",{staticClass:"c-tile_title"},[e._v("Atuísmo")]),s("h4",[e._v("\n              Compartilhe o que tem de melhor, e atue para um mundo melhor.\n              Clique e saiba mais.\n            ")])]),s("div",{staticClass:"c-tile_holder"},[s("img",{staticClass:"c-tile_img-a",attrs:{src:t("6034"),alt:"Meditaçao","aria-label":"Peace image"}})])])}],F={components:{Modal:v},data:function(){return{src:["https://n1arthn1.github.io/img/ali.7e3a582f.webp","https://n1arthn1.github.io/img/bbAli.c29f2dd6.webp","https://n1arthn1.github.io/img/fa&bb.63c95746.webp"],isModalVisible:!1,currentSrc:0}},methods:{changePhoto:function(){this.currentSrc<this.src.length-1?this.currentSrc++:this.currentSrc=0},showModal:function(){this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1},swipeHandler:function(){this.$router.push("professional")}}},T=F,j=(t("7dcb"),t("0a9f"),Object(m["a"])(T,L,k,!1,null,"19dd39e6",null)),R=j.exports;s["a"].use(M["a"]);var q=[{path:"/professional",component:P},{path:"/personal",component:R},{path:"/",component:R},{path:"/footer",component:_["default"]}],V=new M["a"]({routes:q}),H=V,$=t("0086"),z=t.n($),I=t("e956"),N=t.n(I);"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js"),s["a"].use(N.a),s["a"].use(z.a,{disableClick:!0}),s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(A)},router:H}).$mount("#app")},"5b49":function(e,a,t){"use strict";t("9640")},6034:function(e,a,t){e.exports=t.p+"img/med.b3169832.webp"},"736d":function(e,a,t){e.exports=t.p+"img/book.7ca8ef52.webp"},"7dcb":function(e,a,t){"use strict";t("a8c7")},"94d4":function(e,a,t){"use strict";var s=t("2e93"),i=t.n(s);a["default"]=i.a},9640:function(e,a,t){},a8c7:function(e,a,t){},eb87:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return i}));var s=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"socialbtns",attrs:{align:"center"}},[t("ul",[t("li",[t("a",{staticClass:"fa fa-lg fa-whatsapp",attrs:{href:"https://api.whatsapp.com/send?phone=5511991465492&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vi%20seu%20site%2C%20e..."}})]),t("li",[t("a",{staticClass:"fa fa-lg fa-envelope",attrs:{href:"mailto:artur.a.patricio@gmail.com"}})]),t("li",[t("a",{staticClass:"fa fa-lg fa-github",attrs:{href:"https://github.com/arturn1"}})]),t("li",[t("a",{staticClass:"fa fa-lg fa-linkedin",attrs:{href:"https://www.linkedin.com/in/arturpatricio"}})]),t("li",[t("a",{staticClass:"fa fa-lg fa-facebook",attrs:{href:"https://www.facebook.com/ArthPatricio"}})]),t("li",[t("a",{staticClass:"fa fa-lg fa-instagram",attrs:{href:"https://www.instagram.com/arturn1/"}})])])])}]},f0cd:function(e,a,t){},f62f:function(e,a,t){"use strict";t("fa1f")},fa1f:function(e,a,t){},fd2d:function(e,a,t){"use strict";var s=t("eb87"),i=t("94d4"),o=(t("2d14"),t("2877")),n=Object(o["a"])(i["default"],s["a"],s["b"],!1,null,"26455319",null);a["default"]=n.exports}});
//# sourceMappingURL=app.153ad51f.js.map