import{_ as t,o as l,c as e,U as i}from"./chunks/framework.e95afc2d.js";const u=JSON.parse('{"title":"TCP 协议","description":"","frontmatter":{},"headers":[],"relativePath":"back/tcp.md","filePath":"back/tcp.md"}'),a={name:"back/tcp.md"},c=i('<h1 id="tcp-协议" tabindex="-1">TCP 协议 <a class="header-anchor" href="#tcp-协议" aria-label="Permalink to &quot;TCP 协议&quot;">​</a></h1><p>职责：</p><ul><li>客户端发送请求，将 HTTP 请求报文分割成报文段，传给 IP 协议</li><li>服务端接收请求，将收到的报文段，重组请求报文</li></ul><p>建立、断开工作流：</p><ul><li>C 发送 SYN</li><li>S 相应 SYN/ACK</li><li>C 发送 ACK</li><li>请求 &lt;=&gt; 相应</li><li>S FIN</li><li>C ACK</li><li>C FIN</li><li>S ACK</li></ul>',5),_=[c];function o(r,s,n,p,d,C){return l(),e("div",null,_)}const T=t(a,[["render",o]]);export{u as __pageData,T as default};
