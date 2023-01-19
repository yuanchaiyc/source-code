
import sys
from collections import Counter
train = open(sys.argv[1], "r")
open("output_yuanchai.txt", "w")

def count(train):
# step 1: arrange the input file into lists
# observe_tag is list consist of tuples (observation, tag);
# list_observe consists of observations
# list_tag consists of tags
# Those three lists are aligned in the same order
    global vocab, dict_observe_count, dict_tag_count, bigram_tag_count, dict_observe_prob, dict_tran_prob, list_tag_unique
    list_space = [line.strip() for line in train]
    list_original = []
    for i in list_space:
        if i != "":
            list_original.append(i)
    list_sentence = []
    start = 0
# list_sentence store every sentence in an individual list
    for index in range(len(list_original)):
        if list_original[index] == ".\t.":
            list_sentence.append(list_original[start:(index+1)])
            start = index + 1
# add sentence delimitors to the beginning and end of sentence
# list_observe_tag consists of (observe, tag) include ("<s>, start")
    list_observe_tag = []
    for sentence in list_sentence:
        sentence.insert(0, "<s>\tstart")
        for item in sentence:
# add <s> to the beginning of the sentence
            
            list_observe_tag.append(tuple(item.split("\t")))
# observe consists of all the observations include "<s>"
# list_tag consists of all the tags include "start"
    list_observe = []
    list_tag = []    
    for item in list_observe_tag:
        list_observe.append(item[0])
        list_tag.append(item[1])
    

# count observation probablity and transition probability


# dict_observe_count: the frequency of each observation
    dict_observe_count = dict(Counter(list_observe_tag).items())

        
# list_tag_unique has the same order as list_tag_count
# dict_tag_count: the frequency of each tag
    dict_tag_count = dict(Counter(list_tag).items())
    list_tag_unique = []
    for i in dict_tag_count:
        list_tag_unique.append(i)

        
# calculate observation probablity
    dict_observe_prob = {}
    for item in dict_observe_count:        
        tag = item[1]
        observe_count = dict_observe_count[item]
        tag_count = dict_tag_count[tag]
        dict_observe_prob[item] = observe_count / tag_count 

        
# calculate transitional probability
# list_bigram_tag: the tuple of two consecutive tags without (".", "start")
# bigram_tag_count: the count of each unique consecutive tags
    bigram_tag = list(zip(list_tag, list_tag[1:]))
    list_bigram_tag = []
    for item in bigram_tag:
        if item != (".", "start"):
            list_bigram_tag.append(item)
    bigram_tag_count = dict(Counter(list_bigram_tag).items())
        
# dict_tran_prob: store the transitional probability
    vocab = len(dict_tag_count)
    dict_tran_prob = {}
    for bigram_tag in bigram_tag_count:
# bigram_tag: the bigram tag the prob is being calculated
        cnt_bigram_tag = bigram_tag_count[bigram_tag]
# tag_i_1: the first tag in the bigram tag tuple
        tag_i_1 = bigram_tag[0]
# get the count of the t-1 tag from the list_tag count
        cnt_tag_i_1 = dict_tag_count[tag_i_1]
# the probablity of the bigram tag sequence is the count of the bigram over the count of tag i-1
# do plus small number smoothing
        bigram_tag_prob = (cnt_bigram_tag + 0.000000000001) / (cnt_tag_i_1 + vocab * 0.000000000001)
        dict_tran_prob[bigram_tag] = bigram_tag_prob
# make the probability of start and end transitions as 0
    dict_tran_prob.update({("start", "start"):0, ("start", "."):0, (".", "start"):0, (".", "."):0})

count(train)

test = open(sys.argv[2], "r")
def create_list(test):
    global list_sentence
    list_original = [line.strip() for line in test]
    list_sentence = []
    start = 0

# save each sentence as a separate list into list_sentence. Each observation is an item in the list
    for index in range(len(list_original)):
        if list_original[index] == ".":
            list_sentence.append(list_original[start:(index+1)])
            start = index + 2

create_list(test)

    
def viterbi(sentence):
    global vocab, dict_observe_count, dict_tag_count, bigram_tag_count, dict_observe_prob, dict_tran_prob, list_sentence, list_tag_unique
    
    list_v = []
    list_v1 = []
    list_back = []
# initialization
    for tag in list_tag_unique:
        if ("start", tag) in dict_tran_prob:
            tran_prob = dict_tran_prob[("start", tag)]
        else:
            tran_prob = 0.000000000001 / (dict_tag_count[("start")] + vocab * 0.000000000001) 
            
        if (sentence[0], tag) in dict_observe_prob:
            observe_prob = dict_observe_prob[(sentence[0], tag)]

        else:
            observe_prob = 0.000000000001

        v1 = tran_prob * observe_prob
        list_v1.append(v1)
    list_v.append(list_v1)
# recursion
    for index in range(len(sentence)-2):
        list_recursion = []
        list_recursion_back = []
        list_sequence = []
        observe = sentence[1:][index]
        for tag in list_tag_unique:
# list_each consists of the v from state i at time j-1
            list_each = []
# list_each_back consists of the backpointer from time j to time j-1
# list_each and list_each_back are parallel
            list_each_back = []
                
            if (observe, tag) in dict_observe_prob:
                observe_prob = dict_observe_prob[(observe, tag)]
            else:
                observe_prob = 0.000000000001

            for tag_i_1 in list_tag_unique:
                back_each = list_tag_unique.index(tag_i_1)
                list_each_back.append(back_each)
                if (tag_i_1, tag) in dict_tran_prob:
                    tran_prob = dict_tran_prob[(tag_i_1, tag)]
                        
                else:
                    tran_prob = 0.000000000001 / (dict_tag_count[tag_i_1] + vocab * 0.000000000001) 
# v of every path to one tag
                vi = observe_prob * tran_prob * list_v[index][back_each]

                list_each.append(vi)
# the max v to that tag
            vi_max = max(list_each)
# where that max v comes from
            vi_back = list_each_back[list_each.index(vi_max)]
            list_recursion.append(vi_max)
            list_recursion_back.append(vi_back)
# the v of each state at the observation time
        list_v.append(list_recursion)
        list_back.append(list_recursion_back)

# end
    list_end = []
    for tag in list_tag_unique:
        if (tag, ".") in dict_tran_prob:
            tran_prob = dict_tran_prob[(tag, ".")]
        else:
            tran_prob = 0.000000000001 / (dict_tag_count[(tag)] + vocab * 0.000000000001) 

        v_end = tran_prob * list_v[-1][list_tag_unique.index(tag)]
        list_end.append(v_end)

    v_final = max(list_end)
    pre_state = list_end.index(v_final)

# the state at the observation time prior to end time
    list_trace = []
    list_trace.append(pre_state)
# list_sequence stores the state of each observation time
    list_sequence = []
    list_range = list(range(len(list_back)))[::-1]
    list_sequence.append(list_tag_unique[pre_state])
    for index in list_range:
        pre = list_back[index][list_trace[list_range.index(index)]]
        list_trace.append(pre)
        list_sequence.insert(0, list_tag_unique[pre])
        
    for index in range(len(list_sequence)):
        list_sequence[index] = sentence[index] + "\t" + list_sequence[index] + '\n'
    list_sequence.append(".\t.\n\n")
    with open ("output_yuanchai.txt", "a") as f:
        for w in list_sequence:
            f.write(w)

for sentence in list_sentence:
    viterbi(sentence)







