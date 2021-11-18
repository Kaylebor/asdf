import{b as e}from"./app.689d9519.js";const o={},a=e('<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1><blockquote><p>Hi, we&#39;ve recently migrated our docs and added some new pages. If you would like to help translate this page, see the &quot;Edit this page&quot; link at the bottom of the page.</p></blockquote><p>Configuration of <code>asdf</code> encompasses both the sharable <code>.tool-versions</code> files as well as user specific customisations with <code>.asdfrc</code> and Environment Variables.</p><h2 id="tool-versions" tabindex="-1"><a class="header-anchor" href="#tool-versions" aria-hidden="true">#</a> .tool-versions</h2><p>Sempre que o arquivo <code>.tool-versions</code> estiver presente em um diretório, as versões da ferramenta que ele declara serão usadas nesse diretório e em seus subdiretórios.</p><p>?&gt; Configurações globais podem ser modificadas no arquivo <code>$HOME/.tool-versions</code></p><p>O arquivo <code>.tool-versions</code> se parece assim:</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">ruby 2.5.3\nnodejs 10.15.0\n</span></span></code></pre></div><p>As versões podem estar no seguinte formato:</p><ul><li><code>10.15.0</code> - uma versão real. Os plugins que suportam o download de binários farão o download de binários.</li><li><code>ref:v1.0.2-a</code> ou <code>ref:39cb398vb39</code> - <em>tag/commit/branch</em> para download pelo github e compilação um path costumizado e compi</li><li><code>path:/src/elixir</code> - um path para uma versão compilada e personalizada de uma ferramenta pronta para usar. Para uso por linguagens de desenvolvimento e outros.</li><li><code>system</code> - faz com que asdf passe para a versão da ferramenta no sistema que não é gerenciada por asdf .</li></ul><p>Várias versões podem ser definidas, separando-as com um espaço. Por exemplo, para usar Python 3.7.2, e também Python 2.7.15, use a linha abaixo em seu arquivo <code>.tool-versions</code>.</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">python 3.7.2 2.7.15 system\n</span></span></code></pre></div><p>Para instalar todas as ferramentas definidas em <code>.tool-versions</code>, execute o camando <code>asdf install</code> sem argumentos no mesmo diretório de <code>.tool-versions</code>.</p><p>Para isntalar somente uma ferramenta definida em <code>.tool-versions</code>, execute o camando <code>asdf install</code> sem argumentos no mesmo diretório de <code>.tool-versions</code>. A ferramenta será instalada na versão especificada no arquivo <code>.tool-versions</code>.</p><p>Edite o arquivo diretamente no diretório ou use <code>asdf local</code> (ou <code>asdf global</code>) para atualiza-lo.</p><h2 id="home-asdfrc" tabindex="-1"><a class="header-anchor" href="#home-asdfrc" aria-hidden="true">#</a> $HOME/.asdfrc</h2><p>Adicione um arquivo <code>.asdfrc</code> ao seu diretório home e asdf usará as configurações especificadas no arquivo. O arquivo deve ser formatado assim:</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">legacy_version_file = yes\n</span></span></code></pre></div><p><strong>Configurações</strong></p><ul><li><p><code>legacy_version_file</code> - por padrão é <code>no</code>. Se definido como <code>yes</code>, fará com que os plug-ins que suportam esse recurso leiam os arquivos de versão usados por outros gerenciadores de versão (por exemplo, <code>.ruby-version</code> no caso do <code>rbenv</code> do Ruby).</p></li><li><p><code>use_release_candidates</code> - por padrão é <code>no</code>. Se definido como <code>yes</code>, fará com que o comando <code>asdf update</code> atualize para o mais recente em vez da versão semântica mais recente.</p></li><li><p><code>always_keep_download</code> - por padrão é <code>no</code>. Se definido como <code>yes</code>, fará com que o <code>asdf install</code> sempre mantenha o código-fonte ou binário baixado. Se definido como <code>no</code>, o código fonte ou binário baixado por <code>asdf install</code> será excluído após a instalação bem sucedida.</p></li><li><p><code>plugin_repository_last_check_duration</code> - por padrão é <code>60</code> min (1 hrs). Ele define a duração da última verificação do repositório de plugins asdf. Quando o comando <code>asdf plugin add &lt;nome&gt;</code>, <code>asdf plugin list all</code> for executado, ele verificará a duração da última atualização para atualizar o repositório. Se definido como <code>0</code>, ele atualizará o repositório de plugins asdf todas as vezes.</p></li></ul><h2 id="variaveis-de-ambiente" tabindex="-1"><a class="header-anchor" href="#variaveis-de-ambiente" aria-hidden="true">#</a> Variáveis de ambiente</h2><ul><li><code>ASDF_CONFIG_FILE</code> - O padrão é <code>~ / .asdfrc</code> conforme descrito acima. Pode ser definido para qualquer local.</li><li><code>ASDF_DEFAULT_TOOL_VERSIONS_FILENAME</code> - O nome do arquivo que armazena os nomes e versões das ferramentas. O padrão é <code>.tool-versions</code>. Pode ser qualquer nome de arquivo válido. Normalmente você não deve substituir o valor padrão, a menos que deseja que o asdf ignore os arquivos <code>.tool-versions</code>.</li><li><code>ASDF_DIR</code> - O padrão é <code>~/.asdf</code> - Localização dos arquivos <code>asdf</code>. Se você instalar <code>asdf</code> em algum outro diretório, defina-o para esse diretório. Por exemplo, se você estiver instalando através do AUR, você deve definir isso para <code>/ opt / asdf-vm</code>.</li><li><code>ASDF_DATA_DIR</code> - O padrão é <code>~/.asdf</code> - Local onde <code>asdf</code> instala plugins, correções e instalações. Pode ser definido para qualquer local antes de fornecer <code>asdf.sh</code> ou <code>asdf.fish</code> mencionado na seção acima. Para Elvish, isso pode ser definido acima de <code>use asdf</code>.</li></ul>',22);o.render=function(e,o){return a};export default o;
