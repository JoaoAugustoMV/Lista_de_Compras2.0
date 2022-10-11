"use strict";
(self["webpackChunkListaComprasAngular"] = self["webpackChunkListaComprasAngular"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_lista_de_compras_listaDeCompras_lista_de_compras_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/lista-de-compras/listaDeCompras/lista-de-compras.component */ 1578);
/* harmony import */ var _pages_listas_salvas_listas_salvas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/listas-salvas/listas-salvas.component */ 9159);
/* harmony import */ var _pages_modoMercado_modo_mercado_modo_mercado_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/modoMercado/modo-mercado/modo-mercado.component */ 1198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    { path: 'novaLista', component: _pages_lista_de_compras_listaDeCompras_lista_de_compras_component__WEBPACK_IMPORTED_MODULE_0__.ListaDeComprasComponent, title: "Nova Lista" },
    { path: '', component: _pages_listas_salvas_listas_salvas_component__WEBPACK_IMPORTED_MODULE_1__.ListasSalvasComponent, title: "Pagina Inicial" },
    { path: 'editarLista/:nomeLista', component: _pages_lista_de_compras_listaDeCompras_lista_de_compras_component__WEBPACK_IMPORTED_MODULE_0__.ListaDeComprasComponent, title: "Editar Lista" },
    { path: 'modoMercado/:nomeLista', component: _pages_modoMercado_modo_mercado_modo_mercado_component__WEBPACK_IMPORTED_MODULE_2__.ModoMercadoComponent, title: "Modo Mercado" },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);




class AppComponent {
    constructor() {
        this.title = 'ListaCompras';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [["id", "header"], ["id", "conteudo"], ["id", "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-footer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["body[_ngcontent-%COMP%]{\r\n    --fundo1: #000000;\r\n    --fonte: #2f2600;\r\n    --hiperlink: #6b5b18;\r\n    --toque: #af9930;\r\n    --fundo2: #fade4b;\r\n\r\n    --cinzaForte: #424242;\r\n    --cinzaFraco: #949494;\r\n    background-color: var(--fundo1);\r\n    height: 100vh; \r\n    width: 100%;\r\n\r\n    display: flex;\r\n    flex-flow: column;\r\n    height: 100vh;\r\n}\r\n\r\n#header[_ngcontent-%COMP%]{\r\n    flex-grow: 0;\r\n    flex-basis: auto;\r\n    \r\n}\r\n\r\n#conteudo[_ngcontent-%COMP%]{\r\n    background-color: var(--cinzaForte);\r\n    padding: 10px;\r\n    max-width: 90vw;\r\n    max-height: 80vh;\r\n    margin: 0px auto ;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    border-radius: 10px;\r\n    flex-grow: 1;\r\n    flex-basis: auto;\r\n    \r\n    \r\n}\r\n\r\n#footer[_ngcontent-%COMP%]{\r\n    flex-grow: 0;\r\n    flex-basis: 100px;\r\n    \r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7SUFFakIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLFdBQVc7O0lBRVgsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCOztJQUVqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCOzs7QUFHcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCOzs7QUFHckIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgLS1mdW5kbzE6ICMwMDAwMDA7XHJcbiAgICAtLWZvbnRlOiAjMmYyNjAwO1xyXG4gICAgLS1oaXBlcmxpbms6ICM2YjViMTg7XHJcbiAgICAtLXRvcXVlOiAjYWY5OTMwO1xyXG4gICAgLS1mdW5kbzI6ICNmYWRlNGI7XHJcblxyXG4gICAgLS1jaW56YUZvcnRlOiAjNDI0MjQyO1xyXG4gICAgLS1jaW56YUZyYWNvOiAjOTQ5NDk0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnVuZG8xKTtcclxuICAgIGhlaWdodDogMTAwdmg7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuI2hlYWRlcntcclxuICAgIGZsZXgtZ3JvdzogMDtcclxuICAgIGZsZXgtYmFzaXM6IGF1dG87XHJcbiAgICBcclxufVxyXG5cclxuI2NvbnRldWRve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2luemFGb3J0ZSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xyXG4gICAgbWF4LWhlaWdodDogODB2aDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuI2Zvb3RlcntcclxuICAgIGZsZXgtZ3JvdzogMDtcclxuICAgIGZsZXgtYmFzaXM6IDEwMHB4O1xyXG4gICAgXHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _pages_lista_de_compras_listaDeCompras_lista_de_compras_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/lista-de-compras/listaDeCompras/lista-de-compras.component */ 1578);
/* harmony import */ var _pages_lista_de_compras_tabela_produtos_tabela_produtos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/lista-de-compras/tabela-produtos/tabela-produtos.component */ 5048);
/* harmony import */ var _pages_listas_salvas_listas_salvas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/listas-salvas/listas-salvas.component */ 9159);
/* harmony import */ var _pages_listas_salvas_lista_icone_lista_icone_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/listas-salvas/lista-icone/lista-icone.component */ 7962);
/* harmony import */ var _components_salvar_lista_salvar_lista_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/salvar-lista/salvar-lista.component */ 1034);
/* harmony import */ var _components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/snack-bar/snack-bar.component */ 5629);
/* harmony import */ var _components_janela_modal_janela_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/janela-modal/janela-modal.component */ 8745);
/* harmony import */ var _pages_modoMercado_modo_mercado_modo_mercado_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/modoMercado/modo-mercado/modo-mercado.component */ 1198);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);






























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
        // Angular Material
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__.MatToolbarModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__.MatSnackBarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__.MatCheckboxModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
        _pages_lista_de_compras_listaDeCompras_lista_de_compras_component__WEBPACK_IMPORTED_MODULE_4__.ListaDeComprasComponent,
        _pages_lista_de_compras_tabela_produtos_tabela_produtos_component__WEBPACK_IMPORTED_MODULE_5__.TabelaProdutosComponent,
        _pages_listas_salvas_listas_salvas_component__WEBPACK_IMPORTED_MODULE_6__.ListasSalvasComponent,
        _pages_listas_salvas_lista_icone_lista_icone_component__WEBPACK_IMPORTED_MODULE_7__.ListaIconeComponent,
        _components_salvar_lista_salvar_lista_component__WEBPACK_IMPORTED_MODULE_8__.SalvarListaComponent,
        _components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_9__.SnackBarComponent,
        _components_janela_modal_janela_modal_component__WEBPACK_IMPORTED_MODULE_10__.JanelaModalComponent,
        _pages_modoMercado_modo_mercado_modo_mercado_component__WEBPACK_IMPORTED_MODULE_11__.ModoMercadoComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
        // Angular Material
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__.MatToolbarModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__.MatSnackBarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__.MatCheckboxModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetComponentScope"](_pages_lista_de_compras_listaDeCompras_lista_de_compras_component__WEBPACK_IMPORTED_MODULE_4__.ListaDeComprasComponent, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _pages_lista_de_compras_tabela_produtos_tabela_produtos_component__WEBPACK_IMPORTED_MODULE_5__.TabelaProdutosComponent], []);


