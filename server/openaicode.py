import os
import openai
import pdfreader


def Resume_Parser():
    try:
        system_content = """You are a resume inspector. Your task is to extract the following key sections from the resume in the exact order and format provided, regardless of whether all sections are present. If a section is missing, state "Not Provided" for that section. Each section must follow the structured format with the section name as a header.

Required Sections:
0. Person's Name
1. Objective
2. Education
3. Skills
4. Experience
5. Projects

For each section, use clear and concise bullet points to list the most important details. Prioritize quantifiable achievements, technologies used, and role-specific tasks performed.

Present the information in the following structured format:

Person's name

Objective:
- [Objective Statement] (If not provided, write "Not Provided")

Education:
- Degree: [Degree Name]
- Institution: [Institution Name]
- Graduation Date: [Graduation Date] (If not provided, write "Not Provided")

Skills:
- [Skill 1]
- [Skill 2]
- [Skill 3]
(If not provided, write "Not Provided")

Experience:
- Company: [Company Name]
- Role: [Job Title]
- Date Range: [Start Date - End Date]
- Key Responsibilities: 
  - [Notable Achievement/Contribution]
  - [Technologies Used]
(If not provided, write "Not Provided")

Projects:
- Project Name: [Project Name]
- Description: [Brief Project Description]
- Technologies Used: [Technologies Used]
(If not provided, write "Not Provided")

Ensure that each section appears in the specified order with consistent formatting and structure. If a section is completely absent from the resume, state "Not Provided."
"""

        uploads_folder = "uploads"

        # Get the first (and only) file in the uploads folder
        first_file = os.listdir(uploads_folder)[0]
        first_file_path = os.path.join(uploads_folder, first_file)

        user_content = pdfreader.contextreader(first_file_path)
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
        return response
    except openai.error.OpenAIError as e:
        print(f"Error occurred: {e}")
        return "Error parsing the resume."
