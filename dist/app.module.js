"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const docenteformacion_module_1 = require("./docenteformacion/docenteformacion.module");
const institucion_module_1 = require("./institucion/institucion.module");
const grado_module_1 = require("./grado/grado.module");
const docentetutor_module_1 = require("./docentetutor/docentetutor.module");
const docenteasesor_module_1 = require("./docenteasesor/docenteasesor.module");
const tipoactividad_module_1 = require("./tipoactividad/tipoactividad.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'practdocente',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            docenteformacion_module_1.DocenteformacionModule,
            institucion_module_1.InstitucionModule,
            grado_module_1.GradoModule,
            docentetutor_module_1.DocentetutorModule,
            docenteasesor_module_1.DocenteasesorModule,
            tipoactividad_module_1.TipoactividadModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map