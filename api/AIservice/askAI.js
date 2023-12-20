import OpenAI from "openai"
async function askAI(error){
    const openai=new OpenAI({apiKey: "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"});
    const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": error}],
  });
  return(chatCompletion.choices[0].message);
}
export default askAI