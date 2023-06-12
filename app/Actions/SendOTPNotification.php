<?php

namespace App\Actions;

use App\Actions\Contracts\SendOTPNotificationContract;
use App\Notifications\OneTimePassword;
use Illuminate\Support\Facades\Notification;

final class SendOTPNotification implements SendOTPNotificationContract
{
    public function handle(string $otp, string $email, bool $is_registration): void
    {
        Notification::route(
            channel: 'mail',
            route: [$email],
        )->notify(
            notification: new OneTimePassword(
                otp: $otp,
                is_registration: $is_registration
            ),
        );
    }
}
