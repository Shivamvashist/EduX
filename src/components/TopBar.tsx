import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"
import { useThemeContext } from './ThemeProvider'
import { Sun, Moon, User, Settings, LogOut, BarChart3, PanelLeft } from "lucide-react"

type SidebarTab = 'dashboard' | 'courses' | 'skill-analysis' | 'redemption' | 'rewards';

interface TopBarProps {
  currentTab: SidebarTab;
  onProfile?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
}

const tabLabels: Record<SidebarTab, string> = {
  'dashboard': 'Dashboard',
  'courses': 'Courses',
  'skill-analysis': 'Skill Analysis',
  'redemption': 'Redemption',
  'rewards': 'Rewards'
};

export function TopBar({ currentTab, onProfile = () => {}, onSettings = () => {}, onLogout = () => {} }: TopBarProps) {
  const { theme, toggleTheme } = useThemeContext();
  const { toggleSidebar } = useSidebar();
  
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <button
          onClick={toggleSidebar}
          className="h-7 w-7 -ml-1 hover:bg-muted rounded p-1"
        >
          <PanelLeft className="h-4 w-4" />
        </button>
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/">
                EduX
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>{tabLabels[currentTab]}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="ml-auto flex items-center gap-2 px-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="h-8 w-8 hover:bg-muted rounded p-1"
        >
          {theme === 'dark' ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative h-8 w-8 rounded-full hover:bg-muted">
              <Avatar className="h-8 w-8">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=center" 
                  alt="Profile" 
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80" align="end" forceMount>
            {/* Profile Header */}
            <div className="flex items-center space-x-3 p-4">
              <Avatar className="h-12 w-12">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=center" 
                  alt="Profile" 
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">John Doe</h4>
                <p className="text-xs text-muted-foreground">Co-Founder Sprrrint & Kree8</p>
                <div className="flex items-center gap-1">
                  <div className="text-yellow-500">⭐</div>
                  <span className="text-sm font-medium">5 (35)</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Quick Stats */}
            <div className="p-4">
              <DropdownMenuLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                Quick Stats
              </DropdownMenuLabel>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-2xl font-bold">2,450</div>
                  <div className="text-xs text-muted-foreground">Total Points</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-xs text-muted-foreground">Courses</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-xs text-muted-foreground">Achievements</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold">#3</div>
                  <div className="text-xs text-muted-foreground">Rank</div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Menu Items */}
            <DropdownMenuItem onClick={onProfile} className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <BarChart3 className="mr-2 h-4 w-4" />
              <span>Analytics</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onSettings} className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onLogout} className="cursor-pointer text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}