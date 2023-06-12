<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class Role implements ValidationRule
{
    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     */
    public function validate($attribute, $value, Closure $fail): void
    {
        if (! in_array($value, array_keys(['admin', 'editor', 'viewer', 'owner']))) {
            $fail(__('The :attribute must be a valid role.'));
        }
    }
}