/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [["href", "https://github.com/JoaoAugustoMV?tab=repositories", "target", "_blank", "title", "Visite meu GitHub!"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Desenvolvido por ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Jo\u00E3o Augusto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    \r\n}\r\np[_ngcontent-%COMP%]{\r\n    margin-top: 2vh;\r\n    --cinzaForte: #424242;\r\n    --cinzaFraco: #949494;\r\n    background-color: var(--cinzaForte);\r\n\r\n    \r\n\r\n    color: white;\r\n    width: 22vw;\r\n    height: 3vh;\r\n    text-align: center;\r\n    border-radius: 50px;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color:white\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1Qjs7QUFFM0I7QUFDQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG1DQUFtQzs7SUFFbkM7a0JBQ2M7O0lBRWQsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCOztBQUVKIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbn1cclxucHtcclxuICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgIC0tY2luemFGb3J0ZTogIzQyNDI0MjtcclxuICAgIC0tY2luemFGcmFjbzogIzk0OTQ5NDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNpbnphRm9ydGUpO1xyXG5cclxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4OyAqL1xyXG5cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAyMnZ3O1xyXG4gICAgaGVpZ2h0OiAzdmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6d2hpdGVcclxuICAgIFxyXG59Il19 */"] });


/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 9, vars: 0, consts: [["href", "/novaLista"], ["href", "/"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Listas de Compras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav")(3, "span")(4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nova Lista");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span")(7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Listas Salvas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["h1[_ngcontent-%COMP%]{\r\n\r\n    --cinzaForte: #424242;\r\n    --cinzaFraco: #949494;\r\n    text-align: center;\r\n    \r\n    background-color: black;\r\n    color: white;\r\n    font: normal bold 42px sans-serif;\r\n    \r\n}\r\n\r\nnav[_ngcontent-%COMP%]{\r\n    margin-bottom:10px;\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: var(--cinzaForte);\r\n    width: 80vw;\r\n    margin:10px auto ;\r\n    \r\n    border-radius: 10px;\r\n}\r\n\r\nspan[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n    margin: 10px;\r\n    width: 15vw;\r\n    display: flex;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin: auto;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-decoration: none;\r\n    color: white;\r\n    font: 20px sans-serif;\r\n    width: 15vw;\r\n    height: 5vw;\r\n    \r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font: normal bold 21px sans-serif;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    background-color: white;\r\n    color: var(--cinzaForte);\r\n    border-radius: 10px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlDQUFpQzs7QUFFckM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix5Q0FBeUM7SUFDekMsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsV0FBVzs7QUFFZjs7QUFDQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsbUJBQW1COztBQUV2QiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG5cclxuICAgIC0tY2luemFGb3J0ZTogIzQyNDI0MjtcclxuICAgIC0tY2luemFGcmFjbzogIzk0OTQ5NDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIG1hcmdpbjogMzBweDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udDogbm9ybWFsIGJvbGQgNDJweCBzYW5zLXNlcmlmO1xyXG4gICAgXHJcbn1cclxuXHJcbm5hdntcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNpbnphRm9ydGUpO1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBtYXJnaW46MTBweCBhdXRvIDtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNpbnphRnJhY28pOyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5zcGFue1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuYXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250OiAyMHB4IHNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDogMTV2dztcclxuICAgIGhlaWdodDogNXZ3O1xyXG4gICAgXHJcbn1cclxubmF2IGF7XHJcbiAgICBmb250OiBub3JtYWwgYm9sZCAyMXB4IHNhbnMtc2VyaWY7XHJcbn1cclxubmF2IGE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiB2YXIoLS1jaW56YUZvcnRlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG59Il19 */"] });


/***/ }),

/***/ 8745:
/*!*******************************************************************!*\
  !*** ./src/app/components/janela-modal/janela-modal.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JanelaModalComponent": () => (/* binding */ JanelaModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_services_produto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/produto.service */ 9885);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);






class JanelaModalComponent {
    constructor(dialogRef, data, produtoService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.produtoService = produtoService;
        this.eventConfirmar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
    }
    fechar() {
        this.dialogRef.closeAll();
    }
    confirmar() {
        this.eventConfirmar.emit(true);
    }
}
JanelaModalComponent.ɵfac = function JanelaModalComponent_Factory(t) { return new (t || JanelaModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_produto_service__WEBPACK_IMPORTED_MODULE_0__.ProdutoService)); };
JanelaModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JanelaModalComponent, selectors: [["app-janela-modal"]], outputs: { eventConfirmar: "eventConfirmar" }, decls: 10, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "click"]], template: function JanelaModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Deletar Lista");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2)(6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JanelaModalComponent_Template_button_click_6_listener() { return ctx.fechar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JanelaModalComponent_Template_button_click_8_listener() { return ctx.confirmar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Confirmar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.data.mensagem, " ");
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqYW5lbGEtbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1034:
/*!*******************************************************************!*\
  !*** ./src/app/components/salvar-lista/salvar-lista.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalvarListaComponent": () => (/* binding */ SalvarListaComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../snack-bar/snack-bar.component */ 5629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_produto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/produto.service */ 9885);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);











