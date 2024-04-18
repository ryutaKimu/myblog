<?php

use App\Models\Blog;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class BlogApiTest extends TestCase
{
    use DatabaseTransactions;

    public function testUpdateBlog()
    {
        // テスト用のブログを作成する
        $blog = Blog::factory()->create([
            'title' => 'Original Title',
        ]);

        // ブログのタイトルを更新するリクエストを送信する
        $response = $this->putJson('/api/blogs/' . $blog->id, [
            'title' => 'Updated Title',
        ]);

        // HTTPステータスコードと更新されたブログのタイトルを検証する
        $response->assertStatus(200)
                 ->assertJson([
                     'title' => 'Updated Title',
                 ]);

        // データベース内のブログレコードも更新されたかどうかを確認する
        $updatedBlog = Blog::find($blog->id);
        $this->assertEquals('Updated Title', $updatedBlog->title);
    }

    // 他のテストケースをここに追加する
}
