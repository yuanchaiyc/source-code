# import the needed modules
import re
import simpleguitk as simplegui
import random

# set the variables, files, and flags
QUESTION_NUMBER = 20
text_question = ""
key = ""
text_exp = ""
feedback = ""
score = 0
test_on = False
answer_on = False
test_end = False
exp = False
count = 0
list1 = ["thatO.txt", "thatS.txt", "when.txt", "where.txt", "which.txt", "whom.txt", "whoO.txt", "whoS.txt", "whose.txt", "why.txt"]
list2 = ['that ', 'that ', 'when ', 'where ', 'which ', 'whom ', 'who ', 'who ', 'whose ', 'why ']
list3 = ['thatO_exp.txt', 'thatS_exp.txt', 'when_exp.txt', 'where_exp.txt', 'which_exp.txt', 'whom_exp.txt', 'whoO_exp.txt', 'whoS_exp.txt', 'whose_exp.txt', 'why_exp.txt']
list_joined_sentence = []
list_relative = []
list_exp = []

# build a function that opens and reads each file
def retrieve(x):
    global list_joined_sentence, list_relative
    f = open (list1[x], 'r')
    list_line = f.readlines()
# list_joined_each contains the question strings of individual file
    list_joined_each = []
    list_integrated = []
    list_relative_each = []
    pattern = re.compile(list2[x])
    for index_of_line in range(len(list_line)):
        each_line = [list_line[index_of_line]]
# the first item in the matched pattern is the targeted relative word
        for item in each_line:
            relative_space = pattern.findall(item)[0]
            relative = relative_space[:-1]
# list_relative_each contains the keys of individual file
            list_relative_each.append(relative)
# split each sentence
            list_word = item.split()
# replace the relative word by a blank
            list_word[list_word.index(relative)] = "_________"
            list_integrated.append(list_word)
# join the words into a string
    for each_sentence in list_integrated:
        joined_sentence = " ".join(each_sentence)
        list_joined_each.append(joined_sentence)
# append the list_joined_each list into list_joined_sentence
    for item in list_joined_each:
       list_joined_sentence.append(item)
# append the list_relative_each into list_relative
    for item in list_relative_each:
        list_relative.append(item)
    return (list_joined_sentence, list_relative)

for number in range(10):
    retrieve(number)
    with open(list3[number], 'r') as f:
        for line in f:
            list_exp.append(line)
            
# interface codes

# define a function to adjust the text as canvas length, and returns the line when it exceeds
def return_string(string):
    beginning = 0
    for index in range(len(string)):
        if len(string[beginning:index]) > 50 and string[index] == " ":
            string = string[0:beginning]+string[beginning:index]+'\n'+string[index:]
            beginning = index
            index = beginning + index
    return (string)  
        
    

# instruction handler
def instruction():
    global text_instruction, test_on, answer_on, test_end, exp
    text_instruction = "Welcome to the test! You will be presented with relative clauses whose relative pronouns are omitted. Please input an appropriate pronoun and hit 'Enter' to fill out the blank. Press 'New test' to start the test."
    test_on = False
    answer_on = False
    test_end = False
    
# new test handler
def new_test():
    global score, text_question, test_on, index_poll, list_chosen_index, key, answer_on, test_end, text_exp, exp, count
# set score as 0 at each new test
    score = 0
# randomly select question numbers from poll for new test
    list_chosen_index=[]
    q = 0
    while q < QUESTION_NUMBER:
        r = random.randint(0,len(list_joined_sentence)-1)
        if r not in list_chosen_index:
            q += 1
            list_chosen_index.append(r)
    text_question = return_string(list_joined_sentence[list_chosen_index[0]])
# find the answer to the question asked
    key = list_relative[list_chosen_index[0]]
    text_exp = return_string(list_exp[list_chosen_index[0]])
    print (list_chosen_index)
# remove the question asked from sentence poll
    list_chosen_index.remove(list_chosen_index[0])
# set the test value as true to remove instruction from canvas
    test_on = True
    answer_on = False
    test_end = False
    exp = False
    count += 1

    print (text_question, '\n')
    print (key, '\n')
    print (text_exp, '\n')

# next question handler
def next_question():
    global list_chosen_index, text_question, test_on, key, answer_on, test_end, text_end, text_exp, exp, count
# repeated procedure in new_test()
# if the test comes to the end
    if len(list_chosen_index) == 0:
        text_end = 'Congratulations! You finished the test! Good job!'
        test_on = False
        answer_on = False
        test_end = True
        exp = False
# if not
    else:
        text_question = return_string(list_joined_sentence[list_chosen_index[0]])
        key = list_relative[list_chosen_index[0]]
        text_exp = return_string(list_exp[list_chosen_index[0]])
        list_chosen_index.remove(list_chosen_index[0])
        test_on = True
        answer_on = False
        test_end = False
        exp = False
        count += 1
    print (text_question, '\n')
    print (key, '\n')
    print (text_exp, '\n')

def explanation():
    global list_chosen_index, text_question, test_on, key, answer_on, test_end, text_end, text_exp, exp, count
    if answer_on == False:
        pass
    else:
        exp = True
        test_on = True
        answer_on = True
        test_end = False
    
    
    
   

# input handler
def input_answer(answer):
    global key, score, feedback, answer_on, test_on, test_end
# when the test ends, disable 'enter'
    if test_end == True:
        pass
    else:
        test_on = False
# Hitting 'enter' mutiple times for one question won't count score
        if answer_on == True:
            pass
        else:
            answer_on = True
            test_end = False
            if answer.lower() == key:
                feedback = "Your answer: " + answer + "\nCorrect!"
                score += 1
            else:
                feedback = "Your answer: " + answer + "\nIncorrect"

# draw handler
def draw(canvas):
    global text_instruction, text_question, text_end, test_on, test_end, score
    if test_on == False and answer_on == False and test_end == False:
        canvas.draw_text(return_string(text_instruction), [20, 250], 16, "White")
    elif test_on == True and answer_on == False and test_end == False:
        canvas.draw_text(text_question, [20, 150], 16, "White")
    elif test_on == False and answer_on == True and test_end == False:
        canvas.draw_text(text_question, [20, 150], 16, "White")
        canvas.draw_text(feedback, [20, 220], 16, "Blue")
    elif exp == True:
        canvas.draw_text(text_question, [20, 150], 16, "White")
        canvas.draw_text(feedback, [20, 220], 16, "Blue")
        canvas.draw_text(text_exp, [20, 330], 16, "Yellow")
    elif test_on == False and answer_on == False and test_end == True:
        canvas.draw_text(text_end, [50, 240], 16, "Yellow")
        canvas.draw_text("Your score is " + str(score)+ " out of " + str(QUESTION_NUMBER), [50, 270], 16, "Red")
    
    
# register the handlers    
frame = simplegui.create_frame("Relative pronoun test", 700, 500)
frame.set_canvas_background("Black")
frame.add_button("Instruction", instruction, 80)
frame.add_label("")
frame.add_button("New test", new_test, 80)
frame.add_label("")
frame.add_button("Next question", next_question, 80)
frame.add_label("")
frame.add_button("Explanation", explanation, 80)
frame.add_label("")
frame.add_input("Answer", input_answer, 80)
frame.set_draw_handler(draw)
# start instruction() once the program is launched
instruction()
# start the frame
frame.start()


        







