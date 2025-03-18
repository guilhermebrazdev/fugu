import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ApiResponse } from 'src/common/api-response.dto';
import { WeatherResponseDto } from './dto/wheather.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';

@UseInterceptors(CacheInterceptor)
@Controller('weather')
export class WeatherController {
  constructor(private readonly wheatherService: WeatherService) {}

  @Get('/:city')
  async weatherByCity(
    @Param('city') city: string,
  ): Promise<ApiResponse<WeatherResponseDto>> {
    return await this.wheatherService.getCurrentWeatherByCity(city);
  }
}
