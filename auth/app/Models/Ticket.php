<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'transaction_id',
        'game_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    public function transaction()
    {
        return $this->belongsTo(Transaction::class);
    }

    public function match()
    {
        return $this->belongsTo(Game::class);
    }


}
