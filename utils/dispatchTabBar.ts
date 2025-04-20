type Params<PageData> = {
  page: MiniProgram.Page.IInstance<PageData, any, any>,
  state: Record<string, number>
}

export function dispatchTabBar<PageData>({ page, state }: Params<PageData>) {

  if (typeof page.getTabBar === 'function' && page.getTabBar()) {
    page.getTabBar().setData(state)
  }

}