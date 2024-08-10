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
    title: "Volunteer",
    link: "/volunteer",
  },
  {
    title: "About us",
    link: "/about",
  },
];

function Navbar() {
  return (
    <NavigationMenu className=" m-1 ml-2">
      <NavigationMenuList>
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
