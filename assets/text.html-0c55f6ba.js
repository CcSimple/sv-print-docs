import{_ as t,W as n,X as a,a1 as s}from"./framework-e97450c6.js";const e={},o=s(`<h3 id="文本元素" tabindex="-1"><a class="header-anchor" href="#文本元素" aria-hidden="true">#</a> 文本元素</h3><div class="custom-container tip"><p class="custom-container-title">温馨提示</p><p>虽然这是 <code>文本</code> 元素，但是可通过 <mark>textType</mark> 配置显示 <mark>条形码</mark> 或 <mark>二维码</mark>。</p></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 面板中 添加一个文本</span>
panel<span class="token punctuation">.</span><span class="token function">addPrintText</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;手动添加的text&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 面板中 添加一个条形码</span>
panel<span class="token punctuation">.</span><span class="token function">addPrintText</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">textType</span><span class="token operator">:</span> <span class="token string">&quot;barcode&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 面板中 添加一个二维码</span>
panel<span class="token punctuation">.</span><span class="token function">addPrintText</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">textType</span><span class="token operator">:</span> <span class="token string">&quot;qrcode&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="printelementtype" tabindex="-1"><a class="header-anchor" href="#printelementtype" aria-hidden="true">#</a> printElementType</h3><div class="custom-container info"><p class="custom-container-title">温馨提示</p><p><mark>printElementType</mark> 是设计 provider 时的重要参数。比如说 <code>tid</code> 和 <code>field</code> 参数</p></div><table><thead><tr><th>名称</th><th>类型</th><th>说明</th><th>备注</th></tr></thead><tbody><tr><td>tid</td><td><code>string</code></td><td>元素类型唯一标识</td><td></td></tr><tr><td>title</td><td><code>string</code></td><td>标题或内容 <br><code>同 options 的 title</code></td><td><code>拖拽时就显示</code><br><mark>无法彻底删除</mark></td></tr><tr><td>field</td><td><code>string</code></td><td>字段名称 <br><code>同 options 的 field</code></td><td><code>优先级高于 options</code><br><mark>无法彻底删除</mark></td></tr><tr><td>data</td><td><code>string</code></td><td>同<mark>测试数据</mark>但参数列表不会显示 <br><code>同 options 的 testData</code> <mark>需要先设置 field</mark></td><td><code>优先级高于 options</code><br><mark>无法彻底删除</mark></td></tr><tr><td>formatter</td><td><code>function</code></td><td>格式化函数 <br><code>同 options 的 formatter</code></td><td><code>优先级高于 options</code><br><mark>无法彻底删除</mark></td></tr><tr><td>styler</td><td><code>function</code></td><td>样式函数 <br><code>同 options 的 styler</code></td><td><code>优先级高于 options</code><br><mark>无法彻底删除</mark></td></tr><tr><td>onRendered</td><td><code>function</code></td><td>渲染完成回调 <br><mark>只能放在 printElementType 中</mark></td><td><mark>设计时不会触发</mark></td></tr></tbody></table><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h3><div class="custom-container info"><p class="custom-container-title">温馨提示</p><p>参数过多，可能没有罗列完整。更多参数点击元素后，在<mark>参数面板</mark>中查看。<br><code>如果你是开发者，我相信你知道该怎么看</code>。</p></div><table><thead><tr><th>名称</th><th>类型</th><th>说明</th><th>备注</th></tr></thead><tbody><tr><td>title</td><td><code>string</code></td><td>标题或内容<br><code>field 存在：title为标题，打印结果为 title:data , field 不存在：title为内容，打印结果为 title</code></td><td><code>拖拽进设计器时显示</code><br></td></tr><tr><td>field</td><td><code>string</code></td><td>字段名称</td><td>可配置<mark>fields</mark>让字段名变成下列选择</td></tr><tr><td>testData</td><td><code>string</code></td><td>测试数据 <mark>需要先设置 field</mark></td><td><mark>仅拖拽设计时有效</mark></td></tr><tr><td>hideTitle</td><td><code>boolean</code></td><td>隐藏标题</td><td></td></tr><tr><td>fontFamily</td><td><code>string</code></td><td>字体 <code>默认可继承面板设置的字体</code></td><td>默认<code>宋体</code></td></tr><tr><td>fontSize</td><td><code>string</code></td><td>字体大小</td><td>默认<code>9pt</code></td></tr><tr><td>fontWeight</td><td><code>string</code></td><td>字体粗细</td><td>默认<code>9pt</code></td></tr><tr><td>color</td><td><code>string</code></td><td>字体样式</td><td></td></tr><tr><td>letterSpacing</td><td><code>string</code></td><td>字间距</td><td></td></tr><tr><td>textDecoration</td><td><code>string</code></td><td>文本修饰</td><td><code>下划线、删除线</code></td></tr><tr><td>textAlign</td><td><code>string</code></td><td>对齐方式</td><td><code>left、center、right</code></td></tr><tr><td>lineHeight</td><td><code>string</code></td><td>字体行高 <mark>条形码/二维码有影响</mark></td><td></td></tr><tr><td>textType</td><td><code>string</code></td><td>文本类型 <code>barcode(条形码) qrcode(二维码)</code></td><td></td></tr><tr><td>barcodeMode</td><td><code>string</code></td><td>条形码类型</td><td></td></tr><tr><td>qrcodeLevel</td><td><code>string</code></td><td>二维码容错率 <code>{&#39;L&#39;:1,&#39;M&#39;:0,&#39;Q&#39;:3,&#39;H&#39;:2</code></td><td></td></tr><tr><td>fixed</td><td><code>string</code></td><td>位置固定</td><td><code>让不在页眉页脚范围内的元素拥有每页输出的特性。</code> <br> <code>与面板指定页页尾线设置功能 相互协作 可以设置指定页 不同的页尾信息展示。</code></td></tr><tr><td>showInPage</td><td><code>string</code></td><td>显示规则 <code>仅页眉页尾元素或位置固定固定有效</code> <mark>none 不受影响</mark></td><td><mark>none:始终隐藏</mark><br><code>first:首页显示</code><br><code>odd:奇数页显示</code><br> <code>even:偶数页显示</code><br> <code>last:尾页显示</code><br></td></tr><tr><td>axis</td><td><code>string</code></td><td>拖拽方向 <code>v:竖向 h:横向</code></td><td><mark>按住 Shift 横向 拖动, Shift + Alt 竖向 拖动</mark></td></tr><tr><td>transform</td><td><code>number</code></td><td>旋转角度</td><td></td></tr><tr><td>zIndex</td><td><code>number</code></td><td>元素层级</td><td></td></tr><tr><td>upperCase</td><td><code>string</code></td><td>转大小写</td><td><code>hinnn.toUpperCase(&#39;7&#39;,10.8) // 壹拾元捌角零分</code></td></tr></tbody></table>`,9),d=[o];function p(r,c){return n(),a("div",null,d)}const i=t(e,[["render",p],["__file","text.html.vue"]]);export{i as default};