/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from './injection_token';
/**
 * An internal token whose presence in an injector indicates that the injector should treat itself
 * as a root scoped injector when processing requests for unknown tokens which may indicate
 * they are provided in the root scope.
 */
export var APP_ROOT = new InjectionToken('The presence of this token marks an injector as being the root injector.');

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9kaS9zY29wZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBU0EsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7QUFRakQsTUFBTSxDQUFDLElBQU0sUUFBUSxHQUFHLElBQUksY0FBYyxDQUN0QywwRUFBMEUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1R5cGV9IGZyb20gJy4uL3R5cGUnO1xuaW1wb3J0IHtJbmplY3Rpb25Ub2tlbn0gZnJvbSAnLi9pbmplY3Rpb25fdG9rZW4nO1xuXG5cbi8qKlxuICogQW4gaW50ZXJuYWwgdG9rZW4gd2hvc2UgcHJlc2VuY2UgaW4gYW4gaW5qZWN0b3IgaW5kaWNhdGVzIHRoYXQgdGhlIGluamVjdG9yIHNob3VsZCB0cmVhdCBpdHNlbGZcbiAqIGFzIGEgcm9vdCBzY29wZWQgaW5qZWN0b3Igd2hlbiBwcm9jZXNzaW5nIHJlcXVlc3RzIGZvciB1bmtub3duIHRva2VucyB3aGljaCBtYXkgaW5kaWNhdGVcbiAqIHRoZXkgYXJlIHByb3ZpZGVkIGluIHRoZSByb290IHNjb3BlLlxuICovXG5leHBvcnQgY29uc3QgQVBQX1JPT1QgPSBuZXcgSW5qZWN0aW9uVG9rZW48Ym9vbGVhbj4oXG4gICAgJ1RoZSBwcmVzZW5jZSBvZiB0aGlzIHRva2VuIG1hcmtzIGFuIGluamVjdG9yIGFzIGJlaW5nIHRoZSByb290IGluamVjdG9yLicpO1xuIl19