const objectql = require('@steedos/objectql');
/**
 * 
 * @param {string} budgetId 
 */

async function caculateAmount(budgetId) {
  if (!budgetId) {
    return;
  }
  const steedosSchema = objectql.getSteedosSchema();
  let budgetObj = steedosSchema.getObject('expense_budgets');

  let budget = await budgetObj.findOne(budgetId);
  if (!budget) {
    console.error(`未找到费用预算：${budgetId}`);
    return;
  }

  let this_budget_value = budget.budget_value;
  let this_spended_value = 0;
  let this_approving_value = 0;
  let this_surplus_value = 0;
  (await steedosSchema.getObject('expense_lists').find({ filters: [['expense_budget', '=', budgetId]] })).forEach(function (thisline) {
    this_approving_value += (thisline.spend_value || 0);
  });
  this_surplus_value = this_budget_value - this_spended_value
  await budgetObj.directUpdate(budgetId, { spended_value: this_spended_value , approving_value: this_approving_value , surplus_value: this_surplus_value });
}

module.exports = {
  caculateAmount
};