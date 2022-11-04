import { Box } from '@mui/system'
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const Redirect = ({link,children,target=false}) => {
    const navigate = useNavigate(link);

    const redirectFunction = useCallback(() => {
        if(target === false){
            navigate(link);
        }else if (target === true){
            window.open(link, '_blank');
        }
    }, [link, navigate,target]);

  return (
    <Box onClick={redirectFunction}>
      {children}
    </Box>
  )
}

export default Redirect
