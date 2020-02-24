### JS 策略模式
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>策略模式</title>
</head>
<body>
	<script>
	// 定义：定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。
		// 一组策略类封装具体的算法
		/*说明：
策略模式指的是 定义一系列的算法，把它们一个个封装起来，将不变的部分和变化的部分隔开，
实际就是将算法的使用和实现分离出来；算法的使用方式是不变的，都是根据某个算法取得计算后的奖金数，
而算法的实现是根据绩效对应不同的绩效规则；
一个基于策略模式的程序至少由2部分组成，第一个部分是一组策略类，策略类封装了具体的算法，
并负责具体的计算过程。第二个部分是环境类Context，该Context接收客户端的请求，
随后把请求委托给某一个策略类。
复合开放-封闭原则，可变的部分为策略类（一组算法），不变的部分为执行具体算法的方式。*/
		const Bouns = {
			A (salary){
				return salary * 4;
			},
			B (salary){
				return salary * 3;
			},
			C (salary){
				return salary * 2;
			}
		};
		Object.freeze(Bouns);
		/*
		* 计算年终奖 环境类Context
		* @param {String} A 效绩等级
		* @param {Number} 10000 每月工资
		* @returns {Number} 40000 年终奖
		*/
		const calculateBouns = function (type, salary){
			return Bouns[type](salary);
		};
		// 测试年终奖计算方式
		const demo1 = calculateBouns('A', 10000);
		const demo2 = calculateBouns('B', 80000);
		console.log(demo1, demo2); // 40000, 240000
	</script>
</body>
</html>
```