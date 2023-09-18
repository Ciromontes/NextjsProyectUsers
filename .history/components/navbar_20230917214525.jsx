import Link from 'next/link'

function Navbar(){
    return(
        <nav className='bg-blue-900 mb-4 flex justify-between items-center px-20
        p-3 font-bold text-white transition-colors duration-500 hover:bg-purple-500'>
            <Link href="/">
                Home
            </Link>
            <ul>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar
