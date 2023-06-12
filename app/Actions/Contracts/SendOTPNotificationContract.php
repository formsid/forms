<?php

namespace App\Actions\Contracts;

interface SendOTPNotificationContract
{
    public function handle(string $otp, string $email, bool $is_registration): void;
}
