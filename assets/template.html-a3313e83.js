import{_ as n,W as o,X as a,$ as e,a0 as t,Z as s,a1 as c,D as r}from"./framework-741228ed.js";const p={},i=e("h3",{id:"模板对象",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#模板对象","aria-hidden":"true"},"#"),t(" 模板对象")],-1),l=e("code",null,"浏览器打印",-1),u=e("code",null,"直接打印/绕过浏览器弹窗打印",-1),m={href:"https://gitee.com/CcSimple/electron-hiprint",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"“打印设计”",-1),k=e("code",null,"“打印预览”",-1),h=e("code",null,"“导出PDF”",-1),f=c(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 新建模板 参数见下方表格</span>
<span class="token keyword">let</span> hiprintTemplate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">hiprint<span class="token punctuation">.</span>PrintTemplate</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 将模板设计到指定容器中</span>
<span class="token comment">// &#39;#hiprint-printTemplate&#39; ==&gt; jQuery(&#39;#hiprint-printTemplate&#39;) ==&gt; $(&#39;#hiprint-printTemplate&#39;)</span>
hiprintTemplate<span class="token punctuation">.</span><span class="token function">design</span><span class="token punctuation">(</span><span class="token string">&quot;#hiprint-printTemplate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 打印数据,仅 “打印预览/浏览器打印/直接打印/导出PDF 时才会处理。</span>
<span class="token comment">// 其中 “text” 是一个元素的 “字段名(field)”</span>
<span class="token keyword">let</span> printData <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;这是打印时显示的文本&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 打印预览 --&gt; 返回实际打印的 html 内容</span>
hiprintTemplate<span class="token punctuation">.</span><span class="token function">getHtml</span><span class="token punctuation">(</span>printData<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 浏览器打印 --&gt; 需要用户 手动 点击打印按钮 !!! “无法监听“ 用户是否点了打印</span>
hiprintTemplate<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>printData<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 直接打印 --&gt; 有回调是否将“打印任务” “发生成功” 给打印机</span>
hiprintTemplate<span class="token punctuation">.</span><span class="token function">print2</span><span class="token punctuation">(</span>printData<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">printer</span><span class="token operator">:</span> <span class="token string">&quot;打印机名称&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;打印任务名称&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 导出PDF</span>
hiprintTemplate<span class="token punctuation">.</span><span class="token function">toPdf</span><span class="token punctuation">(</span>printData<span class="token punctuation">,</span> <span class="token string">&quot;pdf名称&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模板参数" tabindex="-1"><a class="header-anchor" href="#模板参数" aria-hidden="true">#</a> 模板参数</h3><table><thead><tr><th>名称</th><th>类型</th><th>说明</th><th>备注</th></tr></thead><tbody><tr><td>template</td><td><code>json</code></td><td>模板 json 数据</td><td></td></tr><tr><td>settingContainer</td><td><code>string</code></td><td>设置项对应的 html 容器</td><td>如: <code>&lt;div id=&quot;hiprint-printTemplate&quot;/&gt;</code></td></tr><tr><td>paginationContainer</td><td><code>string</code></td><td>多面板容器(需要在页面添加对应 div )</td><td>如: <code>&lt;div class=&quot;hiprint-printPagination&quot;/&gt;</code></td></tr><tr><td>fields</td><td><code>array</code></td><td>fields 存在 元素字段则显示为下拉框显示 <br> fields 不存在 元素字段则为输入框显示</td><td><code>此处设置为全局设置元素字段数据源，优先级低于 元素类型设置数据源</code></td></tr><tr><td>onImageChooseClick</td><td><code>(target)=&gt;{}</code> )</td><td>图片地址选择回调</td><td><code>target.refresh(url,options)</code><br> <code>target.getValue()</code></td></tr><tr><td>fontList</td><td><code>array</code></td><td>自定义下列选择的 字体列表</td><td><code>hiprintTemplate.setFontList([])</code><br>或元素中设置<br><code>options.fontList: []</code></td></tr><tr><td>dataMode</td><td><code>number</code></td><td>onDataChanged 返回 json 格式 1:getJson 其他：getJsonTid 默认 1</td><td></td></tr><tr><td>onDataChanged</td><td><code>(type, json)=&gt;{}</code></td><td>模板发生改变时回调, 有些修改可能没有回调</td><td>新增、移动、删除、修改(参数调整)、大小、旋转等等</td></tr><tr><td>onUpdateError</td><td><code>(e)=&gt;{}</code></td><td>hiprintTemplate.update(json) 更新失败时回调</td><td>撤销重做使用的就是 update</td></tr></tbody></table><h3 id="模板常用-api" tabindex="-1"><a class="header-anchor" href="#模板常用-api" aria-hidden="true">#</a> 模板常用 Api</h3><table><thead><tr><th>API</th><th>参数</th><th>说明</th><th>返回值</th><th>备注</th></tr></thead><tbody><tr><td>getJson</td><td><code>无</code></td><td>返回 <mark>非配置版</mark> 模板 json</td><td><code>json</code></td><td>参数较完整</td></tr><tr><td>getJsonTid</td><td><code>无</code></td><td>返回 <mark>配置版</mark> <code>(把一些参数存在 provider 中,所以需要先 init 对应 provider)</code> 模板 json</td><td><code>json</code></td><td>参数较少</td></tr><tr><td>clear</td><td><code>无</code></td><td>清空模板</td><td><code>无</code></td><td></td></tr><tr><td>rotatePaper</td><td><code>无</code></td><td>旋转纸张 -&gt; <code>宽 =&gt; 高;高 =&gt; 宽</code></td><td><code>无</code></td><td></td></tr><tr><td>getOrient</td><td><code>无</code></td><td>获取纸张方向</td><td><code>1</code>--纵向 <br> <code>2</code>--横向</td><td></td></tr><tr><td>setPaper</td><td><code>width,height</code></td><td>设置模板纸张大小<br><code>setPaper(210,297)</code><br> 内置纸张大小 <mark>只有 A1-A8 和 B1-B8</mark><br><code>setPaper(&#39;A4&#39;)</code></td><td></td><td></td></tr><tr><td>zoom</td><td><code>scaleValue,save</code></td><td>缩放设计纸张<br><code>zoom(1.2)</code> <br> 缩放并保存(<mark>打印时也会缩放</mark>)<br><code>zoom(1.2,true)</code></td><td></td><td></td></tr><tr><td>design</td><td><code>string</code></td><td>将模板渲染到指定容器中进行拖拽设计 <br> <code>design(&quot;#hiprint-printTemplate&quot;)</code></td><td><code>无</code></td><td><mark>调用之前需要能够获取到对应 DOM 容器</mark></td></tr><tr><td>update</td><td><code>json</code></td><td>根据 json 模板更新 <br> <code>update(json)</code></td><td><code>无</code></td><td><mark>可能更新失败</mark>可查看控制台 log</td></tr><tr><td>setElsAlign</td><td><code>string</code></td><td>设置多选元素 左对齐 <br> <code>setElsAlign(&#39;left&#39;)</code></td><td><code>无</code></td><td><code>left/vertical/right/top/horizontal/bottom/distributeHor/distributeVer</code></td></tr><tr><td>setElsSpace</td><td><code>number,isHor</code></td><td>设置多选元素 垂直间距 10 <br> <code>setElsSpace(10)</code> <br> 水平间距 10 <br> <code>setElsSpace(10,true)</code></td><td><code>无</code></td><td></td></tr><tr><td>updateOption</td><td><code>key,value</code></td><td>设置多选元素的 字体大小 12 <br> <code>updateOption(&#39;fontSize&#39;,12)</code> <br> 字体加粗 <br> <code>updateOption(&#39;fontWeight&#39;, &#39;bolder&#39;);</code></td><td><code>无</code></td><td>支持的参数在控制台输入 <code>window.HIPRINT_CONFIG</code> 查看 <br> 如: <code>window.HIPRINT_CONFIG.text.tabs[0].options</code></td></tr><tr><td>getHtml</td><td><code>data,options,callback</code></td><td>获取打印 html <br> <code>getHtml({})</code> <br> 批量获取打印 html <br> <code>getHtml([{},{}])</code> <br> 定义打印左上偏移量 <br> <code>getHtml(data,{leftOffset:-1,topOffset:-1 })</code><mark>将覆盖面板偏移设置</mark> <br></td><td><code>html</code></td><td><code>paperNumberToggleInEven</code><br><br><code>leftOffset</code><br><br><code>topOffset</code></td></tr><tr><td>print</td><td><code>data,options</code></td><td>浏览器打印<br> <code>print({})</code><br>批量打印 <br> <code>print([{},{},{},{}])</code><br> 定义打印左上偏移量 <br> <code>print({},{leftOffset:-1,topOffset:-1 })</code><mark>将覆盖面板偏移设置</mark> <br> 浏览器打印回调 <br> <code>print({},{},{callback:()=&gt;{console.log(&#39;浏览器打印窗口已打开&#39;)}})</code></td><td><code>无</code></td><td><code>paperNumberToggleInEven</code><br><br><code>leftOffset</code><br><br><code>topOffset</code></td></tr><tr><td>print2</td><td><code>data,options</code></td><td>浏览器打印<br> <code>print2({})</code><br>批量打印 <br> <code>print2([{},{},{},{}])</code><br> 定义打印左上偏移量 <br> <code>print2({},{leftOffset:-1,topOffset:-1 })</code><mark>将覆盖面板偏移设置</mark> <br></td><td><code>无</code></td><td><code>paperNumberToggleInEven</code><br><br><code>leftOffset</code><br><br><code>topOffset</code></td></tr><tr><td>toPdf</td><td><code>data,fileName,options</code></td><td>导出 pdf <br> <code>toPdf({},&quot;测试导出&quot;)</code><br>导出参数<mark>scale 越大 pdf 越清晰，文件越大 性能越差 默认 2</mark><br><code>toPdf({},&quot;测试导出&quot;,{scale:4})</code><br> 定义打印左上偏移量 <br> <code>print({},{leftOffset:-1,topOffset:-1 })</code><mark>将覆盖面板偏移设置</mark> <br></td><td><code>$.Deferred()</code></td><td><code>scale</code><br><br><code>isDownload</code></td></tr><tr><td>getPrinterList</td><td><code>无</code></td><td>返回 连接 <mark>打印客户端</mark> 时获取到的打印机列表</td><td><code>array</code></td><td>刷新获取打印机列表<br><mark>这是异步的,需要已连接打印客户端</mark> <br> <code>hiprint.refreshPrinterList((list) =&gt; {})</code></td></tr><tr><td>setFields</td><td><code>array</code></td><td>设置字段列表 <br><code>setFields([{field:&#39;name&#39;,text:&#39;名称&#39;}])</code></td><td><code>无</code></td><td><mark>此处设置为全局设置元素字段数据源，优先级低于 元素类型设置数据源</mark></td></tr><tr><td>setFontList</td><td><code>array</code></td><td>设置可选字体列表 <br><code>setFontList([{value:&#39;SourceHanSansCN-Normal&#39;,title:&#39;思源黑体&#39;}])</code></td><td><code>无</code></td><td><mark>需要本机已安装该字体</mark></td></tr></tbody></table>`,5);function g(v,_){const d=r("ExternalLinkIcon");return o(),a("div",null,[i,e("p",null,[t("模板对象核心对象。创建它的实例，以实现"),l,t("，"),u,t("("),e("a",m,[t("直接打印机客户端"),s(d)]),t(")，"),b,t("，"),k,t("和"),h,t("的功能")]),f])}const y=n(p,[["render",g],["__file","template.html.vue"]]);export{y as default};
