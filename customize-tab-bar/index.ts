// Types Imports
import type { TabBarItem } from 'types/apps/tabbarType'

type PageData = {
  tabs: TabBarItem[]
  current: number
}

Component<PageData>({
  data: {
    current: 0,
    tabs: [
      {
        icon: 'AlipayCircleFill',
        activeIcon: 'AlipayCircleFill',
        text: 'homr',
        page: '/pages/index/index'
      },
      {
        icon: 'HeartOutline',
        activeIcon: 'HeartFill',
        text: 'like',
        page: '/pages/users/index'
      },
    ]
  },
  methods: {
    handleChange(index: number): void {

      const tabBar: TabBarItem = this.data.tabs[index]
console.log(index);

      this.setData({ current: index }, (): void => {
        my.switchTab({ url: tabBar.page })
      })

    }
  },
});
