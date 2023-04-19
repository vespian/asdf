import{_ as t,r as l,o as i,c as r,a as e,b as s,d as a,e as o}from"./app.deebd827.js";const c={},p=o(`<h1 id="asdf" tabindex="-1"><a class="header-anchor" href="#asdf" aria-hidden="true">#</a> asdf</h1><p><code>asdf</code> core contribution guide.</p><h2 id="initial-setup" tabindex="-1"><a class="header-anchor" href="#initial-setup" aria-hidden="true">#</a> Initial Setup</h2><p>Fork <code>asdf</code> on GitHub and/or Git clone the default branch:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># clone your fork</span></span>
<span class="line"><span style="color:#F8F8F2;">git clone https://github.com/</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">GITHUB_USER</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">/asdf.git</span></span>
<span class="line"><span style="color:#88846F;"># or clone asdf</span></span>
<span class="line"><span style="color:#F8F8F2;">git clone https://github.com/asdf-vm/asdf.git</span></span>
<span class="line"></span></code></pre></div><p>The tools for core development are in this repo&#39;s <code>.tool-versions</code>. If you wish to manage with <code>asdf</code> itself, add the plugins:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add bats https://github.com/timgluz/asdf-bats.git</span></span>
<span class="line"><span style="color:#F8F8F2;">asdf plugin add shellcheck https://github.com/luizm/asdf-shellcheck.git</span></span>
<span class="line"><span style="color:#F8F8F2;">asdf plugin add shfmt https://github.com/luizm/asdf-shfmt.git</span></span>
<span class="line"></span></code></pre></div><p>Install the versions to develop <code>asdf</code> with:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf install</span></span>
<span class="line"></span></code></pre></div><p>It <em>may</em> be useful to not use <code>asdf</code> to manage the tools during development on your local machine as you may need to break functionality which would then break your dev tooling. Here&#39;s the raw list of tools:</p>`,10),d={href:"https://github.com/bats-core/bats-core",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/koalaman/shellcheck",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/mvdan/sh",target:"_blank",rel:"noopener noreferrer"},m=o(`<h2 id="development" tabindex="-1"><a class="header-anchor" href="#development" aria-hidden="true">#</a> Development</h2><p>If you want to try out your changes without making change to your installed <code>asdf</code>, you can set the <code>$ASDF_DIR</code> variable to the path where you cloned the repository, and temporarily prepend the <code>bin</code> and <code>shims</code> directory of the directory to your path.</p><p>It is best to format, lint and test your code locally before you commit or push to the remote. Use the following scripts/commands:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># Shellcheck</span></span>
<span class="line"><span style="color:#F8F8F2;">./scripts/shellcheck.bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># Format</span></span>
<span class="line"><span style="color:#F8F8F2;">./scripts/shfmt.bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># Test: all tests</span></span>
<span class="line"><span style="color:#F8F8F2;">bats test/</span></span>
<span class="line"><span style="color:#88846F;"># Test: for specific command</span></span>
<span class="line"><span style="color:#F8F8F2;">bats test/list_commands.bash</span></span>
<span class="line"></span></code></pre></div>`,4),g={class:"custom-container tip"},f=e("p",{class:"custom-container-title"},"TIP",-1),b=e("strong",null,"Add tests!",-1),F=e("strong",null,"required",-1),y={href:"https://bats-core.readthedocs.io/en/stable/index.html",target:"_blank",rel:"noopener noreferrer"},_=e("h3",{id:"gitignore",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gitignore","aria-hidden":"true"},"#"),s(" Gitignore")],-1),v=e("code",null,".gitignore",-1),k=e("code",null,"asdf-vm/asdf",-1),w=e("code",null,".gitignore",-1),x={href:"http://stratus3d.com/blog/2018/06/03/stop-excluding-editor-temp-files-in-gitignore/",target:"_blank",rel:"noopener noreferrer"},q=o(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">/installs</span></span>
<span class="line"><span style="color:#F8F8F2;">/downloads</span></span>
<span class="line"><span style="color:#F8F8F2;">/plugins</span></span>
<span class="line"><span style="color:#F8F8F2;">/shims</span></span>
<span class="line"><span style="color:#F8F8F2;">repository</span></span>
<span class="line"><span style="color:#F8F8F2;">.vagrant</span></span>
<span class="line"><span style="color:#F8F8F2;">keyrings</span></span>
<span class="line"><span style="color:#F8F8F2;">/tmp</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-blame-ignore-revs" tabindex="-1"><a class="header-anchor" href="#git-blame-ignore-revs" aria-hidden="true">#</a> <code>.git-blame-ignore-revs</code></h3>`,2),T=e("code",null,"asdf",-1),C=e("code",null,".git-blame-ignore-revs",-1),I={href:"https://git-scm.com/docs/git-blame",target:"_blank",rel:"noopener noreferrer"},S=o(`<p>Use the file with <code>git blame</code> like so:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">git blame --ignore-revs-file .git-blame-ignore-revs ./test/install_command.bats</span></span>
<span class="line"></span></code></pre></div><p>Optionally, configure to use the file on every invocation of <code>blame</code> without manually supplying it:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">git config blame.ignoreRevsFile .git-blame-ignore-revs</span></span>
<span class="line"></span></code></pre></div>`,4),B={href:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",target:"_blank",rel:"noopener noreferrer"},E=e("code",null,".vscode/settings.json",-1),D=o(`<div class="language-json" data-ext="json"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;">&quot;gitlens.advanced.blame.customArguments&quot;</span><span style="color:#F8F8F2;">: [</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#CFCFC2;">&quot;--ignore-revs-file&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#CFCFC2;">&quot;.git-blame-ignore-revs&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">  ]</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="bats-testing" tabindex="-1"><a class="header-anchor" href="#bats-testing" aria-hidden="true">#</a> Bats Testing</h2><p>Execute tests locally with:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">./scripts/test.bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Before writing tests <strong>please read</strong>:</p>`,5),P=e("li",null,[s("existing tests in "),e("code",null,"test/")],-1),R={href:"https://bats-core.readthedocs.io/en/stable/index.html",target:"_blank",rel:"noopener noreferrer"},A=e("li",null,[s("existing Bats settings used in "),e("code",null,"scripts/test.bash")],-1),V=o(`<h3 id="bats-tips" tabindex="-1"><a class="header-anchor" href="#bats-tips" aria-hidden="true">#</a> Bats Tips</h3><p>Bats debugging can be difficult at times. Using the TAP output with <code>-t</code> flag will enable you to print outputs with the special file descriptor <code>&gt;&amp;3</code> during test execution, simplifying debugging. As an example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># test/some_tests.bats</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">printf</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;%s\\n&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;Will not be printed during bats test/some_tests.bats&quot;</span></span>
<span class="line"><span style="color:#66D9EF;">printf</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;%s\\n&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;Will be printed during bats -t test/some_tests.bats&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&amp;3</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),G={href:"https://bats-core.readthedocs.io/en/stable/writing-tests.html#printing-to-the-terminal",target:"_blank",rel:"noopener noreferrer"},j=e("h2",{id:"pull-requests-releases-conventional-commits",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pull-requests-releases-conventional-commits","aria-hidden":"true"},"#"),s(" Pull Requests, Releases & Conventional Commits")],-1),N=e("code",null,"asdf",-1),U={href:"https://github.com/googleapis/release-please",target:"_blank",rel:"noopener noreferrer"},H={href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://github.com/asdf-vm/asdf/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},L={href:"https://www.conventionalcommits.org/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/amannn/action-semantic-pull-request",target:"_blank",rel:"noopener noreferrer"},W=e("code",null,"amannn/action-semantic-pull-request",-1),X=o(`<p>Conventional Commit follows this format:</p><div class="language-text" data-ext="text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">&lt;type&gt;[optional scope][optional !]: &lt;description&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;!-- examples --&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">fix: some fix</span></span>
<span class="line"><span style="color:#F8F8F2;">feat: a new feature</span></span>
<span class="line"><span style="color:#F8F8F2;">docs: some documentation update</span></span>
<span class="line"><span style="color:#F8F8F2;">docs(website): some change for the website</span></span>
<span class="line"><span style="color:#F8F8F2;">feat!: feature with breaking change</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre></div><p>The full list of <code>&lt;types&gt;</code> are: <code>feat</code>, <code>fix</code>, <code>docs</code>, <code>style</code>, <code>refactor</code>, <code>perf</code>, <code>test</code>, <code>build</code>, <code>ci</code>, <code>chore</code>, <code>revert</code>.</p><ul><li><code>!</code>: indicates a breaking change</li><li><code>fix</code>: will create a new SemVer <code>patch</code></li><li><code>feat</code>: will create a new SemVer <code>minor</code></li><li><code>&lt;type&gt;!</code>: will create a new SemVer <code>major</code></li></ul><p>The Pull Request Title must follow this format.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Use Conventional Commit message format for your Pull Request Title.</p></div><h2 id="docker-images" tabindex="-1"><a class="header-anchor" href="#docker-images" aria-hidden="true">#</a> Docker Images</h2>`,7),Y={href:"https://github.com/vic/asdf-alpine",target:"_blank",rel:"noopener noreferrer"},$={href:"https://github.com/vic/asdf-ubuntu",target:"_blank",rel:"noopener noreferrer"};function J(K,M){const n=l("ExternalLinkIcon");return i(),r("div",null,[p,e("ul",null,[e("li",null,[e("a",d,[s("bats-core"),a(n)]),s(": Bash Automated Testing System, for unit testing Bash or POSIX compliant scripts.")]),e("li",null,[e("a",h,[s("shellcheck"),a(n)]),s(": Static analysis tool for shell scripts.")]),e("li",null,[e("a",u,[s("shfmt"),a(n)]),s(": A shell parser, formatter, and interpreter with bash support; includes shfmt")])]),m,e("div",g,[f,e("p",null,[b,s(" - Tests are "),F,s(" for new features and speed up review of bug fixes. Please cover new code paths before you create a Pull Request. See "),e("a",y,[s("bats-core documentation"),a(n)])])]),_,e("p",null,[s("The following is the "),v,s(" file in the "),k,s(" repository. We ignore project-specific files. Files specific to your OS, tools or workflows should be ignored in your global "),w,s(" configuration, "),e("a",x,[s("see here"),a(n)]),s(" for more details.")]),q,e("p",null,[T,s(" uses a "),C,s(" to reduce noise when running a blame. See the "),e("a",I,[s("git blame documentation"),a(n)]),s(" for more information.")]),S,e("p",null,[s("It is possible to configure IDEs to use this file. For example, when using VSCode (with "),e("a",B,[s("GitLens"),a(n)]),s("), write the following to "),E,s(":")]),D,e("ul",null,[P,e("li",null,[e("a",R,[s("bats-core documentation"),a(n)])]),A]),V,e("p",null,[s("This is further documented in bats-core "),e("a",G,[s("Printing to the Terminal"),a(n)]),s(".")]),j,e("p",null,[N,s(" is using an automated release tool called "),e("a",U,[s("Release Please"),a(n)]),s(" to automatically bump the "),e("a",H,[s("SemVer"),a(n)]),s(" version and generate the "),e("a",z,[s("Changelog"),a(n)]),s(". This information is determined by reading the commit history since the last release.")]),e("p",null,[e("a",L,[s("Conventional Commit messages"),a(n)]),s(" define the format of the Pull Request Title which becomes the commit message format on the default branch. This is enforced with GitHub Action "),e("a",O,[W,a(n)]),s(".")]),X,e("p",null,[s("The "),e("a",Y,[s("asdf-alpine"),a(n)]),s(" and "),e("a",$,[s("asdf-ubuntu"),a(n)]),s(" projects are an ongoing effort to provide Dockerized images of some asdf tools. You can use these docker images as base for your development servers, or for running your production apps.")])])}const Z=t(c,[["render",J],["__file","core.html.vue"]]);export{Z as default};
