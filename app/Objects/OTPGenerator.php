<?php

namespace App\Objects;

use App\Actions\Contracts\OTPGeneratorContract;

final class OTPGenerator implements OTPGeneratorContract
{
    public function generate(): string
    {
        $number = random_int(
            min: 000_000,
            max: 999_999,
        );

        return str_pad(
            string: strval($number),
            length: 6,
            pad_string: '0',
            pad_type: STR_PAD_LEFT,
        );
    }
}
