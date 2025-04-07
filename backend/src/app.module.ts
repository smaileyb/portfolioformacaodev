import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { DbModule } from './db/db.module';
import { ProjetoModule } from './projeto/projeto.module';
import { TecnologiaModule } from './tecnologia/tecnologia.module';
import { AssistenteModule } from './assistente/assistente.module';

@Module({
	imports: [DbModule, ProjetoModule, TecnologiaModule, AssistenteModule],
	controllers: [AppController],
})
export class AppModule {}
