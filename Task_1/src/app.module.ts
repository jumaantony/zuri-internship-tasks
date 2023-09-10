import { Module } from '@nestjs/common';
import { SlackController } from './slack/slack.controller';

@Module({
  imports: [],
  controllers: [SlackController],
  providers: [],
})
export class AppModule {}
