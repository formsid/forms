<?php

namespace App\Actions\Contracts;

interface RememberOTPContract
{
    public function handle(
        string $ip,
        string $otp,
        string $email
    ): void;
}
