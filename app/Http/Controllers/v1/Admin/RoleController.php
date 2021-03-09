<?php
/**
 *  app/Http/Controllers/v1/Admin/RoleController.php
 *
 * Date-Time: 09.03.21
 * Time: 13:09
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */
namespace App\Http\Controllers\v1\Admin;

use App\Exceptions\DataNotFoundException;
use App\Exceptions\TrashException;
use App\Http\Requests\Admin\RoleRequest;
use App\Http\Resources\RoleCollection;
use App\Http\Resources\RoleResource;
use App\Models\Directive\Role;
use App\Repositories\RoleRepositoryInterface;
use Exception;
use Illuminate\Http\JsonResponse;

class RoleController extends AdminController
{
    private $roleRepository;

    public function __construct(RoleRepositoryInterface $roleRepository)
    {
        // Initialize roleRepository
        $this->roleRepository = $roleRepository;

        $this->authorizeResource(Role::class);
    }

    /**
     * Get the list of resource methods which do not have model parameters.
     *
     * @return array
     */
    protected function resourceMethodsWithoutModels(): array
    {
        return ['index','store','update','destroy','show','restore'];
    }

    /**
     * Display a listing of the resource.
     *
     * @param RoleRequest $request
     *
     * @return RoleCollection
     *
     */
    public function index(RoleRequest $request): RoleCollection
    {
        return $this->roleRepository->getData($request);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  RoleRequest $request
     *
     * @return RoleResource
     */
    public function store(RoleRequest $request): RoleResource
    {
        // Get only name from request
       $data = $request->only('name');
        return new RoleResource($this->roleRepository->create($data));
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return DataNotFoundException|RoleResource|Exception|JsonResponse
     * @throws DataNotFoundException
     */
    public function show(int $id)
    {
        $data = $this->roleRepository->findOrFail($id);
        return new RoleResource($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param RoleRequest $request
     * @param int $id
     *
     * @return RoleResource|JsonResponse
     * @throws DataNotFoundException
     */
    public function update(RoleRequest $request,int $id)
    {
        $data = $request->only('name');
        if ($this->roleRepository->update($id,$data)) {
            return new RoleResource($this->roleRepository->findOrFail($id));
        }
        return response()->json([
            'status' => 400,
            'message' => 'Can not updated.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return RoleResource|JsonResponse
     * @throws TrashException
     */
    public function destroy(int $id)
    {
        if (false === $this->roleRepository->delete($id)) {
            return response()->json([
                'status' => 400,
                'message' => 'Can not deleted.'
            ]);
        }
        return new RoleResource($this->roleRepository->findTrash($id));
    }

    /**
     * Restore specified resource from storage.
     *
     * @param int $id
     *
     * @return RoleResource|JsonResponse
     * @throws DataNotFoundException
     */
    public function restore(int $id)
    {
        if (false === $this->roleRepository->restore($id)) {
            return response()->json([
                'status' => 400,
                'message' => 'Can not restored.'
            ]);
        }
        return new RoleResource($this->roleRepository->findOrFail($id));
    }
}
