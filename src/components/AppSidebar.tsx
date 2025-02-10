
import { Github, Home, Menu, Search, Settings, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Search",
    url: "/",
    icon: Search,
  },
  {
    title: "GitHub",
    url: "https://github.com",
    icon: Github,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const isMobile = useIsMobile();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>RepoSeek</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.url}
              className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md hover:bg-accent"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
