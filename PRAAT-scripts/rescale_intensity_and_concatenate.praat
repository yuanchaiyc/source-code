####################################################################################################
#
# This praat script concatenates consonant with vowel after rescaling the intensity of the consonant
# to a certain percentage of the vowel
#
#####################################################################################################

form Rescale intensity
	comment Directory of consonant files
	text consonant_directory E:\fieldwork_xiapu_summer2019\experiment\perception\practice\exp1\19A\consonant_dur_modified\
	comment Directory of sound files
	text sound_directory E:\fieldwork_xiapu_summer2019\experiment\perception\practice\exp1\19A\pitch_resynthesized\
	sentence Sound_file_extension .wav
	comment Directory of finished files
	text end_directory E:\fieldwork_xiapu_summer2019\experiment\perception\practice\exp1\19A\concatenate_with_consonant\
	comment Directory of finished files with silence padding
	text end_padding_directory E:\fieldwork_xiapu_summer2019\experiment\perception\practice\exp1\19A\concatenate_with_silence\
	comment Directory of silence
	text silence_directory E:\fieldwork_xiapu_summer2019\experiment\perception\example_06262021\01_F\silence\
	comment Rescale intensity to this percentage
	positive percentage 0.85
	comment Rescale overall intensity to this dB
	positive rescale 70



endform
# Here, you make a listing of all the sound files in a directory.

Create Strings as file list... list 'sound_directory$'*'sound_file_extension$'
numberOfFiles = Get number of strings


for ifile from 1 to numberOfFiles
	vowelname$ = Get string... ifile
	consonantname$ = "consonant.wav"
	silencenamebefore$ = "silence1.wav"
	silencenameafter$ = "silence2.wav"
	vowel_select$ = vowelname$ - ".wav"
	consonant_select$ = consonantname$ - ".wav"
	silencebefore_select$ = silencenamebefore$ - ".wav"
	silenceafter_select$ = silencenameafter$ - ".wav"
	# A sound file is opened from the listing:

	Read from file... 'consonant_directory$''consonantname$'
	Read from file... 'sound_directory$''vowelname$'
	

	# A sound file is opened from the listing:

	select Sound 'vowel_select$'
	intensity_vowel = Get intensity (dB)
	intensity_consonant = intensity_vowel * percentage

	select Sound 'consonant_select$'
	Scale intensity... intensity_consonant

	
	select Sound 'consonant_select$'
	plus Sound 'vowel_select$'
	Concatenate with overlap: 0.003

	Scale intensity... rescale


		
	Write to WAV file... 'end_directory$''vowelname$'

	Read from file... 'silence_directory$''silencenamebefore$'
	Read from file... 'end_directory$''vowelname$'
	Read from file... 'silence_directory$''silencenameafter$'
	
	select Sound 'silencebefore_select$'
	plus Sound 'vowel_select$'
	plus Sound 'silenceafter_select$'
	Concatenate
	Write to WAV file... 'end_padding_directory$''vowelname$'

	select Sound 'consonant_select$'
	plus Sound 'vowel_select$'
	Remove



	select Strings list

endfor

select all
Remove
