if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let l={};const o=e=>s(e,c),t={module:{uri:c},exports:l,require:o};i[c]=Promise.all(n.map((e=>t[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Detail-B1bpH0bZ.js",revision:null},{url:"assets/Detail-B5T-ACkJ.css",revision:null},{url:"assets/index-CCMbMctX.css",revision:null},{url:"assets/index-DJ58HxDX.js",revision:null},{url:"index.html",revision:"4087a2abb77bb5716a8c4991554a0b2d"},{url:"registerSW.js",revision:"df64bd9623a4d6e7ea6a882be6a742e5"},{url:"favicon.ico",revision:"f2413d192135c1f5194f5e7016a8a4d0"},{url:"maskable-icon-512x512.png",revision:"833fff5b4eec6c465ab04ccd3f704220"},{url:"pwa-192x192.png",revision:"befb82638ebfb5c672ec7f706c36f760"},{url:"pwa-512x512.png",revision:"65d2283264dbc6fc7c46ed485302b02b"},{url:"pwa-64x64.png",revision:"d701c68c99d7878c99e674e07ee980ee"},{url:"manifest.webmanifest",revision:"f2af750ed9f707504a877852fe40ccc5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
