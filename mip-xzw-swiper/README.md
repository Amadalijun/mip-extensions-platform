# mip-xzw-swiper
mip-xzw-swiper 星座屋mip滑动组件

标题|内容
----|----
类型|业务
支持布局|responsive,fix-height,fill,container,fixed
所需脚本|https://mipcache.bdstatic.com/extensions/platform/v1/mip-xzw-swiper/mip-xzw-swiper.js

## 示例

### 基本使用
```html 
组件使用的层级关系如示例，组件必须包含属性为~swiper-container,swiper-wrapper,swiper-slide;如果一个页面需要引用2个滑动块以上则需要添加自定义class类名~如示例所示的female,male并以此类名调用函数;

<mip-xzw-swiper class="swiper-container female">
  <ul class="swiper-wrapper">
  	   <li class="swiper-slide"></li>
  	   <li class="swiper-slide"></li>
  	   <li class="swiper-slide"></li>
  </ul>
</mip-xzw-swiper>
<mip-xzw-swiper class="swiper-container male">
  <ul class="swiper-wrapper">
  	   <li class="swiper-slide"></li>
  	   <li class="swiper-slide"></li>
  	   <li class="swiper-slide"></li>
  </ul>
</mip-xzw-swiper>