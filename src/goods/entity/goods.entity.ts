import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gooodsentity')
export class GooodsEntity {
  @PrimaryGeneratedColumn()
  goods_id: number;

  @Column()
  category_id: number;

  @Column({ length: 50 })
  goods_name: string;

  @Column()
  goods_lable: string;

  @Column()
  goods_as: string;
  
  @Column()
  goods_brand: string;

  @Column()
  goods_desc: string;

  @Column()
  user_id: number;
  
  @Column()
  goods_seq: string;
  
  @Column()
  goods_status: number;
  
  @Column()
  goods_remark: string;
  
  @Column()
  created_at: string;

  @Column()
  updated_at: string;
}