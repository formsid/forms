<?php

namespace App\Actions;

use App\Actions\Contracts\GenerateOTPContract;
use App\Actions\Contracts\OTPGeneratorContract;

final class GenerateOTP implements GenerateOTPContract
{
    public function __construct(
        private readonly OTPGeneratorContract $generator,
    ) {
    }

    public function handle(): string
    {
        return $this->generator->generate();
    }
}
