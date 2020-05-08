const cache = new WeakMap()

export default function useAsyncData(fn, key) {
  let data = cache.get(key || fn)
  if (!data) {
    data = fn().then(value => cache.set(key || fn, value))
    cache.set(key || fn, data)
  }

  if (data && typeof data.then === 'function') {
    throw data
  }

  return data
}