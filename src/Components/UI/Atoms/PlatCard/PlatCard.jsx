import clsx from 'clsx'
import React from 'react'

export default function PlatCard(props) {
  return (
    <div {...props} className={clsx(props.className,'grid gap-2 lg:flex lg:justify-between py-2')}>{props.children}</div>
  )
}
