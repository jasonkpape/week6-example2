//	HYPE.documents["index"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="index.hyperesources",f="index",g="index_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/index_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_664F||null!=window.HYPE_dtl_664F)||true==!0||null!=c&&10>c;a=!0==d?"HYPE-664.full.min.js":"HYPE-664.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_664"+c,"HYPE_dtl_664"+c,a,d),false==!0&&(a=a||k("HYPE_w_664","HYPE_wdtl_664","HYPE-664.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_664","HYPE-664.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"initialize",source:"function(hypeDocument, element, event) {\t\n\tdocument.getElementById(\"countText\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"launchText\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"countText\").innerHTML = \"1000\";\n}",identifier:"16"},{name:"startCountdown",source:"function(hypeDocument, element, event) {\t\n\tdocument.getElementById(\"launchButton\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"countText\").style.visibility = \"visible\";\n\tvar interval1 = setInterval(decrement, 10);\n\t\n\tfunction decrement() {\n\t\tvar currentValue = parseInt(document.getElementById(\"countText\").innerHTML);\n\t\tif (currentValue > 0) {\n\t\t\tcurrentValue = currentValue - 1;\n\t\t\tdocument.getElementById(\"countText\").innerHTML = currentValue;\n\t\t} else {\n\t\t\tdocument.getElementById(\"countText\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"launchText\").style.visibility = \"visible\";\n\t\t\thypeDocument.startTimelineNamed('moveRocket');\n\t\t\tclearInterval(interval1);\n\t\t}\n\t}\n}",identifier:"17"},{name:"showLaunchButton",source:"function(hypeDocument, element, event) {\t\n\tdocument.getElementById(\"launchButton\").style.visibility = \"visible\";\n\tdocument.getElementById(\"countText\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"launchText\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"countText\").innerHTML = \"1000\";\n\thypeDocument.pauseTimelineNamed('moveRocket');\n\thypeDocument.goToTimeInTimelineNamed(0, 'moveRocket');\n}",identifier:"38"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_664"+c](f,g,{"0":{p:1,n:"rocket.png",g:"8",t:"@1x"},"-1":{n:"PIE.htc"},"-2":{n:"blank.gif"}},l,[],e,[{n:"Untitled Scene",o:"1",X:[0]}],
[{A:{a:[{p:4,h:"16"}]},o:"3",p:"600px",cA:false,Y:800,Z:600,c:"#FF8676",L:[],bY:1,d:800,U:{},T:{"5_hover":{q:false,z:1,i:"5_hover",n:"5_hover",a:[{f:"c",y:0,z:1,i:"g",e:"#1600A4",s:"#2000FA",o:"57"},{y:1,i:"g",s:"#1600A4",z:0,o:"57",f:"c"}],f:30,b:[]},"5_pressed":{q:false,z:1,i:"5_pressed",n:"5_pressed",a:[{f:"c",y:0,z:1,i:"g",e:"#1600A4",s:"#2000FA",o:"57"},{f:"c",y:0,z:1,i:"B",e:"#07D8D4",s:"#00FFFB",o:"57"},{f:"c",y:0,z:1,i:"C",e:"#07D8D4",s:"#00FFFB",o:"57"},{f:"c",y:0,z:1,i:"D",e:"#07D8D4",s:"#00FFFB",o:"57"},{f:"c",y:0,z:1,i:"A",e:"#07D8D4",s:"#00FFFB",o:"57"},{y:1,i:"g",s:"#1600A4",z:0,o:"57",f:"c"},{y:1,i:"B",s:"#07D8D4",z:0,o:"57",f:"c"},{y:1,i:"C",s:"#07D8D4",z:0,o:"57",f:"c"},{y:1,i:"D",s:"#07D8D4",z:0,o:"57",f:"c"},{y:1,i:"A",s:"#07D8D4",z:0,o:"57",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[]},"15":{q:false,z:3,i:"15",n:"moveRocket",a:[{f:"c",y:0,z:2,i:"b",e:-150,s:372,o:"63"},{f:"c",y:0,z:0.04,i:"dN",e:1,s:0,o:"50"},{f:"c",y:0,z:1.1,i:"e",e:0,s:1,o:"52"},{f:"48",y:0,z:2,i:"f",e:-90,s:0,o:"54"},{f:"c",y:0,z:1.1,i:"e",e:0,s:1,o:"51"},{f:"c",y:0,z:1.1,i:"e",e:0,s:1,o:"50"},{f:"c",y:0.04,z:0.05,i:"dN",e:1,s:0,o:"51"},{y:0.04,i:"dN",s:1,z:0,o:"50",f:"c"},{f:"c",y:0.09,z:0.03,i:"dN",e:1,s:0,o:"52"},{y:0.09,i:"dN",s:1,z:0,o:"51",f:"c"},{f:"c",y:0.12,z:0.03,i:"dN",e:1,s:0,o:"53"},{y:0.12,i:"dN",s:1,z:0,o:"52",f:"c"},{y:0.15,i:"dN",s:1,z:0,o:"53",f:"c"},{f:"c",y:0.19,z:0.1,i:"e",e:0,s:1,o:"53"},{y:0.29,i:"e",s:0,z:0,o:"53",f:"c"},{y:1.1,i:"e",s:0,z:0,o:"52",f:"c"},{y:1.1,i:"e",s:0,z:0,o:"51",f:"c"},{y:1.1,i:"e",s:0,z:0,o:"50",f:"c"},{y:2,i:"b",s:-150,z:0,o:"63",f:"c"},{f:"c",y:2,z:0.05,i:"f",e:-86,s:-90,o:"54"},{f:"c",y:2.05,z:0.05,i:"f",e:-90,s:-86,o:"54"},{y:2.1,i:"f",s:-90,z:0,o:"54",f:"c"},{f:"c",p:2,y:3,z:0,i:"ActionHandler",s:{a:[{p:4,h:"38"}]},o:"15"}],f:30,b:[]}},bZ:180,O:["57","49","53","54","63","50","61","51","59","62","58","60","52","55","56"],n:"Untitled Layout","_":0,v:{"57":{b:61,z:2,K:"Solid",c:264,L:"Solid",d:39,aS:6,M:5,bD:"none",N:5,aT:6,dB:"button",O:5,g:"#2000FA",aU:6,P:5,aV:6,i:"launchButton",j:"absolute",k:"div",aI:13,aJ:13,aK:13,aL:13,A:"#00FFFB",B:"#00FFFB",aM:"5_hover",r:"inline",C:"#00FFFB",Z:"break-word",s:"Optima,'Lucida Grande',Helvetica,sans-serif",aN:"5_pressed",D:"#00FFFB",t:36,F:"center",aA:{a:[{p:4,h:"17"}]},G:"#00FFFB",aP:"pointer",w:"COUNTDOWN",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"63":{h:"8",p:"no-repeat",x:"visible",a:358,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:6,k:"div",b:372,d:150,c:84},"53":{x:"visible",a:36,b:0,j:"absolute",bF:"49",z:4,dC:{path:[[74.9414,190.4414,75.8751,167.8672,61.8511,134.3287,56.6875,117.4102],[56.6875,117.4102,44.3897,77.1161,23.5807,41.7395,4.9727,4.5235]],closed:false},k:"div",d:195,c:79,e:1,dD:4,dW:"Pencil",dN:0,dE:"#FF9C00"},"58":{aU:8,G:"#00FFFB",c:313,aV:8,r:"inline",d:87,e:0.98359058,s:"Optima,'Lucida Grande',Helvetica,sans-serif",t:72,Z:"break-word",v:"bold",i:"countText",w:"00",j:"absolute",x:"visible",k:"div",y:"preserve",z:9,aS:8,aT:8,a:471,F:"center",b:419},"60":{aU:8,G:"#00FFFB",aV:8,r:"inline",e:1,s:"Optima,'Lucida Grande',Helvetica,sans-serif",t:48,Z:"break-word",v:"bold",i:"launchText",w:"LAUNCH",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:10,aS:8,aT:8,a:13,F:"center",b:434},"54":{b:352,c:8,d:149,I:"Solid",cQ:1,J:"Solid",f:0,K:"Solid",cR:1,L:"Solid",M:4,N:4,A:"#FF3F52",j:"absolute",x:"visible",B:"#FF3F52",O:4,P:4,C:"#FF3F52",z:7,k:"div",D:"#FF3F52",tX:0,a:370,tY:0.99},"59":{c:128,d:77,I:"Solid",r:"inline",J:"Solid",K:"Solid",L:"Solid",M:4,N:4,A:"#C82E3C",x:"visible",j:"absolute",B:"#C82E3C",k:"div",O:4,C:"#C82E3C",z:4,P:4,D:"#C82E3C",a:335,b:398},"50":{x:"visible",a:176,b:62,j:"absolute",bF:"49",z:1,dC:{path:[[4.8633,127.1016,19.8604,96.7471,21.8874,59.4059,48,37],[48,37,62.2961,24.7333,80,4,117.9102,4.0586]],closed:false},k:"div",d:132,c:122,e:1,dD:4,dW:"Pencil",dN:0,dE:"#F4E2B6"},"55":{x:"visible",dE:"#B12C39",k:"div",c:144,dC:{path:[[4,4,4,4,18,28,18,28],[18,28,18,28,124,28,124,28],[124,28,124,28,140,4,140,4],[140,4,140,4,4,4,4,4]],closed:true},d:32,z:5,a:331,j:"absolute",dD:4,b:479},"49":{k:"div",x:"visible",c:350,d:197,z:11,a:256,j:"absolute",b:312},"61":{x:"visible",dE:"#E73848",k:"div",c:184,dC:{path:[[87,4,87,4,4,113,4,113],[4,113,4,113,180,114,180,114],[180,114,180,114,87,4,87,4]],closed:true},d:118,z:3,a:313,j:"absolute",dD:4,b:394},"51":{x:"visible",a:0,b:92,j:"absolute",bF:"49",z:2,dC:{path:[[96.9609,100.8047,97.4732,92.6369,93.6364,85.455,90.3672,78.1211],[90.3672,78.1211,77.6281,49.5432,60.0798,29.8466,31.3438,16.8711],[31.3438,16.8711,25.7316,14.337,10.0682,4.4219,4.6367,4.4219]],closed:false},k:"div",d:105,c:102,e:1,dD:4,dW:"Pencil",dN:0,dE:"#E3F200"},"56":{c:800,d:92,I:"None",J:"None",K:"None",g:"#0FA06B",L:"None",M:0,N:0,A:"#07D8D4",x:"visible",j:"absolute",B:"#07D8D4",P:0,k:"div",C:"#07D8D4",z:1,O:0,D:"#07D8D4",a:0,b:508},"62":{c:98,d:83,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:4,N:4,A:"#E73848",x:"visible",j:"absolute",B:"#E73848",k:"div",O:4,C:"#E73848",z:8,P:4,D:"#E73848",a:349,b:417},"52":{x:"visible",a:170,b:124,j:"absolute",bF:"49",z:3,dC:{path:[[4.4727,65.5117,14.2902,61.6006,22.7941,54.3481,32.3203,49.5821],[32.3203,49.5821,55.2948,38.0877,79.6592,27.5588,104.3672,20.2657],[104.3672,20.2657,116.1863,16.7769,128.1119,13.6381,140.0977,10.7735],[140.0977,10.7735,151.9281,7.946,164.7706,8.8724,175.9844,4.1602]],closed:false},k:"div",d:70,c:180,e:1,dD:4,dW:"Pencil",dN:0,dE:"#FF6F00"}}}],{},h,{"48":{p:0,q:[[0,0,0.1358,0,0.5241,0.1041,0.6683,0.2455],[0.6683,0.2455,0.9703,0.5416,1,1,1,1]]}},null,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
