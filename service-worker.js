if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,s,i)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const d={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return c;case"module":return d;default:return e(a)}})).then(e=>{const a=i(...e);return c.default||(c.default=a),c})}))}}define("./service-worker.js",["./workbox-6c0fc782"],(function(e){"use strict";e.setCacheNameDetails({prefix:"msx-pwa-cache"}),e.skipWaiting(),e.precacheAndRoute([{url:"/assets/css/0.styles.bec66a3c.css",revision:"5f83a020453f0ecb0f2a1364a68088b8"},{url:"/assets/js/app.90ae00ed.js",revision:"4698d3f1201e7454915da6c153644141"},{url:"/assets/js/page--src--pages--404-vue.9aadb5a5.js",revision:"7698e0e62d968687ddbc0f229af9b158"},{url:"/assets/js/page--src--pages--about-vue.f0dcd535.js",revision:"5861e29f59899b10f9dca892feb8febb"},{url:"/assets/js/page--src--pages--archives-vue.0c879a72.js",revision:"64f3157f34903564161b5a00c4d775c5"},{url:"/assets/js/page--src--pages--friends-vue.0f75f43a.js",revision:"fd05318dce8336a88d7b0361e5f09e2b"},{url:"/assets/js/page--src--pages--index-vue.5a9ed00a.js",revision:"8f66a96e8fc27c0e36c5540242436e1f"},{url:"/assets/js/page--src--pages--watch-vue.936d9785.js",revision:"ec5d0f86fb073bb025b0a784a7827b24"},{url:"/assets/js/page--src--templates--blog-post-vue.edefee74.js",revision:"7149b9f55d4b0243be5eab11ba3579bb"},{url:"/assets/js/page--src--templates--category-vue.ef5c2d3d.js",revision:"d67e69a520301b5db3614ce2696ae23f"},{url:"/assets/js/page--src--templates--tag-vue.f568fe0d.js",revision:"d9689edf1ba4e0e0e23a1a1c84a662f6"},{url:"/assets/js/vendors~page--src--pages--about-vue~page--src--pages--watch-vue~page--src--templates--blog-post-vue.2e24bd84.js",revision:"ebec5c8925cf10a3b8637125a18566ae"},{url:"/assets/static/aria-rss-bangumi.27ec4cf.128ec450120ff0928e23c48d995c622c.png",revision:"b9cf1720e19e5342aa5d5596b1f7741b"},{url:"/assets/static/aria-rss-bangumi.3778461.128ec450120ff0928e23c48d995c622c.png",revision:"c664cd501b16fc534b543f525a8b0143"},{url:"/assets/static/aria-rss-bangumi.a209973.128ec450120ff0928e23c48d995c622c.png",revision:"c664cd501b16fc534b543f525a8b0143"},{url:"/assets/static/aria-rss-bangumi.a67b0b2.128ec450120ff0928e23c48d995c622c.png",revision:"b9cf1720e19e5342aa5d5596b1f7741b"},{url:"/assets/static/auto-checkin-covid19.27ec4cf.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"47351c9f9f15d3cc0b05a058cb020767"},{url:"/assets/static/auto-checkin-covid19.3778461.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"dbebbe061a44d1bbdf6339012509036c"},{url:"/assets/static/auto-checkin-covid19.a209973.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"dbebbe061a44d1bbdf6339012509036c"},{url:"/assets/static/auto-checkin-covid19.a67b0b2.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"47351c9f9f15d3cc0b05a058cb020767"},{url:"/assets/static/favicon.1539b60.bf61008f0ef71b874a75ec950abb49a1.png",revision:"76e5c2d431f67304724e297cf979da0a"},{url:"/assets/static/favicon.62d22cb.bf61008f0ef71b874a75ec950abb49a1.png",revision:"eb5a6d83284cd774aa8a0e30f45c82fe"},{url:"/assets/static/favicon.7b22250.bf61008f0ef71b874a75ec950abb49a1.png",revision:"f45c6b675dee2c9b34d8ee7d34eb8323"},{url:"/assets/static/favicon.ac8d93a.bf61008f0ef71b874a75ec950abb49a1.png",revision:"da5363345dcdbcf9406b562de6bf02e3"},{url:"/assets/static/favicon.b9532cc.bf61008f0ef71b874a75ec950abb49a1.png",revision:"334a8480426280f6975de1c825f77742"},{url:"/assets/static/favicon.ce0531f.bf61008f0ef71b874a75ec950abb49a1.png",revision:"aa5db901ad7bcd3d4b9a322992d6d14a"},{url:"/assets/static/favicon.dc0cdc5.bf61008f0ef71b874a75ec950abb49a1.png",revision:"279be98f4fc4a919a1902aff2dc34331"},{url:"/assets/static/favicon.e6b6009.bb50f1698dfbcf84ee87f384c80e7647.png",revision:"bd2ef6ef083507c03342e50694180140"},{url:"/assets/static/favicon.f22e9f3.bf61008f0ef71b874a75ec950abb49a1.png",revision:"7030533df6bc8fa1d3dc24bfce988e2a"},{url:"/assets/static/github-actions-checkin.27ec4cf.5d7dca422dbc10301e4b28618b71683f.png",revision:"0defd5d25fcc8e3a96b6bac0ca2c654f"},{url:"/assets/static/github-actions-checkin.3778461.5d7dca422dbc10301e4b28618b71683f.png",revision:"8bac66254047ac8e2c9da39e51ad2b5e"},{url:"/assets/static/github-actions-checkin.a209973.5d7dca422dbc10301e4b28618b71683f.png",revision:"8bac66254047ac8e2c9da39e51ad2b5e"},{url:"/assets/static/github-actions-checkin.a67b0b2.5d7dca422dbc10301e4b28618b71683f.png",revision:"0defd5d25fcc8e3a96b6bac0ca2c654f"},{url:"/assets/static/gridsome-artalk.27ec4cf.7111a5ea162c336715a3a8768910baf5.png",revision:"74149b980472aeec860c0e43547d9fbe"},{url:"/assets/static/gridsome-artalk.3778461.7111a5ea162c336715a3a8768910baf5.png",revision:"2e456bbf1ae720978bf0ca8b97b2ff4b"},{url:"/assets/static/gridsome-artalk.a209973.7111a5ea162c336715a3a8768910baf5.png",revision:"2e456bbf1ae720978bf0ca8b97b2ff4b"},{url:"/assets/static/gridsome-artalk.a67b0b2.7111a5ea162c336715a3a8768910baf5.png",revision:"74149b980472aeec860c0e43547d9fbe"},{url:"/assets/static/heu-autotask.82a2fbd.22a101484c9f4d4a1d03d2ac7783f0f0.png",revision:"571ce815c656d6e4227a90ba26bb2ba3"},{url:"/assets/static/heu-autotask.ae085b2.22a101484c9f4d4a1d03d2ac7783f0f0.png",revision:"e506cdf294661a797e5dc4fe596210f0"},{url:"/assets/static/heu-checkin1.82a2fbd.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"32957d9584ea096dd5e6ebb11b59d55d"},{url:"/assets/static/heu-checkin1.cbab2cf.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"6cce606e4182123ed3da2c7471eca41f"},{url:"/assets/static/heu-checkin1.eaff22a.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"2e35e2c967dd8ae72bbd6d3ad3bee786"},{url:"/assets/static/heu-checkin2.82a2fbd.a282637541e4f36d4a8e50f3a438dbec.png",revision:"a3b86c852d640badb07cf1580a54a7c0"},{url:"/assets/static/heu-checkin2.cbab2cf.a282637541e4f36d4a8e50f3a438dbec.png",revision:"acb1407dfc2bb5d3063c14d6fa2385ba"},{url:"/assets/static/heu-checkin2.eaff22a.a282637541e4f36d4a8e50f3a438dbec.png",revision:"a282637541e4f36d4a8e50f3a438dbec"},{url:"/assets/static/new-start.27ec4cf.52df37dc915451de3e056b5f7a1c980b.png",revision:"7197b4379ae81d61ff3f63dc7ce85af1"},{url:"/assets/static/new-start.3778461.52df37dc915451de3e056b5f7a1c980b.png",revision:"3d62cddca04072e155453fc60a5c2ebb"},{url:"/assets/static/new-start.a209973.52df37dc915451de3e056b5f7a1c980b.png",revision:"3d62cddca04072e155453fc60a5c2ebb"},{url:"/assets/static/new-start.a67b0b2.52df37dc915451de3e056b5f7a1c980b.png",revision:"7197b4379ae81d61ff3f63dc7ce85af1"},{url:"/assets/static/readme-update-posts.27ec4cf.f393ea57d8de7faf75fb828605c2dbee.png",revision:"e3b5734d520e757f080c661ac429221a"},{url:"/assets/static/readme-update-posts.3778461.f393ea57d8de7faf75fb828605c2dbee.png",revision:"6806cd96da506616ef9c365a66a4c02a"},{url:"/assets/static/readme-update-posts.a209973.f393ea57d8de7faf75fb828605c2dbee.png",revision:"6806cd96da506616ef9c365a66a4c02a"},{url:"/assets/static/readme-update-posts.a67b0b2.f393ea57d8de7faf75fb828605c2dbee.png",revision:"e3b5734d520e757f080c661ac429221a"},{url:"/index.html",revision:"1dafa022897dda5f1493afb1f29efeb3"},{url:"/404/index.html",revision:"fd45c08e5f6f1633ec1607a2a8803ad0"},{url:"/about/index.html",revision:"1f96deb2a94a066984a22ab9d6b34ce3"},{url:"/archives/index.html",revision:"7d434fd05868632f187bd52d09bb6c75"},{url:"/category/code/index.html",revision:"104c8a250064ee6781ba3f435bec18d0"},{url:"/category/life/index.html",revision:"a17593c539e9adbeb6d3d2ec988b4768"},{url:"/category/tech/index.html",revision:"6885008ef80f71240022e56634469e03"},{url:"/code/heu-auto-checkin-covid19/index.html",revision:"53ca099ad447125e3b905c966de18ac4"},{url:"/code/update-your-posts-in-readme/index.html",revision:"f6ec0c76070f3dc82aab7c77f3a7b283"},{url:"/code/use-self-hosted-comment-system-in-gridsome/index.html",revision:"3b15dbb78c97436a737dac243282dd18"},{url:"/friends/index.html",revision:"5d25278de0d8dc8945938a038de0eaea"},{url:"/life/daily-impermanence/index.html",revision:"0b3a8fcc1ce5bc44c3e6e14002539bb1"},{url:"/life/new-start-with-gridsome/index.html",revision:"330b32d214649fdc97b84479425d5175"},{url:"/tag/Aria2/index.html",revision:"797a972b2e5f090372a6bab7c77eec13"},{url:"/tag/Artalk/index.html",revision:"996cdee942f77aaaf47ea8a3bb94fb6d"},{url:"/tag/COVID-19/index.html",revision:"c6053a78a211fa487a5e4e80279f3f6e"},{url:"/tag/cron/index.html",revision:"d308e8361d5a20215f6d4ce8acf360ee"},{url:"/tag/FlexGet/index.html",revision:"b311958d09d90af607a587adf950ca8d"},{url:"/tag/GitHub Actions/index.html",revision:"4e3b15d03ee2d079d39d10826c2b48d6"},{url:"/tag/Gridsome/index.html",revision:"d5a8efeb93326e015cbea5c53ea2a7d4"},{url:"/tag/Markdown/index.html",revision:"9cf7bb9250b893ae81af6f2701a10f1f"},{url:"/tag/Python/index.html",revision:"fda31a59371bb44aa2366315f449485c"},{url:"/tag/RSS/index.html",revision:"00d9721fa199ed0793a810559823e3d2"},{url:"/tag/Vue.js/index.html",revision:"c2fbfcd4a252d20eabf8e63f5c1242f7"},{url:"/tag/webdrivers/index.html",revision:"eadae23d4b2ff3ba22cc95d564bb718d"},{url:"/tag/手帐/index.html",revision:"377046cddceb403afe2143b9015286d0"},{url:"/tech/auto-download-bangumi-with-aria2-rss/index.html",revision:"80b1242f3cf3b3c655bf4c0b8e2601ab"},{url:"/tech/modified-github-actions-4-heu-checkin/index.html",revision:"9f24593667f34730e7317d144052d2e3"},{url:"/watch/index.html",revision:"43c99c29bd10f09c9eb3b2af8452cc55"}],{})}));
