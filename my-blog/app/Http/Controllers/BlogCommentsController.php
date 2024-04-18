<?php

namespace App\Http\Controllers;

use App\Http\Requests\BlogComment\StoreRequest;
use App\Http\Requests\BlogComment\UpdateRequest;
use App\Models\BlogComment;
use Illuminate\Http\Request;

class BlogCommentsController extends Controller
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
        $blogComments = new BlogComment();
        $blogComments->blog_id = $request->get('blog_id');
        $blogComments->comment = $request->get('comment');
        $blogComments->save();
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
        $blogComments = BlogComment::find($id);
        $blogComments->comment = $request->get('comment');
        $blogComments->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $blogComments = BlogComment::find($id);
        $blogComments->delete();
    }
}
