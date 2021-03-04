<?php
/**
 *  app/Http/Middleware/RoleMiddleware.php
 *
 * Date-Time: 04.03.21
 * Time: 15:51
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @param mixed ...$roles
     *
     * @return mixed
     */
    public function handle(Request $request, Closure $next, ...$roles)
    {
        foreach ($roles as $role) {
            if (auth()->user()->hasRole($role)) {
                return $next($request);
            }
        }

        abort(404);
    }
}
