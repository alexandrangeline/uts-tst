import React, { ReactElement } from 'react'
import styles from './Header.module.scss'

const Header = () : ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        UTS II3160
      </div>
      <div className={styles.title}>
        Alexandra Angeline
      </div>
      <div className={styles.title}>
        18218033
      </div>
    </div>
  )
}

export default Header
