import { Button } from '@chakra-ui/core'
interface ButtonProps {
  children: React.ReactNode
  as?: string
  [x: string]: any
}

const CustomButton = ({ children, as = 'button', ...props }: ButtonProps) => {
  return (
    <Button
      as={as}
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      p="8px"
      rounded="2px"
      fontWeight="semibold"
      bg="secondary.500"
      minWidth="10rem"
      borderRadius="4px"
      color="white"
      size="lg"
      _hover={{ bg: 'secondary.400' }}
      _active={{
        bg: 'secondary.400',
        transform: 'scale(0.98)',
        borderColor: 'secondary.100',
      }}
      _focus={{
        boxShadow:
          '0 0 1px 3px rgba(88, 144, 255, .5), 0 1px 1px rgba(0, 0, 0, .15)',
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

export default CustomButton
