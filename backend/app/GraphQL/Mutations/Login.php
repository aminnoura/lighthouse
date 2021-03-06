<?php

namespace App\GraphQL\Mutations;

use Illuminate\Support\Facades\Auth;
use GraphQL\Error\Error;

class Login
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        
        $guard = Auth::guard();

        if( ! $guard->attempt($args)) {
            throw new Error('Invalid credentials.');
        }

        if (! $token = auth()->attempt($args) ) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        /**
         * Since we successfully logged in, this can no longer be `null`.
         *
         * @var \App\Models\User $user
         */
        $user = $guard->user();
        $user->api_token = $token;
        $user->save();

        return $user;
    }
}