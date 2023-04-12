const veryUnsecureAPIKey = "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";

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: veryUnsecureAPIKey,
});
const openai = new OpenAIApi(configuration);

 const completeText = async (prompt) => {
  let answer = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ "role": "user", "content": prompt }]
  })
  return answer
}

/*
const answer = completeText("Say 'Hello World!'");
const actualAnswer = await answer;
console.log(actualAnswer.data.choices[0].message.content);
*/
const sampleInput = "World War II or the Second World War, often abbreviated as WWII or WW2, was a global conflict that lasted from 1939 to 1945. The vast majority of the world's countries, including all of the great powers, fought as part of two opposing military alliances: the Allies and the Axis. Many participants threw their economic, industrial, and scientific capabilities behind this total war, blurring the distinction between civilian and military resources. Aircraft played a major role, enabling the strategic bombing of population centres and the delivery of the only two nuclear weapons ever used in war. World War II was by far the deadliest conflict in history; it resulted in an estimated 70 to 85 million fatalities, mostly among civilians. Tens of millions died due to genocides (including the Holocaust), starvation, massacres, and disease. In the wake of the Axis defeat, Germany and Japan were occupied, and war crimes tribunals were conducted against German and Japanese leaders."

const quizPrompt = (quizNumbers) => `Taking the following information, create ${quizNumbers} suitable quiz questions`;
const summarizePrompt = "Summarise the following text: ";
const ElaboratePrompt = "I am a student and I want you to further explain the following text to me: ";
const MarkingPrompt = "For the following question, is this answer correct (respond with y/n): "

const questions = await completeText(quizPrompt(5) + sampleInput)
const response = questions.data.choices[0].message.content.split('\n')
console.log(response)


/*
const input = completeText(ElaboratePrompt + sampleInput)
const ans = await input;
*/
// console.log(ans.data.choices[0]
