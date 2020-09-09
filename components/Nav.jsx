// import Link from 'next/link'
import { Box, Link, Flex, Button } from '@chakra-ui/core'
import NextLink from 'next/link'

const Nav = () => {
  const navItems = [
    {
      label: 'Campaigns',
      href: '/campaigns'
    },
    {
      label: 'Volunteer',
      href: '/volunteer'
    },
    {
      label: 'Media',
      href: '/media'
    },
    {
      label: 'About',
      href: '/about'
    }
  ]

  const navStyles = {
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '100rem',
    margin: '0 auto',
    // background: 'orange',
    height: '5.25rem',
    px: 4
  }

  const NavLink = ({ href, label, ...props }) => (
    <NextLink href={href}>
      <Link
        pl={8}
        fontSize='1.25rem'
        fontWeight={500}
        letterSpacing='-0.01em'
        {...props}
      >
        {label}
      </Link>
    </NextLink>
  )

  return (
    <Flex as='nav' role='navigation' {...navStyles}>
      <Flex alignItems='center'>
        <NextLink href='/'>
          <Link>
            <img
              src={require('../public/images/getup_logo.png')}
              style={{ maxWidth: '100px' }}
            />
          </Link>
        </NextLink>
        {navItems.map(n => (
          <NavLink href={n.href} label={n.label} display={['none', 'block']} />
        ))}
      </Flex>

      <Flex alignItems='center'>
        <NavLink
          href='#'
          label='Get involved'
          pr={8}
          display={['none', 'block']}
        />
        <Button colorScheme='primary'>Donate</Button>
      </Flex>
    </Flex>
  )
}

export default Nav
