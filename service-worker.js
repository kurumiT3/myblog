if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}})).then(e=>{const s=c(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/404.html",revision:"54fbc0ffaae734592e03be4d8e63c90c"},{url:"/404/index.html",revision:"54fbc0ffaae734592e03be4d8e63c90c"},{url:"/about/index.html",revision:"c5f209a7ec19c0b3ca6e1e07700c3ce3"},{url:"/archives/index.html",revision:"8e845ed2a4f83ce2bfbbc268842ce936"},{url:"/assets/css/0.styles.40195ca2.css",revision:"75051366d8ebeacb89be0eeb58eaa0a2"},{url:"/assets/data/404/index.json",revision:"57f52948359a30eb5d0bc3ae8f1b68b7"},{url:"/assets/data/about/index.json",revision:"960033632bf09c23a726f3c679a967ba"},{url:"/assets/data/archives/index.json",revision:"960033632bf09c23a726f3c679a967ba"},{url:"/assets/data/friends/index.json",revision:"960033632bf09c23a726f3c679a967ba"},{url:"/assets/data/index.json",revision:"04609efc7bf3601488c78d38f7675a31"},{url:"/assets/data/life/new-start-with-gridsome/index.json",revision:"03bf80b4dcfc9f9fad2caf7cdf290d17"},{url:"/assets/data/tag/Blog/index.json",revision:"1a939a2e8a1cda89f14aec5bb5f5671d"},{url:"/assets/data/tag/Gridsome/index.json",revision:"6e8141e93690bbb797e3364bc3d70a8c"},{url:"/assets/js/app.f812e254.js",revision:"d7966b0ab4994879d93d72a318b0ac6a"},{url:"/assets/js/page--src--pages--404-vue.7414a1cb.js",revision:"4442fa2d23710982b1523925f33e8f09"},{url:"/assets/js/page--src--pages--about-vue.4059db19.js",revision:"37964583536d309b7d6f5ca76b22c477"},{url:"/assets/js/page--src--pages--archives-vue.d0597587.js",revision:"88dc5345d33599c04c2b9a845e186586"},{url:"/assets/js/page--src--pages--friends-vue.fcc54289.js",revision:"8bd29690368815612a3456355fe8b061"},{url:"/assets/js/page--src--pages--index-vue.df1d4692.js",revision:"1ae8a8648e6bd2e80286bf52323c2b2b"},{url:"/assets/js/page--src--templates--blog-post-vue.16b59aec.js",revision:"75d3a04b99f5eaffb9d917405185a191"},{url:"/assets/js/page--src--templates--tag-vue.e33f60fc.js",revision:"8db95c835f4188c5014729045daab3c1"},{url:"/assets/static/favicon-120x120.png",revision:"f3cb8e831e14b2f60cd03cb23d80faa8"},{url:"/assets/static/favicon-128x128.png",revision:"330a0748188dd1cfbfc5d86e7dc80790"},{url:"/assets/static/favicon-144x144.png",revision:"45b19b6f4eed010993e3cfca76bc8805"},{url:"/assets/static/favicon-152x152.png",revision:"f1e69466e9350cf02f0762344e308752"},{url:"/assets/static/favicon-16x16.png",revision:"e38ef688ca026a55e93feb75bd34e365"},{url:"/assets/static/favicon-180x180.png",revision:"3ca358a9feb01eafadf6afde65a23e60"},{url:"/assets/static/favicon-192x192.png",revision:"71c94e2919878b13437664a08910c42d"},{url:"/assets/static/favicon-384x384.png",revision:"0344be76881be717595e00bfbe548716"},{url:"/assets/static/favicon-48x48.png",revision:"824202ad69c56daf0485c7ac1fbd0d3e"},{url:"/assets/static/favicon-512x512.png",revision:"a24456befb9f05a59525beb76729126b"},{url:"/assets/static/favicon-72x72.png",revision:"8c316db161364181210d32fd30f2a0ad"},{url:"/assets/static/favicon-96x96.png",revision:"e602f3a0c2712c81d4db91afb665eb5e"},{url:"/assets/static/favicon.ac8d93a.31c137b0500c19ff7232c36417527311.png",revision:"01bc41bf2547d604a419ff696238cb30"},{url:"/assets/static/favicon.ce0531f.31c137b0500c19ff7232c36417527311.png",revision:"58a9afe9a59c88cc9e88885ad8b48d03"},{url:"/assets/static/newstart.27ec4cf.52df37dc915451de3e056b5f7a1c980b.png",revision:"7197b4379ae81d61ff3f63dc7ce85af1"},{url:"/assets/static/newstart.3778461.52df37dc915451de3e056b5f7a1c980b.png",revision:"3d62cddca04072e155453fc60a5c2ebb"},{url:"/assets/static/newstart.a209973.52df37dc915451de3e056b5f7a1c980b.png",revision:"3d62cddca04072e155453fc60a5c2ebb"},{url:"/assets/static/newstart.a67b0b2.52df37dc915451de3e056b5f7a1c980b.png",revision:"7197b4379ae81d61ff3f63dc7ce85af1"},{url:"/friends/index.html",revision:"67865aa7cd27d738cb2feb99d87b1af5"},{url:"/index.html",revision:"e885abb1a5cc2d0d9b17dca4bc4bf863"},{url:"/life/new-start-with-gridsome/index.html",revision:"8e02e77d9a451c3cef7c1ba6bf5146b2"},{url:"/manifest.json",revision:"5816292059769ae61717d6ff8fdfa23e"},{url:"/tag/Blog/index.html",revision:"5bbc6df219a81a81d024c5513f8cc13d"},{url:"/tag/Gridsome/index.html",revision:"613e3d31e9afc2ca6b223a372ab8f758"},{url:"/404",revision:"28f25f53f5ce5d7c39f9df9ad1964986"},{url:"/life/new-start-with-gridsome",revision:"69c357196a0946e4b739f203565b332e"},{url:"/tag/Gridsome",revision:"d25e61e1eedc2e237b8037fc6f135b6d"},{url:"/tag/Blog",revision:"df92b41d4142e571cdf53b6659d2f47d"},{url:"/friends",revision:"4f4f566c0d74393e1158a8f8d6e37c10"},{url:"/about",revision:"a7224db13f3a49096aa27c1876d1a947"},{url:"/archives",revision:"6dc779670bc86b280adac33a13404034"}],{})}));
//# sourceMappingURL=service-worker.js.map

addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'SKIP_WAITING') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
