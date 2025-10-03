<!DOCTYPE html>
<html lang="en" class="{{ session('admin.dark_mode') ? 'dark' : '' }}" x-data="{ darkMode: @json(session('admin.dark_mode', false)) }" x-init="$watch('darkMode', val => {
          document.documentElement.classList.toggle('dark', val);
          try { localStorage.setItem('darkMode', val); } catch(e) {}
      })">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $title ?? config('app.name') }} | Programmer ng Bayan</title>

    <!-- Alpine.js for interactivity -->
    <script>
        (function() {
            try {
                const ls = localStorage.getItem('darkMode');
                if (ls !== null) {
                    if (ls === 'true') document.documentElement.classList.add('dark');
                    else document.documentElement.classList.remove('dark');
                }
            } catch (e) {
                console.error(e);
            }
        })();

    </script>

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <!-- Styles -->
    @livewireStyles
</head>

<body class="font-sans antialiased bg-gray-100 dark:bg-neutral-900 ">
    {{-- x-data="sidebarApp()" x-init="init()" <aside class="fixed top-0 left-0 h-screen bg-white dark:bg-neutral-800 border-r border-gray-200 dark:border-none sidebar-transition z-50 " :class="isCollapsed ? 'w-16' : 'w-64'">

        <!-- Sidebar Header -->
        <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-neutral-700 h-16">
            <h2 class="text-lg font-semibold text-gray-800 dark:text-neutral-200 text-fade overflow-hidden" :class="{ 'opacity-0 w-0': isCollapsed }" x-cloak x-show="!isCollapsed" x-transition:enter="transition-opacity duration-300 delay-150" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition-opacity duration-150" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
                LabGuard
            </h2>
            <button @click="toggleSidebar()" class="p-2 text-gray-500 dark:text-neutral-200 hover:text-gray-700 hover:dark:text-neutral-50 hover:bg-gray-100 hover:dark:bg-neutral-700 rounded-lg transition-colors duration-200 flex-shrink-0" :class="{ 'mx-auto': isCollapsed }">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <!-- Sidebar Navigation -->
        <nav class="flex-1 px-3 py-4 space-y-4" :class="isCollapsed ? 'w-16' : 'w-64'">
            <!-- Dashboard -->
            <div class="nav-item relative">
                <a wire:navigate href="{{ route('dashboard') }}" @class(["flex items-center px-3 py-2.5 text-sm font-medium dark:text-neutral-200 text-gray-700 rounded-lg hover:dark:bg-neutral-700 hover:bg-yellow-100 hover:text-yellow-700 hover:dark:text-neutral-300 group transition-all duration-200", 'nav-link-active'=> request()->routeIs('dashboard')]) :class="{ 'justify-center': isCollapsed }">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="size-5 flex-shrink-0 group-hover:text-yellow-700 group-hover:dark:text-neutral-200 icon-transition" :class="{ 'mr-0': isCollapsed, 'mr-3': !isCollapsed }">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
    </svg>
    <span class="text-fade overflow-hidden" x-cloak x-show="!isCollapsed" x-transition:enter="transition-opacity duration-300 delay-150" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition-opacity duration-150" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
        Dashboard
    </span>
    </a>
    <div class="tooltip" x-show="isCollapsed" x-cloak>Dashboard</div>
    </div>

    <!-- Activities Section -->
    <div class="pt-4 space-y-1">
        <h3 class="px-3 mb-2.5 text-[10px] font-semibold text-gray-500 dark:text-neutral-200 uppercase tracking-wider text-fade overflow-hidden" x-cloak x-show="!isCollapsed" x-transition:enter="transition-opacity duration-300 delay-150" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition-opacity duration-150" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
            Activities
        </h3>

        <!-- Environmental Data -->
        <div class="nav-item relative">
            <a wire:navigate href="{{ route('environment') }}" @class(["flex items-center px-3 py-2.5 text-sm font-medium dark:text-neutral-200 text-gray-700 rounded-lg hover:dark:bg-neutral-700 hover:bg-yellow-100 hover:text-yellow-700 hover:dark:text-neutral-300 group transition-all duration-200", 'nav-link-active'=> request()->routeIs('environment')]) :class="{ 'justify-center': isCollapsed }">
                <svg class="flex-shrink-0 w-5 h-5 group-hover:text-yellow-700 group-hover:dark:text-neutral-200 icon-transition" :class="{ 'mr-0': isCollapsed, 'mr-3': !isCollapsed }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                <span class="text-fade overflow-hidden" x-show="!isCollapsed" x-transition:enter="transition-opacity duration-300 delay-150" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition-opacity duration-150" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
                    Environmental Data
                </span>
            </a>
            <div class="tooltip" x-cloak x-show="isCollapsed">Environmental Data</div>
        </div>

        <!-- Contamination Log -->
        <div class="nav-item relative">
            <a wire:navigate href="{{ route('contamination-log') }}" @class(["flex items-center px-3 py-2.5 text-sm font-medium dark:text-neutral-200 text-gray-700 rounded-lg hover:dark:bg-neutral-700 hover:bg-yellow-100 hover:text-yellow-700 hover:dark:text-neutral-300 group transition-all duration-200", 'nav-link-active'=> request()->routeIs('contamination-log')]) :class="{ 'justify-center': isCollapsed }">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="size-5 flex-shrink-0 group-hover:text-yellow-700 group-hover:dark:text-neutral-200 icon-transition" :class="{ 'mr-0': isCollapsed, 'mr-3': !isCollapsed }">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
                <span class="text-fade overflow-hidden" x-cloak x-show="!isCollapsed" x-transition:enter="transition-opacity duration-300 delay-150" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition-opacity duration-150" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
                    Contamination Log
                </span>
            </a>
            <div class="tooltip" x-cloak x-show="isCollapsed">Contamination Log</div>
        </div>

        <!-- Sterilization Log -->
        <div class="nav-item relative">
            <a wire:navigate href="{{ route('sterilization-log') }}" @class(["flex items-center px-3 py-2.5 text-sm font-medium dark:text-neutral-200 text-gray-700 rounded-lg hover:dark:bg-neutral-700 hover:bg-yellow-100 hover:text-yellow-700 hover:dark:text-neutral-300 group transition-all duration-200", 'nav-link-active'=> request()->routeIs('sterilization-log')]) :class="{ 'justify-center': isCollapsed }">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="size-5 flex-shrink-0 group-hover:text-yellow-700 group-hover:dark:text-neutral-200 icon-transition" :class="{ 'mr-0': isCollapsed, 'mr-3': !isCollapsed }">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
                <span class="text-fade overflow-hidden" x-cloak x-show="!isCollapsed" x-transition:enter="transition-opacity duration-300 delay-150" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition-opacity duration-150" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
                    Sterilization Log
                </span>
            </a>
            <div class="tooltip" x-cloak x-show="isCollapsed">Sterilization Log</div>
        </div>
    </div>
    </nav>

    <!-- Bottom Section -->
    <div class="absolute bottom-0 w-full p-3 ">
        <div class="mb-5 border-t border-b border-gray-200 dark:border-neutral-700 space-y-1 py-4">

            <!-- Notifications -->
            <livewire:component.notification-button />

            <!-- Dark Mode -->
            <livewire:component.darkmode-button />

            <!-- Settings -->
            <div class="nav-item relative">
                <a wire:navigate href="{{ route('settings') }}" @class(["flex items-center px-3 py-2.5 text-sm font-medium dark:text-neutral-200 text-gray-700 rounded-lg hover:dark:bg-neutral-700 hover:bg-yellow-100 hover:text-yellow-700 hover:dark:text-neutral-300 group transition-all duration-200", 'nav-link-active'=> request()->routeIs('settings')]) :class="{ 'justify-center': isCollapsed }">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="size-5 flex-shrink-0 group-hover:text-yellow-700 group-hover:dark:text-neutral-200 icon-transition" :class="{ 'mr-0': isCollapsed, 'mr-3': !isCollapsed }">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <span class="text-fade overflow-hidden" x-cloak x-show="!isCollapsed" x-transition:enter="transition-opacity duration-300 delay-150" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition-opacity duration-150" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
                        Settings
                    </span>
                </a>
                <div class="tooltip" x-cloak x-show="isCollapsed">Settings</div>
            </div>
        </div>

        <!-- Logout -->
        <div class="nav-item relative ">
            <a wire:navigate href="{{ route('logout') }}" @class(["flex items-center px-3 py-2.5 text-sm font-medium dark:text-neutral-200 text-gray-700 rounded-lg hover:dark:bg-neutral-700 hover:bg-yellow-100 hover:text-yellow-700 hover:dark:text-neutral-300 group transition-all duration-200", 'nav-link-active'=> request()->routeIs('logout')]) :class="{ 'justify-center': isCollapsed }">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="size-5 flex-shrink-0 group-hover:text-yellow-700 group-hover:dark:text-neutral-200 icon-transition" :class="{ 'mr-0': isCollapsed, 'mr-3': !isCollapsed }    ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
                <span class="text-fade overflow-hidden" x-cloak x-show="!isCollapsed" x-transition:enter="transition-opacity duration-300 delay-150" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition-opacity duration-150" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
                    Logout
                </span>
            </a>
            <div class="tooltip" x-cloak x-show="isCollapsed">Logout</div>
        </div>

    </div>
    </aside>

    <!-- Mobile backdrop -->
    <div x-show="showMobileSidebar" x-transition:enter="transition-opacity ease-linear duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition-opacity ease-linear duration-300" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" class="fixed inset-0 bg-gray-600 bg-opacity-75 z-30 lg:hidden" @click="showMobileSidebar = false" x-cloak></div> --}}

    <!-- Main Content -->
    <main class="sidebar-transition min-h-screen" :class="isCollapsed ? 'ml-16' : 'ml-64'">
        {{ $slot ?? '' }}
    </main>

    {{-- <x-toast /> --}}
    @livewireScripts
</body>
</html>
