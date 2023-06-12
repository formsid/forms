<?php

namespace App\Actions\Contracts;

interface OTPGeneratorContract
{
    public function generate(): string;
}
