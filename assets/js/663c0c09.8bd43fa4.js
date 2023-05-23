"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[593],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>h});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),u=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return a.createElement(s.Provider,{value:r},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=n,h=p["".concat(s,".").concat(d)]||p[d]||b[d]||i;return t?a.createElement(h,o(o({ref:r},c),{},{components:t})):a.createElement(h,o({ref:r},c))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2369:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=t(7462),n=(t(7294),t(3905));const i={sidebar_position:1},o="Server Setup and Configuration",l={unversionedId:"crucible/basics/server-setup",id:"crucible/basics/server-setup",title:"Server Setup and Configuration",description:"In this guide we will teach you how to install Crucible.",source:"@site/docs/crucible/basics/server-setup.md",sourceDirName:"crucible/basics",slug:"/crucible/basics/server-setup",permalink:"/docs/crucible/basics/server-setup",draft:!1,editUrl:"https://github.com/CrucibleMC/docs/blob/main/docs/crucible/basics/server-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Crucible - Basics",permalink:"/docs/category/crucible---basics"},next:{title:"Troubleshooting",permalink:"/docs/crucible/basics/troubleshooting"}},s={},u=[{value:"Setup",id:"setup",level:2},{value:"Create a fresh Crucible server",id:"create-a-fresh-crucible-server",level:3},{value:"Update a Thermos server",id:"update-a-thermos-server",level:3},{value:"Configuration",id:"configuration",level:2}],c={toc:u};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"server-setup-and-configuration"},"Server Setup and Configuration"),(0,n.kt)("p",null,"In this guide we will teach you how to install Crucible.\nTo use Crucible make sure you have ",(0,n.kt)("inlineCode",{parentName:"p"},"Java 8")," installed, in this guide\nwe will be under the assumption java is in your global path, and you know the basics of a terminal."),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("p",null,"Crucible can be installed as either a fresh server or a replacement for Thermos, bellow you can find the appropriate\ninstructions to fit your needs."),(0,n.kt)("h3",{id:"create-a-fresh-crucible-server"},"Create a fresh Crucible server"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Download the latest Crucible version ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/CrucibleMC/Crucible/releases/tag/v5.4"},"here"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Drop the ",(0,n.kt)("inlineCode",{parentName:"p"},"Crucible-1.7.10-X.X.jar")," (X being the current version number) on your server root")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"To run Crucible you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"java -jar Crucible-1.7.10-X.X.jar"),", to avoid having to open a terminal every time you want\nto run it you can create a batch/sh script")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For Windows, create a file named ",(0,n.kt)("inlineCode",{parentName:"p"},"start.bat")," alongside the Crucible jar with the following content:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bat"},"@echo off\njava -jar Crucible-1.7.10-X.X.jar\nPAUSE\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For Linux and Mac, create a file named ",(0,n.kt)("inlineCode",{parentName:"li"},"start.sh")," alongside the Crucible jar with the following content:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"#!/bin/bash\njava -jar Crucible-1.7.10-X.X.jar\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You now can run the launch script")),(0,n.kt)("h3",{id:"update-a-thermos-server"},"Update a Thermos server"),(0,n.kt)("p",null,"While we recommend moving to plain Crucible, we understand it comes with a bounder to change a working server to a new\nsoftware that may break it. For those who wish to receive important bug fixes without having to deal with any breaking\nchanges we offer the reflux releases, a drop in replacement for Thermos."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Downloaded the latest reflux release ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/CrucibleMC/Crucible/releases/tag/reflux-v1"},"here")),(0,n.kt)("li",{parentName:"ul"},"Backup your server, just in case something unexpected happens"),(0,n.kt)("li",{parentName:"ul"},"Replace your Thermos jar with the Reflux jar")),(0,n.kt)("p",null,"If for some reason your server do not start or something odd breaks, please make an issue ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/CrucibleMC/Crucible/issues"},"here")," or join our ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/jWSTJ4d"},"discord")),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,'Crucible is a bukkit and forge hybrid, all configuration files should be expected to behave as their standalone counterparts,\nCrucible also offers its own configuration file named "Crucible.yml", there you can fine tune some Crucible changes to best suit your server.'))}p.isMDXComponent=!0}}]);