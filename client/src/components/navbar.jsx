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
import logo from "../assets/logo.png";
import { Button } from "./ui/button";

const navlist = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Game",
    link: "/game",
  },
  {
    title: "Map",
    link: "/map",
  },
  {
    title: "Awareness",
    link: "/awareness",
  },
  {
    title: "Register Organization",
    link: "/register",
  },
  {
    title: "Register as an individual",
    link: "/signup",
  },
];

function Navbar() {
  return (
    <div className="flex items-center justify-between">
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
      <div className="mr-10">
        <Link to="/game2">
         <Button className="rounded-3xl w-full text-xl">Take a quiz!</Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
