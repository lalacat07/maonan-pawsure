// 数据层 · 商品 / 症状 / 测评
// 真实上线时：把 platforms 里的 url 换成你的真实商品链接；
// 京东可用 navigateToMiniProgram 直跳，淘宝/拼多多在微信内用「复制口令」方案。

const symptoms = [
  { id: 'tear',   emoji: '😿', t: '泪痕',     d: '眼周发红/褐色' },
  { id: 'stool',  emoji: '💩', t: '软便/拉稀', d: '肠胃敏感' },
  { id: 'fur',    emoji: '🐾', t: '掉毛',     d: '毛量稀疏暗淡' },
  { id: 'picky',  emoji: '🙄', t: '挑食',     d: '不爱吃饭' },
  { id: 'weight', emoji: '⚖️', t: '体重管理', d: '过胖/过瘦' },
  { id: 'senior', emoji: '👴', t: '老年护理', d: '关节/肾脏' }
];

// platforms: 每个平台 name / price / type(jd|tao|pdd) / target
//  - jd:  target 填京东商品的小程序 path（appId 见 detail.js）
//  - tao: target 填淘口令或商品链接，走复制剪贴板
//  - pdd: target 填拼多多口令/链接，走复制剪贴板
const products = [
  { id:1, icon:'🥩', tag:'泪痕', sym:'tear', name:'鸭肉梨去泪痕鲜粮', desc:'单一动物蛋白·低致敏', old:158,
    ing:[['鲜鸭肉','42%'],['梨','6%'],['鹰嘴豆','12%'],['鸭油','—'],['益生菌','添加'],['粗蛋白','≥36%']],
    platforms:[
      { name:'天猫',  type:'tao', price:128, target:'5￥示例淘口令￥https://item.taobao.com/xxx' },
      { name:'京东',  type:'jd',  price:132, target:'/pages/item/item?sku=xxx' },
      { name:'拼多多', type:'pdd', price:119, target:'拼多多示例口令 https://mobile.yangkeduo.com/xxx' }
    ]},
  { id:2, icon:'🐟', tag:'软便', sym:'stool', name:'低敏三文鱼肠道粮', desc:'添加益生元·呵护肠胃', old:139,
    ing:[['鲜三文鱼','38%'],['南瓜','8%'],['车前子壳','3%'],['益生元FOS','添加'],['粗蛋白','≥34%'],['粗脂肪','≥15%']],
    platforms:[
      { name:'天猫',  type:'tao', price:115, target:'示例淘口令' },
      { name:'京东',  type:'jd',  price:118, target:'/pages/item/item?sku=xxx' },
      { name:'拼多多', type:'pdd', price:109, target:'拼多多示例口令' }
    ]},
  { id:3, icon:'🍗', tag:'掉毛', sym:'fur', name:'鸡肉海藻亮毛粮', desc:'Omega-3·美毛固色', old:168,
    ing:[['鲜鸡肉','40%'],['海藻粉','4%'],['亚麻籽','5%'],['鱼油DHA','添加'],['粗蛋白','≥35%'],['Omega-3','1.2%']],
    platforms:[
      { name:'天猫',  type:'tao', price:135, target:'示例淘口令' },
      { name:'京东',  type:'jd',  price:139, target:'/pages/item/item?sku=xxx' },
      { name:'拼多多', type:'pdd', price:126, target:'拼多多示例口令' }
    ]},
  { id:4, icon:'🦃', tag:'挑食', sym:'picky', name:'火鸡冻干双拼粮', desc:'85%肉含量·适口性强', old:198,
    ing:[['鲜火鸡肉','45%'],['冻干鸡心','8%'],['蔓越莓','3%'],['粗蛋白','≥40%'],['粗脂肪','≥16%'],['碳水','<20%']],
    platforms:[
      { name:'天猫',  type:'tao', price:158, target:'示例淘口令' },
      { name:'京东',  type:'jd',  price:162, target:'/pages/item/item?sku=xxx' },
      { name:'拼多多', type:'pdd', price:149, target:'拼多多示例口令' }
    ]},
  { id:5, icon:'🥗', tag:'体重', sym:'weight', name:'低脂轻体控重粮', desc:'高纤维·饱腹低卡', old:145,
    ing:[['鲜鸡胸肉','38%'],['豌豆纤维','10%'],['L-肉碱','添加'],['粗蛋白','≥33%'],['粗脂肪','≤9%'],['粗纤维','6%']],
    platforms:[
      { name:'天猫',  type:'tao', price:118, target:'示例淘口令' },
      { name:'京东',  type:'jd',  price:122, target:'/pages/item/item?sku=xxx' },
      { name:'拼多多', type:'pdd', price:109, target:'拼多多示例口令' }
    ]},
  { id:6, icon:'🧓', tag:'老年', sym:'senior', name:'7+关节肾护老年粮', desc:'低磷·氨糖软骨素', old:178,
    ing:[['鲜鸡肉','36%'],['氨基葡萄糖','添加'],['软骨素','添加'],['磷','≤0.6%'],['粗蛋白','≥30%'],['Omega-3','1.0%']],
    platforms:[
      { name:'天猫',  type:'tao', price:142, target:'示例淘口令' },
      { name:'京东',  type:'jd',  price:145, target:'/pages/item/item?sku=xxx' },
      { name:'拼多多', type:'pdd', price:133, target:'拼多多示例口令' }
    ]}
];

const reviews = [
  { av:'🐱', nm:'橘座麻麻', st:'★★★★★', tx:'橘猫吃了三周泪痕真的淡了，关键是成分表看得明明白白，鸭肉占比42%写得清清楚楚。' },
  { av:'🐶', nm:'柴犬团子', st:'★★★★★', tx:'狗狗肠胃敏感，换了肠道粮没再软便。检测报告能查到这点太加分了。' },
  { av:'🐈', nm:'布偶安妮', st:'★★★★☆', tx:'挑食猫居然吃了！冻干双拼香味确实够。比价后在拼多多买省了一点。' }
];

// 给每个商品算出最低价平台
function withLowest(p) {
  const sorted = [...p.platforms].sort((a, b) => a.price - b.price);
  const min = sorted[0].price;
  return Object.assign({}, p, {
    minPrice: min,
    platforms: p.platforms.map(pl => Object.assign({}, pl, { isLow: pl.price === min }))
  });
}

module.exports = {
  symptoms,
  reviews,
  getProducts: () => products.map(withLowest),
  getProduct: (id) => withLowest(products.find(p => p.id === Number(id))),
  getBySymptom: (sym) => products.filter(p => p.sym === sym).map(withLowest)
};
