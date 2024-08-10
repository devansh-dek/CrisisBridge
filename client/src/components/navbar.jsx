import { Link } from "react-router-dom";

const navlist = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Disasters',
        link: '/disasters'
    },
    {
        title: 'Awareness',
        link: '/awareness'
    },
    {
        title: 'Volunteer',
        link: '/volunteer'
    },
    {
        title: 'About us',
        link: '/about'
    },
]

function Navbar() {
  return (
    <div className="h-10 w-full bg-zinc-200">
        <div className="flex justify-around">
            {navlist.map((navItem) => {
                return (
                    <Link to={navItem.link}>
                        <div>{navItem.title}</div>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Navbar;