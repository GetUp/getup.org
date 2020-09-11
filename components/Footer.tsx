import { Box, Text } from '@chakra-ui/core'
import DefaultGrid from './DefaultGrid'

const Footer = () => (
  <Box as="footer" py={32} backgroundColor="gray.100">
    <DefaultGrid>
      <Box gridColumn="span 12">
        <Text mb={4}>
          Our team acknowledges that we meet and work on the land of the Gadigal
          people of the Eora Nation. We wish to pay respect to their Elders —
          past, present and future — and acknowledge the important role all
          Aboriginal and Torres Strait Islander people continue to play within
          Australia and the GetUp community.
        </Text>
        <Text mb={4}>
          WARNING: Aboriginal and Torres Strait Islander people are warned that
          this website may contain images or names of deceased persons.
        </Text>
        <Text mb={4}>
          © {new Date().getFullYear()} GetUp! All rights reserved. Authorised by
          Paul Oosting, GetUp, Sydney.
        </Text>
      </Box>
    </DefaultGrid>
  </Box>
)

export default Footer
