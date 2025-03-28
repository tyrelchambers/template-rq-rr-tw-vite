import * as React from "react";
import { Command } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  faBook,
  faHexagon,
  faMemoPad,
  faTicket,
  faUser,
} from "@fortawesome/pro-regular-svg-icons";

// This is sample data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: <FontAwesomeIcon icon={faHexagon} />,
      isActive: true,
    },
    {
      title: "Tickets",
      url: "#",
      icon: <FontAwesomeIcon icon={faTicket} />,
      isActive: false,
    },
    {
      title: "Customers",
      url: "#",
      icon: <FontAwesomeIcon icon={faUser} />,
      isActive: false,
    },
    {
      title: "Memo Pad",
      url: "#",
      icon: <FontAwesomeIcon icon={faMemoPad} />,
      isActive: false,
    },
    {
      title: "Knowledge Base",
      url: "#",
      icon: <FontAwesomeIcon icon={faBook} />,
      isActive: false,
    },
  ],
  mails: [],
};

export function AppSidebar() {
  // Note: I'm using state to show active item.
  // IRL you should use the url/router.
  const [activeItem, setActiveItem] = React.useState(data.navMain[0]);
  const { setOpen } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r"
    >
      {/* This is the first sidebar */}
      {/* We disable collapsible and adjust width to icon. */}
      {/* This will make the sidebar appear as icons. */}

      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="px-1.5 md:px-0">
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={{
                      children: item.title,
                      hidden: false,
                    }}
                    onClick={() => {
                      setActiveItem(item);

                      setOpen(true);
                    }}
                    isActive={activeItem?.title === item.title}
                    className="px-2.5 md:px-2"
                  >
                    {item.icon}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
