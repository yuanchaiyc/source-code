
leftboundary = 0
rightboundary = 0.45714285714285713
zoomleft = 0.19767103675526965
zoomright = 0.22159329905874273
spectrogram_frequency_range = 5000
left_f0_range = 75
right_f0_range = 300
picture_width = 2.5
picture_height = 1.5
start_point = 0.5
horizontal_margin = 0.5
vertical_margin = 0.5
directory$ = "E:\UCLA\creaky voice with Jody and Marc_1030\creaky voice with Jody and Marc\figure\"






Font size... 10
Line width... 1

Erase all
Colour... Black
name$ = "8a_Miao_M2_ki44_01"
nameegg$ = "8a_Miao_M2_ki44_01_EGG"


#Get duration
select Sound 'name$'
end = rightboundary - leftboundary
endcharacter$ = fixed$(end, 2)

zoomleftactual = zoomleft - leftboundary
zoomrightactual = zoomright - leftboundary
zoomleftcharacter$ = fixed$(zoomleftactual, 2)
zoomrightcharacter$ = fixed$(zoomrightactual, 2)




lefttop_x1 = start_point
lefttop_x2 = start_point + picture_width 
lefttop_y1 = start_point
lefttop_y2 = start_point + picture_height

midtop_x1 = start_point + picture_width + horizontal_margin
midtop_x2 = start_point + picture_width*2 + horizontal_margin
midtop_y1 = lefttop_y1
midtop_y2 = lefttop_y2

righttop_x1 = start_point + picture_width*2 + horizontal_margin*2
righttop_x2 = start_point + picture_width*3 + horizontal_margin*2
righttop_y1 = lefttop_y1
righttop_y2 = lefttop_y2

leftbottom_x1 = lefttop_x1
leftbottom_x2 = lefttop_x2
leftbottom_y1 = start_point + picture_height + vertical_margin
leftbottom_y2 = start_point + picture_height*2 + vertical_margin

midbottom_x1 = midtop_x1
midbottom_x2 = midtop_x2
midbottom_y1 = leftbottom_y1
midbottom_y2 = leftbottom_y2

rightbottom_x1 = righttop_x1
rightbottom_x2 = righttop_x2
rightbottom_y1 = leftbottom_y1
rightbottom_y2 = leftbottom_y2






#draw waveform lefttop
select Sound 'name$'
Select inner viewport... lefttop_x1 lefttop_x2 lefttop_y1 lefttop_y2
Plain line
Draw... leftboundary rightboundary 0 0 no curve
Draw inner box
One mark bottom... leftboundary no no no 0
One mark bottom... rightboundary no no no 'endcharacter$'


#draw spectrogram midtop
select Sound 'name$'
To Spectrogram... 0.005 spectrogram_frequency_range 0.00001 1 Gaussian
select Spectrogram 'name$'
Select inner viewport... midtop_x1 midtop_x2 midtop_y1 midtop_y2
Paint... leftboundary rightboundary 0 0 100 yes 50 picture_width 0 no
Draw inner box
One mark bottom... leftboundary no no no 0
One mark bottom... rightboundary no no no 'endcharacter$'


#draw egg righttop
select Sound 'nameegg$'
Select inner viewport... righttop_x1 righttop_x2 righttop_y1 righttop_y2
Plain line
Draw... leftboundary rightboundary 0 0 no curve
Draw inner box
One mark bottom... leftboundary no no no 0
One mark bottom... rightboundary no no no 'endcharacter$'


#draw zoomed in waveform leftbottom
select Sound 'name$'
Select inner viewport... leftbottom_x1 leftbottom_x2 leftbottom_y1 leftbottom_y2
Plain line
Draw... zoomleft zoomright 0 0 no curve
Draw inner box
One mark bottom... zoomleft no no no 'zoomleftcharacter$'
One mark bottom... zoomright no no no 'zoomrightcharacter$'



#draw zoomed in spectrogram midbottom
select Sound 'name$'
To Spectrogram... 0.005 spectrogram_frequency_range 0.00001 1 Gaussian
select Spectrogram 'name$'
Select inner viewport... midbottom_x1 midbottom_x2 midbottom_y1 midbottom_y2
Paint... zoomleft zoomright 0 0 100 yes 50 picture_width 0 no
Draw inner box
One mark bottom... zoomleft no no no 'zoomleftcharacter$'
One mark bottom... zoomright no no no 'zoomrightcharacter$'



#draw zoomed in egg rightbottom
select Sound 'nameegg$'
Select inner viewport... rightbottom_x1 rightbottom_x2 rightbottom_y1 rightbottom_y2
Plain line
Draw... zoomleft zoomright 0 0 no curve
Draw inner box
One mark bottom... zoomleft no no no 'zoomleftcharacter$'
One mark bottom... zoomright no no no 'zoomrightcharacter$'


#draw zoom line
#first column
Select inner viewport... lefttop_x1 lefttop_x2 lefttop_y1 leftbottom_y2
Axes... leftboundary rightboundary leftbottom_y2 lefttop_y1
Dashed line
Line width... 3
Draw line... zoomleft lefttop_y2 leftboundary leftbottom_y1
Draw line... zoomright lefttop_y2 rightboundary leftbottom_y1

#second column
Select inner viewport... midtop_x1 midtop_x2 midtop_y1 midbottom_y2
Axes... leftboundary rightboundary midbottom_y2 midtop_y1
Draw line... zoomleft midtop_y2 leftboundary midbottom_y1
Draw line... zoomright midtop_y2 rightboundary midbottom_y1

#third column
Select inner viewport... righttop_x1 righttop_x2 righttop_y1 rightbottom_y2
Axes... leftboundary rightboundary rightbottom_y2 righttop_y1
Dashed line
Line width... 3
Draw line... zoomleft righttop_y2 leftboundary rightbottom_y1
Draw line... zoomright righttop_y2 rightboundary rightbottom_y1
Solid line
Line width... 1



#draw f0
select Pitch 'name$'
Select inner viewport... midtop_x1 midtop_x2 midtop_y1 midtop_y2
Axes... leftboundary rightboundary leftbottom_y2 lefttop_y1
Text special... leftboundary-0.06 left 2.8 half Times 10 90 F0 (Hz)
Speckle size... 2
Colour... Blue
Speckle... leftboundary rightboundary left_f0_range right_f0_range no
Draw inner box
Marks left... 6 yes no no

outputpngfile$ = directory$+name$+".png"
outputepsfile$ = directory$+name$+".eps"

Select inner viewport... lefttop_x1 righttop_x2 lefttop_y1 rightbottom_y2
Save as 600-dpi PNG file... 'outputpngfile$'
Save as EPS file... 'outputepsfile$'