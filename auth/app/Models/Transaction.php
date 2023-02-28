<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'transaction_code'
    ];

    public function ticket()
    {
        return $this->hasOne(Ticket::class);
    }
}
