<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Field extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'country',
        'city',
        'size',
    ];

    public function games()
    {
        return $this->hasMany(Game::class);
    }

    public function teams()
    {
        return $this->hasManyThrough(Team::class, Game::class, 'field_id', ['team_1_id', 'team_2_id']);
    }
}
