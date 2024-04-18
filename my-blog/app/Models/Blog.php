<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
      ];

    public function blogContents(){
        return $this->hasMany(BlogContent::class);
    }

    public function blogComments(){
        return $this->hasMany(BlogComment::class);
    }

    public function delete()
    {
        $this->blogContents()->delete();
        $this->blogComments()->delete();

        return parent::delete();
    }
}
