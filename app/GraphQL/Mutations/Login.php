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
      $guard = Auth::guard(config('sanctum.guard', 'web'));

      if(!$guard->attempt($args)) {
        throw new Error('Invalid Credentials'); 
      }

      $user = $guard->user();

      return $user;
    }
}
 