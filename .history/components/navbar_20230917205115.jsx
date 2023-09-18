import Link from 'next/link'

function Navbar(){
    return(
        <nav className='bg-blue-500 mb-4 flex justify-between items-center px-20
        p-3 font-bold text-white transition-colors duration-500 hover:bg-purple-500'>
            <Link href="/" >
                <a className="text-white hover:text-gray-200">Home</a>
            </Link>
            <ul>
                <li>
                    <Link href="/about">
                        <a className="text-white hover:text-gray-200">About</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar
