import nltk
from nltk.corpus import brown
word = [('that', 'WPO'), ('that', 'WPS'), ('whom', 'WPO'), ('who', 'WPS'), ('who', 'WPO'), ('which', 'WDT'), ('whose', 'WP$')]

def grep(x):
    list = []
    count = 0
# search the tuple in word list in the tagged corpus
    for s in brown.tagged_sents():
        sent = ""
        flag = False
# limit the result within 15 tokens
        if count < 15:
            for w in s:
                if w == word[x]:
                    flag = True
                    count += 1
                sent += " " + w[0]            
# append the sentence which contains the target word into list
            if flag == True:
                list.append(sent+'\n')
        else:
            continue
    return list
# write the lists into separate files
list = ["thatO.txt", "thatS.txt", "whom.txt", "whoS.txt", "whoO.txt", "which.txt", "whose.txt"]
for number in range(len(list)):
    with open(list[number], 'w') as f:
        for s in grep(number):
            f.write(s)

# restrict the preceding word of "when" as "day(s)" and "time"
word_when = ('when', 'WRB')
precede = ['day', 'days', 'time']
count = 0
list = []
for s in brown.tagged_sents():
    sent = ""
    flag = False
    if count <= 15:
        for w in s:
            if w == word_when:
                if s[s.index(w)-1][0] in precede:
                    flag = True
                    count += 1
            sent += " " + w[0]            
    if flag == True:
        list.append(sent+'\n')
# write sentences contain "when" into file
with open('when.txt', 'w') as f:
    for s in list:
        f.write(s)

# restrict the preceding word of "where" as place name
word_where = ('where', 'WRB')
count = 0
list = []
for s in brown.tagged_sents():
    sent = ""
    flag = False
    if count <= 15:
        for w in s:
            if w == word_where:
                if s[s.index(w)-1][1] == 'NN-TL':
                    flag = True
                    count += 1
            sent += " " + w[0]            
    if flag == True:
        print (sent)
        list.append(sent+'\n')
# write sentences contain "where" into file
with open('where.txt', 'w') as f:
    for s in list:
        f.write(s)

# restrict the preceding word of "why" as "reason(s)"
word_why = ('why', 'WRB')
precede = ['reason', 'reasons']
count = 0
list = []
for s in brown.tagged_sents():
    sent = ""
    flag = False
    if count <= 15:
        for w in s:
            if w == word_why:
                if s[s.index(w)-1][0] in precede:
                    flag = True
                    count += 1
            sent += " " + w[0]            
    if flag == True:
        list.append(sent+'\n')
# write sentences contain "why" into file
with open('why.txt', 'w') as f:
    for s in list:
        f.write(s)

