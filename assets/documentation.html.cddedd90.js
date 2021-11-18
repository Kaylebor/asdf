import{r as s,o as e,c as n,a,w as l,F as o,b as t,d as p}from"./app.689d9519.js";const r={},i=t('<h1 id="docs-site" tabindex="-1"><a class="header-anchor" href="#docs-site" aria-hidden="true">#</a> Docs &amp; Site</h1><blockquote><p>Hi, we&#39;ve recently migrated our docs and added some new pages. If you would like to help translate this page, see the &quot;Edit this page&quot; link at the bottom of the page.</p></blockquote><p>Documentation &amp; site contribution guide.</p><h2 id="initial-setup" tabindex="-1"><a class="header-anchor" href="#initial-setup" aria-hidden="true">#</a> Initial Setup</h2><p>Fork <code>asdf</code> on GitHub and/or Git clone the default branch:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># clone your fork</span></span>\n<span class="line"><span style="color:#F8F8F2;">git clone https://github.com/</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">GITHUB_USER</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">/asdf.git</span></span>\n<span class="line"><span style="color:#88846F;"># or clone asdf</span></span>\n<span class="line"><span style="color:#F8F8F2;">git clone https://github.com/asdf-vm/asdf.git</span></span>\n<span class="line"></span></code></pre></div><p>The tools for Docs site development are managed with <code>asdf</code> in the <code>docs/.tool-versions</code>. Add the plugins with:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs</span></span>\n<span class="line"></span></code></pre></div><p>Install the tool version(s) with:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf install</span></span>\n<span class="line"></span></code></pre></div>',10),c={href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"},d=p("Node.js"),u=p(": JavaScript runtime built on Chrome's V8 JavaScript engine."),h=t('<p>Install Node.js dependencies from <code>docs/package.json</code>:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">npm install</span></span>\n<span class="line"></span></code></pre></div><h2 id="development" tabindex="-1"><a class="header-anchor" href="#development" aria-hidden="true">#</a> Development</h2>',3),F={href:"https://v2.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},b=p("Vuepress (v2)"),f=p(" is the Static Site Generator (SSG) we use to build the asdf documentation site. It was chosen to replace "),m={href:"https://docsify.js.org/",target:"_blank",rel:"noopener noreferrer"},g=p("Docsify.js"),v=p(" as we would like to support an HTML only fallback when users do not have JavaScript available or enabled. This was not possible with Docsify. Other than this, the feature-set is largely the same, with the focus on writing Markdown files with minimal configuration."),y=t('<p><code>package.json</code> contains the scripts required for development:</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">File not found</span></span></code></pre><div class="highlight-lines"></div><div class="line-numbers"></div></div><p>To start the local development server:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">npm run dev</span></span>\n<span class="line"></span></code></pre></div><p>Format the code before committing:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">npm run format</span></span>\n<span class="line"></span></code></pre></div><h2 id="pull-requests-releases-conventional-commits" tabindex="-1"><a class="header-anchor" href="#pull-requests-releases-conventional-commits" aria-hidden="true">#</a> Pull Requests, Releases &amp; Conventional Commits</h2>',7),k=a("code",null,"asdf",-1),w=p(" is using an automated release pipeline which relies on Conventional Commits in PR titles. Detailed documentation found in the "),j=p("core contribution guide"),x=p("."),R=a("p",null,[p("When creating a PR for documentation changes please make the PR title with the Conventional Commit type "),a("code",null,"docs"),p(" in the format "),a("code",null,"docs: <description>"),p(".")],-1),q=a("h2",{id:"vuepress",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#vuepress","aria-hidden":"true"},"#"),p(" Vuepress")],-1),D=a("p",null,"Configuration of the site is contained within a few JavaScript files with JS Objects used to represent the config. They are:",-1),E=a("code",null,"docs/.vuepress/config.js",-1),S=p(": the root config file for the site. Read the "),T={href:"https://v2.vuepress.vuejs.org/guide/configuration.html#config-file",target:"_blank",rel:"noopener noreferrer"},B=p("Vuepress documentation"),_=p(" for it's spec."),C=a("p",null,[p("To simplify the root config, the larger JS Objects representing the "),a("em",null,"navbar"),p(" and "),a("em",null,"sidebar"),p(" configuration have been extracted and separated by their locale. See both in:")],-1),I=a("ul",null,[a("li",null,[a("code",null,"docs/.vuepress/navbar.js")]),a("li",null,[a("code",null,"docs/.vuepress/sidebar.js")])],-1),J=p("With the official documentation for these configs living in the "),L={href:"https://v2.vuepress.vuejs.org/reference/default-theme/config.html#locale-config",target:"_blank",rel:"noopener noreferrer"},M=p("Default Theme Reference"),V=p("."),A=t('<h2 id="i18n" tabindex="-1"><a class="header-anchor" href="#i18n" aria-hidden="true">#</a> I18n</h2><p>Vuepress has first-class support for internationalization. The root config <code>docs/.vuepress/config.js</code> defines the supported locales with their URL, title in the selection dropdown menu and navbar/sidebar configs references.</p><p>The navbar/sidebar configs are captured in the aforementioned config files, separated by locale and exported individually.</p><p>The markdown content for each locale must fall under a folder with the same name as the keys for <code>locales</code> in the root config. That is:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">{</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">...</span></span>\n<span class="line"><span style="color:#F8F8F2;">  themeConfig: {</span></span>\n<span class="line"><span style="color:#F8F8F2;">    locales: {</span></span>\n<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#E6DB74;">&quot;/&quot;</span><span style="color:#F8F8F2;">: {</span></span>\n<span class="line"><span style="color:#F8F8F2;">        selectLanguageName: </span><span style="color:#E6DB74;">&quot;English (US)&quot;</span><span style="color:#F8F8F2;">,</span></span>\n<span class="line"><span style="color:#F8F8F2;">        sidebar: sidebar.en,</span></span>\n<span class="line"><span style="color:#F8F8F2;">        navbar: navbar.en</span></span>\n<span class="line"><span style="color:#F8F8F2;">      },</span></span>\n<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#E6DB74;">&quot;/pt-BR/&quot;</span><span style="color:#F8F8F2;">: {</span></span>\n<span class="line"><span style="color:#F8F8F2;">        selectLanguageName: </span><span style="color:#E6DB74;">&quot;Brazilian Portuguese&quot;</span><span style="color:#F8F8F2;">,</span></span>\n<span class="line"><span style="color:#F8F8F2;">        sidebar: sidebar.pt_br,</span></span>\n<span class="line"><span style="color:#F8F8F2;">        navbar: navbar.pt_br</span></span>\n<span class="line"><span style="color:#F8F8F2;">      }</span></span>\n<span class="line"><span style="color:#F8F8F2;">    }</span></span>\n<span class="line"><span style="color:#F8F8F2;">  }</span></span>\n<span class="line"><span style="color:#F8F8F2;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><code>/pt-BR/</code> will require the same set of markdown files located under <code>docs/pt-BR/</code>, like so:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">docs</span></span>\n<span class="line"><span style="color:#F8F8F2;">├─ README.md</span></span>\n<span class="line"><span style="color:#F8F8F2;">├─ foo.md</span></span>\n<span class="line"><span style="color:#F8F8F2;">├─ nested</span></span>\n<span class="line"><span style="color:#F8F8F2;">│  └─ README.md</span></span>\n<span class="line"><span style="color:#F8F8F2;">└─ pt-BR</span></span>\n<span class="line"><span style="color:#F8F8F2;">   ├─ README.md</span></span>\n<span class="line"><span style="color:#F8F8F2;">   ├─ foo.md</span></span>\n<span class="line"><span style="color:#F8F8F2;">   └─ nested</span></span>\n<span class="line"><span style="color:#F8F8F2;">      └─ README.md</span></span>\n<span class="line"></span></code></pre></div>',7),G=p("The "),P={href:"https://v2.vuepress.vuejs.org/guide/i18n.html#site-i18n-config",target:"_blank",rel:"noopener noreferrer"},H=p("official Vuepress i18n documentation"),N=p(" goes into more detail.");r.render=function(t,p){const r=s("OutboundLink"),O=s("RouterLink");return e(),n(o,null,[i,a("ul",null,[a("li",null,[a("a",c,[d,a(r)]),u])]),h,a("p",null,[a("a",F,[b,a(r)]),f,a("a",m,[g,a(r)]),v]),y,a("p",null,[k,w,a(O,{to:"/pt-br/contribute/core.html"},{default:l((()=>[j])),_:1}),x]),R,q,D,a("ul",null,[a("li",null,[E,S,a("a",T,[B,a(r)]),_])]),C,I,a("p",null,[J,a("a",L,[M,a(r)]),V]),A,a("p",null,[G,a("a",P,[H,a(r)]),N])],64)};export default r;
