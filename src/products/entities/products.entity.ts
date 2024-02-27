import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Products' })
export class Products {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'varchar' })
  price: number;
}