<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Blog;
use App\Models\BlogComment;
use App\Models\BlogContent;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $blogs = Blog::factory(5)->create();

        foreach ($blogs as $blog) {
            BlogContent::factory(5)->create([
                'blog_id' => $blog->id
            ]);
            BlogComment::factory(rand(1, 5))->create([
                'blog_id' => $blog->id
            ]);
        }
    }
}
