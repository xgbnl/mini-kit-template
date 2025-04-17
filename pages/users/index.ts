// Utils Imports
import { dispatchTabBar } from 'utils/dispatchTabBar'

type PageData = {}

Page<PageData>({
  data: {},
  onLoad() { },
  onShow(): void {
    dispatchTabBar<PageData>({ page: this, state: { current: 1 } })
  }
});
