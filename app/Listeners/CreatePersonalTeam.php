<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Registered;
use App\Models\User;

class CreatePersonalTeam
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(Registered $event): void
    {
        $user = User::find($event->user->id);
        $user->ownedTeams()->create([
            'name' => "Personal",
            'is_personal' => true,
        ]);
    }
}
