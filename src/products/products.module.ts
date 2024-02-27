import { Products } from './entities/products.entity';
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import {  TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Products])],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}