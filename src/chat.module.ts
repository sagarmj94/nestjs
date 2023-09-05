import { Module } from "@nestjs/common";
import { Ferature3Module } from "./feature3.module";

@Module({
  imports: [Ferature3Module],
  controllers: [],
  providers: [],
  exports: [],
})
export class ChatModule {
  constructor() {
    console.log("Chat Module Running");
  }
}
