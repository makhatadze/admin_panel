<?php
/**
 *  app/Exceptions/DataNotFoundException.php
 *
 * Date-Time: 09.03.21
 * Time: 12:46
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */
namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;

class DataNotFoundException extends Exception
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
            'message' => 'Resource not found',
            'status' => 404
        ],404);
    }
}
