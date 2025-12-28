import { useEffect, useState } from 'react'
import { storeAppId$ } from '../patches/StorePatch'

/**
 * Hook to get the current app ID from the Steam store page.
 * Returns empty string when not on a store page or no app is being viewed.
 */
export function useStoreAppId(): string {
  const [appId, setAppId] = useState(storeAppId$.value)

  useEffect(() => {
    console.log('ProtonDB useStoreAppId: Subscribing, initial value:', storeAppId$.value)
    const subscription = storeAppId$.subscribe((value) => {
      console.log('ProtonDB useStoreAppId: Value changed to:', value)
      setAppId(value)
    })

    return () => {
      console.log('ProtonDB useStoreAppId: Unsubscribing')
      subscription.unsubscribe()
    }
  }, [])

  return appId
}
