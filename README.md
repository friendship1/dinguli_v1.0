# dinguli_v1.0
DGIST cafeteria menu notification service

<div>
 <img src="https://user-images.githubusercontent.com/23720749/61308417-2d627c80-a82b-11e9-9ebc-3bacd720908f.png" width="120%"></img>
</div>

crontab을 이용해 주기적으로 뭔가를 돌리는게 떡칠되어있다. crontab을 쓰지 않고 프로그램으로 따로 뒀으면 더 관리가 편했을텐데 아쉽다.



parse_v2.py는 프로그램을 만드는 프로그램이라는 점에서 상당히 기괴한데, 처음에는 성능상 이점을 위해 그렇게 했지만, 지금 생각해보면 굳이 저렇게 해야 했나 싶다. 나중에 텍스트가 아니라 html으로 식단표를 보여주는 방식으로 변경되면서, mktxt2.py, mktxt3.py, parse_v2.py는 필요가 없어졌지만, 아직도 그대로 있다. 아마 약간 오류가 있을거다.
