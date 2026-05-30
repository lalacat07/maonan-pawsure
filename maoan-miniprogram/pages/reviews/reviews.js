const data = require('../../utils/data.js');
Page({
  data: { reviews: [] },
  onLoad() { this.setData({ reviews: data.reviews }); }
});
