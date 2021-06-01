webpackHotUpdate("main",{

/***/ "./src/main/webapp/app/home/contribution/contribution.component.ts":
/*!*************************************************************************!*\
  !*** ./src/main/webapp/app/home/contribution/contribution.component.ts ***!
  \*************************************************************************/
/*! exports provided: ContributionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContributionComponent\", function() { return ContributionComponent; });\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js\");\n/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ \"./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js\");\n/* harmony import */ var app_entities_event_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/entities/event/event.service */ \"./src/main/webapp/app/entities/event/event.service.ts\");\n/* harmony import */ var _contribution_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contribution.form */ \"./src/main/webapp/app/home/contribution/contribution.form.ts\");\n/* harmony import */ var _contribution_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contribution.service */ \"./src/main/webapp/app/home/contribution/contribution.service.ts\");\n/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js\");\n/* harmony import */ var app_core_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/core/user/user.service */ \"./src/main/webapp/app/core/user/user.service.ts\");\n/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/alert/alert-error.component */ \"./src/main/webapp/app/shared/alert/alert-error.component.ts\");\n/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ \"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js\");\n/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ \"./node_modules/ngx-bootstrap/__ivy_ngcc__/typeahead/fesm2015/ngx-bootstrap-typeahead.js\");\n/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ \"./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction ContributionComponent_option_28_Template(rf, ctx) { if (rf & 1) {\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](0, \"option\", 8);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](1);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n} if (rf & 2) {\n    const trickOption_r1 = ctx.$implicit;\n    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵnextContext\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"ngValue\", trickOption_r1.id === (ctx_r0.contributionForm.get(\"trick\").value == null ? null : ctx_r0.contributionForm.get(\"trick\").value.id) ? ctx_r0.contributionForm.get(\"trick\").value : trickOption_r1);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](1);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtextInterpolate\"](trickOption_r1.name);\n} }\nclass ContributionComponent {\n    constructor(fb, eventService, userService, contributionService, router) {\n        this.fb = fb;\n        this.eventService = eventService;\n        this.userService = userService;\n        this.contributionService = contributionService;\n        this.router = router;\n        this.users = [];\n        this.isSaving = false;\n        this.contributionForm = this.fb.group({\n            amount: [],\n            userId: [],\n            user: [],\n            trick: [],\n            phone: [],\n        });\n    }\n    ngOnInit() {\n        this.eventService.getActive().subscribe((res) => {\n            var _a;\n            this.event = res.body || undefined;\n            this.tricks = (_a = this.event) === null || _a === void 0 ? void 0 : _a.tricks;\n            this.updateForm(this.event);\n        });\n        this.loadAll();\n    }\n    updateForm(event) {\n        this.contributionForm.patchValue({\n            tricks: event.tricks,\n        });\n    }\n    loadAll() {\n        this.userService.query().subscribe((res) => (this.users = res.body || []));\n    }\n    onSelect(event) {\n        this.selectedOption = event.item;\n        if (this.selectedOption != null) {\n            this.userId = this.selectedOption.id;\n            this.contributionForm.patchValue({\n                phone: this.selectedOption.phone,\n            });\n        }\n    }\n    createFromForm() {\n        return Object.assign(Object.assign({}, new _contribution_form__WEBPACK_IMPORTED_MODULE_3__[\"ContributionForm\"]()), { amount: this.contributionForm.get(['amount']).value, trick: this.contributionForm.get(['trick']).value, userId: this.userId, phone: this.contributionForm.get(['phone']).value, userFullName: this.contributionForm.get(['user']).value });\n    }\n    save() {\n        this.isSaving = true;\n        const contributionForm = this.createFromForm();\n        this.subscribeToSaveResponse(this.contributionService.create(contributionForm));\n    }\n    trackById(index, item) {\n        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion\n        return item.id;\n    }\n    subscribeToSaveResponse(result) {\n        result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());\n    }\n    onSaveSuccess() {\n        this.isSaving = false;\n        this.router.navigate(['home']);\n    }\n    onSaveError() {\n        this.isSaving = false;\n    }\n    previousState() {\n        window.history.back();\n    }\n}\nContributionComponent.ɵfac = function ContributionComponent_Factory(t) { return new (t || ContributionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdirectiveInject\"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__[\"FormBuilder\"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdirectiveInject\"](app_entities_event_event_service__WEBPACK_IMPORTED_MODULE_2__[\"EventService\"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdirectiveInject\"](app_core_user_user_service__WEBPACK_IMPORTED_MODULE_6__[\"UserService\"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdirectiveInject\"](_contribution_service__WEBPACK_IMPORTED_MODULE_4__[\"ContributionService\"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdirectiveInject\"](_angular_router__WEBPACK_IMPORTED_MODULE_5__[\"Router\"])); };\nContributionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdefineComponent\"]({ type: ContributionComponent, selectors: [[\"jhi-contribution\"]], decls: 58, vars: 8, consts: [[1, \"row\", \"justify-content-center\"], [1, \"col-8\"], [\"name\", \"contributionForm\", \"role\", \"form\", \"novalidate\", \"\", 3, \"formGroup\", \"ngSubmit\"], [1, \"form-group\"], [\"for\", \"field_amount\", 1, \"form-control-label\"], [\"type\", \"text\", \"name\", \"amount\", \"id\", \"amount\", \"formControlName\", \"amount\", 1, \"form-control\"], [\"for\", \"field_trick\", 1, \"form-control-label\"], [\"id\", \"field_trick\", \"name\", \"trick\", \"formControlName\", \"trick\", 1, \"form-control\"], [3, \"ngValue\"], [3, \"ngValue\", 4, \"ngFor\", \"ngForOf\", \"ngForTrackBy\"], [\"for\", \"field_user\", 1, \"form-control-label\"], [\"formControlName\", \"user\", \"name\", \"user\", \"id\", \"user\", \"typeaheadOptionField\", \"firstName\", \"placeholder\", \"AutoComplete\", 1, \"form-control\", 3, \"typeahead\", \"typeaheadOptionsLimit\", \"typeaheadMinLength\", \"typeaheadOnSelect\"], [\"for\", \"field_phone\", 1, \"form-control-label\"], [\"type\", \"text\", \"name\", \"phone\", \"id\", \"phone\", \"formControlName\", \"phone\", 1, \"form-control\"], [\"type\", \"submit\", \"id\", \"save-entity\", 1, \"btn\", \"btn-primary\", 3, \"disabled\"], [\"icon\", \"save\"]], template: function ContributionComponent_Template(rf, ctx) { if (rf & 1) {\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](0, \"div\", 0);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](1, \"\\n    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](2, \"div\", 1);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](3, \"\\n\\n        \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](4, \"h4\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](5, \"New  Tip \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](6, \"\\n        \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](7, \"form\", 2);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵlistener\"](\"ngSubmit\", function ContributionComponent_Template_form_ngSubmit_7_listener() { return ctx.save(); });\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](8, \"\\n           \\n\\n            \\n                \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelement\"](9, \"jhi-alert-error\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](10, \"\\n\\n                \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](11, \"div\", 3);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](12, \"\\n                    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](13, \"label\", 4);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](14, \"Amount\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](15, \"\\n                    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelement\"](16, \"input\", 5);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](17, \"\\n                \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](18, \"\\n\\n                \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](19, \"div\", 3);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](20, \"\\n                    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](21, \"label\", 6);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](22, \"Trick\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](23, \"\\n                    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](24, \"select\", 7);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](25, \"\\n                        \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelement\"](26, \"option\", 8);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](27, \"\\n                        \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtemplate\"](28, ContributionComponent_option_28_Template, 2, 2, \"option\", 9);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](29, \"\\n                       \\n                    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](30, \"\\n                \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](31, \"\\n\\n                \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](32, \"div\", 3);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](33, \"\\n                    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](34, \"label\", 10);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](35, \"Full Name\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](36, \"\\n                    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](37, \"input\", 11);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵlistener\"](\"typeaheadOnSelect\", function ContributionComponent_Template_input_typeaheadOnSelect_37_listener($event) { return ctx.onSelect($event); });\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](38, \"\\n                \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](39, \"\\n\\n                \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](40, \"div\", 3);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](41, \"\\n                    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](42, \"label\", 12);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](43, \"Phone\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](44, \"\\n                    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelement\"](45, \"input\", 13);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](46, \"\\n                \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](47, \"\\n\\n               \\n           \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](48, \"button\", 14);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](49, \"\\n                    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelement\"](50, \"fa-icon\", 15);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](51, \"\\u00A0\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](52, \"span\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](53, \"Save\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](54, \"\\n                \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](55, \"\\n            \\n        \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](56, \"\\n    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](57, \"\\n\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n    } if (rf & 2) {\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](7);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"formGroup\", ctx.contributionForm);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](19);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"ngValue\", null);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](2);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"ngForOf\", ctx.tricks)(\"ngForTrackBy\", ctx.trackById);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](9);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"typeahead\", ctx.users)(\"typeaheadOptionsLimit\", 7)(\"typeaheadMinLength\", 0);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](11);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"disabled\", ctx.contributionForm.invalid || ctx.isSaving);\n    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__[\"ɵangular_packages_forms_forms_y\"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__[\"NgControlStatusGroup\"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__[\"FormGroupDirective\"], _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_7__[\"AlertErrorComponent\"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__[\"DefaultValueAccessor\"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__[\"NgControlStatus\"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__[\"FormControlName\"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__[\"SelectControlValueAccessor\"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__[\"NgSelectOption\"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__[\"ɵangular_packages_forms_forms_x\"], _angular_common__WEBPACK_IMPORTED_MODULE_8__[\"NgForOf\"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_9__[\"TypeaheadDirective\"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__[\"FaIconComponent\"]], styles: [\"\"] });\n/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵsetClassMetadata\"](ContributionComponent, [{\n        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"],\n        args: [{\n                selector: 'jhi-contribution',\n                templateUrl: './contribution.component.html',\n                styleUrls: ['./contribution.component.scss'],\n            }]\n    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__[\"FormBuilder\"] }, { type: app_entities_event_event_service__WEBPACK_IMPORTED_MODULE_2__[\"EventService\"] }, { type: app_core_user_user_service__WEBPACK_IMPORTED_MODULE_6__[\"UserService\"] }, { type: _contribution_service__WEBPACK_IMPORTED_MODULE_4__[\"ContributionService\"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__[\"Router\"] }]; }, null); })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvY29udHJpYnV0aW9uL2NvbnRyaWJ1dGlvbi5jb21wb25lbnQudHM/ZjNjOCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvY29udHJpYnV0aW9uL2NvbnRyaWJ1dGlvbi5jb21wb25lbnQuaHRtbD9iYjU0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ0w7QUFDbUI7QUFFVTtBQUNiO0FBSXBCO0FBRWdCOzs7Ozs7Ozs7Ozs7SUNPakMsNEVBQTRMO0lBQUEsdURBQXNCO0lBQUEsNERBQVM7Ozs7SUFBbk4sb1FBQTRIO0lBQXdELDBEQUFzQjtJQUF0QixvRkFBc0I7O0FERW5PLE1BQU0scUJBQXFCO0lBZ0JoQyxZQUNVLEVBQWUsRUFDZixZQUEwQixFQUMxQixXQUF3QixFQUN4QixtQkFBd0MsRUFDeEMsTUFBYztRQUpkLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFsQnhCLFVBQUssR0FBWSxFQUFFLENBQUM7UUFDcEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUlqQixxQkFBZ0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMvQixNQUFNLEVBQUUsRUFBRTtZQUNWLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQyxDQUFDO0lBUUEsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFB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QUFuQixnRkFBbUI7UUFTekMsMkRBQWlEO1FBQWpELGtIQUFpRDs7NkZEZHRGLHFCQUFxQjtjQUxqQyx1REFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2NvbnRyaWJ1dGlvbi9jb250cmlidXRpb24uY29tcG9uZW50LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSAnYXBwL2VudGl0aWVzL2V2ZW50L2V2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgSUV2ZW50IH0gZnJvbSAnYXBwL3NoYXJlZC9tb2RlbC9ldmVudC5tb2RlbCc7XG5pbXBvcnQgeyBJQ29udHJpYnV0aW9uRm9ybSwgQ29udHJpYnV0aW9uRm9ybSB9IGZyb20gJy4vY29udHJpYnV0aW9uLmZvcm0nO1xuaW1wb3J0IHsgQ29udHJpYnV0aW9uU2VydmljZSB9IGZyb20gJy4vY29udHJpYnV0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgSVRyaWNrIH0gZnJvbSAnYXBwL3NoYXJlZC9tb2RlbC90cmljay5tb2RlbCc7XG5pbXBvcnQgeyBUeXBlYWhlYWRNYXRjaCB9IGZyb20gJ25neC1ib290c3RyYXAvdHlwZWFoZWFkL3R5cGVhaGVhZC1tYXRjaC5jbGFzcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSVVzZXIgfSBmcm9tICdhcHAvY29yZS91c2VyL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICdhcHAvY29yZS91c2VyL3VzZXIuc2VydmljZSc7XG5cbnR5cGUgRW50aXR5UmVzcG9uc2VUeXBlID0gSHR0cFJlc3BvbnNlPEVudGl0eVJlc3BvbnNlVHlwZT47XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2poaS1jb250cmlidXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udHJpYnV0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29udHJpYnV0aW9uLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyaWJ1dGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGV2ZW50PzogSUV2ZW50IHwgdW5kZWZpbmVkO1xuICB0cmlja3M/OiBJVHJpY2tbXTtcbiAgdXNlcnM6IElVc2VyW10gPSBbXTtcbiAgaXNTYXZpbmcgPSBmYWxzZTtcbiAgc2VsZWN0ZWRPcHRpb24/OiBJVXNlcjtcbiAgdXNlcklkPzogc3RyaW5nO1xuXG4gIGNvbnRyaWJ1dGlvbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICBhbW91bnQ6IFtdLFxuICAgIHVzZXJJZDogW10sXG4gICAgdXNlcjogW10sXG4gICAgdHJpY2s6IFtdLFxuICAgIHBob25lOiBbXSxcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIGNvbnRyaWJ1dGlvblNlcnZpY2U6IENvbnRyaWJ1dGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5ldmVudFNlcnZpY2UuZ2V0QWN0aXZlKCkuc3Vic2NyaWJlKChyZXM6IEh0dHBSZXNwb25zZTxJRXZlbnQ+KSA9PiB7XG4gICAgICB0aGlzLmV2ZW50ID0gcmVzLmJvZHkgfHwgdW5kZWZpbmVkO1xuICAgICAgdGhpcy50cmlja3MgPSB0aGlzLmV2ZW50Py50cmlja3M7XG4gICAgICB0aGlzLnVwZGF0ZUZvcm0odGhpcy5ldmVudCEpO1xuICAgIH0pO1xuICAgIHRoaXMubG9hZEFsbCgpO1xuICB9XG5cbiAgdXBkYXRlRm9ybShldmVudDogSUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5jb250cmlidXRpb25Gb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgdHJpY2tzOiBldmVudC50cmlja3MsXG4gICAgfSk7XG4gIH1cblxuICBsb2FkQWxsKCk6IHZvaWQge1xuICAgIHRoaXMudXNlclNlcnZpY2UucXVlcnkoKS5zdWJzY3JpYmUoKHJlczogSHR0cFJlc3BvbnNlPElVc2VyW10+KSA9PiAodGhpcy51c2VycyA9IHJlcy5ib2R5IHx8IFtdKSk7XG4gIH1cblxuICBvblNlbGVjdChldmVudDogVHlwZWFoZWFkTWF0Y2gpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gZXZlbnQuaXRlbTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiAhPSBudWxsKSB7XG4gICAgICB0aGlzLnVzZXJJZCA9IHRoaXMuc2VsZWN0ZWRPcHRpb24uaWQ7XG4gICAgICB0aGlzLmNvbnRyaWJ1dGlvbkZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICAgIHBob25lOiB0aGlzLnNlbGVjdGVkT3B0aW9uLnBob25lLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVGcm9tRm9ybSgpOiBJQ29udHJpYnV0aW9uRm9ybSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm5ldyBDb250cmlidXRpb25Gb3JtKCksXG4gICAgICBhbW91bnQ6IHRoaXMuY29udHJpYnV0aW9uRm9ybS5nZXQoWydhbW91bnQnXSkhLnZhbHVlLFxuICAgICAgdHJpY2s6IHRoaXMuY29udHJpYnV0aW9uRm9ybS5nZXQoWyd0cmljayddKSEudmFsdWUsXG4gICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxuICAgICAgcGhvbmU6IHRoaXMuY29udHJpYnV0aW9uRm9ybS5nZXQoWydwaG9uZSddKSEudmFsdWUsXG4gICAgICB1c2VyRnVsbE5hbWU6IHRoaXMuY29udHJpYnV0aW9uRm9ybS5nZXQoWyd1c2VyJ10pIS52YWx1ZSxcbiAgICB9O1xuICB9XG5cbiAgc2F2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzU2F2aW5nID0gdHJ1ZTtcblxuICAgIGNvbnN0IGNvbnRyaWJ1dGlvbkZvcm0gPSB0aGlzLmNyZWF0ZUZyb21Gb3JtKCk7XG5cbiAgICB0aGlzLnN1YnNjcmliZVRvU2F2ZVJlc3BvbnNlKHRoaXMuY29udHJpYnV0aW9uU2VydmljZS5jcmVhdGUoY29udHJpYnV0aW9uRm9ybSkpO1xuICB9XG5cbiAgdHJhY2tCeUlkKGluZGV4OiBudW1iZXIsIGl0ZW06IElUcmljayk6IHN0cmluZyB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bm5lY2Vzc2FyeS10eXBlLWFzc2VydGlvblxuICAgIHJldHVybiBpdGVtLmlkITtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVUb1NhdmVSZXNwb25zZShyZXN1bHQ6IE9ic2VydmFibGU8RW50aXR5UmVzcG9uc2VUeXBlPik6IHZvaWQge1xuICAgIHJlc3VsdC5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiB0aGlzLm9uU2F2ZVN1Y2Nlc3MoKSxcbiAgICAgICgpID0+IHRoaXMub25TYXZlRXJyb3IoKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25TYXZlU3VjY2VzcygpOiB2b2lkIHtcbiAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydob21lJ10pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uU2F2ZUVycm9yKCk6IHZvaWQge1xuICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHByZXZpb3VzU3RhdGUoKTogdm9pZCB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLThcIj5cblxuICAgICAgICA8aDQ+TmV3ICBUaXAgPC9oND5cbiAgICAgICAgPGZvcm0gbmFtZT1cImNvbnRyaWJ1dGlvbkZvcm1cIiByb2xlPVwiZm9ybVwiIG5vdmFsaWRhdGUgKG5nU3VibWl0KT1cInNhdmUoKVwiIFtmb3JtR3JvdXBdPVwiY29udHJpYnV0aW9uRm9ybVwiPlxuICAgICAgICAgICBcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY29udHJvbC1sYWJlbFwiIGZvcj1cImZpZWxkX2Ftb3VudFwiPkFtb3VudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImFtb3VudFwiIGlkPVwiYW1vdW50XCIgZm9ybUNvbnRyb2xOYW1lPVwiYW1vdW50XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJmaWVsZF90cmlja1wiPlRyaWNrPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiZmllbGRfdHJpY2tcIiBuYW1lPVwidHJpY2tcIiBmb3JtQ29udHJvbE5hbWU9XCJ0cmlja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBbbmdWYWx1ZV09XCJudWxsXCI+PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIFtuZ1ZhbHVlXT1cInRyaWNrT3B0aW9uLmlkID09PSBjb250cmlidXRpb25Gb3JtLmdldCgndHJpY2snKSEudmFsdWU/LmlkID8gY29udHJpYnV0aW9uRm9ybS5nZXQoJ3RyaWNrJykhLnZhbHVlIDogdHJpY2tPcHRpb25cIiAqbmdGb3I9XCJsZXQgdHJpY2tPcHRpb24gb2YgdHJpY2tzOyB0cmFja0J5OiB0cmFja0J5SWRcIj57eyB0cmlja09wdGlvbi5uYW1lIH19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY29udHJvbC1sYWJlbFwiIGZvcj1cImZpZWxkX3VzZXJcIj5GdWxsIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwidXNlclwiIG5hbWU9XCJ1c2VyXCIgaWQ9XCJ1c2VyXCIgW3R5cGVhaGVhZF09XCJ1c2Vyc1wiIHR5cGVhaGVhZE9wdGlvbkZpZWxkPVwiZmlyc3ROYW1lXCIgW3R5cGVhaGVhZE9wdGlvbnNMaW1pdF09XCI3XCIgW3R5cGVhaGVhZE1pbkxlbmd0aF09XCIwXCIgcGxhY2Vob2xkZXI9XCJBdXRvQ29tcGxldGVcIiAodHlwZWFoZWFkT25TZWxlY3QpPVwib25TZWxlY3QoJGV2ZW50KVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJmaWVsZF9waG9uZVwiPlBob25lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicGhvbmVcIiBpZD1cInBob25lXCIgZm9ybUNvbnRyb2xOYW1lPVwicGhvbmVcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwic2F2ZS1lbnRpdHlcIiBbZGlzYWJsZWRdPVwiY29udHJpYnV0aW9uRm9ybS5pbnZhbGlkIHx8IGlzU2F2aW5nXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gaWNvbj1cInNhdmVcIj48L2ZhLWljb24+Jm5ic3A7PHNwYW4+U2F2ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG48L2Rpdj4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/home/contribution/contribution.component.ts\n");

/***/ })

})