class SalvarListaComponent {
    constructor(dialogRef, data, produtoService, snackBar, rotas) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.produtoService = produtoService;
        this.snackBar = snackBar;
        this.rotas = rotas;
        this.nsei = "Nao Sei";
    }
    ngOnInit() {
        this.nomeLista = this.data.nomeLista;
        // throw new Error('Method not implemented.');
    }
    fechar() {
        this.dialogRef.close();
    }
    salvarLista() {
        let listasAtuais;
        this.produtoService.retornarNomesListas().subscribe({ next: (listas) => {
                listasAtuais = listas;
            }, complete: () => {
                // FOR: Para informa de qual lista o produto é 
                for (let produto of this.data.lista) { // Percorre o array de Produtos
                    produto['nomeLista'] = this.nomeLista;
                }
                if (listasAtuais.includes(this.nomeLista)) { // Se lista já existe, ou seja, metodo PUT
                    this.produtoService.atualizarLista(this.nomeLista, this.data.lista).subscribe();
                }
                else { // Se a lista ainda não existe, ou seja metodo POST
                    this.produtoService.adicionarLista(this.nomeLista, this.data.lista).subscribe((resposta) => {
                    });
                } // end else
                this.abrirSnackBar();
                this.rotas.navigateByUrl('/');
            } // End:4
        }); // end subscribe
    } // End salvarLista
    abrirSnackBar() {
        this.snackBar.openFromComponent(_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_0__.SnackBarComponent, {
            duration: 4000,
            panelClass: 'snackBarPadrao',
            data: { mensagem: "Sua Lista foi Salva!" },
        });
    }
}
SalvarListaComponent.ɵfac = function SalvarListaComponent_Factory(t) { return new (t || SalvarListaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_produto_service__WEBPACK_IMPORTED_MODULE_1__.ProdutoService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
SalvarListaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SalvarListaComponent, selectors: [["app-salvar-lista"]], inputs: { apareceSalvarLista: "apareceSalvarLista" }, decls: 14, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["appearance", "fill"], ["matInput", "", 3, "ngModel", "value", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close", "click"]], template: function SalvarListaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Salvar Lista");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Digite o nome da lista");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 2)(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SalvarListaComponent_Template_input_ngModelChange_8_listener($event) { return ctx.nomeLista = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4)(10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SalvarListaComponent_Template_button_click_10_listener() { return ctx.fechar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SalvarListaComponent_Template_button_click_12_listener() { return ctx.salvarLista(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Salvar Lista");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.nomeLista)("value", ctx.nomeLista);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", ctx.nsei);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWx2YXItbGlzdGEuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 5629:
/*!*************************************************************!*\
  !*** ./src/app/components/snack-bar/snack-bar.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackBarComponent": () => (/* binding */ SnackBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class SnackBarComponent {
    constructor(dados) {
        this.dados = dados;
    }
    ngOnInit() {
    }
}
SnackBarComponent.ɵfac = function SnackBarComponent_Factory(t) { return new (t || SnackBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MAT_SNACK_BAR_DATA)); };
SnackBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SnackBarComponent, selectors: [["app-snack-bar"]], decls: 2, vars: 1, template: function SnackBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dados.mensagem);
    } }, styles: ["p[_ngcontent-%COMP%]{\r\n    \r\n    margin:0;\r\n    color: rgb(241, 241, 241);\r\n    text-align: center;\r\n}\r\n\r\n  .snackBarPadrao{\r\n    background-color: #424242;\r\n    font-size: 22px !important;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNuYWNrLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0lBQzVCLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDBCQUEwQjtDQUM3QiIsImZpbGUiOiJzbmFjay1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgOyAqL1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBjb2xvcjogcmdiKDI0MSwgMjQxLCAyNDEpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnNuYWNrQmFyUGFkcmFve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcclxuICAgIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xyXG4gfVxyXG4iXX0= */"] });


/***/ }),

/***/ 2169:
/*!*******************************************!*\
  !*** ./src/app/models/descricao.class.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Descricao": () => (/* binding */ Descricao)
/* harmony export */ });
class Descricao {
    constructor(nomeLista, totalFinal) {
        this.nomeLista = nomeLista;
        this.totalFinal = totalFinal;
        this.nomeLista = nomeLista;
        this.totalFinal = totalFinal;
    }
}


/***/ }),

/***/ 6180:
/*!*****************************************!*\
  !*** ./src/app/models/produto.class.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Produto": () => (/* binding */ Produto)
/* harmony export */ });
class Produto {
    constructor(nome, preco, quantidade, nomeLista) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.nomeLista = nomeLista;
        this.total = preco * quantidade;
    }
}


/***/ }),

/***/ 1578:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/lista-de-compras/listaDeCompras/lista-de-compras.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListaDeComprasComponent": () => (/* binding */ ListaDeComprasComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_produto_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/produto.class */ 6180);
/* harmony import */ var src_app_components_salvar_lista_salvar_lista_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/salvar-lista/salvar-lista.component */ 1034);
/* harmony import */ var src_app_components_janela_modal_janela_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/janela-modal/janela-modal.component */ 8745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/produto.service */ 9885);







