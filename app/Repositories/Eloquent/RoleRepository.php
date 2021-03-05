<?php
/**
 *  app/Repositories/Eloquent/RoleRepository.php
 *
 * Date-Time: 05.03.21
 * Time: 14:51
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */
namespace App\Repositories\Eloquent;

use App\Http\Requests\Admin\RoleRequest;
use App\Http\Resources\RoleCollection;
use App\Models\Directive\Role;
use App\Repositories\Eloquent\Base\BaseRepository;
use App\Repositories\RoleRepositoryInterface;

class RoleRepository extends BaseRepository implements RoleRepositoryInterface
{

    /**
     * UserRepository constructor.
     *
     * @param Role $model
     */
    public function __construct(Role $model)
    {
        parent::__construct($model);
    }

    /**
     * @param RoleRequest $request
     *
     * @return RoleCollection
     */
    public function getData(RoleRequest $request): RoleCollection
    {
        $data = $this->model->query();

        $filterScopes = $this->model->getFilterScopes();
        $activeFilters = $this->model->getActiveFilters($request);
        foreach ($activeFilters as $filter => $value) {
            if (!array_key_exists($filter, $filterScopes)) {
                continue;
            }
            $filterScopeData = $filterScopes[$filter];

            if (false === $filterScopeData['hasParam']) {
                $data->{$value}();
                continue;
            }
            $methodToExecute = $filterScopeData['scopeMethod'];
            $data->{$methodToExecute}($value);
        }


        return new RoleCollection($data->paginate());
    }

}