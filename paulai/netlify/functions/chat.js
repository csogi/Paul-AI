export async function handler(event) {
  const { messages } = JSON.parse(event.body);

  // This is where you'd call the OpenAI API or similar
  // For demo purposes, we'll just echo back the last message
  const userMessage = messages[messages.length - 1].content;
  const reply = `You said: ${userMessage}`;

  return {
    statusCode: 200,
    body: JSON.stringify({ reply })
  };
}
