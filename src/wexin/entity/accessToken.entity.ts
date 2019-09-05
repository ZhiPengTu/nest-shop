/*
 * @Author: create.zhipengTu 
 * @Date: 2019-09-05 11:08:35 
 * @Last Modified by: update.zhipengTu
 * @Last Modified time: 2019-09-05 11:11:22
 */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('accessTokenApi')
export class accessTokenEntity {
  @PrimaryGeneratedColumn()
  token_id: number;

  @Column()
  update_time: number;
  @Column()
  accessTokenType: string;

  @Column()
  accessTokenValue: string;
  
}