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
const prisma_module_1 = require("./prisma/prisma.module");
const users_module_1 = require("./users/users.module");
const events_module_1 = require("./events/events.module");
const categories_module_1 = require("./categories/categories.module");
const locations_module_1 = require("./locations/locations.module");
const feedbacks_module_1 = require("./feedbacks/feedbacks.module");
const config_1 = require("@nestjs/config");
const throttler_1 = require("@nestjs/throttler");
const throttle_guards_1 = require("./guards/throttle.guards");
const suppliers_module_1 = require("./suppliers/suppliers.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            throttler_1.ThrottlerModule.forRoot([{
                    ttl: 60000,
                    limit: 10,
                }]),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            prisma_module_1.PrismaModule,
            users_module_1.UsersModule,
            events_module_1.EventsModule,
            categories_module_1.CategoriesModule,
            locations_module_1.LocationsModule,
            feedbacks_module_1.FeedbacksModule,
            suppliers_module_1.SuppliersModule,
        ],
        providers: [
            {
                provide: 'APP_GUARD',
                useClass: throttle_guards_1.CustomThrottlerGuard,
            }
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map