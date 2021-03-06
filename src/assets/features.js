import menu from './menu.json'

function normalizeComps (list) {
  let acc = [
    {
      name: 'Layout',
      path: 'layout'
    },
    {
      name: 'Layout Header',
      path: 'header-and-footer'
    },
    {
      name: 'Layout Footer',
      path: 'header-and-footer'
    },
    {
      name: 'Layout Drawer',
      path: 'drawer'
    },
    {
      name: 'Layout Page',
      path: 'page'
    },
    {
      name: 'Page Sticky',
      path: 'page-sticky'
    },
    {
      name: 'Page Scroller',
      path: 'page-scroller'
    }
  ]

  list.forEach(entry => {
    if (entry.children) {
      acc = acc.concat(entry.children)
    } else {
      acc.push(entry)
    }
  })

  return acc.sort((a, b) => a.name.localeCompare(b.name))
}

export default {
  comps: normalizeComps(menu.find(entry => entry.name === 'Vue 组件').children),
  dirs: menu.find(entry => entry.name === 'Vue 指令').children,
  plugins: menu.find(entry => entry.name === 'Quasar 插件').children
}
