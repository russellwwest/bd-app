import { useEffect } from 'react'
import { useSetAtom } from 'jotai'
import { pagePropsAtom } from '../state/general.state'

export function useSetHeader (title, fullSize = false) {
  const setPageProps = useSetAtom(pagePropsAtom)
  useEffect(() => {
    setPageProps({ title, fullSize })
  }, [title, fullSize, setPageProps])
}