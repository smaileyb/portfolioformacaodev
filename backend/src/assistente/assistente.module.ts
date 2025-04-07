import { Module } from "@nestjs/common"
import { AssistenteProvider } from "./assistente.provider"
import { AssistenteController } from "./assistente.controller"
import { DbModule } from "src/db/db.module"

@Module({
	providers: [AssistenteProvider],
	controllers: [AssistenteController],
	imports: [DbModule],
})
export class AssistenteModule {}
