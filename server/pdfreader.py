from PyPDF2 import PdfReader


def contextreader(pdf):
    reader = PdfReader(pdf)
    number_of_pages = len(reader.pages)
    page = reader.pages[0]
    text = page.extract_text()
    return text
