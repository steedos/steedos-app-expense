const ebManager = require('./expense_budgets.manager');

module.exports = {
  listenTo: 'expense_budgets',

  afterInsert: async function () {
    await ebManager.caculateAmount(this.doc._id)
  },

  afterUpdate: async function () {
    await ebManager.caculateAmount(this.id);
  },

}