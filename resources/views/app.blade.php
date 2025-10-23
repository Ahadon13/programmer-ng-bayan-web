<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <!-- Basic Meta Tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="index, follow">
    <meta name="author" content="Programmer Ng Bayan">
    <meta name="theme-color" content="#16a34a">

    <!-- Primary SEO Meta -->
    <title inertia>Programmer Ng Bayan | Your Complete Tech Solutions Partner</title>
    <meta name="description" content="Programmer Ng Bayan is your trusted partner in innovation — offering web & mobile development, Arduino & IoT projects, system integration, and expert tech consultation. We bring your innovative ideas to life.">
    <meta name="keywords" content="Programmer Ng Bayan, web development Philippines, mobile app development, IoT, Arduino, Laravel, React, TailwindCSS, software development, system integration, tech consultation, Tagum City, Davao del Norte, Philippines">

    <!-- Canonical -->
    <link rel="canonical" href="{{ url()->current() }}">

    <!-- Favicon -->
    <link rel="icon" href="{{ asset('storage/assets/icons/favicon.png') }}" type="image/png">

    <!-- Open Graph (Facebook, LinkedIn) -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:site_name" content="Programmer Ng Bayan">
    <meta property="og:title" content="Programmer Ng Bayan | Your Complete Tech Solutions Partner">
    <meta property="og:description" content="We bring your innovative ideas to life — offering web & mobile development, Arduino & IoT solutions, and expert tech consultation.">
    <meta property="og:image" content="{{ asset('storage/assets/images/fb_logo.jpg') }}">
    <meta property="og:locale" content="en_PH">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Programmer Ng Bayan | Your Complete Tech Solutions Partner">
    <meta name="twitter:description" content="From IoT to web & mobile apps, Programmer Ng Bayan is your trusted tech partner in innovation.">
    <meta name="twitter:image" content="{{ asset('storage/assets/images/fb_logo.jpg') }}">
    <meta name="twitter:creator" content="@ProgrammerNgBayan">

    <!-- Organization Schema (JSON-LD) -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Programmer Ng Bayan",
        "alternateName": "Programmer ng Bayan",
        "url": "https://programmerngbayan.site",
        "logo": "{{ asset('storage/assets/icons/favicon.png') }}",
        "founder": {
            "@type": "Person",
            "name": "Ahadon B. Caraing Jr."
        },
        "sameAs": [
            "https://facebook.com/ProgrammerngBayan",
            "https://github.com/Ahadon13",
            "mailto:programmerngbayan@gmail.com"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+63 995 510 9612",
            "contactType": "Customer Support",
            "areaServed": "PH",
            "availableLanguage": ["English", "Tagalog"]
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Purok 3G, RTU Apokon",
            "addressLocality": "Tagum City",
            "addressRegion": "Davao del Norte",
            "postalCode": "8100",
            "addressCountry": "PH"
        },
        "description": "Programmer Ng Bayan is your trusted partner in innovation — offering web & mobile app development, IoT, system integration, and expert consultation.",
        "makesOffer": [
            { "@type": "Offer", "name": "Web Development" },
            { "@type": "Offer", "name": "Mobile Development" },
            { "@type": "Offer", "name": "Arduino & IoT Development" },
            { "@type": "Offer", "name": "System Integration & Tech Consultation" }
        ]
    }
    </script>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- AOS Animation -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>
<body class="antialiased bg-white dark:bg-neutral-900">
    @inertia
</body>
</html>
