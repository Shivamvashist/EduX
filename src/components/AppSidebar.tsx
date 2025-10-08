import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  User,
  Settings,
  LogOut,
  ChevronUp
} from "lucide-react"

type SidebarTab = 'dashboard' | 'courses' | 'skill-analysis' | 'redemption' | 'rewards';

interface AppSidebarProps {
  currentTab: SidebarTab;
  onTabChange: (tab: SidebarTab) => void;
  onProfile?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
}

const navigationItems = [
  {
    title: "Main",
    items: [
      { id: 'dashboard' as SidebarTab, label: 'Dashboard', badge: null },
      { id: 'courses' as SidebarTab, label: 'Courses', badge: '12' },
      { id: 'skill-analysis' as SidebarTab, label: 'Skill Analysis', badge: null },
      { id: 'redemption' as SidebarTab, label: 'Redemption', badge: 'New' },
      { id: 'rewards' as SidebarTab, label: 'Rewards', badge: '3' },
    ]
  }
];

export function AppSidebar({ 
  currentTab, 
  onTabChange, 
  onProfile = () => {}, 
  onSettings = () => {}, 
  onLogout = () => {} 
}: AppSidebarProps) {
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="flex items-center gap-2">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-500 text-sidebar-primary-foreground">
                  <div className="text-lg font-bold text-white">E</div>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">EduX Platform</span>
                  <span className="truncate text-xs text-muted-foreground">Learning & Development</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {navigationItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel className="font-semibold">{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton 
                      isActive={currentTab === item.id}
                      onClick={() => onTabChange(item.id)}
                      className="relative font-semibold"
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage 
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=center" 
                      alt="User" 
                    />
                    <AvatarFallback className="rounded-lg bg-blue-500 text-white">JD</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">John Doe</span>
                    <span className="truncate text-xs text-muted-foreground">john@edux.com</span>
                  </div>
                  <ChevronUp className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuItem onClick={onProfile} className="cursor-pointer">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onSettings} className="cursor-pointer">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings  
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onLogout} className="cursor-pointer text-red-600">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}