import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class CommonEntity {
  @CreateDateColumn()
  private createdAt: Date;
  @UpdateDateColumn()
  private updatedAt: Date;
  @PrimaryGeneratedColumn()
  id: number;
}
