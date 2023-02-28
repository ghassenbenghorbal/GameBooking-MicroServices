<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;

class UserController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware(['auth:sanctum','abilities:admin']);
    // }

    public function users()
    {
        $users = User::all();
        return response()->json([
            'status' => true,
            'data' => $users,
        ]);
    }
}
