"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const architect_1 = require("@angular-devkit/architect");
const core_1 = require("@angular-devkit/core");
const operators_1 = require("rxjs/operators");
const test_project_host_1 = require("../utils/test-project-host");
const workspaceFile = core_1.normalize('.angular.json');
const devkitRoot = core_1.normalize(global._DevKitRoot); // tslint:disable-line:no-any
exports.workspaceRoot = core_1.join(devkitRoot, 'tests/@angular_devkit/build_angular/hello-world-app/');
exports.host = new test_project_host_1.TestProjectHost(exports.workspaceRoot);
exports.outputPath = core_1.normalize('dist');
exports.browserTargetSpec = { project: 'app', target: 'build' };
exports.devServerTargetSpec = { project: 'app', target: 'serve' };
exports.extractI18nTargetSpec = { project: 'app', target: 'extract-i18n' };
exports.karmaTargetSpec = { project: 'app', target: 'test' };
exports.tslintTargetSpec = { project: 'app', target: 'lint' };
exports.protractorTargetSpec = { project: 'app-e2e', target: 'e2e' };
function runTargetSpec(host, targetSpec, overrides = {}, logger = new core_1.logging.NullLogger()) {
    targetSpec = Object.assign({}, targetSpec, { overrides });
    const workspace = new core_1.experimental.workspace.Workspace(exports.workspaceRoot, host);
    return workspace.loadWorkspaceFromHost(workspaceFile).pipe(operators_1.concatMap(ws => new architect_1.Architect(ws).loadArchitect()), operators_1.concatMap(arch => arch.run(arch.getBuilderConfiguration(targetSpec), { logger })));
}
exports.runTargetSpec = runTargetSpec;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLXRhcmdldC1zcGVjLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9hbmd1bGFyX2RldmtpdC9idWlsZF9hbmd1bGFyL3Rlc3QvdXRpbHMvcnVuLXRhcmdldC1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7O0FBRUgseURBQW1GO0FBQ25GLCtDQUE4RTtBQUU5RSw4Q0FBMkM7QUFDM0Msa0VBQTZEO0FBRzdELE1BQU0sYUFBYSxHQUFHLGdCQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDakQsTUFBTSxVQUFVLEdBQUcsZ0JBQVMsQ0FBRSxNQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyw2QkFBNkI7QUFFM0UsUUFBQSxhQUFhLEdBQUcsV0FBSSxDQUFDLFVBQVUsRUFDMUMsc0RBQXNELENBQUMsQ0FBQztBQUM3QyxRQUFBLElBQUksR0FBRyxJQUFJLG1DQUFlLENBQUMscUJBQWEsQ0FBQyxDQUFDO0FBQzFDLFFBQUEsVUFBVSxHQUFHLGdCQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0IsUUFBQSxpQkFBaUIsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQ3hELFFBQUEsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUMxRCxRQUFBLHFCQUFxQixHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLENBQUM7QUFDbkUsUUFBQSxlQUFlLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQztBQUNyRCxRQUFBLGdCQUFnQixHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7QUFDdEQsUUFBQSxvQkFBb0IsR0FBRyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO0FBRTFFLHVCQUNFLElBQXFCLEVBQ3JCLFVBQTJCLEVBQzNCLFNBQVMsR0FBRyxFQUFFLEVBQ2QsU0FBeUIsSUFBSSxjQUFPLENBQUMsVUFBVSxFQUFFO0lBRWpELFVBQVUscUJBQVEsVUFBVSxJQUFFLFNBQVMsR0FBRSxDQUFDO0lBQzFDLE1BQU0sU0FBUyxHQUFHLElBQUksbUJBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLHFCQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFNUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQ3hELHFCQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLHFCQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsRUFDbEQscUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUNsRixDQUFDO0FBQ0osQ0FBQztBQWJELHNDQWFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgeyBBcmNoaXRlY3QsIEJ1aWxkRXZlbnQsIFRhcmdldFNwZWNpZmllciB9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9hcmNoaXRlY3QnO1xuaW1wb3J0IHsgZXhwZXJpbWVudGFsLCBqb2luLCBsb2dnaW5nLCBub3JtYWxpemUgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjb25jYXRNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUZXN0UHJvamVjdEhvc3QgfSBmcm9tICcuLi91dGlscy90ZXN0LXByb2plY3QtaG9zdCc7XG5cblxuY29uc3Qgd29ya3NwYWNlRmlsZSA9IG5vcm1hbGl6ZSgnLmFuZ3VsYXIuanNvbicpO1xuY29uc3QgZGV2a2l0Um9vdCA9IG5vcm1hbGl6ZSgoZ2xvYmFsIGFzIGFueSkuX0RldktpdFJvb3QpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuXG5leHBvcnQgY29uc3Qgd29ya3NwYWNlUm9vdCA9IGpvaW4oZGV2a2l0Um9vdCxcbiAgJ3Rlc3RzL0Bhbmd1bGFyX2RldmtpdC9idWlsZF9hbmd1bGFyL2hlbGxvLXdvcmxkLWFwcC8nKTtcbmV4cG9ydCBjb25zdCBob3N0ID0gbmV3IFRlc3RQcm9qZWN0SG9zdCh3b3Jrc3BhY2VSb290KTtcbmV4cG9ydCBjb25zdCBvdXRwdXRQYXRoID0gbm9ybWFsaXplKCdkaXN0Jyk7XG5leHBvcnQgY29uc3QgYnJvd3NlclRhcmdldFNwZWMgPSB7IHByb2plY3Q6ICdhcHAnLCB0YXJnZXQ6ICdidWlsZCcgfTtcbmV4cG9ydCBjb25zdCBkZXZTZXJ2ZXJUYXJnZXRTcGVjID0geyBwcm9qZWN0OiAnYXBwJywgdGFyZ2V0OiAnc2VydmUnIH07XG5leHBvcnQgY29uc3QgZXh0cmFjdEkxOG5UYXJnZXRTcGVjID0geyBwcm9qZWN0OiAnYXBwJywgdGFyZ2V0OiAnZXh0cmFjdC1pMThuJyB9O1xuZXhwb3J0IGNvbnN0IGthcm1hVGFyZ2V0U3BlYyA9IHsgcHJvamVjdDogJ2FwcCcsIHRhcmdldDogJ3Rlc3QnIH07XG5leHBvcnQgY29uc3QgdHNsaW50VGFyZ2V0U3BlYyA9IHsgcHJvamVjdDogJ2FwcCcsIHRhcmdldDogJ2xpbnQnIH07XG5leHBvcnQgY29uc3QgcHJvdHJhY3RvclRhcmdldFNwZWMgPSB7IHByb2plY3Q6ICdhcHAtZTJlJywgdGFyZ2V0OiAnZTJlJyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gcnVuVGFyZ2V0U3BlYyhcbiAgaG9zdDogVGVzdFByb2plY3RIb3N0LFxuICB0YXJnZXRTcGVjOiBUYXJnZXRTcGVjaWZpZXIsXG4gIG92ZXJyaWRlcyA9IHt9LFxuICBsb2dnZXI6IGxvZ2dpbmcuTG9nZ2VyID0gbmV3IGxvZ2dpbmcuTnVsbExvZ2dlcigpLFxuKTogT2JzZXJ2YWJsZTxCdWlsZEV2ZW50PiB7XG4gIHRhcmdldFNwZWMgPSB7IC4uLnRhcmdldFNwZWMsIG92ZXJyaWRlcyB9O1xuICBjb25zdCB3b3Jrc3BhY2UgPSBuZXcgZXhwZXJpbWVudGFsLndvcmtzcGFjZS5Xb3Jrc3BhY2Uod29ya3NwYWNlUm9vdCwgaG9zdCk7XG5cbiAgcmV0dXJuIHdvcmtzcGFjZS5sb2FkV29ya3NwYWNlRnJvbUhvc3Qod29ya3NwYWNlRmlsZSkucGlwZShcbiAgICBjb25jYXRNYXAod3MgPT4gbmV3IEFyY2hpdGVjdCh3cykubG9hZEFyY2hpdGVjdCgpKSxcbiAgICBjb25jYXRNYXAoYXJjaCA9PiBhcmNoLnJ1bihhcmNoLmdldEJ1aWxkZXJDb25maWd1cmF0aW9uKHRhcmdldFNwZWMpLCB7IGxvZ2dlciB9KSksXG4gICk7XG59XG4iXX0=