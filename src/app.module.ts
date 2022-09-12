import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entity/categoria.entity';
import { CategoriaModule } from './categoria/entity/modules/categoria.module';
import { TarefaModule } from './tarefas/entities/modules/tarefa.module';
import { Tarefa } from './tarefas/entities/tarefa.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_todolist',
      entities: [Tarefa, Categoria],
      synchronize: true
    }),

    TarefaModule,
    CategoriaModule
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
