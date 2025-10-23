<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
    protected $signature = 'sitemap:generate';
    protected $description = 'Generate the sitemap.xml for the website';

    public function handle()
    {
        Sitemap::create()
            ->add(Url::create('/')->setPriority(1.0))
            ->add(Url::create('/about-us')->setPriority(0.8))
            ->add(Url::create('/contact-us')->setPriority(0.8))
            ->add(Url::create('/projects')->setPriority(0.7))
            ->add(Url::create('/services')->setPriority(0.6))
            ->writeToFile(public_path('sitemap.xml'));

        $this->info('✅ Sitemap generated successfully!');
    }
}
