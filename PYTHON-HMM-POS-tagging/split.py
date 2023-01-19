list_original = []
with open ("berp-POS-train.txt", "r") as f:
    for line in f:
        list_original.append(line)
# convert file into sentence list
list_sentence = []
start = 0
# save each sentence as a separate list into list_sentence. Each observation is an item in the list
for index in range(len(list_original)):
    if list_original[index] == ".\t.\n":
        list_sentence.append(list_original[start:(index+1)])
        start = index + 2
for sentence in list_sentence:
    sentence.append('\n')
dev_index = range(0, len(list_sentence), 5)

dev_list = []
train_list = []
for i in list_sentence:
    if list_sentence.index(i) in dev_index:
        dev_list.append(i)
    else:
        train_list.append(i)
    
print (len(list_sentence))
print (len(train_list))
print (len(dev_list))


with open("train.txt", "w") as f:
    for sentence in train_list:
        for item in sentence:
            f.write(item)

with open('standard.txt', 'w') as f:
    for sentence in dev_list:
        for item in sentence:
            f.write(item)


list_observation = []
for sentence in dev_list:
    for word in sentence:
        if word != "\n":
            list_observation.append(word.split("\t")[0] + '\n')
            
        else:
            list_observation.append(word)
with open("dev.txt", "w") as f:
    for item in list_observation:
        f.write(item)
