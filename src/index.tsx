import React from 'react'
import { definePlugin, staticClasses } from '@decky/ui'
import { routerHook } from '@decky/api'
import { FaReact } from 'react-icons/fa'

import Settings from './components/settings'
import StoreOverlay from './components/storeOverlay'
import patchLibraryApp from './lib/patchLibraryApp'
import { initStorePatch } from './patches/StorePatch'
import { loadSettings } from './hooks/useSettings'

export default definePlugin(() => {
  loadSettings()
  const libraryPatch = patchLibraryApp()
  const stopStorePatch = initStorePatch()

  // Register store overlay as global component (renders on all routes)
  routerHook.addGlobalComponent('ProtonDBStoreOverlay', StoreOverlay)

  return {
    title: <div className={staticClasses.Title}>ProtonDB Badges Extended</div>,
    icon: <FaReact />,
    content: <Settings />,
    onDismount() {
      routerHook.removePatch('/library/app/:appid', libraryPatch)
      routerHook.removeGlobalComponent('ProtonDBStoreOverlay')
      stopStorePatch()
    }
  }
})
