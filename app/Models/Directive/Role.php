<?php
/**
 *  app/Models/Role.php
 *
 * Date-Time: 04.03.21
 * Time: 14:26
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */

namespace App\Models\Directive;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use RichanFongdasen\EloquentBlameable\BlameableTrait;

class Role extends Model
{
    use BlameableTrait, softDeletes;


    /**
     * Get roles
     *
     * @return BelongsToMany
     */
    public function permissions(): BelongsToMany
    {
        return $this->belongsToMany(Permission::class, 'roles_permissions');
    }
}
