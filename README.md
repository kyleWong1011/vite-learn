# 结合 vite、 vue3 以及 ts

- vite@2.0.5
- vue@3.0.5
- vuex@4.0.0
- vue-router@4.0.4

# 使用TSX要解决的
_需要在vite.config.js里引入官方插件“@vitejs/plugin-vue-jsx”_
- 在`config`的`plugin`参数里加入该插件

# 关于 css in js 解决方案
_推荐使用"styled-components"_

- 需要安装"styled-components"
- 需要安装“@types/styled-components”类型声明
