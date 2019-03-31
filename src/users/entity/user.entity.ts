import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('userentity')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: string;

  @Column({
    charset:'utf8mb4'
  })
  name: string;

  @Column()
  age: number;
  
  @Column()
  we_uid: string;
  
  @Column({
    default:'',
    charset:'utf8mb4'
  })
  email: string;
  
  @Column()
  created_at: string;

  @Column()
  updated_at: string;
}