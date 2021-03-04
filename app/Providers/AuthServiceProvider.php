<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('read', function ($test) {
            return $test;
            $this->abort();
        });
    }

    private function abort(string $message = "You don't have access this action.", $status = 403){
        abort(response()->json([
            'error' => [
                'message' => $message,
                'status' => $status
            ]
        ], $status));
    }
}
