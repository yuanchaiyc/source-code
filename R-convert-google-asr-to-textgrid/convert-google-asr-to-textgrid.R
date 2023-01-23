library(dplyr)
library(ggplot2)
library(reshape2)
library(stringr)
library(readr)

setwd("D:/Research/R codes functional")
transcript = "transcripts_SA1.txt"

convert_to_textgrid <- function(transcript){
  df <- readLines(transcript) %>%
    colsplit(., pattern = ": ", names = c("coordinate","value"))
  
  df = as.data.frame(sapply(df, function(x) gsub("\"", "", x)))
  df <-as.data.frame(apply(df, 2, str_remove_all, " "))
  df$value = gsub("s","",df$value)
  df$value = gsub(",","",df$value)
  
  df$index = ifelse(grepl(pattern="startTime", df$coordinate), 1, 
                    ifelse(grepl(pattern="endTime", df$coordinate), 2,
                           ifelse(grepl(pattern="word$", df$coordinate), 3, 0)))
  
  
  df.interval = df %>%
    filter(index != 0) %>%
    mutate(group = rep(1:(nrow(df.interval)/3), each = 3))
  
  df.interval$value[df.interval$index == 3] = paste("\"", df.interval$value[df.interval$index == 3], "\"", sep = "")
  
  df.interval = df.interval %>%
    group_by(group) %>%
    arrange(index, .by_group = TRUE) %>%
    ungroup() %>%
    dplyr::select(value)
  
  resultEndTime = df$value[df$coordinate == "resultEndTime"]
  interval = as.character(nrow(df.interval)/3)
  
  df.header = data.frame(value = c("File type = \"ooTextFile\"","Object class = \"TextGrid\"", "","0", resultEndTime, "<exists>", "1", "\"IntervalTier\"", "\"words\"", "0", resultEndTime, interval))
  
  df.output = rbind(df.header, df.interval)
  rownames(df.output)<-NULL
  colnames(df.output)<-NULL
  return(df.output)
}

df.output = convert_to_textgrid(transcript)

write.table(df.output,"output.TextGrid",row.names=FALSE,sep="\t", quote = FALSE)

