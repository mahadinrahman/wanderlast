'use client'
import { useState } from "react";
import { Link, Button, Avatar } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const { 
        data: session, 
    } = authClient.useSession() 
   
    const user=session?.user;
    // console.log(user);

    const handleLogOut=async()=>{
      await authClient.signOut();
    }
    return (
        <div>
             <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div><img src="Wanderlast.png" alt="logo" /></div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link href="/home">Home</Link>
          </li>
           <li>
            <Link href="/all-destination">All Destination</Link>
          </li>
          
          <li>
            <Link href="/bookings">My Bookings</Link>
          </li>
          <li>
            <Link href="/add-destinations">Add a Destination</Link>
          </li>
         
        </ul>
        {
          user?
          <div className=" items-center gap-4 flex">
          <Link href="/profile" className="no-underline"><Avatar>
        <Avatar.Image referrerPolicy="no-referrer" alt="John Doe" src={user?.image} />
        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
      </Avatar></Link>
          
          <Link href="/"  className="no-underline"><Button variant="danger"  onClick={handleLogOut}>Log Out</Button></Link>
          </div>
          :
          <>
          <ul className=" items-center gap-4 flex">
         
          <li>
            <Link href="/signin"  className="no-underline"><Button variant="outline">Sign in</Button></Link>
          </li>
          <li>
            <Link href="/signup" className="no-underline"><Button variant="outline">Sign up</Button></Link>
          </li>
        </ul>
        </>
        }
        
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
            <Link href="/home">Home</Link>
          </li>
           <li>
            <Link href="/all-destination">All Destination</Link>
          </li>
          
          <li>
            <Link href="/bookings">My Bookings</Link>
          </li>
          <li>
            <Link href="/add-destinations">Add a Destination</Link>
          </li>
          </ul>
        </div>
      )}
    </nav>
        </div>
    );
};

export default Navbar;