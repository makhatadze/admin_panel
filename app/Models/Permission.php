<?php
/**
 *  app/Models/Permission.php
 *
 * Date-Time: 04.03.21
 * Time: 14:26
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use RichanFongdasen\EloquentBlameable\BlameableTrait;

class Permission extends Model
{
    use BlameableTrait, softDeletes;
}
