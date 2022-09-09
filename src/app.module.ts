import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
      entities: [Tarefa],
      synchronize: true
    }),

    TarefaModule
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
