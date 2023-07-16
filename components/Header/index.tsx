import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Logo } from '../../libs/assets/images/index'
import { Button, List, ListItem, Typography } from '@mui/material'
import styles from './style.module.scss'
import clsx from 'clsx'
import Stack from '@components/Stack'
import { PrimaryButton } from '@components/Button'

const Header = () => {
  return (
    <Stack component="header" id="header">
      <Stack className={clsx(styles.Header, styles.MainContainer)}>
        <Typography variant="h1">
          <Link href="/">
            <Image src={Logo} className={styles.Img} objectFit="cover" alt="logo" />
          </Link>
        </Typography>
          <List className={styles.HeaderList}>
            <ListItem>
              <Link href="#!">会社情報</Link>
            </ListItem>
            <ListItem>
              <Link href="#!">ニュースリリース</Link>
            </ListItem>
            <ListItem>
              <Link href="#!">ブリーダー様へ</Link>
            </ListItem>
            <ListItem>
              <Link href="#!">店舗用物件募集中</Link>
            </ListItem>
            <ListItem>
              <Link href="#!">よくあるご質問</Link>
            </ListItem>
          </List>
          <Stack>
            <PrimaryButton />
            <Button>登録</Button>
          </Stack>
      </Stack>
    </Stack>
  )
}

export default Header