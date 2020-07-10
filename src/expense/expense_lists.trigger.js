/*
所有脚本函数均为无参函数，所属数据可从this中获取，this结构如下
id: 记录的唯一标识[string],
userId: 当前用户唯一标识[string],
spaceId: 当前工作区[string],
doc: 需要新增/修改的记录内容[json],
previousDoc: 修改/删除前的记录[json], //仅afterUpdate, afterDelete时存在此属性
object_name: 当前对象名称[string],
datasource_name: 数据源名称[string],
getObject: function(object_name: string)Id
query: 查询数据相关参数[json], //仅beforeFind时存在此属性
*/

// const prManager = require('./purchase_requisitions.manager');

module.exports = {
  listenTo: 'expense_lists',

  afterInsert: async function () {
    await caculateBudget(this.doc._id);
  },

}

const objectql = require('@steedos/objectql');

async function caculateBudget(listId) {
  if (!listId) {
    return;
  }
  const steedosSchema = objectql.getSteedosSchema();
  let listObj = steedosSchema.getObject('expense_lists');

  /* let requisition = await listObj.findOne(listId);
  if (!requisition) {
    console.error(`未找到采购需求：${listId}`);
    return;
  }

  let product_qty = 0;
  (await steedosSchema.getObject('purchase_requisitions_lines').find({ filters: [['parent_id', '=', listId]] })).forEach(function (thisline) {
    product_qty += (thisline.product_qty || 0);
  });*/

  let this_expense_budget = "TSq5MoqR8jiZBeXFG";
  await listObj.directUpdate(listId, { expense_budget: this_expense_budget }); 
}