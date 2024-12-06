'use server'

type State = {
  error?: string;
  success?: boolean;
  url?: string;
} | null;

export async function sendToTelegram(prevState: State, formData: FormData): Promise<State> {
  const phoneNumber = formData.get('phoneNumber') as string | null;

  if (!phoneNumber) {
    return { error: 'Phone number is required' };
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error('Telegram bot token or chat ID is missing');
    return { error: 'Configuration error' };
  }

  const message = `New phone number: ${phoneNumber}`;
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message to Telegram');
    }

    return { success: true, url };
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return { error: 'Failed to send message' };
  }
}
