import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('userentity')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  user_id: string;

  @Column({ length: 50 })
  name: string;

  @Column()
  age: number;
  
  @Column()
  we_uid: string;
  
  @Column()
  created_at: string;

  @Column()
  updated_at: string;
}