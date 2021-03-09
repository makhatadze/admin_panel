<?php

namespace App\Providers;

use App\Models\Directive\Role;
use App\Policies\RolePolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
         Role::class => RolePolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('read', function ($user) {
            return true;
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
