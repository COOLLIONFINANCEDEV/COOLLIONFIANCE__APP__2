import { Box } from '@mui/system'
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const Redirect = ({link,children}) => {
    const navigate = useNavigate(link);

    const redirectFunction = useCallback(() => {
        navigate(link);
    }, [link, navigate]);

  return (
    <Box onClick={redirectFunction}>
      {children}
    </Box>
  )
}

export default Redirect
