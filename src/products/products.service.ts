import { UpdateUserDto } from './userDto/update-user-dto';
import { CreateUserDto } from './userDto/create-user.dto';
import { Products } from './entities/products.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productRepo: Repository<Products>) {
  }

  async create(createProduct: CreateUserDto) {
    const Product = this.productRepo.create(createProduct);
    return await this.productRepo.save(Product);
  }

  async findAll() {
    return await this.productRepo.find();
  }

  async findOne(id: string) {
    return await this.productRepo.findOne({ where: { id } });
  }

  async update(id: string, update: UpdateUserDto) {
    const Product = await this.findOne(id);
    if (!Product) {
      throw new NotFoundException();
    }

    Object.assign(Product, update);

    return await this.productRepo.save(Product);
  }

  async remove(id: string) {
    const Product = await this.findOne(id);
    if (!Product) {
      throw new NotFoundException();
    }
    return await this.productRepo.remove(Product);
  }
}