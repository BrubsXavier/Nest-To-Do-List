import { Module} from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TarefaController } from "../controllers/tarefa.controller";
import { TarefaService } from "../service/tarefa.service";
import { Tarefa } from "../tarefa.entity";

@Module({
   imports: [TypeOrmModule.forFeature([Tarefa])],
   providers: [TarefaService],
   controllers: [TarefaController],
   exports: [TypeOrmModule]

})

export class TarefaModule {}