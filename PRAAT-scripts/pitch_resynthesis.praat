#################
#
# This script is modified on the basis of http://phonetics.linguistics.ucla.edu/facilities/acoustic/FlatIntonationSynthesizer.txt
#
# Resynthesize pitch to specific values in batch using PSOLA
# Please create the manipulation file in advance. It allows you to manually correct the pulse tracking in the manipulation
# The current settings is based on Xiapu Min. It resynthesize the same vowel into five different pitch contours. Then for each contour,
# there is a modal version and a version with creaky ending. You can customaize how many time points you want to sample and the value of
# each time point.
#
#
#################

form Resynthize files to have certain pitch height and contour
	comment Directory of sound files
	text sound_directory E:\fieldwork_xiapu_summer2019\experiment\perception\exp1_test_final\01_F_final\vowel_after_window\
	sentence Sound_file_extension .wav
	comment Directory of finished files
	text end_directory E:\fieldwork_xiapu_summer2019\experiment\perception\exp1_test_final\01_F_final\pitch_resynthesized\


endform

	t2_1 = 167.111
	t2_2 = 164.805
	t2_3 = 163.335
	t2_4 = 159.711
	t2_5 = 157.690
	t2_6 = 156.756
	t2_7 = 155.052
	t2_8 = 149.925
	t2_9 = 140.705



	t5_1 = 294.433
	t5_2 = 302.542
	t5_3 = 299.091
	t5_4 = 289.128
	t5_5 = 275.191
	t5_6 = 260.613
	t5_7 = 244.140
	t5_8 = 231.408
	t5_9 = 219.073



	t11_1 = 150.225
	t11_2 = 144.2850
	t11_3 = 139.5290
	t11_4 = 135.6740
	t11_5 = 134.4480
	t11_6 = 134.7670
	t11_7 = 135.8500
	t11_8 = 139.1050
	t11_9 = 140.0200



	t42_1 = 229.706
	t42_2 = 230.509
	t42_3 = 225.730
	t42_4 = 217.605
	t42_5 = 207.998
	t42_6 = 197.850
	t42_7 = 190.574
	t42_8 = 185.523
	t42_9 = 173.005


#44 was modified to be more flat
	t44_1 = 204
	t44_2 = 203
	t44_3 = 200
	t44_4 = 198
	t44_5 = 197
	t44_6 = 196
	t44_7 = 195
	t44_8 = 194
	t44_9 = 193

	gl_10 = 135
	gl_11 = 95
	gl_12 = 110
	gl_13 = 87
	gl_14 = 104
	gl_15 = 84
	gl_16 = 91


# Here, you make a listing of all the sound files in a directory.

Create Strings as file list... list 'sound_directory$'*'sound_file_extension$'
numberOfFiles = Get number of strings


