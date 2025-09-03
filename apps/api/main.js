/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_controller_1 = __webpack_require__(5);
const app_service_1 = __webpack_require__(6);
const data_access_db_1 = __webpack_require__(7);
const feature_product_1 = __webpack_require__(11);
const feature_category_1 = __webpack_require__(33);
const feature_order_1 = __webpack_require__(38);
const feature_company_1 = __webpack_require__(90);
const feature_table_1 = __webpack_require__(95);
const feature_floor_1 = __webpack_require__(100);
const feature_auth_1 = __webpack_require__(15);
const serve_static_1 = __webpack_require__(105);
const path_1 = __webpack_require__(79);
const feature_pos_session_1 = __webpack_require__(106);
const feature_stat_1 = __webpack_require__(111);
const common_2 = __webpack_require__(83);
const feature_kitchen_1 = __webpack_require__(127);
const feature_tax_1 = __webpack_require__(132);
const feature_user_1 = __webpack_require__(137);
const feature_variant_1 = __webpack_require__(142);
const feature_home_delivery_1 = __webpack_require__(147);
const feature_order_history_1 = __webpack_require__(151);
const feature_kot_1 = __webpack_require__(155);
const feature_license_1 = __webpack_require__(121);
const feature_expense_1 = __webpack_require__(115);
const feature_payment_1 = __webpack_require__(159);
const feature_image_upload_1 = __webpack_require__(164);
const config_1 = __webpack_require__(87);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            data_access_db_1.ApiDataAccessDbModule,
            feature_auth_1.ApiFeatureAuthModule,
            feature_product_1.ApiFeatureProductModule,
            feature_category_1.ApiFeatureCategoryModule,
            feature_order_1.ApiFeatureOrderModule,
            feature_company_1.ApiFeatureCompanyModule,
            feature_table_1.ApiFeatureTableModule,
            feature_floor_1.ApiFeatureFloorModule,
            feature_pos_session_1.ApiFeaturePosSessionModule,
            feature_stat_1.ApiFeatureStatModule,
            feature_kitchen_1.ApiFeatureKitchenModule,
            feature_table_1.ApiFeatureTableModule,
            common_2.ApiCommonModule,
            feature_tax_1.ApiFeatureTaxModule,
            feature_user_1.ApiFeatureUserModule,
            feature_variant_1.ApiFeatureVariantModule,
            feature_home_delivery_1.ApiFeatureHomeDeliveryModule,
            feature_order_history_1.ApiFeatureOrderHistoryModule,
            feature_kot_1.ApiFeatureKotModule,
            feature_license_1.FeatureLicenseModule,
            // FeatureBackupModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'orderapp'),
                exclude: ['/api*'],
            }),
            feature_expense_1.FeatureExpenseModule,
            feature_payment_1.FeaturePaymentModule,
            feature_image_upload_1.FeatureImageUploadModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(6);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
exports.AppController = AppController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let AppService = class AppService {
    getData() {
        return { message: 'Hello API' };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(8), exports);
tslib_1.__exportStar(__webpack_require__(9), exports);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiDataAccessDbModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const prisma_service_1 = __webpack_require__(9);
let ApiDataAccessDbModule = class ApiDataAccessDbModule {
};
exports.ApiDataAccessDbModule = ApiDataAccessDbModule;
exports.ApiDataAccessDbModule = ApiDataAccessDbModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [prisma_service_1.PrismaService],
        exports: [prisma_service_1.PrismaService],
    })
], ApiDataAccessDbModule);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const client_1 = __webpack_require__(10);
let PrismaService = class PrismaService extends client_1.PrismaClient {
    async onModuleInit() {
        console.log('module init jafar');
        await this.$connect();
        // await this['$connect']();
    }
    async enableShutdownHooks(app) {
        // this.$on('beforeExit' as never, async () => {
        //   await app.close();
        // });
        this['$on']('beforeExit', async () => {
            await app.close();
        });
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], PrismaService);


/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(12), exports);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiFeatureProductModule = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const common_1 = __webpack_require__(1);
const api_feature_product_controller_1 = __webpack_require__(13);
const products_service_1 = __webpack_require__(14);
let ApiFeatureProductModule = class ApiFeatureProductModule {
};
exports.ApiFeatureProductModule = ApiFeatureProductModule;
exports.ApiFeatureProductModule = ApiFeatureProductModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [data_access_db_1.ApiDataAccessDbModule],
        controllers: [api_feature_product_controller_1.ApiFeatureProductController],
        providers: [products_service_1.ProductService],
        exports: [],
    })
], ApiFeatureProductModule);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiFeatureProductController = void 0;
const tslib_1 = __webpack_require__(4);
// import { JwtAuthGuard } from '@jafar-tech/backend/auth';
const common_1 = __webpack_require__(1);
// import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
// // import { Express } from 'express';
// // import * as multeri from 'multer';
// import { CreateProductDto } from './dto/create-product-dto';
// import { PatchProductIndexDto } from './dto/patch-porduct.dto';
// import { ProductBoolFieldDto } from './dto/product-bool-field-update.dto';
const products_service_1 = __webpack_require__(14);
const feature_auth_1 = __webpack_require__(15);
const create_product_dto_1 = __webpack_require__(30);
const product_bool_field_update_dto_1 = __webpack_require__(32);
let ApiFeatureProductController = class ApiFeatureProductController {
    constructor(productService) {
        this.productService = productService;
    }
    getProducts() {
        // console.log('get product api end point');
        return this.productService.getProduct();
    }
    createProduct(params) {
        return this.productService.createProduct(params);
    }
    updateProduct(body, id) {
        const productId = +id;
        console.log('Product id', productId);
        return this.productService.udpateProduct(productId, body);
    }
    updateProductAvailability(body, id) {
        // console.log('patch request happened now');
        const productId = +id;
        // console.log('Product id', productId);
        // console.log('input data', body);
        return this.productService.updateProductBoolField(productId, body);
    }
    deleteProduct(id) {
        const productId = +id;
        console.log(`Delete Request to Deactivate Product of product ID ${productId}`);
        // console.log('Product id', productId);
        return this.productService.deactivateProduct(productId);
    }
};
exports.ApiFeatureProductController = ApiFeatureProductController;
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Get)('list'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ApiFeatureProductController.prototype, "getProducts", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_product_dto_1.CreateProductDto !== "undefined" && create_product_dto_1.CreateProductDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ApiFeatureProductController.prototype, "createProduct", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof create_product_dto_1.CreateProductDto !== "undefined" && create_product_dto_1.CreateProductDto) === "function" ? _c : Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ApiFeatureProductController.prototype, "updateProduct", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Patch)(':id'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof product_bool_field_update_dto_1.ProductBoolFieldDto !== "undefined" && product_bool_field_update_dto_1.ProductBoolFieldDto) === "function" ? _d : Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ApiFeatureProductController.prototype, "updateProductAvailability", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ApiFeatureProductController.prototype, "deleteProduct", null);
exports.ApiFeatureProductController = ApiFeatureProductController = tslib_1.__decorate([
    (0, common_1.Controller)('product'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof products_service_1.ProductService !== "undefined" && products_service_1.ProductService) === "function" ? _a : Object])
], ApiFeatureProductController);
// FilesInterceptor('files', 3, {
//   storage: multeri.diskStorage({
//     filename: function (req, file, cb) {
//       const uniqueSuffix =
//         Date.now() + '-' + Math.round(Math.random() * 1e9);
//       cb(
//         null,
//         file.fieldname +
//           '-' +
//           uniqueSuffix +
//           '.' +
//           file.originalname
//       );
//     },
//   }),
// })


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PRODUCTS = exports.ProductService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const data_access_db_1 = __webpack_require__(7);
let ProductService = class ProductService {
    constructor(prismaService) {
        this.prismaService = prismaService;
        this.products = exports.PRODUCTS;
    }
    async getProduct() {
        return await this.prismaService.product.findMany({
            where: { isArchived: false },
            include: {
                variants: true,
                modifierGroup: {
                    include: {
                        modifiers: true,
                    },
                },
            },
            orderBy: {
                code: 'asc',
            },
        });
        // let products: Product[] = await this.productRepository.getProducts();
        // let categoryVice = {};
        // products.map((item) => {
        //   // if (categoryVice[item.category]) {
        //   //   categoryVice[item.category] = [...categoryVice[item.category], item];
        //   // } else {
        //   //   categoryVice[item.category] = [];
        //   // }
        //   categoryVice[item.category] = [
        //     ...(categoryVice[item.category] || []),
        //     item,
        //   ];
        // });
        // return categoryVice;
    }
    createProduct(data) {
        return this.prismaService.product.create({
            data: {
                ...data,
                price: +data.price,
                cost: +data.cost,
                code: +data.code,
                collectionId: +data.collectionId,
                categoryId: +data.categoryId,
                qwickViewOrder: +data.qwickViewOrder,
            },
        });
    }
    async udpateProduct(id, data) {
        try {
            return this.prismaService.product.update({
                where: { id },
                data: {
                    ...data,
                    price: +data.price,
                    cost: +data.cost,
                    code: +data.code,
                    categoryId: +data.categoryId,
                    qwickViewOrder: +data.qwickViewOrder,
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException({ error: error });
        }
    }
    async updateProductBoolField(id, data) {
        try {
            const updateData = {};
            updateData[data.fieldName] = data.value;
            console.log('updated created object', updateData);
            return this.prismaService.product.update({
                where: { id },
                data: {
                    ...updateData,
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException({ error: error });
        }
    }
    async deactivateProduct(id) {
        try {
            return this.prismaService.product.update({
                where: { id },
                data: {
                    isArchived: true,
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException({ error: error });
        }
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_db_1.PrismaService !== "undefined" && data_access_db_1.PrismaService) === "function" ? _a : Object])
], ProductService);
exports.PRODUCTS = [
    {
        id: 11,
        name: 'Caffe Latte',
        price: 33,
        type: 'juice',
        image: '',
        description: 'its an amazing splend',
        isActive: true,
    },
    {
        id: 12,
        name: 'Mocko creepo',
        price: 33,
        type: 'juice',
        image: '',
        description: 'Juice mix ss splend',
        isActive: true,
    },
];
// async uploadImage(
//   companyId: string,
//   productId: string,
//   image: File | any
// ): Promise<string> {
//   // upload.
//   // clean up the folder.
//   // create the download signedURl
//   // store that to mongodb.
//   let downloadUrlPath: '';
//   try {
//     const response = await admin
//       .storage()
//       .bucket()
//       .upload(image.path, {
//         destination: `${companyId}/${image.filename}`,
//         // encryptionKey: '60473000-5e71-49a1-b6da-cc5346483bae',
//       });
//     // once uploaded delete the local file as it increases the disk memory usage.
//     fs.unlink(image.path, (err) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//     });
//     console.log(response[1]);
//     // const useBucked = await response[0].bucket.getSignedUrl({
//     //   action: 'list',
//     //   expires: '01-01-2030',
//     // });
//     const useBucked = await admin
//       .storage()
//       .bucket()
//       .file(response[1].name)
//       .getSignedUrl({
//         action: 'read',
//         expires: '01-01-2030',
//       });
//     console.log(useBucked);
//   } catch (error) {
//     console.log('something wrong happened while upload the image.', error);
//     throw new RequestTimeoutException('Fiailed to upload to storage.');
//   }
//   return downloadUrlPath;
//   // const storeage = admin
//   //   .storage()
//   //   .bucket()
//   //   .file('jafy.png', { encryptionKey: image })
//   //   .save(image);
//   // console.log(storeage);
// }
// }


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(16), exports);
tslib_1.__exportStar(__webpack_require__(25), exports);
tslib_1.__exportStar(__webpack_require__(21), exports);
tslib_1.__exportStar(__webpack_require__(24), exports);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiFeatureAuthModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const auth_service_1 = __webpack_require__(17);
const auth_controller_1 = __webpack_require__(20);
const data_access_db_1 = __webpack_require__(7);
const local_strategy_1 = __webpack_require__(25);
const local_auth_guard_1 = __webpack_require__(21);
const constants_1 = __webpack_require__(27);
const jwt_1 = __webpack_require__(18);
const jwt_strategy_1 = __webpack_require__(28);
const user_service_1 = __webpack_require__(19);
let ApiFeatureAuthModule = class ApiFeatureAuthModule {
};
exports.ApiFeatureAuthModule = ApiFeatureAuthModule;
exports.ApiFeatureAuthModule = ApiFeatureAuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            data_access_db_1.ApiDataAccessDbModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '432000s' },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            local_strategy_1.LocalStrategy,
            local_auth_guard_1.LocalAuthGuard,
            jwt_strategy_1.JwtStrategy,
            user_service_1.UserService,
        ],
        exports: [local_strategy_1.LocalStrategy, local_auth_guard_1.LocalAuthGuard, jwt_strategy_1.JwtStrategy],
    })
], ApiFeatureAuthModule);


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const common_1 = __webpack_require__(1);
const jwt_1 = __webpack_require__(18);
const user_service_1 = __webpack_require__(19);
let AuthService = class AuthService {
    constructor(userService, prismaService, jwtService) {
        this.userService = userService;
        this.prismaService = prismaService;
        this.jwtService = jwtService;
    }
    async signIn(user) {
        // console.log('inside singin', user);
        const payload = {
            username: user.username,
            name: user.name,
        };
        const response = {
            user,
            token: this.jwtService.sign(payload),
        };
        console.log('user signed successfully', response.user?.username);
        return response;
    }
    async validateUser(username, pass) {
        const user = await this.userService.findOne(username);
        // console.log('before check', user);
        if (user && user.password == pass) {
            // console.log('inside quality chekd');
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async getUserFromUserName(username) {
        try {
            const user = await this.prismaService.user.findUnique({
                where: { username },
            });
            if (!user) {
                throw new common_1.UnauthorizedException();
            }
            return user;
        }
        catch (error) {
            console.log('could not find a user getUserFromUserName');
            throw new common_1.UnauthorizedException();
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object, typeof (_b = typeof data_access_db_1.PrismaService !== "undefined" && data_access_db_1.PrismaService) === "function" ? _b : Object, typeof (_c = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _c : Object])
], AuthService);


/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const common_1 = __webpack_require__(1);
let UserService = class UserService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findOne(username) {
        const user = await this.prismaService.user.findFirst({
            where: { username },
        });
        // console.log('inside the findOne method. ', user);
        return user;
    }
    async createAStaffUser(userDto) {
        try {
            return await this.prismaService.user.create({
                data: {
                    username: userDto.username,
                    password: userDto.password,
                    name: userDto.name,
                    phone: userDto.phone,
                },
            });
        }
        catch (error) {
            console.log(error);
            if (error.code == 'P2002') {
                throw new common_1.BadRequestException({ message: 'Username already exists' });
            }
            throw new common_1.BadRequestException({ message: 'Could not create a new user' });
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_db_1.PrismaService !== "undefined" && data_access_db_1.PrismaService) === "function" ? _a : Object])
], UserService);


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const auth_service_1 = __webpack_require__(17);
const local_auth_guard_1 = __webpack_require__(21);
const create_user_dto_1 = __webpack_require__(23);
const user_service_1 = __webpack_require__(19);
const jwt_auth_guard_1 = __webpack_require__(24);
let AuthController = class AuthController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    signIn(req) {
        //[TODO] - have a license check here - anytime a new user logs in.
        // console.log('has gone inside');
        const user = req.user;
        return this.authService.signIn(user);
    }
    async signUp(createUserInput) {
        console.log('sinup methiod');
        return this.userService.createAStaffUser(createUserInput);
    }
};
exports.AuthController = AuthController;
tslib_1.__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('login'),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AuthController.prototype, "signIn", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('signup'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
exports.AuthController = AuthController = tslib_1.__decorate([
    (0, common_1.Controller)('auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _b : Object])
], AuthController);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalAuthGuard = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const passport_1 = __webpack_require__(22);
let LocalAuthGuard = class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
};
exports.LocalAuthGuard = LocalAuthGuard;
exports.LocalAuthGuard = LocalAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], LocalAuthGuard);


