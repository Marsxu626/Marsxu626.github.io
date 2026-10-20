# Markdown 语法速查表 — 技术写作者必备

一份面向技术博客写作者的 Markdown 速查表。基于 GitHub Flavored Markdown (GFM)。

## 标题

```markdown
# H1 一级标题
## H2 二级标题
### H3 三级标题
#### H4
##### H5
###### H6
```

## 文本样式

| 样式 | 语法 | 效果 |
|---|---|---|
| **加粗** | `**文字**` | **文字** |
| *斜体* | `*文字*` | *文字* |
| ~~删除线~~ | `~~文字~~` | ~~文字~~ |
| `行内代码` | `` `code` `` | `code` |
| 高亮 | `==文字==` | 部分引擎支持 |

## 列表

### 无序列表
```markdown
- 项目 A
  - 子项
- 项目 B
- 项目 C
```

### 有序列表
```markdown
1. 第一步
2. 第二步
   1. 子步骤
3. 第三步
```

### 任务列表 (GFM)
```markdown
- [x] 已完成的任务
- [ ] 待完成的任务
- [ ] 另一个任务
```

## 引用

```markdown
> 这是一段引用。
>
> > 可以嵌套。
>
> 多行引用。
```

效果：

> 这是一段引用。
>
> > 可以嵌套。
>
> 多行引用。

## 链接和图片

```markdown
[普通链接](https://example.com)

[带标题的链接](https://example.com "悬停显示")

![图片描述](https://example.com/image.png)

![图片描述](https://example.com/image.png "图片标题")

[引用式链接][ref]
[ref]: https://example.com
```

## 代码块

基础语法：

~~~markdown
```javascript
function hello(name) {
  console.log(`Hello, ${name}!`);
}
hello("World");
```
~~~

带文件名：

~~~markdown
```python
# filename: main.py
import sys

def main():
    print(f"Python {sys.version}")

if __name__ == "__main__":
    main()
```
~~~

支持的语言（常用）：`javascript` `typescript` `python` `bash` `go` `rust` `java` `cpp` `html` `css` `json` `yaml` `sql` `markdown`

## 表格

```markdown
| 语言 | 创始人 | 发布年份 |
|---|---|---|
| Python | Guido van Rossum | 1991 |
| Go | Rob Pike 等 | 2009 |
| Rust | Graydon Hoare | 2010 |
| TypeScript | Anders Hejlsberg | 2012 |
```

对齐方式：`| 左 | 中 | 右 |` → `|:---|:---:|---:|`

## 分割线

```markdown
---
***
___
```

## 自动链接 (GFM)

粘贴 URL 自动变成链接：

```
https://github.com
user@example.com
```

## 表情符号

部分平台支持 emoji shortcodes：

```markdown
:rocket: :fire: :sparkles: :memo: :bug: :+1:
```

## 脚注

部分引擎支持（marked.js 默认也支持）：

```markdown
这里有一个脚注引用[^1]。

[^1]: 这是脚注内容。
```

## 代码块示例

以下是一个完整的 Python 快速排序：

```python
def quick_sort(arr):
    """快速排序 — O(n log n)"""
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left  = [x for x in arr if x < pivot]
    mid   = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + mid + quick_sort(right)

print(quick_sort([3, 6, 8, 10, 1, 2, 1]))
# 输出: [1, 1, 2, 3, 6, 8, 10]
```

Go 语言版本：

```go
package main

import "fmt"

func quickSort(arr []int) []int {
    if len(arr) <= 1 {
        return arr
    }
    pivot := arr[len(arr)/2]
    left, mid, right := []int{}, []int{}, []int{}
    for _, x := range arr {
        switch {
        case x < pivot:
            left = append(left, x)
        case x == pivot:
            mid = append(mid, x)
        default:
            right = append(right, x)
        }
    }
    return append(append(quickSort(left), mid...), quickSort(right)...)
}

func main() {
    fmt.Println(quickSort([]int{3, 6, 8, 10, 1, 2, 1}))
}
```

---

**记住：Markdown 的核心思想是"让写专注于内容，让渲染专注于样式"。** 写的时候别纠结格式，发布前花 2 分钟调整一下就好。
