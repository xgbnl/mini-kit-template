// Utils Imports
import { dispatchTabBar } from 'utils/dispatchTabBar'

type PageData = {
  avatar: string
  items: {title:string;icon:string}[]
}

Page<PageData>({
  data: {
    avatar: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
    items: [
      {
        title: '生活缴费',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*MwsuTZI4qA8AAAAAAAAAAAAAARQnAQ',
    },
    {
        title: '市民中心',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*xXRcRohQFc0AAAAAAAAAAAAAARQnAQ',
    },
    {
        title: '公积金',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*UJf2QLxdoa8AAAAAAAAAAAAAARQnAQ',
    },
    ]
  },
  onLoad() { },
  onShow(): void {
    dispatchTabBar<PageData>({ page: this, state: { current: 1 } })
  }
});
