!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=19)}([function(e,t,n){"use strict";function r(e){var t=document.createElement("div");return t.innerHTML=e,t.firstChild}function o(e){var t=e,n={a:/[\xE0-\xE6]/g,A:/[\xC0-\xC6]/g,e:/[\xE8-\xEB]/g,E:/[\xC8-\xCB]/g,i:/[\xEC-\xEF]/g,I:/[\xCC-\xCF]/g,o:/[\xF2-\xF6]/g,O:/[\xD2-\xD6]/g,u:/[\xF9-\xFC]/g,U:/[\xD9-\xDC]/g,c:/\xE7/g,C:/\xC7/g,n:/\xF1/g,N:/\xD1/g};for(var r in n){var o=n[r];t=t.replace(o,r)}return t}var i=function(){return Math.floor(1e3*Math.random())+Math.floor(1e3*Math.random())},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===t)return sessionStorage.getItem(e)?sessionStorage.getItem(e):null;null!==t&&(sessionStorage.getItem(e)||sessionStorage.setItem(e,t))},u=function(){return $(".emit-message").val("")},a=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return chat.peoples_add.includes(e.nome)},c=function(){var e=document.querySelector(".messages");$(".messages").animate({scrollTop:e.scrollHeight},"slow")},l=function(){return{id:user.user_id,nome:user.nome,icon:user.icon}},d=function(){var e=new Date,t=function(e){return e<10?"0"+e:e},n=[t(e.getHours()),t(e.getMinutes()),t(e.getSeconds())];return n[0]+":"+n[1]+":"+n[2]},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=(document.querySelector.bind(document),1e4*t.length/t.length),r=0,o=t.length-1;setInterval(function(){var n=t[r];e.innerHTML=n,++r>o&&(r=0)},n)};e.exports={gen_id:i,session:s,clear_input:u,user_on_exists:a,to_scroll:c,get_user:l,get_horario:d,html_element:r,removerAcentos:o,bot_write:m}},function(e,t,n){"use strict";var r=function(e){var t=/(.*)<a(.*)>(.*)<\/a>(.*)/,n=/(.*)<iframe(.*)>(.*)<\/iframe>(.*)/;return t.test(e)?e:!!n.test(e)&&e},o=function(){return{login:function(e){return'\n            <div class="people" id="'+e.id+'">\n              <span class="status-active"></span>\n              <p class="name">'+e.nome+'</p>\n              <img src="'+(chat.url+e.icon)+'" alt="" class="my-icon">\n              <div class="user-message"></div>\n            </div>\n      '},ons:function(e){return'<span class="users-on spanabble">'+e.ons+"</span>"},message:function(e){return null===e.nome?"":$('\n              <div id="'+e.id+'" class="message">\n                <div class="user">\n                  <img src="'+(chat.url+e.icon)+'" alt="">\n                </div>\n                <span class="arrow"></span> \n                <div class="body">\n                  <p class="name-user">'+e.nome+'</p>\n                  <div class="text" '+(r(e.text)?'style="flex-direction:column;"':"")+">"+e.text+'</div>\n                  <div class="time">'+e.horario+"</div>\n                </div>\n              </div>\n          ").attr("data-user",JSON.stringify(e))},message_people:function(e){var t=function(e){return'\n              <span class="arrow-user" style="border-right: 7.5px solid #2ecc71;"></span>\n              <div class="message">\n                <div class="text-user" style="background:#2ecc71">'+e+"</div>\n              </div>\n          "},n="";return document.querySelector(".people-active")||(console.log($('div.people[id="'+e.id+'"]>img')),$('div.people[id="'+e.id+'"]>img').css("border","1.5px solid #2ecc71"),n=$('div.people[id="'+e.id+'"] .user-message'),n.addClass("people-active"),n.html(t("Nova Mensagem"))),document.querySelector(".people-active")&&($(".people-active").parent().find("img").css("border","none"),$(".people-active").html(""),$(".people-active").removeClass("people-active"),n=$('div.people[id="'+e.id+'"] .user-message'),n.addClass("people-active"),n.html(t("Nova Mensagem")),$('div.people[id="'+e.id+'"]>img').css("border","1.5px solid #2ecc71")),n},logout:function(e){return $('\n              <div id="'+e.id+'" class="message">\n                <div class="user">\n                  <img src="'+(chat.url+e.icon)+'" alt="">\n                </div>\n                <span class="arrow"></span> \n                <div class="body">\n                  <p class="name-user">'+e.nome+'</p>\n                  <div class="text">'+e.nome+' saiu da sala.</div>\n                  <div class="time">'+e.horario+"</div>\n                </div>\n              </div>\n          ").attr("data-user",JSON.stringify(e))},message_write:function(e){return $('\n            <div write-id="'+e.id+'" class="message">\n              <div class="user">\n                <img src="'+(chat.url+e.icon)+'" alt="">\n              </div>\n              <span class="arrow"></span> \n              <div class="body">\n                <p class="name-user">'+e.nome+'</p>\n                <div class="text">'+e.nome+' está escrevendo.</div>\n                <div class="time">'+e.horario+"</div>\n              </div>\n            </div>\n          ")}}};e.exports=o},function(e,t,n){"use strict";var r=n(0),o=(r.gen_id,r.session,r.clear_input),i=(r.user_on_exists,r.to_scroll,r.get_user,r.get_horario,n(1),n(4)),s=function(e){$(e)&&$(e).remove()},u=function(e){var t={google:"#0057e7",youtube:"#cc181e",facebook:"#3b5998",github:"#333",default:"#3498db"};return t[e]?t[e]:t.default},a=function(){return o(),""},c="",l=function(e){return e===c||(c=e,!1)},d=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return l(e)?a():e.trim()},m=function(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent.trim()},p=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return m(e).trim()},f=function(e){return/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)},v=function(e){if(f(e)){var t=document.createElement("a");t.href=e;var n=t.hostname.split("."),r="www"===n[0]?n[1]:n[0];e='\n\t\t\t<a href="'+e+'" style="background:'+u(r)+'" class="btn-link" target="__blank">\n\t\t\t\t'+r+"\n\t\t\t</a>\n  \t\t"}return e.trim()},g=function(e){var t="";return e.split(" ").map(function(e){return t+=v(e)+" "}),t.trim()},b=function(e){var t=function(e){return e.includes("https://youtu.be/")?"https://youtu.be/":!!e.includes("youtube.com/watch?v=")&&"youtube.com/watch?v="}(e);if(f(e)&&t){var n=e.split(t).pop();/(.*)\&(.*)/.test(n)&&(n=n.replace("&","?")),e='\n\t\t\t<button class="btn-link" onclick="apagar_luz(this)" style="border:none;background:#3498db;cursor:pointer">Apagar Luz</button>\n\t\t\t<iframe class="upload" width="450" height="315" style="margin-top:15px" src="https://www.youtube.com/embed/'+n+'" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>\n\t\t',console.log(e)}return e.trim()},h=function(e){var t="";return e.split(" ").map(function(e){return t+=b(e)+" "}),t.trim()},_=function(e){var t=["mp4","webm","mpg","wmv","mov","avi"],n=["mp3","wav","pcm","acc","ogg","wma"];if(f(e)){var r="";e.includes("?")&&(r=e.split("?")[0]),r=r.split(".").pop(),t.includes(r)&&(e=function(e){return'\n\t\t<button class="btn-link" onclick="apagar_luz(this)" style="border:none;background:#3498db;cursor:pointer">Apagar Luz</button>\n\t\t<video width="350" height="315" controls class="upload">\n\t\t  <source src="'+e.url+'" type="video/'+e.ext+'">\n\t\t</video>\n\t'}({url:e,ext:r})),n.includes(r)&&(e=function(e){return'\n\t\t<button class="btn-link" onclick="apagar_luz(this)" style="border:none;background:#3498db;cursor:pointer">Apagar Luz</button>\n\t\t<audio controls class="upload">\n\t\t  <source src="'+e.url+'" type="audio/'+e.ext+'">\n\t\t</audio>\n\t'}({url:e,ext:r}))}return e.trim()},y=function(e){var t="";return e.split(" ").map(function(e){return t+=_(e)+" "}),t.trim()},x=function(e){var t=/^\/bot\s(.*)\s(.*)$/;if(t.test(e)){var n=Array.from(e.match(t)).slice(1),r=n[0].trim();r.includes(" ")&&(r=r.split(" "));var o=n[1].trim();return Array.isArray(r)&&(o=r[1]+" "+o,r=r[0]),o=o.trim(),console.log("Comando: "+r+", Capture: "+o),i[r]&&chat.bot_input&&i[r](o,socket),"init"===r&&i[r](o,socket),""}return e};e.exports={bot_spam:d,bot_remove:s,bot_strip_tags:p,bot_youtube:h,bot_urls_media:y,bot_url:g,bot_input:x}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();e.exports=function(){return new(function(){function e(){return r(this,e),this.filters=new Map,this}return o(e,[{key:"set",value:function(e,t){this.filters.set(e,t)}},{key:"get_filters",value:function(){return this.filters.getAll()}},{key:"run",value:function(e){e=e.trim();var e=this.get_filters().reduce(function(e,t){return t(e)},e);return e}}]),e}())}()},function(e,t,n){"use strict";var r=function(e,t){Array.from(document.querySelectorAll(".people .name")).map(function(n){if($(n).html()===e){$(".emit-message").val("");var r=$(n).parent().attr("id"),o=$("div#"+r+".message").data().user;$("div#"+r+".people").remove(),$("div#"+r+".message").remove(),t.emit("banido",o)}})},o=function(e,t){$(".emit-message").val(""),"key"===btoa(e)&&(chat.bot_input=!0,$(".emit-message").attr("placeholder","Bot input iniciado com sucesso."))};e.exports={ban:r,init:o}},,function(e,t,n){"use strict";e.exports=[n(7),n(8),n(10)]},function(e,t,n){"use strict";var r=n(0),o=(r.gen_id,r.session,r.clear_input,r.user_on_exists),i=(r.to_scroll,r.get_user,r.get_horario,n(1)),s=function(e,t,n){chat.messages_receive_user.map(function(e){o(e)||(chat.peoples++,chat.peoples_add.push(e.nome),$(".peoples-timeline").append(i().login(e)),$(".users-on").html(chat.peoples))})},u=["message","escrevendo"],a={id:"0",nome:"new user bot",on:!0,code:"src/js/modules/bots/new_user.js",events:u,call:s};e.exports=a},function(e,t,n){"use strict";function r(e){return Array.isArray(e)?e:Array.from(e)}var o=n(0),i=(o.gen_id,o.session,o.clear_input,o.user_on_exists,o.to_scroll,o.get_user,o.get_horario),s=o.removerAcentos,u=o.bot_write,a=n(3),c=n(2);n(1);a.set("bot urls media embed",c.bot_urls_media),a.set("embed youtube",c.bot_youtube),a.set("url",c.bot_url);var l=n(9),d="src/images/junior.png",m=function(e,t){var n=p(t,e);return"hello init"===t&&(e.init=!0),e.return=!1,n&&(e.return=!0,e.text=n.trim()),e.text=a.run(e.text),e.nome="Junior Bot",e.icon=d,e.is_bot=!0,e.horario=i(),e.id="junior-bot-user",e.node='[write-id="'+e.id+'"]',e},p=function(e,t){var n=function(e,t){return e.test(t)},o=!1;return Object.keys(l).map(function(i){var s=i;if(i=new RegExp(i,"i"),n(i,e)&&!o){var u="";if(s.includes("(.*")&&(u=e.match(i),Array.isArray(u))){u=r(u).slice(1)}o=l[s](t,u)}}),o},f=function(e,t,n){var r="";t.text&&(r=s(t.text.trim().toLowerCase())),!1===Object.keys(t).includes("is_bot")&&"message"===e&&(t=m(t,r),""!==t.text&&t.return&&(n.emit("escrevendo",t),setTimeout(function(){n.emit("message",t),n.emit("clear",t.node)},1e3))),!1===Object.keys(t).includes("is_bot")&&"login"===e&&(t=m(t,"hello init"),""!==t.text&&t.return&&(n.emit("escrevendo",t),setTimeout(function(){n.emit("message",t),n.emit("clear",t.node)},1e3))),"on"===e&&u(document.querySelector("div#junior-bot-user .text-user"),["Diz oi ai vai","To esperando","Me chama ai","To aguardando","Seja legal comigo"])},v=["on","message","login"],g={id:"1",nome:"junior bot",desc:"Robô feito para interagir com os usuarios pelo o chat.",on:!0,code:"src/js/modules/bots/junior.js",icon:d,events:v,call:f};e.exports=g},function(e,t,n){"use strict";var r=function(e,t){return"\n\t\tOlá "+e.nome+" seja bem vindo ao chat, \n\t\tmeu nome é Junior e estou aqui sempre que Precisar!! 😄 \n\t"},o=function(e,t){if(t.length>1){var n=t[2];if(n=n.trim(),/funk/gim.test(n))return"\n\t\t\t\thttps://www.youtube.com/watch?v=qc3rKuLI_uM\n\t\t\t";if(/sertanejo/gim.test(n))return"\n\t\t\t\thttps://www.youtube.com/watch?v=HVlUnTekqqU\n\t\t\t";if(/rock/gim.test(n))return"\n\t\t\t\thttps://www.youtube.com/watch?v=CSvFpBOe8eY\n\t\t\t"}return"Não entendi sua pergunta."},i=function(e,t){e.payload="https://www.youtube.com/watch?v=AxmsC2arlHk&start=18",e.bot={nome:"Junior Bot",icone:"src/images/junior.png",node:'[write-id="junior-bot-user"]'};var n=JSON.stringify(e);return"\n\t\tTo sim "+e.nome+' 😁, quer ver um video Engraçado?\n\t\t<button style="background:#3498db;border:none;cursor:pointer;" onclick="payload_event(this)" class="btn-link" data-payload=\''+n+"'>\n\t\t\tAssistir Video\n\t\t</button>\n\t"},s=function(e,t){return $(".junior-bot-user .user-message").css("display","none"),"Oie "+e.nome+", tudo bem com você? 🤗"},u=function(e,t){return"Meu criador é https://github.com/PaulaoDev"},a=function(e,t){if(t.length>1){var n=t[1];if(n=n.trim(),/meu nome/gim.test(n))return"Seu nome é "+e.nome+" 🤗"}return"Não entendi sua pergunta."},c=function(){return"https://www.youtube.com/watch?v=AxmsC2arlHk&start=76&autoplay=1"};e.exports={"hello init":r,"^(junior|junior bot) quem e seu criador$":u,"(.*)(junior|junior bot) (eu|eu quero|quero) ouvir(.*)":o,"^(.*)ta bem (junior|junior bot)\\?$":i,"^o?(i|ie|la|ei) (junior|junior bot)$":s,"^(junior|junior bot) qual e(.*)":a,"^(junior|junior bot) quero (rir|ficar (?:feliz|alegre)?|dar risada|(?:ver)? ?video engracado|rir (.*)|ver memes?|memes?)$":c}},function(e,t,n){"use strict";var r=n(0),o=(r.gen_id,r.session,r.clear_input,r.user_on_exists,r.to_scroll,r.get_user),i=(r.get_horario,r.removerAcentos,r.bot_write,function(e){var t=new Date,n=e.split(":"),r=n[0],o=n[1],i=n[2];return t.setHours(r),t.setMinutes(o),t.setSeconds(i),t}),s=function(e){var t=Array.from(document.querySelectorAll('.message[id="'+e+'"]')).pop();if(t=t,$(t).attr("data-user")){var n=JSON.parse(t.dataset.user);return new Date-i(n.horario)}},u=function(){var e=function(e){return sessionStorage.removeItem(e)};socket.emit("desconectou",o()),e("icone"),e("nome"),e("id"),e("status"),e("my_id"),setTimeout(function(){return location.href="./"},500)},a=function(e,t,n){Array.from(document.querySelectorAll(".people")).map(function(e){var t=$(e).attr("id");s(t)>=18e5&&!t.includes("bot")&&($('.people[id="'+t+'"]').remove(),t===o().id&&u())})},c=["on","write","message","login"],l={id:"2",nome:"bot remove",desc:"Robô feito para remover usuarios inativos do chat.",on:!0,code:"src/js/modules/bots/bot_remove.js",icon:"src/images/bot-remove.png",events:c,call:a};e.exports=l},,,,,,,,,function(e,t,n){"use strict";var r=n(6),o=n(20),i=location.pathname;if(Object.keys(r).map(function(e){var t=r[e];t.icon&&(r[e].icon="../"+t.icon),r[e].url="../bot/"+t.id,r[e].size=t.call.toString().length,r[e].eventos=t.events.map(function(e){return" "+e+" "}).toString()}),console.log(/bot\/(.*)/.test(i)),/bots/.test(i))try{o=o({bots:r})}catch(e){throw e.message}else/bot\/(.*)/.test(i)&&window.id>=0&&window.codee&&(o=o({bot:r[id]}))},function(e,t,n){"use strict";e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Vue({el:".app",data:e})}}]);