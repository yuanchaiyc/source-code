# take the input as file name
import re
import sys
file = open(sys.argv[1], 'r')

# function counting paras, sents, words
def count(x):
    para_num = 1
    file_text = ""
    
# count para
    pattern_para = re.compile("\t.*")
    for line in x:          
        if line == "\n":
            para_num += 1
        elif pattern_para.match(line) != None:
            para_num += 1
            file_text += line
        else:
            file_text += line       
                       
# count sents
# convert the whole text into a string without line delimiter
    pattern_sent1 = re.compile(".*")
    sent1 = pattern_sent1.findall(file_text)
    for item in sent1:
        if item == '':
            sent1.remove(item)    
    new_text = " ".join(sent1)
# pattern_sent2 defines sentences as strings begin with a space and end with period, exclamation or question mark
    pattern_sent2 = re.compile("\s[^.!?]*[.!?]")
# pattern_sent3 sort out abbreviations, addressments, websites, and floats that would be mistaken as a sentence
    pattern_sent3 = re.compile("[a-zA-Z][.]([a-zA-Z][.])+|Mr\.|Ms\.|Mrs\.|Dr\.|Prof\.|\.com|([0-9]+\.[0-9]+)")
# pattern_sent4 add the cases where sentences do end with the above exceptions.
    pattern_sent4 = re.compile("[a-zA-Z][.]([a-zA-Z][.])+\s[A-Z]")
    sent2 = pattern_sent2.findall(new_text)
    sent3 = pattern_sent3.findall(new_text)
    sent4 = pattern_sent4.findall(new_text)
# abstract exceptions, add non-exceptions
    sent_num = len(sent2)-len(sent3)+len(sent4)
    
# count words
# words are defined as strings begin with a space (or at line beginning) and followed by non-space alphabets
    pattern_word1 = re.compile("(^| )[^ ]+")
    pattern_word2 = re.compile("[a-zA-Z]'[a-zA-Z]")
    word1 = pattern_word1.findall(new_text)
    word2 = pattern_word2.findall(new_text)
    word_num = len(word1) + len(word2)
    print ("There are", para_num, "paragraphs,", sent_num, "sentences, and", word_num, "words in this file.")
count(file)    
    
