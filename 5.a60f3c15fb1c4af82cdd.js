(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{bY3J:function(o,t,e){"use strict";e.r(t),e.d(t,"EndModule",function(){return c});var n=e("ofXK"),i=e("tyNb"),s=e("fXoL"),a=e("on2l");const r=[{path:"",component:(()=>{class o{constructor(o,t){this.UService=o,this.router=t,this.payload={temp:!0,name:"Player",score:0}}ngOnInit(){this.payload=this.UService.getSessionData(),console.log(this.payload)}onSubmit(o){"home"===o?(console.log("--onSubmit--home"),this.UService.setSessionData(this.payload),this.router.navigate(["/"])):"again"===o&&(console.log("--onSubmit--again"),this.UService.resetScore(),this.router.navigate(["/game"]))}}return o.\u0275fac=function(t){return new(t||o)(s.Fb(a.a),s.Fb(i.b))},o.\u0275cmp=s.zb({type:o,selectors:[["app-end"]],decls:13,vars:2,consts:[[1,"logoLose"],[1,"scoreLabel"],[1,"generalContainer"],[1,"loseButtonContainer"],[1,"loseButton",3,"click"],[1,"loseButton","loseTopM",3,"click"]],template:function(o,t){1&o&&(s.Ib(0,"div",0),s.Ib(1,"h1",1),s.Ub(2,"Score"),s.Hb(),s.Ib(3,"h1",1),s.Ub(4),s.Hb(),s.Ib(5,"h1",1),s.Ub(6),s.Hb(),s.Hb(),s.Ib(7,"div",2),s.Ib(8,"div",3),s.Ib(9,"button",4),s.Nb("click",function(){return t.onSubmit("home")}),s.Ub(10,"Home"),s.Hb(),s.Ib(11,"button",5),s.Nb("click",function(){return t.onSubmit("again")}),s.Ub(12,"Try again"),s.Hb(),s.Hb(),s.Hb()),2&o&&(s.wb(4),s.Vb(t.payload.name),s.wb(2),s.Vb(t.payload.score))},styles:[""]}),o})()}];let b=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=s.Db({type:o}),o.\u0275inj=s.Cb({imports:[[i.c.forChild(r)],i.c]}),o})(),c=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=s.Db({type:o}),o.\u0275inj=s.Cb({imports:[[n.b,b]]}),o})()}}]);