<?php
namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\User;

class UserController extends Controller
{
    public function show(User $user)
    {
        return Inertia::render('User/Show', [
          'user' => $user
        ]);
    }
}
?>