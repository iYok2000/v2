import { Controller, Get, Render } from '@nestjs/common';
import { async } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('Homepage')
  async getDashbord() {
    const res = await this.appService.findAll();
    console.log(res);
    return { data: res.data };
  }

  @Get('Dashboard')
  @Render('Dashboard')
  async getHomepage() {
    const res = await this.appService.findAll();
    console.log(res);
    return { data: res.data };
  }

  @Get('Contract')
  @Render('Contract')
  getContract() {
    return {};
  }

  @Get('Cat')
  @Render('Cat')
  getCat() {
    return {};
  }

  @Get('Best')
  @Render('Best')
  async getBest() {
    const res = await this.appService.findten();
    return {data : res.data}
  }
}
