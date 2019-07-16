import datetime
import random

date = datetime.datetime.now()
f = open("./answer.txt",'w')
t = [0,1,2,3,4,5,6,7,8,9]
ans = random.sample(t,5)
for it in ans:
    f.write(str(it))
print(ans)
f.close()

    
