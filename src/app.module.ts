import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ClientModule } from './modules/client/client.module';

@Module({
  imports: [UsersModule, ClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