class ListaDeComprasComponent {
    constructor(dialog, router, produtoService) {
        this.dialog = dialog;
        this.router = router;
        this.produtoService = produtoService;
        this.listaProdutos = [];
    }
    ngOnInit() {
        this.rotaAtual = this.router.url; //
        this.nomeLista = this.rotaAtual.split("/").slice(-1)[0]; //
        this.produtoService.retornarLista(this.nomeLista).subscribe({
            next: lista => {
                this.listaProdutos = lista;
            }, complete: () => {
            }
        }); // end subs
    } // end OnInit
    adicionarProduto(inputNome, inputPreco, inputQuantidade) {
        let nome = inputNome.value; // Infere string
        let preco = Number(inputPreco.value);
        let quantidade = Number(inputQuantidade.value);
        let produto = new src_app_models_produto_class__WEBPACK_IMPORTED_MODULE_0__.Produto(nome, preco, quantidade);
        this.listaProdutos.push(produto);
        // Limpar Campos
        for (let input of arguments) {
            input.value = '';
        }
        inputNome.focus();
    } // end addProduto
    salvarLista() {
        this.abrirDialogSalvar();
    }
    cancelar() {
        this.router.navigateByUrl('/');
    }
    // Abrir janela para Salvar Lista
    abrirDialogSalvar() {
        const dialogRef = this.dialog.open(src_app_components_salvar_lista_salvar_lista_component__WEBPACK_IMPORTED_MODULE_1__.SalvarListaComponent, {
            width: '300px',
            data: { nomeLista: this.nomeLista, lista: this.listaProdutos },
            disableClose: true,
            autoFocus: true,
            hasBackdrop: true
        });
        dialogRef.afterClosed().subscribe(result => {
            // this.animal = result;
        });
    }
    removerProduto(novaLista) {
        console.log("testse", novaLista);
        this.listaProdutos = novaLista; // Apenas atribui a lista da tabelaComponent a lista deste component
    }
    removerTodosProdutos() {
        this.listaProdutos = [];
    }
    abrirDialogRemoverTodos() {
        const dialogRef = this.dialog.open(src_app_components_janela_modal_janela_modal_component__WEBPACK_IMPORTED_MODULE_2__.JanelaModalComponent, {
            width: '350px',
            data: { mensagem: "Tem certeza que deseja remover todos os produtos?" },
            disableClose: false,
            hasBackdrop: true
        });
        this.eventoConfirmarRemocao(dialogRef);
    }
    eventoConfirmarRemocao(dialogRef) {
        dialogRef.componentInstance.eventConfirmar.subscribe(() => {
            this.removerTodosProdutos();
            dialogRef.close();
        });
    }
}
ListaDeComprasComponent.ɵfac = function ListaDeComprasComponent_Factory(t) { return new (t || ListaDeComprasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_produto_service__WEBPACK_IMPORTED_MODULE_3__.ProdutoService)); };
ListaDeComprasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ListaDeComprasComponent, selectors: [["app-lista-de-compras"]], decls: 37, vars: 2, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["id", "InputsProduto"], ["appearance", "fill"], ["for", "nomeProduto"], ["matInput", "", "type", "text", "id", "nomeProduto"], ["nomeProduto", ""], [1, "InputsNumeros"], ["appearance", "fill", "floatLabel", "always"], ["for", "precoProduto"], ["matInput", "", "type", "number", "name", "", "id", "precoProduto", "placeholder", "0"], ["precoProduto", ""], ["matPrefix", ""], ["for", "quantidadeProduto"], ["matInput", "", "type", "number", "id", "quantidadeProduto"], ["quantidadeProduto", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "nProdutos", "listaProdutosTabela", "eventRemoverProduto"], [1, "botoes"], ["mat-raised-button", "", "color", "warn", "type", "submit", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "click"], ["mat-raised-button", "", "color", "basic", "type", "submit", 3, "click"]], template: function ListaDeComprasComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "html", 0)(1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "meta", 1)(3, "meta", 2)(4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "body")(8, "section", 4)(9, "mat-form-field", 5)(10, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Nome do Produto");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "section", 9)(15, "mat-form-field", 10)(16, "mat-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Preco");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "R$ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-form-field", 10)(23, "mat-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Quantidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListaDeComprasComponent_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](19); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](26); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.adicionarProduto(_r0, _r1, _r2)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Adicionar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "app-tabela-produtos", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("eventRemoverProduto", function ListaDeComprasComponent_Template_app_tabela_produtos_eventRemoverProduto_29_listener($event) { return ctx.removerProduto($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "section", 20)(31, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListaDeComprasComponent_Template_button_click_31_listener() { return ctx.abrirDialogRemoverTodos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Remover Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListaDeComprasComponent_Template_button_click_33_listener() { return ctx.salvarLista(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Salvar Lista");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListaDeComprasComponent_Template_button_click_35_listener() { return ctx.cancelar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nProdutos", ctx.listaProdutos.length)("listaProdutosTabela", ctx.listaProdutos);
    } }, styles: ["body[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n\r\n\r\n\r\ninput[type=number][_ngcontent-%COMP%] { \r\n    -moz-appearance: textfield;\r\n  }\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]{\r\n    border: 2px black solid;\r\n}\r\n\r\n#InputsProduto[_ngcontent-%COMP%]{\r\n    margin-bottom: 10px;\r\n    background-color: gray;\r\n    width: 50vw;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    justify-content: center; \r\n    padding: 10px;\r\n\r\n}\r\n\r\n.InputsNumeros[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    margin: 2px;\r\n}\r\n\r\n.InputsNumeros[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n\r\n}\r\n\r\ninput[type=\"button\"][_ngcontent-%COMP%]{\r\n    \r\n    margin: 15px auto;\r\n    width: 20vw;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n\r\n.botoes[_ngcontent-%COMP%]{\r\n    margin: 10px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 50vw;\r\n    \r\n}\r\n\r\n.botoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhLWRlLWNvbXByYXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSx3QkFBd0I7SUFDeEIsU0FBUztBQUNiOztBQUVBLG9DQUFvQzs7QUFDcEM7SUFDSSwwQkFBMEI7RUFDNUI7O0FBQ0Y7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxpQkFBaUI7O0FBRXJCOztBQUNBOztJQUVJLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtFQUN6Qjs7QUFFRjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6Imxpc3RhLWRlLWNvbXByYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIFJlbW92ZXIgc2V0YSBub3MgY2FtcG9zIG51bWVyb3MgKi9cclxuaW5wdXRbdHlwZT1udW1iZXJdIHsgXHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxuICB9XHJcbmxhYmVse1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxudGFibGV7XHJcbiAgICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcclxufVxyXG5cclxuI0lucHV0c1Byb2R1dG97XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLklucHV0c051bWVyb3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcbi5JbnB1dHNOdW1lcm9zIGlucHV0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG59XHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl17XHJcbiAgICBcclxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuLmJvdG9lc3tcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIFxyXG59XHJcblxyXG4uYm90b2VzIGJ1dHRvbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIHdpZHRoOiAxMjBweDsgKi9cclxufSJdfQ== */"] });


/***/ }),

