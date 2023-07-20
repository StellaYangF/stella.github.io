import{_ as e,o,c as i,U as a}from"./chunks/framework.e95afc2d.js";const m=JSON.parse('{"title":"cookie vs session","description":"","frontmatter":{},"headers":[],"relativePath":"back/cookie-session.md","filePath":"back/cookie-session.md"}'),s={name:"back/cookie-session.md"},l=a('<h1 id="cookie-vs-session" tabindex="-1">cookie vs session <a class="header-anchor" href="#cookie-vs-session" aria-label="Permalink to &quot;cookie vs session&quot;">​</a></h1><h2 id="缓存" tabindex="-1">缓存 <a class="header-anchor" href="#缓存" aria-label="Permalink to &quot;缓存&quot;">​</a></h2><p>在<a href="./../front/performance/index.html">前端-性能优化</a>中探讨过缓存，具体可详见该章节内容。</p><p>以下做简单回顾：</p><p>作用：</p><ul><li>减少冗余数据传输，节省带宽</li><li>减少服务器负担，大大提高网站性能</li><li>加快客户端加载网页速度</li></ul><h2 id="cookie" tabindex="-1">cookie <a class="header-anchor" href="#cookie" aria-label="Permalink to &quot;cookie&quot;">​</a></h2><p>res.cookie(name, value, [, options])</p><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><code>domain</code></li><li><code>path</code></li><li><code>httpOnly</code>: 客户端不能通过 <code>document.cookie</code>代码获取、修改。防 <code>xss</code> 攻击(jsonp)</li><li><code>maxAge</code>: Number</li><li><code>expires</code>: Date</li><li><code>secure</code>：只通过 https 协议访问 cookie</li><li><code>sameSite</code>：2020.02发布 chrome80，新增属性，防 <code>csrf</code> 攻击、用户追踪 <ul><li><code>Strict</code>：完全禁止，跨站点不发 cookie</li><li><code>Lax</code>：（默认值）</li><li><code>None</code>: 必须与 Secure 同用</li></ul></li></ul><h3 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h3><ul><li>可能被客户端篡改，使用前验证合法性</li><li>不要存储敏感数据，比如用户密码，账户余额</li><li>使用 <code>httpOnly</code> 保证安全，</li><li>尽量减少 cookie 的体积</li><li>设置正确的 domain 和 path，减少数据传输</li></ul><p>document.cookie 可以获取 cookie</p><h2 id="session" tabindex="-1">session <a class="header-anchor" href="#session" aria-label="Permalink to &quot;session&quot;">​</a></h2><ul><li>session 是另一种记录客户状态的机制，不同的是Cookie保存在客户端浏览器中，而 session 保存在服务器上</li><li>客户端浏览器访问服务器的时候，服务器把客户端信息以某种形式记录在服务器上，这就是session。客户端浏览器再次访问时只需要从该 session 中查找该客户的状态就可以了</li></ul><h3 id="二者区别" tabindex="-1">二者区别 <a class="header-anchor" href="#二者区别" aria-label="Permalink to &quot;二者区别&quot;">​</a></h3><ul><li>cookie 数据存放在客户的浏览器上，session 数据放在服务器上。</li><li>cookie 不是很安全，别人可以分析存放在本地的 cookie 并进行 COOKIE 欺骗，考虑到安全应当使用 session</li><li>session 会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能，考虑到减轻服务器性能方面，应当使用 cookie</li><li>单个 cookie 保存的数据不能超过 4K，很多浏览器都限制一个站点最多保存20个cookie</li></ul>',17),c=[l];function t(n,d,r,h,k,u){return o(),i("div",null,c)}const _=e(s,[["render",t]]);export{m as __pageData,_ as default};
