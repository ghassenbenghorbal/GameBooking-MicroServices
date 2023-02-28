<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;
    protected $fillable = [
        'team_1_id',
        'team_2_id',
        'field_id',
        'score_team_1',
        'score_team_2',
        'starts_at',
        'sport_id'
    ];
    
    public function team_1()
    {
        return $this->belongsTo(Team::class, 'team_1_id');
    }

    public function team_2()
    {
        return $this->belongsTo(Team::class, 'team_2_id');
    }

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }

    public function users()
    {
        return $this->hasManyThrough(User::class, Ticket::class);
    }
}
