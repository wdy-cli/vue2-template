import { isEmpty } from '@u/validate'

export const recursion = (children, key) => {
  const arr = []
  if (!children) return
  children.forEach(item => {
    if (isEmpty(item[key])) {
      item.children = recursion(item[key])
    }
    arr.push(item)
  })
  return arr
}
