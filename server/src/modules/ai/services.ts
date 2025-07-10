import logger from '@/libs/logger';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export const getArticleSummaryFromAI = async (title: string, content: string) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'developer',
          content:
            'You are an assistant specializing in summarizing news given the title and content of the article.',
        },
        {
          role: 'user',
          content: `The article title is: ${title}`,
        },
        {
          role: 'user',
          content: `Summarize the following article in a few sentences: 
          ${content}`,
        },
      ],
      model: 'gpt-4.1',
    });

    return completion.choices[0].message.content;
  } catch (error) {
    logger.error('Error generating summary:', error);
    throw error;
  }
};
