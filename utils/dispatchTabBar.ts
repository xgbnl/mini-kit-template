export function dispatchTabBar<PageData>({ page, state: payload }: { page: MiniProgram.Page.IInstance<PageData, any, any>, state: Record<string, number> }) {

  if (typeof page.getTabBar === 'function' && page.getTabBar()) {
    page.getTabBar().setData(payload)
  }

}