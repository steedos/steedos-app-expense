### 系统功能

#### 费用预算

 - 管理员新建和维护基于部门和费用科目的费用预算。
 - 用户查看费用预算，以及相关的费用执行情况（即费用明细）。
 - 通过定义对象权限，实现不同权限组查看不同范围的费用预算记录。例如，限制部门经理只能查看本部门的费用预算。

 ![预算列表](https://www-steedos-com.oss-cn-beijing.aliyuncs.com/images/steedos-app-expense/expense_budget_list.png)
 ![预算显示](https://www-steedos-com.oss-cn-beijing.aliyuncs.com/images/steedos-app-expense/expense_budget_display.png)

#### 费用单据

 - 通过定义对象流程映射，自动将费用审批单即时同步为费用单据记录、将费用审批单上的费用明细即时同步为费用明细记录。
 - 用户查看费用单据，以相关的费用明细。
 - 通过定义对象权限，实现不同权限组查看不同范围的费用单据记录。例如，限制部门员工只能查看本人的费用单据。

 ![单据](https://www-steedos-com.oss-cn-beijing.aliyuncs.com/images/steedos-app-expense/expense_form_display.png)


#### 费用明细

 - 用户查看费用明细，也可查看相关的费用预算、费用单据。
 - 通过定义对象权限，实现不同权限组查看不同范围的费用明细记录。例如，开放财务部员工能查看全部的费用明细。

 ![明细](https://www-steedos-com.oss-cn-beijing.aliyuncs.com/images/steedos-app-expense/expense_list_display.png)

#### 费用审批

 - 自定义各类费用审批流程，例如日常费用审批、出差费用审批等。
 - 发起、处理各类费用审批流程。
 - 通过定义对象流程映射，自动将费用审批单即时同步为费用单据记录、将费用审批单上的费用明细即时同步为费用明细记录。

 ![明细](https://www-steedos-com.oss-cn-beijing.aliyuncs.com/images/steedos-app-expense/expense_approve.png)

#### 费用统计

 - 自定义各类费用统计报表
 - 发布各类费用统计报表

#### 基础数据管理

 - 费用科目

 ![设置](https://www-steedos-com.oss-cn-beijing.aliyuncs.com/images/steedos-app-expense/expense_subject_list.png)

### 系统安装

#### 安装 yarn
```
npm i yarn -g
```

#### 国内建议使用npm淘宝镜像
```
npm config set registry http://registry.npm.taobao.org/
```

#### 使用yarn安装依赖包
```
yarn
```

#### 启动服务器
```
yarn start
```

#### 了解更多
- [开发文档](https://steedos.github.io) 
