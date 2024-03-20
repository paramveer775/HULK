import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class Customer extends BaseEntity {
  
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ nullable: true })
  firstName!: string | null

  @Column({ nullable: true })
  lastName!: string | null

  @Column({ nullable: true })
  age!: number | null

  @Column({ nullable: true })
  email!: string | null

  @Column({ nullable: true })
  password!: string | null

  @Column({ nullable: true })
  phone!: string | null
}
