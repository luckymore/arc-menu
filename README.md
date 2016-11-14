# arc-menu 扇形菜单

| options       | value        | default   |
| ------------- |:------------:| ---------:|
| menuItemColor | String/Array | '#4ECDC4' | 
| duration      | Number       |  .6(s)    |
| delay         | Number       |  50(ms)   |
| startAngle    | Number       |  90(deg)  |
| endAngle      | Number       |  180(deg) |
| radius        | Number       |  120(px)  |


#### 示例

```javascript
    new arcMenu({
        menuItemColor: ['red','blue','yellow','#233'],  //菜单项颜色列表
        duration: 0.6,        //动画持续时间
        delay: 50,          //每个菜单项的动画间隔（ms）
        startAngle: 90,     //菜单项起始角度
        endAngle: 180,      //菜单项结束角度
        radius: 200         //扇形半径（px）  
    });
```