/***/ 5048:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/lista-de-compras/tabela-produtos/tabela-produtos.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabelaProdutosComponent": () => (/* binding */ TabelaProdutosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var src_app_components_janela_modal_janela_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/janela-modal/janela-modal.component */ 8745);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);












function TabelaProdutosComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TabelaProdutosComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r21.nome, " ");
} }
function TabelaProdutosComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " TOTAL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TabelaProdutosComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Preco");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TabelaProdutosComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 19)(1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function TabelaProdutosComponent_td_7_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const element_r22 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.atualizarProduto(element_r22)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", element_r22.nome.replaceAll(" ", ""), "Preco");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", element_r22.preco);
} }
function TabelaProdutosComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "td", 20);
} }
function TabelaProdutosComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Quantidade");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TabelaProdutosComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 19)(1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function TabelaProdutosComponent_td_11_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const element_r25 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.atualizarProduto(element_r25)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", element_r25.nome.replaceAll(" ", ""), "Quantidade");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", element_r25.quantidade);
} }
function TabelaProdutosComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "td", 20);
} }
function TabelaProdutosComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TabelaProdutosComponent_td_15_section_6_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 25)(1, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function TabelaProdutosComponent_td_15_section_6_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const element_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r30.atualizarCheck(element_r28)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function TabelaProdutosComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TabelaProdutosComponent_td_15_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const element_r28 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r33.cliqueRemoverProduto(element_r28)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TabelaProdutosComponent_td_15_section_6_Template, 3, 0, "section", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r28.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.verificarRotaMercado());
} }
function TabelaProdutosComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r11.calcularTotal(ctx_r11.listaProdutosTabela));
} }
function TabelaProdutosComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " TOTAL ATUAL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TabelaProdutosComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r13.calcularTotal(ctx_r13.listaCheck), " ");
} }
function TabelaProdutosComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " TOTAL RESTANTE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TabelaProdutosComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r15.calcularTotal(ctx_r15.listaProdutosTabela) - ctx_r15.calcularTotal(ctx_r15.listaCheck), " ");
} }
function TabelaProdutosComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 28);
} }
function TabelaProdutosComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 29);
} }
const _c0 = function (a0) { return { footerTotalRiscados: a0 }; };
function TabelaProdutosComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 30);
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, !ctx_r18.verificarRotaMercado()));
} }
function TabelaProdutosComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 30);
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, !ctx_r19.verificarRotaMercado()));
} }
function TabelaProdutosComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 31);
} }
const _c1 = function () { return ["TotalRiscados", "TotalRiscadosNum"]; };
const _c2 = function () { return ["TotalRestante", "TotalRestanteNum"]; };
class TabelaProdutosComponent {
    constructor(dialog, router) {
        this.dialog = dialog;
        this.router = router;
        this.colunasExibidas = [
            'nome',
            'preco',
            'quantidade',
            'total'
        ];
        this.listaProdutosTabela = [];
        this.eventRemoverProduto = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.listaCheck = []; // Produtos Riscados
    }
    ngOnInit() {
        // this.verificarRotaMercado()
    }
    ngOnChanges() {
        // this.verificarRotaMercado()
        this.calcularTotal(this.listaProdutosTabela);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(this.listaProdutosTabela);
    }
    calcularTotal(lista) {
        let total = 0;
        for (let produto of lista) {
            total += produto.total;
        }
        return total;
    }
    atualizarCheck(produtoAlterado) {
        if (this.listaCheck.includes(produtoAlterado)) { // Se o item estiver checkado, apos o clique devera estar uncheck
            this.listaCheck = this.listaCheck.filter(produto => produto.nome != produtoAlterado.nome);
        }
        else { // Se o item estiver uncheck, apos o clique devera ficar check
            this.listaCheck.push(produtoAlterado);
        }
    } // End atualizarCheck
    // Atualiza tanto o total do produto na celula total, quanto na lista de Produtos
    atualizarProduto(produtoAlterado) {
        // Se o nome do produto tiver espaço, será adicionado mais de uma classe ex: leite condensado teria as classes: leite condensadoPreco
        // Para garantir apenas uma classe é removido os espaços 
        let novoPrecoProduto = Number(jquery__WEBPACK_IMPORTED_MODULE_0__(`.${produtoAlterado.nome}Preco`.replaceAll(' ', '')).val());
        let novaQuantidadeProduto = Number(jquery__WEBPACK_IMPORTED_MODULE_0__(`.${produtoAlterado.nome}Quantidade`.replaceAll(' ', '')).val());
        produtoAlterado.total = novoPrecoProduto * novaQuantidadeProduto; // Atualiza a celula total do produto
        this.listaProdutosTabela.forEach((produto) => {
            if (produto.nome === produtoAlterado.nome) {
                produto.preco = novoPrecoProduto;
                produto.quantidade = novaQuantidadeProduto;
                produto.total = produto.preco * produto.quantidade;
            }
        }); // end forEach
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(this.listaProdutosTabela);
    } // end atualizaProduto
    cliqueRemoverProduto(produtoParaRemover) {
        this.abrirDialog(produtoParaRemover);
    }
    abrirDialog(produto) {
        const dialogRef = this.dialog.open(src_app_components_janela_modal_janela_modal_component__WEBPACK_IMPORTED_MODULE_1__.JanelaModalComponent, {
            width: '350px',
            data: { mensagem: `Tem certeza que deseja remover ${produto.nome}?` },
            disableClose: false,
            hasBackdrop: true
        });
        this.eventoConfirmar(dialogRef, produto); // Monitora o clique na JanelaModalComponent
    }
    eventoConfirmar(dialogRef, produtoParaRemover) {
        dialogRef.componentInstance.eventConfirmar.subscribe((teste) => {
            this.removerProduto(produtoParaRemover);
            dialogRef.close();
        });
    }
    removerProduto(produtoParaRemover) {
        console.log('remover', this.listaProdutosTabela);
        this.listaProdutosTabela = this.listaProdutosTabela.filter((produto) => produto.nome !== produtoParaRemover.nome);
        const novaLista = this.listaProdutosTabela;
        console.log('removerD', novaLista);
        this.eventRemoverProduto.emit(novaLista);
    }
    verificarRotaMercado() {
        if (this.router.url.includes('modoMercado')) {
            return true;
        }
        return false;
    }
}
TabelaProdutosComponent.ɵfac = function TabelaProdutosComponent_Factory(t) { return new (t || TabelaProdutosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
TabelaProdutosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TabelaProdutosComponent, selectors: [["app-tabela-produtos"]], inputs: { listaProdutosTabela: "listaProdutosTabela", nProdutos: "nProdutos" }, outputs: { eventRemoverProduto: "eventRemoverProduto" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 30, vars: 8, consts: [["mat-table", "", 1, "mat-elevation-z8", "demo-table", 3, "dataSource"], ["matColumnDef", "nome"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "preco"], ["matColumnDef", "quantidade"], ["matColumnDef", "total"], ["class", "colunaTotal", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "TotalRiscados"], ["mat-footer-cell", "", "colspan", "3", 4, "matFooterCellDef"], ["matColumnDef", "TotalRiscadosNum"], ["matColumnDef", "TotalRestante"], ["matColumnDef", "TotalRestanteNum"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 3, "ngClass", 4, "matFooterRowDef"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["type", "number", "name", "", 3, "value", "change"], ["mat-cell", "", 1, "colunaTotal"], ["mat-raised-button", "", "color", "warn", "title", "Remover Produto", 3, "click"], ["class", "btnsCheckbox", 4, "ngIf"], [1, "btnsCheckbox"], [3, "change"], ["mat-footer-cell", "", "colspan", "3"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", "", 3, "ngClass"], ["mat-footer-row", ""]], template: function TabelaProdutosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TabelaProdutosComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TabelaProdutosComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TabelaProdutosComponent_td_4_Template, 2, 0, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TabelaProdutosComponent_th_6_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TabelaProdutosComponent_td_7_Template, 2, 4, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TabelaProdutosComponent_td_8_Template, 1, 0, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](9, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TabelaProdutosComponent_th_10_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, TabelaProdutosComponent_td_11_Template, 2, 4, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, TabelaProdutosComponent_td_12_Template, 1, 0, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](13, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, TabelaProdutosComponent_th_14_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, TabelaProdutosComponent_td_15_Template, 7, 2, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, TabelaProdutosComponent_td_16_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](17, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, TabelaProdutosComponent_td_18_Template, 2, 0, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](19, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, TabelaProdutosComponent_td_20_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](21, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, TabelaProdutosComponent_td_22_Template, 2, 0, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](23, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, TabelaProdutosComponent_td_24_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, TabelaProdutosComponent_tr_25_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, TabelaProdutosComponent_tr_26_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, TabelaProdutosComponent_tr_27_Template, 1, 3, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, TabelaProdutosComponent_tr_28_Template, 1, 3, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, TabelaProdutosComponent_tr_29_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.colunasExibidas);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.colunasExibidas);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matFooterRowDef", ctx.colunasExibidas);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatFooterRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox], styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\ninput[type=number][_ngcontent-%COMP%] {\r\n  -moz-appearance: textfield;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\nth[_ngcontent-%COMP%]{\r\n    width: 15vw;\r\n    text-align: center;\r\n}\r\ntd[_ngcontent-%COMP%]{\r\n    height: 10vh;\r\n}\r\n.colunaTotal[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n    background-color: #949494;\r\n    width: 8vw;\r\n    text-align: right;\r\n    margin-right: 10px;\r\n    color: white;\r\n    border-radius:2px;\r\n}\r\n.full-width[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\r\n.footerTotalRiscados[_ngcontent-%COMP%]{\r\n    \r\n    display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmVsYS1wcm9kdXRvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFnQztBQUNoQzs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYO0FBRUEsWUFBWTtBQUNaO0VBQ0UsMEJBQTBCO0FBQzVCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGFBQWE7QUFDakIiLCJmaWxlIjoidGFiZWxhLXByb2R1dG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cclxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBGaXJlZm94ICovXHJcbmlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50aHtcclxuICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ZHtcclxuICAgIGhlaWdodDogMTB2aDtcclxufVxyXG5cclxuLmNvbHVuYVRvdGFse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk0OTQ5NDtcclxuICAgIHdpZHRoOiA4dnc7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6MnB4O1xyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvb3RlclRvdGFsUmlzY2Fkb3N7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59Il19 */"] });


/***/ }),

/***/ 7962:
/*!**************************************************************************!*\
  !*** ./src/app/pages/listas-salvas/lista-icone/lista-icone.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListaIconeComponent": () => (/* binding */ ListaIconeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_janela_modal_janela_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/janela-modal/janela-modal.component */ 8745);
/* harmony import */ var _components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/snack-bar/snack-bar.component */ 5629);
/* harmony import */ var src_app_services_produto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/produto.service */ 9885);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);











