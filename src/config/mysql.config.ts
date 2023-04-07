import { ConfigService } from '@nestjs/config';

export const getMySQLConfig = (configService: ConfigService) => ({
  host: configService.get('DB_HOST'),
  port: parseInt(configService.get('DB_PORT'), 10),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
});
