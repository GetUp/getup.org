import { Grid } from '@chakra-ui/core'

const DefaultGrid = ({ children, ...props }) => (
  <Grid
    maxWidth='100rem'
    gridTemplateColumns='repeat(12, 1fr)'
    mx='auto'
    px='calc(env(safe-area-inset-left) + var(--page-padding))'
    {...props}
  >
    {children}
  </Grid>
)

export default DefaultGrid
