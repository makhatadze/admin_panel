<?php
/**
 *  app/Traits/RoleFilters.php
 *
 * Date-Time: 05.03.21
 * Time: 16:29
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */

namespace App\Traits;

use App\Http\Requests\Admin\RoleRequest;

trait RoleFilters
{
    public $filters = [
        'id' => 'checkId',
        'name' => 'name'
    ];

    public function validateFilter(string $filter, $value)
    {
        if (!array_key_exists($filter, $this->filters) || empty($value)) {
            return false;
        }

        return $this->{$this->filters[$filter]}($value);
    }


    public function getFilterScopes()
    {
        return [
            'id' => [
                'hasParam' => true,
                'scopeMethod' => 'id'
            ],
            'name' => [
                'hasParam' => true,
                'scopeMethod' => 'name'
            ],
        ];
    }

    public function getActiveFilters(RoleRequest $request)
    {

        $activeFilters = [];
        foreach ($this->filters as $key => $value) {
            if ($request->filled($key) && $this->validateFilter($key, $request->{$key})) {
                $activeFilters [$key] = $request->{$key};
            }
        }
        return $activeFilters;
    }


    public function checkId($id)
    {
        return true;
    }

    public function name($name)
    {
        return true;
    }

    public function slug($slug)
    {
        return true;
    }

    public function scopeId($query, $id)
    {
        return $query->where('id', $id);
    }

    public function scopeName($query, $name)
    {
        return $query->where('name', 'like', '%' . $name . '%');
    }
}