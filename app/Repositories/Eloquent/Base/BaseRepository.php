<?php

namespace App\Repositories\Eloquent\Base;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;

class BaseRepository implements EloquentRepositoryInterface
{
    /**
     * @var Model
     */
    protected $model;

    /**
     * Class Constructor
     *
     * @param Model $model
     */
    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    /**
     * Get all
     *
     * @param array $columns
     *
     * @return Collection
     */
    public function all($columns = ["*"]): Collection
    {
        return $this->model->get($columns);
    }

    /**
     * Paginate all
     *
     * @param integer $perPage
     * @param array $columns
     *
     * @return Paginator
     */
    public function paginate($perPage = 15, $columns = ['*']): Paginator
    {
        return $this->model->paginate($perPage, $columns);
    }

    /**
     * Create new model
     *
     * @param array $attributes
     *
     * @return Model
     */
    public function create($attributes = []): Model
    {
        return $this->model->create($attributes);
    }

    /**
     * Update model by the given ID
     *
     * @param integer $id
     * @param array $data
     * @param string $attribute
     *
     * @return mixed
     */
    public function update(int $id, $data = [], $attribute = 'id')
    {
        return $this->model->where($attribute, $id)->update($data);
    }

    /**
     * Delete model by the given ID
     *
     * @param integer $id
     *
     * @return boolean
     */
    public function delete(int $id): bool
    {
        return $this->model->destroy($id);
    }

    /**
     * Find model by the given ID
     *
     * @param integer $id
     * @param array $columns
     *
     * @return mixed
     */
    public function find(int $id, $columns = ['*'])
    {
        return $this->model->find($id, $columns);
    }

    /**
     * Find model by a specific column
     *
     * @param string $field
     * @param mixed $value
     * @param array $columns
     *
     * @return mixed
     */
    public function findBy(string $field, $value, $columns = ['*'])
    {
        return $this->model->where($field, $value)->first($columns);
    }
}