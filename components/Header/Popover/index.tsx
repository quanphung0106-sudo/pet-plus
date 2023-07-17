import React from 'react'
import styles from './style.module.scss'
import { List, ListItem, Popover, PopoverProps } from '@mui/material'
import Stack from '@components/Stack'
import { NavigationImage1 } from '@images/index'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { StaticImageData } from 'next/image'

interface PopOverData {
  id: number
  img?: StaticImageData
  listData: {
    title: string
    isHighLight?: boolean
    href: string
  }[]
}

const data: PopOverData[] = [
  {
    id: 1,
    img: NavigationImage1,
    listData: [
      {
        title: 'すべての犬種から探す',
        isHighLight: true,
        href: '#!',
      },
      {
        title: 'チワワ',
        href: '#!',
      },
      {
        title: 'トイ・プードル',
        href: '#!',
      },
      {
        title: 'ミニチュア・ダックスフンド',
        href: '#!',
      },
      {
        title: '柴',
        href: '#!',
      },
      {
        title: 'ヨークシャー・テリア',
        href: '#!',
      },
      {
        title: 'フレンチブルドッグ',
        href: '#!',
      },
      {
        title: 'ミニチュア・シュナウザー',
        href: '#!',
      },
    ],
  },
  {
    id: 2,
    img: NavigationImage1,
    listData: [
      {
        title: 'すべての犬種から探す',
        isHighLight: true,
        href: '#!',
      },
      {
        title: 'チワワ',
        href: '#!',
      },
      {
        title: 'トイ・プードル',
        href: '#!',
      },
      {
        title: 'ミニチュア・ダックスフンド',
        href: '#!',
      },
      {
        title: '柴',
        href: '#!',
      },
      {
        title: 'ヨークシャー・テリア',
        href: '#!',
      },
      {
        title: 'フレンチブルドッグ',
        href: '#!',
      },
      {
        title: 'ミニチュア・シュナウザー',
        href: '#!',
      },
    ],
  },
]

const NavigationPopover = (props: PopoverProps) => {
  const { open, ...rest } = props

  const popoverData = data.find((popData) => popData.id === 1)

  return (
    <Popover
      {...rest}
      className={styles.Popover}
      classes={{ paper: styles.PopoverPaper }}
      sx={{
        pointerEvents: 'all',
      }}
      open={open}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <Stack className={styles.PopoverPaperWrapper}>
        <Stack component="figure" className={styles.Figure}>
          <Image src={popoverData?.img ?? ''} alt="" />
        </Stack>
        <List className={styles.List}>
          {popoverData?.listData.map((data) => (
            <ListItem className={clsx(styles.ListItem, data.isHighLight ? styles.Top : '')}>
              <Link href={data.href}>{data.title}</Link>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Popover>
  )
}

export default NavigationPopover
