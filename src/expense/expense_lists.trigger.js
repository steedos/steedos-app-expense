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

  let this_list = await listObj.findOne(listId);
  if (!this_list) {
    console.error(`未找到费用明细：${listId}`);
    return;
  }

  let this_department = this_list.spend_department;
  let this_subject = this_list.expense_subject;

  if (this_list.spend_department.id){
    let this_department = this_list.spend_department.id;

    (await steedosSchema.getObject('expense_subjects').find({ filters: [['name', '=', this_subject]] })).forEach(function (thisline) {
      this_subject = thisline._id;
    });

    await listObj.directUpdate(listId, { spend_department: this_department , expense_subject: this_subject }); 
  }

  // let this_expense_budget = "TSq5MoqR8jiZBeXFG";
  let this_expense_budget = "";
  (await steedosSchema.getObject('expense_budgets').find({ filters: [['department', '=', this_department],['expense_subject', '=', this_subject]] })).forEach(function (thisline) {
    this_expense_budget = thisline._id;
  });
  if (!this_expense_budget) {
    console.error(`未找到费用科目：${listId}`);
  } else {
    await listObj.directUpdate(listId, { expense_budget: this_expense_budget }); 
  }
}