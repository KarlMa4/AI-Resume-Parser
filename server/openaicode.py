import openai
import pdfreader


system_content = """Your a resume inspector, Please identify and extract the key sections of this resume (such as Objective, Education, Skills, Experience, and Projects). For each section, use clear and concise bullet points to list the most important details. Keep the focus on quantifiable achievements, technologies used, and the role-specific tasks performed. Present the information in a structured and easy-to-read format. For example:

[Section Name]
[Key Role/Title]
[Date Range]
[Notable Achievements or Contributions]
[Technologies Used]"""
user_content = pdfreader.contextreader('Katherine.pdf')

client = openai.OpenAI()

chat_completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": system_content},
        {"role": "user", "content": user_content},
    ],
    temperature=0.7,
    max_tokens=1000,
)

response = chat_completion.choices[0].message.content
print("OpenAI API:\n", response)
