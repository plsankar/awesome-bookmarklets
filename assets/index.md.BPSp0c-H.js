import{_ as s,c as i,o as a,a2 as t}from"./chunks/framework.cwjBv7Qe.js";const g=JSON.parse('{"title":"Awesome Bookmarklets","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),e={name:"index.md"},n=t('<h1 id="awesome-bookmarklets" tabindex="-1">Awesome Bookmarklets <a class="header-anchor" href="#awesome-bookmarklets" aria-label="Permalink to &quot;Awesome Bookmarklets&quot;">​</a></h1><p>Awesome Bookmarklets, a curated collection of powerful and handy bookmarklets to enhance your browsing experience. Bookmarklets are small JavaScript programs that can be stored as bookmarks in your web browser, providing quick and easy access to useful functionality without the need for extensions or add-ons.</p><h2 id="domain" tabindex="-1">Domain <a class="header-anchor" href="#domain" aria-label="Permalink to &quot;Domain&quot;">​</a></h2><h3 id="find-whois" tabindex="-1">Find Whois <a class="header-anchor" href="#find-whois" aria-label="Permalink to &quot;Find Whois&quot;">​</a></h3><p>Easily find the WHOIS information of the current website you&#39;re visiting with a single click.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">javascript</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){window.location.href</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`https://www.whois.com/whois/${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hostname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})();</span></span></code></pre></div><h3 id="similarweb" tabindex="-1">SimilarWeb <a class="header-anchor" href="#similarweb" aria-label="Permalink to &quot;SimilarWeb&quot;">​</a></h3><p>Quickly access SimilarWeb statistics for the current website to analyze its traffic and performance.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">javascript</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){window.location.href</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`https://www.similarweb.com/website/${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hostname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})();</span></span></code></pre></div><h2 id="web-development" tabindex="-1">Web Development <a class="header-anchor" href="#web-development" aria-label="Permalink to &quot;Web Development&quot;">​</a></h2><h3 id="google-fonts-select-all-styles" tabindex="-1">Google Fonts Select All Styles <a class="header-anchor" href="#google-fonts-select-all-styles" aria-label="Permalink to &quot;Google Fonts Select All Styles&quot;">​</a></h3><p>Quickly select all font styles on Google Fonts for easy downloading or comparison.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">javascript</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelectorAll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.selection-toggle-button&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())})();</span></span></code></pre></div><h3 id="scroll-100vh" tabindex="-1">Scroll 100Vh <a class="header-anchor" href="#scroll-100vh" aria-label="Permalink to &quot;Scroll 100Vh&quot;">​</a></h3><p>Scroll down by 100% of the viewport height, making it easier to navigate through long pages.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">javascript</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scrollTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, window.innerHeight </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.documentElement.scrollTop)})();</span></span></code></pre></div><h3 id="view-formatted-json-in-browser" tabindex="-1">View Formatted JSON In Browser <a class="header-anchor" href="#view-formatted-json-in-browser" aria-label="Permalink to &quot;View Formatted JSON In Browser&quot;">​</a></h3><p>Automatically format JSON content in the browser for better readability and debugging.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">javascript</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> element</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pre&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(element.innerText); element.innerHTML</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);})();</span></span></code></pre></div>',19),h=[n];function l(k,p,o,r,d,E){return a(),i("div",null,h)}const y=s(e,[["render",l]]);export{g as __pageData,y as default};
