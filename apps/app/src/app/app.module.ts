import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkspaceLibModule } from '@workspace/lib';

@Module({
  imports: [WorkspaceLibModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
