# I am adding sentence marker to both the beginning and end of each sentence

import re
import sys
import math
from collections import Counter




# unigram: create list consists of the unigram and its probability in tuples
def uni_count(x):
    global uni_prob, uni_list, uni_count, vocab
    word_list = []
    for line in x:
# insert sentence delimitor to the beginning and end of a sentence
        new_line = "<s> " + line.lower() + " <s>"
#        print (new_line)
# tokenize the new line into a list
        for word in new_line.split():
            word_list.append(word)
# count word frequency
    uni_count = list(Counter(word_list).items())
    uni_list = []
# extract the words from the count tuple
    for cnt_tuple in uni_count:
        uni_list.append(cnt_tuple[0])        
# count the probablity of each word
    token = len(word_list)
    vocab = len(uni_list)
    uni_prob = []
    for cnt_tuple in uni_count:
        word_prob = math.log10(cnt_tuple[1] / token)
        prob_tuple = (cnt_tuple[0], word_prob)
        uni_prob.append(prob_tuple)
    return uni_list, uni_count

train_file = open(sys.argv[1], 'r')
uni_count(train_file)

# calculate the unigram probablity of the test file (process by line)
def test_uni_prob(x):
    sen_uni_prob = 0
    new_line = "<s> " + x.lower() + " <s>"
    for word in new_line.split():
        if word not in uni_list:
            sen_uni_prob = "undefined"
            break
        else:
            test_word_prob = uni_prob[uni_list.index(word)][1]
            sen_uni_prob = round(sen_uni_prob + test_word_prob, 4)
    print ("S =", x + "Unigrams: logprob(s) =", sen_uni_prob)



# bigram: create lists with bigram and smoothed & unsmoothed prob in tuple

def bi_count(x):
    global uni_list, bi_list, bi_prob_list, uni_count, bi_count, bi_prob_smooth_list
    bigram = []
    for line in x:
        new_line = "<s> " + line.lower() + " <s>"
        bigram_line = list(zip(new_line.split(), new_line.split()[1:]))
        bigram.extend(bigram_line)
# bi_count is list contains tuples consist of bigram and its frequency
    bi_count = list(Counter(bigram).items())
# bi_list contains all the bigrams in the same order as bi_count
    bi_list = []
    for cnt_tuple in bi_count:
        bi_list.append(cnt_tuple[0])
# calculate bigram probability
    bi_prob_list = []
    bi_prob_smooth_list = []
    for cnt_tuple in bi_count:
        cnt_bigram = cnt_tuple[1]
        wi_1 = cnt_tuple[0][0]
        cnt_wi_1 = uni_count[uni_list.index(wi_1)][1]
# bi_prob is the unsmoothed bigram probability
        bi_prob = math.log10(cnt_bigram / cnt_wi_1)
# bi_prob_smooth is the smoothed bigram probability
        bi_prob_smooth = math.log10((cnt_bigram + 1) / (cnt_wi_1 + vocab))
# prob_tuple is (bigram, unsmoothed prob); bi_prob_list is the list of all bigram prob tuples
        prob_tuple = (cnt_tuple[0], bi_prob)
        bi_prob_list.append(prob_tuple)
# prob_tuple_smooth is (bigram, smoothed prob); bi_prob_smooth_list is the list of all smoothed bigram prob tuples
        prob_tuple_smooth = (cnt_tuple[0], bi_prob_smooth)
        bi_prob_smooth_list.append(prob_tuple_smooth)
        
    return bi_list, bi_count, bi_prob_list, bi_prob_smooth_list

train_file = open(sys.argv[1], 'r')    
bi_count(train_file)


# calculate the bigram probablity of the test file (process by line)

def test_bi_prob(x):
    global bi_list, bi_prob_list
# add sentence markers to test file
    new_line = "<s> " + x.lower() + " <s>"
# access the bigrams in test line
    bigram_line = list(zip(new_line.split(), new_line.split()[1:]))
    sen_bi_prob = 0
# access the bigram probability in training file
    for bigram in bigram_line:
        if bigram in bi_list:
            test_bi_prob = bi_prob_list[bi_list.index(bigram)][1]
            sen_bi_prob = round(sen_bi_prob + test_bi_prob, 4)
# if the bigram is unseen, attribute sentence probability as "undefined"
        else:
            sen_bi_prob = "undefined"
            break
    print ("Bigrams: logprob(s) =", sen_bi_prob)


# calculate the smoothed bigram probablity of the test file (process by line)   
def test_bi_prob_smooth(x):
    global bi_list, bi_prob_smooth_list, uni_count, uni_list, vocab
    new_line = "<s> " + x.lower() + " <s>"
    bigram_line = list(zip(new_line.split(), new_line.split()[1:]))
    sen_bi_prob = 0
    for bigram in bigram_line:
        if bigram in bi_list:
            test_bi_prob = bi_prob_smooth_list[bi_list.index(bigram)][1]
# if the bigram is unseen, assign its frequency as 1
        else:
            cnt_bigram = 1
            cnt_wi_1 = uni_count[uni_list.index(bigram[0])][1]
            test_bi_prob = math.log10(cnt_bigram / (cnt_wi_1 + vocab))
        sen_bi_prob = round(sen_bi_prob + test_bi_prob, 4)
    print ("Smoothed Bigrams: logprob(s) =", sen_bi_prob)

test_file = open(sys.argv[2], 'r')    
for line in test_file:
    test_uni_prob(line)
    test_bi_prob(line)
    test_bi_prob_smooth(line)
    print ("\n")


    
            
        



    



    
            
    
