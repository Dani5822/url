import { Controller, Get, Param, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';
import { query } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }

  @Get('hatterszin')
  @Render('hatter')
  hatterszin(@Query('bgcolor') bgcolor:string ='#00ff59'){
    return{
      bgcolor
    }
  }

  @Get('jegkrem/:id')
  @Render('jegkrem')
  jegkrem(@Param('id') id:string){
    return{
      id,
      nev:"eperfagyi",
      ar:450,
    }
  }

}