class ListaIconeComponent {
    constructor(produtoService, dialog, snackBar, router) {
        this.produtoService = produtoService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.router = router;
        this.eventDescricoes = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        // this.matIconRegistry.addSvgIcon('iconeDeletar', 
        //   this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/icons8-trash-150.svg'))
    }
    ngOnInit() {
    }
    editarLista() {
        const urlEditar = "editarLista/";
        this.router.navigateByUrl(urlEditar + this.descricao.nomeLista);
    }
    // Abrir MatDialogo
    cliqueEmRemover() {
        const dialogRef = this.dialog.open(_components_janela_modal_janela_modal_component__WEBPACK_IMPORTED_MODULE_0__.JanelaModalComponent, {
            width: '300px',
            data: { mensagem: `Tem certeza que deseja excluir a lista ${this.descricao.nomeLista}` },
            disableClose: false,
            hasBackdrop: true
        });
        this.eventoConfirmar(dialogRef);
    }
    // Monitora o eventConfirmar(clique em Confirmar na Janela)
    eventoConfirmar(dialogRef) {
        dialogRef.componentInstance.eventConfirmar.subscribe(teste => {
            this.deletarLista();
            dialogRef.close(); // Fechar Janela
            this.snackBar.openFromComponent(_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_1__.SnackBarComponent, // Snack Bar para informar qual lista foi deletada
            {
                duration: 4000,
                panelClass: 'snackBarPadrao',
                data: { mensagem: `A lista ${this.descricao.nomeLista} foi apagada` }
            }); // End:4 eventoConfirmar()
        }); // End:3 subscribe()
    } // End:2 eventoConfirmar()
    // DELETE Lista
    deletarLista() {
        this.produtoService.deletarLista(this.descricao.nomeLista).subscribe();
        this.eventDescricoes.emit(this.descricao.nomeLista); // Emite para o Componente Pai a mudança
    }
    entrarModoMercado(descricao) {
        console.log(descricao);
        let urlModoMercado = '/modoMercado/';
        this.router.navigateByUrl(urlModoMercado + descricao.nomeLista);
    }
} // End:1 componente
ListaIconeComponent.ɵfac = function ListaIconeComponent_Factory(t) { return new (t || ListaIconeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_produto_service__WEBPACK_IMPORTED_MODULE_2__.ProdutoService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
ListaIconeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ListaIconeComponent, selectors: [["app-lista-icone"]], inputs: { nDescricoes: "nDescricoes", descricao: "descricao" }, outputs: { eventDescricoes: "eventDescricoes" }, decls: 17, vars: 2, consts: [[1, "sera"], [1, "btns"], ["mat-raised-button", "", "color", "warn", "title", "Deletar Lista", 3, "click"], ["mat-raised-button", "", "color", "primary", "id", "btn_modo_mercado", "title", "Entrar no Modo Mercado", 3, "click"], ["mat-raised-button", "", "color", "accent", "title", "Editar Lista", 3, "click"]], template: function ListaIconeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header")(2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-content")(7, "div", 1)(8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ListaIconeComponent_Template_button_click_8_listener() { return ctx.cliqueEmRemover(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "remove_shopping_cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ListaIconeComponent_Template_button_click_11_listener() { return ctx.entrarModoMercado(ctx.descricao); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "local_grocery_store");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ListaIconeComponent_Template_button_click_14_listener() { return ctx.editarLista(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.descricao.nomeLista, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total: ", ctx.descricao.totalFinal, "");
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardSubtitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon], styles: [".mat-card[_ngcontent-%COMP%]{\r\n    --cinzaForte: #424242;\r\n    --cinzaFraco: #949494;\r\n    width: 35vw;\r\n    height: 18vh;\r\n    margin: 2vh 2vw ;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    background-color: var(--cinzaFraco);\r\n}\r\n\r\n.mat-card-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    margin: 10px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.mat-card-subtitle[_ngcontent-%COMP%]{\r\n    color: var(--cinzaForte);\r\n    font-size: 20px;\r\n    margin-bottom: 10px;\r\n    text-align: center;\r\n}\r\n\r\n.mat-card-content[_ngcontent-%COMP%]{\r\n    padding:10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#btn_modo_mercado[_ngcontent-%COMP%]{\r\n    \r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    \r\n    width: 10vw;\r\n    margin:10px;\r\n\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]{\r\n    padding:10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhLWljb25lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXOztBQUVmOztBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJsaXN0YS1pY29uZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tYXQtY2FyZHtcclxuICAgIC0tY2luemFGb3J0ZTogIzQyNDI0MjtcclxuICAgIC0tY2luemFGcmFjbzogIzk0OTQ5NDtcclxuICAgIHdpZHRoOiAzNXZ3O1xyXG4gICAgaGVpZ2h0OiAxOHZoO1xyXG4gICAgbWFyZ2luOiAydmggMnZ3IDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaW56YUZyYWNvKTtcclxufVxyXG5cclxuLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXIgIC5tYXQtY2FyZC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1zdWJ0aXRsZXtcclxuICAgIGNvbG9yOiB2YXIoLS1jaW56YUZvcnRlKTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1jb250ZW50e1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmJ0bnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNidG5fbW9kb19tZXJjYWRve1xyXG4gICAgLyogd2lkdGg6IDE0N3B4OyAqL1xyXG59XHJcbmJ1dHRvbntcclxuICAgIC8qIGJvcmRlcjogMHB4OyAqL1xyXG4gICAgd2lkdGg6IDEwdnc7XHJcbiAgICBtYXJnaW46MTBweDtcclxuXHJcbn1cclxuLm1hdC1pY29ue1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 9159:
/*!****************************************************************!*\
  !*** ./src/app/pages/listas-salvas/listas-salvas.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListasSalvasComponent": () => (/* binding */ ListasSalvasComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_descricao_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/descricao.class */ 2169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_produto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/produto.service */ 9885);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _lista_icone_lista_icone_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista-icone/lista-icone.component */ 7962);





function ListasSalvasComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section")(1, "app-lista-icone", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("eventDescricoes", function ListasSalvasComponent_section_0_Template_app_lista_icone_eventDescricoes_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const descricao_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.atualizarDescricoes(descricao_r1.nomeLista)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const descricao_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("descricao", descricao_r1);
} }
class ListasSalvasComponent {
    constructor(produtoService) {
        this.produtoService = produtoService;
        this.todasListas = []; // Apenas os nomes
        this.descricoes = []; // nomes das listas e seu total respectivo
    }
    ngOnInit() {
        this.receberNomesListas();
    }
    ngOnChanges() {
        this.receberNomesListas();
    }
    atualizarDescricoes(nomeLista) {
        let descricoesRestantes = this.descricoes.filter((lista => {
            if (lista.nomeLista != nomeLista) {
                return lista;
            }
            else {
                return false;
            }
        }));
        this.descricoes = descricoesRestantes;
    }
    // Retornar apenas os nomes da lista
    receberNomesListas() {
        this.produtoService.retornarNomesListas().subscribe({
            next: nomeLista => {
                this.todasListas = nomeLista; // Array dos nomes   
            },
            complete: () => {
                for (let nomeLista of this.todasListas) {
                    this.descreverLista(nomeLista);
                } // end complete
            }
        }); // end subscribe
    } // End receberNomesListas
    // Retorne o nomeLista e o total final da lista
    descreverLista(nomeLista) {
        let totalFinal = 0;
        this.produtoService.retornarLista(nomeLista).subscribe({
            next: lista => {
                lista.forEach((produto) => {
                    totalFinal += produto.total;
                }); // end forEach
            },
            complete: () => {
                this.descricoes.push(new src_app_models_descricao_class__WEBPACK_IMPORTED_MODULE_0__.Descricao(nomeLista, totalFinal)); // 
            }
        }); // end subscribe
    } // end descreverLista()
} // end component
ListasSalvasComponent.ɵfac = function ListasSalvasComponent_Factory(t) { return new (t || ListasSalvasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_produto_service__WEBPACK_IMPORTED_MODULE_1__.ProdutoService)); };
ListasSalvasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ListasSalvasComponent, selectors: [["app-listas-salvas"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "descricao", "eventDescricoes"]], template: function ListasSalvasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ListasSalvasComponent_section_0_Template, 2, 1, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.descricoes);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _lista_icone_lista_icone_component__WEBPACK_IMPORTED_MODULE_2__.ListaIconeComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YXMtc2FsdmFzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 1198:
/*!**************************************************************************!*\
  !*** ./src/app/pages/modoMercado/modo-mercado/modo-mercado.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModoMercadoComponent": () => (/* binding */ ModoMercadoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_produto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/produto.service */ 9885);
