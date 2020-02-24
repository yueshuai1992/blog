### JS 通用单例模式

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>单例模式</title>
</head>
<body>
	<script>
	// 通用的单例验证方法
	const getSingle = function (fn){
		let result;
		return function (){
			return result || (result = fn.apply(this, arguments));
		};
	};
	// 创建登录模态框
	const createLoginLayer = function (){
		const div = document.createElement('div');
		div.innerHTML = '我是登录模态框';
		document.body.appendChild(div);
		return div;
	};
	// 为登录模态框使用单例模式
	const createSingleLoginLoyer = getSingle(createLoginLayer);
	const loginLayer1 = createSingleLoginLoyer(); // 第一个登录模态框
	const loginLayer2 = createSingleLoginLoyer(); // 还是第一个登录模态框
	console.log(loginLayer1 === loginLayer2); // true
	</script>
</body>
</html>
```