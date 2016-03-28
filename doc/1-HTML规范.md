### DOCTYPE声明

**HTML文件必须加上 DOCTYPE 声明**，并统一使用 HTML5 的文档声明：

```
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>title</title>
</head>
<body>
    ...
</body>
</html>
```

### 标签使用

- 使用合适的语义化标签，避免大量`div`直接堆砌  
- 页面嵌套避免不必要的容器层和标签，嵌套层级尽量不超过12级  
- 标题层级不能错乱。内容区使用`h2~h5`


### 书写风格

HTML标签名、类名、标签属性和大部分属性值统一用小写  
*推荐*：
```
<div class="demo"></div>
```
*不推荐*：
```
<div class="DEMO"></div>
<DIV CLASS="DEMO"></DIV>
```



### 类型属性
不需要为 CSS、JS 指定类型属性，HTML5 中默认已包含
*推荐*：
```
<link rel="stylesheet" href="" >
<script src=""></script>
```
*不推荐*：
```
<link rel="stylesheet" type="text/css" href="" >
<script type="text/javascript" src="" ></script>
```

### 元素属性
书写完整

*推荐*：
```
<input type="text">
	
<input type="radio" name="name" checked="checked" >
```
*不推荐*：
```
<input type=text>	
<input type='text'>
	
<input type="radio" name="name" checked >
```

### 代码缩进
统一使用四个空格进行代码缩进

```
<div class="grid">
    <a href="#"></a>
</div>
```

### 代码嵌套
元素嵌套规范，每个块状元素独立一行，内联元素可选

*推荐*：
```
<div>
    <h1></h1>
    <p></p>
</div>	
<p><span></span><span></span></p>
```
*不推荐*：
```
<div>
    <h1></h1><p></p>
</div>	
<p> 
    <span></span>
    <span></span>
</p>
```

段落元素与标题元素只能嵌套内联元素

*推荐*：
```
<h1><span></span></h1>
<p><span></span><span></span></p>
```
*不推荐*：
```
<h1><div></div></h1>
<p><div></div><div></div></p>
```

### 注释规范

为了提高代码的可读性和可维护性，对于必要的说明、复杂的模块需要进行注释。  

**单行注释**

*推荐*
```
<!-- 注释内容 -->
<div>...</div>
```

*不推荐*
```
<div>...</div><!-- 注释内容 -->

<div><!-- 注释内容 -->
...
</div>
```

**模块注释**

*推荐*
```
<!-- 采购列表开始 -->
<div class="order-form">
...
</div>
<!-- 采购列表结束 -->

<!-- 采购列表开始 -->
<div class="order-form">
...
</div>
<!-- 采购列表结束 -->

```

*不推荐*
```
<!-- S 采购列表 -->
<div class="order-form">
...
</div>
<!-- E 采购列表 -->
<!-- S 采购列表 -->
<div class="order-form">
...
</div>
<!-- E 采购列表 -->
````

**嵌套注释**
当模块注释内再出现模块注释的时候，为了突出主要模块，嵌套模块不再使用  

```
<!-- S 采购列表 -->
<div class="order-form">
	<div class="order-form-lst">
		...
	</div>
	<!-- /order-form-lst -->
</div>
<!-- E 采购列表 -->

```


### 文件模板

HTML模版指的是团队使用的初始化HTML文件，里面会根据不同平台而采用不一样的设置，一般主要不同的设置就是 mata 标签的设置，以下是 PC 和移动端的 HTML 模版。

#### HTML5标准模板
```
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>HTML5标准模版</title>
</head>
<body>
	
</body>
</html>
```


#### PC端

```
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="keywords" content="your keywords">
<meta name="description" content="your description">
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">

<title>PC端HTML模版</title>

</head>
<body>

</body>
</html>
```

#### 移动端

```
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" >
<meta name="format-detection" content="telephone=no" >
<title>移动端HTML模版</title>

</head>
<body>

</body>
</html>
```
