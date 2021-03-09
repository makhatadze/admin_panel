<?php
/**
 *  app/Exceptions/PermissionException.php
 *
 * Date-Time: 09.03.21
 * Time: 13:05
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */
namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;

class PermissionException extends Exception
{
    public function report()
    {
        //
    }

    /**
     * Return json error for dataNotFound
     *
     */
    public function render(): JsonResponse
    {
        return response()->json([
            'message' => "You don't have access.",
            'status' => 403
        ],403);
    }}
