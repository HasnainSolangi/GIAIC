import Link from "next/link"
import link from "next/link"
function Navbar(){
    return(

<ul className="flex justify-center items-center gap-5">
    
<li><Link href="/" className="bg-green-300">
    Home
    </Link></li>
    
    <li><Link href="about">
    About
    </Link></li>
    <li><Link href="contact">
    Contact
    </Link></li>
    <li><Link href="feedback">
    Feedback
    </Link></li>
  </ul>
    )

}

export default Navbar