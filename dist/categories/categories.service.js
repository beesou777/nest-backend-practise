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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CategoriesService = class CategoriesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCategoryDto) {
        const checkExist = await this.prisma.category.findFirst({
            where: {
                name: createCategoryDto.name,
                type: createCategoryDto.type
            }
        });
        if (checkExist && checkExist.name === createCategoryDto.name && checkExist.type === createCategoryDto.type)
            throw new common_1.BadRequestException(`Category with name ${createCategoryDto.name} already exists`);
        if (checkExist && checkExist.type === createCategoryDto.type)
            throw new common_1.BadRequestException(`Category with type ${createCategoryDto.type} already exists`);
        return this.prisma.category.create({
            data: createCategoryDto,
        });
    }
    async findAll() {
        return this.prisma.category.findMany();
    }
    async findOne(id) {
        const category = await this.prisma.category.findUnique({
            where: { id },
        });
        if (!category) {
            throw new common_1.NotFoundException(`Category with ID ${id} not found`);
        }
        return category;
    }
    async update(id, updateCategoryDto) {
        const category = await this.findOne(id);
        if (!category) {
            throw new common_1.NotFoundException(`Category with ID ${id} not found`);
        }
        const checkExist = await this.prisma.category.findFirst({
            where: {
                id: { not: id },
                name: updateCategoryDto.name,
                type: updateCategoryDto.type,
            },
        });
        if (checkExist) {
            throw new common_1.BadRequestException(`Category with name ${updateCategoryDto.name} and type ${updateCategoryDto.type} already exists`);
        }
        return this.prisma.category.update({
            where: { id: category.id },
            data: updateCategoryDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.category.delete({
            where: { id },
        });
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map