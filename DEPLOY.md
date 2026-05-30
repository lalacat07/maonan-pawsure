# 毛安 PawSure · 上线部署说明

站点是纯静态单文件,根目录的 `index.html` 即完整站点,**无需任何构建步骤**。

## 方式 A:Vercel 导入 GitHub(推荐,自动持续部署)
1. 把本文件夹推到一个 GitHub 仓库:
   ```bash
   git init && git add . && git commit -m "毛安 PawSure 上线"
   git branch -M main
   git remote add origin https://github.com/<你的用户名>/maoan-pawsure.git
   git push -u origin main
   ```
2. 打开 https://vercel.com/new → Import 这个仓库。
3. Framework Preset 选 **Other**,Build Command 留空,Output Directory 留空(根目录),点 **Deploy**。
4. 几十秒后拿到 `https://maoan-pawsure.vercel.app` 之类的网址。之后每次 `git push` 自动更新。

## 方式 B:Vercel CLI(最快)
```bash
npm i -g vercel
cd 此文件夹
vercel        # 首次会让你登录并确认项目,一路回车即可
vercel --prod # 发正式版,输出最终网址
```

## 方式 C:GitHub Pages
推到仓库后,Settings → Pages → Source 选 `main` 分支根目录 → Save,得到 `https://<用户名>.github.io/<仓库名>/`。

---

## 关于商品图和购买链接
- **购买链接**:6 款商品的「去购买」按钮已接真实平台搜索深链——点击直达京东/天猫/拼多多对应关键词的**真实在售列表**。本站定位为选粮导购+比价,不经手交易,符合页面底部声明。
- **商品图**:当前用的是可外链的真实猫粮照片占位(带破图自动回退到图标)。要换成某款的精确实拍图,把图片发我,或在 `index.html` 的 `products` 数组里把对应 `img:` 换成你的图片地址即可。
- **价格**:目前为示例价,页面已注明。要接真实比价需对接平台 API 或人工维护。
