<?php

namespace App\Http\Controllers;

use App\Http\Requests\BlogContent\StoreRequest;
use App\Http\Requests\BlogContent\UpdateRequest;
use App\Models\BlogContent;
use Illuminate\Http\Request;

class BlogContentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        $blogContent = new BlogContent();
        $blogContent->blog_id = $request->get('blog_id');
        $blogContent->content = $request->get('content');
        $blogContent->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, string $id)
    {
        $blogContent = BlogContent::find($id);
        $blogContent->content = $request->get('content');
        $blogContent->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $blogContent = BlogContent::find($id);
        $blogContent->delete();
    }
}
