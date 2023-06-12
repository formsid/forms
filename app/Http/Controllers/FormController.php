<?php

namespace App\Http\Controllers;

use App\Models\Form;
use App\Data\FormData;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class FormController extends Controller
{
    /**
     * Show all of the user's current teams' forms.
     *
     * @return \Inertia\Response
     */
    public function index(): Response
    {
        $forms = Auth::user()->currentTeam->forms()->latest()->get();

        return Inertia::render('Form/Index', [
            'forms' => $forms,
        ]);
    }

    /**
     * Show the form creation screen.
     *
     * @return \Inertia\Response
     */

    public function create(): Response
    {
        $forms = Auth::user()->currentTeam->forms()->latest()->get();

        return Inertia::render('Form/Create', [
            'forms' => $forms,
        ]);
    }

    /**
     * Display the form management page.
     *
     * @return \Inertia\Response
     */
    public function show(): Response
    {
        return Inertia::render('Form/Show');
    }

    /**
     * Delete the form.
     */
    public function destroy(Form $form): RedirectResponse
    {
        $form->delete();
        return Redirect::to(route('forms'));
    }
}