/* harmony import */ var _lista_de_compras_tabela_produtos_tabela_produtos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lista-de-compras/tabela-produtos/tabela-produtos.component */ 5048);




class ModoMercadoComponent {
    constructor(router, produtoService) {
        this.router = router;
        this.produtoService = produtoService;
    }
    ngOnInit() {
        this.rotaAtual = this.router.url; //
        this.nomeLista = this.rotaAtual.split("/").slice(-1)[0]; //
        this.produtoService.retornarLista(this.nomeLista).subscribe({
            next: lista => {
                this.listaProdutos = lista;
            }, complete: () => {
            }
        }); // end subs
    }
    removerProduto(novaLista) {
        this.listaProdutos = novaLista;
    }
}
ModoMercadoComponent.ɵfac = function ModoMercadoComponent_Factory(t) { return new (t || ModoMercadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_produto_service__WEBPACK_IMPORTED_MODULE_0__.ProdutoService)); };
ModoMercadoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ModoMercadoComponent, selectors: [["app-modo-mercado"]], decls: 1, vars: 2, consts: [[3, "nProdutos", "listaProdutosTabela", "eventRemoverProduto"]], template: function ModoMercadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-tabela-produtos", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("eventRemoverProduto", function ModoMercadoComponent_Template_app_tabela_produtos_eventRemoverProduto_0_listener($event) { return ctx.removerProduto($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nProdutos", ctx.listaProdutos.length)("listaProdutosTabela", ctx.listaProdutos);
    } }, dependencies: [_lista_de_compras_tabela_produtos_tabela_produtos_component__WEBPACK_IMPORTED_MODULE_1__.TabelaProdutosComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RvLW1lcmNhZG8uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 9885:
/*!*********************************************!*\
  !*** ./src/app/services/produto.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdutoService": () => (/* binding */ ProdutoService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);



class ProdutoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'http://localhost:8080/api/listas/';
        this.urlProdutos = 'http://localhost:8080/produtos/';
    }
    // GET: Retornar os nomes das lista
    retornarNomesListas() {
        return this.httpClient.get(this.url);
    }
    // GET By nomeLista: Filtra a tabela pela coluna nome_lista
    retornarLista(nomeLista) {
        return this.httpClient.get(this.url + nomeLista);
    }
    //POST: Adicionar nova Lista
    adicionarLista(nomeLista, produtos) {
        const url = this.url + nomeLista;
        return this.httpClient.post(url, produtos);
    }
    // PUT: Atualizar lista
    atualizarLista(nomeLista, produtos) {
        return this.httpClient.put((this.url + nomeLista), produtos);
    }
    // DELETE: Apagar todas ocorrencias de nomeLista
    deletarLista(nomeLista) {
        return this.httpClient.delete(this.url + nomeLista);
    }
}
ProdutoService.ɵfac = function ProdutoService_Factory(t) { return new (t || ProdutoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ProdutoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProdutoService, factory: ProdutoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map