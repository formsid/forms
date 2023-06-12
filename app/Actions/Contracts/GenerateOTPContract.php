<?php

namespace App\Actions\Contracts;

interface GenerateOTPContract
{
    public function handle(): string;
}
