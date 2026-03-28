<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Author extends Model
{
    protected $guarded = [];

    public function articles(): BelongsToMany
    {
        return $this->belongsToMany(Article::class)->orderBy('sort_order');
    }

    public function getFullNameAttribute(): string
    {
        return "{$this->first_name} {$this->last_name}";
    }
}
