<?php

namespace App\Actions;

use App\Actions\Contracts\RememberOTPContract;
use Illuminate\Support\Facades\Cache;

final class RememberOTP implements RememberOTPContract
{
    public function handle(string $ip, string $otp, string $email): void
    {
        Cache::remember(
            key: "{$ip}-otp",
            ttl: (60 * 15),
            callback: fn (): array => [
                'email' => $email,
                'otp' => $otp,
            ],
        );
    }
}
