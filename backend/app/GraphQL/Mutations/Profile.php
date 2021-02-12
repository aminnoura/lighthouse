<?php

namespace App\GraphQL\Mutations;

class Profile
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        return auth()->user();
    }
}
