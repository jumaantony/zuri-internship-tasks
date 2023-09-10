import { Controller, Get, Query } from '@nestjs/common';

@Controller('slack')
export class SlackController {
  @Get()
  getEndPoint(
    @Query('slack_name') slack_name: string,
    @Query('track') track: string,
  ) {
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const current_day = daysOfWeek[currentDate.getUTCDay()]; // Get the current day as a full day name
	const utcTime = currentDate.toISOString();

    const response = {
      slack_name: slack_name,
      current_day: current_day,
      utc_time: utcTime,
      track: track,
      github_file_url: 'git hub link here',
      github_repo_url: 'git hub repo link here',
      status_code: 200,
    };
    return response;
  }
}
