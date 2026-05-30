const data = require('../../utils/data.js');

Page({
  data: { symptoms: [], hot: [] },
  onLoad() {
    this.setData({
      symptoms: data.symptoms,
      hot: data.getProducts().slice(0, 4)
    });
  },
  goShop() { wx.switchTab({ url: '/pages/shop/shop' }); },
  goReviews() { wx.switchTab({ url: '/pages/reviews/reviews' }); },
  goSymptom(e) {
    const { id, name } = e.currentTarget.dataset;
    wx.switchTab({
      url: '/pages/shop/shop',
      success: () => {
        const pages = getCurrentPages();
        const shop = pages[pages.length - 1];
        if (shop && shop.applyFilter) shop.applyFilter(id, name);
      }
    });
  },
  goDetail(e) {
    wx.navigateTo({ url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id });
  }
});
