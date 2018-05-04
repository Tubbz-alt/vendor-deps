"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exception_1 = require("../../exception/exception");
class SynchronousDelegateExpectedException extends exception_1.BaseException {
    constructor() { super(`Expected a synchronous delegate but got an asynchronous one.`); }
}
exports.SynchronousDelegateExpectedException = SynchronousDelegateExpectedException;
/**
 * Implement a synchronous-only host interface (remove the Observable parts).
 */
class SyncDelegateHost {
    constructor(_delegate) {
        this._delegate = _delegate;
        if (!_delegate.capabilities.synchronous) {
            throw new SynchronousDelegateExpectedException();
        }
    }
    _doSyncCall(observable) {
        let completed = false;
        let result = undefined;
        let errorResult = undefined;
        observable.subscribe({
            next(x) { result = x; },
            error(err) { errorResult = err; },
            complete() { completed = true; },
        });
        if (errorResult !== undefined) {
            throw errorResult;
        }
        if (!completed) {
            throw new SynchronousDelegateExpectedException();
        }
        // The non-null operation is to work around `void` type. We don't allow to return undefined
        // but ResultT could be void, which is undefined in JavaScript, so this doesn't change the
        // behaviour.
        // tslint:disable-next-line:non-null-operator
        return result;
    }
    get capabilities() {
        return this._delegate.capabilities;
    }
    get delegate() {
        return this._delegate;
    }
    write(path, content) {
        return this._doSyncCall(this._delegate.write(path, content));
    }
    read(path) {
        return this._doSyncCall(this._delegate.read(path));
    }
    delete(path) {
        return this._doSyncCall(this._delegate.delete(path));
    }
    rename(from, to) {
        return this._doSyncCall(this._delegate.rename(from, to));
    }
    list(path) {
        return this._doSyncCall(this._delegate.list(path));
    }
    exists(path) {
        return this._doSyncCall(this._delegate.exists(path));
    }
    isDirectory(path) {
        return this._doSyncCall(this._delegate.isDirectory(path));
    }
    isFile(path) {
        return this._doSyncCall(this._delegate.isFile(path));
    }
    // Some hosts may not support stat.
    stat(path) {
        const result = this._delegate.stat(path);
        if (result) {
            return this._doSyncCall(result);
        }
        else {
            return null;
        }
    }
    watch(path, options) {
        return this._delegate.watch(path, options);
    }
}
exports.SyncDelegateHost = SyncDelegateHost;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luYy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsicGFja2FnZXMvYW5ndWxhcl9kZXZraXQvY29yZS9zcmMvdmlydHVhbC1mcy9ob3N0L3N5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQSx5REFBMEQ7QUFhMUQsMENBQWtELFNBQVEseUJBQWE7SUFDckUsZ0JBQWdCLEtBQUssQ0FBQyw4REFBOEQsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUN6RjtBQUZELG9GQUVDO0FBRUQ7O0dBRUc7QUFDSDtJQUNFLFlBQXNCLFNBQWtCO1FBQWxCLGNBQVMsR0FBVCxTQUFTLENBQVM7UUFDdEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDeEMsTUFBTSxJQUFJLG9DQUFvQyxFQUFFLENBQUM7UUFDbkQsQ0FBQztJQUNILENBQUM7SUFFUyxXQUFXLENBQVUsVUFBK0I7UUFDNUQsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksTUFBTSxHQUF3QixTQUFTLENBQUM7UUFDNUMsSUFBSSxXQUFXLEdBQXNCLFNBQVMsQ0FBQztRQUMvQyxVQUFVLENBQUMsU0FBUyxDQUFDO1lBQ25CLElBQUksQ0FBQyxDQUFVLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsS0FBSyxDQUFDLEdBQVUsSUFBSSxXQUFXLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4QyxRQUFRLEtBQUssU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDakMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLENBQUMsV0FBVyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxXQUFXLENBQUM7UUFDcEIsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sSUFBSSxvQ0FBb0MsRUFBRSxDQUFDO1FBQ25ELENBQUM7UUFFRCwyRkFBMkY7UUFDM0YsMEZBQTBGO1FBQzFGLGFBQWE7UUFDYiw2Q0FBNkM7UUFDN0MsTUFBTSxDQUFDLE1BQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxJQUFJLFFBQVE7UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsS0FBSyxDQUFDLElBQVUsRUFBRSxPQUF1QjtRQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBQ0QsSUFBSSxDQUFDLElBQVU7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRCxNQUFNLENBQUMsSUFBVTtRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELE1BQU0sQ0FBQyxJQUFVLEVBQUUsRUFBUTtRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsSUFBSSxDQUFDLElBQVU7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxNQUFNLENBQUMsSUFBVTtRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELFdBQVcsQ0FBQyxJQUFVO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNELE1BQU0sQ0FBQyxJQUFVO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsbUNBQW1DO0lBQ25DLElBQUksQ0FBQyxJQUFVO1FBQ2IsTUFBTSxNQUFNLEdBQWdDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsSUFBVSxFQUFFLE9BQTBCO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGO0FBL0VELDRDQStFQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEJhc2VFeGNlcHRpb24gfSBmcm9tICcuLi8uLi9leGNlcHRpb24vZXhjZXB0aW9uJztcbmltcG9ydCB7IFBhdGgsIFBhdGhGcmFnbWVudCB9IGZyb20gJy4uL3BhdGgnO1xuaW1wb3J0IHtcbiAgRmlsZUJ1ZmZlcixcbiAgRmlsZUJ1ZmZlckxpa2UsXG4gIEhvc3QsXG4gIEhvc3RDYXBhYmlsaXRpZXMsXG4gIEhvc3RXYXRjaEV2ZW50LFxuICBIb3N0V2F0Y2hPcHRpb25zLFxuICBTdGF0cyxcbn0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5cbmV4cG9ydCBjbGFzcyBTeW5jaHJvbm91c0RlbGVnYXRlRXhwZWN0ZWRFeGNlcHRpb24gZXh0ZW5kcyBCYXNlRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7IHN1cGVyKGBFeHBlY3RlZCBhIHN5bmNocm9ub3VzIGRlbGVnYXRlIGJ1dCBnb3QgYW4gYXN5bmNocm9ub3VzIG9uZS5gKTsgfVxufVxuXG4vKipcbiAqIEltcGxlbWVudCBhIHN5bmNocm9ub3VzLW9ubHkgaG9zdCBpbnRlcmZhY2UgKHJlbW92ZSB0aGUgT2JzZXJ2YWJsZSBwYXJ0cykuXG4gKi9cbmV4cG9ydCBjbGFzcyBTeW5jRGVsZWdhdGVIb3N0PFQgZXh0ZW5kcyBvYmplY3QgPSB7fT4ge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2RlbGVnYXRlOiBIb3N0PFQ+KSB7XG4gICAgaWYgKCFfZGVsZWdhdGUuY2FwYWJpbGl0aWVzLnN5bmNocm9ub3VzKSB7XG4gICAgICB0aHJvdyBuZXcgU3luY2hyb25vdXNEZWxlZ2F0ZUV4cGVjdGVkRXhjZXB0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9kb1N5bmNDYWxsPFJlc3VsdFQ+KG9ic2VydmFibGU6IE9ic2VydmFibGU8UmVzdWx0VD4pOiBSZXN1bHRUIHtcbiAgICBsZXQgY29tcGxldGVkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDogUmVzdWx0VCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBsZXQgZXJyb3JSZXN1bHQ6IEVycm9yIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIG9ic2VydmFibGUuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQoeDogUmVzdWx0VCkgeyByZXN1bHQgPSB4OyB9LFxuICAgICAgZXJyb3IoZXJyOiBFcnJvcikgeyBlcnJvclJlc3VsdCA9IGVycjsgfSxcbiAgICAgIGNvbXBsZXRlKCkgeyBjb21wbGV0ZWQgPSB0cnVlOyB9LFxuICAgIH0pO1xuXG4gICAgaWYgKGVycm9yUmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IGVycm9yUmVzdWx0O1xuICAgIH1cbiAgICBpZiAoIWNvbXBsZXRlZCkge1xuICAgICAgdGhyb3cgbmV3IFN5bmNocm9ub3VzRGVsZWdhdGVFeHBlY3RlZEV4Y2VwdGlvbigpO1xuICAgIH1cblxuICAgIC8vIFRoZSBub24tbnVsbCBvcGVyYXRpb24gaXMgdG8gd29yayBhcm91bmQgYHZvaWRgIHR5cGUuIFdlIGRvbid0IGFsbG93IHRvIHJldHVybiB1bmRlZmluZWRcbiAgICAvLyBidXQgUmVzdWx0VCBjb3VsZCBiZSB2b2lkLCB3aGljaCBpcyB1bmRlZmluZWQgaW4gSmF2YVNjcmlwdCwgc28gdGhpcyBkb2Vzbid0IGNoYW5nZSB0aGVcbiAgICAvLyBiZWhhdmlvdXIuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vbi1udWxsLW9wZXJhdG9yXG4gICAgcmV0dXJuIHJlc3VsdCAhO1xuICB9XG5cbiAgZ2V0IGNhcGFiaWxpdGllcygpOiBIb3N0Q2FwYWJpbGl0aWVzIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuY2FwYWJpbGl0aWVzO1xuICB9XG4gIGdldCBkZWxlZ2F0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGU7XG4gIH1cblxuICB3cml0ZShwYXRoOiBQYXRoLCBjb250ZW50OiBGaWxlQnVmZmVyTGlrZSk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9kb1N5bmNDYWxsKHRoaXMuX2RlbGVnYXRlLndyaXRlKHBhdGgsIGNvbnRlbnQpKTtcbiAgfVxuICByZWFkKHBhdGg6IFBhdGgpOiBGaWxlQnVmZmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZG9TeW5jQ2FsbCh0aGlzLl9kZWxlZ2F0ZS5yZWFkKHBhdGgpKTtcbiAgfVxuICBkZWxldGUocGF0aDogUGF0aCk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9kb1N5bmNDYWxsKHRoaXMuX2RlbGVnYXRlLmRlbGV0ZShwYXRoKSk7XG4gIH1cbiAgcmVuYW1lKGZyb206IFBhdGgsIHRvOiBQYXRoKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RvU3luY0NhbGwodGhpcy5fZGVsZWdhdGUucmVuYW1lKGZyb20sIHRvKSk7XG4gIH1cblxuICBsaXN0KHBhdGg6IFBhdGgpOiBQYXRoRnJhZ21lbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvU3luY0NhbGwodGhpcy5fZGVsZWdhdGUubGlzdChwYXRoKSk7XG4gIH1cblxuICBleGlzdHMocGF0aDogUGF0aCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kb1N5bmNDYWxsKHRoaXMuX2RlbGVnYXRlLmV4aXN0cyhwYXRoKSk7XG4gIH1cbiAgaXNEaXJlY3RvcnkocGF0aDogUGF0aCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kb1N5bmNDYWxsKHRoaXMuX2RlbGVnYXRlLmlzRGlyZWN0b3J5KHBhdGgpKTtcbiAgfVxuICBpc0ZpbGUocGF0aDogUGF0aCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kb1N5bmNDYWxsKHRoaXMuX2RlbGVnYXRlLmlzRmlsZShwYXRoKSk7XG4gIH1cblxuICAvLyBTb21lIGhvc3RzIG1heSBub3Qgc3VwcG9ydCBzdGF0LlxuICBzdGF0KHBhdGg6IFBhdGgpOiBTdGF0czxUPiB8IG51bGwge1xuICAgIGNvbnN0IHJlc3VsdDogT2JzZXJ2YWJsZTxTdGF0czxUPj4gfCBudWxsID0gdGhpcy5fZGVsZWdhdGUuc3RhdChwYXRoKTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kb1N5bmNDYWxsKHJlc3VsdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHdhdGNoKHBhdGg6IFBhdGgsIG9wdGlvbnM/OiBIb3N0V2F0Y2hPcHRpb25zKTogT2JzZXJ2YWJsZTxIb3N0V2F0Y2hFdmVudD4gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUud2F0Y2gocGF0aCwgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==