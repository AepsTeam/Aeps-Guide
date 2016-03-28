### 编码规范
CSS样式表是一个序列通用字符集，传输和存储过程中，这些字符必须由支持 US-ASCII（例如 UTF-8, ISO 8859-x, SHIFT JIS 等）字符编码方式编译 

### 团队约定

- 样式文件必须写上 @charset 规则，并且一定要在样式文件的第一行首个字符位置开始写，编码名用 “UTF-8”
- 字符 @charset “”; 都用小写字母，不能出现转义符，编码名允许大小混写
- 考虑到在使用“UTF-8”编码情况下 BOM 对代码的污染和编码显示的问题，在可控范围下，坚决不使用 BOM。

*推荐*
```
@charset "UTF-8";

.grid{}
```

*不推荐*
```
/**
 * @desc File Info
 * @author Author Name
 * @date 2015-10-10
 */
 
/* @charset规则不在文件首行首个字符开始 */
@charset "UTF-8";

.grid{}
```

```
@CHARSET "UTF-8";
/* @charset规则没有用小写 */

.grid{}
```

```
/* 无@charset规则 */
.grid{}
```

### 代码风格
统一使用展开格式书写样式

```
/* 推荐 */
.box{
    display: block;
    width: 50px;
}

/* 不推荐 */
.box{ display: block;width: 50px;}
```

### 代码大小写
样式选择器，属性名，属性值关键字全部使用小写字母书写

```
/* 推荐 */
.box{
    display: block;
}

/* 不推荐 */
.BOX{ DISPLAY: BLOCK;}
```



### 代码易读性
每个属性声明末尾都要加分号
```
.box {
    width: 100%;
    height: 100%;
}
```

左括号与类名之间一个空格，冒号与属性值之间一个空格
```
/* 推荐 */
.box { 
    width: 100%; 
}

/* 不推荐 */
.box{ 
    width:100%;
}
```

逗号分隔的取值，逗号之后一个空格
```
/* 推荐 */
.box {
    box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
}

/* 不推荐 */
.box {
    box-shadow: 1px 1px 1px #333,2px 2px 2px #ccc;
}
```

为单个css选择器或新申明开启新行
```
/* 推荐 */
.box, 
.box-hd, 
.box-bd {
    color: #ff0;
}
.nav{
    color: #fff;
}

/* 不推荐 */
.box,.box-hd,.box-bd {
    color: #ff0;
}.nav{
    color: #fff;
}
```

属性值十六进制数值能用简写的尽量用简写
```
/* 推荐 */
.box {
    color:#fff;
}
/* 不推荐 */
.box {
    color:#ffffff;
}
```

不要为`0`指定单位
```
/* 推荐 */
.box {
    margin: 0 5px;
}
/* 不推荐 */
.box {
    margin: 0px 5px;
}
```

### 属性值引号
css属性值需要用到引号时，统一使用单引号
```
/* 推荐 */
.box { 
	font-family: 'Hiragino Sans GB';
}

/* 不推荐 */
.box { 
	font-family: "Hiragino Sans GB";
}
```

### 属性书写顺序
建议遵循以下顺序：
1. 定位属性：position 
2. 布局属性：display / float / clear / visibility / overflow
3. 自身属性：width / height / margin / padding / border / background
4. 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
5. 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …


```
.box {
	/*定位属性*/
	position: absolute;
	top: 10px;
	right: 0;

	/*布局属性*/
	display: block;
    float: left;

	/*自身属性*/ 
    width: 100px;
    height: 100px;
    margin: 0 10px;
    padding: 20px 0;

	/*文本属性*/
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    background: rgba(0,0,0,.5);

	/*其他属性*/
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```

### CSS3浏览器私有前缀写法
CSS3 浏览器私有前缀在前，标准前缀在后

```
.box {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```


### 选择器
- 禁止通用选择器 `*`
- 不使用 ID 选择器
- 除`a`、`img`、`li`、`dt`、`dd`、`p`、`input`、`select`、`textarea`等具有明确语义或有明确父层结构的标签外，禁止直接将标签作为选择器，须添加class。
- 选择器使用不超过4级
- 使用高效选择器。非必要情况下，禁止在class前加标签名，如`div.main`

*推荐*
```
.form{}
.form li{}
```

*不推荐*
```
*{}
#form{}
.form div{}
```

