const data = require('../../utils/data.js');

Page({
  data: { symptoms: [], list: [], active: 'all', title: '全部对症粮', sub: '点任意一款看成分透明表 + 多平台比价' },
  onLoad() {
    this.setData({ symptoms: data.symptoms, list: data.getProducts() });
  },
  // 供首页症状点击后调用
  applyFilter(id, name) {
    if (id === 'all') {
      this.setData({ active: 'all', title: '全部对症粮', sub: '点任意一款看成分透明表 + 多平台比价', list: data.getProducts() });
    } else {
      const list = data.getBySymptom(id);
      this.setData({ active: id, title: '「' + name + '」对症粮', sub: '为你筛出 ' + list.length + ' 款 · 点开看成分与比价', list });
    }
  },
  onFilter(e) {
    const { id, name } = e.currentTarget.dataset;
    this.applyFilter(id, name);
  },
  goDetail(e) {
    wx.navigateTo({ url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id });
  }
});
