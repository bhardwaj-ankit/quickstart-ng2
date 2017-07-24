"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Importing Modules
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//Importing Components
var childone_component_1 = require('./childOne/childone.component');
var ladh_component_1 = require('./childOne/ladh.component');
var page_not_found_component_1 = require('./page-not-found.component');
var page_component_1 = require('./page.component');
var pnf_component_1 = require('./pnf.component');
var route = [
    { 'path': '', redirectTo: 'a', pathMatch: 'full' },
    { 'path': 'childone', component: childone_component_1.ChildoneComponent },
    { 'path': 'childone/:id', component: ladh_component_1.LadhComponent },
    { 'path': 'pnf', component: pnf_component_1.PnfComponent },
    { 'path': 'a', component: page_component_1.PageComponent, children: [
            { 'path': '', component: page_component_1.PageComponent },
            { 'path': 'aaa', component: ladh_component_1.LadhComponent }
        ]
    },
    { 'path': '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(route)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.RoutingComponents = [childone_component_1.ChildoneComponent, ladh_component_1.LadhComponent, page_component_1.PageComponent, pnf_component_1.PnfComponent, page_not_found_component_1.PageNotFoundComponent];
//# sourceMappingURL=app-routing.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import { LadhComponent } from './childOne/ladh.component';
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Hello {{name}}</h1>\n  \t\t\t\t<nav>\n  \t\t\t\t\t<a routerLink='/childone' routerLinkActive='active'>Childone</a>\n  \t\t\t\t</nav>\n  \t\t\t\t<router-outlet></router-outlet>",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
"use strict";
/*import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule } from '@angular/router';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/angular/i,
      '<h1> should say something about "Angular"');
  });
});
*/
var app_component_1 = require('./app.component');
describe('AppComponent', function () {
    //const App = new AppComponent();
    it('should add 1+1', function () {
        expect(1 + 1).toEqual(2);
    });
    it('name should contain angular', function () {
        var App = new app_component_1.AppComponent();
        console.log(App);
        expect(App.name).toContain('Angular');
    });
});
//# sourceMappingURL=app.component.spec.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_routing_module_1 = require('./app-routing.module');
var app_routing_module_2 = require('./app-routing.module');
var app_component_1 = require('./app.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, app_routing_module_2.RoutingComponents],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//Services
var childone_service_1 = require('./childone.service');
var ChildoneComponent = (function () {
    function ChildoneComponent(chiloneservice, router, route) {
        this.chiloneservice = chiloneservice;
        this.router = router;
        this.route = route;
        this.myvar = "This is H3 of childone";
        this.con = true;
        this.imageLink = 'http://lorempixel.com/400/200';
        this.childonedata = new Array();
    }
    ChildoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chiloneservice.getChildoneData()
            .subscribe(function (res) { return _this.childonedata = res; }, function (resError) { return _this.errorMsg = resError; });
        this.route.params.subscribe(function (params) {
            var id = parseInt(params['id']);
            _this.lastVisitedId = id;
        });
    };
    ChildoneComponent.prototype.onClick = function (childone) {
        this.router.navigate(['/childone', childone.id]);
    };
    ChildoneComponent = __decorate([
        core_1.Component({
            selector: 'child-one',
            template: "<h2>Heading from Childone Component</h2>\n\t\t\t\t<h3 [class.myc]='con'>{{myvar}}</h3>\n\t\t\t\t<h3 [class.red]='con'>{{errorMsg}}</h3>\n\t\t\t\t<img [src]='imageLink'>\n\t\t\t\t<h4>List of Childone Data</h4>\n\t\t\t\t<p (click)='onClick(childone)' [class.lvisited]='childone.id===lastVisitedId' *ngFor=\"let childone of childonedata\">S.No. : {{childone.id}} Name : {{childone.name}}</p>",
            styles: [".myc{color:green}\n\t\t\t\t.red{color:red}\t\n\t\t\t\t.lvisited{color:blue}"],
            providers: [childone_service_1.ChildoneService],
        }), 
        __metadata('design:paramtypes', [childone_service_1.ChildoneService, router_1.Router, router_1.ActivatedRoute])
    ], ChildoneComponent);
    return ChildoneComponent;
}());
exports.ChildoneComponent = ChildoneComponent;
//# sourceMappingURL=childone.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var ChildoneService = (function () {
    function ChildoneService(_http) {
        this._http = _http;
        this.urlForChildOneData = '../../webserver/childondata.json';
    }
    ChildoneService.prototype.getChildoneData = function () {
        return this._http.get(this.urlForChildOneData)
            .map(function (response) { return response.json(); })
            .catch(this.errorhandler);
    };
    ChildoneService.prototype.errorhandler = function (error) {
        return Observable_1.Observable.throw(error || "Server Error");
    };
    ChildoneService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ChildoneService);
    return ChildoneService;
}());
exports.ChildoneService = ChildoneService;
//# sourceMappingURL=childone.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//Services
var router_1 = require('@angular/router');
var LadhComponent = (function () {
    function LadhComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    LadhComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.route);
        //this.id = this.route.snapshot.params['id'];
        this.route.params.subscribe(function (params) {
            _this.id = parseInt(params['id']);
        });
    };
    LadhComponent.prototype.goBack = function () {
        var selectedId = this.id ? this.id : null;
        this.router.navigate(['/childone', { id: selectedId }]);
    };
    LadhComponent = __decorate([
        core_1.Component({
            selector: 'ladh',
            template: "<h2>Heading from ladh Component</h2>\n\t\t\t\t<p>Childone Id : {{id}}</p>\n\t\t\t\t<button (click)='goBack()'>Go Back</button>",
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], LadhComponent);
    return LadhComponent;
}());
exports.LadhComponent = LadhComponent;
//# sourceMappingURL=ladh.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
        this.cevt = new core_1.EventEmitter();
    }
    PageNotFoundComponent.prototype.onChange = function (param) {
        this.cevt.emit(param);
    };
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'page-not',
            template: "<h1>Page Not Found</h1>\n\t\t\t\t<label>Input 2</label>\n\t\t\t\t<input type='text' #ctext (keyup)=\"onChange(ctext.value)\">\n\t\t\t\t{{pinput}}",
            inputs: ['pinput'],
            outputs: ['cevt']
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;
//# sourceMappingURL=page-not-found.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PageComponent = (function () {
    function PageComponent() {
    }
    PageComponent.prototype.onSubmit = function (param) {
        console.log(param);
    };
    PageComponent = __decorate([
        core_1.Component({
            template: "<h2>Page Not Found Sorry!</h2>\n\t\t\t\t<h3>USER DATA</h3>\n\t\t\t\t<form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm.value)\">\n\t\t\t\t\t<div class='formGroup'>\n\t\t\t\t\t\t<label>Name</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"Name\" ngModel>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='formGroup' ngModelGroup=\"address\">\n\t\t\t\t\t\t<label>Add</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"Add\" ngModel>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n\t\t\t\t</form>\n\t\t\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], PageComponent);
    return PageComponent;
}());
exports.PageComponent = PageComponent;
//# sourceMappingURL=page.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PnfComponent = (function () {
    function PnfComponent() {
    }
    PnfComponent = __decorate([
        core_1.Component({
            template: "<h2>Page Not Found. SOrry!!</h2>\n\t\t\t\t<label>Input 1</label>\n\t\t\t\t<input type='text' #ptext (keyup)='0'>\n\t\t\t\t{{chdata}}\n\t\t\t\t<br><br>\n\t\t\t\t<page-not (cevt)=\"chdata=$event\" [pinput]=\"ptext.value\"></page-not>\n\t\t\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], PnfComponent);
    return PnfComponent;
}());
exports.PnfComponent = PnfComponent;
//# sourceMappingURL=pnf.component.js.map
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app/app.module');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map
var templateUrlRegex = /templateUrl\s*:(\s*['"`](.*?)['"`]\s*)/gm;
var stylesRegex = /styleUrls *:(\s*\[[^\]]*?\])/g;
var stringRegex = /(['`"])((?:[^\\]\\\1|.)*?)\1/g;

module.exports.translate = function(load){

  var url = new URL(load.address);

  var basePathParts = url.pathname.split('/');

  basePathParts.pop();
  var basePath = basePathParts.join('/');

  var baseHref = new URL(this.baseURL).pathname;

  basePath = basePath.replace(baseHref, '');

  load.source = load.source
    .replace(templateUrlRegex, function(match, quote, url){
      let resolvedUrl = url;

      if (url.startsWith('.')) {
        resolvedUrl = basePath + url.substr(1);
      }

      return `templateUrl: '${resolvedUrl}'`;
    })
    .replace(stylesRegex, function(match, relativeUrls) {
      var urls = [];

      while ((match = stringRegex.exec(relativeUrls)) !== null) {
        if (match[2].startsWith('.')) {
          urls.push(`'${basePath}${match[2].substr(1)}'`);
        } else {
          urls.push(`'${match[2]}'`);
        }
      }

      return "styleUrls: [" + urls.join(', ') + "]";
    });

  return load;
};

/**
 * Add barrels and stuff
 * Adjust as necessary for your application needs.
 */
// (function (global) {
//   System.config({
//     packages: {
//       // add packages here
//     }
//   });
// })(this);

/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
