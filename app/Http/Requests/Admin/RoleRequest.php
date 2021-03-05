<?php
/**
 *  app/Http/Requests/Admin/RoleRequest.php
 *
 * Date-Time: 05.03.21
 * Time: 15:00
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */
namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class RoleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        // Request method
        $method = $this->method();
        // Initialize rules.
        $rules = [];
        if ($method == 'GET') {
            $rules = [
                'id' => 'nullable|integer',
                'name' => 'nullable|string|max:255',
                'slug' => 'nullable|string|max:255',
                'start_date' => 'nullable|date',
                'end_date' => 'nullable|date'
            ];
        }

        return $rules;
    }
}
