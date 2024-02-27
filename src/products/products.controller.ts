import { CreateUserDto } from './userDto/create-user.dto';
import { UpdateUserDto } from "./userDto/update-user-dto";
import { ProductsService } from "./products.service";
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  create(@Body() create: CreateUserDto) {
    return this.productService.create(create);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatedata: UpdateUserDto) {
    return this.productService.update(id, updatedata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}