import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

function Legaldocs() {
  return (
    <div>
      
     <p variant="h6" >
     Skillhob is committed to protecting your personal data and complying with the UK Data Protection Act
        2018 and the General Data Protection Regulation (GDPR)
        </p>

    <Link href="/documents/legal/dataprotection.pdf" target="_blank" download>
    <Typography variant="h6" >
    Data Protection Policy
    </Typography>
    </Link>

    <Link href="/documents/legal/RighttoKnow.pdf" target="_blank" download>
    <Typography variant="h6" >
    Right to Know
    </Typography>
    </Link>


    </div>
  )
}

export default Legaldocs
