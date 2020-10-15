import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "title": "页面内容",
        "link": "docs/content.html"
    },
    'next': {
        "title": "主题",
        "link": "docs/themes.html"
    },
    'sidebar': [
        {
            "title": "介绍",
            "link": "docs/introduction.html",
            "pagePath": "docs/introduction.md"
        },
        {
            "title": "基本用法",
            "link": "docs/usage.html",
            "pagePath": "docs/usage.md"
        },
        {
            "title": "配置文件",
            "link": "docs/config.html",
            "pagePath": "docs/config.md"
        },
        {
            "title": "页面内容",
            "link": "docs/content.html",
            "pagePath": "docs/content.md"
        },
        {
            "title": "_layout.tsx",
            "link": "docs/layout.html",
            "pagePath": "docs/layout.md"
        },
        {
            "title": "主题",
            "link": "docs/themes.html",
            "pagePath": "docs/themes.md"
        },
        {
            "title": "插件",
            "link": "docs/plugins.html",
            "pagePath": "docs/plugins.md"
        },
        {
            "title": "部署",
            "link": "docs/deployment.html",
            "pagePath": "docs/deployment.md"
        },
        {
            "title": "示例网站",
            "link": "docs/demos.html",
            "pagePath": "docs/demos.md"
        },
        {
            "title": "局限性",
            "link": "docs/limitations.html",
            "pagePath": "docs/limitations.md"
        }
    ],
    config: { "root": "/", ...projectConfig, ...(_b = (_a = projectConfig.i18n) === null || _a === void 0 ? void 0 : _a.overrides) === null || _b === void 0 ? void 0 : _b['undefined'] },
    'pagePath': "docs/layout.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "docs/layout.html",
    'title': "_layout.tsx",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1><code>_layout.tsx</code></h1>\n<blockquote>\n<p>从这一章开始的内容是提供给需要深度定制的用户的，如果你只是简单使用 Pagic，那么可以直接跳到<a href="./deployment.html">部署</a>章节。</p>\n</blockquote>\n<p><code>_layout.tsx</code> 是 Pagic 的核心理念之一。</p>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF-_layouttsx">什么是 <code>_layout.tsx</code><a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF-_layouttsx">§</a></h2>\n<p><code>_layout.tsx</code> 可以理解为 Pagic 在渲染页面时的模版文件，所有页面文件（<code>md/tsx</code>）在渲染时都会以 <code>_layout.tsx</code> 为模版。</p>\n<p>我们不妨在之前的 <code>site</code> 项目中创建一个 <code>_layout.tsx</code>：</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n<span class="highlighted-line">├── _layout<span class="token punctuation">.</span>tsx</span>├── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n└── README<span class="token punctuation">.</span>md\n</code></pre><p>其中 <code>_layout.tsx</code> 的内容如下：</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">React</span><span class="token punctuation">,</span> <span class="token maybe-class-name">PagicLayout</span> <span class="token punctuation">}</span></span> <span class="token keyword">from</span> <span class="token string">\'<a class="token url-link" href="https://deno.land/x/pagic/mod.ts">https://deno.land/x/pagic/mod.ts</a>\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token maybe-class-name">Layout</span><span class="token operator">:</span> <span class="token function-variable function">PagicLayout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> title<span class="token punctuation">,</span> content <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charSet</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token punctuation">{</span>content<span class="token punctuation">}</span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Custom _layout.tsx</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token maybe-class-name">Layout</span><span class="token punctuation">;</span>\n</code></pre>\n<p>接下来我们运行：</p>\n<pre class="language-bash"><code class="language-bash">pagic build --serve\n</code></pre>\n<p>然后打开 <a href="http://127.0.0.1:8000/">http://127.0.0.1:8000/</a> ，可以看到页面中除了有标题 <code>Hello world</code> 之外，还有一个段落 <code>Custom _layout.tsx</code>，这说明此页面是用 <code>_layout.tsx</code> 作为模版渲染出来的。</p>\n<p>为什么在上一章中不需要 <code>_layout.tsx</code> 也可以构建出页面呢？</p>\n<p>那是因为 Pagic 默认会使用 default 主题中的 <code>_layout.tsx</code> 文件作为模版。当我们创建一个自己的 <code>_layout.tsx</code> 时，就会覆盖掉主题中的 <code>_layout.tsx</code> 了。</p>\n<h2 id="%E5%AD%90%E9%A1%B5%E9%9D%A2%E5%92%8C%E5%AD%90%E6%A8%A1%E7%89%88">子页面和子模版<a class="anchor" href="#%E5%AD%90%E9%A1%B5%E9%9D%A2%E5%92%8C%E5%AD%90%E6%A8%A1%E7%89%88">§</a></h2>\n<p><code>_layout.tsx</code> 的设计是符合直觉的，当我们创建子目录时，其中的页面会优先使用该目录下的 <code>_layout.tsx</code>，只有当子目录下没有 <code>_layout.tsx</code> 时才会向上级目录查找，直到找到 <code>_layout.tsx</code> 为止：</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n|── dist    # 构建结果目录\n|   |── index<span class="token punctuation">.</span>html\n|   └── foo\n|       ├── index<span class="token punctuation">.</span>html\n|       └── bar\n|           └── index<span class="token punctuation">.</span>html\n<span class="highlighted-line">├── _layout<span class="token punctuation">.</span>tsx</span>├── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n|── README<span class="token punctuation">.</span>md\n└── foo\n    ├── README<span class="token punctuation">.</span>md\n    └── bar\n<span class="highlighted-line">        ├── _layout<span class="token punctuation">.</span>tsx</span>        └── README<span class="token punctuation">.</span>md\n</code></pre><p>在上面的例子中，<code>site/foo/bar/README.md</code> 会使用同级目录下的 <code>site/foo/bar/_layout.tsx</code> 作为模版，而 <code>site/foo/README.md</code> 则会使用 <code>site/_layout.tsx</code> 作为模版。</p>\n<blockquote>\n<p>通过配置页面头信息可以跳过此规则，强制指定一个模版。</p>\n</blockquote>\n<h2 id="%E7%BB%84%E4%BB%B6%E5%8C%96">组件化<a class="anchor" href="#%E7%BB%84%E4%BB%B6%E5%8C%96">§</a></h2>\n<p>组件化是 React 的重要特性之一，我们可以通过拆分 <code>_layout.tsx</code> 为一个个子组件来复用代码。不过在 Pagic 中，由于需要支持 <code>tsx</code> 文件渲染为页面，所以我们需要对子组件做一个约定——以 <code>_</code> 开头的组件为子组件：</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n|── dist    # 构建结果目录\n|   └── hello<span class="token punctuation">.</span>html\n├── _layout<span class="token punctuation">.</span>tsx\n<span class="highlighted-line">├── _sidebar<span class="token punctuation">.</span>tsx</span>├── hello<span class="token punctuation">.</span>tsx\n└── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n</code></pre><p>在上面的例子中，<code>hello.tsx</code> 会被构建为 <code>dist/hello.html</code>，而 <code>_sidebar.tsx</code> 由于是 <code>_</code> 开头，所以不会被构建为页面。这样就可以实现对 <code>_layout.tsx</code> 的拆分，将 <code>Sidebar</code> 组件拆分到 <code>_sidebar.tsx</code> 文件中，然后在 <code>_layout.tsx</code> 中引用即可：</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">React</span><span class="token punctuation">,</span> <span class="token maybe-class-name">PagicLayout</span> <span class="token punctuation">}</span></span> <span class="token keyword">from</span> <span class="token string">\'<a class="token url-link" href="https://deno.land/x/pagic/mod.ts">https://deno.land/x/pagic/mod.ts</a>\'</span><span class="token punctuation">;</span>\n\n<span class="highlighted-line"><span class="token keyword">import</span> <span class="token imports"><span class="token maybe-class-name">Sidebar</span></span> <span class="token keyword">from</span> <span class="token string">\'./_sidebar.tsx\'</span><span class="token punctuation">;</span></span>\n<span class="token keyword">const</span> <span class="token maybe-class-name">Layout</span><span class="token operator">:</span> <span class="token function-variable function">PagicLayout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> title<span class="token punctuation">,</span> content <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charSet</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n<span class="highlighted-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sidebar</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"></span></span>      <span class="token punctuation">{</span>content<span class="token punctuation">}</span><span class="token plain-text"></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token maybe-class-name">Layout</span><span class="token punctuation">;</span>\n</code></pre><h2 id="props"><code>props</code><a class="anchor" href="#props">§</a></h2>\n<p>注意到上面的例子中我们取用了 <code>props</code> 中的 <code>title</code> 和 <code>content</code>，那么除了这两个之外 <code>props</code> 中还有哪些属性可以使用呢？</p>\n<p>请参考下面的表格：</p>\n<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>类型</th>\n<th>依赖的插件</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>title</code></td>\n<td><code>string</code></td>\n<td><code>md</code>, <code>tsx</code></td>\n<td>页面的标题，一般会放到 <code>&lt;head&gt;&lt;title&gt;</code> 中</td>\n</tr>\n<tr>\n<td><code>content</code></td>\n<td><code>string</code></td>\n<td><code>md</code>, <code>tsx</code>, <code>layout</code></td>\n<td>页面的内容，一般会放到 <code>&lt;body&gt;</code> 中</td>\n</tr>\n<tr>\n<td><code>config</code></td>\n<td><code>PagicConfig</code></td>\n<td><code>init</code></td>\n<td>Pagic <strong>运行时</strong>的配置<sup><a href="#sup-1">[1]</a></sup></td>\n</tr>\n<tr>\n<td><code>pagePath</code></td>\n<td><code>string</code></td>\n<td><code>init</code></td>\n<td>页面路径，如 <code>docs/README.md</code></td>\n</tr>\n<tr>\n<td><code>layoutPath</code></td>\n<td><code>string</code></td>\n<td><code>init</code></td>\n<td>页面的模版路径，如 <code>docs/_layout.tsx</code></td>\n</tr>\n<tr>\n<td><code>outputPath</code></td>\n<td><code>string</code></td>\n<td><code>init</code></td>\n<td>页面的输出路径，如 <code>docs/index.html</code></td>\n</tr>\n<tr>\n<td><code>sidebar</code></td>\n<td><code>ReactElement</code></td>\n<td><code>sidebar</code></td>\n<td>由 <code>sidebar</code> 插件生成的 <code>ReactElement</code></td>\n</tr>\n<tr>\n<td><code>toc</code></td>\n<td><code>ReactElement</code></td>\n<td><code>md</code></td>\n<td>由 <code>md</code> 插件生成的 <code>ReactElement</code></td>\n</tr>\n<tr>\n<td><code>prev</code></td>\n<td><code>PagePropsSidebar[0]</code></td>\n<td><code>prev_next</code></td>\n<td>上一页的详细信息</td>\n</tr>\n<tr>\n<td><code>next</code></td>\n<td><code>PagePropsSidebar[0]</code></td>\n<td><code>prev_next</code></td>\n<td>下一页的详细信息</td>\n</tr>\n<tr>\n<td><code>script</code></td>\n<td><code>ReactElement</code></td>\n<td><code>script</code></td>\n<td>由 <code>script</code> 插件生成的 <code>ReactElement</code></td>\n</tr>\n<tr>\n<td><code>loading</code></td>\n<td><code>boolean</code></td>\n<td><code>script</code></td>\n<td>页面是否在加载中</td>\n</tr>\n<tr>\n<td><code>ga</code></td>\n<td><code>ReactElement</code></td>\n<td><code>ga</code></td>\n<td>由 <code>ga</code> 插件生成的 <code>ReactElement</code></td>\n</tr>\n<tr>\n<td><code>gitalk</code></td>\n<td><code>ReactElement</code></td>\n<td><code>gitalk</code></td>\n<td>由 <code>gitalk</code> 插件生成的 <code>ReactElement</code></td>\n</tr>\n<tr>\n<td>其他</td>\n<td><code>any</code></td>\n<td>第三方插件</td>\n<td>第三方插件也可能扩充 <code>props</code></td>\n</tr>\n</tbody>\n</table>\n<h2 id="%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90">静态资源<a class="anchor" href="#%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90">§</a></h2>\n<p>除了以上提到的特殊文件之外的其他文件均会被视为静态资源，直接复制到 <code>dist</code> 目录下。</p>\n<p>现将所有文件名约定汇总如下：</p>\n<table>\n<thead>\n<tr>\n<th>文件名</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>以 <code>.</code> 开头</td>\n<td>隐藏文件，会被忽略</td>\n</tr>\n<tr>\n<td><code>pagic.config.ts</code> 或 <code>pagic.config.tsx</code></td>\n<td>配置文件</td>\n</tr>\n<tr>\n<td><code>_layout.tsx</code></td>\n<td>模版文件</td>\n</tr>\n<tr>\n<td>以 <code>_</code> 开头的 <code>tsx</code> 文件</td>\n<td>子组件</td>\n</tr>\n<tr>\n<td><code>md</code> 或 <code>tsx</code> 后缀的文件</td>\n<td>页面文件</td>\n</tr>\n<tr>\n<td>其他文件</td>\n<td>静态资源，会被直接复制到 <code>dist</code> 目录下</td>\n</tr>\n</tbody>\n</table>\n<h2 id="%E5%BC%95%E7%94%A8%E4%B8%8E%E6%B3%A8%E8%A7%A3">引用与注解<a class="anchor" href="#%E5%BC%95%E7%94%A8%E4%B8%8E%E6%B3%A8%E8%A7%A3">§</a></h2>\n<ol>\n<li><span id="sup-1"></span>Pagic <strong>运行时</strong>的配置与 <code>pagic.config.ts</code> 中的配置会有少许差异。</li>\n</ol>'
        } }),
    'contentTitle': React.createElement("h1", { key: "0" },
        React.createElement("code", null, "_layout.tsx")),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<blockquote>\n<p>从这一章开始的内容是提供给需要深度定制的用户的，如果你只是简单使用 Pagic，那么可以直接跳到<a href="./deployment.html">部署</a>章节。</p>\n</blockquote>\n<p><code>_layout.tsx</code> 是 Pagic 的核心理念之一。</p>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF-_layouttsx">什么是 <code>_layout.tsx</code><a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF-_layouttsx">§</a></h2>\n<p><code>_layout.tsx</code> 可以理解为 Pagic 在渲染页面时的模版文件，所有页面文件（<code>md/tsx</code>）在渲染时都会以 <code>_layout.tsx</code> 为模版。</p>\n<p>我们不妨在之前的 <code>site</code> 项目中创建一个 <code>_layout.tsx</code>：</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n<span class="highlighted-line">├── _layout<span class="token punctuation">.</span>tsx</span>├── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n└── README<span class="token punctuation">.</span>md\n</code></pre><p>其中 <code>_layout.tsx</code> 的内容如下：</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">React</span><span class="token punctuation">,</span> <span class="token maybe-class-name">PagicLayout</span> <span class="token punctuation">}</span></span> <span class="token keyword">from</span> <span class="token string">\'<a class="token url-link" href="https://deno.land/x/pagic/mod.ts">https://deno.land/x/pagic/mod.ts</a>\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token maybe-class-name">Layout</span><span class="token operator">:</span> <span class="token function-variable function">PagicLayout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> title<span class="token punctuation">,</span> content <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charSet</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token punctuation">{</span>content<span class="token punctuation">}</span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Custom _layout.tsx</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token maybe-class-name">Layout</span><span class="token punctuation">;</span>\n</code></pre>\n<p>接下来我们运行：</p>\n<pre class="language-bash"><code class="language-bash">pagic build --serve\n</code></pre>\n<p>然后打开 <a href="http://127.0.0.1:8000/">http://127.0.0.1:8000/</a> ，可以看到页面中除了有标题 <code>Hello world</code> 之外，还有一个段落 <code>Custom _layout.tsx</code>，这说明此页面是用 <code>_layout.tsx</code> 作为模版渲染出来的。</p>\n<p>为什么在上一章中不需要 <code>_layout.tsx</code> 也可以构建出页面呢？</p>\n<p>那是因为 Pagic 默认会使用 default 主题中的 <code>_layout.tsx</code> 文件作为模版。当我们创建一个自己的 <code>_layout.tsx</code> 时，就会覆盖掉主题中的 <code>_layout.tsx</code> 了。</p>\n<h2 id="%E5%AD%90%E9%A1%B5%E9%9D%A2%E5%92%8C%E5%AD%90%E6%A8%A1%E7%89%88">子页面和子模版<a class="anchor" href="#%E5%AD%90%E9%A1%B5%E9%9D%A2%E5%92%8C%E5%AD%90%E6%A8%A1%E7%89%88">§</a></h2>\n<p><code>_layout.tsx</code> 的设计是符合直觉的，当我们创建子目录时，其中的页面会优先使用该目录下的 <code>_layout.tsx</code>，只有当子目录下没有 <code>_layout.tsx</code> 时才会向上级目录查找，直到找到 <code>_layout.tsx</code> 为止：</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n|── dist    # 构建结果目录\n|   |── index<span class="token punctuation">.</span>html\n|   └── foo\n|       ├── index<span class="token punctuation">.</span>html\n|       └── bar\n|           └── index<span class="token punctuation">.</span>html\n<span class="highlighted-line">├── _layout<span class="token punctuation">.</span>tsx</span>├── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n|── README<span class="token punctuation">.</span>md\n└── foo\n    ├── README<span class="token punctuation">.</span>md\n    └── bar\n<span class="highlighted-line">        ├── _layout<span class="token punctuation">.</span>tsx</span>        └── README<span class="token punctuation">.</span>md\n</code></pre><p>在上面的例子中，<code>site/foo/bar/README.md</code> 会使用同级目录下的 <code>site/foo/bar/_layout.tsx</code> 作为模版，而 <code>site/foo/README.md</code> 则会使用 <code>site/_layout.tsx</code> 作为模版。</p>\n<blockquote>\n<p>通过配置页面头信息可以跳过此规则，强制指定一个模版。</p>\n</blockquote>\n<h2 id="%E7%BB%84%E4%BB%B6%E5%8C%96">组件化<a class="anchor" href="#%E7%BB%84%E4%BB%B6%E5%8C%96">§</a></h2>\n<p>组件化是 React 的重要特性之一，我们可以通过拆分 <code>_layout.tsx</code> 为一个个子组件来复用代码。不过在 Pagic 中，由于需要支持 <code>tsx</code> 文件渲染为页面，所以我们需要对子组件做一个约定——以 <code>_</code> 开头的组件为子组件：</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n|── dist    # 构建结果目录\n|   └── hello<span class="token punctuation">.</span>html\n├── _layout<span class="token punctuation">.</span>tsx\n<span class="highlighted-line">├── _sidebar<span class="token punctuation">.</span>tsx</span>├── hello<span class="token punctuation">.</span>tsx\n└── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n</code></pre><p>在上面的例子中，<code>hello.tsx</code> 会被构建为 <code>dist/hello.html</code>，而 <code>_sidebar.tsx</code> 由于是 <code>_</code> 开头，所以不会被构建为页面。这样就可以实现对 <code>_layout.tsx</code> 的拆分，将 <code>Sidebar</code> 组件拆分到 <code>_sidebar.tsx</code> 文件中，然后在 <code>_layout.tsx</code> 中引用即可：</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">React</span><span class="token punctuation">,</span> <span class="token maybe-class-name">PagicLayout</span> <span class="token punctuation">}</span></span> <span class="token keyword">from</span> <span class="token string">\'<a class="token url-link" href="https://deno.land/x/pagic/mod.ts">https://deno.land/x/pagic/mod.ts</a>\'</span><span class="token punctuation">;</span>\n\n<span class="highlighted-line"><span class="token keyword">import</span> <span class="token imports"><span class="token maybe-class-name">Sidebar</span></span> <span class="token keyword">from</span> <span class="token string">\'./_sidebar.tsx\'</span><span class="token punctuation">;</span></span>\n<span class="token keyword">const</span> <span class="token maybe-class-name">Layout</span><span class="token operator">:</span> <span class="token function-variable function">PagicLayout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> title<span class="token punctuation">,</span> content <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charSet</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n<span class="highlighted-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sidebar</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"></span></span>      <span class="token punctuation">{</span>content<span class="token punctuation">}</span><span class="token plain-text"></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span><span class="token plain-text"></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token maybe-class-name">Layout</span><span class="token punctuation">;</span>\n</code></pre><h2 id="props"><code>props</code><a class="anchor" href="#props">§</a></h2>\n<p>注意到上面的例子中我们取用了 <code>props</code> 中的 <code>title</code> 和 <code>content</code>，那么除了这两个之外 <code>props</code> 中还有哪些属性可以使用呢？</p>\n<p>请参考下面的表格：</p>\n<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>类型</th>\n<th>依赖的插件</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>title</code></td>\n<td><code>string</code></td>\n<td><code>md</code>, <code>tsx</code></td>\n<td>页面的标题，一般会放到 <code>&lt;head&gt;&lt;title&gt;</code> 中</td>\n</tr>\n<tr>\n<td><code>content</code></td>\n<td><code>string</code></td>\n<td><code>md</code>, <code>tsx</code>, <code>layout</code></td>\n<td>页面的内容，一般会放到 <code>&lt;body&gt;</code> 中</td>\n</tr>\n<tr>\n<td><code>config</code></td>\n<td><code>PagicConfig</code></td>\n<td><code>init</code></td>\n<td>Pagic <strong>运行时</strong>的配置<sup><a href="#sup-1">[1]</a></sup></td>\n</tr>\n<tr>\n<td><code>pagePath</code></td>\n<td><code>string</code></td>\n<td><code>init</code></td>\n<td>页面路径，如 <code>docs/README.md</code></td>\n</tr>\n<tr>\n<td><code>layoutPath</code></td>\n<td><code>string</code></td>\n<td><code>init</code></td>\n<td>页面的模版路径，如 <code>docs/_layout.tsx</code></td>\n</tr>\n<tr>\n<td><code>outputPath</code></td>\n<td><code>string</code></td>\n<td><code>init</code></td>\n<td>页面的输出路径，如 <code>docs/index.html</code></td>\n</tr>\n<tr>\n<td><code>sidebar</code></td>\n<td><code>ReactElement</code></td>\n<td><code>sidebar</code></td>\n<td>由 <code>sidebar</code> 插件生成的 <code>ReactElement</code></td>\n</tr>\n<tr>\n<td><code>toc</code></td>\n<td><code>ReactElement</code></td>\n<td><code>md</code></td>\n<td>由 <code>md</code> 插件生成的 <code>ReactElement</code></td>\n</tr>\n<tr>\n<td><code>prev</code></td>\n<td><code>PagePropsSidebar[0]</code></td>\n<td><code>prev_next</code></td>\n<td>上一页的详细信息</td>\n</tr>\n<tr>\n<td><code>next</code></td>\n<td><code>PagePropsSidebar[0]</code></td>\n<td><code>prev_next</code></td>\n<td>下一页的详细信息</td>\n</tr>\n<tr>\n<td><code>script</code></td>\n<td><code>ReactElement</code></td>\n<td><code>script</code></td>\n<td>由 <code>script</code> 插件生成的 <code>ReactElement</code></td>\n</tr>\n<tr>\n<td><code>loading</code></td>\n<td><code>boolean</code></td>\n<td><code>script</code></td>\n<td>页面是否在加载中</td>\n</tr>\n<tr>\n<td><code>ga</code></td>\n<td><code>ReactElement</code></td>\n<td><code>ga</code></td>\n<td>由 <code>ga</code> 插件生成的 <code>ReactElement</code></td>\n</tr>\n<tr>\n<td><code>gitalk</code></td>\n<td><code>ReactElement</code></td>\n<td><code>gitalk</code></td>\n<td>由 <code>gitalk</code> 插件生成的 <code>ReactElement</code></td>\n</tr>\n<tr>\n<td>其他</td>\n<td><code>any</code></td>\n<td>第三方插件</td>\n<td>第三方插件也可能扩充 <code>props</code></td>\n</tr>\n</tbody>\n</table>\n<h2 id="%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90">静态资源<a class="anchor" href="#%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90">§</a></h2>\n<p>除了以上提到的特殊文件之外的其他文件均会被视为静态资源，直接复制到 <code>dist</code> 目录下。</p>\n<p>现将所有文件名约定汇总如下：</p>\n<table>\n<thead>\n<tr>\n<th>文件名</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>以 <code>.</code> 开头</td>\n<td>隐藏文件，会被忽略</td>\n</tr>\n<tr>\n<td><code>pagic.config.ts</code> 或 <code>pagic.config.tsx</code></td>\n<td>配置文件</td>\n</tr>\n<tr>\n<td><code>_layout.tsx</code></td>\n<td>模版文件</td>\n</tr>\n<tr>\n<td>以 <code>_</code> 开头的 <code>tsx</code> 文件</td>\n<td>子组件</td>\n</tr>\n<tr>\n<td><code>md</code> 或 <code>tsx</code> 后缀的文件</td>\n<td>页面文件</td>\n</tr>\n<tr>\n<td>其他文件</td>\n<td>静态资源，会被直接复制到 <code>dist</code> 目录下</td>\n</tr>\n</tbody>\n</table>\n<h2 id="%E5%BC%95%E7%94%A8%E4%B8%8E%E6%B3%A8%E8%A7%A3">引用与注解<a class="anchor" href="#%E5%BC%95%E7%94%A8%E4%B8%8E%E6%B3%A8%E8%A7%A3">§</a></h2>\n<ol>\n<li><span id="sup-1"></span>Pagic <strong>运行时</strong>的配置与 <code>pagic.config.ts</code> 中的配置会有少许差异。</li>\n</ol>'
        } }),
    'head': undefined,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF-_layouttsx">什么是 _layout.tsx</a></li><li><a href="#%E5%AD%90%E9%A1%B5%E9%9D%A2%E5%92%8C%E5%AD%90%E6%A8%A1%E7%89%88">子页面和子模版</a></li><li><a href="#%E7%BB%84%E4%BB%B6%E5%8C%96">组件化</a></li><li><a href="#props">props</a></li><li><a href="#%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90">静态资源</a></li><li><a href="#%E5%BC%95%E7%94%A8%E4%B8%8E%E6%B3%A8%E8%A7%A3">引用与注解</a></li></ol></nav>'
        } }),
    'date': "2020-10-15T08:42:21.600Z",
    'updated': null,
    'author': undefined,
    'contributors': [],
    'blog': {
        "isPost": false,
        "isPosts": false,
        "posts": [
            {
                "pagePath": "blog/design_pagic_config_ts.md",
                "title": "设计 pagic.config.ts",
                "link": "blog/design_pagic_config_ts.html",
                "date": "2020-07-12T00:00:00.000Z",
                "updated": null
            }
        ]
    }
};
