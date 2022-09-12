import { IsNotEmpty, MaxLength } from "class-validator";
import { Tarefa } from "src/tarefas/entities/tarefa.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tb_categoria')
export class Categoria {

    @PrimaryGeneratedColumn()
    id:number

    @IsNotEmpty()
    @MaxLength(250)
    @Column({nullable: false, length: 250})
    descricao: string

    @OneToMany(() => Tarefa, (tarefa) => tarefa.categoria)
    tarefas: Tarefa[]
}