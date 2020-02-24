### JS 惰性单例

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>单例模式</title>
</head>
<body>
	<script>
	// 定义：惰性单例指的是在需要的时候才创建对象的实例
	const createLoginLayer = (function (){
		let div;
		return function (){
			if (!div) {
				div = document.createElement('div');
				div.innerHTML = '我是登录模态框';
			}
			return div;
		};
	})();
	// 在点击按钮时才创建节点（惰性）
	document.getElementById('login-btn').onclick = function (){
		var loginLayer = createLoginLayer();
		loginLayer.style.display = 'block';

	</script>
</body>
</html>
```