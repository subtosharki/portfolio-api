import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import {ApiTags} from "@nestjs/swagger";

@Controller('/')
@ApiTags('Portfolio')
export class AppController {
  public constructor(private readonly appService: AppService) {}
  @Get('/')
  public mainDirectory() {
    return this.appService.mainDirectory();
  }
  @Get('/about')
  public aboutMe() {
    return this.appService.aboutMe();
  }
  @Get('/skills')
  public skills() {
    return this.appService.skills();
  }
  @Get('/projects')
  public projects() {
    return this.appService.projects();
  }
  @Get('/contact')
  public contact() {
    return this.appService.contact();
  }
  @Get('/github')
  @Redirect('https://github.com/subtosharki', 301)
  public github() {}
}