/***/ }),
/* 22 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const passport_1 = __webpack_require__(22);
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const tslib_1 = __webpack_require__(4);
const passport_local_1 = __webpack_require__(26);
const passport_1 = __webpack_require__(22);
const common_1 = __webpack_require__(1);
const auth_service_1 = __webpack_require__(17);
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(authService) {
        super();
        this.authService = authService;
    }
    async validate(username, password) {
        const user = await this.authService.validateUser(username, password);
        // console.log('inside validate ', user);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
exports.LocalStrategy = LocalStrategy;
exports.LocalStrategy = LocalStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);


/***/ }),
/* 26 */
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jwtConstants = void 0;
exports.jwtConstants = {
    secret: 'secretKey',
};


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const tslib_1 = __webpack_require__(4);
const passport_jwt_1 = __webpack_require__(29);
const passport_1 = __webpack_require__(22);
const common_1 = __webpack_require__(1);
const constants_1 = __webpack_require__(27);
const auth_service_1 = __webpack_require__(17);
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(authService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: constants_1.jwtConstants.secret,
        });
        this.authService = authService;
    }
    async validate(payload) {
        // console.log(payload);
        const user = await this.authService.getUserFromUserName(payload.username);
        // console.log('inside validate ', user);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], JwtStrategy);


/***/ }),
/* 29 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Modifiers = exports.CreateProductDto = void 0;
const tslib_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(31);
class CreateProductDto {
}
exports.CreateProductDto = CreateProductDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CreateProductDto.prototype, "image", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Boolean)
], CreateProductDto.prototype, "isAvailable", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Boolean)
], CreateProductDto.prototype, "onSale", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Number)
], CreateProductDto.prototype, "price", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Number)
], CreateProductDto.prototype, "cost", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Boolean)
], CreateProductDto.prototype, "archived", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CreateProductDto.prototype, "video", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Boolean)
], CreateProductDto.prototype, "popular", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CreateProductDto.prototype, "printName", void 0);
class Modifiers {
}
exports.Modifiers = Modifiers;


/***/ }),
/* 31 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductBoolFieldDto = void 0;
class ProductBoolFieldDto {
}
exports.ProductBoolFieldDto = ProductBoolFieldDto;


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(34), exports);


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiFeatureCategoryModule = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const common_1 = __webpack_require__(1);
const category_controller_1 = __webpack_require__(35);
const category_service_1 = __webpack_require__(36);
let ApiFeatureCategoryModule = class ApiFeatureCategoryModule {
};
exports.ApiFeatureCategoryModule = ApiFeatureCategoryModule;
exports.ApiFeatureCategoryModule = ApiFeatureCategoryModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [data_access_db_1.ApiDataAccessDbModule],
        controllers: [category_controller_1.CategoryController],
        providers: [category_service_1.CategoryService],
        exports: [],
    })
], ApiFeatureCategoryModule);


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const category_service_1 = __webpack_require__(36);
const create_category_dto_1 = __webpack_require__(37);
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    getCategory() {
        return this.categoryService.getCategory();
    }
    createCategory(params) {
        return this.categoryService.createCategory(params);
    }
    updateKitchen(body, id) {
        const cateogryId = +id;
        // console.log('kitchen id', cateogryId);
        return this.categoryService.udpateCategory(cateogryId, body);
    }
};
exports.CategoryController = CategoryController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], CategoryController.prototype, "getCategory", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_category_dto_1.CreateCategoryDto !== "undefined" && create_category_dto_1.CreateCategoryDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CategoryController.prototype, "createCategory", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof create_category_dto_1.CreateCategoryDto !== "undefined" && create_category_dto_1.CreateCategoryDto) === "function" ? _c : Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CategoryController.prototype, "updateKitchen", null);
exports.CategoryController = CategoryController = tslib_1.__decorate([
    (0, common_1.Controller)('category'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof category_service_1.CategoryService !== "undefined" && category_service_1.CategoryService) === "function" ? _a : Object])
], CategoryController);


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryService = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const common_1 = __webpack_require__(1);
let CategoryService = class CategoryService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getCategory() {
        return await this.prismaService.category.findMany({
            include: {
                kitchen: true,
            },
        });
    }
    async createCategory(data) {
        const updatedData = {
            ...data,
            kitchenId: +data.kitchenId,
            categoryCode: +data.categoryCode,
        };
        return await this.prismaService.category.create({
            data: updatedData,
        });
    }
    async udpateCategory(id, data) {
        const updatedData = {
            ...data,
            kitchenId: +data.kitchenId,
            categoryCode: +data.categoryCode,
        };
        try {
            return this.prismaService.category.update({
                where: { id },
                data: updatedData,
            });
        }
        catch (error) {
            throw new common_1.BadRequestException({ error: error });
        }
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_db_1.PrismaService !== "undefined" && data_access_db_1.PrismaService) === "function" ? _a : Object])
], CategoryService);


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCategoryDto = void 0;
const tslib_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(31);
class CreateCategoryDto {
}
exports.CreateCategoryDto = CreateCategoryDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateCategoryDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CreateCategoryDto.prototype, "color", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateCategoryDto.prototype, "kitchenId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateCategoryDto.prototype, "categoryCode", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CreateCategoryDto.prototype, "startTime", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CreateCategoryDto.prototype, "endTime", void 0);


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(39), exports);
tslib_1.__exportStar(__webpack_require__(42), exports);


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiFeatureOrderModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const api_feature_order_controller_1 = __webpack_require__(40);
const order_service_1 = __webpack_require__(42);
const data_access_db_1 = __webpack_require__(7);
const common_2 = __webpack_require__(83);
const pdf_service_1 = __webpack_require__(76);
const print_service_1 = __webpack_require__(81);
const feature_auth_1 = __webpack_require__(15);
const thermal_print_service_1 = __webpack_require__(88);
let ApiFeatureOrderModule = class ApiFeatureOrderModule {
};
exports.ApiFeatureOrderModule = ApiFeatureOrderModule;
exports.ApiFeatureOrderModule = ApiFeatureOrderModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [data_access_db_1.ApiDataAccessDbModule, feature_auth_1.ApiFeatureAuthModule, common_2.ApiCommonModule],
        controllers: [api_feature_order_controller_1.OrderContoller],
        providers: [order_service_1.OrderService, pdf_service_1.PDFService, print_service_1.PrintService, thermal_print_service_1.ThermalPrintService],
        exports: [print_service_1.PrintService, order_service_1.OrderService],
    })
], ApiFeatureOrderModule);


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderContoller = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const create_order_dto_1 = __webpack_require__(41);
const order_service_1 = __webpack_require__(42);
const feature_auth_1 = __webpack_require__(15);
let OrderContoller = class OrderContoller {
    constructor(orderService) {
        this.orderService = orderService;
    }
    getRecentNoPaidOrders(req) {
        // console.log('recent orders');
        const user = req.user;
        if (user.isCashier) {
            // console.log('iam a cashier user.');
            return this.orderService.getRecentNotPaidOrders();
        }
        return this.orderService.getRecentNotPaidOrdersByUser(user);
    }
    printsamplebill(params) {
        const orderId = +params.id;
        return this.orderService.printReceipt(orderId);
    }
    makeBillForTheOrder(data) {
        // console.log('patch requrest for ', data);
        // return this.orderService.printReceipt(data.orderId);
        return this.orderService.makeBillForTheOrder(data.orderId);
    }
    getOpenHomeDeliveryOrders() {
        // console.log('home delivery router get request has been called.');
        return this.orderService.getOpenHomeDeliveryOrders();
    }
    getOrderDetails(params) {
        // console.log('getting order details');
        const orderId = +params.id;
        return this.orderService.getOrderDetails(orderId);
    }
    post(order, req) {
        const appUser = req.user;
        return this.orderService.createOrder(order, appUser);
    }
    async qwickPay(order, req, query) {
        const appUser = req.user;
        const paymentDetails = {
            discount: query.discount ? Number.parseFloat(query.discount) : 0,
            paidAmount: query.paidAmount ? Number.parseFloat(query.paidAmount) : 0,
            balance: query.balance ? Number.parseFloat(query.balance) : 0,
            mode: query.mode ?? 'cash',
        };
        const newOrder = await this.orderService.createOrder(order, appUser);
        return this.orderService.payTheBill(newOrder.id, true, paymentDetails);
    }
    // @UseGuards(JwtAuthGuard)
    updateOrderItems(data, params) {
        // console.log(data, params);
        const orderId = params.id;
        // console.log('dto array', data);
        return 'hello world';
    }
    payTheBill(params, query) {
        const orderId = +params.id;
        const paymentDetails = {
            discount: query.discount ? Number.parseFloat(query.discount) : 0,
            paidAmount: query.paidAmount ? Number.parseFloat(query.paidAmount) : 0,
            balance: query.balance ? Number.parseFloat(query.balance) : 0,
            mode: query.mode ?? 'cash',
        };
        const shouldPrintBill = query.shouldPrint == 'no' ? false : true;
        return this.orderService.payTheBill(orderId, shouldPrintBill, paymentDetails);
    }
    cancelOrder(params, query) {
        const orderId = +params.id;
        const shouldPrintBill = query.shouldPrint ? true : false;
        return this.orderService.cancelTheBill(orderId, shouldPrintBill);
    }
    settleAsCreditPay(params, query) {
        const orderId = +params.id;
        // console.log('query params credit settle received', query);
        const shouldPrintBill = query.shouldPrint ? true : false;
        return this.orderService.creditSettle(orderId, shouldPrintBill);
    }
    async acceptHomeDelivery(data, params, req) {
        const orderId = +params.id;
        // console.log('delivery id to be assinged', data.deliveryUserId);
        // [TODO] if staff user is the looged in user, need validation to make sure logged and send deliveryId are same
        return this.orderService.acceptHomeDeliveryOrder(orderId, +data.deliveryUserId);
    }
};
exports.OrderContoller = OrderContoller;
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Get)(),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], OrderContoller.prototype, "getRecentNoPaidOrders", null);
tslib_1.__decorate([
    (0, common_1.Get)('print/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], OrderContoller.prototype, "printsamplebill", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Patch)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], OrderContoller.prototype, "makeBillForTheOrder", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Get)('homedelivery'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], OrderContoller.prototype, "getOpenHomeDeliveryOrders", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], OrderContoller.prototype, "getOrderDetails", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_order_dto_1.CreateOrderDto !== "undefined" && create_order_dto_1.CreateOrderDto) === "function" ? _b : Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], OrderContoller.prototype, "post", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Post)('qwickpay'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Req)()),
    tslib_1.__param(2, (0, common_1.Query)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof create_order_dto_1.CreateOrderDto !== "undefined" && create_order_dto_1.CreateOrderDto) === "function" ? _c : Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderContoller.prototype, "qwickPay", null);
tslib_1.__decorate([
    (0, common_1.Post)('updateItems/:id'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Array, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], OrderContoller.prototype, "updateOrderItems", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Get)('pay/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Query)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], OrderContoller.prototype, "payTheBill", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Get)('cancel/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Query)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], OrderContoller.prototype, "cancelOrder", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Get)('credit/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Query)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], OrderContoller.prototype, "settleAsCreditPay", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Post)('accepthomedelivery/:id'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__param(2, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderContoller.prototype, "acceptHomeDelivery", null);
exports.OrderContoller = OrderContoller = tslib_1.__decorate([
    (0, common_1.Controller)('orders'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof order_service_1.OrderService !== "undefined" && order_service_1.OrderService) === "function" ? _a : Object])
], OrderContoller);


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateOrderDto = void 0;
const tslib_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(31);
class CreateOrderDto {
}
exports.CreateOrderDto = CreateOrderDto;
tslib_1.__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Object)
], CreateOrderDto.prototype, "cartItems", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CreateOrderDto.prototype, "note", void 0);


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const data_access_db_1 = __webpack_require__(7);
const util_1 = __webpack_require__(43);
const types_1 = __webpack_require__(47);
const pdf_service_1 = __webpack_require__(76);
const common_2 = __webpack_require__(83);
const thermal_print_service_1 = __webpack_require__(88);
let OrderService = class OrderService {
    constructor(prismaService, pdfService, thermalPrintConfig, thermalPrintService) {
        this.prismaService = prismaService;
        this.pdfService = pdfService;
        this.thermalPrintConfig = thermalPrintConfig;
        this.thermalPrintService = thermalPrintService;
    }
    async testPrismaggregate(orderID) {
        const result = await this.prismaService.orderItem.groupBy({
            by: ['customeKey'],
            where: { orderId: orderID },
            _sum: { count: true },
        });
        return result;
    }
    async getRecentNotPaidOrders() {
        // console.log(dateTimeNowMinus(24));
        // this. shoudl fetch orders of last 24 hours.
        return await this.prismaService.order.findMany({
            where: {
                createdAt: {
                    gt: await this.getActiveSessionStartTime(),
                },
                paymentStatus: { notIn: [types_1.PaymentStatus.CREDIT, types_1.PaymentStatus.PAID] },
                orderStatus: { not: types_1.OrderStatus.CANCELLED },
            },
            include: { customer: true, user: true },
            orderBy: { createdAt: 'asc' },
        });
    }
    async getActiveSessionStartTime() {
        const activeSession = await this.prismaService.posSession.findFirst({
            where: {
                status: types_1.SessionStatus.ACTIVE,
            },
        });
        if (!activeSession)
            throw new common_1.NotFoundException('No active session');
        // console.log('active session start time is', activeSession.startTime);
        return activeSession.startTime;
    }
    async getRecentOrders() {
        // console.log(dateTimeNowMinus(24));
        // this. shoudl fetch orders of last 24 hours.
        return await this.prismaService.order.findMany({
            where: {
                createdAt: {
                    gt: await this.getActiveSessionStartTime(),
                },
                orderStatus: { not: types_1.OrderStatus.CANCELLED },
            },
            include: { customer: true, user: true },
        });
    }
    async getRecentOrdersByUser(user) {
        // console.log(dateTimeNowMinus(24));
        // this. shoudl fetch orders of last 24 hours.
        return await this.prismaService.order.findMany({
            where: {
                createdAt: {
                    gt: (0, util_1.dateTimeNowMinus)(24),
                },
                createdUserId: user.id,
                orderStatus: { not: types_1.OrderStatus.CANCELLED },
            },
            include: { customer: true },
        });
    }
    async getRecentNotPaidOrdersByUser(user) {
        // console.log(dateTimeNowMinus(24));
        // this. shoudl fetch orders of last 24 hours.
        return await this.prismaService.order.findMany({
            where: {
                createdAt: {
                    gt: (0, util_1.dateTimeNowMinus)(24),
                },
                createdUserId: user.id,
                paymentStatus: { notIn: [types_1.PaymentStatus.CREDIT, types_1.PaymentStatus.PAID] },
                orderStatus: { not: types_1.OrderStatus.CANCELLED },
            },
            include: { customer: true, user: true },
            orderBy: { createdAt: 'asc' },
        });
    }
    async getOrderDetails(orderId) {
        // const date = new Date();
        // const stringDate = date.toISOString().substring(0, 10);
        // return await this.prismaService.order.findMany({
        //   where: {
        //     createdAt: {
        //       gt: new Date(stringDate),
        //     },
        //   },
        // });
        return await this.prismaService.order.findUnique({
            where: { id: orderId },
            include: {
                orderItems: {
                    include: {
                        product: true,
                    },
                },
                customer: true,
                user: true,
                kot: {
                    include: { Kitchen: true },
                },
            },
        });
    }
    async printReceipt(orderId) {
        try {
            // await this.prismaService.orderItem.aggregate({
            //   where: { orderId: orderId },
            //   _sum: { amount: true },
            // });
            // get company id from appUser.
            const companyId = 1;
            const company = await this.prismaService.company.findFirst({
                where: { id: companyId },
                include: {
                    taxes: { where: { isActive: true } },
                },
            });
            //  get order with order items.
            const order = await this.prismaService.order.findFirst({
                where: { id: orderId },
                include: {
                    orderItems: {
                        include: {
                            product: true,
                        },
                    },
                    table: true,
                    customer: true,
                    user: true,
                    deliveryUser: true,
                },
            });
            const { orderItems, totalCount, totalItems, orderTotal } = await this.getOrderItemsForTheOrderAggregated(orderId);
            const discountApplied = order?.discountApplied ?? 0;
            // const orderTotal = getOrderItemsTotal(orderItems as unknown as OrderItem[]);
            const taxAppliedTotalandInfo = (0, util_1.getAppliedTaxesAndTaxesTotal)(orderTotal, company?.taxes);
            const totalAfterDiscount = taxAppliedTotalandInfo.taxedTotal - discountApplied;
            // send to the print service.
            const customerNameToPrint = order?.orderType == 'table'
                ? `${order.customerName} `
                : order?.customer?.firstName;
            const customerLastNameToPrint = order?.customer?.lastName
                ? order.customer.lastName
                : '';
            const noOfDecimalPlaces = company?.decimalZeros
                ? company.decimalZeros
                : 3;
            const mappedOrderItems = orderItems.map((orderItem) => {
                return {
                    ...orderItem,
                    amount: orderItem.amount.toFixed(noOfDecimalPlaces),
                    otherLanguageName: orderItem.product.secondaryLanguageName,
                    individualTotal: (orderItem.count * orderItem.amount).toFixed(noOfDecimalPlaces),
                };
            });
            const billType = this.getBillTypeFromOrder(order);
            const isHomeDelivery = order?.orderType == types_1.OrderType.HOMEDELIVERY;
            const homeDeliveryUserName = order?.deliveryUser?.name;
            // console.log(mappedOrderItems.length);
            const infoToPrint = {
                companyName: company?.name,
                address: company?.address ? company?.address : '****',
                billDateTime: (0, util_1.dateTimeToDateHHMM)(order.createdAt),
                billType,
                orderNumber: `Order No- ${order?.orderNumber}`,
                paymentStatus: order?.paymentStatus == 'paid' ? '( PAID )' : '(NOT PAID  )',
                orderTypeTitle: order?.orderType == 'table' ? 'Table Info' : 'Customer Info',
                customerName: customerNameToPrint,
                lastName: customerLastNameToPrint,
                waiterName: order?.user.name,
                isHomeDelivery,
                homeDeliveryUserName,
                orderItems: mappedOrderItems,
                total: orderTotal.toFixed(noOfDecimalPlaces),
                appliedTaxesInfo: taxAppliedTotalandInfo.taxesApplied.map((item) => ({
                    ...item,
                    value: item.value.toFixed(noOfDecimalPlaces),
                })),
                taxedTotal: taxAppliedTotalandInfo.taxedTotal.toFixed(noOfDecimalPlaces),
                totalCount,
                totalItems,
                totalAfterDiscount: totalAfterDiscount.toFixed(noOfDecimalPlaces),
                hasDiscountApplied: discountApplied == 0 ? false : true,
                discountApplied: discountApplied.toFixed(noOfDecimalPlaces),
            };
            const printer = company.printer;
            console.log('is this being called');
            if (this.thermalPrintConfig.shouldUseThermalPrinter) {
                this.thermalPrintService.printBill(infoToPrint, printer);
            }
            else {
                await this.pdfService.printReceipt(infoToPrint, printer);
            }
            return order;
            // removed by dead control flow

        }
        catch (error) {
            console.log('Error while priting receipt', error);
            throw new common_1.NotFoundException({ error: error });
        }
    }
    getBillTypeFromOrder(order) {
        let billType = 'Table';
        if (!order)
            return billType;
        switch (order.orderType) {
            case types_1.OrderType.HOMEDELIVERY:
                billType = 'Home Delivery';
                break;
            case types_1.OrderType.TABLE:
                billType = 'Table';
                break;
            case types_1.OrderType.TAKEAWAY:
                billType = 'Takeaway';
        }
        return billType;
    }
    async waitTillFromArray() {
        await this.waitRandom();
        const randomDelaysToCreate = [
            100, 500, 600, 700, 800, 900, 1000, 1100, 1300, 1500, 1700, 2000, 2200,
            2400, 2500,
        ];
        const max = 13;
        const min = 0;
        const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
        // console.log('another wait of', randomDelaysToCreate[randomIndex]);
        return new Promise((resolve) => {
            setTimeout(resolve, randomDelaysToCreate[randomIndex]);
        });
    }
    async waitRandom() {
        const random = Math.random() * 1000;
        // console.log('random number is ', random);
        return new Promise((resolve) => {
            setTimeout(resolve, random);
        });
    }
    async getNextOrderNumber() {
        try {
            // the followind line is temporary fix for concurrency company
            // update error. postgres would not have this error, still keeping the code here.s
            await this.waitTillFromArray();
            const company = await this.prismaService.company.findFirst();
            if (!company)
                throw new Error('no company data found');
            // console.log('oriingal order number', company.lastOrderNumber);
            const updatedCompanyDetails = await this.prismaService.company.update({
                where: {
                    id: company?.id,
                },
                data: {
                    lastOrderNumber: company?.lastOrderNumber + 1,
                },
            });
            // console.log(
            //   'updated company order number',
            //   updatedCompanyDetails.lastOrderNumber
            // );
            return updatedCompanyDetails?.lastOrderNumber;
        }
        catch (error) {
            console.log('next order number error');
            throw new common_1.BadRequestException(error);
        }
    }
    async isAllowedToCreateOrder() {
        try {
            const activeSessions = await this.prismaService.posSession.findFirst({
                where: { status: types_1.SessionStatus.ACTIVE },
            });
            // console.log('acitve sessin', activeSessions);
            if (activeSessions) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    async createOrder(createOrderDto, appUser) {
        const isAllowedToCreateOrder = await this.isAllowedToCreateOrder();
        if (!isAllowedToCreateOrder) {
            throw Error('Cannot created order now...');
        }
        try {
            const printKot = createOrderDto.printKot;
            // console.log('print Kot flag value is ', printKot);
            // const tableId = createOrderDto.tableId;
            if (createOrderDto.customerId) {
                const customerId = createOrderDto.customerId;
                // console.log('existing ordre', `${tableId} = ${customerId}`);
                const existingOrder = await this.checkIfCustomerHasRunningOrder(customerId);
                if (!existingOrder)
                    throw new Error();
                await this.updateOrderItemsTable(existingOrder, createOrderDto, true, appUser, printKot);
                return existingOrder;
            }
            else {
                if (createOrderDto.cartCreatedFor.userType == types_1.UserType.HOMEDELIVERY) {
                    const newOrder = await this.createHomeDeliveryOrder(createOrderDto, appUser);
                    if (!newOrder)
                        throw new common_1.BadRequestException('could not create any new order..');
                    // console.log('order has been created.', newOrder);
                    await this.updateOrderItemsTable(newOrder, createOrderDto, false, appUser, printKot);
                    return newOrder;
                }
                else if (createOrderDto.cartCreatedFor.userType == types_1.UserType.TAKEAWAY) {
                    const newOrder = await this.createTakeAwayOrder(createOrderDto, appUser);
                    if (!newOrder)
                        throw new common_1.BadRequestException('could not create any new order..');
                    // console.log('order has been created.', newOrder);
                    await this.updateOrderItemsTable(newOrder, createOrderDto, false, appUser, printKot);
                    return newOrder;
                }
                else {
                    const newOrder = await this.createTableOrder(createOrderDto, appUser);
                    await this.updateOrderItemsTable(newOrder, createOrderDto, false, appUser, printKot);
                    return newOrder;
                }
            }
            // no customer is assigned for this.
            // this mean a new cusotmer should be created along with the orders.
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error);
        }
    }
    async createTakeAwayOrder(createOrderDto, appUser) {
        try {
            const nextOrderId = await this.getNextOrderNumber();
            // console.log('order id now is', nextOrderId);
            const newCustomer = await this.prismaService.customer.create({
                data: {
                    firstName: createOrderDto.cartCreatedFor.firstName,
                    lastName: createOrderDto.cartCreatedFor.lastName
                        ? createOrderDto.cartCreatedFor.lastName
                        : '***',
                },
            });
            const newOrder = await this.prismaService.order.create({
                data: {
                    customerName: createOrderDto.cartCreatedFor.firstName,
                    orderNumber: nextOrderId,
                    orderStatus: types_1.OrderStatus.INPROGRESS,
                    orderType: types_1.OrderType.TAKEAWAY,
                    paymentStatus: types_1.PaymentStatus.NOTPAID,
                    createdUserId: appUser.id,
                    customerId: newCustomer.id,
                },
                include: {
                    customer: true,
                },
            });
            // console.log('prisma is creating data');
            return newOrder;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error);
        }
    }
    async createHomeDeliveryOrder(createOrderDto, appUser) {
        try {
            const nextOrderId = await this.getNextOrderNumber();
            // console.log('order id now is', nextOrderId);
            const newCustomer = await this.prismaService.customer.create({
                data: {
                    firstName: createOrderDto.cartCreatedFor.firstName,
                    lastName: createOrderDto.cartCreatedFor.lastName
                        ? createOrderDto.cartCreatedFor.lastName
                        : '***',
                },
            });
            const deliveryUserId = createOrderDto.deliveryUserId;
            // const orderstatus =
            //   deliveryUserId == 0 ? OrderStatus.INPROGRESS : OrderStatus.SERVED;
            const newOrder = await this.prismaService.order.create({
                data: {
                    customerName: createOrderDto.cartCreatedFor.firstName,
                    orderNumber: nextOrderId,
                    orderStatus: types_1.OrderStatus.INPROGRESS,
                    orderType: types_1.OrderType.HOMEDELIVERY,
                    paymentStatus: types_1.PaymentStatus.NOTPAID,
                    createdUserId: appUser.id,
                    customerId: newCustomer.id,
                    deliveryUserId: deliveryUserId == 0 ? null : +createOrderDto.deliveryUserId,
                },
                include: {
                    customer: true,
                },
            });
            // console.log('prisma is creating data');
            return newOrder;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error);
        }
    }
    async updateOrderItemsTable(order, createOrderDto, isRunning, appUser, printKot) {
        try {
            const orderId = order.id;
            // split order items into cateogry.
            // const orderItems1 = Object.entries(createOrderDto.cartItems).map(
            //   (itemArr) => {
            //     const key = itemArr[0];
            //     const items = itemArr[1];
            //     const item: CartItem = {
            //       ...items,
            //       key,
            //     };
            //     return item;
            //   }
            // );
            const orderItems1 = createOrderDto.resultantCartItems;
            // get all the categories with the kitchen name.
            const categories = await this.prismaService.category.findMany({
                select: {
                    id: true,
                    kitchen: true,
                },
            });
            const kitchenIdVice = {};
            const kitchenTempArra = [];
            let hasEditItems = false;
            let hasDeleteItems = false;
            orderItems1.forEach((orderItem) => {
                if (orderItem.cartItemType === types_1.CartItemType.DELETE) {
                    hasDeleteItems = true;
                }
                if (orderItem.cartItemType === types_1.CartItemType.EDIT) {
                    hasEditItems = true;
                }
                const catId = orderItem.product.categoryId;
                const kitchenDetail = categories.find((cat) => cat.id === catId)?.kitchen;
                kitchenTempArra.push(kitchenDetail);
                const kitId = kitchenDetail?.id ?? 'noPrinter';
                kitchenIdVice[kitId] = [...(kitchenIdVice[kitId] || []), orderItem];
            });
            const createdKots = [];
            // promise .all is need to handle the wait for the writes to kot table to avoid error.
            await Promise.all(Object.entries(kitchenIdVice).map(async ([kitId, resultantCartItems]) => {
                const kotCreated = await this.prismaService.kot.create({
                    data: {
                        kitchenId: +kitId,
                        updatedUserId: appUser.id,
                        orderId: order.id,
                        note: createOrderDto.note ?? '',
                        status: types_1.KotStatus.INPROGRESS,
                        orderItems: {
                            create: resultantCartItems.map((resultantCartItem) => {
                                const orderItem = {
                                    count: resultantCartItem.count,
                                    customeKey: resultantCartItem.key ?? '',
                                    name: resultantCartItem.name,
                                    orderId: orderId,
                                    amount: resultantCartItem.amount,
                                    productId: resultantCartItem.product.id,
                                    orderItemType: resultantCartItem.cartItemType,
                                    message: resultantCartItem.message,
                                    note: resultantCartItem.note ?? '',
                                    modifiers: resultantCartItem.modifiers
                                        ? resultantCartItem.modifiers?.reduce((prev, curr) => prev.concat(curr.name, ', '), '')
                                        : '',
                                };
                                return orderItem;
                            }),
                        },
                    },
                    select: {
                        id: true,
                        createdAt: true,
                        updatedUser: true,
                        Kitchen: true,
                        note: true,
                        orderItems: true,
                    },
                });
                // console.log(kotCreated);
                createdKots.push(kotCreated);
                // await this.printKots(kotCreated);
            }));
            // filter KOT wich has print option no selected so that it won't be printed
            createdKots
                .filter((kot) => kot.Kitchen.shouldPrintKot)
                .forEach((kot) => {
                const kotData = this.createKOTData(kot, order, appUser, hasDeleteItems, hasEditItems, isRunning);
                if (printKot) {
                    // console.log('print kot is true in this area', printKot);
                    // not waiting for the print service to finsh. optimization.
                    console.log('reaching this far.');
                    if (this.thermalPrintConfig.shouldUseThermalPrinter) {
                        this.thermalPrintService.printKot(kotData);
                    }
                    else {
                        this.pdfService.printKot(kotData);
                    }
                }
            });
            // Object.entries(kitchenIdVice).forEach(async ([kitId, cartItems]) => {
            //   const kotCreated = await this.prismaService.kot.create({
            //     data: {
            //       kitchenId: +kitId,
            //       updatedUserId: appUser.id!,
            //       orderItems: {
            //         create: cartItems.map((cartItem) => {
            //           const orderItem = {
            //             count: cartItem.count,
            //             customeKey: cartItem.key ?? '',
            //             name:
            //               cartItem.product.name +
            //               (cartItem.variant ? '-' + cartItem.variant.name : ''),
            //             orderId: orderId,
            //             amount: this.getCartItemTotal(cartItem),
            //             productId: cartItem.product.id,
            //             // OrderItemType: isRunning ? 'running' : 'new',
            //             modifiers: cartItem.modifiers
            //               ? cartItem.modifiers?.reduce(
            //                   (prev, curr) => prev.concat(curr.description, ', '),
            //                   ''
            //                 )
            //               : '',
            //           };
            //           return orderItem;
            //         }),
            //       },
            //     },
            //     select: {
            //       id: true,
            //       createdAt: true,
            //       updatedUser: true,
            //       Kitchen: true,
            //       orderItems: true,
            //     },
            //   });
            //   console.log(kotCreated);
            //   createdKots.push(kotCreated.id);
            //   // await this.printKots(kotCreated);
            //   const kotData = this.createKOTData(kotCreated, order, appUser);
            //   await this.pdfService.printKot(kotData);
            // });
            return order;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error);
        }
    }
    createKOTData(kot, order, user, hasDeleteItems, hasEditItems, isRunningOrder) {
        // console.log('kot passed is', kot);
        const customerInfor = order.customer;
        const firstName = customerInfor.firstName;
        const secondName = customerInfor.lastName ? customerInfor.lastName : '****';
        // [TODO] the following kot total is a patch fix hardcoding number of decimal to 3 digits, this needs to be update according the company table numberofDecimal places.
        const kotTotalToFixed3 = kot.orderItems
            .reduce((prev, item) => prev + (item.count > 0 ? item.count : 0) * item.amount, 0)
            .toFixed(3) ?? '';
        const updatedData = {
            kitchenName: kot.Kitchen.name ? kot.Kitchen.name : 'KITCHEN',
            printer: kot.Kitchen.printer,
            ticketId: `KOT: ${kot.id}`,
            billDate: (0, util_1.dateTimeToDateHHMM)(kot.createdAt),
            orderNumber: `Order No- ${order?.orderNumber}`,
            orderTypeTitle: order?.orderType == 'table' ? 'Table Info' : 'Customer Info',
            kotType: order?.orderType == 'table' ? 'Dine In' : 'Take Away',
            isRunningOrder,
            tableNumber: order.customerName,
            createdForFirstName: firstName ? firstName : 'First Name',
            createdForSecondName: secondName ? secondName : 'Second Name',
            waiterName: user.name,
            hasDeleteItems,
            hasEditItems,
            orderItems: kot.orderItems,
            numberOfItems: kot.orderItems.length.toString() ?? '',
            kotNote: kot.note ?? '',
            kotTotalAmount: kotTotalToFixed3,
            quantity: kot.orderItems
                .reduce((prev, item) => prev + (item.count > 0 ? item.count : 0), 0)
                .toString() ?? '',
        };
        return updatedData;
    }
    getCartItemTotal(cartItem) {
        let productPrice = cartItem.variant
            ? cartItem.variant.price
            : cartItem.product.price;
        if (cartItem.modifiers) {
            productPrice =
                productPrice +
                    cartItem.modifiers.reduce((prev, modifier) => prev + modifier.price, 0);
        }
        return productPrice;
    }
    async checkIfCustomerHasRunningOrder(customerId) {
        try {
            const existingOrderFortheTable = await this.prismaService.order.findFirst({
                where: {
                    customerId: customerId,
                    NOT: {
                        orderStatus: types_1.OrderStatus.DELIVERED,
                    },
                },
                include: {
                    customer: true,
                },
            });
            // console.log('existing order', existingOrderFortheTable);
            return existingOrderFortheTable;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async createTableOrder(createOrderDto, appUser) {
        try {
            const tableId = createOrderDto.tableId;
            const nextOrderId = await this.getNextOrderNumber();
            // console.log('order id now is', nextOrderId);
            const newCustomer = await this.prismaService.customer.create({
                data: {
                    firstName: createOrderDto.cartCreatedFor.firstName,
                    lastName: createOrderDto.cartCreatedFor.lastName
                        ? createOrderDto.cartCreatedFor.lastName
                        : '***',
                },
            });
            const newOrder = await this.prismaService.order.create({
                data: {
                    customerName: createOrderDto.cartCreatedFor.firstName,
                    customerId: newCustomer.id,
                    tableId: tableId,
                    orderNumber: nextOrderId,
                    orderStatus: types_1.OrderStatus.INPROGRESS,
                    orderType: types_1.OrderType.TABLE,
                    paymentStatus: types_1.PaymentStatus.NOTPAID,
                    createdUserId: appUser.id,
                },
                include: {
                    customer: true,
                },
            });
            return newOrder;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException({
                errorMessage: 'Could not create new order.',
            });
        }
    }
    async makeBillForTheOrder(orderId) {
        // check if the order is in in progress status. no need as front end takes care of it.
        try {
            const updatedOrder = await this.prismaService.order.update({
                where: { id: orderId },
                data: {
                    orderStatus: types_1.OrderStatus.SERVED,
                    paymentStatus: types_1.PaymentStatus.NOTPAID,
                },
                include: {
                    orderItems: {
                        include: {
                            product: {
                                select: {
                                    secondaryLanguageName: true,
                                },
                            },
                        },
                    },
                },
            });
            // console.log('updated order', updatedOrder);
            this.printReceipt(orderId);
            return updatedOrder;
        }
        catch (error) {
            throw new Error('format later.');
        }
    }
    async payTheBill(orderId, shouldPrintBill, paymentDetails) {
        // check if the order is in in progress status. no need as front end takes care of it.
        // console.log('paybill paydetails', paymentDetails);
        try {
            const updatedOrder = await this.prismaService.order.update({
                where: { id: orderId },
                data: {
                    paymentStatus: types_1.PaymentStatus.PAID,
                    orderStatus: types_1.OrderStatus.SERVED,
                    ...(paymentDetails.paidAmount && {
                        paidAmount: paymentDetails.paidAmount,
                        discountApplied: paymentDetails.discount,
                        balance: paymentDetails.balance,
                        paymentMode: paymentDetails.mode,
                        payments: {
                            // adding these payments after new paybreakup change on may 2024
                            create: { amount: paymentDetails.paidAmount, paymentTypeId: 1 },
                        },
                    }),
                },
                include: {
                    orderItems: {
                        include: {
                            product: {
                                select: {
                                    secondaryLanguageName: true,
                                },
                            },
                        },
                    },
                },
            });
            // console.log('updated order', updatedOrder);
            if (shouldPrintBill) {
                this.printReceipt(orderId);
            }
            return updatedOrder;
        }
        catch (error) {
            console.log(error);
            throw new Error('format later.');
        }
    }
    async cancelTheBill(orderId, shouldPrintBill) {
        // check if the order is in in progress status. no need as front end takes care of it.
        try {
            const updatedOrder = await this.prismaService.order.update({
                where: { id: orderId },
                data: {
                    orderStatus: types_1.OrderStatus.CANCELLED,
                },
                include: {
                    orderItems: {
                        include: {
                            product: {
                                select: {
                                    secondaryLanguageName: true,
                                },
                            },
                        },
                    },
                },
            });
            // console.log('updated order', updatedOrder);
            if (shouldPrintBill) {
                this.printReceipt(orderId);
            }
            return updatedOrder;
        }
        catch (error) {
            throw new Error('format later.');
        }
    }
    async creditSettle(orderId, shouldPrintBill) {
        // check if the order is in in progress status. no need as front end takes care of it.
        try {
            const updatedOrder = await this.prismaService.order.update({
                where: { id: orderId },
                data: {
                    paymentStatus: types_1.PaymentStatus.CREDIT,
                    orderStatus: types_1.OrderStatus.SERVED,
                },
                include: {
                    orderItems: {
                        include: {
                            product: {
                                select: {
                                    secondaryLanguageName: true,
                                },
                            },
                        },
                    },
                },
            });
            // console.log('updated order', updatedOrder);
            if (shouldPrintBill) {
                this.printReceipt(orderId);
            }
            return updatedOrder;
        }
        catch (error) {
            throw new Error('format later.');
        }
    }
    async getOrderItemsForTheOrderAggregated(orderId) {
        let totalItems = 0;
        let totalCount = 0;
        let orderTotal = 0;
        const result = await this.prismaService.orderItem.groupBy({
            by: ['customeKey'],
            where: { orderId },
            _sum: { count: true },
        });
        const uniqeOrderItems = await this.prismaService.orderItem.findMany({
            where: { orderId },
            distinct: ['customeKey'],
        });
        // console.log(uniqeOrderItems);
        const mappedWithResult = uniqeOrderItems.map((item) => result.filter((resultItem) => resultItem.customeKey === item.customeKey)[0]);
        // console.log('groupby', result);
        // console.log('mapped result ', mappedWithResult);
        const aggregatedOrderItems = await Promise.all(mappedWithResult.map(async (item) => {
            const dbItem = await this.prismaService.orderItem.findFirst({
                where: { customeKey: item.customeKey, orderId },
                include: { product: true },
            });
            const updateOrderItemWithCount = {
                ...dbItem,
                count: item._sum.count,
            };
            // console.log(updateOrderItemWithCount);
            totalItems =
                totalItems + (updateOrderItemWithCount.count == 0 ? 0 : 1);
            orderTotal =
                orderTotal +
                    updateOrderItemWithCount.amount * updateOrderItemWithCount.count;
            totalCount = totalCount + updateOrderItemWithCount.count;
            return updateOrderItemWithCount;
        }));
        // filter item which has count zero because of order edit feature.
        const filtedItems = aggregatedOrderItems.filter((item) => item?.count != 0);
        const agregated = {
            orderItems: filtedItems,
            totalCount: totalCount,
            totalItems: totalItems,
            orderTotal,
        };
        return agregated;
    }
    async updateOrderItemsForTheOrder(orderId, orderItems) {
        try {
            // await this.prismaService.orderItem.cre;/
            // console.log('order id is', orderId);
            // console.log('order details', orderItems);
        }
        catch (error) {
            console.log('erro while updating orerItems.');
        }
    }
    async getOpenHomeDeliveryOrders() {
        try {
            const openDeliveryOrders = await this.prismaService.order.findMany({
                where: {
                    deliveryUserId: null,
                    orderType: types_1.OrderType.HOMEDELIVERY,
                    orderStatus: { not: types_1.OrderStatus.CANCELLED },
                    createdAt: { gte: await this.getActiveSessionStartTime() },
                },
                include: { customer: true, user: true },
            });
            return openDeliveryOrders;
        }
        catch (erorr) {
            throw new common_1.NotFoundException();
        }
    }
    async acceptHomeDeliveryOrder(orderId, deliveryUserId) {
        try {
            const updatedOrder = await this.prismaService.order.update({
                where: { id: orderId },
                data: {
                    deliveryUserId,
                },
            });
            return updatedOrder;
        }
        catch (error) {
            console.log('could not set homedelivery user', error);
            throw new common_1.BadRequestException();
        }
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(2, (0, common_1.Inject)('IS_ORDER_APP_THERMAL_OK')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_db_1.PrismaService !== "undefined" && data_access_db_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof pdf_service_1.PDFService !== "undefined" && pdf_service_1.PDFService) === "function" ? _b : Object, typeof (_c = typeof common_2.ThermalPrintOptions !== "undefined" && common_2.ThermalPrintOptions) === "function" ? _c : Object, typeof (_d = typeof thermal_print_service_1.ThermalPrintService !== "undefined" && thermal_print_service_1.ThermalPrintService) === "function" ? _d : Object])
], OrderService);


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(44), exports);
tslib_1.__exportStar(__webpack_require__(46), exports);


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.aggregateOrderItems = exports.getOnlyCurrentDateWithoutTime = exports.getStartOfTheMonth = exports.getStartOfTheWeek = exports.getStartOfTheDay = exports.timesAgoFormat = exports.dateTimeNowMinus = exports.dateTimeToDateHHMM = exports.getTaxedSubTotal = exports.getAppliedTaxesAndTaxesTotal = exports.getOrderItemsTotal = void 0;
exports.commonUtil = commonUtil;
const luxon_1 = __webpack_require__(45);
function commonUtil() {
    return 'common-util';
}
const getOrderItemsTotal = (orderItems) => {
    const totalOfOderItems = +Object.values(orderItems).reduce((tot, orderItem) => {
        return tot + orderItem.amount;
    }, 0);
    return +totalOfOderItems.toFixed(3);
};
exports.getOrderItemsTotal = getOrderItemsTotal;
const getAppliedTaxesAndTaxesTotal = (total, taxes) => {
    const taxAppliedInfo = {
        taxesApplied: taxes?.map((tax) => {
            return {
                taxName: tax.printName,
                value: (0, exports.getTaxedSubTotal)(total, tax),
            };
        }),
        taxedTotal: taxes?.reduce((a, b) => a + (0, exports.getTaxedSubTotal)(total, b), total),
    };
    return taxAppliedInfo;
};
exports.getAppliedTaxesAndTaxesTotal = getAppliedTaxesAndTaxesTotal;
const getTaxedSubTotal = (total, tax) => {
    if (tax.isPercentage) {
        return +(total * 0.01 * tax.value);
    }
    else {
        return +tax.value;
    }
};
exports.getTaxedSubTotal = getTaxedSubTotal;
const dateTimeToDateHHMM = (dateTime) => luxon_1.DateTime.fromJSDate(dateTime).toLocaleString(luxon_1.DateTime.DATETIME_SHORT);
exports.dateTimeToDateHHMM = dateTimeToDateHHMM;
const dateTimeNowMinus = (hoursToSubtract) => {
    return luxon_1.DateTime.now().minus({ hour: hoursToSubtract }).toJSDate();
};
exports.dateTimeNowMinus = dateTimeNowMinus;
const timesAgoFormat = (datetime) => luxon_1.DateTime.fromISO(datetime).toRelative();
exports.timesAgoFormat = timesAgoFormat;
const getStartOfTheDay = () => luxon_1.DateTime.now().startOf('day').toJSDate();
exports.getStartOfTheDay = getStartOfTheDay;
const getStartOfTheWeek = () => luxon_1.DateTime.now().startOf('week').toJSDate();
exports.getStartOfTheWeek = getStartOfTheWeek;
const getStartOfTheMonth = () => luxon_1.DateTime.now().startOf('month').toJSDate();
exports.getStartOfTheMonth = getStartOfTheMonth;
const getOnlyCurrentDateWithoutTime = () => luxon_1.DateTime.now().toLocaleString(luxon_1.DateTime.DATE_SHORT);
exports.getOnlyCurrentDateWithoutTime = getOnlyCurrentDateWithoutTime;
const aggregateOrderItems = (orderItems) => {
    let totalQuantityCount = 0;
    let totalItemsCount = 0;
    let totalAmount = 0;
    const itemObj = {};
    orderItems.forEach((orderItem) => {
        const key = orderItem.customeKey;
        itemObj[key] = {
            ...(itemObj[key] || {}),
            ...{
                ...orderItem,
                id: itemObj[key] ? itemObj[key].id : orderItem.id, // This step is neeed to keep the sort order if item had edit later on but still need to keep order at the top even had edits
                count: itemObj[key]
                    ? itemObj[key].count + orderItem.count
                    : orderItem.count,
            },
        };
    });
    // Sort is needed to fix the unordered keys of the object. this is making order of items displayed on the screen not in the order it was created.
    const aggregatedOrderItemsArr = Object.values(itemObj).sort((a, b) => {
        if (a.id && b.id) {
            return a.id - b.id;
        }
        return 0;
    });
    Object.values(itemObj).forEach((item) => {
        totalQuantityCount = totalQuantityCount + item.count;
        totalItemsCount = totalItemsCount + 1;
        totalAmount = totalAmount + item.count * item.amount;
    });
    return {
        aggregated: aggregatedOrderItemsArr,
        totalAmount,
        totalQuantityCount,
        totalItemsCount,
    };
};
exports.aggregateOrderItems = aggregateOrderItems;


/***/ }),
/* 45 */
/***/ ((module) => {

module.exports = require("luxon");

/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getResultantCartItems = exports.getCartItemNameFromVariant = exports.getCartItemTotalFromVariantAndModifiers = void 0;
const types_1 = __webpack_require__(47);
const getCartItemTotalFromVariantAndModifiers = (cartItem) => {
    let productPrice = cartItem.variant
        ? cartItem.variant.price
        : cartItem.product.price;
    console.log('product resultant rate check', productPrice);
    if (cartItem.modifiers) {
        productPrice =
            productPrice +
                cartItem.modifiers.reduce((prev, modifier) => prev + modifier.price, 0);
    }
    return productPrice;
};
exports.getCartItemTotalFromVariantAndModifiers = getCartItemTotalFromVariantAndModifiers;
const getCartItemNameFromVariant = (cartItem) => {
    return (cartItem.product.name +
        (cartItem.variant ? '-' + cartItem.variant.name : ''));
};
exports.getCartItemNameFromVariant = getCartItemNameFromVariant;
const getResultantCartItems = (cartItemObj, orderEditItemsObj) => {
    console.log('getting resultant items........');
    const cartItems = Object.values(cartItemObj);
    const orderItemEdits = Object.values(orderEditItemsObj);
    const resultantCartItemsArray = [];
    if (!orderItemEdits.length && !cartItems.length) {
        console.log('both zero return');
        return [];
    }
    // compare each key with key in orderEdit.
    if (cartItems.length) {
        console.log('cart items have somethign in it.');
        Object.entries(cartItemObj).map((item) => {
            const [key, cartItem] = item;
            const currentCountInCart = cartItem.count;
            if (orderEditItemsObj[key]) {
                console.log('current cart item is in the order edit');
                const orderEdit = orderEditItemsObj[key];
                const originalCount = orderEdit.originalCount || 0;
                const updatedOrderEditCount = orderEdit.count;
                const resultantCount = updatedOrderEditCount + currentCountInCart;
                console.log('result count', resultantCount);
                if (resultantCount <= 0) {
                    // this condition is equivalent to deleting the time.
                    const resultantCartItem = {
                        amount: (0, exports.getCartItemTotalFromVariantAndModifiers)(cartItem),
                        cartItemType: types_1.CartItemType.DELETE,
                        count: resultantCount,
                        key: key,
                        message: '0',
                        name: (0, exports.getCartItemNameFromVariant)(cartItem),
                        originalCount: originalCount,
                        product: cartItem.product,
                        modifiers: cartItem.modifiers,
                        variant: cartItem.variant,
                        sortOrder: cartItem.sortOrder || 0,
                    };
                    resultantCartItemsArray.push(resultantCartItem);
                    delete orderEditItemsObj[key];
                }
                else {
                    // this is a new item which is adding.
                    const resultantCartItem = {
                        amount: (0, exports.getCartItemTotalFromVariantAndModifiers)(cartItem),
                        cartItemType: types_1.CartItemType.NEW,
                        count: resultantCount,
                        key: key,
                        message: `${resultantCount}`,
                        name: (0, exports.getCartItemNameFromVariant)(cartItem),
                        originalCount: originalCount,
                        product: cartItem.product,
                        modifiers: cartItem.modifiers,
                        variant: cartItem.variant,
                        sortOrder: cartItem.sortOrder || 0,
                    };
                    resultantCartItemsArray.push(resultantCartItem);
                }
                // else {
                //   // this means negative resultant. item is edited from one count to other.
                //   const resultantCartItem: ResultantCartItem = {
                //     amount: getCartItemTotalFromVariantAndModifiers(cartItem),
                //     cartItemType: CartItemType.EDIT,
                //     count: resultantCount,
                //     key: key,
                //     message: 'Edited an Item',
                //     name: getCartItemNameFromVariant(cartItem),
                //     originalCount: originalCount,
                //     product: cartItem.product,
                //     modifiers: cartItem.modifiers,
                //     variant: cartItem.variant,
                //   };
                //   resultantCartItemsArray.push(resultantCartItem);
                // }
            }
            else {
                console.log('only cartitems have items');
                const resultantCartItem = {
                    amount: (0, exports.getCartItemTotalFromVariantAndModifiers)(cartItem),
                    cartItemType: types_1.CartItemType.NEW,
                    count: cartItem.count,
                    key: key,
                    message: `${cartItem.count}`,
                    name: (0, exports.getCartItemNameFromVariant)(cartItem),
                    originalCount: cartItem.count,
                    product: cartItem.product,
                    modifiers: cartItem.modifiers,
                    variant: cartItem.variant,
                    sortOrder: cartItem.sortOrder || 0,
                    note: cartItem.note ?? '',
                };
                console.log('only cartitem resultand', resultantCartItem);
                resultantCartItemsArray.push(resultantCartItem);
            }
        });
    }
    if (orderItemEdits.length) {
        console.log('only order edit has items');
        Object.entries(orderEditItemsObj).map((item) => {
            const [key, orderItemEditItem] = item;
            console.log('edit item when reached here', orderItemEditItem);
            const finalCount = orderItemEditItem.originalCount + orderItemEditItem.count;
            console.log('final count', finalCount);
            let resultantCartItem = {
                amount: orderItemEditItem.orderItem.amount || 0,
                cartItemType: types_1.CartItemType.NEW,
                count: orderItemEditItem.count,
                key: key,
                message: `${orderItemEditItem.originalCount}->${orderItemEditItem.count} `,
                name: orderItemEditItem.orderItem.name || 'No name',
                originalCount: orderItemEditItem.originalCount,
                product: orderItemEditItem.orderItem.product,
                modifiers: orderItemEditItem.orderItem.modifiers,
                sortOrder: 0,
            };
            if (finalCount > orderItemEditItem.orderItem.count) {
                // add a new item.
                resultantCartItem = {
                    ...resultantCartItem,
                    cartItemType: types_1.CartItemType.NEW,
                    message: `${orderItemEditItem.count}`,
                };
            }
            else if (finalCount <= 0) {
                // item deleted.
                resultantCartItem = {
                    ...resultantCartItem,
                    cartItemType: types_1.CartItemType.DELETE,
                    message: `${orderItemEditItem.orderItem.count}-0`,
                };
            }
            else {
                // item counted edit to a less value.
                resultantCartItem = {
                    ...resultantCartItem,
                    count: orderItemEditItem.count,
                    cartItemType: types_1.CartItemType.EDIT,
                    message: `${orderItemEditItem.originalCount}-${finalCount}`,
                };
            }
            // const resultantCartItem: ResultantCartItem = {
            //   amount: orderItemEditItem.orderItem.amount || 0,
            //   cartItemType: finalCount <= 0? CartItemType.DELETE : CartItemType.EDIT,
            //   count: orderItemEditItem.count,
            //   key: key,
            //   message: `${orderItemEditItem.orderItem.count}->${orderItemEditItem.count} `,
            //   name: orderItemEditItem.orderItem.name || 'No name',
            //   originalCount: orderItemEditItem.orderItem.count,
            //   product: orderItemEditItem.orderItem.product!,
            //   modifiers: orderItemEditItem.orderItem.modifiers!,
            // };
            resultantCartItemsArray.push(resultantCartItem);
        });
    }
    console.log('resultatn', resultantCartItemsArray);
    return resultantCartItemsArray.sort((a, b) => a.sortOrder - b.sortOrder);
};
exports.getResultantCartItems = getResultantCartItems;


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(48), exports);
tslib_1.__exportStar(__webpack_require__(49), exports);


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.commonTypes = commonTypes;
function commonTypes() {
    return 'common-types';
}


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(50), exports);
tslib_1.__exportStar(__webpack_require__(51), exports);
tslib_1.__exportStar(__webpack_require__(52), exports);
tslib_1.__exportStar(__webpack_require__(53), exports);
tslib_1.__exportStar(__webpack_require__(54), exports);
tslib_1.__exportStar(__webpack_require__(55), exports);
tslib_1.__exportStar(__webpack_require__(56), exports);
tslib_1.__exportStar(__webpack_require__(57), exports);
tslib_1.__exportStar(__webpack_require__(58), exports);
tslib_1.__exportStar(__webpack_require__(59), exports);
tslib_1.__exportStar(__webpack_require__(60), exports);
tslib_1.__exportStar(__webpack_require__(61), exports);
tslib_1.__exportStar(__webpack_require__(62), exports);
tslib_1.__exportStar(__webpack_require__(63), exports);
tslib_1.__exportStar(__webpack_require__(64), exports);
tslib_1.__exportStar(__webpack_require__(65), exports);
tslib_1.__exportStar(__webpack_require__(66), exports);
tslib_1.__exportStar(__webpack_require__(67), exports);
tslib_1.__exportStar(__webpack_require__(68), exports);
tslib_1.__exportStar(__webpack_require__(69), exports);
tslib_1.__exportStar(__webpack_require__(70), exports);
tslib_1.__exportStar(__webpack_require__(71), exports);
tslib_1.__exportStar(__webpack_require__(72), exports);
tslib_1.__exportStar(__webpack_require__(73), exports);
tslib_1.__exportStar(__webpack_require__(74), exports);
tslib_1.__exportStar(__webpack_require__(75), exports);


