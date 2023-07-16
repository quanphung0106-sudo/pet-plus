import Link from 'next/link'
import React, { MouseEvent, useState } from 'react'
import Image from 'next/image'
import { Logo } from '../../libs/assets/images/index'
import { List, ListItem, Popover, Typography } from '@mui/material'
import styles from './style.module.scss'
import clsx from 'clsx'
import { PrimaryButton, TextButton } from '@components/Button'
import Stack from '@components/Stack'

interface NavigationListType {
  id: number
  title: string
  href: string
}

const navigationList: NavigationListType[] = [
  {
    id: 1,
    title: 'ホーム',
    href: '#!',
  },
  {
    id: 2,
    title: 'ペットを見つける',
    href: '#!',
  },
  {
    id: 3,
    title: '店舗を探す',
    href: '#!',
  },
  {
    id: 4,
    title: 'サービス',
    href: '#!',
  },
  {
    id: 5,
    title: '特集・ランキング',
    href: '#!',
  },
  {
    id: 6,
    title: 'PetPlusの想い',
    href: '#!',
  },
  {
    id: 7,
    title: 'お問い合わせ',
    href: '#!',
  },
]

const Header = () => {
  const [isHover, setIsHover] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

  const handleOnMouseEnter = (event: MouseEvent<HTMLElement>) => {
    setIsHover(true)
    setAnchorEl(event.currentTarget)
  }

  const handleOnMouseLeave = () => {
    setIsHover(false)
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)

  return (
    <Stack className={styles.HeaderWrapper} direction="column" component="header" id="header">
      <Stack className={clsx(styles.Header, styles.MainContainer)}>
        <Link href="/">
          <Typography variant="h1">
            <Image src={Logo} className={styles.Img} objectFit="cover" alt="logo" />
          </Typography>
        </Link>
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
        <Stack className={styles.HeaderCta}>
          <TextButton>登録</TextButton>
          <PrimaryButton>ログイン</PrimaryButton>
        </Stack>
      </Stack>
      <Stack component="nav" className={styles.Navigation}>
        <List className={clsx(styles.NavigationList, isHover ? styles.Hover : '')}>
          {navigationList.map((navItem) => {
            return (
              <ListItem
                className={styles.ListItem}
                onMouseEnter={(e) => handleOnMouseEnter(e)}
                onMouseLeave={() => handleOnMouseLeave()}
              >
                <Link href={navItem.href}>{navItem.title}</Link>
              </ListItem>
            )
          })}
        </List>
      </Stack>
    </Stack>
  )
}

export default Header
