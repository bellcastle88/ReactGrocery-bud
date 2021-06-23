import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert, list}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
      // 2초 후 알람이 사라지도록
    },2000)
    return () => clearTimeout(timeout)
  }, [list])
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
