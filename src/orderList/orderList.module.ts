import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderList } from './orderList.entity';
// import { OrderListController } from './orderList.controller';
import { OrderListService } from './orderList.service'; 



@Module({
    imports: [TypeOrmModule.forFeature([OrderList])],
    // controllers: [OrderListController],
    providers: [OrderListService]
})
export class OrderListModule {}