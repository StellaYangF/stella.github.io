import{_ as s,o as n,c as a,U as l}from"./chunks/framework.e95afc2d.js";const C=JSON.parse('{"title":"DOM 事件","description":"","frontmatter":{},"headers":[],"relativePath":"front/overview/index.md","filePath":"front/overview/index.md"}'),p={name:"front/overview/index.md"},o=l(`<h1 id="dom-事件" tabindex="-1">DOM 事件 <a class="header-anchor" href="#dom-事件" aria-label="Permalink to &quot;DOM 事件&quot;">​</a></h1><h2 id="事件捕获-事件冒泡" tabindex="-1">事件捕获 &amp; 事件冒泡 <a class="header-anchor" href="#事件捕获-事件冒泡" aria-label="Permalink to &quot;事件捕获 &amp; 事件冒泡&quot;">​</a></h2><p><strong>顺序</strong>：先捕获，后冒泡</p><ul><li><strong>捕获</strong>：【又外向内】某父级元素及其内部元素，绑定同类型事件如：click 时，会先触发该父级元素捕获事件，在触发当前点击元素的事件绑定</li><li><strong>冒泡</strong>：【由内向外】，运用于事件委托，常见为列表事件，取代为每个列表 (li) 元素绑定事件为列表父元素 (ul) 绑定</li></ul><p><strong>开启事件捕获</strong>：element.addEventListener(eventName, callback, true)，第三个参数传入 <code>true</code>，即可开启捕获。</p><h2 id="domcontentloaded-vs-load" tabindex="-1">DOMContentLoaded VS load <a class="header-anchor" href="#domcontentloaded-vs-load" aria-label="Permalink to &quot;DOMContentLoaded VS load&quot;">​</a></h2><ul><li><code>当初始的 HTML</code> 文档被完全加载和解析完成之后，<code>DOMContentLoaded</code> 事件被触发，而无需等待<strong>样式表</strong>、<strong>图像</strong>和<strong>子框架</strong>的完全加载。</li><li><code>load</code> 应该仅用于检测一个完全加载的页面。</li><li>这里有一个常见的错误，就是在本应使用 <code>DOMContentLoaded</code> 会更加合适的情况下，却选择使用 <code>load</code>，所以要谨慎。</li></ul><blockquote><p>注意：<code>DOMContentLoaded</code> 事件必须等待其所属 script 之前的样式表加载解析完成才会触发。 顺序加载原因。</p></blockquote><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">css.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  document.addEventListener(&#39;DOMContentLoaded&#39;,function()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3 seconds passed</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>上面代码，如果将 link 置于 script 之后，就会立即打印。</p><blockquote><p>Note: <strong>同步</strong> JavaScript 会暂停 DOM 的解析。 GUI 渲染线程与 JS 引擎线程互斥</p></blockquote><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  document.addEventListener(&quot;DOMContentLoaded&quot;, function(event) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">DOM fully loaded and parsed</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  for(var i=0; i&lt;1000000000; i++)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 这个同步脚本将延迟DOM的解析。</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 所以DOMContentLoaded事件稍后将启动。</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>参考: <a href="https://developer.mozilla.org/zh-CN/docs/Web/Events/DOMContentLoaded" target="_blank" rel="noreferrer">MDN</a></p><h2 id="小程序" tabindex="-1">小程序 <a class="header-anchor" href="#小程序" aria-label="Permalink to &quot;小程序&quot;">​</a></h2><h3 id="生命周期函数" tabindex="-1">生命周期函数 <a class="header-anchor" href="#生命周期函数" aria-label="Permalink to &quot;生命周期函数&quot;">​</a></h3><ul><li>onLoad</li><li>onShow</li><li>onReady</li><li>onHide</li><li>onShow</li><li>onUnload</li></ul><h2 id="去抖-节流" tabindex="-1">去抖 节流 <a class="header-anchor" href="#去抖-节流" aria-label="Permalink to &quot;去抖 节流&quot;">​</a></h2><p>去抖</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">debounce</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">fn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">delay</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">timer</span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">clearTimeout</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">delay</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>节流</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">throttle</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">fn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">delay</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">flag</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">flag</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">flag</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setInterval</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">flag</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">delay</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 实现二：</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">throttle</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">fn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">delay</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">timeoutId</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">timeoutId</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">timeoutId</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">timeoutId</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">delay</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="缓存" tabindex="-1">缓存 <a class="header-anchor" href="#缓存" aria-label="Permalink to &quot;缓存&quot;">​</a></h2><p>作用：</p><ul><li>减少冗余数据传输，节省带宽</li><li>减少服务器负担，大大提高网站性能</li><li>加快客户端加载网页速度</li></ul><h2 id="cookie-session" tabindex="-1">cookie &amp; session <a class="header-anchor" href="#cookie-session" aria-label="Permalink to &quot;cookie &amp; session&quot;">​</a></h2><h3 id="cookie" tabindex="-1">cookie <a class="header-anchor" href="#cookie" aria-label="Permalink to &quot;cookie&quot;">​</a></h3><p><a href="http://www.zhufengpeixun.cn/2020/html/22.cookie.html" target="_blank" rel="noreferrer">参考链接</a></p><p>res.cookie(name, value, [, options])</p><p>参数：</p><ul><li>domain</li><li>path</li><li>httpOnly</li><li>maxAge: Number</li><li>expires: Date</li><li>secure：只通过 https 协议访问</li></ul><p>注意：</p><ul><li>可能被客户端篡改，使用前验证合法性</li><li>不要存储敏感数据，比如用户密码，账户余额</li><li>使用 httpOnly 保证安全</li><li>尽量减少 cookie 的体积</li><li>设置正确的 domain 和 path，减少数据传输</li></ul><p>document.cookie 可以获取 cookie</p><h3 id="session" tabindex="-1">session <a class="header-anchor" href="#session" aria-label="Permalink to &quot;session&quot;">​</a></h3><p><a href="http://www.zhufengpeixun.cn/2020/html/23.session.html" target="_blank" rel="noreferrer">参考链接</a></p><p>what:</p><ul><li>session是另一种记录客户状态的机制，不同的是Cookie保存在客户端浏览器中，而session保存在服务器上</li><li>客户端浏览器访问服务器的时候，服务器把客户端信息以某种形式记录在服务器上，这就是session。客户端浏览器再次访问时只需要从该Session中查找该客户的状态就可以了</li></ul><p>区别：</p><ul><li>cookie数据存放在客户的浏览器上，session数据放在服务器上。</li><li>cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗 考虑到安全应当使用session</li><li>session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能 考虑到减轻服务器性能方面,应当使用COOKIE</li><li>单个 cookie 保存的数据不能超过 4K，很多浏览器都限制一个站点最多保存20个 cookie</li></ul><h2 id="执行上下文" tabindex="-1">执行上下文 <a class="header-anchor" href="#执行上下文" aria-label="Permalink to &quot;执行上下文&quot;">​</a></h2><p>函数执行时，会创建一个执行环境，即执行上下文（execution context），执行上下文创建一个 Variable Object 变量对象，存储基础类型数据和引用类型数据的在堆中存储的地址</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ExecutionContest </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">VO</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="多个执行上下文" tabindex="-1">多个执行上下文 <a class="header-anchor" href="#多个执行上下文" aria-label="Permalink to &quot;多个执行上下文&quot;">​</a></h3><p>JS 代码在执行的时候，会进入一个执行上下文，可理解为当前代码运行环境</p><h3 id="分类" tabindex="-1">分类 <a class="header-anchor" href="#分类" aria-label="Permalink to &quot;分类&quot;">​</a></h3><ul><li>全局执行上下文：浏览器创建，window</li><li>函数执行上下文环境</li></ul><h3 id="执行栈" tabindex="-1">执行栈 <a class="header-anchor" href="#执行栈" aria-label="Permalink to &quot;执行栈&quot;">​</a></h3><ul><li>多个执行上下文，JS 引擎有栈来管理</li><li>LIFO 后进先出</li><li>栈底永远是全局上下文</li><li>新开启一个函数执行时，会省</li></ul><h3 id="执行上下文生命周期" tabindex="-1">执行上下文生命周期 <a class="header-anchor" href="#执行上下文生命周期" aria-label="Permalink to &quot;执行上下文生命周期&quot;">​</a></h3><p>两个阶段：</p><ul><li>创建 <ul><li>创建 VO</li><li>创建 scopeChain</li><li>确定 this 指向</li></ul></li><li>执行 <ul><li>变量赋值</li><li>函数赋值</li><li>执行</li></ul></li></ul><h3 id="激活对象" tabindex="-1">激活对象 <a class="header-anchor" href="#激活对象" aria-label="Permalink to &quot;激活对象&quot;">​</a></h3><p>变量对象会保存：</p><ul><li>变量声明（var）</li><li>函数参数（arguments）</li><li>函数定义（function） <ul><li>表达式 let xx = function(){}</li><li>声明 function xx(){} 优先级更高</li></ul></li></ul><h4 id="vo" tabindex="-1">VO <a class="header-anchor" href="#vo" aria-label="Permalink to &quot;VO&quot;">​</a></h4><p>VO：Activation Object</p><p>在函数的调用栈中，如果当前执行上下文处于函数调用栈的顶端，则意味着当前上下文处于激活状态，此时变量对象称为活动对象(AO,Activation Object) VO=&gt;AO 活动变量包含变量对象所有的属性，并有包含 this 指针</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">one</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">m</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">two</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">two</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">one</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//执行阶段 VO=&gt;AO</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> VO </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> AO </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">m</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">two</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">two</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> oneEC</span><span style="color:#89DDFF;">={</span></span>
<span class="line"><span style="color:#A6ACCD;">    VO</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">this</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">scopeChain</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">[VO</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">globalVO]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="作用域" tabindex="-1">作用域 <a class="header-anchor" href="#作用域" aria-label="Permalink to &quot;作用域&quot;">​</a></h2><p>JS 中，作用域是用来规定变量访问范围的规则</p><h3 id="作用域链" tabindex="-1">作用域链 <a class="header-anchor" href="#作用域链" aria-label="Permalink to &quot;作用域链&quot;">​</a></h3><p>作用域链是由当前执行环境与上层执行环境的一系列变量对象组成的，它保证了当前执行环境对符合访问权限的变量和函数的有序访问。</p><p>区分：</p><ul><li>在函数创建时 确定</li><li>this 是在当前执行上下文在执行栈顶时，确定</li></ul><h2 id="new-原理" tabindex="-1">new 原理 <a class="header-anchor" href="#new-原理" aria-label="Permalink to &quot;new 原理&quot;">​</a></h2><p>new调用时，自动执行的四步操作:</p><ul><li>创建(或者说构造)一个全新的对象</li><li>这个对象会被执行[[原型]]链接</li><li>这个新对象会绑定到函数调用的this</li><li>如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">mockNew</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">className</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ..args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#F07178;">(</span><span style="color:#FFCB6B;">className</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">className</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="http-协议" tabindex="-1">HTTP 协议 <a class="header-anchor" href="#http-协议" aria-label="Permalink to &quot;HTTP 协议&quot;">​</a></h2><p>基于 TCP/IP 协议的应用协议</p><p>分类：</p><ul><li>HTTP/0.9</li><li>HTTP/1.0</li><li>HTTP/1.1</li><li>HTTP/2</li></ul><h3 id="http-0-9" tabindex="-1">HTTP/0.9 <a class="header-anchor" href="#http-0-9" aria-label="Permalink to &quot;HTTP/0.9&quot;">​</a></h3><p>1991年，只能请求网页文档</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">GET </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="http-1-0" tabindex="-1">HTTP/1.0 <a class="header-anchor" href="#http-1-0" aria-label="Permalink to &quot;HTTP/1.0&quot;">​</a></h3><p>1996年</p><p>特新：</p><ul><li>任何格式的内容都可以发送，图片，视频等</li><li><code>GET</code> 命令，还引入了 <code>POST</code> 命令和 <code>HEAD</code> 命令，丰富了浏览器与服务器的互动手段。</li><li>HTTP 请求和回应的格式也变了。除了数据部分，每次通信都必须包括头信息（HTTP header），用来描述一些元数据。</li><li>状态码（status code）、多字符集支持、多部分发送（multi-part type）、权限（authorization）、缓存（cache）、内容编码（content encoding）等。</li></ul><p>字段：</p><ul><li>Content-Type: <ul><li>multipart/form-data 表单</li><li>text/plain</li><li>text/css</li><li>text/html</li><li></li></ul></li><li>Content-Encoding: <ul><li>gzip</li><li>compress</li><li>deflate</li><li>identify</li></ul></li></ul><p>缺点：</p><ul><li>每个 TCP 链接只能发一个请求，请求其他数据，需重连</li><li>TCP 链接成本高，三次握手，slow start</li><li>非标准字段： <ul><li>Connection: keep-alive</li></ul></li></ul><h3 id="http-1-1" tabindex="-1">HTTP/1.1 <a class="header-anchor" href="#http-1-1" aria-label="Permalink to &quot;HTTP/1.1&quot;">​</a></h3><p>特性：</p><ul><li>持久连接（persistent connection），无需声明 Connection: keep-alive <ul><li>客户端最后一个请求，发送Connection: close，明确要求服务器关闭 TCP 链接</li></ul></li><li>管线化 (pipeline)，同时发多个请求，顺序返回 <ul><li>对头堵塞 (Head-of-line blocking)</li></ul></li><li>Content-Length 区分是哪个回应</li><li>Transfer-Encoding: chunked 分块传输编码 buffer =&gt; 流</li><li>新增了许多动词方法：<code>PUT</code>、<code>PATCH</code>、<code>HEAD</code>、 <code>OPTIONS</code>、<code>DELETE</code>。</li><li>Host 指定服务器域名</li></ul><h3 id="http-2" tabindex="-1">HTTP/2 <a class="header-anchor" href="#http-2" aria-label="Permalink to &quot;HTTP/2&quot;">​</a></h3><p>特性：</p><ul><li>HTTP/1.1 头信息肯定是文本（ASCII编码），数据体可以是文本，也可以是二进制</li><li>HTTP/2 则是一个彻底的二进制协议，头信息和数据体都是二进制，并且统称为&quot;帧&quot;（frame）：头信息帧和数据帧</li><li>多工（multiplexing），不按顺序返回，避免 对头堵塞</li><li>数据流</li><li>头信息压缩 <ul><li>头信息使用gzip或compress压缩后再发送</li><li>客户端和服务器同时维护一张头信息表，所有字段都会存入这个表，生成一个索引号，以后就不发送同样字段了，只发送索引号，这样就提高速度了。</li></ul></li><li>服务器推送 server push <ul><li>服务器可以预期到客户端请求网页后，很可能会再请求静态资源，所以就主动把这些静态资源随着网页一起发给客户端了。</li></ul></li></ul><h2 id="tcp-协议" tabindex="-1">TCP 协议 <a class="header-anchor" href="#tcp-协议" aria-label="Permalink to &quot;TCP 协议&quot;">​</a></h2><p>职责：</p><ul><li>客户端发送请求，将 HTTP 请求报文分割成报文段，传给 IP 协议</li><li>服务端接收请求，将收到的报文段，重组请求报文</li></ul><p>建立、断开工作流：</p><ul><li>C 发送 SYN</li><li>S 相应 SYN/ACK</li><li>C 发送 ACK</li><li>请求 &lt;=&gt; 相应</li><li>S FIN</li><li>C ACK</li><li>C FIN</li><li>S ACK</li></ul><h2 id="websocket" tabindex="-1">WebSocket <a class="header-anchor" href="#websocket" aria-label="Permalink to &quot;WebSocket&quot;">​</a></h2><p><a href="http://www.ruanyifeng.com/blog/2017/05/websocket.html" target="_blank" rel="noreferrer">参考</a></p><p>对比 HTTP 有个缺陷：通信只能由客户端发起</p><p>用法:</p><ul><li>ws.onopen</li><li>ws.onmessage</li><li>ws.send</li><li>ws.onerror</li><li>ws.bufferedAmount</li><li>wx.onclose</li><li>ws.readyState <ul><li>CONNECTING 0 正在连接</li><li>ONPEN 1 连接成功，可通信</li><li>CLOSING 2 正在关闭</li><li>CLOSED 3 已关闭 or 打开连接失败</li></ul></li></ul><p>加密：wss://域名:80/443</p><p>bi-directional messages</p><h2 id="网络断开连接" tabindex="-1">网络断开连接 <a class="header-anchor" href="#网络断开连接" aria-label="Permalink to &quot;网络断开连接&quot;">​</a></h2><p>检测 DNS 解析 修复</p><ul><li>打开网络和共享中心</li><li>更改适配器设置</li><li>本地连接 <ul><li>右键</li><li>诊断</li><li>修复</li></ul></li></ul>`,104),e=[o];function t(r,c,i,F,y,D){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};