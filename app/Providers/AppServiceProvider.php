<?php

namespace App\Providers;

use App\Actions\Contracts\GenerateOTPContract;
use App\Actions\Contracts\OTPGeneratorContract;
use App\Actions\Contracts\RememberOTPContract;
use App\Actions\Contracts\SendOTPNotificationContract;
use App\Actions\GenerateOTP;
use App\Actions\RememberOTP;
use App\Actions\SendOTPNotification;
use App\Objects\OTPGenerator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(
            OTPGeneratorContract::class,
            OTPGenerator::class
        );
        $this->app->bind(
            GenerateOTPContract::class,
            GenerateOTP::class
        );
        $this->app->bind(
            RememberOTPContract::class,
            RememberOTP::class
        );
        $this->app->bind(
            SendOTPNotificationContract::class,
            SendOTPNotification::class
        );

        if ($this->app->environment('local')) {
            $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
            $this->app->register(TelescopeServiceProvider::class);
        }
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