for ifile to numberOfFiles
	filename$ = Get string... ifile
	filename_manipulation$ =  replace$(filename$, ".wav", ".Manipulation", 0)
	filename_sound$ = replace$(filename$, ".wav", "", 0)

	gender$ = right$ (filename_sound$, 1)


	# A sound file is opened from the listing:

	Read from file... 'sound_directory$''filename$'
	Read from file... 'sound_directory$''filename_manipulation$'



	# Create a new pitch tier with the flat pitch:

	select Sound 'filename_sound$'
	start = Get start time
	end = Get end time




	point1 = end/10
	point2 = end*2/10
	point3 = end*3/10
	point4 = end*4/10
	point5 = end*5/10
	point6 = end*6/10
	point7 = end*7/10
	point8 = end*8/10
	point9 = end*9/10


	gl_point10 = end*(1/2 + 1/16)
	gl_point11 = end*(1/2 + 2/16)
	gl_point12 = end*(1/2 + 3/16)
	gl_point13 = end*(1/2 + 4/16)
	gl_point14 = end*(1/2 + 5/16)
	gl_point15 = end*(1/2 + 6/16)
	gl_point16 = end*(1/2 + 7/16)


	
	# Create pitchtier for T2
	Create PitchTier... 'filename_sound$' start end
	Add point... point1 t2_1
	Add point... point2 t2_2
	Add point... point3 t2_3
	Add point... point4 t2_4
	Add point... point5 t2_5
	Add point... point6 t2_6
	Add point... point7 t2_7
	Add point... point8 t2_8
	Add point... point9 t2_9

	
	select Manipulation 'filename_sound$'
	plus PitchTier 'filename_sound$'
	Replace pitch tier
	select Manipulation 'filename_sound$'
	Get resynthesis (PSOLA)
	filename_save$ = replace$(filename$, ".wav", "_2.wav", 0)

	Write to WAV file... 'end_directory$''filename_save$'
	select Sound 'filename_sound$'
	plus PitchTier 'filename_sound$'
	Remove
	select Sound 'filename_sound$'
	Remove

	#Create pitchtier for t2_gl
	Read from file... 'sound_directory$''filename$'
	Create PitchTier... 'filename_sound$' start end
	Add point... point1 t2_1
	Add point... point2 t2_2
	Add point... point3 t2_3
	Add point... point4 t2_4
	Add point... point5 t2_5
	Add point... gl_point10 gl_10
	Add point... gl_point11 gl_11
	Add point... gl_point12 gl_12
	Add point... gl_point13 gl_13
	Add point... gl_point14 gl_14
	Add point... gl_point15 gl_15
	Add point... gl_point16 gl_16


	select Manipulation 'filename_sound$'
	plus PitchTier 'filename_sound$'
	Replace pitch tier
	select Manipulation 'filename_sound$'
	Get resynthesis (PSOLA)
	filename_save$ = replace$(filename$, ".wav", "_2_gl.wav", 0)

	Write to WAV file... 'end_directory$''filename_save$'
	select Sound 'filename_sound$'
	plus PitchTier 'filename_sound$'
	Remove
	select Sound 'filename_sound$'
	Remove


	#Create pitchtier for t5
	Read from file... 'sound_directory$''filename$'
	Create PitchTier... 'filename_sound$' start end
	Add point... point1 t5_1
	Add point... point2 t5_2
	Add point... point3 t5_3
	Add point... point4 t5_4
	Add point... point5 t5_5
	Add point... point6 t5_6
	Add point... point7 t5_7
	Add point... point8 t5_8
	Add point... point9 t5_9


	
	select Manipulation 'filename_sound$'
	plus PitchTier 'filename_sound$'
	Replace pitch tier
	select Manipulation 'filename_sound$'
	Get resynthesis (PSOLA)
	filename_save$ = replace$(filename$, ".wav", "_5.wav", 0)

	Write to WAV file... 'end_directory$''filename_save$'
	select Sound 'filename_sound$'
	plus PitchTier 'filename_sound$'
	Remove
	select Sound 'filename_sound$'
	Remove

	#Create pitchtier for t5_gl
	Read from file... 'sound_directory$''filename$'
	Create PitchTier... 'filename_sound$' start end
	Add point... point1 t5_1
	Add point... point2 t5_2
	Add point... point3 t5_3
	Add point... point4 t5_4
	Add point... point5 t5_5
	Add point... gl_point10 gl_10
	Add point... gl_point11 gl_11
	Add point... gl_point12 gl_12
	Add point... gl_point13 gl_13
	Add point... gl_point14 gl_14
	Add point... gl_point15 gl_15
	Add point... gl_point16 gl_16


	select Manipulation 'filename_sound$'
	plus PitchTier 'filename_sound$'
	Replace pitch tier
	select Manipulation 'filename_sound$'
	Get resynthesis (PSOLA)
	filename_save$ = replace$(filename$, ".wav", "_5_gl.wav", 0)

	Write to WAV file... 'end_directory$''filename_save$'
	select Sound 'filename_sound$'
	plus PitchTier 'filename_sound$'
	Remove
	select Sound 'filename_sound$'
	Remove


	#Create pitchtier for t11
	Read from file... 'sound_directory$''filename$'
	Create PitchTier... 'filename_sound$' start end
	Add point... point1 t11_1
	Add point... point2 t11_2
	Add point... point3 t11_3
	Add point... point4 t11_4
	Add point... point5 t11_5
	Add point... point6 t11_6
	Add point... point7 t11_7
	Add point... point8 t11_8
	Add point... point9 t11_9


	select Manipulation 'filename_sound$'
	plus PitchTier 'filename_sound$'
	Replace pitch tier
	select Manipulation 'filename_sound$'
	Get resynthesis (PSOLA)
	filename_save$ = replace$(filename$, ".wav", "_11.wav", 0)

	Write to WAV file... 'end_directory$''filename_save$'
	select Sound 'filename_sound$'
	plus PitchTier 'filename_sound$'
	Remove
	select Sound 'filename_sound$'
	Remove



	#Create pitchtier for t11_gl
	Read from file... 'sound_directory$''filename$'
	Create PitchTier... 'filename_sound$' start end
	Add point... point1 t11_1
	Add point... point2 t11_2
	Add point... point3 t11_3
	Add point... point4 t11_4
	Add point... point5 t11_5
	Add point... gl_point10 gl_10
	Add point... gl_point11 gl_11
	Add point... gl_point12 gl_12
	Add point... gl_point13 gl_13
	Add point... gl_point14 gl_14
	Add point... gl_point15 gl_15
	Add point... gl_point16 gl_16


	select Manipulation 'filename_sound$'
	plus PitchTier 'filename_sound$'
	Replace pitch tier
	select Manipulation 'filename_sound$'
	Get resynthesis (PSOLA)
	filename_save$ = replace$(filename$, ".wav", "_11_gl.wav", 0)

	Write to WAV file... 'end_directory$''filename_save$'
	select Sound 'filename_sound$'
	plus PitchTier 'filename_sound$'
	Remove
	select Sound 'filename_sound$'
	Remove


	#Create pitchtier for t42
	Read from file... 'sound_directory$''filename$'
	Create PitchTier... 'filename_sound$' start end
	Add point... point1 t42_1
	Add point... point2 t42_2
	Add point... point3 t42_3
	Add point... point4 t42_4
	Add point... point5 t42_5
	Add point... point6 t42_6
	Add point... point7 t42_7
	Add point... point8 t42_8
	Add point... point9 t42_9


	select Manipulation 'filename_sound$'
	plus PitchTier 'filename_sound$'
	Replace pitch tier
	select Manipulation 'filename_sound$'
	Get resynthesis (PSOLA)
	filename_save$ = replace$(filename$, ".wav", "_42.wav", 0)

	Write to WAV file... 'end_directory$''filename_save$'
	select Sound 'filename_sound$'
	plus PitchTier 'filename_sound$'
	Remove
	select Sound 'filename_sound$'
	Remove


	#Create pitchtier for t42_gl
	Read from file... 'sound_directory$''filename$'
	Create PitchTier... 'filename_sound$' start end
	Add point... point1 t42_1
	Add point... point2 t42_2
	Add point... point3 t42_3
	Add point... point4 t42_4
	Add point... point5 t42_5
	Add point... gl_point10 gl_10
	Add point... gl_point11 gl_11
	Add point... gl_point12 gl_12
	Add point... gl_point13 gl_13
	Add point... gl_point14 gl_14
	Add point... gl_point15 gl_15
	Add point... gl_point16 gl_16


	select Manipulation 'filename_sound$'
	plus PitchTier 'filename_sound$'
	Replace pitch tier
	select Manipulation 'filename_sound$'
	Get resynthesis (PSOLA)
	filename_save$ = replace$(filename$, ".wav", "_42_gl.wav", 0)

	Write to WAV file... 'end_directory$''filename_save$'
	select Sound 'filename_sound$'
	plus PitchTier 'filename_sound$'
	Remove
	select Sound 'filename_sound$'
	Remove




	
	#Create pitchtier for t44
	Read from file... 'sound_directory$''filename$'
	Create PitchTier... 'filename_sound$' start end
	Add point... point1 t44_1
	Add point... point2 t44_2
	Add point... point3 t44_3
	Add point... point4 t44_4
	Add point... point5 t44_5
	Add point... point6 t44_6
	Add point... point7 t44_7
	Add point... point8 t44_8
	Add point... point9 t44_9



	select Manipulation 'filename_sound$'
	plus PitchTier 'filename_sound$'
	Replace pitch tier
	select Manipulation 'filename_sound$'
	Get resynthesis (PSOLA)
	filename_save$ = replace$(filename$, ".wav", "_44.wav", 0)

	Write to WAV file... 'end_directory$''filename_save$'
	select Sound 'filename_sound$'
	plus PitchTier 'filename_sound$'
	Remove
	select Sound 'filename_sound$'
	Remove


	#Create pitchtier for t44_gl
	Read from file... 'sound_directory$''filename$'
	Create PitchTier... 'filename_sound$' start end
	Add point... point1 t44_1
	Add point... point2 t44_2
	Add point... point3 t44_3
	Add point... point4 t44_4
	Add point... point5 t44_5
	Add point... gl_point10 gl_10
	Add point... gl_point11 gl_11
	Add point... gl_point12 gl_12
	Add point... gl_point13 gl_13
	Add point... gl_point14 gl_14
	Add point... gl_point15 gl_15
	Add point... gl_point16 gl_16



	select Manipulation 'filename_sound$'
	plus PitchTier 'filename_sound$'
	Replace pitch tier
	select Manipulation 'filename_sound$'
	Get resynthesis (PSOLA)
	filename_save$ = replace$(filename$, ".wav", "_44_gl.wav", 0)

	Write to WAV file... 'end_directory$''filename_save$'
	select Sound 'filename_sound$'
	plus PitchTier 'filename_sound$'
	Remove
	select Sound 'filename_sound$'
	Remove

	select Strings list


endfor

select all
Remove
