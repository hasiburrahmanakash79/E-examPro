import { Line } from 'rc-progress'
import React from 'react'

const ProgressBar = ({ percent }) => {
  return (
    <Line
      className=''
      percent={percent}
      strokeWidth='1'
      strokeColor='#00bfff'
    ></Line>
  )
}

export default ProgressBar
