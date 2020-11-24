import React from "react"
import Typography from '@material-ui/core/Typography';
export default function Title({children}) {
  return (
    <Typography component="h1" variant="h6" color="inherit" noWrap>
    {children}
    </Typography>
  )
}