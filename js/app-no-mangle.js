var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("components/layout/component1", ['angular2/core'], function(exports_1) {
    "use strict";
    var core_1;
    var Component1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Component1 = (function () {
                function Component1() {
                }
                Component1 = __decorate([
                    core_1.Component({
                        selector: 'component1',
                        template: "\n      <span>component1</span>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Component1);
                return Component1;
            }());
            exports_1("Component1", Component1);
        }
    }
});
System.register("components/layout/home", ['angular2/core', "components/layout/component1"], function(exports_2) {
    "use strict";
    var core_2, component1_1;
    var Home;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (component1_1_1) {
                component1_1 = component1_1_1;
            }],
        execute: function() {
            Home = (function () {
                function Home() {
                }
                Home = __decorate([
                    core_2.Component({
                        template: "\n      <component1></component1>\n    ",
                        directives: [component1_1.Component1]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Home);
                return Home;
            }());
            exports_2("Home", Home);
        }
    }
});
System.register("components/layout/shell", ['angular2/core', 'angular2/router', "components/layout/home"], function(exports_3) {
    "use strict";
    var core_3, router_1, home_1;
    var Shell;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            }],
        execute: function() {
            Shell = (function () {
                function Shell() {
                }
                Shell = __decorate([
                    core_3.Component({
                        selector: 'hirise-shell'
                    }),
                    core_3.View({
                        template: "\n      <main>\n      \t<router-outlet></router-outlet>\n      </main>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: home_1.Home, name: 'Home', useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], Shell);
                return Shell;
            }());
            exports_3("Shell", Shell);
        }
    }
});
///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../../typings/main.d.ts"/>
System.register("components/app", ['angular2/core', 'angular2/router', "components/layout/shell"], function(exports_4) {
    "use strict";
    var core_4, router_2, shell_1;
    var App;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (shell_1_1) {
                shell_1 = shell_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_4.Component({
                        selector: 'hirise-app'
                    }),
                    core_4.View({
                        template: "\n      <router-outlet></router-outlet>\n    ",
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }),
                    router_2.RouteConfig([
                        { path: '/...', name: 'Shell', component: shell_1.Shell, useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_4("App", App);
        }
    }
});
System.register("main", ['angular2/platform/browser', 'angular2/http', 'angular2/router', 'angular2/core', "components/app"], function(exports_5) {
    "use strict";
    var browser_1, http_1, router_3, core_5, app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            },
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.App, [
                http_1.HTTP_PROVIDERS,
                router_3.ROUTER_PROVIDERS,
                core_5.provide(router_3.APP_BASE_HREF, { useValue: '/' })
            ]).catch(function (err) { return console.error(err); });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L2NvbXBvbmVudDEudHMiLCJjb21wb25lbnRzL2xheW91dC9ob21lLnRzIiwiY29tcG9uZW50cy9sYXlvdXQvc2hlbGwudHMiLCJjb21wb25lbnRzL2FwcC50cyIsIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUFBO2dCQUEwQixDQUFDO2dCQU4zQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsdUNBRVQ7cUJBQ0osQ0FBQzs7OEJBQUE7Z0JBQ3dCLGlCQUFDO1lBQUQsQ0FBMUIsQUFBMkIsSUFBQTtZQUEzQixtQ0FBMkIsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNFM0I7Z0JBQUE7Z0JBQW1CLENBQUM7Z0JBTnBCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHlDQUVUO3dCQUNELFVBQVUsRUFBRSxDQUFDLHVCQUFVLENBQUM7cUJBQzNCLENBQUM7O3dCQUFBO2dCQUNpQixXQUFDO1lBQUQsQ0FBbkIsQUFBb0IsSUFBQTtZQUFwQix1QkFBb0IsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNZcEI7Z0JBQUE7Z0JBQ0EsQ0FBQztnQkFsQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYztxQkFDM0IsQ0FBQztvQkFFRCxXQUFJLENBQUM7d0JBQ0YsUUFBUSxFQUFFLDhFQUlUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNsQyxDQUFDO29CQUVELG9CQUFXLENBQUM7d0JBQ1QsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxXQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFO3FCQUNuRSxDQUFDOzt5QkFBQTtnQkFHRixZQUFDO1lBQUQsQ0FEQSxBQUNDLElBQUE7WUFERCx5QkFDQyxDQUFBOzs7O0FDdkJBLHVFQUF1RTtBQUN2RSw4Q0FBOEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUIvQztnQkFBQTtnQkFBbUIsQ0FBQztnQkFacEI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsWUFBWTtxQkFDekIsQ0FBQztvQkFDRCxXQUFJLENBQUM7d0JBQ0YsUUFBUSxFQUFFLCtDQUVUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNsQyxDQUFDO29CQUNELG9CQUFXLENBQUM7d0JBQ1QsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGFBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFO3FCQUN4RSxDQUFDOzt1QkFBQTtnQkFDaUIsVUFBQztZQUFELENBQW5CLEFBQW9CLElBQUE7WUFBcEIscUJBQW9CLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNicEIsbUJBQVMsQ0FDTCxTQUFHLEVBQ0g7Z0JBQ0kscUJBQWM7Z0JBQ2QseUJBQWdCO2dCQUNoQixjQUFPLENBQUMsc0JBQWEsRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQzthQUM1QyxDQUNKLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBUSxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb21wb25lbnQxJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPHNwYW4+Y29tcG9uZW50MTwvc3Bhbj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDEgeyB9XG4iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7Q29tcG9uZW50MX0gZnJvbSAnLi9jb21wb25lbnQxJztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxjb21wb25lbnQxPjwvY29tcG9uZW50MT5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtDb21wb25lbnQxXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lIHt9XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgVmlld30gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHtIb21lfSBmcm9tICcuL2hvbWUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hpcmlzZS1zaGVsbCdcbn0pXG5cbkBWaWV3KHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPG1haW4+XG4gICAgICBcdDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgIDwvbWFpbj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5cbkBSb3V0ZUNvbmZpZyhbXG4gICAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogSG9tZSwgbmFtZTogJ0hvbWUnLCB1c2VBc0RlZmF1bHQ6IHRydWUgfVxuXSlcblxuZXhwb3J0IGNsYXNzIFNoZWxsIHtcbn1cbiIsIu+7vy8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cbu+7vy8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvbWFpbi5kLnRzXCIvPlxuXG5pbXBvcnQge0NvbXBvbmVudCwgVmlld30gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHtTaGVsbH0gZnJvbSAnLi9sYXlvdXQvc2hlbGwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hpcmlzZS1hcHAnXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgICB7IHBhdGg6ICcvLi4uJywgbmFtZTogJ1NoZWxsJywgY29tcG9uZW50OiBTaGVsbCwgdXNlQXNEZWZhdWx0OiB0cnVlIH1cbl0pXG5leHBvcnQgY2xhc3MgQXBwIHsgfVxuIiwiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge1JPVVRFUl9QUk9WSURFUlMsIEFQUF9CQVNFX0hSRUZ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge3Byb3ZpZGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5pbXBvcnQge0FwcH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcCc7XG5cbmJvb3RzdHJhcChcbiAgICBBcHAsXG4gICAgW1xuICAgICAgICBIVFRQX1BST1ZJREVSUyxcbiAgICAgICAgUk9VVEVSX1BST1ZJREVSUyxcbiAgICAgICAgcHJvdmlkZShBUFBfQkFTRV9IUkVGLCB7IHVzZVZhbHVlOiAnLycgfSlcbiAgICBdXG4pLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
