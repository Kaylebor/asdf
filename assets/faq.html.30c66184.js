import{r as e,o as a,c as o,a as r,F as n,d as s,b as d}from"./app.689d9519.js";const i={},t=r("h1",{id:"perguntas-frequentes",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#perguntas-frequentes","aria-hidden":"true"},"#"),s(" Perguntas frequentes")],-1),c=r("p",null,[s("Aqui estão algumas perguntas comuns sobre "),r("code",null,"asdf"),s(".")],-1),u=r("h2",{id:"suporte-wsl1",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#suporte-wsl1","aria-hidden":"true"},"#"),s(" Suporte WSL1?")],-1),l=s("WSL1 ("),p={href:"https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux",target:"_blank",rel:"noopener noreferrer"},h=s("Windows Subsystem for Linux"),m=s(" 1) não é oficialmente suportado. Alguns aspectos do "),f=r("code",null,"asdf",-1),g=s(" podem não funcionar corretamente. Não temos a intenção de adicionar suporte oficial para WSL1."),b=r("h2",{id:"suporte-wsl2",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#suporte-wsl2","aria-hidden":"true"},"#"),s(" Suporte WSL2?")],-1),S=s("WSL2 ("),x={href:"https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux#WSL_2",target:"_blank",rel:"noopener noreferrer"},w=s("Subsistema Windows para Linux"),k=s(" 2) deve funcionar usando as instruções de configuração e dependência para a distribuição WSL escolhida."),q=d('<p>É importante ressaltar que o WSL2 <em>apenas</em> deve funcionar corretamente quando o diretório de trabalho atual é uma unidade Unix e não uma unidade Windows vinculada.</p><p>Pretendemos executar o conjunto de testes no WSL2 quando o suporte ao host runner estiver disponível nas Ações do GitHub; atualmente, esse não parece ser o caso.</p><h2 id="exectable-recem-instalado-nao-esta-funcionando" tabindex="-1"><a class="header-anchor" href="#exectable-recem-instalado-nao-esta-funcionando" aria-hidden="true">#</a> Exectable recém-instalado não está funcionando?</h2><blockquote><p>Acabei de instalar o <code>npm -g yarn</code>, mas não consigo executar o <code>yarn</code>. O que da?</p></blockquote>',4),v=r("code",null,"asdf",-1),L=s(" usa "),W={href:"https://en.wikipedia.org/wiki/Shim_(computing)",target:"_blank",rel:"noopener noreferrer"},_=s("shims"),y=s(" para gerenciar executáveis. Aqueles instalados por plug-ins têm shims criados automaticamente, enquanto a instalação de executáveis ​​por meio de uma ferramenta gerenciada "),A=r("code",null,"asdf",-1),O=s(" exigirá que você notifique o"),P=r("code",null," asdf",-1),E=s(" sobre a necessidade de criar shims. Neste caso, para criar um shim para "),j={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},T=s("Yarn"),z=s(". Veja a documentação do comando ["),D=r("code",null,"asdf reshim",-1),H=s("](/ manage / core.md # reshim)."),I=d('<h2 id="shell-nao-detecta-shims-recem-instalados" tabindex="-1"><a class="header-anchor" href="#shell-nao-detecta-shims-recem-instalados" aria-hidden="true">#</a> Shell não detecta shims recém-instalados?</h2><p>Se <code>asdf reshim</code> não está resolvendo seu problema, então é mais provável devido ao sourcing de<code> asdf.sh</code> ou <code>asdf.fish</code> <em>não</em> estar no ** BOTTOM ** de seu arquivo de configuração Shell (<code>.bash_profile</code>, <code>.zshrc</code>, <code> config.fish</code>, etc). Ele precisa ser fornecido <strong>DEPOIS</strong> de você definir seu <code>$PATH</code> e <strong>DEPOIS</strong> de ter fornecido seu framework (oh-meu-zsh etc), se houver.</p>',2);i.render=function(s,d){const i=e("OutboundLink");return a(),o(n,null,[t,c,u,r("p",null,[l,r("a",p,[h,r(i)]),m,f,g]),b,r("p",null,[S,r("a",x,[w,r(i)]),k]),q,r("p",null,[v,L,r("a",W,[_,r(i)]),y,A,O,P,E,r("a",j,[T,r(i)]),z,D,H]),I],64)};export default i;