/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CartItemType = void 0;
var CartItemType;
(function (CartItemType) {
    CartItemType["NEW"] = "N";
    CartItemType["EDIT"] = "E";
    CartItemType["DELETE"] = "D";
})(CartItemType || (exports.CartItemType = CartItemType = {}));


/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserType = void 0;
var UserType;
(function (UserType) {
    UserType["ADMIN"] = "admin";
    UserType["ONLINE"] = "online";
    UserType["TABLE"] = "table";
    UserType["STAFF"] = "staff";
    UserType["TAKEAWAY"] = "takeaway";
    UserType["HOMEDELIVERY"] = "homedelivery";
})(UserType || (exports.UserType = UserType = {}));


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CompanyShortcutTypes = void 0;
var CompanyShortcutTypes;
(function (CompanyShortcutTypes) {
    CompanyShortcutTypes["PRODUCTSHORTCUTS"] = "productshortctus";
    CompanyShortcutTypes["CUSTOMERSHORTCUTS"] = "customershortcuts";
})(CompanyShortcutTypes || (exports.CompanyShortcutTypes = CompanyShortcutTypes = {}));


/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentStatus = exports.OrderItemType = exports.OrderStatus = exports.OrderItemStatus = exports.OrderType = void 0;
// export interface AppliedTax {
//   name: string;
//   taxValue: number;
// }
var OrderType;
(function (OrderType) {
    OrderType["TABLE"] = "table";
    OrderType["TAKEAWAY"] = "takeaway";
    OrderType["HOMEDELIVERY"] = "homedelivery";
})(OrderType || (exports.OrderType = OrderType = {}));
var OrderItemStatus;
(function (OrderItemStatus) {
    OrderItemStatus["READY"] = "ready";
    OrderItemStatus["INPROGRESS"] = "inprogress";
    OrderItemStatus["WAITING"] = "waiting";
})(OrderItemStatus || (exports.OrderItemStatus = OrderItemStatus = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PLACED"] = "placed";
    OrderStatus["INPROGRESS"] = "inprogress";
    OrderStatus["READY"] = "ready";
    OrderStatus["SERVED"] = "served";
    OrderStatus["DELIVERED"] = "delivered";
    OrderStatus["PAID"] = "paid";
    OrderStatus["CANCELLED"] = "cancelled";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
var OrderItemType;
(function (OrderItemType) {
    OrderItemType["NEW"] = "new";
    OrderItemType["RUNNING"] = "running";
})(OrderItemType || (exports.OrderItemType = OrderItemType = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PAID"] = "paid";
    PaymentStatus["NOTPAID"] = "notpaid";
    PaymentStatus["CREDIT"] = "credit";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionStatus = void 0;
var SessionStatus;
(function (SessionStatus) {
    SessionStatus["ACTIVE"] = "active";
    SessionStatus["CLOSE"] = "closed";
})(SessionStatus || (exports.SessionStatus = SessionStatus = {}));


/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KotStatus = void 0;
var KotStatus;
(function (KotStatus) {
    KotStatus["INPROGRESS"] = "inprogress";
    KotStatus["READY"] = "ready";
    KotStatus["SERVED"] = "served";
})(KotStatus || (exports.KotStatus = KotStatus = {}));


/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 74 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 75 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 76 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PDFService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const fs_1 = __webpack_require__(77);
const hbs_1 = __webpack_require__(78);
const path_1 = __webpack_require__(79);
const puppeteer_1 = __webpack_require__(80);
const print_service_1 = __webpack_require__(81);
let PDFService = class PDFService {
    constructor(printService) {
        this.printService = printService;
    }
    async printReceipt(receiptData, printerName) {
        const relativePath = (0, path_1.resolve)(__dirname, 'views');
        // console.log('relative path', relativePath);
        // console.log(join(relativePath, 'receipt.html'));
        const templateHtml = (0, fs_1.readFileSync)((0, path_1.join)(relativePath, 'receipt.html'), 'utf8');
        const template = hbs_1.handlebars.compile(templateHtml);
        const html = template(receiptData);
        const pdfOptions = this.getPdfOptions('pdf', 'receipt');
        await this.savePdf(html, pdfOptions);
        await this.printService.printPdfAtPath(pdfOptions.path, printerName);
        this.deletePdf(pdfOptions.path);
        return;
    }
    async samplebill() {
        const relativePath = (0, path_1.resolve)(__dirname, 'views');
        const templateHtml = (0, fs_1.readFileSync)((0, path_1.join)(relativePath, 'receipt copy.html'), 'utf8');
        const template = hbs_1.handlebars.compile(templateHtml);
        const html = template({});
        const pdfOptions = this.getPdfOptions('pdf', 'receipt');
        await this.savePdf(html, pdfOptions);
        // await this.printService.printPdfAtPath(pdfOptions.path!, 'CP-Q2');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async printKot(kotData) {
        const html = this.createKotHtml('KOT.html', kotData);
        const pdfOptions = this.getPdfOptions('pdf', 'kot');
        await this.savePdf(html, pdfOptions);
        await this.printService.printPdfAtPath(pdfOptions.path, kotData.printer);
        await this.deletePdf(pdfOptions.path);
    }
    createKotHtml(templateName, kotData) {
        // const relativePath = resolve(__dirname, '../src/views');
        const relativePath = (0, path_1.resolve)(__dirname, 'views');
        // console.log('relative path', relativePath);
        // console.log(join(relativePath, templateName));
        const templateHtml = (0, fs_1.readFileSync)((0, path_1.join)(relativePath, templateName), 'utf8');
        const template = hbs_1.handlebars.compile(templateHtml);
        const html = template(kotData);
        return html;
    }
    getPdfOptions(folderName, name) {
        const miliss = new Date();
        const milis = miliss.getTime();
        // [TODO]: for pkg to work need to replace _dirname with  path.dirname(process.execPath),
        const relativePath = (0, path_1.resolve)(__dirname, '../../../../pdf');
        // const pdfPath = join('pdf', `${name}-${milis}.pdf`);
        const pdfPath = (0, path_1.join)(relativePath, `${name}-${milis}.pdf`);
        // console.log('pdf path', pdfPath);
        const options = {
            width: '270',
            headerTemplate: '<p>header jafar</p>',
            footerTemplate: '<p>footer jafar</p>',
            displayHeaderFooter: true,
            margin: {
                top: '0px',
                bottom: '10px',
                left: '15px', //19 Mar 2024 - adding this line to support kerala darbar print margin
            },
            printBackground: false,
            path: pdfPath,
        };
        return options;
    }
    // NOTE: the puppeteer excecutable path need to be added. added to get th pkg .exe output to find the puppeteer. you can remove it later.
    async savePdf(html, options) {
        const browser = await (0, puppeteer_1.launch)({
            args: [
                '--no-sandbox',
                '--disable-features=IsolateOrigins',
                '--disable-site-isolation-trials',
                '--autoplay-policy=user-gesture-required',
                '--disable-background-networking',
                '--disable-background-timer-throttling',
                '--disable-backgrounding-occluded-windows',
                '--disable-breakpad',
                '--disable-client-side-phishing-detection',
                '--disable-component-update',
                '--disable-default-apps',
                '--disable-dev-shm-usage',
                '--disable-domain-reliability',
                '--disable-extensions',
                '--disable-features=AudioServiceOutOfProcess',
                '--disable-hang-monitor',
                '--disable-ipc-flooding-protection',
                '--disable-notifications',
                '--disable-offer-store-unmasked-wallet-cards',
                '--disable-popup-blocking',
                '--disable-print-preview',
                '--disable-prompt-on-repost',
                '--disable-renderer-backgrounding',
                '--disable-setuid-sandbox',
                '--disable-speech-api',
                '--disable-sync',
                '--hide-scrollbars',
                '--ignore-gpu-blacklist',
                '--metrics-recording-only',
                '--mute-audio',
                '--no-default-browser-check',
                '--no-first-run',
                '--no-pings',
                '--no-zygote',
                '--password-store=basic',
                '--use-gl=swiftshader',
                '--use-mock-keychain',
            ],
            headless: 'shell',
        });
        const page = await browser.newPage();
        // await page.goto(`data:text/html;charset=UTF-8,${html}`, {
        //   waitUntil: 'networkidle0',
        // });
        await page.setContent(html, {
            waitUntil: ['domcontentloaded', 'load', 'networkidle0'],
        });
        const height = await page.evaluate(() => document.documentElement.offsetHeight);
        // console.log('page goto method..', await page.content());
        // height auto was the right fix for the page cut of pdf
        // generated for longer bill.
        // printbackground true option is for getting div background printed
        const extrapaddedHeight = height + 100;
        await page.pdf({
            ...options,
            height: extrapaddedHeight + 'px',
            printBackground: true,
        });
        await browser.close();
    }
    async deletePdf(path) {
        (0, fs_1.unlink)(path, () => {
            console.log('file has been delete from : ', path);
        });
    }
};
exports.PDFService = PDFService;
exports.PDFService = PDFService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof print_service_1.PrintService !== "undefined" && print_service_1.PrintService) === "function" ? _a : Object])
], PDFService);


