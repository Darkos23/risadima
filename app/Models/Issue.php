<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Issue extends Model
{
    protected $guarded = [];

    protected $casts = [
        'published_at' => 'date',
        'is_published' => 'boolean',
    ];

    public function articles(): HasMany
    {
        return $this->hasMany(Article::class)->orderBy('sort_order');
    }

    public function scopePublished($query)
    {
        return $query->where('is_published', true);
    }
}
