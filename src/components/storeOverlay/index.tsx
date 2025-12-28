import React from 'react'

/**
 * Store overlay component - placeholder.
 * The actual badge is injected directly into the store webview via StorePatch.
 * This component is kept for the global component registration but doesn't render anything.
 */
export default function StoreOverlay(): React.ReactElement {
  // Badge injection is handled by StorePatch using Runtime.evaluate
  // This component is just a placeholder for the global component system
  return <></>
}