### CSS定义
- 样式定义遵循在一个标签上添加多个class的形式，但不宜过多，一般不超过4个为宜。
- 禁止采用原子样式类堆积的形式，如：
```
<div class="red fwb f14 mb10 mt10">
    ...
</div>
```
- 原子样式类不作为常规样式定义类使用，只作为为一些元素添加区别性样式。
- 禁止使用表达式
- 禁止使用 `important`
- 字体定义禁止使用中文，使用英文或Unicode字符


### z-index取值
- 0-9：相邻元素间的边缘遮盖等。
- 10-99：元素周围附近的绝对定位元素，如模拟下拉框的下拉层。
- 100-999：页面范围内的弹出层、遮罩层等。

### 字体定义
英文字体使用非衬线字体，默认为`arial`，中文字体默认为`simsun`。全局默认字体定义：
```
body{
    font-family: arial, sans-serif;
}
```

微软雅黑字体定义：
```
.selector{
    font-family: arial, 'Microsoft Yahei', sans-serif;
}
```

常用中文字体Unicode编码：
```
Microsoft Yahei: \5FAE\8F6F\96C5\9ED1
Simsun: \5B8B\4F53
Simhei: \9ED1\4F53
```


### 浏览器hack
尽量避免使用hack。
IE下禁止使用`>`、`+`等奇葩hack字符。正确hack写法如下：
```
<!-- IE6 -->
.selector{
    _property: value;
}
<!-- IE6/7 -->
.selector{
    *property: value;
}
<!-- IE -->
.selector{
    property: value\9;
}
```

IE条件注释写法：
```
<!--[if IE 6]>
...
<![endif]-->
```

Firefox下hack写法：
```
@-moz-document url-prefix(){
    .selector{
        ...
    }
}
```


### 注释规范

#### 文件信息注释
在样式文件编码声明 @charset 语句下面注明页面名称、作者、创建日期等信息

```
@charset "UTF-8";
/**
 * @desc File Info
 * @author Author Name
 * @date 2016-03-25
 */
```


#### 单行注释

*推荐*
```
/* Comment Text */
.box{}

/* Comment Text */
.box{}
```

*不推荐*
```
.box{
	margin: 0 auto;/* Comment Text */
}
```

#### 模块注释

*推荐*
```
/* Module A
---------------------------------------------------------------- */
.mod-a {}


/* Module B
---------------------------------------------------------------- */
.mod-b {}
```

*不推荐*
```
/* Module A ---------------------------------------------------- */
.mod-a {}
/* Module B ---------------------------------------------------- */
.mod-b {}
```


### 重置样式

#### PC端

```
html, body, div, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, ul, li, fieldset, form, label, input, legend, table, caption, tbody, tfoot, thead, tr, th, td, textarea, article, aside, audio, canvas, figure, footer, header, mark, menu, nav, section, time, video { margin: 0; padding: 0; }
h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight: normal }
article, aside, dialog, figure, footer, header, hgroup, nav, section, blockquote { display: block; }
ul, ol { list-style: none; }
img { border: 0 none; vertical-align: top; }
blockquote, q { quotes: none; }
blockquote:before, blockquote:after, q:before, q:after { content: none; }
table { border-collapse: collapse; border-spacing: 0; }
strong, em, i { font-style: normal; font-weight: normal; }
ins { text-decoration: underline; }
del { text-decoration: line-through; }
mark { background: none; }
input::-ms-clear { display: none !important; }
body { font: 12px/1.5 \5FAE\8F6F\96C5\9ED1, \5B8B\4F53, "Hiragino Sans GB", STHeiti, "WenQuanYi Micro Hei", "Droid Sans Fallback", SimSun, sans-serif; background: #fff; }
a { text-decoration: none; color: #333; }
a:hover { text-decoration: underline; }
```

#### 移动端

```
* { -webkit-tap-highlight-color: transparent; outline: 0; margin: 0; padding: 0; vertical-align: baseline; }
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin: 0; padding: 0; vertical-align: baseline; }
img { border: 0 none; vertical-align: top; }
i, em { font-style: normal; }
ol, ul { list-style: none; }
input, select, button, h1, h2, h3, h4, h5, h6 { font-size: 100%; font-family: inherit; }
table { border-collapse: collapse; border-spacing: 0; }
a { text-decoration: none; color: #666; }
body { margin: 0 auto; min-width: 320px; max-width: 640px; height: 100%; font-size: 14px; font-family: Helvetica, STHeiti STXihei, Microsoft JhengHei, Microsoft YaHei, Arial; line-height: 1.5; color: #666; -webkit-text-size-adjust: 100% !important; text-size-adjust: 100% !important; }
input[type="text"], textarea { -webkit-appearance: none; -moz-appearance: none; appearance: none; }

```
