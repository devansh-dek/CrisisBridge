import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import logo from "../assets/logo.png"

const navlist = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Disasters",
    link: "/disasters",
  },
  {
    title: "Awareness",
    link: "/awareness",
  },
  {
    title: "Map",
    link: "/map",
  },
  {
    title: "About us",
    link: "/about",
  },
  {
    title : "Register",
    link: "/signup"
  }
];

function Navbar() {
  return (
    <NavigationMenu className=" m-1 ml-2">
      <NavigationMenuList>
        <NavigationMenuItem>
            <Link to="/">
                <img className=" h-20" src={logo}></img>
            </Link>
        </NavigationMenuItem>
        {navlist.map((navItem) => {
          return (
            <NavigationMenuItem>
              <Link to={navItem.link}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {navItem.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navbar;
