import React, {ReactNode, useState} from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({children, title = 'This is the default title'}: Props) => {
    const [isOpen, setIsOpen] = useState(false);
 return (
     <div>
         <Head>
             <title>{title}</title>
             <meta charSet="utf-8"/>
             <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
         </Head>
         <header>
             <nav>
                 <Link href="/">
                     <a>Home</a>
                 </Link>{' '}
                 |{' '}
                 <Link href="/about">
                     <a>About</a>
                 </Link>{' '}
                 |{' '}
                 <Link href="/about2">
                     <a>About 2</a>
                 </Link>{' '}
                 |{' '}
                 <Link href="/users">
                     <a>Users List</a>
                 </Link>{' '}
                 | <Link href="http://www.google.com" passHref={true}>
                 <a target="_blank" rel="noopener noreferrer">
                     Users API
                 </a>
             </Link>
             </nav>
         </header>
         {children}
         <footer>
             &apos;
             <span>I'm here to stay (Footer)</span>
         </footer>
     </div>
 )
}

export default Layout
