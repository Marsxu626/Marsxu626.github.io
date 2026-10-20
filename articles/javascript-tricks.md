# 10 个让你的 JavaScript 更优雅的小技巧

从可选链到空值合并，从解构到生成器 — 总结 10 个我日常高频使用的现代 JavaScript 特性。

## 1. 可选链 `?.` — 告别 `&&` 地狱

```javascript
// ❌ 旧写法
const city = user && user.address && user.address.city;

// ✅ 现代写法
const city = user?.address?.city;

// 连数组和函数调用也支持
const firstTag = article?.tags?.[0];
const result = api?.fetch?.();
```

## 2. 空值合并 `??` — 只对 `null` / `undefined` 生效

和 `||` 的关键区别：**`0` 和 `""` 不会被当成 falsy 值跳过**。

```javascript
// || 的坑：0 被当成 false
const pageSize = query.pageSize || 10; // 用户传 0 也会得到 10

// ?? 修复了这个问题
const pageSize = query.pageSize ?? 10; // 用户传 0，就真的是 0

// 组合使用，写在一行
const fontSize = settings.fontSize ?? 16;
```

## 3. 解构赋值 — 少写点 `obj.prop`

```javascript
const { name, age, email = "unknown" } = user;

// 重命名
const { name: userName, age: userAge } = user;

// 嵌套解构
const { address: { city, zip } = {} } = user;

// 数组解构 + 跳过
const [first, , third] = items;
```

## 4. 展开运算符 `...` — 复制、合并、转换一把梭

```javascript
// 浅拷贝对象
const clone = { ...original };

// 合并对象（后面的覆盖前面的）
const merged = { ...defaults, ...overrides };

// 数组合并
const all = [...arr1, ...arr2];

// 数组 → 函数参数
Math.max(...numbers);

// NodeList → 数组
const allDivs = [...document.querySelectorAll("div")];
```

## 5. 可选的 catch 绑定 — 不需要错误对象就不用写

```javascript
// ❌ 必须写 err
try { riskyOperation(); } catch (err) { log.error("出错了"); }

// ✅ 直接省略
try { riskyOperation(); } catch { log.error("出错了"); }
```

## 6. `Object.hasOwn()` — 比 `hasOwnProperty` 方便

```javascript
// ❌ 旧写法
Object.prototype.hasOwnProperty.call(obj, "key");
obj.hasOwnProperty("key"); // 万一 obj 继承了什么奇怪的东西？

// ✅ 新写法（ES2022）
Object.hasOwn(obj, "key");
```

## 7. `at()` 方法 — 数组负索引变得自然

```javascript
const arr = [10, 20, 30, 40, 50];

// ❌ 旧写法
const last = arr[arr.length - 1];     // 50
const second = arr[arr.length - 2];   // 40

// ✅ 新写法
const last = arr.at(-1);     // 50
const second = arr.at(-2);   // 40
const first = arr.at(0);     // 10
```

## 8. 逻辑赋值运算符 — `??=` `||=` `&&=`

```javascript
// ❌ 旧写法
if (!existing) existing = fallback;

// ✅ 新写法
existing ??= fallback;
count ||= 0;
items &&= items.filter(x => x.valid);
```

## 9. 字符串新方法 — 检查头尾不再自己切片

```javascript
const url = "https://example.com/api/users";

url.startsWith("https://");   // true
url.endsWith("/users");       // true
url.includes("api");          // true

// 去首尾空白（trim 一直有，trimStart/trimEnd 也标准化了）
"  hello  ".trim();        // "hello"
"  hello  ".trimStart();   // "hello  "
```

## 10. Top-level `await` — 模块里可以直接用

```javascript
// 以前：需要包一层 async IIFE
const data = await fetchData();
// ❌ 在 <script type="module"> 外会报错

// 现在：ES2022 后在模块里直接写
// ✅ 作为 <script type="module"> 或 .mjs 文件的顶层代码
const user = await fetch("/api/me").then(r => r.json());
document.body.textContent = user.name;
```

---

## 一句话总结

| 特性 | ES 版本 | 你该记住的 |
|---|---|---|
| `?.` 可选链 | 2020 | 安全地访问深层属性 |
| `??` 空值合并 | 2020 | 不把 0 / "" 当成假 |
| 解构赋值 | 2015 | 批量取属性，支持默认值 |
| `...` 展开 | 2018 | 浅拷贝 + 合并 |
| `Object.hasOwn()` | 2022 | 判断自有属性更安全 |
| `at(-1)` | 2022 | 数组负索引，拿最后一个元素 |
| Top-level await | 2022 | 模块里直接 await |

**一个建议：如果你的目标运行环境不确定，用 [caniuse.com](https://caniuse.com) 查一下再上生产。** 个人项目、工具脚本、浏览器插件——大胆用就对了。
