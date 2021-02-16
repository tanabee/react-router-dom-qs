import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export default function useQueryString() {
  const { search } = useLocation()

  const queryString = useMemo(() => {
    if (search === '') return {}

    let obj = {}
    search
      .replace('?', '')
      .split('&')
      .forEach(x => {
        const [key, value] = x.split('=')
        obj[key] = value
      })
    return obj
  }, [search])

  return queryString
}
