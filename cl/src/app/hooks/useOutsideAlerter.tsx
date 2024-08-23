import React, { useEffect } from "react"

export const useOutsideAlerter = (ref: React.RefObject<HTMLElement>, callback: () => void, ignoreClickRefs: React.RefObject<HTMLElement>[]): void => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ignoreClickRefs.some(ref => ref.current && ref.current.contains(event.target as Node))) {
        return;
      }
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ignoreClickRefs, ref])
}