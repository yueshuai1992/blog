### JS 享元模式
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>享元模式</title>
</head>

<body>
    <script>
        /* 定义：享元模式是一种用于性能优化的模式，如果系统中因为创建了大量类似的对象而导致内存不足或占用过高这种模式就非常有用了。
                        使用场景：第一种是应用在数据层上，主要是应用在内存里大量相似的对象上；第二种是应用在DOM层上，
                            享元可以用在中央事件管理器上用来避免给父容器里的每个子元素都附加事件句柄。
                        作用：Flyweight中有两个重要概念--内部状态intrinsic和外部状态extrinsic之分，内部状态就是在对象里通过内部方法管理，
                            而外部信息可以在通过外部删除或者保存。 */
        /* 很显然，这里只需要两个对象便完成这个需求 */
        // 定义塑料模特的构造函数
        var Model = function(sex) {
                this.sex = sex;
            }
            // 为模特拍照
        Model.prototype.takePhoto = function() {
            console.log('sex=' + this.sex + 'underwear=' + this.underwear)
        }

        // 实例化一个男模特 和 一个女模特
        var maleModel = new Model('male'),
            female = new Model('female');

        for (var i = 0; i < 50; i++) {
            maleModel.underwear = "underwear" + i;
            maleModel.takePhoto();
        }

        for (var i = 0; i < 50; i++) {
            female.underwear = "underwear" + i;
            female.takePhoto();
        }
    </script>
</body>

</html>
```
