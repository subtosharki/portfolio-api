import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public mainDirectory() {
    return {
      message: 'Welcome to my portfolio API, because I can not make websites.',
      endpoints: [
        {
          'GET /': 'This page',
          'GET /portfolio': 'OpenAPI documentation of all endpoints',
          'GET /about': 'About me',
          'GET /skills': 'My skills',
          'GET /projects': 'My projects',
          'GET /contact': 'Contact me',
          'GET /github': 'A redirect to my github',
        },
      ],
    };
  }

  public aboutMe() {
    return {
      message: 'About me',
      aboutMe: [
        {
          name: 'Cameron',
          username: 'subtosharki',
          hobbies: ['Programming', 'Skating', 'Surfing'],
          github: 'https://github.com/subtosharki',
        },
      ],
    };
  }

  public skills() {
    return {
      message: 'My skills',
      skills: [
        'JavaScript',
        'TypeScript',
        'NodeJS',
        'Express',
        'Socket.IO',
        'NestJS',
        'Prisma',
        'Postgresql',
      ],
    };
  }

  public projects() {
    return {
      message: 'My projects',
      projects: [
        {
          name: 'Portfolio API',
          description:
            'My portfolio but in an API because I can not make websites.',
          github: 'https://github.com/subtosharki/portfolio-api',
          language: 'TypeScript',
          framework: 'NestJS',
          libraries: ['Express'],
          runtime: 'NodeJS',
        },
        {
          name: 'ExiaCAD Monitor',
          description: 'A monitor for the ExiaCAD.',
          github: 'https://github.com/subtosharki/exia-cad-monitor',
          language: 'TypeScript',
          libraries: ['Express', 'Socket.IO'],
        },
        {
          name: 'Link shortener API',
          description: 'A link shortener API.',
          github: 'https://github.com/subtosharki/link-shortener-api',
          language: 'TypeScript',
          framework: 'NestJS',
          libraries: ['Express', 'Prisma'],
          database: 'Postgresql',
          runtime: 'NodeJS',
        },
      ],
    };
  }

  public contact() {
    return {
      message: 'Contact me',
      contact: [
        {
          github: 'https://github.com/subtosharki',
          discord: 'sharki#5669',
        },
      ],
    };
  }
}
