### WEEX 原生组件开发
#### 主要有三种方式：module方式，componont方式（hander），adapter方式
#### Module调用方式
> Module 扩展必须继承 WXModule 类。

扩展方法必须加上 @WXModuleAnno 注解或者@JSMethod注解。需要在vue中使用回调获得数据是使用后者。Weex 会根据注解来判断当前方法是否要运行在 UI 线程，和当前方法是否是扩展方法。
uiThread = false  设置false为可以return  true  callback无return
weex是根据反射来进行调用 Module 扩展方法，所以Module中的扩展方法必须是 public 类型。

Module扩展的方法可以使用 int, double, float, String, Map, List 类型的参数。
完成Module 后一定要在初始化时注册 WXSDKEngine.registerModule("myModule", MyModule.class);


```
eg:  
i.传参数例子
@JSMethod(uiThread = true)
  public void printLog(String msg) {
    String responseStr = getMD5(msg);
    Toast.makeText(mWXSDKInstance.getContext(),responseStr,Toast.LENGTH_SHORT).show();
  }
ii.传参数回调例子
@JSMethod(uiThread = true)
  public void responseMD5(String msg, JSCallback callback) {
    String responseStr = getMD5(msg);
    callback.invokeAndKeepAlive(responseStr);
  }
```

在vue通过var module=weex.requirModule（‘moduleName’）获得对象可以调用其方法
#### Component调用方式
> Component 扩展类必须继承 WXComponent.

对应的设置属性的方法必须添加注解 @WXComponentProp(name=value)
Weex sdk通过反射调用对应的方法，所以 Component 对应的属性方法必须是 public。
扩展的方法可以使用 int, double, float, String, Map, List 类型的参数
完成Component 后一定要在初始化时注册 WXSDKEngine.registerComponent("richtext",RichText.class);

```
eg:  
public class WXCardView extends WXComponent<TextView> {
    private TextView view;
    public WXCardView(WXSDKInstance instance, WXDomObject dom, WXVContainer parent){
        super(instance, dom, parent);
    }
    @Override
    protected TextView initComponentHostView(@NonNull Context context) {
        view = new TextView(context);
        view.setMovementMethod(LinkMovementMethod.getInstance());
        view.setBackgroundColor(context.getResources().getColor(R.color.black_overlay));
        view.setTextColor(context.getResources().getColor(R.color.colorAccent));
        return view;
    }
    @WXComponentProp(name="showmsg")
    public void elevation(String elevation) {
        Log.e("132","nihao");
        view.setText(elevation);
    }
}
```

#### Adapter调用方式
  Weex 对一些基础功能实现了统一的接口，可实现这些接口来定制自己的业务。例如：图片加载，网络请求，存储管理等。图片加载是一个我们必须使用而weex没有实现的adapter，因此开发weex项目首先要实现对图片加载adapter的配置。