import { Paginator } from 'types/index'

// Utils Imports
import {dispatchTabBar} from 'utils/dispatchTabBar'

type PageData = {
  SDKVersion?: string,
}

Page<PageData>({
  data: {
    SDKVersion: '',
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow(): void {
    // 页面显示
    this.setData({
      SDKVersion: my.SDKVersion,
    })

    dispatchTabBar<PageData>({page: this,state: {current: 0}})

  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});