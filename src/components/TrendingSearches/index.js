import React, {Suspense} from 'react'
import useNearScreen from 'hooks/useNearScreen'
import Spinner from 'components/Spinner'

const TrendingSearches = React.lazy(
  () => import('./TrendingSearches')
)

export default function LazyTrending () {
  const {isNearScreen, fromRef} = useNearScreen({
    distance: '0px'
  })

  return <div ref={fromRef}>
    <Suspense fallback={<Spinner />}>
      {isNearScreen ? <TrendingSearches /> : <Spinner />}
    </Suspense>
  </div>
}