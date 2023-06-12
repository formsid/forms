<?php

namespace App\Jobs\Contracts;

use App\Actions\Contracts\GenerateOTPContract;
use App\Actions\Contracts\RememberOTPContract;
use App\Actions\Contracts\SendOTPNotificationContract;

interface HandleOTPProcessContract
{
    public function handle(
        GenerateOTPContract $otp,
        SendOTPNotificationContract $notification,
        RememberOTPContract $remember
    ): void;
}
