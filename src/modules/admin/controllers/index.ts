import { Body, Controller, Post } from '@nestjs/common';
import { AdminService } from '../services';

interface CreateAdmin {
  userId: string;
}

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('')
  public create(@Body() body: CreateAdmin) {
    return this.adminService.create(body.userId);
  }
}
