if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,d,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(d.map(a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/assets/css/0.styles.722baa27.css",revision:"8a9647dd5f4ca8c6e2e7add5fb9b0852"},{url:"/assets/data/404/index.json",revision:"36e3a90f7d0c28a020b360d06e4485b6"},{url:"/assets/data/about/index.json",revision:"c1738b97d2d23ef934bb5118bd078970"},{url:"/assets/data/archives/index.json",revision:"d584e7c284f375f38b4749bfd23ec4bb"},{url:"/assets/data/code/heu-auto-checkin-covid19/index.json",revision:"7ef0504909d88d3847155e0e3fca78bb"},{url:"/assets/data/code/update-your-posts-in-readme/index.json",revision:"4e5cb6bd279c487221a7a5200dc13d33"},{url:"/assets/data/friends/index.json",revision:"c1738b97d2d23ef934bb5118bd078970"},{url:"/assets/data/index.json",revision:"9312b43bde7376343da38a60b126fc67"},{url:"/assets/data/life/daily-impermanence/index.json",revision:"50ca6a6abd47655ec328e16f8bea93f6"},{url:"/assets/data/life/new-start-with-gridsome/index.json",revision:"298a77dea2dee49d02d5b7a84eb1c28b"},{url:"/assets/data/tag/Aria2/index.json",revision:"d56c57c5118d5b96f32dcb082f9f7e7b"},{url:"/assets/data/tag/Blog/index.json",revision:"d7e32fb1fbcaa03b320d60482c6ae559"},{url:"/assets/data/tag/COVID-19/index.json",revision:"084e4e741578bfbc15f43835006ad024"},{url:"/assets/data/tag/FlexGet/index.json",revision:"f8f27ef2a0c1eda5c84323b8cd1225f6"},{url:"/assets/data/tag/GitHub Actions/index.json",revision:"6d0eba2220fc279a31bb47028ff07bf4"},{url:"/assets/data/tag/Gridsome/index.json",revision:"09dac92d81c36dbc1d83667619d0c780"},{url:"/assets/data/tag/Markdown/index.json",revision:"dd3d0ac172190db3cffb94e2af34e072"},{url:"/assets/data/tag/Python/index.json",revision:"7a0bcdb103d858644bc24b4ed30130f7"},{url:"/assets/data/tag/README/index.json",revision:"c86284c2ce11b0a3012e09f318975d8d"},{url:"/assets/data/tag/RSS/index.json",revision:"1297cbf8196fedb1dd39e0b54275b0d8"},{url:"/assets/data/tag/webdrivers/index.json",revision:"566691e410629a29a827cf5d82ef6090"},{url:"/assets/data/tag/定时任务/index.json",revision:"53a0be11867509db1b6f766557698af4"},{url:"/assets/data/tag/思考/index.json",revision:"658738ec2da9014ec88181fb5b8af2ca"},{url:"/assets/data/tag/手帐/index.json",revision:"0fe2f96985714594a9eb9ae523bd4069"},{url:"/assets/data/tag/调试/index.json",revision:"fdbfb645690fbf782a85db4191870a32"},{url:"/assets/data/tech/auto-download-bangumi-with-aria2-rss/index.json",revision:"a75eb78cb10d64b8c0dad117b43b301a"},{url:"/assets/data/tech/modified-github-actions-4-heu-checkin/index.json",revision:"3bbba02390c5d61845bc97ef71cc8046"},{url:"/assets/data/watch/index.json",revision:"c1738b97d2d23ef934bb5118bd078970"},{url:"/assets/js/app.2af04b71.js",revision:"67a96c7a1b53292ce4516ab2ad8cfb1f"},{url:"/assets/js/page--src--pages--404-vue.7414a1cb.js",revision:"4442fa2d23710982b1523925f33e8f09"},{url:"/assets/js/page--src--pages--about-vue.5d33dd57.js",revision:"36e2ff01dbccf8a4ca51f9fae9724afd"},{url:"/assets/js/page--src--pages--archives-vue.636e215a.js",revision:"9b3c25f7bb1a430de9e3dd919e4d57f2"},{url:"/assets/js/page--src--pages--friends-vue.9d3d74b6.js",revision:"3d735c86bbb5be9bdbb2562dafe77426"},{url:"/assets/js/page--src--pages--index-vue.2cb7b638.js",revision:"8c1537b790502ddbdfdd68497b3cead0"},{url:"/assets/js/page--src--pages--watch-vue.4a13adab.js",revision:"8777d755d236d9f5db39c74d03a745a0"},{url:"/assets/js/page--src--templates--blog-post-vue.36099a99.js",revision:"c80a17b3049ee9514dc90a4ef5ad81c7"},{url:"/assets/js/page--src--templates--tag-vue.6d70a7b5.js",revision:"cbd8da00acd39072da6bb9f806624d92"},{url:"/manifest.json",revision:"5816292059769ae61717d6ff8fdfa23e"},{url:"/404",revision:"28f25f53f5ce5d7c39f9df9ad1964986"},{url:"/tech/modified-github-actions-4-heu-checkin",revision:"aa27d2c88c09a380d7a1c47e08620b16"},{url:"/life/new-start-with-gridsome",revision:"69c357196a0946e4b739f203565b332e"},{url:"/code/update-your-posts-in-readme",revision:"2667e771d879156455616dcb9f160e22"},{url:"/tech/auto-download-bangumi-with-aria2-rss",revision:"91eb9e51d2e646da1436df33b5246be3"},{url:"/life/daily-impermanence",revision:"721fa46006355d2ec8370a431302d119"},{url:"/code/heu-auto-checkin-covid19",revision:"747ec4ff16c78f691172af0f4cbcf35f"},{url:"/tag/%E6%89%8B%E5%B8%90",revision:"3899084d82128c017d1f3f6c60e96c5d"},{url:"/tag/%E6%80%9D%E8%80%83",revision:"e6e1722187ffa03db6f98d72fa75580a"},{url:"/tag/COVID-19",revision:"2069cf6659c4b95b1be1033eb14ed705"},{url:"/tag/%E8%B0%83%E8%AF%95",revision:"a42e9ee533a7cef610249f8030c14b1c"},{url:"/tag/Python",revision:"ea7933fda08676e942fff6cbc374adda"},{url:"/tag/GitHub%20Actions",revision:"164e70d955941f5796e92ac0208452dc"},{url:"/tag/%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1",revision:"d44387f2d2cbc2b7931a7e16838d49a1"},{url:"/tag/webdrivers",revision:"3ae43b72173d80167c850e2879157177"},{url:"/tag/Gridsome",revision:"d25e61e1eedc2e237b8037fc6f135b6d"},{url:"/tag/Blog",revision:"df92b41d4142e571cdf53b6659d2f47d"},{url:"/tag/Markdown",revision:"60307797bf2abbd6f9c1bfecb1268dca"},{url:"/tag/README",revision:"783703763924fc501c80ec335fd98807"},{url:"/tag/RSS",revision:"7d98a501e54534d7059705af21d2e4cc"},{url:"/tag/Aria2",revision:"2039d5c9da00ef35e377d7ff0c82996a"},{url:"/tag/FlexGet",revision:"1cdfd4b44efeef407a6c8c0186829bae"},{url:"/watch",revision:"0a261f48ba3244e5d37dda83888ed553"},{url:"/friends",revision:"4f4f566c0d74393e1158a8f8d6e37c10"},{url:"/about",revision:"a7224db13f3a49096aa27c1876d1a947"},{url:"/archives",revision:"6dc779670bc86b280adac33a13404034"}],{})}));
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
