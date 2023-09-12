import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { slackResponseExample } from './slack-responseexample';

@Controller('/api')
export class SlackController {
  @Get()
  @ApiOperation({
    summary: 'Get the current day, time, slack name and track',
    description: 'This endpoint returns the current day, time, slack name and track',
  })
  @ApiResponse({
    status: 200,
    description: 'The current day, time, slack name and track',
    content: {
      'application/json': {
        schema: {
          example: slackResponseExample,
        },
      },
    },
  })
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
      github_file_url: 'https://github.com/jumaantony/zuri-internship-tasks/blob/main/Task_1/src/slack/slack.controller.ts',
      github_repo_url: 'https://github.com/jumaantony/zuri-internship-tasks/tree/main/Task_1',
      status_code: 200,
    };
    return response;
  }
}