/***/ }),
/* 77 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 78 */
/***/ ((module) => {

module.exports = require("hbs");

/***/ }),
/* 79 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 80 */
/***/ ((module) => {

module.exports = require("puppeteer");

/***/ }),
/* 81 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrintService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const path_1 = __webpack_require__(79);
const pdf_to_printer_1 = __webpack_require__(82);
let PrintService = class PrintService {
    async printPdfAtPath(pPath, printerName) {
        try {
            // awaiting printer will make the progress stop
            // until printer comes back online in the case of printer being offline.
            // to give enough time to read the pdf before it gets deleted.. adding an artifical delay
            // NOTE: to make pkg to work as .exe __dirname should be replaced with path.dirname(process.execPath)
            const result = await this.printDoc((0, pdf_to_printer_1.print)((0, path_1.resolve)(__dirname, pPath), {
                printer: printerName, //'CP-Q2',
                scale: 'noscale',
            }), 3000);
            // await print(resolve(__dirname, path), {
            //   printer: printerName, //'CP-Q2',
            // });
            return result;
        }
        catch (error) {
            console.log(error);
        }
    }
    async printDoc(asyncPromise, timeLimit) {
        let timeoutHandle;
        const timeoutPromise = new Promise((_resolve, reject) => {
            timeoutHandle = setTimeout(() => reject(new Error('Async call timeout limit reached')), timeLimit);
        });
        return Promise.race([asyncPromise, timeoutPromise]).then((result) => {
            clearTimeout(timeoutHandle);
            return result;
        });
    }
};
exports.PrintService = PrintService;
exports.PrintService = PrintService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], PrintService);


/***/ }),
/* 82 */
/***/ ((module) => {

module.exports = require("pdf-to-printer");

/***/ }),
/* 83 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(84), exports);
tslib_1.__exportStar(__webpack_require__(85), exports);


/***/ }),
/* 84 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiCommonModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const puppeteer_service_1 = __webpack_require__(85);
const config_1 = __webpack_require__(87);
let ApiCommonModule = class ApiCommonModule {
};
exports.ApiCommonModule = ApiCommonModule;
exports.ApiCommonModule = ApiCommonModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        imports: [config_1.ConfigModule],
        providers: [
            puppeteer_service_1.PuppeteerService,
            {
                provide: 'IS_ORDER_APP_THERMAL_OK',
                useFactory: (configService) => {
                    const thermalSetup = {
                        shouldUseThermalPrinter: configService.get('order_app_thermal') === 'OK',
                        printerBeepOption1: configService.get('thermal_beep_count_option1') ?? 1,
                        printerBeepOption2: configService.get('thermal_beep_count_option1') ?? 1,
                    };
                    return thermalSetup;
                },
                inject: [config_1.ConfigService],
            },
        ],
        exports: [
            puppeteer_service_1.PuppeteerService,
            'IS_ORDER_APP_THERMAL_OK', // Export the factory provider
        ],
    })
], ApiCommonModule);


/***/ }),
/* 85 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PuppeteerService = void 0;
const tslib_1 = __webpack_require__(4);
const puppeteer_util_1 = __webpack_require__(86);
const common_1 = __webpack_require__(1);
let PuppeteerService = class PuppeteerService {
    async getReportPdfStream(reportName, templatefolderName, outputFolderName, htmlName, inputData) {
        // setup the html page.
        const html = (0, puppeteer_util_1.createHtmlDoc)(htmlName, inputData, templatefolderName);
        // setup pdf options.
        const pdfOptions = (0, puppeteer_util_1.getPdfOptionsForReciept)(outputFolderName, reportName);
        return this.getPdfStream(html, pdfOptions);
    }
    async getPdfStream(html, options) {
        const browser = await (0, puppeteer_util_1.createBrowser)();
        const page = await (0, puppeteer_util_1.setupHtmlPage)(html, browser);
        const extrapaddedHeight = await (0, puppeteer_util_1.getPaddedDocHeight)(100, page);
        // to get only the buffer delete path from the pdfoptions\
        const udpatedPdfOptions = {
            ...options,
            height: extrapaddedHeight + 'px',
            printBackground: true,
        };
        delete udpatedPdfOptions['path'];
        const pdfBuffer = await page.pdf(udpatedPdfOptions);
        await browser.close();
        return pdfBuffer;
    }
    async savePdf(html, options) {
        const browser = await (0, puppeteer_util_1.createBrowser)();
        const page = await (0, puppeteer_util_1.setupHtmlPage)(html, browser);
        const extrapaddedHeight = (0, puppeteer_util_1.getPaddedDocHeight)(100, page);
        await page.pdf({ ...options, height: extrapaddedHeight + 'px' });
        await browser.close();
    }
    getPdfOptions(folderName, name) {
        return (0, puppeteer_util_1.getPdfOptionsForReciept)(folderName, name);
    }
};
exports.PuppeteerService = PuppeteerService;
exports.PuppeteerService = PuppeteerService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], PuppeteerService);


/***/ }),
/* 86 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPaddedDocHeight = exports.setupHtmlPage = exports.createBrowser = exports.createHtmlDoc = exports.createPdfPath = exports.getPdfOptionsForReciept = exports.deletePdf = void 0;
const fs_1 = __webpack_require__(77);
const path_1 = __webpack_require__(79);
const puppeteer_1 = __webpack_require__(80);
const hbs_1 = __webpack_require__(78);
const deletePdf = (path) => {
    (0, fs_1.unlink)(path, () => {
        console.log('file has been delete from : ', path);
    });
};
exports.deletePdf = deletePdf;
const getPdfOptionsForReciept = (folderName, name) => {
    const pdfPath = (0, exports.createPdfPath)(folderName, name);
    const options = {
        width: '270',
        headerTemplate: '<p>header jafar</p>',
        footerTemplate: '<p>footer jafar</p>',
        displayHeaderFooter: true,
        margin: {
            top: '0px',
            bottom: '10px',
        },
        printBackground: false,
        path: pdfPath,
    };
    return options;
};
exports.getPdfOptionsForReciept = getPdfOptionsForReciept;
const createPdfPath = (folderName, name) => {
    const miliss = new Date();
    const folder = folderName ? folderName : 'pdf';
    const milis = miliss.getTime();
    const relativePath = (0, path_1.resolve)(__dirname, `../../../../${folder}`);
    const pdfPath = (0, path_1.join)(relativePath, `${name}-${milis}.pdf`);
    return pdfPath;
};
exports.createPdfPath = createPdfPath;
const createHtmlDoc = (templateName, inputData, templateFolder) => {
    const templateFolderName = templateFolder ? templateFolder : 'views';
    const relativePath = (0, path_1.resolve)(__dirname, templateFolderName);
    console.log((0, path_1.join)(relativePath, templateName));
    const templateHtml = (0, fs_1.readFileSync)((0, path_1.join)(relativePath, templateName), 'utf8');
    const template = hbs_1.handlebars.compile(templateHtml);
    if (inputData)
        return template(inputData);
    return template({});
};
exports.createHtmlDoc = createHtmlDoc;
const createBrowser = async () => {
    const browser = await (0, puppeteer_1.launch)({
        args: [
            '--no-sandbox',
            '--disable-features=IsolateOrigins',
            '--disable-site-isolation-trials',
            '--autoplay-policy=user-gesture-required',
            '--disable-background-networking',
            '--disable-background-timer-throttling',
            '--disable-backgrounding-occluded-windows',
            '--disable-breakpad',
            '--disable-client-side-phishing-detection',
            '--disable-component-update',
            '--disable-default-apps',
            '--disable-dev-shm-usage',
            '--disable-domain-reliability',
            '--disable-extensions',
            '--disable-features=AudioServiceOutOfProcess',
            '--disable-hang-monitor',
            '--disable-ipc-flooding-protection',
            '--disable-notifications',
            '--disable-offer-store-unmasked-wallet-cards',
            '--disable-popup-blocking',
            '--disable-print-preview',
            '--disable-prompt-on-repost',
            '--disable-renderer-backgrounding',
            '--disable-setuid-sandbox',
            '--disable-speech-api',
            '--disable-sync',
            '--hide-scrollbars',
            '--ignore-gpu-blacklist',
            '--metrics-recording-only',
            '--mute-audio',
            '--no-default-browser-check',
            '--no-first-run',
            '--no-pings',
            '--no-zygote',
            '--password-store=basic',
            '--use-gl=swiftshader',
            '--use-mock-keychain',
        ],
        headless: 'shell',
    });
    return browser;
};
exports.createBrowser = createBrowser;
const setupHtmlPage = async (html, browser) => {
    const page = await browser.newPage();
    // await page.goto(`data:text/html;charset=UTF-8,${html}`, {
    //   waitUntil: 'networkidle0',
    // });
    await page.setContent(html, {
        waitUntil: ['domcontentloaded', 'load', 'networkidle0'],
    });
    return page;
};
exports.setupHtmlPage = setupHtmlPage;
const getPaddedDocHeight = async (padding, page) => {
    const height = await page.evaluate(() => document.documentElement.offsetHeight);
    // console.log('page goto method..', await page.content());
    // height auto was the right fix for the page cut of pdf
    // generated for longer bill.
    const extrapaddedHeight = height + padding;
    return extrapaddedHeight;
};
exports.getPaddedDocHeight = getPaddedDocHeight;


/***/ }),
/* 87 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 88 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThermalPrintService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(83);
const common_2 = __webpack_require__(1);
const node_thermal_printer_1 = __webpack_require__(89);
let ThermalPrintService = class ThermalPrintService {
    constructor(thermalPrintConfig) {
        this.thermalPrintConfig = thermalPrintConfig;
        console.log('isOrderAppThermalOK', this.thermalPrintConfig);
        // this.printBill({}, '\\\\DESKTOP-2BRSEVD\\sharedthermal');
    }
    setupTheNodeThermalPrinter(printerName) {
        // printerName = '\\\\DESKTOP-2BRSEVD\\sharedthermal';
        // console.log('printer name', printerName);
        const thermalPrinter = new node_thermal_printer_1.ThermalPrinter({
            // type: PrinterTypes.STAR,
            interface: printerName,
            characterSet: node_thermal_printer_1.CharacterSet.SLOVENIA,
            removeSpecialCharacters: false,
            lineCharacter: '-',
            width: 48,
            breakLine: node_thermal_printer_1.BreakLine.WORD,
            options: {
                timeout: 5000,
            },
        });
        return thermalPrinter;
    }
    printKot(data) {
        try {
            const printerName = data.printer;
            const thermalPrinter = this.setupTheNodeThermalPrinter(printerName);
            this.setupKotHeader(thermalPrinter, data);
            this.setupKotItemTableHeader(thermalPrinter);
            thermalPrinter.drawLine();
            this.setupKotItemsList(thermalPrinter, data);
            this.setupKotSummary(thermalPrinter, data);
            this.setupKotTypeIndicator(thermalPrinter, data);
            this.setupKotNote(thermalPrinter, data);
            const beepcount = parseInt(this.thermalPrintConfig['printerBeepOption2']);
            thermalPrinter.beep(beepcount);
            thermalPrinter.cut();
            thermalPrinter
                .execute()
                .then(() => {
                console.log('Print job executed successfully.');
            })
                .catch((error) => {
                console.error('Error executing print job:', error);
            });
        }
        catch (error) {
            console.log('Error on printing KOT....!');
        }
    }
    setupKotHeader(printer, data) {
        printer.setTextDoubleWidth();
        printer.alignCenter();
        if (data.isRunningOrder) {
            printer.println('RUNNING');
        }
        printer.println(`${data.kotType} - ${data.ticketId}`);
        printer.setTextNormal();
        printer.bold(true);
        printer.println(data.kitchenName);
        printer.bold(false);
        printer.println(data.billDate);
        printer.bold(true);
        printer.println(`${data.orderNumber} - ${data.waiterName}`);
        printer.bold(false);
        printer.println(`${data.createdForFirstName} - ${data.createdForSecondName}`);
    }
    printBill(data, printerName) {
        try {
            // [NOTE] : node thermal printer needs 'printer' package to pull the windows
            // printer driver to send the raw to the installed printer, but printer package is
            // so outdated, temporary soluction is share the printer over network and user hte
            // sharedname to send the print job by nodethermal printer package.
            // printerName = '\\\\DESKTOP-2BRSEVD\\sharedthermal';
            const thermalPrinter = this.setupTheNodeThermalPrinter(printerName);
            this.setupBillHeader(thermalPrinter, data);
            this.setupBillInfo(thermalPrinter, data);
            this.setupItemTableHeader(thermalPrinter);
            this.setupItemsList(thermalPrinter, data);
            this.setupTotalSummary(thermalPrinter, data);
            this.setupTaxesApplied(thermalPrinter, data);
            this.setupDicoundSummary(thermalPrinter, data);
            this.setupFooter(thermalPrinter);
            thermalPrinter.cut();
            const beepcount = parseInt(this.thermalPrintConfig['printerBeepOption1']);
            thermalPrinter.beep(beepcount);
            thermalPrinter
                .execute()
                .then(() => {
                console.log('Print job executed successfully.');
            })
                .catch((error) => {
                console.error('Error executing print job:', error);
            });
        }
        catch (error) {
            console.log('Error on printing bill');
        }
    }
    setupBillHeader(printer, data) {
        // ===== RECEIPT HEADER =====
        printer.alignCenter();
        printer.bold(true);
        printer.println(data.companyName);
        printer.setTextNormal();
        printer.println(data.address);
        printer.println(`${data.billType} : ${data.orderNumber}`);
        printer.println(data.billDateTime);
        printer.drawLine();
    }
    setupBillInfo(printer, data) {
        // // ===== ORDER INFO =====
        printer.alignLeft();
        const customerLastName = data.lastName ? `- ${data.lastName}` : '';
        printer.println(`Customer: ${data.customerName}${customerLastName}`.padEnd(30));
        printer.println(`Waiter: ${data.waiterName.padEnd(30)}`);
        if (data.isHomeDelivery) {
            printer.println(`Delivered By:: ${data.homeDeliveryUserName}`);
        }
        printer.drawLine();
        // printer.alignLeft();
        // printer.println(`Order #: ${'ORD-2023-001234'.padEnd(30)}`);
        // printer.println(`Date:    ${new Date().toLocaleString()}`);
        // printer.println(`Cashier: ${'John Doe'.padEnd(30)}`);
        // printer.println(`Customer:${'Walk-in Customer'.padEnd(30)}`);
        // printer.drawLine();
    }
    setupItemTableHeader(printer) {
        // // Table header
        printer.bold(true);
        printer.tableCustom([
            { text: 'Item', align: 'LEFT', width: 0.5 },
            { text: 'Qty', align: 'CENTER', width: 0.1 },
            { text: 'Price', align: 'RIGHT', width: 0.2 },
            { text: 'Total', align: 'CENTER', width: 0.2 },
        ]);
    }
    setupItemsList(printer, data) {
        printer.bold(false);
        const items = data.orderItems || [];
        items.forEach((item) => {
            printer.tableCustom([
                { text: item.name, align: 'LEFT', width: 0.5 },
                { text: item.count, align: 'CENTER', width: 0.1 },
                { text: item.amount, align: 'RIGHT', width: 0.2 },
                { text: item.individualTotal, align: 'CENTER', width: 0.2 },
            ]);
        });
        printer.drawLine();
    }
    setupTotalSummary(printer, data) {
        // ===== TOTAL SUMMARY =====
        printer.bold(false);
        printer.tableCustom([
            { text: `Items: ${data.totalItems}`, align: 'LEFT', width: 0.5 },
            { text: `Quantity: ${data.totalCount}`, align: 'RIGHT', width: 0.5 },
        ]);
        printer.bold(true);
        printer.alignRight();
        printer.setTextDoubleWidth();
        printer.println(`Total : ${data.total}`);
        printer.setTextNormal();
    }
    setupTaxesApplied(printer, data) {
        printer.alignRight();
        const taxes = data.appliedTaxesInfo || [];
        taxes.forEach((item) => {
            printer.println(`${item.taxName} : ${item.value}`);
        });
        if (taxes.length > 0) {
            printer.println(`Net Amount : ${data.taxedTotal}`);
        }
    }
    setupDicoundSummary(printer, data) {
        printer.alignRight();
        printer.println(`Discount : ${data.discountApplied}`);
        printer.println(`To Pay : ${data.totalAfterDiscount}`);
    }
    setupFooter(printer) {
        printer.newLine();
        printer.newLine();
        printer.newLine();
        printer.alignCenter();
        printer.println('J&J Technologies Ltd.');
    }
    setupKotItemTableHeader(printer) {
        // // Table header
        printer.bold(true);
        printer.tableCustom([
            { text: 'Item', align: 'LEFT', width: 0.6 },
            { text: 'Qty', align: 'CENTER', width: 0.2 },
            { text: 'Type', align: 'CENTER', width: 0.2 },
        ]);
    }
    setupKotItemsList(printer, data) {
        printer.bold(false);
        printer.setTextNormal();
        const items = data.orderItems || [];
        items.forEach((item) => {
            printer.setTextDoubleHeight();
            printer.tableCustom([
                {
                    text: `${item.name} -(${item.amount})`,
                    align: 'LEFT',
                    width: 0.7,
                },
                { text: item.message, align: 'CENTER', width: 0.2 },
                { text: item.orderItemType, align: 'CENTER', width: 0.1 },
            ]);
            printer.bold(true);
            printer.alignLeft();
            // printer.setTypeFontA();
            printer.setTextNormal();
            if (item.modifiers) {
                printer.println(`Modifiers: ${item.modifiers}`);
            }
            if (item.note) {
                printer.println(`${item.note}`);
            }
            printer.bold(false);
            printer.drawLine();
        });
    }
    setupKotSummary(printer, data) {
        printer.alignCenter();
        printer.setTextNormal();
        printer.println(`Items: ${data.numberOfItems} -- Quantity:  ${data.quantity}`);
        printer.setTextDoubleWidth();
        printer.println(`New Items: ${data.kotTotalAmount}`);
    }
    setupKotNote(printer, data) {
        if (!data.kotNote)
            return;
        printer.alignCenter();
        printer.bold(true);
        printer.setTextDoubleWidth();
        printer.println(data.kotNote);
        printer.bold(false);
        printer.setTextNormal();
    }
    setupKotTypeIndicator(printer, data) {
        printer.alignCenter();
        printer.newLine();
        if (data.hasDeleteItems) {
            printer.underlineThick(true);
            printer.println('Item Removed');
        }
        if (data.hasEditItems) {
            printer.underline(true);
            printer.println('Items Edited');
        }
        printer.setTextNormal();
    }
};
exports.ThermalPrintService = ThermalPrintService;
exports.ThermalPrintService = ThermalPrintService = tslib_1.__decorate([
    (0, common_2.Injectable)(),
    tslib_1.__param(0, (0, common_2.Inject)('IS_ORDER_APP_THERMAL_OK')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof common_1.ThermalPrintOptions !== "undefined" && common_1.ThermalPrintOptions) === "function" ? _a : Object])
], ThermalPrintService);


/***/ }),
/* 89 */
/***/ ((module) => {

module.exports = require("node-thermal-printer");

/***/ }),
/* 90 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(91), exports);
tslib_1.__exportStar(__webpack_require__(94), exports);


/***/ }),
/* 91 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiFeatureCompanyController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const company_service_1 = __webpack_require__(92);
const company_update_dto_1 = __webpack_require__(93);
const types_1 = __webpack_require__(47);
let ApiFeatureCompanyController = class ApiFeatureCompanyController {
    constructor(companyService) {
        this.companyService = companyService;
    }
    getCompanyDetails() {
        // console.log('jafar get company ');
        return this.companyService.getCompanyDetails(1);
    }
    updateCompany(companyUpdateDto) {
        return this.companyService.updateCompany(companyUpdateDto);
    }
    getConnectedPrinters() {
        return this.companyService.getInstalledPrinters();
    }
    updateProductShortcuts(updateProductShortcuts, data) {
        // console.log('query data', data);
        const shortcutType = data.shortcutName;
        if (shortcutType == types_1.CompanyShortcutTypes.CUSTOMERSHORTCUTS ||
            shortcutType == types_1.CompanyShortcutTypes.PRODUCTSHORTCUTS) {
            return this.companyService.updateProductShortcuts(updateProductShortcuts, shortcutType);
        }
        throw Error('Query data does not match shortcut name');
    }
};
exports.ApiFeatureCompanyController = ApiFeatureCompanyController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ApiFeatureCompanyController.prototype, "getCompanyDetails", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof company_update_dto_1.UpdateCompanyDto !== "undefined" && company_update_dto_1.UpdateCompanyDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ApiFeatureCompanyController.prototype, "updateCompany", null);
tslib_1.__decorate([
    (0, common_1.Get)('printers'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ApiFeatureCompanyController.prototype, "getConnectedPrinters", null);
tslib_1.__decorate([
    (0, common_1.Patch)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Query)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof company_update_dto_1.UpdateProdcutShortcutsDto !== "undefined" && company_update_dto_1.UpdateProdcutShortcutsDto) === "function" ? _c : Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ApiFeatureCompanyController.prototype, "updateProductShortcuts", null);
exports.ApiFeatureCompanyController = ApiFeatureCompanyController = tslib_1.__decorate([
    (0, common_1.Controller)('company'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof company_service_1.CompanyService !== "undefined" && company_service_1.CompanyService) === "function" ? _a : Object])
], ApiFeatureCompanyController);


/***/ }),
/* 92 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CompanyService = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const common_1 = __webpack_require__(1);
const pdf_to_printer_1 = __webpack_require__(82);
const types_1 = __webpack_require__(47);
let CompanyService = class CompanyService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getCompanyDetails(id) {
        return await this.prismaService.company.findFirst({
            include: {
                taxes: true,
            },
        });
    }
    async updateCompany(updateCompanyDto) {
        // console.log(updateCompanyDto);
        return await this.prismaService.company.update({
            where: { id: updateCompanyDto.id },
            data: {
                ...updateCompanyDto,
                lastOrderNumber: +updateCompanyDto.lastOrderNumber,
                decimalZeros: +updateCompanyDto.decimalZeros,
            },
        });
    }
    async getInstalledPrinters() {
        try {
            // console.log('getting installed printers');
            const printers = await (0, pdf_to_printer_1.getPrinters)();
            // console.log('printer detais from ', printers);
            const mappedArr = printers.map((item) => ({
                name: item.name,
                printer: item.name,
            }));
            return mappedArr;
        }
        catch (error) {
            console.log('exception while getting priters list');
            console.log(error);
            throw new Error('Error on Getting installed printers');
        }
    }
    async updateProductShortcuts(updateProductShorcutdto, shortcutType) {
        try {
            const company = await this.prismaService.company.update({
                where: { id: updateProductShorcutdto.id },
                data: {
                    ...(shortcutType == types_1.CompanyShortcutTypes.PRODUCTSHORTCUTS && {
                        productShortcuts: updateProductShorcutdto.shortcuts,
                    }),
                    ...(shortcutType == types_1.CompanyShortcutTypes.CUSTOMERSHORTCUTS && {
                        customerShortcuts: updateProductShorcutdto.shortcuts,
                    }),
                },
            });
            return company.productShortcuts;
        }
        catch (error) {
            console.log(error);
            throw new Error('failed to update products shortcuts');
        }
    }
};
exports.CompanyService = CompanyService;
exports.CompanyService = CompanyService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_db_1.PrismaService !== "undefined" && data_access_db_1.PrismaService) === "function" ? _a : Object])
], CompanyService);


/***/ }),
/* 93 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProdcutShortcutsDto = exports.UpdateCompanyDto = void 0;
class UpdateCompanyDto {
}
exports.UpdateCompanyDto = UpdateCompanyDto;
class UpdateProdcutShortcutsDto {
}
exports.UpdateProdcutShortcutsDto = UpdateProdcutShortcutsDto;


/***/ }),
/* 94 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiFeatureCompanyModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const api_feature_company_controller_1 = __webpack_require__(91);
const company_service_1 = __webpack_require__(92);
const data_access_db_1 = __webpack_require__(7);
let ApiFeatureCompanyModule = class ApiFeatureCompanyModule {
};
exports.ApiFeatureCompanyModule = ApiFeatureCompanyModule;
exports.ApiFeatureCompanyModule = ApiFeatureCompanyModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [data_access_db_1.ApiDataAccessDbModule],
        controllers: [api_feature_company_controller_1.ApiFeatureCompanyController],
        providers: [company_service_1.CompanyService],
        exports: [],
    })
], ApiFeatureCompanyModule);


/***/ }),
/* 95 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(96), exports);


/***/ }),
/* 96 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiFeatureTableModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const table_controller_1 = __webpack_require__(97);
const table_service_1 = __webpack_require__(98);
const data_access_db_1 = __webpack_require__(7);
let ApiFeatureTableModule = class ApiFeatureTableModule {
};
exports.ApiFeatureTableModule = ApiFeatureTableModule;
exports.ApiFeatureTableModule = ApiFeatureTableModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [data_access_db_1.ApiDataAccessDbModule],
        controllers: [table_controller_1.TableController],
        providers: [table_service_1.TableService],
        exports: [],
    })
], ApiFeatureTableModule);


/***/ }),
/* 97 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const table_service_1 = __webpack_require__(98);
const create_table_dto_1 = __webpack_require__(99);
let TableController = class TableController {
    constructor(tableService) {
        this.tableService = tableService;
    }
    getTables() {
        return this.tableService.getTables();
    }
    createTable(params) {
        return this.tableService.createTable(params);
    }
    updateTable(body, id) {
        const tableId = +id;
        // console.log('table id', tableId);
        return this.tableService.udpateTable(tableId, body);
    }
};
exports.TableController = TableController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], TableController.prototype, "getTables", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_table_dto_1.CreateTableDto !== "undefined" && create_table_dto_1.CreateTableDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], TableController.prototype, "createTable", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof create_table_dto_1.CreateTableDto !== "undefined" && create_table_dto_1.CreateTableDto) === "function" ? _c : Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], TableController.prototype, "updateTable", null);
exports.TableController = TableController = tslib_1.__decorate([
    (0, common_1.Controller)('table'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof table_service_1.TableService !== "undefined" && table_service_1.TableService) === "function" ? _a : Object])
], TableController);


/***/ }),
/* 98 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableService = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const types_1 = __webpack_require__(47);
const common_1 = __webpack_require__(1);
let TableService = class TableService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getTables() {
        return await this.prismaService.table.findMany({
            include: {
                tableSeats: true,
                orders: {
                    where: {
                        orderStatus: { not: types_1.OrderStatus.CANCELLED },
                        paymentStatus: {
                            notIn: [types_1.PaymentStatus.CREDIT, types_1.PaymentStatus.PAID],
                        },
                    },
                    select: { id: true },
                },
            },
        });
    }
    formatData(data) {
        return {
            name: data.name,
            capacity: +data.capacity,
            floorId: +data.floorId,
        };
    }
    async createTable(data) {
        try {
            return await this.prismaService.table.create({
                data: this.formatData(data),
            });
        }
        catch (error) {
            throw new common_1.BadRequestException({ error: error });
        }
    }
    async udpateTable(id, data) {
        try {
            return this.prismaService.table.update({
                where: { id },
                data: this.formatData(data),
            });
        }
        catch (error) {
            throw new common_1.BadRequestException({ error: error });
        }
    }
};
exports.TableService = TableService;
exports.TableService = TableService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_db_1.PrismaService !== "undefined" && data_access_db_1.PrismaService) === "function" ? _a : Object])
], TableService);


/***/ }),
/* 99 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTableDto = void 0;
class CreateTableDto {
}
exports.CreateTableDto = CreateTableDto;


/***/ }),
/* 100 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(101), exports);


/***/ }),
/* 101 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiFeatureFloorModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const floor_controller_1 = __webpack_require__(102);
const floor_service_1 = __webpack_require__(103);
const data_access_db_1 = __webpack_require__(7);
let ApiFeatureFloorModule = class ApiFeatureFloorModule {
};
exports.ApiFeatureFloorModule = ApiFeatureFloorModule;
exports.ApiFeatureFloorModule = ApiFeatureFloorModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [data_access_db_1.ApiDataAccessDbModule],
        controllers: [floor_controller_1.FloorController],
        providers: [floor_service_1.FloorService],
        exports: [],
    })
], ApiFeatureFloorModule);


/***/ }),
/* 102 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FloorController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const floor_service_1 = __webpack_require__(103);
const create_floor_dto_1 = __webpack_require__(104);
let FloorController = class FloorController {
    constructor(floorService) {
        this.floorService = floorService;
    }
    getFloors() {
        return this.floorService.getFloors();
    }
    getFloorTables(params) {
        const id = +params.id;
        return this.floorService.getFloorTables(id);
    }
    createProduct(params) {
        return this.floorService.createFloor(params);
    }
    updateProduct(body, id) {
        const floorId = +id;
        // console.log('floor id', floorId);
        return this.floorService.editFloor(floorId, body);
    }
};
exports.FloorController = FloorController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], FloorController.prototype, "getFloors", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], FloorController.prototype, "getFloorTables", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_floor_dto_1.CreateFloorDto !== "undefined" && create_floor_dto_1.CreateFloorDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], FloorController.prototype, "createProduct", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof create_floor_dto_1.CreateFloorDto !== "undefined" && create_floor_dto_1.CreateFloorDto) === "function" ? _c : Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], FloorController.prototype, "updateProduct", null);
exports.FloorController = FloorController = tslib_1.__decorate([
    (0, common_1.Controller)('floor'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof floor_service_1.FloorService !== "undefined" && floor_service_1.FloorService) === "function" ? _a : Object])
], FloorController);


/***/ }),
/* 103 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FloorService = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const types_1 = __webpack_require__(47);
const common_1 = __webpack_require__(1);
let FloorService = class FloorService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getFloors() {
        return await this.prismaService.floor.findMany();
    }
    async getFloorTables(floorId) {
        return await this.prismaService.floor.findFirst({
            where: { id: floorId },
            select: {
                id: true,
                tables: {
                    include: {
                        orders: {
                            where: {
                                AND: [
                                    {
                                        orderStatus: {
                                            notIn: [types_1.OrderStatus.SERVED, types_1.OrderStatus.CANCELLED],
                                        },
                                    },
                                    { paymentStatus: types_1.PaymentStatus.NOTPAID },
                                ],
                            },
                            include: {
                                customer: true,
                            },
                        },
                    },
                    orderBy: { name: 'asc' },
                },
            },
        });
    }
    async createFloor(floor) {
        try {
            return await this.prismaService.floor.create({
                data: {
                    name: floor.name,
                },
            });
        }
        catch (error) {
            throw new Error('unable to create floor');
        }
    }
    async editFloor(id, floor) {
        try {
            return await this.prismaService.floor.update({
                where: { id },
                data: {
                    name: floor.name,
                },
            });
        }
        catch (error) {
            throw new Error('floor update failed');
        }
    }
};
exports.FloorService = FloorService;
exports.FloorService = FloorService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_db_1.PrismaService !== "undefined" && data_access_db_1.PrismaService) === "function" ? _a : Object])
], FloorService);


/***/ }),
/* 104 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateFloorDto = void 0;
class CreateFloorDto {
}
exports.CreateFloorDto = CreateFloorDto;


/***/ }),
/* 105 */
/***/ ((module) => {

module.exports = require("@nestjs/serve-static");

/***/ }),
/* 106 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(107), exports);


/***/ }),
/* 107 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiFeaturePosSessionModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const pos_session_controller_1 = __webpack_require__(108);
const session_service_1 = __webpack_require__(109);
const data_access_db_1 = __webpack_require__(7);
const feature_auth_1 = __webpack_require__(15);
const feature_stat_1 = __webpack_require__(111);
const common_2 = __webpack_require__(83);
const report_service_1 = __webpack_require__(110);
const feature_expense_1 = __webpack_require__(115);
const feature_license_1 = __webpack_require__(121);
let ApiFeaturePosSessionModule = class ApiFeaturePosSessionModule {
};
exports.ApiFeaturePosSessionModule = ApiFeaturePosSessionModule;
exports.ApiFeaturePosSessionModule = ApiFeaturePosSessionModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [pos_session_controller_1.PosSessionController],
        imports: [
            data_access_db_1.ApiDataAccessDbModule,
            feature_auth_1.ApiFeatureAuthModule,
            feature_stat_1.ApiFeatureStatModule,
            common_2.ApiCommonModule,
            feature_expense_1.FeatureExpenseModule,
            feature_license_1.FeatureLicenseModule,
        ],
        providers: [session_service_1.PosSessionService, report_service_1.SessionReportService],
        exports: [],
    })
], ApiFeaturePosSessionModule);


/***/ }),
/* 108 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PosSessionController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const session_service_1 = __webpack_require__(109);
const feature_auth_1 = __webpack_require__(15);
const report_service_1 = __webpack_require__(110);
const feature_license_1 = __webpack_require__(121);
let PosSessionController = class PosSessionController {
    constructor(sessionService, sessionReportService, licenseService) {
        this.sessionService = sessionService;
        this.sessionReportService = sessionReportService;
        this.licenseService = licenseService;
    }
    getSessionsOfTheDay(req) {
        // console.log('recent orders');
        const user = req.user;
        return this.sessionService.getSessions();
    }
    startAnewSession(req, data) {
        //[TODO] - have a license check here - when new session starts.
        this.licenseService.checkLicense();
        // console.log('recent orders');
        const user = req.user;
        const intialAmount = data.cash ? data.cash : 0;
        return this.sessionService.createSession(user, intialAmount);
        // removed by dead control flow

    }
    async endActiveSession(params, req
    // @Response({ passthrough: true }) res: any
    ) {
        //[TODO] - have a license check here - when new session ends.
        this.licenseService.checkLicense();
        // console.log('recent orders');
        const user = req.user;
        const sessionId = +params.id;
        const closedSession = await this.sessionService.closeSession(sessionId);
        return closedSession;
        // const result = await this.sessionReportService.downloadSessionReport(
        //   sessionId
        // );
        // res.set({
        //   'Content-Type': 'application/pdf',
        //   'Content-Disposition': `attachment; filename="${result!.reportName}.pdf`,
        // });
        // return new StreamableFile(result!.pdfStream);
    }
    // @UseGuards(JwtAuthGuard)
    async downloadSessionReport(req, Id, res) {
        const sessionId = +Id;
        // const user = req.user;se
        const result = await this.sessionReportService.downloadSessionReport(sessionId);
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="${result?.reportName}.pdf`,
        });
        return new common_1.StreamableFile(result.pdfStream);
    }
    async downloadHomedeliveryReportOfLastSession(req, Id, res) {
        const result = await this.sessionReportService.getHomedeliverySummaryOfLastSession();
        // const result = await this.sessionReportService.downloadSessionReport();
        // res.set({
        //   'Content-Type': 'application/pdf',
        //   'Content-Disposition': `attachment; filename="${result?.reportName}.pdf`,
        // });
        // return new StreamableFile(result!.pdfStream);
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="${result?.reportName}.pdf`,
        });
        return new common_1.StreamableFile(result.pdfStream);
    }
};
exports.PosSessionController = PosSessionController;
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Get)(),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], PosSessionController.prototype, "getSessionsOfTheDay", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], PosSessionController.prototype, "startAnewSession", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PosSessionController.prototype, "endActiveSession", null);
tslib_1.__decorate([
    (0, common_1.Get)('session/:id'),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__param(2, (0, common_1.Response)({ passthrough: true })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PosSessionController.prototype, "downloadSessionReport", null);
tslib_1.__decorate([
    (0, common_1.Get)('homedeliveryreport'),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__param(2, (0, common_1.Response)({ passthrough: true })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PosSessionController.prototype, "downloadHomedeliveryReportOfLastSession", null);
exports.PosSessionController = PosSessionController = tslib_1.__decorate([
    (0, common_1.Controller)('session'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof session_service_1.PosSessionService !== "undefined" && session_service_1.PosSessionService) === "function" ? _a : Object, typeof (_b = typeof report_service_1.SessionReportService !== "undefined" && report_service_1.SessionReportService) === "function" ? _b : Object, typeof (_c = typeof feature_license_1.LicenseService !== "undefined" && feature_license_1.LicenseService) === "function" ? _c : Object])
], PosSessionController);


/***/ }),
/* 109 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PosSessionService = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const types_1 = __webpack_require__(47);
const util_1 = __webpack_require__(43);
const common_1 = __webpack_require__(1);
let PosSessionService = class PosSessionService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async createSession(appUser, initialCash) {
        try {
            // check if there  is any active session.
            const activesession = await this.prismaService.posSession.findFirst({
                where: {
                    status: types_1.SessionStatus.ACTIVE,
                },
            });
            // if yes do not create one..
            if (activesession)
                return;
            // if no start a new one.
            await this.prismaService.posSession.create({
                data: {
                    status: types_1.SessionStatus.ACTIVE,
                    createdUserId: appUser.id,
                    initialCash: initialCash,
                },
            });
            // return all the sessions of the day.
            return this.getSessions();
        }
        catch (error) {
            console.log('error occured during creation of session');
            return new Error();
        }
    }
    async getSessions() {
        // console.log('start of the day', getStartOfTheDay());
        // chek any other open, close it forcefully.
        const sessions = await this.prismaService.posSession.findMany({
            where: {
                OR: [
                    {
                        status: types_1.SessionStatus.ACTIVE,
                    },
                    {
                        startTime: { gte: (0, util_1.getStartOfTheDay)() },
                    },
                ],
            },
        });
        return sessions;
    }
    async closeSession(sessionId) {
        // make sure all the sessions are closed.
        // check for non settled orders before close it.
        const activeSession = await this.prismaService.posSession.findUnique({
            where: { id: sessionId },
        });
        if (!activeSession)
            throw new common_1.NotFoundException('No active session');
        const activeSessionStartTime = activeSession.startTime;
        const nonPaidOrders = await this.prismaService.order.findMany({
            where: {
                paymentStatus: { notIn: [types_1.PaymentStatus.CREDIT, types_1.PaymentStatus.PAID] },
                orderStatus: { not: types_1.OrderStatus.CANCELLED },
                createdAt: { gte: activeSessionStartTime },
            },
        });
        // console.log('not paid users', nonPaidOrders.length);
        if (nonPaidOrders.length) {
            // console.log('hs gone inside');
            throw new common_1.InternalServerErrorException({
                message: `There are ${nonPaidOrders.length} orders which are not settled yet.`,
            });
        }
        // generate report and get it downloaded at the client.
        const closedSession = await this.prismaService.posSession.update({
            where: { id: sessionId },
            data: { status: types_1.SessionStatus.CLOSE, endTime: new Date() },
        });
        // console.log('cosed sessino ', closedSession);
        // // get orders from closed session start time..
        // const totalsOrders = await this.prismaService.order.findMany({
        //   where: { createdAt: { gte: closedSession.startTime } },
        // });
        return closedSession;
    }
};
exports.PosSessionService = PosSessionService;
exports.PosSessionService = PosSessionService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_db_1.PrismaService !== "undefined" && data_access_db_1.PrismaService) === "function" ? _a : Object])
], PosSessionService);


/***/ }),
/* 110 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionReportService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(83);
const data_access_db_1 = __webpack_require__(7);
const feature_stat_1 = __webpack_require__(111);
const types_1 = __webpack_require__(47);
const util_1 = __webpack_require__(43);
const common_2 = __webpack_require__(1);
const feature_expense_1 = __webpack_require__(115);
let SessionReportService = class SessionReportService {
    constructor(prismaService, statService, expenseService, pupeteerService) {
        this.prismaService = prismaService;
        this.statService = statService;
        this.expenseService = expenseService;
        this.pupeteerService = pupeteerService;
    }
    async downloadSessionReport(sessionId) {
        try {
            // get the start and end date of the session Id.
            const session = await this.getSessionDetails(sessionId);
            // get company taxes.
            const company = await this.prismaService.company.findFirst({
                include: { taxes: true },
            });
            if (!company)
                throw new common_2.NotFoundException({}, 'Company Data Could not be read.');
            const taxes = company.taxes;
            console.log('creating pdf for the session status of ', sessionId);
            if (!session)
                throw new common_2.NotFoundException({}, 'No Session with the given ID');
            const startTime = session.startTime;
            const endTime = session.endTime;
            const initialCash = session.initialCash;
            const reportSummary = await this.statService.getReportStatsForThePeriod(startTime, endTime);
            const paymentBreakDownSummary = await this.statService.getPayementBreakDownForThePeriod(startTime, endTime);
            // [NOTE] : the below cash total separation is new which is added on May 3 2024 as
            // the payment break of cash/card/transfer. only cash is needed to consider for expenses and other total.
            // so cash is separating now. earlier it was taken from the order table but now payment and payment type table are considered.
            // order table payment type should be removed later
            let totalCashPaymentsRecieved = 0;
            const cashSaleFiltered = paymentBreakDownSummary.filter((item) => item.name == 'Cash');
            if (cashSaleFiltered.length) {
                totalCashPaymentsRecieved = cashSaleFiltered[0].total;
            }
            const prductSummary = await this.statService.getProductStatsForThePeriod(startTime, endTime);
            const staffCountSummary = await this.statService.getStaffCountStatsForThePeriod(startTime, endTime);
            const staffAmoutSummary = await this.statService.getStaffAmountStatsForThePeriod(startTime, endTime);
            // console.log('statff amount, ', staffAmoutSummary);
            const homeDeliveryCountSummary = await this.statService.getHomeDeliveryStatCountViceForThePeriod(startTime, endTime);
            // console.log('home delivery count', homeDeliveryCountSummary);
            const homeDeliveryAmoutSummary = await this.statService.getHomeDeliveryStatAmountViceForThePeriod(startTime, endTime);
            // console.log('homedevliery amount', homeDeliveryAmoutSummary);
            const formattedStartTime = (0, util_1.dateTimeToDateHHMM)(startTime);
            const formattedEndTime = (0, util_1.dateTimeToDateHHMM)(endTime);
            const currentDayOnlyDate = (0, util_1.getOnlyCurrentDateWithoutTime)();
            // console.log('product summary', prductSummary);
            const noOfDecimalPlaces = company?.decimalZeros
                ? company.decimalZeros
                : 3;
            const { ordersStatArr, totalOrderDetail, totalCashSale } = this.formatOrderStatV2(reportSummary, noOfDecimalPlaces);
            const { taxesApplied, taxedTotal } = (0, util_1.getAppliedTaxesAndTaxesTotal)(totalCashSale, taxes);
            const totalTaxCollected = taxedTotal - totalCashSale;
            // include expense
            const { expensePaidFromCash, totalExpense, filteredExpenseList } = await this.getExpenseDetails(noOfDecimalPlaces, startTime, endTime);
            // console.log('expense from cash', expensePaidFromCash);
            // console.log(typeof expensePaidFromCash);
            // console.log('initial cash', initialCash);
            // console.log('total cash revcei', totalCashPaymentsRecieved);
            // [Note] : totalcashpaymnet taken out from the db query is coming out as string which causing the addition result to be wrong.
            const totalCashInDrawer = initialCash +
                Number.parseFloat(totalCashPaymentsRecieved.toString()) -
                expensePaidFromCash;
            const htmlInputData = {
                taxesApplied,
                date: currentDayOnlyDate,
                startTime: formattedStartTime,
                endTime: formattedEndTime,
                initialCash: initialCash.toFixed(noOfDecimalPlaces),
                totalCashSale: Number.parseFloat(totalCashPaymentsRecieved.toString()).toFixed(noOfDecimalPlaces),
                paymentBreakDownArr: paymentBreakDownSummary.length
                    ? paymentBreakDownSummary.map((item) => ({
                        ...item,
                        total: item.total.toFixed(noOfDecimalPlaces),
                    }))
                    : [],
                totalExpense,
                filteredExpenseList,
                expensePaidFromCash: expensePaidFromCash.toFixed(noOfDecimalPlaces),
                totalCashInDrawer: totalCashInDrawer.toFixed(noOfDecimalPlaces),
                productStatArr: prductSummary,
                ordersStatArr,
                totalOrderDetail,
                totalTaxCollected: totalTaxCollected.toFixed(noOfDecimalPlaces),
                shouldTaxAndChargesDisplayed: totalTaxCollected > 0,
                stafCountStatArr: staffCountSummary.length ? staffCountSummary : [],
                stafAmoutStatArr: staffAmoutSummary.length
                    ? staffAmoutSummary.map((item) => ({
                        ...item,
                        totalusersalesum: item.totalusersalesum.toFixed(noOfDecimalPlaces),
                    }))
                    : [],
                homeDeliveryCountStatArr: homeDeliveryCountSummary.length
                    ? homeDeliveryCountSummary
                    : [],
                homeDeliveryAmoutStatArr: homeDeliveryAmoutSummary.length
                    ? homeDeliveryAmoutSummary.map((item) => ({
                        ...item,
                        totalusersalesum: item.totalusersalesum.toFixed(noOfDecimalPlaces),
                    }))
                    : [],
                paymentBreakDownSummary: paymentBreakDownSummary.length
                    ? paymentBreakDownSummary.map((item) => ({
                        ...item,
                        total: item.total.toFixed(noOfDecimalPlaces),
                    }))
                    : [],
            };
            const pdfStream = await this.pupeteerService.getReportPdfStream('sessionSummary', 'views', 'pdf', 'sessionEndsummary.report.html', htmlInputData);
            return {
                pdfStream,
                reportName: `session report - ${startTime} -- ${endTime}`,
            };
        }
        catch (error) {
            console.log(error);
            throw new common_2.BadGatewayException({ error });
        }
    }
    async getSessionDetails(sessionId) {
        return await this.prismaService.posSession.findUnique({
            where: { id: sessionId },
        });
    }
    formatOrderStat(orderStat, noOfDecimalPlaces) {
        let totalOrders = 0;
        let totalOrderSum = 0;
        let totalCashSale = 0;
        const mappedOrders = orderStat.map((item) => {
            let description = '';
            switch (item.paystat) {
                case types_1.PaymentStatus.CREDIT:
                    description = 'Credit Orders';
                    break;
                case types_1.PaymentStatus.PAID:
                    description = 'Paid Orders';
                    totalCashSale = totalCashSale + item.sum;
                    break;
                case types_1.PaymentStatus.NOTPAID:
                    description = 'Non Settled Orders';
                    break;
                default:
                    // console.log(item.paystat);
                    break;
            }
            totalOrders = totalOrders + item.count;
            totalOrderSum = totalOrderSum + item.sum;
            return {
                description: description,
                count: item.count,
                sum: item.sum.toFixed(noOfDecimalPlaces),
            };
        });
        const totalOrderDetail = {
            description: 'Total Orders',
            count: totalOrders,
            totalOrderSum: totalOrderSum.toFixed(noOfDecimalPlaces),
        };
        return { ordersStatArr: mappedOrders, totalOrderDetail, totalCashSale };
    }
    formatOrderStatV2(orderStat, noOfDecimalPlaces) {
        let totalOrders = 0;
        let totalOrderSum = 0;
        let totalCashSale = 0;
        let totalDiscount = 0;
        const mappedOrders = orderStat.map((item) => {
            // console.log('discount of the current', item.discount);
            totalDiscount = totalDiscount + Number.parseFloat(item.discount);
            totalOrderSum = totalOrderSum + item.sum;
            totalOrders = totalOrders + item.count;
            if (item.paystat == 'cash') {
                totalCashSale = totalCashSale + item.sum;
            }
            return {
                description: item.paystat,
                count: item.count,
                sum: item.sum.toFixed(noOfDecimalPlaces),
                discount: item.discount,
            };
        });
        // console.log('total discount', totalDiscount);
        const totalOrderDetail = {
            description: 'Total Orders',
            count: totalOrders,
            totalOrderSum: totalOrderSum.toFixed(noOfDecimalPlaces),
            totalDiscount: totalDiscount.toFixed(noOfDecimalPlaces),
        };
        // console.log('total order details', totalOrderDetail);
        // console.log('mapped array', mappedOrders);
        return { ordersStatArr: mappedOrders, totalOrderDetail, totalCashSale };
    }
    async getExpenseDetails(decimalPlaces, startTime, endTime) {
        let expensePaidFromCash = 0;
        let totalExpense = 0;
        const expensenList = await this.expenseService.getExpensesCreatedForDuration(startTime, endTime);
        const filteredExpenseList = expensenList
            .filter((expense) => expense.expenses.length > 0)
            .map((expenseTypeList) => {
            return {
                ...expenseTypeList,
                expenses: expenseTypeList.expenses.map((expense) => {
                    if (expense.paidFromCash) {
                        expensePaidFromCash = expensePaidFromCash + expense.amount;
                    }
                    totalExpense = totalExpense + expense.amount;
                    return {
                        ...expense,
                        amount: expense.amount.toFixed(decimalPlaces),
                    };
                }),
            };
        });
        // filteredExpenseList.forEach((expenseList) => {
        //   expenseList.expenses.forEach((expense) => {
        //     if (expense.paidFromCash) {
        //       expensePaidFromCash = expensePaidFromCash + expense.amount;
        //     }
        //     totalExpense = totalExpense + expense.amount;
        //   });
        // });
        return {
            expensePaidFromCash,
            totalExpense,
            filteredExpenseList,
        };
    }
    async getHomedeliverySummaryOfLastSession() {
        try {
            const companyId = 1;
            const company = await this.prismaService.company.findFirst({
                where: { id: companyId },
                include: {
                    taxes: { where: { isActive: true } },
                },
            });
            const noOfDecimalPlaces = company?.decimalZeros
                ? company.decimalZeros
                : 3;
            const homeDeliveryOfTheCurrentSessionByDeliveryUsers = (await this
                .prismaService.$queryRaw `
        select * from (
      select itemT."total"::numeric as total , 
          homeDelOrderUser."orderid", 
          homeDelOrderUser."createdAt", 
          homeDelOrderUser."name", 
          homeDelOrderUser."customername", 
          homeDelOrderUser."deliveryUserId",
          homeDelOrderUser."customerId",
          homeDelOrderUser."ordernumber"
        from 
        (select sum(("count" * "amount")) as total, 
            "orderId"  
        from "orderItem" 
          group by "orderId"
        ) itemT 
            join  ( select filteredOrderT."id" as orderId, filteredOrderT."customerName" as customerName ,filteredOrderT."orderNumber" as ordernumber,
                  filteredOrderT."customerId", filteredOrderT."deliveryUserId",filteredOrderT."createdAt",
                  "user"."name" 
                from 
                  (select * from "order" where "orderType"='homedelivery'
                    and
                    "createdAt" >= (select tempt."startTime" from (select * from "posSession" order by "startTime" desc limit 1) tempt)
                  ) filteredOrderT   
                    left join "user" 
                    on filteredOrderT."deliveryUserId" = "user".id) homeDelOrderUser
            on itemT."orderId"=homeDelOrderUser.orderid) ordercustomerfilteredT
          
    join "customer" 
    on "customer".id=ordercustomerfilteredT."customerId" 
    `);
            const mappedNullsTo9999 = homeDeliveryOfTheCurrentSessionByDeliveryUsers.map((item) => ({
                ...item,
                name: item.name ? item.name : 'Not Assigned',
                total: Number.parseFloat(item.total).toFixed(noOfDecimalPlaces),
                deliveryUserId: item.deliveryUserId ? item.deliveryUserId : 9999,
            }));
            const resultObj = {};
            mappedNullsTo9999.forEach((item) => {
                const itemDeliveryUserId = item.deliveryUserId;
                resultObj[itemDeliveryUserId] = [
                    ...(resultObj[itemDeliveryUserId] || []),
                    ...[
                        {
                            ...item,
                            createdAt: (0, util_1.dateTimeToDateHHMM)(new Date(item.createdAt)),
                        },
                    ],
                ];
            });
            const resultTotalObj = {};
            Object.entries(resultObj).map((items) => {
                let totalCount = 0;
                const totalOfUser = items[1].reduce((prev, curr, index) => {
                    totalCount = index + 1;
                    return prev + Number.parseFloat(curr.total);
                }, 0);
                const key = items[0].toString();
                resultTotalObj[key] = {
                    totalOfUser: totalOfUser.toFixed(noOfDecimalPlaces),
                    name: items[1][0].name,
                    count: totalCount,
                };
            });
            Object.keys(resultObj).forEach((key) => (resultTotalObj[key] = {
                ...resultTotalObj[key],
                orders: resultObj[key],
            }));
            const htmlInputData = this.createHomeDeliveryReportData(resultTotalObj);
            const pdfStream = await this.pupeteerService.getReportPdfStream('homedelivery', 'views', 'pdf', 'homedliveryorderwisebreakdown.html', htmlInputData);
            return {
                pdfStream,
                reportName: `homedelivery report ${new Date()}`,
            };
        }
        catch (error) {
            console.log(error);
            throw new common_2.BadGatewayException({ error });
        }
    }
    createHomeDeliveryReportData(resultTotalObj) {
        const htmlData = {
            date: (0, util_1.dateTimeToDateHHMM)(new Date()),
            homedeliveryData: resultTotalObj,
        };
        return htmlData;
    }
};
exports.SessionReportService = SessionReportService;
exports.SessionReportService = SessionReportService = tslib_1.__decorate([
    (0, common_2.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_db_1.PrismaService !== "undefined" && data_access_db_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof feature_stat_1.StatsService !== "undefined" && feature_stat_1.StatsService) === "function" ? _b : Object, typeof (_c = typeof feature_expense_1.ExpenseService !== "undefined" && feature_expense_1.ExpenseService) === "function" ? _c : Object, typeof (_d = typeof common_1.PuppeteerService !== "undefined" && common_1.PuppeteerService) === "function" ? _d : Object])
], SessionReportService);


/***/ }),
/* 111 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(112), exports);
tslib_1.__exportStar(__webpack_require__(114), exports);


/***/ }),
/* 112 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiFeatureStatModule = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const common_1 = __webpack_require__(1);
const stats_controller_1 = __webpack_require__(113);
const stats_service_1 = __webpack_require__(114);
let ApiFeatureStatModule = class ApiFeatureStatModule {
};
exports.ApiFeatureStatModule = ApiFeatureStatModule;
exports.ApiFeatureStatModule = ApiFeatureStatModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [data_access_db_1.ApiDataAccessDbModule],
        controllers: [stats_controller_1.StatController],
        providers: [stats_service_1.StatsService],
        exports: [stats_service_1.StatsService],
    })
], ApiFeatureStatModule);


/***/ }),
/* 113 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const stats_service_1 = __webpack_require__(114);
// import {
//   createHtmlDoc,
//   getPdfOptionsForReciept,
//   getPdfStream,
// } from '@hotel/common/util';
const fs_1 = __webpack_require__(77);
const path_1 = __webpack_require__(79);
let StatController = class StatController {
    constructor(statService) {
        this.statService = statService;
    }
    // @Get('')
    // async getStatFile(
    //   @Response({ passthrough: true }) res: any
    // ): Promise<StreamableFile> {
    //   const html = createHtmlDoc('sessionEndsummary.report.html', null, '');
    //   const pdfOptions = getPdfOptionsForReciept('views', 'report');
    //   const file = getPdfStream(html, pdfOptions);
    //   // const file = createReadStream(join(process.cwd(), 'Resume 2023pdf.pdf'));
    //   res.set({
    //     'Content-Type': 'application/pdf',
    //     'Content-Disposition': 'attachment; filename="Resume 2023pdf.pdf',
    //   });
    //   return new StreamableFile(file);
    // }
    getFile(res) {
        const file = (0, fs_1.createReadStream)((0, path_1.join)(process.cwd(), 'Resume 2023pdf.pdf'));
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="Resume 2023pdf.pdf',
        });
        return new common_1.StreamableFile(file);
    }
    getDashBaordData() {
        return this.statService.getDashBoardData();
    }
    getOrderStatForDuration(startDateIso, endDateIso) {
        // console.log('start date', startDateIso);
        // console.log('end date', endDateIso);
        const startDate = new Date(startDateIso.toString());
        const endDate = new Date(endDateIso.toString());
        return this.statService.getReportStatsForThePeriod(startDate, endDate);
    }
    getProductStatsForDuration(startDateIso, endDateIso) {
        // console.log('start date', startDateIso);
        // console.log('end date', endDateIso);
        const startDate = new Date(startDateIso.toString());
        const endDate = new Date(endDateIso.toString());
        return this.statService.getProductStatsForThePeriod(startDate, endDate);
    }
    getStaffCountStatsForDuration(startDateIso, endDateIso) {
        const startDate = new Date(startDateIso.toString());
        const endDate = new Date(endDateIso.toString());
        return this.statService.getStaffCountStatsForThePeriod(startDate, endDate);
    }
    getStaffAmountStatsForDuration(startDateIso, endDateIso) {
        const startDate = new Date(startDateIso.toString());
        const endDate = new Date(endDateIso.toString());
        return this.statService.getStaffAmountStatsForThePeriod(startDate, endDate);
    }
    getHomeDeliveryCountStatForDuration(startDateIso, endDateIso) {
        const startDate = new Date(startDateIso.toString());
        const endDate = new Date(endDateIso.toString());
        return this.statService.getHomeDeliveryStatCountViceForThePeriod(startDate, endDate);
    }
    getHomeDeliveryAmountStatForDuration(startDateIso, endDateIso) {
        const startDate = new Date(startDateIso.toString());
        const endDate = new Date(endDateIso.toString());
        return this.statService.getHomeDeliveryStatAmountViceForThePeriod(startDate, endDate);
    }
};
exports.StatController = StatController;
tslib_1.__decorate([
    (0, common_1.Get)('chck'),
    tslib_1.__param(0, (0, common_1.Response)({ passthrough: true })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof common_1.StreamableFile !== "undefined" && common_1.StreamableFile) === "function" ? _b : Object)
], StatController.prototype, "getFile", null);
tslib_1.__decorate([
    (0, common_1.Get)('dash'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], StatController.prototype, "getDashBaordData", null);
tslib_1.__decorate([
    (0, common_1.Get)('order'),
    tslib_1.__param(0, (0, common_1.Query)('startDate')),
    tslib_1.__param(1, (0, common_1.Query)('endDate')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StatController.prototype, "getOrderStatForDuration", null);
tslib_1.__decorate([
    (0, common_1.Get)('product'),
    tslib_1.__param(0, (0, common_1.Query)('startDate')),
    tslib_1.__param(1, (0, common_1.Query)('endDate')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StatController.prototype, "getProductStatsForDuration", null);
tslib_1.__decorate([
    (0, common_1.Get)('staffcount'),
    tslib_1.__param(0, (0, common_1.Query)('startDate')),
    tslib_1.__param(1, (0, common_1.Query)('endDate')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StatController.prototype, "getStaffCountStatsForDuration", null);
tslib_1.__decorate([
    (0, common_1.Get)('staffamount'),
    tslib_1.__param(0, (0, common_1.Query)('startDate')),
    tslib_1.__param(1, (0, common_1.Query)('endDate')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StatController.prototype, "getStaffAmountStatsForDuration", null);
tslib_1.__decorate([
    (0, common_1.Get)('homedeliverycount'),
    tslib_1.__param(0, (0, common_1.Query)('startDate')),
    tslib_1.__param(1, (0, common_1.Query)('endDate')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StatController.prototype, "getHomeDeliveryCountStatForDuration", null);
tslib_1.__decorate([
    (0, common_1.Get)('homedeliveryamount'),
    tslib_1.__param(0, (0, common_1.Query)('startDate')),
    tslib_1.__param(1, (0, common_1.Query)('endDate')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StatController.prototype, "getHomeDeliveryAmountStatForDuration", null);
exports.StatController = StatController = tslib_1.__decorate([
    (0, common_1.Controller)('stats'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof stats_service_1.StatsService !== "undefined" && stats_service_1.StatsService) === "function" ? _a : Object])
], StatController);


/***/ }),
/* 114 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatsService = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const common_1 = __webpack_require__(1);
const types_1 = __webpack_require__(47);
let StatsService = class StatsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getProductStatsForThePeriod(startDateTime, endDateTime) {
        const startTimeISO = startDateTime.toISOString();
        const endTimeISO = endDateTime.toISOString();
        const productStatArr = await this.prismaService.$queryRaw `
    select foo."name", foo."count" ,  round(foo."count" * 100 /(
	select sum(hello."count") from (
		select subtab.totalCount count, products.name, products.id
      from 
	  (select sum("count") totalCount, "productId" from public."orderItem" orderItems
      where orderItems."orderId" IN (select "id" from public."order" where "createdAt" >=  ${startTimeISO}::timestamp AND "createdAt" < ${endTimeISO}::timestamp) 
	   
      group by "productId") subtab inner join 
      (select * from public."product") products
      ON subtab."productId" = products.id  order by count desc
	) hello
) , 2) as "percentage" from 
(
	select subtab.totalCount count, products.name, products.id
      from 
	  (select sum("count") totalCount, "productId" from public."orderItem" orderItems
      where orderItems."orderId" IN (select "id" from public."order" where "createdAt" >=  ${startTimeISO}::timestamp  AND "createdAt" < ${endTimeISO}::timestamp) 
	   
      group by "productId") subtab inner join 
      (select * from public."product") products
      ON subtab."productId" = products.id  order by count desc
) foo group by foo."name", foo."count" order by foo."count" desc
    `;
        // console.log(productStatArr);
        const formtted = productStatArr.map((item) => {
            const totalParsed = JSON.parse(this.toJson(item.count));
            const newTempItem = {
                name: item.name,
                count: totalParsed,
                percentage: item.percentage,
            };
            return newTempItem;
        }).filter((item) => item.count !== 0); // When there is a deleted item, the count would be zero which is not needed for the report. coz it would display as '0 nos' which doesn't make sense
        // console.log(formtted);
        return formtted;
    }
    async getReportStatsForThePeriod(startDateTime, endDateTime) {
        console.log('start dateTime', startDateTime);
        console.log('end dateTime', endDateTime);
        const startTimeISO = startDateTime.toISOString();
        const endTimeISO = endDateTime.toISOString();
        const orderStatArr = await this.prismaService
            .$queryRaw `select sum(tempt.totalAmount), count(tempt."orderId"), orders."paystat" as paystat ,  sum(orders."discount") as discount from 
      (select sum(items.count * items.amount) as totalAmount, items."orderId" from public."orderItem" items  group by items."orderId" ) tempt
      inner join
      (select id, "paymentMode" as paystat, "discountApplied" as discount from public."order" 
       where "createdAt" >=  ${startTimeISO}::timestamp 
       AND "createdAt" < ${endTimeISO} :: timestamp AND "orderStatus" != 'cancelled') orders 
       on orders.id=tempt."orderId" group by paystat
     `;
        // console.log('result is', orderStatArr);
        const orderStat = orderStatArr.map((item) => {
            return {
                sum: item.sum,
                count: JSON.parse(this.toJson(item.count)),
                paystat: item.paystat,
                discount: item.discount,
            };
        });
        return orderStat;
        // const ordersTotal: any = await this.prismaService
        //   .$queryRaw`select sum("amount" * "count") as totalSale from public."orderItem" where "orderId" in (
        //     select id from public."order" where "createdAt" >=  ${startDate} AND "createdAt" <=${endDate} )
        //     `;
        // return this.toJson(ordersTotal);
        // console.log('orders count', ordersCount);
        // return { ordersCount, ordersTotal };
    }
    async getPayementBreakDownForThePeriod(startDateTime, endDateTime) {
        const startTimeISO = startDateTime.toISOString();
        const endTimeISO = endDateTime.toISOString();
        const paymentBreakDownArray = await this.prismaService.$queryRaw `
     select subquery.total, paytype.name from "paymentType" paytype 
 	join
		( select sum(payment.amount)::numeric as total , payment."paymentTypeId" as paymentTypeId from "payments" payment 
		 join (
			 select id from public."order" 
			 where "createdAt" >=  ${startTimeISO}::timestamp
			 AND "createdAt" <= ${endTimeISO} :: timestamp
			) orders 
		 on orders.id=payment."orderId" group by paymentTypeId) subquery
	 on paytype.id=subquery.paymentTypeId
    `;
        return paymentBreakDownArray;
    }
    async getStaffCountStatsForThePeriod(startDateTime, endDateTime) {
        const startTimeISO = startDateTime.toISOString();
        const endTimeISO = endDateTime.toISOString();
        const staffStatArr = await this.prismaService.$queryRaw `
    select sectionT."totCount", users."name", users.id from 
    (select tempt.totalCount as "totCount", tempt."createdUserId" as "userId" from 
    (select count(id) totalCount,  "createdUserId"
    from public."order" orders 
    where  "createdAt" >= ${startTimeISO}::timestamp  AND "createdAt" < ${endTimeISO} :: timestamp
    group by  orders."createdUserId"  ) 
    tempt ) sectionT
    inner join (select * from public."user") users
    on users.id = sectionT."userId" order by sectionT."totCount" desc
    `;
        // const staffStatArr: any[] = await this.prismaService.$queryRaw`
        // select sectionT."totCount", users."name", users.id from
        // (select tempt.totalCount as "totCount", tempt."createdUserId" as "userId" from
        // (select count(id) totalCount,  "createdUserId", "paymentStatus"
        // from public."order" orders
        // where  "createdAt" >= ${startTimeISO}::timestamp  AND "createdAt" < ${endTimeISO} :: timestamp
        // group by  orders."paymentStatus", orders."createdUserId"  )
        // tempt ) sectionT
        // inner join (select * from public."user") users
        // on users.id = sectionT."userId" order by sectionT."totCount" desc
        // `;
        const staffStat = staffStatArr.map((item) => {
            return {
                name: item.name,
                id: item.id,
                orderCount: JSON.parse(this.toJson(item.totCount)),
            };
        });
        return staffStat;
    }
    async getStaffAmountStatsForThePeriod(startDateTime, endDateTime) {
        const startTimeISO = startDateTime.toISOString();
        const endTimeISO = endDateTime.toISOString();
        const staffStatArr = await this.prismaService.$queryRaw `
    select joinedTotal.createdUserId as userId, userT."name" as "name", joinedTotal."multiplied"::float as totalusersalesum from 
          (
			select  orderTFiltered."createdUserId"  as createdUserId ,
		   	round(sum( orderItemsT."count" * orderItemsT."amount")::numeric, 3) as multiPlied
			   from public."orderItem" orderItemsT 
				join 
				  (select orderT."createdUserId", orderT.id as orderID from public."order" orderT 
					where "createdAt" >=  ${startTimeISO}::timestamp  AND "createdAt" <= ${endTimeISO}::timestamp AND "orderStatus" != 'cancelled' )
					  orderTFiltered
				on orderItemsT."orderId"=orderTFiltered.orderID
				group by orderTFiltered."createdUserId" 
         ) 
        joinedTotal
  join public."user" userT
  on joinedTotal.createdUserId=userT.id
  order by totalusersalesum desc
    `;
        // const staffStat: StaffStat[] = staffStatArr.map((item) => {
        //   return {
        //     name: item.name,
        //     id: item.id,
        //     orderCount: JSON.parse(this.toJson(item.totCount)),
        //   };
        // });
        return staffStatArr;
    }
    async getHomeDeliveryStatCountViceForThePeriod(startDateTime, endDateTime) {
        const startTimeISO = startDateTime.toISOString();
        const endTimeISO = endDateTime.toISOString();
        const homeDeliverStatArr = await this.prismaService.$queryRaw `
       select filteredOrderT.deliveryUserID, userT."name", filteredOrderT.orderCount::int as orderCount from
 (select orderT."deliveryUserId" as deliveryUserID, count(orderT.id) as orderCount from public."order" orderT 
					where "createdAt" >=  ${startTimeISO}::timestamp  AND "createdAt" <= ${endTimeISO} ::timestamp AND "deliveryUserId" IS NOT NULL  AND "orderStatus" != 'cancelled'
					Group by orderT."deliveryUserId") filteredOrderT
					join public."user" userT
					 on filteredOrderT.deliveryUserID=userT.id
  order by orderCount desc
    `;
        console.log(homeDeliverStatArr);
        // const staffStat: StaffStat[] = homeDeliverStatArr.map((item) => {
        //   return {
        //     name: item.name,
        //     id: item.id,
        //     orderCount: JSON.parse(this.toJson(item.totCount)),
        //   };
        // });
        return homeDeliverStatArr;
    }
    async getHomeDeliveryStatAmountViceForThePeriod(startDateTime, endDateTime) {
        const startTimeISO = startDateTime.toISOString();
        const endTimeISO = endDateTime.toISOString();
        const homeDeliverStatArr = await this.prismaService.$queryRaw `
       select joinedTotal.deliveryUserId as userId, userT."name" as "name", joinedTotal."multiplied"::float as totalusersalesum from 
          (
			select  orderTFiltered."deliveryUserId" as deliveryUserId ,
		   	round(sum( orderItemsT."count" * orderItemsT."amount")::numeric, 3) as multiPlied
			   from public."orderItem" orderItemsT 
				join 
				  (select orderT."createdUserId",orderT."deliveryUserId", orderT.id as orderID from public."order" orderT 
					where "createdAt" >=  ${startTimeISO}::timestamp  AND "createdAt" <= ${endTimeISO}::timestamp AND "deliveryUserId" IS NOT NULL AND "orderStatus" != 'cancelled')
					  orderTFiltered
				on orderItemsT."orderId"=orderTFiltered.orderID
				group by orderTFiltered."deliveryUserId" 
         ) 
        joinedTotal
  join public."user" userT
  on joinedTotal.deliveryUserId=userT.id
  order by totalusersalesum desc
    `;
        console.log(homeDeliverStatArr);
        // const staffStat: StaffStat[] = homeDeliverStatArr.map((item) => {
        //   return {
        //     name: item.name,
        //     id: item.id,
        //     orderCount: JSON.parse(this.toJson(item.totCount)),
        //   };
        // });
        return homeDeliverStatArr;
    }
    async getDashBoardData() {
        // get the start date.
        const sessionStartTime = await this.getActiveSessionStartTime();
        // const sessionStartTime = '2023-09-07T10:37:31.880Z';
        // [NOTE] prisma query works when iso format is supplied. console loging of sessiontartTime shows time in iso format but infact the content itself is not isoformated, only the console.log
        // for that we need to explicitly make it to ISOstring.
        const timeIso = sessionStartTime.toISOString();
        // console.log('session start time', sessionStartTime);
        const saleStatTypeBased = await this.prismaService.$queryRaw `
    select orderTFiltered."orderType" as description,  round(sum( orderItemsT."count" * orderItemsT."amount")::numeric, 3) as amount from public."orderItem" orderItemsT 
    join 
      (select orderT."orderType", orderT."id" from public."order" orderT 
        where "createdAt" >= ${timeIso}::timestamp AND "orderStatus" != 'cancelled' )
          orderTFiltered
    on orderItemsT."orderId"=orderTFiltered.id 
    group by orderTFiltered."orderType"`;
        // console.log('saleStatTypeBased', saleStatTypeBased);
        const saleStatTypeCount = await this.prismaService.$queryRaw `
    select count(id)::int totalCount , "orderType" as description
    from public."order" orders 
    where  "createdAt" >=  ${timeIso}::timestamp AND "orderStatus" != 'cancelled'
    group by orders."orderType"
    `;
        // console.log('saleStatTypeCount', saleStatTypeCount);
        const saleStatPayCount = await this.prismaService.$queryRaw `
    select count(id)::int totalCount , "paymentStatus" as description
    from public."order" orders 
    where  "createdAt" >=  ${timeIso}::timestamp  AND "orderStatus" != 'cancelled'
    group by orders."paymentStatus"`;
        const saleStatOrderStatusCount = await this.prismaService.$queryRaw `
    select count(id)::int totalCount , "orderStatus" as description
    from public."order" orders 
    where  "createdAt" >=  ${timeIso}::timestamp 
    group by orders."orderStatus"
`;
        const homedeliveryAmoutUservice = await this.prismaService.$queryRaw `
select  userT."name" as description, joinedTotal."multiplied"::numeric as amount from 
          (
			select  orderTFiltered."deliveryUserId" as deliveryUserId ,
		   	round(sum( orderItemsT."count" * orderItemsT."amount")::numeric, 3) as multiPlied
			   from public."orderItem" orderItemsT 
				join 
				  (select orderT."createdUserId",orderT."deliveryUserId", orderT.id as orderID from public."order" orderT 
					where "createdAt" >=  ${timeIso}::timestamp AND "deliveryUserId" IS NOT NULL AND "orderStatus" != 'cancelled')
					  orderTFiltered
				on orderItemsT."orderId"=orderTFiltered.orderID
				group by orderTFiltered."deliveryUserId" 
         ) 
        joinedTotal
  join public."user" userT
  on joinedTotal.deliveryUserId=userT.id
  order by amount desc`;
        return {
            saleStatTypeBased,
            saleStatPayCount,
            saleStatTypeCount,
            saleStatOrderStatusCount,
            homedeliveryAmoutUservice,
        };
    }
    async getActiveSessionStartTime() {
        const activeSession = await this.prismaService.posSession.findFirst({
            where: {
                status: types_1.SessionStatus.ACTIVE,
            },
        });
        if (!activeSession)
            throw new common_1.NotFoundException('No active session');
        // console.log('active session start time is', activeSession.startTime);
        return activeSession.startTime;
    }
    toJson(data) {
        return JSON.stringify(data, (_, v) => typeof v === 'bigint' ? `${v}n` : v).replace(/"(-?\d+)n"/g, (_, a) => a);
    }
    async aggregate(startDate, endDate) {
        this.prismaService.orderItem.findMany({
            distinct: ['orderId'],
            where: {},
        });
        this.prismaService.orderItem.aggregate({
            _sum: {
                amount: true,
            },
        });
        // this.prismaService.orderItem.groupBy({
        //     by: ['orderId'],
        //     _sum: { amount: true},
        //     where:
        //         {AND: [
        //             {  : {gte: startDate}},
        //             {createdAt: {lte: endDate}}
        //         ]}
        // })
    }
};
exports.StatsService = StatsService;
exports.StatsService = StatsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_db_1.PrismaService !== "undefined" && data_access_db_1.PrismaService) === "function" ? _a : Object])
], StatsService);
// Products and count sold for the duration
// const productStatArrs: any[] = await this.prismaService.$queryRaw`select
// subtab.totalCount count, products.name
// from (select sum("count") totalCount, "productId" from public."orderItem" orderItems
// where orderItems."orderId" IN (select "id" from public."order" where "createdAt" >=  ${startDate} AND "createdAt" <= ${endDate})
// group by "productId") subtab inner join
// (select * from public."product") products
// ON subtab."productId" = products.id order by count desc;
// `;
// const orderStatArr: any = await this.prismaService
// .$queryRaw`select sum(tempu.totalAmount) as sum, count(tempu."orderId") as count from (select sum(items.count * items.amount) as totalAmount,
// items."orderId" from public."orderItem" items  group by items."orderId" ) tempu
// inner join
// (select id from public."order"
// where "createdAt" >=  ${startDate}
// AND "createdAt" <= ${endDate}) orders
// on orders.id=tempu."orderId"
// `;


/***/ }),
/* 115 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(116), exports);
tslib_1.__exportStar(__webpack_require__(119), exports);


/***/ }),
/* 116 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeatureExpenseModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const expense_controller_1 = __webpack_require__(117);
const expense_service_1 = __webpack_require__(119);
const data_access_db_1 = __webpack_require__(7);
let FeatureExpenseModule = class FeatureExpenseModule {
};
exports.FeatureExpenseModule = FeatureExpenseModule;
exports.FeatureExpenseModule = FeatureExpenseModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [data_access_db_1.ApiDataAccessDbModule],
        controllers: [expense_controller_1.ExpenseController],
        providers: [expense_service_1.ExpenseService],
        exports: [expense_service_1.ExpenseService],
    })
], FeatureExpenseModule);


/***/ }),
/* 117 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExpenseController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const create_expense_dto_1 = __webpack_require__(118);
const expense_service_1 = __webpack_require__(119);
const create_expensetype_dto_1 = __webpack_require__(120);
let ExpenseController = class ExpenseController {
    constructor(expenseService) {
        this.expenseService = expenseService;
    }
    getExpenseList() {
        return this.expenseService.getExpensesCreatedCurrentSession();
    }
    createExpenseType(data) {
        return this.expenseService.createExpenseType(data);
    }
    addExpense(data) {
        return this.expenseService.addExpense(data);
    }
};
exports.ExpenseController = ExpenseController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ExpenseController.prototype, "getExpenseList", null);
tslib_1.__decorate([
    (0, common_1.Post)('type'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_expensetype_dto_1.CreateExpenseTypeDto !== "undefined" && create_expensetype_dto_1.CreateExpenseTypeDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ExpenseController.prototype, "createExpenseType", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof create_expense_dto_1.CreateExpenseDto !== "undefined" && create_expense_dto_1.CreateExpenseDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ExpenseController.prototype, "addExpense", null);
exports.ExpenseController = ExpenseController = tslib_1.__decorate([
    (0, common_1.Controller)('expense'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof expense_service_1.ExpenseService !== "undefined" && expense_service_1.ExpenseService) === "function" ? _a : Object])
], ExpenseController);


/***/ }),
/* 118 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateExpenseDto = void 0;
class CreateExpenseDto {
}
exports.CreateExpenseDto = CreateExpenseDto;


/***/ }),
/* 119 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExpenseService = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const common_1 = __webpack_require__(1);
const types_1 = __webpack_require__(47);
let ExpenseService = class ExpenseService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async createExpenseType(data) {
        try {
            const createdExpenseType = await this.prismaService.expenseType.create({
                data,
            });
            return createdExpenseType;
        }
        catch (error) {
            throw Error('Creation of expense type failed..');
        }
    }
    async addExpense(data) {
        try {
            const addedExpense = await this.prismaService.expense.create({
                data,
            });
            return addedExpense;
        }
        catch (error) {
            console.log(error);
            throw Error('Adding expense failed.');
        }
    }
    async getExpenseTypes() {
        return await this.prismaService.expenseType.findMany();
    }
    async getExpensesCreatedCurrentSession() {
        // get current session start date.
        const currentSession = await this.prismaService.posSession.findFirst({
            where: {
                status: types_1.SessionStatus.ACTIVE,
            },
        });
        const currentSessionStartDateTime = currentSession?.startTime;
        // query for expense created in the current session
        const expenseTypeListOfTheSession = await this.prismaService.expenseType.findMany({
            include: {
                expenses: {
                    where: { createdAt: { gte: currentSessionStartDateTime } },
                },
            },
        });
        return expenseTypeListOfTheSession;
    }
    async getExpensesCreatedForDuration(startDate, endDate) {
        const expenseTypeListOfTheSession = await this.prismaService.expenseType.findMany({
            include: {
                expenses: {
                    where: {
                        AND: [
                            { createdAt: { gte: startDate } },
                            { createdAt: { lte: endDate } },
                        ],
                    },
                },
            },
        });
        return expenseTypeListOfTheSession;
    }
};
exports.ExpenseService = ExpenseService;
exports.ExpenseService = ExpenseService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_db_1.PrismaService !== "undefined" && data_access_db_1.PrismaService) === "function" ? _a : Object])
], ExpenseService);


/***/ }),
/* 120 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateExpenseTypeDto = void 0;
class CreateExpenseTypeDto {
}
exports.CreateExpenseTypeDto = CreateExpenseTypeDto;


/***/ }),
/* 121 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(122), exports);
tslib_1.__exportStar(__webpack_require__(124), exports);


/***/ }),
/* 122 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeatureLicenseModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const schedule_1 = __webpack_require__(123);
const license_service_1 = __webpack_require__(124);
const jwt_1 = __webpack_require__(18);
let FeatureLicenseModule = class FeatureLicenseModule {
    constructor(licenseService) {
        this.licenseService = licenseService;
    }
    async onModuleInit() {
        // this.licenseService.checkLicense();
        // console.log('module init fired.. check primary license check here.');
        // const keys = ['HKCU\\Software\\Microsoft\\Mathpi\\CurrentVersion'];
        // const result = await list(keys);
        // if (!result[keys[0]].exists) {
        //   // if no key at mathpi location. exit the application
        //   process.exit(1);
        //   return;
        // }
    }
};
exports.FeatureLicenseModule = FeatureLicenseModule;
exports.FeatureLicenseModule = FeatureLicenseModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [license_service_1.LicenseService],
        exports: [license_service_1.LicenseService],
        imports: [schedule_1.ScheduleModule.forRoot(), jwt_1.JwtModule],
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof license_service_1.LicenseService !== "undefined" && license_service_1.LicenseService) === "function" ? _a : Object])
], FeatureLicenseModule);


/***/ }),
/* 123 */
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),
/* 124 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var LicenseService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LicenseService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const jwt_1 = __webpack_require__(18);
const hwid2_1 = __webpack_require__(125);
const regedit_rs_1 = __webpack_require__(126);
let LicenseService = LicenseService_1 = class LicenseService {
    constructor(jwtService) {
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(LicenseService_1.name);
    }
    // @Cron('45 * * * * *')
    // handleCron() {
    //   this.logger.debug('Called when the current second is 45');
    //   // this.checkLicense();
    // }
    async checkLicense() {
        return true;
        // removed by dead control flow

        // read the key from registry.
        // removed by dead control flow

        // removed by dead control flow

        // removed by dead control flow

    }
    isRegKeyValid(claims) {
        const { expiryMilliSeconds } = claims;
        return this.isExpired(expiryMilliSeconds);
    }
    isExpired(timeInSeconds) {
        const currentDateSeconds = new Date().getTime();
        // console.log(timeInSeconds, currentDateSeconds);
        if (timeInSeconds < currentDateSeconds) {
            console.log('License has been expired.. ');
            return false;
        }
        return true;
    }
};
exports.LicenseService = LicenseService;
exports.LicenseService = LicenseService = LicenseService_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], LicenseService);


/***/ }),
/* 125 */
/***/ ((module) => {

module.exports = require("hwid2");

/***/ }),
/* 126 */
/***/ ((module) => {

module.exports = require("regedit-rs");

/***/ }),
/* 127 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(128), exports);


/***/ }),
/* 128 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiFeatureKitchenModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const kitchen_service_1 = __webpack_require__(129);
const data_access_db_1 = __webpack_require__(7);
const kitchen_controller_1 = __webpack_require__(130);
let ApiFeatureKitchenModule = class ApiFeatureKitchenModule {
};
exports.ApiFeatureKitchenModule = ApiFeatureKitchenModule;
exports.ApiFeatureKitchenModule = ApiFeatureKitchenModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [data_access_db_1.ApiDataAccessDbModule],
        controllers: [kitchen_controller_1.KitchenController],
        providers: [kitchen_service_1.KitchenService],
        exports: [],
    })
], ApiFeatureKitchenModule);


/***/ }),
/* 129 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KitchenService = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const common_1 = __webpack_require__(1);
const pdf_to_printer_1 = __webpack_require__(82);
let KitchenService = class KitchenService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async createKitchen(kitchen) {
        return await this.prismaService.kitchen.create({
            data: {
                name: kitchen.name,
                printer: kitchen.printer,
            },
        });
    }
    async udpateKitchen(id, data) {
        delete data.id;
        try {
            return this.prismaService.kitchen.update({
                where: { id },
                data: data,
            });
        }
        catch (error) {
            throw new common_1.BadRequestException({ error: error });
        }
    }
    async getKitchens() {
        return await this.prismaService.kitchen.findMany();
    }
    async getAvailablePrinters() {
        const printers = await (0, pdf_to_printer_1.getPrinters)();
        return printers;
    }
};
exports.KitchenService = KitchenService;
exports.KitchenService = KitchenService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_db_1.PrismaService !== "undefined" && data_access_db_1.PrismaService) === "function" ? _a : Object])
], KitchenService);


/***/ }),
/* 130 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KitchenController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const kitchen_service_1 = __webpack_require__(129);
const create_kitchen_dto_1 = __webpack_require__(131);
let KitchenController = class KitchenController {
    constructor(kitchenService) {
        this.kitchenService = kitchenService;
    }
    getKitchens() {
        return this.kitchenService.getKitchens();
    }
    createKitchen(params) {
        return this.kitchenService.createKitchen(params);
    }
    updateKitchen(body, id) {
        const kitchenId = +id;
        // console.log('kitchen id', kitchenId);
        return this.kitchenService.udpateKitchen(kitchenId, body);
    }
};
exports.KitchenController = KitchenController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], KitchenController.prototype, "getKitchens", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_kitchen_dto_1.CreateKitchenDto !== "undefined" && create_kitchen_dto_1.CreateKitchenDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], KitchenController.prototype, "createKitchen", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof create_kitchen_dto_1.CreateKitchenDto !== "undefined" && create_kitchen_dto_1.CreateKitchenDto) === "function" ? _c : Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], KitchenController.prototype, "updateKitchen", null);
exports.KitchenController = KitchenController = tslib_1.__decorate([
    (0, common_1.Controller)('kitchen'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof kitchen_service_1.KitchenService !== "undefined" && kitchen_service_1.KitchenService) === "function" ? _a : Object])
], KitchenController);


/***/ }),
/* 131 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateKitchenDto = void 0;
class CreateKitchenDto {
}
exports.CreateKitchenDto = CreateKitchenDto;


/***/ }),
/* 132 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(133), exports);


/***/ }),
/* 133 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiFeatureTaxModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const tax_controller_1 = __webpack_require__(134);
const tax_service_1 = __webpack_require__(135);
const data_access_db_1 = __webpack_require__(7);
let ApiFeatureTaxModule = class ApiFeatureTaxModule {
};
exports.ApiFeatureTaxModule = ApiFeatureTaxModule;
exports.ApiFeatureTaxModule = ApiFeatureTaxModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [data_access_db_1.ApiDataAccessDbModule],
        controllers: [tax_controller_1.TaxController],
        providers: [tax_service_1.TaxService],
        exports: [],
    })
], ApiFeatureTaxModule);


/***/ }),
/* 134 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaxController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const tax_service_1 = __webpack_require__(135);
const create_tax_dto_1 = __webpack_require__(136);
let TaxController = class TaxController {
    constructor(taxService) {
        this.taxService = taxService;
    }
    getTaxes() {
        return this.taxService.getTaxes();
    }
    createTax(params) {
        return this.taxService.createTax(params);
    }
    updateTax(body, id) {
        const tableId = +id;
        console.log('table id', tableId);
        return this.taxService.updateTax(tableId, body);
    }
};
exports.TaxController = TaxController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], TaxController.prototype, "getTaxes", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_tax_dto_1.CreateTaxDto !== "undefined" && create_tax_dto_1.CreateTaxDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], TaxController.prototype, "createTax", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof create_tax_dto_1.CreateTaxDto !== "undefined" && create_tax_dto_1.CreateTaxDto) === "function" ? _c : Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], TaxController.prototype, "updateTax", null);
exports.TaxController = TaxController = tslib_1.__decorate([
    (0, common_1.Controller)('tax'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof tax_service_1.TaxService !== "undefined" && tax_service_1.TaxService) === "function" ? _a : Object])
], TaxController);


/***/ }),
/* 135 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaxService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const data_access_db_1 = __webpack_require__(7);
let TaxService = class TaxService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getTaxes() {
        try {
            return this.prismaService.tax.findMany();
        }
        catch (error) {
            throw new common_1.BadRequestException({ error: error });
        }
    }
    async createTax(tax) {
        try {
            return await this.prismaService.tax.create({
                data: {
                    name: tax.name,
                    printName: tax.printName,
                    isPercentage: tax.isPercentage,
                    value: +tax.value,
                    companyId: 1,
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException({ error: error });
        }
    }
    async updateTax(id, tax) {
        try {
            return await this.prismaService.tax.update({
                where: { id },
                data: {
                    name: tax.name,
                    printName: tax.printName,
                    isPercentage: tax.isPercentage,
                    value: +tax.value,
                    isActive: tax.isActive,
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException({ error: error });
        }
    }
};
exports.TaxService = TaxService;
exports.TaxService = TaxService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_db_1.PrismaService !== "undefined" && data_access_db_1.PrismaService) === "function" ? _a : Object])
], TaxService);


/***/ }),
/* 136 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTaxDto = void 0;
class CreateTaxDto {
}
exports.CreateTaxDto = CreateTaxDto;


/***/ }),
/* 137 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(138), exports);


/***/ }),
/* 138 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiFeatureUserModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const user_controller_1 = __webpack_require__(139);
const user_service_1 = __webpack_require__(140);
const data_access_db_1 = __webpack_require__(7);
let ApiFeatureUserModule = class ApiFeatureUserModule {
};
exports.ApiFeatureUserModule = ApiFeatureUserModule;
exports.ApiFeatureUserModule = ApiFeatureUserModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [data_access_db_1.ApiDataAccessDbModule],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
        exports: [],
    })
], ApiFeatureUserModule);


/***/ }),
/* 139 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const user_service_1 = __webpack_require__(140);
const user_create_dto_1 = __webpack_require__(141);
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getUsers() {
        return this.userService.getUsers();
    }
    createUser(params) {
        // console.log('creating user', params);
        return this.userService.createUser(params);
    }
    updateUser(body, id) {
        const userId = +id;
        // console.log('User id', userId);
        return this.userService.updateUser(userId, body);
    }
};
exports.UserController = UserController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "getUsers", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof user_create_dto_1.CreateUserDto !== "undefined" && user_create_dto_1.CreateUserDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "createUser", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof user_create_dto_1.CreateUserDto !== "undefined" && user_create_dto_1.CreateUserDto) === "function" ? _c : Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "updateUser", null);
exports.UserController = UserController = tslib_1.__decorate([
    (0, common_1.Controller)('user'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);


/***/ }),
/* 140 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const common_1 = __webpack_require__(1);
let UserService = class UserService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getUsers() {
        try {
            return await this.prismaService.user.findMany();
        }
        catch (error) {
            throw new common_1.BadRequestException({ error: error });
        }
    }
    async getDeliveryUsers() {
        try {
            return await this.prismaService.user.findMany({
                where: {
                    isHomeDeliveryUser: true,
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException({ error: error });
        }
    }
    //   [note] createuseris also part of auth module
    async createUser(user) {
        try {
            return await this.prismaService.user.create({
                data: {
                    name: user.name,
                    password: +user.password,
                    username: user.username,
                    phone: user.phone,
                    isAdmin: false,
                    isCashier: user.isCashier,
                    isKitchenUser: user.isKitchenUser,
                    isWaiter: user.isWaiter,
                },
            });
        }
        catch (error) {
            console.log('error on creating new user', error);
            throw new common_1.BadRequestException({ error: error });
        }
    }
    async updateUser(id, user) {
        try {
            return await this.prismaService.user.update({
                where: { id },
                data: {
                    name: user.name,
                    password: +user.password,
                    username: user.username,
                    isAdmin: false,
                    isCashier: user.isCashier,
                    isKitchenUser: user.isKitchenUser,
                    isWaiter: user.isWaiter,
                    isHomeDeliveryUser: user.isHomeDeliveryUser,
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException({ error: error });
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_db_1.PrismaService !== "undefined" && data_access_db_1.PrismaService) === "function" ? _a : Object])
], UserService);


/***/ }),
/* 141 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;


/***/ }),
/* 142 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(143), exports);


/***/ }),
/* 143 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiFeatureVariantModule = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const common_1 = __webpack_require__(1);
const variant_service_1 = __webpack_require__(144);
const variant_conroller_1 = __webpack_require__(145);
let ApiFeatureVariantModule = class ApiFeatureVariantModule {
};
exports.ApiFeatureVariantModule = ApiFeatureVariantModule;
exports.ApiFeatureVariantModule = ApiFeatureVariantModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [data_access_db_1.ApiDataAccessDbModule],
        controllers: [variant_conroller_1.VariantController],
        providers: [variant_service_1.VariantService],
        exports: [],
    })
], ApiFeatureVariantModule);


/***/ }),
/* 144 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VariantService = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const common_1 = __webpack_require__(1);
let VariantService = class VariantService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getVariants(productId) {
        return await this.prismaService.variant.findMany({
            where: {
                productId: productId,
            },
        });
    }
    async createVariant(productId, createVariantDto) {
        try {
            const variant = await this.prismaService.variant.create({
                data: {
                    name: createVariantDto.name,
                    price: +createVariantDto.price,
                    productId: productId,
                },
            });
            return variant;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException({ error: 'error happened' });
        }
    }
    async updateVariant(variantId, updateVariantDto) {
        try {
            const variant = await this.prismaService.variant.update({
                where: { id: variantId },
                data: {
                    name: updateVariantDto.name,
                    price: +updateVariantDto.price,
                },
            });
            return variant;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException({ error: 'error happened' });
        }
    }
    async deleteVariant(variantId) {
        try {
            const variant = await this.prismaService.variant.delete({
                where: { id: variantId },
            });
            return variant;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException({ error: 'error happened' });
        }
    }
};
exports.VariantService = VariantService;
exports.VariantService = VariantService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_db_1.PrismaService !== "undefined" && data_access_db_1.PrismaService) === "function" ? _a : Object])
], VariantService);


/***/ }),
/* 145 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VariantController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const variant_service_1 = __webpack_require__(144);
const create_variant_dto_1 = __webpack_require__(146);
let VariantController = class VariantController {
    constructor(variantService) {
        this.variantService = variantService;
    }
    getVariants(id) {
        const productId = +id;
        console.log('product Id given for finding variants', productId);
        return this.variantService.getVariants(productId);
    }
    creatVariant(id, dto) {
        const productId = +id;
        return this.variantService.createVariant(productId, dto);
    }
    updateVariant(id, dto) {
        const variantId = +id;
        return this.variantService.updateVariant(variantId, dto);
    }
    deleteVariant(id) {
        const variantId = +id;
        return this.variantService.deleteVariant(variantId);
    }
};
exports.VariantController = VariantController;
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], VariantController.prototype, "getVariants", null);
tslib_1.__decorate([
    (0, common_1.Post)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_b = typeof create_variant_dto_1.CreateVariantDto !== "undefined" && create_variant_dto_1.CreateVariantDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], VariantController.prototype, "creatVariant", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_c = typeof create_variant_dto_1.CreateVariantDto !== "undefined" && create_variant_dto_1.CreateVariantDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], VariantController.prototype, "updateVariant", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], VariantController.prototype, "deleteVariant", null);
exports.VariantController = VariantController = tslib_1.__decorate([
    (0, common_1.Controller)('variant'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof variant_service_1.VariantService !== "undefined" && variant_service_1.VariantService) === "function" ? _a : Object])
], VariantController);


/***/ }),
/* 146 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateVariantDto = void 0;
class CreateVariantDto {
}
exports.CreateVariantDto = CreateVariantDto;


/***/ }),
/* 147 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(148), exports);


/***/ }),
/* 148 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiFeatureHomeDeliveryModule = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const common_1 = __webpack_require__(1);
const home_delivery_controller_1 = __webpack_require__(149);
const home_delivery_service_1 = __webpack_require__(150);
const feature_auth_1 = __webpack_require__(15);
let ApiFeatureHomeDeliveryModule = class ApiFeatureHomeDeliveryModule {
};
exports.ApiFeatureHomeDeliveryModule = ApiFeatureHomeDeliveryModule;
exports.ApiFeatureHomeDeliveryModule = ApiFeatureHomeDeliveryModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [data_access_db_1.ApiDataAccessDbModule, feature_auth_1.ApiFeatureAuthModule],
        controllers: [home_delivery_controller_1.HomeDeliveryController],
        providers: [home_delivery_service_1.HomeDeliveryService],
        exports: [],
    })
], ApiFeatureHomeDeliveryModule);


/***/ }),
/* 149 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HomeDeliveryController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const home_delivery_service_1 = __webpack_require__(150);
const feature_auth_1 = __webpack_require__(15);
let HomeDeliveryController = class HomeDeliveryController {
    constructor(homedeliveryService) {
        this.homedeliveryService = homedeliveryService;
    }
    getCompletedHomeDeliveryOrders(req) {
        console.log('getting closed home deliveries');
        const user = req.user;
        return this.homedeliveryService.getClosedHomeDeliveryOrdersOfTheCurrentSession(user);
    }
    getAssignedDeliveries(req) {
        const user = req.user;
        return this.homedeliveryService.getNonClosedHomeDeliveryOrdersOfTheCurrentSession(user);
    }
    completeHomeDelivery(req, params) {
        const user = req.user;
        const orderId = +params.id;
        return this.homedeliveryService.deliverHomeDeliveryOrder(orderId);
    }
};
exports.HomeDeliveryController = HomeDeliveryController;
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Get)('myorders'),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], HomeDeliveryController.prototype, "getCompletedHomeDeliveryOrders", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Get)(),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], HomeDeliveryController.prototype, "getAssignedDeliveries", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Get)('/:id'),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], HomeDeliveryController.prototype, "completeHomeDelivery", null);
exports.HomeDeliveryController = HomeDeliveryController = tslib_1.__decorate([
    (0, common_1.Controller)('delivery'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof home_delivery_service_1.HomeDeliveryService !== "undefined" && home_delivery_service_1.HomeDeliveryService) === "function" ? _a : Object])
], HomeDeliveryController);


/***/ }),
/* 150 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HomeDeliveryService = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const types_1 = __webpack_require__(47);
const common_1 = __webpack_require__(1);
let HomeDeliveryService = class HomeDeliveryService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async deliverHomeDeliveryOrder(orderId) {
        // console.log('delivering home order.', orderId);
        try {
            await this.prismaService.order.update({
                where: { id: orderId },
                data: {
                    orderStatus: types_1.OrderStatus.DELIVERED,
                },
            });
        }
        catch (error) {
            console.log(error);
            throw new Error();
        }
    }
    async getNonClosedHomeDeliveryOrdersOfTheCurrentSession(user) {
        // if cashier get all orders.
        // if deliver user get only assinged.
        // const isUserHasOnlyHomeDeliveryAccess =
        //   !user.isCashier && user.isHomeDeliveryUser;
        try {
            return await this.prismaService.order.findMany({
                where: {
                    createdAt: { gte: await this.getActiveSessionStartTime() },
                    orderType: types_1.OrderType.HOMEDELIVERY,
                    orderStatus: {
                        notIn: [types_1.OrderStatus.DELIVERED, types_1.OrderStatus.CANCELLED],
                    },
                    deliveryUserId: { not: null },
                    ...(user.isHomeDeliveryUser && { deliveryUserId: user.id }),
                },
                include: { customer: true, user: true },
            });
        }
        catch (error) {
            throw new Error();
        }
    }
    async getClosedHomeDeliveryOrdersOfTheCurrentSession(user) {
        // if cashier get all orders.
        // if deliver user get only assinged.
        // const isUserHasOnlyHomeDeliveryAccess =
        //   !user.isCashier && user.isHomeDeliveryUser;
        try {
            return await this.prismaService.order.findMany({
                where: {
                    createdAt: { gte: await this.getActiveSessionStartTime() },
                    orderType: types_1.OrderType.HOMEDELIVERY,
                    orderStatus: types_1.OrderStatus.DELIVERED,
                    deliveryUserId: { not: null },
                    ...(user.isHomeDeliveryUser && { deliveryUserId: user.id }),
                },
                include: { customer: true, user: true },
            });
        }
        catch (error) {
            throw new Error();
        }
    }
    async getHomeDeliveryOrdersOfTheCurrentSession(user) {
        // if cashier get all orders.
        // if deliver user get only assinged.
        // const isUserHasOnlyHomeDeliveryAccess =
        //   !user.isCashier && user.isHomeDeliveryUser;
        try {
            return await this.prismaService.order.findMany({
                where: {
                    createdAt: { gte: await this.getActiveSessionStartTime() },
                    orderType: types_1.OrderType.HOMEDELIVERY,
                    orderStatus: { not: types_1.OrderStatus.CANCELLED },
                    deliveryUserId: { not: null },
                    ...(user.isHomeDeliveryUser && { deliveryUserId: user.id }),
                },
                include: { customer: true, user: true },
            });
        }
        catch (error) {
            throw new Error();
        }
    }
    async getTotalOrderCountAndTotalAmoutByDeliveryUser(user) {
        console.log('total count + sale');
    }
    async getActiveSessionStartTime() {
        const activeSession = await this.prismaService.posSession.findFirst({
            where: {
                status: types_1.SessionStatus.ACTIVE,
            },
        });
        if (!activeSession)
            throw new common_1.NotFoundException('No active session');
        // console.log('active session start time is', activeSession.startTime);
        return activeSession.startTime;
    }
};
exports.HomeDeliveryService = HomeDeliveryService;
exports.HomeDeliveryService = HomeDeliveryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_db_1.PrismaService !== "undefined" && data_access_db_1.PrismaService) === "function" ? _a : Object])
], HomeDeliveryService);


/***/ }),
/* 151 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(152), exports);


/***/ }),
/* 152 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiFeatureOrderHistoryModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const feature_auth_1 = __webpack_require__(15);
const data_access_db_1 = __webpack_require__(7);
const order_history_controller_1 = __webpack_require__(153);
const order_history_service_1 = __webpack_require__(154);
let ApiFeatureOrderHistoryModule = class ApiFeatureOrderHistoryModule {
};
exports.ApiFeatureOrderHistoryModule = ApiFeatureOrderHistoryModule;
exports.ApiFeatureOrderHistoryModule = ApiFeatureOrderHistoryModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [data_access_db_1.ApiDataAccessDbModule, feature_auth_1.ApiFeatureAuthModule],
        controllers: [order_history_controller_1.OrderHistoryController],
        providers: [order_history_service_1.OrderHistoryService],
        exports: [],
    })
], ApiFeatureOrderHistoryModule);


/***/ }),
/* 153 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderHistoryController = void 0;
const tslib_1 = __webpack_require__(4);
const feature_auth_1 = __webpack_require__(15);
const common_1 = __webpack_require__(1);
const order_history_service_1 = __webpack_require__(154);
let OrderHistoryController = class OrderHistoryController {
    constructor(orderHistoryService) {
        this.orderHistoryService = orderHistoryService;
    }
    getOrderHistoryOfOrderAsArray(req, param) {
        const orderId = +param.id;
        // console.log('searching by order number');
        return this.orderHistoryService.getOrderHistoryOfOrderNumberAsArr(orderId);
    }
    getOrderHistoryOfCurrentSession(req, skip, take) {
        const user = req.user;
        // console.log('inside get of history module');
        // return 'hello';
        return this.orderHistoryService.getOrderHistoryOfTheCurrentSession(user, {
            skip: +skip,
            take: +take,
        });
    }
    getOrderHistoryOfCurrentSessionGivenUser(req, skip, take, userId) {
        const user = req.user;
        // console.log('skip take userId', `${skip} - ${take} = ${userId}`);
        return this.orderHistoryService.getOrderHistoryOfGivenUserInTheCurrentSession(+userId, {
            skip: +skip,
            take: +take,
        });
    }
};
exports.OrderHistoryController = OrderHistoryController;
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Get)('ordernumber/:id'),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], OrderHistoryController.prototype, "getOrderHistoryOfOrderAsArray", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Get)(),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Query)('skip')),
    tslib_1.__param(2, (0, common_1.Query)('take')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], OrderHistoryController.prototype, "getOrderHistoryOfCurrentSession", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Get)('user'),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Query)('skip')),
    tslib_1.__param(2, (0, common_1.Query)('take')),
    tslib_1.__param(3, (0, common_1.Query)('userId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], OrderHistoryController.prototype, "getOrderHistoryOfCurrentSessionGivenUser", null);
exports.OrderHistoryController = OrderHistoryController = tslib_1.__decorate([
    (0, common_1.Controller)('ohistory'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof order_history_service_1.OrderHistoryService !== "undefined" && order_history_service_1.OrderHistoryService) === "function" ? _a : Object])
], OrderHistoryController);


/***/ }),
/* 154 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderHistoryService = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const types_1 = __webpack_require__(47);
const common_1 = __webpack_require__(1);
let OrderHistoryService = class OrderHistoryService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getOrderHistoryOfTheCurrentSession(user, params) {
        const activeSessionDate = await this.getActiveSessionStartTime();
        return await this.getOrderHisotryOfGivenPeriod(activeSessionDate, new Date(), user, params);
    }
    async getOrderHisotryOfGivenPeriod(startDateTime, endDateTime, user, params) {
        // eslint-disable-next-line prefer-const
        let { skip, take } = params;
        if (!take)
            take = 10;
        // console.log('values of skipt and take', `skip ${skip} - take ${take}`);
        try {
            if (!skip) {
                // console.log(`in the skip 0 area skip values is ${skip}`);
                return this.prismaService.order.findMany({
                    take,
                    where: {
                        // paymentStatus: { in: [PaymentStatus.CREDIT, PaymentStatus.PAID] },
                        ...(!user.isCashier && { createdUserId: user.id }),
                        // createdAt: { gte: startDateTime },
                    },
                    include: { customer: true, user: true },
                    orderBy: { createdAt: 'desc' },
                });
            }
            else {
                return this.prismaService.order.findMany({
                    skip,
                    take,
                    where: {
                        paymentStatus: { in: [types_1.PaymentStatus.CREDIT, types_1.PaymentStatus.PAID] },
                        ...(!user.isCashier && { createdUserId: user.id }),
                    },
                    orderBy: { createdAt: 'desc' },
                    include: { customer: true, user: true },
                });
            }
        }
        catch (error) {
            throw new Error('Error on get order history');
        }
    }
    async getOrderHistoryOfGivenUserInTheCurrentSession(userId, params) {
        const activeSessionDate = await this.getActiveSessionStartTime();
        return this.getOrderHistoryOfGivenPeriodOfAUser(activeSessionDate, new Date(), userId, params);
    }
    async getOrderHistoryOfGivenPeriodOfAUser(startDateTime, endDateTime, userId, params) {
        // eslint-disable-next-line prefer-const
        let { skip, take } = params;
        if (!take)
            take = 10;
        try {
            if (!skip) {
                console.log(`picking first set when skip is zero userid ${userId}`);
                const orders = await this.prismaService.order.findMany({
                    take,
                    where: {
                        paymentStatus: { in: [types_1.PaymentStatus.CREDIT, types_1.PaymentStatus.PAID] },
                        createdUserId: +userId,
                        // createdAt: { gte: startDateTime },
                    },
                    include: { customer: true, user: true },
                    orderBy: { createdAt: 'desc' },
                });
                // console.log('orders are', orders);
                return orders;
            }
            else {
                return await this.prismaService.order.findMany({
                    skip,
                    take,
                    where: {
                        // paymentStatus: { in: [PaymentStatus.CREDIT, PaymentStatus.PAID] },
                        createdUserId: userId,
                        // createdAt: { gte: startDateTime },
                    },
                    include: { customer: true, user: true },
                    orderBy: { createdAt: 'desc' },
                });
            }
        }
        catch (error) {
            throw new Error('Error on get order history');
        }
    }
    async getOrderHistoryOfOrderNumberAsArr(orderNumber) {
        try {
            return this.prismaService.order.findMany({
                where: { orderNumber },
                include: { customer: true, user: true },
            });
        }
        catch (error) {
            throw new Error('Error on get order history');
        }
    }
    async getActiveSessionStartTime() {
        const activeSession = await this.prismaService.posSession.findFirst({
            where: {
                status: types_1.SessionStatus.ACTIVE,
            },
        });
        if (!activeSession)
            throw new common_1.NotFoundException('No active session');
        // console.log('active session start time is', activeSession.startTime);
        return activeSession.startTime;
    }
};
exports.OrderHistoryService = OrderHistoryService;
exports.OrderHistoryService = OrderHistoryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_db_1.PrismaService !== "undefined" && data_access_db_1.PrismaService) === "function" ? _a : Object])
], OrderHistoryService);


/***/ }),
/* 155 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(156), exports);


/***/ }),
/* 156 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiFeatureKotModule = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const common_1 = __webpack_require__(1);
const kot_controller_1 = __webpack_require__(157);
const kot_services_1 = __webpack_require__(158);
let ApiFeatureKotModule = class ApiFeatureKotModule {
};
exports.ApiFeatureKotModule = ApiFeatureKotModule;
exports.ApiFeatureKotModule = ApiFeatureKotModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [data_access_db_1.ApiDataAccessDbModule, ApiFeatureKotModule],
        controllers: [kot_controller_1.KotController],
        providers: [kot_services_1.KotService],
        exports: [],
    })
], ApiFeatureKotModule);


/***/ }),
/* 157 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KotController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const feature_auth_1 = __webpack_require__(15);
const kot_services_1 = __webpack_require__(158);
let KotController = class KotController {
    constructor(kotService) {
        this.kotService = kotService;
    }
    getUserNotServedKots(req) {
        const user = req.user;
        // console.log('user id', user.id);
        return this.kotService.getUserNotServedKots(user.id);
    }
    getOpenKots() {
        // console.log('cotoller called?');
        return this.kotService.getOpenKots();
    }
    completeKot(data) {
        const kotId = +data.kotId;
        return this.kotService.completeKot(kotId);
    }
    getOrderKots(id) {
        // console.log(id);
        return id;
    }
    makeKotToServed(data) {
        const kotId = +data.kotId;
        return this.kotService.makeKotServed(kotId);
    }
};
exports.KotController = KotController;
tslib_1.__decorate([
    (0, common_1.UseGuards)(feature_auth_1.JwtAuthGuard),
    (0, common_1.Get)('usernotservedkots'),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], KotController.prototype, "getUserNotServedKots", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], KotController.prototype, "getOpenKots", null);
tslib_1.__decorate([
    (0, common_1.Patch)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], KotController.prototype, "completeKot", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], KotController.prototype, "getOrderKots", null);
tslib_1.__decorate([
    (0, common_1.Put)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], KotController.prototype, "makeKotToServed", null);
exports.KotController = KotController = tslib_1.__decorate([
    (0, common_1.Controller)('kot'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof kot_services_1.KotService !== "undefined" && kot_services_1.KotService) === "function" ? _a : Object])
], KotController);


/***/ }),
/* 158 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KotService = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const types_1 = __webpack_require__(47);
const common_1 = __webpack_require__(1);
let KotService = class KotService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    // KOT which is closed should not be visible to the user.
    // async getOpenOrderKots(orderId: number) {
    //  return await this.prismaService.kot.findMany({
    //   where : {
    //     orderi
    //   }
    //  })
    // }
    getKots() {
        this.prismaService.kot.findMany({
            where: {
                status: types_1.KotStatus.INPROGRESS,
            },
        });
    }
    async completeKot(id) {
        try {
            const updatedKot = await this.prismaService.kot.update({
                where: {
                    id,
                },
                data: {
                    status: types_1.KotStatus.READY,
                },
            });
            return updatedKot.id;
        }
        catch (error) {
            throw new Error('Could not update the kotstatus');
        }
    }
    async makeKotServed(id) {
        try {
            const updatedKot = await this.prismaService.kot.update({
                where: {
                    id,
                },
                data: {
                    status: types_1.KotStatus.SERVED,
                },
            });
            return updatedKot.id;
        }
        catch (error) {
            throw new Error('Could not update the kotstatus');
        }
    }
    async getOpenKots() {
        const rawQueryResult = await this.prismaService.$queryRaw `
  select 
    "orderItem"."customeKey",
    "orderItem"."count",
	"orderItem"."name",
	"orderItem"."orderItemType",
	"orderItem"."amount",
	"orderItem"."note" as "kotItemNote",
	"orderItem"."message",
	kotOrderUserT."orderId",
	kotOrderUserT."kotid", 
	kotOrderUserT."createdAt",
	kotOrderUserT."updatedAt",
	kotOrderUserT."kitchenId",
  kotOrderUserT."note" as "kotNote",
	kotOrderUserT."createdUserName",
	kotOrderUserT."createdUserId",
	kotOrderUserT."orderNumber",
	kotOrderUserT."orderType",
	kotOrderUserT."customerName"
from	
	(select 	kotUserTable."kotid", 
		kotUserTable."createdAt",
		kotUserTable."updatedAt",
		kotUserTable."kitchenId",
    kotUserTable."note",
		kotUserTable."orderId",
		kotUserTable."createdUserName",
		kotUserTable."createdUserId",
		filteredOrderTable."orderNumber",
		filteredOrderTable."orderType",
		filteredOrderTable."customerName"
		from 
			(select kotT.id as kotid, 
					kotT."createdAt", 
					kotT."updatedAt", 
					kotT."kitchenId",
          kotT."note",
					kotT."orderId", 
					"user"."name" as "createdUserName",
					"user".id as "createdUserId"
						from (select * from kot where kot."status"='inprogress') kotT
				 			join "user" 
			 				on kotT."updatedUserId"="user"."id") kotUserTable 
									join 
										(select id as orderpid, 
										 		"orderNumber" ,
										 		"orderType",
                        "customerName"
										 			from "order" where "orderStatus"='inprogress' and "paymentStatus"='notpaid') filteredOrderTable
									on kotUserTable."orderId"=filteredOrderTable."orderpid" ) kotOrderUserT
										join "orderItem"
											on kotOrderUserT."kotid"="orderItem"."kotNumber"
    `;
        const kotMap = {};
        rawQueryResult.forEach((result) => {
            const kotid = result.kotid.toString();
            kotMap[kotid] = {
                ...(kotMap[kotid] || {}),
                ...{
                    ...result,
                    note: result.kotNote,
                    kotItems: kotMap[kotid]
                        ? [
                            ...kotMap[kotid].kotItems,
                            {
                                name: result.name,
                                orderItemType: result.orderItemType,
                                amount: result.amount,
                                count: result.count,
                                message: result.message,
                                note: result.kotItemNote,
                                customeKey: result.customeKey,
                            },
                        ]
                        : [
                            {
                                name: result.name,
                                orderItemType: result.orderItemType,
                                amount: result.amount,
                                count: result.count,
                                message: result.message,
                                customeKey: result.customeKey,
                                note: result.kotItemNote,
                            },
                        ],
                },
            };
        });
        return Object.values(kotMap);
        // const kots: Kot[] = [
        //   {
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //     createdUserId: 1,
        //     createdUserName: 'Jafar',
        //     id: 1,
        //     kitchenId: 2,
        //     orderId: 1,
        //     status: KotStatus.INPROGRESS,
        //   },
        //   {
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //     createdUserId: 1,
        //     createdUserName: 'Sadiq',
        //     id: 2,
        //     kitchenId: 2,
        //     orderId: 1,
        //     status: KotStatus.INPROGRESS,
        //   },
        //   {
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //     createdUserId: 1,
        //     createdUserName: 'Bro',
        //     id: 3,
        //     kitchenId: 2,
        //     orderId: 1,
        //     status: KotStatus.INPROGRESS,
        //   },
        // ];
        // return kots;
    }
    async getUserNotServedKots(userId) {
        const rawQueryResult = await this.prismaService.$queryRaw `
    select 
    "orderItem"."customeKey",
    "orderItem"."count",
	"orderItem"."name",
	"orderItem"."orderItemType",
	"orderItem"."amount",
	"orderItem"."message",
  "orderItem"."note" as "kotItemNote",
	kotOrderUserT."orderId",
	kotOrderUserT."kotid", 
	kotOrderUserT."createdAt",
	kotOrderUserT."updatedAt",
	kotOrderUserT."kitchenId",
	kotOrderUserT."createdUserName",
	kotOrderUserT."createdUserId",
	kotOrderUserT."orderNumber",
  kotOrderUserT."note" as "kotNote",
	kotOrderUserT."orderType",
  kotOrderUserT."status"	,
  kotOrderUserT."customerName"
from	
	(select 	kotUserTable."kotid", 
		kotUserTable."createdAt",
		kotUserTable."updatedAt",
		kotUserTable."kitchenId",
		kotUserTable."orderId",
    kotUserTable."status",
		kotUserTable."createdUserName",
    kotUserTable."note",
		kotUserTable."createdUserId",
		filteredOrderTable."orderNumber",
		filteredOrderTable."orderType",
    filteredOrderTable."customerName"
		from 
			(select kotT.id as kotid, 
					kotT."createdAt", 
					kotT."updatedAt", 
					kotT."kitchenId",
          kotT."status",
          kotT."note",
					kotT."orderId", 
					"user"."name" as "createdUserName",
					"user".id as "createdUserId"
						from (select * from kot where kot."status"!='served') kotT
				 			join "user" 
			 				on kotT."updatedUserId"="user"."id") kotUserTable 
									join 
										(select id as orderpid, 
										 		"orderNumber" ,
										 		"orderType",
                        "customerName"
										 			from "order" where "orderStatus"='inprogress' and "paymentStatus"='notpaid' and "createdUserId"=${userId}) filteredOrderTable
									on kotUserTable."orderId"=filteredOrderTable."orderpid" ) kotOrderUserT
										join "orderItem"
											on kotOrderUserT."kotid"="orderItem"."kotNumber"
    `;
        const kotMap = {};
        // console.log('raw queyr result is ', rawQueryResult);
        rawQueryResult.forEach((result) => {
            const kotid = result.kotid.toString();
            kotMap[kotid] = {
                ...(kotMap[kotid] || {}),
                ...{
                    ...result,
                    note: result.kotNote,
                    kotItems: kotMap[kotid]
                        ? [
                            ...kotMap[kotid].kotItems,
                            {
                                name: result.name,
                                orderItemType: result.orderItemType,
                                amount: result.amount,
                                count: result.count,
                                message: result.message,
                                customeKey: result.customeKey,
                                note: result.kotItemNote,
                            },
                        ]
                        : [
                            {
                                name: result.name,
                                orderItemType: result.orderItemType,
                                amount: result.amount,
                                count: result.count,
                                message: result.message,
                                customeKey: result.customeKey,
                                note: result.kotItemNote,
                            },
                        ],
                },
            };
        });
        return Object.values(kotMap);
        // const kots: Kot[] = [
        //   {
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //     createdUserId: 1,
        //     createdUserName: 'Jafar',
        //     id: 1,
        //     kitchenId: 2,
        //     orderId: 1,
        //     status: KotStatus.INPROGRESS,
        //   },
        //   {
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //     createdUserId: 1,
        //     createdUserName: 'Sadiq',
        //     id: 2,
        //     kitchenId: 2,
        //     orderId: 1,
        //     status: KotStatus.INPROGRESS,
        //   },
        //   {
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //     createdUserId: 1,
        //     createdUserName: 'Bro',
        //     id: 3,
        //     kitchenId: 2,
        //     orderId: 1,
        //     status: KotStatus.INPROGRESS,
        //   },
        // ];
        // return kots;
    }
};
exports.KotService = KotService;
exports.KotService = KotService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_db_1.PrismaService !== "undefined" && data_access_db_1.PrismaService) === "function" ? _a : Object])
], KotService);


/***/ }),
/* 159 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(160), exports);


/***/ }),
/* 160 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeaturePaymentModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const feature_payment_controller_1 = __webpack_require__(161);
const feature_payment_service_1 = __webpack_require__(163);
const data_access_db_1 = __webpack_require__(7);
const feature_order_1 = __webpack_require__(38);
let FeaturePaymentModule = class FeaturePaymentModule {
};
exports.FeaturePaymentModule = FeaturePaymentModule;
exports.FeaturePaymentModule = FeaturePaymentModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [feature_payment_controller_1.PaymentController],
        providers: [feature_payment_service_1.PaymentService],
        exports: [],
        imports: [data_access_db_1.ApiDataAccessDbModule, feature_order_1.ApiFeatureOrderModule],
    })
], FeaturePaymentModule);


/***/ }),
/* 161 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const add_payment_dto_1 = __webpack_require__(162);
const feature_payment_service_1 = __webpack_require__(163);
let PaymentController = class PaymentController {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    payTheOrder(data) {
        // console.log(data);
        // return 'helelo';
        return this.paymentService.payTheOrder(data);
    }
    getPaymentOptions() {
        return this.paymentService.getPaymentOptions();
    }
};
exports.PaymentController = PaymentController;
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof add_payment_dto_1.AddPaymentDto !== "undefined" && add_payment_dto_1.AddPaymentDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], PaymentController.prototype, "payTheOrder", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], PaymentController.prototype, "getPaymentOptions", null);
exports.PaymentController = PaymentController = tslib_1.__decorate([
    (0, common_1.Controller)('payment'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof feature_payment_service_1.PaymentService !== "undefined" && feature_payment_service_1.PaymentService) === "function" ? _a : Object])
], PaymentController);


/***/ }),
/* 162 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddPaymentDto = void 0;
class AddPaymentDto {
}
exports.AddPaymentDto = AddPaymentDto;


/***/ }),
/* 163 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentService = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const common_1 = __webpack_require__(1);
const types_1 = __webpack_require__(47);
const feature_order_1 = __webpack_require__(38);
let PaymentService = class PaymentService {
    constructor(prismaService, orderService) {
        this.prismaService = prismaService;
        this.orderService = orderService;
    }
    async getPaymentOptions() {
        const options = await this.prismaService.paymentType.findMany();
        return options;
    }
    async payTheOrder(addPaymentDto) {
        const orderId = addPaymentDto.orderId;
        const payments = addPaymentDto.payments;
        const orderTotal = Math.floor(addPaymentDto.orderTotal * 1000) / 1000;
        const discount = Math.floor(addPaymentDto.discount * 1000) / 1000;
        const paidTotal = payments.reduce((prev, curr) => prev + curr.amount, 0);
        const payedDifference = (paidTotal * 1000 - (orderTotal * 1000 - discount * 1000)) / 1000;
        // console.log('paid total', paidTotal);
        // console.log('ordedtop.ordertotal', addPaymentDto.orderTotal);
        // console.log('order total', orderTotal);
        // console.log('order tota l - dicount', orderTotal - discount);
        // console.log('dicousnt given', discount);
        // console.log('paydifference', payedDifference);
        if (payedDifference < 0)
            throw Error('paid amount is not enough.');
        // assuming the cash pay option has id of 1.
        const cashPay = payments.filter((item) => item.paymentTypeId == 1);
        if (!cashPay.length && payedDifference > 0)
            throw new common_1.NotAcceptableException('No cash amount to adjust the balance. Other paid option should not be allowed to have more amount entered.');
        if (cashPay.length) {
            const cashAmount = cashPay[0].amount;
            if (cashAmount < payedDifference)
                throw new common_1.NotAcceptableException('Cannot process payment coz the cash entered is not enough to return the change, and other mode of payment (credit, card) are not allowed to be added more than the total');
        }
        const newPayEntry = payments.map(({ isSelected, name, ...item }) => {
            if (item.paymentTypeId == 1) {
                return { ...item, amount: item.amount - payedDifference, orderId };
            }
            else {
                return { ...item, orderId };
            }
        });
        try {
            // update the order table and make it paid.
            await this.prismaService.order.update({
                where: {
                    id: orderId,
                },
                data: {
                    discountApplied: addPaymentDto.discount,
                    balance: payedDifference ? payedDifference : null,
                    paymentStatus: types_1.PaymentStatus.PAID,
                    paidAmount: paidTotal,
                },
            });
            await this.prismaService.payments.createMany({
                data: [...newPayEntry],
            });
            if (addPaymentDto.shouldPrintBill) {
                // don't have to await for print to finish
                this.orderService.printReceipt(orderId);
            }
        }
        catch (error) {
            console.log(error);
            throw new common_1.NotAcceptableException('Something wrong happened while updating the database of printing the receipt');
        }
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_db_1.PrismaService !== "undefined" && data_access_db_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof feature_order_1.OrderService !== "undefined" && feature_order_1.OrderService) === "function" ? _b : Object])
], PaymentService);


/***/ }),
/* 164 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(165), exports);


/***/ }),
/* 165 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeatureImageUploadModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const upload_service_1 = __webpack_require__(166);
const feature_image_upload_controller_1 = __webpack_require__(167);
const data_access_db_1 = __webpack_require__(7);
let FeatureImageUploadModule = class FeatureImageUploadModule {
};
exports.FeatureImageUploadModule = FeatureImageUploadModule;
exports.FeatureImageUploadModule = FeatureImageUploadModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [feature_image_upload_controller_1.UploadController],
        providers: [upload_service_1.UploadService],
        exports: [],
        imports: [data_access_db_1.ApiDataAccessDbModule],
    })
], FeatureImageUploadModule);


/***/ }),
/* 166 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadService = void 0;
const tslib_1 = __webpack_require__(4);
const data_access_db_1 = __webpack_require__(7);
const common_1 = __webpack_require__(1);
const fs = tslib_1.__importStar(__webpack_require__(77));
const path = tslib_1.__importStar(__webpack_require__(79));
// import * as sharp from 'sharp';
let UploadService = class UploadService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async processAndSaveImage(file) {
        const uploadDir = path.join(__dirname, '..', 'public', 'uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        // Generate a unique filename
        const fileExt = path.extname(file.originalname);
        const fileName = `product-${Date.now()}.jpg`;
        const filePath = path.join(uploadDir, fileName);
        // Save the image directly without processing
        fs.writeFileSync(filePath, file.buffer);
        return `/uploads/${fileName}`; // URL for serving
    }
    async deleteExistingFile(productId) {
        //TODO - first read db for existing image file, if existing delete it before saving new.
        const { image: imageUrl } = await this.prismaService.product.findFirstOrThrow({
            where: { id: productId },
            select: { image: true },
        });
        if (imageUrl) {
            const filePath = path.join(__dirname, '..', 'public', imageUrl);
            if (fs.existsSync(filePath)) {
                try {
                    fs.unlinkSync(filePath);
                }
                catch (error) {
                    console.log('Could not find or error occured while deleting the file', error);
                }
            }
        }
    }
    async updateProductImageURL(productId, imageURL) {
        return await this.prismaService.product.update({
            where: { id: productId },
            data: { image: imageURL },
        });
    }
};
exports.UploadService = UploadService;
exports.UploadService = UploadService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_db_1.PrismaService !== "undefined" && data_access_db_1.PrismaService) === "function" ? _a : Object])
], UploadService);


/***/ }),
/* 167 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const platform_express_1 = __webpack_require__(168);
const upload_service_1 = __webpack_require__(166);
let UploadController = class UploadController {
    constructor(uploadService) {
        this.uploadService = uploadService;
    }
    getLod() {
        return { message: 'lol' };
    }
    async uploadImage(file, id) {
        console.log('image upload controller running...');
        const productId = +id;
        if (!file) {
            throw new common_1.BadRequestException('No file uploaded');
        }
        // delete existing product.
        await this.uploadService.deleteExistingFile(productId);
        // Process & Save Image
        const imageUrl = await this.uploadService.processAndSaveImage(file);
        if (imageUrl) {
            await this.uploadService.updateProductImageURL(productId, imageUrl);
        }
        return { message: 'Image uploaded successfully', imageUrl };
    }
};
exports.UploadController = UploadController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], UploadController.prototype, "getLod", null);
tslib_1.__decorate([
    (0, common_1.Post)('image/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        fileFilter: (req, file, cb) => {
            console.log('file intercepter running jaffararr');
            const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
            if (!allowedTypes.includes(file.mimetype)) {
                return cb(new common_1.BadRequestException('Only PNG, JPEG, or JPG allowed'), false);
            }
            cb(null, true);
        },
        limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max size
    })),
    tslib_1.__param(0, (0, common_1.UploadedFile)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof Express !== "undefined" && (_b = Express.Multer) !== void 0 && _b.File) === "function" ? _c : Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UploadController.prototype, "uploadImage", null);
exports.UploadController = UploadController = tslib_1.__decorate([
    (0, common_1.Controller)('upload'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof upload_service_1.UploadService !== "undefined" && upload_service_1.UploadService) === "function" ? _a : Object])
], UploadController);


/***/ }),
/* 168 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),
/* 169 */
/***/ ((module) => {

module.exports = require("express");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
const express_1 = __webpack_require__(169);
const path_1 = __webpack_require__(79);
async function bootstrap() {
    //[TODO] - have a license check here - first time app starts.
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    app.use((0, express_1.json)({ limit: '50mb' }));
    console.log('dir name', __dirname);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    const port = process.env.V2_PORT || 3000;
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;