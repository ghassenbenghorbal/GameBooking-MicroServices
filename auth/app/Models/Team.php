<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'country',
        'region',
        'flag'
    ];

    
    public function matches()
    {
        return $this->hasMany(Game::class)->where('team_1_id', $this->id)->orWhere('team_2_id', $this->id);
    }

    public function fields(){
        return $this->hasManyThrough(Field::class, Game::class, ['team_1_id','team_2_id'], 'field_id');
    }
}
