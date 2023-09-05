import { Module } from "@nestjs/common";
import { Ferature1Module } from "./feature1.module";
import { Ferature2Module } from "./feature2.module";

@Module({
  imports: [Ferature1Module, Ferature2Module],
  controllers: [],
  providers: [],
  exports: [],
})
export class OrdersModule {
  constructor() {
    console.log("Orders Module Running");
  }
}
