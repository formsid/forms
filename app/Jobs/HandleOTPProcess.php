<?php

namespace App\Jobs;

use App\Actions\Contracts\GenerateOTPContract;
use App\Actions\Contracts\RememberOTPContract;
use App\Actions\Contracts\SendOTPNotificationContract;
use App\Jobs\Contracts\HandleOTPProcessContract;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class HandleOTPProcess implements HandleOTPProcessContract, ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public readonly string $ip,
        public readonly string $email,
        public readonly bool $is_registration,
    ) {
    }

    /**
     * Execute the job.
     */
    public function handle(
        GenerateOTPContract $otp,
        SendOTPNotificationContract $notification,
        RememberOTPContract $remember
    ): void {
        tap(
            value: $otp->handle(),
            callback: function (string $code) use ($notification, $remember) {
                $notification->handle(otp: $code, email: $this->email, is_registration: $this->is_registration);
                $remember->handle(ip: $this->ip, otp: $code, email: $this->email);
            }
        );
    }
}
