<?php
/**
 *  app/Http/Resources/RoleCollection.php
 *
 * Date-Time: 05.03.21
 * Time: 14:54
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */
namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class RoleCollection extends ResourceCollection
{
    private $pagination;

    public function __construct($resource)
    {
        $this->pagination = [
            'total' => $resource->total(),
            'count' => $resource->count(),
            'per_page' => $resource->perPage(),
            'current_page' => $resource->currentPage(),
            'total_pages' => $resource->lastPage()
        ];

        $resource = $resource->getCollection();
        parent::__construct($resource);
    }

    /**
     * Transform the resource collection into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection->map(
                function ($role) {
                    return new RoleResource($role);
                }
            ),
            'pagination' => $this->pagination
        ];
    }
}
