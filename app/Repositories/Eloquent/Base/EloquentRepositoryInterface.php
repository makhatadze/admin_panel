<?php

namespace App\Repositories\Eloquent\Base;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;

/**
 * Interface EloquentRepositoryInterface
 * @package App\Repositories
 */
interface EloquentRepositoryInterface
{

    /**
     * @param array $columns
     *
     * @return Collection
     */
    public function all(array $columns): ?Collection;

    /**
     * @param int $perPage
     * @param array $columns
     *
     * @return Paginator
     */
    public function paginate(int $perPage, array $columns): ?Paginator;

    /**
     * @param array $attributes
     *
     * @return Model
     */
    public function create(array $attributes): Model;

    /**
     * @param int $id
     * @param array $data
     * @param string $attribute
     *
     */
    public function update(int $id, $data = [], $attribute = 'id');

    /**
     * @param integer $id
     *
     * @return boolean
     */
    public function delete(int $id): bool;

    /**
     * @param integer $id
     * @param array $columns
     */
    public function find(int $id, $columns = ['*']);

    /**
     * @param string $field
     * @param mixed $value
     * @param string[] $columns
     */
    public function findBy(string $field, $value, $columns = ['*']);

}