import { Observable } from 'rxjs';
import { _finally } from '../../operator/finally';
Observable.prototype.finally = _finally;
Observable.prototype._finally = _finally;
//# sourceMappingURL=finally.js.map