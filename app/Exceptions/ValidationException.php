<?php
/**
 *  app/Exceptions/ValidationException.php
 *
 * Date-Time: 10.03.21
 * Time: 17:40
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */
namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;
use Throwable;

class ValidationException extends Exception
{
    public function __construct($message = "", $code = 422, Throwable $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }

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
            'errors' => $this->message,
            'status' => $this->code
        ],$this->code);
    }
}
