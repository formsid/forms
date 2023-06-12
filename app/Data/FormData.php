<?php

namespace App\Data;

use Carbon\CarbonImmutable;
use Spatie\LaravelData\Attributes\Validation\Max;
use Spatie\LaravelData\Data;

class FormData extends Data
{
    public function __construct(
        #[Max(200)]
        public string $title,
        public ?CarbonImmutable $published_at
    ) {
    }
}
