import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CodeLanguage } from '../enum/code-language.enum';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Code {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: CodeLanguage })
  language: CodeLanguage;

  @Column({ default: '' })
  content: string;

  @Column()
  private: boolean;

  @ManyToOne(() => User, (user) => user.codes)
  authorUser: User;
}
