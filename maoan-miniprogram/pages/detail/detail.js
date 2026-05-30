const data = require('../../utils/data.js');

Page({
  data: { p: {} },
  onLoad(q) {
    this.setData({ p: data.getProduct(q.id) });
  },
  jump(e) {
    const pl = this.data.p.platforms[e.currentTarget.dataset.idx];

    if (pl.type === 'jd') {
      // 京东有官方小程序，可直跳。需在 mp 后台「跳转的小程序」里配置京东 appId 后启用。
      wx.navigateToMiniProgram({
        appId: '',            // ← 填京东购物小程序 appId
        path: pl.target,      // 商品页 path
        fail: () => this.copyFallback(pl)
      });
      return;
    }
    // 淘宝/拼多多在微信内无法直跳：复制口令/链接，引导用户打开对应 App
    this.copyFallback(pl);
  },
  copyFallback(pl) {
    wx.setClipboardData({
      data: pl.target,
      success: () => {
        wx.showModal({
          title: '已复制' + pl.name + '口令',
          content: '微信内无法直接打开' + pl.name + '，链接/口令已复制。请打开「' + pl.name + '」App 粘贴即可购买（价格 ¥' + pl.price + '）。',
          showCancel: false,
          confirmText: '知道了'
        });
      }
    });
  }
});
