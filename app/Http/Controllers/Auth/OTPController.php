<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\OTPRequest;
use App\Jobs\HandleOTPProcess;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class OTPController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/OTP');
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(OTPRequest $request): RedirectResponse
    {
        $request->approve();

        dispatch(new HandleOTPProcess(
            ip: strval(request()->ip()),
            email: $request->email,
            is_registration: false,
        ));

        return redirect()->route('otp');
    }
}
