import SectionHeader from "@/components/SectionHeader";
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const Testimonials = () => {
  return (
    //   <NavigationMenu className="flex items-center space-x-1">
    //   <NavigationMenuList>
    //     <NavigationMenuItem>
    //       <NavigationMenuLink href="/" className={"flex items-center gap-1"}>
    //         Home
    //       </NavigationMenuLink>
    //     </NavigationMenuItem>

    //     <NavigationMenuItem>
    //       <NavigationMenuLink href="/about" className={"flex items-center gap-1"}>
    //         About
    //       </NavigationMenuLink>
    //     </NavigationMenuItem>

    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger className="flex items-center gap-1">
    //         Work
    //       </NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //         <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
    //           <NavigationMenuLink href="/books" className={"flex items-center gap-1"}>
    //             Books
    //           </NavigationMenuLink>
    //           <NavigationMenuLink href="/papers" className={"flex items-center gap-1"}>
    //             Papers
    //           </NavigationMenuLink>
    //         </div>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>

    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger className="flex items-center gap-1">
    //         Components
    //       </NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>
        
    //     <NavigationMenuItem>
    //       <NavigationMenuLink href="/about" className="ml-2 bg-red-600 hover:bg-red-700 text-white">
    //         Donate
    //       </NavigationMenuLink>
    //     </NavigationMenuItem>
    //   </NavigationMenuList>
    //   <NavigationMenuIndicator />
    // </NavigationMenu>
    <SectionHeader
      title="Testimonials"
      subtitle="What people had to say about Professor Proeva."
    />
  )

};

export default Testimonials;